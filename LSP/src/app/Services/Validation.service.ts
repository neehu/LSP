import { Injectable,Input } from '@angular/core';
import { HttpClient, HttpHeaders} from  '@angular/common/http';
import {googleApi,apiKey}from '../Constants/ServiceUrls';
import { debounceTime } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { PredictionModel } from '../Models/PredictionsModel';
import { FormControl, FormGroup } from '@angular/forms';
import { SignUpFormComponent } from '../components/sign-up-form/sign-up-form.component';
import { BehaviorSubject,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
@Input() password:FormControl;
@Input() confirmPassword:FormControl;

  constructor(private httpClient:HttpClient) {
   
   }

  public matchingConfirmPassword()
  {
      if(this.password===this.confirmPassword.value)
      {
        return null;
      }
      else 
      return  of(true)
  }
}
