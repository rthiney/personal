webpackJsonp([1,4],{

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    envName: 'dev',
    insightKey: '81ad00b1-5009-482d-82e6-2664258ca29a',
    sendgridkey: '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'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_web_animations_js__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_web_animations_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_web_animations_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es6_reflect__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_core_js_es7_reflect__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_zone_js_dist_zone__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_zone_js_dist_zone__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/













/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following to support `@angular/animation`. */
 // Run `npm install --save web-animations-js`.
/** Evergreen browsers require these. **/


/** ALL Firefox browsers require the following to support `@angular/animation`. **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/***************************************************************************************************
 * Zone JS is required by Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */
/**
 * Date, currency, decimal and percent pipes.
 * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
 */
// import 'intl';  // Run `npm install --save intl`.
//# sourceMappingURL=polyfills.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_models_companies__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__markpieszak_ng_application_insights__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__markpieszak_ng_application_insights___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__markpieszak_ng_application_insights__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ClientsComponent = (function () {
    function ClientsComponent(appInsightsService) {
        this.appInsightsService = appInsightsService;
        this.cos = [];
        this.cos1 = [];
        this.cos2 = [];
        this.cos3 = [];
        console.log(__WEBPACK_IMPORTED_MODULE_0__shared_models_companies__["a" /* companies */].length, __WEBPACK_IMPORTED_MODULE_0__shared_models_companies__["a" /* companies */]);
        this.cos = __WEBPACK_IMPORTED_MODULE_0__shared_models_companies__["a" /* companies */].sort(function (a, b) { return a.id - b.id; });
        console.log('cos', this.cos);
        this.cos1 = this.cos.slice(0, 2);
        console.log('cos1', this.cos1);
        this.cos2 = this.cos.slice(3, 5);
        console.log('co2s', this.cos2);
        this.cos3 = this.cos.slice(6, 8);
        console.log('cos3', this.cos3);
    }
    ClientsComponent.prototype.ngOnInit = function () {
        console.log('Adjusted Classes');
        __WEBPACK_IMPORTED_MODULE_3_jquery__('#bid').removeClass();
        __WEBPACK_IMPORTED_MODULE_3_jquery__('#bid').addClass('profile-page');
    };
    return ClientsComponent;
}());
ClientsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-clients',
        template: __webpack_require__(428),
        styles: [__webpack_require__(385)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__markpieszak_ng_application_insights__["AppInsightsService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__markpieszak_ng_application_insights__["AppInsightsService"]) === "function" && _a || Object])
], ClientsComponent);

