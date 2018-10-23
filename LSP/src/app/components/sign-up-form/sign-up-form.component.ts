import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { LetsShopService } from '../../Services/lets-shop.service';
import {inputsFieldConstraints,
        emailPattern} from '../../Constants/ValidationMessages';
import { ToastServiceService } from '../../Services/toast-service.service';
import { Router } from '@angular/router';
import {PasswordValidator} from '../../Validators/PasswordValidator';
import {States} from '../../Models/States';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {

//Form Controls
phoneNumberFormControl: FormControl;
signUpForm:FormGroup;
userNameFormControl:FormControl;
passwordFormControl:FormControl;
emailAddressFormControl:FormControl;
confirmPasswordFormControl:FormControl;
cityFormControl:FormControl;
addressFormControl:FormControl;
stateFormControl:FormControl;
submitButton:FormControl;

//Variable to check if form is submitted
submitted:boolean=false;

//To display error messages
 result;

 //To store List of Cities
 cities:string[]=[];
 states:string[]=[];

 //Password and Email Validation Patterns
 passwordpattern=new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})"); 
 emailPattern:string=emailPattern;
phoneNumberpattern=new RegExp("^\d{10}");

constructor(private letsShopService:LetsShopService
  ,private formBuilder:FormBuilder,
  private toastService:ToastServiceService,
  private router:Router) {  
}

ngOnInit() 
{
  this.buildForm();
  this.serviceCalls(); 
}

serviceCalls()
{
  //Service call to get a list of cities
  this.letsShopService.gettlistofCities()
  .subscribe(data=>{
            this.cities=data;
            });

  this.letsShopService.getlistofStates()
  .subscribe(data=>{
            this.states=data;
            console.log(this.states);
  });

}

SubmitDetails()
{
  if(this.signUpForm.valid)
  {
    this.letsShopService.submitFormData(this.signUpForm).subscribe();
  }
  else 
  this.signUpForm.controls.submitButton.disable();
}

buildForm()
{

  this.signUpForm=this.formBuilder.group ({
  userName:[this.userNameFormControl,[
            Validators.required,
            Validators.minLength(inputsFieldConstraints.userNameMinimunLength),
            Validators.maxLength(inputsFieldConstraints.userNameMaximumLength)
            ]],
  password:[
            this.passwordFormControl,[
            Validators.required,
            Validators.minLength(inputsFieldConstraints.passwordMinimumLength),
            Validators.pattern(this.passwordpattern)
            ]],
  emailAddress:[
                this.emailAddressFormControl,[
                Validators.required,Validators.email,
                Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})')
              ]],
  phoneNumber:[
              this.phoneNumberFormControl,[
              Validators.required,
              Validators.pattern('^\d{10}')                
              ]],
  confirmPassword:[
                  this.confirmPasswordFormControl,
                  Validators.required,
                  ],
  city:[
        this.cityFormControl,Validators.required
       ],
  address:[
          this.addressFormControl,Validators.required
          ],
  state:[
        this.stateFormControl,Validators.required
        ],
  submitButton:['Submit',this.submitButton]},
  {validator:PasswordValidator.validate.bind(this)
});

}

get formControls()
{
return this.signUpForm.controls;
}
}



