import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavService } from 'src/app/layout/nav/nav.service';
import { Movie } from '../models/movie.model';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.scss'],
})
export class MovieAddComponent implements OnInit {
  movieform: FormGroup;

  constructor(
    private readonly navService: NavService,
    private readonly movieService: MovieService
  ) {
    this.movieform = new FormGroup({
      name: new FormControl('', [Validators.required]),
      image: new FormControl('https://', [Validators.required]),
      genre: new FormControl('', [Validators.required]),
      details: new FormControl('', [Validators.required]),
      year: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.navService.title.next('Add Movie');
  }
  formCreationSuccessful(movie: Movie, form: FormGroup) {
    console.log('Newely created movie is: ', movie);
    form.reset();

    this.movieform.reset();
  }
  formCreationFailed(error: any) {
    console.log('Movie creation failed', error.message);
  }
  addMovie() {
    if (this.movieform.valid) {
      this.movieService
        .addMovie({
          ...this.movieform.value,
        })
        .subscribe({
          next: (data) => this.formCreationSuccessful(data, this.movieform),
          error: (e) => this.formCreationFailed(e),
        });
    }
  }
}
