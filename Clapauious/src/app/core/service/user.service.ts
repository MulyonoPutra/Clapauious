import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProfilePayload, Profiles } from '../interface/profile';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  endpoint: string = environment.endpoint;

  constructor(private http: HttpClient, private auth: AuthService) {}

  findUserById(id: string): Observable<ProfilePayload> {
    return this.http.get<ProfilePayload>(`${this.endpoint}/auth/${id}`);
  }

  /* NOTE: Inject Authorization Bearer Token manually in headers */
  update(id: string, body: Profiles): Observable<any> {
    let token = this.auth.loadToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
    return this.http.put<any>(`${this.endpoint}/auth/update/${id}`, body, {
      headers: headers,
    });
  }

  updated(
    userId: string,
    name: string,
    email: string,
    images: File,
    phone: string,
    address: string,
    city: string,
    state: string,
    country: string,
    zipCode: string,
    description: string
  ): Observable<any> {
    let token = this.auth.loadToken();

    const profileData = new FormData();

    profileData.append('name', name);
    profileData.append('email', email);
    profileData.append('images', images);
    profileData.append('phone', phone);
    profileData.append('address', address);
    profileData.append('city', city);
    profileData.append('state', state);
    profileData.append('country', country);
    profileData.append('zipCode', zipCode);
    profileData.append('description', description);

    return this.http.put<any>(`${this.endpoint}/auth/update/${userId}`, profileData);
    
  }
}
