webpackJsonp([0],{

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__news_news__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__training_training__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__createRoute_createRoute__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__viewRoute_viewRoute__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_profile__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.newsTab = __WEBPACK_IMPORTED_MODULE_1__news_news__["a" /* NewsPage */];
        this.trainingTab = __WEBPACK_IMPORTED_MODULE_2__training_training__["a" /* TrainingPage */];
        this.createRouteTab = __WEBPACK_IMPORTED_MODULE_3__createRoute_createRoute__["a" /* CreateRoutePage */];
        this.viewRouteTab = __WEBPACK_IMPORTED_MODULE_4__viewRoute_viewRoute__["a" /* ViewRoutePage */];
        this.profileTab = __WEBPACK_IMPORTED_MODULE_5__profile_profile__["a" /* ProfilePage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Olive\Documents\repos\UraniumMongoose\src\pages\tabs\tabs.html"*/'<ion-tabs >\n  <ion-tab [root]="newsTab" tabIcon="invoice"></ion-tab>\n  <ion-tab [root]="trainingTab" tabIcon="dumbbell"></ion-tab>\n  <ion-tab [root]="createRouteTab" style="font-size: 32px;"tabIcon="md-add"></ion-tab>\n  <ion-tab [root]="viewRouteTab" tabIcon="route"></ion-tab>\n  <ion-tab [root]="profileTab" tabIcon="user"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\Olive\Documents\repos\UraniumMongoose\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewsPage = /** @class */ (function () {
    function NewsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    NewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-news',template:/*ion-inline-start:"C:\Users\Olive\Documents\repos\UraniumMongoose\src\pages\news\news.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      News\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n    <a href="">\n      <div>\n        <img src="https://image.redbull.com/rbcom/052/2017-12-04/43e519f2-a52e-40c2-b868-4a97b31defc8/0012/0/0/0/3604/5406/1500/1/bouldering.jpg" />\n      </div>\n    </a>\n    <ion-card-content>\n      <ion-card-title>\n        New routes! @ CPH Boulders\n      </ion-card-title>\n      <p>\n        The amphitheater is brand new, every route has a hint\n        of this weeks theme - Gaston.\n        So come and give it a go!\n      </p>\n    </ion-card-content>\n    <ion-row no-padding>\n    </ion-row>\n  </ion-card>\n  <ion-card>\n    <a href="">\n      <div>\n        <img src="https://i.ytimg.com/vi/2usFUbqPvl4/maxresdefault.jpg" />\n      </div>\n    </a>\n      <ion-card-content>\n      <ion-card-title>\n        Tips for Beginners\n      </ion-card-title>\n      <p>\n        This blog post cotains 10 tips to beginners and a written guide for selection of shoes\n        and some warm-up exercises. \n      </p>\n    </ion-card-content>\n    <ion-row no-padding>\n    </ion-row>\n  </ion-card>\n  <ion-card>\n    <a href="">\n      <div>\n        <img src="https://www.climbing.com/.image/t_share/MTU0OTQ3ODQyNjUyMjUxNjU1/30740303_1020318921452879_9079879150885404672_o.jpg" />\n      </div>\n    </a>\n      <ion-card-content>\n      <ion-card-title>\n        Finals @ CPH FunCup\n      </ion-card-title>\n      <p>\n        Video and result for this weeks finals at CPH FunCup is up, \n        read a interview with the finalists. Hear the routesetters thoughts \n        on the solutions for the finals.\n      </p>\n    </ion-card-content>\n    <ion-row no-padding>\n    </ion-row>\n  </ion-card>'/*ion-inline-end:"C:\Users\Olive\Documents\repos\UraniumMongoose\src\pages\news\news.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], NewsPage);
    return NewsPage;
}());

//# sourceMappingURL=news.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrainingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TrainingPage = /** @class */ (function () {
    function TrainingPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    TrainingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-training',template:/*ion-inline-start:"C:\Users\Olive\Documents\repos\UraniumMongoose\src\pages\training\training.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Training\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2>Welcome to Ionic!</h2>\n  <p>\n    This starter project comes with simple tabs-based layout for apps\n    that are going to primarily use a Tabbed UI.\n  </p>\n  <p>\n    Take a look at the <code>src/pages/</code> directory to add or change tabs,\n    update any existing page or create new pages.\n  </p>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Olive\Documents\repos\UraniumMongoose\src\pages\training\training.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], TrainingPage);
    return TrainingPage;
}());

//# sourceMappingURL=training.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateRoutePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CreateRoutePage = /** @class */ (function () {
    function CreateRoutePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    CreateRoutePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-createRoute',template:/*ion-inline-start:"C:\Users\Olive\Documents\repos\UraniumMongoose\src\pages\createRoute\createRoute.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Create Route\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Olive\Documents\repos\UraniumMongoose\src\pages\createRoute\createRoute.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], CreateRoutePage);
    return CreateRoutePage;
}());

//# sourceMappingURL=createRoute.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewRoutePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewRoutePage = /** @class */ (function () {
    function ViewRoutePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ViewRoutePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-viewRoute',template:/*ion-inline-start:"C:\Users\Olive\Documents\repos\UraniumMongoose\src\pages\viewRoute\viewRoute.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      View Route\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2>Welcome to Ionic!</h2>\n  <p>\n    This starter project comes with simple tabs-based layout for apps\n    that are going to primarily use a Tabbed UI.\n  </p>\n  <p>\n    Take a look at the <code>src/pages/</code> directory to add or change tabs,\n    update any existing page or create new pages.\n  </p>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Olive\Documents\repos\UraniumMongoose\src\pages\viewRoute\viewRoute.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], ViewRoutePage);
    return ViewRoutePage;
}());

