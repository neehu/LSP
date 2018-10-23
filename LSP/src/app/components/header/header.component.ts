import { Component, OnInit,OnDestroy} from '@angular/core';
import { Router} from '@angular/router';
import { LetsShopService } from '../../Services/lets-shop.service';
import { Subscription, EMPTY, empty } from 'rxjs';
import { CustomerDetails } from '../../Models/CustomerDetails';
import {ToastServiceService} from '../../Services/toast-service.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy  {

//Variable to store CustomerDetails
customerDetails=new CustomerDetails();

//Subscription to get loged in username
subscription:Subscription;

constructor(private router:Router,
            private letsShopService:LetsShopService,
            private toastService:ToastServiceService)
           {}


navigateTo()
{
  //Navigate to Login Component on click
  this.router.navigateByUrl('Login');
}

ngOnInit() 
{
  //Get UserName from local storage
  this.letsShopService.currentMessage
  .subscribe(response=>
    {
      this.customerDetails=response;
      if(JSON.stringify(this.customerDetails)==="{}")
  {
    this.customerDetails=JSON.parse(sessionStorage.getItem('currentUser')); 
  }
});
  
}

ngOnDestroy()
{
  this.subscription.unsubscribe();
}

//Method to log out
logout()
{
  this.letsShopService.logout();
  //Navigate to home page on log out
  this.router.navigateByUrl('Home');
  //Clear the user details
  this.customerDetails=new CustomerDetails();
  //Show a log out sucess message
  this.toastService.success('Logged out Sucessfully');
  
}
}

