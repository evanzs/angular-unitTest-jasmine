import { INVESTIMENTOS } from './../mockInvestimentos';
import { Component, OnInit } from '@angular/core';
import { Investimento } from '../investimento';

@Component({
  selector: 'app-lista-investimentos',
  templateUrl: './lista-investimentos.component.html',
  styleUrls: ['./lista-investimentos.component.css']
})
export class ListaInvestimentosComponent implements OnInit  {

  ngOnInit(): void {

  }


  public listaInvestimento:Array<Investimento> = INVESTIMENTOS



}
