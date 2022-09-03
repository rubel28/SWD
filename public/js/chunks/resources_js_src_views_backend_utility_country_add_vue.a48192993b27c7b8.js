"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_src_views_backend_utility_country_add_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/backend/utility/country/add.vue?vue&type=script&setup=true&lang=js":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/backend/utility/country/add.vue?vue&type=script&setup=true&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _assets_sass_scrollspyNav_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/sass/scrollspyNav.scss */ "./resources/js/src/assets/sass/scrollspyNav.scss");
/* harmony import */ var _assets_sass_users_account_setting_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/sass/users/account-setting.scss */ "./resources/js/src/assets/sass/users/account-setting.scss");
/* harmony import */ var _composables_use_meta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/composables/use-meta */ "./resources/js/src/composables/use-meta.js");
/* harmony import */ var _composables_useValidation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/composables/useValidation */ "./resources/js/src/composables/useValidation.js");
/* harmony import */ var _composables_useShowMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/composables/useShowMessage */ "./resources/js/src/composables/useShowMessage.js");






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'add',
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    (0,_composables_use_meta__WEBPACK_IMPORTED_MODULE_3__.useMeta)({
      title: 'New User'
    });

    var _useValidation = (0,_composables_useValidation__WEBPACK_IMPORTED_MODULE_4__["default"])(),
        validation = _useValidation.validation,
        email_validate = _useValidation.email_validate,
        is_submit_form = _useValidation.is_submit_form;

    var _useShowMessage = (0,_composables_useShowMessage__WEBPACK_IMPORTED_MODULE_5__["default"])(),
        showMessage = _useShowMessage.showMessage;

    var selected = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var selected_file = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var form1 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({
      country_iso: '',
      country_name: '',
      country_iso3: '',
      country_num_code: '',
      country_phone_code: '',
      country_logo: '',
      country_status: ''
    });

    var change_file = function change_file(event) {
      selected_file.value = URL.createObjectURL(event.target.files[0]);
    };

    var submit_form = function submit_form() {
      is_submit_form.value = true; //const allValid = validation(form1);

      if (validation(form1)) {
        //form validated success
        showMessage('Form submitted successfully.', 'success'); // type => success/error
      } else {
        showMessage('Field Validation Error!', 'error'); // type => success/error
      }
    };

    var __returned__ = {
      validation: validation,
      email_validate: email_validate,
      is_submit_form: is_submit_form,
      showMessage: showMessage,
      selected: selected,
      selected_file: selected_file,
      form1: form1,
      change_file: change_file,
      submit_form: submit_form,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
      useMeta: _composables_use_meta__WEBPACK_IMPORTED_MODULE_3__.useMeta,
      useValidation: _composables_useValidation__WEBPACK_IMPORTED_MODULE_4__["default"],
      useShowMessage: _composables_useShowMessage__WEBPACK_IMPORTED_MODULE_5__["default"]
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/backend/utility/country/add.vue?vue&type=template&id=117c6670":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/backend/utility/country/add.vue?vue&type=template&id=117c6670 ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "layout-px-spacing"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  "class": "navbar-nav flex-row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "page-header"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("nav", {
  "class": "breadcrumb-one",
  "aria-label": "breadcrumb"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ol", {
  "class": "breadcrumb"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "breadcrumb-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "javascript:"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "class": "feather feather-home"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("polyline", {
  points: "9 22 9 12 15 12 15 22"
})])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "breadcrumb-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "/country"
}, "Country")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "breadcrumb-item active",
  "aria-current": "page"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Add New Country")])])])])])], -1
/* HOISTED */
);

