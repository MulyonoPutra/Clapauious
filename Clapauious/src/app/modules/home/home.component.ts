import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movies } from 'src/app/core/interface/movies';
import { AuthService } from 'src/app/core/service/auth.service';
import { ErrorService } from 'src/app/core/service/error.service';
import { MessagesService } from 'src/app/core/service/messages.service';
import { MoviesService } from 'src/app/core/service/movies.service';
import { UserService } from 'src/app/core/service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movies: Movies [] = [];

  constructor(
    private tokenService: AuthService,
    private userService: UserService,
    private snackbar: MessagesService,
    private errorService: ErrorService,
    private authService: AuthService,
    private movieService: MoviesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.findPopularMovies();
  }

  findPopularMovies(): void {
    this.movieService.findPopularMovies().subscribe({
      next: (response) => {
        this.movies = response.results;
      },
      error: (error) => {
        this.errorService.getErrorMessage(error);
      },
    })
  }

}
