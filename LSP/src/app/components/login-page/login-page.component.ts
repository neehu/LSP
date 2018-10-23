import { Component, OnInit,Output } from '@angular/core';
import { RouterModule,Router } from '@angular/router';

import { LetsShopService } from '../../Services/lets-shop.service';
import {CustomerDetails} from '../../Models/CustomerDetails';
import {ValidationMessages} from '../../Constants/ValidationMessages';
import {ToastServiceService} from '../../Services/toast-service.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
//Variables to store username and password values

userName:string;
password:string;
//Variable to store response from server
response:string;
customerDetails=new CustomerDetails();


  constructor( private letsShopService:LetsShopService,
              private router:Router,
              private toastService:ToastServiceService) { }
  
ngOnInit()
{

}

//Method to Sumbit Form Data 
onSubmit(event:Event)
{
  console.log(event);
  //Service call to check loginData
  this.submitFormData();
} 
  //Service call to check loginData
  submitFormData()
{
  this.letsShopService.checkLoginData(this.userName,this.password)
                      .subscribe(data=>{
                      //Store customer details
                      this.customerDetails=data; 
                      this.response=JSON.stringify(data);
                      //Display a success message
                      this.successMessage();
                      //Navigate to home page with UserName appended to url
                      this.router.navigate(['/Home',this.customerDetails.UserName]);
                    });
}

getUserName(inputValue:string)
{
  this.userName=inputValue;
}

getPassword(inputValue:string)
{
  this.password=inputValue;
}
//Method to display a success message
successMessage()
{
  this.toastService.success('Log In Success');
}
}

