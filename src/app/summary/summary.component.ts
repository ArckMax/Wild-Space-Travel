import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

// Initialization for URL reading 
private sub;
public userSettings:any={
  "budget": 0,
  "distance":"",
  "SelectedPlanet":"",
  "SelectedShip":""
}

// ShipService & ActivatedRoute Injections

constructor(private _Activatedroute:ActivatedRoute) { 
}

ngOnInit() {
   this.sub=this._Activatedroute.params.subscribe(params => { 
    this.userSettings.budget = params['budget']; 
    this.userSettings.distance = params["distance"];
    this.userSettings.SelectedPlanet = params["SelectedPlanet"];
    this.userSettings.SelectedShip = params["SelectedShip"]
  });
  console.log(this.userSettings.budget);
}

}
