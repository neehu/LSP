import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LetsShopService } from '../../Services/lets-shop.service';
import {ProductsDetails} from '../../Models/ProductsDetails';
import {ProductsService} from '../../Services/products.service';
import { CustomerDetails } from '../../Models/CustomerDetails';
import { ToastServiceService } from '../../Services/toast-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {

//Variable to store the products
productDetails:ProductsDetails;

//Variable to get the product image
imagePath:string;
quantity:number;
@ViewChild('wishButton') wishButton:HTMLButtonElement; 

  constructor(private route:ActivatedRoute,
              private letsShopService:LetsShopService,
              private productsService:ProductsService,
              private toastMessenger:ToastServiceService) 
              {}

ngOnInit() 
{
//Get Product ID from route
this.getProductData();
}

 //Method to get productID
 getProductData()
 {
  this.productDetails=this.route.snapshot.data.data;
  console.log(this.productDetails);
 } 

 addItemsCart()
 {
   //Disable button if Quantity is null
   if(this.validateQuantity())
   {
  //To get customer name from session storage
  var customerName=<CustomerDetails>JSON.parse(sessionStorage.getItem("currentUser"));
  //To get the product ID 
  var selectedProductID=<number>JSON.parse(this.route.snapshot.paramMap.get("id"));
  //Post the product details to web api
  this.productsService.addItemsToCart(selectedProductID,customerName.CustomerID,this.quantity).subscribe();
  //Display Sucess Message
  this.toastMessenger.success(this.productDetails.ProductName + "Sucessfully Added to List");
   }
}

validateQuantity()
{
  if(this.quantity==undefined)
  {
    this.toastMessenger.error("Please Fill in the Quantity");
    return false; 
  }
  return true;
}
}

