import { Component, OnInit}  from '@angular/core';
import { LetsShopService } from '../../Services/lets-shop.service';
import { ProductsDetails } from '../../Models/ProductsDetails';
import {Settings} from '../../Models/Settings';
import { Router ,ActivatedRoute} from '@angular/router';
import { DataModel } from '../../Models/Data';
import {ProductsService} from '../../Services/products.service'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

//Array to store list of products
listOfProducts:ProductsDetails[];

//Variable to set settings of ng2-smart table
settings=Settings;

//Variable to pass userName
 userName:string;

constructor(private letsShopService:LetsShopService,
            private router:Router,
            private activatedRoute:ActivatedRoute,
            private productsService:ProductsService) { }

ngOnInit() {

//Service call to get a list of products
this.productsService.getProducts()
                    .subscribe((data:ProductsDetails[])=>{
                    this.listOfProducts=data
                    });                    
}

//Navigate to product details page on row click
rowClicked(data:DataModel)
{
  this.router.navigate(['Products',data.data.ProductID]);
}

}

