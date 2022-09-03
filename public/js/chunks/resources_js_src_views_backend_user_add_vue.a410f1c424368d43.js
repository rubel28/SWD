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
/* harmony import */ var _assets_sass_apps_invoice_add_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/sass/apps/invoice-add.scss */ "./resources/js/src/assets/sass/apps/invoice-add.scss");
/* harmony import */ var _composables_use_meta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/composables/use-meta */ "./resources/js/src/composables/use-meta.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'add',
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    (0,_composables_use_meta__WEBPACK_IMPORTED_MODULE_3__.useMeta)({
      title: 'New User'
    });
    var selected = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var selected_file = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
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

    var __returned__ = {
      selected: selected,
      selected_file: selected_file,
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
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
      useMeta: _composables_use_meta__WEBPACK_IMPORTED_MODULE_3__.useMeta
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
  href: "javascript:;"
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
var _hoisted_8 = {
  id: "general-info",
  "class": "section general-info"
};
var _hoisted_9 = {
  "class": "info"
};

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", {
  "class": ""
}, "General Information", -1
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

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-upload-cloud\"><polyline points=\"16 16 12 12 8 16\"></polyline><line x1=\"12\" y1=\"12\" x2=\"12\" y2=\"21\"></line><path d=\"M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3\"></path><polyline points=\"16 16 12 12 8 16\"></polyline></svg></div><div class=\"mt-2\">Click to Upload Picture</div>", 2);

var _hoisted_19 = [_hoisted_17];
var _hoisted_20 = {
  "class": "col-xl-10 col-lg-12 col-md-8 mt-md-0 mt-4"
};
var _hoisted_21 = {
  "class": "form"
};
var _hoisted_22 = {
  "class": "row"
};

var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-sm-6"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "form-group"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "fullName"
}, "Full Name"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  "class": "form-control mb-4",
  id: "fullName",
  placeholder: "Full Name",
  value: "Jimmy Turner"
})])], -1
/* HOISTED */
);

var _hoisted_24 = {
  "class": "col-sm-6"
};

var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "dob-input"
}, "Date of Birth", -1
/* HOISTED */
);

var _hoisted_26 = {
  "class": "d-sm-flex d-block"
};
var _hoisted_27 = {
  "class": "form-group me-1"
};

var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "Day"
}, "Day", -1
/* HOISTED */
);

var _hoisted_29 = ["value"];
var _hoisted_30 = {
  "class": "form-group me-1"
};

var _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "Month"
}, "Month", -1
/* HOISTED */
);

var _hoisted_32 = ["value"];
var _hoisted_33 = {
  "class": "form-group me-1"
};

var _hoisted_34 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "Year"
}, "Year", -1
/* HOISTED */
);

var _hoisted_35 = ["value"];

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

var _hoisted_37 = {
  "class": "col-xl-12 col-lg-12 col-md-12 layout-spacing"
};
var _hoisted_38 = {
  id: "contact",
  "class": "section contact"
};
var _hoisted_39 = {
  "class": "info"
};

var _hoisted_40 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  "class": ""
}, "Contact", -1
/* HOISTED */
);

var _hoisted_41 = {
  "class": "row"
};
var _hoisted_42 = {
  "class": "col-md-11 mx-auto"
};
var _hoisted_43 = {
  "class": "row"
};
var _hoisted_44 = {
  "class": "col-md-6"
};
var _hoisted_45 = {
  "class": "form-group"
};

var _hoisted_46 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "country"
}, "Country", -1
/* HOISTED */
);

var _hoisted_47 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<option value=\"all\">All Countries</option><option value=\"United States\">United States</option><option value=\"India\">India</option><option value=\"Japan\">Japan</option><option value=\"China\">China</option><option value=\"Brazil\">Brazil</option><option value=\"Norway\">Norway</option><option value=\"Canada\">Canada</option>", 8);

var _hoisted_55 = [_hoisted_47];

