import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LetsShopService } from '../../Services/lets-shop.service';
import {ProductsDetails} from '../../Models/ProductsDetails';
import {ProductsService} from '../../Services/products.service';

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

  constructor(private route:ActivatedRoute,
              private letsShopService:LetsShopService,
              private productsService:ProductsService) 
              {}

ngOnInit() 
 {

  //Get Product ID from route
  this.route.params
      .subscribe(parameter=>
      {
        //Service call to search for product based on product ID
        this.productDetails=this.productsService
        .getProductDetailsByID(JSON.stringify(parameter.id));                  
      });
      this.getImages()
 }
 //Method to retrieve images using product id
 getImages()
 {
   this.imagePath="assets/Images/"+this.productDetails.ProductID+".jpg";
 }
}

