import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortList'
})
export class SortListPipe implements PipeTransform {
  transform(values: any[]): any[] {
    //console.log("Impure pipe!")
    //console.log(values)
    return values.sort((a, b) => {
      return a-b;
    });
  }
}
