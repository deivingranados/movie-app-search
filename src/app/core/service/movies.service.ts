import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { ResultSearch } from '../../models/interface';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiUrl = `${environment.baseUrl}`;

  constructor(private http: HttpClient) {}

  searchMovie(query: string, page: number = 10): Observable<any> {
    return this.http.get(`${this.apiUrl}/search/movie`, {
      params: {
        api_key: environment.apiKey,
        query,
        page,
      },
    });
  }

  getMovieDetails(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/${id}`, {
      params: { api_key: environment.apiKey },
    });
  }
}
