import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { INVESTIMENTOS } from './../mockInvestimentos';
import { Injectable } from '@angular/core';
import { Alimento, Investimento } from '../investimento';

@Injectable({
  providedIn: 'root'
})
export class FoodlistService {

  private _list:Array<Investimento> = INVESTIMENTOS;
  private URL=" http://localhost:3000"
  constructor(private http:HttpClient) { }

  public postFood(value:string):Observable<Alimento>{
    return this.http.post<Alimento>(`${this.URL}/list-food`,{nome:value}).pipe(
      resp=> (resp),
      error => {console.error(error); return error}
    )
  }

  public getfoodList():Observable<Array<Alimento>>{
      return this.http.get<Array<Alimento>>(`${this.URL}/list-food`).pipe(
        resp=> resp,
        error => {console.error(error); return error}
      )
  }

  public chamaList(){
    this.getfoodList();
  }
}
