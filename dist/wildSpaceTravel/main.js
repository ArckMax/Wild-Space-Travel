(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face{\n    font-family: \"newSpace\";\n    src: url(/src/assets/fonts/new_space/New\\ Space.ttf);\n}\n\n@font-face{\n    font-family: \"spaceSurfer\";\n    src: url(/src/assets/fonts/spacesurfer/SpaceSurfer_Demo.ttf);\n\n}\n\n@font-face{\n    font-family : \"SpaceXrebron\";\n    src: url(/src/assets/fonts/space_1/space\\ Xrebron.ttf);\n}\n\n@font-face{\n    font-family : \"RadioSpace\";\n    src: url(/src/assets/fonts/radio_space/radiospace.ttf);\n}\n\n@font-face{\n    font-family : \"RadioSpace3D\";\n    src: url(/src/assets/fonts/radio_space/radiospace3d.ttf);\n}\n\n@font-face{\n    font-family : \"OtherSpace\";\n    src: url(/src/assets/fonts/other_space/Other\\ Space.ttf);\n}\n\n@font-face{\n    font-family : \"SignPainterRegular\";\n    src: url(/src/assets/fonts/sign-painter/Sign_Painter_Regular.ttf);\n\n}\n\n@font-face{\n    font-family : \"Sign Painter\";\n    src: url(/src/assets/fonts/sign-painter/Sign_Painter.ttc);\n\n}\n\n.wrap{\n    background-image: url(/src/assets/img/galaxy1.jpg);\n    background-attachment: fixed;\n    padding:10px;\n    padding-bottom:150px;\n}\n\n\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <app-navbar id=\"top\"></app-navbar>\n\n    <div class=\"wrap\">\n        <router-outlet></router-outlet>\n    </div>\n\n    <app-footer></app-footer>\n    \n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var AppComponent = /** @class */ (function () {
    function AppComponent(platformId, appId) {
        this.platformId = platformId;
        this.appId = appId;
        this.title = 'wildSpaceTravel';
    }
    AppComponent.prototype.onActivate = function (event) {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            var scrollToTop_1 = window.setInterval(function () {
                var pos = window.pageYOffset;
                if (pos > 0) {
                    window.scrollTo(0, pos - 50); // how far to scroll on each step
                }
                else {
                    window.clearInterval(scrollToTop_1);
                }
            }, 16);
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"])),
        __metadata("design:paramtypes", [Object, String])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _planetchoice_planetchoice_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./planetchoice/planetchoice.component */ "./src/app/planetchoice/planetchoice.component.ts");
/* harmony import */ var _shipchoice_shipchoice_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shipchoice/shipchoice.component */ "./src/app/shipchoice/shipchoice.component.ts");
/* harmony import */ var _summary_summary_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./summary/summary.component */ "./src/app/summary/summary.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _research_form_research_form_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./research-form/research-form.component */ "./src/app/research-form/research-form.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _planet_list_planet_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./planet-list/planet-list.component */ "./src/app/planet-list/planet-list.component.ts");
/* harmony import */ var _ship_list_ship_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ship-list/ship-list.component */ "./src/app/ship-list/ship-list.component.ts");
/* harmony import */ var _hotel_selection_hotel_selection_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./hotel-selection/hotel-selection.component */ "./src/app/hotel-selection/hotel-selection.component.ts");
/* harmony import */ var _loading_page_loading_page_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./loading-page/loading-page.component */ "./src/app/loading-page/loading-page.component.ts");
/* harmony import */ var _hotels_hotels_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./hotels/hotels.component */ "./src/app/hotels/hotels.component.ts");
/* harmony import */ var _trend_planete_trend_planete_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./trend-planete/trend-planete.component */ "./src/app/trend-planete/trend-planete.component.ts");
/* harmony import */ var _trend_trend_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./trend/trend.component */ "./src/app/trend/trend.component.ts");
/* harmony import */ var _ships_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./ships.service */ "./src/app/ships.service.ts");
/* harmony import */ var _planet_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./planet.service */ "./src/app/planet.service.ts");
/* harmony import */ var _price_range_pipe__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./price-range.pipe */ "./src/app/price-range.pipe.ts");
/* harmony import */ var _hotel_price_range_pipe__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./hotel-price-range.pipe */ "./src/app/hotel-price-range.pipe.ts");
/* harmony import */ var _ship_sortby_price_pipe__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./ship-sortby-price.pipe */ "./src/app/ship-sortby-price.pipe.ts");
/* harmony import */ var _good_travel_good_travel_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./good-travel/good-travel.component */ "./src/app/good-travel/good-travel.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

































