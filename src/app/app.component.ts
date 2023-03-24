import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit,DoCheck,AfterContentChecked,AfterContentInit,AfterViewInit, AfterViewChecked{




  ngOnInit(): void {
    console.log("executa OnInit quando inicia")
  }
  ngDoCheck(): void {
    console.log("executa ngDoCheck")

  }
  ngAfterContentChecked(): void {
    console.log("executa ngAfterContentChecked")

  }
  ngAfterContentInit(): void {
    console.log("executa ngAfterContentInit")
    // this. +=1;
  }
  ngAfterViewInit(): void {
    console.log("executa ngAfterViewInit")
    // this. +=1;
  }
  ngAfterViewChecked(): void {
    console.log("executa ngAfterViewChecked")

  }

  title = 'unit-test';
  valor:number = 1;
  public addValue:number = 10;

  public getDados:{nome:string,idade:number} | undefined;


  public add():number{
    return this.valor+=1;
  }

  public setDados(data:{nome:string,idade:number}){
    console.log(data)
    this.getDados=data;
    console.log(this.getDados)
  }
}