var _hoisted_56 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"col-md-6\"><div class=\"form-group\"><label for=\"address\">Address</label><input class=\"form-control mb-4\" id=\"address\" placeholder=\"Address\" value=\"New York\"></div></div><div class=\"col-md-6\"><div class=\"form-group\"><label for=\"location\">Location</label><input class=\"form-control mb-4\" id=\"location\" placeholder=\"Location\"></div></div><div class=\"col-md-6\"><div class=\"form-group\"><label for=\"phone\">Phone</label><input class=\"form-control mb-4\" id=\"phone\" placeholder=\"Write your phone number here\" value=\"+1 (530) 555-12121\"></div></div><div class=\"col-md-6\"><div class=\"form-group\"><label for=\"email\">Email</label><input class=\"form-control mb-4\" id=\"email\" placeholder=\"Write your email here\" value=\"Jimmy@gmail.com\"></div></div><div class=\"col-md-6\"><div class=\"form-group\"><label for=\"website1\">Website</label><input class=\"form-control mb-4\" id=\"website1\" placeholder=\"Write your website here\"></div></div>", 5);

var _hoisted_61 = {
  "class": "account-settings-footer"
};
var _hoisted_62 = {
  "class": "as-footer-container"
};

var _hoisted_63 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "btn btn-primary"
}, "Reset All", -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Teleport, {
    to: "#breadcrumb"
  }, [_hoisted_2])), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    ref: "fl_profile",
    type: "file",
    "class": "d-none",
    accept: "image/*",
    onChange: $setup.change_file
  }, null, 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), $setup.selected_file ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", {
    key: 0,
    src: $setup.selected_file ? $setup.selected_file : __webpack_require__(/*! @/assets/images/user-profile.jpeg */ "./resources/js/src/assets/images/user-profile.jpeg"),
    alt: "profile",
    "class": "profile-preview",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.$refs.fl_profile.click();
    })
  }, null, 8
  /* PROPS */
  , _hoisted_16)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 1,
    "class": "profile-preview upload-preview",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.$refs.fl_profile.click();
    })
  }, _hoisted_19))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [_hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [_hoisted_25, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $setup.ddl_1 = $event;
    }),
    "class": "form-select"
  }, [_hoisted_28, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(30, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
      value: item,
      key: item
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item), 9
    /* TEXT, PROPS */
    , _hoisted_29);
  }), 64
  /* STABLE_FRAGMENT */
  ))], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $setup.ddl_1]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $setup.ddl_2 = $event;
    }),
    "class": "form-select"
  }, [_hoisted_31, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.months, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: item,
      key: item
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item), 9
    /* TEXT, PROPS */
    , _hoisted_32);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $setup.ddl_2]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $setup.ddl_3 = $event;
    }),
    "class": "form-select"
  }, [_hoisted_34, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(42, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
      value: 2022 - item,
      key: 2022 - item
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(2022 - item), 9
    /* TEXT, PROPS */
    , _hoisted_35);
  }), 64
  /* STABLE_FRAGMENT */
  ))], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $setup.ddl_3]])])])])]), _hoisted_36])])])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_37, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_39, [_hoisted_40, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_41, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_42, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_43, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_44, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_45, [_hoisted_46, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return $setup.ddl_6 = $event;
    }),
    id: "country",
    "class": "form-select w-100"
  }, _hoisted_55, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $setup.ddl_6]])])]), _hoisted_56])])])])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_61, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_62, [_hoisted_63, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-success",
    onClick: _cache[6] || (_cache[6] = function ($event) {
      return $setup.save();
    })
  }, "Save Changes")])])])]);
}

/***/ }),