var appRoutes = [
    { path: "homepage", component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_12__["HomepageComponent"] },
    { path: "loading", component: _loading_page_loading_page_component__WEBPACK_IMPORTED_MODULE_22__["LoadingPageComponent"] },
    { path: "shipchoice", component: _shipchoice_shipchoice_component__WEBPACK_IMPORTED_MODULE_14__["ShipchoiceComponent"] },
    { path: "planetchoice", component: _planetchoice_planetchoice_component__WEBPACK_IMPORTED_MODULE_13__["PlanetchoiceComponent"] },
    { path: "homepage/planetchoice", component: _planetchoice_planetchoice_component__WEBPACK_IMPORTED_MODULE_13__["PlanetchoiceComponent"] },
    { path: "", redirectTo: "homepage", pathMatch: "full" },
    { path: "hotelselection", component: _hotel_selection_hotel_selection_component__WEBPACK_IMPORTED_MODULE_21__["HotelSelectionComponent"] },
    { path: "planetchoice/:budget/:distance", component: _planetchoice_planetchoice_component__WEBPACK_IMPORTED_MODULE_13__["PlanetchoiceComponent"] },
    { path: "shipchoice/:budget/:distance/:SelectedPlanet", component: _shipchoice_shipchoice_component__WEBPACK_IMPORTED_MODULE_14__["ShipchoiceComponent"] },
    { path: "summary/:budget/:distance/:SelectedPlanet/:SelectedShip", component: _summary_summary_component__WEBPACK_IMPORTED_MODULE_15__["SummaryComponent"] },
    { path: "hotelpage/:budget/:distance/:SelectedPlanet/:SelectedShip", component: _hotel_selection_hotel_selection_component__WEBPACK_IMPORTED_MODULE_21__["HotelSelectionComponent"] },
    { path: "backToSummary/:budget/:distance/:SelectedPlanet/:SelectedShip/:SelectedHotel", component: _summary_summary_component__WEBPACK_IMPORTED_MODULE_15__["SummaryComponent"] },
    { path: "trend1/:budget/:distance/:SelectedPlanet/:SelectedShip", component: _summary_summary_component__WEBPACK_IMPORTED_MODULE_15__["SummaryComponent"] },
    { path: "trend2/:budget/:distance/:SelectedPlanet/:SelectedShip", component: _summary_summary_component__WEBPACK_IMPORTED_MODULE_15__["SummaryComponent"] },
    { path: "trend3/:budget/:distance/:SelectedPlanet/:SelectedShip", component: _summary_summary_component__WEBPACK_IMPORTED_MODULE_15__["SummaryComponent"] },
    { path: "goodtravel", component: _good_travel_good_travel_component__WEBPACK_IMPORTED_MODULE_31__["GoodTravelComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_12__["HomepageComponent"],
                _planetchoice_planetchoice_component__WEBPACK_IMPORTED_MODULE_13__["PlanetchoiceComponent"],
                _shipchoice_shipchoice_component__WEBPACK_IMPORTED_MODULE_14__["ShipchoiceComponent"],
                _summary_summary_component__WEBPACK_IMPORTED_MODULE_15__["SummaryComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_16__["NavbarComponent"],
                _research_form_research_form_component__WEBPACK_IMPORTED_MODULE_17__["ResearchFormComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_18__["FooterComponent"],
                _planet_list_planet_list_component__WEBPACK_IMPORTED_MODULE_19__["PlanetListComponent"],
                _ship_list_ship_list_component__WEBPACK_IMPORTED_MODULE_20__["ShipListComponent"],
                _hotel_selection_hotel_selection_component__WEBPACK_IMPORTED_MODULE_21__["HotelSelectionComponent"],
                _loading_page_loading_page_component__WEBPACK_IMPORTED_MODULE_22__["LoadingPageComponent"],
                _hotels_hotels_component__WEBPACK_IMPORTED_MODULE_23__["HotelsComponent"],
                _trend_planete_trend_planete_component__WEBPACK_IMPORTED_MODULE_24__["TrendPlaneteComponent"],
                _trend_trend_component__WEBPACK_IMPORTED_MODULE_25__["TrendComponent"],
                _price_range_pipe__WEBPACK_IMPORTED_MODULE_28__["PriceRangePipe"],
                _hotel_price_range_pipe__WEBPACK_IMPORTED_MODULE_29__["HotelPriceRangePipe"],
                _ship_sortby_price_pipe__WEBPACK_IMPORTED_MODULE_30__["ShipSortbyPricePipe"],
                _good_travel_good_travel_component__WEBPACK_IMPORTED_MODULE_31__["GoodTravelComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(appRoutes, {
                    enableTracing: true,
                    useHash: true
                }),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__["ModalModule"].forRoot()
            ],
            providers: [_angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"], _ships_service__WEBPACK_IMPORTED_MODULE_26__["ShipsService"], _planet_service__WEBPACK_IMPORTED_MODULE_27__["PlanetService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* General rules */\n\n.main-wrapper{\n    background-color: black;\n}\n\n.footer-container{\n    margin:10px;\n    padding:20px;\n}\n\nh3{\n    font-family: \"newSpace\",'Courier New', Courier, monospace;\n    color: #FFF;\n    text-shadow:0 5px 15px white;\n    margin-bottom:10%;\n}\n\n/* Form rules */\n\nform input, form select{\n    width: 70%;\n    margin-bottom:10%;\n    border-radius:0%;\n}\n\n/* Social networks rules  */\n\n.networks-container{\n    font-size:4em;\n}\n\na{\n    transition: all 0.5s;\n}\n\n.sn-icon{\n    color:#51b0ff;\n}\n\na:hover{\n    color:#FFF;\n    text-shadow:0 5px 15px white;\n}\n\n/* Legal mentions rules  */\n\n#legal-mentions{\n    color : #83D7DC;\n    border : 0.01px solid #83D7DC;\n    text-align: center;\n}\n\n/* Credits */\n\n.credits{\n    color : #83D7DC;\n    border : 0.01px solid #FFF;\n    text-align: center;\n    font-family: 'Kodchasan', sans-serif;\n}"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid text-center main-wrapper\">\n\n\n  <div id=\"form-contact\" class=\"col-12 col-lg-5 text-center footer-container d-inline-block align-top\">\n    <h3>Contact us</h3>\n    <form class=\"container text\">\n\n\n      <input type=\"text\" id=\"name\" name=\"name\" placeholder=\"Name\" />\n      <input type=\"email\" id=\"email\" name=\"email\" placeholder=\"Mail\" />\n\n      <input type=\"textarea\" id=\"message\" name=\"message\" placeholder=\"Your message\" />\n      <input type=\"submit\" value=\"Send your message\" />\n\n\n    </form>\n  </div>\n\n  <div id=\"social-networks\" class=\"col-12 col-lg-3 text-center footer-container d-inline-block align-top\">\n    <h3>Social networks</h3>\n    <div class=\"container networks-container\">\n\n      <div class=\"row\">\n        <div class=\"sn-box col-4 offset-2\">\n          <a href=\"#\" class=\"fa fa-facebook-square sn-icon\"></a>\n        </div>\n\n        <div class=\"sn-box col-4\">\n          <a href=\"#\" class=\"fa fa-twitter-square sn-icon\"></a>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"sn-box col-4 offset-2\">\n          <a href=\"#\" class=\"fa fa-linkedin-square sn-icon\"></a>\n        </div>\n\n        <div class=\"sn-box col-4\">\n          <a href=\"#\" class=\"fa fa-github-square sn-icon\"></a>\n        </div>\n      </div>\n\n\n    </div>\n  </div>\n\n\n  <div id=\"legal-mentions\" class=\"col-12 col-lg-3 footer-container text-center d-inline-block align-top\">\n    <h3>Legal Notice</h3>\n    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sapiente porro nam. Exercitationem, animi vel sequi\n      libero, ullam laudantium nemo, necessitatibus amet magni eaque totam porro eveniet dolores optio!\n      Repudiandae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sapiente porro nam. Exercitationem, animi\n      vel sequi libero, ullam laudantium nemo, necessitatibus amet magni eaque totam porro eveniet dolores optio!\n      Repudiandae</p>\n  </div>\n\n  <div class=\"col-12 credits\">\n    <span>WildSpaceTravel Team : <a href=\"https://www.linkedin.com/in/h-agnes-genay/\" target=\"_blank\" and rel=\"noopener noreferrer\">H.\n        Agnès Genay</a> |\n      <a href=\"https://www.linkedin.com/in/lo%C4%A9c-jacome-de-sousa/\" target=\"_blank\" and rel=\"noopener noreferrer\">Loïc\n        Jacome de Sousa</a> |\n      <a href=\"https://www.linkedin.com/in/maxime-gypteau/\" target=\"_blank\" and rel=\"noopener noreferrer\">Maxime\n        Gypteau</a> \\ <a href=\"https://wildcodeschool.fr/\" target=\"_blank\" and rel=\"noopener noreferrer\">WCS Inc.</a></span>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/good-travel/good-travel.component.css":
/*!*******************************************************!*\
  !*** ./src/app/good-travel/good-travel.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.GoodTravel {\n  display:inline-block;\n  overflow:hidden;\n  font-size: 4vw;\n  font-family: \"newSpace\";  \n  margin-top:3em;\n  text-align: center;\n  margin-bottom: 3em;\n  color:white;\n  white-space:nowrap;\n  margin-left: 1em;\n  \n\n}\n\ndiv:first-of-type {    \n  -webkit-animation: showup 7s infinite;    \n          animation: showup 7s infinite;\n}\n\ndiv:last-of-type {\n  width:0px;\n  -webkit-animation: reveal 7s infinite;\n          animation: reveal 7s infinite;\n}\n\ndiv:last-of-type span {\n  margin-left:-100px;\n  -webkit-animation: slidein 7s infinite;\n          animation: slidein 7s infinite;\n}\n\n@-webkit-keyframes showup {\n    0% {opacity:0;}\n    20% {opacity:1;}\n    80% {opacity:1;}\n    100% {opacity:0;}\n}\n\n@keyframes showup {\n    0% {opacity:0;}\n    20% {opacity:1;}\n    80% {opacity:1;}\n    100% {opacity:0;}\n}\n\n@-webkit-keyframes slidein {\n    0% { margin-left:-800px; }\n    20% { margin-left:-800px; }\n    35% { margin-left:0px; }\n    100% { margin-left:0px; }\n}\n\n@keyframes slidein {\n    0% { margin-left:-800px; }\n    20% { margin-left:-800px; }\n    35% { margin-left:0px; }\n    100% { margin-left:0px; }\n}\n\n@-webkit-keyframes reveal {\n    0% {opacity:0;width:0px;}\n    20% {opacity:1;width:0px;}\n    30% {width:1300px;}\n    80% {opacity:1;}\n    100% {opacity:0;width:1300px;}\n}\n\n@keyframes reveal {\n    0% {opacity:0;width:0px;}\n    20% {opacity:1;width:0px;}\n    30% {width:1300px;}\n    80% {opacity:1;}\n    100% {opacity:0;width:1300px;}\n}\n\n"

/***/ }),

/***/ "./src/app/good-travel/good-travel.component.html":
/*!********************************************************!*\
  !*** ./src/app/good-travel/good-travel.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"GoodTravel\"> \n  <span>Have a Good Travel !!!!</span>\n</div>\n"

/***/ }),

/***/ "./src/app/good-travel/good-travel.component.ts":
/*!******************************************************!*\
  !*** ./src/app/good-travel/good-travel.component.ts ***!
  \******************************************************/
/*! exports provided: GoodTravelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoodTravelComponent", function() { return GoodTravelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GoodTravelComponent = /** @class */ (function () {
    function GoodTravelComponent() {
    }
    GoodTravelComponent.prototype.ngOnInit = function () {
    };
    GoodTravelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-good-travel',
            template: __webpack_require__(/*! ./good-travel.component.html */ "./src/app/good-travel/good-travel.component.html"),
            styles: [__webpack_require__(/*! ./good-travel.component.css */ "./src/app/good-travel/good-travel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GoodTravelComponent);
    return GoodTravelComponent;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.component.css":
/*!*************************************************!*\
  !*** ./src/app/homepage/homepage.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/homepage/homepage.component.html":
/*!**************************************************!*\
  !*** ./src/app/homepage/homepage.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrap\">\n    <h1 class=\"text-center pagetitle\"> Please select your trip preferences</h1>\n    <div class=\"wrap-center justify-content-center\">\n        <app-research-form ></app-research-form>\n    </div>\n</div>\n<app-trend></app-trend>\n\n"

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomepageComponent = /** @class */ (function () {
    function HomepageComponent() {
    }
    HomepageComponent.prototype.ngOnInit = function () {
    };
    HomepageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__(/*! ./homepage.component.html */ "./src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component.css */ "./src/app/homepage/homepage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/hotel-price-range.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/hotel-price-range.pipe.ts ***!
  \*******************************************/
/*! exports provided: HotelPriceRangePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelPriceRangePipe", function() { return HotelPriceRangePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HotelPriceRangePipe = /** @class */ (function () {
    function HotelPriceRangePipe() {
    }
    HotelPriceRangePipe.prototype.transform = function (value, param_type_tri) {
        if (param_type_tri == undefined) {
            return value;
        }
        else if (param_type_tri == "price") {
            return value.sort();
        }
        return value.sort();
    };
    HotelPriceRangePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'hotelPriceRange'
        })
    ], HotelPriceRangePipe);
    return HotelPriceRangePipe;
}());



/***/ }),

/***/ "./src/app/hotel-selection/hotel-selection.component.css":
/*!***************************************************************!*\
  !*** ./src/app/hotel-selection/hotel-selection.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n#main-title{\n    font-family: 'Kodchasan', sans-serif; /*  'Bad Script', */ /* 'Nova Script',  *//* ' Aguafina Script',  */ /* 'Oleo Script' *//* ,cursive; */ \n    color:#FFF;\n    text-shadow:0 5px 15px black;\n    font-size: 2em;\n    padding-top: 10%;\n}\n\n.card-header{\n    margin:0 !important;\n    padding:0 !important;\n}\n\n.btn {\n\n    margin:0 !important;\n    padding:0 !important;\n\n}\n\n.card {\n\n     background-color:rgba(2, 0, 14, 0.51) !important;\n     color:rgba(237, 231, 231);\n     text-shadow:0 5px 15px #fff;\n     \n }\n\n.card-body .hotel-description{\n    font-size: 1.2em !important;\n    font-family: 'Kodchasan', sans-serif;\n    \n}\n\n.more-details-button{\n\n    border-radius:5%;\n    padding:0.1em;\n    margin-top:0;\n    font-size:0.8em;\n   \n    \n}\n\n#hotelselectionpage{\n\n    width:80%;\n    margin-left:10%;\n\n}\n\n@media only screen and (min-width:900px){\n\n    #hotelselectionpage{\n\n        width:50%;\n        margin-left:25%;\n        \n    \n    }\n\n}\n\n.hotel-img-container{\n    position:relative;\n    text-align: center;\n    width: 100%;\n    max-height: 300px;\n    overflow: hidden;\n    padding:0;\n       \n}\n\nh5{\n\n    font-size:6.5vw;\n    text-shadow:0 5px 15px white;\n    opacity:0.9;\n    \n}\n\n.hotelpage-titles {\n\n    font-family: 'Kodchasan', sans-serif; /*  'Bad Script', */ /* 'Nova Script',  *//* ' Aguafina Script',  */ /* 'Oleo Script' *//* ,cursive; */ \n    color:#FFF;\n    text-shadow:0 5px 15px black;\n    font-size:2em;\n    padding-top: 5%;\n    padding-bottom:5%;\n    text-align: center;\n\n}\n\n.hotel-pic-caption{\n    position:absolute; \n    padding-top:20%;   \n    color:#FFF;\n    text-shadow:0 5px 15px white;\n    font-size:2em;\n    line-height:2em;\n    opacity:0.8;\n    z-index:1;\n    font-family: /* ' Aguafina Script', */ 'Oleo Script' ; \n    \n}\n\n.hotel-gallery{\n    padding-top:5vw;\n    padding-bottom:5vw;\n\n    \n}\n\n.hotel-gallery img{\n    margin:1vw;\n}\n\n#carouselExampleControls{\n    padding-top:8vw;\n}\n\n.carousel-caption h5{\n\n    font-size:5vw;\n\n\n}\n\n.wspselection{\n\n    margin-top:1em;\n}"

/***/ }),

