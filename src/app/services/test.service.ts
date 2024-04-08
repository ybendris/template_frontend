import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

const TEST_API = 'http://localhost:8080/api/v1/test';

@Injectable({
    providedIn: 'root'
})
export class TestService {

    constructor(private http: HttpClient) {
    }


    public getValue(): Observable<any> {
        return this.http.get(TEST_API);
    }
}
