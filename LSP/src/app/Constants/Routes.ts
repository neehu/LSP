import { RouterModule, Routes} from '@angular/router';
import { LoginPageComponent } from '../components/login-page/login-page.component';
import { SignUpFormComponent } from '../components/sign-up-form/sign-up-form.component';
import {HomePageComponent} from '../components/home-page/home-page.component';
import { ProductDetailsComponent } from '../components/product-details/product-details.component';
import { AuthGuard } from '../UserAuthentication/AuthGuard';


export const routes:Routes= [
     {path:'',pathMatch:'full',component:HomePageComponent},
    {path:'Home/:userName',component:HomePageComponent,canActivate:[AuthGuard]},
    {path:'Home',component:HomePageComponent},
    {path:'Login',component:LoginPageComponent},
    {path:'SignUp',component:SignUpFormComponent},
    {path:'Products/:id',component:ProductDetailsComponent,canActivate:[AuthGuard]}  
];

export const routing =RouterModule.forRoot(routes);