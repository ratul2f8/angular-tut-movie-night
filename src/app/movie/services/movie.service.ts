import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { movies } from '../data';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private readonly BASE_URL = 'http://localhost:3000';
  constructor(private readonly httpClient: HttpClient) {}

  getMovies() {
    return of(movies);
  }

  getMoviesHttp() {
    return (
      this.httpClient
        .get<Movie[]>(this.BASE_URL + '/movies')
        //comment out this line for removing delay
        .pipe(this.addDelayPipe)
    );
  }

  getMovieDetails(id: number) {
    return of(movies.find((obj) => obj.id == id));
  }

  getMovieDetailsHttp(id: number) {
    return this.httpClient.get<Movie>(`${this.BASE_URL}/movies/${id}`);
  }

  addMovie(movie: Movie) {
    return this.httpClient.post<Movie>(this.BASE_URL + '/movies', movie);
  }

  addDelayPipe(observables: Observable<any>) {
    return observables.pipe(delay(3000));
  }
}
