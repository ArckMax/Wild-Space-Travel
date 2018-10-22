import { Pipe, PipeTransform } from '@angular/core';
import { PlanetInfo } from "./planet-info";

@Pipe({
  name: 'priceRange'
})
export class PriceRangePipe implements PipeTransform {

  transform(value, distanceMin: number, distanceMax: number): PlanetInfo[] {
    if (distanceMin == undefined)
      return value;
    else {
      let newArr = [];
      for (let i = 0; i < value.length; i++) {
        if (value[i].st_dist >= distanceMin && value[i].st_dist <= distanceMax) {
          newArr.push(value[i]);
        }
      }
      return newArr;
    }


  }

}
