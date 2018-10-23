import { Injectable } from '@angular/core';
import { Pager } from '../Models/pager';
import { BehaviorSubject } from 'rxjs';
import { ProductsDetails } from '../Models/ProductsDetails';

@Injectable({
  providedIn: 'root'
})
export class PagerServiceService {

  pagerProperties:Pager=new Pager();
  private dataArray=new BehaviorSubject<ProductsDetails[]>([]);
  currentData=this.dataArray.asObservable();
  constructor() { }

  getPager(totalItems:number,currentPage:number=1,pageSize:number=7)
  {
    //calcualte the total pages
    let totalPages=Math.ceil(totalItems/pageSize);

    //Make sure current page is not out of range
    if(currentPage<1)
    {
      currentPage=1;
    }

    else if(currentPage>totalPages)
    {
      currentPage=totalPages;
    }

    let startPage:number,endPage:number;
    if(totalPages<=10)
    {
      //so show all
      startPage=1;
      endPage=totalPages;
    }

  else
  {
      //more than 10 calculate start and end pages
      if(currentPage<=6)
      {
        startPage=1;
        endPage=10;
      } 
      else if (currentPage + 4 >= totalPages)
      {
        startPage=totalPages-9;
        endPage=totalPages;
      }
      else
      {
        startPage=currentPage-5;
        endPage=currentPage+4;
      }
  }
    //calculate start and end indexes
    let startIndex=(currentPage-1) * pageSize;
    let endIndex=Math.min(startIndex + pageSize-1,totalItems-1 );

    //create an array of pages 
    let pages=Array.from(Array((endPage+1) - startPage).keys()).map(i=>startPage+i);
    //return object with all pager properties

    this.pagerProperties.currentPage=currentPage;
    this.pagerProperties.totalItems=totalItems;
    this.pagerProperties.PageSize=pageSize;
    this.pagerProperties.totalPages=totalPages;
    this.pagerProperties.startPage=startPage;
    this.pagerProperties.endPage=endPage;
    this.pagerProperties.startIndex=startIndex;
    this.pagerProperties.endIndex=endIndex;
    this.pagerProperties.pages=pages;

    return(this.pagerProperties);
  }

  changedata(data:ProductsDetails[])
  {
    this.dataArray.next(data);
  }
}
