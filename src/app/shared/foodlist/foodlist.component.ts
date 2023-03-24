import { Component, OnInit } from '@angular/core';
import { Investimento } from 'src/app/investimento';
import { FoodlistService } from 'src/app/services/foodlist.service';

@Component({
  selector: 'app-foodlist',
  templateUrl: './foodlist.component.html',
  styleUrls: ['./foodlist.component.css']
})
export class FoodlistComponent implements OnInit {
  constructor(private _service:FoodlistService){}


  ngOnInit(): void {
    this.list = this._service.foodlist();
  }
  public list:Array<Investimento> | undefined;




}
