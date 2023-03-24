import { Component } from '@angular/core';
import { FoodlistService } from 'src/app/services/foodlist.service';
import { FoodlistComponent } from '../foodlist/foodlist.component';

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.css']
})
export class FoodAddComponent {
  constructor(private _foodService:FoodlistService){}

  public listAddItem(value:string){
    return this._foodService.postFood(value).subscribe({
      next:(res) => { console.log(res)},
      error:(error) => error,
      complete: ()=> this._foodService.getfoodList()
    });
  }

}
