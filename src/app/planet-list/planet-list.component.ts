import { Component, OnInit } from '@angular/core';
import { PlanetService } from '../planet.service';
import { PlanetInfo } from '../planet-info';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Output, EventEmitter  } from '@angular/core';

declare var TweenMax:any;


@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.css']
})
export class PlanetListComponent implements OnInit {

  // Selection of planet initialization 

  public currentSelectedPlanet:PlanetInfo = {
    "pl_name":"no-selected-planet",
    "st_dist":0
  }
 
  @Output() SelectedPlanetChange:EventEmitter<PlanetInfo> = new EventEmitter();

  public selection( current:PlanetInfo ){
    this.SelectedPlanetChange.emit(current);
  }

  // Service initialization

  private service:PlanetService;
  public list:PlanetInfo[];

  // URL Reading initialization

  private sub;
  public userSettings:any={
    "budget": 0,
    "distance":""
  }
  public distMin:number;
  public distMax:number;

  // Service Injection + ActivatedRoute Injection 

  constructor(param_service:PlanetService, private _Activatedroute:ActivatedRoute) {
    this.service = param_service;
    this.list =[]
   }


  // OnInit => Reading of URL then Request NASA

  ngOnInit() {
    
    const obs:Observable<PlanetInfo[]> = this.service.getPlanets();

    obs.subscribe(
      (param_planets_list:PlanetInfo[]) => {
        this.list = param_planets_list;
      }
    );

    this.sub=this._Activatedroute.params.subscribe(params => { 
      this.userSettings.budget = params['budget']; 
      this.userSettings.distance = params["distance"];
      this.distMin=Number(this.userSettings.distance.split("-")[0]);
      this.distMax=Number(this.userSettings.distance.split("-")[1]);
    });
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
