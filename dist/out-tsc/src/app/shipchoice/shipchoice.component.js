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
var ShipchoiceComponent = /** @class */ (function () {
    function ShipchoiceComponent(_Activatedroute) {
        this._Activatedroute = _Activatedroute;
        this.currentSelectedShip = {
            name: "No ship choosen",
            nbEngine: 0,
            nbWing: 0,
            price: 0,
            nbPlaces: 0,
            img: "",
        };
        this.userSettings = {
            "budget": 0,
            "distance": "",
            "SelectedPlanet": ""
        };
    }
    ShipchoiceComponent.prototype.SelectedShipChangeHandler = function (SelectedShip) {
        this.currentSelectedShip.name = SelectedShip.name;
        this.currentSelectedShip.nbEngine = SelectedShip.nbEngine;
        this.currentSelectedShip.nbWing = SelectedShip.nbWing;
        this.currentSelectedShip.price = SelectedShip.price;
        this.currentSelectedShip.nbPlaces = SelectedShip.nbPlaces;
        this.currentSelectedShip.img = SelectedShip.img;
    };
    ShipchoiceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this._Activatedroute.params.subscribe(function (params) {
            _this.userSettings.budget = params['budget'];
            _this.userSettings.distance = params["distance"];
            _this.userSettings.SelectedPlanet = params["SelectedPlanet"];
        });
    };
    ShipchoiceComponent.prototype.goTop = function () {
        var pos = parseInt(window.pageYOffset.toString());
        var proxy = { y: pos };
        TweenMax.to(proxy, 1, {
            y: 0,
            onUpdate: function () {
                window.scrollTo(0, proxy.y);
            }
        });
    };
    ShipchoiceComponent = __decorate([
        Component({
            selector: 'app-shipchoice',
            templateUrl: './shipchoice.component.html',
            styleUrls: ['./shipchoice.component.css']
        }),
        __metadata("design:paramtypes", [ActivatedRoute])
    ], ShipchoiceComponent);
    return ShipchoiceComponent;
}());
export { ShipchoiceComponent };
//# sourceMappingURL=shipchoice.component.js.map