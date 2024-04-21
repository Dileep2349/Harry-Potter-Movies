import { Component, model } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HarryPotterMoviesComponent } from "./harry-potter-movies/harry-potter-movies.component";
import { HarryPotterMovieDetailsComponent } from "./harry-potter-movie-details/harry-potter-movie-details.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HarryPotterMoviesComponent, HarryPotterMovieDetailsComponent]
})
export class AppComponent {
  title = 'harry-potter-movies';
}
