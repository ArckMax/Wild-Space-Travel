import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlanetInfo } from '../planet-info';

@Component({
  selector: 'app-planetchoice',
  templateUrl: './planetchoice.component.html',
  styleUrls: ['./planetchoice.component.css']
})
export class PlanetchoiceComponent implements OnInit {

  public currentSelectedPlanet: PlanetInfo = {
    pl_name: "No Planet choosen",
    st_dist: 0
  }

  SelectedPlanetChangeHandler(SelectedPlanet: PlanetInfo) {
    this.currentSelectedPlanet.pl_name = SelectedPlanet.pl_name;
    this.currentSelectedPlanet.st_dist = SelectedPlanet.st_dist;
  }

  public sub;

  public userSettings: any = {
    "budget": 0,
    "distance": "",
    "chosenPlanet": ""
  }

  constructor(private _Activatedroute: ActivatedRoute) { }

  ngOnInit() {

    this.sub = this._Activatedroute.params.subscribe(params => {
      this.userSettings.budget = params['budget'];
      this.userSettings.distance = params["distance"];
    });
    console.log(this.userSettings.distance);
  }

  goTop(){
    let scrollToTop = window.setInterval(() => {
      let pos = window.pageYOffset;
      if (pos > 150) {
        window.scrollTo(0, pos - 50); // how far to scroll on each step
      } else {
        window.clearInterval(scrollToTop);
      }
    },16)
  }
}
