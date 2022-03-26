import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, Subscription } from 'rxjs';
import { NavService } from 'src/app/layout/nav/nav.service';
import { Movie } from '../models/movie.model';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit, OnDestroy {
  movie$: Subscription | undefined;
  movie: Movie | undefined;
  constructor(
    private readonly movieService: MovieService,
    private readonly route: ActivatedRoute,
    private readonly navService: NavService
  ) {
    this.movie = undefined;
  }
  ngOnDestroy(): void {
    if (this.movie$) {
      this.movie$.unsubscribe();
    }
  }

  ngOnInit(): void {
    // this.route.params.subscribe((params) => {
    //   this.movie$ = this.movieService
    //     .getMovieDetails(+params['id'])
    //     .subscribe((data) => {
    //       this.movie = data;
    //       if (this.movie?.name) {
    //         this.navService.title.next(this.movie.name);
    //       }
    //     });
    // });

    this.route.params.subscribe((params) => {
      this.movie$ = this.movieService
        .getMovieDetailsHttp(+params['id'])
        .subscribe((data) => {
          this.movie = data;
          if (this.movie?.name) {
            this.navService.title.next(this.movie.name);
          }
        });
    });
  }
}
