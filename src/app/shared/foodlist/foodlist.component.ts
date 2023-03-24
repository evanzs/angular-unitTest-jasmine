import { Component, OnInit } from '@angular/core';
import { Alimento, Investimento } from 'src/app/investimento';
import { FoodlistService } from 'src/app/services/foodlist.service';

@Component({
  selector: 'app-foodlist',
  templateUrl: './foodlist.component.html',
  styleUrls: ['./foodlist.component.css']
})
export class FoodlistComponent implements OnInit {
  constructor(private _service:FoodlistService){}


  ngOnInit(): void {
    this.getfood();
  }
  public list:Array<Alimento> | null =[];


  getfood(){
    this._service.getfoodList().subscribe({
      next:(resp)=>{ this.list = resp;},
      error: (error) => console.log(error)
    });
  }

}
