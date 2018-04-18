webpackJsonp([1],{

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageModule", function() { return MainPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pipes_pipes_module__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_components_module__ = __webpack_require__(315);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var MainPageModule = (function () {
    function MainPageModule() {
    }
    return MainPageModule;
}());
MainPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__main__["a" /* MainPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__main__["a" /* MainPage */]),
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["b" /* TranslateModule */].forChild(),
            __WEBPACK_IMPORTED_MODULE_5__components_components_module__["a" /* ComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_0__pipes_pipes_module__["a" /* PipesModule */]
        ],
    })
], MainPageModule);

//# sourceMappingURL=main.module.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormatterUtils; });
var FormatterUtils = (function () {
    function FormatterUtils() {
    }
    /**
     * Method to format de hour from this pattern: d.hhmm-n and return hh:mm
     * @param value example 2.0820-2 and return 08:20
     */
    FormatterUtils.formatHour = function (value) {
        var hour = value.substring(2, 6);
        return hour.slice(0, 2) + ":" + hour.slice(2);
    };
    FormatterUtils.formatLocal = function (value) {
        return value.split("-")[1];
    };
    FormatterUtils.replaceSpecialChars = function (value) {
        var newValue;
        newValue = value.toLowerCase()
            .replace(/ç/g, "c")
            .replace(/ã/g, "a")
            .replace(/á/g, "a")
            .replace(/à/g, "a")
            .replace(/â/g, "a")
            .replace(/é/g, "e")
            .replace(/è/g, "e")
            .replace(/ê/g, "e")
            .replace(/ẽ/g, "e")
            .replace(/í/g, "i")
            .replace(/ó/g, "o")
            .replace(/ò/g, "o")
            .replace(/õ/g, "o")
            .replace(/ô/g, "o")
            .replace(/ú/g, "u");
        return newValue;
    };
    return FormatterUtils;
}());

//# sourceMappingURL=formatter.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__schedule_schedule__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__location_location__ = __webpack_require__(320);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PipesModule = (function () {
    function PipesModule() {
    }
    return PipesModule;
}());
PipesModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_1__schedule_schedule__["a" /* SchedulePipe */],
            __WEBPACK_IMPORTED_MODULE_2__location_location__["a" /* LocationPipe */]],
        imports: [],
        exports: [__WEBPACK_IMPORTED_MODULE_1__schedule_schedule__["a" /* SchedulePipe */],
            __WEBPACK_IMPORTED_MODULE_2__location_location__["a" /* LocationPipe */]]
    })
], PipesModule);

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CapsulaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CapsulaComponent = (function () {
    function CapsulaComponent() {
        this.periodos = [];
        this.periodoSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.allPeriodosSelected = [];
    }
    CapsulaComponent.prototype.getClass = function (periodo) {
        return this.allPeriodosSelected.indexOf(periodo) > -1 ? 'capsule-ative' : 'capsule-inative';
    };
    CapsulaComponent.prototype.onItemClicked = function (periodo) {
        if (this.allPeriodosSelected.indexOf(periodo) > -1) {
            this.allPeriodosSelected.splice(this.allPeriodosSelected.indexOf(periodo), 1);
        }
        else {
            this.allPeriodosSelected.push(periodo);
        }
        this.periodoSelected.emit(this.allPeriodosSelected);
    };
    return CapsulaComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Array)
], CapsulaComponent.prototype, "periodos", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
    __metadata("design:type", Object)
], CapsulaComponent.prototype, "periodoSelected", void 0);
CapsulaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'capsula',template:/*ion-inline-start:"/home/pedro/github/app/src/components/capsula/capsula.html"*/'<ion-chip *ngFor=\'let periodo of periodos\' (click)="onItemClicked(periodo)" [ngClass]="getClass(periodo)">\n  <ion-label>{{periodo}}</ion-label>\n</ion-chip>'/*ion-inline-end:"/home/pedro/github/app/src/components/capsula/capsula.html"*/
    }),
    __metadata("design:paramtypes", [])
], CapsulaComponent);

