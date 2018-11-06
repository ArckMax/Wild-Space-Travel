import { Pipe, PipeTransform } from '@angular/core';
import { Ship } from './ship';

@Pipe({
  name: 'shipSortbyPrice'
})
export class ShipSortbyPricePipe implements PipeTransform {

  transform(value: Ship[], budgetMax: number): Ship[] {
    if (budgetMax == 0 || budgetMax == undefined )
      return value;
    else {
      let newArr = [];
      for (let i = 0; i < value.length; i++) {
        if (value[i].price <= budgetMax) {
          newArr.push(value[i]);
        }
      }
      return newArr;
    }
  }
}
