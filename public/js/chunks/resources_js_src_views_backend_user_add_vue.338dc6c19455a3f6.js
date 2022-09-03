(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_src_views_backend_user_add_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/backend/user/add.vue?vue&type=script&setup=true&lang=js":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/backend/user/add.vue?vue&type=script&setup=true&lang=js ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _assets_sass_scrollspyNav_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/sass/scrollspyNav.scss */ "./resources/js/src/assets/sass/scrollspyNav.scss");
/* harmony import */ var _assets_sass_users_account_setting_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/sass/users/account-setting.scss */ "./resources/js/src/assets/sass/users/account-setting.scss");
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flatpickr/dist/flatpickr.css */ "./node_modules/flatpickr/dist/flatpickr.css");
/* harmony import */ var _assets_sass_forms_custom_flatpickr_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/assets/sass/forms/custom-flatpickr.css */ "./resources/js/src/assets/sass/forms/custom-flatpickr.css");
/* harmony import */ var _composables_use_meta__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/composables/use-meta */ "./resources/js/src/composables/use-meta.js");






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'add',
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    (0,_composables_use_meta__WEBPACK_IMPORTED_MODULE_5__.useMeta)({
      title: 'New User'
    });
    var selected = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var selected_file = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var form1 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({
      name: ''
    });
    var is_submit_form = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var ddl_1 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('20');
    var ddl_2 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('Jan');
    var ddl_3 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('1989');
    var ddl_4 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('May');
    var ddl_5 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('2009');
    var ddl_6 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('United States');
    var months = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);

    var change_file = function change_file(event) {
      selected_file.value = URL.createObjectURL(event.target.files[0]);
    };

    var save = function save() {
      showMessage('Settings saved successfully.');
    };

    var showMessage = function showMessage() {
      var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'success';
      var toast = window.Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000
      });
      toast.fire({
        icon: type,
        title: msg,
        padding: '10px 20px'
      });
    };

    var submit_form = function submit_form() {
      console.log('ok');
      is_submit_form.value = true;

      if (form1.value.name) {
        //form validated success
        showMessage('Form submitted successfully.');
      }
    };

    var __returned__ = {
      selected: selected,
      selected_file: selected_file,
      form1: form1,
      is_submit_form: is_submit_form,
      ddl_1: ddl_1,
      ddl_2: ddl_2,
      ddl_3: ddl_3,
      ddl_4: ddl_4,
      ddl_5: ddl_5,
      ddl_6: ddl_6,
      months: months,
      change_file: change_file,
      save: save,
      showMessage: showMessage,
      submit_form: submit_form,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
      useMeta: _composables_use_meta__WEBPACK_IMPORTED_MODULE_5__.useMeta
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/backend/user/add.vue?vue&type=template&id=344fe682":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/backend/user/add.vue?vue&type=template&id=344fe682 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
  href: "/users"
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
  "class": "feather feather-users"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("circle", {
  cx: "9",
  cy: "7",
  r: "4"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M23 21v-2a4 4 0 0 0-3-3.87"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M16 3.13a4 4 0 0 1 0 7.75"
})])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "breadcrumb-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "/users"
}, "Users")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "breadcrumb-item active",
  "aria-current": "page"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "New User")])])])])])], -1
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
var _hoisted_9 = {
  "class": "info"
};

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", {
  "class": ""
}, "New User Information", -1
/* HOISTED */
);

var _hoisted_11 = {
  "class": "row"
};
var _hoisted_12 = {
  "class": "col-lg-11 mx-auto"
};
var _hoisted_13 = {
  "class": "row"
};
var _hoisted_14 = {
  "class": "col-xl-2 col-lg-12 col-md-4"
};
var _hoisted_15 = {
  "class": "upload mt-4 pe-md-4"
};
var _hoisted_16 = ["src"];

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "mt-2"
}, "Upload Picture", -1
/* HOISTED */
);

var _hoisted_18 = {
  "class": "col-xl-10 col-lg-12 col-md-8 mt-md-0 mt-4"
};
var _hoisted_19 = {
  "class": "form"
};
var _hoisted_20 = {
  "class": "row"
};
var _hoisted_21 = {
  "class": "col-sm-6"
};
var _hoisted_22 = {
  "class": "form-group"
};

var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "fullName"
}, "Full Name", -1
/* HOISTED */
);

var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "valid-feedback"
}, "Looks good!", -1
/* HOISTED */
);

var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "invalid-feedback"
}, "Please fill the name", -1
/* HOISTED */
);

var _hoisted_26 = {
  "class": "col-sm-6"
};
var _hoisted_27 = {
  "class": "form-group"
};