//# sourceMappingURL=capsula.js.map

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

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__subject_list_subject_list__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__subject_action_list_subject_action_list__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__grade_horario_grade_horario__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__capsula_capsula__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipes_pipes_module__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    return ComponentsModule;
}());
ComponentsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["L" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_3__grade_horario_grade_horario__["a" /* GradeHorarioComponent */],
            __WEBPACK_IMPORTED_MODULE_4__capsula_capsula__["a" /* CapsulaComponent */],
            __WEBPACK_IMPORTED_MODULE_0__subject_list_subject_list__["a" /* SubjectListComponent */],
            __WEBPACK_IMPORTED_MODULE_1__subject_action_list_subject_action_list__["a" /* SubjectActionListComponent */]],
        imports: [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["e" /* IonicModule */], __WEBPACK_IMPORTED_MODULE_6__pipes_pipes_module__["a" /* PipesModule */], __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["b" /* TranslateModule */].forChild()],
        exports: [__WEBPACK_IMPORTED_MODULE_3__grade_horario_grade_horario__["a" /* GradeHorarioComponent */],
            __WEBPACK_IMPORTED_MODULE_4__capsula_capsula__["a" /* CapsulaComponent */],
            __WEBPACK_IMPORTED_MODULE_0__subject_list_subject_list__["a" /* SubjectListComponent */],
            __WEBPACK_IMPORTED_MODULE_1__subject_action_list_subject_action_list__["a" /* SubjectActionListComponent */]]
    })
], ComponentsModule);

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubjectListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SubjectListComponent = (function () {
    function SubjectListComponent(alertCtrl, plt) {
        this.alertCtrl = alertCtrl;
        this.plt = plt;
        this.onSwiped = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* EventEmitter */]();
    }
    SubjectListComponent.prototype.itemSwiped = function (s) {
        if (s.direction == 2) {
            this.onSwiped.emit(true);
        }
        else {
            this.onSwiped.emit(false);
        }
    };
    SubjectListComponent.prototype.getDisciplinas = function () {
        return this.subjects;
    };
    SubjectListComponent.prototype.onDisciplinaClicked = function (disciplina) {
        console.log(disciplina);
        var alert = this.alertCtrl.create({
            title: 'Detalhes da disciplina',
            subTitle: disciplina.nome,
            buttons: ['Voltar']
        });
        alert.present();
    };
    SubjectListComponent.prototype.showLista = function () {
        if (this.subjects) {
            return this.subjects.length > 0;
        }
        else {
            return false;
        }
    };
    SubjectListComponent.prototype.getLocalClass = function () {
        var clazz = "disciplia-local";
        if (this.plt.is('windows')) {
            clazz += " disciplia-local-wp";
        }
        return clazz;
    };
    SubjectListComponent.prototype.getNomeClass = function () {
        var clazz = "disciplia-nome";
        if (this.plt.is('windows')) {
            clazz += " disciplia-nome-wp";
        }
        return clazz;
    };
    return SubjectListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */])(),
    __metadata("design:type", Array)
], SubjectListComponent.prototype, "subjects", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["S" /* Output */])(),
    __metadata("design:type", Object)
], SubjectListComponent.prototype, "onSwiped", void 0);
SubjectListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'subject-list',template:/*ion-inline-start:"/home/pedro/github/app/src/components/subject-list/subject-list.html"*/'<div (swipe)="itemSwiped($event)" *ngIf="showLista()">\n    <div *ngFor=\'let disciplina of getDisciplinas()\' class="disciplina-item" (click)="onDisciplinaClicked(disciplina)">\n        <div class="horario">{{ disciplina.horarios | schedule}}</div>\n        <div class="disciplina-div"></div>\n        <div class="nomes">\n            <div [ngClass]="getLocalClass()">{{ disciplina.horarios  | location }}</div>\n            <div [ngClass]="getNomeClass()">{{disciplina.nome}}</div>\n        </div>\n    </div>\n</div>\n\n<p *ngIf="!showLista()">Não tem nada</p>'/*ion-inline-end:"/home/pedro/github/app/src/components/subject-list/subject-list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* Platform */]])
], SubjectListComponent);

