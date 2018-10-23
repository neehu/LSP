import { NgModule } from '@angular/core';
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
  ProductDetailsComponent 
],

  providers:[
    LetsShopService,
    AuthGuard
],
exports:[
  LoginPageComponent,
  RouterModule,
  Ng2SmartTableModule,
  SignUpFormComponent,
HomePageComponent,
ProductDetailsComponent],
})
export class RoutingModule { }