/***/ "./src/app/hotel-selection/hotel-selection.component.html":
/*!****************************************************************!*\
  !*** ./src/app/hotel-selection/hotel-selection.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"hotelpage-titles\">\n    <p class=\"top3\"> TOP 3 HOTEL DESTINATIONS</p>\n</div>\n\n<div id=\"hotelselectionpage\">\n    <div id=\"container\" class=\"hotelpics\">\n        <div class=\"row no-gutters\">\n            <div class=\"accordion\" id=\"accordionExample\">\n\n\n\n                <div class=\"card\">\n                    <div class=\"card-header\" id=\"headingOne\">\n                        <h5 class=\"mb-0\">\n                            <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseOne\"\n                                aria-expanded=\"true\" aria-controls=\"collapseOne\">\n                                <div class=\"hotel-img-container no-gutters col-xs-12 col-sm-12 col-lg-12\">\n                                    <div class=\" hotel-pic-caption col-xs-12 col-sm-12 col-lg-12\">\n                                        <p>MOON RESORT </p>\n                                        <button class=\"more-details-button\"> <small>More details</small></button>\n                                    </div>\n                                    <img class=\"hotel-pic col-xs-12 col-sm-12 col-lg-12\" src=\"./assets/img/ufo-1942755_1280.jpg\" />\n                                    <!-- srcset=\"./assets/img/ufo-1942755_320-320.jpg 320w,\n                                                    ./assets/img/ufo-1942755_640-640.jpg 640w,\n                                                    ./assets/img/ufo-1942755_1280-1280.jpg 1280w,\n                                                    ./assets/img/ufo-1942755_1920-1920.jpg 1920w\"> -->\n                                            \n                                </div>        \n                            </button>\n                        </h5>\n                    </div> \n                        <div id=\"collapseOne\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordionExample\">\n                            <div class=\"card-body\">\n                                <ul class=\"hotel-description\">\n                                    <li>Rating : 5/5</li>\n                                    <li>Price per person/per night : 1500 units </li>\n                                    <li>Hotel Amenities:\n                                        <ul>\n                                            <li>Safe-deposit box at front desk </li>\n                                            <li>Bar/lounge</li>\n                                            <li>Concierge services </li>\n                                            <li>Gift shops or newsstand</li>\n                                            <li>Tours/ticket assistance </li>\n                                            <li>ATM/banking </li>      \n                                        </ul>\n                                    </li>  \n                                </ul>\n                                    \n                            </div>\n                        </div>\n                </div>\n\n\n\n\n       \n\n\n\n\n\n\n                <div class=\"card\">\n                    <div class=\"card-header\" id=\"headingTwo\">\n                        <h5 class=\"mb-0\">\n                            <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseTwo\"\n                                aria-expanded=\"false\" aria-controls=\"collapseTwo\">\n\n\n                                <div class=\"hotel-img-container no-gutters col-xs-12 col-sm-12 col-lg-12\">\n\n                                    <div class=\"hotel-pic-caption col-xs-12 col-sm-12 col-lg-12\">\n                                        <p>MARS FIRECAMP</p>\n                                        <button class=\"more-details-button\"><small>More details</small> </button>\n                                    </div>\n                                    <img class=\"hotel-pic col-xs-12 col-sm-12 col-lg-12\" src=\"./assets/img/asoggetti-662605-1280.jpg/\">\n                                    <!--/*srcset=\"./assets/img/asoggetti-662605-320-320.jpg 320w, \n                                                    ./assets/img/asoggetti-662605-640-640.jpg 640w,\n                                                    ./assets/img/asoggetti-662605-640-640.jpg 1280w,\n                                                    ./assets/img/asoggetti-662605-640-640.jpg 1920w\"> -->\n\n                                </div>\n                            </button>\n                        </h5>\n                    </div>\n\n                    <div id=\"collapseTwo\" class=\"collapse hide\" aria-labelledby=\"headingTwo\" data-parent=\"#accordionExample\">\n                        <div class=\"card-body\">\n                            <ul class=\"hotel-description\">\n                                <li>Rating :3/5</li>\n                                <li>Price per person/per night : 2000 units </li>\n                                <li>Hotel Amenities:\n                                    <ul>\n                                        <li>Safe-deposit box at front desk </li>\n                                        <li>Bar/lounge</li>\n                                        <li>Concierge services </li>\n                                        <li>Gift shops or newsstand</li>\n                                        <li>Tours/ticket assistance </li>\n                                        <li>ATM/banking </li>\n                                    </ul>\n                                </li>\n                            </ul>\n\n                    </div>\n                               \n                            \n                    </div>\n                \n                        </div>\n                    </div>\n                </div>\n\n\n\n\n\n\n\n\n\n\n\n\n                <div class=\"card\">\n                        <div class=\"card-header\" id=\"headingTree\">\n                        <h5 class=\"mb-0\">\n                            <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseTree\" aria-expanded=\"true\" aria-controls=\"collapseTree\">\n\n                                <div class=\"hotel-img-container no-gutters col-xs-12 col-sm-12 col-lg-12\">\n                                    <div class=\"hotel-pic-caption col-xs-12 col-sm-12 col-lg-12\"> \n                                        <p>PLUTO CRUISE</p>\n                                        <button class=\"more-details-button\"><small>More details</small></button> \n                                    \n                                    </div>\n                                    <img class=\"hotel-pic col-xs-12 col-sm-12 col-lg-12\" src=\"./assets/img/space-2197862_1280.jpg/\">\n                                    <!-- srcset=\"./assets/img/ufo-1942755_320-320.jpg 320w,\n                                                ./assets/img/ufo-1942755_640-640.jpg 640w,\n                                                ./assets/img/ufo-1942755_1280-1280.jpg 1280w,\n                                                ./assets/img/ufo-1942755_1920-1920.jpg 1920w\"> -->\n\n                                </div>   \n                                \n                            </button>\n                        </h5>\n                        </div>\n                    \n                        <div id=\"collapseTree\" class=\"collapse hide\" aria-labelledby=\"headingTree\" data-parent=\"#accordionExample\">\n                        <div class=\"card-body\">\n                            <ul class=\"hotel-description\">\n                                <li>Rating :4/5</li>\n                                <li>Price per person/per night : 1500 units </li>\n                                <li>Hotel Amenities:\n                                    <ul>\n                                        <li>Safe-deposit box at front desk </li>\n                                        <li>Bar/lounge</li>\n                                        <li>Concierge services </li>\n                                        <li>Gift shops or newsstand</li>\n                                        <li>Tours/ticket assistance </li>\n                                        <li>ATM/banking </li>      \n                                    </ul>\n                                </li>  \n                            </ul>\n                                \n                        </div>\n\n                    \n                \n                    </div>\n                </div>\n\n            </div>\n        </div>\n\n                \n        <div class=\"hotelpage-titles\"> <p class=\"wspselection\"> WILD SPACE TRAVEL'S SELECTION</p></div>\n            <app-hotels></app-hotels>\n        "

/***/ }),

/***/ "./src/app/hotel-selection/hotel-selection.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/hotel-selection/hotel-selection.component.ts ***!
  \**************************************************************/
/*! exports provided: HotelSelectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelSelectionComponent", function() { return HotelSelectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HotelSelectionComponent = /** @class */ (function () {
    function HotelSelectionComponent() {
    }
    HotelSelectionComponent.prototype.ngOnInit = function () {
    };
    HotelSelectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hotel-selection',
            template: __webpack_require__(/*! ./hotel-selection.component.html */ "./src/app/hotel-selection/hotel-selection.component.html"),
            styles: [__webpack_require__(/*! ./hotel-selection.component.css */ "./src/app/hotel-selection/hotel-selection.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HotelSelectionComponent);
    return HotelSelectionComponent;
}());



/***/ }),

