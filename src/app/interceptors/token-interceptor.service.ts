import { Injectable } from '@angular/core';
import {
    HTTP_INTERCEPTORS,
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest
} from "@angular/common/http";
import { AuthService } from "../services/auth.service";
import { catchError, Observable, switchMap, throwError } from "rxjs";
import { StorageService } from "../services/storage.service";

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
    private isRefreshing = false;

    constructor(
        private storageService: StorageService,
        private authService: AuthService
    ) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.storageService.getToken();
        // Clone the request and replace the original headers with
        // cloned headers, updated with the authorization.
        const authReq = req.clone({
            headers: req.headers.set('Authorization', `Bearer ${token}`)
        });

        // send cloned request with header to the next handler.
        return next.handle(authReq);
    }
}

export const httpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true },
];