import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login, LoginResponse } from '../interface/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  endpoint: string = environment.endpoint;

  constructor(private http: HttpClient) { }

  login(body: Login): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.endpoint}/auth/login`, body);
  }

}
