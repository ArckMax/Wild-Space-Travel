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
var TrendComponent = /** @class */ (function () {
    function TrendComponent() {
        this.title1 = "The Marsupial Lake is a must-see on the Road of Happiness. If the purity of the sky makes this place ideal for star-watching, you will also be able to enjoy many other different activities during daytime. For example, dive in the turquoise-blue water of the lake, or enjoy the breath-taking landscapes that make a perfect scenery for hiking or romantic picnics.";
        this.title2 = "You are travelling for business purposes, this planet offers all comfort you will need: meeting room for virtual conferences, automatised desk concierge, and many more services. Located very close from the most influent companies of the galaxy, you will conduct your business in the best conditions.";
        this.title3 = "Are you part of the very privileged circle of fortunate people, don't hesitate to travel to Agorra: its decadent lifestyle has been making it famous for decades, Don't be surprised if you don't want to leave ! ";
        this.viewImage1 = false;
        this.viewImage2 = false;
        this.viewImage3 = false;
    }
    TrendComponent.prototype.viewInfoImage1 = function () {
        this.viewImage1 = !this.viewImage1;
    };
    ;
    TrendComponent.prototype.viewInfoImage2 = function () {
        this.viewImage2 = !this.viewImage2;
    };
    ;
    TrendComponent.prototype.viewInfoImage3 = function () {
        this.viewImage3 = !this.viewImage3;
    };
    ;
    TrendComponent.prototype.ngOnInit = function () {
    };
    TrendComponent.prototype.goTop = function () {
        var pos = parseInt(window.pageYOffset.toString());
        var proxy = { y: pos };
        TweenMax.to(proxy, 1, {
            y: 0,
            onUpdate: function () {
                window.scrollTo(0, proxy.y);
            }
        });
    };
    TrendComponent = __decorate([
        Component({
            selector: 'app-trend',
            templateUrl: './trend.component.html',
            styleUrls: ['./trend.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], TrendComponent);
    return TrendComponent;
}());
export { TrendComponent };
//# sourceMappingURL=trend.component.js.map