import { Component, OnInit } from '@angular/core';
import { PlanetService } from '../planet.service';
import { PlanetInfo } from '../planet-info';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.css']
})
export class PlanetListComponent implements OnInit {

  private service:PlanetService;

  public list:PlanetInfo[];

  constructor(param_service:PlanetService) {
    this.service = param_service;
    this.list =[]
   }

  ngOnInit() {

    const obs:Observable<PlanetInfo[]> = this.service.getPlanets(0, 500);
    obs.subscribe(
      (param_planets_list:PlanetInfo[]) => {
        this.list = param_planets_list;
      }
    );
  }

}
