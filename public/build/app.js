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
          path: "/wedding/home",
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
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






var STYLES = ['btn-primary', 'btn-outline'];
var SIZES = ['btn-medium', 'btn-large'];
var Button = function Button(_ref) {
  var children = _ref.children,
    type = _ref.type,
    onClick = _ref.onClick,
    style = _ref.style,
    size = _ref.size;
  var checkStyle = STYLES.includes(style) ? style : STYLES[0];
  var checkSize = SIZES.includes(size) ? size : SIZES[0];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
    className: "btn ".concat(checkStyle, " ").concat(checkSize),
    onClick: onClick,
    type: type,
    children: children
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
        to: "/wedding/home",
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
              to: "/wedding/home",
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
/* harmony import */ var _babel_core_lib_errors_rewrite_stack_trace__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @babel/core/lib/errors/rewrite-stack-trace */ "./node_modules/@babel/core/lib/errors/rewrite-stack-trace.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
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






function ConfirmAttendance(builder) {
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
            console.log(data);
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
          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](0);
            setError(function (error) {
              return {
                error: error,
                email: 'Sorry we\'re unable to verify your email'
              };
            });
            return _context.abrupt("return", false);
          case 16:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 12]]);
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
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.jsx)("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.jsxs)("main", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.jsx)("h1", {
          className: "text-center text-lg-center",
          children: "Will you be there or will you miss it? "
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.jsxs)("p", {
            className: "text-center",
            children: ["To confirm your attendance to the wedding, enter your first and lastname in the form below. Confirm your attendance by either selecting 'Yes' or 'No'. Finally please let us know if you will be bringing along any plus ones and how many and click on the 'submit' button.", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.jsx)("br", {}), "We can't wait to for you to join us on our special day!"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.jsx)("p", {
            className: "text-center text-md-center text-lg-center",
            children: "Please RSVP by Feb 28th 2025"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.jsxs)("form", {
          className: "row mb-3 g-3 justify-content-center align-items-center",
          onSubmit: handleSubmit,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.jsx)("div", {
            className: "col-xs-12 col-md-6",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.jsxs)("div", {
              className: "form-group",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.jsx)("label", {
                className: "form-label",
                htmlFor: "firstname",
                children: "Firstname"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.jsx)("input", {
                className: "form-control",
                name: "firstname",
                placeholder: "Firstname",
                id: "firstName",
                value: formData.firstname,
                onChange: handleChange
              }), error.firstname && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.jsx)("span", {
                children: error.firstname
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.jsx)("div", {
            className: "col-xs-12 col-md-6",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.jsxs)("div", {
              className: "form-group",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.jsx)("label", {
                className: "form-label",
                htmlFor: "lastName",
                children: "Lastname"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.jsx)("input", {
                className: "form-control",
                name: "lastname",
                placeholder: "Lastname",
                id: "lastName",
                value: formData.lastname,
                onChange: handleChange
              }), error.lastname && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.jsx)("span", {
                children: error.lastname
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.jsx)("div", {
            className: "mb-3",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.jsxs)("div", {
              className: "form-group col-sm col-lg-6 col-xl-6 g-xl-4",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.jsx)("label", {
                children: "Email"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.jsx)("input", {
                className: "form-control",
                name: "email",
                placeholder: "Email",
                value: formData.email,
                type: "text",
                onChange: handleChange
              }), error.email && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.jsx)("span", {
                children: error.email
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.jsxs)("div", {
            className: "mb-3",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.jsx)("div", {
              className: "col-sm form-group",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.jsx)("label", {
                children: "Are you attending?"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.jsxs)("div", {
              className: "form-check mt-3",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.jsx)("label", {
                className: "form-check-label",
                htmlFor: "isAttending",
                children: "Yes"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.jsx)("input", {
                className: "form-check-input",
                name: "isAttending",
                type: "radio",
                id: "attendingYes",
                value: 1,
                checked: formData.isAttending === '1',
                onChange: handleChange
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.jsxs)("div", {
              className: "form-check",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.jsx)("label", {
                className: "form-check-label",
                htmlFor: "isAttending",
                children: "No"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.jsx)("input", {
                className: "form-check-input",
                name: "isAttending",
                value: 0,
                type: "radio",
                checked: formData.isAttending === '0',
                onChange: handleChange
              })]
            }), error.isAttending && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.jsx)("span", {
              children: error.isAttending
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.jsxs)("div", {
            className: "form-check",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.jsx)("label", {
              className: "form-check-label",
              htmlFor: "",
              children: "Plus one(s)?"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.jsx)("input", {
              className: "form-check-input",
              name: "plusOne",
              value: formData.plusOne,
              type: "checkbox",
              onChange: handleChange
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.jsx)("div", {
            className: "mb-3",
            children: formData.plusOne && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.jsxs)("div", {
              className: "form-group col-sm col-lg-6 col-xl-6 g-xl-4",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.jsx)("label", {
                children: "How many plus ones will you bring?"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.jsx)("input", {
                className: "form-control",
                name: "numPlusOne",
                value: formData.numPlusOne,
                type: "number",
                onChange: handleChange
              }), error.numPlusOne && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.jsx)("span", {
                children: error.numPlusOne
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.jsx)("div", {
            className: "button",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_43__.Button, {
              children: "Submit",
              size: "btn-small",
              type: "submit",
              style: "btn-outline",
              onClick: handleSubmit
            })
          })]
        }), isSubmitted && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.jsx)("div", {
          className: "form-submission alert alert-success text center mx-3",
          children: "Your details have been submitted!"
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
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

function Faq() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", {
          className: "text-center",
          children: "FAQS"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
          className: "text-center",
          children: ["If you have any pressing questions for us, some answers can be found here! ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), " Or if you'd like ask us personally, send us a message!"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "accordion accordion-flush",
          id: "accordionFlushExample",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "accordion-item",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
              className: "What is is the dress code?",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                className: "accordion-button collapsed",
                type: "button",
                "data-bs-toggle": "collapse",
                "data-bs-target": "#flush-collapseOne",
                "aria-expanded": "false",
                "aria-controls": "flush-collapseOne",
                children: "What is the dress code?"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
              id: "flush-collapseOne",
              className: "accordion-collapse collapse",
              "data-bs-parent": "#accordionFlushExample",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "accordion-body",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                  children: "For the traditonal wear for guests please come wearing white native with onion coloured head wear/ accessories."
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                  children: "For guest not wearing the traditional attire please dress in formal attire."
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
                  src: "",
                  alt: ""
                })]
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "accordion-item",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
              className: "accordion-header",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                className: "accordion-button collapsed",
                type: "button",
                "data-bs-toggle": "collapse",
                "data-bs-target": "#flush-collapseTwo",
                "aria-expanded": "false",
                "aria-controls": "flush-collapseTwo",
                children: "Where is the traditional ceremony being held?"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
              id: "flush-collapseTwo",
              className: "accordion-collapse collapse",
              "data-bs-parent": "#accordionFlushExample",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "accordion-body",
                children: "The Traditional will be held at The Palace Banqueting venue located in Waltham Abbey. Please see the homepage for details of the address."
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "accordion-item",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
              className: "accordion-header",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                className: "accordion-button collapsed",
                type: "button",
                "data-bs-toggle": "collapse",
                "data-bs-target": "#flush-collapseThree",
                "aria-expanded": "false",
                "aria-controls": "flush-collapseThree",
                children: "What foods will be available on the day?"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
              id: "flush-collapseThree",
              className: "accordion-collapse collapse",
              "data-bs-parent": "#accordionFlushExample",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "accordion-body",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                  children: "The menu is as follows:"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                  children: ["Canapes to be served this will be:", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "Puff Puff, Duck spring roll, vegetable samosa, Tempura prawns"]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                  children: ["The main menu :", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "Buffet setup for :", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "Jollof Rice, Fried Rice White Rice, Ayamase,", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "Singapore Noodles, Pounded Yam and Egusi,", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "Plantain, Salad, Beef and Chicken."]
                })]
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "accordion-item",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
              className: "accordion-header",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                className: "accordion-button collapsed",
                type: "button",
                "data-bs-toggle": "collapse",
                "data-bs-target": "#flush-collapseFour",
                "aria-expanded": "false",
                "aria-controls": "flush-collapseFour",
                children: "How to get there?"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
              id: "flush-collapseFour",
              className: "accordion-collapse collapse",
              "data-bs-parent": "#accordionFlushExample",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "accordion-body",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                  children: ["Here is a step-by-step guide to help you plan your journey from London to The Palace Banqueting in Waltham Abbey.", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "You can choose between a taxi, Uber, or public transport, depending on your preference and convenience."]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h4", {
                  children: "Option 1: Taxi"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                  children: ["If you prefer the comfort and directness of a taxi, you can book one through a reputable London cab service.", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "Inform the driver of your destination as: The Palace Banqueting, Waltham Abbey, EN9 1JH.", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "The journey will take approximately 40\u201350 minutes, depending on your location and traffic, and may cost around \xA335 plus.", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "We recommend confirming the fare with the taxi service in advance.", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {})]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h4", {
                  children: "Option 2: Uber"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                  children: ["Booking an Uber is a convenient alternative. Use the Uber app to request a ride from your current location to The Palace Banqueting, Waltham Abbey.", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "Estimated journey time: 15\u201350 minutes (Depending on location). Approximate fare: \xA312\u2013\xA320, depending on the time of day, demand and location.", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {})]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h4", {
                  children: "Option 3: Public Transport"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", {
                    children: "Getting to The Palace Banqueting Using Public Transport:"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "To reach The Palace Banqueting, start by taking a train heading towards", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", {
                    children: "Bishop Stortford, Cheshunt"
                  }), ", or ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", {
                    children: "Hertford East"
                  }), ", and disembark at ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", {
                    children: "Waltham Cross Station "
                  }), ".", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "After exiting the train, walk to the nearby Waltham Cross Bus Station, where you can board one of the following buses: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", {
                    children: "66, 251,"
                  }), " or ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", {
                    children: "250"
                  }), ". Inform the driver that you need to get off at ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", {
                    children: "Farm Hill Road"
                  }), ".", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "Alternatively, if you prefer, you can take a local taxi or book an Uber directly from Waltham Cross Station to The Palace Banqueting. The taxi ride is approximately 10 minutes.", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "Estimated Cost:", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                      children: "Combined train and bus fares: \xA310\u2013\xA315."
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                      children: "Taxi/Uber from Waltham Cross Station: approximately \xA310\u2013\xA315."
                    })]
                  }), "This guide is designed to make your journey smooth and stress-free. Have a pleasant trip to The Palace Banqueting!", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {})]
                })]
              })
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          id: "contact-us-form",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h4", {
            children: "Contact Us"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("iframe", {
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _styles_Home_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/Home.css */ "./assets/styles/Home.css");
/* harmony import */ var _public_hero_image_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/hero-image.jpeg */ "./assets/public/hero-image.jpeg");
/* harmony import */ var _public_footer_image_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/footer-image.jpeg */ "./assets/public/footer-image.jpeg");
/* harmony import */ var _public_image_arch_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/image-arch.png */ "./assets/public/image-arch.png");
/* harmony import */ var _public_floral_design_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/floral-design.png */ "./assets/public/floral-design.png");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Button */ "./assets/components/Button.js");
/* harmony import */ var _styles_Button_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/Button.css */ "./assets/styles/Button.css");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");










