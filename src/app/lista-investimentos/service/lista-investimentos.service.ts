import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Investimento } from 'src/app/investimento';

@Injectable({
  providedIn: 'root'
})
export class ListaInvestimentosService {
  private URL:string = "https://raw.githubusercontent.com/troquatte/fake-server/main/investiments-all.json";
  constructor( private http:HttpClient) { }

  public list():Observable<Array<Investimento>>{
    return this.http.get<Array<Investimento>>(this.URL).pipe(map(res=>res));
  }
}
