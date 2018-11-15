var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from "@angular/material";
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { ModalModule } from 'ngx-bootstrap/modal';
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
import { HotelSelectionComponent } from './hotel-selection/hotel-selection.component';
import { LoadingPageComponent } from './loading-page/loading-page.component';
import { HotelsComponent } from './hotels/hotels.component';
import { TrendPlaneteComponent } from './trend-planete/trend-planete.component';
import { TrendComponent } from './trend/trend.component';
import { ShipsService } from './ships.service';
import { PlanetService } from "./planet.service";
import { PriceRangePipe } from './price-range.pipe';
import { HotelPriceRangePipe } from './hotel-price-range.pipe';
import { ShipSortbyPricePipe } from './ship-sortby-price.pipe';
import { GoodTravelComponent } from './good-travel/good-travel.component';
var appRoutes = [
    { path: "homepage", component: HomepageComponent },
    { path: "loading", component: LoadingPageComponent },
    { path: "shipchoice", component: ShipchoiceComponent },
    { path: "planetchoice", component: PlanetchoiceComponent },
    { path: "homepage/planetchoice", component: PlanetchoiceComponent },
    { path: "", redirectTo: "homepage", pathMatch: "full" },
    { path: "hotelselection", component: HotelSelectionComponent },
    { path: "planetchoice/:budget/:distance", component: PlanetchoiceComponent },
    { path: "shipchoice/:budget/:distance/:SelectedPlanet", component: ShipchoiceComponent },
    { path: "summary/:budget/:distance/:SelectedPlanet/:SelectedShip", component: SummaryComponent },
    { path: "hotelpage/:budget/:distance/:SelectedPlanet/:SelectedShip", component: HotelSelectionComponent },
    { path: "backToSummary/:budget/:distance/:SelectedPlanet/:SelectedShip/:SelectedHotel", component: SummaryComponent },
    { path: "trend1/:budget/:distance/:SelectedPlanet/:SelectedShip", component: SummaryComponent },
    { path: "trend2/:budget/:distance/:SelectedPlanet/:SelectedShip", component: SummaryComponent },
    { path: "trend3/:budget/:distance/:SelectedPlanet/:SelectedShip", component: SummaryComponent },
    { path: "goodtravel", component: GoodTravelComponent }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
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
                HotelSelectionComponent,
                LoadingPageComponent,
                HotelsComponent,
                TrendPlaneteComponent,
                TrendComponent,
                PriceRangePipe,
                HotelPriceRangePipe,
                ShipSortbyPricePipe,
                GoodTravelComponent,
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
                RouterModule.forRoot(appRoutes, {
                    enableTracing: true,
                    useHash: true
                }),
                ModalModule.forRoot()
            ],
            providers: [MatDatepickerModule, ShipsService, PlanetService, HttpClientModule],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map