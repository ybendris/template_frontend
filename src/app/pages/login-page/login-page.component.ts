import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatFormField, MatFormFieldModule } from "@angular/material/form-field";
import { MatInput, MatInputModule } from "@angular/material/input";
import { NgIf, NgOptimizedImage } from "@angular/common";
import { MatButton } from "@angular/material/button";
import { AuthService } from "../../services/auth.service";
import { StorageService } from "../../services/storage.service";
import { MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle } from "@angular/material/card";
import { Router } from "@angular/router";

@Component({
    selector: 'app-login-page',
    standalone: true,
    imports: [
        MatInputModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatFormField,
        MatInput,
        NgIf,
        MatButton,
        MatCard,
        MatCardTitle,
        MatCardContent,
        MatCardActions,
        MatCardHeader,
        NgOptimizedImage
    ],
    templateUrl: './login-page.component.html',
    styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
    loginForm: FormGroup;

    isLoggedIn = false;
    isLoginFailed = false;
    errorMessage = '';
    roles: string[] = [];

    constructor(private fb: FormBuilder, private authService: AuthService, private storageService: StorageService, private router: Router) {
        this.loginForm = this.fb.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }


    onSubmit() {
        if (this.loginForm.valid) {
            const { username, password } = this.loginForm.value;
            this.authService.authenticate(username, password).subscribe({
                next: data => {
                    this.storageService.saveUser(data);

                    this.isLoginFailed = false;
                    this.isLoggedIn = true;
                    this.roles = this.storageService.getToken().roles;
                    this.router.navigateByUrl("/dashboard");
                },
                error: err => {
                    this.errorMessage = err.error.message;
                    this.isLoginFailed = true;
                }
            });

        }
    }
}