/***/ "./src/app/hotels/hotels.component.css":
/*!*********************************************!*\
  !*** ./src/app/hotels/hotels.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#hotelslistpage{\n   \n   width:80%;\n   margin-left:6.5%;\n\n}\n\n\n.hotelpage-titles2{\n    color:#fff;\n    text-align: center;\n    padding:5vw;\n    font-family:\"newSpace\", Arial, Helvetica, sans-serif;\n    opacity:0.8;\n\n}\n\n\n.hotels-list{\n\n    padding-bottom:5vw;\n   \n}\n\n\n.bold-hotel-title{\n\n  font-weight: bolder;\n  text-decoration: underline;\n}\n\n\n.hotels li {\n    font-family:'Kodchasan', sans-serif; /*  'Bad Script', */ /* 'Nova Script', */ /* 'Aguafina Script', */ /* 'Oleo Script',cursive; */ \n    cursor: pointer;\n    position: relative;   \n    font-size:1.2em;   \n    background-color: #fff;\n    list-style-type: none;\n    opacity:0.8;\n    margin: .5em;\n    padding: .3em 0 .3em;\n    border-radius: 4px;\n   \n  }\n\n\n.hotels li.selected:hover { \n    color: rgb(1, 73, 114);\n    \n  }\n\n\n.hotels li:hover {\n    color:#F50057;\n    background-color:#fff;\n    left: .1em;\n    \n  }\n\n\n.list-inner div{\n\n    font-size:0.9em; \n    margin-left:5%;\n  }\n\n\n.list-inner button{\n    float:right;\n    margin-bottom: 2em;\n    margin-right: 2em;\n    margin-top:2em;\n    border-radius: 5%;\n  }\n\n\n.list-inner button:hover{\n    color: #F50057;\n    text-shadow:0 10px 15px #fff;\n    right: .5em;\n    \n  }\n\n\n.list-inner img{\n\n    width:90%;\n    margin-left:5%;\n    margin-bottom:2em;\n    margin-top:1em;\n    \n  }\n\n\n.list-inner:hover{\n    left:0;\n   \n  }\n\n\n.amenities{\n\n  font-weight:bold;\n  text-decoration: underline;\n\n }\n\n\n.hotels .list-inner .selected:hover {\n  background-color: red !important;\n  color:black;\n  \n}\n\n\n/*  .sort-price-button , .sort-rating-button{\n  cursor: pointer;\n   background-color:#FFF;\n   opacity:0.7;\n   color:black;\n   padding:0.3em;\n   border-radius:10%;\n   margin-right:1em;\n   font-family: 'Kodchasan', sans-serif;\n\n } */\n\n\n\n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/hotels/hotels.component.html":
/*!**********************************************!*\
  !*** ./src/app/hotels/hotels.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div id=\"hotelslistpage\">\n  <div class=\"hotels-list\">\n\n    \n\n\n<!--         <button (click) =\"fonction()\" class=\"sort-price-button\"> sort by price </button> \n             <button (click) = \"fonction()\" class=\"sort-rating-button\"> sort by rating</button> -->\n\n\n\n\n      <div class=\"accordion\" id=\"accordionExample\">\n\n          <ul class=\"hotels\">\n\n              <li *ngFor=\"let hotel of hotels\" [class.selected]=\"hotel === selectedHotel\" (click)=\"onSelect(hotel)\" class=\"row\" >\n              \n                <div class=\"col-xs-4 col-sm-4 col-md-6 bold-hotel-title\">  {{hotel.name | uppercase}}</div>\n                <div class=\"col-xs-4 col-sm-4 col-md-6\"> Price : {{hotel.price}}.units /night /person </div>\n                <div class=\"col-xs-2 col-sm-2 col-md-6\" >Rating : {{hotel.rating}}</div>\n                <div>\n                  <button class=\"btn btn-link col-xs-2 col-sm-2 col-md-6\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">More Details </button> \n                </div>\n\n\n           \n\n                <div id=\"collapseOne\" class=\"collapse hide list-inner\" aria-labelledby=\"headingOne\" data-parent=\"#accordionExample\">\n                        \n                        <img src=\"{{hotel.img}}\"/>\n                        <div class=\"amenities\">HOTEL AMENITIES:</div>\n                        <div>Safe-deposit box at front desk </div>\n                        <div>Bar/lounge</div>\n                        <div>Concierge services </div>\n                        <div>Gift shops or newsstand</div>\n                        <div>Tours/ticket assistance </div>\n                        <div>ATM/banking </div>   \n                        \n                        <button [routerLink]=\"['/backToSummary', userSettings.budget, userSettings.distance, userSettings.SelectedPlanet, userSettings.SelectedShip, selectedHotel.name]\" routerLinkActive=\"router-link-active\" (click)=\"goTop()\" >BOOK this hotel</button>\n            \n                          \n                </div>\n                \n              </li>\n          </ul>\n      </div>\n\n\n\n\n\n<!--       <div *ngIf=\"selectedHotel.name!='no_hotel_defined'\"> \n          <h2> More Details about {{selectedHotel.name | uppercase}}</h2>\n          <div >\n            <img src = \"{{selectedHotel.img}}\" class=\"selected-img-hotel\">\n          </div>   \n      </div> -->\n\n\n  </div>\n  </div>\n\n\n"

/***/ }),

/***/ "./src/app/hotels/hotels.component.ts":
/*!********************************************!*\
  !*** ./src/app/hotels/hotels.component.ts ***!
  \********************************************/
/*! exports provided: HotelsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelsComponent", function() { return HotelsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock_hotels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mock-hotels */ "./src/app/mock-hotels.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HotelsComponent = /** @class */ (function () {
    function HotelsComponent(_Activatedroute) {
        this._Activatedroute = _Activatedroute;
        this.userSettings = {
            "budget": 0,
            "distance": "",
            "SelectedPlanet": "",
            "SelectedShip": ""
        };
        this.hotels = _mock_hotels__WEBPACK_IMPORTED_MODULE_1__["HOTELS"];
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hotels',
            template: __webpack_require__(/*! ./hotels.component.html */ "./src/app/hotels/hotels.component.html"),
            styles: [__webpack_require__(/*! ./hotels.component.css */ "./src/app/hotels/hotels.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], HotelsComponent);
    return HotelsComponent;
}());



/***/ }),

/***/ "./src/app/info-trip.ts":
/*!******************************!*\
  !*** ./src/app/info-trip.ts ***!
  \******************************/
/*! exports provided: InfoTrip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoTrip", function() { return InfoTrip; });
var InfoTrip = /** @class */ (function () {
    function InfoTrip(bdt, dist, dte) {
        this.budget = bdt;
        this.distance = dist;
        this.date = dte;
    }
    return InfoTrip;
}());



/***/ }),

/***/ "./src/app/loading-page/loading-page.component.css":
/*!*********************************************************!*\
  !*** ./src/app/loading-page/loading-page.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n.wild-space-travel{\n\n    background-image:url('laura-vinck-427554-1280.jpg');\n    background-position:center center;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n    text-align:center;     \n    width: 100%;\n    height: 800px;\n    font-family: 'Kodchasan', sans-serif; /*  'Bad Script', */ /* 'Nova Script',  *//* ' Aguafina Script',  */ /* 'Oleo Script' *//* ,cursive; */ \n    font-size:8vw;\n  }\n\n\n\n.container-loading{\n  \n  padding-top:10%;\n}\n\n\n\n.loading-text{\n    font-size:12vw;\n    color:#fff;\n    text-shadow:0 5px 15px white;\n    \n}\n\n\n\n/* ---loading animation----*/\n\n\n\n.lds-ripple {\n    display: inline-block;\n    position: relative;\n    width: 64px;\n    height: 64px;\n  }\n\n\n\n.lds-ripple div {\n    position: absolute;\n    border: 4px solid #fff;\n    opacity: 1;\n    border-radius: 50%;\n    -webkit-animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;\n            animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;\n  }\n\n\n\n.lds-ripple div:nth-child(2) {\n    -webkit-animation-delay: -0.5s;\n            animation-delay: -0.5s;\n  }\n\n\n\n@-webkit-keyframes lds-ripple {\n    0% {\n      top: 28px;\n      left: 28px;\n      width: 0;\n      height: 0;\n      opacity: 1;\n    }\n    100% {\n      top: -1px;\n      left: -1px;\n      width: 58px;\n      height: 58px;\n      opacity: 0;\n    }\n  }\n\n\n\n@keyframes lds-ripple {\n    0% {\n      top: 28px;\n      left: 28px;\n      width: 0;\n      height: 0;\n      opacity: 1;\n    }\n    100% {\n      top: -1px;\n      left: -1px;\n      width: 58px;\n      height: 58px;\n      opacity: 0;\n    }\n  }\n  "

/***/ }),

/***/ "./src/app/loading-page/loading-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/loading-page/loading-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"wild-space-travel\">\n\n  <div class=\"container-loading\">\n    <div class=\"loading-text\"><h1>Wild Space Travel</h1></div>\n    <div class=\"lds-ripple\"><div></div><div></div></div>\n    <div class=\"loading-text\"><h1>will be with you </h1></div>\n    <div class=\"loading-text\"><h1>within seconds... </h1></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/loading-page/loading-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/loading-page/loading-page.component.ts ***!
  \********************************************************/
/*! exports provided: LoadingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingPageComponent", function() { return LoadingPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingPageComponent = /** @class */ (function () {
    function LoadingPageComponent() {
    }
    LoadingPageComponent.prototype.ngOnInit = function () {
    };
    LoadingPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loading-page',
            template: __webpack_require__(/*! ./loading-page.component.html */ "./src/app/loading-page/loading-page.component.html"),
            styles: [__webpack_require__(/*! ./loading-page.component.css */ "./src/app/loading-page/loading-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoadingPageComponent);
    return LoadingPageComponent;
}());



/***/ }),

/***/ "./src/app/mock-hotels.ts":
/*!********************************!*\
  !*** ./src/app/mock-hotels.ts ***!
  \********************************/
