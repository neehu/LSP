import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import { PagerServiceService } from '../../../Services/pager-service.service';
import { ProductsDetails } from '../../../Models/ProductsDetails';
import { ActivatedRoute } from '@angular/router';
import { Pager } from '../../../Models/pager';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  dataSource:ProductsDetails[]=new Array<ProductsDetails>();
  @Output() dataArrayPerPage=new EventEmitter<ProductsDetails[]>();
  pagerProperties:Pager=new Pager();
  pagedItems:ProductsDetails[];


  constructor(private pagerService:PagerServiceService,
              private route:ActivatedRoute) { }

  ngOnInit() {
   
    this.pagerService.currentData
    .subscribe(data=>
      {
        this.dataSource=data;
        //Intialise to page 1
        this.setPage(1);
      });

  }

  setPage(page:number)
  {
    this.pagerProperties=this.pagerService.getPager(this.dataSource.length,page);
    //get the current page
    this.pagedItems=this.dataSource.slice(this.pagerProperties.startIndex,this.pagerProperties.endIndex+1);
    this.dataArrayPerPage.emit(this.pagedItems);
  }


}
