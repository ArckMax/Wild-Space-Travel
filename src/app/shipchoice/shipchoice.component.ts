import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ship } from '../ship';

@Component({
  selector: 'app-shipchoice',
  templateUrl: './shipchoice.component.html',
  styleUrls: ['./shipchoice.component.css']
})
export class ShipchoiceComponent implements OnInit {

  public currentSelectedShip:Ship={
    name:"No ship choosen",
    nbEngine:0,
    nbWing:0,
    price:0,
    nbPlaces:0,
    img:"",
    
  }

  SelectedShipChangeHandler(SelectedShip:Ship){
    this.currentSelectedShip.name = SelectedShip.name;
    this.currentSelectedShip.nbEngine = SelectedShip.nbEngine;
    this.currentSelectedShip.nbWing = SelectedShip.nbWing;
    this.currentSelectedShip.price = SelectedShip.price;
    this.currentSelectedShip.nbPlaces = SelectedShip.nbPlaces;
    this.currentSelectedShip.img = SelectedShip.img;
  }

    // Initialization for URL reading 
    private sub;
    public userSettings:any={
      "budget": 0,
      "distance":"",
      "SelectedPlanet":""
    }

  constructor(private _Activatedroute:ActivatedRoute) { }

  ngOnInit() {
    
    this.sub=this._Activatedroute.params.subscribe(params => { 
      this.userSettings.budget = params['budget']; 
      this.userSettings.distance = params["distance"];
      this.userSettings.SelectedPlanet = params["SelectedPlanet"];
    });
    
  }

}