//# sourceMappingURL=viewRoute.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        this.trainingChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](this.trainingCanvas.nativeElement, {
            type: 'line',
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [
                    {
                        label: "Climbing hours",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: "rgba(75,192,192,0.2)",
                        borderColor: "rgba(75,192,192,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(75,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [65, 59, 80, 81, 56, 55, 40],
                        spanGaps: false,
                    },
                    {
                        label: "Intensity",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: "rgba(192,75,75,0.2)",
                        borderColor: "rgba(192,75,75,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(192,75,75,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(192,75,75,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [30, 20, 42, 44, 52, 49, 80],
                        spanGaps: false,
                    }
                ]
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('trainingCanvas'),
        __metadata("design:type", Object)
    ], ProfilePage.prototype, "trainingCanvas", void 0);
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\Users\Olive\Documents\repos\UraniumMongoose\src\pages\profile\profile.html"*/'<ion-header>\n  <ion-navbar color="white">\n    <ion-title>Oliver Laustsen</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content>\n\n  <ion-row padding>\n    <!-- Avatar -->\n    <ion-col col-5>\n      <img src="https://scontent.fcph1-1.fna.fbcdn.net/v/t1.0-9/11222053_1030132887011170_5420656514196313693_n.jpg?_nc_cat=110&_nc_ht=scontent.fcph1-1.fna&oh=0912894cd78cd81e51d78a8c0385a6d5&oe=5CAA6392" class="avatar" style="border-radius: 100px" alt="">\n    </ion-col>\n    <ion-col col-2 offset-1>\n      <br><br><br>\n      <p>Grade</p>\n    </ion-col>\n  </ion-row>\n\n  <!-- Profile info -->\n  <div padding >\n      <ion-card>\n          <ion-card-content>\n            <canvas #trainingCanvas height="400"></canvas>\n          </ion-card-content>\n        </ion-card>\n      <!--<ion-icon style="font-size: 250px;" name="trending-up"></ion-icon>-->\n  </div>\n</ion-content>'/*ion-inline-end:"C:\Users\Olive\Documents\repos\UraniumMongoose\src\pages\profile\profile.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]) === "function" && _a || Object])
    ], ProfilePage);
    return ProfilePage;
    var _a;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(222);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_news_news__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_training_training__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_createRoute_createRoute__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_viewRoute_viewRoute__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_news_news__["a" /* NewsPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_training_training__["a" /* TrainingPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_createRoute_createRoute__["a" /* CreateRoutePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_viewRoute_viewRoute__["a" /* ViewRoutePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_news_news__["a" /* NewsPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_training_training__["a" /* TrainingPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_createRoute_createRoute__["a" /* CreateRoutePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_viewRoute_viewRoute__["a" /* ViewRoutePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Olive\Documents\repos\UraniumMongoose\src\app\app.html"*/'\n<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Olive\Documents\repos\UraniumMongoose\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 439:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 292,
	"./af.js": 292,
	"./ar": 293,
	"./ar-dz": 294,
	"./ar-dz.js": 294,
	"./ar-kw": 295,
	"./ar-kw.js": 295,
	"./ar-ly": 296,
	"./ar-ly.js": 296,
	"./ar-ma": 297,
	"./ar-ma.js": 297,
	"./ar-sa": 298,
	"./ar-sa.js": 298,
	"./ar-tn": 299,
	"./ar-tn.js": 299,
	"./ar.js": 293,
	"./az": 300,
	"./az.js": 300,
	"./be": 301,
	"./be.js": 301,
	"./bg": 302,
	"./bg.js": 302,
	"./bm": 303,
	"./bm.js": 303,
	"./bn": 304,
	"./bn.js": 304,
	"./bo": 305,
	"./bo.js": 305,
	"./br": 306,
	"./br.js": 306,
	"./bs": 307,
	"./bs.js": 307,
	"./ca": 308,
	"./ca.js": 308,
	"./cs": 309,
	"./cs.js": 309,
	"./cv": 310,
	"./cv.js": 310,
	"./cy": 311,
	"./cy.js": 311,
	"./da": 312,
	"./da.js": 312,
	"./de": 313,
	"./de-at": 314,
	"./de-at.js": 314,
	"./de-ch": 315,
	"./de-ch.js": 315,
	"./de.js": 313,
	"./dv": 316,
	"./dv.js": 316,
	"./el": 317,
	"./el.js": 317,
	"./en-au": 318,
	"./en-au.js": 318,
	"./en-ca": 319,
	"./en-ca.js": 319,
	"./en-gb": 320,
	"./en-gb.js": 320,
	"./en-ie": 321,
	"./en-ie.js": 321,
	"./en-il": 322,
	"./en-il.js": 322,
	"./en-nz": 323,
	"./en-nz.js": 323,
	"./eo": 324,
	"./eo.js": 324,
	"./es": 325,
	"./es-do": 326,
	"./es-do.js": 326,
	"./es-us": 327,
	"./es-us.js": 327,
	"./es.js": 325,
	"./et": 328,
	"./et.js": 328,
	"./eu": 329,
	"./eu.js": 329,
	"./fa": 330,
	"./fa.js": 330,
	"./fi": 331,
	"./fi.js": 331,
	"./fo": 332,
	"./fo.js": 332,
	"./fr": 333,
	"./fr-ca": 334,
	"./fr-ca.js": 334,
	"./fr-ch": 335,
	"./fr-ch.js": 335,
	"./fr.js": 333,
	"./fy": 336,
	"./fy.js": 336,
	"./gd": 337,
	"./gd.js": 337,
	"./gl": 338,
	"./gl.js": 338,
	"./gom-latn": 339,
	"./gom-latn.js": 339,
	"./gu": 340,
	"./gu.js": 340,
	"./he": 341,
	"./he.js": 341,
	"./hi": 342,
	"./hi.js": 342,
	"./hr": 343,
	"./hr.js": 343,
	"./hu": 344,
	"./hu.js": 344,
	"./hy-am": 345,
	"./hy-am.js": 345,
	"./id": 346,
	"./id.js": 346,
	"./is": 347,
	"./is.js": 347,
	"./it": 348,
	"./it.js": 348,
	"./ja": 349,
	"./ja.js": 349,
	"./jv": 350,
	"./jv.js": 350,
	"./ka": 351,
	"./ka.js": 351,
	"./kk": 352,
	"./kk.js": 352,
	"./km": 353,
	"./km.js": 353,
	"./kn": 354,
	"./kn.js": 354,
	"./ko": 355,
	"./ko.js": 355,
	"./ky": 356,
	"./ky.js": 356,
	"./lb": 357,
	"./lb.js": 357,
	"./lo": 358,
	"./lo.js": 358,
	"./lt": 359,
	"./lt.js": 359,
	"./lv": 360,
	"./lv.js": 360,
	"./me": 361,
	"./me.js": 361,
	"./mi": 362,
	"./mi.js": 362,
	"./mk": 363,
	"./mk.js": 363,
	"./ml": 364,
	"./ml.js": 364,
	"./mn": 365,
	"./mn.js": 365,
	"./mr": 366,
	"./mr.js": 366,
	"./ms": 367,
	"./ms-my": 368,
	"./ms-my.js": 368,
	"./ms.js": 367,
	"./mt": 369,
	"./mt.js": 369,
	"./my": 370,
	"./my.js": 370,
	"./nb": 371,
	"./nb.js": 371,
	"./ne": 372,
	"./ne.js": 372,
	"./nl": 373,
	"./nl-be": 374,
	"./nl-be.js": 374,
	"./nl.js": 373,
	"./nn": 375,
	"./nn.js": 375,
	"./pa-in": 376,
	"./pa-in.js": 376,
	"./pl": 377,
	"./pl.js": 377,
	"./pt": 378,
	"./pt-br": 379,
	"./pt-br.js": 379,
	"./pt.js": 378,
	"./ro": 380,
	"./ro.js": 380,
	"./ru": 381,
	"./ru.js": 381,
	"./sd": 382,
	"./sd.js": 382,
	"./se": 383,
	"./se.js": 383,
	"./si": 384,
	"./si.js": 384,
	"./sk": 385,
	"./sk.js": 385,
	"./sl": 386,
	"./sl.js": 386,
	"./sq": 387,
	"./sq.js": 387,
	"./sr": 388,
	"./sr-cyrl": 389,
	"./sr-cyrl.js": 389,
	"./sr.js": 388,
	"./ss": 390,
	"./ss.js": 390,
	"./sv": 391,
	"./sv.js": 391,
	"./sw": 392,
	"./sw.js": 392,
	"./ta": 393,
	"./ta.js": 393,
	"./te": 394,
	"./te.js": 394,
	"./tet": 395,
	"./tet.js": 395,
	"./tg": 396,
	"./tg.js": 396,
	"./th": 397,
	"./th.js": 397,
	"./tl-ph": 398,
	"./tl-ph.js": 398,
	"./tlh": 399,
	"./tlh.js": 399,
	"./tr": 400,
	"./tr.js": 400,
	"./tzl": 401,
	"./tzl.js": 401,
	"./tzm": 402,
	"./tzm-latn": 403,
	"./tzm-latn.js": 403,
	"./tzm.js": 402,
	"./ug-cn": 404,
	"./ug-cn.js": 404,
	"./uk": 405,
	"./uk.js": 405,
	"./ur": 406,
	"./ur.js": 406,
	"./uz": 407,
	"./uz-latn": 408,
	"./uz-latn.js": 408,
	"./uz.js": 407,
	"./vi": 409,
	"./vi.js": 409,
	"./x-pseudo": 410,
	"./x-pseudo.js": 410,
	"./yo": 411,
	"./yo.js": 411,
	"./zh-cn": 412,
	"./zh-cn.js": 412,
	"./zh-hk": 413,
	"./zh-hk.js": 413,
	"./zh-tw": 414,
	"./zh-tw.js": 414
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 439;

/***/ })

},[199]);
//# sourceMappingURL=main.js.map