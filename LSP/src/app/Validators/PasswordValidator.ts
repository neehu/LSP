import {  FormGroup, FormControl } from '@angular/forms';
import {FormData} from '../Models/FormData'


export class PasswordValidator
{
static validate(userForm:FormGroup)
{
 
  let controlsValue=<FormData>(userForm.value);
 let firstValue=  controlsValue.firstUserInput;
 let secondValue=controlsValue.secondUserInput;
  // value not equal in verify control
     if (firstValue!==secondValue) {
        return {doesMatchPassword: true};
      }
      return null;
    }
}
