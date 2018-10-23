import { Component, OnInit } from '@angular/core';
import { CustomerDetails } from '../../Models/CustomerDetails';
import { LetsShopService } from '../../Services/lets-shop.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
customerDetails:CustomerDetails;
  constructor(private letsShopService:LetsShopService) { }

  ngOnInit() {
    this.customerDetails=<CustomerDetails>JSON.parse(sessionStorage.getItem('currentUser'));
    this.letsShopService.getCustomerDetails(this.customerDetails.CustomerID)
    .subscribe(data=>{
      this.customerDetails=data;
      sessionStorage.setItem('currentUser',JSON.stringify(this.customerDetails));
    });
    
  }

}
