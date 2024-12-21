import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private isRefreshing = false;

  constructor(private authService: AuthService, private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authService.authToken;
    
    let authReq = req;
    if (token) {
      authReq = req.clone({
        setHeaders: { Authorization: `Bearer ${token}` }
      });
    }

    return next.handle(authReq).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401 && !this.isRefreshing) {
          this.isRefreshing = true;
          
          // return this.authService.refreshTok().pipe(
          //   switchMap(() => {
          //     this.isRefreshing = false;

          //     const newToken = this.authService.authToken;
          //     const clonedRequest = req.clone({
          //       setHeaders: { Authorization: `Bearer ${newToken}` }
          //     });
          //     return next.handle(clonedRequest);
          //   }),
          //   catchError((err) => {
          //     this.isRefreshing = false;
          //     this.authService.logout();
          //     this.router.navigate(['/login']);
          //     return throwError(err);
          //   })
          // );
        }
        return throwError(error);
      })
    );
  }
}
