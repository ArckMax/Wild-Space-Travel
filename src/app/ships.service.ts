import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Ship} from './ship';


@Injectable({
  providedIn: 'root'
})
export class ShipsService {

  private httpService:HttpClient;
  
  constructor(param_http_service: HttpClient) {
    this.httpService = param_http_service;
   }

  public getShips():Observable<Ship[]>{
    return this.httpService.get("assets/ships.json").pipe(
      map(
        (param_my_response) => {
          let obj:Ship[] = param_my_response as Ship[];
          return obj;
        }
      )
    );
  }
}
