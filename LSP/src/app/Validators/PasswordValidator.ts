import {  FormGroup } from '@angular/forms';
import { SERVER_TRANSITION_PROVIDERS } from '@angular/platform-browser/src/browser/server-transition';


export class PasswordValidator
{
  
static validate(signUpFormGroup: FormGroup)
{
    let password = signUpFormGroup.controls.password.value;
    let confirmPassword=signUpFormGroup.controls.confirmPassword.value;
     // value not equal in verify control
     if (password!==confirmPassword) {
        return {doesMatchPassword: true};
      }
      return null;
    }
  }
  
   