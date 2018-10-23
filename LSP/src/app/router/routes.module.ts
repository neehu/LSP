import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import {routing} from '../Constants/Routes'
import { RouterModule } from '@angular/router';
import { LoginPageComponent } from '../components/login-page/login-page.component';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { SignUpFormComponent } from '../components/sign-up-form/sign-up-form.component';
import {ValidatePasswordMatch} from '../Models/PasswordValidation.directive';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {HomePageComponent} from '../components/home-page/home-page.component';
import { LetsShopService } from '../Services/lets-shop.service';
import { ProductDetailsComponent } from '../components/product-details/product-details.component';
import { HttpClientModule} from  '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AuthGuard } from '../UserAuthentication/AuthGuard';
import { NgSelectModule } from '@ng-select/ng-select';
import { DataResolverComponent } from '../Resolvers/data-resolver/data-resolver.component';
import {ProductResolver} from '../Resolvers/product-resolver/product-resolver';
import { TwoInputFormComponent } from '../components/two-input-form/two-input-form.component';
import { HomePageResolverComponent } from '../Resolvers/home-page-resolver/home-page-resolver.component';
import { DataTable } from '../components/datatable/datatable.component';
import { PaginationComponent } from '../components/datatable/pagination/pagination.component';
import { ChangeEmailAddressComponent } from '../components/change-email-address/change-email-address.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SmartTableModule,
    HttpClientModule,
    HttpModule,
    routing,
    NgSelectModule
  ],
  declarations: [
  LoginPageComponent,
  SignUpFormComponent,
  ValidatePasswordMatch,
  HomePageComponent,
  ProductDetailsComponent,
  DataResolverComponent,
  ProductResolver,
  TwoInputFormComponent,
  DataTable,
  PaginationComponent,
  ChangeEmailAddressComponent
],

  providers:[
    LetsShopService,
    AuthGuard,
    DataResolverComponent,
    ProductResolver,
    HomePageResolverComponent
],
exports:[
  LoginPageComponent,
  RouterModule,
  SignUpFormComponent,
  HomePageComponent,
  ProductDetailsComponent,
  DataTable,
  PaginationComponent
],

schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class RoutingModule { }
