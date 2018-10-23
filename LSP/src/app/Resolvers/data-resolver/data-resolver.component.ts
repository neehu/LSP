import { Component } from '@angular/core';
import {Resolve} from '@angular/router';
import {ProductsDetails} from '../../Models/ProductsDetails'
import {ProductsService} from '../../Services/products.service';
import { CustomerDetails } from '../../Models/CustomerDetails';


@Component({
  selector: 'app-data-resolver',
  templateUrl: './data-resolver.component.html',
  styleUrls: ['./data-resolver.component.css']
})
export class DataResolverComponent implements Resolve<ProductsDetails[]> {

  constructor(private productService:ProductsService) { }
resolve()
{
  let customerID=<CustomerDetails>JSON.parse(sessionStorage.getItem("currentUser"));
  return  this.productService.getListOfSelectedItems(customerID.CustomerID);
}

}
