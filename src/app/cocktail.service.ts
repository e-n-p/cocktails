import { Injectable } from '@angular/core';
import { Cocktail } from './models/types/cocktail';


@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  cocktailList: Array<Cocktail> = [
    {name: "Old fashioned", price: 10, image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/old-fashioned-5a4bab5.jpg?quality=90&resize=440,400"},
    {name: "Mojito", price: 8, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREh2596vQ31wQAJQr9ZMwScMoBSPTiNijHEb7dm0CnjA&s"},
    {name: "Long island ice tea", price: 22, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPvsZvrPX2OIG2rsfGOgcAYb0MK2oqNNeFrF59b8Q2Yw&s"},
  ];

  constructor() { }

  getCocktails(): Array<Cocktail>{
    return this.cocktailList;
  }
}