var _a;
//# sourceMappingURL=clients.component.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__markpieszak_ng_application_insights__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__markpieszak_ng_application_insights___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__markpieszak_ng_application_insights__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(appInsightsService) {
        this.appInsightsService = appInsightsService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        //   $.getScript('/assets/js/scripts.js');
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        __WEBPACK_IMPORTED_MODULE_2_jquery__('#bid').attr('class', 'landing-page');
        console.log('ngAfterViewInit', __WEBPACK_IMPORTED_MODULE_2_jquery__('#bid').attr('class'));
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(429),
        styles: [__webpack_require__(386)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__markpieszak_ng_application_insights__["AppInsightsService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__markpieszak_ng_application_insights__["AppInsightsService"]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__markpieszak_ng_application_insights__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__markpieszak_ng_application_insights___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__markpieszak_ng_application_insights__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    // @Input() message: Message;
    function ProfileComponent(appInsightsService) {
        this.appInsightsService = appInsightsService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_2_jquery__('#bid').removeClass();
        __WEBPACK_IMPORTED_MODULE_2_jquery__('#bid').addClass('profile-page');
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(431),
        styles: [__webpack_require__(387)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__markpieszak_ng_application_insights__["AppInsightsService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__markpieszak_ng_application_insights__["AppInsightsService"]) === "function" && _a || Object])
], ProfileComponent);

var _a;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__markpieszak_ng_application_insights__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__markpieszak_ng_application_insights___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__markpieszak_ng_application_insights__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectsComponent = (function () {
    function ProjectsComponent(appInsightsService) {
        this.appInsightsService = appInsightsService;
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_2_jquery__('#bid').removeClass();
        __WEBPACK_IMPORTED_MODULE_2_jquery__('#bid').addClass('profile-page');
    };
    return ProjectsComponent;
}());
ProjectsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-projects',
        template: __webpack_require__(432),
        styles: [__webpack_require__(388)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__markpieszak_ng_application_insights__["AppInsightsService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__markpieszak_ng_application_insights__["AppInsightsService"]) === "function" && _a || Object])
], ProjectsComponent);

var _a;
//# sourceMappingURL=projects.component.js.map

/***/ }),

/***/ 342:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 342;


/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__(122);





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__markpieszak_ng_application_insights__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__markpieszak_ng_application_insights___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__markpieszak_ng_application_insights__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// declare var jQuery:any;

var AppComponent = (function () {
    function AppComponent(appinsightsService, titleService) {
        this.appinsightsService = appinsightsService;
        this.titleService = titleService;
        this.title = __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].envName;
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        __WEBPACK_IMPORTED_MODULE_4_jquery__('#bid').removeClass();
        __WEBPACK_IMPORTED_MODULE_4_jquery__('#bid').addClass('landing-page');
        ///$.getScript('/assets/js/scripts.js');
    };
    AppComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(427),
        styles: [__webpack_require__(384)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__markpieszak_ng_application_insights__["AppInsightsService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__markpieszak_ng_application_insights__["AppInsightsService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["e" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["e" /* Title */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_mail_form_mail_form_component__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_nav_nav_component__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__projects_projects_component__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__clients_clients_component__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__profile_profile_component__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_routing__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__privacy_privacy_component__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__markpieszak_ng_application_insights__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__markpieszak_ng_application_insights___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__markpieszak_ng_application_insights__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ngx_toastr__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser_animations__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_common__ = __webpack_require__(79);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_9__projects_projects_component__["a" /* ProjectsComponent */],
            __WEBPACK_IMPORTED_MODULE_10__clients_clients_component__["a" /* ClientsComponent */],
            __WEBPACK_IMPORTED_MODULE_11__profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_2__shared_nav_nav_component__["a" /* NavComponent */],
            __WEBPACK_IMPORTED_MODULE_13__privacy_privacy_component__["a" /* PrivacyComponent */],
            __WEBPACK_IMPORTED_MODULE_1__shared_mail_form_mail_form_component__["a" /* MailFormComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_17__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_12__app_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_15_ngx_toastr__["a" /* ToastrModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_14__markpieszak_ng_application_insights__["ApplicationInsightsModule"].forRoot({
                instrumentationKey: __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].insightKey
            })
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_14__markpieszak_ng_application_insights__["AppInsightsService"]],
        schemas: [__WEBPACK_IMPORTED_MODULE_4__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home_component__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__profile_profile_component__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__projects_projects_component__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__clients_clients_component__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(305);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });





var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__home_home_component__["a" /* HomeComponent */], pathMatch: 'full' },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_1__profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'clients', component: __WEBPACK_IMPORTED_MODULE_3__clients_clients_component__["a" /* ClientsComponent */] },
    { path: 'projects', component: __WEBPACK_IMPORTED_MODULE_2__projects_projects_component__["a" /* ProjectsComponent */] },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
// @NgModule({
var routing = __WEBPACK_IMPORTED_MODULE_4__angular_router__["RouterModule"].forRoot(routes);
///export const AppRoutes = RouterModule.forChild(routes);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__markpieszak_ng_application_insights__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__markpieszak_ng_application_insights___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__markpieszak_ng_application_insights__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PrivacyComponent = (function () {
    function PrivacyComponent(appInsightsService) {
        this.appInsightsService = appInsightsService;
    }
    PrivacyComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_2_jquery__('#bid').removeClass();
        __WEBPACK_IMPORTED_MODULE_2_jquery__('#bid').addClass('profile-page');
    };
    return PrivacyComponent;
}());
PrivacyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-privacy',
        template: __webpack_require__(430),
        styles: [__webpack_require__(382)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__markpieszak_ng_application_insights__["AppInsightsService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__markpieszak_ng_application_insights__["AppInsightsService"]) === "function" && _a || Object])
], PrivacyComponent);

var _a;
//# sourceMappingURL=privacy.component.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_toastr__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__markpieszak_ng_application_insights__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__markpieszak_ng_application_insights___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__markpieszak_ng_application_insights__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jquery__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MailFormComponent = (function () {
    // @Input() message: Message;
    function MailFormComponent(fb, toastrService, appInsightsService) {
        this.fb = fb;
        this.toastrService = toastrService;
        this.appInsightsService = appInsightsService;
        this.createForm();
    }
    MailFormComponent.prototype.createForm = function () {
        this.msgForm = this.fb.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* Validators */].required],
            email: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* Validators */].email]],
            msg: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* Validators */].minLength(10)]]
        });
    };
    MailFormComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_5_jquery__('#bid').removeClass();
        __WEBPACK_IMPORTED_MODULE_5_jquery__('#bid').addClass('profile-page');
    };
    MailFormComponent.prototype.onSubmit = function (_a) {
        var value = _a.value, valid = _a.valid;
        console.log(value, __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].sendgridkey);
        var helper = __webpack_require__(337).mail;
        var from_email = new helper.Email(value.email);
        var to_email = new helper.Email('raphael.thiney@gmail.com');
        var subject = value.name + ' sent email from Personal Website!!!!';
        var content = new helper.Content('text/html', value.msg);
        var mail = new helper.Mail(from_email, subject, to_email, content);
        var sg = __webpack_require__(337)(__WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].sendgridkey);
        var request = sg.emptyRequest({
            method: 'POST',
            mode: 'no-cors',
            path: '/v3/mail/send',
            body: mail.toJSON()
        });
        var err;
        var res;
        sg.API(request, function (error, response) {
            if (error) {
                console.log('Error response received');
                err = error;
                res = response;
            }
            console.log(response.statusCode);
            console.log(response.body);
            console.log(response.headers);
        });
        if (err) {
            this.toastrService.error(res.body, 'Error' + res.statusCode);
            this.appInsightsService.trackEvent('Mail Fail');
        }
        else {
            this.appInsightsService.trackEvent('Mail Sent');
            this.toastrService.success('Your message was sent!!', 'Email Away!');
            this.msgForm.reset();
        }
        // this.heroService.updateHero(this.hero).subscribe(/* error handling */);
    };
    return MailFormComponent;
}());
MailFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-mail-form',
        template: __webpack_require__(433),
        styles: [__webpack_require__(383)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_toastr__["b" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_toastr__["b" /* ToastrService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__markpieszak_ng_application_insights__["AppInsightsService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__markpieszak_ng_application_insights__["AppInsightsService"]) === "function" && _c || Object])
], MailFormComponent);

var _a, _b, _c;
//# sourceMappingURL=mail-form.component.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Company */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return companies; });
var Company = (function () {
    function Company() {
    }
    return Company;
}());

// tslint:disable-next-line:typedef-whitespace
var companies = [
    {
        id: 0,
        name: 'SurgiPal', type: 'Company',
        logo: 'surgipal.png',
        url: 'http://surgipal.com',
        description: 'A physician driven cloud-based preference card system and OR platform for surgeries and procedures'
    },
    {
        id: 1, type: 'Consultancy',
        name: 'Crankfrog',
        logo: 'crankfrog.png',
        url: 'http://crankfrog.com',
        description: 'Focused on healthcare technology strategy and product development, with an experienced team that chips away at solving complicated, unstructured problems.'
    },
    {
        id: 2, type: 'Consultancy',
        name: 'Warburg Pincus',
        logo: 'wp.png',
        url: 'http://warburgpincus.com',
        description: 'At Warburg Pincus, private equity investing is our only business. Established over 50 years ago, Warburg Pincus has invested more than $60 billion in more than 780 companies in more than 40 countries around the world.'
    },
    {
        id: 3,
        name: 'Aksia', type: 'Company',
        logo: 'Aksia_Logo_small.png',
        url: 'http://aksia.com',
        description: 'Aksia is a specialist research and portfolio advisory firm providing hedge fund, private credit, and opportunistic solutions to institutional investors. We are proud of our uncompromising research, client investment performance, and well-staffed, client-centric approach. '
    },
    {
        id: 4, type: 'Company',
        name: 'Cerberus Capital Management',
        logo: 'cerberus.png',
        url: 'http://www.cerberuscapital.com/',
        description: 'Cerberus Capital Management, L.P. is a private investment firm based in New York City with affiliate and advisory offices across the United States, Europe and Asia. With over $30 billion under management, we manage funds and accounts for many of the world’s most respected investors. We invest globally in four main areas of distressed securities and assets, private equity, middle-market lending and real-estate. '
    },
    {
        id: 5, type: 'Company',
        name: 'Credit Suisse',
        logo: 'cs.png',
        url: 'https://www.credit-suisse.com/us/en.html',
        // tslint:disable-next-line:max-line-length
        description: 'Founded in 1856, we today have a global reach with operations in about 50 countries and 47,170 employees from over 150 different nations. Our broad footprint helps us to generate a geographically balanced stream of revenues and net new assets and allows us to capture growth opportunities around the world. We serve our clients through three regionally focused divisions: Swiss Universal Bank, International Wealth Management and Asia Pacific. '
    },
    {
        id: 6, type: 'Company',
        name: 'CapitalThinking',
        logo: 'ct.png',
        url: 'https://www.crunchbase.com/organization/capitalthinking/timeline#/timeline/index',
        // tslint:disable-next-line:max-line-length
        description: 'A first of its kind commercial mortgage startup, poised to be the "Lending Tree" of the commerical mortgage industry. Aquired by CapitalStream in 2007'
    },
    {
        id: 7,
        type: 'Company',
        name: 'Merrill Lynch',
        logo: 'ml.png',
        url: 'https://www.ml.com',
        // tslint:disable-next-line:max-line-length
        description: 'At Merrill Lynch, we have a clear purpose to help make financial lives better through the power of every connection. We fulfill this purpose through a strategy of responsible growth, which includes a focus on environmental, social and governance leadership. Every day, we’re proud to partner with 46 million individuals, families and businesses, in hundreds of communities through operations in 35 countries to help them achieve their financial goals. '
    }
];
//# sourceMappingURL=companies.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    return NavComponent;
}());
NavComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-nav',
        template: __webpack_require__(434),
        styles: [__webpack_require__(389)]
    }),
    __metadata("design:paramtypes", [])
], NavComponent);

