import { NgModule ,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
import { WishListDisplayComponent } from './wish-list-display/wish-list-display.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';






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
      DropDownComponent,
      WishListDisplayComponent,
      CustomerDetailsComponent
    ],
  exports:[
    HeaderComponent,
    RoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers:[
    LetsShopService,
    ToastServiceService,
    ProductsService,
    {provide:HTTP_INTERCEPTORS,useClass:JWTInterceptor,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:ErrorInterceptor,multi:true}
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
  
})
export class ComponentsModule { }
