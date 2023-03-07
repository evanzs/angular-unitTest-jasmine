import { INVESTIMENTOS } from './../mockInvestimentos';
import { Component, OnInit } from '@angular/core';
import { Investimento } from '../investimento';
import { ListaInvestimentosService } from './service/lista-investimentos.service';

@Component({
  selector: 'app-lista-investimentos',
  templateUrl: './lista-investimentos.component.html',
  styleUrls: ['./lista-investimentos.component.css']
})
export class ListaInvestimentosComponent implements OnInit  {
  constructor(private _service:ListaInvestimentosService){}

  ngOnInit(): void {
    this._service.list().subscribe(res=> this.setListaInvestimentos(res))
  }

  public listaInvestimento!:Array<Investimento>;

  setListaInvestimentos(newList:Array<Investimento>):Array<Investimento>{
    return this.listaInvestimento=newList;
  }

}
