import { Component, OnInit } from '@angular/core';
import { ShipsService} from  "../ships.service";
import {Ship} from "../ship";

@Component({
  selector: 'app-ship-list',
  templateUrl: './ship-list.component.html',
  styleUrls: ['./ship-list.component.css']
})

export class ShipListComponent implements OnInit {

  public ships:any[];
  private service:ShipsService;

  constructor(param_my_service:ShipsService) { 
    this.service = param_my_service;
    this.ships = [];
  }

  ngOnInit() {
    this.service.getShips().subscribe(
      (ships:Ship[]) => {
        this.ships = ships;
      }
    );
  }

}
