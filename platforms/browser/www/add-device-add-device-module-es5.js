function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-device-add-device-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/add-device/add-device.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-device/add-device.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAddDeviceAddDevicePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n    <!-- fab placed to the bottom end -->  \n    <ion-fab vertical=\"top\" horizontal=\"start\" slot=\"fixed\">  \n      <ion-fab-button (click)=\"goDashboardPage()\">  \n        <ion-icon name=\"arrow-undo-circle-sharp\"></ion-icon>  \n      </ion-fab-button>  \n    </ion-fab>  \n  \n  <ion-grid style=\"height: 100%\">\n    <ion-row style=\"height: 100%; margin-top: 100px;\">\n      <div class=\"holder\">\n        \n        <h1 style=\"text-align: center;\">Add Vehicle</h1>\n\n        <ion-select class=\"selectKita\" [(ngModel)]=\"selectedUser\" (ionChange)=\"onUserChanged()\" *ngIf=\"userType == 'admin'\" style=\"width: 80%;margin:auto\">\n          <ion-select-option *ngFor=\"let item of allUsers\" value=\"{{item.id}}\">\n            <ion-label>{{item.fullName}}</ion-label>\n          </ion-select-option>\n        </ion-select>\n\n        <form [formGroup]=\"deviceForm\" (ngSubmit)=\"add()\" style=\"width: 80%;margin:auto\">\n        \n          <div class=\"details\">\n            \n            <div class=\"detail-item\">\n              <ion-label>Name</ion-label>\n              <ion-item>\n                <span class=\"icn-holder\" slot=\"end\" *ngIf=\"!deviceForm.get('name').invalid\">\n                  <ion-icon name=\"checkmark-circle\"></ion-icon>\n                </span>\n                <ion-input formControlName=\"name\" class=\"username\" placeholder=\"Enter Name\"> </ion-input>\n              </ion-item>\n            </div>\n\n            <div class=\"detail-item\">\n              <ion-label>Phone Number</ion-label>\n              <ion-item>\n                <span class=\"icn-holder\" slot=\"end\" *ngIf=\"!deviceForm.get('phoneNumber').invalid\">\n                  <ion-icon name=\"checkmark-circle\"></ion-icon>\n                </span>\n                <ion-input formControlName=\"phoneNumber\" class=\"username\" placeholder=\"Enter Phone Number\"> </ion-input>\n              </ion-item>\n            </div>\n\n            <div class=\"detail-item\">\n              <ion-label>Device Imei</ion-label>\n              <ion-item>\n                <span class=\"icn-holder\" slot=\"end\" *ngIf=\"!deviceForm.get('imei').invalid\">\n                  <ion-icon name=\"checkmark-circle\"></ion-icon>\n                </span>\n                <ion-input formControlName=\"imei\" class=\"username\" placeholder=\"Enter Device Imei\" [(ngModel)]=\"deviceImei\"> </ion-input>\n              </ion-item>\n            </div>\n\n            <div class=\"detail-item\">\n              <ion-label>Email</ion-label>\n              <ion-item>\n                <span class=\"icn-holder\" slot=\"end\" *ngIf=\"!deviceForm.get('email').invalid\">\n                  <ion-icon name=\"checkmark-circle\"></ion-icon>\n                </span>\n                <ion-input formControlName=\"email\" class=\"username\" placeholder=\"Enter Email\"> </ion-input>\n              </ion-item>\n            </div>\n\n            <div class=\"detail-item\">\n              <ion-label>Vehicle Plate No</ion-label>\n              <ion-item>\n                <span class=\"icn-holder\" slot=\"end\" *ngIf=\"!deviceForm.get('plateNo').invalid\">\n                  <ion-icon name=\"checkmark-circle\"></ion-icon>\n                </span>\n                <ion-input formControlName=\"plateNo\" class=\"username\" placeholder=\"Enter Plate No\"> </ion-input>\n              </ion-item>\n            </div>\n          </div>\n          \n          <div class=\"btn-holder\">\n            <ion-button expand=\"block\" type=\"submit\" routerDirection=\"root\" [disabled]=\"deviceForm.invalid\">\n              Add\n            </ion-button>\n          </div>\n\n        </form>\n        \n      </div>\n    </ion-row>\n  </ion-grid>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/add-device/add-device-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/add-device/add-device-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: AddDevicePageRoutingModule */

  /***/
  function srcAppAddDeviceAddDeviceRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddDevicePageRoutingModule", function () {
      return AddDevicePageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _add_device_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./add-device.page */
    "./src/app/add-device/add-device.page.ts");

    var routes = [{
      path: '',
      component: _add_device_page__WEBPACK_IMPORTED_MODULE_3__["AddDevicePage"]
    }];

    var AddDevicePageRoutingModule = function AddDevicePageRoutingModule() {
      _classCallCheck(this, AddDevicePageRoutingModule);
    };

    AddDevicePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AddDevicePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/add-device/add-device.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/add-device/add-device.module.ts ***!
    \*************************************************/

  /*! exports provided: AddDevicePageModule */

  /***/
  function srcAppAddDeviceAddDeviceModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddDevicePageModule", function () {
      return AddDevicePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _add_device_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./add-device-routing.module */
    "./src/app/add-device/add-device-routing.module.ts");
    /* harmony import */


    var _add_device_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./add-device.page */
    "./src/app/add-device/add-device.page.ts");

    var AddDevicePageModule = function AddDevicePageModule() {
      _classCallCheck(this, AddDevicePageModule);
    };

    AddDevicePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _add_device_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddDevicePageRoutingModule"]],
      declarations: [_add_device_page__WEBPACK_IMPORTED_MODULE_6__["AddDevicePage"]]
    })], AddDevicePageModule);
    /***/
  },

  /***/
  "./src/app/add-device/add-device.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/add-device/add-device.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAddDeviceAddDevicePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  font-family: monospace !important;\n}\nion-content .holder {\n  width: 100%;\n  margin-top: -50px;\n}\nion-content .holder .btns-holder {\n  margin-top: 15px;\n}\nion-content .holder .btns-holder ion-button {\n  height: 3rem !important;\n}\nion-content .holder img {\n  max-width: 150px !important;\n}\nion-content .the-title {\n  max-width: 50%;\n  margin: auto;\n  text-align: center;\n}\nion-button {\n  height: 3rem !important;\n  margin-top: 20px;\n}\n.sign-up-btn {\n  background-color: #3c63ff;\n}\n.sign-in-btn {\n  background-color: #ffffff;\n}\n.header-title {\n  color: white;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLWRldmljZS9FOlxcSFNIXFxKT0JTXFxSZWhtYW5cXFNhZmVQYXJrXFxTYWZlUGFya1xcQXBwXFxBcHAvc3JjXFxhcHBcXGFkZC1kZXZpY2VcXGFkZC1kZXZpY2UucGFnZS5zY3NzIiwic3JjL2FwcC9hZGQtZGV2aWNlL2FkZC1kZXZpY2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksaUNBQUE7QUNBSjtBREVJO0VBRUksV0FBQTtFQUNBLGlCQUFBO0FDRFI7QURFUTtFQUVJLGdCQUFBO0FDRFo7QURHWTtFQUVJLHVCQUFBO0FDRmhCO0FETVE7RUFDSSwyQkFBQTtBQ0paO0FEUUk7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDTlI7QURXQTtFQUVJLHVCQUFBO0VBQ0EsZ0JBQUE7QUNUSjtBRFlBO0VBQ0kseUJBQUE7QUNUSjtBRFlBO0VBQ0kseUJBQUE7QUNUSjtBRFlBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FDVEoiLCJmaWxlIjoic3JjL2FwcC9hZGQtZGV2aWNlL2FkZC1kZXZpY2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQgXHJcbntcclxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UgIWltcG9ydGFudDtcclxuICAgIFxyXG4gICAgLmhvbGRlclxyXG4gICAge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC01MHB4O1xyXG4gICAgICAgIC5idG5zLWhvbGRlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlvbi1idXR0b24gXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogM3JlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDE1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC50aGUtdGl0bGUge1xyXG4gICAgICAgIG1heC13aWR0aDogNTAlO1xyXG4gICAgICAgIG1hcmdpbjphdXRvO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmlvbi1idXR0b24gXHJcbntcclxuICAgIGhlaWdodDogM3JlbSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLnNpZ24tdXAtYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYzYzZmY7XHJcbn1cclxuXHJcbi5zaWduLWluLWJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4uaGVhZGVyLXRpdGxlIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSIsImlvbi1jb250ZW50IHtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSAhaW1wb3J0YW50O1xufVxuaW9uLWNvbnRlbnQgLmhvbGRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAtNTBweDtcbn1cbmlvbi1jb250ZW50IC5ob2xkZXIgLmJ0bnMtaG9sZGVyIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbmlvbi1jb250ZW50IC5ob2xkZXIgLmJ0bnMtaG9sZGVyIGlvbi1idXR0b24ge1xuICBoZWlnaHQ6IDNyZW0gIWltcG9ydGFudDtcbn1cbmlvbi1jb250ZW50IC5ob2xkZXIgaW1nIHtcbiAgbWF4LXdpZHRoOiAxNTBweCAhaW1wb3J0YW50O1xufVxuaW9uLWNvbnRlbnQgLnRoZS10aXRsZSB7XG4gIG1heC13aWR0aDogNTAlO1xuICBtYXJnaW46IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIGhlaWdodDogM3JlbSAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uc2lnbi11cC1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2M2M2ZmO1xufVxuXG4uc2lnbi1pbi1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuXG4uaGVhZGVyLXRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/add-device/add-device.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/add-device/add-device.page.ts ***!
    \***********************************************/

  /*! exports provided: AddDevicePage */

  /***/
  function srcAppAddDeviceAddDevicePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddDevicePage", function () {
      return AddDevicePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _api_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../api/user.service */
    "./src/app/api/user.service.ts");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../auth/auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js"); // import { AdMobFreeInterstitialConfig, AdMobFree } from '@ionic-native/admob-free/ngx';


    var AddDevicePage = /*#__PURE__*/function () {
      function AddDevicePage(formBuilder, navCtrl, authService, router, loadingCtrl, toastCtrl, userService) {
        _classCallCheck(this, AddDevicePage);

        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.router = router;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.userService = userService;
        this.deviceForm = this.formBuilder.group({
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
          name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
          phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
          plateNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
          imei: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]))
        });
        this.currentUserId = this.authService.getCurrentUserId();
        this.getUserData();
        this.getAllUsers();
      }

      _createClass(AddDevicePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getUserData",
        value: function getUserData() {
          var _this = this;

          this.userService.getUserData(this.currentUserId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {})).subscribe(function (res) {
            if (res['status']) {
              _this.user = res['user'];
              _this.userType = _this.user.userType;
            }
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "getAllUsers",
        value: function getAllUsers() {
          var _this2 = this;

          this.userService.getAllClients().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {})).subscribe(function (res) {
            if (res['status']) {
              _this2.allUsers = res['users'];
            }
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "onUserChanged",
        value: function onUserChanged() {}
      }, {
        key: "goDashboardPage",
        value: function goDashboardPage() {
          this.navCtrl.navigateRoot(['dashboard'], {
            replaceUrl: true
          });
        }
      }, {
        key: "add",
        value: function add() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this3 = this;

            var selectUserId, loading;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    selectUserId = 0;

                    if (this.selectedUser != undefined && this.selectedUser != '' && this.selectedUser != null) {
                      selectUserId = this.selectedUser;
                    } else {
                      selectUserId = this.currentUserId;
                    }

                    console.log(selectUserId);

                    if (!(this.deviceImei.length != 15)) {
                      _context.next = 6;
                      break;
                    }

                    this.handleError("Device Imei must be 15 digits");
                    return _context.abrupt("return", true);

                  case 6:
                    _context.next = 8;
                    return this.loadingCtrl.create({
                      spinner: 'bubbles',
                      message: 'Adding New Device ...'
                    });

                  case 8:
                    loading = _context.sent;
                    loading.present();
                    this.userService.addDevice(this.deviceForm.value, selectUserId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
                      return loading.dismiss();
                    })).subscribe(function (_) {
                      console.log(_);

                      if (JSON.parse(_)['success']) {
                        _this3.navCtrl.navigateRoot(['dashboard'], {
                          replaceUrl: true
                        });

                        _this3.handleError("Add New Device Successfully");
                      } else _this3.handleError("Didn't Add");
                    }, function (err) {
                      _this3.handleError(err);
                    });

                  case 11:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "handleError",
        value: function handleError(error) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var message, toast;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    message = "" + error;
                    _context2.next = 3;
                    return this.toastCtrl.create({
                      message: message,
                      duration: 5000,
                      position: 'bottom'
                    });

                  case 3:
                    toast = _context2.sent;
                    toast.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return AddDevicePage;
    }();

    AddDevicePage.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
      }, {
        type: _api_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
      }];
    };

    AddDevicePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-device',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-device.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/add-device/add-device.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-device.page.scss */
      "./src/app/add-device/add-device.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _api_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])], AddDevicePage);
    /***/
  }
}]);
//# sourceMappingURL=add-device-add-device-module-es5.js.map