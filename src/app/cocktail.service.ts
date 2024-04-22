import { Injectable } from '@angular/core';
import { Cocktail } from './models/types/cocktail';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  cocktailList: Array<Cocktail> = [];

  constructor(private http: HttpClient) { }

  getCocktails(): Observable<Cocktail[]>{
    return this.http.get<Cocktail[]>('./assets/cocktails.json');
  }
}
