import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {RoutingModule} from '../router/routes.module';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import {  HTTP_INTERCEPTORS } from  '@angular/common/http';
import { LetsShopService } from '../Services/lets-shop.service';
import { ReversePipe } from '../Pipes/reverse.pipe';
import { ToastServiceService } from '../Services/toast-service.service';
import { DropDownComponent } from './header/drop-down/drop-down.component';
import {ErrorInterceptor} from '../UserAuthentication/ErrorInterceptor';
import {ProductsService} from '../Services/products.service';
import {JWTInterceptor} from '../UserAuthentication/JWTInterceptor';



@NgModule({
  imports: [
    CommonModule,
    RoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
      HeaderComponent,
      ReversePipe,
      DropDownComponent
    ],
  exports:[
    HeaderComponent,
    RoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RoutingModule
  ],
  providers:[
    LetsShopService,
    ToastServiceService,
    ProductsService,
    {provide:HTTP_INTERCEPTORS,useClass:JWTInterceptor,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:ErrorInterceptor,multi:true}
  ]
  
})
export class ComponentsModule { }
