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
import { HOTELS } from '../mock-hotels';
import { ActivatedRoute } from "@angular/router";
var HotelsComponent = /** @class */ (function () {
    function HotelsComponent(_Activatedroute) {
        this._Activatedroute = _Activatedroute;
        this.userSettings = {
            "budget": 0,
            "distance": "",
            "SelectedPlanet": "",
            "SelectedShip": ""
        };
        this.hotels = HOTELS;
        this.selectedHotel = {
            name: "no_hotel_defined",
            price: 0,
            img: "",
            priceRange: "",
            rating: ""
        };
    }
    HotelsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this._Activatedroute.params.subscribe(function (params) {
            _this.userSettings.budget = params['budget'];
            _this.userSettings.distance = params["distance"];
            _this.userSettings.SelectedPlanet = params["SelectedPlanet"];
            _this.userSettings.SelectedShip = params["SelectedShip"];
        });
    };
    HotelsComponent.prototype.onSelect = function (hotel) {
        this.selectedHotel = hotel;
    };
    HotelsComponent.prototype.goTop = function () {
        var pos = parseInt(window.pageYOffset.toString());
        var proxy = { y: pos };
        TweenMax.to(proxy, 1, {
            y: 0,
            onUpdate: function () {
                window.scrollTo(0, proxy.y);
            }
        });
    };
    HotelsComponent = __decorate([
        Component({
            selector: 'app-hotels',
            templateUrl: './hotels.component.html',
            styleUrls: ['./hotels.component.css']
        }),
        __metadata("design:paramtypes", [ActivatedRoute])
    ], HotelsComponent);
    return HotelsComponent;
}());
export { HotelsComponent };
//# sourceMappingURL=hotels.component.js.map