var _hoisted_3 = {
  "class": "account-settings-container layout-top-spacing"
};
var _hoisted_4 = {
  "class": "account-content"
};
var _hoisted_5 = {
  "class": "scrollspy-example",
  "data-spy": "scroll",
  "data-target": "#account-settings-scroll",
  "data-offset": "-100"
};
var _hoisted_6 = {
  "class": "row"
};
var _hoisted_7 = {
  "class": "col-xl-12 col-lg-12 col-md-12 layout-spacing"
};
var _hoisted_8 = ["onSubmit"];

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"info\"><h6 class=\"\">Country Information</h6><!-- Forms grid --><div class=\"row\"><div class=\"form-group col-md-6\"><label for=\"inputEmail4\">Email</label><input type=\"email\" class=\"form-control\" id=\"inputEmail4\" placeholder=\"Email\"></div><div class=\"form-group col-md-6\"><label for=\"inputPassword4\">Password</label><input type=\"password\" class=\"form-control\" id=\"inputPassword4\" placeholder=\"Password\"></div></div><div class=\"form-group\"><label for=\"inputAddress\">Address</label><input type=\"text\" class=\"form-control\" id=\"inputAddress\" placeholder=\"1234 Main St\"></div><div class=\"form-group\"><label for=\"inputAddress2\">Address 2</label><input type=\"text\" class=\"form-control\" id=\"inputAddress2\" placeholder=\"Apartment, studio, or floor\"></div><div class=\"row\"><div class=\"form-group col-md-6\"><label for=\"inputCity\">City</label><input type=\"text\" class=\"form-control\" id=\"inputCity\"></div><div class=\"form-group col-md-4\"><label for=\"inputState\">State</label><select id=\"inputState\" class=\"form-select\"><option selected>Choose...</option><option>...</option></select></div><div class=\"form-group col-md-2\"><label for=\"inputZip\">Zip</label><input type=\"text\" class=\"form-control\" id=\"inputZip\"></div></div><div class=\"form-group\"><div class=\"form-check ps-0\"><div class=\"custom-control custom-checkbox checkbox-primary\"><input type=\"checkbox\" class=\"custom-control-input\" id=\"gridCheck\"><label class=\"custom-control-label\" for=\"gridCheck\">Check me out</label></div></div></div><button type=\"submit\" class=\"btn btn-primary mt-3\">Sign in</button></div>", 1);

var _hoisted_10 = [_hoisted_9];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Teleport, {
    to: "#breadcrumb"
  }, [_hoisted_2])), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    novalidate: "",
    id: "general-info",
    "class": "section general-info",
    onSubmit: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($setup.submit_form, ["stop", "prevent"])
  }, _hoisted_10, 40
  /* PROPS, HYDRATE_EVENTS */
  , _hoisted_8)])])])])])]);
}

/***/ }),

