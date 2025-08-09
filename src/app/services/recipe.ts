import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { RecipeApiResponse } from '../interfaces/irecipe';


@Injectable({ providedIn: 'root' })
export class RecipeService {
  private API_URL = 'https://forkify-api.herokuapp.com/api/search';
  private cache = new Map<string, Observable<RecipeApiResponse>>();

  constructor(private http: HttpClient) { }

  getRecipes(category: string): Observable<RecipeApiResponse> {
    if (!this.cache.has(category)) {
      this.cache.set(
        category,
        this.http.get<RecipeApiResponse>(`${this.API_URL}?q=${category}`).pipe(
          shareReplay(1)
        )
      );
    }
    return this.cache.get(category)!;
  }
}