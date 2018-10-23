import { Injectable } from '@angular/core';
import { ProductsDetails } from '../Models/ProductsDetails';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders} from  '@angular/common/http';
import {getProductsUrl, gettlistofCategoriesUrl,options} 
        from '../Constants/ServiceUrls'; 
import { map} from 'rxjs/operators';
import { CategoryDetails } from '../Models/CategoryDetails';


@Injectable({
  providedIn: 'root'
})

export class ProductsService {

//Array to store list of products
productDetails:ProductsDetails[];
listOfProductNames:ProductsDetails[];
selectedProduct:ProductsDetails;
httpHeaderOptions=options;

//Observable to store ProductDetailsArray
private _productsDetails=new BehaviorSubject<ProductsDetails[]>(new Array<ProductsDetails>());
clickedProduct=this._productsDetails.asObservable();

constructor(private httpClient:HttpClient) { }

//Method to get a list of products
getProducts():Observable<ProductsDetails[]>
  {
    return this.httpClient.get<ProductsDetails[]>
                          (getProductsUrl,this.httpHeaderOptions)
                          .pipe(map(response=>{
                          this.extractData(response);
                          return response;})); 
   }

extractData(response)
{
  this.productDetails=response;
}

//Method to get list of products by category
getlistOfProductNames(category:string):ProductsDetails[]
{
  this.listOfProductNames=[];
  this.productDetails
  .forEach(product=>
  {
    if(product.CategoryID===parseInt(category))
    {
      this.listOfProductNames.push(product);
    }
  });
  return this.listOfProductNames; 
}

//Method to get a product details by ID
getProductDetailsByID(productID:string):ProductsDetails
{
  this.productDetails
  .forEach(product=>
  {
    if(productID.substring(1,productID.length-1)===product.ProductID.toString())
  {
    this.selectedProduct=product;
  }
  });
  return this.selectedProduct;
}

getProductName():ProductsDetails[]
{
  return this.productDetails;
}

//Method to get a list of categories
getListOfCategories():Observable<CategoryDetails[]>
{
    return this.httpClient.get<CategoryDetails[]>
        (gettlistofCategoriesUrl,this.httpHeaderOptions);
}
}
