import {Injectable} from '@angular/core';
import {HttpRequest,HttpHandler,HttpEvent,HttpInterceptor} from '@angular/common/http';
import {Observable,throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {LetsShopService} from '../Services/lets-shop.service';
import { CustomerDetails } from '../Models/CustomerDetails';
import { ToastServiceService } from '../Services/toast-service.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor
{
    constructor(private letsShopService:LetsShopService,
                private toastService:ToastServiceService){}

    intercept(request:HttpRequest<CustomerDetails>| HttpRequest<string>,next:HttpHandler):Observable<HttpEvent<CustomerDetails>>
    {
        return next.handle(request)
        .pipe(catchError(err=>{
            if(err.status===401)
            {
                
                this.letsShopService.logout();
                location.reload(true);
            }
            if((err.status===404)||(err.status===403))
            {
                this.toastService.error(err.error.Message);
            }
            const error=err.error.message  || err.statusText;
            return throwError(error);
        }))
    }
}