//# sourceMappingURL=subject-list.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubjectActionListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SubjectActionListComponent = (function () {
    function SubjectActionListComponent(plt) {
        this.plt = plt;
        this.action = true;
        this.onRemoved = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    SubjectActionListComponent.prototype.remove = function (disciplina) {
        var index = this.subjects.indexOf(disciplina);
        this.subjects.splice(index, 1);
        this.onRemoved.emit(disciplina);
    };
    SubjectActionListComponent.prototype.getValue = function (disciplia) {
        return disciplia.codigo + " - " + disciplia.nome;
    };
    SubjectActionListComponent.prototype.getClass = function () {
        var name = "name-subject";
        if (!this.action) {
            name += " name-subject-without-action";
        }
        return name;
    };
    return SubjectActionListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Array)
], SubjectActionListComponent.prototype, "subjects", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Boolean)
], SubjectActionListComponent.prototype, "action", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
    __metadata("design:type", Object)
], SubjectActionListComponent.prototype, "onRemoved", void 0);
SubjectActionListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'subject-action-list',template:/*ion-inline-start:"/home/pedro/github/app/src/components/subject-action-list/subject-action-list.html"*/'<div class="subject-list">\n  <div class="base-subject" *ngFor=\'let subject of subjects\'>\n    <span [ngClass]="getClass()" [innerHTML]="getValue(subject)"></span>\n    <button *ngIf="action" class="remove-subject" (click)="remove(subject)">{{ \'REMOVE\' | translate }}</button>\n  </div>\n  <div></div>\n</div>'/*ion-inline-end:"/home/pedro/github/app/src/components/subject-action-list/subject-action-list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]])
], SubjectActionListComponent);

//# sourceMappingURL=subject-action-list.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GradeHorarioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GradeHorarioComponent = (function () {
    function GradeHorarioComponent(alertCtrl, translate) {
        this.alertCtrl = alertCtrl;
        this.translate = translate;
        this.afternoon = this.translate.instant('AFTERNOON');
        this.morning = this.translate.instant('MORNING');
        this.night = this.translate.instant('NIGHT');
        this.monday = this.translate.instant('MONDAY_SHORT');
        this.tuesday = this.translate.instant('TUESDAY_SHORT');
        this.wednesday = this.translate.instant('WEDNESDAY_SHORT');
        this.thursday = this.translate.instant('THURSDAY_SHORT');
        this.friday = this.translate.instant('FRIDAY_SHORT');
    }
    GradeHorarioComponent.prototype.getValue = function (horario) {
        if (this.subjects && this.subjects.length > 0) {
            for (var i in this.subjects) {
                for (var j in this.subjects[i].horarios) {
                    if (this.subjects[i].horarios[j].startsWith(horario)) {
                        return this.subjects[i].codigo;
                    }
                }
            }
        }
        return "&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;"; // white space
    };
    GradeHorarioComponent.prototype.onSlideChanged = function (event) {
        console.log(event);
    };
    GradeHorarioComponent.prototype.onSwiped = function (event) {
        console.log(event);
    };
    GradeHorarioComponent.prototype.onDisciplinaClicked = function (event) {
        var text;
        if (event.srcElement.id == '') {
            text = event.srcElement.innerHTML;
        }
        else {
            text = event.srcElement.id;
        }
        var alert = this.alertCtrl.create({
            title: text,
            subTitle: '10% of battery remaining',
            message: text,
            buttons: ['Voltar']
        });
        alert.present();
    };
    return GradeHorarioComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */])(),
    __metadata("design:type", Array)
], GradeHorarioComponent.prototype, "subjects", void 0);
GradeHorarioComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'grade-horario',template:/*ion-inline-start:"/home/pedro/github/app/src/components/grade-horario/grade-horario.html"*/'<p class="period">{{ morning }}</p>\n<table class="grade-horario-table" (onSwiped)="onSwiped($event)">\n  <tr>\n    <th>{{ monday }}</th>\n    <th>{{ tuesday }}</th>\n    <th>{{ wednesday }}</th>\n    <th>{{ thursday }}</th>\n    <th>{{ friday }}</th>\n  </tr>\n  <tr>\n    <td class="primeira-linha" id="2.0730" (click)=\'onDisciplinaClicked($event)\'>07:30\n      <br>\n      <br>\n      <span [innerHTML]="getValue(\'2.0730\')"></span>\n    </td>\n    <td class="primeira-linha">07:30\n      <br>\n      <br>\n      <span [innerHTML]="getValue(\'3.0730\')"></span>\n    </td>\n    <td class="primeira-linha">07:30\n      <br>\n      <br>\n      <span [innerHTML]="getValue(\'4.0730\')"></span>\n    </td>\n    <td class="primeira-linha">07:30\n      <br>\n      <br>\n      <span [innerHTML]="getValue(\'5.0730\')"></span>\n    </td>\n    <td class="primeira-linha">07:30\n      <br>\n      <br>\n      <span [innerHTML]="getValue(\'6.0730\')"></span>\n    </td>\n  </tr>\n  <tr>\n    <td>08:20\n      <br>\n      <br>\n      <span [innerHTML]="getValue(\'2.0820\')"></span>\n    </td>\n    <td>08:20\n      <br>\n      <br>\n      <span [innerHTML]="getValue(\'3.0820\')"></span>\n    </td>\n    <td>08:20\n      <br>\n      <br>\n      <span [innerHTML]="getValue(\'4.0820\')"></span>\n    </td>\n    <td>08:20\n      <br>\n      <br>\n      <span [innerHTML]="getValue(\'5.0820\')"></span>\n    </td>\n    <td>08:20\n      <br>\n      <br>\n      <span [innerHTML]="getValue(\'6.0820\')"></span>\n    </td>\n  </tr>\n  <tr>\n    <td>09:10\n      <br>\n      <br>\n      <span [innerHTML]="getValue(\'2.0910\')"></span>\n    </td>\n    <td>09:10\n      <br>\n      <br>\n      <span [innerHTML]="getValue(\'3.0910\')"></span>\n    </td>\n    <td>09:10\n      <br>\n      <br>\n      <span [innerHTML]="getValue(\'4.0910\')"></span>\n    </td>\n    <td>09:10\n      <br>\n      <br>\n      <span [innerHTML]="getValue(\'5.0910\')"></span>\n    </td>\n    <td>09:10\n      <br>\n      <br>\n      <span [innerHTML]="getValue(\'6.0910\')"></span>\n    </td>\n  </tr>\n  <tr>\n    <td>10:10\n      <br>\n      <br>\n      <span [innerHTML]="getValue(\'2.1010\')"></span>\n    </td>\n    <td>10:10\n      <br>\n      <br>\n      <span [innerHTML]="getValue(\'3.1010\')"></span>\n    </td>\n    <td>10:10\n      <br>\n      <br>\n      <span [innerHTML]="getValue(\'4.1010\')"></span>\n    </td>\n    <td>10:10\n      <br>\n      <br>\n      <span [innerHTML]="getValue(\'5.1010\')"></span>\n    </td>\n    <td>10:10\n      <br>\n      <br>\n      <span [innerHTML]="getValue(\'6.1010\')"></span>\n    </td>\n  </tr>\n  <tr>\n    <td class="ultima-linha">11:00\n      <br>\n      <br>\n      <span [innerHTML]="getValue(\'2.1100\')"></span>\n    </td>\n    <td class="ultima-linha">11:00\n      <br>\n      <br>\n      <span [innerHTML]="getValue(\'3.1100\')"></span>\n    </td>\n    <td class="ultima-linha">11:00\n      <br>\n      <br>\n      <span [innerHTML]="getValue(\'4.1100\')"></span>\n    </td>\n    <td class="ultima-linha">11:00\n      <br>\n      <br>\n      <span [innerHTML]="getValue(\'5.1100\')"></span>\n    </td>\n    <td class="ultima-linha">11:00\n      <br>\n      <br>\n      <span [innerHTML]="getValue(\'6.1100\')"></span>\n    </td>\n  </tr>\n</table>\n<p class="period">{{ afternoon }}</p>\n<table class="grade-horario-table">\n  <tr>\n    <td class="primeira-linha" id="2.1330" (click)=\'onDisciplinaClicked($event)\'>13:30\n      <br>\n      <br>\n      <span [innerHTML]="getValue(\'2.1330\')"></span>\n    </td>\n    <td class="primeira-linha">13:30\n      <br>\n      <br>\n      <span [innerHTML]="getValue(\'3.1330\')"></span>\n    </td>\n    <td class="primeira-linha">13:30\n      <br>\n      <br>\n      <span [innerHTML]="getValue(\'4.1330\')"></span>\n    </td>\n    <td class="primeira-linha">13:30\n      <br>\n      <br>\n      <span [innerHTML]="getValue(\'5.1330\')"></span>\n    </td>\n    <td class="primeira-linha">13:30\n      <br>\n      <br>\n      <span [innerHTML]="getValue(\'6.1330\')"></span>\n    </td>\n  </tr>\n  <tr>\n    <td>14:20\n      <br>\n      <br>\n      <span [innerHTML]="getValue(\'2.1420\')"></span>\n    </td>\n    <td>14:20\n      <br>\n      <br>\n      <span [innerHTML]="getValue(\'3.1420\')"></span>\n    </td>\n    <td>14:20\n      <br>\n      <br>\n      <span [innerHTML]="getValue(\'4.1420\')"></span>\n    </td>\n    <td>14:20\n      <br>\n      <br>\n      <span [innerHTML]="getValue(\'5.1420\')"></span>\n    </td>\n    <td>14:20\n      <br>\n      <br>\n      <span [innerHTML]="getValue(\'6.1420\')"></span>\n    </td>\n  </tr>\n  <tr>\n    <td>15:10\n      <br>\n      <br>\n      <span [innerHTML]="getValue(\'2.1510\')"></span>\n    </td>\n    <td>15:10\n      <br>\n      <br>\n      <span [innerHTML]="getValue(\'3.1510\')"></span>\n    </td>\n    <td>15:10\n      <br>\n      <br>\n      <span [innerHTML]="getValue(\'4.1510\')"></span>\n    </td>\n    <td>15:10\n      <br>\n      <br>\n      <span [innerHTML]="getValue(\'5.1510\')"></span>\n    </td>\n    <td>15:10\n      <br>\n      <br>\n      <span [innerHTML]="getValue(\'6.1510\')"></span>\n    </td>\n  </tr>\n  <tr>\n    <td>16:20\n      <br>\n      <br>\n      <span [innerHTML]="getValue(\'2.1620\')"></span>\n    </td>\n    <td>16:20\n      <br>\n      <br>\n      <span [innerHTML]="getValue(\'3.1620\')"></span>\n    </td>\n    <td>16:20\n      <br>\n      <br>\n      <span [innerHTML]="getValue(\'4.1620\')"></span>\n    </td>\n    <td>16:20\n      <br>\n      <br>\n      <span [innerHTML]="getValue(\'5.1620\')"></span>\n    </td>\n    <td>16:20\n      <br>\n      <br>\n      <span [innerHTML]="getValue(\'6.1620\')"></span>\n    </td>\n  </tr>\n  <tr>\n    <td class="ultima-linha">17:10\n      <br>\n      <br>\n      <span [innerHTML]="getValue(\'2.1710\')"></span>\n    </td>\n    <td class="ultima-linha">17:10\n      <br>\n      <br>\n      <span [innerHTML]="getValue(\'3.1710\')"></span>\n    </td>\n    <td class="ultima-linha">17:10\n      <br>\n      <br>\n      <span [innerHTML]="getValue(\'4.1710\')"></span>\n    </td>\n    <td class="ultima-linha">17:10\n      <br>\n      <br>\n      <span [innerHTML]="getValue(\'5.1710\')"></span>\n    </td>\n    <td class="ultima-linha">17:10\n      <br>\n      <br>\n      <span [innerHTML]="getValue(\'6.1710\')"></span>\n    </td>\n  </tr>\n</table>\n<p class="period">{{ night }}</p>\n<table class="grade-horario-table">\n  <tr>\n    <td class="primeira-linha" id="2.1830" (click)=\'onDisciplinaClicked($event)\'>18:30\n      <br>\n      <br>\n      <span [innerHTML]="getValue(\'2.1830\')"></span>\n    </td>\n    <td class="primeira-linha">18:30\n      <br>\n      <br>\n      <span [innerHTML]="getValue(\'3.1830\')"></span>\n    </td>\n    <td class="primeira-linha">18:30\n      <br>\n      <br>\n      <span [innerHTML]="getValue(\'4.1830\')"></span>\n    </td>\n    <td class="primeira-linha">18:30\n      <br>\n      <br>\n      <span [innerHTML]="getValue(\'5.1830\')"></span>\n    </td>\n    <td class="primeira-linha">18:30\n      <br>\n      <br>\n      <span [innerHTML]="getValue(\'6.1830\')"></span>\n    </td>\n  </tr>\n  <tr>\n    <td>19:20\n      <br>\n      <br>\n      <span [innerHTML]="getValue(\'2.1920\')"></span>\n    </td>\n    <td>19:20\n      <br>\n      <br>\n      <span [innerHTML]="getValue(\'3.1920\')"></span>\n    </td>\n    <td>19:20\n      <br>\n      <br>\n      <span [innerHTML]="getValue(\'4.1920\')"></span>\n    </td>\n    <td>19:20\n      <br>\n      <br>\n      <span [innerHTML]="getValue(\'5.1920\')"></span>\n    </td>\n    <td>19:20\n      <br>\n      <br>\n      <span [innerHTML]="getValue(\'6.1920\')"></span>\n    </td>\n  </tr>\n  <tr>\n    <td>20:20\n      <br>\n      <br>\n      <span [innerHTML]="getValue(\'2.2020\')"></span>\n    </td>\n    <td>20:20\n      <br>\n      <br>\n      <span [innerHTML]="getValue(\'3.2020\')"></span>\n    </td>\n    <td>20:20\n      <br>\n      <br>\n      <span [innerHTML]="getValue(\'4.2020\')"></span>\n    </td>\n    <td>20:20\n      <br>\n      <br>\n      <span [innerHTML]="getValue(\'5.2020\')"></span>\n    </td>\n    <td>20:20\n      <br>\n      <br>\n      <span [innerHTML]="getValue(\'6.2020\')"></span>\n    </td>\n  </tr>  \n  <tr>\n    <td class="ultima-linha">21:10\n      <br>\n      <br>\n      <span [innerHTML]="getValue(\'2.2110\')"></span>\n    </td>\n    <td class="ultima-linha">21:10\n      <br>\n      <br>\n      <span [innerHTML]="getValue(\'3.2110\')"></span>\n    </td>\n    <td class="ultima-linha">21:10\n      <br>\n      <br>\n      <span [innerHTML]="getValue(\'4.2110\')"></span>\n    </td>\n    <td class="ultima-linha">21:10\n      <br>\n      <br>\n      <span [innerHTML]="getValue(\'5.2110\')"></span>\n    </td>\n    <td class="ultima-linha">21:10\n      <br>\n      <br>\n      <span [innerHTML]="getValue(\'6.2110\')"></span>\n    </td>\n  </tr>\n</table>'/*ion-inline-end:"/home/pedro/github/app/src/components/grade-horario/grade-horario.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__["c" /* TranslateService */]])
], GradeHorarioComponent);

