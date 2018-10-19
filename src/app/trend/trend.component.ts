import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trend',
  templateUrl: './trend.component.html',
  styleUrls: ['./trend.component.css']
})
export class TrendComponent implements OnInit {

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

}
