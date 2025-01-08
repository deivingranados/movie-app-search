import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from '../../models/interface';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent {
  @Input() movie: any;

  constructor(private router: Router) {}

  goToDetails(): void {
    this.router.navigate(['/movie-details', this.movie.id]);
  }
}
