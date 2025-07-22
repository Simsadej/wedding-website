"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/App */ "./assets/components/App.js");
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(document.getElementById('root')).render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)((react__WEBPACK_IMPORTED_MODULE_0___default().StrictMode), {
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_App__WEBPACK_IMPORTED_MODULE_2__["default"], {})
}));

/***/ }),

/***/ "./assets/components/App.js":
/*!**********************************!*\
  !*** ./assets/components/App.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar */ "./assets/components/Navbar.js");
/* harmony import */ var _pages_Home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/Home.js */ "./assets/components/pages/Home.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _pages_ConfirmAttendance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/ConfirmAttendance */ "./assets/components/pages/ConfirmAttendance.js");
/* harmony import */ var _pages_GiftRegistry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/GiftRegistry */ "./assets/components/pages/GiftRegistry.js");
/* harmony import */ var _pages_Faq__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/Faq */ "./assets/components/pages/Faq.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ "./node_modules/bootstrap/dist/css/bootstrap.css");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Footer */ "./assets/components/Footer.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");











function App() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.BrowserRouter, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Routes, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
          path: "/",
          element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_pages_Home_js__WEBPACK_IMPORTED_MODULE_2__["default"], {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
          path: "/wedding/confirm-attendance",
          element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_pages_ConfirmAttendance__WEBPACK_IMPORTED_MODULE_3__["default"], {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
          path: "/wedding/gift-registry",
          element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_pages_GiftRegistry__WEBPACK_IMPORTED_MODULE_4__["default"], {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
          path: "/wedding/faqs",
          element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_pages_Faq__WEBPACK_IMPORTED_MODULE_5__["default"], {})
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {})]
    })
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./assets/components/Button.js":
/*!*************************************!*\
  !*** ./assets/components/Button.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Button: () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Button_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Button.css */ "./assets/styles/Button.css");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! yup */ "./node_modules/yup/index.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");







var STYLES = ['btn-primary', 'btn-secondary', 'btn-outline'];
var SIZES = ['btn-medium', 'btn-large'];
var Button = function Button(_ref) {
  var children = _ref.children,
    type = _ref.type,
    onClick = _ref.onClick,
    style = _ref.style,
    size = _ref.size,
    disabled = _ref.disabled;
  var checkStyle = STYLES.includes(style) ? style : STYLES[0];
  var checkSize = SIZES.includes(size) ? size : SIZES[0];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
    className: "btn ".concat(checkStyle, " ").concat(checkSize),
    onClick: onClick,
    type: type,
    children: children,
    disabled: disabled
  });
};

/***/ }),

/***/ "./assets/components/Footer.js":
/*!*************************************!*\
  !*** ./assets/components/Footer.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



function Footer() {
  function getDate() {
    var date = new Date();
    var year = date.getFullYear() + "  ";
    return {
      __html: year
    };
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("footer", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "row",
        onLoad: getDate,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "text-center col-12",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h5", {
            children: " Remi Fawehinmi & Simisola Adejumo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
            children: "17th April, 2025"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
            children: ["Created by Simisola \xA9 ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
              dangerouslySetInnerHTML: getDate()
            })]
          })]
        })
      })
    })
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./assets/components/Navbar.js":
/*!*************************************!*\
  !*** ./assets/components/Navbar.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _public_wedding_logo_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../public/wedding-logo.png */ "./assets/public/wedding-logo.png");
/* harmony import */ var _styles_Navbar_css__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../styles/Navbar.css */ "./assets/styles/Navbar.css");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


















function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }





