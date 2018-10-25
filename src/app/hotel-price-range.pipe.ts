import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'hotelPriceRange'
})

export class HotelPriceRangePipe implements PipeTransform {

  

  transform(value: any[], param_type_tri:string) :any[] {

    if (param_type_tri == undefined){

      return value;
    
  } else if ( param_type_tri == "price"){ 

      return  value.sort();
      

    }
    return value.sort();
    
    
  }

}