/***/ "./resources/js/src/composables/useValidation.js":
/*!*******************************************************!*\
  !*** ./resources/js/src/composables/useValidation.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var is_submit_form = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);

var validation = function validation(validateData) {
  var isAllValid = false; //console.log(validateData)

  Object.keys(validateData.value).every(function (key) {
    if (validateData.value[key]) {
      isAllValid = true;
    } else {
      isAllValid = false;
      return false;
    }

    return true;
  });

  if (isAllValid) {
    return true;
  } else {
    return false;
  }
};

var email_validate = function email_validate(email) {
  var regexp = /^[\w.%+-]+@[\w.-]+\.[\w]{2,6}$/;
  return regexp.test(email);
};

var useValidation = function useValidation() {
  return {
    validation: validation,
    email_validate: email_validate,
    is_submit_form: is_submit_form
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useValidation);

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[0]!./resources/js/src/assets/sass/scrollspyNav.scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[0]!./resources/js/src/assets/sass/scrollspyNav.scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n\t===============================\n\t\t\t@Import\tMixins\n\t===============================\n*/\n.sidenav {\n  position: fixed;\n  right: -30px;\n  top: 125px;\n  width: 236px;\n  border-left: 1px solid #e0e6ed;\n}\n\n.sidenav .sidenav-header:after {\n  display: none;\n}\n\n.sidenav .sidenav-header p {\n  font-weight: 600;\n  font-size: 18px;\n  color: #fff;\n  margin-bottom: 20px;\n  background: #4361ee;\n  text-align: center;\n  border-radius: 5px;\n  padding: 4px;\n  letter-spacing: 1px;\n  background-image: linear-gradient(to right, #4361ee 0%, #805dca 100%);\n}\n\n.sidenav .sidenav-content {\n  background-color: transparent;\n  display: block;\n  border: none;\n}\n\n.sidenav .sidenav-content a {\n  display: block;\n  padding: 3px 0px;\n  color: #3b3f5c;\n  font-size: 12px;\n  padding: 3px 25px;\n}\n\n.sidenav .sidenav-content a.active {\n  color: #805dca;\n  font-weight: 700;\n  border-left: 1px solid #805dca;\n}\n\n.sidenav .sidenav-content a:hover {\n  color: #4361ee;\n  font-weight: 700;\n  border-left: 1px solid #805dca;\n}\n\n#content > .container {\n  display: flex;\n  max-width: 58.333333% !important;\n  margin-left: 2px;\n  padding: 0 16px !important;\n}\n\n#content > .container > .container {\n  padding: 0;\n  margin: 0;\n}\n\n@media (max-width: 575px) {\n  .sidenav .sidenav-content a {\n    padding: 4px 7px;\n    margin-right: 0;\n    margin-bottom: 10px;\n  }\n}\n@media (max-width: 1199px) {\n  .sidenav {\n    display: none;\n  }\n  #content > .container {\n    max-width: 100% !important;\n    margin-left: auto;\n  }\n  #content > .container > .container {\n    max-width: 100%;\n  }\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[0]!./resources/js/src/assets/sass/users/account-setting.scss":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[0]!./resources/js/src/assets/sass/users/account-setting.scss ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n\t===============================\n\t\t\t@Import\tMixins\n\t===============================\n*/\n.section {\n  border: 1px solid #e0e6ed;\n  box-shadow: 0 0 40px 0 rgba(94, 92, 154, 0.06);\n}\n\n.layout-spacing {\n  padding-bottom: 25px;\n}\n\n.blockui-growl-message {\n  display: none;\n  text-align: left;\n  padding: 15px;\n  background-color: #1abc9c;\n  color: #fff;\n  border-radius: 3px;\n}\n\n.blockui-growl-message i {\n  font-size: 20px;\n}\n\n.general-info .info h6,\n.about .info h5,\n.work-platforms .info h5,\n.contact .info h5,\n.social .info h5,\n.skill .info h5,\n.edu-experience .info h5,\n.work-experience .info h5 {\n  color: #3b3f5c;\n  margin: 4px 8px 40px 8px;\n  font-weight: 700;\n  font-size: 16px;\n  text-transform: uppercase;\n}\n\n/*\n    General Infomation\n*/\n.general-info {\n  background-color: #fff;\n  border-radius: 6px;\n}\n\n.general-info .info,\n.general-info .save-info {\n  padding: 20px;\n}\n\n.general-info .info .form {\n  width: 92%;\n}\n\n.general-info .info .upload {\n  border-right: 1px solid #ebedf2;\n}\n\n.general-info .info .upload p {\n  font-size: 14px;\n  font-weight: 600;\n  color: #4361ee;\n}\n\n.general-info .info .upload p i {\n  font-size: 22px;\n  color: #4361ee;\n  vertical-align: middle;\n}\n\n.general-info .info label {\n  color: #888ea8;\n  font-size: 13px;\n  letter-spacing: 1px;\n}\n\n.general-info .info .dropify-wrapper {\n  width: 120px;\n  height: 120px;\n  border: none;\n  border-radius: 6px;\n}\n\n.general-info .info .dropify-wrapper .dropify-preview {\n  background-color: #fff;\n  padding: 0;\n}\n\n.general-info .info .dropify-wrapper .dropify-clear {\n  font-size: 16px;\n  padding: 4px 8px;\n  color: #fff;\n  border: none;\n}\n\n.general-info .info .dropify-wrapper .dropify-clear:hover {\n  background-color: transparent;\n}\n\n.general-info .info .dropify-wrapper .dropify-preview .dropify-infos .dropify-infos-inner p.dropify-infos-message {\n  padding-top: 27px;\n}\n\n.general-info .info .dropify-wrapper .dropify-preview .dropify-infos .dropify-infos-inner p.dropify-infos-message::before {\n  height: 20px;\n  position: absolute;\n  top: -1px;\n  left: 45%;\n  color: #fff;\n  transform: translate(-50%, 0);\n  background: transparent;\n  width: 0;\n  height: 0;\n  font-size: 28px;\n  width: 24px;\n  content: \" \";\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-upload-cloud'%3e%3cpolyline points='16 16 12 12 8 16'%3e%3c/polyline%3e%3cline x1='12' y1='12' x2='12' y2='21'%3e%3c/line%3e%3cpath d='M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3'%3e%3c/path%3e%3cpolyline points='16 16 12 12 8 16'%3e%3c/polyline%3e%3c/svg%3e\");\n  height: 20px;\n}\n\n.general-info .info .dropify-wrapper.touch-fallback {\n  border: 1px solid #ebedf2;\n}\n\n.general-info .info .dropify-wrapper.touch-fallback .dropify-preview .dropify-infos .dropify-infos-inner {\n  padding: 0;\n}\n\n.general-info .info .dropify-wrapper.touch-fallback .dropify-clear {\n  color: #515365;\n}\n\n.general-info .info .dropify-wrapper.touch-fallback .dropify-preview .dropify-infos .dropify-infos-inner p.dropify-filename {\n  margin-top: 10px;\n}\n\n/*\n    Image upload\n*/\n/*\n    About\n*/\n.about {\n  background-color: #fff;\n  border-radius: 6px;\n}\n\n.about .info,\n.about .save-info {\n  padding: 20px;\n}\n\n.about .info label {\n  color: #888ea8;\n  font-size: 13px;\n  letter-spacing: 1px;\n}\n\n/*\n    Education and Experience\n*/\n.work-platforms {\n  background-color: #fff;\n  border-radius: 6px;\n}\n\n.work-platforms .info {\n  padding: 20px;\n}\n\n.work-platforms .platform-div:not(:last-child) {\n  margin-bottom: 55px;\n  padding-bottom: 55px;\n  border-bottom: 2px solid #e0e6ed;\n}\n\n.work-platforms .platform-div:last-child {\n  margin-bottom: 40px;\n}\n\n/*\n    Contact\n*/\n.contact {\n  background-color: #fff;\n  border-radius: 6px;\n}\n\n.contact .info,\n.contact .save-info {\n  padding: 20px;\n}\n\n.contact .info label {\n  color: #888ea8;\n  font-size: 13px;\n  letter-spacing: 1px;\n}\n\n/*\n    Social\n*/\n.social {\n  background-color: #fff;\n  border-radius: 6px;\n}\n\n.social .info,\n.social .save-info {\n  padding: 20px;\n}\n\n.social .input-group-text {\n  border-radius: 6px;\n  color: #fff;\n  border: none;\n}\n\n.input-group .input-group-text svg {\n  color: #4361ee;\n}\n\n.social .info input {\n  border-radius: 0.25rem !important;\n}\n\n/*\n    Skills\n*/\n.skill {\n  background-color: #fff;\n  border-radius: 6px;\n}\n\n.skill .input-form {\n  margin-bottom: 24px;\n  display: flex;\n  width: 50%;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n.skill input[type=text] {\n  margin-right: 10px;\n}\n\n.skill .info {\n  padding: 20px;\n}\n\n.skill .skill-name {\n  font-size: 13px;\n  font-weight: 700;\n  margin-bottom: 0;\n  margin-top: 0;\n}\n\n.skill .save-info {\n  padding: 20px;\n}\n\n.skill .info label {\n  text-transform: uppercase;\n  color: #eaf1ff;\n}\n\n.skill .custom-progress.progress-up .range-count {\n  margin-top: 11px;\n}\n\n.skill .custom-progress.progress-down .range-count {\n  margin-top: 15px;\n}\n\n.skill .range-count {\n  font-weight: 700;\n  color: #3b3f5c;\n}\n\n.skill .range-count .range-count-number {\n  display: inline-block;\n  background: #ffffff;\n  padding: 3px 8px;\n  border-radius: 5px;\n  color: #4361ee;\n  border: 1px solid #e0e6ed;\n}\n\n.skill .custom-progress.top-right .range-count, .skill .custom-progress.bottom-right .range-count {\n  text-align: right;\n}\n\n.skill .progress-range-counter::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  appearance: none;\n  background: #4361ee;\n  cursor: pointer;\n  height: 16px;\n  width: 16px;\n  margin-top: -4px;\n  -webkit-transition: all 0.35s ease;\n  transition: all 0.35s ease;\n}\n\n.skill .progress-range-counter:active::-webkit-slider-thumb {\n  transform: scale(1.2);\n}\n\n.skill .progress-range-counter:focus::-webkit-slider-thumb {\n  background: #4361ee;\n  cursor: pointer;\n  height: 16px;\n  width: 16px;\n  margin-top: -4px;\n  box-shadow: none;\n}\n\n.skill .progress-range-counter::-moz-range-thumb {\n  background: #4361ee;\n  cursor: pointer;\n  height: 16px;\n  width: 16px;\n  margin-top: -4px;\n}\n\n/*\n    Education and Experience\n*/\n.edu-experience {\n  background-color: #fff;\n  border-radius: 6px;\n}\n\n.edu-experience .edu-section:not(:last-child) {\n  margin-bottom: 55px;\n  padding-bottom: 55px;\n  border-bottom: 2px solid #e0e6ed;\n}\n\n.edu-experience .edu-section:last-child {\n  margin-bottom: 40px;\n}\n\n.edu-experience .info,\n.edu-experience .save-info {\n  padding: 20px;\n}\n\n.edu-experience .info label {\n  color: #888ea8;\n  font-size: 13px;\n  letter-spacing: 1px;\n}\n\n/*\n    Work Experience\n*/\n.work-experience {\n  background-color: #fff;\n  border-radius: 6px;\n}\n\n.work-experience .work-section:not(:last-child) {\n  margin-bottom: 55px;\n  padding-bottom: 55px;\n  border-bottom: 2px solid #e0e6ed;\n}\n\n.work-experience .work-section:last-child {\n  margin-bottom: 40px;\n}\n\n.work-experience .info,\n.work-experience .save-info {\n  padding: 20px;\n}\n\n.work-experience .info label {\n  color: #888ea8;\n  font-size: 13px;\n  letter-spacing: 1px;\n}\n\n/*\n    Footer\n*/\n.account-settings-footer {\n  position: -webkit-sticky;\n  position: sticky;\n  bottom: 0;\n  width: 100%;\n  background: #3b3f5c;\n  padding: 12px 20px;\n  box-shadow: -2px -9px 20px rgba(126, 142, 177, 0.12);\n  border-top: 1px solid #f1f2f3;\n  border-radius: 6px 6px 0 0;\n  z-index: 5;\n}\n\n.account-settings-footer .as-footer-container {\n  display: flex;\n  justify-content: space-between;\n}\n\n@media (max-width: 991px) {\n  .account-settings-container .account-content {\n    width: 100%;\n    padding: 0;\n  }\n}\n@media (max-width: 767px) {\n  .general-info .info .upload {\n    border-right: none;\n  }\n  .skill .input-form {\n    width: 100%;\n  }\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/src/assets/sass/scrollspyNav.scss":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/sass/scrollspyNav.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_0_scrollspyNav_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[0]!./scrollspyNav.scss */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[0]!./resources/js/src/assets/sass/scrollspyNav.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_0_scrollspyNav_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_0_scrollspyNav_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/src/assets/sass/users/account-setting.scss":
/*!*****************************************************************!*\
  !*** ./resources/js/src/assets/sass/users/account-setting.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_0_account_setting_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[0]!./account-setting.scss */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[0]!./resources/js/src/assets/sass/users/account-setting.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_0_account_setting_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_0_account_setting_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/src/views/backend/utility/country/add.vue":
/*!****************************************************************!*\
  !*** ./resources/js/src/views/backend/utility/country/add.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _add_vue_vue_type_template_id_117c6670__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add.vue?vue&type=template&id=117c6670 */ "./resources/js/src/views/backend/utility/country/add.vue?vue&type=template&id=117c6670");
/* harmony import */ var _add_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add.vue?vue&type=script&setup=true&lang=js */ "./resources/js/src/views/backend/utility/country/add.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var H_xampp_htdocs_swd_backend_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,H_xampp_htdocs_swd_backend_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_add_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_add_vue_vue_type_template_id_117c6670__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/src/views/backend/utility/country/add.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/src/views/backend/utility/country/add.vue?vue&type=script&setup=true&lang=js":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/views/backend/utility/country/add.vue?vue&type=script&setup=true&lang=js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_add_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_add_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./add.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/backend/utility/country/add.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/src/views/backend/utility/country/add.vue?vue&type=template&id=117c6670":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/backend/utility/country/add.vue?vue&type=template&id=117c6670 ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_add_vue_vue_type_template_id_117c6670__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_add_vue_vue_type_template_id_117c6670__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./add.vue?vue&type=template&id=117c6670 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/backend/utility/country/add.vue?vue&type=template&id=117c6670");


/***/ })

}]);