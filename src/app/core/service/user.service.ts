import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ProfilePayload } from '../interface/profile';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  endpoint: string = environment.endpoint;

  constructor(private http: HttpClient) { }

  findUserById(id: string): Observable<ProfilePayload> {
    return this.http.get<ProfilePayload>(`${this.endpoint}/auth/${id}`);
  }

}
