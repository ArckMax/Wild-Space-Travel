import { Component, OnInit } from '@angular/core';
import { Hotel } from '../hotel';
import { HOTELS } from '../mock-hotels';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})

export class HotelsComponent implements OnInit {

  private sub;
  public userSettings: any = {
    "budget": 0,
    "distance": "",
    "SelectedPlanet": "",
    "SelectedShip": ""
  }

  hotels = HOTELS;
  selectedHotel:Hotel = {
    name:"no_hotel_defined",
    price:0,
    img:"",
    priceRange:"",
    rating:0
  };

  
  constructor(private _Activatedroute: ActivatedRoute) { }

  ngOnInit() {

    this.sub = this._Activatedroute.params.subscribe(params => {
      this.userSettings.budget = params['budget'];
      this.userSettings.distance = params["distance"];
      this.userSettings.SelectedPlanet = params["SelectedPlanet"];
      this.userSettings.SelectedShip = params["SelectedShip"]
    });
  }

  onSelect(hotel : Hotel):void{
    this.selectedHotel = hotel;
  }
}
