import { Component, EventEmitter, Output, OnInit } from '@angular/core';
interface person{
  nome:string,
  idade:number
}
@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})

export class OutputComponent implements OnInit{

  @Output() public emitData = new EventEmitter();
  public list:Array<person> =[{nome:'Evandro',idade:11}, {nome:'Jose',idade:12},{nome:'Manoel',idade:13}]
  constructor(){}
  ngOnInit(): void {

  }

  public getDados(event:number){
    this.emitData.emit(this.list[event]);
  }

}
