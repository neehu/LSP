import { RouterModule, Routes} from '@angular/router';
import { LoginPageComponent } from '../components/login-page/login-page.component';
import { SignUpFormComponent } from '../components/sign-up-form/sign-up-form.component';
import {HomePageComponent} from '../components/home-page/home-page.component';
import { ProductDetailsComponent } from '../components/product-details/product-details.component';
import { AuthGuard } from '../UserAuthentication/AuthGuard';
import { WishListDisplayComponent } from '../components/wish-list-display/wish-list-display.component';
import { DataResolverComponent } from '../Resolvers/data-resolver/data-resolver.component';
import {ProductResolver} from '../Resolvers/product-resolver/product-resolver';
import { CustomerDetailsComponent } from '../components/customer-details/customer-details.component';
import { HomePageResolverComponent } from '../Resolvers/home-page-resolver/home-page-resolver.component';
import { ChangeEmailAddressComponent } from '../components/change-email-address/change-email-address.component';


export const routes:Routes= [
     {path:'Home',component:HomePageComponent,resolve:{data:HomePageResolverComponent}},
    {path:'Home/:userName',component:HomePageComponent,canActivate:[AuthGuard],resolve:{data:HomePageResolverComponent}},
    {path:'Login',component:LoginPageComponent},
    {path:'SignUp',component:SignUpFormComponent},
    {path:'Products/:id',component:ProductDetailsComponent,
    canActivate:[AuthGuard],resolve:{data:ProductResolver}},
    {path:'WishList',component:WishListDisplayComponent,
    resolve:{data:DataResolverComponent}},
    {path:'CustomerDetails',component:CustomerDetailsComponent,canActivate:[AuthGuard]},
    {path:'CustomerDetails/ChangeEmailAddress',component:ChangeEmailAddressComponent,canActivate:[AuthGuard]},
    {path:'',redirectTo:'Home',pathMatch:'full'},
    
];

export const routing =RouterModule.forRoot(routes);