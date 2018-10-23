import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {HttpClient} from '@angular/common/http';

import { PlanetInfo } from './planet-info';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  private myHttpService:HttpClient;

  constructor(param_http_service:HttpClient) { 
    this.myHttpService = param_http_service; 
  }

  public getPlanets():Observable<PlanetInfo[]> {
     return this.myHttpService.get("https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?&table=exoplanets&select=pl_name,st_dist&where=pl_kepflag=1&format=json").pipe(
      map(
        (param_response) => {
          return param_response as PlanetInfo[];
        }
      )
    )
  }



}
