import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth.service';
import { ErrorService } from 'src/app/core/service/error.service';
import { MessagesService } from 'src/app/core/service/messages.service';
import { MoviesService } from 'src/app/core/service/movies.service';
import { UserService } from 'src/app/core/service/user.service';
import { MovieDetails } from '../../core/interface/movie-details';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  movie!: MovieDetails;

  imageConfig: string = 'https://image.tmdb.org/t/p/original/';

  genreName!: string;

  constructor(
    private tokenService: AuthService,
    private userService: UserService,
    private snackbar: MessagesService,
    private errorService: ErrorService,
    private authService: AuthService,
    private movieService: MoviesService,
    private router: Router,
    protected route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.findById();
  }

  get posterPath(): string {
    return `${this.imageConfig}/${this.movie?.poster_path}`;
  }
  get backdropPath(): string {
    return `${this.imageConfig}/${this.movie?.backdrop_path}`;
  }

  findById(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.movieService.findMovieById(id).subscribe({
      next: (data) => {
        this.movie = {
          title: data.title,
          tagline: data.tagline,
          poster_path: data.poster_path,
          backdrop_path: data.backdrop_path,
          overview: data.overview,
          vote_count: data.vote_count,
          genres: data.genres,
        };
      },
    });
  }
}
