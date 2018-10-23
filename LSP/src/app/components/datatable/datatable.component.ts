import { Component, OnInit, Input, Output,EventEmitter} from '@angular/core';
import { ProductsDetails } from '../../Models/ProductsDetails';
import { Pager } from '../../Models/pager';
import { PagerServiceService } from '../../Services/pager-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DataModel } from '../../Models/Data';



@Component({
  selector: 'app-data-table',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DataTable implements OnInit {

pageNumbers:number[]=[];


@Output() rowSelected=new EventEmitter<number>();
@Output() deleteProduct=new EventEmitter<number>();
@Input() displayViewButton:boolean=true;
@Input() displayRemoveButton:boolean=true;
@Input() dataArray:ProductsDetails[]=[];
sortedArray:ProductsDetails[]=[]



  constructor(private route:ActivatedRoute,
              private pagerservice:PagerServiceService
) { }

  ngOnInit() {
    this.pagerservice.changedata(this.dataArray);
  }


  navigateToProductDetails(data:ProductsDetails)
  {
    this.rowSelected.emit(data.ProductID);
  }

  removeProduct(data:ProductsDetails)
  {
    this.deleteProduct.emit(data.ProductID);
  }

  dataArrayPerPage(data:ProductsDetails[])
  {
    this.sortedArray=data;
  }
}
