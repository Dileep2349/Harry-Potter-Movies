import { Routes } from '@angular/router';
import { HarryPotterMoviesComponent } from './harry-potter-movies/harry-potter-movies.component';
import { HarryPotterMovieDetailsComponent } from './harry-potter-movie-details/harry-potter-movie-details.component';

export const routes: Routes = [
    { path: 'moviePage', component: HarryPotterMoviesComponent },
    { path: 'movieDetails/:id', component: HarryPotterMovieDetailsComponent },
    { path: '', redirectTo: '/moviePage', pathMatch: 'full' }
  ];