/***/ "./resources/js/src/assets/images/user-profile.jpeg":
/*!**********************************************************!*\
  !*** ./resources/js/src/assets/images/user-profile.jpeg ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "/images/user-profile-26fc32107d4b21a1d5adb117f1edf4e1.jpeg";

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[0]!./resources/js/src/assets/sass/apps/invoice-add.scss":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[0]!./resources/js/src/assets/sass/apps/invoice-add.scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "/*\n\t===============================\n\t\t\t@Import\tMixins\n\t===============================\n*/\n.selectable-dropdown a.dropdown-toggle {\n  padding: 11px 35px 10px 15px;\n  position: relative;\n  padding: 9px 8px 10px 12px;\n  border: 1px solid #d3d3d3;\n  border-radius: 6px;\n  transform: none;\n  font-size: 13px;\n  line-height: 17px;\n  background-color: #fff;\n  letter-spacing: normal;\n  text-align: inherit;\n  color: #1b2e4b;\n  box-shadow: none;\n  max-height: 35px;\n  display: inline-block;\n  cursor: pointer;\n  width: 100%;\n}\n\n.selectable-dropdown a.dropdown-toggle img {\n  width: 19px;\n  height: 19px;\n  vertical-align: text-bottom;\n  position: absolute;\n  left: 12px;\n  top: 7px;\n}\n\n.selectable-dropdown a.dropdown-toggle .selectable-text {\n  overflow: hidden;\n  display: block;\n}\n\n.selectable-dropdown a.dropdown-toggle .selectable-arrow {\n  display: inline-block;\n  position: absolute;\n  padding: 6px 4px;\n  background: #fff;\n  top: 2px;\n  right: 1px;\n}\n\n.selectable-dropdown a.dropdown-toggle svg {\n  color: #888ea8;\n  width: 13px !important;\n  height: 13px !important;\n  margin: 0;\n  transition: transform 0.2s ease-in-out;\n}\n\n.selectable-dropdown.show a.dropdown-toggle svg {\n  transform: rotate(180deg);\n}\n\n.selectable-dropdown.dropdown:not(.custom-dropdown-icon):not(.custom-dropdown) .dropdown-menu {\n  right: auto;\n  top: 40px !important;\n}\n\n.selectable-dropdown.dropdown:not(.custom-dropdown-icon):not(.custom-dropdown) .dropdown-menu img {\n  width: 19px;\n  height: 19px;\n  margin-right: 7px;\n  vertical-align: top;\n}\n\n.invoice-detail-body {\n  padding: 0;\n  padding-top: 32px;\n  padding-bottom: 32px;\n  background-color: #fff;\n  border: 1px solid #e0e6ed;\n  box-shadow: 0 0 40px 0 rgba(94, 92, 154, 0.06);\n  border-radius: 6px;\n}\n\n/*\n====================\n    Detail Body\n====================\n*/\n/* Detail Title */\n.invoice-content .invoice-detail-title {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 40px;\n  padding: 0 48px;\n}\n\n.invoice-content .invoice-title input {\n  font-size: 18px;\n  padding: 5px 15px;\n  height: auto;\n}\n\n.invoice-content .invoice-logo .upload {\n  display: flex;\n  justify-content: center;\n}\n\n.invoice-content .invoice-logo .profile-preview {\n  border: 1px solid #e0e6ed;\n  text-align: center;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.invoice-content .invoice-logo .profile-preview.upload-preview {\n  padding: 7px;\n}\n\n.invoice-content .invoice-logo .profile-preview svg {\n  width: 50px;\n  height: 50px;\n  color: #ccc;\n}\n\n.invoice-content .invoice-logo .dropify-wrapper {\n  width: 120px;\n  height: 120px;\n  border-radius: 6px;\n  padding: 7px;\n  border: 1px solid #e0e6ed;\n}\n\n.invoice-content .invoice-logo .dropify-wrapper .dropify-preview {\n  background-color: #fff;\n  padding: 0;\n}\n\n.invoice-content .invoice-logo .dropify-wrapper .dropify-clear {\n  font-size: 10px;\n  padding: 4px 8px;\n  color: #bfc9d4;\n  border: none;\n  top: -3px;\n  right: 0;\n}\n\n.invoice-content .invoice-logo .dropify-wrapper .dropify-clear:hover {\n  background-color: transparent;\n}\n\n.invoice-content .invoice-logo .dropify-wrapper .dropify-preview .dropify-infos .dropify-infos-inner p.dropify-infos-message {\n  padding-top: 27px;\n}\n\n.invoice-content .invoice-logo .dropify-wrapper .dropify-preview .dropify-infos .dropify-infos-inner p.dropify-infos-message::before {\n  height: 20px;\n  position: absolute;\n  top: -1px;\n  left: 45%;\n  color: #fff;\n  transform: translate(-50%, 0);\n  background: transparent;\n  width: 0;\n  height: 0;\n  font-size: 28px;\n  width: 24px;\n  content: \" \";\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-upload-cloud'%3e%3cpolyline points='16 16 12 12 8 16'%3e%3c/polyline%3e%3cline x1='12' y1='12' x2='12' y2='21'%3e%3c/line%3e%3cpath d='M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3'%3e%3c/path%3e%3cpolyline points='16 16 12 12 8 16'%3e%3c/polyline%3e%3c/svg%3e\");\n  height: 20px;\n}\n\n.invoice-content .invoice-logo .dropify-wrapper.touch-fallback {\n  border: 1px solid #ebedf2;\n}\n\n.invoice-content .invoice-logo .dropify-wrapper.touch-fallback .dropify-preview .dropify-infos .dropify-infos-inner {\n  padding: 0;\n}\n\n.invoice-content .invoice-logo .dropify-wrapper.touch-fallback .dropify-clear {\n  color: #515365;\n  position: relative;\n}\n\n.invoice-content .invoice-logo .dropify-wrapper.touch-fallback .dropify-preview .dropify-infos .dropify-infos-inner p.dropify-filename {\n  margin-top: 10px;\n}\n\n.invoice-content .invoice-detail-header {\n  padding: 0 48px;\n}\n\n.invoice-content .invoice-address-company h4 {\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 20px;\n}\n\n.invoice-content .invoice-address-company .invoice-address-company-fields label {\n  font-size: 14px;\n  color: #515365;\n  min-width: 75px;\n  align-self: center;\n  margin-bottom: 0;\n}\n\n.invoice-content .invoice-address-company .invoice-address-company-fields .form-group {\n  margin-bottom: 5px;\n}\n\n.invoice-content .invoice-address-client h4 {\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 20px;\n}\n\n.invoice-content .invoice-address-client .invoice-address-client-fields label {\n  font-size: 14px;\n  color: #515365;\n  min-width: 75px;\n  align-self: center;\n  margin-bottom: 0;\n}\n\n.invoice-content .invoice-address-client .invoice-address-client-fields .form-group {\n  margin-bottom: 5px;\n}\n\n/* Detail Header */\n/* Detail Header -> invoice-address-company */\n/* Detail Header -> invoice-address-client */\n/* Detail Terms */\n.invoice-detail-terms {\n  padding: 0 48px;\n  padding-top: 25px;\n  margin-top: 40px;\n  border-top: 1px solid #ebedf2;\n}\n\n.invoice-detail-terms label {\n  font-size: 14px;\n  color: #515365;\n  min-width: 75px;\n  align-self: center;\n  margin-bottom: 0;\n}\n\n/* Detail Items */\n.invoice-detail-items {\n  background: #fafafa;\n  padding: 30px;\n  padding: 30px 48px;\n}\n\n.invoice-detail-items thead th {\n  padding: 9px 6px;\n  font-size: 11px !important;\n  border: none;\n  border-top: 1px solid #e0e6ed;\n  border-bottom: 1px solid #e0e6ed;\n  color: #515365 !important;\n}\n\n.invoice-detail-items tbody td {\n  border: none;\n  padding: 14px 7px;\n  vertical-align: top !important;\n}\n\n/* Detail Items -> table thead */\n/* Detail Items -> table body */\n.delete-item-row {\n  width: 10px;\n}\n\n.invoice-detail-items tbody td.description {\n  width: 365px;\n}\n\n.invoice-detail-items tbody td.rate, .invoice-detail-items tbody td.qty {\n  width: 110px;\n}\n\n.invoice-detail-items tbody td.amount {\n  width: 60px;\n}\n\n.invoice-detail-items tbody td.tax {\n  width: 60px;\n}\n\n.invoice-detail-items tbody td.tax .new-chk-content {\n  display: none;\n}\n\n.invoice-detail-items tbody td ul {\n  padding: 0;\n}\n\n.invoice-detail-items tbody td ul li {\n  list-style: none;\n}\n\n.invoice-detail-items tbody td ul li svg {\n  color: #515365;\n  stroke-width: 1.5;\n  height: 19px;\n  width: 19px;\n}\n\n.invoice-detail-items tbody td input {\n  font-size: 12px;\n  padding: 12px 9px;\n}\n\n.invoice-detail-items tbody td textarea {\n  margin-top: 5px;\n  resize: none;\n}\n\n.invoice-detail-items tbody td span.editable-amount {\n  white-space: nowrap;\n}\n\n/* Detail Items -> Editable amount */\n/* Detail Total */\n.invoice-detail-total {\n  padding: 0 48px;\n  margin-top: 25px;\n}\n\n.invoice-detail-total .invoice-created-by {\n  margin-bottom: 5px;\n}\n\n.invoice-detail-total .invoice-created-by label {\n  font-size: 14px;\n  color: #515365;\n  min-width: 75px;\n  align-self: center;\n  margin-bottom: 0;\n}\n\n/* Detail Total -> invoice-totals-row */\n.totals-row {\n  max-width: 9rem;\n  margin-left: auto;\n  margin-right: 60px;\n}\n\n.invoice-totals-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.invoice-totals-row .invoice-summary-label {\n  min-width: 130px;\n  min-width: 60px;\n  font-size: 14px;\n  color: #888ea8;\n}\n\n.invoice-totals-row .invoice-summary-value {\n  min-width: 60px;\n  text-align: right;\n  font-size: 14px;\n  color: #515365;\n  font-weight: 600;\n}\n\n.invoice-totals-row.invoice-summary-balance-due {\n  padding-top: 5px;\n  margin-top: 5px;\n  border-top: 1px solid #ebedf2;\n}\n\n.invoice-totals-row.invoice-summary-balance-due .invoice-summary-label {\n  font-size: 14px;\n  color: #0e1726;\n}\n\n/* Detail Total -> invoice-summary-balance-due */\n/* Detail Note */\n.invoice-detail-note {\n  padding: 0 48px;\n  padding-top: 25px;\n  margin-top: 40px;\n  border-top: 1px solid #ebedf2;\n}\n\n.invoice-detail-note .invoice-note {\n  margin-bottom: 0;\n}\n\n.invoice-detail-note .invoice-note label {\n  font-size: 14px;\n  color: #515365;\n  min-width: 75px;\n  align-self: center;\n  margin-bottom: 0;\n}\n\n.invoice-detail-note textarea {\n  resize: none;\n}\n\n/*\n======================\n    Invoice Actions\n======================\n*/\n.invoice-actions {\n  padding: 0;\n  padding-top: 32px;\n  padding-bottom: 32px;\n  background-color: #fff;\n  border: 1px solid #e0e6ed;\n  border-radius: 6px;\n}\n\n.invoice-actions label {\n  font-size: 13px;\n  font-weight: 600;\n  color: #515365;\n}\n\n.invoice-actions .invoice-action-currency label {\n  padding: 0 25px 10px 25px;\n  padding-bottom: 10px;\n  margin-bottom: 20px;\n  border-bottom: 1px solid #ebedf2;\n  width: 100%;\n  font-size: 16px;\n  color: #4361ee;\n  font-weight: 500;\n}\n\n.invoice-actions .invoice-action-currency .invoice-select {\n  margin: 0 25px 0 25px;\n}\n\n.invoice-actions .invoice-action-currency a.dropdown-toggle {\n  padding: 9px 38px 9px 45px;\n  width: 100%;\n}\n\n.invoice-actions .invoice-action-currency a.dropdown-toggle span {\n  vertical-align: middle;\n}\n\n.invoice-actions .invoice-action-currency .dropdown:not(.custom-dropdown-icon):not(.custom-dropdown) .dropdown-menu {\n  width: 100%;\n}\n\n.invoice-actions .invoice-action-currency .dropdown:not(.custom-dropdown-icon):not(.custom-dropdown) .dropdown-menu .dropdown-item {\n  padding: 10px 12px;\n  border-radius: 0;\n  font-size: 16px;\n  line-height: 1.45;\n  overflow: hidden !important;\n  text-overflow: ellipsis !important;\n  white-space: nowrap !important;\n}\n\n.invoice-actions .invoice-action-currency .dropdown:not(.custom-dropdown-icon):not(.custom-dropdown) .dropdown-menu .dropdown-item:not(:last-child) {\n  border-bottom: 1px solid #f1f2f3;\n}\n\n.invoice-actions .invoice-action-currency .dropdown:not(.custom-dropdown-icon):not(.custom-dropdown) .dropdown-menu img {\n  vertical-align: sub;\n}\n\n.invoice-actions .invoice-action-tax {\n  padding-top: 20px;\n  margin-top: 20px;\n}\n\n.invoice-actions .invoice-action-tax h5 {\n  padding: 0 25px 10px 25px;\n  width: 100%;\n  padding-bottom: 10px;\n  margin-bottom: 20px;\n  border-bottom: 1px solid #ebedf2;\n  width: 100%;\n  font-size: 16px;\n  color: #4361ee;\n  font-weight: 500;\n}\n\n.invoice-actions .invoice-action-tax .invoice-action-tax-fields {\n  margin: 0 25px 0 25px;\n}\n\n.invoice-actions .invoice-action-tax .input-rate {\n  position: relative;\n  padding: 9px 15px 10px 15px;\n  border: 1px solid #d3d3d3;\n  border-radius: 6px;\n  transform: none;\n  font-size: 13px;\n  line-height: 17px;\n  background-color: #fff;\n  letter-spacing: normal;\n  text-align: inherit;\n  color: #1b2e4b;\n  box-shadow: none;\n  max-height: 35px;\n  display: inline-block;\n}\n\n.invoice-actions .invoice-action-discount {\n  padding-top: 20px;\n  margin-top: 20px;\n}\n\n.invoice-actions .invoice-action-discount .invoice-action-discount-fields {\n  margin: 0 25px 0 25px;\n}\n\n.invoice-actions .invoice-action-discount h5 {\n  width: 100%;\n  padding: 0 25px 10px 25px;\n  padding-bottom: 10px;\n  margin-bottom: 20px;\n  border-bottom: 1px solid #ebedf2;\n  width: 100%;\n  font-size: 16px;\n  color: #4361ee;\n  font-weight: 500;\n}\n\n.invoice-actions .invoice-action-discount .input-rate {\n  position: relative;\n  padding: 9px 15px 10px 15px;\n  border: 1px solid #d3d3d3;\n  border-radius: 6px;\n  transform: none;\n  font-size: 13px;\n  line-height: 17px;\n  background-color: #fff;\n  letter-spacing: normal;\n  text-align: inherit;\n  color: #1b2e4b;\n  box-shadow: none;\n  max-height: 35px;\n  display: inline-block;\n}\n\n/* Invoice Actions -> action-currency */\n/* Invoice Actions -> action-tax */\n/* Invoice Actions -> action-discount */\n/*\n===============================\n    Invoice Actions Button\n===============================\n*/\n.invoice-actions-btn {\n  padding: 25px;\n  padding-top: 32px;\n  padding-bottom: 32px;\n  margin-top: 25px;\n  background-color: #fff;\n  border: 1px solid #e0e6ed;\n  border-radius: 6px;\n}\n\n.invoice-actions-btn label {\n  font-size: 14px;\n  font-weight: 600;\n  color: #515365;\n}\n\n.invoice-actions-btn .invoice-action-btn a {\n  transform: none;\n}\n\n.invoice-actions-btn .invoice-action-btn a.btn-send, .invoice-actions-btn .invoice-action-btn a.btn-preview {\n  width: 100%;\n  margin-bottom: 20px;\n}\n\n.invoice-actions-btn .invoice-action-btn a.btn-download {\n  width: 100%;\n  float: right;\n}\n\n/* Invoice Actions -> action-btn */\n@media (max-width: 1199px) {\n  .invoice-detail-body {\n    margin-bottom: 50px;\n  }\n  .invoice-content .invoice-address-client {\n    margin-top: 30px;\n  }\n  .invoice-actions-btn .invoice-action-btn a.btn-send, .invoice-actions-btn .invoice-action-btn a.btn-preview {\n    margin-bottom: 0;\n  }\n}\n@media (max-width: 767px) {\n  .invoice-detail-total {\n    padding: 0 25px;\n  }\n  .invoice-detail-note {\n    padding: 0 25px;\n    padding-top: 25px;\n  }\n  .invoice-detail-items {\n    padding: 0 25px;\n    background: transparent;\n  }\n  .invoice-detail-terms {\n    padding-left: 25px;\n    padding-right: 25px;\n  }\n  .invoice-content .invoice-detail-header {\n    padding: 0 25px;\n  }\n  .invoice-content .invoice-detail-title {\n    display: block;\n    max-width: 320px;\n    margin: 0 auto;\n    margin-bottom: 40px;\n  }\n  .invoice-content .invoice-logo {\n    margin-bottom: 15px;\n  }\n  .invoice-content .invoice-logo .dropify-wrapper {\n    width: auto;\n  }\n  .totals-row {\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 30px;\n  }\n  .invoice-detail-items thead {\n    display: none;\n  }\n  .invoice-detail-items tbody td {\n    display: block;\n  }\n  .invoice-detail-items tbody td.description {\n    width: 100%;\n    padding: 10px 4px;\n  }\n  .invoice-detail-items tbody td.rate, .invoice-detail-items tbody td.qty {\n    display: inline-block;\n    padding: 0 4px;\n  }\n  .invoice-detail-items tbody td.amount {\n    display: inline-block;\n    width: auto;\n  }\n  .invoice-detail-items tbody td.tax {\n    width: auto;\n    display: inline-block;\n    padding: 12px 7px;\n  }\n  .invoice-detail-items tbody td.tax .new-chk-content {\n    display: inline-block;\n  }\n  .invoice-detail-items tbody td.delete-item-row {\n    padding: 0;\n  }\n  .invoice-detail-items tbody td.delete-item-row ul {\n    position: absolute;\n    left: 3px;\n    top: 7px;\n  }\n  .invoice-detail-items tbody td.delete-item-row .delete-item {\n    position: absolute;\n    left: 6px;\n    top: 1px;\n  }\n  .invoice-detail-items tbody tr {\n    background: #fafafa;\n    display: block;\n    padding: 25px 5px;\n    border-radius: 8px;\n    position: relative;\n  }\n  .invoice-detail-items tbody tr:not(:last-child) {\n    margin-bottom: 16px;\n  }\n  .invoice-actions-btn .invoice-action-btn a.btn-send, .invoice-actions-btn .invoice-action-btn a.btn-preview {\n    margin-bottom: 20px;\n  }\n}\n@media (max-width: 575px) {\n  .invoice-actions-btn .invoice-action-btn {\n    width: 100%;\n  }\n  .selectable-dropdown a.dropdown-toggle {\n    padding: 9px 20px 10px 15px;\n  }\n  .selectable-dropdown a.dropdown-toggle svg {\n    top: 11px;\n    right: 4px;\n  }\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


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

/***/ "./resources/js/src/assets/sass/apps/invoice-add.scss":
/*!************************************************************!*\
  !*** ./resources/js/src/assets/sass/apps/invoice-add.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_0_invoice_add_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[0]!./invoice-add.scss */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[0]!./resources/js/src/assets/sass/apps/invoice-add.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_0_invoice_add_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_0_invoice_add_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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