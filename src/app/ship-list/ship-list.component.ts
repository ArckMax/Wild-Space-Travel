import { Component, OnInit } from '@angular/core';
import { ShipsService} from  "../ships.service";
import {Ship} from "../ship";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ship-list',
  templateUrl: './ship-list.component.html',
  styleUrls: ['./ship-list.component.css']
})

export class ShipListComponent implements OnInit {

  // Initialization for ShipsService
  public ships:any[];
  private service:ShipsService;

  // Initialization for URL reading 
  private sub;
  public userSettings:any={
    "budget": 0,
    "distance":""
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
    });
    console.log(this.userSettings.budget);
  }
  
}
