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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-nav></app-nav>\n<app-container-photo></app-container-photo>"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'pinterestAngular';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/nav/nav.component */ "./src/app/components/nav/nav.component.ts");
/* harmony import */ var _components_btn_float_btn_float_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/btn-float/btn-float.component */ "./src/app/components/btn-float/btn-float.component.ts");
/* harmony import */ var _components_container_photo_container_photo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/container-photo/container-photo.component */ "./src/app/components/container-photo/container-photo.component.ts");
/* harmony import */ var _components_modal_photo_modal_photo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/modal-photo/modal-photo.component */ "./src/app/components/modal-photo/modal-photo.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_4__["NavComponent"],
                _components_btn_float_btn_float_component__WEBPACK_IMPORTED_MODULE_5__["BtnFloatComponent"],
                _components_container_photo_container_photo_component__WEBPACK_IMPORTED_MODULE_6__["ContainerPhotoComponent"],
                _components_modal_photo_modal_photo_component__WEBPACK_IMPORTED_MODULE_7__["ModalPhotoComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/btn-float/btn-float.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/btn-float/btn-float.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btnsFloat {\r\n    z-index: 99999;\r\n    top: 75%;\r\n    position: fixed;\r\n    right: 5%;\r\n}\r\n\r\n.btnPin {\r\n    padding: 10px;\r\n    background-color: #E9ECEF;\r\n    border-radius: 50px;\r\n    box-shadow: 2px 3px 6px 0px rgba(0, 0, 0, 0.50);\r\n    cursor: pointer;\r\n}\r\n\r\n.titleAddPinModal,\r\n.titleInputModal {\r\n    color: #666666;\r\n}\r\n\r\n.boxUpPin {\r\n    border: #999 2px dashed;\r\n    width: 200px;\r\n    height: 300px;\r\n    display: block;\r\n    margin: auto;\r\n    border-radius: 10px;\r\n}\r\n\r\n.boxUpPin p {\r\n    padding: 40px;\r\n    color: #666;\r\n    margin-top: 50px;\r\n}\r\n\r\n.textareaSize {\r\n    resize: none;\r\n    height: 184px !important;\r\n}\r\n\r\n.modal-footer {\r\n    justify-content: start !important;\r\n}\r\n\r\n.contentBtnPin {\r\n    /* background-color: #EFEFEF; */\r\n    border-radius: 50px;\r\n}\r\n\r\n.btnPinModal1 {\r\n    background: #ffffff;\r\n    border: 2px solid #EFEFEF;\r\n    font-weight: 500;\r\n    margin-right: -3px;\r\n    font-size: 14px;\r\n    color: #666;\r\n}\r\n\r\n.btnPinModal2 {\r\n    border-top-left-radius: 0;\r\n    border-bottom-left-radius: 0;\r\n    border: 2px solid #EFEFEF;\r\n    background-color: #EFEFEF;\r\n    font-size: 14px;\r\n    color: #9F9F9F;\r\n    font-weight: 500;\r\n}\r\n\r\n.btnPinModal3 {\r\n    float: right;\r\n    background-color: #EFEFEF;\r\n    font-size: 14px;\r\n    color: #9F9F9F;\r\n    font-weight: 500;\r\n}"

/***/ }),

/***/ "./src/app/components/btn-float/btn-float.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/btn-float/btn-float.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"btnsFloat\">\n    <i class=\"fas fa-plus btnPin d-flex mb-2\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\"></i>\n    <i class=\"fas fa-question btnPin mb-5 d-flex\"></i>\n</div>\n<!-- modal btn flotante -->\n<div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-lg modal-dialog-centered w-75\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header d-block text-center\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n                <h5 class=\"modal-title titleAddPinModal\" id=\"exampleModalVerticalLabel\">Crear Pin</h5>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"col-4\">\n                        <div class=\"boxUpPin\">\n                            <p class=\"text-center\"><i class=\"fas fa-camera\"></i><br>Arrastras y suelta o haz click para cargar </p>\n                        </div>\n                    </div>\n                    <div class=\"col-7 px-4\">\n                        <form>\n                            <div class=\"form-group\">\n                                <label class=\"titleInputModal\">Sitio Web</label>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Añade la URL con la que enlazas este pin\">\n                            </div>\n                            <div class=\"form-group\">\n                                <label class=\"titleInputModal\">Descripcion</label>\n                                <textarea class=\"form-control textareaSize\" placeholder=\"Di algo más sobre este pin\"></textarea>\n                            </div>\n                        </form>\n\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <div class=\"contentBtnPin col-12\">\n                    <button type=\"button\" class=\"btn btnPinModal1\">Cargar Pin</button>\n                    <button type=\"button\" class=\"btn btnPinModal2\">Guardar desde este sitio</button>\n                    <button type=\"button\" class=\"btn btn-ligth btnPinModal3\">Listo</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/btn-float/btn-float.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/btn-float/btn-float.component.ts ***!
  \*************************************************************/
