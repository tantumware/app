webpackJsonp([5],{

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["TranslateLoaderFactory"] = TranslateLoaderFactory;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_http_loader__ = __webpack_require__(213);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






function TranslateLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_5__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    return LoginPageModule;
}());
LoginPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */]),
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild(),
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["a" /* TranslateLoader */],
                    useFactory: (TranslateLoaderFactory),
                    deps: [__WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]]
                }
            })
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */]
        ]
    })
], LoginPageModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageKeys; });
var StorageKeys = (function () {
    function StorageKeys() {
    }
    return StorageKeys;
}());

StorageKeys.CONSTRAINT = "constraint";
StorageKeys.RESULT = "result";
StorageKeys.SCHEDULE = "schedule";
StorageKeys.ACCOUNT = "account";
StorageKeys.KEEP_LOGGED_IN = "keep_loged_in";
StorageKeys.LANGUAGE = "language";
StorageKeys.STATISTIC = "statistic";
StorageKeys.ALL_SUBJECTS = "all_subjects";
//# sourceMappingURL=storage-keys.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_login_provider_login_provider__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_account__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_storage_keys__ = __webpack_require__(314);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginPage = (function () {
    function LoginPage(navCtrl, loginProvider, toastCtrl, translateService, storage, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.loginProvider = loginProvider;
        this.toastCtrl = toastCtrl;
        this.translateService = translateService;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.showView = false;
        this.idioma = "pt";
        this.manterConectado = true;
        this.translateService.setDefaultLang('pt');
        this.storage.get(__WEBPACK_IMPORTED_MODULE_6__utils_storage_keys__["a" /* StorageKeys */].LANGUAGE).then(function (idioma) {
            if (idioma) {
                _this.idioma = idioma;
                _this.translateService.use(_this.idioma);
            }
        });
    }
    LoginPage.prototype.ionViewWillEnter = function () {
        this.username = null;
        this.password = null;
        this.showView = false;
        this.idioma = this.translateService.currentLang;
        this.checkKeepLoggedIn();
    };
    LoginPage.prototype.checkKeepLoggedIn = function () {
        var _this = this;
        this.storage.get(__WEBPACK_IMPORTED_MODULE_6__utils_storage_keys__["a" /* StorageKeys */].ACCOUNT).then(function (acc) {
            _this.storage.get(__WEBPACK_IMPORTED_MODULE_6__utils_storage_keys__["a" /* StorageKeys */].KEEP_LOGGED_IN).then(function (b) {
                _this.manterConectado = b;
                if (acc && b) {
                    _this.doLogin(acc);
                }
                else {
                    _this.showView = true;
                }
            });
        });
    };
    LoginPage.prototype.idiomaChanged = function () {
        this.translateService.use(this.idioma);
        this.storage.set(__WEBPACK_IMPORTED_MODULE_6__utils_storage_keys__["a" /* StorageKeys */].LANGUAGE, this.idioma);
    };
    LoginPage.prototype.prepareLogin = function () {
        var userName = this.username == null ? "" : this.username;
        var password = this.password == null ? "" : this.password;
        var acc = new __WEBPACK_IMPORTED_MODULE_1__models_account__["a" /* Account */](userName, password);
        this.doLogin(acc);
    };
    LoginPage.prototype.doLogin = function (acc) {
        var _this = this;
        this.storage.set(__WEBPACK_IMPORTED_MODULE_6__utils_storage_keys__["a" /* StorageKeys */].KEEP_LOGGED_IN, this.manterConectado);
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        var timeOutid = setTimeout(function () {
            loading.present();
        }, 300);
        this.loginProvider.login(acc).subscribe(function (res) {
            _this.storage.set(__WEBPACK_IMPORTED_MODULE_6__utils_storage_keys__["a" /* StorageKeys */].ACCOUNT, acc);
            loading.dismiss();
            clearTimeout(timeOutid);
            _this.navCtrl.push('MainPage');
        }, function (err) {
            loading.dismiss();
            clearTimeout(timeOutid);
            console.error('ERROR', err);
            _this.showView = true;
            var toast = _this.toastCtrl.create({
                message: 'DEU RUIM',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
    };
    LoginPage.prototype.onSobreClick = function () {
        this.navCtrl.push('SobrePage');
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/home/pedro/github/app/src/pages/login/login.html"*/'<ion-content *ngIf=\'showView\' class="login-page">\n  <ion-list>\n    <img src="assets/img/scholarship.svg" class="logo-tantum" />\n\n    <ion-item>\n      <ion-label>{{ \'LANGUAGE\' | translate }}</ion-label>\n      <ion-select [(ngModel)]="idioma" (ionChange)="idiomaChanged()">\n        <ion-option value="pt">Português</ion-option>\n        <ion-option value="en">English</ion-option>\n        <ion-option value="es">Español</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <form (submit)="prepareLogin()">\n      <ion-list>\n        <ion-item>\n          <ion-label floating>{{ \'USERNAME\' | translate }}</ion-label>\n          <ion-input type="text" [(ngModel)]="username" name="username"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label floating>{{ \'PASSWORD\' | translate }}</ion-label>\n          <ion-input type="password" [(ngModel)]="password" name="password"></ion-input>\n        </ion-item>\n\n        <ion-item class="manter-conectado">\n          <ion-label>{{ \'KEEP_LOGGED_IN\' | translate }}</ion-label>\n          <ion-toggle [(ngModel)]="manterConectado" color="main-color" [ngModelOptions]="{standalone: true}"></ion-toggle>\n        </ion-item>\n\n        <button ion-button color="main-color" class="login-button">{{ \'LOGIN_BUTTON\' | translate }}</button>\n\n      </ion-list>\n    </form>    \n    \n    <button ion-button color="main-color" (click)=\'onSobreClick()\' class="sobre-button">{{ \'ABOUT\' | translate }}</button>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/home/pedro/github/app/src/pages/login/login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_0__providers_login_provider_login_provider__["a" /* LoginProvider */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["m" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* LoadingController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Account; });
var Account = (function () {
    function Account(username, password) {
        this.username = username;
        this.password = password;
    }
    return Account;
}());

//# sourceMappingURL=account.js.map

/***/ })

});
//# sourceMappingURL=5.js.map