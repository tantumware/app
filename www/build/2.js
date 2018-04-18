webpackJsonp([2],{

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefineConstraintsPageModule", function() { return DefineConstraintsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__define_constraints__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DefineConstraintsPageModule = (function () {
    function DefineConstraintsPageModule() {
    }
    return DefineConstraintsPageModule;
}());
DefineConstraintsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__define_constraints__["a" /* DefineConstraintsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__define_constraints__["a" /* DefineConstraintsPage */]),
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["b" /* TranslateModule */].forChild(),
            __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
        ],
    })
], DefineConstraintsPageModule);

//# sourceMappingURL=define-constraints.module.js.map

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

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefineConstraintsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_constraints__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_storage_keys__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_capsula_capsula__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_formatter__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_subjects_subjects__ = __webpack_require__(211);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var DefineConstraintsPage = (function () {
    function DefineConstraintsPage(navCtrl, navParams, alertCtrl, translate, subjectsProvider, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.translate = translate;
        this.subjectsProvider = subjectsProvider;
        this.storage = storage;
        this.passo = '1';
        this.botao = this.passo == "3" ? "Gerar grade de horários" : "Próximo Passo";
        this.periodosSelected = [];
        this.subjectsWanted = [];
        this.subjectsExcluded = [];
        this.credits = {
            lower: 20,
            upper: 30
        };
        this.equivalent = true;
    }
    DefineConstraintsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get(__WEBPACK_IMPORTED_MODULE_1__utils_storage_keys__["a" /* StorageKeys */].CONSTRAINT).then(function (val) {
            if (val) {
                _this.navCtrl.push('ResultadoPage');
            }
        });
        this.storage.get(__WEBPACK_IMPORTED_MODULE_1__utils_storage_keys__["a" /* StorageKeys */].ALL_SUBJECTS).then(function (val) {
            if (val) {
                _this.subjects = val;
            }
        });
        this.subjectsProvider.allSubjects()
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
            if (res.success) {
                _this.subjects = res.result.disciplinas;
                _this.storage.set(__WEBPACK_IMPORTED_MODULE_1__utils_storage_keys__["a" /* StorageKeys */].ALL_SUBJECTS, _this.subjects);
            }
        }, function (err) {
            console.error('ERROR', err);
        });
    };
    DefineConstraintsPage.prototype.ionViewWillEnter = function () {
        this.passo == '1';
    };
    DefineConstraintsPage.prototype.onPeriodoSelected = function (event) {
        this.periodosSelected = event;
    };
    DefineConstraintsPage.prototype.searchMateria = function () {
        this.doCheckbox(this.busca);
    };
    DefineConstraintsPage.prototype.getClass = function (passo) {
        if (this.passo == passo) {
            return "passo";
        }
        else {
            return "passo passo-hidden";
        }
    };
    DefineConstraintsPage.prototype.onPassoChanged = function (event) {
        this.botao = this.passo == "3" ? this.translate.instant('GENERATE_TIME_GRID') : this.translate.instant('NEXT_STEP');
    };
    DefineConstraintsPage.prototype.btnProximoPassoClicked = function () {
        if (this.passo == '3') {
            var constraints = this.createConstraints();
            this.storage.set(__WEBPACK_IMPORTED_MODULE_1__utils_storage_keys__["a" /* StorageKeys */].CONSTRAINT, constraints);
            this.navCtrl.push('ResultadoPage');
        }
        else {
            this.passo = (Number(this.passo) + 1).toString();
        }
    };
    DefineConstraintsPage.prototype.createConstraints = function () {
        var periods = [];
        if (this.periodosSelected.indexOf(this.translate.instant('MORNING')) > -1) {
            periods.push(0);
        }
        if (this.periodosSelected.indexOf(this.translate.instant('AFTERNOON')) > -1) {
            periods.push(1);
        }
        if (this.periodosSelected.indexOf(this.translate.instant('NIGHT')) > -1) {
            periods.push(2);
        }
        return new __WEBPACK_IMPORTED_MODULE_0__models_constraints__["a" /* Constraints */](periods, this.credits.lower, this.credits.upper, this.equivalent, this.subjectsWanted, this.subjectsExcluded);
    };
    DefineConstraintsPage.prototype.getPeriods = function () {
        var periods = [];
        periods.push(this.translate.instant('MORNING'));
        periods.push(this.translate.instant('AFTERNOON'));
        periods.push(this.translate.instant('NIGHT'));
        return periods;
    };
    DefineConstraintsPage.prototype.getSubjectsWanted = function () {
        return this.subjectsWanted;
    };
    DefineConstraintsPage.prototype.getSubjectsExcluded = function () {
        return this.subjectsExcluded;
    };
    DefineConstraintsPage.prototype.doCheckbox = function (search) {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle(this.translate.instant('SELECT_SUBJECT'));
        var subjects = this.getPossibleSubjects();
        subjects.forEach(function (s) {
            alert.addInput({
                type: 'checkbox',
                label: s.codigo + " - " + s.nome,
                value: s.codigo
            });
        });
        alert.addButton(this.translate.instant('BACK_BUTTON_TEXT'));
        alert.addButton({
            text: 'Ok',
            handler: function (data) {
                _this.busca = "";
                if (data) {
                    data.forEach(function (element) {
                        console.log(element);
                        if (_this.passo == '2') {
                            _this.subjectsWanted.push(_this.getSubjectByCode(element));
                        }
                        else if (_this.passo == '3') {
                            _this.subjectsExcluded.push(_this.getSubjectByCode(element));
                        }
                    });
                }
            }
        });
        alert.present();
    };
    DefineConstraintsPage.prototype.getSubjectByCode = function (code) {
        for (var i in this.subjects) {
            var subject = this.subjects[i];
            if (subject.codigo == code) {
                return subject;
            }
        }
        return undefined;
    };
    DefineConstraintsPage.prototype.getPossibleSubjects = function () {
        var subjects = [];
        for (var i in this.subjects) {
            var subject = this.subjects[i];
            var nome = subject.nome;
            var codigo = subject.codigo;
            if (this.contains(nome, this.busca) || this.contains(codigo, this.busca)) {
                subjects.push(subject);
            }
        }
        return subjects;
    };
    DefineConstraintsPage.prototype.contains = function (a, b) {
        return __WEBPACK_IMPORTED_MODULE_7__utils_formatter__["a" /* FormatterUtils */].replaceSpecialChars(a).includes(__WEBPACK_IMPORTED_MODULE_7__utils_formatter__["a" /* FormatterUtils */].replaceSpecialChars(b));
    };
    return DefineConstraintsPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_6__components_capsula_capsula__["a" /* CapsulaComponent */]),
    __metadata("design:type", Object)
], DefineConstraintsPage.prototype, "capsulaComponent", void 0);
DefineConstraintsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
        selector: 'page-define-constraints',template:/*ion-inline-start:"/home/pedro/github/app/src/pages/define-constraints/define-constraints.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ \'DEFINE_CRITERIA\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-segment [(ngModel)]="passo" (ionChange)="onPassoChanged($event)" color="main-color">\n    <ion-segment-button value="1">\n      {{ \'STEP_1\' | translate }}\n    </ion-segment-button>\n    <ion-segment-button value="2">\n      {{ \'STEP_2\' | translate }}\n    </ion-segment-button>\n    <ion-segment-button value="3">\n      {{ \'STEP_3\' | translate }}\n    </ion-segment-button>\n  </ion-segment>\n\n  <div [ngClass]="getClass(\'1\')">\n    <span>{{ \'STUDY_SHIFT\' | translate }}</span>\n    <capsula [periodos]="getPeriods()" (periodoSelected)="onPeriodoSelected($event)"></capsula> \n\n    <p>{{ \'CREDIT_INTERVAL\' | translate }}</p>\n    <ion-item>\n      <ion-range dualKnobs="true" pin="true" [(ngModel)]="credits" class="intervalo" color="main-color">\n        <ion-label range-left>-0</ion-label>\n        <ion-label range-right>100</ion-label>\n      </ion-range>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>{{ \'CONSIDER_EQUIVALENT_COURSES\' | translate }}</ion-label>\n      <ion-toggle color="main-color" checked="false" [(ngModel)]="equivalent"></ion-toggle>\n    </ion-item>\n  </div>\n\n  <div [ngClass]="getClass(\'2\')">\n    <p>{{ \'SUBJECTS_I_WANT_TO_STUDY\' | translate }}</p>\n    <ion-searchbar (search)="searchMateria()" placeholder="Nome ou código" [(ngModel)]="busca"></ion-searchbar>\n    <subject-action-list [subjects]="getSubjectsWanted()"></subject-action-list>\n  </div>\n\n  <div [ngClass]="getClass(\'3\')">\n    <p>{{ \'SUBJECTS_I_DONT_WANT_TO_STUDY\' | translate }}</p>\n    <ion-searchbar (search)="searchMateria()" placeholder="Nome ou código" [(ngModel)]="busca"></ion-searchbar>\n    <subject-action-list [subjects]="getSubjectsExcluded()"></subject-action-list>\n  </div>\n\n  <button ion-button class="next-step-button" (click)="btnProximoPassoClicked()">{{ botao }}</button>\n\n</ion-content>'/*ion-inline-end:"/home/pedro/github/app/src/pages/define-constraints/define-constraints.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_8__providers_subjects_subjects__["a" /* SubjectsProvider */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
], DefineConstraintsPage);

//# sourceMappingURL=define-constraints.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Constraints; });
var Constraints = (function () {
    function Constraints(periods, creditMin, creditMax, equivalent, subjectsWanted, subjectsNotWanted) {
        this.periods = periods;
        this.creditMin = creditMin;
        this.creditMax = creditMax;
        this.equivalent = equivalent;
        this.subjectsWanted = subjectsWanted;
        this.subjectsNotWanted = subjectsNotWanted;
    }
    return Constraints;
}());

//# sourceMappingURL=constraints.js.map

/***/ })

});
//# sourceMappingURL=2.js.map