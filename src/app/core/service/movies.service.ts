import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MovieDetails } from '../interface/movie-details';
import { Data } from '../interface/movies';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  endpoint: string = environment.endpoint;

  constructor(private http: HttpClient) { }

  findPopularMovies(): Observable<Data> {
    return this.http.get<Data>(`${this.endpoint}/movies/popular`);
  }

  findMovieById(id: string): Observable<MovieDetails> {
    return this.http.get<MovieDetails>(`${this.endpoint}/movies/details/${id}`);
  }

}
