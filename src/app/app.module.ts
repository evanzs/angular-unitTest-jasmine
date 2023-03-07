import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { CalcComponent } from './calc/calc.component';
import { ListaInvestimentosComponent } from './lista-investimentos/lista-investimentos.component';


@NgModule({
  declarations: [
    AppComponent,
    CalcComponent,
    ListaInvestimentosComponent
  ],
  imports: [
    BrowserModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
