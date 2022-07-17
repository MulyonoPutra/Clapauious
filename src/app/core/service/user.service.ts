import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Profile } from '../interface/profile';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  endpoint: string = environment.endpoint;

  constructor(private http: HttpClient) { }

  findUserById(id: string): Observable<Profile> {
    return this.http.get<Profile>(`${this.endpoint}/user/${id}`);
  }

}
