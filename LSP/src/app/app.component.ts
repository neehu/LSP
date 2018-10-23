import { Component } from '@angular/core';
import { ToastServiceService } from './Services/toast-service.service';
import {Message} from './Models/Message'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';
  toastMessages:Message[];
  constructor( private toastService:ToastServiceService)
  {
    
  }
  ngOnInit()
{}

}