/*! exports provided: BtnFloatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BtnFloatComponent", function() { return BtnFloatComponent; });
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

var BtnFloatComponent = /** @class */ (function () {
    function BtnFloatComponent() {
    }
    BtnFloatComponent.prototype.ngOnInit = function () {
    };
    BtnFloatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-btn-float',
            template: __webpack_require__(/*! ./btn-float.component.html */ "./src/app/components/btn-float/btn-float.component.html"),
            styles: [__webpack_require__(/*! ./btn-float.component.css */ "./src/app/components/btn-float/btn-float.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BtnFloatComponent);
    return BtnFloatComponent;
}());



/***/ }),

/***/ "./src/app/components/container-photo/container-photo.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/container-photo/container-photo.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (min-width: 600px) and (max-width: 768px) {\r\n    .card-columns {\r\n        -webkit-column-count: 2;\r\n        column-count: 2;\r\n    }\r\n}\r\n\r\n@media (min-width: 800px) and (max-width: 1000px) {\r\n    .card-columns {\r\n        -webkit-column-count: 3;\r\n        column-count: 3;\r\n    }\r\n}\r\n\r\n@media (min-width: 1000px) {\r\n    .card-columns {\r\n        -webkit-column-count: 5;\r\n        column-count: 5\r\n    }\r\n}\r\n\r\n.linkModal a {\r\n    text-decoration: none;\r\n    outline: none;\r\n    cursor: zoom-in;\r\n}\r\n\r\n.linkModal:hover {\r\n    box-shadow: 4px 6px 11px 0px rgba(0, 0, 0, 0.10);\r\n}\r\n\r\n.photoCard {\r\n    border-radius: 25px;\r\n}\r\n\r\n.titlePhoto {\r\n    font-size: 18px;\r\n    color: #525252;\r\n}\r\n\r\n.titlePhotoModal {\r\n    margin-left: 20px;\r\n    margin-top: 15px;\r\n    color: #525252;\r\n}\r\n\r\n.pintPhoto {\r\n    color: #999999;\r\n    font-size: 14px;\r\n}\r\n\r\n.avatarCard {\r\n    width: 35px;\r\n    height: 35px;\r\n    background-color: #ECCFC7;\r\n    text-align: center;\r\n    padding-top: 2px;\r\n    border-radius: 50px;\r\n    font-size: 20px;\r\n    color: #ffffff;\r\n    float: left;\r\n}\r\n\r\n.authorPhoto {\r\n    padding-top: 4px;\r\n    margin-left: 40px;\r\n    color: #525252;\r\n}\r\n\r\n.showColor {\r\n    background-color: #EFEFEF;\r\n}\r\n\r\n.pinsModal {\r\n    width: 200px;\r\n    margin-top: 20px;\r\n    margin-left: 10px;\r\n    color: #999999\r\n}\r\n\r\n.btnModal {\r\n    margin-right: 18px;\r\n    margin-top: -27px;\r\n    float: right;\r\n}\r\n\r\n.titlePhotoModal {\r\n    margin-left: 20px;\r\n    margin-top: 15px;\r\n    color: #525252;\r\n}\r\n\r\n.photoCard {\r\n    border-radius: 25px;\r\n}\r\n\r\n.infoFooterModal {\r\n    margin-top: 16px;\r\n    margin-left: 15px;\r\n}\r\n\r\n.avatarCard {\r\n    width: 35px;\r\n    height: 35px;\r\n    background-color: #ECCFC7;\r\n    text-align: center;\r\n    padding-top: 2px;\r\n    border-radius: 50px;\r\n    font-size: 20px;\r\n    color: #ffffff;\r\n    float: left;\r\n}\r\n\r\n.authorPhoto {\r\n    padding-top: 4px;\r\n    margin-left: 40px;\r\n    color: #525252;\r\n}\r\n\r\n.btnRead {\r\n    float: right;\r\n    margin-top: -45px;\r\n    margin-right: 19px;\r\n    border-radius: 5px;\r\n    border: none;\r\n    font-size: 15px;\r\n    width: 75px;\r\n    padding: 5px;\r\n    color: #666666;\r\n}\r\n\r\n.descripcionModalFooter {\r\n    padding: 15px;\r\n}\r\n\r\n.descriptionPhoto {\r\n    font-size: 14px;\r\n    color: #525252;\r\n}"

