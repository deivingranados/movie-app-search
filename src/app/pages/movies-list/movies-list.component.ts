import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../core/service/movies.service';
import { NgIf, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { AppPaginationComponent } from '../../components/app-pagination/app-pagination.component';
import { ResponseList } from '../../models/interface';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
  imports: [
    NgIf,
    NgFor,
    FormsModule,
    MovieCardComponent,
    AppPaginationComponent,
  ],
})
export class MovieListComponent implements OnInit {
  movies = [];
  searchQuery: string = '';
  currentPage: number = 1;
  totalPages: number = 1;
  isLoading: boolean = false;
  errorMessage: string = '';

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.searchMovies();
  }

  searchMovies(): void {
    if (!this.searchQuery.trim()) return;

    this.isLoading = true;
    this.errorMessage = '';
    this.movieService.searchMovie(this.searchQuery, this.currentPage).subscribe(
      (response: ResponseList) => {
        this.movies = response.results;
        this.totalPages = response.total_pages;
        this.isLoading = false;
        console.log(this.movies);
      },
      (error) => {
        this.errorMessage = 'Error fetching movies. Please try again later.';
        this.isLoading = false;
      }
    );
  }

  onSearch(): void {
    this.currentPage = 1;
    this.searchMovies();
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.searchMovies();
  }
}