var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "fullName"
}, "Mobile Number", -1
/* HOISTED */
);

var _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "valid-feedback"
}, "Looks good!", -1
/* HOISTED */
);

var _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "invalid-feedback"
}, "Please fill the mobile number", -1
/* HOISTED */
);

var _hoisted_31 = {
  "class": "row"
};
var _hoisted_32 = {
  "class": "col-sm-6"
};

var _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "dob-input"
}, "Date of Birth", -1
/* HOISTED */
);

var _hoisted_34 = {
  "class": "d-sm-flex d-block"
};

var _hoisted_35 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-sm-6"
}, null, -1
/* HOISTED */
);

var _hoisted_36 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "form-group"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "profession"
}, "Profession"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  "class": "form-control mb-4",
  id: "profession",
  placeholder: "Designer",
  value: "Web Developer"
})], -1
/* HOISTED */
);

var _hoisted_37 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-sm-6"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "submit",
  "class": "btn btn-success"
}, "Save Changes")])], -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_flat_pickr = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("flat-pickr");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Teleport, {
    to: "#breadcrumb"
  }, [_hoisted_2])), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    novalidate: "",
    id: "general-info",
    "class": "section general-info",
    onSubmit: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($setup.submit_form, ["stop", "prevent"])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    ref: "fl_profile",
    type: "file",
    "class": "d-none",
    accept: "image/*",
    onChange: $setup.change_file
  }, null, 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: $setup.selected_file ? $setup.selected_file : __webpack_require__(/*! @/assets/images/user-profile.jpeg */ "./resources/js/src/assets/images/user-profile.jpeg"),
    alt: "profile",
    "class": "profile-preview",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.$refs.fl_profile.click();
    })
  }, null, 8
  /* PROPS */
  , _hoisted_16), _hoisted_17])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [_hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $setup.form1.name = $event;
    }),
    id: "fullName",
    type: "text",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["form-control", [$setup.is_submit_form ? $setup.form1.name ? 'is-valid' : 'is-invalid' : '']]),
    placeholder: "Full Name"
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form1.name]]), _hoisted_24, _hoisted_25])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [_hoisted_28, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $setup.form1.name = $event;
    }),
    id: "mobile",
    type: "text",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["form-control", [$setup.is_submit_form ? $setup.form1.name ? 'is-valid' : 'is-invalid' : '']]),
    placeholder: "Mobile Number"
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form1.name]]), _hoisted_29, _hoisted_30])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [_hoisted_33, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_flat_pickr, {
    "class": "form-control flatpickr active"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                                                                    <div class=\"form-group me-1\">\n                                                                        <select v-model=\"ddl_1\" class=\"form-select\">\n                                                                            <option value=\"Day\">Day</option>\n                                                                            <option v-for=\"item in 30\" :value=\"item\" :key=\"item\">\n                                                                                {{ item }}\n                                                                            </option>\n                                                                        </select>\n                                                                    </div>\n                                                                    <div class=\"form-group me-1\">\n                                                                        <select v-model=\"ddl_2\" class=\"form-select\">\n                                                                            <option value=\"Month\">Month</option>\n                                                                            <option v-for=\"item in months\" :value=\"item\" :key=\"item\">\n                                                                                {{ item }}\n                                                                            </option>\n                                                                        </select>\n                                                                    </div>\n                                                                    <div class=\"form-group me-1\">\n                                                                        <select v-model=\"ddl_3\" class=\"form-select\">\n                                                                            <option value=\"Year\">Year</option>\n                                                                            <option v-for=\"item in 42\" :value=\"2022 - item\" :key=\"2022 - item\">\n                                                                                {{ 2022 - item }}\n                                                                            </option>\n                                                                        </select>\n                                                                    </div>")])]), _hoisted_35]), _hoisted_36])])]), _hoisted_37])])])], 40
  /* PROPS, HYDRATE_EVENTS */
  , _hoisted_8)])])])])])]);
}

/***/ }),

