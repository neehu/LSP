import { Component, OnInit } from '@angular/core';
import{emailPattern} from '../../Constants/ValidationMessages';
import {LetsShopService} from '../../Services/lets-shop.service'
import { CustomerDetails } from '../../Models/CustomerDetails';
import { ToastServiceService } from '../../Services/toast-service.service';
import { HttpErrorResponse } from '../../../node_modules/@angular/common/http';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-change-email-address',
  templateUrl: './change-email-address.component.html',
  styleUrls: ['./change-email-address.component.css']
})
export class ChangeEmailAddressComponent implements OnInit {

  emailPattern=new RegExp(emailPattern);
  updatedValue:string;
  constructor(private letsShopService:LetsShopService,
              private toastMessageService:ToastServiceService,
              private router:Router) { }

  ngOnInit() {
  }

  setValue(data:string)
  {
    this.updatedValue=data;
  }
  updateChanges()
  {
    let customerDetails=<CustomerDetails>JSON.parse(sessionStorage.getItem('currentUser'));
    this.letsShopService.changeEmailAddress(this.updatedValue,customerDetails.CustomerID).subscribe(data=>
      {
        this.toastMessageService.success("Email Changed");
        this.router.navigate(['Home']);
      });
      
  }
}
