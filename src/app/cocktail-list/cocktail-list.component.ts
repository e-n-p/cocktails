import { Component } from '@angular/core';
import { CocktailService } from '../cocktail.service';
import { Cocktail } from '../models/types/cocktail';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.css'
})
export class CocktailListComponent {

  public cocktails:Array<Cocktail> = [];

  constructor(private service: CocktailService){
    this.cocktails = this.service.getCocktails();
  }
}
