import { Component } from '@angular/core';
import {Resolve} from "@angular/router";
import { ProductsDetails } from '../../Models/ProductsDetails';
import {ProductsService} from '../../Services/products.service';


@Component({
  selector: 'app-home-page-resolver',
  templateUrl: './home-page-resolver.component.html',
  styleUrls: ['./home-page-resolver.component.css']
})
export class HomePageResolverComponent implements Resolve<ProductsDetails[]> {

  productList:ProductsDetails[]=[];
  constructor(public productsService:ProductsService) { }

resolve()
{
 return this.productsService.getProducts();
 
}

}
