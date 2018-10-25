import { Component, OnInit } from '@angular/core';

declare var TweenMax:any;

@Component({
  selector: 'app-trend',
  templateUrl: './trend.component.html',
  styleUrls: ['./trend.component.css']
})
export class TrendComponent implements OnInit {

  title1:string = "The Marsupial Lake is a must-see on the Road of Happiness. If the purity of the sky makes this place ideal for star-watching, you will also be able to enjoy many other different activities during daytime. For example, dive in the turquoise-blue water of the lake, or enjoy the breath-taking landscapes that make a perfect scenery for hiking or romantic picnics.";
  title2:string = "You are travelling for business purposes, this planet offers all comfort you will need: meeting room for virtual conferences, automatised desk concierge, and many more services. Located very close from the most influent companies of the galaxy, you will conduct your business in the best conditions.";
  title3:string = "Are you part of the very privileged circle of fortunate people, don't hesitate to travel to Agorra: its decadent lifestyle has been making it famous for decades, Don't be surprised if you don't want to leave ! ";

  viewImage1:boolean = false;
  viewImage2:boolean = false;
  viewImage3:boolean = false;

  constructor() { }

  viewInfoImage1(){
    this.viewImage1 = !this.viewImage1;
  };
  viewInfoImage2(){
    this.viewImage2 = !this.viewImage2;
  };
  viewInfoImage3(){
    this.viewImage3 = !this.viewImage3;
  };
  ngOnInit() {
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
