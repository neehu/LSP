import { Component, OnInit}  from '@angular/core';
import { ProductsDetails } from '../../Models/ProductsDetails';
import {Settings} from '../../Models/Settings';
import { Router ,ActivatedRoute} from '@angular/router';
import {ProductsService} from '../../Services/products.service'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

//Array to store list of products
listOfProducts:ProductsDetails[]=[];

//Variable to set settings of ng2-smart table
settings=Settings;

//Variable to pass userName
 userName:string;

constructor(private router:Router,
            private productsService:ProductsService,
            private activatedRoute:ActivatedRoute
            ) { }

ngOnInit() {

//Service call to get a list of products
this.listOfProducts=<ProductsDetails[]>(this.activatedRoute.snapshot.data.data);
}

//Navigate to product details page on row click
rowClicked(data)
{
  this.router.navigate(['Products',data]);
}

deleteProduct()
{

}

}

