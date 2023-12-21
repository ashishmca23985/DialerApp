import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class HttpinterceptorService implements HttpInterceptor {
  user: User | undefined
  constructor(private authService: AuthService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.user = this.authService.user
    if (this.user != undefined) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this.user.token}`
        }
      })
    }
    return next.handle(req)
  }
}
