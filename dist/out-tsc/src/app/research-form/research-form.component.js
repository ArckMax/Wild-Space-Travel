var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
import { InfoTrip } from '../info-trip';
var ResearchFormComponent = /** @class */ (function () {
    function ResearchFormComponent() {
        //Variable & Function to access to date
        this.roomsFilter = {};
        //  Distance choices
        this.distances = [
            { value: '0-200', viewValue: '0-200' },
            { value: '200-400', viewValue: '200-400' },
            { value: '400-600', viewValue: '400-600' },
            { value: '600-800', viewValue: '600-800' },
            { value: '800-1000', viewValue: '800-1000' },
            { value: '1000-1200', viewValue: '1000-1200' },
            { value: '1200-1400', viewValue: '1200-1400' }
        ];
    }
    ResearchFormComponent.prototype.onChange = function (event) {
        console.log(event);
        // this.getData(newDate);
    };
    ;
    // Function to formalize into an object informations choosen by user
    // Temporarely console.log this object. 
    // This object need to be accessible everywhere on website
    // IDEA => SHOW A RESUME OF SETTINGS JUST UNDER THE NAVBAR, EVERYTIME
    ResearchFormComponent.prototype.getInfo = function (infoTrip) {
        var pos = parseInt(window.pageYOffset.toString());
        var proxy = { y: pos };
        TweenMax.to(proxy, 1, {
            y: 0,
            onUpdate: function () {
                window.scrollTo(0, proxy.y);
            }
        });
        this.obj = new InfoTrip(this.budget, this.distance, this.date);
        console.log("User settings are : " + this.obj.budget + " et " + this.obj.date);
    };
    ;
    ResearchFormComponent = __decorate([
        Component({
            selector: 'app-research-form',
            templateUrl: './research-form.component.html',
            styleUrls: ['./research-form.component.css'],
        })
    ], ResearchFormComponent);
    return ResearchFormComponent;
}());
export { ResearchFormComponent };
//# sourceMappingURL=research-form.component.js.map