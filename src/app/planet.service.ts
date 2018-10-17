import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Http,Response} from "@angular/http";

import { PlanetInfo } from './planet-info';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  private myHttpService:Http;

  constructor(param_http_service:Http) { 
    this.myHttpService = param_http_service; 
  }

  public getPlanets(param_min_dist, param_max_dist):Observable<PlanetInfo[]> {
     return this.myHttpService.get("https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?&table=exoplanets&select=pl_name,st_dist&where=pl_kepflag=1 and st_dist>" + param_min_dist + "and st_dist<" + param_max_dist +"&format=json").pipe(
      map(
        (param_response:Response) => {
          return param_response.json() as PlanetInfo[];
        }
      )
    )
  }



}