/*! exports provided: HOTELS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOTELS", function() { return HOTELS; });
var HOTELS = [
    { /* id : 1, */ name: 'Neptune Hotel, Venom XII', price: 1200, priceRange: 'low', rating: '4/5', img: "../assets/img/robert-anasch-982880-1920.jpg" },
    { /* id : 2, */ name: 'Grand Riviera, Galactea', price: 1400, priceRange: 'low', rating: '3/5', img: "../assets/img/viktor-forgacs-follow-me-725681-1920.jpg" },
    { /* id : 3, */ name: 'Blue Star Hotel, Venus', price: 1700, priceRange: 'medium', rating: '4/5', img: "../assets/img/tomas-yates-696624-1920x1081.jpg" },
    { /* id : 4, */ name: 'Luxury Hotel, Istodor', price: 2000, priceRange: 'high', rating: '5/5', img: "../assets/img/jacob-petersen-512115-1920x1081.jpg" },
    { /* id : 5, */ name: 'Grand Budapest Hotel, Unity', price: 2300, priceRange: 'high', rating: '4/5', img: "../assets/img/nathan-dumlao-291783-1920x1081.jpg" },
    { /* id : 6,  */ name: 'Heartbreak Hotel, Pluto', price: 1600, priceRange: 'medium', rating: '3/5', img: "../assets/img/stefan-kunze-18612-1920.jpg" },
    { /* id : 7, */ name: 'New Rose Hotel, Moon', price: 1500, priceRange: 'medium', rating: '4/5', img: "../assets/img/jolene-hardy-18952-1920.jpg" }
];


/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n    font-family: \"newSpace\";\n    src: url(/src/assets/fonts/new_space/New\\ Space.ttf);\n}\n\np{\n    margin:0;\n}\n\n.row{\n    margin:0;\n    flex-wrap:no-wrap!important;\n}\n\n.navwrap{\n    height:150px\n}\n\na{\n    background-color:transparent;\n    color: #FFF;    \n    border: none;\n    font-family: \"newSpace\",'Courier New', Courier, monospace;\n    font-size:1.2em;\n    transition: all 0.5s;\n    \n\n}\n\na:hover{\n    text-shadow:0 5px 15px white;\n}\n\n.bg-dark{\n\n    background-color: black !important;\n}\n\n.mainTitle{\n\n    font-family: \"newSpace\";\n    color: #FFF;\n    text-shadow:0 5px 15px white;\n    font-size:4vw;  \n    margin-top:0;\n    padding-bottom:0;\n    \n   /*  height:60px; */\n   \n\n}\n\n.text-muted{\n\n    font-family: 'Kodchasan', sans-serif; \n    font-size:1em;\n    margin-top:0;\n\n}\n\n.navbar-toggler{\n    margin-right:0;\n    margin-top:0;\n    max-height: 100px;  /*hoverable element -non visible */\n    outline:none;\n    border: none;\n\n}\n\n/*  ----menu burger -----*/\n\n.container {\n    display: inline-block;\n    cursor: pointer; \n}\n\n.bar1, .bar2, .bar3 {\n    width:4em;\n    height: 0.6em;\n    background-color: #333;\n    margin: 1vw 0;\n    transition: 0.3s;\n    \n}\n\n.maintitle-subtitle{}\n\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pos-f-t nav-wrap\">\n  <div class=\"collapse\" id=\"navbarToggleExternalContent\">\n    <div class=\"bg-dark\">\n      <div class=\"row p-4\" data-toggle=\"collapse\" data-target=\"#navbarToggleExternalContent\">\n        <a routerLink=\"homepage\" class=\"col-3\">Home</a>\n        <a routerLink=\"planetchoice\" class=\"col-3\">Planet</a>\n        <a routerLink=\"shipchoice\" class=\"col-3\">Ship</a>\n        <a routerLink=\"hotelselection\" class=\"col-3 \">Hotel</a>\n\n      </div>\n\n    </div>\n  </div>\n  <nav class=\"navbar navbar-dark bg-dark sticky-top\">\n\n    <div class=\"main-title-burger-container\">\n\n      <div class=\"row\">\n\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarToggleExternalContent\"\n          aria-controls=\"navbarToggleExternalContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n\n          <div class=\"burger-bars \">\n            <div class=\"bar1\"></div>\n            <div class=\"bar2\"></div>\n            <div class=\"bar3\"></div>\n            <div class=\"bar1\"></div>\n          </div>\n\n        </button>\n\n\n        <div class=\" maintitle-subtitle\">\n\n          <div class=\"row mainTitle \">\n            <p>WILD SPACE TRAVEL</p>\n          </div>\n\n          <div class=\"row\">\n            <p class=\"text-muted m-0 p-0\">Go beyond your limits</p>\n          </div>\n\n        </div>\n\n      </div>\n    </div>\n  </nav>\n</div>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
        function myFunction(x) {
            x.classList.toggle("change");
        }
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/planet-list/planet-list.component.css":
/*!*******************************************************!*\
  !*** ./src/app/planet-list/planet-list.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".planet-box{\n    background-color: rgba(500, 500, 500, 0.6);\n    margin: 10px;\n    cursor: pointer;\n    transition: all 0.5s;\n    border:2px solid black;\n    border-radius:25px;\n}\n\n.inside-planet-box-wrap{\n    width: 250px;\n}\n\n.planet-box:hover{\n    border : 2px solid white;\n    transition: all 0.5s\n\n}\n\nimg{\n    width: 100%;\n    border-top-left-radius: 23px;\n    border-top-right-radius: 23px;\n}\n\n"

/***/ }),

/***/ "./src/app/planet-list/planet-list.component.html":
/*!********************************************************!*\
  !*** ./src/app/planet-list/planet-list.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let current of list | priceRange:distMin:distMax\" class=\"planet-box text-center\" (click)=\"selection(current)\">\n        <div class=\"inside-planet-box-wrap\">\n                <img src=\"/src/assets/img/earth-1151659_1920.jpg\">\n                <p>Planet Name : {{current.pl_name}}</p>\n                <p>Distance to Earth :{{current.st_dist}}</p>\n                <button class=\"d-sm-inline-block d-md-inline-block d-lg-none phone-choose-button\" (click)=\"goTop()\"\n                        [routerLink]=\"['/shipchoice',userSettings.budget, current.st_dist, current.pl_name]\">GO\n                        ON THIS PLANET</button>\n        </div>\n</div>"

/***/ }),

/***/ "./src/app/planet-list/planet-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/planet-list/planet-list.component.ts ***!
  \******************************************************/
/*! exports provided: PlanetListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanetListComponent", function() { return PlanetListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _planet_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../planet.service */ "./src/app/planet.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlanetListComponent = /** @class */ (function () {
    // Service Injection + ActivatedRoute Injection 
    function PlanetListComponent(param_service, _Activatedroute) {
        this._Activatedroute = _Activatedroute;
        // Selection of planet initialization 
        this.currentSelectedPlanet = {
            "pl_name": "no-selected-planet",
            "st_dist": 0
        };
        this.SelectedPlanetChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PlanetListComponent.prototype, "SelectedPlanetChange", void 0);
    PlanetListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-planet-list',
            template: __webpack_require__(/*! ./planet-list.component.html */ "./src/app/planet-list/planet-list.component.html"),
            styles: [__webpack_require__(/*! ./planet-list.component.css */ "./src/app/planet-list/planet-list.component.css")]
        }),
        __metadata("design:paramtypes", [_planet_service__WEBPACK_IMPORTED_MODULE_1__["PlanetService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], PlanetListComponent);
    return PlanetListComponent;
}());



/***/ }),

/***/ "./src/app/planet.service.ts":
/*!***********************************!*\
  !*** ./src/app/planet.service.ts ***!
  \***********************************/
/*! exports provided: PlanetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanetService", function() { return PlanetService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlanetService = /** @class */ (function () {
    function PlanetService(param_http_service) {
        this.myHttpService = param_http_service;
    }
    PlanetService.prototype.getPlanets = function () {
        return this.myHttpService.get("https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?&table=exoplanets&select=pl_name,st_dist&where=pl_kepflag=1&format=json").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (param_response) {
            return param_response;
        }));
    };
    PlanetService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PlanetService);
    return PlanetService;
}());



/***/ }),

/***/ "./src/app/planetchoice/planetchoice.component.css":
/*!*********************************************************!*\
  !*** ./src/app/planetchoice/planetchoice.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2{\n    font-family: 'Kodchasan', sans-serif;\n}\n\n\n.container-fluid{\n    color:#FFF;\n}\n\n\napp-planet-list{\n    display: flex;\n}\n\n\n.bloc-list-planets{\n    overflow: scroll;\n    margin:0\n}\n\n\nbutton{\n    font-family: \"newSpace\",'Courier New', Courier, monospace;\n    font-size:6vw;\n    color:#FFF;\n    margin-top:5%;\n    width:100%;\n    margin-bottom:20px;\n    border:none;\n    background: transparent;\n}\n\n\n/* Left bloc  */\n\n\nimg{\n    width: 80%;\n    margin-top:25px;\n}\n\n\nh4{\n    margin-top:25px;\n}\n\n\nul{\n    list-style: none;\n    margin-top:25px;\n}\n\n\n.display-info{\n    font-size:1.5em;\n    background-color: rgba(500, 500, 500, 0.4);\n    margin-top:10px;\n    border-radius:10px;\n\n}"

/***/ }),

