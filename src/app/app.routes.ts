import { Routes } from '@angular/router';
import { MovieListComponent } from './pages/movies-list/movies-list.component';
import { MovieDetailsComponent } from './pages/movies-detail/movies-detail.component';

export const routes: Routes = [
  { path: '', component: MovieListComponent },
  { path: 'movie-details/:id', component: MovieDetailsComponent },
];
