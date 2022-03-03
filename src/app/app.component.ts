import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  value:number | undefined; //part 1
  values:number[] = []; //part 2
  sortedValues: number[] = []; //part 3

  constructor(){
    this.setRandomValue();
  }

  //part 1
  setRandomValue():void {
    this.value = this.generateRandValue();
  }

  generateRandValue():number {
    return Math.floor(Math.random() * 1000);
  }

  //part 2
  pushRandValue():void {
    this.values.push(this.generateRandValue());
  }

  //part 3
  pushInSortedValues():void {
    this.sortedValues.push(this.generateRandValue());
  }
}
