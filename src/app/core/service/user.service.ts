import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { ProfilePayload } from '../interface/profile';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  endpoint: string = environment.endpoint;

  constructor(private http: HttpClient, private auth: AuthService) { }

  findUserById(id: string): Observable<ProfilePayload> {
    return this.http.get<ProfilePayload>(`${this.endpoint}/auth/${id}`);
  }

  update(id: string, body: any): Observable<any> {
    let token = this.auth.loadToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
    return this.http.put<any>(`${this.endpoint}/auth/update/${id}`, body, { headers: headers },);
  }

}
