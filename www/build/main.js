webpackJsonp([0],{

/***/ 118:
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
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 159:
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
webpackEmptyAsyncContext.id = 159;

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__news_news__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__training_training__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__createRoute_createRoute__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__viewRoute_viewRoute__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_profile__ = __webpack_require__(208);
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
    function TabsPage(alertCtrl) {
        this.alertCtrl = alertCtrl;
        this.newsTab = __WEBPACK_IMPORTED_MODULE_2__news_news__["a" /* NewsPage */];
        this.trainingTab = __WEBPACK_IMPORTED_MODULE_3__training_training__["a" /* TrainingPage */];
        this.createRouteTab = __WEBPACK_IMPORTED_MODULE_4__createRoute_createRoute__["a" /* CreateRoutePage */];
        this.viewRouteTab = __WEBPACK_IMPORTED_MODULE_5__viewRoute_viewRoute__["a" /* ViewRoutePage */];
        this.profileTab = __WEBPACK_IMPORTED_MODULE_6__profile_profile__["a" /* ProfilePage */];
    }
    TabsPage.prototype.popUpCreateRoute = function () {
        var alert = this.alertCtrl.create({
            title: "Do you want to?",
            buttons: [
                {
                    text: "New boulder",
                },
                {
                    text: "Resume boulder"
                }
            ]
        });
        console.log("test");
        alert.present();
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Olive\Documents\repos\UraniumMongoose\src\pages\tabs\tabs.html"*/'<ion-tabs >\n  <ion-tab [root]="newsTab" tabIcon="invoice"></ion-tab>\n  <ion-tab [root]="trainingTab" tabIcon="dumbbell"></ion-tab>\n  <button (click)="popUpCreateRoute()">\n\n    <ion-tab  style="font-size: 32px;"tabIcon="md-add"></ion-tab>\n  </button>\n  <ion-tab [root]="viewRouteTab" tabIcon="route"></ion-tab>\n  <ion-tab [root]="profileTab" tabIcon="user"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\Olive\Documents\repos\UraniumMongoose\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], NewsPage);
    return NewsPage;
}());

//# sourceMappingURL=news.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrainingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], TrainingPage);
    return TrainingPage;
}());

//# sourceMappingURL=training.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateRoutePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], CreateRoutePage);
    return CreateRoutePage;
}());

//# sourceMappingURL=createRoute.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewRoutePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ViewRoutePage);
    return ViewRoutePage;
}());

