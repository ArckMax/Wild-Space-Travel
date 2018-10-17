import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from "@angular/material";
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes} from "@angular/router";
import { HttpClientModule } from "@angular/common/http";


import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PlanetchoiceComponent } from './planetchoice/planetchoice.component';
import { ShipchoiceComponent } from './shipchoice/shipchoice.component';
import { SummaryComponent } from './summary/summary.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ResearchFormComponent } from './research-form/research-form.component';
import { FooterComponent } from './footer/footer.component';
import { PlanetListComponent } from './planet-list/planet-list.component';
import { ShipListComponent } from './ship-list/ship-list.component';
import { CurrentPlanetComponent } from './current-planet/current-planet.component';
import { HotelSelectionComponent } from './hotel-selection/hotel-selection.component';
import { LoadingPageComponent } from './loading-page/loading-page.component';
import { HotelsComponent } from './hotels/hotels.component';


import { ShipsService } from './ships.service';
import { PlanetService } from "./planet.service";


const appRoutes: Routes = [
  {path:"homepage", component:HomepageComponent},
  {path:"loading", component:LoadingPageComponent},
  {path:"shipchoice", component:ShipchoiceComponent},
  {path:"planetchoice", component:PlanetchoiceComponent},
  {path:"homepage/planetchoice", component:PlanetchoiceComponent},
  {path:"", redirectTo:"homepage", pathMatch:"full"},
  {path:"hotelselection", component:HotelSelectionComponent}
  
]



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    PlanetchoiceComponent,
    ShipchoiceComponent,
    SummaryComponent,
    NavbarComponent,
    ResearchFormComponent,
    FooterComponent,
    PlanetListComponent,
    ShipListComponent,
    CurrentPlanetComponent,
    HotelSelectionComponent,
    LoadingPageComponent,
    HotelsComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes, 
      {
        enableTracing:true,
        useHash:true
      }
    )
  ],
  providers: [MatDatepickerModule,ShipsService,PlanetService,HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
