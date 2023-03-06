import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'unit-test';

  public soma(value1:any,value2:any):any{
      return value1+value2;
  }
}