//# sourceMappingURL=nav.component.js.map

/***/ }),

/***/ 380:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 380;


/***/ }),

/***/ 382:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(44)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 383:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(44)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 384:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(44)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 385:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(44)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 386:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(44)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 387:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(44)(false);
// imports


// module
exports.push([module.i, ".logoProfile {\n  height: \"50px!important\";\n  width: \"22px!important\"; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 388:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(44)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 389:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(44)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 427:
/***/ (function(module, exports) {

module.exports = "<router-outlet>\r\n</router-outlet>\r\n\r\n<footer class=\"footer footer-white\">\r\n    <div class=\"container\">\r\n        <a class=\"footer-brand\" href=\"https://docs.google.com/document/d/1cYQlYo4R4sDlDcbZAyjHI8ovnXEX-eSSquUSrELAuN4/edit?usp=sharing\"> &copy; <script>\r\n                    document.write(new Date().getFullYear())\r\n                </script>  made by Raphael Thiney {{title}}<div class=\"ripple-container\"></div></a>\r\n\r\n\r\n        <ul class=\"pull-center\">\r\n\r\n            <li>\r\n                <a href=\"#pablo\">\r\n\t            \t\t\t\t\t   About Us\r\n\t            \t\t\t\t\t</a>\r\n            </li>\r\n            <li>\r\n                <a href=\"#pablo\">\r\n\t            \t\t\t\t\t   Blog\r\n\t            \t\t\t\t\t</a>\r\n            </li>\r\n            <li>\r\n                <a href=\"#pablo\">\r\n\t            \t\t\t\t\t\tLicenses\r\n\t            \t\t\t\t\t</a>\r\n            </li>\r\n        </ul>\r\n\r\n        <ul class=\"social-buttons pull-right\">\r\n            <li>\r\n                <a href=\"https://twitter.com/RaphaelThiney\" target=\"_blank\" class=\"btn btn-simple btn-white btn-just-icon\">\r\n                    <i class=\"fa fa-twitter\"></i>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a href=\"https://www.linkedin.com/in/raphaelthiney/\" target=\"_blank\" class=\"btn btn-simple btn-white btn-just-icon\">\r\n                    <i class=\"fa fa-linkedin\"></i>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a href=\"https://www.facebook.com/raphael.thiney\" target=\"_blank\" class=\"btn btn-simple btn-white btn-just-icon\">\r\n                    <i class=\"fa fa-facebook-square\"></i>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a href=\"https://github.com/rthiney\" target=\"_blank\" class=\"btn btn-simple btn-white btn-just-icon\">\r\n                    <i class=\"fa fa-github\"></i>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n\r\n    </div>\r\n</footer>\r\n<!--<footer class=\"footer\">\r\n    <div class=\"container\">\r\n        <nav class=\"pull-left\">\r\n            <ul>\r\n                <li>\r\n                    <a href=\"https://docs.google.com/document/d/1cYQlYo4R4sDlDcbZAyjHI8ovnXEX-eSSquUSrELAuN4/edit?usp=sharing\">\r\n\t\t\t\t\t\t\tRaphael Thiney\r\n\t\t\t\t\t\t</a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"https://www.beyond.com/RaphaelThiney\">\r\n\t\t\t\tCurriculum Vitae\r\n\t\t\t\t\t\t</a>\r\n                </li>\r\n\r\n                <li>\r\n                    <a href=\"/blog\">\r\n\t\t\t\t\t\t   Blog\r\n\t\t\t\t\t\t</a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"/policy\">\r\n\t\t\t\t\t\t\tPrivacy Policy\r\n\t\t\t\t\t\t</a>\r\n                </li>\r\n            </ul>\r\n        </nav>\r\n        <div class=\"copyright pull-right\">\r\n            &copy; 2017, made by Raphael Thiney {{title}}\r\n        </div>\r\n    </div>\r\n</footer>-->"

/***/ }),

/***/ 428:
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\r\n<div class=\"wrapper\">\r\n    <div class=\"header header-filter\" style=\"background-image: url('../assets/img/examples/city.jpg');\"></div>\r\n\r\n    <div class=\"main main-raised\">\r\n        <div class=\"container\">\r\n            <div class=\"section text-center section-landing\">\r\n                <div class=\"features\">\r\n\r\n                    <div class=\"row\">\r\n\r\n                        <div class=\"col-md-4\" *ngFor=\"let co of cos.slice(0,3); \">\r\n                            <div class=\"info\">\r\n                                <img src=\"/assets/img/logo/{{co.logo}}\" alt=\"{{co.name}}\" class=\"img-raised logo\">\r\n                                <h4 class=\"info-title\">{{co.name}}</h4>\r\n                                <p>{{co.description}}</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n\r\n                        <div class=\"col-md-4\" *ngFor=\"let co of cos.slice(4,7); \">\r\n                            <div class=\"info\">\r\n                                <img src=\"/assets/img/logo/{{co.logo}}\" alt=\"{{co.name}}\" class=\"img-raised\">\r\n                                <h4 class=\"info-title\">{{co.name}}</h4>\r\n                                <p>{{co.description}}</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n\r\n                        <div class=\"col-md-4\" *ngFor=\"let co of cos.slice(7,8); \">\r\n                            <div class=\"info\">\r\n                                <img src=\"/assets/img/logo/{{co.logo}}\" alt=\"{{co.name}}\" class=\"img-raised\">\r\n                                <h4 class=\"info-title\">{{co.name}}</h4>\r\n                                <p>{{co.description}}</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ 429:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-transparent navbar-absolute\">\r\n    <div class=\"container\">\r\n        <!-- Brand and toggle get grouped for better mobile display -->\r\n        <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navigation-example\">\r\n            \t\t<span class=\"sr-only\">Toggle navigation</span>\r\n\t\t            <span class=\"icon-bar\"></span>\r\n\t\t            <span class=\"icon-bar\"></span>\r\n\t\t            <span class=\"icon-bar\"></span>\r\n        \t\t</button>\r\n            <a href=\"http://raphael.myds.me\">\r\n                <div class=\"logo-container\">\r\n                    <div class=\"logo\">\r\n                        <img src=\"assets/img/RaphPhotoFaceSmall.jpg\" class=\"img-circle  img-responsive img-raised\" alt=\"    Raphaël  Thiney \" rel=\"tooltip\" title=\"<b>Site</b> was Designed & Coded by <b>    Raphaël  Thiney </b>\" data-placement=\"bottom\" data-html=\"true\">\r\n\r\n                    </div>\r\n                    <div class=\"brand\">\r\n\r\n                    </div>\r\n                </div>\r\n            </a>\r\n        </div>\r\n\r\n        <div class=\"collapse navbar-collapse\" id=\"navigation-example\">\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <li>\r\n                    <a [routerLink]=\" ['/'] \">Home</a>\r\n                </li>\r\n                <li>\r\n                    <a [routerLink]=\"['/profile']\">Profile</a>\r\n                </li>\r\n                <li>\r\n\r\n                    <a [routerLink]=\"['/clients']\">Clients</a>\r\n                </li>\r\n                <li>\r\n                    <a [routerLink]=\"['/projects']\">Projects</a>\r\n                </li>\r\n\r\n                <li>\r\n                    <a href=\"https://twitter.com/RaphaelThiney\" target=\"_blank\" class=\"btn btn-simple btn-white btn-just-icon\">\r\n                        <i class=\"fa fa-twitter\"></i>\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"https://www.linkedin.com/in/raphaelthiney/\" target=\"_blank\" class=\"btn btn-simple btn-white btn-just-icon\">\r\n                        <i class=\"fa fa-linkedin\"></i>\r\n                    </a>\r\n                </li>\r\n\r\n                <li>\r\n                    <a href=\"https://www.facebook.com/raphael.thiney\" target=\"_blank\" class=\"btn btn-simple btn-white btn-just-icon\">\r\n                        <i class=\"fa fa-facebook-square\"></i>\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"https://github.com/rthiney\" target=\"_blank\" class=\"btn btn-simple btn-white btn-just-icon\">\r\n                        <i class=\"fa fa-github\"></i>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>\r\n\r\n\r\n<div class=\"wrapper\">\r\n    <div class=\"header header-filter\" style=\"background-image: url('https://images.unsplash.com/photo-1423655156442-ccc11daa4e99?crop=entropy&dpr=2&fit=crop&fm=jpg&h=750&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1450');\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                    <h1 class=\"title\">Seasoned. Professional.</h1>\r\n                    <h4>Get it done <strong>FAST</strong>, Get it done<strong> RIGHT</strong>. Get it done <strong>WELL</strong>.\r\n                    </h4>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"main main-raised\">\r\n        <div class=\"container\">\r\n             <div class=\"section text-center section-landing\">\r\n               \r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"info\">\r\n                                <div class=\"icon icon-primary\">\r\n                                    <i class=\"fa fa-bolt\" aria-hidden=\"true\"></i>\r\n                                </div>\r\n                                <h4 class=\"info-title\">Speed Development</h4>\r\n                                <p>Often, stakeholders need to have something in their hands before their ideas start to flow. I try to quickly create a Proof Of Concept, and gather that input early on. That feedback lets me quickly respond to user feedback,\r\n                                    rather than wait until delivery; better than any whiteboard or PowerPoint!</p>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"info\">\r\n                                <div class=\"icon icon-success\">\r\n                                    <i class=\"fa fa-cubes\" aria-hidden=\"true\"></i>\r\n                                </div>\r\n                                <h4 class=\"info-title\">Master Integrator</h4>\r\n                                <p>Thoughout my carreer I have been integrating disparate systems. From legacy to new and disconnected. While this practice is becoming easier with new tools like micro-services, webjobs and workflow systems, I bring the experience\r\n                                    and business acumen to bring everyone together and execute.</p>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"info\">\r\n                                <div class=\"icon icon-danger\">\r\n                                    <i class=\"fa fa-users\" aria-hidden=\"true\"></i>\r\n                                </div>\r\n                                <h4 class=\"info-title\">Easy to Work With</h4>\r\n                                <p>I'm easy to get along with. I'm a people person with a cunning business sense. I have started 3 companies, and help several others start their own along the way. I speak tech, finance, healthcare. Also French and Spanish!!</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n            \r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <h2 class=\"title\">Let's talk experience</h2>\r\n                        <h5 class=\"description\">\r\n                            Seasoned hands-on CTO/Architect/Project Manager/Developer with full life-cycle project experience in production .NET deployments. A buttoned-up transformational technology leader with 20+ years of finance, and progressive healthcare and IT experience.\r\n                            Strategic, goal-driven leader applying innovative technologies and processes to solve complex problems enhancing time to market and operational inefficiencies. Analytical and emotionally intelligent team lead adept at building\r\n                            and sustaining strong business partnerships while integrating people, processes and technologies. Solid experience in developing and integrating complex web based solutions in a high-volume, consumer-facing transactional architecture\r\n                            on a large scale. Entrepreneurial self-starter and persuasive communicator exhibiting both technical and business acumen. Seasoned hands-on CTO/Architect/Project Manager/Developer with full life-cycle project experience in\r\n                            production .NET deployments. A buttoned-up transformational technology leader with 20+ years of finance, and progressive healthcare and IT experience. Strategic, goal-driven leader applying innovative technologies and processes\r\n                            to solve complex problems enhancing time to market and operational inefficiencies. Analytical and emotionally intelligent team lead adept at building and sustaining strong business partnerships while integrating people, processes\r\n                            and technologies. Solid experience in developing and integrating complex web based solutions in a high-volume, consumer-facing transactional architecture on a large scale. Entrepreneurial self-starter and persuasive communicator\r\n                            exhibiting both technical and business acumen.</h5>\r\n                        <h5 class=\"description\"> I’ve been in the IT industry my entire career. I have over 25 years experience, spanning multiple domains including entertainment, banking, commercial mortgages, hedge-funds, and healthcare. I’m passionate about using technology\r\n                            to solve hard business problems. I love making systems work together by either native integration, or custom, elegant solutions.</h5>\r\n                        <h5 class=\"description\"> Technology is a tool that needs to be wielded. Technology is not a push-button, “solve all of my issues” with one application; rather it takes a deep understanding of your users, their problems, and their goals. From that you begin\r\n                            to develop a picture of what technology tool solves their problem. Moreover, having a deep understanding of future technology trends and expectations, building a solution that doesn’t pigeon-hole your client, but prepares them\r\n                            for the future.</h5>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n\r\n            <app-mail-form></app-mail-form>\r\n        </div>\r\n\r\n    </div>\r\n"

/***/ }),

