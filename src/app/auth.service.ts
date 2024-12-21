import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { tap, delay, catchError } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'http://148.135.137.107:3000/user/auth/';
  private isAuthenticatedValue = false;

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string): Observable<any> {
    const body = { email, password };
    return this.http.post(this.url + 'login', body, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).pipe(
      tap((response: any) => {
        this.isAuthenticatedValue = true;
        localStorage.setItem('authToken', response.data.accessToken);
        // localStorage.setItem('refreshToken', response.data.refreshToken);
        // this.startTokenExpirationCheck();
      })
    );
  }

  refreshTok(): Observable<any> {
    const refreshToken = this.refreshToken;
    return this.http.post(this.url + 'refresh-token', { refreshToken }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.authToken}`
      }
    }).pipe(
      tap((response: any) => {
        localStorage.setItem('authToken', response.data.accessToken);
      }),
      catchError((error) => {
        this.logout();
        return throwError(error);
      })
    );
  }

  startTokenExpirationCheck() {
    const token = this.authToken;
    if (!token) return;
  
    const payload = JSON.parse(atob(token.split('.')[1]));
    const expirationTime = payload.exp * 1000;
    const timeUntilExpiration = expirationTime - Date.now();
  
    if (timeUntilExpiration > 0) {
      setTimeout(() => {
        this.logout();
        this.router.navigate(['/login']);
      }, timeUntilExpiration);
    } else {
      this.logout();
      this.router.navigate(['/login']);
    }
  }

  get authToken(): string | null {
    return localStorage.getItem('authToken');
  }

  get refreshToken(): string | null {
    return localStorage.getItem('refreshToken');
  }

  isAuthenticated(): boolean {
    return !!this.authToken;
  }

  isAuthenticatedAsync(): Observable<boolean> {
    return of(!localStorage.getItem('authToken')).pipe(delay(1000));
  }

  logout(): void {
    localStorage.removeItem('authToken');
    localStorage.removeItem('refreshToken');
    this.isAuthenticatedValue = false;
    this.router.navigate(['/login']);
  }

  signup(firstName: string, phoneNumber: string, email: string, password: string): Observable<any> {
    const body = { firstName, phoneNumber, email, password };
    return this.http.post(this.url + 'create', body, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}