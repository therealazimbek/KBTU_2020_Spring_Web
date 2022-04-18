import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    if (token) {
      const newReq = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + token),
      });
      return next.handle(newReq).pipe(
        catchError((err, caught) => {
          if (err.status === 401) {
            this.handleAuthError();
            return of(err);
          }
          throw err;
        })
      );
    }
    return next.handle(req).pipe(
      catchError((err, caught) => {
        if (err.status === 401) {
          this.handleAuthError();
          return of(err);
        }
        throw err;
      })
    );
  }

  private handleAuthError() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('login');
  }
}
