import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Register, RegisterResponse } from '../interface/register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  endpoint: string = environment.endpoint;

  constructor(private http: HttpClient) {}

  register(body: Register): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(`${this.endpoint}/auth/register`, body);
  }

}
