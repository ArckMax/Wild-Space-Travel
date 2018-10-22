import { Component, OnInit } from '@angular/core';
import { ShipsService} from  "../ships.service";
import {Ship} from "../ship";
import { ActivatedRoute } from '@angular/router';
import { Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-ship-list',
  templateUrl: './ship-list.component.html',
  styleUrls: ['./ship-list.component.css']
})

export class ShipListComponent implements OnInit {

    // Selection of planet initialization 
 
    @Output() SelectedShipChange:EventEmitter<Ship> = new EventEmitter();

    public selection( current:Ship ){
      this.SelectedShipChange.emit(current);
    }

  // Initialization for ShipsService
  public ships:any[];
  private service:ShipsService;

  // Initialization for URL reading 
  private sub;
  public userSettings:any={
    "budget": 0,
    "distance":"",
    "SelectedPlanet":""
  }

  // ShipService & ActivatedRoute Injections

  constructor(param_my_service:ShipsService, private _Activatedroute:ActivatedRoute) { 
    this.service = param_my_service;
    this.ships = [];
  }

  ngOnInit() {
    this.service.getShips().subscribe(
      (ships:Ship[]) => {
        this.ships = ships;
      }
    );

    this.sub=this._Activatedroute.params.subscribe(params => { 
      this.userSettings.budget = params['budget']; 
      this.userSettings.distance = params["distance"];
      this.userSettings.SelectedPlanet = params["SelectedPlanet"];
    });
    console.log(this.userSettings.budget);
  }
  
}
