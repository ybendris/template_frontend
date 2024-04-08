import { Injectable } from '@angular/core';

const TOKEN_KEY = 'token';

@Injectable({
    providedIn: 'root'
})
export class StorageService {
    constructor() {
    }

    clean(): void {
        localStorage.clear();
    }

    public saveUser(user: any): void {
        localStorage.removeItem(TOKEN_KEY);
        localStorage.setItem(TOKEN_KEY, user.token);
    }

    public getToken(): any {
        return localStorage.getItem(TOKEN_KEY);
    }
}