/***/ 430:
/***/ (function(module, exports) {

module.exports = "Our Privacy Policy General rules Creative Tim does not share personal information of any kind with anyone. We will not sell or rent your name or personal information to any third party. We do not sell, rent or provide outside access to our mailing list\r\nor any data we store. Any data that a user stores via our facilities is wholly owned by that user or business. At any time a user or business is free to take their data and leave, or to simply delete their data from our facilities. Creative Tim only collects\r\nsuch personal information that is necessary for you to access and use our services. This personal information includes, but is not limited to, first and last name, email address. Creative Tim may release personal information if Creative Tim is required\r\nto by law, search warrant, subpoena, court order or fraud investigation. We may also use personal information in a manner that does not identify you specifically nor allow you to be contacted but does identify certain criteria about our Site's users in\r\ngeneral (such as we may inform third parties about the number of registered users, number of unique visitors, and the pages most frequently browsed). Changes about privacy If we change our terms of use we will post those changes on this page. Registered\r\nusers will be sent an email that outlines changes made to the terms of use."

/***/ }),

/***/ 431:
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\r\n<div class=\"wrapper\">\r\n    <div class=\"header header-filter\" style=\"background-image: url('/assets/img/examples/city.jpg');\"></div>\r\n\r\n    <div class=\"main main-raised\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"profile\">\r\n                    <div class=\"avatar\">\r\n                        <img src=\"/assets/img/RaphPhotoFaceSmall.jpg\" alt=\"Circle Image\" class=\"img-circle img-responsive img-raised\">\r\n                    </div>\r\n                    <div class=\"name\">\r\n                        <h1 class=\"title\"> Raphaël Thiney</h1>\r\n                        <h2 class=\"title\">CTO/Architect/Project Manager/Developer</h2>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"section text-center section-landing\">\r\n                <h4 class=\"title\">Experience</h4>\r\n                <div class=\"team\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"team-player\">\r\n                                <img src=\"/assets/img/logo/crankfrog.png\" alt=\"Thumbnail Image\" class=\"img-raised\">\r\n                                <h3 class=\"title\">Crankfrog <br />\r\n                                    <small class=\"text-muted\">Consulting - CTO</small>\r\n                                </h3>\r\n                                <h6 class=\"title text-left\">Project Details </h6>\r\n                                <p class=\"text-left\">Duties as CTO</p>\r\n                                <ul class=\"description text-left\">\r\n                                    <li>Responsible for Crankfrog IT initiatives to support corporate functionality and security standards.</li>\r\n                                    <li>Implementer and Administrator for Office 365 implementation.</li>\r\n                                </ul>\r\n\r\n\r\n                                <h6 class=\"title text-left\">Coordination of Benefits (COB) Project for CAQH </h6>\r\n                                <p class=\"text-left\">This targets the $800M (annual) spent by insurance companies to figure out “who pays” …when an individual is covered by more than one insurance provider. Worked as lead automation tester on behalf of CAQH for testing the\r\n                                    COB solution being delivered by Passport Health Communications.</p>\r\n                                <ul class=\"description text-left\">\r\n                                    <li>Responsible for Crankfrog IT initiatives to support corporate functionality and security standards.</li>\r\n                                    <li>Implementer and Administrator for Office 365 implementation.</li>\r\n                                </ul>\r\n\r\n                                <h6 class=\"title text-left\"><a href=\"carebetween.com\" target=\"_blank\">CareBetween.com</a></h6>\r\n                                <p class=\"text-left\">This solution targets the ever-growing market of caregivers who are taking care of their ailing relative. This is a unique platform. It brings together caregiver, patient, and aide(s) so that Aides know what they have to\r\n                                    do, and complete tasks through-out the day. The timelier, the better their “grade”. This will become the Uber of Caregiving.</p>\r\n                                <ul class=\"description text-left\">\r\n                                    <li>Head of Project Development Group</li>\r\n                                    <li>Manage team of 5 in India</li>\r\n                                    <li>Architect of Entire solution</li>\r\n                                    <li>Azure Deployment and Continuous Integration/Automation</li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"team-player\">\r\n                                <img src=\"/assets/img/logo/wp.png\" alt=\"Warburg Pincus\" class=\"img-raised logo\">\r\n                                <h3 class=\"title\">Warburg Pincus<br />\r\n                                    <small class=\"text-muted\">Consulting – Architect</small>\r\n                                </h3>\r\n                                <h6 class=\"title text-left\">Project Details</h6>\r\n                                <p class=\"text-left\">Consulted with CTO of Warburg Pincus on new platform for their quarterly valuation documentation process. Existing process required over 100 employees to manipulate Excel and Word documents each quarter to update narrative\r\n                                    and fiscal content. The solution had to be partially web-based, but also work offline. Interfaces had to be web based, as well as integrate with Office</p>\r\n                                <ul class=\"description text-left\">\r\n                                    <li>Interviewed and met with senior staff to determine the needs and current pain-points.</li>\r\n                                    <li>Identified strategic architectural changes that benefited the firm. Presented findings to senior management, demonstrated ROI and led cross-silo project groups on multiple initiatives.</li>\r\n                                    <li> Conducted extensive market due-diligence to determine buy vs. build strategy.</li>\r\n                                    <li>Architected and managed team of developers and testers to implement solution using Agile SDLC methodologies.</li>\r\n                                    <li>Streamlined process to reduce time-frame from 8 weeks to 2 weeks. Reduced staff by 80%.</li>\r\n                                    <li> The solution implemented a wide variety of Microsoft and open-source technologies:<br> Office/VSTO, Web, WCF, OpenXML, SQL, ExtJS, Sharepoint, JQuery</li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"team-player\">\r\n                                <img src=\"/assets/img/logo/Aksia_Logo_small.png\" alt=\"Aksia\" class=\"img-raised\">\r\n                                <h3 class=\"title\">Aksia<br/>\r\n                                    <small class=\"text-muted\">Head Of Information Technology</small>\r\n                                </h3>\r\n                                <h6 class=\"title text-left\">Job Details</h6>\r\n                                <p class=\"text-left\">Head of IT Management and Application development. Oversight of all technology projects from Application Development to Network Administration. Responsible for defining and implementing the department strategy and developing\r\n                                    corresponding technology solutions and process changes. Increased efficiency and effectiveness of firm by identifying processes and technology enhancements and leveraging firm-wise, departmental, industry, and open\r\n                                    source technologies. Substantiate buy vs. build recommendations to the CEO through cost-benefit analysis. Formulated and lead multiple tactical projects as part of overall strategy implementation. Managed the development\r\n                                    and progress-monitoring of individual initiatives. Defined and executed our DR/BC specification. Implemented and integrated a broad range of third party software included Adobe LiveCycle DRM, BlueSpring BPM, Bloomberg,\r\n                                    Edgar Online, Dow Jones Factiva and Lucene.\r\n                                </p>\r\n                                <ul class=\"description text-left\">\r\n                                    <li>Interviewed and met with senior staff to determine the needs and current pain-points.</li>\r\n                                    <li>Identified strategic architectural changes that benefited the firm. Presented findings to senior management, demonstrated ROI and led cross-silo project groups on multiple initiatives.</li>\r\n                                    <li> Conducted extensive market due-diligence to determine buy vs. build strategy.</li>\r\n                                    <li>Architected and managed team of developers and testers to implement solution using Agile SDLC methodologies.</li>\r\n                                    <li>Streamlined process to reduce time-frame from 8 weeks to 2 weeks. Reduced staff by 80%.</li>\r\n                                    <li> The solution implemented a wide variety of Microsoft and open-source technologies:<br> Office/VSTO, Web, WCF, OpenXML, SQL, ExtJS, Sharepoint, JQuery</li>\r\n                                </ul>\r\n                                <!--<h6 class=\"title text-left\">Technical Achievements</h6>\r\n                                <ul class=\"description text-left\">\r\n                                    <li>Architect/Design/Implementation of feature-rich corporate platform which integrated with 3rd-party workflow management system and could replace existing 3rd party solution (Backstop). This saved the company over $2M\r\n                                        in development costs. Built using EXTJS/.NET 4.0/Ajax client-tier, EntityFramework/Subsonic middle-tier, SQL 2005/8 backend. Platform was capable of capturing all types of Hedge Fund data including but limited to:\r\n                                        CRM, ADV, PPM, 13F, Fund Screener, Portfolio Accounting </li>\r\n                                    <li>Architect/Design/Implementation of Extranet solution for client consumption of data, reports and financial tools; this achievement gave clients access to dynamic data rather than simple PDF reports. Using similar technologies\r\n                                        .NET/EXTJS/Ajax/EntityFramework/Subsonic/SQL. </li>\r\n                                    <li>Responsible for design and implementation of corporate internet site. www.aksia.com. </li>\r\n                                    <li>Developed Office-Addins for Excel, Word and Outlook to integrate with intranet platform bringing content to and from desktop application to facilitate user integration and increase platform usage. </li>\r\n                                    <li>Architected numerous windows services to manage data migrations and consolidate data across multiple platforms to facilitate reporting using SSRS and Crystal Reports. </li>\r\n                                    <li>Developed portfolio management tools to allow clients to create various portfolio strategies and weight allocation. </li>\r\n                                    <li>Integrated with Dow Jones Factiva for media content coverage giving clients direct access to Aksias’ financial opinions. </li>\r\n                                    <li>Implemented Lucene, an open source indexing software to achieve google-like speeds when searching across hundreds of thousands of documents and database records. </li>\r\n                                    <li>Implemented Adobe LiveCycle DRM for document encryption to protect intellectual property. </li>\r\n                                    <li>Implemented VS Team Server 2010 (Agile/Scrum) to manage application development with 7 developers globally. </li>\r\n                                    <li>Implemented VS Team Build server to continuously build checked-in code to ensure quality and reduce bugs.</li>\r\n\r\n                                </ul>-->\r\n\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"team-player\">\r\n                                <img src=\"/assets/img/logo/cerberus.png\" alt=\"Cerberus Capital Management\" class=\"img-raised logoProfile\">\r\n                                <h3 class=\"title\">Cerberus Capital Management<br />\r\n                                    <small class=\"text-muted\">Project Manager/Senior Developer/Analyst</small>\r\n                                </h3>\r\n                                <h6 class=\"title text-left\">Job Details </h6>\r\n                                <p class=\"text-left\">Managed all aspects for implementation of various company-wide applications across multiple business units in a matrix environment</p>\r\n                                <ul class=\"description text-left\">\r\n                                    <li>Created high-visibility Internet and Intranet Applications which integrates with internal applications supporting Market Research, Human Resource, Building Facilities and Document Management System. </li>\r\n                                    <li>Implemented CRM solution (Salesforce) for Private Equity department to consolidate reporting and provide upper management with dashboard style interface to current deals and email campaign results. </li>\r\n                                    <li>Developed internal HRIS system capable of supporting intricate entity structure unique to organization. Capable of tracking employees and their transitions Portfolio companies. .NET/Subsonic </li>\r\n                                    <li>Evaluate Investor Relations processes, instrumental in selection of vendor application to support mandated client quarterly and monthly statements, along with Partnership allocation, OFAC Tracking, Contribution and\r\n                                        Distribution schedules, Subscription Documents, Side Letters, Wire Instructions, and General Correspondence </li>\r\n\r\n                                    <li>Assisted in high visibility, large scale implementation of a global OpenText document management system (500+ users). Challenges include legacy data migration. </li>\r\n                                    <li>Managed departmental scanning implementation. Project budget of $750,000. 10 Consultants </li>\r\n                                    <li>Manage day to day activities of direct reports and mentor reports in concepts of KM, IT and business process. </li>\r\n                                    <li>Streamline SDLC by implementing Visual Studio Team System for internal application development. </li>\r\n\r\n                                </ul>\r\n\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"team-player\">\r\n\r\n                                <img src=\"/assets/img/logo/cs.png\" alt=\"Credit Suisse\" class=\"img-raised logoProfile\">\r\n                                <h3 class=\"title\">Credit Suisse<br />\r\n                                    <small class=\"text-muted\">Lead Application Developer</small>\r\n                                </h3>\r\n                                <h6 class=\"title text-left\">Job Details</h6>\r\n                                <p class=\"text-left\">Lead Developer for emerging Global eBusiness division of Credit Suisse Asset Management (CSAM). Recent acquisitions focused groups’ attention to globally consolidating web-based strategies.</p>\r\n                                <ul class=\"description text-left\">\r\n                                    <li> Established a full life-cycle development platform to maintain out-sourced legacy applications. </li>\r\n                                    <li> Formalizes application development process for future application development in Global eBusiness and support current development for existing legacy applications.\r\n                                    </li>\r\n                                    <li> Develops secure platform for all future .NET global applications. </li>\r\n                                    <li> Trains existing staff on new techniques and best practices for development in .NET. </li>\r\n                                    <li> Work with functions across the global firm to improve and move business processes online. Manages Internet and intranet platforms and assist a variety of efforts worldwide. </li>\r\n\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"team-player\">\r\n                                <a href=\"https://www.crunchbase.com/organization/capitalthinking/timeline#/timeline/index\">\r\n                                    <img src=\"/assets/img/logo/ct.png\" alt=\"CapitalThinking\" class=\"img-raised logoProfile\">\r\n                                </a>\r\n                                <h3 class=\"title\">CapitalThinking<br />\r\n                                    <small class=\"text-muted\">Principal Architect</small>\r\n                                </h3>\r\n                                <h6 class=\"title text-left\">Job Details</h6>\r\n                                <p class=\"text-left\">First employee of this pioneering application software company for the financial services industry. Key participant in the team that developed solutions to the daunting regulatory financial reporting and compliance requirements\r\n                                    faced by the industry, solutions adopted by clients such as GE Capital, Bank Of America, Royal Bank of Canada, Nomura, Cohen Finanial, PNC, and EuroHypo.\r\n                                </p>\r\n                                <ul class=\"description text-left\">\r\n                                    <li> Instrumental in securing $3 million in venture capital to begin the first commercial mortgage lending facility on the Internet by creating a demo web application. Charles Ferguson, creator of MS Office was our seed\r\n                                        investor. </li>\r\n                                    <li> Conceived and Developed “SOAP” enabled application to resolve data-points in word documents, from an Oracle database, tied to a commercial mortgage marketplace web site built in Java. Application maximized user acceptance\r\n                                        for base product, by seamlessly integrating with current MS Office products. </li>\r\n                                    <li> Conceived and Developed document conversion web service to automate the process of converting documents to other formats. Service would also syndicate XLS content and merge documents into one single file. </li>\r\n                                    <li>\r\n                                        Performed exhaustive presentation and documentation seminars. As well as complete team knowledge transfers to clients who chose to host application.\r\n                                    </li>\r\n                                    <li> Develops architecture to increase server availability by creating queue mechanisms to broker calls to multiple servers processing documents.\r\n                                    </li>\r\n                                    <li> Deals with broad range of international commercial mortgage banks to create statements of works and responses to requests for proposals.\r\n                                    </li>\r\n                                    <li> Creates desktop application add-ins to simplify process of conforming existing documents to product.</li>\r\n\r\n\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n                <app-mail-form></app-mail-form>\r\n            </div>\r\n\r\n\r\n        </div>\r\n    </div>\r\n"

