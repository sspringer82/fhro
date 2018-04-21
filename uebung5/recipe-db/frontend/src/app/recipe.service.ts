import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Recipe } from './recipe';

@Injectable()
export class RecipeService {
  constructor(private http: HttpClient) {}

  public getAll(): Observable<Recipe[]> {
    return this.http.get('/recipes') as Observable<Recipe[]>;
  }
}
