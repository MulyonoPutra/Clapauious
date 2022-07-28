import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Provider } from '@angular/core';
import { AuthInterceptor } from '../interceptor/auth.interceptor';
import { LoadingInterceptor } from '../interceptor/loading.interceptor';
import { ValidationService } from '../service/validation.service';

export const Providers: Provider[] = [
  { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
];
