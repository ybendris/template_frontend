import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import { httpInterceptorProviders } from "./interceptors/token-interceptor.service";

export const appConfig: ApplicationConfig = {
    providers: [provideRouter(routes),
        provideHttpClient(withInterceptorsFromDi()),
        provideAnimationsAsync(),
        httpInterceptorProviders]
};