/***/ "./src/app/planetchoice/planetchoice.component.html":
/*!**********************************************************!*\
  !*** ./src/app/planetchoice/planetchoice.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid text-center\">\n  <h1 class=\"pagetitle\">Planet selection</h1>\n  <h4 *ngIf=\"userSettings.distance != undefined\" class=\"text-center\">Your distance choice : {{userSettings.distance}} parsecs</h4>\n\n  <div class=\"col-12 container-fluid d-inline-block text-center bloc-list-planets\">\n      <app-planet-list (SelectedPlanetChange)=\"SelectedPlanetChangeHandler($event)\"></app-planet-list>\n  </div>\n\n\n  <div class=\"d-none d-lg-inline-block col-12 align-top text-center box-container\">\n\n    <h2 *ngIf=\"currentSelectedPlanet.pl_name != 'No Planet choosen'\">{{currentSelectedPlanet.pl_name}}</h2>\n    <div class=\"col-12\" *ngIf=\"currentSelectedPlanet.pl_name == 'No Planet choosen'\">\n      <h2>Please choose a planet for your travel</h2>\n    </div>\n    \n    <div class=\"col-12 container\" *ngIf=\"currentSelectedPlanet.pl_name != 'No Planet choosen'\">\n      <img class=\"col-5 d-inline-block\" src=\"/src/assets/img/earth-1151659_1920.jpg\">\n      <div class=\" text-center d-inline-block col-7\">\n        <ul>\n          <li class=\"display-info\"><strong>Distance to Earth: </strong> {{currentSelectedPlanet.st_dist}} parsec</li>\n          <li class=\"display-info\"><strong>Climat : </strong> Electrical storm</li>\n          <li class=\"display-info\"><strong>Weight : </strong> 125 Earth</li>\n        </ul>\n      </div>\n    </div>\n\n    <button (click)=\"goTop()\" [routerLink]=\"['/shipchoice',userSettings.budget,currentSelectedPlanet.st_dist,currentSelectedPlanet.pl_name]\"\n      *ngIf=\"currentSelectedPlanet.pl_name != 'No Planet choosen'\">Choose this planet</button>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/planetchoice/planetchoice.component.ts":
/*!********************************************************!*\
  !*** ./src/app/planetchoice/planetchoice.component.ts ***!
  \********************************************************/
/*! exports provided: PlanetchoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanetchoiceComponent", function() { return PlanetchoiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-planetchoice',
            template: __webpack_require__(/*! ./planetchoice.component.html */ "./src/app/planetchoice/planetchoice.component.html"),
            styles: [__webpack_require__(/*! ./planetchoice.component.css */ "./src/app/planetchoice/planetchoice.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], PlanetchoiceComponent);
    return PlanetchoiceComponent;
}());



/***/ }),

/***/ "./src/app/price-range.pipe.ts":
/*!*************************************!*\
  !*** ./src/app/price-range.pipe.ts ***!
  \*************************************/
/*! exports provided: PriceRangePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceRangePipe", function() { return PriceRangePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'priceRange'
        })
    ], PriceRangePipe);
    return PriceRangePipe;
}());



/***/ }),

/***/ "./src/app/research-form/research-form.component.css":
/*!***********************************************************!*\
  !*** ./src/app/research-form/research-form.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".research-form-inputs{\n    width:60%;\n    background-color: rgba(500, 500, 500, 0.7);\n    align-content: center;\n    margin-top:20px;\n    border-radius:20px;\n    margin-left:20%;\n    height:50px;\n}\n\n.research-form-button{\n    color:#FFF;\n    width:60%;\n    align-content: center;\n    font-size: 3vw;\n    margin-top:50px;\n    padding: 20px 20px;\n    border-radius:20px;\n    margin-left:20%;\n    font-family: \"spaceSurfer\",'Courier New', Courier, monospace;\n}\n\n"

/***/ }),

/***/ "./src/app/research-form/research-form.component.html":
/*!************************************************************!*\
  !*** ./src/app/research-form/research-form.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"form-wrapper\">\n\n  <!-- Budget input  -->\n\n  <mat-form-field class=\"example-full-width research-form-inputs text-center\">\n    <input matInput placeholder=\"BUDGET MAX\" name=\"budget\" [(ngModel)]=\"budget\" value=\"{{budget}}\" required>\n  </mat-form-field>\n\n  <mat-form-field class=\"d-block text-center research-form-inputs\">\n    <mat-select placeholder=\"DISTANCE\" [(ngModel)]=\"distance\" required>\n      <mat-option *ngFor=\"let distance of distances\"  [value]=\"distance.value\">\n        {{distance.viewValue}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field class=\"example-full-width research-form-inputs text-center\">\n    <input matInput [matDatepicker]=\"picker\" placeholder=\"DATE\" [(ngModel)]=\"date\">\n    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n    <mat-datepicker touchUi #picker [(ngModel)]=\"roomsFilter.date\"  ngDefaultControl (selectedChanged) =\"onChange($event)\"> </mat-datepicker>\n  </mat-form-field>\n    \n\n  <a mat-stroked-button *ngIf=\"budget!=undefined && distance!=undefined && date != undefined\" (click)=\"getInfo()\" id=\"submitButton\" class=\"research-form-button\" [routerLink]=\"['/planetchoice', budget,distance]\">SEARCH MY TRIP</a>\n\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/research-form/research-form.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/research-form/research-form.component.ts ***!
  \**********************************************************/
/*! exports provided: ResearchFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResearchFormComponent", function() { return ResearchFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _info_trip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../info-trip */ "./src/app/info-trip.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


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
        this.obj = new _info_trip__WEBPACK_IMPORTED_MODULE_1__["InfoTrip"](this.budget, this.distance, this.date);
        console.log("User settings are : " + this.obj.budget + " et " + this.obj.date);
    };
    ;
    ResearchFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-research-form',
            template: __webpack_require__(/*! ./research-form.component.html */ "./src/app/research-form/research-form.component.html"),
            styles: [__webpack_require__(/*! ./research-form.component.css */ "./src/app/research-form/research-form.component.css")],
        })
    ], ResearchFormComponent);
    return ResearchFormComponent;
}());



/***/ }),

/***/ "./src/app/ship-list/ship-list.component.css":
/*!***************************************************!*\
  !*** ./src/app/ship-list/ship-list.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img{\n    width: 100%;\n    height: 140px;\n    border-top-left-radius: 23px;\n    border-top-right-radius: 23px;\n}\n\n.ship-box{\n    background-color: rgba(500, 500, 500, 0.6);\n    margin: 10px;\n    cursor: pointer;\n    transition: all 0.5s;\n    border:2px solid black;\n    border-radius:25px;\n}\n\n#list-title-ship{\n    font-size:2em;\n    font-family: 'Kodchasan', sans-serif; /*  'Bad Script', */ /* 'Nova Script', 'Aguafina Script', 'Oleo Script',cursive */;\n    text-shadow:0 5px 15px black;\n}\n\n.list-title-ship-price{\n\n    font-size:1em;\n    font-family: 'Kodchasan', sans-serif; /*  'Bad Script', */ /* 'Nova Script', 'Aguafina Script', 'Oleo Script',cursive */;\n    text-shadow:0 5px 15px black;\n\n}\n\n.inside-ship-box-wrap{\n    width: 250px;\n}\n\n"

/***/ }),

/***/ "./src/app/ship-list/ship-list.component.html":
/*!****************************************************!*\
  !*** ./src/app/ship-list/ship-list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ship-box text-center\" *ngFor=\"let current of ships | shipSortbyPrice:userSettings.budget\" (click)=\"selection(current)\">\n  <div class=\"inside-ship-box-wrap\">\n    <img src=\"{{current.img}}\">\n    <p>{{current.name}}</p>\n    <p>Price per passenger : {{current.price}}</p>\n    <button class=\"d-sm-inline-block d-md-inline-block d-lg-none phone-choose-button\" (click)=\"goTop()\" [routerLink]=\"['/summary',current.price,userSettings.distance,userSettings.SelectedPlanet, current.name]\"\n      routerLinkActive=\"router-link-active\">Chose this ship</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/ship-list/ship-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/ship-list/ship-list.component.ts ***!
  \**************************************************/
/*! exports provided: ShipListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipListComponent", function() { return ShipListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ships_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ships.service */ "./src/app/ships.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ShipListComponent = /** @class */ (function () {
    // ShipService & ActivatedRoute Injections
    function ShipListComponent(param_my_service, _Activatedroute) {
        this._Activatedroute = _Activatedroute;
        // Selection of planet initialization 
        this.SelectedShipChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ShipListComponent.prototype, "SelectedShipChange", void 0);
    ShipListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ship-list',
            template: __webpack_require__(/*! ./ship-list.component.html */ "./src/app/ship-list/ship-list.component.html"),
            styles: [__webpack_require__(/*! ./ship-list.component.css */ "./src/app/ship-list/ship-list.component.css")]
        }),
        __metadata("design:paramtypes", [_ships_service__WEBPACK_IMPORTED_MODULE_1__["ShipsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ShipListComponent);
    return ShipListComponent;
}());



/***/ }),

/***/ "./src/app/ship-sortby-price.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/ship-sortby-price.pipe.ts ***!
  \*******************************************/
/*! exports provided: ShipSortbyPricePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipSortbyPricePipe", function() { return ShipSortbyPricePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'shipSortbyPrice'
        })
    ], ShipSortbyPricePipe);
    return ShipSortbyPricePipe;
}());



/***/ }),

