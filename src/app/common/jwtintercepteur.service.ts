import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../login/authentication.service';

@Injectable()
export class JWTIntercepteurService {

  constructor(private authService : AuthenticationService) { }

  intercept( req : HttpRequest<any>, next: HttpHandler) : Observable<HttpEvent<any>> {
    const jwtToken = this.authService.token;

    const clone = req.clone({setHeaders:{Authorization: `Bearer ${jwtToken}`}})
    return next.handle(clone);
  }

}
