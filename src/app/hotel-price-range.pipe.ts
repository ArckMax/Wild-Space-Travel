import { Pipe, PipeTransform } from '@angular/core';
import { Hotel } from './hotel';

@Pipe({
  name: 'hotelPriceRange'
})
export class HotelPriceRangePipe implements PipeTransform {

  transform(value: Hotel["price"], price: number): any {
    let results:Hotel[]=[];
    let currentHotel:Hotel;  


    return Hotel["price"].sort;
    console.log(Hotel[price]);
  }

}
