import { Component } from '@angular/core';
import { MatButton } from "@angular/material/button";
import { MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle } from "@angular/material/card";
import { MatFormField } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { NgOptimizedImage } from "@angular/common";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { StorageService } from "../../services/storage.service";
import { Router } from "@angular/router";

@Component({
    selector: 'app-register-page',
    standalone: true,
    imports: [
        MatButton,
        MatCard,
        MatCardActions,
        MatCardContent,
        MatCardHeader,
        MatCardTitle,
        MatFormField,
        MatInput,
        NgOptimizedImage,
        ReactiveFormsModule
    ],
    templateUrl: './register-page.component.html',
    styleUrl: './register-page.component.scss'
})
export class RegisterPageComponent {
    registerForm: FormGroup;

    isLoggedIn = false;
    isLoginFailed = false;
    errorMessage = '';
    roles: string[] = [];

    constructor(private fb: FormBuilder, private authService: AuthService, private storageService: StorageService, private router: Router) {
        this.registerForm = this.fb.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }


    onSubmit() {
        if (this.registerForm.valid) {
            const { username, password } = this.registerForm.value;
            this.authService.register(username, password).subscribe({
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
