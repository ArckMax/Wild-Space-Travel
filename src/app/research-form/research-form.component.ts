import {Component} from '@angular/core';

export interface Price {
  value: string;
  viewValue: string;
}

export interface Distance {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-research-form',
  templateUrl: './research-form.component.html',
  styleUrls: ['./research-form.component.css'],
})

export class ResearchFormComponent {
  prices: Price[] = [
    {value: '0-500', viewValue: '0-500'},
    {value: '500-1000', viewValue: '500-1000'},
    {value: '1000-1500', viewValue: '1000-1500'},
    {value: '1500-2000', viewValue: '1500-2000'},
    {value: '2000-XXXX', viewValue: '2000-XXXX'},
  ];

  distances: Distance[] = [
    {value: '0-500', viewValue: '0-500'},
    {value: '500-1000', viewValue: '500-1000'},
    {value: '1000-1500', viewValue: '1000-1500'},
    {value: '1500-2000', viewValue: '1500-2000'},
    {value: '2000-XXXX', viewValue: '2000-XXXX'},
  ];
}