function Home() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: "jumbotron jumbotron-fluid",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h1", {
        className: "home-title",
        children: "Remi Fawehinmi & Simisola Adejumo"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("picture", {
        className: "",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("source", {
          media: "(max-width: 799px)",
          srcSet: _public_hero_image_jpeg__WEBPACK_IMPORTED_MODULE_2__
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("source", {
          media: "(min-width: 800px)",
          srcSet: _public_hero_image_jpeg__WEBPACK_IMPORTED_MODULE_2__
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img", {
          src: _public_hero_image_jpeg__WEBPACK_IMPORTED_MODULE_2__,
          alt: "",
          className: "hero-image"
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      className: "clearfix"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("main", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
          className: "row",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: "col-sm-12 col-md-12 col-lg-12 col-xl-12 my-5",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h3", {
              children: "Welcome to Our Wedding!"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              className: "col-sm-12 col-md-12 col-lg-6 col-xl-6 float-start",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
                children: "We cordially invite you to our Traditional Engagement and Wedding Reception on the 17th April, 2025. We are excited to have you share our big day with us."
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
                children: "As we wait for the big day to arrive, we have created this website to keep you up to date with everything."
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("p", {
                children: ["In the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("strong", {
                  children: "attendance section"
                }), ", can you Please confirm whether or not you will be at our wedding with us? Please confirm as soon as possible so we can arrange everything much faster."]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("p", {
                children: ["Also, please note that on the day, do ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("strong", {
                  children: "not"
                }), " upload any photos or videos on any form of social media."]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
                children: "Enjoy the site, and We\u2019ll see you soon!"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
              className: "img-arch col-sm-12 col-md-12 col-lg-6 col-xl-6 float-end ",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img", {
                src: _public_image_arch_png__WEBPACK_IMPORTED_MODULE_4__,
                alt: "arch-image",
                className: "arch-image"
              })
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: "aside row",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: "col-sm-12 col-md-12 col-md-8 col-lg-8 my-3",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h3", {
              children: "Where is it located?"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
              id: "map",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("gmp-map", {
                center: "51.683006286621094,-0.005473606754094362",
                zoom: "14",
                "map-id": "tewl",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("gmp-advanced-marker", {
                  position: "51.683006286621094,-0.005473606754094362",
                  title: "My location"
                })
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: "col-sm col-lg-4 my-5 float-lg-end",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h5", {
              children: "April, 17, 2025"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("p", {
              children: ["Ceremony | 12:00 PM", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("br", {}), "Grange Park Methodist Church, Old Park Ridings, London N21 2EU"]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("p", {
              children: ["Traditional Engagement and Reception | 3:30 PM", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("br", {}), "The Palace Banqueting 112 Brooker Rd, Waltham Abbey EN9 1JH (Wheelchair Accessible)"]
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
            className: "col-sm-12 col-md-12 col-lg-6",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img", {
              src: _public_footer_image_jpeg__WEBPACK_IMPORTED_MODULE_3__,
              alt: "footer-image",
              className: "footer-image"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
            className: "row article float-right clearfix",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              className: "text-center col-sm-12 col-md-12 col-lg-6 col-xl-6 my-5 justify-content-center align-items-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h3", {
                children: "Save the Date and we'll see you there!"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("p", {
                children: ["If you'd like to give us a gift we're registered at ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("a", {
                  href: "http://",
                  children: "Prezola"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link, {
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

/***/ "./assets/public/floral-design.png":
/*!*****************************************!*\
  !*** ./assets/public/floral-design.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/floral-design.8ff2f014.png";

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
/******/ __webpack_require__.O(0, ["vendors-node_modules_bootstrap_dist_css_bootstrap_css-node_modules_react-dom_client_js-node_m-8a993d"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RVg7QUFFQSxpRUFBZUUsSUFBSTs7Ozs7Ozs7Ozs7QUMxSW5COzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9CdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvRm9vdGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL05hdmJhci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9wYWdlcy9Db25maXJtQXR0ZW5kYW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9wYWdlcy9GYXEuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvcGFnZXMvR2lmdFJlZ2lzdHJ5LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3BhZ2VzL0hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9CdXR0b24uY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvQ29uZmlybUF0dGVuZGFuY2UuY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvR2lmdFJlZ2lzdHJ5LmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL0hvbWUuY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvTmF2YmFyLmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5jc3MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20vY2xpZW50JztcbmltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL0FwcCc7XG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5jc3MnO1xuXG5cblJlYWN0RE9NLmNyZWF0ZVJvb3QoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSkucmVuZGVyKFxuICA8UmVhY3QuU3RyaWN0TW9kZT5cbiAgICA8QXBwLz5cbiAgPC9SZWFjdC5TdHJpY3RNb2RlPixcbilcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4vTmF2YmFyXCI7XG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9wYWdlcy9Ib21lLmpzXCI7XG5pbXBvcnQgeyBSb3V0ZSwgUm91dGVzLCBCcm93c2VyUm91dGVyfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IENvbmZpcm1BdHRlbmRhbmNlIGZyb20gXCIuL3BhZ2VzL0NvbmZpcm1BdHRlbmRhbmNlXCI7XG5pbXBvcnQgR2lmdFJlZ2lzdHJ5IGZyb20gXCIuL3BhZ2VzL0dpZnRSZWdpc3RyeVwiO1xuaW1wb3J0IEZBUXMgZnJvbSBcIi4vcGFnZXMvRmFxXCI7XG5pbXBvcnQgJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAuY3NzJ1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9Gb290ZXJcIjtcbmZ1bmN0aW9uIEFwcCgpe1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8QnJvd3NlclJvdXRlcj5cbiAgICAgICAgICAgICAgICA8TmF2YmFyLz5cbiAgICAgICAgICAgICAgICA8Um91dGVzPlxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0nL3dlZGRpbmcvaG9tZScgZWxlbWVudD17PEhvbWUvPn0vPlxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0nL3dlZGRpbmcvY29uZmlybS1hdHRlbmRhbmNlJyBlbGVtZW50PXs8Q29uZmlybUF0dGVuZGFuY2UvPn0vPlxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0nL3dlZGRpbmcvZ2lmdC1yZWdpc3RyeScgZWxlbWVudD17PEdpZnRSZWdpc3RyeS8+fS8+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPScvd2VkZGluZy9mYXFzJyBlbGVtZW50PXs8RkFRcy8+fS8+XG4gICAgICAgICAgICAgICAgPC9Sb3V0ZXM+XG4gICAgICAgICAgICAgICAgPEZvb3Rlci8+XG4gICAgICAgICAgICA8L0Jyb3dzZXJSb3V0ZXI+XG4gICAgICAgIDwvPlxuICAgIClcblxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7IiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi4vc3R5bGVzL0J1dHRvbi5jc3MnO1xuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuY29uc3QgU1RZTEVTID0gW1xuICAgICdidG4tcHJpbWFyeScsXG4gICAgJ2J0bi1vdXRsaW5lJ1xuXVxuY29uc3QgU0laRVMgPSBbXG4gICAgJ2J0bi1tZWRpdW0nLFxuICAgICdidG4tbGFyZ2UnXG5dXG5cbmV4cG9ydCBjb25zdCBCdXR0b24gPSAoe1xuICAgICAgICBjaGlsZHJlbixcbiAgICAgICAgdHlwZSxcbiAgICAgICAgb25DbGljayxcbiAgICAgICAgc3R5bGUsXG4gICAgICAgIHNpemV9KSA9PiB7XG4gICAgY29uc3QgY2hlY2tTdHlsZSA9IFNUWUxFUy5pbmNsdWRlcyhzdHlsZSkgPyBzdHlsZSA6IFNUWUxFU1swXTtcbiAgICBjb25zdCBjaGVja1NpemUgPSBTSVpFUy5pbmNsdWRlcyhzaXplKSA/IHNpemUgOiBTSVpFU1swXTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJ0biAke2NoZWNrU3R5bGV9ICR7Y2hlY2tTaXplfWB9XG4gICAgICAgICAgICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgICAgICAgICAgICB0eXBlPXt0eXBlfVxuICAgICAgICAgICAgICAgIGNoaWxkcmVuPXtjaGlsZHJlbn0+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKVxufTsiLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBGb290ZXIoKSB7XG5cbiAgICBmdW5jdGlvbiBnZXREYXRlKCl7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpICsgXCIgIFwiO1xuICAgICAgICByZXR1cm4gIHtfX2h0bWw6IHllYXJ9O1xuICAgIH1cblxuICAgIHJldHVybihcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxmb290ZXI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdycgb25Mb2FkPXtnZXREYXRlfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtY2VudGVyIGNvbC0xMic+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDU+IFJlbWkgRmF3ZWhpbm1pICYgU2ltaXNvbGEgQWRlanVtbzwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD4xN3RoIEFwcmlsLCAyMDI1PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+Q3JlYXRlZCBieSBTaW1pc29sYSAmY29weTsgPHNwYW4gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e2dldERhdGUoKX0+PC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7IiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgbG9nbyBmcm9tICcuLi9wdWJsaWMvd2VkZGluZy1sb2dvLnBuZyc7XG5pbXBvcnQgJy4uL3N0eWxlcy9OYXZiYXIuY3NzJztcblxuZnVuY3Rpb24gTmF2YmFyKCkge1xuICAgIGNvbnN0IFtjbGljaywgc2V0SXNDbGlja2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IGNsb3NlTWVudSA9ICgpID0+IHNldElzT3BlbihmYWxzZSk7XG4gICAgY29uc3QgdG9nZ2xlTmF2YmFyID0gKCkgPT4gc2V0SXNPcGVuKCFpc09wZW4pO1xuXG4gICAgY29uc3QgY2xpY2tlZCA9ICgpID0+IHNldElzQ2xpY2tlZCghY2xpY2spO1xuXG5cblxuICAgIHJldHVybihcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPSduYXZiYXInPlxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPScvd2VkZGluZy9ob21lJyBjbGFzc05hbWU9J2xvZ28nIG9uQ2xpY2s9e2Nsb3NlTWVudX0+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtsb2dvfSBhbHQ9JycgY2xhc3NOYW1lPSd3ZWRkaW5nLWxvZ28nLz5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21lbnUtaWNvbic+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLW91dGxpbmUgbmF2YmFyLXRvZ2dsZScgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiLm5hdmJhci1jb2xsYXBzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlTmF2YmFyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17aXNPcGVuID8gJ2ZhLXNvbGlkIGZhLXgnIDogJ2ZhLXNvbGlkIGZhLWJhcnMnfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BsaW5rcy1jb250YWluZXIgJHtpc09wZW4gJiYgY2xpY2tlZCA/ICdhY3RpdmUnOiAnJ31gfSA+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e2BuYXYtbWVudSAke2lzT3BlbiAmJiBjbGlja2VkID8gJ2FjdGl2ZScgOiAnJ31gfT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPScvd2VkZGluZy9ob21lJyBvbkNsaWNrPXtjbG9zZU1lbnV9IGNsYXNzTmFtZT0nbmF2LWxpbmtzJz5Ib21lPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPScvd2VkZGluZy9jb25maXJtLWF0dGVuZGFuY2UnIG9uQ2xpY2s9e2Nsb3NlTWVudX0gY2xhc3NOYW1lPSduYXYtbGlua3MnPlJTVlA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89Jy93ZWRkaW5nL2dpZnQtcmVnaXN0cnknIG9uQ2xpY2s9e2Nsb3NlTWVudX0gY2xhc3NOYW1lPSduYXYtbGlua3MnPkdpZnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVnaXN0cnk8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPScvd2VkZGluZy9mYXFzJyBvbkNsaWNrPXtjbG9zZU1lbnV9IGNsYXNzTmFtZT0nbmF2LWxpbmtzJz5GQVFzPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbmF2LW92ZXJsYXkgJHtpc09wZW4gPyAnYWN0aXZlJyA6ICcgJ31gfSBvbkNsaWNrPXt0b2dnbGVOYXZiYXJ9PjwvZGl2PlxuICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgIDwvPlxuICAgIClcbn1cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjsiLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtCdXR0b259IGZyb20gXCIuLi9CdXR0b25cIjtcbmltcG9ydCAnLi4vLi4vc3R5bGVzL0NvbmZpcm1BdHRlbmRhbmNlLmNzcyc7XG5pbXBvcnQgKiBhcyBZdXAgZnJvbSAgJ3l1cCdcbmltcG9ydCB7ZXhwZWN0ZWRFcnJvcn0gZnJvbSBcIkBiYWJlbC9jb3JlL2xpYi9lcnJvcnMvcmV3cml0ZS1zdGFjay10cmFjZVwiO1xuXG5mdW5jdGlvbiBDb25maXJtQXR0ZW5kYW5jZShidWlsZGVyKSB7XG5cbiAgICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgZmlyc3RuYW1lOiAnJyxcbiAgICAgICAgbGFzdG5hbWU6ICcnLFxuICAgICAgICBlbWFpbDogJycsXG4gICAgICAgIGlzQXR0ZW5kaW5nOiAnJyxcbiAgICAgICAgcGx1c09uZTogZmFsc2UsXG4gICAgICAgIG51bVBsdXNPbmU6IDBcbiAgICB9KTtcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKHt9KTtcbiAgICBjb25zdCBbaXNTdWJtaXR0ZWQsIHNldElzU3VibWl0dGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IHZhbGlkYXRpb25TY2hlbWEgPSBZdXAub2JqZWN0KHtcbiAgICAgICAgZmlyc3RuYW1lOiBZdXAuc3RyaW5nKCkucmVxdWlyZWQoJ1lvdXIgRmlyc3RuYW1lIGlzIHJlcXVpcmVkJyksXG4gICAgICAgIGxhc3RuYW1lOiBZdXAuc3RyaW5nKCkucmVxdWlyZWQoJ1lvdXIgTGFzdG5hbWUgaXMgcmVxdWlyZWQnKSxcbiAgICAgICAgZW1haWw6IFl1cC5zdHJpbmcoKS5yZXF1aXJlZCgnWW91ciBlbWFpbCBjYW5ub3QgYmUgZW1wdHknKS5lbWFpbCgpLFxuICAgICAgICBpc0F0dGVuZGluZzogWXVwLnN0cmluZygpLnJlcXVpcmVkKCdQbGVhc2Ugc2VsZWN0IGVpdGhlciBcXCdZZXNcXCcgb3IgXFwnTm9cXCcnKSxcbiAgICAgICAgcGx1c09uZTogWXVwLmJvb2woKS5ub3RSZXF1aXJlZCgpLFxuICAgICAgICBudW1QbHVzT25lOiBZdXAubnVtYmVyKClcbiAgICAgICAgICAgIC50cmFuc2Zvcm0oKHZhbHVlKSA9PiAoaXNOYU4odmFsdWUpID8gdW5kZWZpbmVkIDogdmFsdWUpKVxuICAgICAgICAgICAgLndoZW4oJ3BsdXNPbmUnLCB7XG4gICAgICAgICAgICAgICAgaXM6IHRydWUsXG4gICAgICAgICAgICAgICAgdGhlbjogKHNjaGVtYSkgPT4gc2NoZW1hXG4gICAgICAgICAgICAgICAgICAgIC5yZXF1aXJlZCgnWW91ciBudW1iZXIgb2YgcGx1cyBvbmUocykgaXMgcmVxdWlyZWQnKVxuICAgICAgICAgICAgICAgICAgICAudHlwZUVycm9yKCdNdXN0IGJlIGEgdmFsaWQgbnVtYmVyJylcbiAgICAgICAgICAgICAgICAgICAgLnBvc2l0aXZlKCdNdXN0IGJlIGEgcG9zaXRpdmUgbnVtYmVyJylcbiAgICAgICAgICAgICAgICAgICAgLmludGVnZXIoJ011c3QgYmUgYSB3aG9sZSBudW1iZXInKVxuICAgICAgICAgICAgICAgICAgICAubWF4KDUsICdNYXhpbXVtIG9mIDUgcGx1cyBvbmVzIGFsbG93ZWQnKVxuICAgICAgICAgICAgICAgICAgICAudGVzdChcbiAgICAgICAgICAgICAgICAgICAgICAgICdpcy1yZWFzb25hYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdQbGVhc2UgZW50ZXIgYSByZWFzb25hYmxlIG51bWJlciBvZiBndWVzdHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgKHZhbHVlKSA9PiB2YWx1ZSA8PSA1XG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgb3RoZXJ3aXNlOiAoc2NoZW1hKSA9PiBzY2hlbWFcbiAgICAgICAgICAgICAgICAgICAgLm51bGxhYmxlKClcbiAgICAgICAgICAgICAgICAgICAgLnRyYW5zZm9ybSgodmFsdWUpID0+IG51bGwpXG4gICAgICAgICAgICB9KSxcbiAgICB9KTtcblxuXG4gICAgY29uc3QgY2hlY2tHdWVzdEV4aXN0cyA9IGFzeW5jIChlbWFpbCkgPT4ge1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9jaGVjay1ndWVzdFwiLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBlbWFpbCB9KSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgaWYgKGRhdGEuZXhpc3RzKSB7XG4gICAgICAgICAgICAgICAgc2V0RXJyb3IoKGVycm9yKSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICBlcnJvcixcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6IGRhdGEuZXJyb3JzLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZXRFcnJvcigoZXJyb3IpID0+ICh7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yLFxuICAgICAgICAgICAgICAgICAgICBlbWFpbDogJycsXG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRhdGEuZXhpc3RzO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgc2V0RXJyb3IoKGVycm9yKSA9PiAoe1xuICAgICAgICAgICAgICAgIGVycm9yLFxuICAgICAgICAgICAgICAgIGVtYWlsOiAnU29ycnkgd2VcXCdyZSB1bmFibGUgdG8gdmVyaWZ5IHlvdXIgZW1haWwnLFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIGNvbnN0IG5hbWUgID0gZS50YXJnZXQubmFtZTtcbiAgICAgICAgY29uc3QgdmFsdWUgPVxuICAgICAgICAgICAgZS50YXJnZXQudHlwZSA9PT0gJ2NoZWNrYm94JyA/IGUudGFyZ2V0LmNoZWNrZWQgOiBlLnRhcmdldC52YWx1ZTtcblxuICAgICAgICBzZXRGb3JtRGF0YSh7XG4gICAgICAgICAgICAuLi5mb3JtRGF0YSxcbiAgICAgICAgICAgIFtuYW1lXTogdmFsdWUsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChuYW1lID09PSBcImVtYWlsXCIpIHtcbiAgICAgICAgICAgIGNoZWNrR3Vlc3RFeGlzdHModmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0RXJyb3Ioey4uLmVycm9yLCBbbmFtZV06ICcnfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIHJlc2V0IHN0YXRlIGF0IHRoZSBzdGFydFxuICAgICAgICAgICAgc2V0RXJyb3Ioe30pO1xuICAgICAgICAgICAgc2V0SXNTdWJtaXR0ZWQoZmFsc2UpO1xuXG4gICAgICAgICAgICAvLyBjaGVjayBlbWFpbCBleGlzdHNcbiAgICAgICAgICAgIGNvbnN0IGVtYWlsRXhpc3RzICA9IGF3YWl0IGNoZWNrR3Vlc3RFeGlzdHMoZm9ybURhdGEuZW1haWwpO1xuICAgICAgICAgICAgaWYgKGVtYWlsRXhpc3RzKSB7XG4gICAgICAgICAgICAgICAgc2V0RXJyb3Ioe2VtYWlsOiAnWW91IGhhdmUgYWxyZWFkeSBjb25maXJtZWQgeW91ciBhdHRlbmRhbmNlJ30pXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICBhd2FpdCB2YWxpZGF0aW9uU2NoZW1hLnZhbGlkYXRlKGZvcm1EYXRhLHthYm9ydEVhcmx5OiBmYWxzZX0pO1xuXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2FkZC1ndWVzdCcsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdBY2NlcHQnIDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZm9ybURhdGEpLFxuXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZGF0YS5tZXNzYWdlIHx8IFwiRmFpbGVkIHRvIGFkZCBndWVzdFwiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0SXNTdWJtaXR0ZWQodHJ1ZSk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHNldElzU3VibWl0dGVkKGZhbHNlKSwgNTAwMCk7XG5cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc3QgbmV3RXJyb3IgPSB7fTtcblxuICAgICAgICAgICAgZS5pbm5lci5mb3JFYWNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBuZXdFcnJvcltlcnIucGF0aF0gPSBlcnIubWVzc2FnZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2V0RXJyb3IobmV3RXJyb3IpO1xuXG4gICAgICAgICAgICBzZXRJc1N1Ym1pdHRlZChmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICAgICAgICA8bWFpbj5cbiAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtY2VudGVyIHRleHQtbGctY2VudGVyJz5XaWxsIHlvdSBiZSB0aGVyZSBvciB3aWxsIHlvdSBtaXNzIGl0PyA8L2gxPlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBUbyBjb25maXJtIHlvdXIgYXR0ZW5kYW5jZSB0byB0aGUgd2VkZGluZywgZW50ZXIgeW91ciBmaXJzdCBhbmQgbGFzdG5hbWUgaW4gdGhlIGZvcm0gYmVsb3cuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpcm0geW91ciBhdHRlbmRhbmNlIGJ5IGVpdGhlciBzZWxlY3RpbmcgJ1llcycgb3IgJ05vJy4gRmluYWxseSBwbGVhc2UgbGV0IHVzIGtub3cgaWYgeW91IHdpbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmUgYnJpbmdpbmcgYWxvbmcgYW55IHBsdXMgb25lcyBhbmQgaG93IG1hbnkgYW5kIGNsaWNrIG9uIHRoZSAnc3VibWl0JyBidXR0b24uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFdlIGNhbid0IHdhaXQgdG8gZm9yIHlvdSB0byBqb2luIHVzIG9uIG91ciBzcGVjaWFsIGRheSFcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlciB0ZXh0LW1kLWNlbnRlciB0ZXh0LWxnLWNlbnRlcic+UGxlYXNlIFJTVlAgYnkgRmViIDI4dGggMjAyNTwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9J3JvdyBtYi0zIGctMyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlcicgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC14cy0xMiBjb2wtbWQtNic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2Zvcm0tbGFiZWwnIGh0bWxGb3I9J2ZpcnN0bmFtZSc+Rmlyc3RuYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmaXJzdG5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdGaXJzdG5hbWUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J2ZpcnN0TmFtZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEuZmlyc3RuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvci5maXJzdG5hbWUgJiYgPHNwYW4+e2Vycm9yLmZpcnN0bmFtZX08L3NwYW4+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXhzLTEyIGNvbC1tZC02Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nZm9ybS1sYWJlbCcgaHRtbEZvcj0nbGFzdE5hbWUnPkxhc3RuYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJsYXN0bmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0xhc3RuYW1lJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdsYXN0TmFtZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEubGFzdG5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3IubGFzdG5hbWUgJiYgPHNwYW4+e2Vycm9yLmxhc3RuYW1lfTwvc3Bhbj59XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWItMyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwIGNvbC1zbSBjb2wtbGctNiBjb2wteGwtNiBnLXhsLTQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVtYWlsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nZW1haWwnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0VtYWlsJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5lbWFpbCAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGVycm9yLmVtYWlsICAmJiA8c3Bhbj57ZXJyb3IuZW1haWx9PC9zcGFuPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWItMyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtc20gZm9ybS1ncm91cCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+QXJlIHlvdSBhdHRlbmRpbmc/PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm0tY2hlY2sgbXQtMyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdmb3JtLWNoZWNrLWxhYmVsJyBodG1sRm9yPSdpc0F0dGVuZGluZyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWWVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmb3JtLWNoZWNrLWlucHV0J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2lzQXR0ZW5kaW5nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3JhZGlvJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdhdHRlbmRpbmdZZXMnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9ezF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17Zm9ybURhdGEuaXNBdHRlbmRpbmcgPT09ICcxJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybS1jaGVjayc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdmb3JtLWNoZWNrLWxhYmVsJyBodG1sRm9yPSdpc0F0dGVuZGluZyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTm9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2Zvcm0tY2hlY2staW5wdXQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0naXNBdHRlbmRpbmcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9ezB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0ncmFkaW8nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17Zm9ybURhdGEuaXNBdHRlbmRpbmcgPT09ICcwJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfS8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvci5pc0F0dGVuZGluZyAmJiA8c3Bhbj57ZXJyb3IuaXNBdHRlbmRpbmd9PC9zcGFuPn1cblxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm0tY2hlY2snPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdmb3JtLWNoZWNrLWxhYmVsJyBodG1sRm9yPScnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGx1cyBvbmUocyk/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmb3JtLWNoZWNrLWlucHV0J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0ncGx1c09uZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5wbHVzT25lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nY2hlY2tib3gnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21iLTMnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Zm9ybURhdGEucGx1c09uZSAmJiA8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCBjb2wtc20gY29sLWxnLTYgY29sLXhsLTYgZy14bC00Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIb3cgbWFueSBwbHVzIG9uZXMgd2lsbCB5b3UgYnJpbmc/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nbnVtUGx1c09uZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEubnVtUGx1c09uZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdudW1iZXInXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3IubnVtUGx1c09uZSAmJiA8c3Bhbj57ZXJyb3IubnVtUGx1c09uZX08L3NwYW4+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj59XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdidXR0b24nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuPSdTdWJtaXQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPSdidG4tc21hbGwnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdzdWJtaXQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT0nYnRuLW91dGxpbmUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9Lz5cblxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAgICAgICAgICAgIHtpc1N1Ym1pdHRlZCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLXN1Ym1pc3Npb24gYWxlcnQgYWxlcnQtc3VjY2VzcyB0ZXh0IGNlbnRlciBteC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFlvdXIgZGV0YWlscyBoYXZlIGJlZW4gc3VibWl0dGVkIVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9tYWluPlxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29uZmlybUF0dGVuZGFuY2U7IiwiZnVuY3Rpb24gRmFxKCkge1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICAgICAgICAgIDxtYWluPlxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlcic+RkFRUzwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInPklmIHlvdSBoYXZlIGFueSBwcmVzc2luZyBxdWVzdGlvbnMgZm9yIHVzLCBzb21lIGFuc3dlcnMgY2FuIGJlIGZvdW5kXG4gICAgICAgICAgICAgICAgICAgICAgICBoZXJlISA8YnIvPiBPciBpZiB5b3UnZCBsaWtlIGFzayB1cyBwZXJzb25hbGx5LCBzZW5kIHVzIGEgbWVzc2FnZSE8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3JkaW9uIGFjY29yZGlvbi1mbHVzaFwiIGlkPVwiYWNjb3JkaW9uRmx1c2hFeGFtcGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY29yZGlvbi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIldoYXQgaXMgaXMgdGhlIGRyZXNzIGNvZGU/XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYWNjb3JkaW9uLWJ1dHRvbiBjb2xsYXBzZWRcIiB0eXBlPVwiYnV0dG9uXCIgZGF0YS1icy10b2dnbGU9XCJjb2xsYXBzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1icy10YXJnZXQ9XCIjZmx1c2gtY29sbGFwc2VPbmVcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJmbHVzaC1jb2xsYXBzZU9uZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2hhdCBpcyB0aGUgZHJlc3MgY29kZT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiZmx1c2gtY29sbGFwc2VPbmVcIiBjbGFzc05hbWU9XCJhY2NvcmRpb24tY29sbGFwc2UgY29sbGFwc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1icy1wYXJlbnQ9XCIjYWNjb3JkaW9uRmx1c2hFeGFtcGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3JkaW9uLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkZvciB0aGUgdHJhZGl0b25hbCB3ZWFyIGZvciBndWVzdHMgcGxlYXNlIGNvbWUgd2VhcmluZyB3aGl0ZSBuYXRpdmUgd2l0aCBvbmlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG91cmVkIGhlYWQgd2Vhci8gYWNjZXNzb3JpZXMuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGb3IgZ3Vlc3Qgbm90IHdlYXJpbmcgdGhlIHRyYWRpdGlvbmFsIGF0dGlyZSBwbGVhc2UgZHJlc3MgaW4gZm9ybWFsIGF0dGlyZS4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiXCIgYWx0PVwiXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY29yZGlvbi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImFjY29yZGlvbi1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJhY2NvcmRpb24tYnV0dG9uIGNvbGxhcHNlZFwiIHR5cGU9XCJidXR0b25cIiBkYXRhLWJzLXRvZ2dsZT1cImNvbGxhcHNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWJzLXRhcmdldD1cIiNmbHVzaC1jb2xsYXBzZVR3b1wiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz1cImZsdXNoLWNvbGxhcHNlVHdvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXaGVyZSBpcyB0aGUgdHJhZGl0aW9uYWwgY2VyZW1vbnkgYmVpbmcgaGVsZD9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiZmx1c2gtY29sbGFwc2VUd29cIiBjbGFzc05hbWU9XCJhY2NvcmRpb24tY29sbGFwc2UgY29sbGFwc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1icy1wYXJlbnQ9XCIjYWNjb3JkaW9uRmx1c2hFeGFtcGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3JkaW9uLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBUcmFkaXRpb25hbCB3aWxsIGJlIGhlbGQgYXQgVGhlIFBhbGFjZSBCYW5xdWV0aW5nIHZlbnVlIGxvY2F0ZWQgaW4gV2FsdGhhbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWJiZXkuIFBsZWFzZSBzZWUgdGhlIGhvbWVwYWdlIGZvciBkZXRhaWxzIG9mIHRoZSBhZGRyZXNzLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvcmRpb24taXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJhY2NvcmRpb24taGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYWNjb3JkaW9uLWJ1dHRvbiBjb2xsYXBzZWRcIiB0eXBlPVwiYnV0dG9uXCIgZGF0YS1icy10b2dnbGU9XCJjb2xsYXBzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1icy10YXJnZXQ9XCIjZmx1c2gtY29sbGFwc2VUaHJlZVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz1cImZsdXNoLWNvbGxhcHNlVGhyZWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdoYXQgZm9vZHMgd2lsbCBiZSBhdmFpbGFibGUgb24gdGhlIGRheT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiZmx1c2gtY29sbGFwc2VUaHJlZVwiIGNsYXNzTmFtZT1cImFjY29yZGlvbi1jb2xsYXBzZSBjb2xsYXBzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWJzLXBhcmVudD1cIiNhY2NvcmRpb25GbHVzaEV4YW1wbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvcmRpb24tYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhlIG1lbnUgaXMgYXMgZm9sbG93czpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENhbmFwZXMgdG8gYmUgc2VydmVkIHRoaXMgd2lsbCBiZTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFB1ZmYgUHVmZiwgRHVjayBzcHJpbmcgcm9sbCwgdmVnZXRhYmxlIHNhbW9zYSwgVGVtcHVyYSBwcmF3bnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhlIG1haW4gbWVudSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCdWZmZXQgc2V0dXAgZm9yIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEpvbGxvZiBSaWNlLCBGcmllZCBSaWNlIFdoaXRlIFJpY2UsIEF5YW1hc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaW5nYXBvcmUgTm9vZGxlcywgUG91bmRlZCBZYW0gYW5kIEVndXNpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGxhbnRhaW4sIFNhbGFkLCBCZWVmIGFuZCBDaGlja2VuLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvcmRpb24taXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJhY2NvcmRpb24taGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYWNjb3JkaW9uLWJ1dHRvbiBjb2xsYXBzZWRcIiB0eXBlPVwiYnV0dG9uXCIgZGF0YS1icy10b2dnbGU9XCJjb2xsYXBzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1icy10YXJnZXQ9XCIjZmx1c2gtY29sbGFwc2VGb3VyXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwiZmx1c2gtY29sbGFwc2VGb3VyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIb3cgdG8gZ2V0IHRoZXJlP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJmbHVzaC1jb2xsYXBzZUZvdXJcIiBjbGFzc05hbWU9XCJhY2NvcmRpb24tY29sbGFwc2UgY29sbGFwc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1icy1wYXJlbnQ9XCIjYWNjb3JkaW9uRmx1c2hFeGFtcGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3JkaW9uLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5IZXJlIGlzIGEgc3RlcC1ieS1zdGVwIGd1aWRlIHRvIGhlbHAgeW91IHBsYW4geW91ciBqb3VybmV5IGZyb20gTG9uZG9uIHRvIFRoZSBQYWxhY2UgQmFucXVldGluZyBpbiBXYWx0aGFtIEFiYmV5LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWW91IGNhbiBjaG9vc2UgYmV0d2VlbiBhIHRheGksIFViZXIsIG9yIHB1YmxpYyB0cmFuc3BvcnQsIGRlcGVuZGluZyBvbiB5b3VyIHByZWZlcmVuY2UgYW5kIGNvbnZlbmllbmNlLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5PcHRpb24gMTogVGF4aTwvaDQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPklmIHlvdSBwcmVmZXIgdGhlIGNvbWZvcnQgYW5kIGRpcmVjdG5lc3Mgb2YgYSB0YXhpLCB5b3UgY2FuIGJvb2sgb25lIHRocm91Z2ggYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwdXRhYmxlIExvbmRvbiBjYWIgc2VydmljZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5mb3JtIHRoZSBkcml2ZXIgb2YgeW91ciBkZXN0aW5hdGlvbiBhczogVGhlIFBhbGFjZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQmFucXVldGluZywgV2FsdGhhbSBBYmJleSwgRU45IDFKSC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhlIGpvdXJuZXkgd2lsbCB0YWtlIGFwcHJveGltYXRlbHkgNDDigJM1MCBtaW51dGVzLCBkZXBlbmRpbmcgb24geW91ciBsb2NhdGlvbiBhbmQgdHJhZmZpYywgYW5kIG1heVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29zdCBhcm91bmQgwqMzNSBwbHVzLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+V2UgcmVjb21tZW5kIGNvbmZpcm1pbmcgdGhlIGZhcmUgd2l0aCB0aGUgdGF4aSBzZXJ2aWNlIGluXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZHZhbmNlLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+T3B0aW9uIDI6IFViZXI8L2g0PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCb29raW5nIGFuIFViZXIgaXMgYSBjb252ZW5pZW50IGFsdGVybmF0aXZlLiBVc2UgdGhlIFViZXIgYXBwIHRvIHJlcXVlc3QgYSByaWRlIGZyb21cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHlvdXIgY3VycmVudCBsb2NhdGlvbiB0byBUaGUgUGFsYWNlIEJhbnF1ZXRpbmcsIFdhbHRoYW0gQWJiZXkuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRXN0aW1hdGVkIGpvdXJuZXkgdGltZTogMTXigJM1MCBtaW51dGVzIChEZXBlbmRpbmcgb24gbG9jYXRpb24pLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwcm94aW1hdGUgZmFyZTogwqMxMuKAk8KjMjAsIGRlcGVuZGluZyBvbiB0aGUgdGltZSBvZiBkYXksIGRlbWFuZCBhbmQgbG9jYXRpb24uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5PcHRpb24gMzogUHVibGljIFRyYW5zcG9ydDwvaDQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+R2V0dGluZyB0byBUaGUgUGFsYWNlIEJhbnF1ZXRpbmcgVXNpbmcgUHVibGljIFRyYW5zcG9ydDo8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG8gcmVhY2ggVGhlIFBhbGFjZSBCYW5xdWV0aW5nLCBzdGFydCBieSB0YWtpbmcgYSB0cmFpbiBoZWFkaW5nIHRvd2FyZHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+QmlzaG9wIFN0b3J0Zm9yZCwgQ2hlc2h1bnQ8L3N0cm9uZz4sIG9yIDxzdHJvbmc+SGVydGZvcmQgRWFzdDwvc3Ryb25nPixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZCBkaXNlbWJhcmsgYXQgPHN0cm9uZz5XYWx0aGFtIENyb3NzIFN0YXRpb24gPC9zdHJvbmc+LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZnRlciBleGl0aW5nIHRoZSB0cmFpbiwgd2FsayB0byB0aGUgbmVhcmJ5IFdhbHRoYW0gQ3Jvc3MgQnVzIFN0YXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGVyZSB5b3UgY2FuIGJvYXJkIG9uZSBvZiB0aGUgZm9sbG93aW5nIGJ1c2VzOiA8c3Ryb25nPjY2LCAyNTEsPC9zdHJvbmc+IG9yIDxzdHJvbmc+MjUwPC9zdHJvbmc+LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5mb3JtIHRoZSBkcml2ZXIgdGhhdCB5b3UgbmVlZCB0byBnZXQgb2ZmIGF0IDxzdHJvbmc+RmFybSBIaWxsIFJvYWQ8L3N0cm9uZz4uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFsdGVybmF0aXZlbHksIGlmIHlvdSBwcmVmZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5b3UgY2FuIHRha2UgYSBsb2NhbCB0YXhpIG9yIGJvb2sgYW4gVWJlciBkaXJlY3RseSBmcm9tIFdhbHRoYW0gQ3Jvc3MgU3RhdGlvbiB0byBUaGUgUGFsYWNlIEJhbnF1ZXRpbmcuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgdGF4aSByaWRlIGlzIGFwcHJveGltYXRlbHkgMTAgbWludXRlcy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFc3RpbWF0ZWQgQ29zdDpcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Db21iaW5lZCB0cmFpbiBhbmQgYnVzIGZhcmVzOiDCozEw4oCTwqMxNS48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5UYXhpL1ViZXIgZnJvbSBXYWx0aGFtIENyb3NzIFN0YXRpb246IGFwcHJveGltYXRlbHkgwqMxMOKAk8KjMTUuPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMgZ3VpZGUgaXMgZGVzaWduZWQgdG8gbWFrZSB5b3VyIGpvdXJuZXkgc21vb3RoIGFuZCBzdHJlc3MtZnJlZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhhdmUgYSBwbGVhc2FudCB0cmlwIHRvIFRoZSBQYWxhY2UgQmFucXVldGluZyFcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qPGRpdiBjbGFzc05hbWU9XCJhY2NvcmRpb24taXRlbVwiPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgIDxoMiBjbGFzc05hbWU9XCJhY2NvcmRpb24taGVhZGVyXCI+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYWNjb3JkaW9uLWJ1dHRvbiBjb2xsYXBzZWRcIiB0eXBlPVwiYnV0dG9uXCIgZGF0YS1icy10b2dnbGU9XCJjb2xsYXBzZVwiKi99XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgICAgICAgICAgICAgZGF0YS1icy10YXJnZXQ9XCIjZmx1c2gtY29sbGFwc2VGaXZlXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwiZmx1c2gtY29sbGFwc2VGaXZlXCI+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgICAgICAgICAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgPC9idXR0b24+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgPC9oMj4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICA8ZGl2IGlkPVwiZmx1c2gtY29sbGFwc2VGaXZlXCIgY2xhc3NOYW1lPVwiYWNjb3JkaW9uLWNvbGxhcHNlIGNvbGxhcHNlXCIqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgIGRhdGEtYnMtcGFyZW50PVwiI2FjY29yZGlvbkZsdXNoRXhhbXBsZVwiPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY29yZGlvbi1ib2R5XCI+UGxhY2Vob2xkZXIgY29udGVudCBmb3IgdGhpcyBhY2NvcmRpb24sIHdoaWNoIGlzKi99XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgICAgICAgICBpbnRlbmRlZCB0byovfVxuICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICAgICAgZGVtb25zdHJhdGUgdGhlIDxjb2RlPi5hY2NvcmRpb24tZmx1c2g8L2NvZGU+IGNsYXNzLiBUaGlzIGlzIHRoZSB0aGlyZCBpdGVtJ3MqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgICAgIGFjY29yZGlvbiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICAgICAgYm9keS4gTm90aGluZyBtb3JlIGV4Y2l0aW5nIGhhcHBlbmluZyBoZXJlIGluIHRlcm1zIG9mIGNvbnRlbnQsIGJ1dCBqdXN0IGZpbGxpbmcgdXAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgICAgIHRoZSovfVxuICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICAgICAgc3BhY2UgdG8gbWFrZSBpdCBsb29rLCBhdCBsZWFzdCBhdCBmaXJzdCBnbGFuY2UsIGEgYml0IG1vcmUgcmVwcmVzZW50YXRpdmUgb2YgaG93Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgICAgICAgICB0aGlzIHdvdWxkKi99XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgICAgICAgICBsb29rIGluIGEgcmVhbC13b3JsZCBhcHBsaWNhdGlvbi4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgPC9kaXY+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgPC9kaXY+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyo8L2Rpdj4qL31cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD0nY29udGFjdC11cy1mb3JtJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND5Db250YWN0IFVzPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpZnJhbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9mb3Jtcy9kL2UvMUZBSXBRTFNkR1pxMHBEQjYtaWk4LTlKWHlnSTlXRUZzdlotVDRJX1g2b0JJYWJVU2VUeXY1SEEvdmlld2Zvcm0/ZW1iZWRkZWQ9dHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI0MDBcIiBoZWlnaHQ9XCI1NTFcIiBmcmFtZUJvcmRlcj1cIjBcIiBtYXJnaW5IZWlnaHQ9XCIwXCIgbWFyZ2luV2lkdGg9XCIwXCI+TG9hZGluZ+KAplxuICAgICAgICAgICAgICAgICAgICAgICAgPC9pZnJhbWU+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8L21haW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4pfVxuXG5leHBvcnQgZGVmYXVsdCBGYXEiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgJy4uLy4uL3N0eWxlcy9HaWZ0UmVnaXN0cnkuY3NzJ1xuaW1wb3J0IHtCdXR0b259IGZyb20gXCIuLi9CdXR0b25cIjtcblxuZnVuY3Rpb24gR2lmdFJlZ2lzdHJ5KCkge1xuXG4gICAgcmV0dXJuKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lciBjb250YWluZXItZmx1aWQnPlxuICAgICAgICAgICAgICAgIDxtYWluPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtc20tMTIgY29sLW1kLTEyIGNvbC1sZy0xMiBjb2wteGwtMTInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtY2VudGVyJz5HaWZ0IFJlZ2lzdHJ5PC9oMT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPldlIGFyZSBzbyBleGNpdGVkIHRvIGhhdmUgeW91IGpvaW4gb3VyIHNwZWNpYWwgZGF5IGFuZCB5b3VyIHByZXNlbmNlIGF0IG91ciB3ZWRkaW5nIGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSBiZXN0IGdpZnQgd2UgY291bGQgYXNrIGZvci4gSG93ZXZlciwgaWYgd2UgYXJlIHRvIGJlIGhvbm9yZWQgd2l0aCBhIHByZXNlbnQgZnJvbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5b3UsIGEgbW9uZXRhcnkgZ2lmdCB0b3dhcmRzIG91ciA8c3Ryb25nPkhvbmV5bW9vbiBUcmlwIHRvIEJhbGkgPC9zdHJvbmc+IHdvdWxkIGJlIHZlcnkgbXVjaFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHByZWNpYXRlZC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5XZSBoYXZlIHNldCB1cCBhIGNhc2ggZnVuZCB3ZWRkaW5nIHJlZ2lzdHJ5IGF0IFByZXpvbGEuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPk9SPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPldlIGhhdmUgcHV0IHRvZ2V0aGVyIGEgZ2lmdCBsaXN0IGFzIHdlbGwgb24gYm90aCBzaXRlcyBiZWxvdy4gSnVzdCBjbGljayBvbiBlaXRoZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9ucyBhbmQgeW91J2xsIGJlIHRha2VuIHRvIHRoZSBzaXRlcyBmb3Igb3VyIGdpZnRzIHJlZ2lzdHJ5ITwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5XZSB0aGFuayB5b3UgdmVyeSBtdWNoIGluIGFkdmFuY2UhIDxzcGFuPiAmIzEyODUyMjs8L3NwYW4+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdnaWZ0LWJ1dHRvbnMgdGV4dC1jZW50ZXIgY29sLXNtIGNvbC1tZC0xMiBjb2wtbGctMTIgY29sLXhsLTEyJz5cblxuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9J2h0dHBzOi8vd3d3LmFtYXpvbi5jby51ay93ZWRkaW5nL3JlZ2lzdHJ5LzM1TFg3VFNBNkI3SlYnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjxCdXR0b25cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbj0nQW1hem9uJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPSdidG4tc21hbGwnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3N1Ym1pdCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9J2J0bi1vdXRsaW5lJy8+PC9hPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj0naHR0cHM6Ly9wcmV6b2xhLmNvbS9idXkvdmlldy8yMDcwNzInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuPSdQcmV6b2xhJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT0nYnRuLXNtYWxsJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nc3VibWl0J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9J2J0bi1vdXRsaW5lJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBHaWZ0UmVnaXN0cnk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgJy4uLy4uL3N0eWxlcy9Ib21lLmNzcyc7XG5pbXBvcnQgSGVyb0ltYWdlIGZyb20gJy4uLy4uL3B1YmxpYy9oZXJvLWltYWdlLmpwZWcnO1xuaW1wb3J0IEZvb3RlckltYWdlIGZyb20gJy4uLy4uL3B1YmxpYy9mb290ZXItaW1hZ2UuanBlZyc7XG5pbXBvcnQgQXJjaEltYWdlIGZyb20gJy4uLy4uL3B1YmxpYy9pbWFnZS1hcmNoLnBuZyc7XG5pbXBvcnQgRmxvcmFscyBmcm9tICcuLi8uLi9wdWJsaWMvZmxvcmFsLWRlc2lnbi5wbmcnO1xuaW1wb3J0IHtCdXR0b259IGZyb20gXCIuLi9CdXR0b25cIjtcbmltcG9ydCAnLi4vLi4vc3R5bGVzL0J1dHRvbi5jc3MnO1xuXG5mdW5jdGlvbiBIb21lKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nanVtYm90cm9uIGp1bWJvdHJvbi1mbHVpZCc+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0naG9tZS10aXRsZSc+UmVtaSBGYXdlaGlubWkgJiBTaW1pc29sYSBBZGVqdW1vPC9oMT5cblxuICAgICAgICAgICAgICAgIDxwaWN0dXJlIGNsYXNzTmFtZT0nJz5cbiAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBtZWRpYT1cIihtYXgtd2lkdGg6IDc5OXB4KVwiIHNyY1NldD17SGVyb0ltYWdlfS8+XG4gICAgICAgICAgICAgICAgICAgIDxzb3VyY2UgbWVkaWE9XCIobWluLXdpZHRoOiA4MDBweClcIiBzcmNTZXQ9e0hlcm9JbWFnZX0vPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17SGVyb0ltYWdlfSBhbHQ9XCJcIiBjbGFzc05hbWU9J2hlcm8taW1hZ2UnLz5cbiAgICAgICAgICAgICAgICA8L3BpY3R1cmU+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NsZWFyZml4Jz48L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgPG1haW4+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1zbS0xMiBjb2wtbWQtMTIgY29sLWxnLTEyIGNvbC14bC0xMiBteS01Jz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5XZWxjb21lIHRvIE91ciBXZWRkaW5nITwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1zbS0xMiBjb2wtbWQtMTIgY29sLWxnLTYgY29sLXhsLTYgZmxvYXQtc3RhcnQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdlIGNvcmRpYWxseSBpbnZpdGUgeW91IHRvIG91ciBUcmFkaXRpb25hbCBFbmdhZ2VtZW50IGFuZCBXZWRkaW5nIFJlY2VwdGlvbiBvbiB0aGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDE3dGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcmlsLCAyMDI1LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2UgYXJlIGV4Y2l0ZWQgdG8gaGF2ZSB5b3Ugc2hhcmUgb3VyIGJpZyBkYXkgd2l0aCB1cy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcyB3ZSB3YWl0IGZvciB0aGUgYmlnIGRheSB0byBhcnJpdmUsIHdlIGhhdmUgY3JlYXRlZCB0aGlzIHdlYnNpdGUgdG8ga2VlcCB5b3UgdXAgdG9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGggZXZlcnl0aGluZy5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+SW4gdGhlIDxzdHJvbmc+YXR0ZW5kYW5jZSBzZWN0aW9uPC9zdHJvbmc+LCBjYW4geW91IFBsZWFzZSBjb25maXJtIHdoZXRoZXIgb3Igbm90IHlvdVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmUgYXQgb3VyIHdlZGRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGggdXM/IFBsZWFzZSBjb25maXJtIGFzIHNvb24gYXMgcG9zc2libGUgc28gd2UgY2FuIGFycmFuZ2UgZXZlcnl0aGluZyBtdWNoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYXN0ZXIuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBbHNvLCBwbGVhc2Ugbm90ZSB0aGF0IG9uIHRoZSBkYXksIGRvIDxzdHJvbmc+bm90PC9zdHJvbmc+IHVwbG9hZCBhbnkgcGhvdG9zIG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWRlb3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbnkgZm9ybSBvZiBzb2NpYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lZGlhLlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVuam95IHRoZSBzaXRlLCBhbmQgV2XigJlsbCBzZWUgeW91IHNvb24hXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW1nLWFyY2ggY29sLXNtLTEyIGNvbC1tZC0xMiBjb2wtbGctNiBjb2wteGwtNiBmbG9hdC1lbmQgJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FyY2hJbWFnZX0gYWx0PSdhcmNoLWltYWdlJyBjbGFzc05hbWU9J2FyY2gtaW1hZ2UnLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhc2lkZSByb3cnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1zbS0xMiBjb2wtbWQtMTIgY29sLW1kLTggY29sLWxnLTggbXktMyc+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+V2hlcmUgaXMgaXQgbG9jYXRlZD88L2gzPlxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPSdtYXAnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Z21wLW1hcCBjZW50ZXI9XCI1MS42ODMwMDYyODY2MjEwOTQsLTAuMDA1NDczNjA2NzU0MDk0MzYyXCIgem9vbT1cIjE0XCIgbWFwLWlkPVwidGV3bFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGdtcC1hZHZhbmNlZC1tYXJrZXIgcG9zaXRpb249XCI1MS42ODMwMDYyODY2MjEwOTQsLTAuMDA1NDczNjA2NzU0MDk0MzYyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiTXkgbG9jYXRpb25cIj48L2dtcC1hZHZhbmNlZC1tYXJrZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZ21wLW1hcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1zbSBjb2wtbGctNCBteS01IGZsb2F0LWxnLWVuZCc+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+QXByaWwsIDE3LCAyMDI1PC9oNT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkNlcmVtb255IHwgMTI6MDAgUE1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR3JhbmdlIFBhcmsgTWV0aG9kaXN0IENodXJjaCwgT2xkIFBhcmsgUmlkaW5ncywgTG9uZG9uIE4yMSAyRVVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+VHJhZGl0aW9uYWwgRW5nYWdlbWVudCBhbmQgUmVjZXB0aW9uIHwgMzozMCBQTVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgUGFsYWNlIEJhbnF1ZXRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTEyIEJyb29rZXIgUmQsIFdhbHRoYW0gQWJiZXkgRU45IDFKSFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoV2hlZWxjaGFpciBBY2Nlc3NpYmxlKTwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1zbS0xMiBjb2wtbWQtMTIgY29sLWxnLTYnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtGb290ZXJJbWFnZX0gYWx0PVwiZm9vdGVyLWltYWdlXCIgY2xhc3NOYW1lPSdmb290ZXItaW1hZ2UnLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBhcnRpY2xlIGZsb2F0LXJpZ2h0IGNsZWFyZml4Jz5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3RleHQtY2VudGVyIGNvbC1zbS0xMiBjb2wtbWQtMTIgY29sLWxnLTYgY29sLXhsLTYgbXktNSBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlcic+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlNhdmUgdGhlIERhdGUgYW5kIHdlJ2xsIHNlZSB5b3UgdGhlcmUhPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJZiB5b3UnZCBsaWtlIHRvIGdpdmUgdXMgYSBnaWZ0IHdlJ3JlIHJlZ2lzdGVyZWQgYXQgPGEgaHJlZj1cImh0dHA6Ly9cIj5QcmV6b2xhPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvd2VkZGluZy9jb25maXJtLWF0dGVuZGFuY2VcIiBjbGFzc05hbWU9XCJidG4tb3V0bGluZVwiPlJTVlA8L0xpbms+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJSZWFjdCIsIlJlYWN0RE9NIiwiQXBwIiwianN4IiwiX2pzeCIsImNyZWF0ZVJvb3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVuZGVyIiwiU3RyaWN0TW9kZSIsImNoaWxkcmVuIiwiTmF2YmFyIiwiSG9tZSIsIlJvdXRlIiwiUm91dGVzIiwiQnJvd3NlclJvdXRlciIsIkNvbmZpcm1BdHRlbmRhbmNlIiwiR2lmdFJlZ2lzdHJ5IiwiRkFRcyIsIkZvb3RlciIsImpzeHMiLCJfanN4cyIsIkZyYWdtZW50IiwiX0ZyYWdtZW50IiwicGF0aCIsImVsZW1lbnQiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJTVFlMRVMiLCJTSVpFUyIsIkJ1dHRvbiIsIl9yZWYiLCJ0eXBlIiwib25DbGljayIsInN0eWxlIiwic2l6ZSIsImNoZWNrU3R5bGUiLCJpbmNsdWRlcyIsImNoZWNrU2l6ZSIsImNsYXNzTmFtZSIsImNvbmNhdCIsImdldERhdGUiLCJkYXRlIiwiRGF0ZSIsInllYXIiLCJnZXRGdWxsWWVhciIsIl9faHRtbCIsIm9uTG9hZCIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwibG9nbyIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImNsaWNrIiwic2V0SXNDbGlja2VkIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJjbG9zZU1lbnUiLCJ0b2dnbGVOYXZiYXIiLCJjbGlja2VkIiwidG8iLCJzcmMiLCJhbHQiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZSIsInQiLCJyIiwiT2JqZWN0IiwicHJvdG90eXBlIiwibiIsImhhc093blByb3BlcnR5IiwibyIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJpIiwiU3ltYm9sIiwiYSIsIml0ZXJhdG9yIiwiYyIsImFzeW5jSXRlcmF0b3IiLCJ1IiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ3cmFwIiwiR2VuZXJhdG9yIiwiY3JlYXRlIiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsImFyZyIsImNhbGwiLCJoIiwibCIsImYiLCJzIiwieSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJwIiwiZCIsImdldFByb3RvdHlwZU9mIiwidiIsInZhbHVlcyIsImciLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJpbnZva2UiLCJfdHlwZW9mIiwicmVzb2x2ZSIsIl9fYXdhaXQiLCJ0aGVuIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJFcnJvciIsImRvbmUiLCJtZXRob2QiLCJkZWxlZ2F0ZSIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsIlR5cGVFcnJvciIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXNOYU4iLCJsZW5ndGgiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsImtleXMiLCJyZXZlcnNlIiwicG9wIiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJ2YWwiLCJoYW5kbGUiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3VtZW50cyIsImFwcGx5IiwiX25leHQiLCJfdGhyb3ciLCJfYXJyYXlXaXRoSG9sZXMiLCJfaXRlcmFibGVUb0FycmF5TGltaXQiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVSZXN0IiwiX2FycmF5TGlrZVRvQXJyYXkiLCJ0b1N0cmluZyIsIkFycmF5IiwiZnJvbSIsInRlc3QiLCJpc0FycmF5IiwiWXVwIiwiZXhwZWN0ZWRFcnJvciIsImJ1aWxkZXIiLCJmaXJzdG5hbWUiLCJsYXN0bmFtZSIsImVtYWlsIiwiaXNBdHRlbmRpbmciLCJwbHVzT25lIiwibnVtUGx1c09uZSIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJlcnJvciIsInNldEVycm9yIiwiX3VzZVN0YXRlNSIsIl91c2VTdGF0ZTYiLCJpc1N1Ym1pdHRlZCIsInNldElzU3VibWl0dGVkIiwidmFsaWRhdGlvblNjaGVtYSIsIm9iamVjdCIsInN0cmluZyIsInJlcXVpcmVkIiwiYm9vbCIsIm5vdFJlcXVpcmVkIiwibnVtYmVyIiwidHJhbnNmb3JtIiwidW5kZWZpbmVkIiwid2hlbiIsImlzIiwic2NoZW1hIiwidHlwZUVycm9yIiwicG9zaXRpdmUiLCJpbnRlZ2VyIiwibWF4Iiwib3RoZXJ3aXNlIiwibnVsbGFibGUiLCJjaGVja0d1ZXN0RXhpc3RzIiwiX2NhbGxlZSIsInJlc3BvbnNlIiwiZGF0YSIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJmZXRjaCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiZXhpc3RzIiwiZXJyb3JzIiwibWVzc2FnZSIsInQwIiwiX3giLCJoYW5kbGVDaGFuZ2UiLCJ0YXJnZXQiLCJjaGVja2VkIiwiX29iamVjdFNwcmVhZCIsIl9kZWZpbmVQcm9wZXJ0eSIsImhhbmRsZVN1Ym1pdCIsIl9yZWYyIiwiX2NhbGxlZTIiLCJlbWFpbEV4aXN0cyIsIm5ld0Vycm9yIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwicHJldmVudERlZmF1bHQiLCJ2YWxpZGF0ZSIsImFib3J0RWFybHkiLCJvayIsInNldFRpbWVvdXQiLCJpbm5lciIsImVyciIsIl94MiIsIm9uU3VibWl0IiwiaHRtbEZvciIsInBsYWNlaG9sZGVyIiwiaWQiLCJvbkNoYW5nZSIsIkZhcSIsIndpZHRoIiwiaGVpZ2h0IiwiZnJhbWVCb3JkZXIiLCJtYXJnaW5IZWlnaHQiLCJtYXJnaW5XaWR0aCIsImhyZWYiLCJIZXJvSW1hZ2UiLCJGb290ZXJJbWFnZSIsIkFyY2hJbWFnZSIsIkZsb3JhbHMiLCJtZWRpYSIsInNyY1NldCIsImNlbnRlciIsInpvb20iLCJwb3NpdGlvbiIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==