/***/ "./resources/js/src/assets/images/user-profile.jpeg":
/*!**********************************************************!*\
  !*** ./resources/js/src/assets/images/user-profile.jpeg ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "/images/user-profile-26fc32107d4b21a1d5adb117f1edf4e1.jpeg";

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[0]!./resources/js/src/assets/sass/scrollspyNav.scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[0]!./resources/js/src/assets/sass/scrollspyNav.scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/flatpickr/dist/flatpickr.css":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/flatpickr/dist/flatpickr.css ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".flatpickr-calendar {\n  background: transparent;\n  opacity: 0;\n  display: none;\n  text-align: center;\n  visibility: hidden;\n  padding: 0;\n  -webkit-animation: none;\n          animation: none;\n  direction: ltr;\n  border: 0;\n  font-size: 14px;\n  line-height: 24px;\n  border-radius: 5px;\n  position: absolute;\n  width: 307.875px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -ms-touch-action: manipulation;\n      touch-action: manipulation;\n  background: #fff;\n  -webkit-box-shadow: 1px 0 0 #e6e6e6, -1px 0 0 #e6e6e6, 0 1px 0 #e6e6e6, 0 -1px 0 #e6e6e6, 0 3px 13px rgba(0,0,0,0.08);\n          box-shadow: 1px 0 0 #e6e6e6, -1px 0 0 #e6e6e6, 0 1px 0 #e6e6e6, 0 -1px 0 #e6e6e6, 0 3px 13px rgba(0,0,0,0.08);\n}\n.flatpickr-calendar.open,\n.flatpickr-calendar.inline {\n  opacity: 1;\n  max-height: 640px;\n  visibility: visible;\n}\n.flatpickr-calendar.open {\n  display: inline-block;\n  z-index: 99999;\n}\n.flatpickr-calendar.animate.open {\n  -webkit-animation: fpFadeInDown 300ms cubic-bezier(0.23, 1, 0.32, 1);\n          animation: fpFadeInDown 300ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.flatpickr-calendar.inline {\n  display: block;\n  position: relative;\n  top: 2px;\n}\n.flatpickr-calendar.static {\n  position: absolute;\n  top: calc(100% + 2px);\n}\n.flatpickr-calendar.static.open {\n  z-index: 999;\n  display: block;\n}\n.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+1) .flatpickr-day.inRange:nth-child(7n+7) {\n  -webkit-box-shadow: none !important;\n          box-shadow: none !important;\n}\n.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+2) .flatpickr-day.inRange:nth-child(7n+1) {\n  -webkit-box-shadow: -2px 0 0 #e6e6e6, 5px 0 0 #e6e6e6;\n          box-shadow: -2px 0 0 #e6e6e6, 5px 0 0 #e6e6e6;\n}\n.flatpickr-calendar .hasWeeks .dayContainer,\n.flatpickr-calendar .hasTime .dayContainer {\n  border-bottom: 0;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.flatpickr-calendar .hasWeeks .dayContainer {\n  border-left: 0;\n}\n.flatpickr-calendar.hasTime .flatpickr-time {\n  height: 40px;\n  border-top: 1px solid #e6e6e6;\n}\n.flatpickr-calendar.noCalendar.hasTime .flatpickr-time {\n  height: auto;\n}\n.flatpickr-calendar:before,\n.flatpickr-calendar:after {\n  position: absolute;\n  display: block;\n  pointer-events: none;\n  border: solid transparent;\n  content: '';\n  height: 0;\n  width: 0;\n  left: 22px;\n}\n.flatpickr-calendar.rightMost:before,\n.flatpickr-calendar.arrowRight:before,\n.flatpickr-calendar.rightMost:after,\n.flatpickr-calendar.arrowRight:after {\n  left: auto;\n  right: 22px;\n}\n.flatpickr-calendar.arrowCenter:before,\n.flatpickr-calendar.arrowCenter:after {\n  left: 50%;\n  right: 50%;\n}\n.flatpickr-calendar:before {\n  border-width: 5px;\n  margin: 0 -5px;\n}\n.flatpickr-calendar:after {\n  border-width: 4px;\n  margin: 0 -4px;\n}\n.flatpickr-calendar.arrowTop:before,\n.flatpickr-calendar.arrowTop:after {\n  bottom: 100%;\n}\n.flatpickr-calendar.arrowTop:before {\n  border-bottom-color: #e6e6e6;\n}\n.flatpickr-calendar.arrowTop:after {\n  border-bottom-color: #fff;\n}\n.flatpickr-calendar.arrowBottom:before,\n.flatpickr-calendar.arrowBottom:after {\n  top: 100%;\n}\n.flatpickr-calendar.arrowBottom:before {\n  border-top-color: #e6e6e6;\n}\n.flatpickr-calendar.arrowBottom:after {\n  border-top-color: #fff;\n}\n.flatpickr-calendar:focus {\n  outline: 0;\n}\n.flatpickr-wrapper {\n  position: relative;\n  display: inline-block;\n}\n.flatpickr-months {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.flatpickr-months .flatpickr-month {\n  background: transparent;\n  color: rgba(0,0,0,0.9);\n  fill: rgba(0,0,0,0.9);\n  height: 34px;\n  line-height: 1;\n  text-align: center;\n  position: relative;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  overflow: hidden;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.flatpickr-months .flatpickr-prev-month,\n.flatpickr-months .flatpickr-next-month {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  text-decoration: none;\n  cursor: pointer;\n  position: absolute;\n  top: 0;\n  height: 34px;\n  padding: 10px;\n  z-index: 3;\n  color: rgba(0,0,0,0.9);\n  fill: rgba(0,0,0,0.9);\n}\n.flatpickr-months .flatpickr-prev-month.flatpickr-disabled,\n.flatpickr-months .flatpickr-next-month.flatpickr-disabled {\n  display: none;\n}\n.flatpickr-months .flatpickr-prev-month i,\n.flatpickr-months .flatpickr-next-month i {\n  position: relative;\n}\n.flatpickr-months .flatpickr-prev-month.flatpickr-prev-month,\n.flatpickr-months .flatpickr-next-month.flatpickr-prev-month {\n/*\n      /*rtl:begin:ignore*/\n/*\n      */\n  left: 0;\n/*\n      /*rtl:end:ignore*/\n/*\n      */\n}\n/*\n      /*rtl:begin:ignore*/\n/*\n      /*rtl:end:ignore*/\n.flatpickr-months .flatpickr-prev-month.flatpickr-next-month,\n.flatpickr-months .flatpickr-next-month.flatpickr-next-month {\n/*\n      /*rtl:begin:ignore*/\n/*\n      */\n  right: 0;\n/*\n      /*rtl:end:ignore*/\n/*\n      */\n}\n/*\n      /*rtl:begin:ignore*/\n/*\n      /*rtl:end:ignore*/\n.flatpickr-months .flatpickr-prev-month:hover,\n.flatpickr-months .flatpickr-next-month:hover {\n  color: #959ea9;\n}\n.flatpickr-months .flatpickr-prev-month:hover svg,\n.flatpickr-months .flatpickr-next-month:hover svg {\n  fill: #f64747;\n}\n.flatpickr-months .flatpickr-prev-month svg,\n.flatpickr-months .flatpickr-next-month svg {\n  width: 14px;\n  height: 14px;\n}\n.flatpickr-months .flatpickr-prev-month svg path,\n.flatpickr-months .flatpickr-next-month svg path {\n  -webkit-transition: fill 0.1s;\n  transition: fill 0.1s;\n  fill: inherit;\n}\n.numInputWrapper {\n  position: relative;\n  height: auto;\n}\n.numInputWrapper input,\n.numInputWrapper span {\n  display: inline-block;\n}\n.numInputWrapper input {\n  width: 100%;\n}\n.numInputWrapper input::-ms-clear {\n  display: none;\n}\n.numInputWrapper input::-webkit-outer-spin-button,\n.numInputWrapper input::-webkit-inner-spin-button {\n  margin: 0;\n  -webkit-appearance: none;\n}\n.numInputWrapper span {\n  position: absolute;\n  right: 0;\n  width: 14px;\n  padding: 0 4px 0 2px;\n  height: 50%;\n  line-height: 50%;\n  opacity: 0;\n  cursor: pointer;\n  border: 1px solid rgba(57,57,57,0.15);\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.numInputWrapper span:hover {\n  background: rgba(0,0,0,0.1);\n}\n.numInputWrapper span:active {\n  background: rgba(0,0,0,0.2);\n}\n.numInputWrapper span:after {\n  display: block;\n  content: \"\";\n  position: absolute;\n}\n.numInputWrapper span.arrowUp {\n  top: 0;\n  border-bottom: 0;\n}\n.numInputWrapper span.arrowUp:after {\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  border-bottom: 4px solid rgba(57,57,57,0.6);\n  top: 26%;\n}\n.numInputWrapper span.arrowDown {\n  top: 50%;\n}\n.numInputWrapper span.arrowDown:after {\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  border-top: 4px solid rgba(57,57,57,0.6);\n  top: 40%;\n}\n.numInputWrapper span svg {\n  width: inherit;\n  height: auto;\n}\n.numInputWrapper span svg path {\n  fill: rgba(0,0,0,0.5);\n}\n.numInputWrapper:hover {\n  background: rgba(0,0,0,0.05);\n}\n.numInputWrapper:hover span {\n  opacity: 1;\n}\n.flatpickr-current-month {\n  font-size: 135%;\n  line-height: inherit;\n  font-weight: 300;\n  color: inherit;\n  position: absolute;\n  width: 75%;\n  left: 12.5%;\n  padding: 7.48px 0 0 0;\n  line-height: 1;\n  height: 34px;\n  display: inline-block;\n  text-align: center;\n  -webkit-transform: translate3d(0px, 0px, 0px);\n          transform: translate3d(0px, 0px, 0px);\n}\n.flatpickr-current-month span.cur-month {\n  font-family: inherit;\n  font-weight: 700;\n  color: inherit;\n  display: inline-block;\n  margin-left: 0.5ch;\n  padding: 0;\n}\n.flatpickr-current-month span.cur-month:hover {\n  background: rgba(0,0,0,0.05);\n}\n.flatpickr-current-month .numInputWrapper {\n  width: 6ch;\n  width: 7ch\\0;\n  display: inline-block;\n}\n.flatpickr-current-month .numInputWrapper span.arrowUp:after {\n  border-bottom-color: rgba(0,0,0,0.9);\n}\n.flatpickr-current-month .numInputWrapper span.arrowDown:after {\n  border-top-color: rgba(0,0,0,0.9);\n}\n.flatpickr-current-month input.cur-year {\n  background: transparent;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: inherit;\n  cursor: text;\n  padding: 0 0 0 0.5ch;\n  margin: 0;\n  display: inline-block;\n  font-size: inherit;\n  font-family: inherit;\n  font-weight: 300;\n  line-height: inherit;\n  height: auto;\n  border: 0;\n  border-radius: 0;\n  vertical-align: initial;\n  -webkit-appearance: textfield;\n  -moz-appearance: textfield;\n  appearance: textfield;\n}\n.flatpickr-current-month input.cur-year:focus {\n  outline: 0;\n}\n.flatpickr-current-month input.cur-year[disabled],\n.flatpickr-current-month input.cur-year[disabled]:hover {\n  font-size: 100%;\n  color: rgba(0,0,0,0.5);\n  background: transparent;\n  pointer-events: none;\n}\n.flatpickr-current-month .flatpickr-monthDropdown-months {\n  appearance: menulist;\n  background: transparent;\n  border: none;\n  border-radius: 0;\n  box-sizing: border-box;\n  color: inherit;\n  cursor: pointer;\n  font-size: inherit;\n  font-family: inherit;\n  font-weight: 300;\n  height: auto;\n  line-height: inherit;\n  margin: -1px 0 0 0;\n  outline: none;\n  padding: 0 0 0 0.5ch;\n  position: relative;\n  vertical-align: initial;\n  -webkit-box-sizing: border-box;\n  -webkit-appearance: menulist;\n  -moz-appearance: menulist;\n  width: auto;\n}\n.flatpickr-current-month .flatpickr-monthDropdown-months:focus,\n.flatpickr-current-month .flatpickr-monthDropdown-months:active {\n  outline: none;\n}\n.flatpickr-current-month .flatpickr-monthDropdown-months:hover {\n  background: rgba(0,0,0,0.05);\n}\n.flatpickr-current-month .flatpickr-monthDropdown-months .flatpickr-monthDropdown-month {\n  background-color: transparent;\n  outline: none;\n  padding: 0;\n}\n.flatpickr-weekdays {\n  background: transparent;\n  text-align: center;\n  overflow: hidden;\n  width: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 28px;\n}\n.flatpickr-weekdays .flatpickr-weekdaycontainer {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\nspan.flatpickr-weekday {\n  cursor: default;\n  font-size: 90%;\n  background: transparent;\n  color: rgba(0,0,0,0.54);\n  line-height: 1;\n  margin: 0;\n  text-align: center;\n  display: block;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  font-weight: bolder;\n}\n.dayContainer,\n.flatpickr-weeks {\n  padding: 1px 0 0 0;\n}\n.flatpickr-days {\n  position: relative;\n  overflow: hidden;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: start;\n  -webkit-align-items: flex-start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  width: 307.875px;\n}\n.flatpickr-days:focus {\n  outline: 0;\n}\n.dayContainer {\n  padding: 0;\n  outline: 0;\n  text-align: left;\n  width: 307.875px;\n  min-width: 307.875px;\n  max-width: 307.875px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  display: inline-block;\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n          flex-wrap: wrap;\n  -ms-flex-wrap: wrap;\n  -ms-flex-pack: justify;\n  -webkit-justify-content: space-around;\n          justify-content: space-around;\n  -webkit-transform: translate3d(0px, 0px, 0px);\n          transform: translate3d(0px, 0px, 0px);\n  opacity: 1;\n}\n.dayContainer + .dayContainer {\n  -webkit-box-shadow: -1px 0 0 #e6e6e6;\n          box-shadow: -1px 0 0 #e6e6e6;\n}\n.flatpickr-day {\n  background: none;\n  border: 1px solid transparent;\n  border-radius: 150px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #393939;\n  cursor: pointer;\n  font-weight: 400;\n  width: 14.2857143%;\n  -webkit-flex-basis: 14.2857143%;\n      -ms-flex-preferred-size: 14.2857143%;\n          flex-basis: 14.2857143%;\n  max-width: 39px;\n  height: 39px;\n  line-height: 39px;\n  margin: 0;\n  display: inline-block;\n  position: relative;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  text-align: center;\n}\n.flatpickr-day.inRange,\n.flatpickr-day.prevMonthDay.inRange,\n.flatpickr-day.nextMonthDay.inRange,\n.flatpickr-day.today.inRange,\n.flatpickr-day.prevMonthDay.today.inRange,\n.flatpickr-day.nextMonthDay.today.inRange,\n.flatpickr-day:hover,\n.flatpickr-day.prevMonthDay:hover,\n.flatpickr-day.nextMonthDay:hover,\n.flatpickr-day:focus,\n.flatpickr-day.prevMonthDay:focus,\n.flatpickr-day.nextMonthDay:focus {\n  cursor: pointer;\n  outline: 0;\n  background: #e6e6e6;\n  border-color: #e6e6e6;\n}\n.flatpickr-day.today {\n  border-color: #959ea9;\n}\n.flatpickr-day.today:hover,\n.flatpickr-day.today:focus {\n  border-color: #959ea9;\n  background: #959ea9;\n  color: #fff;\n}\n.flatpickr-day.selected,\n.flatpickr-day.startRange,\n.flatpickr-day.endRange,\n.flatpickr-day.selected.inRange,\n.flatpickr-day.startRange.inRange,\n.flatpickr-day.endRange.inRange,\n.flatpickr-day.selected:focus,\n.flatpickr-day.startRange:focus,\n.flatpickr-day.endRange:focus,\n.flatpickr-day.selected:hover,\n.flatpickr-day.startRange:hover,\n.flatpickr-day.endRange:hover,\n.flatpickr-day.selected.prevMonthDay,\n.flatpickr-day.startRange.prevMonthDay,\n.flatpickr-day.endRange.prevMonthDay,\n.flatpickr-day.selected.nextMonthDay,\n.flatpickr-day.startRange.nextMonthDay,\n.flatpickr-day.endRange.nextMonthDay {\n  background: #569ff7;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: #fff;\n  border-color: #569ff7;\n}\n.flatpickr-day.selected.startRange,\n.flatpickr-day.startRange.startRange,\n.flatpickr-day.endRange.startRange {\n  border-radius: 50px 0 0 50px;\n}\n.flatpickr-day.selected.endRange,\n.flatpickr-day.startRange.endRange,\n.flatpickr-day.endRange.endRange {\n  border-radius: 0 50px 50px 0;\n}\n.flatpickr-day.selected.startRange + .endRange:not(:nth-child(7n+1)),\n.flatpickr-day.startRange.startRange + .endRange:not(:nth-child(7n+1)),\n.flatpickr-day.endRange.startRange + .endRange:not(:nth-child(7n+1)) {\n  -webkit-box-shadow: -10px 0 0 #569ff7;\n          box-shadow: -10px 0 0 #569ff7;\n}\n.flatpickr-day.selected.startRange.endRange,\n.flatpickr-day.startRange.startRange.endRange,\n.flatpickr-day.endRange.startRange.endRange {\n  border-radius: 50px;\n}\n.flatpickr-day.inRange {\n  border-radius: 0;\n  -webkit-box-shadow: -5px 0 0 #e6e6e6, 5px 0 0 #e6e6e6;\n          box-shadow: -5px 0 0 #e6e6e6, 5px 0 0 #e6e6e6;\n}\n.flatpickr-day.flatpickr-disabled,\n.flatpickr-day.flatpickr-disabled:hover,\n.flatpickr-day.prevMonthDay,\n.flatpickr-day.nextMonthDay,\n.flatpickr-day.notAllowed,\n.flatpickr-day.notAllowed.prevMonthDay,\n.flatpickr-day.notAllowed.nextMonthDay {\n  color: rgba(57,57,57,0.3);\n  background: transparent;\n  border-color: transparent;\n  cursor: default;\n}\n.flatpickr-day.flatpickr-disabled,\n.flatpickr-day.flatpickr-disabled:hover {\n  cursor: not-allowed;\n  color: rgba(57,57,57,0.1);\n}\n.flatpickr-day.week.selected {\n  border-radius: 0;\n  -webkit-box-shadow: -5px 0 0 #569ff7, 5px 0 0 #569ff7;\n          box-shadow: -5px 0 0 #569ff7, 5px 0 0 #569ff7;\n}\n.flatpickr-day.hidden {\n  visibility: hidden;\n}\n.rangeMode .flatpickr-day {\n  margin-top: 1px;\n}\n.flatpickr-weekwrapper {\n  float: left;\n}\n.flatpickr-weekwrapper .flatpickr-weeks {\n  padding: 0 12px;\n  -webkit-box-shadow: 1px 0 0 #e6e6e6;\n          box-shadow: 1px 0 0 #e6e6e6;\n}\n.flatpickr-weekwrapper .flatpickr-weekday {\n  float: none;\n  width: 100%;\n  line-height: 28px;\n}\n.flatpickr-weekwrapper span.flatpickr-day,\n.flatpickr-weekwrapper span.flatpickr-day:hover {\n  display: block;\n  width: 100%;\n  max-width: none;\n  color: rgba(57,57,57,0.3);\n  background: transparent;\n  cursor: default;\n  border: none;\n}\n.flatpickr-innerContainer {\n  display: block;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  overflow: hidden;\n}\n.flatpickr-rContainer {\n  display: inline-block;\n  padding: 0;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.flatpickr-time {\n  text-align: center;\n  outline: 0;\n  display: block;\n  height: 0;\n  line-height: 40px;\n  max-height: 40px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  overflow: hidden;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.flatpickr-time:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.flatpickr-time .numInputWrapper {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  width: 40%;\n  height: 40px;\n  float: left;\n}\n.flatpickr-time .numInputWrapper span.arrowUp:after {\n  border-bottom-color: #393939;\n}\n.flatpickr-time .numInputWrapper span.arrowDown:after {\n  border-top-color: #393939;\n}\n.flatpickr-time.hasSeconds .numInputWrapper {\n  width: 26%;\n}\n.flatpickr-time.time24hr .numInputWrapper {\n  width: 49%;\n}\n.flatpickr-time input {\n  background: transparent;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  border: 0;\n  border-radius: 0;\n  text-align: center;\n  margin: 0;\n  padding: 0;\n  height: inherit;\n  line-height: inherit;\n  color: #393939;\n  font-size: 14px;\n  position: relative;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-appearance: textfield;\n  -moz-appearance: textfield;\n  appearance: textfield;\n}\n.flatpickr-time input.flatpickr-hour {\n  font-weight: bold;\n}\n.flatpickr-time input.flatpickr-minute,\n.flatpickr-time input.flatpickr-second {\n  font-weight: 400;\n}\n.flatpickr-time input:focus {\n  outline: 0;\n  border: 0;\n}\n.flatpickr-time .flatpickr-time-separator,\n.flatpickr-time .flatpickr-am-pm {\n  height: inherit;\n  float: left;\n  line-height: inherit;\n  color: #393939;\n  font-weight: bold;\n  width: 2%;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-align-self: center;\n      -ms-flex-item-align: center;\n          align-self: center;\n}\n.flatpickr-time .flatpickr-am-pm {\n  outline: 0;\n  width: 18%;\n  cursor: pointer;\n  text-align: center;\n  font-weight: 400;\n}\n.flatpickr-time input:hover,\n.flatpickr-time .flatpickr-am-pm:hover,\n.flatpickr-time input:focus,\n.flatpickr-time .flatpickr-am-pm:focus {\n  background: #eee;\n}\n.flatpickr-input[readonly] {\n  cursor: pointer;\n}\n@-webkit-keyframes fpFadeInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -20px, 0);\n            transform: translate3d(0, -20px, 0);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes fpFadeInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -20px, 0);\n            transform: translate3d(0, -20px, 0);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./resources/js/src/assets/sass/forms/custom-flatpickr.css":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./resources/js/src/assets/sass/forms/custom-flatpickr.css ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n\t===============================\n\t\t\t@Import\tFunction\n\t===============================\n*/\n/*\n\t===============================\n\t\t\t@Import\tMixins\n\t===============================\n*/\n.flatpickr-calendar {\n  width: 336.875px;\n  padding: 15px;\n  box-shadow: 2px 5px 17px 0 rgba(31, 45, 61, 0.1);\n  border: 1px solid #bfc9d4; }\n  .flatpickr-calendar.open {\n    display: inline-block;\n    z-index: 900; }\n  .flatpickr-calendar.arrowTop:before {\n    border-bottom-color: #ebedf2; }\n  .flatpickr-calendar:before {\n    border-width: 9px; }\n  .flatpickr-calendar:after {\n    border-width: 0px; }\n\n.flatpickr-months .flatpickr-prev-month, .flatpickr-months .flatpickr-next-month {\n  top: 8%;\n  padding: 5px 13px;\n  background: #fbfbfb;\n  border-radius: 4px;\n  height: 40px; }\n\n.flatpickr-months .flatpickr-prev-month:hover svg, .flatpickr-months .flatpickr-next-month:hover svg {\n  fill: #4361ee; }\n\n.flatpickr-day.today {\n  border-color: #4361ee;\n  color: #4361ee;\n  font-weight: 700; }\n\n.flatpickr-current-month .flatpickr-monthDropdown-months {\n  height: auto;\n  border: 1px solid #bfc9d4;\n  color: #3b3f5c;\n  font-size: 15px;\n  padding: 12px 16px;\n  letter-spacing: 1px;\n  font-weight: 700; }\n\n.flatpickr-current-month input.cur-year {\n  height: auto;\n  border: 1px solid #bfc9d4;\n  border-left: none;\n  color: #3b3f5c;\n  font-size: 15px;\n  padding: 13px 12px;\n  letter-spacing: 1px;\n  font-weight: 700; }\n\n.flatpickr-months .flatpickr-month {\n  height: 76px; }\n\n.flatpickr-day.flatpickr-disabled {\n  cursor: not-allowed;\n  color: #e0e6ed; }\n  .flatpickr-day.flatpickr-disabled:hover {\n    cursor: not-allowed;\n    color: #e0e6ed; }\n\nspan.flatpickr-weekday {\n  color: #888ea8; }\n\n.flatpickr-day {\n  color: #3b3f5c;\n  font-weight: 700; }\n  .flatpickr-day.selected, .flatpickr-day.startRange, .flatpickr-day.endRange, .flatpickr-day.selected.inRange, .flatpickr-day.startRange.inRange, .flatpickr-day.endRange.inRange, .flatpickr-day.selected:focus, .flatpickr-day.startRange:focus, .flatpickr-day.endRange:focus, .flatpickr-day.selected:hover, .flatpickr-day.startRange:hover, .flatpickr-day.endRange:hover, .flatpickr-day.selected.prevMonthDay, .flatpickr-day.startRange.prevMonthDay, .flatpickr-day.endRange.prevMonthDay, .flatpickr-day.selected.nextMonthDay, .flatpickr-day.startRange.nextMonthDay, .flatpickr-day.endRange.nextMonthDay {\n    background: #4361ee;\n    color: #fff;\n    border-color: #4361ee;\n    font-weight: 500; }\n\n@supports (-webkit-overflow-scrolling: touch) {\n  .form-control {\n    height: auto; } }\n\n\n/*custom css*/\n.flatpickr-input[readonly] {\n    background-color: transparent !important;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/src/assets/sass/scrollspyNav.scss":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/sass/scrollspyNav.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

/***/ "./node_modules/flatpickr/dist/flatpickr.css":
/*!***************************************************!*\
  !*** ./node_modules/flatpickr/dist/flatpickr.css ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_flatpickr_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./flatpickr.css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/flatpickr/dist/flatpickr.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_flatpickr_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_flatpickr_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/src/assets/sass/forms/custom-flatpickr.css":
/*!*****************************************************************!*\
  !*** ./resources/js/src/assets/sass/forms/custom-flatpickr.css ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_custom_flatpickr_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./custom-flatpickr.css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./resources/js/src/assets/sass/forms/custom-flatpickr.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_custom_flatpickr_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_custom_flatpickr_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/src/views/backend/user/add.vue":
/*!*****************************************************!*\
  !*** ./resources/js/src/views/backend/user/add.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _add_vue_vue_type_template_id_344fe682__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add.vue?vue&type=template&id=344fe682 */ "./resources/js/src/views/backend/user/add.vue?vue&type=template&id=344fe682");
/* harmony import */ var _add_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add.vue?vue&type=script&setup=true&lang=js */ "./resources/js/src/views/backend/user/add.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var H_xampp_htdocs_swd_backend_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,H_xampp_htdocs_swd_backend_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_add_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_add_vue_vue_type_template_id_344fe682__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/src/views/backend/user/add.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/src/views/backend/user/add.vue?vue&type=script&setup=true&lang=js":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/backend/user/add.vue?vue&type=script&setup=true&lang=js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_add_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_add_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./add.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/backend/user/add.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/src/views/backend/user/add.vue?vue&type=template&id=344fe682":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/backend/user/add.vue?vue&type=template&id=344fe682 ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_add_vue_vue_type_template_id_344fe682__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_add_vue_vue_type_template_id_344fe682__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./add.vue?vue&type=template&id=344fe682 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/backend/user/add.vue?vue&type=template&id=344fe682");


/***/ })

}]);