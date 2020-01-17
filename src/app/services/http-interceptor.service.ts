import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (sessionStorage.getItem('username') && sessionStorage.getItem('token')) {
      req = req.clone({
        headers: new HttpHeaders({
          'Authorization': sessionStorage.getItem('token')
        })
      });
      
    }
    
    return next.handle(req);
  }
}
