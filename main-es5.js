function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/about-me/about-me.component.ts":
  /*!************************************************!*\
    !*** ./src/app/about-me/about-me.component.ts ***!
    \************************************************/

  /*! exports provided: AboutMeComponent */

  /***/
  function srcAppAboutMeAboutMeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutMeComponent", function () {
      return AboutMeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _current_job_current_job_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../current-job/current-job.component */
    "./src/app/current-job/current-job.component.ts");
    /* harmony import */


    var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../contacts/contacts.component */
    "./src/app/contacts/contacts.component.ts");
    /* harmony import */


    var _cv_cv_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../cv/cv.component */
    "./src/app/cv/cv.component.ts");

    var AboutMeComponent =
    /*#__PURE__*/
    function () {
      function AboutMeComponent() {
        _classCallCheck(this, AboutMeComponent);
      }

      _createClass(AboutMeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutMeComponent;
    }();

    AboutMeComponent.ɵfac = function AboutMeComponent_Factory(t) {
      return new (t || AboutMeComponent)();
    };

    AboutMeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutMeComponent,
      selectors: [["app-about-me"]],
      decls: 18,
      vars: 0,
      consts: [[1, "row", "mt-3"], [1, "col-3"], ["src", "/assets/foto_bia.png", "alt", "", "width", "225", 1, "mr-2"], [1, "col-9"], [1, "row", "border-between", "mt-3"], [1, "col-5", "offset-1"], [1, "col-5"], [1, "row", "mb-5"], [1, "col-12"]],
      template: function AboutMeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Hi, I'm Beatriz and I have a Masters Degree in Biomedical Engineering. I consider myself to be a highly motivated person who is always looking forward to learn new things and work in different areas of knowledge. This will led me to work as a data scientist for about 2 years, mostly on the banking sector. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Currently I'm an Early Stage Researcher working on PROTECT, a H2020 Marie Sk\u0142odowska-Curie Action European Training Network with the goal of developing new ways of empowering users to understand the risks they take when they go online and offering new tools that enable companies to incorporate data protection into their services. The project is simultaneously funding my PhD in Artificial Intelligence at the Universidad Polit\xE9cnica de Madrid. ");

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
        }
      },
      directives: [_current_job_current_job_component__WEBPACK_IMPORTED_MODULE_1__["CurrentJobComponent"], _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_2__["ContactsComponent"], _cv_cv_component__WEBPACK_IMPORTED_MODULE_3__["CvComponent"]],
      styles: [".border-between[_ngcontent-%COMP%]    > [class*='col-'][_ngcontent-%COMP%]:before {\r\n    background: #e3e3e3;\r\n    bottom: 0;\r\n    content: \" \";\r\n    left: 0;\r\n    position: absolute;\r\n    width: 1px;\r\n    top: 0;\r\n }\r\n \r\n .border-between[_ngcontent-%COMP%]    > [class*='col-'][_ngcontent-%COMP%]:first-child:before {\r\n    display: none;\r\n }\r\n \r\n p[_ngcontent-%COMP%] {\r\n    text-align: justify;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQtbWUvYWJvdXQtbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsWUFBWTtJQUNaLE9BQU87SUFDUCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLE1BQU07Q0FDVDs7Q0FFQTtJQUNHLGFBQWE7Q0FDaEI7O0NBRUQ7SUFDSSxtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9hYm91dC1tZS9hYm91dC1tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvcmRlci1iZXR3ZWVuID4gW2NsYXNzKj0nY29sLSddOmJlZm9yZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTNlM2UzO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgY29udGVudDogXCIgXCI7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDFweDtcclxuICAgIHRvcDogMDtcclxuIH1cclxuIFxyXG4gLmJvcmRlci1iZXR3ZWVuID4gW2NsYXNzKj0nY29sLSddOmZpcnN0LWNoaWxkOmJlZm9yZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gfVxyXG5cclxucCB7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutMeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-about-me',
          templateUrl: './about-me.component.html',
          styleUrls: ['./about-me.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin/admin.component.ts":
  /*!******************************************!*\
    !*** ./src/app/admin/admin.component.ts ***!
    \******************************************/

  /*! exports provided: AdminComponent */

  /***/
  function srcAppAdminAdminComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminComponent", function () {
      return AdminComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ckeditor/ckeditor5-build-classic */
    "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
    /* harmony import */


    var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ckeditor/ckeditor5-angular */
    "./node_modules/@ckeditor/ckeditor5-angular/__ivy_ngcc__/fesm2015/ckeditor-ckeditor5-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var AdminComponent =
    /*#__PURE__*/
    function () {
      function AdminComponent() {
        _classCallCheck(this, AdminComponent);

        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__;
        this.model = {
          editorData: '<p>Hello, world!</p>'
        };
      }

      _createClass(AdminComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getHTML",
        value: function getHTML() {
          alert(this.model.editorData);
        }
      }]);

      return AdminComponent;
    }();

    AdminComponent.ɵfac = function AdminComponent_Factory(t) {
      return new (t || AdminComponent)();
    };

    AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdminComponent,
      selectors: [["app-admin"]],
      decls: 3,
      vars: 2,
      consts: [["type", "button", 3, "click"], [3, "editor", "ngModel", "ngModelChange"]],
      template: function AdminComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_0_listener() {
            return ctx.getHTML();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Get HTML\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ckeditor", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdminComponent_Template_ckeditor_ngModelChange_2_listener($event) {
            return ctx.model.editorData = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("editor", ctx.Editor)("ngModel", ctx.model.editorData);
        }
      },
      directives: [_ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_2__["CKEditorComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-admin',
          templateUrl: './admin.component.html',
          styleUrls: ['./admin.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./about-me/about-me.component */
    "./src/app/about-me/about-me.component.ts");
    /* harmony import */


    var _blog_list_blog_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./blog-list/blog-list.component */
    "./src/app/blog-list/blog-list.component.ts");
    /* harmony import */


    var _publications_publications_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./publications/publications.component */
    "./src/app/publications/publications.component.ts");
    /* harmony import */


    var _admin_admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./admin/admin.component */
    "./src/app/admin/admin.component.ts");

    var routes = [{
      path: '',
      pathMatch: 'full',
      redirectTo: 'about-me'
    }, {
      path: 'about-me',
      component: _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_2__["AboutMeComponent"]
    }, {
      path: 'blog',
      component: _blog_list_blog_list_component__WEBPACK_IMPORTED_MODULE_3__["BlogListComponent"]
    }, {
      path: 'blog/:id',
      component: _blog_list_blog_list_component__WEBPACK_IMPORTED_MODULE_3__["BlogListComponent"]
    }, {
      path: 'publications',
      component: _publications_publications_component__WEBPACK_IMPORTED_MODULE_4__["PublicationsComponent"]
    }, {
      path: 'admin',
      component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"]
    }, {
      path: '**',
      redirectTo: ''
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 4,
      vars: 0,
      consts: [[1, "container"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./about-me/about-me.component */
    "./src/app/about-me/about-me.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _blog_list_blog_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./blog-list/blog-list.component */
    "./src/app/blog-list/blog-list.component.ts");
    /* harmony import */


    var _horizontal_timeline_horizontal_timeline_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./horizontal-timeline/horizontal-timeline.component */
    "./src/app/horizontal-timeline/horizontal-timeline.component.ts");
    /* harmony import */


    var _publications_list_publications_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./publications-list/publications-list.component */
    "./src/app/publications-list/publications-list.component.ts");
    /* harmony import */


    var _current_job_current_job_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./current-job/current-job.component */
    "./src/app/current-job/current-job.component.ts");
    /* harmony import */


    var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./contacts/contacts.component */
    "./src/app/contacts/contacts.component.ts");
    /* harmony import */


    var _cv_cv_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./cv/cv.component */
    "./src/app/cv/cv.component.ts");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _cv_modal_cv_modal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./cv-modal/cv-modal.component */
    "./src/app/cv-modal/cv-modal.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ngx-bootstrap */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/esm5/ngx-bootstrap.js");
    /* harmony import */


    var _pipes_divider_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./pipes/divider.pipe */
    "./src/app/pipes/divider.pipe.ts");
    /* harmony import */


    var _pipes_order_by_position_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./pipes/order-by-position.pipe */
    "./src/app/pipes/order-by-position.pipe.ts");
    /* harmony import */


    var _publications_publications_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./publications/publications.component */
    "./src/app/publications/publications.component.ts");
    /* harmony import */


    var _publication_preview_publication_preview_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./publication-preview/publication-preview.component */
    "./src/app/publication-preview/publication-preview.component.ts");
    /* harmony import */


    var _admin_admin_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./admin/admin.component */
    "./src/app/admin/admin.component.ts");
    /* harmony import */


    var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @ckeditor/ckeditor5-angular */
    "./node_modules/@ckeditor/ckeditor5-angular/__ivy_ngcc__/fesm2015/ckeditor-ckeditor5-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_15__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__["FontAwesomeModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_25__["FormsModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_18__["ModalModule"].forRoot(), _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_24__["CKEditorModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_3__["AboutMeComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"], _blog_list_blog_list_component__WEBPACK_IMPORTED_MODULE_8__["BlogListComponent"], _publications_list_publications_list_component__WEBPACK_IMPORTED_MODULE_10__["PublicationsListComponent"], _current_job_current_job_component__WEBPACK_IMPORTED_MODULE_11__["CurrentJobComponent"], _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_12__["ContactsComponent"], _cv_cv_component__WEBPACK_IMPORTED_MODULE_13__["CvComponent"], _cv_modal_cv_modal_component__WEBPACK_IMPORTED_MODULE_16__["CvModalComponent"], _pipes_divider_pipe__WEBPACK_IMPORTED_MODULE_19__["DividerPipe"], _pipes_order_by_position_pipe__WEBPACK_IMPORTED_MODULE_20__["OrderByPositionPipe"], _publications_publications_component__WEBPACK_IMPORTED_MODULE_21__["PublicationsComponent"], _publication_preview_publication_preview_component__WEBPACK_IMPORTED_MODULE_22__["PublicationPreviewComponent"], _horizontal_timeline_horizontal_timeline_component__WEBPACK_IMPORTED_MODULE_9__["HorizontalTimelineComponent"], _admin_admin_component__WEBPACK_IMPORTED_MODULE_23__["AdminComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_15__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__["FontAwesomeModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_25__["FormsModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_18__["ModalModule"], _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_24__["CKEditorModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_3__["AboutMeComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"], _blog_list_blog_list_component__WEBPACK_IMPORTED_MODULE_8__["BlogListComponent"], _publications_list_publications_list_component__WEBPACK_IMPORTED_MODULE_10__["PublicationsListComponent"], _current_job_current_job_component__WEBPACK_IMPORTED_MODULE_11__["CurrentJobComponent"], _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_12__["ContactsComponent"], _cv_cv_component__WEBPACK_IMPORTED_MODULE_13__["CvComponent"], _cv_modal_cv_modal_component__WEBPACK_IMPORTED_MODULE_16__["CvModalComponent"], _pipes_divider_pipe__WEBPACK_IMPORTED_MODULE_19__["DividerPipe"], _pipes_order_by_position_pipe__WEBPACK_IMPORTED_MODULE_20__["OrderByPositionPipe"], _publications_publications_component__WEBPACK_IMPORTED_MODULE_21__["PublicationsComponent"], _publication_preview_publication_preview_component__WEBPACK_IMPORTED_MODULE_22__["PublicationPreviewComponent"], _horizontal_timeline_horizontal_timeline_component__WEBPACK_IMPORTED_MODULE_9__["HorizontalTimelineComponent"], _admin_admin_component__WEBPACK_IMPORTED_MODULE_23__["AdminComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_15__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__["FontAwesomeModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_25__["FormsModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_18__["ModalModule"].forRoot(), _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_24__["CKEditorModule"]],
          entryComponents: [_cv_modal_cv_modal_component__WEBPACK_IMPORTED_MODULE_16__["CvModalComponent"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/blog-list/blog-list.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/blog-list/blog-list.component.ts ***!
    \**************************************************/

  /*! exports provided: BlogListComponent */

  /***/
  function srcAppBlogListBlogListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogListComponent", function () {
      return BlogListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _horizontal_timeline_horizontal_timeline_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../horizontal-timeline/horizontal-timeline.component */
    "./src/app/horizontal-timeline/horizontal-timeline.component.ts");

    var BlogListComponent =
    /*#__PURE__*/
    function () {
      function BlogListComponent(_route, _router) {
        _classCallCheck(this, BlogListComponent);

        this._route = _route;
        this._router = _router;
        this.digital_identity = "Here is a list of my public social media, messaging and academic accounts. Feel free to contact\n  me about work, research, etc. in any of these. <br><br>\n  <h5>Academic accounts</h5>\n  <table>\n    <thead>\n      <tr>\n        <td>\n          <a href=\"https://github.com/besteves4\" target=\"_blank\" style=\"text-decoration:none;\"><img src=\"../../assets/blog_posts/20190112_digital_identity/github.svg\" height=\"40\"></a>\n          GitHub\n        </td>\n        <td>&emsp;</td>\n        <td>&emsp;</td>\n        <td>\n          <a href=\"https://orcid.org/0000-0003-0259-7560\" target=\"_blank\" style=\"text-decoration:none;\"><img src=\"../../assets/blog_posts/20190112_digital_identity/orcid.png\" height=\"40\"></a>\n          ORCID\n        </td>\n        <td>&emsp;</td>\n        <td>&emsp;</td>\n        <td>\n          <a href=\"https://www.researchgate.net/profile/Beatriz_Esteves3\" target=\"_blank\" style=\"text-decoration:none;\"><img src=\"../../assets/blog_posts/20190112_digital_identity/researchgate.png\" height=\"40\"></a>\n          ResearchGate\n        </td>\n        <td>&emsp;</td>\n        <td>&emsp;</td>\n        <td>\n          <a href=\"https://www.slideshare.net/BeatrizEsteves23\" target=\"_blank\" style=\"text-decoration:none;\"><img src=\"../../assets/blog_posts/20190112_digital_identity/slideshare-9-569417.png\" height=\"40\"></a>\n          Slideshare\n        </td>\n      </tr>\n    </thead>\n  </table>\n  <br>\n  <h5>Social media</h5>\n  <table>\n    <thead>\n      <tr>\n        <td>\n          <a href=\"https://www.linkedin.com/in/beatriz-esteves-032249156/\" target=\"_blank\" style=\"text-decoration:none;\"><img src=\"../../assets/blog_posts/20190112_digital_identity/Linkedin_icon.svg\" height=\"40\"></a>\n          LinkedIn\n        </td>\n        <td>&emsp;</td>\n        <td>&emsp;</td>\n        <td>\n          <a href=\"https://twitter.com/b_esteves4\" target=\"_blank\" style=\"text-decoration:none;\"><img src=\"../../assets/blog_posts/20190112_digital_identity/Twitter-icon.png-300x300-1.png\" height=\"40\"></a>\n          Twitter\n        </td>\n      </tr>\n    </thead>\n  </table>\n  <br>\n  <h5>Messaging</h5>\n  <table>\n    <thead>\n      <tr>\n        <td>\n          <a href=\"skype:b.esteves4?add\" target=\"_blank\" style=\"text-decoration:none;\"><img src=\"../../assets/blog_posts/20190112_digital_identity/skype.png\" height=\"40\"></a>\n          Skype\n        </td>\n        <td>&emsp;</td>\n        <td>&emsp;</td>\n        <td>\n          <a href=\"https://t.me/besteves4\" target=\"_blank\" style=\"text-decoration:none;\"><img src=\"../../assets/blog_posts/20190112_digital_identity/media+social+telegram+icon.png\" height=\"40\"></a>\n          <span>Telegram</span>\n        </td>\n      </tr>\n    </thead>\n  </table>\n  <br>";
        this.protect_h2020 = "PROTECT is a <a href=\"https://ec.europa.eu/programmes/horizon2020/en/what-horizon-2020\" target=\"_blank\">H2020</a> \n  <a href=\"https://ec.europa.eu/programmes/horizon2020/en/h2020-section/marie-sklodowska-curie-actions\" target=\"_blank\">Marie \n  Sk\u0142odowska-Curie Action (MSCA)</a> European Training Network (ETN) with the aim of developing \n  new ways of empowering users of digital services to understand the risks they take when they go online and offering new \n  tools that enable companies to incorporate data protection into their digital services.\n  <br><br>\n  Here it is a list of PROTECT's social media accounts so you can check what the Early Stage Researchers (ESRs) have \n  been up to lately.\n  <br><br>\n  <table>\n    <thead>\n      <tr>\n        <td>\n          <a href=\"https://protect-network.eu/\" target=\"_blank\" style=\"text-decoration:none;\"><img src=\"../../assets/blog_posts/20200801_protect_h2020/logo_protect.png\" height=\"40\"></a>\n          Webpage\n        </td>\n        <td>&emsp;</td>\n        <td>&emsp;</td>\n        <td>\n          <a href=\"https://www.researchgate.net/project/PROTECT-AI-data-governance-research-network\" target=\"_blank\" style=\"text-decoration:none;\"><img src=\"../../assets/blog_posts/20200801_protect_h2020/researchgate.png\" height=\"40\"></a>\n          ResearchGate\n        </td>\n        <td>&emsp;</td>\n        <td>&emsp;</td>\n        <td>\n          <a href=\"https://twitter.com/ItnProtect\" target=\"_blank\" style=\"text-decoration:none;\"><img src=\"../../assets/blog_posts/20200801_protect_h2020/Twitter-icon.png-300x300-1.png\" height=\"40\"></a>\n          Twitter\n        </td>\n        <td>&emsp;</td>\n        <td>&emsp;</td>\n        <td>\n          <a href=\"https://www.linkedin.com/company/protect-ai-data-governance-research-network/\" target=\"_blank\" style=\"text-decoration:none;\"><img src=\"../../assets/blog_posts/20200801_protect_h2020/Linkedin_icon.svg\" height=\"40\"></a>\n          LinkedIn\n        </td>\n        <td>&emsp;</td>\n        <td>&emsp;</td>\n        <td>\n          <a href=\"https://www.instagram.com/itnprotect/\" target=\"_blank\" style=\"text-decoration:none;\"><img src=\"../../assets/blog_posts/20200801_protect_h2020/Instagram-Icon.png\" height=\"40\"></a>\n          Instagram\n        </td>\n      </tr>\n    </thead>\n  </table>\n  <br><br>\n  I am ESR 8 and I am working at <a href=\"https://www.upm.es/\" target=\"_blank\">Universidad Polit\xE9cnica \n  de Madrid</a> under the supervision of <a href=\"http://cosasbuenas.es/\" target=\"_blank\">Prof. V\xEDctor Rodr\xEDguez Doncel</a>.\n  My research topic is included in PROTECT's Work Package 1 on the 'Privacy Paradigm'.\n  The main objective of Work Package 1 is to build a Privacy Paradigm standard for the establishment of human-readable \n  and machine-readable privacy policies.\n  This standard is intended to support data controllers in the fulfillment of their obligations established by the \n  <a href=\"https://gdpr-info.eu/\" target=\"_blank\">General Data Protection Regulation (GDPR)</a>, especially the obligation to \n  inform data subjects about their personal data processing activities in terms that can be understood by all.\n\n  <br><br>\n  My specific research topic is directed at the digital representation of privacy terms, where I will be focusing on the \n  implementation of policies for the governance of access to health and genetic data using \n  <a href=\"https://www.w3.org/standards/semanticweb/\" target=\"_blank\">Semantic Web</a> standards and specifications.\n  With these policies, I hope to implement a data governance service that can assist:<br>\n  - data subjects in the management of access to their own data;<br>\n  - data controllers and data subjects in the negotiation of privacy policies;<br>\n  - data controllers and data subjects in the management of their GDPR rights and obligations.\n  <br><br><br><br>\n  <img src=\"../../assets/blog_posts/20200801_protect_h2020/research schema.png\" width=\"800\">";
        this.timeline = [{
          id: 'digital_identity',
          caption: 'Digital Identity',
          date: new Date(2019, 1, 12),
          selected: false,
          title: 'Digital Identity',
          content: this.digital_identity
        }, {
          id: 'protect_h2020',
          caption: 'About PROTECT',
          date: new Date(2020, 8, 1),
          selected: true,
          title: 'About PROTECT',
          content: this.protect_h2020
        }];
      }

      _createClass(BlogListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this._route.params.subscribe(function (value) {
            if (!!value.id) {
              _this.timeline.forEach(function (t) {
                t.id == value.id ? t.selected = true : t.selected = false;
              });
            } else {
              var id = _this.timeline.find(function (t) {
                return t.selected;
              }).id;

              _this._router.navigate(["./".concat(id)], {
                relativeTo: _this._route
              });
            }
          });
        }
      }]);

      return BlogListComponent;
    }();

    BlogListComponent.ɵfac = function BlogListComponent_Factory(t) {
      return new (t || BlogListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    BlogListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BlogListComponent,
      selectors: [["app-blog-list"]],
      decls: 1,
      vars: 2,
      consts: [[3, "timelineElements", "showContent"]],
      template: function BlogListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "horizontal-timeline", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("timelineElements", ctx.timeline)("showContent", true);
        }
      },
      directives: [_horizontal_timeline_horizontal_timeline_component__WEBPACK_IMPORTED_MODULE_2__["HorizontalTimelineComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2ctbGlzdC9ibG9nLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-blog-list',
          templateUrl: './blog-list.component.html',
          styleUrls: ['./blog-list.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/contacts/contacts.component.ts":
  /*!************************************************!*\
    !*** ./src/app/contacts/contacts.component.ts ***!
    \************************************************/

  /*! exports provided: ContactsComponent */

  /***/
  function srcAppContactsContactsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactsComponent", function () {
      return ContactsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @fortawesome/free-regular-svg-icons */
    "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
    /* harmony import */


    var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @fortawesome/free-brands-svg-icons */
    "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");

    function ContactsComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactsComponent_div_3_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);

          var item_r31 = ctx.$implicit;

          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r32.handleClick(item_r31.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "fa-icon", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r31 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", item_r31.icon);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r31.title, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", item_r31.href, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", item_r31.id);
      }
    }

    var ContactsComponent =
    /*#__PURE__*/
    function () {
      function ContactsComponent() {
        _classCallCheck(this, ContactsComponent);

        this.faEnvelope = _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faEnvelope"];
        this.faSkype = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faSkype"];
        this.faLinkedin = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faLinkedin"];
        this.faShareAltSquare = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faShareAltSquare"];
        this.contacts = {
          title: 'Contacts',
          list: [{
            id: 'email1',
            icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faEnvelope"],
            title: 'beatriz.gc.esteves@gmail.com',
            href: 'mailto:beatriz.gc.esteves@gmail.com'
          }, {
            id: 'email2',
            icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faEnvelope"],
            title: 'beatriz.gesteves@upm.es',
            href: 'mailto:beatriz.gesteves@upm.es'
          }, {
            id: 'linkedin',
            icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faLinkedin"],
            title: '/in/beatriz-esteves',
            href: 'https://www.linkedin.com/in/beatriz-esteves-032249156/'
          }, {
            id: 'socialNetworks',
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faShareAltSquare"],
            title: 'More of me on the web',
            href: '/blog/digital_identity'
          }]
        };
      }

      _createClass(ContactsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "handleClick",
        value: function handleClick(id) {
          document.getElementById(id).click();
        }
      }]);

      return ContactsComponent;
    }();

    ContactsComponent.ɵfac = function ContactsComponent_Factory(t) {
      return new (t || ContactsComponent)();
    };

    ContactsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactsComponent,
      selectors: [["app-contacts"]],
      decls: 4,
      vars: 2,
      consts: [[1, "list-group", "list-group-flush"], ["class", "list-group-item item clickable", 3, "click", 4, "ngFor", "ngForOf"], [1, "list-group-item", "item", "clickable", 3, "click"], [1, "icon-box", "mr-3"], [3, "icon"], [1, "button-text"], ["target", "_blank", 3, "href", "id"]],
      template: function ContactsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ContactsComponent_div_3_Template, 6, 4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.contacts.title, "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.contacts.list);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FaIconComponent"]],
      styles: ["fa-icon[_ngcontent-%COMP%] {\r\n    font-size: 50px;\r\n    color: #1abc9c;\r\n}\r\n\r\n.item[_ngcontent-%COMP%] {\r\n    height: 100px;\r\n}\r\n\r\n.icon-box[_ngcontent-%COMP%] {\r\n    width: 60px;\r\n    text-align: center;\r\n    display: inline-block;\r\n}\r\n\r\n.button-text[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 39px;\r\n    font-weight: 500;\r\n    font-size: 16px;\r\n    color: black;\r\n}\r\n\r\n.item[_ngcontent-%COMP%]:hover {\r\n    box-shadow: 10px 10px 5px 0px rgba(26, 188, 156, 1);\r\n    background-color: #dbfaf4;\r\n    z-index: 100;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdHMvY29udGFjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFHSSxtREFBbUQ7SUFDbkQseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0cy9jb250YWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZmEtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICBjb2xvcjogIzFhYmM5YztcclxufVxyXG5cclxuLml0ZW0ge1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxufVxyXG5cclxuLmljb24tYm94IHtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uYnV0dG9uLXRleHQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAzOXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLml0ZW06aG92ZXIge1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxMHB4IDEwcHggNXB4IDBweCByZ2JhKDI2LCAxODgsIDE1NiwgMSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDEwcHggMTBweCA1cHggMHB4IHJnYmEoMjYsIDE4OCwgMTU2LCAxKTtcclxuICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCA1cHggMHB4IHJnYmEoMjYsIDE4OCwgMTU2LCAxKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYmZhZjQ7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contacts',
          templateUrl: './contacts.component.html',
          styleUrls: ['./contacts.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/current-job/current-job.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/current-job/current-job.component.ts ***!
    \******************************************************/

  /*! exports provided: CurrentJobComponent */

  /***/
  function srcAppCurrentJobCurrentJobComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CurrentJobComponent", function () {
      return CurrentJobComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function CurrentJobComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CurrentJobComponent_div_3_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

          var item_r27 = ctx.$implicit;

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r28.handleClick(item_r27.id);
        });

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
      }

      if (rf & 2) {
        var item_r27 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r27.imageSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r27.title, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", item_r27.href, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", item_r27.id);
      }
    }

    var CurrentJobComponent =
    /*#__PURE__*/
    function () {
      function CurrentJobComponent() {
        _classCallCheck(this, CurrentJobComponent);

        this.job = {
          position: 'PhD Student',
          employer: [{
            id: 'oeg',
            imageSrc: '../../assets/logooeg.png',
            title: 'D3206 - Ontology Engineering Group',
            href: 'http://www.oeg-upm.net/'
          }, {
            id: 'dia',
            imageSrc: '../../assets/logo_DIA.png',
            title: 'Artificial Intelligence Department',
            href: 'http://www.dia.fi.upm.es/'
          }, {
            id: 'ets',
            imageSrc: '../../assets/etsiinf.jfif',
            title: 'ETS de Ingenieros Informáticos - Campus de Montegancedo s/n',
            href: 'http://www.fi.upm.es/'
          }, {
            id: 'upm',
            imageSrc: '../../assets/uni.jpg',
            title: 'Universidad Politécnica de Madrid',
            href: 'https://www.upm.es/'
          }]
        };
      }

      _createClass(CurrentJobComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "handleClick",
        value: function handleClick(id) {
          document.getElementById(id).click();
        }
      }]);

      return CurrentJobComponent;
    }();

    CurrentJobComponent.ɵfac = function CurrentJobComponent_Factory(t) {
      return new (t || CurrentJobComponent)();
    };

    CurrentJobComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CurrentJobComponent,
      selectors: [["app-current-job"]],
      decls: 4,
      vars: 2,
      consts: [[1, "list-group", "list-group-flush"], ["class", "list-group-item item clickable", 3, "click", 4, "ngFor", "ngForOf"], [1, "list-group-item", "item", "clickable", 3, "click"], [1, "float-right", "img-wrapper"], ["alt", "", 3, "src"], [1, "text-wrapper"], [1, "button-text"], ["target", "_blank", 3, "href", "id"]],
      template: function CurrentJobComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CurrentJobComponent_div_3_Template, 7, 4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.job.position, "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.job.employer);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      styles: [".item[_ngcontent-%COMP%] {\r\n    height: 100px;\r\n}\r\n\r\n.img-wrapper[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    width: 135px;\r\n    background-color: white;\r\n}\r\n\r\n.item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    display: block;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n}\r\n\r\n.text-wrapper[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n}\r\n\r\n.button-text[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 30px;\r\n    font-weight: 500;\r\n    font-size: 16px;\r\n    color: black;\r\n    max-width: 250px;\r\n}\r\n\r\n.item[_ngcontent-%COMP%]:hover {\r\n    box-shadow: 10px 10px 5px 0px rgba(26, 188, 156, 1);\r\n    background-color: #dbfaf4;\r\n    z-index: 100;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VycmVudC1qb2IvY3VycmVudC1qb2IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFHSSxtREFBbUQ7SUFDbkQseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jdXJyZW50LWpvYi9jdXJyZW50LWpvYi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5pdGVtIHtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbn1cclxuXHJcbi5pbWctd3JhcHBlciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTM1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLml0ZW0gaW1nIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbn1cclxuXHJcbi50ZXh0LXdyYXBwZXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uYnV0dG9uLXRleHQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAzMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIG1heC13aWR0aDogMjUwcHg7XHJcbn1cclxuXHJcbi5pdGVtOmhvdmVyIHtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMTBweCAxMHB4IDVweCAwcHggcmdiYSgyNiwgMTg4LCAxNTYsIDEpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAxMHB4IDEwcHggNXB4IDBweCByZ2JhKDI2LCAxODgsIDE1NiwgMSk7XHJcbiAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggNXB4IDBweCByZ2JhKDI2LCAxODgsIDE1NiwgMSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGJmYWY0O1xyXG4gICAgei1pbmRleDogMTAwO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CurrentJobComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-current-job',
          templateUrl: './current-job.component.html',
          styleUrls: ['./current-job.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/cv-modal/cv-modal.component.ts":
  /*!************************************************!*\
    !*** ./src/app/cv-modal/cv-modal.component.ts ***!
    \************************************************/

  /*! exports provided: CvModalComponent */

  /***/
  function srcAppCvModalCvModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CvModalComponent", function () {
      return CvModalComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-bootstrap */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/esm5/ngx-bootstrap.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _pipes_divider_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../pipes/divider.pipe */
    "./src/app/pipes/divider.pipe.ts");

    var _c0 = ["cvModal"];

    function CvModalComponent_div_18_p_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var desc_r50 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", desc_r50, " ");
      }
    }

    function CvModalComponent_div_18_p_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Technologies:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var proj_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", proj_r47.technologies, " ");
      }
    }

    function CvModalComponent_div_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "fa-icon", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CvModalComponent_div_18_p_4_Template, 2, 1, "p", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CvModalComponent_div_18_p_5_Template, 4, 1, "p", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var proj_r47 = ctx.$implicit;

        var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r35.faCheck);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", proj_r47.title, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", proj_r47 == null ? null : proj_r47.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", proj_r47.technologies.length != 0);
      }
    }

    function CvModalComponent_fa_icon_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "fa-icon", 28);
      }

      if (rf & 2) {
        var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r36.faGraduationCap);
      }
    }

    function CvModalComponent_h2_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Education ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CvModalComponent_p_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var cert_r52 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", cert_r52, " ");
      }
    }

    function CvModalComponent_fa_icon_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "fa-icon", 28);
      }

      if (rf & 2) {
        var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r39.faCalendarAlt);
      }
    }

    function CvModalComponent_h2_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Events ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CvModalComponent_p_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var event_r53 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", event_r53, " ");
      }
    }

    function CvModalComponent_fa_icon_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "fa-icon", 28);
      }

      if (rf & 2) {
        var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r42.faCog);
      }
    }

    function CvModalComponent_h2_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Skills ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CvModalComponent_fa_icon_35_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "fa-icon", 28);
      }

      if (rf & 2) {
        var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r44.faLaptopCode);
      }
    }

    function CvModalComponent_h2_36_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Technologies ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CvModalComponent_div_37_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tech_r54 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tech_r54.type, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 2, tech_r54.elements, " / "), " ");
      }
    }

    var CvModalComponent =
    /*#__PURE__*/
    function () {
      function CvModalComponent() {
        _classCallCheck(this, CvModalComponent);

        this.faLaptopCode = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faLaptopCode"];
        this.faGraduationCap = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faGraduationCap"];
        this.faCog = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCog"];
        this.faCheck = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCheck"];
        this.faCalendarAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCalendarAlt"];
      }

      _createClass(CvModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "show",
        value: function show() {
          this.modal.show();
        }
      }]);

      return CvModalComponent;
    }();

    CvModalComponent.ɵfac = function CvModalComponent_Factory(t) {
      return new (t || CvModalComponent)();
    };

    CvModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CvModalComponent,
      selectors: [["app-cv-modal"]],
      viewQuery: function CvModalComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.modal = _t.first);
        }
      },
      inputs: {
        job: "job"
      },
      decls: 38,
      vars: 19,
      consts: [["bsModal", "", "tabindex", "-1", "role", "dialog", "aria-labelledby", "dialog-nested-name1", 1, "modal", "fade"], ["cvModal", "bs-modal"], [1, "modal-dialog", "modal-xl"], [1, "modal-content"], [1, "modal-body"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "row", "border-between"], [1, "col-8"], [1, "row", "pr-2"], [1, "col-12"], [1, "chapter-title", "mb-2"], ["alt", "", "width", "60", 1, "mr-2", 3, "src"], [1, "dates-title", "mb-2"], ["class", "col-12", 4, "ngFor", "ngForOf"], [1, "col-4"], [1, "row", "mb-4", "pl-3"], ["class", "mr-3", "style", "font-size: 40px; color: #00000099;", 3, "icon", 4, "ngIf"], ["class", "chapter-title mb-4 pt-3", 4, "ngIf"], ["class", "right-col-text mb-1 pl-4", 4, "ngFor", "ngForOf"], [1, "right-col-text", "pl-4"], [1, "row", "pl-3"], [1, "title", "proj-title", "mb-0"], [3, "icon"], ["class", "proj-text mb-1 pl-4", 4, "ngFor", "ngForOf"], ["class", "proj-text mb-1 pl-4", 4, "ngIf"], [1, "proj-text", "mb-1", "pl-4"], [2, "font-weight", "500", "color", "black"], [1, "mr-3", 2, "font-size", "40px", "color", "#00000099", 3, "icon"], [1, "chapter-title", "mb-4", "pt-3"], [1, "right-col-text", "mb-1", "pl-4"], [1, "title", "tech-title", "pl-4", "mb-0"]],
      template: function CvModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvModalComponent_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);

            var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

            return _r34.hide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\xD7");

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
        }

        if (rf & 2) {
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
        }
      },
      directives: [ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FaIconComponent"]],
      pipes: [_pipes_divider_pipe__WEBPACK_IMPORTED_MODULE_5__["DividerPipe"]],
      styles: [".border-between[_ngcontent-%COMP%] > [class*='col-'][_ngcontent-%COMP%]:before {\r\n    background: #e3e3e3;\r\n    bottom: 0;\r\n    content: \" \";\r\n    left: 0;\r\n    position: absolute;\r\n    width: 1px;\r\n    top: 0;\r\n}\r\n\r\n.border-between[_ngcontent-%COMP%] > [class*='col-'][_ngcontent-%COMP%]:first-child:before {\r\n    display: none;\r\n}\r\n\r\n.modal-body[_ngcontent-%COMP%] {\r\n    padding: 2rem;\r\n}\r\n\r\n.chapter-title[_ngcontent-%COMP%] {\r\n    font-variant: small-caps;\r\n    font-size: 20px;\r\n    font-weight: 700;\r\n    color: #00000099;\r\n}\r\n\r\n.dates-title[_ngcontent-%COMP%] {\r\n    font-size: 15px;\r\n    font-weight: 700;\r\n    color: #00000099;\r\n    text-align: right;\r\n    font-variant: small-caps;\r\n}\r\n\r\n.right-col-text[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    color: gray;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n    text-align: justify;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n    font-variant: small-caps;\r\n    color: #1abc9c;\r\n    font-weight: 600;\r\n    font-size: 18px;\r\n}\r\n\r\n.tech-title[_ngcontent-%COMP%] {\r\n    font-size: 15px;\r\n}\r\n\r\n.proj-text[_ngcontent-%COMP%] {\r\n    color: gray;\r\n    font-size: 15px;\r\n    font-family: monospace;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3YtbW9kYWwvY3YtbW9kYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsWUFBWTtJQUNaLE9BQU87SUFDUCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLE1BQU07QUFDVjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvY3YtbW9kYWwvY3YtbW9kYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3JkZXItYmV0d2Vlbj5bY2xhc3MqPSdjb2wtJ106YmVmb3JlIHtcclxuICAgIGJhY2tncm91bmQ6ICNlM2UzZTM7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBjb250ZW50OiBcIiBcIjtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMXB4O1xyXG4gICAgdG9wOiAwO1xyXG59XHJcblxyXG4uYm9yZGVyLWJldHdlZW4+W2NsYXNzKj0nY29sLSddOmZpcnN0LWNoaWxkOmJlZm9yZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4ubW9kYWwtYm9keSB7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG59XHJcblxyXG4uY2hhcHRlci10aXRsZSB7XHJcbiAgICBmb250LXZhcmlhbnQ6IHNtYWxsLWNhcHM7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6ICMwMDAwMDA5OTtcclxufVxyXG5cclxuLmRhdGVzLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogIzAwMDAwMDk5O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBmb250LXZhcmlhbnQ6IHNtYWxsLWNhcHM7XHJcbn1cclxuXHJcbi5yaWdodC1jb2wtdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogZ3JheTtcclxufVxyXG5cclxucCB7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gICAgZm9udC12YXJpYW50OiBzbWFsbC1jYXBzO1xyXG4gICAgY29sb3I6ICMxYWJjOWM7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4udGVjaC10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbi5wcm9qLXRleHQge1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CvModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-cv-modal',
          templateUrl: './cv-modal.component.html',
          styleUrls: ['./cv-modal.component.css']
        }]
      }], function () {
        return [];
      }, {
        job: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        modal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['cvModal', {
            "static": false
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/cv/cv.component.ts":
  /*!************************************!*\
    !*** ./src/app/cv/cv.component.ts ***!
    \************************************/

  /*! exports provided: CvComponent */

  /***/
  function srcAppCvCvComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CvComponent", function () {
      return CvComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _cv_modal_cv_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../cv-modal/cv-modal.component */
    "./src/app/cv-modal/cv-modal.component.ts");
    /* harmony import */


    var _pipes_order_by_position_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../pipes/order-by-position.pipe */
    "./src/app/pipes/order-by-position.pipe.ts");

    var _c0 = ["cvModal"];

    function CvComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvComponent_div_5_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r60);

          var job_r58 = ctx.$implicit;

          var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r59.handleClick(job_r58);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var job_r58 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", job_r58.thumbnail, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", job_r58.company, " ");
      }
    }

    var CvComponent =
    /*#__PURE__*/
    function () {
      function CvComponent() {
        _classCallCheck(this, CvComponent);

        this.cv_pdf = '/assets/cv/CV Beatriz Esteves.pdf';
        this.cv = [{
          position: 1,
          company: 'Early Stage Researcher in PROTECT Project',
          thumbnail: '/assets/logo_protect.png',
          dates: 'January/2020 - Present',
          projects: [{
            title: "Contributions to PROTECT's Work Package 1 (WP1) - Privacy Paradigm",
            description: ["Co-author of the deliverable 'D1.1 - Privacy Paradigm Initial Case Studies and Literature Review'"],
            technologies: ''
          }, {
            title: "Contributions to PROTECT's Work Package 5 (WP5) - Communication, Dissemination & Exploitation",
            description: ["Content manager of PROTECT's webpage: https://protect-network.eu/"],
            technologies: 'WordPress, HTML'
          }
          /* ,
          {
            title: `1st PROTECT Training School`,
            description: [
                ""
            ],
            technologies: ''
          } */
          ],
          certifications: [],
          events: [],
          skills: [],
          technologies: [
            /*                 {
                                type: "database",
                                elements: []
                            },
                            {
                                type: "tools",
                                elements: [
                                    "Microsoft Office",
                                    "WordPress"
                                ]
                            },
                            {
                                type: "development",
                                elements: [
                                    "HTML"
                                ]
                            } */
          ]
        }, {
          position: 2,
          company: 'PhD in Artificial Intelligence',
          thumbnail: '/assets/uni.jpg',
          dates: 'January/2020 - Present',
          projects: [{
            title: 'Collaboration / Participation in W3C Community Groups (CG)',
            description: ['- Data Privacy Vocabularies and Controls CG (DPV CG)', '- Open Digital Rights Language CG (ODRL CG)'
            /* `Data Privacy Vocabularies and Controls CG (DPVCG): contribution by writing in the Data Privacy
            Vocabulary (DPV) primer` */
            ],
            technologies: '' //'Google Docs'

          }
          /**,
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
        }, {
          position: 3,
          company: 'Data Scientist at CLOSER CONSULTING',
          thumbnail: '/assets/logo_closer.png',
          dates: 'July/2018 - December/2019',
          projects: [{
            title: 'Data Scientist / Analyst in BNP Paribas CIB – Global Markets Resources',
            description: ["Development of tools to analyze and explain large amounts of data related to the balance sheet and other financial resources", "Implementation of predictive models that explain seasonal variations of data linked to financial resources with specific focus on balance sheet metrics", "Predict the evolution of metrics linked to banking regulation based on financial market data", "Implement Shiny R interactive dashboards to monitor resources and detect errors in databases systems", "Implementation of a G-SIB indicators’ pricing model for derivative transactions and respective user interface", "Development of the prudential netting key and respective allocation logic for SFTs (Securities Financing Transactions) balance sheet computation", "Demonstration of built-in tool features and how to use them"],
            technologies: 'R (Shiny, tidyverse, plotly, datatable), Python (pandas, numpy, plotly), C#, VBA, TortoiseSVN'
          }],
          certifications: [],
          events: [],
          skills: ["Data preparation", "Time series modelling", "Vector autoregression (VAR)", "Data quality", "Version control", "Software architecture", "Data reconciliation between systems", "Creation and management of databases", "Error detection", "Reporting", "Dashboard design", "Big Data technologies", "Financial resources"],
          technologies: [{
            type: "database",
            elements: ["MySQL", "PostgreSQL"]
          }, {
            type: "tools",
            elements: ["Microsoft Office", "PyCharm", "TortoiseSVN", "RStudio", "Microsoft Visual Studio"]
          }, {
            type: "development",
            elements: ["Python", "R", "C#", "VBA"]
          }]
        }, {
          position: 4,
          company: 'Jr. Consultant at ALTRAN',
          thumbnail: '/assets/logo_altran.png',
          dates: 'October/2017 - June/2018',
          projects: [{
            title: 'Pedestrian Detection using Convolutional Neural Networks (CNN)',
            description: ["Research and selection of methods of object detection in images with the aim of implementing a pedestrian detection model in the context of autonomous driving", "Improvement of the training sets' data quality and parameter tuning of the training process of neural network models"],
            technologies: 'Python (TensorFlow, OpenCV, Matplotlib, Seaborn, Bokeh, Plotly, nxviz), GitLab'
          }, {
            title: 'Technical Writing Support to P2020 Projects',
            description: ["Collaboration in the technical writing of projects in the area of information technologies for application to the Portugal 2020 (P2020) financing program"],
            technologies: 'Microsoft Office'
          }],
          certifications: ["Training in Big Data & Analytics Technologies - Altran Portugal in partnership with NOVA LINCS – FCT"],
          events: ["Participant in the Portugal eHealth Summit event", "Demonstrator in the Altran Open Day event"],
          skills: ["Feature extraction / selection techniques", "Data mining", "Data preparation", "Machine learning algorithms", "Convolutional Neural Networks (CNN)", "Hyperparameter tuning", "Data quality", "Version control", "Reporting", "Big Data technologies"],
          technologies: [{
            type: "database",
            elements: ["MySQL", "PostgreSQL"]
          }, {
            type: "tools",
            elements: ["Microsoft Office", "GitLab", "PyCharm", "Tableau", "RStudio"]
          }, {
            type: "development",
            elements: ["Python", "R"]
          }]
        }, {
          position: 5,
          company: 'Integrated Master in Biomedical Engineering',
          thumbnail: '/assets/logo_fct.gif',
          dates: 'September/2011 - November/2017',
          projects: [{
            title: 'Master thesis: Personality Assessment based on Biosignals during a Decision-making Task',
            description: ['State of the art review on biosignal monitoring, personality assessment and assessment of decision making behaviour', 'Implementation of processing algorithms for the electrocardiogram, electrodermal activity, blood volume pulse and pupillometry', 'Extraction and computation of relevant features from the biosignals', 'Implementation of feature selection techniques', 'Implementation of a predictive model of human personality based on the significant features extracted from the studied biosignals'],
            technologies: 'Python (pandas, scikit-learn, seaborn, numpy, matplotlib, scipy), GitHub, LaTeX, Excel'
          }, {
            title: 'Bachelor project: Characterization and Comparison of Lyophilised Gelatin Matrices',
            description: ["Study and comparison of matrices of different crosslinking agents, based on the analysis of the matrices' water absorption capacity, mechanical resistance, porosity, among others, and tests on the cell's behavior in relation to these three-dimensional porous supports"],
            technologies: 'Excel'
          }, {
            title: 'Relevant Courses',
            description: ["Biomedical Engineering: Biophysics, Biomechanics and Hemodynamics, Analogical and Digital Instrumentation, Medical Imaging Methods, Medical Information Systems, Electrophysiology, Imagiology", "Physics: Mechanics, Electromagnetism, Quantum Mechanics, Nuclear, Atomic and Molecular Physics", "Mathematics: Mathematical Analysis, Linear Algebra, Probability and Statistics, Operations Research", "Computer Engineering: Electronics, Signal Analysis, Sensorial Systems", "Medicine: Anatomy, Physiology, Pathophysiology"],
            technologies: 'MatLab, HTML, PHP, MySQL, Python, C / C++ / C#, Java'
          }],
          certifications: ["Bachelor's Degree in Biomedical Engineering - FCT NOVA", "Master's Degree in Biomedical Engineering - FCT NOVA"],
          events: ["Participant in the Technological Journeys (Jortec) of Biomedical Engineering"],
          skills: ["Signal processing", "Image processing", "Physiological data modeling", "Feature extraction / selection techniques", "Machine learning algorithms", "Hyperparameter tuning", "Data quality", "Tissue engineering", "Medical imaging", "Creation and management of databases", "Intrumentation", "Decision theory", "Queueing theory", "Decision support systems", "Data analysis tools", "Object oriented programming"],
          technologies: [{
            type: "database",
            elements: ["MySQL"]
          }, {
            type: "tools",
            elements: ["LaTeX", "Microsoft Office", "GitHub", "PyCharm", "Microsoft Visual Studio"]
          }, {
            type: "development",
            elements: ["Python", "C / C# / C++", "MatLab", " HTML / PHP", "Java"]
          }]
        }];
      }

      _createClass(CvComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "handleClick",
        value: function handleClick(job) {
          this.activeJob = job;
          this.cvModal.show();
        }
      }]);

      return CvComponent;
    }();

    CvComponent.ɵfac = function CvComponent_Factory(t) {
      return new (t || CvComponent)();
    };

    CvComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CvComponent,
      selectors: [["app-cv"]],
      viewQuery: function CvComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.cvModal = _t.first);
        }
      },
      decls: 9,
      vars: 5,
      consts: [[1, "row", "mt-5"], ["role", "button", "target", "_blank", 1, "btn", "btn-lg", "btn-block", "cv-button", 3, "href"], [1, "row", "border-between", "mt-3"], [1, "col-10", "offset-1", "card-group"], ["class", "card clickable w-100", 3, "click", 4, "ngFor", "ngForOf"], [3, "job"], ["cvModal", ""], [1, "card", "clickable", "w-100", 3, "click"], [1, "img-box"], ["alt", "", 1, "card-img-top", 3, "src"], [1, "card-body"]],
      template: function CvComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Curriculum Vitae");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CvComponent_div_5_Template, 5, 2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "orderByPosition");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-cv-modal", 5, 6);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.cv_pdf, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 3, ctx.cv));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("job", ctx.activeJob);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _cv_modal_cv_modal_component__WEBPACK_IMPORTED_MODULE_2__["CvModalComponent"]],
      pipes: [_pipes_order_by_position_pipe__WEBPACK_IMPORTED_MODULE_3__["OrderByPositionPipe"]],
      styles: [".card[_ngcontent-%COMP%] {\r\n    padding: 0.5rem;\r\n    border-bottom: none;\r\n    border-top: none;\r\n    border-radius: none;\r\n        \r\n}\r\n\r\n.card[_ngcontent-%COMP%]:hover {\r\n    font-size: 15px;\r\n    box-shadow: 10px 10px 5px 0px rgba(26, 188, 156, 1);\r\n    background-color: #dbfaf4;\r\n    z-index: 100;\r\n}\r\n\r\n.card-body[_ngcontent-%COMP%] {\r\n    padding: 0.5rem 0.5rem 0 0.5rem;\r\n    text-align: center;\r\n    font-size: 13px;\r\n}\r\n\r\n.img-box[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 50%;\r\n    margin: 0.5rem auto 0.5rem auto;\r\n    padding-top: 50%;\r\n}\r\n\r\n.card-img-top[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n    right: 0;\r\n    width: 100%;\r\n}\r\n\r\n.cv-button[_ngcontent-%COMP%] {\r\n    background-color: #dbfaf4;\r\n    color: black;\r\n}\r\n\r\n.cv-button[_ngcontent-%COMP%]:hover {\r\n    background-color: #1abc9c;\r\n    color: black;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3YvY3YuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjs7QUFFdkI7O0FBRUE7SUFDSSxlQUFlO0lBR2YsbURBQW1EO0lBQ25ELHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDViwrQkFBK0I7SUFDL0IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFLUiwyQkFBMkI7SUFDM0IsUUFBUTtJQUNSLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jdi9jdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgIGJvcmRlci10b3A6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiBub25lO1xyXG4gICAgICAgIFxyXG59XHJcblxyXG4uY2FyZDpob3ZlciB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDEwcHggMTBweCA1cHggMHB4IHJnYmEoMjYsIDE4OCwgMTU2LCAxKTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMTBweCAxMHB4IDVweCAwcHggcmdiYSgyNiwgMTg4LCAxNTYsIDEpO1xyXG4gICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDVweCAwcHggcmdiYSgyNiwgMTg4LCAxNTYsIDEpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RiZmFmNDtcclxuICAgIHotaW5kZXg6IDEwMDtcclxufVxyXG5cclxuLmNhcmQtYm9keSB7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gMC41cmVtIDAgMC41cmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcblxyXG4uaW1nLWJveCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luOiAwLjVyZW0gYXV0byAwLjVyZW0gYXV0bztcclxuICAgIHBhZGRpbmctdG9wOiA1MCU7XHJcbn1cclxuXHJcbi5jYXJkLWltZy10b3Age1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jdi1idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RiZmFmNDtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmN2LWJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWFiYzljO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CvComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-cv',
          templateUrl: './cv.component.html',
          styleUrls: ['./cv.component.css']
        }]
      }], function () {
        return [];
      }, {
        cvModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['cvModal', {
            "static": false
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 3,
      vars: 0,
      consts: [[1, "w-100", "box"], [1, "title"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Beatriz Esteves ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".box[_ngcontent-%COMP%] {\r\n    background-color: #1abc9c;\r\n    color: white;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-size: 60px;\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n    margin-bottom: 0px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJveCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWFiYzljO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiA2MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/horizontal-timeline/horizontal-timeline.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/horizontal-timeline/horizontal-timeline.component.ts ***!
    \**********************************************************************/

  /*! exports provided: HorizontalTimelineComponent */

  /***/
  function srcAppHorizontalTimelineHorizontalTimelineComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HorizontalTimelineComponent", function () {
      return HorizontalTimelineComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["eventsWrapper"];
    var _c1 = ["fillingLine"];
    var _c2 = ["timelineEvents"];

    var _c3 = function _c3(a0, a1) {
      return {
        "selected": a0,
        "older-event": a1
      };
    };

    function HorizontalTimelineComponent_li_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12, 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HorizontalTimelineComponent_li_6_Template_a_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var item_r5 = ctx.$implicit;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.onEventClick($event, item_r5);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r5 = ctx.$implicit;
        var index_r6 = ctx.index;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c3, item_r5.selected, index_r6 < ctx_r2.selectedIndex));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 3, item_r5.date, ctx_r2.dateFormat));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.caption);
      }
    }

    function HorizontalTimelineComponent_div_16_li_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r11 = ctx.$implicit;
        var index_r12 = ctx.index;

        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@contentState", item_r11.selected ? "active" : index_r12 < ctx_r10.selectedIndex ? "left" : "right");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r11.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 4, item_r11.date, ctx_r10.dateFormat));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", item_r11.content, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function HorizontalTimelineComponent_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ol");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HorizontalTimelineComponent_div_16_li_2_Template, 9, 7, "li", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.timelineElements);
      }
    }

    var _c4 = function _c4(a0) {
      return {
        "loaded": a0
      };
    };

    var _c5 = function _c5(a0) {
      return {
        "inactive": a0
      };
    };

    var HorizontalTimelineComponent =
    /*#__PURE__*/
    function () {
      function HorizontalTimelineComponent(_cdr, _router) {
        _classCallCheck(this, HorizontalTimelineComponent);

        this._cdr = _cdr;
        this._router = _router;
        this.prevLinkInactive = true;
        this.nextLinkInactive = false;
        this.loaded = false;
        this.selectedIndex = 0;
        this.eventsWrapperWidth = 0;
        this._viewInitialized = false;
        this._timelineWrapperWidth = 720;
        this._eventsMinDistance = 150;
        this._dateFormat = 'dd.MM.yyyy';
        this._disabled = false;
        this._showContent = false;
      }

      _createClass(HorizontalTimelineComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this._cdr.detach();

          this._viewInitialized = true;
          this.initView();
        }
      }, {
        key: "onScrollClick",
        value: function onScrollClick(event, forward) {
          event.preventDefault();
          this.updateSlide(this.eventsWrapperWidth, forward);

          this._cdr.detectChanges();
        }
      }, {
        key: "onEventClick",
        value: function onEventClick(event, selectedItem) {
          // debugger;
          event.preventDefault();

          if (this._disabled) {
            return;
          }

          var element = event.target; // detect click on the a single event - show new event content

          var visibleItem = this._timelineElements[0];

          this._timelineElements.forEach(function (item) {
            if (item.selected && item != selectedItem) {
              visibleItem = item;
              item.selected = false;
            }
          });

          this.selectedIndex = this._timelineElements.indexOf(selectedItem);
          selectedItem.selected = true;
          this.updateFilling(element);

          this._cdr.detectChanges();

          this._router.navigate(['blog', selectedItem.id]);
        }
      }, {
        key: "initTimeline",
        value: function initTimeline(timeLines) {
          var eventsMinLapse = HorizontalTimelineComponent.minLapse(timeLines); // assign a left position to the single events along the timeline

          this.setDatePosition(timeLines, this._eventsMinDistance, eventsMinLapse); // assign a width to the timeline

          this.setTimelineWidth(timeLines, this._eventsMinDistance, eventsMinLapse); // the timeline has been initialize - show it

          this.loaded = true;
        }
      }, {
        key: "updateSlide",
        value: function updateSlide(timelineTotWidth, forward) {
          var translateValue = HorizontalTimelineComponent.getTranslateValue(this.eventsWrapper.nativeElement);

          if (forward) {
            this.translateTimeline(translateValue - this._timelineWrapperWidth + this._eventsMinDistance, this._timelineWrapperWidth - timelineTotWidth);
          } else {
            this.translateTimeline(translateValue + this._timelineWrapperWidth - this._eventsMinDistance, null);
          }
        }
      }, {
        key: "updateTimelinePosition",
        value: function updateTimelinePosition(element) {
          var eventStyle = window.getComputedStyle(element);
          var eventLeft = HorizontalTimelineComponent.pxToNumber(eventStyle.getPropertyValue('left'));
          var translateValue = HorizontalTimelineComponent.getTranslateValue(this.eventsWrapper.nativeElement);

          if (eventLeft > this._timelineWrapperWidth - translateValue) {
            this.translateTimeline(-eventLeft + this._timelineWrapperWidth / 2, this._timelineWrapperWidth - this.eventsWrapperWidth);
          }
        }
      }, {
        key: "translateTimeline",
        value: function translateTimeline(value, totWidth) {
          // only negative translate value
          value = value > 0 ? 0 : value; // do not translate more than timeline width

          value = !(totWidth === null) && value < totWidth ? totWidth : value;
          HorizontalTimelineComponent.setTransformValue(this.eventsWrapper.nativeElement, 'translateX', value + 'px'); // update navigation arrows visibility

          this.prevLinkInactive = value === 0;
          this.nextLinkInactive = value === totWidth;
        }
      }, {
        key: "setTimelineWidth",
        value: function setTimelineWidth(elements, width, eventsMinLapse) {
          var timeSpan = 100;

          if (elements.length > 1) {
            timeSpan = HorizontalTimelineComponent.dayDiff(elements[0].date, elements[elements.length - 1].date);
          }

          var timeSpanNorm = timeSpan / eventsMinLapse;
          timeSpanNorm = Math.round(timeSpanNorm) + 4;
          this.eventsWrapperWidth = timeSpanNorm * width;
          var aHref = this.eventsWrapper.nativeElement.querySelectorAll('a.selected')[0];
          this.updateFilling(aHref);
          this.updateTimelinePosition(aHref);
          return this.eventsWrapperWidth;
        }
      }, {
        key: "updateFilling",
        value: function updateFilling(element) {
          // change .filling-line length according to the selected event
          var eventStyle = window.getComputedStyle(element);
          var eventLeft = eventStyle.getPropertyValue('left');
          var eventWidth = eventStyle.getPropertyValue('width');
          var eventLeftNum = HorizontalTimelineComponent.pxToNumber(eventLeft) + HorizontalTimelineComponent.pxToNumber(eventWidth) / 2;
          var scaleValue = eventLeftNum / this.eventsWrapperWidth;
          HorizontalTimelineComponent.setTransformValue(this.fillingLine.nativeElement, 'scaleX', scaleValue);
        }
      }, {
        key: "initView",
        value: function initView() {
          if (!this._viewInitialized) {
            return;
          }

          if (this._timelineElements && this._timelineElements.length) {
            for (var i = 0; i < this._timelineElements.length; i++) {
              if (this._timelineElements[i].selected) {
                this.selectedIndex = i;
                break;
              }
            }

            this.initTimeline(this._timelineElements);
          }

          this._cdr.detectChanges();
        }
      }, {
        key: "setDatePosition",
        value: function setDatePosition(elements, min, eventsMinLapse) {
          var timelineEventsArray = this.timelineEvents.toArray();
          var i = 0;
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var component = _step.value;
              var distance = HorizontalTimelineComponent.dayDiff(elements[0].date, component.date);
              var distanceNorm = Math.round(distance / eventsMinLapse);
              timelineEventsArray[i].nativeElement.style.left = distanceNorm * min + 'px'; // span

              var span = timelineEventsArray[i].nativeElement.parentElement.children[1];
              var spanWidth = HorizontalTimelineComponent.getElementWidth(span);
              span.style.left = distanceNorm * min + spanWidth / 2 + 'px';
              i++;
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                _iterator["return"]();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        }
      }, {
        key: "timelineWrapperWidth",
        set: function set(value) {
          this._timelineWrapperWidth = value;

          this._cdr.detectChanges();
        }
      }, {
        key: "eventsMinDistance",
        set: function set(value) {
          this._eventsMinDistance = value;
          this.initView();
        }
      }, {
        key: "timelineElements",
        get: function get() {
          return this._timelineElements;
        },
        set: function set(value) {
          this._timelineElements = value;
          this.initView();
        }
      }, {
        key: "dateFormat",
        get: function get() {
          return this._dateFormat;
        },
        set: function set(value) {
          this._dateFormat = value;
          this.initView();
        }
      }, {
        key: "disabled",
        set: function set(value) {
          this._disabled = value;
        }
      }, {
        key: "showContent",
        get: function get() {
          return this._showContent;
        },
        set: function set(value) {
          this._showContent = value;

          this._cdr.detectChanges();
        }
      }], [{
        key: "pxToNumber",
        value: function pxToNumber(val) {
          return Number(val.replace('px', ''));
        }
      }, {
        key: "getElementWidth",
        value: function getElementWidth(element) {
          var computedStyle = window.getComputedStyle(element);

          if (!computedStyle.width) {
            return 0;
          }

          return HorizontalTimelineComponent.pxToNumber(computedStyle.width);
        }
      }, {
        key: "parentElement",
        value: function parentElement(element, tagName) {
          if (!element || !element.parentNode) {
            return null;
          }

          var parent = element.parentNode;

          while (true) {
            if (parent.tagName.toLowerCase() == tagName) {
              return parent;
            }

            parent = parent.parentNode;

            if (!parent) {
              return null;
            }
          }
        }
      }, {
        key: "getTranslateValue",
        value: function getTranslateValue(timeline) {
          var timelineStyle = window.getComputedStyle(timeline);
          var timelineTranslate = timelineStyle.getPropertyValue('-webkit-transform') || timelineStyle.getPropertyValue('-moz-transform') || timelineStyle.getPropertyValue('-ms-transform') || timelineStyle.getPropertyValue('-o-transform') || timelineStyle.getPropertyValue('transform');
          var translateValue = 0;

          if (timelineTranslate.indexOf('(') >= 0) {
            var timelineTranslateStr = timelineTranslate.split('(')[1].split(')')[0].split(',')[4];
            translateValue = Number(timelineTranslateStr);
          }

          return translateValue;
        }
      }, {
        key: "setTransformValue",
        value: function setTransformValue(element, property, value) {
          element.style['-webkit-transform'] = property + '(' + value + ')';
          element.style['-moz-transform'] = property + '(' + value + ')';
          element.style['-ms-transform'] = property + '(' + value + ')';
          element.style['-o-transform'] = property + '(' + value + ')';
          element.style['transform'] = property + '(' + value + ')';
        }
      }, {
        key: "dayDiff",
        value: function dayDiff(first, second) {
          return Math.round(second.getTime() - first.getTime());
        }
      }, {
        key: "minLapse",
        value: function minLapse(elements) {
          if (elements && elements.length && elements.length === 1) {
            return 0;
          }

          var result = 0;

          for (var i = 1; i < elements.length; i++) {
            var distance = HorizontalTimelineComponent.dayDiff(elements[i - 1].date, elements[i].date);
            result = result ? Math.min(result, distance) : distance;
          }

          return result;
        }
      }]);

      return HorizontalTimelineComponent;
    }();

    HorizontalTimelineComponent.ɵfac = function HorizontalTimelineComponent_Factory(t) {
      return new (t || HorizontalTimelineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    HorizontalTimelineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HorizontalTimelineComponent,
      selectors: [["horizontal-timeline"]],
      viewQuery: function HorizontalTimelineComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.eventsWrapper = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fillingLine = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.timelineEvents = _t);
        }
      },
      inputs: {
        timelineWrapperWidth: "timelineWrapperWidth",
        eventsMinDistance: "eventsMinDistance",
        timelineElements: "timelineElements",
        dateFormat: "dateFormat",
        disabled: "disabled",
        showContent: "showContent"
      },
      decls: 17,
      vars: 13,
      consts: [[1, "cd-horizontal-timeline", 3, "ngClass"], [1, "timeline"], [1, "events-wrapper"], [1, "events"], ["eventsWrapper", ""], [4, "ngFor", "ngForOf"], ["aria-hidden", "true", 1, "filling-line"], ["fillingLine", ""], [1, "cd-timeline-navigation"], ["href", "#", 1, "prev", 3, "ngClass", "click"], ["href", "#", 1, "next", 3, "ngClass", "click"], ["class", "events-content", 4, "ngIf"], ["href", "#", 3, "ngClass", "click"], ["timelineEvents", ""], [1, "events-content"], [3, "innerHTML"]],
      template: function HorizontalTimelineComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ol");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HorizontalTimelineComponent_li_6_Template, 7, 9, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 6, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HorizontalTimelineComponent_Template_a_click_11_listener($event) {
            return ctx.onScrollClick($event, false);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Prev");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HorizontalTimelineComponent_Template_a_click_14_listener($event) {
            return ctx.onScrollClick($event, true);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, HorizontalTimelineComponent_div_16_Template, 3, 1, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c4, ctx.loaded));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.eventsWrapperWidth, "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.timelineElements);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c5, ctx.prevLinkInactive));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c5, ctx.nextLinkInactive));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showContent);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]],
      styles: ["ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%] {\r\n  list-style: none;\r\n}\r\n\r\n.cd-horizontal-timeline[_ngcontent-%COMP%] {\r\n  opacity: 0;\r\n  margin: 2em auto;\r\n  transition: opacity 0.2s;\r\n}\r\n\r\n.cd-horizontal-timeline[_ngcontent-%COMP%]::before {\r\n  \r\n  content: 'mobile';\r\n  display: none;\r\n}\r\n\r\n.cd-horizontal-timeline.loaded[_ngcontent-%COMP%] {\r\n  \r\n  opacity: 1;\r\n}\r\n\r\n.cd-horizontal-timeline[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  height: 100px;\r\n  width: 90%;\r\n  max-width: 800px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.cd-horizontal-timeline[_ngcontent-%COMP%]   .events-wrapper[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  height: 100%;\r\n  margin: 0 40px;\r\n  overflow: hidden;\r\n}\r\n\r\n.cd-horizontal-timeline[_ngcontent-%COMP%]   .events-wrapper[_ngcontent-%COMP%]::after, .cd-horizontal-timeline[_ngcontent-%COMP%]   .events-wrapper[_ngcontent-%COMP%]::before {\r\n  \r\n  content: '';\r\n  position: absolute;\r\n  z-index: 2;\r\n  top: 0;\r\n  height: 100%;\r\n  width: 20px;\r\n}\r\n\r\n.cd-horizontal-timeline[_ngcontent-%COMP%]   .events-wrapper[_ngcontent-%COMP%]::before {\r\n  left: 0;\r\n  background-image: linear-gradient(to right, #fff, rgba(248, 248, 248, 0));\r\n}\r\n\r\n.cd-horizontal-timeline[_ngcontent-%COMP%]   .events-wrapper[_ngcontent-%COMP%]::after {\r\n  right: 0;\r\n  background-image: linear-gradient(to left, #fff, rgba(248, 248, 248, 0));\r\n}\r\n\r\n.cd-horizontal-timeline[_ngcontent-%COMP%]   .events[_ngcontent-%COMP%] {\r\n  \r\n  position: absolute;\r\n  z-index: 1;\r\n  left: 0;\r\n  top: 49px;\r\n  height: 2px;\r\n  \r\n  background: #dfdfdf;\r\n  transition: transform 0.4s;\r\n}\r\n\r\n.cd-horizontal-timeline[_ngcontent-%COMP%]   .filling-line[_ngcontent-%COMP%] {\r\n  \r\n  position: absolute;\r\n  z-index: 1;\r\n  left: 0;\r\n  top: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n  background-color: #7b9d6f;\r\n  transform: scaleX(0);\r\n  transform-origin: left center;\r\n  transition: transform 0.3s;\r\n}\r\n\r\n.cd-horizontal-timeline[_ngcontent-%COMP%]   .events[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  bottom: 0;\r\n  z-index: 2;\r\n  text-align: center;\r\n  font-size: 12px;\r\n  text-decoration: none;\r\n  padding-bottom: 15px;\r\n  color: #383838;\r\n  \r\n  transform: translateZ(0);\r\n}\r\n\r\n.cd-horizontal-timeline[_ngcontent-%COMP%]   .events[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::after {\r\n  \r\n  content: '';\r\n  position: absolute;\r\n  left: 50%;\r\n  right: auto;\r\n  transform: translateX(-50%);\r\n  bottom: -5px;\r\n  height: 11px;\r\n  width: 11px;\r\n  border-radius: 50%;\r\n  border: 2px solid #dfdfdf;\r\n  background-color: #f8f8f8;\r\n  transition: background-color 0.3s, border-color 0.3s;\r\n}\r\n\r\n.cd-horizontal-timeline[_ngcontent-%COMP%]   .events[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover::after {\r\n  background-color: #7b9d6f;\r\n  border-color: #7b9d6f;\r\n}\r\n\r\n.cd-horizontal-timeline[_ngcontent-%COMP%]   .events[_ngcontent-%COMP%]   a.selected[_ngcontent-%COMP%] {\r\n  pointer-events: none;\r\n}\r\n\r\n.cd-horizontal-timeline[_ngcontent-%COMP%]   .events[_ngcontent-%COMP%]   a.selected[_ngcontent-%COMP%]::after {\r\n  background-color: #7b9d6f;\r\n  border-color: #7b9d6f;\r\n}\r\n\r\n.cd-horizontal-timeline[_ngcontent-%COMP%]   .events[_ngcontent-%COMP%]   a.older-event[_ngcontent-%COMP%]::after {\r\n  border-color: #7b9d6f;\r\n}\r\n\r\n@media only screen and (min-width: 1100px) {\r\n  .cd-horizontal-timeline[_ngcontent-%COMP%] {\r\n    margin: 6em auto;\r\n  }\r\n\r\n  .cd-horizontal-timeline[_ngcontent-%COMP%]::before {\r\n    \r\n    content: 'desktop';\r\n  }\r\n}\r\n\r\n.cd-horizontal-timeline[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  left: 1700px;\r\n  bottom: -30px;\r\n  font-size: 12px;\r\n}\r\n\r\n.cd-timeline-navigation[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  \r\n  position: absolute;\r\n  z-index: 1;\r\n  top: 50%;\r\n  bottom: auto;\r\n  transform: translateY(-50%);\r\n  height: 34px;\r\n  width: 34px;\r\n  border-radius: 50%;\r\n  border: 2px solid #dfdfdf;\r\n  \r\n  overflow: hidden;\r\n  color: transparent;\r\n  text-indent: 100%;\r\n  white-space: nowrap;\r\n  transition: border-color 0.3s;\r\n}\r\n\r\n.cd-timeline-navigation[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::after {\r\n  \r\n  content: '';\r\n  position: absolute;\r\n  height: 16px;\r\n  width: 16px;\r\n  left: 50%;\r\n  top: 50%;\r\n  bottom: auto;\r\n  right: auto;\r\n  transform: translateX(-50%) translateY(-50%);\r\n  background: url('cd-arrow.svg') no-repeat 0 0;\r\n}\r\n\r\n.cd-timeline-navigation[_ngcontent-%COMP%]   a.prev[_ngcontent-%COMP%] {\r\n  left: 0;\r\n  transform: translateY(-50%) rotate(180deg);\r\n}\r\n\r\n.cd-timeline-navigation[_ngcontent-%COMP%]   a.next[_ngcontent-%COMP%] {\r\n  right: 0;\r\n}\r\n\r\n.cd-timeline-navigation[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  border-color: #7b9d6f;\r\n}\r\n\r\n.cd-timeline-navigation[_ngcontent-%COMP%]   a.inactive[_ngcontent-%COMP%] {\r\n  cursor: not-allowed;\r\n}\r\n\r\n.cd-timeline-navigation[_ngcontent-%COMP%]   a.inactive[_ngcontent-%COMP%]::after {\r\n  background-position: 0 -16px;\r\n}\r\n\r\n.cd-timeline-navigation[_ngcontent-%COMP%]   a.inactive[_ngcontent-%COMP%]:hover {\r\n  border-color: #dfdfdf;\r\n}\r\n\r\n.cd-horizontal-timeline[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 100%;\r\n  margin: 2em 0;\r\n  overflow: hidden;\r\n  transition: height 0.4s;\r\n}\r\n\r\n.cd-horizontal-timeline[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  z-index: 1;\r\n  width: 100%;\r\n  left: 0;\r\n  top: 0;\r\n  padding: 0 5%;\r\n  opacity: 0;\r\n}\r\n\r\n.cd-horizontal-timeline[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n  max-width: 800px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.cd-horizontal-timeline[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n  font-size: 2.6rem;\r\n  line-height: 1.2;\r\n}\r\n\r\n.cd-horizontal-timeline[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\r\n  display: block;\r\n  font-style: italic;\r\n  margin: 10px auto;\r\n}\r\n\r\n.cd-horizontal-timeline[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   em[_ngcontent-%COMP%]::before {\r\n  content: '- ';\r\n}\r\n\r\n.cd-horizontal-timeline[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-size: 1.4rem;\r\n  color: #959595;\r\n}\r\n\r\n.cd-horizontal-timeline[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   em[_ngcontent-%COMP%], .cd-horizontal-timeline[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  line-height: 1.6;\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n  .cd-horizontal-timeline[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    font-size: 7rem;\r\n  }\r\n\r\n  .cd-horizontal-timeline[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\r\n    font-size: 2rem;\r\n  }\r\n\r\n  .cd-horizontal-timeline[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 1.8rem;\r\n  }\r\n}\r\n\r\n.h1[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9yaXpvbnRhbC10aW1lbGluZS9ob3Jpem9udGFsLXRpbWVsaW5lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0VBR2hCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLG1FQUFtRTtFQUNuRSxpQkFBaUI7RUFDakIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsNEVBQTRFO0VBQzVFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsMEVBQTBFO0VBQzFFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLE1BQU07RUFDTixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsT0FBTztFQUVQLHlFQUF5RTtBQUMzRTs7QUFFQTtFQUNFLFFBQVE7RUFFUix3RUFBd0U7QUFDMUU7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixPQUFPO0VBQ1AsU0FBUztFQUNULFdBQVc7RUFDWCx1Q0FBdUM7RUFDdkMsbUJBQW1CO0VBR25CLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLCtEQUErRDtFQUMvRCxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLE9BQU87RUFDUCxNQUFNO0VBQ04sWUFBWTtFQUNaLFdBQVc7RUFDWCx5QkFBeUI7RUFLekIsb0JBQW9CO0VBS3BCLDZCQUE2QjtFQUc3QiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixvQkFBb0I7RUFDcEIsY0FBYztFQUNkLGtFQUFrRTtFQUtsRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSwwQ0FBMEM7RUFDMUMsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUtYLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUd6QixvREFBb0Q7QUFDdEQ7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsbUVBQW1FO0lBQ25FLGtCQUFrQjtFQUNwQjtBQUNGOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDZEQUE2RDtFQUM3RCxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFFBQVE7RUFDUixZQUFZO0VBS1osMkJBQTJCO0VBQzNCLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6Qiw4QkFBOEI7RUFDOUIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBR25CLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsU0FBUztFQUNULFFBQVE7RUFDUixZQUFZO0VBQ1osV0FBVztFQUtYLDRDQUE0QztFQUM1Qyw2Q0FBd0Q7QUFDMUQ7O0FBRUE7RUFDRSxPQUFPO0VBS1AsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsUUFBUTtBQUNWOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsZ0JBQWdCO0VBR2hCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLE9BQU87RUFDUCxNQUFNO0VBQ04sYUFBYTtFQUNiLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvaG9yaXpvbnRhbC10aW1lbGluZS9ob3Jpem9udGFsLXRpbWVsaW5lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJvbCwgdWwge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbi5jZC1ob3Jpem9udGFsLXRpbWVsaW5lIHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIG1hcmdpbjogMmVtIGF1dG87XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xyXG59XHJcblxyXG4uY2QtaG9yaXpvbnRhbC10aW1lbGluZTo6YmVmb3JlIHtcclxuICAvKiBuZXZlciB2aXNpYmxlIC0gdGhpcyBpcyB1c2VkIGluIGpRdWVyeSB0byBjaGVjayB0aGUgY3VycmVudCBNUSAqL1xyXG4gIGNvbnRlbnQ6ICdtb2JpbGUnO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5jZC1ob3Jpem9udGFsLXRpbWVsaW5lLmxvYWRlZCB7XHJcbiAgLyogc2hvdyB0aGUgdGltZWxpbmUgYWZ0ZXIgZXZlbnRzIHBvc2l0aW9uIGhhcyBiZWVuIHNldCAodXNpbmcgSmF2YVNjcmlwdCkgKi9cclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uY2QtaG9yaXpvbnRhbC10aW1lbGluZSAudGltZWxpbmUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWF4LXdpZHRoOiA4MDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmNkLWhvcml6b250YWwtdGltZWxpbmUgLmV2ZW50cy13cmFwcGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1hcmdpbjogMCA0MHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5jZC1ob3Jpem9udGFsLXRpbWVsaW5lIC5ldmVudHMtd3JhcHBlcjo6YWZ0ZXIsIC5jZC1ob3Jpem9udGFsLXRpbWVsaW5lIC5ldmVudHMtd3JhcHBlcjo6YmVmb3JlIHtcclxuICAvKiB0aGVzZSBhcmUgdXNlZCB0byBjcmVhdGUgYSBzaGFkb3cgZWZmZWN0IGF0IHRoZSBzaWRlcyBvZiB0aGUgdGltZWxpbmUgKi9cclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMjtcclxuICB0b3A6IDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAyMHB4O1xyXG59XHJcblxyXG4uY2QtaG9yaXpvbnRhbC10aW1lbGluZSAuZXZlbnRzLXdyYXBwZXI6OmJlZm9yZSB7XHJcbiAgbGVmdDogMDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjZmZmLCByZ2JhKDI0OCwgMjQ4LCAyNDgsIDApKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZmYsIHJnYmEoMjQ4LCAyNDgsIDI0OCwgMCkpO1xyXG59XHJcblxyXG4uY2QtaG9yaXpvbnRhbC10aW1lbGluZSAuZXZlbnRzLXdyYXBwZXI6OmFmdGVyIHtcclxuICByaWdodDogMDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChyaWdodCwgI2ZmZiwgcmdiYSgyNDgsIDI0OCwgMjQ4LCAwKSk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICNmZmYsIHJnYmEoMjQ4LCAyNDgsIDI0OCwgMCkpO1xyXG59XHJcblxyXG4uY2QtaG9yaXpvbnRhbC10aW1lbGluZSAuZXZlbnRzIHtcclxuICAvKiB0aGlzIGlzIHRoZSBncmV5IGxpbmUvdGltZWxpbmUgKi9cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMTtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogNDlweDtcclxuICBoZWlnaHQ6IDJweDtcclxuICAvKiB3aWR0aCB3aWxsIGJlIHNldCB1c2luZyBKYXZhU2NyaXB0ICovXHJcbiAgYmFja2dyb3VuZDogI2RmZGZkZjtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuNHM7XHJcbiAgLW1vei10cmFuc2l0aW9uOiAtbW96LXRyYW5zZm9ybSAwLjRzO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzO1xyXG59XHJcblxyXG4uY2QtaG9yaXpvbnRhbC10aW1lbGluZSAuZmlsbGluZy1saW5lIHtcclxuICAvKiB0aGlzIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBncmVlbiBsaW5lIGZpbGxpbmcgdGhlIHRpbWVsaW5lICovXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM3YjlkNmY7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgwKTtcclxuICAtbW96LXRyYW5zZm9ybTogc2NhbGVYKDApO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlWCgwKTtcclxuICAtby10cmFuc2Zvcm06IHNjYWxlWCgwKTtcclxuICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcclxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgY2VudGVyO1xyXG4gIC1tb3otdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBjZW50ZXI7XHJcbiAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgY2VudGVyO1xyXG4gIC1vLXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgY2VudGVyO1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgY2VudGVyO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4zcztcclxuICAtbW96LXRyYW5zaXRpb246IC1tb3otdHJhbnNmb3JtIDAuM3M7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XHJcbn1cclxuXHJcbi5jZC1ob3Jpem9udGFsLXRpbWVsaW5lIC5ldmVudHMgYSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICB6LWluZGV4OiAyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gIGNvbG9yOiAjMzgzODM4O1xyXG4gIC8qIGZpeCBidWcgb24gU2FmYXJpIC0gdGV4dCBmbGlja2VyaW5nIHdoaWxlIHRpbWVsaW5lIHRyYW5zbGF0ZXMgKi9cclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbn1cclxuXHJcbi5jZC1ob3Jpem9udGFsLXRpbWVsaW5lIC5ldmVudHMgYTo6YWZ0ZXIge1xyXG4gIC8qIHRoaXMgaXMgdXNlZCB0byBjcmVhdGUgdGhlIGV2ZW50IHNwb3QgKi9cclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHJpZ2h0OiBhdXRvO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICBib3R0b206IC01cHg7XHJcbiAgaGVpZ2h0OiAxMXB4O1xyXG4gIHdpZHRoOiAxMXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZGZkZmRmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MsIGJvcmRlci1jb2xvciAwLjNzO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzLCBib3JkZXItY29sb3IgMC4zcztcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MsIGJvcmRlci1jb2xvciAwLjNzO1xyXG59XHJcblxyXG4uY2QtaG9yaXpvbnRhbC10aW1lbGluZSAuZXZlbnRzIGE6aG92ZXI6OmFmdGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2I5ZDZmO1xyXG4gIGJvcmRlci1jb2xvcjogIzdiOWQ2ZjtcclxufVxyXG5cclxuLmNkLWhvcml6b250YWwtdGltZWxpbmUgLmV2ZW50cyBhLnNlbGVjdGVkIHtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuLmNkLWhvcml6b250YWwtdGltZWxpbmUgLmV2ZW50cyBhLnNlbGVjdGVkOjphZnRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdiOWQ2ZjtcclxuICBib3JkZXItY29sb3I6ICM3YjlkNmY7XHJcbn1cclxuXHJcbi5jZC1ob3Jpem9udGFsLXRpbWVsaW5lIC5ldmVudHMgYS5vbGRlci1ldmVudDo6YWZ0ZXIge1xyXG4gIGJvcmRlci1jb2xvcjogIzdiOWQ2ZjtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMTAwcHgpIHtcclxuICAuY2QtaG9yaXpvbnRhbC10aW1lbGluZSB7XHJcbiAgICBtYXJnaW46IDZlbSBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLmNkLWhvcml6b250YWwtdGltZWxpbmU6OmJlZm9yZSB7XHJcbiAgICAvKiBuZXZlciB2aXNpYmxlIC0gdGhpcyBpcyB1c2VkIGluIGpRdWVyeSB0byBjaGVjayB0aGUgY3VycmVudCBNUSAqL1xyXG4gICAgY29udGVudDogJ2Rlc2t0b3AnO1xyXG4gIH1cclxufVxyXG5cclxuLmNkLWhvcml6b250YWwtdGltZWxpbmUgbGkgc3BhbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDE3MDBweDtcclxuICBib3R0b206IC0zMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLmNkLXRpbWVsaW5lLW5hdmlnYXRpb24gYSB7XHJcbiAgLyogdGhlc2UgYXJlIHRoZSBsZWZ0L3JpZ2h0IGFycm93cyB0byBuYXZpZ2F0ZSB0aGUgdGltZWxpbmUgKi9cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMTtcclxuICB0b3A6IDUwJTtcclxuICBib3R0b206IGF1dG87XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIGhlaWdodDogMzRweDtcclxuICB3aWR0aDogMzRweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2RmZGZkZjtcclxuICAvKiByZXBsYWNlIHRleHQgd2l0aCBhbiBpY29uICovXHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgdGV4dC1pbmRlbnQ6IDEwMCU7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjNzO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuM3M7XHJcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuM3M7XHJcbn1cclxuXHJcbi5jZC10aW1lbGluZS1uYXZpZ2F0aW9uIGE6OmFmdGVyIHtcclxuICAvKiBhcnJvdyBpY29uICovXHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogMTZweDtcclxuICB3aWR0aDogMTZweDtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgYm90dG9tOiBhdXRvO1xyXG4gIHJpZ2h0OiBhdXRvO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9jZC1hcnJvdy5zdmcpIG5vLXJlcGVhdCAwIDA7XHJcbn1cclxuXHJcbi5jZC10aW1lbGluZS1uYXZpZ2F0aW9uIGEucHJldiB7XHJcbiAgbGVmdDogMDtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSByb3RhdGUoMTgwZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSByb3RhdGUoMTgwZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHJvdGF0ZSgxODBkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSByb3RhdGUoMTgwZGVnKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgcm90YXRlKDE4MGRlZyk7XHJcbn1cclxuXHJcbi5jZC10aW1lbGluZS1uYXZpZ2F0aW9uIGEubmV4dCB7XHJcbiAgcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5jZC10aW1lbGluZS1uYXZpZ2F0aW9uIGE6aG92ZXIge1xyXG4gIGJvcmRlci1jb2xvcjogIzdiOWQ2ZjtcclxufVxyXG5cclxuLmNkLXRpbWVsaW5lLW5hdmlnYXRpb24gYS5pbmFjdGl2ZSB7XHJcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxufVxyXG5cclxuLmNkLXRpbWVsaW5lLW5hdmlnYXRpb24gYS5pbmFjdGl2ZTo6YWZ0ZXIge1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgLTE2cHg7XHJcbn1cclxuXHJcbi5jZC10aW1lbGluZS1uYXZpZ2F0aW9uIGEuaW5hY3RpdmU6aG92ZXIge1xyXG4gIGJvcmRlci1jb2xvcjogI2RmZGZkZjtcclxufVxyXG5cclxuLmNkLWhvcml6b250YWwtdGltZWxpbmUgLmV2ZW50cy1jb250ZW50IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAyZW0gMDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogaGVpZ2h0IDAuNHM7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBoZWlnaHQgMC40cztcclxuICB0cmFuc2l0aW9uOiBoZWlnaHQgMC40cztcclxufVxyXG5cclxuLmNkLWhvcml6b250YWwtdGltZWxpbmUgLmV2ZW50cy1jb250ZW50IGxpIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMTtcclxuICB3aWR0aDogMTAwJTtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICBwYWRkaW5nOiAwIDUlO1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5jZC1ob3Jpem9udGFsLXRpbWVsaW5lIC5ldmVudHMtY29udGVudCBsaSA+ICoge1xyXG4gIG1heC13aWR0aDogODAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5jZC1ob3Jpem9udGFsLXRpbWVsaW5lIC5ldmVudHMtY29udGVudCBoMiB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAyLjZyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuMjtcclxufVxyXG5cclxuLmNkLWhvcml6b250YWwtdGltZWxpbmUgLmV2ZW50cy1jb250ZW50IGVtIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbn1cclxuXHJcbi5jZC1ob3Jpem9udGFsLXRpbWVsaW5lIC5ldmVudHMtY29udGVudCBlbTo6YmVmb3JlIHtcclxuICBjb250ZW50OiAnLSAnO1xyXG59XHJcblxyXG4uY2QtaG9yaXpvbnRhbC10aW1lbGluZSAuZXZlbnRzLWNvbnRlbnQgcCB7XHJcbiAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgY29sb3I6ICM5NTk1OTU7XHJcbn1cclxuXHJcbi5jZC1ob3Jpem9udGFsLXRpbWVsaW5lIC5ldmVudHMtY29udGVudCBlbSwgLmNkLWhvcml6b250YWwtdGltZWxpbmUgLmV2ZW50cy1jb250ZW50IHAge1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAuY2QtaG9yaXpvbnRhbC10aW1lbGluZSAuZXZlbnRzLWNvbnRlbnQgaDIge1xyXG4gICAgZm9udC1zaXplOiA3cmVtO1xyXG4gIH1cclxuXHJcbiAgLmNkLWhvcml6b250YWwtdGltZWxpbmUgLmV2ZW50cy1jb250ZW50IGVtIHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICB9XHJcblxyXG4gIC5jZC1ob3Jpem9udGFsLXRpbWVsaW5lIC5ldmVudHMtY29udGVudCBwIHtcclxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gIH1cclxufVxyXG5cclxuLmgxIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufSJdfQ== */"],
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('contentState', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          position: 'relative',
          'z-index': 2,
          opacity: 1
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('right => active', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: 'translateX(100%)'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: 0,
          transform: 'translateX(100%)',
          offset: 0
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: 1,
          transform: 'translateX(0%)',
          offset: 1.0
        })]))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('active => right', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: 'translateX(-100%)'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: 1,
          transform: 'translateX(0%)',
          offset: 0
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: 0,
          transform: 'translateX(100%)',
          offset: 1.0
        })]))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('active => left', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: 'translateX(-100%)'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: 1,
          transform: 'translateX(0%)',
          offset: 0
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: 0,
          transform: 'translateX(-100%)',
          offset: 1.0
        })]))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('left => active', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: 'translateX(100%)'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: 0,
          transform: 'translateX(-100%)',
          offset: 0
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: 1,
          transform: 'translateX(0%)',
          offset: 1.0
        })]))])])]
      },
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HorizontalTimelineComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'horizontal-timeline',
          templateUrl: './horizontal-timeline.component.html',
          styleUrls: ['./horizontal-timeline.component.css'],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('contentState', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            position: 'relative',
            'z-index': 2,
            opacity: 1
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('right => active', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: 'translateX(100%)'
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 0,
            transform: 'translateX(100%)',
            offset: 0
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 1,
            transform: 'translateX(0%)',
            offset: 1.0
          })]))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('active => right', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: 'translateX(-100%)'
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 1,
            transform: 'translateX(0%)',
            offset: 0
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 0,
            transform: 'translateX(100%)',
            offset: 1.0
          })]))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('active => left', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: 'translateX(-100%)'
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 1,
            transform: 'translateX(0%)',
            offset: 0
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 0,
            transform: 'translateX(-100%)',
            offset: 1.0
          })]))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('left => active', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: 'translateX(100%)'
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 0,
            transform: 'translateX(-100%)',
            offset: 0
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 1,
            transform: 'translateX(0%)',
            offset: 1.0
          })]))])])]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, {
        eventsWrapper: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['eventsWrapper']
        }],
        fillingLine: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['fillingLine']
        }],
        timelineEvents: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
          args: ['timelineEvents']
        }],
        timelineWrapperWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        eventsMinDistance: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        timelineElements: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        dateFormat: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        showContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/navbar/navbar.component.ts":
  /*!********************************************!*\
    !*** ./src/app/navbar/navbar.component.ts ***!
    \********************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["about-me"];
    };

    var _c1 = function _c1() {
      return ["publications"];
    };

    var _c2 = function _c2() {
      return ["blog"];
    };

    var NavbarComponent =
    /*#__PURE__*/
    function () {
      function NavbarComponent() {
        _classCallCheck(this, NavbarComponent);
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)();
    };

    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      decls: 14,
      vars: 6,
      consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbar", "aria-controls", "navbar", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbar", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto", "ml-auto", "mt-2", "mt-lg-0"], [1, "nav-item"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]],
      styles: [".bg-light[_ngcontent-%COMP%] {\r\n    background-color: #dbfaf4 !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLG9DQUFvQztBQUN4QyIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uYmctbGlnaHQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RiZmFmNCAhaW1wb3J0YW50O1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navbar',
          templateUrl: './navbar.component.html',
          styleUrls: ['./navbar.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pipes/divider.pipe.ts":
  /*!***************************************!*\
    !*** ./src/app/pipes/divider.pipe.ts ***!
    \***************************************/

  /*! exports provided: DividerPipe */

  /***/
  function srcAppPipesDividerPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DividerPipe", function () {
      return DividerPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DividerPipe =
    /*#__PURE__*/
    function () {
      function DividerPipe() {
        _classCallCheck(this, DividerPipe);
      }

      _createClass(DividerPipe, [{
        key: "transform",
        value: function transform(value, divider) {
          if (!value || !value.length) {
            return '';
          }

          var result = value.shift();
          value.forEach(function (element) {
            result += divider + element;
          });
          return result;
        }
      }]);

      return DividerPipe;
    }();

    DividerPipe.ɵfac = function DividerPipe_Factory(t) {
      return new (t || DividerPipe)();
    };

    DividerPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "divider",
      type: DividerPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DividerPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'divider'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pipes/order-by-position.pipe.ts":
  /*!*************************************************!*\
    !*** ./src/app/pipes/order-by-position.pipe.ts ***!
    \*************************************************/

  /*! exports provided: OrderByPositionPipe */

  /***/
  function srcAppPipesOrderByPositionPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderByPositionPipe", function () {
      return OrderByPositionPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var OrderByPositionPipe =
    /*#__PURE__*/
    function () {
      function OrderByPositionPipe() {
        _classCallCheck(this, OrderByPositionPipe);
      }

      _createClass(OrderByPositionPipe, [{
        key: "transform",
        value: function transform(value, args) {
          return value.sort(function (a, b) {
            return a - b;
          });
        }
      }]);

      return OrderByPositionPipe;
    }();

    OrderByPositionPipe.ɵfac = function OrderByPositionPipe_Factory(t) {
      return new (t || OrderByPositionPipe)();
    };

    OrderByPositionPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "orderByPosition",
      type: OrderByPositionPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderByPositionPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'orderByPosition'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/publication-preview/publication-preview.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/publication-preview/publication-preview.component.ts ***!
    \**********************************************************************/

  /*! exports provided: PublicationPreviewComponent */

  /***/
  function srcAppPublicationPreviewPublicationPreviewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PublicationPreviewComponent", function () {
      return PublicationPreviewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");

    function PublicationPreviewComponent_span_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var abs_r66 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", abs_r66, "");
      }
    }

    function PublicationPreviewComponent_span_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var key_r67 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](", ", key_r67, "");
      }
    }

    function PublicationPreviewComponent_li_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var author_r68 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", author_r68.FullName, " ");
      }
    }

    function PublicationPreviewComponent_div_31_li_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var adviser_r70 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", adviser_r70, " ");
      }
    }

    function PublicationPreviewComponent_div_31_Template(rf, ctx) {
      if (rf & 1) {
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
      }

      if (rf & 2) {
        var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r64.publication.Advisers);
      }
    }

    function PublicationPreviewComponent_div_32_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var company_r72 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", company_r72, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function PublicationPreviewComponent_div_32_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " In collaboration with: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PublicationPreviewComponent_div_32_div_4_Template, 3, 1, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r65.publication.Companies.Others);
      }
    }

    var PublicationPreviewComponent =
    /*#__PURE__*/
    function () {
      function PublicationPreviewComponent() {
        _classCallCheck(this, PublicationPreviewComponent);

        this.faExternalLinkAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faExternalLinkAlt"];
      }

      _createClass(PublicationPreviewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "handleClick",
        value: function handleClick() {
          document.getElementById('hidden-anchor').click();
        }
      }]);

      return PublicationPreviewComponent;
    }();

    PublicationPreviewComponent.ɵfac = function PublicationPreviewComponent_Factory(t) {
      return new (t || PublicationPreviewComponent)();
    };

    PublicationPreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PublicationPreviewComponent,
      selectors: [["app-publication-preview"]],
      inputs: {
        publication: "publication"
      },
      decls: 37,
      vars: 15,
      consts: [[1, "page-container"], [1, "page"], [1, "row"], [1, "col-12"], ["alt", "", "width", "100", 1, "float-left", 3, "src"], [1, "row", "mt-4"], [1, "text-center"], [1, "col-12", "abstract-list"], [4, "ngFor", "ngForOf"], [1, "row", "mt-3", "mb-3", "keyword-list"], [1, "keyword"], [1, "author-list"], ["class", "row", 4, "ngIf"], ["class", "row logo-row", 4, "ngIf"], [1, "overlay", "clickable", 3, "click"], [1, "icon"], [3, "icon"], ["target", "_blank", "id", "hidden-anchor", 3, "href"], [1, "row", "logo-row"], ["class", "col-3", 4, "ngFor", "ngForOf"], [1, "col-3"], [1, "img-box"], ["alt", "", 1, "float-center", "bottom-logo", 3, "src"]],
      template: function PublicationPreviewComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PublicationPreviewComponent_Template_div_click_33_listener() {
            return ctx.handleClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "fa-icon", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "a", 17);
        }

        if (rf & 2) {
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
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FaIconComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["SlicePipe"]],
      styles: [".page[_ngcontent-%COMP%] {\r\n    margin: 0 auto 3rem auto;\r\n    background: #fff;\r\n    box-shadow: 0 4px 5px rgba(75, 75, 75, 0.2);\r\n    outline: 0;\r\n    width: 21cm;\r\n    min-height: 29.7cm;\r\n    padding-left: 2cm;\r\n    padding-top: 2cm;\r\n    padding-right: 2cm;\r\n    padding-bottom: 2cm;\r\n    border: 1px solid rgba(75, 75, 75, 0.2);\r\n    position: relative;\r\n}\r\n\r\n.abstract-list[_ngcontent-%COMP%] {\r\n    text-align: justify;\r\n}\r\n\r\n.keyword[_ngcontent-%COMP%]{\r\n    color: #1abc9c;\r\n}\r\n\r\n.keyword-list[_ngcontent-%COMP%]{\r\n    text-align: justify;\r\n}\r\n\r\n.author-list[_ngcontent-%COMP%] {\r\n    padding-left: 0;\r\n    list-style: none;\r\n}\r\n\r\n.img-box[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    margin: 0.5rem auto 0.5rem auto;\r\n    padding-top: 50%;\r\n}\r\n\r\n.bottom-logo[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n    right: 0;\r\n    width: 100%;\r\n}\r\n\r\n.page-container[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    zoom: 65%;\r\n}\r\n\r\n.overlay[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    height: 100%;\r\n    width: 21cm;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    opacity: 0;\r\n    transition: .3s ease;\r\n    background-color: #495057;\r\n}\r\n\r\n.page-container[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%] {\r\n    opacity: 0.8;\r\n}\r\n\r\n.icon[_ngcontent-%COMP%] {\r\n    color: white;\r\n    font-size: 100px;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    -ms-transform: translate(-50%, -50%);\r\n    text-align: center;\r\n}\r\n\r\nfa-icon[_ngcontent-%COMP%]:hover {\r\n    color: #eee;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVibGljYXRpb24tcHJldmlldy9wdWJsaWNhdGlvbi1wcmV2aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3QkFBd0I7SUFDeEIsZ0JBQWdCO0lBQ2hCLDJDQUEyQztJQUMzQyxVQUFVO0lBQ1YsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsdUNBQXVDO0lBQ3ZDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLCtCQUErQjtJQUMvQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLDJCQUEyQjtJQUMzQixRQUFRO0lBQ1IsV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0lBQ1IsWUFBWTtJQUNaLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixvQkFBb0I7SUFDcEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0NBQWdDO0lBQ2hDLG9DQUFvQztJQUNwQyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9wdWJsaWNhdGlvbi1wcmV2aWV3L3B1YmxpY2F0aW9uLXByZXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlIHtcclxuICAgIG1hcmdpbjogMCBhdXRvIDNyZW0gYXV0bztcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA1cHggcmdiYSg3NSwgNzUsIDc1LCAwLjIpO1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgIHdpZHRoOiAyMWNtO1xyXG4gICAgbWluLWhlaWdodDogMjkuN2NtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyY207XHJcbiAgICBwYWRkaW5nLXRvcDogMmNtO1xyXG4gICAgcGFkZGluZy1yaWdodDogMmNtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDJjbTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNzUsIDc1LCA3NSwgMC4yKTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmFic3RyYWN0LWxpc3Qge1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG4ua2V5d29yZHtcclxuICAgIGNvbG9yOiAjMWFiYzljO1xyXG59XHJcblxyXG4ua2V5d29yZC1saXN0e1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG5cclxuLmF1dGhvci1saXN0IHtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbi5pbWctYm94IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogMC41cmVtIGF1dG8gMC41cmVtIGF1dG87XHJcbiAgICBwYWRkaW5nLXRvcDogNTAlO1xyXG59XHJcblxyXG4uYm90dG9tLWxvZ28ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICByaWdodDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucGFnZS1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgem9vbTogNjUlO1xyXG59XHJcblxyXG4ub3ZlcmxheSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMjFjbTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zaXRpb246IC4zcyBlYXNlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ5NTA1NztcclxufVxyXG5cclxuLnBhZ2UtY29udGFpbmVyOmhvdmVyIC5vdmVybGF5IHtcclxuICAgIG9wYWNpdHk6IDAuODtcclxufVxyXG5cclxuLmljb24ge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxMDBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmZhLWljb246aG92ZXIge1xyXG4gICAgY29sb3I6ICNlZWU7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PublicationPreviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-publication-preview',
          templateUrl: './publication-preview.component.html',
          styleUrls: ['./publication-preview.component.css']
        }]
      }], function () {
        return [];
      }, {
        publication: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/publications-list/publications-list.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/publications-list/publications-list.component.ts ***!
    \******************************************************************/

  /*! exports provided: PublicationsListComponent */

  /***/
  function srcAppPublicationsListPublicationsListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PublicationsListComponent", function () {
      return PublicationsListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function PublicationsListComponent_li_1_span_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var publication_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" - ", publication_r14.ReleaseDate, " ");
      }
    }

    function PublicationsListComponent_li_1_span_6_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var author_r21 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](", ", author_r21.ShortName, "");
      }
    }

    function PublicationsListComponent_li_1_span_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PublicationsListComponent_li_1_span_6_span_2_Template, 2, 1, "span", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "slice");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var publication_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", publication_r14.Authors[0].ShortName, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 2, publication_r14.Authors, 1));
      }
    }

    function PublicationsListComponent_li_1_ng_template_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
      }

      if (rf & 2) {
        var publication_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](publication_r14.Authors[0].ShortName);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "active": a0
      };
    };

    function PublicationsListComponent_li_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PublicationsListComponent_li_1_Template_li_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

          var publication_r14 = ctx.$implicit;

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r24.handleClick(publication_r14.Id);
        });

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
      }

      if (rf & 2) {
        var publication_r14 = ctx.$implicit;

        var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

        var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, publication_r14.Id == ctx_r13.activeId));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", publication_r14.Title, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!publication_r14.ReleaseDate);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", publication_r14.Authors.length > 1)("ngIfElse", _r17);
      }
    }

    var PublicationsListComponent =
    /*#__PURE__*/
    function () {
      function PublicationsListComponent() {
        _classCallCheck(this, PublicationsListComponent);

        this.setActive = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(PublicationsListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "handleClick",
        value: function handleClick(id) {
          this.activeId = id;
          this.setActive.emit(id);
        }
      }]);

      return PublicationsListComponent;
    }();

    PublicationsListComponent.ɵfac = function PublicationsListComponent_Factory(t) {
      return new (t || PublicationsListComponent)();
    };

    PublicationsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PublicationsListComponent,
      selectors: [["app-publications-list"]],
      inputs: {
        publications: "publications"
      },
      outputs: {
        setActive: "setActive"
      },
      decls: 2,
      vars: 1,
      consts: [[1, "list-group"], ["class", "list-group-item clickable", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "list-group-item", "clickable", 3, "ngClass", "click"], [1, "title"], [4, "ngIf"], [1, "authors"], [4, "ngIf", "ngIfElse"], ["elseBlock", ""], [4, "ngFor", "ngForOf"]],
      template: function PublicationsListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PublicationsListComponent_li_1_Template, 9, 7, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.publications);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["SlicePipe"]],
      styles: [".title[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n    font-weight: 700;\r\n    text-align: justify;\r\n}\r\n\r\n.list-group-item[_ngcontent-%COMP%]:first-child {\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n}\r\n\r\n.list-group-item[_ngcontent-%COMP%]:last-child {\r\n    border-bottom-left-radius: 0;\r\n    border-bottom-right-radius: 0;\r\n}\r\n\r\n.list-group-item.active[_ngcontent-%COMP%] {\r\n    z-index: 2;\r\n    color: black;\r\n    background-color: #fff;\r\n    border-color: #1abc9c;\r\n    border-width: 3px;\r\n}\r\n\r\n.authors[_ngcontent-%COMP%]{\r\n    font-size: 12px;\r\n    text-align: justify;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVibGljYXRpb25zLWxpc3QvcHVibGljYXRpb25zLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1Qiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpY2F0aW9ucy1saXN0L3B1YmxpY2F0aW9ucy1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuXHJcbi5saXN0LWdyb3VwLWl0ZW06Zmlyc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xyXG59XHJcblxyXG4ubGlzdC1ncm91cC1pdGVtOmxhc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xyXG59XHJcblxyXG4ubGlzdC1ncm91cC1pdGVtLmFjdGl2ZSB7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1jb2xvcjogIzFhYmM5YztcclxuICAgIGJvcmRlci13aWR0aDogM3B4O1xyXG59XHJcblxyXG4uYXV0aG9yc3tcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PublicationsListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-publications-list',
          templateUrl: './publications-list.component.html',
          styleUrls: ['./publications-list.component.css']
        }]
      }], function () {
        return [];
      }, {
        publications: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        setActive: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/publications/publications.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/publications/publications.component.ts ***!
    \********************************************************/

  /*! exports provided: PublicationsComponent */

  /***/
  function srcAppPublicationsPublicationsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PublicationsComponent", function () {
      return PublicationsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _publications_list_publications_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../publications-list/publications-list.component */
    "./src/app/publications-list/publications-list.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _publication_preview_publication_preview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../publication-preview/publication-preview.component */
    "./src/app/publication-preview/publication-preview.component.ts");

    function PublicationsComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-publication-preview", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("publication", ctx_r0.activePublication);
      }
    }

    var PublicationsComponent =
    /*#__PURE__*/
    function () {
      function PublicationsComponent() {
        _classCallCheck(this, PublicationsComponent);

        this.publications = [{
          Id: 1,
          Title: 'Arousal when making decisions predicts Big Five: A machine learning approach',
          Subtitle: '',
          ReleaseDate: 'November 2017',
          Authors: [{
            FullName: 'Cátia Cepeda',
            ShortName: 'C. Cepeda'
          }, {
            FullName: 'Dina Rindlisbacher',
            ShortName: 'D. Rindlisbacher'
          }, {
            FullName: 'Beatriz Esteves',
            ShortName: 'B. Esteves'
          }, {
            FullName: 'Julian Schneider',
            ShortName: 'J. Schneider'
          }, {
            FullName: 'Edouard Battegay',
            ShortName: 'E. Battegay'
          }, {
            FullName: 'Lutz Jäncke',
            ShortName: 'L. Jäncke'
          }, {
            FullName: 'Hugo Gamboa',
            ShortName: 'H. Gamboa'
          }, {
            FullName: 'Marcus Cheetham',
            ShortName: 'M. Cheetham'
          }],
          Advisers: [],
          Companies: {
            Main: '/assets/logo_fct.gif',
            Others: ['/assets/publications/univ_zurich.jpg', '/assets/publications/UHZ.png']
          },
          DocUrl: 'https://www.slideshare.net/secret/5erUD0fIfg0o7R',
          Abstract: ['Skin-conductance (SC) reactivity is considered a bodily marker of better and poorer choice options, helping to guide decision-making in complex and uncertain situations. SC has been investigated extensively in the Iowa Gambling Task (IGT). The IGT was designed to examine decision-making performance under conditions of uncertainty and risk. Individual variability in behavioral IGT performance has been linked to various personality traits, including those of the Big Five. Skin-conductance responses (SCRs) also vary across individuals during decision making. No studies have used machine learning techniques to predict personality from SC fluctuation during decision-making.', 'Aim: To develop an automatic method to recognize personality traits, based on individual fluctuation in SC during decision-making in the IGT.'],
          Keywords: ['Skin Conductance', 'Decision Making', 'Iowa Gambling Task', 'Personality Traits', 'Big Five', 'Machine Learning']
        }, {
          Id: 2,
          Title: 'Personality assessment based on biosignals during a decision-making task',
          Subtitle: 'Dissertation submitted in partial fulfillment of the requirements for the degree of Master of Science in Biomedical Engineering',
          ReleaseDate: 'October 2017',
          Authors: [{
            FullName: 'Beatriz Esteves',
            ShortName: 'B. Esteves'
          }],
          Advisers: ['Prof. Doctor Hugo Gamboa', 'Prof. Doctor Marcus Cheetham'],
          Companies: {
            Main: '/assets/logo_fct.gif'
          },
          DocUrl: 'https://run.unl.pt/bitstream/10362/40258/1/Esteves_2017.pdf',
          Abstract: ['Due to the emergence of novel acquisition devices and signal processing techniques, the study of electrophysiology and its applications has assumed an important role on the Biomedical Engineering community. Recently, research on this area has expanded to several domains, with the psychophysiology being a proeminent one, more specifically in the field of personality psychology.', 'In this thesis, participants were asked to perform a wildly known decision-making task, the Iowa Gambling Task (IGT), and their biosignals were recorded during this performance with the objective of determining whether changes in biosignals could be related to personality.  This project was composed by 71 participants and their biosignals were used to extract meaningful features that together could create a predictive model of personality. For this, all biosignals were processed prior to the feature extraction step and the features were extracted from the entire signals, recorded during the performance of the IGT, and also dividing the task in five blocks. After the extraction, a machine learning algorithm was used to compute the best predictive models for the Five Factor Model (FFM) personality dimensions and for the Maximization and Regret scales, using each biosignal individually and in the end all features from all biosignals.', 'The results showed that the predictive models which use features from all biosignals perform better than the models which use only one biosignal. The Openness to Experience, Agreeableness and Maximization scales are well predicted with features from Electrocardiogram (ECG), the Agreeableness, Maximization and Extraversion scales with Electrodermal Activity (EDA) features and the Extraversion and Openness to Experience scales with features from Blood Volume Pulse (BVP). The hypothesis that personality traits is more expressed in the start of IGT was confirmed since the highest number of features is extracted from the Block 1 of the IGT. The results should be further validated for other populations.'],
          Keywords: ['Biosignals', 'Signal Processing', 'Feature Selection', 'Machine Learning', 'Iowa Gambling Task', 'Five Factor Model', 'Maximization']
        }];
      }

      _createClass(PublicationsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "handleSetActive",
        value: function handleSetActive(id) {
          this.activePublication = this.publications.find(function (e) {
            return e.Id == id;
          });
        }
      }]);

      return PublicationsComponent;
    }();

    PublicationsComponent.ɵfac = function PublicationsComponent_Factory(t) {
      return new (t || PublicationsComponent)();
    };

    PublicationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PublicationsComponent,
      selectors: [["app-publications"]],
      decls: 4,
      vars: 2,
      consts: [[1, "row", "mt-5"], [1, "col-6"], [3, "publications", "setActive"], ["class", "col-6", 4, "ngIf"], [3, "publication"]],
      template: function PublicationsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-publications-list", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("setActive", function PublicationsComponent_Template_app_publications_list_setActive_2_listener($event) {
            return ctx.handleSetActive($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PublicationsComponent_div_3_Template, 2, 1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("publications", ctx.publications);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activePublication);
        }
      },
      directives: [_publications_list_publications_list_component__WEBPACK_IMPORTED_MODULE_1__["PublicationsListComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _publication_preview_publication_preview_component__WEBPACK_IMPORTED_MODULE_3__["PublicationPreviewComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpY2F0aW9ucy9wdWJsaWNhdGlvbnMuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PublicationsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-publications',
          templateUrl: './publications.component.html',
          styleUrls: ['./publications.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\beatr\OneDrive\Documents\GitHub\webpageSourceCode\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map