import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {
  ngOnInit(): void {

  }
  private  poupanca = 10;
  private  carteira = 10;
  private  montante = 10;

  setSacar(value:string):number | null{
    let sacarValue = Number(value);
    if(isNaN(sacarValue))
       return null;

    this.carteira += parseInt(value);
    this.poupanca -= parseInt(value);
    return sacarValue;
  }

  public setDepositar(value:string):number | null{

    let depositValue = Number(value);
    if(isNaN(depositValue))
       return null;

    this.carteira -= parseInt(value);
    this.poupanca += parseInt(value);
    return depositValue;
  }

  get getMontante():number{
    return this.poupanca + this.carteira;
  }

  get getPoupanca():number{
    return this.poupanca
  }

  get getCarteira():number{
    return this.carteira
  }


}
