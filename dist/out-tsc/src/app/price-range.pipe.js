var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Pipe } from '@angular/core';
var PriceRangePipe = /** @class */ (function () {
    function PriceRangePipe() {
    }
    PriceRangePipe.prototype.transform = function (value, distanceMin, distanceMax) {
        if (distanceMin == undefined)
            return value;
        else {
            var newArr = [];
            for (var i = 0; i < value.length; i++) {
                if (value[i].st_dist >= distanceMin && value[i].st_dist <= distanceMax) {
                    newArr.push(value[i]);
                }
            }
            return newArr;
        }
    };
    PriceRangePipe = __decorate([
        Pipe({
            name: 'priceRange'
        })
    ], PriceRangePipe);
    return PriceRangePipe;
}());
export { PriceRangePipe };
//# sourceMappingURL=price-range.pipe.js.map