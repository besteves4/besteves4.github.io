(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about-me/about-me.component.ts":
/*!************************************************!*\
  !*** ./src/app/about-me/about-me.component.ts ***!
  \************************************************/
/*! exports provided: AboutMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutMeComponent", function() { return AboutMeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _current_job_current_job_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../current-job/current-job.component */ "./src/app/current-job/current-job.component.ts");
/* harmony import */ var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contacts/contacts.component */ "./src/app/contacts/contacts.component.ts");
/* harmony import */ var _cv_cv_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cv/cv.component */ "./src/app/cv/cv.component.ts");





class AboutMeComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
AboutMeComponent.ɵfac = function AboutMeComponent_Factory(t) { return new (t || AboutMeComponent)(); };
AboutMeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutMeComponent, selectors: [["app-about-me"]], decls: 18, vars: 0, consts: [[1, "row", "mt-3"], [1, "col-3"], ["src", "/assets/foto_bia.png", "alt", "", "width", "225", 1, "mr-2"], [1, "col-9"], [1, "row", "border-between", "mt-3"], [1, "col-5", "offset-1"], [1, "col-5"], [1, "row", "mb-5"], [1, "col-12"]], template: function AboutMeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Hi, I'm Beatriz and I have a Masters Degree in Biomedical Engineering. I consider myself to be a highly motivated person who is always looking forward to learn new things and work in different areas of knowledge. This will led me to work as a data scientist for about 2 years, mostly on the banking sector. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Currently I'm an Early Stage Researcher working on PROTECT, a H2020 Marie Sk\u0142odowska-Curie Action European Training Network with the goal of developing new ways of empowering users to understand the risks they take when they go online and offering new tools that enable companies to incorporate data protection into their services. The project is simultaneously funding my PhD in Artificial Intelligence at the Universidad Polit\u00E9cnica de Madrid. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " In my free time, I like to play football, travel and watch my cats. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-current-job");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-contacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-cv");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_current_job_current_job_component__WEBPACK_IMPORTED_MODULE_1__["CurrentJobComponent"], _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_2__["ContactsComponent"], _cv_cv_component__WEBPACK_IMPORTED_MODULE_3__["CvComponent"]], styles: [".border-between[_ngcontent-%COMP%]    > [class*='col-'][_ngcontent-%COMP%]:before {\r\n    background: #e3e3e3;\r\n    bottom: 0;\r\n    content: \" \";\r\n    left: 0;\r\n    position: absolute;\r\n    width: 1px;\r\n    top: 0;\r\n }\r\n \r\n .border-between[_ngcontent-%COMP%]    > [class*='col-'][_ngcontent-%COMP%]:first-child:before {\r\n    display: none;\r\n }\r\n \r\n p[_ngcontent-%COMP%] {\r\n    text-align: justify;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQtbWUvYWJvdXQtbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsWUFBWTtJQUNaLE9BQU87SUFDUCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLE1BQU07Q0FDVDs7Q0FFQTtJQUNHLGFBQWE7Q0FDaEI7O0NBRUQ7SUFDSSxtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9hYm91dC1tZS9hYm91dC1tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvcmRlci1iZXR3ZWVuID4gW2NsYXNzKj0nY29sLSddOmJlZm9yZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTNlM2UzO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgY29udGVudDogXCIgXCI7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDFweDtcclxuICAgIHRvcDogMDtcclxuIH1cclxuIFxyXG4gLmJvcmRlci1iZXR3ZWVuID4gW2NsYXNzKj0nY29sLSddOmZpcnN0LWNoaWxkOmJlZm9yZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gfVxyXG5cclxucCB7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutMeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about-me',
                templateUrl: './about-me.component.html',
                styleUrls: ['./about-me.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-me/about-me.component */ "./src/app/about-me/about-me.component.ts");
/* harmony import */ var _blog_list_blog_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blog-list/blog-list.component */ "./src/app/blog-list/blog-list.component.ts");
/* harmony import */ var _publications_publications_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./publications/publications.component */ "./src/app/publications/publications.component.ts");







