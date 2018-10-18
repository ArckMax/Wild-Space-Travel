import { Component, OnInit } from '@angular/core';
import { PlanetService } from '../planet.service';
import { PlanetInfo } from '../planet-info';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.css']
})
export class PlanetListComponent implements OnInit {

  // Service initialization

  private service:PlanetService;

  public list:PlanetInfo[];

  // URL Reading initialization

  private sub;
  public userSettings:any={
    "budget": 0,
    "distance":""
  }

  // Service Injection + ActivatedRoute Injection 

  constructor(param_service:PlanetService, private _Activatedroute:ActivatedRoute) {
    this.service = param_service;
    this.list =[]
   }


  // OnInit => Reading of URL then Request NASA

  ngOnInit() {
    
    const obs:Observable<PlanetInfo[]> = this.service.getPlanets(1000, 1500);
    // const obs:Observable<PlanetInfo[]> = this.service.getPlanets(Number(this.userSettings.distance.split("-")[0]), Number(this.userSettings.distance.split("-")[1]));


    obs.subscribe(
      (param_planets_list:PlanetInfo[]) => {
        this.list = param_planets_list;
      }
    );

    this.sub=this._Activatedroute.params.subscribe(params => { 
      this.userSettings.budget = params['budget']; 
      this.userSettings.distance = params["distance"];
    });
    
    // console.log(typeof Number(this.userSettings.distance.split("-")[0]));
  }

}
