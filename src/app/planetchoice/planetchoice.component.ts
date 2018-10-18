import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-planetchoice',
  templateUrl: './planetchoice.component.html',
  styleUrls: ['./planetchoice.component.css']
})
export class PlanetchoiceComponent implements OnInit {

  private getChosenPlanet(){
    this.userSettings.chosenPlanet = this;
  }

sub;

public userSettings:any={
  "budget": 0,
  "distance":"",
  "chosenPlanet" : ""
}

  constructor(private _Activatedroute:ActivatedRoute) {}

  ngOnInit() {
    
  this.sub=this._Activatedroute.params.subscribe(params => { 
    this.userSettings.budget = params['budget']; 
    this.userSettings.distance = params["distance"];
  });
  console.log(this.userSettings.distance);
}}