function Navbar() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_18__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    click = _useState2[0],
    setIsClicked = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_18__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isOpen = _useState4[0],
    setIsOpen = _useState4[1];
  var closeMenu = function closeMenu() {
    return setIsOpen(false);
  };
  var toggleNavbar = function toggleNavbar() {
    return setIsOpen(!isOpen);
  };
  var clicked = function clicked() {
    return setIsClicked(!click);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("nav", {
      className: "navbar",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_22__.Link, {
        to: "/",
        className: "logo",
        onClick: closeMenu,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("img", {
          src: _public_wedding_logo_png__WEBPACK_IMPORTED_MODULE_19__,
          alt: "",
          className: "wedding-logo"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("div", {
        className: "menu-icon",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("button", {
          className: "btn btn-outline navbar-toggle",
          "data-toggle": "collapse",
          "data-target": ".navbar-collapse",
          onClick: toggleNavbar,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("i", {
            className: isOpen ? 'fa-solid fa-x' : 'fa-solid fa-bars'
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("div", {
        className: "links-container ".concat(isOpen && clicked ? 'active' : ''),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("ul", {
          className: "nav-menu ".concat(isOpen && clicked ? 'active' : ''),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("li", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_22__.Link, {
              to: "/",
              onClick: closeMenu,
              className: "nav-links",
              children: "Home"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("li", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_22__.Link, {
              to: "/wedding/confirm-attendance",
              onClick: closeMenu,
              className: "nav-links",
              children: "RSVP"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("li", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_22__.Link, {
              to: "/wedding/gift-registry",
              onClick: closeMenu,
              className: "nav-links",
              children: "Gift Registry"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("li", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_22__.Link, {
              to: "/wedding/faqs",
              onClick: closeMenu,
              className: "nav-links",
              children: "FAQs"
            })
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("div", {
        className: "nav-overlay ".concat(isOpen ? 'active' : ' '),
        onClick: toggleNavbar
      })]
    })
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

/***/ }),

/***/ "./assets/components/pages/ConfirmAttendance.js":
/*!******************************************************!*\
  !*** ./assets/components/pages/ConfirmAttendance.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.date.to-json.js */ "./node_modules/core-js/modules/es.date.to-json.js");
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.object.proto.js */ "./node_modules/core-js/modules/es.object.proto.js");
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../Button */ "./assets/components/Button.js");
/* harmony import */ var _styles_ConfirmAttendance_css__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../../styles/ConfirmAttendance.css */ "./assets/styles/ConfirmAttendance.css");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! yup */ "./node_modules/yup/index.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }










































function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }





function ConfirmAttendance() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_42__.useState)({
      firstname: '',
      lastname: '',
      email: '',
      isAttending: '',
      plusOne: false,
      numPlusOne: 0
    }),
    _useState2 = _slicedToArray(_useState, 2),
    formData = _useState2[0],
    setFormData = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_42__.useState)({}),
    _useState4 = _slicedToArray(_useState3, 2),
    error = _useState4[0],
    setError = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_42__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isSubmitted = _useState6[0],
    setIsSubmitted = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_42__.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isDisabled = _useState8[0],
    setIsDisabled = _useState8[1];
  var validationSchema = yup__WEBPACK_IMPORTED_MODULE_45__.object({
    firstname: yup__WEBPACK_IMPORTED_MODULE_45__.string().required('Your Firstname is required'),
    lastname: yup__WEBPACK_IMPORTED_MODULE_45__.string().required('Your Lastname is required'),
    email: yup__WEBPACK_IMPORTED_MODULE_45__.string().required('Your email cannot be empty').email(),
    isAttending: yup__WEBPACK_IMPORTED_MODULE_45__.string().required('Please select either \'Yes\' or \'No\''),
    plusOne: yup__WEBPACK_IMPORTED_MODULE_45__.bool().notRequired(),
    numPlusOne: yup__WEBPACK_IMPORTED_MODULE_45__.number().transform(function (value) {
      return isNaN(value) ? undefined : value;
    }).when('plusOne', {
      is: true,
      then: function then(schema) {
        return schema.required('Your number of plus one(s) is required').typeError('Must be a valid number').positive('Must be a positive number').integer('Must be a whole number').max(5, 'Maximum of 5 plus ones allowed').test('is-reasonable', 'Please enter a reasonable number of guests', function (value) {
          return value <= 5;
        });
      },
      otherwise: function otherwise(schema) {
        return schema.nullable().transform(function (value) {
          return null;
        });
      }
    })
  });
  var checkGuestExists = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(email) {
      var response, data;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return fetch("/api/check-guest", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                email: email
              })
            });
          case 3:
            response = _context.sent;
            _context.next = 6;
            return response.json();
          case 6:
            data = _context.sent;
            if (data.exists) {
              setError(function (error) {
                return {
                  error: error,
                  email: data.errors.message
                };
              });
            } else {
              setError(function (error) {
                return {
                  error: error,
                  email: ''
                };
              });
            }
            return _context.abrupt("return", data.exists);
          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            setError(function (error) {
              return {
                error: error,
                email: 'Sorry we\'re unable to verify your email'
              };
            });
            return _context.abrupt("return", false);
          case 15:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 11]]);
    }));
    return function checkGuestExists(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  var handleChange = function handleChange(e) {
    var name = e.target.name;
    var value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData(_objectSpread(_objectSpread({}, formData), {}, _defineProperty({}, name, value)));
    if (name === "email") {
      checkGuestExists(value);
    }
    setError(_objectSpread(_objectSpread({}, error), {}, _defineProperty({}, name, '')));
  };
  var handleSubmit = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(e) {
      var emailExists, response, data, newError;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            e.preventDefault();
            _context2.prev = 1;
            // reset state at the start
            setError({});
            setIsSubmitted(false);

            // check email exists
            _context2.next = 6;
            return checkGuestExists(formData.email);
          case 6:
            emailExists = _context2.sent;
            if (!emailExists) {
              _context2.next = 10;
              break;
            }
            setError({
              email: 'You have already confirmed your attendance'
            });
            return _context2.abrupt("return");
          case 10:
            _context2.next = 12;
            return validationSchema.validate(formData, {
              abortEarly: false
            });
          case 12:
            _context2.next = 14;
            return fetch('/api/add-guest', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(formData)
            });
          case 14:
            response = _context2.sent;
            _context2.next = 17;
            return response.json();
          case 17:
            data = _context2.sent;
            if (response.ok) {
              _context2.next = 20;
              break;
            }
            throw new Error(data.message || "Failed to add guest");
          case 20:
            setIsSubmitted(true);
            setTimeout(function () {
              return setIsSubmitted(false);
            }, 5000);
            _context2.next = 30;
            break;
          case 24:
            _context2.prev = 24;
            _context2.t0 = _context2["catch"](1);
            newError = {};
            _context2.t0.inner.forEach(function (err) {
              newError[err.path] = err.message;
            });
            setError(newError);
            setIsSubmitted(false);
          case 30:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[1, 24]]);
    }));
    return function handleSubmit(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  (0,react__WEBPACK_IMPORTED_MODULE_42__.useEffect)(function () {
    var currentDate = new Date();
    var targetDate = new Date('2025-03-28');
    if (currentDate >= targetDate) {
      console.log(currentDate >= targetDate);
      setIsDisabled(true);
      setTimeout(function () {
        return setIsDisabled(false);
      }, 10000);
    }
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx)("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsxs)("main", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx)("h1", {
          className: "text-center text-lg-center",
          children: "Will you be there or will you miss it? "
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsxs)("p", {
            className: "text-center",
            children: ["To confirm your attendance to the wedding, enter your first and lastname in the form below. Confirm your attendance by either selecting 'Yes' or 'No'. Finally please let us know if you will be bringing along any plus ones and how many and click on the 'submit' button.", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx)("br", {}), "We can't wait to for you to join us on our special day!"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx)("p", {
            className: "text-center text-md-center text-lg-center",
            children: "Please RSVP by March 28th 2025"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsxs)("form", {
          className: "row mb-3 g-3 justify-content-center align-items-center",
          onSubmit: handleSubmit,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx)("div", {
            className: "col-xs-12 col-md-6",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsxs)("div", {
              className: "form-group",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx)("label", {
                className: "form-label",
                htmlFor: "firstname",
                children: "Firstname"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx)("input", {
                className: "form-control",
                name: "firstname",
                placeholder: "Firstname",
                id: "firstName",
                value: formData.firstname,
                onChange: handleChange,
                disabled: isDisabled
              }), error.firstname && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx)("span", {
                children: error.firstname
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx)("div", {
            className: "col-xs-12 col-md-6",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsxs)("div", {
              className: "form-group",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx)("label", {
                className: "form-label",
                htmlFor: "lastName",
                children: "Lastname"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx)("input", {
                className: "form-control",
                name: "lastname",
                placeholder: "Lastname",
                id: "lastName",
                value: formData.lastname,
                onChange: handleChange,
                disabled: isDisabled
              }), error.lastname && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx)("span", {
                children: error.lastname
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx)("div", {
            className: "mb-3",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsxs)("div", {
              className: "form-group col-sm col-lg-6 col-xl-6 g-xl-4",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx)("label", {
                children: "Email"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx)("input", {
                className: "form-control",
                name: "email",
                placeholder: "Email",
                value: formData.email,
                type: "text",
                onChange: handleChange,
                disabled: isDisabled
              }), error.email && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx)("span", {
                children: error.email
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsxs)("div", {
            className: "mb-3",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx)("div", {
              className: "col-sm form-group",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx)("label", {
                children: "Are you attending?"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsxs)("div", {
              className: "form-check mt-3",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx)("label", {
                className: "form-check-label",
                htmlFor: "isAttending",
                children: "Yes"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx)("input", {
                className: "form-check-input",
                name: "isAttending",
                type: "radio",
                id: "attendingYes",
                value: "1",
                checked: formData.isAttending === '1',
                onChange: handleChange,
                disabled: isDisabled
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsxs)("div", {
              className: "form-check",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx)("label", {
                className: "form-check-label",
                htmlFor: "isAttending",
                children: "No"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx)("input", {
                className: "form-check-input",
                name: "isAttending",
                value: "0",
                type: "radio",
                checked: formData.isAttending === '0',
                onChange: handleChange,
                disabled: isDisabled
              })]
            }), error.isAttending && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx)("span", {
              children: error.isAttending
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsxs)("div", {
            className: "form-check",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx)("label", {
              className: "form-check-label",
              htmlFor: "",
              children: "Plus one(s)?"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx)("input", {
              className: "form-check-input",
              name: "plusOne",
              value: formData.plusOne,
              type: "checkbox",
              onChange: handleChange,
              disabled: isDisabled
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx)("div", {
            className: "mb-3",
            children: formData.plusOne && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsxs)("div", {
              className: "form-group col-sm col-lg-6 col-xl-6 g-xl-4",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx)("label", {
                children: "How many plus ones will you bring?"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx)("input", {
                className: "form-control",
                name: "numPlusOne",
                value: formData.numPlusOne,
                type: "number",
                onChange: handleChange,
                disabled: isDisabled
              }), error.numPlusOne && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx)("span", {
                children: error.numPlusOne
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx)("div", {
            className: "button",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_43__.Button, {
              children: "Submit",
              size: "btn-small",
              type: "submit",
              style: isDisabled ? 'btn-secondary' : 'btn-outline',
              disabled: isDisabled,
              onClick: handleSubmit
            })
          })]
        }), isSubmitted && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx)("div", {
          className: "form-submission alert alert-success text center mx-3",
          children: "Your details have been submitted!"
        }), isDisabled && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx)("p", {
          className: "alert alert-secondary text center mx-3",
          children: "This form has been disabled as the deadline (March 28, 2025) has passed."
        })]
      })
    })
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConfirmAttendance);

/***/ }),

/***/ "./assets/components/pages/Faq.js":
/*!****************************************!*\
  !*** ./assets/components/pages/Faq.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_WhatsApp_Image_2025_03_16_at_13_29_07_2_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/WhatsApp Image 2025-03-16 at 13.29.07 (2).jpeg */ "./assets/public/WhatsApp Image 2025-03-16 at 13.29.07 (2).jpeg");
/* harmony import */ var _public_WhatsApp_Image_2025_03_16_at_13_29_07_1_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../public/WhatsApp Image 2025-03-16 at 13.29.07 (1).jpeg */ "./assets/public/WhatsApp Image 2025-03-16 at 13.29.07 (1).jpeg");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



function Faq() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("main", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h1", {
          className: "text-center",
          children: "FAQS"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
          className: "text-center",
          children: ["If you have any pressing questions for us, some answers can be found here! ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("br", {}), " Or if you'd like ask us personally, send us a message!"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "accordion accordion-flush",
          id: "accordionFlushExample",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "accordion-item",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
              className: "What is is the dress code?",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
                className: "accordion-button collapsed",
                type: "button",
                "data-bs-toggle": "collapse",
                "data-bs-target": "#flush-collapseOne",
                "aria-expanded": "false",
                "aria-controls": "flush-collapseOne",
                children: "What is the dress code?"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              id: "flush-collapseOne",
              className: "accordion-collapse collapse",
              "data-bs-parent": "#accordionFlushExample",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: "accordion-body",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
                  children: "For the traditional wear for guests please come wearing white native with onion coloured head wear/ accessories."
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
                  children: "For guest not wearing the traditional attire please dress in formal attire and also come wearing white of a lilac purple."
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                  className: "float-start",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
                    className: "img-thumbnail rounded onion-gele-one",
                    src: _public_WhatsApp_Image_2025_03_16_at_13_29_07_2_jpeg__WEBPACK_IMPORTED_MODULE_0__,
                    alt: "onion_gele"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                  className: "float-center",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
                    className: "img-thumbnail rounded onion-gele-two",
                    src: _public_WhatsApp_Image_2025_03_16_at_13_29_07_1_jpeg__WEBPACK_IMPORTED_MODULE_1__,
                    alt: "onion_gele"
                  })
                })]
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "accordion-item",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
              className: "accordion-header",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
                className: "accordion-button collapsed",
                type: "button",
                "data-bs-toggle": "collapse",
                "data-bs-target": "#flush-collapseTwo",
                "aria-expanded": "false",
                "aria-controls": "flush-collapseTwo",
                children: "Where is the traditional ceremony being held?"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              id: "flush-collapseTwo",
              className: "accordion-collapse collapse",
              "data-bs-parent": "#accordionFlushExample",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                className: "accordion-body",
                children: "The Traditional will be held at The Palace Banqueting venue located in Waltham Abbey. Please see the homepage for details of the address."
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "accordion-item",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
              className: "accordion-header",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
                className: "accordion-button collapsed",
                type: "button",
                "data-bs-toggle": "collapse",
                "data-bs-target": "#flush-collapseThree",
                "aria-expanded": "false",
                "aria-controls": "flush-collapseThree",
                children: "What foods will be available on the day?"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              id: "flush-collapseThree",
              className: "accordion-collapse collapse",
              "data-bs-parent": "#accordionFlushExample",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: "accordion-body",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
                  children: "The menu is as follows:"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
                  children: ["Canapes to be served this will be:", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("br", {}), "Puff Puff, Duck spring roll, vegetable samosa, Tempura prawns"]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
                  children: ["The main menu :", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("br", {}), "Buffet setup for :", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("br", {}), "Jollof Rice, Fried Rice White Rice, Ayamase,", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("br", {}), "Singapore Noodles, Pounded Yam and Egusi,", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("br", {}), "Plantain, Salad, Beef and Chicken."]
                })]
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "accordion-item",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
              className: "accordion-header",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
                className: "accordion-button collapsed",
                type: "button",
                "data-bs-toggle": "collapse",
                "data-bs-target": "#flush-collapseFour",
                "aria-expanded": "false",
                "aria-controls": "flush-collapseFour",
                children: "How to get there?"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              id: "flush-collapseFour",
              className: "accordion-collapse collapse",
              "data-bs-parent": "#accordionFlushExample",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: "accordion-body",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
                  children: ["Here is a step-by-step guide to help you plan your journey from London to The Palace Banqueting in Waltham Abbey.", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("br", {}), "You can choose between a taxi, Uber, or public transport, depending on your preference and convenience."]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h4", {
                  children: "Option 1: Taxi"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
                  children: ["If you prefer the comfort and directness of a taxi, you can book one through a reputable London cab service.", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("br", {}), "Inform the driver of your destination as: The Palace Banqueting, Waltham Abbey, EN9 1JH.", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("br", {}), "The journey will take approximately 40\u201350 minutes, depending on your location and traffic, and may cost around \xA335 plus.", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("br", {}), "We recommend confirming the fare with the taxi service in advance.", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("br", {})]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h4", {
                  children: "Option 2: Uber"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
                  children: ["Booking an Uber is a convenient alternative. Use the Uber app to request a ride from your current location to The Palace Banqueting, Waltham Abbey.", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("br", {}), "Estimated journey time: 15\u201350 minutes (Depending on location). Approximate fare: \xA312\u2013\xA320, depending on the time of day, demand and location.", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("br", {})]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h4", {
                  children: "Option 3: Public Transport"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("strong", {
                    children: "Getting to The Palace Banqueting Using Public Transport:"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("br", {}), "To reach The Palace Banqueting, start by taking a train heading towards", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("strong", {
                    children: "Bishop Stortford, Cheshunt"
                  }), ", or ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("strong", {
                    children: "Hertford East"
                  }), ", and disembark at ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("strong", {
                    children: "Waltham Cross Station "
                  }), ".", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("br", {}), "After exiting the train, walk to the nearby Waltham Cross Bus Station, where you can board one of the following buses: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("strong", {
                    children: "66, 251,"
                  }), " or ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("strong", {
                    children: "250"
                  }), ". Inform the driver that you need to get off at ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("strong", {
                    children: "Farm Hill Road"
                  }), ".", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("br", {}), "Alternatively, if you prefer, you can take a local taxi or book an Uber directly from Waltham Cross Station to The Palace Banqueting. The taxi ride is approximately 10 minutes.", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("br", {}), "Estimated Cost:", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
                      children: "Combined train and bus fares: \xA310\u2013\xA315."
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
                      children: "Taxi/Uber from Waltham Cross Station: approximately \xA310\u2013\xA315."
                    })]
                  }), "This guide is designed to make your journey smooth and stress-free. Have a pleasant trip to The Palace Banqueting!", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("br", {})]
                })]
              })
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          id: "contact-us-form",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h4", {
            children: "Contact Us"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("iframe", {
            src: "https://docs.google.com/forms/d/e/1FAIpQLSdGZq0pDB6-ii8-9JXygI9WEFsvZ-T4I_X6oBIabUSeTyv5HA/viewform?embedded=true",
            width: "400",
            height: "551",
            frameBorder: "0",
            marginHeight: "0",
            marginWidth: "0",
            children: "Loading\u2026"
          })]
        })]
      })
    })
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Faq);

/***/ }),

/***/ "./assets/components/pages/GiftRegistry.js":
/*!*************************************************!*\
  !*** ./assets/components/pages/GiftRegistry.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_GiftRegistry_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/GiftRegistry.css */ "./assets/styles/GiftRegistry.css");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Button */ "./assets/components/Button.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




