import { Component, OnInit } from '@angular/core';
import { LetsShopService } from '../../../Services/lets-shop.service';
import { CategoryDetails } from '../../../Models/CategoryDetails';
import { ProductsDetails } from '../../../Models/ProductsDetails';
import { ProductsService } from '../../../Services/products.service';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css']
})
export class DropDownComponent implements OnInit {
//Variables to store list of categories
  listofCategories:CategoryDetails[];
//Variables to store list of products
  listofproductNames:ProductsDetails[];

  constructor(private letsShopService:LetsShopService, 
              private productsService:ProductsService) { }

  ngOnInit() {

  //Service call to get list of Categories
  this.productsService.getListOfCategories()
                      .subscribe((response:CategoryDetails[])=>{
                      this.listofCategories=response;
                      });
}

getProductNames( categoryID:string,event:Event)
{
  //To get list of Products
  //Clear the contents
  this.listofproductNames=[];

  //Service call to get list of products
    this.productsService.getProducts().subscribe();
  //Service call to get list of products based on category
  this.listofproductNames=this.productsService.getlistOfProductNames(categoryID);
}
}