/***/ }),

/***/ "./src/app/components/container-photo/container-photo.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/container-photo/container-photo.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"card-columns\" id=\"contentCard\">\n            <div class=\"card border-0 mt-5 linkModal p-2\" *ngFor=\"let photoCard of photoJSON\">\n                <a href=\"#id{{photoCard.id}}\" data-toggle=\"modal\" data-target=\"#id{{photoCard.id}}\" class=\"\">\n                    <img class=\"card-img-top photoCard\" src=\"{{photoCard.urlPhoto}}\" alt=\"Card image cap\">\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title titlePhoto\">{{photoCard.namePhoto}}</h5>\n                        <p class=\"pintPhoto float-left pr-3 ml-3\"><i class=\"fas fa-thumbtack\"></i> 32,2</p>\n                        <p class=\"pintPhoto\"><i class=\"fas fa-check\"></i> 11</p>\n                        <p class=\"card-text descriptionPhoto\">{{photoCard.description}}</p>\n                        <div class=\"avatarCard\">M</div>\n                        <p class=\"authorPhoto\">{{photoCard.nameAuthor}}</p>\n                    </div>\n                </a>\n            </div>\n\n            <!-- MODAL-->\n            <!-- <app-modal-photo></app-modal-photo> -->\n            <div *ngFor=\"let photoCard of photoJSON\" class=\"modal fade showColor\" id=\"id{{photoCard.id}}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n                <button type=\"button\" class=\"close mr-2 mt-2\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n                <div class=\"modal-dialog modal-dialog-centered w-50\" role=\"document\">\n                    <div class=\"modal-content  border-0 rounded\">\n                        <div class=\"header\">\n                            <div class=\"pinsModal\">\n                                <span><i class=\"fas fa-upload px-2\"></i></span>\n                                <span><i class=\"fas fa-check px-2\"></i></span>\n                                <span><i class=\"fas fa-ellipsis-h px-2\"></i></span>\n                            </div>\n                            <button class=\"btn btn-danger btnModal\"><i class=\"fas fa-thumbtack pr-1\"></i> Guardar</button>\n                        </div>\n                        <h5 class=\"titlePhotoModal\">{{photoCard.namePhoto}}</h5>\n                        <div class=\"modal-body\">\n                            <img class=\"card-img-top photoCard\" src=\"{{photoCard.urlPhoto}}\" alt=\"Card image cap\">\n                        </div>\n                        <div class=\"footer\">\n                            <div class=\"pinsModal\">\n                                <span><i class=\"fas fa-upload px-2\"></i></span>\n                                <span><i class=\"fas fa-check px-2\"></i></span>\n                                <span><i class=\"fas fa-ellipsis-h px-2\"></i></span>\n                            </div>\n                            <button class=\"btn btn-danger btnModal\"><i class=\"fas fa-thumbtack pr-1\"></i> Guardar</button>\n                        </div>\n                        <div class=\"infoFooterModal\">\n                            <div class=\"avatarCard\">M</div>\n                            <p class=\"authorPhoto\">{{photoCard.nameAuthor}}</p>\n                            <button class=\"btnRead\">Leerlo</button>\n                        </div>\n                        <div class=\"descripcionModalFooter\">\n                            <p class=\"descriptionPhoto\">{{photoCard.description}</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <app-btn-float></app-btn-float>\n</div>"

/***/ }),

