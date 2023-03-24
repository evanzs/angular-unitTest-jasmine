import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.css']
})
export class DataBidingComponent implements OnInit{

   constructor(){}
   ngOnInit(): void {

   }
   public interpolation:string = "exemplo de interpolation"
   public btnDisable:boolean = true;
   public btnEstilo:string = '<button></button>';
   public inputValue:string="evandro"


   public btnMouseOver(){
    this.btnEstilo="accent"
   }

   public btnMouseMove(){
    this.btnEstilo="mat-button"
   }
}
