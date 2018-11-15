var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
import { HttpClient } from '@angular/common/http';
var PlanetService = /** @class */ (function () {
    function PlanetService(param_http_service) {
        this.myHttpService = param_http_service;
    }
    PlanetService.prototype.getPlanets = function () {
        return this.myHttpService.get("https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?&table=exoplanets&select=pl_name,st_dist&where=pl_kepflag=1&format=json").pipe(map(function (param_response) {
            return param_response;
        }));
    };
    PlanetService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], PlanetService);
    return PlanetService;
}());
export { PlanetService };
//# sourceMappingURL=planet.service.js.map