const routes = [{
        path: '',
        pathMatch: 'full',
        redirectTo: 'about-me'
    },
    {
        path: 'about-me',
        component: _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_2__["AboutMeComponent"]
    },
    {
        path: 'blog',
        component: _blog_list_blog_list_component__WEBPACK_IMPORTED_MODULE_3__["BlogListComponent"]
    },
    {
        path: 'publications',
        component: _publications_publications_component__WEBPACK_IMPORTED_MODULE_4__["PublicationsComponent"]
    },
    {
        path: '**',
        redirectTo: ''
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
                ]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about-me/about-me.component */ "./src/app/about-me/about-me.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _blog_list_blog_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blog-list/blog-list.component */ "./src/app/blog-list/blog-list.component.ts");
/* harmony import */ var _publications_list_publications_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./publications-list/publications-list.component */ "./src/app/publications-list/publications-list.component.ts");
/* harmony import */ var _current_job_current_job_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./current-job/current-job.component */ "./src/app/current-job/current-job.component.ts");
/* harmony import */ var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./contacts/contacts.component */ "./src/app/contacts/contacts.component.ts");
/* harmony import */ var _cv_cv_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./cv/cv.component */ "./src/app/cv/cv.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _cv_modal_cv_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./cv-modal/cv-modal.component */ "./src/app/cv-modal/cv-modal.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/esm5/ngx-bootstrap.js");
/* harmony import */ var _pipes_divider_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pipes/divider.pipe */ "./src/app/pipes/divider.pipe.ts");
/* harmony import */ var _pipes_order_by_position_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pipes/order-by-position.pipe */ "./src/app/pipes/order-by-position.pipe.ts");
/* harmony import */ var _publications_publications_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./publications/publications.component */ "./src/app/publications/publications.component.ts");
/* harmony import */ var _publication_preview_publication_preview_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./publication-preview/publication-preview.component */ "./src/app/publication-preview/publication-preview.component.ts");
























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FontAwesomeModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_17__["ModalModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_3__["AboutMeComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
        _blog_list_blog_list_component__WEBPACK_IMPORTED_MODULE_8__["BlogListComponent"],
        _publications_list_publications_list_component__WEBPACK_IMPORTED_MODULE_9__["PublicationsListComponent"],
        _current_job_current_job_component__WEBPACK_IMPORTED_MODULE_10__["CurrentJobComponent"],
        _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_11__["ContactsComponent"],
        _cv_cv_component__WEBPACK_IMPORTED_MODULE_12__["CvComponent"],
        _cv_modal_cv_modal_component__WEBPACK_IMPORTED_MODULE_15__["CvModalComponent"],
        _pipes_divider_pipe__WEBPACK_IMPORTED_MODULE_18__["DividerPipe"],
        _pipes_order_by_position_pipe__WEBPACK_IMPORTED_MODULE_19__["OrderByPositionPipe"],
        _publications_publications_component__WEBPACK_IMPORTED_MODULE_20__["PublicationsComponent"],
        _publication_preview_publication_preview_component__WEBPACK_IMPORTED_MODULE_21__["PublicationPreviewComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FontAwesomeModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_17__["ModalModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_3__["AboutMeComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                    _blog_list_blog_list_component__WEBPACK_IMPORTED_MODULE_8__["BlogListComponent"],
                    _publications_list_publications_list_component__WEBPACK_IMPORTED_MODULE_9__["PublicationsListComponent"],
                    _current_job_current_job_component__WEBPACK_IMPORTED_MODULE_10__["CurrentJobComponent"],
                    _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_11__["ContactsComponent"],
                    _cv_cv_component__WEBPACK_IMPORTED_MODULE_12__["CvComponent"],
                    _cv_modal_cv_modal_component__WEBPACK_IMPORTED_MODULE_15__["CvModalComponent"],
                    _pipes_divider_pipe__WEBPACK_IMPORTED_MODULE_18__["DividerPipe"],
                    _pipes_order_by_position_pipe__WEBPACK_IMPORTED_MODULE_19__["OrderByPositionPipe"],
                    _publications_publications_component__WEBPACK_IMPORTED_MODULE_20__["PublicationsComponent"],
                    _publication_preview_publication_preview_component__WEBPACK_IMPORTED_MODULE_21__["PublicationPreviewComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FontAwesomeModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"],
                    ngx_bootstrap__WEBPACK_IMPORTED_MODULE_17__["ModalModule"].forRoot()
                ],
                entryComponents: [
                    _cv_modal_cv_modal_component__WEBPACK_IMPORTED_MODULE_15__["CvModalComponent"]
                ],
                providers: [],
                bootstrap: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/blog-list/blog-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/blog-list/blog-list.component.ts ***!
  \**************************************************/
/*! exports provided: BlogListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogListComponent", function() { return BlogListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class BlogListComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
BlogListComponent.ɵfac = function BlogListComponent_Factory(t) { return new (t || BlogListComponent)(); };
BlogListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlogListComponent, selectors: [["app-blog-list"]], decls: 2, vars: 0, template: function BlogListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Blog posts will be available soon...\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2ctbGlzdC9ibG9nLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-blog-list',
                templateUrl: './blog-list.component.html',
                styleUrls: ['./blog-list.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/contacts/contacts.component.ts":
/*!************************************************!*\
  !*** ./src/app/contacts/contacts.component.ts ***!
  \************************************************/
/*! exports provided: ContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return ContactsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");






function ContactsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactsComponent_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const item_r19 = ctx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.handleClick(item_r19.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "fa-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", item_r19.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r19.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", item_r19.href, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", item_r19.id);
} }
class ContactsComponent {
    constructor() {
        this.faEnvelope = _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faEnvelope"];
        this.faSkype = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faSkype"];
        this.faLinkedin = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faLinkedin"];
        this.contacts = {
            title: 'Contacts',
            list: [
                {
                    id: 'email1',
                    icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faEnvelope"],
                    title: 'beatriz.gc.esteves@gmail.com',
                    href: 'mailto:beatriz.gc.esteves@gmail.com'
                },
                {
                    id: 'email2',
                    icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faEnvelope"],
                    title: 'beatriz.gesteves@upm.es',
                    href: 'mailto:beatriz.gesteves@upm.es'
                },
                {
                    id: 'skype',
                    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faSkype"],
                    title: 'b.esteves4',
                    href: 'skype:b.esteves4?add'
                },
                {
                    id: 'linkedin',
                    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faLinkedin"],
                    title: '/in/beatriz-esteves',
                    href: 'https://www.linkedin.com/in/beatriz-esteves-032249156/'
                }
            ]
        };
    }
    ngOnInit() { }
    handleClick(id) {
        document.getElementById(id).click();
    }
}
ContactsComponent.ɵfac = function ContactsComponent_Factory(t) { return new (t || ContactsComponent)(); };
ContactsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactsComponent, selectors: [["app-contacts"]], decls: 4, vars: 2, consts: [[1, "list-group", "list-group-flush"], ["class", "list-group-item item clickable", 3, "click", 4, "ngFor", "ngForOf"], [1, "list-group-item", "item", "clickable", 3, "click"], [1, "icon-box", "mr-3"], [3, "icon"], [1, "button-text"], ["target", "_blank", 3, "href", "id"]], template: function ContactsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ContactsComponent_div_3_Template, 6, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.contacts.title, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.contacts.list);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FaIconComponent"]], styles: ["fa-icon[_ngcontent-%COMP%] {\r\n    font-size: 50px;\r\n    color: #1abc9c;\r\n}\r\n\r\n.item[_ngcontent-%COMP%] {\r\n    height: 100px;\r\n}\r\n\r\n.icon-box[_ngcontent-%COMP%] {\r\n    width: 60px;\r\n    text-align: center;\r\n    display: inline-block;\r\n}\r\n\r\n.button-text[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 39px;\r\n    font-weight: 500;\r\n    font-size: 16px;\r\n    color: black;\r\n}\r\n\r\n.item[_ngcontent-%COMP%]:hover {\r\n    box-shadow: 10px 10px 5px 0px rgba(26, 188, 156, 1);\r\n    background-color: #dbfaf4;\r\n    z-index: 100;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdHMvY29udGFjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFHSSxtREFBbUQ7SUFDbkQseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0cy9jb250YWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZmEtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICBjb2xvcjogIzFhYmM5YztcclxufVxyXG5cclxuLml0ZW0ge1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxufVxyXG5cclxuLmljb24tYm94IHtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uYnV0dG9uLXRleHQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAzOXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLml0ZW06aG92ZXIge1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxMHB4IDEwcHggNXB4IDBweCByZ2JhKDI2LCAxODgsIDE1NiwgMSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDEwcHggMTBweCA1cHggMHB4IHJnYmEoMjYsIDE4OCwgMTU2LCAxKTtcclxuICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCA1cHggMHB4IHJnYmEoMjYsIDE4OCwgMTU2LCAxKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYmZhZjQ7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contacts',
                templateUrl: './contacts.component.html',
                styleUrls: ['./contacts.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/current-job/current-job.component.ts":
/*!******************************************************!*\
  !*** ./src/app/current-job/current-job.component.ts ***!
  \******************************************************/
/*! exports provided: CurrentJobComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentJobComponent", function() { return CurrentJobComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function CurrentJobComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CurrentJobComponent_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const item_r15 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.handleClick(item_r15.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r15.imageSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r15.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", item_r15.href, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", item_r15.id);
} }
class CurrentJobComponent {
    constructor() {
        this.job = {
            position: 'PhD Student',
            employer: [
                {
                    id: 'oeg',
                    imageSrc: '../../assets/logooeg.png',
                    title: 'D3206 - Ontology Engineering Group',
                    href: 'http://www.oeg-upm.net/'
                },
                {
                    id: 'dia',
                    imageSrc: '../../assets/logo_DIA.png',
                    title: 'Artificial Intelligence Department',
                    href: 'http://www.dia.fi.upm.es/'
                },
                {
                    id: 'ets',
                    imageSrc: '../../assets/etsiinf.jfif',
                    title: 'ETS de Ingenieros Informáticos - Campus de Montegancedo s/n',
                    href: 'http://www.fi.upm.es/'
                },
                {
                    id: 'upm',
                    imageSrc: '../../assets/uni.jpg',
                    title: 'Universidad Politécnica de Madrid',
                    href: 'https://www.upm.es/'
                }
            ]
        };
    }
    ngOnInit() { }
    handleClick(id) {
        document.getElementById(id).click();
    }
}
CurrentJobComponent.ɵfac = function CurrentJobComponent_Factory(t) { return new (t || CurrentJobComponent)(); };
CurrentJobComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CurrentJobComponent, selectors: [["app-current-job"]], decls: 4, vars: 2, consts: [[1, "list-group", "list-group-flush"], ["class", "list-group-item item clickable", 3, "click", 4, "ngFor", "ngForOf"], [1, "list-group-item", "item", "clickable", 3, "click"], [1, "float-right", "img-wrapper"], ["alt", "", 3, "src"], [1, "text-wrapper"], [1, "button-text"], ["target", "_blank", 3, "href", "id"]], template: function CurrentJobComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CurrentJobComponent_div_3_Template, 7, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.job.position, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.job.employer);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".item[_ngcontent-%COMP%] {\r\n    height: 100px;\r\n}\r\n\r\n.img-wrapper[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    width: 135px;\r\n    background-color: white;\r\n}\r\n\r\n.item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    display: block;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n}\r\n\r\n.text-wrapper[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n}\r\n\r\n.button-text[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 30px;\r\n    font-weight: 500;\r\n    font-size: 16px;\r\n    color: black;\r\n    max-width: 250px;\r\n}\r\n\r\n.item[_ngcontent-%COMP%]:hover {\r\n    box-shadow: 10px 10px 5px 0px rgba(26, 188, 156, 1);\r\n    background-color: #dbfaf4;\r\n    z-index: 100;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VycmVudC1qb2IvY3VycmVudC1qb2IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFHSSxtREFBbUQ7SUFDbkQseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jdXJyZW50LWpvYi9jdXJyZW50LWpvYi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5pdGVtIHtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbn1cclxuXHJcbi5pbWctd3JhcHBlciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTM1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLml0ZW0gaW1nIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbn1cclxuXHJcbi50ZXh0LXdyYXBwZXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uYnV0dG9uLXRleHQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAzMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIG1heC13aWR0aDogMjUwcHg7XHJcbn1cclxuXHJcbi5pdGVtOmhvdmVyIHtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMTBweCAxMHB4IDVweCAwcHggcmdiYSgyNiwgMTg4LCAxNTYsIDEpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAxMHB4IDEwcHggNXB4IDBweCByZ2JhKDI2LCAxODgsIDE1NiwgMSk7XHJcbiAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggNXB4IDBweCByZ2JhKDI2LCAxODgsIDE1NiwgMSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGJmYWY0O1xyXG4gICAgei1pbmRleDogMTAwO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CurrentJobComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-current-job',
                templateUrl: './current-job.component.html',
                styleUrls: ['./current-job.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/cv-modal/cv-modal.component.ts":
/*!************************************************!*\
  !*** ./src/app/cv-modal/cv-modal.component.ts ***!
  \************************************************/
/*! exports provided: CvModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvModalComponent", function() { return CvModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/esm5/ngx-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _pipes_divider_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pipes/divider.pipe */ "./src/app/pipes/divider.pipe.ts");







const _c0 = ["cvModal"];
function CvModalComponent_div_18_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const desc_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", desc_r38, " ");
} }
function CvModalComponent_div_18_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Technologies:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const proj_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", proj_r35.technologies, " ");
} }
function CvModalComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "fa-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CvModalComponent_div_18_p_4_Template, 2, 1, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CvModalComponent_div_18_p_5_Template, 4, 1, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const proj_r35 = ctx.$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r23.faCheck);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", proj_r35.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", proj_r35 == null ? null : proj_r35.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", proj_r35.technologies.length != 0);
} }
function CvModalComponent_fa_icon_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "fa-icon", 28);
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r24.faGraduationCap);
} }
function CvModalComponent_h2_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Education ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CvModalComponent_p_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cert_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", cert_r40, " ");
} }
function CvModalComponent_fa_icon_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "fa-icon", 28);
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r27.faCalendarAlt);
} }
function CvModalComponent_h2_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Events ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CvModalComponent_p_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const event_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", event_r41, " ");
} }
function CvModalComponent_fa_icon_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "fa-icon", 28);
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r30.faCog);
} }
function CvModalComponent_h2_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Skills ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CvModalComponent_fa_icon_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "fa-icon", 28);
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r32.faLaptopCode);
} }
function CvModalComponent_h2_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Technologies ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CvModalComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tech_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tech_r42.type, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 2, tech_r42.elements, " / "), " ");
} }
class CvModalComponent {
    constructor() {
        this.faLaptopCode = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faLaptopCode"];
        this.faGraduationCap = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faGraduationCap"];
        this.faCog = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCog"];
        this.faCheck = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCheck"];
        this.faCalendarAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCalendarAlt"];
    }
    ngOnInit() { }
    show() {
        this.modal.show();
    }
}
CvModalComponent.ɵfac = function CvModalComponent_Factory(t) { return new (t || CvModalComponent)(); };
CvModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CvModalComponent, selectors: [["app-cv-modal"]], viewQuery: function CvModalComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.modal = _t.first);
    } }, inputs: { job: "job" }, decls: 38, vars: 19, consts: [["bsModal", "", "tabindex", "-1", "role", "dialog", "aria-labelledby", "dialog-nested-name1", 1, "modal", "fade"], ["cvModal", "bs-modal"], [1, "modal-dialog", "modal-xl"], [1, "modal-content"], [1, "modal-body"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "row", "border-between"], [1, "col-8"], [1, "row", "pr-2"], [1, "col-12"], [1, "chapter-title", "mb-2"], ["alt", "", "width", "60", 1, "mr-2", 3, "src"], [1, "dates-title", "mb-2"], ["class", "col-12", 4, "ngFor", "ngForOf"], [1, "col-4"], [1, "row", "mb-4", "pl-3"], ["class", "mr-3", "style", "font-size: 40px; color: #00000099;", 3, "icon", 4, "ngIf"], ["class", "chapter-title mb-4 pt-3", 4, "ngIf"], ["class", "right-col-text mb-1 pl-4", 4, "ngFor", "ngForOf"], [1, "right-col-text", "pl-4"], [1, "row", "pl-3"], [1, "title", "proj-title", "mb-0"], [3, "icon"], ["class", "proj-text mb-1 pl-4", 4, "ngFor", "ngForOf"], ["class", "proj-text mb-1 pl-4", 4, "ngIf"], [1, "proj-text", "mb-1", "pl-4"], [2, "font-weight", "500", "color", "black"], [1, "mr-3", 2, "font-size", "40px", "color", "#00000099", 3, "icon"], [1, "chapter-title", "mb-4", "pt-3"], [1, "right-col-text", "mb-1", "pl-4"], [1, "title", "tech-title", "pl-4", "mb-0"]], template: function CvModalComponent_Template(rf, ctx) { if (rf & 1) {
        const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvModalComponent_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return _r22.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CvModalComponent_div_18_Template, 6, 4, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, CvModalComponent_fa_icon_21_Template, 1, 1, "fa-icon", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, CvModalComponent_h2_22_Template, 2, 0, "h2", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, CvModalComponent_p_23_Template, 2, 1, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, CvModalComponent_fa_icon_25_Template, 1, 1, "fa-icon", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, CvModalComponent_h2_26_Template, 2, 0, "h2", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, CvModalComponent_p_27_Template, 2, 1, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, CvModalComponent_fa_icon_29_Template, 1, 1, "fa-icon", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, CvModalComponent_h2_30_Template, 2, 0, "h2", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, CvModalComponent_fa_icon_35_Template, 1, 1, "fa-icon", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, CvModalComponent_h2_36_Template, 2, 0, "h2", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, CvModalComponent_div_37_Template, 6, 5, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.job == null ? null : ctx.job.thumbnail, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.job == null ? null : ctx.job.company, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.job == null ? null : ctx.job.dates, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.job == null ? null : ctx.job.projects);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.job == null ? null : ctx.job.certifications.length) != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.job == null ? null : ctx.job.certifications.length) != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.job == null ? null : ctx.job.certifications);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.job == null ? null : ctx.job.events.length) != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.job == null ? null : ctx.job.events.length) != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.job == null ? null : ctx.job.events);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.job == null ? null : ctx.job.skills.length) != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.job == null ? null : ctx.job.skills.length) != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](33, 16, ctx.job == null ? null : ctx.job.skills, " / "), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.job == null ? null : ctx.job.technologies.length) != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.job == null ? null : ctx.job.technologies.length) != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.job == null ? null : ctx.job.technologies);
    } }, directives: [ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FaIconComponent"]], pipes: [_pipes_divider_pipe__WEBPACK_IMPORTED_MODULE_5__["DividerPipe"]], styles: [".border-between[_ngcontent-%COMP%] > [class*='col-'][_ngcontent-%COMP%]:before {\r\n    background: #e3e3e3;\r\n    bottom: 0;\r\n    content: \" \";\r\n    left: 0;\r\n    position: absolute;\r\n    width: 1px;\r\n    top: 0;\r\n}\r\n\r\n.border-between[_ngcontent-%COMP%] > [class*='col-'][_ngcontent-%COMP%]:first-child:before {\r\n    display: none;\r\n}\r\n\r\n.modal-body[_ngcontent-%COMP%] {\r\n    padding: 2rem;\r\n}\r\n\r\n.chapter-title[_ngcontent-%COMP%] {\r\n    font-variant: small-caps;\r\n    font-size: 20px;\r\n    font-weight: 700;\r\n    color: #00000099;\r\n}\r\n\r\n.dates-title[_ngcontent-%COMP%] {\r\n    font-size: 15px;\r\n    font-weight: 700;\r\n    color: #00000099;\r\n    text-align: right;\r\n    font-variant: small-caps;\r\n}\r\n\r\n.right-col-text[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    color: gray;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n    text-align: justify;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n    font-variant: small-caps;\r\n    color: #1abc9c;\r\n    font-weight: 600;\r\n    font-size: 18px;\r\n}\r\n\r\n.tech-title[_ngcontent-%COMP%] {\r\n    font-size: 15px;\r\n}\r\n\r\n.proj-text[_ngcontent-%COMP%] {\r\n    color: gray;\r\n    font-size: 15px;\r\n    font-family: monospace;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3YtbW9kYWwvY3YtbW9kYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsWUFBWTtJQUNaLE9BQU87SUFDUCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLE1BQU07QUFDVjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvY3YtbW9kYWwvY3YtbW9kYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3JkZXItYmV0d2Vlbj5bY2xhc3MqPSdjb2wtJ106YmVmb3JlIHtcclxuICAgIGJhY2tncm91bmQ6ICNlM2UzZTM7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBjb250ZW50OiBcIiBcIjtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMXB4O1xyXG4gICAgdG9wOiAwO1xyXG59XHJcblxyXG4uYm9yZGVyLWJldHdlZW4+W2NsYXNzKj0nY29sLSddOmZpcnN0LWNoaWxkOmJlZm9yZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4ubW9kYWwtYm9keSB7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG59XHJcblxyXG4uY2hhcHRlci10aXRsZSB7XHJcbiAgICBmb250LXZhcmlhbnQ6IHNtYWxsLWNhcHM7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6ICMwMDAwMDA5OTtcclxufVxyXG5cclxuLmRhdGVzLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogIzAwMDAwMDk5O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBmb250LXZhcmlhbnQ6IHNtYWxsLWNhcHM7XHJcbn1cclxuXHJcbi5yaWdodC1jb2wtdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogZ3JheTtcclxufVxyXG5cclxucCB7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gICAgZm9udC12YXJpYW50OiBzbWFsbC1jYXBzO1xyXG4gICAgY29sb3I6ICMxYWJjOWM7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4udGVjaC10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbi5wcm9qLXRleHQge1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CvModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cv-modal',
                templateUrl: './cv-modal.component.html',
                styleUrls: ['./cv-modal.component.css']
            }]
    }], function () { return []; }, { job: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], modal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['cvModal', { static: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/cv/cv.component.ts":
/*!************************************!*\
  !*** ./src/app/cv/cv.component.ts ***!
  \************************************/
/*! exports provided: CvComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvComponent", function() { return CvComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _cv_modal_cv_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cv-modal/cv-modal.component */ "./src/app/cv-modal/cv-modal.component.ts");
/* harmony import */ var _pipes_order_by_position_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pipes/order-by-position.pipe */ "./src/app/pipes/order-by-position.pipe.ts");