//# sourceMappingURL=grade-horario.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchedulePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_formatter__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SchedulePipe = (function () {
    function SchedulePipe() {
    }
    /**
     * Takes a value like "3.0820-2 / CTC-CTC102" and return 08:20
     */
    SchedulePipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var aux = value.toString().split("/")[0].trim();
        return __WEBPACK_IMPORTED_MODULE_0__utils_formatter__["a" /* FormatterUtils */].formatHour(aux);
    };
    return SchedulePipe;
}());
SchedulePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["W" /* Pipe */])({
        name: 'schedule',
    })
], SchedulePipe);

//# sourceMappingURL=schedule.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_formatter__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var LocationPipe = (function () {
    function LocationPipe() {
    }
    /**
     * Takes a value like "3.0820-2 / CTC-CTC102" and return CTC102
     */
    LocationPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var aux = value.toString().split("/")[1].trim();
        return __WEBPACK_IMPORTED_MODULE_0__utils_formatter__["a" /* FormatterUtils */].formatLocal(aux);
    };
    return LocationPipe;
}());
LocationPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["W" /* Pipe */])({
        name: 'location',
    })
], LocationPipe);

//# sourceMappingURL=location.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubjectHelper; });
var SubjectHelper = (function () {
    function SubjectHelper() {
    }
    SubjectHelper.list = function (subjects, day) {
        var newSubjects = [];
        for (var i in subjects) {
            var subject = subjects[i];
            for (var h in subject.horarios) {
                var time = subject.horarios[h];
                if (day == null) {
                    newSubjects.push(this.subject(subject, time));
                }
                else if (time.startsWith(day)) {
                    newSubjects.push(this.subject(subject, time));
                }
            }
        }
        return newSubjects;
    };
    SubjectHelper.nextTwo = function (subjects) {
        var newSubjects = [];
        var day = new Date().getDay() + 1;
        day = day > 7 ? 2 : day;
        for (var i in subjects) {
            var subject = subjects[i];
            for (var h in subject.horarios) {
                var time = subject.horarios[h];
                if (newSubjects.length == 2) {
                    return newSubjects;
                }
                newSubjects.push(this.subject(subject, time));
            }
        }
        return newSubjects;
    };
    SubjectHelper.subject = function (subject, time) {
        subject.horarios = [time];
        return subject;
    };
    return SubjectHelper;
}());

