import { INVESTIMENTOS } from './../mockInvestimentos';
import { Injectable } from '@angular/core';
import { Investimento } from '../investimento';

@Injectable({
  providedIn: 'root'
})
export class FoodlistService {

  private _list:Array<Investimento> = INVESTIMENTOS;
  constructor() { }

  public foodlist(){
    return this._list;
  }
}