function GiftRegistry() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "container container-fluid",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("main", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "col-sm-12 col-md-12 col-lg-12 col-xl-12",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h1", {
              className: "text-center",
              children: "Gift Registry"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("p", {
              children: ["We are so excited to have you join our special day and your presence at our wedding is the best gift we could ask for. However, if we are to be honored with a present from you, a monetary gift towards our ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("strong", {
                children: "Honeymoon Trip to Bali "
              }), " would be very much appreciated."]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              children: "We have set up a cash fund wedding registry at Prezola."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              children: "OR"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              children: "We have put together a gift list as well on both sites below. Just click on either buttons and you'll be taken to the sites for our gifts registry!"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("p", {
              children: ["We thank you very much in advance! ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                children: " \uD83D\uDE0A"
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "gift-buttons text-center col-sm col-md-12 col-lg-12 col-xl-12",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
              href: "https://www.amazon.co.uk/wedding/registry/35LX7TSA6B7JV",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {
                children: "Amazon",
                size: "btn-small",
                type: "submit",
                style: "btn-outline"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
              href: "https://prezola.com/buy/view/207072",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {
                children: "Prezola",
                size: "btn-small",
                type: "submit",
                style: "btn-outline"
              })
            })]
          })]
        })
      })
    })
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GiftRegistry);

/***/ }),

/***/ "./assets/components/pages/Home.js":
/*!*****************************************!*\
  !*** ./assets/components/pages/Home.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _styles_Home_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/Home.css */ "./assets/styles/Home.css");
/* harmony import */ var _public_hero_image_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/hero-image.jpeg */ "./assets/public/hero-image.jpeg");
/* harmony import */ var _public_footer_image_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/footer-image.jpeg */ "./assets/public/footer-image.jpeg");
/* harmony import */ var _public_image_arch_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/image-arch.png */ "./assets/public/image-arch.png");
/* harmony import */ var _styles_Button_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/Button.css */ "./assets/styles/Button.css");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");








function Home() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "jumbotron jumbotron-fluid",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h1", {
        className: "home-title",
        children: "Remi Fawehinmi & Simisola Adejumo"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("picture", {
        className: "",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("source", {
          media: "(max-width: 799px)",
          srcSet: _public_hero_image_jpeg__WEBPACK_IMPORTED_MODULE_2__
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("source", {
          media: "(min-width: 800px)",
          srcSet: _public_hero_image_jpeg__WEBPACK_IMPORTED_MODULE_2__
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
          src: _public_hero_image_jpeg__WEBPACK_IMPORTED_MODULE_2__,
          alt: "",
          className: "hero-image"
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "clearfix"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("main", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "row",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "col-sm-12 col-md-12 col-lg-12 col-xl-12 my-5",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3", {
              children: "Welcome to Our Wedding!"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "col-sm-12 col-md-12 col-lg-6 col-xl-6 float-start",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
                children: "We cordially invite you to our Traditional Engagement and Wedding Reception on the 17th April, 2025. We are excited to have you share our big day with us."
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
                children: "As we wait for the big day to arrive, we have created this website to keep you up to date with everything."
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("p", {
                children: ["In the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("strong", {
                  children: "attendance section"
                }), ", can you Please confirm whether or not you will be at our wedding with us? You can ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("strong", {
                  children: [" ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("a", {
                    href: "/wedding/confirm-attendance",
                    className: "text-black",
                    children: "RSVP"
                  })]
                }), " here as well as clicking on the menu button on the top right corner of this page, clicking the button below this text or scrolling to the bottom of the page. You can also see the FAQ and Gift registry on the menu. Please confirm as soon as possible so we can arrange everything much faster."]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("strong", {
                  children: ["For the dress code if you are wearing the traditional attire please wear white and onion coloured gele and fila (there will be pictures in the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("a", {
                    href: "/wedding/faqs",
                    children: "FAQ"
                  }), " section). For those not wearing traditional attire please wear white or something similar."]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("p", {
                children: ["Also, please note that on the day, do ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("strong", {
                  children: "not"
                }), " upload any photos or videos on any form of social media."]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
                children: "Enjoy the site, and We\u2019ll see you soon!"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                className: "text-center text-black",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Link, {
                  to: "/wedding/confirm-attendance",
                  className: "btn-outline",
                  children: "RSVP"
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "img-arch col-sm-12 col-md-12 col-lg-6 col-xl-6 float-end ",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
                src: _public_image_arch_png__WEBPACK_IMPORTED_MODULE_4__,
                alt: "arch-image",
                className: "arch-image"
              })
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "aside row",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "col-sm-12 col-md-12 col-md-8 col-lg-8 my-3",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3", {
              children: "Where is it located?"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              id: "map",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("gmp-map", {
                center: "51.683006286621094,-0.005473606754094362",
                zoom: "14",
                "map-id": "tewl",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("gmp-advanced-marker", {
                  position: "51.683006286621094,-0.005473606754094362",
                  title: "My location"
                })
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "col-sm col-lg-4 my-5 float-lg-end",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h5", {
              children: "April, 17, 2025"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("p", {
              children: ["Traditional Engagement and Reception | 3:30 PM", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("br", {}), "The Palace Banqueting 112 Brooker Rd, Waltham Abbey EN9 1JH (Wheelchair Accessible)"]
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "col-sm-12 col-md-12 col-lg-6",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
              src: _public_footer_image_jpeg__WEBPACK_IMPORTED_MODULE_3__,
              alt: "footer-image",
              className: "footer-image"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "row article float-right clearfix",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "text-center col-sm-12 col-md-12 col-lg-6 col-xl-6 my-5 justify-content-center align-items-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3", {
                children: "Save the Date and we'll see you there!"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("p", {
                children: ["If you'd like to give us a gift you can do so from  ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Link, {
                  to: "/wedding/gift-registry",
                  children: "here"
                }), "."]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Link, {
                to: "/wedding/confirm-attendance",
                className: "btn-outline",
                children: "RSVP"
              })]
            })
          })]
        })]
      })
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ "./assets/styles/Button.css":
/*!**********************************!*\
  !*** ./assets/styles/Button.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/ConfirmAttendance.css":
/*!*********************************************!*\
  !*** ./assets/styles/ConfirmAttendance.css ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/GiftRegistry.css":
/*!****************************************!*\
  !*** ./assets/styles/GiftRegistry.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/Home.css":
/*!********************************!*\
  !*** ./assets/styles/Home.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/Navbar.css":
/*!**********************************!*\
  !*** ./assets/styles/Navbar.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/public/WhatsApp Image 2025-03-16 at 13.29.07 (1).jpeg":
/*!**********************************************************************!*\
  !*** ./assets/public/WhatsApp Image 2025-03-16 at 13.29.07 (1).jpeg ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/WhatsApp Image 2025-03-16 at 13.29.07 (1).55dee93d.jpeg";

/***/ }),

/***/ "./assets/public/WhatsApp Image 2025-03-16 at 13.29.07 (2).jpeg":
/*!**********************************************************************!*\
  !*** ./assets/public/WhatsApp Image 2025-03-16 at 13.29.07 (2).jpeg ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/WhatsApp Image 2025-03-16 at 13.29.07 (2).8b180cb7.jpeg";

/***/ }),

/***/ "./assets/public/footer-image.jpeg":
/*!*****************************************!*\
  !*** ./assets/public/footer-image.jpeg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/footer-image.1a297b45.jpeg";

/***/ }),

/***/ "./assets/public/hero-image.jpeg":
/*!***************************************!*\
  !*** ./assets/public/hero-image.jpeg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/hero-image.62b93376.jpeg";

/***/ }),

/***/ "./assets/public/image-arch.png":
/*!**************************************!*\
  !*** ./assets/public/image-arch.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/image-arch.7b18d5f2.png";

/***/ }),

