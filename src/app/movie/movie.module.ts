import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieRoutingModule } from './movie-routing.module';
import { LayoutModule } from '../layout/layout.module';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieAddComponent } from './movie-add/movie-add.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
@NgModule({
  declarations: [MovieListComponent, MovieDetailsComponent, MovieAddComponent],
  imports: [
    CommonModule,
    MovieRoutingModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class MovieModule {}
