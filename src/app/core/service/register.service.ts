import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  endpoint: string = environment.endpoint;

  constructor(private http: HttpClient) { }

  register(body: Login): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.endpoint}/user/signin`, body);
  }

}
