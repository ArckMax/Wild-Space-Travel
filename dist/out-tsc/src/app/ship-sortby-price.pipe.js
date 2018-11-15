var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Pipe } from '@angular/core';
var ShipSortbyPricePipe = /** @class */ (function () {
    function ShipSortbyPricePipe() {
    }
    ShipSortbyPricePipe.prototype.transform = function (value, budgetMax) {
        if (budgetMax == 0 || budgetMax == undefined)
            return value;
        else {
            var newArr = [];
            for (var i = 0; i < value.length; i++) {
                if (value[i].price <= budgetMax) {
                    newArr.push(value[i]);
                }
            }
            return newArr;
        }
    };
    ShipSortbyPricePipe = __decorate([
        Pipe({
            name: 'shipSortbyPrice'
        })
    ], ShipSortbyPricePipe);
    return ShipSortbyPricePipe;
}());
export { ShipSortbyPricePipe };
//# sourceMappingURL=ship-sortby-price.pipe.js.map