//# sourceMappingURL=viewRoute.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
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
            selector: 'page-profile',template:/*ion-inline-start:"C:\Users\Olive\Documents\repos\UraniumMongoose\src\pages\profile\profile.html"*/'<ion-header>\n  <ion-navbar color="white">\n    <ion-title>Oliver Laustsen</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content>\n\n  <ion-row padding>\n    <!-- Avatar -->\n    <ion-col col-5>\n      <img src="https://scontent.fcph1-1.fna.fbcdn.net/v/t1.0-9/11222053_1030132887011170_5420656514196313693_n.jpg?_nc_cat=110&_nc_ht=scontent.fcph1-1.fna&oh=0912894cd78cd81e51d78a8c0385a6d5&oe=5CAA6392" class="avatar" style="border-radius: 100px" alt="">\n    </ion-col>\n    <ion-col col-2 offset-1>\n      <br><br><br>\n      <p profile>Grade</p>\n    </ion-col>\n  </ion-row>\n\n  <!-- Profile info -->\n  <div padding >\n      <ion-card>\n          <ion-card-content>\n            <canvas #trainingCanvas height="400"></canvas>\n          </ion-card-content>\n        </ion-card>\n      <!--<ion-icon style="font-size: 250px;" name="trending-up"></ion-icon>-->\n  </div>\n</ion-content>'/*ion-inline-end:"C:\Users\Olive\Documents\repos\UraniumMongoose\src\pages\profile\profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(364);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_news_news__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_training_training__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_createRoute_createRoute__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_viewRoute_viewRoute__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(202);
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
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
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
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(203);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 439:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 218,
	"./af.js": 218,
	"./ar": 219,
	"./ar-dz": 220,
	"./ar-dz.js": 220,
	"./ar-kw": 221,
	"./ar-kw.js": 221,
	"./ar-ly": 222,
	"./ar-ly.js": 222,
	"./ar-ma": 223,
	"./ar-ma.js": 223,
	"./ar-sa": 224,
	"./ar-sa.js": 224,
	"./ar-tn": 225,
	"./ar-tn.js": 225,
	"./ar.js": 219,
	"./az": 226,
	"./az.js": 226,
	"./be": 227,
	"./be.js": 227,
	"./bg": 228,
	"./bg.js": 228,
	"./bm": 229,
	"./bm.js": 229,
	"./bn": 230,
	"./bn.js": 230,
	"./bo": 231,
	"./bo.js": 231,
	"./br": 232,
	"./br.js": 232,
	"./bs": 233,
	"./bs.js": 233,
	"./ca": 234,
	"./ca.js": 234,
	"./cs": 235,
	"./cs.js": 235,
	"./cv": 236,
	"./cv.js": 236,
	"./cy": 237,
	"./cy.js": 237,
	"./da": 238,
	"./da.js": 238,
	"./de": 239,
	"./de-at": 240,
	"./de-at.js": 240,
	"./de-ch": 241,
	"./de-ch.js": 241,
	"./de.js": 239,
	"./dv": 242,
	"./dv.js": 242,
	"./el": 243,
	"./el.js": 243,
	"./en-au": 244,
	"./en-au.js": 244,
	"./en-ca": 245,
	"./en-ca.js": 245,
	"./en-gb": 246,
	"./en-gb.js": 246,
	"./en-ie": 247,
	"./en-ie.js": 247,
	"./en-il": 248,
	"./en-il.js": 248,
	"./en-nz": 249,
	"./en-nz.js": 249,
	"./eo": 250,
	"./eo.js": 250,
	"./es": 251,
	"./es-do": 252,
	"./es-do.js": 252,
	"./es-us": 253,
	"./es-us.js": 253,
	"./es.js": 251,
	"./et": 254,
	"./et.js": 254,
	"./eu": 255,
	"./eu.js": 255,
	"./fa": 256,
	"./fa.js": 256,
	"./fi": 257,
	"./fi.js": 257,
	"./fo": 258,
	"./fo.js": 258,
	"./fr": 259,
	"./fr-ca": 260,
	"./fr-ca.js": 260,
	"./fr-ch": 261,
	"./fr-ch.js": 261,
	"./fr.js": 259,
	"./fy": 262,
	"./fy.js": 262,
	"./gd": 263,
	"./gd.js": 263,
	"./gl": 264,
	"./gl.js": 264,
	"./gom-latn": 265,
	"./gom-latn.js": 265,
	"./gu": 266,
	"./gu.js": 266,
	"./he": 267,
	"./he.js": 267,
	"./hi": 268,
	"./hi.js": 268,
	"./hr": 269,
	"./hr.js": 269,
	"./hu": 270,
	"./hu.js": 270,
	"./hy-am": 271,
	"./hy-am.js": 271,
	"./id": 272,
	"./id.js": 272,
	"./is": 273,
	"./is.js": 273,
	"./it": 274,
	"./it.js": 274,
	"./ja": 275,
	"./ja.js": 275,
	"./jv": 276,
	"./jv.js": 276,
	"./ka": 277,
	"./ka.js": 277,
	"./kk": 278,
	"./kk.js": 278,
	"./km": 279,
	"./km.js": 279,
	"./kn": 280,
	"./kn.js": 280,
	"./ko": 281,
	"./ko.js": 281,
	"./ky": 282,
	"./ky.js": 282,
	"./lb": 283,
	"./lb.js": 283,
	"./lo": 284,
	"./lo.js": 284,
	"./lt": 285,
	"./lt.js": 285,
	"./lv": 286,
	"./lv.js": 286,
	"./me": 287,
	"./me.js": 287,
	"./mi": 288,
	"./mi.js": 288,
	"./mk": 289,
	"./mk.js": 289,
	"./ml": 290,
	"./ml.js": 290,
	"./mn": 291,
	"./mn.js": 291,
	"./mr": 292,
	"./mr.js": 292,
	"./ms": 293,
	"./ms-my": 294,
	"./ms-my.js": 294,
	"./ms.js": 293,
	"./mt": 295,
	"./mt.js": 295,
	"./my": 296,
	"./my.js": 296,
	"./nb": 297,
	"./nb.js": 297,
	"./ne": 298,
	"./ne.js": 298,
	"./nl": 299,
	"./nl-be": 300,
	"./nl-be.js": 300,
	"./nl.js": 299,
	"./nn": 301,
	"./nn.js": 301,
	"./pa-in": 302,
	"./pa-in.js": 302,
	"./pl": 303,
	"./pl.js": 303,
	"./pt": 304,
	"./pt-br": 305,
	"./pt-br.js": 305,
	"./pt.js": 304,
	"./ro": 306,
	"./ro.js": 306,
	"./ru": 307,
	"./ru.js": 307,
	"./sd": 308,
	"./sd.js": 308,
	"./se": 309,
	"./se.js": 309,
	"./si": 310,
	"./si.js": 310,
	"./sk": 311,
	"./sk.js": 311,
	"./sl": 312,
	"./sl.js": 312,
	"./sq": 313,
	"./sq.js": 313,
	"./sr": 314,
	"./sr-cyrl": 315,
	"./sr-cyrl.js": 315,
	"./sr.js": 314,
	"./ss": 316,
	"./ss.js": 316,
	"./sv": 317,
	"./sv.js": 317,
	"./sw": 318,
	"./sw.js": 318,
	"./ta": 319,
	"./ta.js": 319,
	"./te": 320,
	"./te.js": 320,
	"./tet": 321,
	"./tet.js": 321,
	"./tg": 322,
	"./tg.js": 322,
	"./th": 323,
	"./th.js": 323,
	"./tl-ph": 324,
	"./tl-ph.js": 324,
	"./tlh": 325,
	"./tlh.js": 325,
	"./tr": 326,
	"./tr.js": 326,
	"./tzl": 327,
	"./tzl.js": 327,
	"./tzm": 328,
	"./tzm-latn": 329,
	"./tzm-latn.js": 329,
	"./tzm.js": 328,
	"./ug-cn": 330,
	"./ug-cn.js": 330,
	"./uk": 331,
	"./uk.js": 331,
	"./ur": 332,
	"./ur.js": 332,
	"./uz": 333,
	"./uz-latn": 334,
	"./uz-latn.js": 334,
	"./uz.js": 333,
	"./vi": 335,
	"./vi.js": 335,
	"./x-pseudo": 336,
	"./x-pseudo.js": 336,
	"./yo": 337,
	"./yo.js": 337,
	"./zh-cn": 338,
	"./zh-cn.js": 338,
	"./zh-hk": 339,
	"./zh-hk.js": 339,
	"./zh-tw": 340,
	"./zh-tw.js": 340
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

},[341]);
//# sourceMappingURL=main.js.map