/***/ }),

/***/ 432:
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\r\n<div class=\"wrapper\">\r\n  <div class=\"header header-filter\" style=\"background-image: url('../assets/img/examples/city.jpg');\"></div>\r\n\r\n  <div class=\"main main-raised\">\r\n    <div class=\"profile-content\">\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"profile\">\r\n\r\n            <div class=\"name\">\r\n\r\n              <h1 class=\"title\">Projects </h1>\r\n              <h2>Coming Soon</h2>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"description text-center\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 433:
/***/ (function(module, exports) {

module.exports = "<div class=\"section landing-section\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-8 col-md-offset-2\">\r\n            <h2 class=\"text-center title\">Work with me!</h2>\r\n            <h4 class=\"text-center description\">Tell me about what you're trying to do.' Write a few lines about each one and contact me about any further collaboration. I will respond in a couple of hours.</h4>\r\n            <form [formGroup]=\"msgForm\" class=\"contact-form\" (ngSubmit)=\"onSubmit(msgForm)\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group label-floating\">\r\n                            <label class=\"control-label\">Your Name</label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"name\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group label-floating\">\r\n                            <label class=\"control-label\">Your Email</label>\r\n                            <input type=\"email\" class=\"form-control\" formControlName=\"email\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group label-floating\">\r\n                    <label class=\"control-label\">Your Messge</label>\r\n                    <textarea class=\"form-control\" rows=\"4\" formControlName=\"msg\"></textarea>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-4 col-md-offset-4 text-center\">\r\n                        <button type=\"submit\" [disabled]=\"msgForm.pristine\" class=\"btn btn-primary btn-raised\">\t\tSend Message </button>\r\n\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ 434:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-transparent navbar-fixed-top navbar-color-on-scroll\">\r\n    <div class=\"container\">\r\n        <!-- Brand and toggle get grouped for better mobile display -->\r\n        <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navigation-example\">\r\n            \t\t<span class=\"sr-only\">Toggle navigation</span>\r\n\t\t            <span class=\"icon-bar\"></span>\r\n\t\t            <span class=\"icon-bar\"></span>\r\n\t\t            <span class=\"icon-bar\"></span>\r\n        \t\t</button>\r\n            <a href=\"https://www.beyond.com/RaphaelThiney\">\r\n                <h3 style=\"color:white\">Raphaël Thiney\r\n                </h3>\r\n            </a>\r\n        </div>\r\n        <div class=\"collapse navbar-collapse\" id=\"navigation-example\">\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <li>\r\n                    <a [routerLink]=\" ['/'] \">Home</a>\r\n                </li>\r\n                <li>\r\n                    <a [routerLink]=\"['/profile']\">Profile</a>\r\n                </li>\r\n                <li>\r\n                    <a [routerLink]=\"['/clients']\">Clients</a>\r\n                </li>\r\n                <li>\r\n                    <a [routerLink]=\"['/projects']\">Projects</a>\r\n                </li>\r\n\r\n\r\n                <li>\r\n                    <a href=\"https://twitter.com/RaphaelThiney\" target=\"_blank\" class=\"btn btn-simple btn-white btn-just-icon\">\r\n                        <i class=\"fa fa-twitter\"></i>\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"https://www.linkedin.com/in/raphaelthiney/\" target=\"_blank\" class=\"btn btn-simple btn-white btn-just-icon\">\r\n                        <i class=\"fa fa-linkedin\"></i>\r\n                    </a>\r\n                </li>\r\n\r\n                <li>\r\n                    <a href=\"https://www.facebook.com/raphael.thiney\" target=\"_blank\" class=\"btn btn-simple btn-white btn-just-icon\">\r\n                        <i class=\"fa fa-facebook-square\"></i>\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"https://github.com/rthiney\" target=\"_blank\" class=\"btn btn-simple btn-white btn-just-icon\">\r\n                        <i class=\"fa fa-github\"></i>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ 488:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 490:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(343);


/***/ })

},[490]);
//# sourceMappingURL=main.bundle.js.map