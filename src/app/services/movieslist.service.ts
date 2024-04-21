import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieDetails } from '../models/movie-details';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieslistService {

  constructor(private http: HttpClient) { }

  getMoviesList() {
    return this.http.get<Movie[]>('/movies');
  }

  getMovieDetails(selectedMovieId: string): Observable<MovieDetails> {
    return this.http.get<MovieDetails>(`/movies/${selectedMovieId}`);
  }
}
