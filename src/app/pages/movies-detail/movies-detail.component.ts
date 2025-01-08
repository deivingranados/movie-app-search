import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../core/service/movies.service';
import { NgIf } from '@angular/common';
import { ResponseDetail } from '../../models/interface';

@Component({
  selector: 'app-movies-detail',
  templateUrl: './movies-detail.component.html',
  styleUrls: ['./movies-detail.component.css'],
  imports: [NgIf],
})
export class MovieDetailsComponent implements OnInit {
  movie: any;
  isLoading: boolean = false;
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.fetchMovieDetails();
  }

  fetchMovieDetails(): void {
    const movieId = this.route.snapshot.params['id'];
    this.isLoading = true;

    this.movieService.getMovieDetails(movieId).subscribe(
      (response: ResponseDetail) => {
        this.movie = response;
        this.isLoading = false;
      },
      (error) => {
        this.errorMessage =
          'Error loading movie details. Please try again later.';
        this.isLoading = false;
      }
    );
  }
}
