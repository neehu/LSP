import {Injectable} from '@angular/core';
import {Router,CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router';
import { ToastServiceService } from '../Services/toast-service.service';

@Injectable()

export class AuthGuard implements CanActivate
{
    constructor (private router:Router,
                private toastService:ToastServiceService)
    {}
    canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot)
    {
        if(sessionStorage.getItem('currentUser'))
        { 
            return true;
        }

        if(route.url[0].path.includes('Home').valueOf())
        {
            this.router.navigate(['Home']);
            return false;
        }

        this.toastService.error('Please Login To view details');
        this.router.navigate(['Login']);
        return false;
    }
}