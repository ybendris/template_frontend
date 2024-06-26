import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

const AUTH_API = 'http://localhost:8080/api/v1/auth/';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    })
};


@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private http: HttpClient) {
    }

    authenticate(email: string, password: string): Observable<any> {
        return this.http.post(
            AUTH_API + 'authenticate',
            {
                email,
                password,
            },
            httpOptions
        );
    }

    register(email: string, password: string): Observable<any> {
        return this.http.post(
            AUTH_API + 'register',
            {
                email,
                password,
            },
            httpOptions
        );
    }

    logout(): Observable<any> {
        return this.http.post(AUTH_API + 'signout', {}, httpOptions);
    }

    refreshToken() {
        return this.http.post(AUTH_API + 'refreshtoken', {}, httpOptions);
    }
}
