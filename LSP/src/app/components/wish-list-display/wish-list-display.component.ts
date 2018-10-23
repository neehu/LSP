import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../Services/products.service';
import { CustomerDetails } from '../../Models/CustomerDetails';
import { ProductsDetails } from '../../Models/ProductsDetails';
import { Router, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { ToastServiceService } from '../../Services/toast-service.service';
@Component({
  selector: 'app-wish-list-display',
  templateUrl: './wish-list-display.component.html',
  styleUrls: ['./wish-list-display.component.css']
})
export class WishListDisplayComponent implements OnInit {

//Variable to store list of items
listOfItems:ProductsDetails[]=new Array<ProductsDetails>();

//Variable to store customer ID
loggedINUser=<CustomerDetails>JSON.parse(sessionStorage.getItem("currentUser"));
  constructor(private productService:ProductsService,
              private route:Router,
              private activatedRoute:ActivatedRoute,
              private toastMessenger:ToastServiceService) { 

  }

  ngOnInit()
  {
    this.listOfItems=<ProductsDetails[]>(this.activatedRoute.snapshot.data.data);
  }

  navigateToProductPage(productID:number)
  {
    this.route.navigate(['Products',productID]);
  }
  deleteProduct(productID:number)
  {
    let productName=this.searchforProductName(productID);
    this.productService.deleteProduct(this.loggedINUser.CustomerID,productID).subscribe();
    this.route.navigate(['Home']);
    //Get the product name
    
    this.toastMessenger.success('Item'+' '+ productName+' '+'is removed')
  }

  searchforProductName(productID:number)
  {
    let product=this.listOfItems.find(x=>x.ProductID==productID);
    return product.ProductName;
  }
  }
