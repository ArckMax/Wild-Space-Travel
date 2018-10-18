import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shipchoice',
  templateUrl: './shipchoice.component.html',
  styleUrls: ['./shipchoice.component.css']
})
export class ShipchoiceComponent implements OnInit {

    // Initialization for URL reading 
    private sub;
    public userSettings:any={
      "budget": 0,
      "distance":""
    }

  constructor(private _Activatedroute:ActivatedRoute) { }

  ngOnInit() {
    
    this.sub=this._Activatedroute.params.subscribe(params => { 
      this.userSettings.budget = params['budget']; 
      this.userSettings.distance = params["distance"];
    });
    
  }

}