/***/ "./src/app/shipchoice/shipchoice.component.css":
/*!*****************************************************!*\
  !*** ./src/app/shipchoice/shipchoice.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1{\n    font-family: 'Kodchasan', sans-serif;\n    text-shadow:0 5px 15px black;\n}\nh2{\n    font-family: 'Kodchasan', sans-serif;\n    text-shadow:0 5px 15px black;\n}\n.container-fluid{\n    color:#FFF;\n}\n/* Rules for right bloc : Listing ships available */\napp-ship-list{\n    display: flex;\n}\n.bloc-list-ships{\n    overflow: scroll;\n    margin:0\n}\n/* Rule for left bloc : Ship currently selected */\n#current-ship{\n    top:auto;\n}\nbutton{\n    font-family: \"newSpace\",'Courier New', Courier, monospace;\n    font-size:6vw;\n    color:#FFF;\n    margin-top:5%;\n    margin-bottom:20px;\n    border:none;\n    background: transparent;\n}\n.display-info{\n    background-color: rgba(500, 500, 500, 0.4);\n    margin-top:10px;\n    border-radius:10px;\n}\nul{\n    list-style: none;\n    margin-top:25px;\n}\nh4{\n    margin-top:25px;\n}\nimg{\n    width: 80%;\n    margin-top:25px;\n    max-height: 300px;\n}\n\n\n\n"

/***/ }),

/***/ "./src/app/shipchoice/shipchoice.component.html":
/*!******************************************************!*\
  !*** ./src/app/shipchoice/shipchoice.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid text-center\">\n  <h1 class=\"pagetitle\">Ship selection</h1>\n  <h4 *ngIf=\"userSettings.budget != 'undefined'\" class=\"text-center\">Your Maximum budget : {{userSettings.budget}}</h4>\n\n  <div class=\"bloc-list-ships col-12 d-inline-block text-center list-column container-fluid\">\n    <app-ship-list (SelectedShipChange)=\"SelectedShipChangeHandler($event)\"></app-ship-list>\n  </div>\n\n  <div class=\"d-none d-lg-inline-block col-12 align-top text-center box-container\">\n    <h2 *ngIf=\"currentSelectedShip.name != 'No ship choosen'\">{{currentSelectedShip.name | uppercase}}</h2>\n    <div class=\"col-12\" *ngIf=\"currentSelectedShip.price == 0\">\n      <h2>Please choose a Ship for your travel</h2>\n    </div>\n\n    \n    <div class=\"col-12 row align-top\" *ngIf=\"currentSelectedShip.price != 0\">\n      <img class=\"col-5 d-inline-block\" [src]=\"currentSelectedShip.img\" alt=\"Current ship\" id=\"current-ship\">\n      <div class=\"text-center d-inline-block col-7\">\n        <ul>\n          <li class=\"display-info\"><strong>Engines : </strong>{{currentSelectedShip.nbEngine}}</li>\n          <li class=\"display-info\"><strong>Wings : </strong>{{currentSelectedShip.nbWing}}</li>\n          <li class=\"display-info\"><strong>Places : </strong>{{currentSelectedShip.nbPlaces}}</li>\n          <li class=\"display-info\"><strong>Price : </strong>{{currentSelectedShip.price}}</li>\n          <li class=\"display-info\"><strong>Infomations :</strong>Can contain Wookies, Clones or others. In case of Sith infestation, do\n              not try to escape without having put beforehand a combination.</li>\n        </ul>\n      </div>\n\n    </div>\n    <button class=\"d-none d-lg-inline-block\" (click)=\"goTop()\" [routerLink]=\"['/summary', currentSelectedShip.price, userSettings.distance, userSettings.SelectedPlanet, currentSelectedShip.name]\"\n      routerLinkActive=\"router-link-active\" *ngIf=\"currentSelectedShip.price != 0\">Choose this ship</button>\n  </div>\n\n\n\n</div>"

/***/ }),

/***/ "./src/app/shipchoice/shipchoice.component.ts":
/*!****************************************************!*\
  !*** ./src/app/shipchoice/shipchoice.component.ts ***!
  \****************************************************/
/*! exports provided: ShipchoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipchoiceComponent", function() { return ShipchoiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shipchoice',
            template: __webpack_require__(/*! ./shipchoice.component.html */ "./src/app/shipchoice/shipchoice.component.html"),
            styles: [__webpack_require__(/*! ./shipchoice.component.css */ "./src/app/shipchoice/shipchoice.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ShipchoiceComponent);
    return ShipchoiceComponent;
}());



/***/ }),

/***/ "./src/app/ships.service.ts":
/*!**********************************!*\
  !*** ./src/app/ships.service.ts ***!
  \**********************************/
/*! exports provided: ShipsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipsService", function() { return ShipsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShipsService = /** @class */ (function () {
    function ShipsService(param_http_service) {
        this.httpService = param_http_service;
    }
    ShipsService.prototype.getShips = function () {
        return this.httpService.get("assets/ships.json").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (param_my_response) {
            var obj = param_my_response;
            return obj;
        }));
    };
    ShipsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ShipsService);
    return ShipsService;
}());



/***/ }),

/***/ "./src/app/summary/summary.component.css":
/*!***********************************************!*\
  !*** ./src/app/summary/summary.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n@import \"https://fonts.googleapis.com/css?family=Anton\";\n\nimg {\n    width: 100%;\n    margin-top: 25px;\n}\n\nh1 {\n    font-size: 2.5rem;\n}\n\n/* Button rules */\n\n* {\n    box-sizing: border-box;\n}\n\nhtml {\n    font-size: 62.5%;\n}\n\nbody {\n    height: 100vh;\n    background-color: #071432;\n}\n\n#go-hotel-button{\n    background-color: rgba(500,500,500,0.65);\n    border:1px solid white;\n    border-radius: 25px;\n    width:50%;\n    margin:1%;\n    margin-top:25px;\n    cursor: pointer;\n    font-family: 'Kodchasan', sans-serif;\n    font-size:1.3em;\n}\n\n/* Center box  */\n\n.info-box{\n    background-color: rgba(500,500,500,0.65);\n    border:1px solid white;\n    border-radius: 25px;\n    margin:1%;\n    margin-top:25px;\n    font-family:'Courier New', Courier, monospace; \n    height:250px;\n}\n\n.hotel-selection-box{\n    background-color: rgba(500,500,500,0.65);\n    border:1px solid white;\n    border-radius: 25px;\n    margin:1%;\n    margin-top:25px;\n    font-family:'Courier New', Courier, monospace; \n    width: 50%;\n    margin-left: 25%;\n    font-size:1.5em\n}\n\n.info-box-title {\n    font-size: 1.5rem;\n    font-family: 'Kodchasan', sans-serif;\n}\n\nul{\n    list-style-type: none;\n}\n\n/* Proceed to payment button  */\n\n.skew-button {\n    position: relative;\n    width: 100%;\n    left: 50%;\n    top: 50%;\n    margin-top:4rem\n}\n\n.skew-button {\n    \n    cursor: pointer;\n    outline: none;\n    -webkit-transform: translate3d(-50%, -50%, 0);\n    transform: translate3d(-50%, -50%, 0);\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n    position: relative;\n    display: inline-block;\n    padding: 0;\n    background-color: transparent;\n    border: none;\n    font: 1.3rem 'Anton', sans-serif;\n    text-transform: uppercase;\n    letter-spacing: 0.1em;\n    color: #fff;\n}\n\n.skew-button span {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n    position: relative;\n    display: block;\n    width: 100%;\n    height: 100%;\n    padding: 20px 50px;\n    z-index: 3;\n}\n\n.skew-button:before,\n.skew-button span:before {\n    content: '';\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    -webkit-transform: translate(-50%, -50%) skewX(-20deg);\n    transform: translate(-50%, -50%) skewX(-20deg);\n    width: 100%;\n    height: 50px;\n    border: 1px solid #0e3876;\n    z-index: 2;\n}\n\n.skew-button span:before {\n    display: block;\n    -webkit-transform: translate(-50%, -50%) skew(-20deg);\n    transform: translate(-50%, -50%) skew(-20deg);\n    -webkit-transform-origin: center center;\n    transform-origin: center center;\n    z-indeX: -1;\n}\n\n.skew-button:after {\n    transition: all 100ms ease-out;\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 0;\n    -webkit-transform: skewX(-20deg) scaleX(0);\n    transform: skewX(-20deg) scaleX(0);\n    width: 100%;\n    height: 100%;\n    background-color: #0e3876;\n    border: 1px solid transparent;\n    z-index: 1;\n}\n\n.skew-button:hover span:before {\n    -webkit-animation: fill .5s ease-out;\n    animation: fill .5s ease-out;\n    -webkit-animation-fill-mode: forwards;\n    animation-fill-mode: forwards;\n}\n\n.skew-button:hover:after {\n    -webkit-animation: swoosh .7s ease-in;\n    animation: swoosh .7s ease-in;\n}\n\n.skew-button:active:before {\n    background-color: #030d1b;\n}\n\n@-webkit-keyframes swoosh {\n    0% {\n        -webkit-transform-origin: left center;\n        transform-origin: left center;\n    }\n\n    20% {\n        -webkit-transform: skewX(-20deg) scaleX(1);\n        transform: skewX(-20deg) scaleX(1);\n        -webkit-transform-origin: left center;\n        transform-origin: left center;\n    }\n\n    21% {\n        -webkit-transform-origin: right center;\n        transform-origin: right center;\n    }\n\n    50% {\n        -webkit-transform: skewX(-20deg) scaleX(0);\n        transform: skewX(-20deg) scaleX(0);\n        -webkit-transform-origin: right center;\n        transform-origin: right center;\n    }\n}\n\n@keyframes swoosh {\n    0% {\n        -webkit-transform-origin: left center;\n        transform-origin: left center;\n    }\n\n    20% {\n        -webkit-transform: skewX(-20deg) scaleX(1);\n        transform: skewX(-20deg) scaleX(1);\n        -webkit-transform-origin: left center;\n        transform-origin: left center;\n    }\n\n    21% {\n        -webkit-transform-origin: right center;\n        transform-origin: right center;\n    }\n\n    50% {\n        -webkit-transform: skewX(-20deg) scaleX(0);\n        transform: skewX(-20deg) scaleX(0);\n        -webkit-transform-origin: right center;\n        transform-origin: right center;\n    }\n}\n\n@-webkit-keyframes fill {\n    0% {\n        background-color: rgba(14, 56, 118, 0);\n    }\n\n    20% {\n        opacity: .5;\n        border-width: 15px;\n        border-color: #092248;\n    }\n\n    100% {\n        opacity: .5;\n        border-width: 1px;\n        background-color: rgba(14, 56, 118, 0.5);\n    }\n}\n\n@keyframes fill {\n    0% {\n        background-color: rgba(14, 56, 118, 0);\n    }\n\n    20% {\n        opacity: .5;\n        border-width: 15px;\n        border-color: #092248;\n    }\n\n    100% {\n        opacity: .5;\n        border-width: 1px;\n        background-color: rgba(14, 56, 118, 0.5);\n    }\n}\n\n"

/***/ }),

