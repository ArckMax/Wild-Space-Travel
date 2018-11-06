import { Component, OnInit } from '@angular/core';
import { Hotel } from '../hotel';
import { HOTELS } from '../mock-hotels';
import { ActivatedRoute } from "@angular/router";

import { TemplateRef } from '@angular/core';

declare var TweenMax:any;


@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
},)

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
    rating:""
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

  onSelect(hotel: Hotel):void{
    this.selectedHotel = hotel;
  }


goTop(){
    
    let pos = parseInt(window.pageYOffset.toString());
    let proxy:any = { y: pos};
    TweenMax.to(
      proxy, 
      1, 
      {
        y: 0,
        onUpdate: function(){
          window.scrollTo(0, proxy.y);
        } 
      }
    );
    
  }

}
