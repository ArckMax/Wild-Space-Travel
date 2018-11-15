var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
var SummaryComponent = /** @class */ (function () {
    // ShipService & ActivatedRoute Injections
    function SummaryComponent(_Activatedroute) {
        this._Activatedroute = _Activatedroute;
        this.userSettings = {
            "budget": 0,
            "distance": "",
            "SelectedPlanet": "",
            "SelectedShip": "",
            "SelectedHotel": ""
        };
    }
    SummaryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this._Activatedroute.params.subscribe(function (params) {
            _this.userSettings.budget = params['budget'];
            _this.userSettings.distance = params["distance"];
            _this.userSettings.SelectedPlanet = params["SelectedPlanet"];
            _this.userSettings.SelectedShip = params["SelectedShip"];
            _this.userSettings.SelectedHotel = params["SelectedHotel"];
        });
    };
    SummaryComponent = __decorate([
        Component({
            selector: 'app-summary',
            templateUrl: './summary.component.html',
            styleUrls: ['./summary.component.css']
        }),
        __metadata("design:paramtypes", [ActivatedRoute])
    ], SummaryComponent);
    return SummaryComponent;
}());
export { SummaryComponent };
//# sourceMappingURL=summary.component.js.map