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
import { PlanetService } from '../planet.service';
import { ActivatedRoute } from '@angular/router';
import { Output, EventEmitter } from '@angular/core';
var PlanetListComponent = /** @class */ (function () {
    // Service Injection + ActivatedRoute Injection 
    function PlanetListComponent(param_service, _Activatedroute) {
        this._Activatedroute = _Activatedroute;
        // Selection of planet initialization 
        this.currentSelectedPlanet = {
            "pl_name": "no-selected-planet",
            "st_dist": 0
        };
        this.SelectedPlanetChange = new EventEmitter();
        this.userSettings = {
            "budget": 0,
            "distance": ""
        };
        this.service = param_service;
        this.list = [];
    }
    PlanetListComponent.prototype.selection = function (current) {
        this.SelectedPlanetChange.emit(current);
    };
    // OnInit => Reading of URL then Request NASA
    PlanetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        var obs = this.service.getPlanets();
        obs.subscribe(function (param_planets_list) {
            _this.list = param_planets_list;
        });
        this.sub = this._Activatedroute.params.subscribe(function (params) {
            _this.userSettings.budget = params['budget'];
            _this.userSettings.distance = params["distance"];
            _this.distMin = Number(_this.userSettings.distance.split("-")[0]);
            _this.distMax = Number(_this.userSettings.distance.split("-")[1]);
        });
    };
    PlanetListComponent.prototype.goTop = function () {
        var pos = parseInt(window.pageYOffset.toString());
        var proxy = { y: pos };
        TweenMax.to(proxy, 1, {
            y: 0,
            onUpdate: function () {
                window.scrollTo(0, proxy.y);
            }
        });
    };
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], PlanetListComponent.prototype, "SelectedPlanetChange", void 0);
    PlanetListComponent = __decorate([
        Component({
            selector: 'app-planet-list',
            templateUrl: './planet-list.component.html',
            styleUrls: ['./planet-list.component.css']
        }),
        __metadata("design:paramtypes", [PlanetService, ActivatedRoute])
    ], PlanetListComponent);
    return PlanetListComponent;
}());
export { PlanetListComponent };
//# sourceMappingURL=planet-list.component.js.map