const _c0 = ["cvModal"];
function CvComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvComponent_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const job_r46 = ctx.$implicit; const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r47.handleClick(job_r46); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const job_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", job_r46.thumbnail, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", job_r46.company, " ");
} }
class CvComponent {
    constructor() {
        this.cv = [
            {
                position: 1,
                company: 'Early Stage Researcher in PROTECT Project',
                thumbnail: '/assets/logo_protect.png',
                dates: 'January/2020 - Present',
                projects: [
                    {
                        title: 'PROTECT (Grant agreement ID: 813497)',
                        description: [
                            "PROTECT is a H2020 Marie Skłodowska-Curie Action European Training Network with the aim of developing new ways of empowering users of digital services to understand the risks they take when they go online and offering new tools that enable companies to incorporate data protection into their digital services.",
                            "Link: https://protect-network.eu/"
                        ],
                        technologies: ''
                    } /**,
                    {
                        title: 'PROJECTO 2',
                        description: [],
                        technologies: ''
                    },
                    {
                        title: 'PROJECTO 3',
                        description: [],
                        technologies: ''
                    }**/
                ],
                certifications: [],
                events: [],
                skills: [],
                technologies: [
                /**{
                    type: "database",
                    elements: []
                },
                {
                    type: "tools",
                    elements: []
                },
                {
                    type: "development",
                    elements: []
                }**/
                ]
            },
            {
                position: 2,
                company: 'PhD in Artificial Intelligence',
                thumbnail: '/assets/uni.jpg',
                dates: 'January/2020 - Present',
                projects: [
                    {
                        title: 'Collaboration with W3C Community Groups (CG)',
                        description: [
                            "Data Privacy Vocabularies and Controls CG (DPVCG): contribution by writing in the Data Privacy Vocabulary (DPV) primer"
                        ],
                        technologies: 'Google Docs'
                    } /**,
                    {
                        title: 'Formative complements of the master's degree in Artificial Intelligence',
                        description: [],
                        technologies: ''
                    }**/
                ],
                certifications: [],
                events: [],
                skills: [],
                technologies: [
                /**{
                    type: "database",
                    elements: []
                },
                {
                    type: "tools",
                    elements: []
                },
                {
                    type: "development",
                    elements: []
                }**/
                ]
            },
            {
                position: 3,
                company: 'Data Scientist at CLOSER CONSULTING',
                thumbnail: '/assets/logo_closer.png',
                dates: 'July/2018 - December/2019',
                projects: [
                    {
                        title: 'Data Scientist / Analyst in BNP Paribas CIB – Global Markets Resources',
                        description: [
                            "Development of tools to analyze and explain large amounts of data related to the balance sheet and other financial resources",
                            "Implementation of predictive models that explain seasonal variations of data linked to financial resources with specific focus on balance sheet metrics",
                            "Predict the evolution of metrics linked to banking regulation based on financial market data",
                            "Implement Shiny R interactive dashboards to monitor resources and detect errors in databases systems",
                            "Implementation of a G-SIB indicators’ pricing model for derivative transactions and respective user interface",
                            "Development of the prudential netting key and respective allocation logic for SFTs (Securities Financing Transactions) balance sheet computation",
                            "Demonstration of built-in tool features and how to use them"
                        ],
                        technologies: 'R (Shiny, tidyverse, plotly, datatable), Python (pandas, numpy, plotly), C#, VBA, TortoiseSVN'
                    }
                ],
                certifications: [],
                events: [],
                skills: [
                    "Data preparation",
                    "Timse series modelling",
                    "Vector autoregression (VAR)",
                    "Data quality",
                    "Version control",
                    "Software architecture",
                    "Data reconciliation between systems",
                    "Creation and management of databases",
                    "Error detection",
                    "Reporting",
                    "Dashboard design",
                    "Big Data technologies",
                    "Financial resources"
                ],
                technologies: [
                    {
                        type: "database",
                        elements: [
                            "MySQL",
                            "PostgreSQL"
                        ]
                    },
                    {
                        type: "tools",
                        elements: [
                            "Microsoft Office",
                            "PyCharm",
                            "TortoiseSVN",
                            "RStudio",
                            "Microsoft Visual Studio"
                        ]
                    },
                    {
                        type: "development",
                        elements: [
                            "Python",
                            "R",
                            "C#",
                            "VBA"
                        ]
                    }
                ]
            },
            {
                position: 4,
                company: 'Jr. Consultant at ALTRAN',
                thumbnail: '/assets/logo_altran.png',
                dates: 'October/2017 - June/2018',
                projects: [
                    {
                        title: 'Pedestrian Detection using Convolutional Neural Networks (CNN)',
                        description: [
                            "Research and selection of methods of object detection in images with the aim of implementing a pedestrian detection model in the context of autonomous driving",
                            "Improvement of the training sets' data quality and parameter tuning of the training process of neural network models"
                        ],
                        technologies: 'Python (TensorFlow, OpenCV, Matplotlib, Seaborn, Bokeh, Plotly, nxviz), GitLab'
                    },
                    {
                        title: 'Technical Writing Support to P2020 Projects',
                        description: [
                            "Collaboration in the technical writing of projects in the area of information technologies for application to the Portugal 2020 (P2020) financing program"
                        ],
                        technologies: 'Microsoft Office'
                    }
                ],
                certifications: [
                    "Training in Big Data & Analytics Technologies - Altran Portugal in partnership with NOVA LINCS – FCT"
                ],
                events: [
                    "Participant in the Portugal eHealth Summit event",
                    "Demonstrator in the Altran Open Day event"
                ],
                skills: [
                    "Feature extraction / selection techniques",
                    "Data mining",
                    "Data preparation",
                    "Machine learning algorithms",
                    "Convolutional Neural Networks (CNN)",
                    "Hyperparameter tuning",
                    "Data quality",
                    "Version control",
                    "Reporting",
                    "Big Data technologies"
                ],
                technologies: [
                    {
                        type: "database",
                        elements: [
                            "MySQL",
                            "PostgreSQL"
                        ]
                    },
                    {
                        type: "tools",
                        elements: [
                            "Microsoft Office",
                            "GitLab",
                            "PyCharm",
                            "Tableau",
                            "RStudio"
                        ]
                    },
                    {
                        type: "development",
                        elements: [
                            "Python",
                            "R"
                        ]
                    }
                ]
            },
            {
                position: 5,
                company: 'Integrated Master in Biomedical Engineering',
                thumbnail: '/assets/logo_fct.gif',
                dates: 'September/2011 - November/2017',
                projects: [
                    {
                        title: 'Master thesis: Personality Assessment based on Biosignals during a Decision-making Task',
                        description: [
                            'State of the art review on biosignal monitoring, personality assessment and assessment of decision making behaviour',
                            'Implementation of processing algorithms for the electrocardiogram, electrodermal activity, blood volume pulse and pupillometry',
                            'Extraction and computation of relevant features from the biosignals',
                            'Implementation of feature selection techniques',
                            'Implementation of a predictive model of human personality based on the significant features extracted from the studied biosignals'
                        ],
                        technologies: 'Python (pandas, scikit-learn, seaborn, numpy, matplotlib, scipy), GitHub, LaTeX, Excel'
                    },
                    {
                        title: 'Bachelor project: Characterization and Comparison of Lyophilised Gelatin Matrices',
                        description: [
                            "Study and comparison of matrices of different crosslinking agents, based on the analysis of the matrices' water absorption capacity, mechanical resistance, porosity, among others, and tests on the cell's behavior in relation to these three-dimensional porous supports"
                        ],
                        technologies: 'Excel'
                    },
                    {
                        title: 'Relevant Courses',
                        description: [
                            "Biomedical Engineering: Biophysics, Biomechanics and Hemodynamics, Analogical and Digital Instrumentation, Medical Imaging Methods, Medical Information Systems, Electrophysiology, Imagiology",
                            "Physics: Mechanics, Electromagnetism, Quantum Mechanics, Nuclear, Atomic and Molecular Physics",
                            "Mathematics: Mathematical Analysis, Linear Algebra, Probability and Statistics, Operations Research",
                            "Computer Engineering: Electronics, Signal Analysis, Sensorial Systems",
                            "Medicine: Anatomy, Physiology, Pathophysiology"
                        ],
                        technologies: 'MatLab, HTML, PHP, MySQL, Python, C / C++ / C#, Java'
                    }
                ],
                certifications: [
                    "Bachelor's Degree in Biomedical Engineering - FCT NOVA",
                    "Master's Degree in Biomedical Engineering - FCT NOVA"
                ],
                events: [
                    "Participant in the Technological Journeys (Jortec) of Biomedical Engineering"
                ],
                skills: [
                    "Signal processing",
                    "Image processing",
                    "Physiological data modeling",
                    "Feature extraction / selection techniques",
                    "Machine learning algorithms",
                    "Hyperparameter tuning",
                    "Data quality",
                    "Tissue engineering",
                    "Medical imaging",
                    "Creation and management of databases",
                    "Intrumentation",
                    "Decision theory",
                    "Queueing theory",
                    "Decision support systems",
                    "Data analysis tools",
                    "Object oriented programming"
                ],
                technologies: [
                    {
                        type: "database",
                        elements: [
                            "MySQL"
                        ]
                    },
                    {
                        type: "tools",
                        elements: [
                            "LaTeX",
                            "Microsoft Office",
                            "GitHub",
                            "PyCharm",
                            "Microsoft Visual Studio"
                        ]
                    },
                    {
                        type: "development",
                        elements: [
                            "Python",
                            "C / C# / C++",
                            "MatLab",
                            " HTML / PHP",
                            "Java"
                        ]
                    }
                ]
            }
        ];
    }
    ngOnInit() { }
    handleClick(job) {
        this.activeJob = job;
        this.cvModal.show();
    }
}
CvComponent.ɵfac = function CvComponent_Factory(t) { return new (t || CvComponent)(); };
CvComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CvComponent, selectors: [["app-cv"]], viewQuery: function CvComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.cvModal = _t.first);
    } }, decls: 6, vars: 4, consts: [[1, "row", "border-between", "mt-5"], [1, "col-10", "offset-1", "card-group"], ["class", "card clickable w-100", 3, "click", 4, "ngFor", "ngForOf"], [3, "job"], ["cvModal", ""], [1, "card", "clickable", "w-100", 3, "click"], [1, "img-box"], ["alt", "", 1, "card-img-top", 3, "src"], [1, "card-body"]], template: function CvComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CvComponent_div_2_Template, 5, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "orderByPosition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-cv-modal", 3, 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, ctx.cv));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("job", ctx.activeJob);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _cv_modal_cv_modal_component__WEBPACK_IMPORTED_MODULE_2__["CvModalComponent"]], pipes: [_pipes_order_by_position_pipe__WEBPACK_IMPORTED_MODULE_3__["OrderByPositionPipe"]], styles: [".card[_ngcontent-%COMP%] {\r\n    padding: 0.5rem;\r\n    border-bottom: none;\r\n    border-top: none;\r\n    border-radius: none;\r\n        \r\n}\r\n\r\n.card[_ngcontent-%COMP%]:hover {\r\n    font-size: 15px;\r\n    box-shadow: 10px 10px 5px 0px rgba(26, 188, 156, 1);\r\n    background-color: #dbfaf4;\r\n    z-index: 100;\r\n}\r\n\r\n.card-body[_ngcontent-%COMP%] {\r\n    padding: 0.5rem 0.5rem 0 0.5rem;\r\n    text-align: center;\r\n    font-size: 13px;\r\n}\r\n\r\n.img-box[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 50%;\r\n    margin: 0.5rem auto 0.5rem auto;\r\n    padding-top: 50%;\r\n}\r\n\r\n.card-img-top[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n    right: 0;\r\n    width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3YvY3YuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjs7QUFFdkI7O0FBRUE7SUFDSSxlQUFlO0lBR2YsbURBQW1EO0lBQ25ELHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDViwrQkFBK0I7SUFDL0IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFLUiwyQkFBMkI7SUFDM0IsUUFBUTtJQUNSLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2N2L2N2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IG5vbmU7XHJcbiAgICAgICAgXHJcbn1cclxuXHJcbi5jYXJkOmhvdmVyIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMTBweCAxMHB4IDVweCAwcHggcmdiYSgyNiwgMTg4LCAxNTYsIDEpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAxMHB4IDEwcHggNXB4IDBweCByZ2JhKDI2LCAxODgsIDE1NiwgMSk7XHJcbiAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggNXB4IDBweCByZ2JhKDI2LCAxODgsIDE1NiwgMSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGJmYWY0O1xyXG4gICAgei1pbmRleDogMTAwO1xyXG59XHJcblxyXG4uY2FyZC1ib2R5IHtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAwLjVyZW0gMCAwLjVyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuXHJcbi5pbWctYm94IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW46IDAuNXJlbSBhdXRvIDAuNXJlbSBhdXRvO1xyXG4gICAgcGFkZGluZy10b3A6IDUwJTtcclxufVxyXG5cclxuLmNhcmQtaW1nLXRvcCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CvComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cv',
                templateUrl: './cv.component.html',
                styleUrls: ['./cv.component.css']
            }]
    }], function () { return []; }, { cvModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['cvModal', { static: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HeaderComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 3, vars: 0, consts: [[1, "w-100", "box"], [1, "title"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Beatriz Esteves ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".box[_ngcontent-%COMP%] {\r\n    background-color: #1abc9c;\r\n    color: white;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-size: 60px;\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n    margin-bottom: 0px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJveCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWFiYzljO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiA2MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const _c0 = function () { return ["about-me"]; };
const _c1 = function () { return ["publications"]; };
const _c2 = function () { return ["blog"]; };
class NavbarComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 14, vars: 6, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbar", "aria-controls", "navbar", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbar", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto", "ml-auto", "mt-2", "mt-lg-0"], [1, "nav-item"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "About me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Publications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: [".bg-light[_ngcontent-%COMP%] {\r\n    background-color: #dbfaf4 !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLG9DQUFvQztBQUN4QyIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uYmctbGlnaHQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RiZmFmNCAhaW1wb3J0YW50O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pipes/divider.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/divider.pipe.ts ***!
  \***************************************/
/*! exports provided: DividerPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DividerPipe", function() { return DividerPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class DividerPipe {
    transform(value, divider) {
        if (!value || !value.length) {
            return '';
        }
        let result = value.shift();
        value.forEach(element => {
            result += divider + element;
        });
        return result;
    }
}
DividerPipe.ɵfac = function DividerPipe_Factory(t) { return new (t || DividerPipe)(); };
DividerPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "divider", type: DividerPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DividerPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'divider'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pipes/order-by-position.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/pipes/order-by-position.pipe.ts ***!
  \*************************************************/
/*! exports provided: OrderByPositionPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderByPositionPipe", function() { return OrderByPositionPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class OrderByPositionPipe {
    transform(value, args) {
        return value.sort((a, b) => a - b);
    }
}
OrderByPositionPipe.ɵfac = function OrderByPositionPipe_Factory(t) { return new (t || OrderByPositionPipe)(); };
OrderByPositionPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "orderByPosition", type: OrderByPositionPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderByPositionPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'orderByPosition'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/publication-preview/publication-preview.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/publication-preview/publication-preview.component.ts ***!
  \**********************************************************************/
/*! exports provided: PublicationPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicationPreviewComponent", function() { return PublicationPreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");





function PublicationPreviewComponent_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const abs_r54 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", abs_r54, "");
} }
function PublicationPreviewComponent_span_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const key_r55 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](", ", key_r55, "");
} }
function PublicationPreviewComponent_li_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const author_r56 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", author_r56.FullName, " ");
} }
function PublicationPreviewComponent_div_31_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const adviser_r58 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", adviser_r58, " ");
} }
function PublicationPreviewComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Advisers:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PublicationPreviewComponent_div_31_li_5_Template, 2, 1, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r52.publication.Advisers);
} }
function PublicationPreviewComponent_div_32_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const company_r60 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", company_r60, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PublicationPreviewComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " In collaboration with: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PublicationPreviewComponent_div_32_div_4_Template, 3, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r53.publication.Companies.Others);
} }
class PublicationPreviewComponent {
    constructor() {
        this.faExternalLinkAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faExternalLinkAlt"];
    }
    ngOnInit() { }
    handleClick() {
        document.getElementById('hidden-anchor').click();
    }
}
PublicationPreviewComponent.ɵfac = function PublicationPreviewComponent_Factory(t) { return new (t || PublicationPreviewComponent)(); };
PublicationPreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PublicationPreviewComponent, selectors: [["app-publication-preview"]], inputs: { publication: "publication" }, decls: 37, vars: 15, consts: [[1, "page-container"], [1, "page"], [1, "row"], [1, "col-12"], ["alt", "", "width", "100", 1, "float-left", 3, "src"], [1, "row", "mt-4"], [1, "text-center"], [1, "col-12", "abstract-list"], [4, "ngFor", "ngForOf"], [1, "row", "mt-3", "mb-3", "keyword-list"], [1, "keyword"], [1, "author-list"], ["class", "row", 4, "ngIf"], ["class", "row logo-row", 4, "ngIf"], [1, "overlay", "clickable", 3, "click"], [1, "icon"], [3, "icon"], ["target", "_blank", "id", "hidden-anchor", 3, "href"], [1, "row", "logo-row"], ["class", "col-3", 4, "ngFor", "ngForOf"], [1, "col-3"], [1, "img-box"], ["alt", "", 1, "float-center", "bottom-logo", 3, "src"]], template: function PublicationPreviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, PublicationPreviewComponent_span_17_Template, 3, 1, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Keywords:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, PublicationPreviewComponent_span_23_Template, 2, 1, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Authors:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, PublicationPreviewComponent_li_30_Template, 2, 1, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, PublicationPreviewComponent_div_31_Template, 6, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, PublicationPreviewComponent_div_32_Template, 5, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PublicationPreviewComponent_Template_div_click_33_listener() { return ctx.handleClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "fa-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "a", 17);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.publication.Companies.Main, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.publication.Title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.publication.Subtitle, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.publication.ReleaseDate, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.publication.Abstract);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.publication.Keywords[0], "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](24, 12, ctx.publication.Keywords, 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.publication.Authors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.publication.Advisers.length != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.publication.Companies.Others);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faExternalLinkAlt);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.publication.DocUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FaIconComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["SlicePipe"]], styles: [".page[_ngcontent-%COMP%] {\r\n    margin: 0 auto 3rem auto;\r\n    background: #fff;\r\n    box-shadow: 0 4px 5px rgba(75, 75, 75, 0.2);\r\n    outline: 0;\r\n    width: 21cm;\r\n    min-height: 29.7cm;\r\n    padding-left: 2cm;\r\n    padding-top: 2cm;\r\n    padding-right: 2cm;\r\n    padding-bottom: 2cm;\r\n    border: 1px solid rgba(75, 75, 75, 0.2);\r\n    position: relative;\r\n}\r\n\r\n.abstract-list[_ngcontent-%COMP%] {\r\n    text-align: justify;\r\n}\r\n\r\n.keyword[_ngcontent-%COMP%]{\r\n    color: #1abc9c;\r\n}\r\n\r\n.keyword-list[_ngcontent-%COMP%]{\r\n    text-align: justify;\r\n}\r\n\r\n.author-list[_ngcontent-%COMP%] {\r\n    padding-left: 0;\r\n    list-style: none;\r\n}\r\n\r\n.img-box[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    margin: 0.5rem auto 0.5rem auto;\r\n    padding-top: 50%;\r\n}\r\n\r\n.bottom-logo[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n    right: 0;\r\n    width: 100%;\r\n}\r\n\r\n.page-container[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    zoom: 65%;\r\n}\r\n\r\n.overlay[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    height: 100%;\r\n    width: 21cm;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    opacity: 0;\r\n    transition: .3s ease;\r\n    background-color: #495057;\r\n}\r\n\r\n.page-container[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%] {\r\n    opacity: 0.8;\r\n}\r\n\r\n.icon[_ngcontent-%COMP%] {\r\n    color: white;\r\n    font-size: 100px;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    -ms-transform: translate(-50%, -50%);\r\n    text-align: center;\r\n}\r\n\r\nfa-icon[_ngcontent-%COMP%]:hover {\r\n    color: #eee;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVibGljYXRpb24tcHJldmlldy9wdWJsaWNhdGlvbi1wcmV2aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3QkFBd0I7SUFDeEIsZ0JBQWdCO0lBQ2hCLDJDQUEyQztJQUMzQyxVQUFVO0lBQ1YsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsdUNBQXVDO0lBQ3ZDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLCtCQUErQjtJQUMvQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLDJCQUEyQjtJQUMzQixRQUFRO0lBQ1IsV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0lBQ1IsWUFBWTtJQUNaLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixvQkFBb0I7SUFDcEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0NBQWdDO0lBQ2hDLG9DQUFvQztJQUNwQyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9wdWJsaWNhdGlvbi1wcmV2aWV3L3B1YmxpY2F0aW9uLXByZXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlIHtcclxuICAgIG1hcmdpbjogMCBhdXRvIDNyZW0gYXV0bztcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA1cHggcmdiYSg3NSwgNzUsIDc1LCAwLjIpO1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgIHdpZHRoOiAyMWNtO1xyXG4gICAgbWluLWhlaWdodDogMjkuN2NtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyY207XHJcbiAgICBwYWRkaW5nLXRvcDogMmNtO1xyXG4gICAgcGFkZGluZy1yaWdodDogMmNtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDJjbTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNzUsIDc1LCA3NSwgMC4yKTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmFic3RyYWN0LWxpc3Qge1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG4ua2V5d29yZHtcclxuICAgIGNvbG9yOiAjMWFiYzljO1xyXG59XHJcblxyXG4ua2V5d29yZC1saXN0e1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG5cclxuLmF1dGhvci1saXN0IHtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbi5pbWctYm94IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogMC41cmVtIGF1dG8gMC41cmVtIGF1dG87XHJcbiAgICBwYWRkaW5nLXRvcDogNTAlO1xyXG59XHJcblxyXG4uYm90dG9tLWxvZ28ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICByaWdodDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucGFnZS1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgem9vbTogNjUlO1xyXG59XHJcblxyXG4ub3ZlcmxheSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMjFjbTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zaXRpb246IC4zcyBlYXNlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ5NTA1NztcclxufVxyXG5cclxuLnBhZ2UtY29udGFpbmVyOmhvdmVyIC5vdmVybGF5IHtcclxuICAgIG9wYWNpdHk6IDAuODtcclxufVxyXG5cclxuLmljb24ge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxMDBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmZhLWljb246aG92ZXIge1xyXG4gICAgY29sb3I6ICNlZWU7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PublicationPreviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-publication-preview',
                templateUrl: './publication-preview.component.html',
                styleUrls: ['./publication-preview.component.css']
            }]
    }], function () { return []; }, { publication: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/publications-list/publications-list.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/publications-list/publications-list.component.ts ***!
  \******************************************************************/
/*! exports provided: PublicationsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicationsListComponent", function() { return PublicationsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function PublicationsListComponent_li_1_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const publication_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" - ", publication_r2.ReleaseDate, " ");
} }
function PublicationsListComponent_li_1_span_6_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const author_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](", ", author_r9.ShortName, "");
} }
function PublicationsListComponent_li_1_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PublicationsListComponent_li_1_span_6_span_2_Template, 2, 1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const publication_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", publication_r2.Authors[0].ShortName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 2, publication_r2.Authors, 1));
} }
function PublicationsListComponent_li_1_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const publication_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](publication_r2.Authors.ShortName);
} }
const _c0 = function (a0) { return { "active": a0 }; };
function PublicationsListComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PublicationsListComponent_li_1_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const publication_r2 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.handleClick(publication_r2.Id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PublicationsListComponent_li_1_span_3_Template, 2, 1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PublicationsListComponent_li_1_span_6_Template, 4, 5, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PublicationsListComponent_li_1_ng_template_7_Template, 1, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const publication_r2 = ctx.$implicit;
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, publication_r2.Id == ctx_r1.activeId));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", publication_r2.Title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!publication_r2.ReleaseDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", publication_r2.Authors.length > 1)("ngIfElse", _r5);
} }
class PublicationsListComponent {
    constructor() {
        this.setActive = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    handleClick(id) {
        this.activeId = id;
        this.setActive.emit(id);
    }
}
PublicationsListComponent.ɵfac = function PublicationsListComponent_Factory(t) { return new (t || PublicationsListComponent)(); };
PublicationsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PublicationsListComponent, selectors: [["app-publications-list"]], inputs: { publications: "publications" }, outputs: { setActive: "setActive" }, decls: 2, vars: 1, consts: [[1, "list-group"], ["class", "list-group-item clickable", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "list-group-item", "clickable", 3, "ngClass", "click"], [1, "title"], [4, "ngIf"], [1, "authors"], [4, "ngIf", "ngIfElse"], ["elseBlock", ""], [4, "ngFor", "ngForOf"]], template: function PublicationsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PublicationsListComponent_li_1_Template, 9, 7, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.publications);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["SlicePipe"]], styles: [".title[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n    font-weight: 700;\r\n    text-align: justify;\r\n}\r\n\r\n.list-group-item[_ngcontent-%COMP%]:first-child {\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n}\r\n\r\n.list-group-item[_ngcontent-%COMP%]:last-child {\r\n    border-bottom-left-radius: 0;\r\n    border-bottom-right-radius: 0;\r\n}\r\n\r\n.list-group-item.active[_ngcontent-%COMP%] {\r\n    z-index: 2;\r\n    color: black;\r\n    background-color: #fff;\r\n    border-color: #1abc9c;\r\n    border-width: 3px;\r\n}\r\n\r\n.authors[_ngcontent-%COMP%]{\r\n    font-size: 12px;\r\n    text-align: justify;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVibGljYXRpb25zLWxpc3QvcHVibGljYXRpb25zLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1Qiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpY2F0aW9ucy1saXN0L3B1YmxpY2F0aW9ucy1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuXHJcbi5saXN0LWdyb3VwLWl0ZW06Zmlyc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xyXG59XHJcblxyXG4ubGlzdC1ncm91cC1pdGVtOmxhc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xyXG59XHJcblxyXG4ubGlzdC1ncm91cC1pdGVtLmFjdGl2ZSB7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1jb2xvcjogIzFhYmM5YztcclxuICAgIGJvcmRlci13aWR0aDogM3B4O1xyXG59XHJcblxyXG4uYXV0aG9yc3tcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PublicationsListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-publications-list',
                templateUrl: './publications-list.component.html',
                styleUrls: ['./publications-list.component.css']
            }]
    }], function () { return []; }, { publications: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], setActive: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/publications/publications.component.ts":
/*!********************************************************!*\
  !*** ./src/app/publications/publications.component.ts ***!
  \********************************************************/
/*! exports provided: PublicationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicationsComponent", function() { return PublicationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _publications_list_publications_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../publications-list/publications-list.component */ "./src/app/publications-list/publications-list.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _publication_preview_publication_preview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../publication-preview/publication-preview.component */ "./src/app/publication-preview/publication-preview.component.ts");





function PublicationsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-publication-preview", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("publication", ctx_r0.activePublication);
} }
class PublicationsComponent {
    constructor() {
        this.publications = [
            {
                Id: 1,
                Title: 'Arousal when making decisions predicts Big Five: A machine learning approach',
                Subtitle: '',
                ReleaseDate: 'November 2017',
                Authors: [
                    {
                        FullName: 'Cátia Cepeda',
                        ShortName: 'C. Cepeda'
                    },
                    {
                        FullName: 'Dina Rindlisbacher',
                        ShortName: 'D. Rindlisbacher'
                    },
                    {
                        FullName: 'Beatriz Esteves',
                        ShortName: 'B. Esteves'
                    },
                    {
                        FullName: 'Julian Schneider',
                        ShortName: 'J. Schneider'
                    },
                    {
                        FullName: 'Edouard Battegay',
                        ShortName: 'E. Battegay'
                    },
                    {
                        FullName: 'Lutz Jäncke',
                        ShortName: 'L. Jäncke'
                    },
                    {
                        FullName: 'Hugo Gamboa',
                        ShortName: 'H. Gamboa'
                    },
                    {
                        FullName: 'Marcus Cheetham',
                        ShortName: 'M. Cheetham'
                    }
                ],
                Advisers: [],
                Companies: {
                    Main: '/assets/logo_fct.gif',
                    Others: [
                        '/assets/publications/univ_zurich.jpg',
                        '/assets/publications/UHZ.png'
                    ]
                },
                DocUrl: 'https://www.slideshare.net/secret/5erUD0fIfg0o7R',
                Abstract: [
                    'Skin-conductance (SC) reactivity is considered a bodily marker of better and poorer choice options, helping to guide decision-making in complex and uncertain situations. SC has been investigated extensively in the Iowa Gambling Task (IGT). The IGT was designed to examine decision-making performance under conditions of uncertainty and risk. Individual variability in behavioral IGT performance has been linked to various personality traits, including those of the Big Five. Skin-conductance responses (SCRs) also vary across individuals during decision making. No studies have used machine learning techniques to predict personality from SC fluctuation during decision-making.',
                    'Aim: To develop an automatic method to recognize personality traits, based on individual fluctuation in SC during decision-making in the IGT.'
                ],
                Keywords: [
                    'Skin Conductance',
                    'Decision Making',
                    'Iowa Gambling Task',
                    'Personality Traits',
                    'Big Five',
                    'Machine Learning'
                ]
            },
            {
                Id: 2,
                Title: 'Personality assessment based on biosignals during a decision-making task',
                Subtitle: 'Dissertation submitted in partial fulfillment of the requirements for the degree of Master of Science in Biomedical Engineering',
                ReleaseDate: 'October 2017',
                Authors: [
                    {
                        FullName: 'Beatriz Esteves',
                        ShortName: 'B. Esteves'
                    }
                ],
                Advisers: [
                    'Prof. Doctor Hugo Gamboa',
                    'Prof. Doctor Marcus Cheetham'
                ],
                Companies: {
                    Main: '/assets/logo_fct.gif'
                },
                DocUrl: 'https://run.unl.pt/bitstream/10362/40258/1/Esteves_2017.pdf',
                Abstract: [
                    'Due to the emergence of novel acquisition devices and signal processing techniques, the study of electrophysiology and its applications has assumed an important role on the Biomedical Engineering community. Recently, research on this area has expanded to several domains, with the psychophysiology being a proeminent one, more specifically in the field of personality psychology.',
                    'In this thesis, participants were asked to perform a wildly known decision-making task, the Iowa Gambling Task (IGT), and their biosignals were recorded during this performance with the objective of determining whether changes in biosignals could be related to personality.  This project was composed by 71 participants and their biosignals were used to extract meaningful features that together could create a predictive model of personality. For this, all biosignals were processed prior to the feature extraction step and the features were extracted from the entire signals, recorded during the performance of the IGT, and also dividing the task in five blocks. After the extraction, a machine learning algorithm was used to compute the best predictive models for the Five Factor Model (FFM) personality dimensions and for the Maximization and Regret scales, using each biosignal individually and in the end all features from all biosignals.',
                    'The results showed that the predictive models which use features from all biosignals perform better than the models which use only one biosignal. The Openness to Experience, Agreeableness and Maximization scales are well predicted with features from Electrocardiogram (ECG), the Agreeableness, Maximization and Extraversion scales with Electrodermal Activity (EDA) features and the Extraversion and Openness to Experience scales with features from Blood Volume Pulse (BVP). The hypothesis that personality traits is more expressed in the start of IGT was confirmed since the highest number of features is extracted from the Block 1 of the IGT. The results should be further validated for other populations.'
                ],
                Keywords: [
                    'Biosignals',
                    'Signal Processing',
                    'Feature Selection',
                    'Machine Learning',
                    'Iowa Gambling Task',
                    'Five Factor Model',
                    'Maximization'
                ]
            }
        ];
    }
    ngOnInit() { }
    handleSetActive(id) {
        this.activePublication = this.publications.find(e => e.Id == id);
    }
}
PublicationsComponent.ɵfac = function PublicationsComponent_Factory(t) { return new (t || PublicationsComponent)(); };
PublicationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PublicationsComponent, selectors: [["app-publications"]], decls: 4, vars: 2, consts: [[1, "row", "mt-5"], [1, "col-6"], [3, "publications", "setActive"], ["class", "col-6", 4, "ngIf"], [3, "publication"]], template: function PublicationsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-publications-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("setActive", function PublicationsComponent_Template_app_publications_list_setActive_2_listener($event) { return ctx.handleSetActive($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PublicationsComponent_div_3_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("publications", ctx.publications);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activePublication);
    } }, directives: [_publications_list_publications_list_component__WEBPACK_IMPORTED_MODULE_1__["PublicationsListComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _publication_preview_publication_preview_component__WEBPACK_IMPORTED_MODULE_3__["PublicationPreviewComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpY2F0aW9ucy9wdWJsaWNhdGlvbnMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PublicationsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-publications',
                templateUrl: './publications.component.html',
                styleUrls: ['./publications.component.css']
            }]
    }], function () { return []; }, null); })();


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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\beatr\Documents\GitHub\webpageSourceCode\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map