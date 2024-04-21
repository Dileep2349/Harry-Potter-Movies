import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { MovieslistService } from '../services/movieslist.service';
import { Movie } from '../models/movie';
import { DurationPipe } from "../pipes/duration.pipe";

@Component({
  selector: 'app-harry-potter-movies',
  standalone: true,
  templateUrl: './harry-potter-movies.component.html',
  styleUrl: './harry-potter-movies.component.css',
  imports: [CommonModule, RouterOutlet, FormsModule, DurationPipe]
})
export class HarryPotterMoviesComponent {
  titleValue: string = '';
  yearvalue: string = '';
  constructor(private router: Router, private movieservice: MovieslistService) {

  }
  movies: Movie[] = [];

  ngOnInit(): void {
    setTimeout(
      this.moviesList.bind(this), 100);
  }

  moviesList(): void {
    this.movieservice.getMoviesList()
      .subscribe(movie => this.movies = movie);
    console.log(this.movies)
  }

  //to filter the list 
  get filteredMoviesList(): Movie[] {
    return this.movies.filter(movie =>
      (!this.titleValue || movie.title.toLowerCase().includes(this.titleValue.toLowerCase())) &&
      (!this.yearvalue || movie.release_date.includes(this.yearvalue))
    );
  }

  goToDetails(movieId: string) {
    console.log(movieId)
    this.router.navigate(['/movieDetails', movieId]);
  }
}