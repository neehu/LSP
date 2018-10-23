import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';
import {checkLoginUrl,userName,password,submitFormUrl,emailAddress,
        phoneNumber, city,address,options,changeEmailAddress,newEmailAddress,postCustomerDetails} 
        from '../Constants/ServiceUrls';
import { map } from 'rxjs/operators';
import { CustomerDetails } from '../Models/CustomerDetails';
import { Observable, BehaviorSubject } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { ToastServiceService } from './toast-service.service';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class LetsShopService {

url:string;
httpHeaderOptions=options;
response:string;
customerDetails:CustomerDetails;

//Observable to get the Loggedin User Details
private messageSource = new BehaviorSubject<CustomerDetails>(new CustomerDetails());
currentMessage = this.messageSource.asObservable();

constructor(private httpClient:HttpClient,
            private toastService:ToastServiceService,
            private router:Router) { }

//Method to check login data
  checkLoginData(username:string,enteredPassword:string):Observable<CustomerDetails>
  {
    this.url=checkLoginUrl+userName+username+"&"+password+enteredPassword;
    return this.httpClient.get<CustomerDetails>(this.url,this.httpHeaderOptions)
                            .pipe(map(response=>{
                            this.customerDetails=response;
                            if(response && response.AccessToken)
                            {  
                              sessionStorage
                              .setItem('currentUser',JSON.stringify(this.customerDetails)); 
                            }
                            this.getUserName();     
                            return response;
                          }));     
  }
  
  //To get userName from url
  getUserName() {
    let result=sessionStorage.getItem('currentUser');
    this.messageSource.next(JSON.parse(result));
    return JSON.parse(result);
  }

  //Method to get customerdetails

  getCustomerDetails(customerID:number)
  {
    let url=postCustomerDetails+customerID;
    return this.httpClient.get<CustomerDetails>(url,this.httpHeaderOptions);
    
  }

  //Method to log out
  logout()
  {
    //Remove details from local storage
    sessionStorage.removeItem('currentUser');
    sessionStorage.clear();
  }

   
  //Method to  submit Form Data
  submitFormData(signUpForm:FormGroup)   
  {
    
    let parameters=userName+signUpForm.controls.userName.value+
    "&"+password+signUpForm.controls.password.value+
    "&"+emailAddress+signUpForm.controls.emailAddress.value+
    "&"+phoneNumber+signUpForm.controls.phoneNumber.value+
    "&"+city+signUpForm.controls.city.value+      
    "&"+address+signUpForm.controls.address.value;


    this.url=submitFormUrl+parameters;
     return this.httpClient.post<CustomerDetails>(this.url,this.httpHeaderOptions)
            .pipe(map ((res:Response)=>
            {
              if(res)
              {
                this.toastService.success("Registered Succesfully");
                this.router.navigateByUrl("/Login");
              }
            }));
  }

  gettlistofCities():Observable<string[]>
  {
    return this.httpClient.get<string[]>("./assets/cities-name-list.json");
  }

  getlistofStates():Observable<string[]>
  {
    return this.httpClient.get<string[]>("./assets/States.json");
  }

  //change Email Address
  changeEmailAddress(value:string,customerID:number)
  {
    let url=changeEmailAddress+customerID+"&"+newEmailAddress+value;
    return this.httpClient.get(url,this.httpHeaderOptions);
}
}