/***/ "./src/app/components/container-photo/container-photo.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/container-photo/container-photo.component.ts ***!
  \*************************************************************************/
/*! exports provided: ContainerPhotoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerPhotoComponent", function() { return ContainerPhotoComponent; });
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

var ContainerPhotoComponent = /** @class */ (function () {
    function ContainerPhotoComponent() {
    }
    ContainerPhotoComponent.prototype.ngOnInit = function () {
        var _this = this;
        fetch('../../../assets/photos.json')
            .then(function (res) { return res.json(); })
            .then(function (photoJSON) {
            console.log(photoJSON);
            _this.photoJSON = photoJSON;
        });
    };
    ContainerPhotoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-container-photo',
            template: __webpack_require__(/*! ./container-photo.component.html */ "./src/app/components/container-photo/container-photo.component.html"),
            styles: [__webpack_require__(/*! ./container-photo.component.css */ "./src/app/components/container-photo/container-photo.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContainerPhotoComponent);
    return ContainerPhotoComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".containerMenu {\r\n    margin-bottom: -8px\r\n}\r\n\r\n.iconNav i {\r\n    font-size: 40px;\r\n}\r\n\r\n.iconNav {\r\n    margin-left: 16px;\r\n    margin-top: 2px;\r\n}\r\n\r\n.searchNav {\r\n    height: 45px;\r\n    background-color: #E9ECEF;\r\n}\r\n\r\n.iconSearch {\r\n    color: #999999;\r\n    font-size: 20px;\r\n}\r\n\r\n.linkNav {\r\n    margin-top: -10px;\r\n}\r\n\r\n.btnNav {\r\n    color: #8E8E8E;\r\n    font-size: 17px;\r\n    font-weight: 500;\r\n    margin-top: -43px;\r\n    margin-left: 25px;\r\n    background: transparent;\r\n    border-radius: 30px;\r\n}\r\n\r\n.btnNav:hover {\r\n    background: #E9ECEF;\r\n    border-radius: 30px;\r\n}\r\n\r\n.activeLink {\r\n    color: #3E3F41 !important;\r\n}"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"pt-3 fixed-top bg-white\">\n    <a href=\"#\" class=\"float-left iconNav\"><i class=\"fab fa-pinterest text-danger\"></i></a>\n    <div class=\"col-12 containerMenu\">\n        <form class=\"form-inline col-6\">\n            <div class=\"input-group mb-2 mr-sm-2 ml-3 col-12\">\n                <div class=\"input-group-prepend \">\n                    <div class=\"input-group-text border-0 bg-ligth\"><i class=\"fas fa-search iconSearch\"></i></div>\n                </div>\n                <input type=\"text\" class=\"form-control searchNav border-0\" placeholder=\"Buscar\">\n            </div>\n        </form>\n        <div class=\"col-5 float-right d-flex justify-content-around linkNav\">\n            <button class=\"activeLink btn btnNav\">Inicio</button>\n            <button class=\"btn btnNav\">Siguiendo</button>\n            <button class=\"btn btnNav\">Explorar</button>\n            <button class=\"btn btnNav\"><i class=\"fas fa-user-circle\"></i> Valeria</button>\n            <button class=\"btn btnNav\"><i class=\"fas fa-comment\"></i></button>\n            <button class=\"btn btnNav\"><i class=\"fas fa-bell\"></i></button>\n            <button class=\"btn btnNav\"><i class=\"fas fa-ellipsis-h\"></i></button>\n        </div>\n\n    </div>\n    <hr>\n</nav>"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
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

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/modal-photo/modal-photo.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/modal-photo/modal-photo.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/modal-photo/modal-photo.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/modal-photo/modal-photo.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let photoCard of photoJSON\" class=\"modal fade showColor\" id=\"id{{photoCard.id}}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n    <button type=\"button\" class=\"close mr-2 mt-2\" data-dismiss=\"modal\" aria-label=\"Close\">\n<span aria-hidden=\"true\">&times;</span>\n</button>\n    <div class=\"modal-dialog modal-dialog-centered w-50\" role=\"document\">\n        <div class=\"modal-content  border-0 rounded\">\n            <div class=\"header\">\n                <div class=\"pinsModal\">\n                    <span><i class=\"fas fa-upload px-2\"></i></span>\n                    <span><i class=\"fas fa-check px-2\"></i></span>\n                    <span><i class=\"fas fa-ellipsis-h px-2\"></i></span>\n                </div>\n                <button class=\"btn btn-danger btnModal\"><i class=\"fas fa-thumbtack pr-1\"></i> Guardar</button>\n            </div>\n            <h5 class=\"titlePhotoModal\">{{photoCard.namePhoto}}</h5>\n            <div class=\"modal-body\">\n                <img class=\"card-img-top photoCard\" src=\"{{photoCard.urlPhoto}}\" alt=\"Card image cap\">\n            </div>\n            <div class=\"footer\">\n                <div class=\"pinsModal\">\n                    <span><i class=\"fas fa-upload px-2\"></i></span>\n                    <span><i class=\"fas fa-check px-2\"></i></span>\n                    <span><i class=\"fas fa-ellipsis-h px-2\"></i></span>\n                </div>\n                <button class=\"btn btn-danger btnModal\"><i class=\"fas fa-thumbtack pr-1\"></i> Guardar</button>\n            </div>\n            <div class=\"infoFooterModal\">\n                <div class=\"avatarCard\">M</div>\n                <p class=\"authorPhoto\">{{photoCard.nameAuthor}}</p>\n                <button class=\"btnRead\">Leerlo</button>\n            </div>\n            <div class=\"descripcionModalFooter\">\n                <p class=\"a\">{{photoCard.description}}</p>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/modal-photo/modal-photo.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/modal-photo/modal-photo.component.ts ***!
  \*****************************************************************/
/*! exports provided: ModalPhotoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPhotoComponent", function() { return ModalPhotoComponent; });
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

var ModalPhotoComponent = /** @class */ (function () {
    function ModalPhotoComponent() {
    }
    ModalPhotoComponent.prototype.ngOnInit = function () {
        var _this = this;
        fetch('../../../assets/photos.json')
            .then(function (res) { return res.json(); })
            .then(function (photoJSON) {
            console.log(photoJSON);
            _this.photoJSON = photoJSON;
        });
    };
    ModalPhotoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal-photo',
            template: __webpack_require__(/*! ./modal-photo.component.html */ "./src/app/components/modal-photo/modal-photo.component.html"),
            styles: [__webpack_require__(/*! ./modal-photo.component.css */ "./src/app/components/modal-photo/modal-photo.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ModalPhotoComponent);
    return ModalPhotoComponent;
}());



/***/ }),

/***/ "./src/app/components/nav/nav.component.css":
/*!**************************************************!*\
  !*** ./src/app/components/nav/nav.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contBtnNav {\r\n    margin-top: 110px;\r\n}\r\n\r\n.iconDirection {\r\n    margin-top: 10px;\r\n    color: #999;\r\n    font-size: 18px;\r\n}"

/***/ }),

/***/ "./src/app/components/nav/nav.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/nav/nav.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid contBtnNav\">\n    <div class=\"row\">\n        <div class=\"col-12 d-flex justify-content-around\">\n            <i class=\"fas fa-angle-left iconDirection\"></i>\n            <button class=\"btn btn-info\">Dress</button>\n            <button class=\"btn btn-warning\">San Miguel De Allende</button>\n            <button class=\"btn btn-success\">Friki</button>\n            <button class=\"btn btn-danger\">Invitaciones</button>\n            <button class=\"btn btn-dark\">Fotography</button>\n            <button class=\"btn btn-warning\">Photocall</button>\n            <button class=\"btn btn-ligth\">Damas</button>\n            <button class=\"btn btn-primary\">Ilumination</button>\n            <button class=\"btn btn-secondary\">Ramo</button>\n            <button class=\"btn btn-info\">Souvenires</button>\n            <button class=\"btn btn-warning\">Invitacion</button>\n            <button class=\"btn btn-success\">Ramos</button>\n            <i class=\"fas fa-angle-right iconDirection\"></i>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/nav/nav.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/nav/nav.component.ts ***!
  \*************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
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

var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/components/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/components/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
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

module.exports = __webpack_require__(/*! C:\Users\Valeria\Documents\LABORATORIA\ANGULAR\pinterestAngular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map