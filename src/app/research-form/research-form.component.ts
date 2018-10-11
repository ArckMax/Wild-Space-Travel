import {Component} from '@angular/core';
import { InfoTrip } from '../info-trip';

export interface Price {
  value: string;
  viewValue: string;
}

export interface Distance {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-research-form',
  templateUrl: './research-form.component.html',
  styleUrls: ['./research-form.component.css'],
})

export class ResearchFormComponent {

  //Variable & Function to access to date

  roomsFilter: any = {};
  public onChange(event: any, newDate: any): void {
    console.log(event);
    // this.getData(newDate);
  }

  // Object prototype to formalize info on a trip 

  public infoTrip:any = {
    "budget" : "",
    "distance" : "",
    "date" : ""
  };

  //  Distance choices

  distances: Distance[] = [
    {value: '0-500', viewValue: '0-500'},
    {value: '500-1000', viewValue: '500-1000'},
    {value: '1000-1500', viewValue: '1000-1500'},
    {value: '1500-2000', viewValue: '1500-2000'},
    {value: '2000-XXXX', viewValue: '2000-XXXX'},
  ];

  // Function to formalize into an object informations choosen by user
  // Temporarely console.log this object. 
  // This object need to be accessible everywhere on website
  // IDEA => SHOW A RESUME OF SETTINGS JUST UNDER THE NAVBAR, EVERYTIME
  
  public function getInfo(infoTrip):void{
    let obj:InfoTrip = {
      budget : this.infoTrip.budget,
      distance : this.infoTrip.distance,
      date: this.roomsFilter.date,
    };
    console.log(obj);
  };


}