//# sourceMappingURL=subject-helper.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_storage_keys__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_horarios_schedule_provider__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_subject_helper__ = __webpack_require__(324);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MainPage = (function () {
    function MainPage(navCtrl, navParams, storage, translateService, scheduleProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.translateService = translateService;
        this.scheduleProvider = scheduleProvider;
    }
    MainPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('disciplinas').then(function (d) {
            if (d) {
                _this.disciplinas = d;
            }
        });
        this.storage.get(__WEBPACK_IMPORTED_MODULE_0__utils_storage_keys__["a" /* StorageKeys */].ACCOUNT).then(function (acc) { return _this.account = acc; });
        // mudar esse ano automaticamente
        this.scheduleProvider.schedule("2018-1")
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
            if (res.success) {
                _this.disciplinas = res.result.disciplinas;
                _this.storage.set('disciplinas', _this.disciplinas);
            }
        }, function (err) {
            console.error('ERROR', err);
        });
    };
    MainPage.prototype.onHorariosClicked = function () {
        this.navCtrl.push('GradeHorariosPage');
    };
    MainPage.prototype.onGerarHorarioClicked = function () {
        var _this = this;
        this.storage.get(__WEBPACK_IMPORTED_MODULE_0__utils_storage_keys__["a" /* StorageKeys */].RESULT).then(function (res) {
            if (res) {
                _this.navCtrl.push('ResultadoPage');
            }
            else {
                _this.navCtrl.push('DefineConstraintsPage');
            }
        });
    };
    MainPage.prototype.onSairClicked = function () {
        if (this.navCtrl.length() > 1) {
            this.navCtrl.remove(0);
        }
        this.storage.set(__WEBPACK_IMPORTED_MODULE_0__utils_storage_keys__["a" /* StorageKeys */].ACCOUNT, null);
        this.navCtrl.push('LoginPage');
    };
    MainPage.prototype.onEstatisticaClicked = function () {
        this.navCtrl.push('StatisticsPage');
    };
    MainPage.prototype.getDisciplinas = function () {
        return __WEBPACK_IMPORTED_MODULE_6__utils_subject_helper__["a" /* SubjectHelper */].nextTwo(this.disciplinas);
        // return [new Subject("Linguagens formais e compiladores", "INE1337", 1, 2, true, ["3.0820-2 / CTC-CTC102"], null), 
        // new Subject("Linguagens formais e compiladores", "INE1337", 1, 2, true, ["3.0820-2 / CTC-CTC102"], null)];
    };
    return MainPage;
}());
MainPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-main',template:/*ion-inline-start:"/home/pedro/github/app/src/pages/main/main.html"*/'<ion-content padding class="main-content">\n\n  <p class="next-classes">{{ \'NEXT_CLASSES\' | translate }}</p>\n  <subject-list [subjects]="getDisciplinas()"></subject-list>\n\n  <div class="separator"></div>\n\n  <ion-list class="main-list">\n    <ion-item class="main-item" (click)=\'onHorariosClicked()\'>\n      <img src="assets/img/calendar.svg" class="main-icon" />\n      <span class="main-div"></span>\n      <span class="main-label">{{ \'DAILY_SCHEDULES\' | translate }}</span>\n    </ion-item>\n    <ion-item class="main-item" (click)=\'onGerarHorarioClicked()\'>\n      <img src="assets/img/calendar_generate.svg" class="main-icon" />\n      <span class="main-div"></span>\n      <span class="main-label">{{ \'SCHEDULE_GENERATION\' | translate }}</span>\n    </ion-item>\n    <ion-item class="main-item" (click)=\'onEstatisticaClicked()\'>\n      <img src="assets/img/bars-chart.svg" class="main-icon" />\n      <span class="main-div"></span>\n      <span class="main-label">{{ \'STATISTICS\' | translate }}</span>\n    </ion-item>\n  </ion-list>\n\n  <button ion-button (click)=\'onSairClicked()\' class="button-sair">{{ \'SIGN_OUT\' | translate }}</button>\n\n</ion-content>'/*ion-inline-end:"/home/pedro/github/app/src/pages/main/main.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_5__providers_horarios_schedule_provider__["a" /* ScheduleProvider */]])
], MainPage);

//# sourceMappingURL=main.js.map

/***/ })

});
//# sourceMappingURL=1.js.map