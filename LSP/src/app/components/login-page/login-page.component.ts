import { Component, OnInit,Output } from '@angular/core';
import { RouterModule,Router } from '@angular/router';
import {FormControl,FormGroup,
        Validators,FormBuilder,AbstractControl} from '@angular/forms';
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

//Defining a FormGroup for loginForm
loginForm:FormGroup;

//FormControls for Inputs
userNameFormControl:FormControl;
passwordFormControl:FormControl;
submitButtonControl:FormControl;

//Variable to store response from server
response:string;
customerDetails=new CustomerDetails();

//To set validation messages
userNameInValid:boolean=false;
passwordInValid:boolean=false;
validationMessage=ValidationMessages;
submitted:boolean=false;
formValidated:boolean=false;

//to store userName
userName:string;

  constructor( private letsShopService:LetsShopService,
              private formbuilder:FormBuilder,
              private router:Router,
              private toastService:ToastServiceService) { }
  
ngOnInit()
{
  // Build LoginForm
  this.buildForm();
}

//Method to Sumbit Form Data 
onSubmit()
{
  this.submitted=true;

   //Check if form is valid
  if(this.loginForm.invalid)
  {
    return;
  }

  //Service call to check loginData
  this.submitFormData();
} 
  //Service call to check loginData
  submitFormData()
{
  this.letsShopService.checkLoginData(this.loginForm.controls.userName.value,
                      this.loginForm.controls.password.value)
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

//Method to build LoginForm
buildForm()
{
  this.loginForm=this.formbuilder.group
  ({
    userName:[this.userNameFormControl,
             [Validators.required]],
    password:[this.passwordFormControl,
             [Validators.required]],
    submit:['Submit',this.submitButtonControl],
  });
}


//Method to display a success message
successMessage()
{
  this.toastService.success('Log In Success');
}

get formControls()
{
    return this.loginForm.controls;
}

}

