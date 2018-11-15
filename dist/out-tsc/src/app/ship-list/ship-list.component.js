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
import { ShipsService } from "../ships.service";
import { ActivatedRoute } from '@angular/router';
import { Output, EventEmitter } from '@angular/core';
var ShipListComponent = /** @class */ (function () {
    // ShipService & ActivatedRoute Injections
    function ShipListComponent(param_my_service, _Activatedroute) {
        this._Activatedroute = _Activatedroute;
        // Selection of planet initialization 
        this.SelectedShipChange = new EventEmitter();
        this.userSettings = {
            "budget": 0,
            "distance": "",
            "SelectedPlanet": ""
        };
        this.service = param_my_service;
        this.ships = [];
    }
    ShipListComponent.prototype.selection = function (current) {
        this.SelectedShipChange.emit(current);
    };
    ShipListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getShips().subscribe(function (ships) {
            _this.ships = ships;
        });
        this.sub = this._Activatedroute.params.subscribe(function (params) {
            _this.userSettings.budget = params['budget'];
            _this.userSettings.distance = params["distance"];
            _this.userSettings.SelectedPlanet = params["SelectedPlanet"];
        });
        console.log(this.userSettings.budget);
    };
    ShipListComponent.prototype.goTop = function () {
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
    ], ShipListComponent.prototype, "SelectedShipChange", void 0);
    ShipListComponent = __decorate([
        Component({
            selector: 'app-ship-list',
            templateUrl: './ship-list.component.html',
            styleUrls: ['./ship-list.component.css']
        }),
        __metadata("design:paramtypes", [ShipsService, ActivatedRoute])
    ], ShipListComponent);
    return ShipListComponent;
}());
export { ShipListComponent };
//# sourceMappingURL=ship-list.component.js.map