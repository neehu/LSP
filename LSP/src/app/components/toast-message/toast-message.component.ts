import { Component, OnInit } from '@angular/core';
import {ToastServiceService} from '../../Services/toast-service.service'
import { Message } from '../../Models/Message';
import { Observable,interval,TimeInterval,merge } from 'rxjs';
import { map } from 'rxjs/operators'


@Component({
  selector: 'app-toast-message',
  templateUrl: './toast-message.component.html',
  styleUrls: ['./toast-message.component.css']
})
export class ToastMessageComponent implements OnInit {
toastMessages:Message;

constructor(private toastService:ToastServiceService) { 

}

  ngOnInit() 
{
this.toastService.getMessage().subscribe((response)=> 
 {
   this.toastMessages=response;
  console.log(this.toastMessages);
 });

 interval(5000).subscribe(()=> {
   this.toastService.dismissMessage();
 })
}
}
