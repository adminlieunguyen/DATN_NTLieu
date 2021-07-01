import { Sinhvien } from './../models/sinhvien';
import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add auth header with jwt if user is logged in and request is to api url
        const user = this.authenticationService.userValue;
        const isLoggedIn = user && user.token;
        const isApiUrl = request.url.startsWith(environment.apiUrl);
        if (isLoggedIn && isApiUrl) {
            request = request.clone({
                // setHeaders: {
                //     Authorization: `Bearer ${user.token}`
                // }
                setHeaders: {
                    'Content-Type' : 'application/json; charset=utf-8',
                    'Accept'       : 'application/json',
                    'Authorization': `Bearer ${user.token}`
                  }
            });
        }

        return next.handle(request);
    }

    interceptsinhvien(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      // add auth header with jwt if user is logged in and request is to api url
      const sinhvien = this.authenticationService.sinhvienValue;
      const isLoggedIn = sinhvien && sinhvien.token;
      const isApiUrl = request.url.startsWith(environment.apiUrl);
      if (isLoggedIn && isApiUrl) {
          request = request.clone({
              // setHeaders: {
              //     Authorization: `Bearer ${user.token}`
              // }
              setHeaders: {
                  'Content-Type' : 'application/json; charset=utf-8',
                  'Accept'       : 'application/json',
                  'Authorization': `Bearer ${sinhvien.token}`
                }
          });
      }
      return next.handle(request);
    }
    interceptgiangvien(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      // add auth header with jwt if user is logged in and request is to api url
      const giangvien = this.authenticationService.giangvienValue;
      const isLoggedIn = giangvien && giangvien.token;
      const isApiUrl = request.url.startsWith(environment.apiUrl);
      if (isLoggedIn && isApiUrl) {
          request = request.clone({
              // setHeaders: {
              //     Authorization: `Bearer ${user.token}`
              // }
              setHeaders: {
                  'Content-Type' : 'application/json; charset=utf-8',
                  'Accept'       : 'application/json',
                  'Authorization': `Bearer ${giangvien.token}`
                }
          });
      }
      return next.handle(request);
    }
}
