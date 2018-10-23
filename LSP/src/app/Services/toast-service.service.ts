import { Injectable } from '@angular/core';
import { Observable, Subject} from 'rxjs';
import {Message} from '../Models/Message'
import {getMessagesUrl,postMessagesUrl,
        dismissMessageUrl,options,content,style,messageID} from '../Constants/ToastMessagesUrls'
import { HttpClient, HttpHeaders, HttpErrorResponse} from  '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Router, NavigationStart } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ToastServiceService {

  httpOptions=options;
  url:string;
  message:Message[];

private Subject =new Subject<Message>();
private dismissed=false;

  constructor(private httpClient:HttpClient,private router:Router) {
   }  

  success(message:string,dismissed=false)
  {
    this.dismissed=dismissed;
    this.Subject.next({Style:'Success',Content:message,Dismissed:dismissed});
  }

  error(message:string,dismissed=false)
  {
    this.dismissed=dismissed;
    this.Subject.next({Style:'Danger',Content:message,Dismissed:dismissed});
  }

  getMessage():Observable<Message>
  {
    return this.Subject.asObservable();
  }

  dismissMessage(dismissed=true)
  {
    return this.Subject.next({Style:'Dismiss',Content:null,Dismissed:true})
  }
}