/***/ "./src/app/summary/summary.component.html":
/*!************************************************!*\
  !*** ./src/app/summary/summary.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrap text-center container-fluid justify-content-center\">\n  \n  <h1 class=\"pagetitle\">Checkout</h1>\n\n  <div>\n    <div class=\"summary-planet-choice-box col-12 col-lg-4 d-inline-block align-top\">\n      <h1 class=\"pagetitle d-none d-lg-inline-block\">Destination</h1>\n      <img src=\"/src/assets/img/earth-1151659_1920.jpg\">\n\n    </div>\n\n\n    <div class=\"col-12 col-lg-4 d-inline-block align-top text-center container-fluid\">\n      <h1 class=\"pagetitle col-12 d-none d-lg-inline-block\">Informations</h1>\n      <div class=\"col-12 col-lg-5 d-inline-block align-top info-box\">\n        <p class=\"info-box-title\">{{userSettings.SelectedPlanet}}</p>\n        <p>Distance to Earth : {{userSettings.distance}}</p>\n      </div>\n      <div class=\"col-12 col-lg-5 offset-lg-1 d-inline-block align-top info-box\">\n        <p class=\"info-box-title\">{{userSettings.SelectedShip}}</p>\n        <p>Price per person : {{userSettings.budget}}</p>\n      </div>\n    </div>\n\n    <div class=\"summary-ship-choice-box col-12 col-lg-4 d-inline-block align-top\">\n      <h1 class=\"pagetitle d-none d-lg-inline-block\">Ship</h1>\n      <img src=\"/src/assets/img/millenium-falcon-1627322_1920.jpg\" alt=\"Current ship\" id=\"current-ship\">\n    </div>\n  </div>\n\n    <div class=\"hotel-selection-box\">Hotel :{{userSettings.SelectedHotel}}</div>\n\n\n  <button [routerLink]=\"['/hotelpage', userSettings.budget, userSettings.distance, userSettings.SelectedPlanet, userSettings.SelectedShip]\"\n    routerLinkActive=\"router-link-active\" id=\"go-hotel-button\"> GO TO HOTEL PAGE </button>\n  <div>\n    <button [routerLink] =\"['/goodtravel']\"class=\"skew-button\"><span>Proceed to payment</span></button>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/summary/summary.component.ts":
/*!**********************************************!*\
  !*** ./src/app/summary/summary.component.ts ***!
  \**********************************************/
/*! exports provided: SummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryComponent", function() { return SummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SummaryComponent = /** @class */ (function () {
    // ShipService & ActivatedRoute Injections
    function SummaryComponent(_Activatedroute) {
        this._Activatedroute = _Activatedroute;
        this.userSettings = {
            "budget": 0,
            "distance": "",
            "SelectedPlanet": "",
            "SelectedShip": "",
            "SelectedHotel": ""
        };
    }
    SummaryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this._Activatedroute.params.subscribe(function (params) {
            _this.userSettings.budget = params['budget'];
            _this.userSettings.distance = params["distance"];
            _this.userSettings.SelectedPlanet = params["SelectedPlanet"];
            _this.userSettings.SelectedShip = params["SelectedShip"];
            _this.userSettings.SelectedHotel = params["SelectedHotel"];
        });
    };
    SummaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-summary',
            template: __webpack_require__(/*! ./summary.component.html */ "./src/app/summary/summary.component.html"),
            styles: [__webpack_require__(/*! ./summary.component.css */ "./src/app/summary/summary.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], SummaryComponent);
    return SummaryComponent;
}());



/***/ }),

/***/ "./src/app/trend-planete/trend-planete.component.css":
/*!***********************************************************!*\
  !*** ./src/app/trend-planete/trend-planete.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".titre{\n    text-align: center;\n    color:#fff;\n    font-family:'Kodchasan', sans-serif; ;\n    opacity:0.8;\n    font-size: 1.5em;\n    font-weight: bold;\n    background-color: black;\n}"

/***/ }),

/***/ "./src/app/trend-planete/trend-planete.component.html":
/*!************************************************************!*\
  !*** ./src/app/trend-planete/trend-planete.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n   <h1 class=\"titre\">{{externalTitle}}</h1>\n</div>\n"

/***/ }),

/***/ "./src/app/trend-planete/trend-planete.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/trend-planete/trend-planete.component.ts ***!
  \**********************************************************/
/*! exports provided: TrendPlaneteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrendPlaneteComponent", function() { return TrendPlaneteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TrendPlaneteComponent = /** @class */ (function () {
    function TrendPlaneteComponent() {
        this.externalTitle = "waiting";
    }
    TrendPlaneteComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TrendPlaneteComponent.prototype, "externalTitle", void 0);
    TrendPlaneteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trend-planete',
            template: __webpack_require__(/*! ./trend-planete.component.html */ "./src/app/trend-planete/trend-planete.component.html"),
            styles: [__webpack_require__(/*! ./trend-planete.component.css */ "./src/app/trend-planete/trend-planete.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TrendPlaneteComponent);
    return TrendPlaneteComponent;
}());



/***/ }),

/***/ "./src/app/trend/trend.component.css":
/*!*******************************************!*\
  !*** ./src/app/trend/trend.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image{\n   margin-top: 3em;\n    width: 100% ;\n    height: 100% ;\n}\n.titlecomponent{\n    text-align: center;\n    margin-top: 3em;\n    color:#fff;\n    font-family:'Kodchasan', sans-serif; ;\n    opacity:0.8;\n    \n}\n#trend{\n    width: 100%;\n    align-content: center;\n    border-radius:20px;\n    font-family: \"spaceSurfer\",'Courier New', Courier, monospace;\n    font-size: 3vw;\n}"

/***/ }),

/***/ "./src/app/trend/trend.component.html":
/*!********************************************!*\
  !*** ./src/app/trend/trend.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" class=\"container1\">\n    <h1 class=\"titlecomponent\">Trendy Destination</h1>\n  <div class=\"row\">\n    \n          <div class=\"container\" class=\"col-sm-12 col-md-12 col-lg-4\">\n                  <div class=\"img1\">\n                      <img src=\"src/assets/img/fantasy-2368432_1920.jpg\" (click)=\"viewInfoImage1()\" class=\"image\" />\n                  </div>\n                  <div *ngIf=\"viewImage1\">\n                    <app-trend-planete [externalTitle]=\"title1\"></app-trend-planete>\n                    <div>\n                      <a (click)=\"goTop()\" [routerLink] =\"['/trend1/5000/400-600/Kepler-153c/Bee']\"><button type=\"button\" class=\"btn btn-outline-light\" id=\"trend\">Select</button></a> \n                    </div> \n                  </div>            \n          </div>\n         \n              \n           \n\n     \n\n          <div class=\"container\" class=\"col-sm-12 col-md-12 col-lg-4\">\n              <div class=\"img2\">\n                  <img src=\"src/assets/img/solaris-3365405_1920.jpg\" (click)=\"viewInfoImage2()\" class=\"image\" />\n\n              </div>\n              <div *ngIf=\"viewImage2\">\n                <app-trend-planete [externalTitle]=\"title2\"></app-trend-planete>\n                <div>\n                  <a (click)=\"goTop()\" [routerLink] =\"['/trend2/5000/600-800/Kepler-161b/Nostromo']\"><button type=\"button\"  class=\"btn btn-outline-light\" id=\"trend\">Select</button></a> \n                </div>\n              </div>\n              \n\n          </div>\n          <div class=\"container\" class=\"col-sm-12 col-md-12 col-lg-4\">\n\n\n              <div class=\"img3\">\n\n                  <img src=\"src/assets/img/juskteez-vu-3824-1920.jpg\" (click)=\"viewInfoImage3()\" class=\"image\" />\n              </div>\n\n              <div *ngIf=\"viewImage3\">\n                   <app-trend-planete [externalTitle]=\"title3\"></app-trend-planete>\n                   <div>\n                    <a (click)=\"goTop()\" [routerLink] =\"['/trend3/1000000/1200-1400/KIC7917485b/PrawnMothership']\"><button type=\"button\"  class=\"btn btn-outline-light\" id=\"trend\">Select</button></a>  \n                 </div>\n              </div>\n               \n\n          </div>\n\n      </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/trend/trend.component.ts":
/*!******************************************!*\
  !*** ./src/app/trend/trend.component.ts ***!
  \******************************************/
/*! exports provided: TrendComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrendComponent", function() { return TrendComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trend',
            template: __webpack_require__(/*! ./trend.component.html */ "./src/app/trend/trend.component.html"),
            styles: [__webpack_require__(/*! ./trend.component.css */ "./src/app/trend/trend.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TrendComponent);
    return TrendComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/hildegardagnesgenay/Documents/WILD/Wild-Space-Travel/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map