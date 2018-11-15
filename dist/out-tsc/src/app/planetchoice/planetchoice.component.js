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
var PlanetchoiceComponent = /** @class */ (function () {
    function PlanetchoiceComponent(_Activatedroute) {
        this._Activatedroute = _Activatedroute;
        this.currentSelectedPlanet = {
            pl_name: "No Planet choosen",
            st_dist: 0
        };
        this.userSettings = {
            "budget": 0,
            "distance": "",
            "chosenPlanet": ""
        };
    }
    PlanetchoiceComponent.prototype.SelectedPlanetChangeHandler = function (SelectedPlanet) {
        this.currentSelectedPlanet.pl_name = SelectedPlanet.pl_name;
        this.currentSelectedPlanet.st_dist = SelectedPlanet.st_dist;
    };
    PlanetchoiceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this._Activatedroute.params.subscribe(function (params) {
            _this.userSettings.budget = params['budget'];
            _this.userSettings.distance = params["distance"];
        });
        console.log(this.userSettings.distance);
    };
    PlanetchoiceComponent.prototype.goTop = function () {
        var pos = parseInt(window.pageYOffset.toString());
        var proxy = { y: pos };
        TweenMax.to(proxy, 1, {
            y: 0,
            onUpdate: function () {
                window.scrollTo(0, proxy.y);
            }
        });
    };
    PlanetchoiceComponent = __decorate([
        Component({
            selector: 'app-planetchoice',
            templateUrl: './planetchoice.component.html',
            styleUrls: ['./planetchoice.component.css']
        }),
        __metadata("design:paramtypes", [ActivatedRoute])
    ], PlanetchoiceComponent);
    return PlanetchoiceComponent;
}());
export { PlanetchoiceComponent };
//# sourceMappingURL=planetchoice.component.js.map