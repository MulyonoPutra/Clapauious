import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Provider } from '@angular/core';
import { LoadingInterceptor } from '../interceptor/loading.interceptor';

export const Providers: Provider[] = [
  { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
];
