import { Component, OnInit } from '@angular/core';
import { Observable, of, filter, map, delay } from 'rxjs';
import { NavService } from 'src/app/layout/nav/nav.service';
import { Movie } from '../models/movie.model';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  movies$: Observable<Movie[]>;
  constructor(
    private readonly movieService: MovieService,
    private navService: NavService
  ) {
    this.movies$ = of([]);
  }

  handleSearchEvent(searchTerm: string) {
    this.movies$ = this.movieService
      .getMovies()
      .pipe(
        map((data) =>
          data.filter((obj) =>
            obj.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
        )
      );
  }

  ngOnInit(): void {
    // this.movies$ = this.movieService.getMovies();
    this.movies$ = this.movieService.getMoviesHttp();
    this.navService.title.next('Movie Night');
  }
}