/***/ "./assets/public/wedding-logo.png":
/*!****************************************!*\
  !*** ./assets/public/wedding-logo.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/wedding-logo.11a29ee8.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_bootstrap_dist_css_bootstrap_css-node_modules_react-dom_client_js-node_m-21f243"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUE7Y0FBSzZELEdBQUcsRUFBRXNOLHNEQUFZO2NBQUNyTixHQUFHLEVBQUMsY0FBYztjQUFDekIsU0FBUyxFQUFDO1lBQWMsQ0FBQztVQUFDLENBQ25FLENBQUMsZUFDTnJDLHNEQUFBO1lBQUtxQyxTQUFTLEVBQUMsa0NBQWtDO1lBQUEvQixRQUFBLGVBRzdDVyx1REFBQTtjQUNJb0IsU0FBUyxFQUFDLGtHQUFrRztjQUFBL0IsUUFBQSxnQkFFNUdOLHNEQUFBO2dCQUFBTSxRQUFBLEVBQUk7Y0FBc0MsQ0FBSSxDQUFDLGVBQy9DVyx1REFBQTtnQkFBQVgsUUFBQSxHQUFHLHNEQUNxRCxlQUFBTixzREFBQSxDQUFDdUIsa0RBQUk7a0JBQUNxQyxFQUFFLEVBQUMsd0JBQXdCO2tCQUFBdEQsUUFBQSxFQUFDO2dCQUFJLENBQU0sQ0FBQyxLQUNyRztjQUFBLENBQUcsQ0FBQyxlQUVKTixzREFBQSxDQUFDdUIsa0RBQUk7Z0JBQUNxQyxFQUFFLEVBQUMsNkJBQTZCO2dCQUFDdkIsU0FBUyxFQUFDLGFBQWE7Z0JBQUEvQixRQUFBLEVBQUM7Y0FBSSxDQUFNLENBQUM7WUFBQSxDQUV6RTtVQUFDLENBQ0wsQ0FBQztRQUFBLENBQ0wsQ0FBQztNQUFBLENBRUo7SUFBQyxDQUNOLENBQUM7RUFBQSxDQUdSLENBQUM7QUFFWDtBQUVBLGlFQUFlRSxJQUFJOzs7Ozs7Ozs7OztBQ2pKbkI7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvQXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvTmF2YmFyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3BhZ2VzL0NvbmZpcm1BdHRlbmRhbmNlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3BhZ2VzL0ZhcS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9wYWdlcy9HaWZ0UmVnaXN0cnkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvcGFnZXMvSG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL0J1dHRvbi5jc3M/OGFiNiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL0NvbmZpcm1BdHRlbmRhbmNlLmNzcz81NTI0Iiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvR2lmdFJlZ2lzdHJ5LmNzcz9mODhhIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvSG9tZS5jc3M/NTQ1ZiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL05hdmJhci5jc3M/OTYxNCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5jc3M/M2ZiYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbS9jbGllbnQnO1xuaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvQXBwJztcbmltcG9ydCAnLi9zdHlsZXMvYXBwLmNzcyc7XG5cblxuUmVhY3RET00uY3JlYXRlUm9vdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKS5yZW5kZXIoXG4gIDxSZWFjdC5TdHJpY3RNb2RlPlxuICAgIDxBcHAvPlxuICA8L1JlYWN0LlN0cmljdE1vZGU+LFxuKVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi9OYXZiYXJcIjtcbmltcG9ydCBIb21lIGZyb20gXCIuL3BhZ2VzL0hvbWUuanNcIjtcbmltcG9ydCB7IFJvdXRlLCBSb3V0ZXMsIEJyb3dzZXJSb3V0ZXJ9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgQ29uZmlybUF0dGVuZGFuY2UgZnJvbSBcIi4vcGFnZXMvQ29uZmlybUF0dGVuZGFuY2VcIjtcbmltcG9ydCBHaWZ0UmVnaXN0cnkgZnJvbSBcIi4vcGFnZXMvR2lmdFJlZ2lzdHJ5XCI7XG5pbXBvcnQgRkFRcyBmcm9tIFwiLi9wYWdlcy9GYXFcIjtcbmltcG9ydCAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5jc3MnO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9Gb290ZXJcIjtcblxuZnVuY3Rpb24gQXBwKCl7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxCcm93c2VyUm91dGVyPlxuICAgICAgICAgICAgICAgIDxOYXZiYXIvPlxuICAgICAgICAgICAgICAgIDxSb3V0ZXM+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPScvJyBlbGVtZW50PXs8SG9tZS8+fS8+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPScvd2VkZGluZy9jb25maXJtLWF0dGVuZGFuY2UnIGVsZW1lbnQ9ezxDb25maXJtQXR0ZW5kYW5jZS8+fS8+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPScvd2VkZGluZy9naWZ0LXJlZ2lzdHJ5JyBlbGVtZW50PXs8R2lmdFJlZ2lzdHJ5Lz59Lz5cbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9Jy93ZWRkaW5nL2ZhcXMnIGVsZW1lbnQ9ezxGQVFzLz59Lz5cbiAgICAgICAgICAgICAgICA8L1JvdXRlcz5cbiAgICAgICAgICAgICAgICA8Rm9vdGVyLz5cbiAgICAgICAgICAgIDwvQnJvd3NlclJvdXRlcj5cbiAgICAgICAgPC8+XG4gICAgKVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDsiLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICcuLi9zdHlsZXMvQnV0dG9uLmNzcyc7XG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHtib29sZWFufSBmcm9tIFwieXVwXCI7XG5cbmNvbnN0IFNUWUxFUyA9IFtcbiAgICAnYnRuLXByaW1hcnknLFxuICAgICdidG4tc2Vjb25kYXJ5JyxcbiAgICAnYnRuLW91dGxpbmUnXG5dXG5jb25zdCBTSVpFUyA9IFtcbiAgICAnYnRuLW1lZGl1bScsXG4gICAgJ2J0bi1sYXJnZSdcbl1cblxuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9ICh7XG4gICAgICAgIGNoaWxkcmVuLFxuICAgICAgICB0eXBlLFxuICAgICAgICBvbkNsaWNrLFxuICAgICAgICBzdHlsZSxcbiAgICAgICAgc2l6ZSxcbiAgICAgICAgZGlzYWJsZWR9KSA9PiB7XG4gICAgY29uc3QgY2hlY2tTdHlsZSA9IFNUWUxFUy5pbmNsdWRlcyhzdHlsZSkgPyBzdHlsZSA6IFNUWUxFU1swXTtcbiAgICBjb25zdCBjaGVja1NpemUgPSBTSVpFUy5pbmNsdWRlcyhzaXplKSA/IHNpemUgOiBTSVpFU1swXTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJ0biAke2NoZWNrU3R5bGV9ICR7Y2hlY2tTaXplfWB9XG4gICAgICAgICAgICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgICAgICAgICAgICB0eXBlPXt0eXBlfVxuICAgICAgICAgICAgICAgIGNoaWxkcmVuPXtjaGlsZHJlbn1cbiAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH0+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKVxufTsiLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBGb290ZXIoKSB7XG5cbiAgICBmdW5jdGlvbiBnZXREYXRlKCl7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpICsgXCIgIFwiO1xuICAgICAgICByZXR1cm4gIHtfX2h0bWw6IHllYXJ9O1xuICAgIH1cblxuICAgIHJldHVybihcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxmb290ZXI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdycgb25Mb2FkPXtnZXREYXRlfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtY2VudGVyIGNvbC0xMic+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDU+IFJlbWkgRmF3ZWhpbm1pICYgU2ltaXNvbGEgQWRlanVtbzwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD4xN3RoIEFwcmlsLCAyMDI1PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+Q3JlYXRlZCBieSBTaW1pc29sYSAmY29weTsgPHNwYW4gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e2dldERhdGUoKX0+PC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7IiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgbG9nbyBmcm9tICcuLi9wdWJsaWMvd2VkZGluZy1sb2dvLnBuZyc7XG5pbXBvcnQgJy4uL3N0eWxlcy9OYXZiYXIuY3NzJztcblxuZnVuY3Rpb24gTmF2YmFyKCkge1xuICAgIGNvbnN0IFtjbGljaywgc2V0SXNDbGlja2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IGNsb3NlTWVudSA9ICgpID0+IHNldElzT3BlbihmYWxzZSk7XG4gICAgY29uc3QgdG9nZ2xlTmF2YmFyID0gKCkgPT4gc2V0SXNPcGVuKCFpc09wZW4pO1xuXG4gICAgY29uc3QgY2xpY2tlZCA9ICgpID0+IHNldElzQ2xpY2tlZCghY2xpY2spO1xuXG5cblxuICAgIHJldHVybihcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPSduYXZiYXInPlxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPScvJyBjbGFzc05hbWU9J2xvZ28nIG9uQ2xpY2s9e2Nsb3NlTWVudX0+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtsb2dvfSBhbHQ9JycgY2xhc3NOYW1lPSd3ZWRkaW5nLWxvZ28nLz5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21lbnUtaWNvbic+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLW91dGxpbmUgbmF2YmFyLXRvZ2dsZScgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiLm5hdmJhci1jb2xsYXBzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlTmF2YmFyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17aXNPcGVuID8gJ2ZhLXNvbGlkIGZhLXgnIDogJ2ZhLXNvbGlkIGZhLWJhcnMnfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BsaW5rcy1jb250YWluZXIgJHtpc09wZW4gJiYgY2xpY2tlZCA/ICdhY3RpdmUnOiAnJ31gfSA+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e2BuYXYtbWVudSAke2lzT3BlbiAmJiBjbGlja2VkID8gJ2FjdGl2ZScgOiAnJ31gfT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPScvJyBvbkNsaWNrPXtjbG9zZU1lbnV9IGNsYXNzTmFtZT0nbmF2LWxpbmtzJz5Ib21lPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPScvd2VkZGluZy9jb25maXJtLWF0dGVuZGFuY2UnIG9uQ2xpY2s9e2Nsb3NlTWVudX0gY2xhc3NOYW1lPSduYXYtbGlua3MnPlJTVlA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89Jy93ZWRkaW5nL2dpZnQtcmVnaXN0cnknIG9uQ2xpY2s9e2Nsb3NlTWVudX0gY2xhc3NOYW1lPSduYXYtbGlua3MnPkdpZnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVnaXN0cnk8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPScvd2VkZGluZy9mYXFzJyBvbkNsaWNrPXtjbG9zZU1lbnV9IGNsYXNzTmFtZT0nbmF2LWxpbmtzJz5GQVFzPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbmF2LW92ZXJsYXkgJHtpc09wZW4gPyAnYWN0aXZlJyA6ICcgJ31gfSBvbkNsaWNrPXt0b2dnbGVOYXZiYXJ9PjwvZGl2PlxuICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgIDwvPlxuICAgIClcbn1cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjsiLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0J1dHRvbn0gZnJvbSBcIi4uL0J1dHRvblwiO1xuaW1wb3J0ICcuLi8uLi9zdHlsZXMvQ29uZmlybUF0dGVuZGFuY2UuY3NzJztcbmltcG9ydCAqIGFzIFl1cCBmcm9tICAneXVwJ1xuXG5cbmZ1bmN0aW9uIENvbmZpcm1BdHRlbmRhbmNlKCkge1xuXG4gICAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7XG4gICAgICAgIGZpcnN0bmFtZTogJycsXG4gICAgICAgIGxhc3RuYW1lOiAnJyxcbiAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICBpc0F0dGVuZGluZzogJycsXG4gICAgICAgIHBsdXNPbmU6IGZhbHNlLFxuICAgICAgICBudW1QbHVzT25lOiAwXG4gICAgfSk7XG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSh7fSk7XG4gICAgY29uc3QgW2lzU3VibWl0dGVkLCBzZXRJc1N1Ym1pdHRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2lzRGlzYWJsZWQsIHNldElzRGlzYWJsZWRdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgICBjb25zdCB2YWxpZGF0aW9uU2NoZW1hID0gWXVwLm9iamVjdCh7XG4gICAgICAgIGZpcnN0bmFtZTogWXVwLnN0cmluZygpLnJlcXVpcmVkKCdZb3VyIEZpcnN0bmFtZSBpcyByZXF1aXJlZCcpLFxuICAgICAgICBsYXN0bmFtZTogWXVwLnN0cmluZygpLnJlcXVpcmVkKCdZb3VyIExhc3RuYW1lIGlzIHJlcXVpcmVkJyksXG4gICAgICAgIGVtYWlsOiBZdXAuc3RyaW5nKCkucmVxdWlyZWQoJ1lvdXIgZW1haWwgY2Fubm90IGJlIGVtcHR5JykuZW1haWwoKSxcbiAgICAgICAgaXNBdHRlbmRpbmc6IFl1cC5zdHJpbmcoKS5yZXF1aXJlZCgnUGxlYXNlIHNlbGVjdCBlaXRoZXIgXFwnWWVzXFwnIG9yIFxcJ05vXFwnJyksXG4gICAgICAgIHBsdXNPbmU6IFl1cC5ib29sKCkubm90UmVxdWlyZWQoKSxcbiAgICAgICAgbnVtUGx1c09uZTogWXVwLm51bWJlcigpXG4gICAgICAgICAgICAudHJhbnNmb3JtKCh2YWx1ZSkgPT4gKGlzTmFOKHZhbHVlKSA/IHVuZGVmaW5lZCA6IHZhbHVlKSlcbiAgICAgICAgICAgIC53aGVuKCdwbHVzT25lJywge1xuICAgICAgICAgICAgICAgIGlzOiB0cnVlLFxuICAgICAgICAgICAgICAgIHRoZW46IChzY2hlbWEpID0+IHNjaGVtYVxuICAgICAgICAgICAgICAgICAgICAucmVxdWlyZWQoJ1lvdXIgbnVtYmVyIG9mIHBsdXMgb25lKHMpIGlzIHJlcXVpcmVkJylcbiAgICAgICAgICAgICAgICAgICAgLnR5cGVFcnJvcignTXVzdCBiZSBhIHZhbGlkIG51bWJlcicpXG4gICAgICAgICAgICAgICAgICAgIC5wb3NpdGl2ZSgnTXVzdCBiZSBhIHBvc2l0aXZlIG51bWJlcicpXG4gICAgICAgICAgICAgICAgICAgIC5pbnRlZ2VyKCdNdXN0IGJlIGEgd2hvbGUgbnVtYmVyJylcbiAgICAgICAgICAgICAgICAgICAgLm1heCg1LCAnTWF4aW11bSBvZiA1IHBsdXMgb25lcyBhbGxvd2VkJylcbiAgICAgICAgICAgICAgICAgICAgLnRlc3QoXG4gICAgICAgICAgICAgICAgICAgICAgICAnaXMtcmVhc29uYWJsZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAnUGxlYXNlIGVudGVyIGEgcmVhc29uYWJsZSBudW1iZXIgb2YgZ3Vlc3RzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICh2YWx1ZSkgPT4gdmFsdWUgPD0gNVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIG90aGVyd2lzZTogKHNjaGVtYSkgPT4gc2NoZW1hXG4gICAgICAgICAgICAgICAgICAgIC5udWxsYWJsZSgpXG4gICAgICAgICAgICAgICAgICAgIC50cmFuc2Zvcm0oKHZhbHVlKSA9PiBudWxsKVxuICAgICAgICAgICAgfSksXG4gICAgfSk7XG5cblxuICAgIGNvbnN0IGNoZWNrR3Vlc3RFeGlzdHMgPSBhc3luYyAoZW1haWwpID0+IHtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvY2hlY2stZ3Vlc3RcIiwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZW1haWwgfSksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgICAgICAgIGlmIChkYXRhLmV4aXN0cykge1xuICAgICAgICAgICAgICAgIHNldEVycm9yKChlcnJvcikgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IsXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiBkYXRhLmVycm9ycy5tZXNzYWdlLFxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0RXJyb3IoKGVycm9yKSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICBlcnJvcixcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkYXRhLmV4aXN0cztcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHNldEVycm9yKChlcnJvcikgPT4gKHtcbiAgICAgICAgICAgICAgICBlcnJvcixcbiAgICAgICAgICAgICAgICBlbWFpbDogJ1NvcnJ5IHdlXFwncmUgdW5hYmxlIHRvIHZlcmlmeSB5b3VyIGVtYWlsJyxcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBjb25zdCBuYW1lICA9IGUudGFyZ2V0Lm5hbWU7XG4gICAgICAgIGNvbnN0IHZhbHVlID1cbiAgICAgICAgICAgIGUudGFyZ2V0LnR5cGUgPT09ICdjaGVja2JveCcgPyBlLnRhcmdldC5jaGVja2VkIDogZS50YXJnZXQudmFsdWU7XG5cbiAgICAgICAgc2V0Rm9ybURhdGEoe1xuICAgICAgICAgICAgLi4uZm9ybURhdGEsXG4gICAgICAgICAgICBbbmFtZV06IHZhbHVlLFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAobmFtZSA9PT0gXCJlbWFpbFwiKSB7XG4gICAgICAgICAgICBjaGVja0d1ZXN0RXhpc3RzKHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldEVycm9yKHsuLi5lcnJvciwgW25hbWVdOiAnJ30pO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyByZXNldCBzdGF0ZSBhdCB0aGUgc3RhcnRcbiAgICAgICAgICAgIHNldEVycm9yKHt9KTtcbiAgICAgICAgICAgIHNldElzU3VibWl0dGVkKGZhbHNlKTtcblxuICAgICAgICAgICAgLy8gY2hlY2sgZW1haWwgZXhpc3RzXG4gICAgICAgICAgICBjb25zdCBlbWFpbEV4aXN0cyAgPSBhd2FpdCBjaGVja0d1ZXN0RXhpc3RzKGZvcm1EYXRhLmVtYWlsKTtcbiAgICAgICAgICAgIGlmIChlbWFpbEV4aXN0cykge1xuICAgICAgICAgICAgICAgIHNldEVycm9yKHtlbWFpbDogJ1lvdSBoYXZlIGFscmVhZHkgY29uZmlybWVkIHlvdXIgYXR0ZW5kYW5jZSd9KVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgYXdhaXQgdmFsaWRhdGlvblNjaGVtYS52YWxpZGF0ZShmb3JtRGF0YSx7YWJvcnRFYXJseTogZmFsc2V9KTtcblxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9hZGQtZ3Vlc3QnLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQWNjZXB0JyA6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZvcm1EYXRhKSxcblxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGRhdGEubWVzc2FnZSB8fCBcIkZhaWxlZCB0byBhZGQgZ3Vlc3RcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldElzU3VibWl0dGVkKHRydWUpO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBzZXRJc1N1Ym1pdHRlZChmYWxzZSksIDUwMDApO1xuXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld0Vycm9yID0ge307XG5cbiAgICAgICAgICAgIGUuaW5uZXIuZm9yRWFjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgbmV3RXJyb3JbZXJyLnBhdGhdID0gZXJyLm1lc3NhZ2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNldEVycm9yKG5ld0Vycm9yKTtcblxuICAgICAgICAgICAgc2V0SXNTdWJtaXR0ZWQoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcblxuICAgICAgICBjb25zdCB0YXJnZXREYXRlID0gbmV3IERhdGUoJzIwMjUtMDMtMjgnKTtcblxuICAgICAgICBpZiAoY3VycmVudERhdGUgPj0gdGFyZ2V0RGF0ZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coY3VycmVudERhdGUgPj0gdGFyZ2V0RGF0ZSk7XG4gICAgICAgICAgICBzZXRJc0Rpc2FibGVkKHRydWUpO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBzZXRJc0Rpc2FibGVkKGZhbHNlKSwgMTAwMDApO1xuICAgICAgICB9XG4gICAgfSwgW10pO1xuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgPG1haW4+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtY2VudGVyIHRleHQtbGctY2VudGVyJz5XaWxsIHlvdSBiZSB0aGVyZSBvciB3aWxsIHlvdSBtaXNzIGl0PyA8L2gxPlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUbyBjb25maXJtIHlvdXIgYXR0ZW5kYW5jZSB0byB0aGUgd2VkZGluZywgZW50ZXIgeW91ciBmaXJzdCBhbmQgbGFzdG5hbWUgaW4gdGhlIGZvcm0gYmVsb3cuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlybSB5b3VyIGF0dGVuZGFuY2UgYnkgZWl0aGVyIHNlbGVjdGluZyAnWWVzJyBvciAnTm8nLiBGaW5hbGx5IHBsZWFzZSBsZXQgdXMga25vdyBpZiB5b3VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmUgYnJpbmdpbmcgYWxvbmcgYW55IHBsdXMgb25lcyBhbmQgaG93IG1hbnkgYW5kIGNsaWNrIG9uIHRoZSAnc3VibWl0JyBidXR0b24uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBXZSBjYW4ndCB3YWl0IHRvIGZvciB5b3UgdG8gam9pbiB1cyBvbiBvdXIgc3BlY2lhbCBkYXkhXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtY2VudGVyIHRleHQtbWQtY2VudGVyIHRleHQtbGctY2VudGVyJz5QbGVhc2UgUlNWUCBieSBNYXJjaCAyOHRoIDIwMjU8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT0ncm93IG1iLTMgZy0zIGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyJyBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wteHMtMTIgY29sLW1kLTYnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nZm9ybS1sYWJlbCcgaHRtbEZvcj0nZmlyc3RuYW1lJz5GaXJzdG5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZpcnN0bmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nRmlyc3RuYW1lJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J2ZpcnN0TmFtZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5maXJzdG5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzRGlzYWJsZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvci5maXJzdG5hbWUgJiYgPHNwYW4+e2Vycm9yLmZpcnN0bmFtZX08L3NwYW4+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXhzLTEyIGNvbC1tZC02Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2Zvcm0tbGFiZWwnIGh0bWxGb3I9J2xhc3ROYW1lJz5MYXN0bmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibGFzdG5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0xhc3RuYW1lJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J2xhc3ROYW1lJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmxhc3RuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc0Rpc2FibGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3IubGFzdG5hbWUgJiYgPHNwYW4+e2Vycm9yLmxhc3RuYW1lfTwvc3Bhbj59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21iLTMnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwIGNvbC1zbSBjb2wtbGctNiBjb2wteGwtNiBnLXhsLTQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbWFpbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nZW1haWwnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nRW1haWwnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEuZW1haWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc0Rpc2FibGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3IuZW1haWwgJiYgPHNwYW4+e2Vycm9yLmVtYWlsfTwvc3Bhbj59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21iLTMnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtc20gZm9ybS1ncm91cCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5BcmUgeW91IGF0dGVuZGluZz88L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm0tY2hlY2sgbXQtMyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2Zvcm0tY2hlY2stbGFiZWwnIGh0bWxGb3I9J2lzQXR0ZW5kaW5nJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFllc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZm9ybS1jaGVjay1pbnB1dCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2lzQXR0ZW5kaW5nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0ncmFkaW8nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD0nYXR0ZW5kaW5nWWVzJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9JzEnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtmb3JtRGF0YS5pc0F0dGVuZGluZyA9PT0gJzEnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc0Rpc2FibGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm0tY2hlY2snPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdmb3JtLWNoZWNrLWxhYmVsJyBodG1sRm9yPSdpc0F0dGVuZGluZyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZm9ybS1jaGVjay1pbnB1dCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2lzQXR0ZW5kaW5nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9JzAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdyYWRpbydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2Zvcm1EYXRhLmlzQXR0ZW5kaW5nID09PSAnMCd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzRGlzYWJsZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2Vycm9yLmlzQXR0ZW5kaW5nICYmIDxzcGFuPntlcnJvci5pc0F0dGVuZGluZ308L3NwYW4+fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtLWNoZWNrJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdmb3JtLWNoZWNrLWxhYmVsJyBodG1sRm9yPScnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQbHVzIG9uZShzKT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2Zvcm0tY2hlY2staW5wdXQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J3BsdXNPbmUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5wbHVzT25lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdjaGVja2JveCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzRGlzYWJsZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWItMyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm1EYXRhLnBsdXNPbmUgJiYgPGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAgY29sLXNtIGNvbC1sZy02IGNvbC14bC02IGcteGwtNCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhvdyBtYW55IHBsdXMgb25lcyB3aWxsIHlvdSBicmluZz9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J251bVBsdXNPbmUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEubnVtUGx1c09uZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J251bWJlcidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNEaXNhYmxlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Vycm9yLm51bVBsdXNPbmUgJiYgPHNwYW4+e2Vycm9yLm51bVBsdXNPbmV9PC9zcGFuPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj59XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J1dHRvbic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbj0nU3VibWl0J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPSdidG4tc21hbGwnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3N1Ym1pdCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e2lzRGlzYWJsZWQgPyAnYnRuLXNlY29uZGFyeScgOiAnYnRuLW91dGxpbmUnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNEaXNhYmxlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU3VibWl0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuXG4gICAgICAgICAgICAgICAgICAgIHtpc1N1Ym1pdHRlZCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tc3VibWlzc2lvbiBhbGVydCBhbGVydC1zdWNjZXNzIHRleHQgY2VudGVyIG14LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBZb3VyIGRldGFpbHMgaGF2ZSBiZWVuIHN1Ym1pdHRlZCFcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICB7aXNEaXNhYmxlZCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1zZWNvbmRhcnkgdGV4dCBjZW50ZXIgbXgtM1wiPlRoaXMgZm9ybSBoYXMgYmVlbiBkaXNhYmxlZCBhcyB0aGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWFkbGluZSAoTWFyY2ggMjgsIDIwMjUpIGhhcyBwYXNzZWQuPC9wPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb25maXJtQXR0ZW5kYW5jZTsiLCJpbXBvcnQgT25pb25HZWxlMSBmcm9tICcuLi8uLi9wdWJsaWMvV2hhdHNBcHAgSW1hZ2UgMjAyNS0wMy0xNiBhdCAxMy4yOS4wNyAoMikuanBlZyc7XG5pbXBvcnQgT25pb25HZWxlMiBmcm9tICcuLi8uLi9wdWJsaWMvV2hhdHNBcHAgSW1hZ2UgMjAyNS0wMy0xNiBhdCAxMy4yOS4wNyAoMSkuanBlZyc7XG5mdW5jdGlvbiBGYXEoKSB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgPG1haW4+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtY2VudGVyJz5GQVFTPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlcic+SWYgeW91IGhhdmUgYW55IHByZXNzaW5nIHF1ZXN0aW9ucyBmb3IgdXMsIHNvbWUgYW5zd2VycyBjYW4gYmUgZm91bmRcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlcmUhIDxici8+IE9yIGlmIHlvdSdkIGxpa2UgYXNrIHVzIHBlcnNvbmFsbHksIHNlbmQgdXMgYSBtZXNzYWdlITwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvcmRpb24gYWNjb3JkaW9uLWZsdXNoXCIgaWQ9XCJhY2NvcmRpb25GbHVzaEV4YW1wbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3JkaW9uLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiV2hhdCBpcyBpcyB0aGUgZHJlc3MgY29kZT9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJhY2NvcmRpb24tYnV0dG9uIGNvbGxhcHNlZFwiIHR5cGU9XCJidXR0b25cIiBkYXRhLWJzLXRvZ2dsZT1cImNvbGxhcHNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWJzLXRhcmdldD1cIiNmbHVzaC1jb2xsYXBzZU9uZVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz1cImZsdXNoLWNvbGxhcHNlT25lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXaGF0IGlzIHRoZSBkcmVzcyBjb2RlP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJmbHVzaC1jb2xsYXBzZU9uZVwiIGNsYXNzTmFtZT1cImFjY29yZGlvbi1jb2xsYXBzZSBjb2xsYXBzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWJzLXBhcmVudD1cIiNhY2NvcmRpb25GbHVzaEV4YW1wbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvcmRpb24tYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Rm9yIHRoZSB0cmFkaXRpb25hbCB3ZWFyIGZvciBndWVzdHMgcGxlYXNlIGNvbWUgd2VhcmluZyB3aGl0ZSBuYXRpdmUgd2l0aCBvbmlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG91cmVkIGhlYWQgd2Vhci8gYWNjZXNzb3JpZXMuPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGb3IgZ3Vlc3Qgbm90IHdlYXJpbmcgdGhlIHRyYWRpdGlvbmFsIGF0dGlyZSBwbGVhc2UgZHJlc3MgaW4gZm9ybWFsIGF0dGlyZSBhbmQgYWxzbyBjb21lIHdlYXJpbmcgd2hpdGUgb2YgYSBsaWxhYyBwdXJwbGUuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxvYXQtc3RhcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZy10aHVtYm5haWwgcm91bmRlZCBvbmlvbi1nZWxlLW9uZVwiIHNyYz17T25pb25HZWxlMX0gYWx0PVwib25pb25fZ2VsZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsb2F0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1nLXRodW1ibmFpbCByb3VuZGVkIG9uaW9uLWdlbGUtdHdvXCIgc3JjPXtPbmlvbkdlbGUyfSBhbHQ9XCJvbmlvbl9nZWxlXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3JkaW9uLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiYWNjb3JkaW9uLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImFjY29yZGlvbi1idXR0b24gY29sbGFwc2VkXCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtYnMtdG9nZ2xlPVwiY29sbGFwc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYnMtdGFyZ2V0PVwiI2ZsdXNoLWNvbGxhcHNlVHdvXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwiZmx1c2gtY29sbGFwc2VUd29cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdoZXJlIGlzIHRoZSB0cmFkaXRpb25hbCBjZXJlbW9ueSBiZWluZyBoZWxkP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJmbHVzaC1jb2xsYXBzZVR3b1wiIGNsYXNzTmFtZT1cImFjY29yZGlvbi1jb2xsYXBzZSBjb2xsYXBzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWJzLXBhcmVudD1cIiNhY2NvcmRpb25GbHVzaEV4YW1wbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvcmRpb24tYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhlIFRyYWRpdGlvbmFsIHdpbGwgYmUgaGVsZCBhdCBUaGUgUGFsYWNlIEJhbnF1ZXRpbmcgdmVudWUgbG9jYXRlZCBpbiBXYWx0aGFtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBYmJleS4gUGxlYXNlIHNlZSB0aGUgaG9tZXBhZ2UgZm9yIGRldGFpbHMgb2YgdGhlIGFkZHJlc3MuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY29yZGlvbi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImFjY29yZGlvbi1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJhY2NvcmRpb24tYnV0dG9uIGNvbGxhcHNlZFwiIHR5cGU9XCJidXR0b25cIiBkYXRhLWJzLXRvZ2dsZT1cImNvbGxhcHNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWJzLXRhcmdldD1cIiNmbHVzaC1jb2xsYXBzZVRocmVlXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwiZmx1c2gtY29sbGFwc2VUaHJlZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2hhdCBmb29kcyB3aWxsIGJlIGF2YWlsYWJsZSBvbiB0aGUgZGF5P1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJmbHVzaC1jb2xsYXBzZVRocmVlXCIgY2xhc3NOYW1lPVwiYWNjb3JkaW9uLWNvbGxhcHNlIGNvbGxhcHNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYnMtcGFyZW50PVwiI2FjY29yZGlvbkZsdXNoRXhhbXBsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY29yZGlvbi1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgbWVudSBpcyBhcyBmb2xsb3dzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2FuYXBlcyB0byBiZSBzZXJ2ZWQgdGhpcyB3aWxsIGJlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHVmZiBQdWZmLCBEdWNrIHNwcmluZyByb2xsLCB2ZWdldGFibGUgc2Ftb3NhLCBUZW1wdXJhIHByYXduc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgbWFpbiBtZW51IDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJ1ZmZldCBzZXR1cCBmb3IgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSm9sbG9mIFJpY2UsIEZyaWVkIFJpY2UgV2hpdGUgUmljZSwgQXlhbWFzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNpbmdhcG9yZSBOb29kbGVzLCBQb3VuZGVkIFlhbSBhbmQgRWd1c2ksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQbGFudGFpbiwgU2FsYWQsIEJlZWYgYW5kIENoaWNrZW4uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY29yZGlvbi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImFjY29yZGlvbi1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJhY2NvcmRpb24tYnV0dG9uIGNvbGxhcHNlZFwiIHR5cGU9XCJidXR0b25cIiBkYXRhLWJzLXRvZ2dsZT1cImNvbGxhcHNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWJzLXRhcmdldD1cIiNmbHVzaC1jb2xsYXBzZUZvdXJcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJmbHVzaC1jb2xsYXBzZUZvdXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhvdyB0byBnZXQgdGhlcmU/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImZsdXNoLWNvbGxhcHNlRm91clwiIGNsYXNzTmFtZT1cImFjY29yZGlvbi1jb2xsYXBzZSBjb2xsYXBzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWJzLXBhcmVudD1cIiNhY2NvcmRpb25GbHVzaEV4YW1wbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvcmRpb24tYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkhlcmUgaXMgYSBzdGVwLWJ5LXN0ZXAgZ3VpZGUgdG8gaGVscCB5b3UgcGxhbiB5b3VyIGpvdXJuZXkgZnJvbSBMb25kb24gdG8gVGhlIFBhbGFjZSBCYW5xdWV0aW5nIGluIFdhbHRoYW0gQWJiZXkuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBZb3UgY2FuIGNob29zZSBiZXR3ZWVuIGEgdGF4aSwgVWJlciwgb3IgcHVibGljIHRyYW5zcG9ydCwgZGVwZW5kaW5nIG9uIHlvdXIgcHJlZmVyZW5jZSBhbmQgY29udmVuaWVuY2UuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0Pk9wdGlvbiAxOiBUYXhpPC9oND5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+SWYgeW91IHByZWZlciB0aGUgY29tZm9ydCBhbmQgZGlyZWN0bmVzcyBvZiBhIHRheGksIHlvdSBjYW4gYm9vayBvbmUgdGhyb3VnaCBhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXB1dGFibGUgTG9uZG9uIGNhYiBzZXJ2aWNlLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbmZvcm0gdGhlIGRyaXZlciBvZiB5b3VyIGRlc3RpbmF0aW9uIGFzOiBUaGUgUGFsYWNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCYW5xdWV0aW5nLCBXYWx0aGFtIEFiYmV5LCBFTjkgMUpILlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgam91cm5leSB3aWxsIHRha2UgYXBwcm94aW1hdGVseSA0MOKAkzUwIG1pbnV0ZXMsIGRlcGVuZGluZyBvbiB5b3VyIGxvY2F0aW9uIGFuZCB0cmFmZmljLCBhbmQgbWF5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3N0IGFyb3VuZCDCozM1IHBsdXMuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5XZSByZWNvbW1lbmQgY29uZmlybWluZyB0aGUgZmFyZSB3aXRoIHRoZSB0YXhpIHNlcnZpY2UgaW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkdmFuY2UuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5PcHRpb24gMjogVWJlcjwvaDQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJvb2tpbmcgYW4gVWJlciBpcyBhIGNvbnZlbmllbnQgYWx0ZXJuYXRpdmUuIFVzZSB0aGUgVWJlciBhcHAgdG8gcmVxdWVzdCBhIHJpZGUgZnJvbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeW91ciBjdXJyZW50IGxvY2F0aW9uIHRvIFRoZSBQYWxhY2UgQmFucXVldGluZywgV2FsdGhhbSBBYmJleS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFc3RpbWF0ZWQgam91cm5leSB0aW1lOiAxNeKAkzUwIG1pbnV0ZXMgKERlcGVuZGluZyBvbiBsb2NhdGlvbikuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHByb3hpbWF0ZSBmYXJlOiDCozEy4oCTwqMyMCwgZGVwZW5kaW5nIG9uIHRoZSB0aW1lIG9mIGRheSwgZGVtYW5kIGFuZCBsb2NhdGlvbi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0Pk9wdGlvbiAzOiBQdWJsaWMgVHJhbnNwb3J0PC9oND5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5HZXR0aW5nIHRvIFRoZSBQYWxhY2UgQmFucXVldGluZyBVc2luZyBQdWJsaWMgVHJhbnNwb3J0Ojwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUbyByZWFjaCBUaGUgUGFsYWNlIEJhbnF1ZXRpbmcsIHN0YXJ0IGJ5IHRha2luZyBhIHRyYWluIGhlYWRpbmcgdG93YXJkc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5CaXNob3AgU3RvcnRmb3JkLCBDaGVzaHVudDwvc3Ryb25nPiwgb3IgPHN0cm9uZz5IZXJ0Zm9yZCBFYXN0PC9zdHJvbmc+LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5kIGRpc2VtYmFyayBhdCA8c3Ryb25nPldhbHRoYW0gQ3Jvc3MgU3RhdGlvbiA8L3N0cm9uZz4uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFmdGVyIGV4aXRpbmcgdGhlIHRyYWluLCB3YWxrIHRvIHRoZSBuZWFyYnkgV2FsdGhhbSBDcm9zcyBCdXMgU3RhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlIHlvdSBjYW4gYm9hcmQgb25lIG9mIHRoZSBmb2xsb3dpbmcgYnVzZXM6IDxzdHJvbmc+NjYsIDI1MSw8L3N0cm9uZz4gb3IgPHN0cm9uZz4yNTA8L3N0cm9uZz4uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbmZvcm0gdGhlIGRyaXZlciB0aGF0IHlvdSBuZWVkIHRvIGdldCBvZmYgYXQgPHN0cm9uZz5GYXJtIEhpbGwgUm9hZDwvc3Ryb25nPi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWx0ZXJuYXRpdmVseSwgaWYgeW91IHByZWZlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHlvdSBjYW4gdGFrZSBhIGxvY2FsIHRheGkgb3IgYm9vayBhbiBVYmVyIGRpcmVjdGx5IGZyb20gV2FsdGhhbSBDcm9zcyBTdGF0aW9uIHRvIFRoZSBQYWxhY2UgQmFucXVldGluZy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoZSB0YXhpIHJpZGUgaXMgYXBwcm94aW1hdGVseSAxMCBtaW51dGVzLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVzdGltYXRlZCBDb3N0OlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkNvbWJpbmVkIHRyYWluIGFuZCBidXMgZmFyZXM6IMKjMTDigJPCozE1LjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlRheGkvVWJlciBmcm9tIFdhbHRoYW0gQ3Jvc3MgU3RhdGlvbjogYXBwcm94aW1hdGVseSDCozEw4oCTwqMxNS48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyBndWlkZSBpcyBkZXNpZ25lZCB0byBtYWtlIHlvdXIgam91cm5leSBzbW9vdGggYW5kIHN0cmVzcy1mcmVlLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSGF2ZSBhIHBsZWFzYW50IHRyaXAgdG8gVGhlIFBhbGFjZSBCYW5xdWV0aW5nIVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyo8ZGl2IGNsYXNzTmFtZT1cImFjY29yZGlvbi1pdGVtXCI+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgPGgyIGNsYXNzTmFtZT1cImFjY29yZGlvbi1oZWFkZXJcIj4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJhY2NvcmRpb24tYnV0dG9uIGNvbGxhcHNlZFwiIHR5cGU9XCJidXR0b25cIiBkYXRhLWJzLXRvZ2dsZT1cImNvbGxhcHNlXCIqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgICAgICAgICBkYXRhLWJzLXRhcmdldD1cIiNmbHVzaC1jb2xsYXBzZUZpdmVcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJmbHVzaC1jb2xsYXBzZUZpdmVcIj4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgICAgICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICA8L2J1dHRvbj4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICA8L2gyPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgIDxkaXYgaWQ9XCJmbHVzaC1jb2xsYXBzZUZpdmVcIiBjbGFzc05hbWU9XCJhY2NvcmRpb24tY29sbGFwc2UgY29sbGFwc2VcIiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICAgZGF0YS1icy1wYXJlbnQ9XCIjYWNjb3JkaW9uRmx1c2hFeGFtcGxlXCI+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3JkaW9uLWJvZHlcIj5QbGFjZWhvbGRlciBjb250ZW50IGZvciB0aGlzIGFjY29yZGlvbiwgd2hpY2ggaXMqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgICAgIGludGVuZGVkIHRvKi99XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgICAgICAgICBkZW1vbnN0cmF0ZSB0aGUgPGNvZGU+LmFjY29yZGlvbi1mbHVzaDwvY29kZT4gY2xhc3MuIFRoaXMgaXMgdGhlIHRoaXJkIGl0ZW0ncyovfVxuICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICAgICAgYWNjb3JkaW9uKi99XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgICAgICAgICBib2R5LiBOb3RoaW5nIG1vcmUgZXhjaXRpbmcgaGFwcGVuaW5nIGhlcmUgaW4gdGVybXMgb2YgY29udGVudCwgYnV0IGp1c3QgZmlsbGluZyB1cCovfVxuICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICAgICAgdGhlKi99XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgICAgICAgICBzcGFjZSB0byBtYWtlIGl0IGxvb2ssIGF0IGxlYXN0IGF0IGZpcnN0IGdsYW5jZSwgYSBiaXQgbW9yZSByZXByZXNlbnRhdGl2ZSBvZiBob3cqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgICAgIHRoaXMgd291bGQqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgICAgIGxvb2sgaW4gYSByZWFsLXdvcmxkIGFwcGxpY2F0aW9uLiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICA8L2Rpdj4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICA8L2Rpdj4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKjwvZGl2PiovfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPSdjb250YWN0LXVzLWZvcm0nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0PkNvbnRhY3QgVXM8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlmcmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vZG9jcy5nb29nbGUuY29tL2Zvcm1zL2QvZS8xRkFJcFFMU2RHWnEwcERCNi1paTgtOUpYeWdJOVdFRnN2Wi1UNElfWDZvQklhYlVTZVR5djVIQS92aWV3Zm9ybT9lbWJlZGRlZD10cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjQwMFwiIGhlaWdodD1cIjU1MVwiIGZyYW1lQm9yZGVyPVwiMFwiIG1hcmdpbkhlaWdodD1cIjBcIiBtYXJnaW5XaWR0aD1cIjBcIj5Mb2FkaW5n4oCmXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2lmcmFtZT5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbil9XG5cbmV4cG9ydCBkZWZhdWx0IEZhcSIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAnLi4vLi4vc3R5bGVzL0dpZnRSZWdpc3RyeS5jc3MnXG5pbXBvcnQge0J1dHRvbn0gZnJvbSBcIi4uL0J1dHRvblwiO1xuXG5mdW5jdGlvbiBHaWZ0UmVnaXN0cnkoKSB7XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyIGNvbnRhaW5lci1mbHVpZCc+XG4gICAgICAgICAgICAgICAgPG1haW4+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1zbS0xMiBjb2wtbWQtMTIgY29sLWxnLTEyIGNvbC14bC0xMic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInPkdpZnQgUmVnaXN0cnk8L2gxPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+V2UgYXJlIHNvIGV4Y2l0ZWQgdG8gaGF2ZSB5b3Ugam9pbiBvdXIgc3BlY2lhbCBkYXkgYW5kIHlvdXIgcHJlc2VuY2UgYXQgb3VyIHdlZGRpbmcgaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIGJlc3QgZ2lmdCB3ZSBjb3VsZCBhc2sgZm9yLiBIb3dldmVyLCBpZiB3ZSBhcmUgdG8gYmUgaG9ub3JlZCB3aXRoIGEgcHJlc2VudCBmcm9tXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHlvdSwgYSBtb25ldGFyeSBnaWZ0IHRvd2FyZHMgb3VyIDxzdHJvbmc+SG9uZXltb29uIFRyaXAgdG8gQmFsaSA8L3N0cm9uZz4gd291bGQgYmUgdmVyeSBtdWNoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcHJlY2lhdGVkLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPldlIGhhdmUgc2V0IHVwIGEgY2FzaCBmdW5kIHdlZGRpbmcgcmVnaXN0cnkgYXQgUHJlem9sYS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+T1I8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+V2UgaGF2ZSBwdXQgdG9nZXRoZXIgYSBnaWZ0IGxpc3QgYXMgd2VsbCBvbiBib3RoIHNpdGVzIGJlbG93LiBKdXN0IGNsaWNrIG9uIGVpdGhlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25zIGFuZCB5b3UnbGwgYmUgdGFrZW4gdG8gdGhlIHNpdGVzIGZvciBvdXIgZ2lmdHMgcmVnaXN0cnkhPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPldlIHRoYW5rIHlvdSB2ZXJ5IG11Y2ggaW4gYWR2YW5jZSEgPHNwYW4+ICYjMTI4NTIyOzwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dpZnQtYnV0dG9ucyB0ZXh0LWNlbnRlciBjb2wtc20gY29sLW1kLTEyIGNvbC1sZy0xMiBjb2wteGwtMTInPlxuXG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj0naHR0cHM6Ly93d3cuYW1hem9uLmNvLnVrL3dlZGRpbmcvcmVnaXN0cnkvMzVMWDdUU0E2QjdKVidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PEJ1dHRvblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuPSdBbWF6b24nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9J2J0bi1zbWFsbCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nc3VibWl0J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT0nYnRuLW91dGxpbmUnLz48L2E+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPSdodHRwczovL3ByZXpvbGEuY29tL2J1eS92aWV3LzIwNzA3Mic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW49J1ByZXpvbGEnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPSdidG4tc21hbGwnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdzdWJtaXQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT0nYnRuLW91dGxpbmUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9tYWluPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdpZnRSZWdpc3RyeTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCAnLi4vLi4vc3R5bGVzL0hvbWUuY3NzJztcbmltcG9ydCBIZXJvSW1hZ2UgZnJvbSAnLi4vLi4vcHVibGljL2hlcm8taW1hZ2UuanBlZyc7XG5pbXBvcnQgRm9vdGVySW1hZ2UgZnJvbSAnLi4vLi4vcHVibGljL2Zvb3Rlci1pbWFnZS5qcGVnJztcbmltcG9ydCBBcmNoSW1hZ2UgZnJvbSAnLi4vLi4vcHVibGljL2ltYWdlLWFyY2gucG5nJztcbmltcG9ydCAnLi4vLi4vc3R5bGVzL0J1dHRvbi5jc3MnO1xuXG5mdW5jdGlvbiBIb21lKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nanVtYm90cm9uIGp1bWJvdHJvbi1mbHVpZCc+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0naG9tZS10aXRsZSc+UmVtaSBGYXdlaGlubWkgJiBTaW1pc29sYSBBZGVqdW1vPC9oMT5cblxuICAgICAgICAgICAgICAgIDxwaWN0dXJlIGNsYXNzTmFtZT0nJz5cbiAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBtZWRpYT1cIihtYXgtd2lkdGg6IDc5OXB4KVwiIHNyY1NldD17SGVyb0ltYWdlfS8+XG4gICAgICAgICAgICAgICAgICAgIDxzb3VyY2UgbWVkaWE9XCIobWluLXdpZHRoOiA4MDBweClcIiBzcmNTZXQ9e0hlcm9JbWFnZX0vPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17SGVyb0ltYWdlfSBhbHQ9XCJcIiBjbGFzc05hbWU9J2hlcm8taW1hZ2UnLz5cbiAgICAgICAgICAgICAgICA8L3BpY3R1cmU+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NsZWFyZml4Jz48L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgPG1haW4+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1zbS0xMiBjb2wtbWQtMTIgY29sLWxnLTEyIGNvbC14bC0xMiBteS01Jz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5XZWxjb21lIHRvIE91ciBXZWRkaW5nITwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1zbS0xMiBjb2wtbWQtMTIgY29sLWxnLTYgY29sLXhsLTYgZmxvYXQtc3RhcnQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdlIGNvcmRpYWxseSBpbnZpdGUgeW91IHRvIG91ciBUcmFkaXRpb25hbCBFbmdhZ2VtZW50IGFuZCBXZWRkaW5nIFJlY2VwdGlvbiBvbiB0aGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDE3dGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcmlsLCAyMDI1LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2UgYXJlIGV4Y2l0ZWQgdG8gaGF2ZSB5b3Ugc2hhcmUgb3VyIGJpZyBkYXkgd2l0aCB1cy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcyB3ZSB3YWl0IGZvciB0aGUgYmlnIGRheSB0byBhcnJpdmUsIHdlIGhhdmUgY3JlYXRlZCB0aGlzIHdlYnNpdGUgdG8ga2VlcCB5b3UgdXAgdG9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGggZXZlcnl0aGluZy5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+SW4gdGhlIDxzdHJvbmc+YXR0ZW5kYW5jZSBzZWN0aW9uPC9zdHJvbmc+LCBjYW4geW91IFBsZWFzZSBjb25maXJtIHdoZXRoZXIgb3Igbm90IHlvdVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmUgYXQgb3VyIHdlZGRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGggdXM/IFlvdSBjYW4gPHN0cm9uZz4gPGEgaHJlZj1cIi93ZWRkaW5nL2NvbmZpcm0tYXR0ZW5kYW5jZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtYmxhY2tcIj5SU1ZQPC9hPjwvc3Ryb25nPiBoZXJlIGFzIHdlbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzIGNsaWNraW5nIG9uIHRoZSBtZW51IGJ1dHRvbiBvbiB0aGUgdG9wIHJpZ2h0IGNvcm5lciBvZiB0aGlzIHBhZ2UsIGNsaWNraW5nIHRoZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uIGJlbG93IHRoaXMgdGV4dCBvciBzY3JvbGxpbmcgdG8gdGhlIGJvdHRvbSBvZiB0aGUgcGFnZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFlvdSBjYW4gYWxzbyBzZWUgdGhlIEZBUSBhbmQgR2lmdCByZWdpc3RyeSBvbiB0aGUgbWVudS4gUGxlYXNlIGNvbmZpcm0gYXMgc29vbiBhc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zc2libGUgc28gd2UgY2FuIGFycmFuZ2UgZXZlcnl0aGluZyBtdWNoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYXN0ZXIuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+Rm9yIHRoZSBkcmVzcyBjb2RlIGlmIHlvdSBhcmUgd2VhcmluZyB0aGUgdHJhZGl0aW9uYWwgYXR0aXJlIHBsZWFzZSB3ZWFyIHdoaXRlIGFuZCBvbmlvbiBjb2xvdXJlZCBnZWxlIGFuZCBmaWxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhlcmUgd2lsbCBiZSBwaWN0dXJlcyBpbiB0aGUgPGEgaHJlZj1cIi93ZWRkaW5nL2ZhcXNcIj5GQVE8L2E+IHNlY3Rpb24pLiBGb3IgdGhvc2Ugbm90IHdlYXJpbmcgdHJhZGl0aW9uYWwgYXR0aXJlIHBsZWFzZSB3ZWFyIHdoaXRlIG9yIHNvbWV0aGluZyBzaW1pbGFyLjwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFsc28sIHBsZWFzZSBub3RlIHRoYXQgb24gdGhlIGRheSwgZG8gPHN0cm9uZz5ub3Q8L3N0cm9uZz4gdXBsb2FkIGFueSBwaG90b3Mgb3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZGVvc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFueSBmb3JtIG9mIHNvY2lhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVkaWEuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbmpveSB0aGUgc2l0ZSwgYW5kIFdl4oCZbGwgc2VlIHlvdSBzb29uIVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtY2VudGVyIHRleHQtYmxhY2snPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvd2VkZGluZy9jb25maXJtLWF0dGVuZGFuY2VcIiBjbGFzc05hbWU9XCJidG4tb3V0bGluZVwiPlJTVlA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbWctYXJjaCBjb2wtc20tMTIgY29sLW1kLTEyIGNvbC1sZy02IGNvbC14bC02IGZsb2F0LWVuZCAnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QXJjaEltYWdlfSBhbHQ9J2FyY2gtaW1hZ2UnIGNsYXNzTmFtZT0nYXJjaC1pbWFnZScvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FzaWRlIHJvdyc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXNtLTEyIGNvbC1tZC0xMiBjb2wtbWQtOCBjb2wtbGctOCBteS0zJz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5XaGVyZSBpcyBpdCBsb2NhdGVkPzwvaDM+XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9J21hcCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnbXAtbWFwIGNlbnRlcj1cIjUxLjY4MzAwNjI4NjYyMTA5NCwtMC4wMDU0NzM2MDY3NTQwOTQzNjJcIiB6b29tPVwiMTRcIiBtYXAtaWQ9XCJ0ZXdsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Z21wLWFkdmFuY2VkLW1hcmtlciBwb3NpdGlvbj1cIjUxLjY4MzAwNjI4NjYyMTA5NCwtMC4wMDU0NzM2MDY3NTQwOTQzNjJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJNeSBsb2NhdGlvblwiPjwvZ21wLWFkdmFuY2VkLW1hcmtlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nbXAtbWFwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXNtIGNvbC1sZy00IG15LTUgZmxvYXQtbGctZW5kJz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5BcHJpbCwgMTcsIDIwMjU8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlRyYWRpdGlvbmFsIEVuZ2FnZW1lbnQgYW5kIFJlY2VwdGlvbiB8IDM6MzAgUE1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhlIFBhbGFjZSBCYW5xdWV0aW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDExMiBCcm9va2VyIFJkLCBXYWx0aGFtIEFiYmV5IEVOOSAxSkhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFdoZWVsY2hhaXIgQWNjZXNzaWJsZSk8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtc20tMTIgY29sLW1kLTEyIGNvbC1sZy02Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Rm9vdGVySW1hZ2V9IGFsdD1cImZvb3Rlci1pbWFnZVwiIGNsYXNzTmFtZT0nZm9vdGVyLWltYWdlJy8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cgYXJ0aWNsZSBmbG9hdC1yaWdodCBjbGVhcmZpeCc+XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlciBjb2wtc20tMTIgY29sLW1kLTEyIGNvbC1sZy02IGNvbC14bC02IG15LTUganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXInPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5TYXZlIHRoZSBEYXRlIGFuZCB3ZSdsbCBzZWUgeW91IHRoZXJlITwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSWYgeW91J2QgbGlrZSB0byBnaXZlIHVzIGEgZ2lmdCB5b3UgY2FuIGRvIHNvIGZyb20gIDxMaW5rIHRvPScvd2VkZGluZy9naWZ0LXJlZ2lzdHJ5Jz5oZXJlPC9MaW5rPi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3dlZGRpbmcvY29uZmlybS1hdHRlbmRhbmNlXCIgY2xhc3NOYW1lPVwiYnRuLW91dGxpbmVcIj5SU1ZQPC9MaW5rPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8L21haW4+XG4gICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiUmVhY3QiLCJSZWFjdERPTSIsIkFwcCIsImpzeCIsIl9qc3giLCJjcmVhdGVSb290IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlbmRlciIsIlN0cmljdE1vZGUiLCJjaGlsZHJlbiIsIk5hdmJhciIsIkhvbWUiLCJSb3V0ZSIsIlJvdXRlcyIsIkJyb3dzZXJSb3V0ZXIiLCJDb25maXJtQXR0ZW5kYW5jZSIsIkdpZnRSZWdpc3RyeSIsIkZBUXMiLCJGb290ZXIiLCJqc3hzIiwiX2pzeHMiLCJGcmFnbWVudCIsIl9GcmFnbWVudCIsInBhdGgiLCJlbGVtZW50IiwidXNlU3RhdGUiLCJMaW5rIiwiYm9vbGVhbiIsIlNUWUxFUyIsIlNJWkVTIiwiQnV0dG9uIiwiX3JlZiIsInR5cGUiLCJvbkNsaWNrIiwic3R5bGUiLCJzaXplIiwiZGlzYWJsZWQiLCJjaGVja1N0eWxlIiwiaW5jbHVkZXMiLCJjaGVja1NpemUiLCJjbGFzc05hbWUiLCJjb25jYXQiLCJnZXREYXRlIiwiZGF0ZSIsIkRhdGUiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJfX2h0bWwiLCJvbkxvYWQiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsImxvZ28iLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJjbGljayIsInNldElzQ2xpY2tlZCIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwiaXNPcGVuIiwic2V0SXNPcGVuIiwiY2xvc2VNZW51IiwidG9nZ2xlTmF2YmFyIiwiY2xpY2tlZCIsInRvIiwic3JjIiwiYWx0IiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsImUiLCJ0IiwiciIsIk9iamVjdCIsInByb3RvdHlwZSIsIm4iLCJoYXNPd25Qcm9wZXJ0eSIsIm8iLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiaSIsIlN5bWJvbCIsImEiLCJpdGVyYXRvciIsImMiLCJhc3luY0l0ZXJhdG9yIiwidSIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwid3JhcCIsIkdlbmVyYXRvciIsImNyZWF0ZSIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJhcmciLCJjYWxsIiwiaCIsImwiLCJmIiwicyIsInkiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwicCIsImQiLCJnZXRQcm90b3R5cGVPZiIsInYiLCJ2YWx1ZXMiLCJnIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiaW52b2tlIiwiX3R5cGVvZiIsInJlc29sdmUiLCJfX2F3YWl0IiwidGhlbiIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwiRXJyb3IiLCJkb25lIiwibWV0aG9kIiwiZGVsZWdhdGUiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJUeXBlRXJyb3IiLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImlzTmFOIiwibGVuZ3RoIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJrZXlzIiwicmV2ZXJzZSIsInBvcCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJydmFsIiwiaGFuZGxlIiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJkZWxlZ2F0ZVlpZWxkIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmd1bWVudHMiLCJhcHBseSIsIl9uZXh0IiwiX3Rocm93IiwiX2FycmF5V2l0aEhvbGVzIiwiX2l0ZXJhYmxlVG9BcnJheUxpbWl0IiwiX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IiwiX25vbkl0ZXJhYmxlUmVzdCIsIl9hcnJheUxpa2VUb0FycmF5IiwidG9TdHJpbmciLCJBcnJheSIsImZyb20iLCJ0ZXN0IiwiaXNBcnJheSIsInVzZUVmZmVjdCIsIll1cCIsImZpcnN0bmFtZSIsImxhc3RuYW1lIiwiZW1haWwiLCJpc0F0dGVuZGluZyIsInBsdXNPbmUiLCJudW1QbHVzT25lIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsImVycm9yIiwic2V0RXJyb3IiLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsImlzU3VibWl0dGVkIiwic2V0SXNTdWJtaXR0ZWQiLCJfdXNlU3RhdGU3IiwiX3VzZVN0YXRlOCIsImlzRGlzYWJsZWQiLCJzZXRJc0Rpc2FibGVkIiwidmFsaWRhdGlvblNjaGVtYSIsIm9iamVjdCIsInN0cmluZyIsInJlcXVpcmVkIiwiYm9vbCIsIm5vdFJlcXVpcmVkIiwibnVtYmVyIiwidHJhbnNmb3JtIiwidW5kZWZpbmVkIiwid2hlbiIsImlzIiwic2NoZW1hIiwidHlwZUVycm9yIiwicG9zaXRpdmUiLCJpbnRlZ2VyIiwibWF4Iiwib3RoZXJ3aXNlIiwibnVsbGFibGUiLCJjaGVja0d1ZXN0RXhpc3RzIiwiX2NhbGxlZSIsInJlc3BvbnNlIiwiZGF0YSIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJmZXRjaCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImpzb24iLCJleGlzdHMiLCJlcnJvcnMiLCJtZXNzYWdlIiwidDAiLCJfeCIsImhhbmRsZUNoYW5nZSIsInRhcmdldCIsImNoZWNrZWQiLCJfb2JqZWN0U3ByZWFkIiwiX2RlZmluZVByb3BlcnR5IiwiaGFuZGxlU3VibWl0IiwiX3JlZjIiLCJfY2FsbGVlMiIsImVtYWlsRXhpc3RzIiwibmV3RXJyb3IiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJwcmV2ZW50RGVmYXVsdCIsInZhbGlkYXRlIiwiYWJvcnRFYXJseSIsIm9rIiwic2V0VGltZW91dCIsImlubmVyIiwiZXJyIiwiX3gyIiwiY3VycmVudERhdGUiLCJ0YXJnZXREYXRlIiwiY29uc29sZSIsImxvZyIsIm9uU3VibWl0IiwiaHRtbEZvciIsInBsYWNlaG9sZGVyIiwiaWQiLCJvbkNoYW5nZSIsIk9uaW9uR2VsZTEiLCJPbmlvbkdlbGUyIiwiRmFxIiwid2lkdGgiLCJoZWlnaHQiLCJmcmFtZUJvcmRlciIsIm1hcmdpbkhlaWdodCIsIm1hcmdpbldpZHRoIiwiaHJlZiIsIkhlcm9JbWFnZSIsIkZvb3RlckltYWdlIiwiQXJjaEltYWdlIiwibWVkaWEiLCJzcmNTZXQiLCJjZW50ZXIiLCJ6b29tIiwicG9zaXRpb24iLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=