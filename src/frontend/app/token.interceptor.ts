import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {AuthService} from './auth.service';
import {Observable, throwError} from 'rxjs';
import {Router} from "@angular/router";
import {catchError} from "rxjs/operators";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public authService: AuthService, private router: Router) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const ownProtectedUrl = request.url.includes('hotelSearch') || request.url.includes('placeSearch') || request.url.includes('weatherSearch') || request.url.includes('externalApi') || request.url.includes('user');

    if (ownProtectedUrl) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.authService.getUserToken()}`
        }
      });
      return next.handle(request)
        .pipe(catchError(err => {
          if (err.status === 403) {
            this.authService.logout();
            this.router.navigate(['/login'])
          }
          const error = err.error.message || err.statusText;
          return throwError(error);
        }));
    }
    return next.handle(request);
  }

}
