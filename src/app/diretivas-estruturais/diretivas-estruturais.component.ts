import { Component } from '@angular/core';
interface listaNomes{nome:string};
@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.css']
})



export class DiretivasEstruturaisComponent {
  constructor(){}

  ngIfValue:boolean = true;
  mockList:Array<listaNomes> =[{nome:"evandro"},{nome:"fernandes"},{nome:"barreto"}]
  switchValue:string = '';
  ngClassValue:boolean = true;
  date:Date = new Date();
  public setNgIf(){
    this.ngIfValue=!this.ngIfValue
  }

  public setNgClass(){
    this.ngClassValue=!this.ngClassValue;
  }
}
