import { Component } from '@angular/core';
import { MovieDetails } from '../models/movie-details';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { MovieslistService } from '../services/movieslist.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DurationPipe } from '../pipes/duration.pipe';

@Component({
  selector: 'app-harry-potter-movie-details',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, DurationPipe],
  templateUrl: './harry-potter-movie-details.component.html',
  styleUrl: './harry-potter-movie-details.component.css'
})
export class HarryPotterMovieDetailsComponent {
  movie: MovieDetails | undefined;
  constructor(private route: ActivatedRoute, private router: Router, private movieService: MovieslistService){
    
  }
  ngOnInit(): void {
    const movieId = this.route.snapshot.params['id'];
    this.getMovieDetails(movieId);
  }
  //to get the details of selected movie
  getMovieDetails(movieId: string) {
    this.movieService.getMovieDetails(movieId).subscribe(movie => {
      this.movie = movie;
    });
  }

  goToMovies() {
    this.router.navigate(['/moviePage']);
  }

}
