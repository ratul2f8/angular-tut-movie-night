import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieAddComponent } from './movie-add/movie-add.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieListComponent } from './movie-list/movie-list.component';

const routes: Routes = [
  {
    path: '',
    component: MovieListComponent,
  },
  {
    path: 'movie-details/:id',
    component: MovieDetailsComponent,
  },
  {
    path: 'add-movie',
    component: MovieAddComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieRoutingModule {}
