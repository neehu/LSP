import { Resolve, ActivatedRoute, ActivatedRouteSnapshot } from "@angular/router";
import {ProductsDetails} from '../../Models/ProductsDetails'
import {ProductsService} from '../../Services/products.service';
import { Component } from '@angular/core';

@Component({
    selector: 'app-product-resolver',
    templateUrl: './product-resolver.component.html'
  })

export class ProductResolver implements Resolve<ProductsDetails> {

    data:ProductsDetails;
    constructor(public productService:ProductsService
                )
    {}

    resolve(route:ActivatedRouteSnapshot)
    {
        this.productService.getProducts().subscribe();
         this.data=this.productService.getProductDetailsByID(JSON.stringify(route.paramMap.get('id')));                  
        this.data.ImagePath="assets/Images/"+this.data.ProductID+".jpg";;
        return this.data;
    }

}
