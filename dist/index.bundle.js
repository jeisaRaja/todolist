/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./DMSans-Regular.ttf */ "./src/DMSans-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./DMSans-Bold.ttf */ "./src/DMSans-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/bg.png */ "./src/img/bg.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root{\r\n    --lightblue : #0a163f;\r\n    --darkblue : #142B7E;\r\n    --lightgrey : #f0f0f0;\r\n}\r\n*{\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n@font-face {\r\n    font-family: 'reg';\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('truetype');\r\n    font-weight: 600;\r\n    font-style: normal;\r\n    }\r\n@font-face {\r\n    font-family: 'bold';\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('truetype');\r\n    font-weight: 600;\r\n    font-style: normal;\r\n    }\r\n\r\n::-webkit-scrollbar{\r\n    width: 1.5rem;\r\n    background-color: rgb(233, 233, 233);\r\n\r\n}\r\n\r\n::-webkit-scrollbar-track{\r\n    border-radius: 5px;\r\n}\r\n::-webkit-scrollbar-thumb{\r\n    border-radius: 7px;\r\n    background-color: #888888;\r\n}\r\n\r\nh1{\r\n    font-family: 'bold';\r\n    font-size: 7.5rem;\r\n}\r\nh2{\r\n    font-family: 'reg';\r\n    font-size: 5rem;\r\n}\r\nh3{\r\n    font-family: 'reg';\r\n    font-size: 3.5rem;\r\n}\r\nh4{\r\n    font-family: 'reg';\r\n    font-size: 2.5rem;\r\n}\r\nh5{\r\n    font-family: 'reg';\r\n    font-size: 2rem;\r\n}\r\np{\r\n    font-size: 1.5rem;\r\n    font-family: 'reg';\r\n}\r\nhtml{\r\n    font-size: 62.5%;\r\n    line-height: 1;\r\n}\r\nbutton{\r\n    text-decoration: none;\r\n    border: none;\r\n    font-size: 2rem;\r\n}\r\nbody{\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n    min-height: 100vh;\r\n    width: 100vw;\r\n    max-width: 100%;\r\n    background-size:     cover;                      /* <------ */\r\n    background-repeat:   no-repeat;\r\n    background-position: center center;   \r\n}\r\n\r\nmain{\r\n    margin: auto;\r\n    display: grid;\r\n    gap: 10rem;\r\n    grid-template-columns: auto auto;\r\n    padding: 0rem;\r\n    padding-top: 15rem;\r\n    padding-bottom: 5rem;\r\n    justify-content: center;\r\n    width: 80vw;\r\n    max-width: 100%;\r\n\r\n}\r\n\r\n.left{\r\n    width: 50rem;\r\n    height: 50rem;\r\n}\r\n.navbar{\r\n    display: flex;\r\n    width: 100%;\r\n    justify-content: space-around;\r\n    border-radius: 2.5rem 2.5rem 0 0 ;\r\n}\r\n.navItem{\r\n    padding:1rem 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    text-align: center;\r\n    color: var(--darkblue);\r\n    background-color: var(--lightgrey);\r\n    transition: all 0.7s;\r\n    cursor: pointer;\r\n}\r\n.navItem:hover{\r\n    background-color: var(--lightblue);\r\n    color: white;\r\n}\r\n.leftNav{\r\n    border-top-left-radius: 2.5rem;\r\n}\r\n.rightNav{\r\n    border-top-right-radius: 2.5rem;\r\n}\r\n.right{\r\n    width: 50rem;\r\n    height: 50rem;\r\n    background-color: rgb(255, 255, 255);\r\n    border-radius: 2.5rem;\r\n    box-shadow: 0 5px 30px 5px rgba(0,0,0,0.15);\r\n    transition: all 0.7s;\r\n}\r\n.right:hover{\r\n    box-shadow: 0 10px 30px 5px rgba(0,0,0,0.25);\r\n}\r\n\r\n\r\n.content{\r\n    height: 42rem;\r\n    padding: 2rem;\r\n    overflow-y: scroll;\r\n}\r\n\r\n\r\n.modal{\r\n    background-color: white;\r\n    height: 10rem;\r\n    display: none;\r\n    justify-content: center;\r\n    align-items: center;\r\n    max-width: 80rem;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    padding: 1rem;\r\n    box-shadow: 0 5px 10px 5px rgba(0,0,0,0.15);\r\n    border-radius: 2rem;\r\n}\r\n\r\nform{\r\n    max-width: 50rem;\r\n}\r\n.white{\r\n    color: white;\r\n}\r\n.black{\r\n    color:black;\r\n}\r\n.active{\r\n    background-color:var(--darkblue);\r\n    color: white;\r\n}\r\n\r\n#modal_project{\r\n    display: none;\r\n    position: absolute;\r\n}\r\n\r\n#modal_todo{\r\n    display: none;\r\n    position: absolute;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;IACrB,oBAAoB;IACpB,qBAAqB;AACzB;AACA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;AACA;IACI,kBAAkB;IAClB,+DAAmD;IACnD,gBAAgB;IAChB,kBAAkB;IAClB;AACJ;IACI,mBAAmB;IACnB,+DAAgD;IAChD,gBAAgB;IAChB,kBAAkB;IAClB;;AAEJ;IACI,aAAa;IACb,oCAAoC;;AAExC;;AAEA;IACI,kBAAkB;AACtB;AACA;IACI,kBAAkB;IAClB,yBAAyB;AAC7B;;AAEA;IACI,mBAAmB;IACnB,iBAAiB;AACrB;AACA;IACI,kBAAkB;IAClB,eAAe;AACnB;AACA;IACI,kBAAkB;IAClB,iBAAiB;AACrB;AACA;IACI,kBAAkB;IAClB,iBAAiB;AACrB;AACA;IACI,kBAAkB;IAClB,eAAe;AACnB;AACA;IACI,iBAAiB;IACjB,kBAAkB;AACtB;AACA;IACI,gBAAgB;IAChB,cAAc;AAClB;AACA;IACI,qBAAqB;IACrB,YAAY;IACZ,eAAe;AACnB;AACA;IACI,yDAAqC;IACrC,iBAAiB;IACjB,YAAY;IACZ,eAAe;IACf,0BAA0B,uBAAuB,YAAY;IAC7D,8BAA8B;IAC9B,kCAAkC;AACtC;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,UAAU;IACV,gCAAgC;IAChC,aAAa;IACb,kBAAkB;IAClB,oBAAoB;IACpB,uBAAuB;IACvB,WAAW;IACX,eAAe;;AAEnB;;AAEA;IACI,YAAY;IACZ,aAAa;AACjB;AACA;IACI,aAAa;IACb,WAAW;IACX,6BAA6B;IAC7B,iCAAiC;AACrC;AACA;IACI,cAAc;IACd,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,sBAAsB;IACtB,kCAAkC;IAClC,oBAAoB;IACpB,eAAe;AACnB;AACA;IACI,kCAAkC;IAClC,YAAY;AAChB;AACA;IACI,8BAA8B;AAClC;AACA;IACI,+BAA+B;AACnC;AACA;IACI,YAAY;IACZ,aAAa;IACb,oCAAoC;IACpC,qBAAqB;IACrB,2CAA2C;IAC3C,oBAAoB;AACxB;AACA;IACI,4CAA4C;AAChD;;;AAGA;IACI,aAAa;IACb,aAAa;IACb,kBAAkB;AACtB;;;AAGA;IACI,uBAAuB;IACvB,aAAa;IACb,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,gBAAgB;IAChB,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,aAAa;IACb,2CAA2C;IAC3C,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;AACpB;AACA;IACI,YAAY;AAChB;AACA;IACI,WAAW;AACf;AACA;IACI,gCAAgC;IAChC,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,kBAAkB;AACtB","sourcesContent":[":root{\r\n    --lightblue : #0a163f;\r\n    --darkblue : #142B7E;\r\n    --lightgrey : #f0f0f0;\r\n}\r\n*{\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n@font-face {\r\n    font-family: 'reg';\r\n    src: url('./DMSans-Regular.ttf') format('truetype');\r\n    font-weight: 600;\r\n    font-style: normal;\r\n    }\r\n@font-face {\r\n    font-family: 'bold';\r\n    src: url('./DMSans-Bold.ttf') format('truetype');\r\n    font-weight: 600;\r\n    font-style: normal;\r\n    }\r\n\r\n::-webkit-scrollbar{\r\n    width: 1.5rem;\r\n    background-color: rgb(233, 233, 233);\r\n\r\n}\r\n\r\n::-webkit-scrollbar-track{\r\n    border-radius: 5px;\r\n}\r\n::-webkit-scrollbar-thumb{\r\n    border-radius: 7px;\r\n    background-color: #888888;\r\n}\r\n\r\nh1{\r\n    font-family: 'bold';\r\n    font-size: 7.5rem;\r\n}\r\nh2{\r\n    font-family: 'reg';\r\n    font-size: 5rem;\r\n}\r\nh3{\r\n    font-family: 'reg';\r\n    font-size: 3.5rem;\r\n}\r\nh4{\r\n    font-family: 'reg';\r\n    font-size: 2.5rem;\r\n}\r\nh5{\r\n    font-family: 'reg';\r\n    font-size: 2rem;\r\n}\r\np{\r\n    font-size: 1.5rem;\r\n    font-family: 'reg';\r\n}\r\nhtml{\r\n    font-size: 62.5%;\r\n    line-height: 1;\r\n}\r\nbutton{\r\n    text-decoration: none;\r\n    border: none;\r\n    font-size: 2rem;\r\n}\r\nbody{\r\n    background-image: url('./img/bg.png');\r\n    min-height: 100vh;\r\n    width: 100vw;\r\n    max-width: 100%;\r\n    background-size:     cover;                      /* <------ */\r\n    background-repeat:   no-repeat;\r\n    background-position: center center;   \r\n}\r\n\r\nmain{\r\n    margin: auto;\r\n    display: grid;\r\n    gap: 10rem;\r\n    grid-template-columns: auto auto;\r\n    padding: 0rem;\r\n    padding-top: 15rem;\r\n    padding-bottom: 5rem;\r\n    justify-content: center;\r\n    width: 80vw;\r\n    max-width: 100%;\r\n\r\n}\r\n\r\n.left{\r\n    width: 50rem;\r\n    height: 50rem;\r\n}\r\n.navbar{\r\n    display: flex;\r\n    width: 100%;\r\n    justify-content: space-around;\r\n    border-radius: 2.5rem 2.5rem 0 0 ;\r\n}\r\n.navItem{\r\n    padding:1rem 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    text-align: center;\r\n    color: var(--darkblue);\r\n    background-color: var(--lightgrey);\r\n    transition: all 0.7s;\r\n    cursor: pointer;\r\n}\r\n.navItem:hover{\r\n    background-color: var(--lightblue);\r\n    color: white;\r\n}\r\n.leftNav{\r\n    border-top-left-radius: 2.5rem;\r\n}\r\n.rightNav{\r\n    border-top-right-radius: 2.5rem;\r\n}\r\n.right{\r\n    width: 50rem;\r\n    height: 50rem;\r\n    background-color: rgb(255, 255, 255);\r\n    border-radius: 2.5rem;\r\n    box-shadow: 0 5px 30px 5px rgba(0,0,0,0.15);\r\n    transition: all 0.7s;\r\n}\r\n.right:hover{\r\n    box-shadow: 0 10px 30px 5px rgba(0,0,0,0.25);\r\n}\r\n\r\n\r\n.content{\r\n    height: 42rem;\r\n    padding: 2rem;\r\n    overflow-y: scroll;\r\n}\r\n\r\n\r\n.modal{\r\n    background-color: white;\r\n    height: 10rem;\r\n    display: none;\r\n    justify-content: center;\r\n    align-items: center;\r\n    max-width: 80rem;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    padding: 1rem;\r\n    box-shadow: 0 5px 10px 5px rgba(0,0,0,0.15);\r\n    border-radius: 2rem;\r\n}\r\n\r\nform{\r\n    max-width: 50rem;\r\n}\r\n.white{\r\n    color: white;\r\n}\r\n.black{\r\n    color:black;\r\n}\r\n.active{\r\n    background-color:var(--darkblue);\r\n    color: white;\r\n}\r\n\r\n#modal_project{\r\n    display: none;\r\n    position: absolute;\r\n}\r\n\r\n#modal_todo{\r\n    display: none;\r\n    position: absolute;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/project_class.js":
/*!******************************!*\
  !*** ./src/project_class.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project)
/* harmony export */ });
class Project{
    constructor(title, description, todos) {
        this.title=title;
        this.description=description;
        this.todos=todos;
    }
}



/***/ }),

/***/ "./src/todo_class.js":
/*!***************************!*\
  !*** ./src/todo_class.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Todo": () => (/* binding */ Todo)
/* harmony export */ });
class Todo{
    constructor(title,description,dueDate,priority,checklist){
        this.title=title;
        this.description=description;
        this.dueDate=dueDate;
        this.priority=priority;
        this.checklist=checklist;
    }
}


/***/ }),

/***/ "./src/DMSans-Bold.ttf":
/*!*****************************!*\
  !*** ./src/DMSans-Bold.ttf ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "da49214b2d88abca155c.ttf";

/***/ }),

/***/ "./src/DMSans-Regular.ttf":
/*!********************************!*\
  !*** ./src/DMSans-Regular.ttf ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "067ebd7ed3c947d82dc4.ttf";

/***/ }),

/***/ "./src/img/bg.png":
/*!************************!*\
  !*** ./src/img/bg.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "404c3e0f5ed8ca7763ea.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todo_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo_class */ "./src/todo_class.js");
/* harmony import */ var _project_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project_class */ "./src/project_class.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");




// QUERY SELECTOR
const main = document.querySelector('.main')
const content = document.querySelector('.content');
const h1 = document.querySelector('.title_text');
const navbar = document.querySelector('.navbar');
const content_title = document.querySelector('.content_title');
// const btn = document.querySelector('.click')
const submit = document.querySelector('.submit')
const form_project = document.querySelector('.form_project')
const modal_project = document.querySelector('#modal_project')
const modal_todo = document.querySelector('#modal_todo')
const content_body = document.querySelector('.content_body')


const h1_todo = "<h2>Your</h2>Todo List";
h1.innerHTML = h1_todo;

const nav_main = "<button class='navItem blue leftNav active' id='todos'>Todo's</button><button class='navItem rightNav' id='projects'>Project's</button>"
navbar.innerHTML = nav_main;
const navItem = document.querySelectorAll('.navItem')
const todos = document.querySelector('#todos')
const projects = document.querySelector('#projects')

navItem.forEach(nav =>{
    nav.addEventListener('click', clickListen, false)
})

let array_project = [
    {
        title:'hello', 
        description:'testing',
        todos: []
     },
     {
        title:'hai', 
        description:'tes lagi',
        todos: []
     }
]
let array_todo = [
    {
        title:'hai', 
        description:'tes lagi',
        dueDate: '20 januari',
        priority: 'gak penting',
        checklist: 'sudah'
     },
     {
        title:'tes 2', 
        description:'waduh lagi',
        dueDate: '50 januari',
        priority: 'penting',
        checklist: 'belom'
     },
     {
        title:'tes 2', 
        description:'waduh lagi',
        dueDate: '50 januari',
        priority: 'penting',
        checklist: 'belom'
     },
     {
        title:'tes 2', 
        description:'waduh lagi',
        dueDate: '50 januari',
        priority: 'penting',
        checklist: 'belom'
     },
     {
        title:'tes 2', 
        description:'waduh lagi',
        dueDate: '50 januari',
        priority: 'penting',
        checklist: 'belom'
     }, 
]

// btn.addEventListener('click', ()=>{
//     if(modal.style.display == 'flex'){
//         modal.style.display = 'none'
//     }
//     else{
//         modal.style.display = 'flex'
//     }
// })

document.addEventListener('DOMContentLoaded', function(){

    submit.addEventListener('click', addProject
        // console.log(form_project[0].value , form_project[1].value)
    ,false); 
},false);

function addProjectHandler(){
    
    if(modal_project.display == 'flex'){
        modal_project.style.display = 'none'
    }else{
        modal_project.style.display = 'flex'
    }
    return 0;
}
function addTodoHandler(){
    console.log(modal_todo.style.display)
    if(modal_todo.style.display == 'flex'){
        modal_todo.style.display = 'none'
    }else{
        modal_todo.style.display = 'flex'
    }
    return 0;
}

function addProject(e){
    e.preventDefault();
    const title = form_project[0].value
    const desc = form_project[1].value
    const empty_array =[]
    const project = new _project_class__WEBPACK_IMPORTED_MODULE_1__.Project(title,desc,empty_array)
    console.log(array_project)
    array_project.push(project)
}
function addTodo(e){
    e.preventDefault();
    const title = form_project[0].value
    const desc = form_project[1].value
    const empty_array =[]
    const project = new _project_class__WEBPACK_IMPORTED_MODULE_1__.Project(title,desc,empty_array)
    console.log(array_project)
    array_project.push(project)
}

function showProjects(){
    content_body.innerHTML = ""
    array_project.forEach(project =>{
        
        const project_title = document.createElement('h3')
        project_title.innerText = project.title
        const project_desc = document.createElement('p')
        project_desc.innerText = project.description
        content_body.appendChild(project_title)
        content_body.appendChild(project_desc)

    })
    const addButton = document.createElement('BUTTON')
    addButton.innerHTML = 'ADD PROJECT'
    addButton.classList.add('addNew')
    content_body.appendChild(addButton)
    addButton.addEventListener('click', addProjectHandler)
}

function showTodos(){
    content_body.innerHTML = ""

    array_todo.forEach(todo =>{
        
        const todo_body = document.createElement('div')
        todo_body.innerHTML = `<h3>${todo.title}</h3><p>${todo.description}</p><p>${todo.dueDate}</p><p>${todo.priority}</p><p>${todo.checklist}</p>`
        content_body.appendChild(todo_body)

    })
    const addButton = document.createElement('BUTTON')
    addButton.innerHTML = 'ADD TODO'
    addButton.classList.add('addNew')
    content_body.appendChild(addButton)

    addButton.addEventListener('click', addTodoHandler)
}

const todos_content = `<h3>This is your todos</h3>`
const projects_content =  "<h3>This is your projects</h3>"
content_title.innerHTML = todos_content

function clickListen(e){
    console.log('berhasil')
    const button_path = e.path[0].id
    if(button_path=="todos"){
        todos.classList.add('active')
        projects.classList.remove('active')
        content_title.innerHTML = todos_content
        showTodos()
    }
    else if(button_path=="projects"){
        todos.classList.remove('active')
        projects.classList.add('active')
        content_title.innerHTML = projects_content
        showProjects()
    }
}

showTodos()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsV0FBVyxVQUFVLGlCQUFpQixTQUFTLGFBQWEsU0FBUyxjQUFjLFNBQVMsZUFBZTtBQUNoSjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2plY3RfY2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RvZG9fY2xhc3MuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL0RNU2Fucy1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vRE1TYW5zLUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9pbWcvYmcucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdHtcXHJcXG4gICAgLS1saWdodGJsdWUgOiAjMGExNjNmO1xcclxcbiAgICAtLWRhcmtibHVlIDogIzE0MkI3RTtcXHJcXG4gICAgLS1saWdodGdyZXkgOiAjZjBmMGYwO1xcclxcbn1cXHJcXG4qe1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ3JlZyc7XFxyXFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgfVxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ2JvbGQnO1xcclxcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFye1xcclxcbiAgICB3aWR0aDogMS41cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMzLCAyMzMsIDIzMyk7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2t7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYntcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODg4ODg4O1xcclxcbn1cXHJcXG5cXHJcXG5oMXtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdib2xkJztcXHJcXG4gICAgZm9udC1zaXplOiA3LjVyZW07XFxyXFxufVxcclxcbmgye1xcclxcbiAgICBmb250LWZhbWlseTogJ3JlZyc7XFxyXFxuICAgIGZvbnQtc2l6ZTogNXJlbTtcXHJcXG59XFxyXFxuaDN7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAncmVnJztcXHJcXG4gICAgZm9udC1zaXplOiAzLjVyZW07XFxyXFxufVxcclxcbmg0e1xcclxcbiAgICBmb250LWZhbWlseTogJ3JlZyc7XFxyXFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbn1cXHJcXG5oNXtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdyZWcnO1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxufVxcclxcbnB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBmb250LWZhbWlseTogJ3JlZyc7XFxyXFxufVxcclxcbmh0bWx7XFxyXFxuICAgIGZvbnQtc2l6ZTogNjIuNSU7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcclxcbn1cXHJcXG5idXR0b257XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxufVxcclxcbmJvZHl7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIG1heC13aWR0aDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiAgICAgY292ZXI7ICAgICAgICAgICAgICAgICAgICAgIC8qIDwtLS0tLS0gKi9cXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6ICAgbm8tcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyOyAgIFxcclxcbn1cXHJcXG5cXHJcXG5tYWlue1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdhcDogMTByZW07XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xcclxcbiAgICBwYWRkaW5nOiAwcmVtO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMTVyZW07XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiA1cmVtO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDgwdnc7XFxyXFxuICAgIG1heC13aWR0aDogMTAwJTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmxlZnR7XFxyXFxuICAgIHdpZHRoOiA1MHJlbTtcXHJcXG4gICAgaGVpZ2h0OiA1MHJlbTtcXHJcXG59XFxyXFxuLm5hdmJhcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyLjVyZW0gMi41cmVtIDAgMCA7XFxyXFxufVxcclxcbi5uYXZJdGVte1xcclxcbiAgICBwYWRkaW5nOjFyZW0gMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBjb2xvcjogdmFyKC0tZGFya2JsdWUpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGdyZXkpO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC43cztcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4ubmF2SXRlbTpob3ZlcntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRibHVlKTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG4ubGVmdE5hdntcXHJcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMi41cmVtO1xcclxcbn1cXHJcXG4ucmlnaHROYXZ7XFxyXFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyLjVyZW07XFxyXFxufVxcclxcbi5yaWdodHtcXHJcXG4gICAgd2lkdGg6IDUwcmVtO1xcclxcbiAgICBoZWlnaHQ6IDUwcmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIuNXJlbTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCA1cHggMzBweCA1cHggcmdiYSgwLDAsMCwwLjE1KTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuN3M7XFxyXFxufVxcclxcbi5yaWdodDpob3ZlcntcXHJcXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggNXB4IHJnYmEoMCwwLDAsMC4yNSk7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5jb250ZW50e1xcclxcbiAgICBoZWlnaHQ6IDQycmVtO1xcclxcbiAgICBwYWRkaW5nOiAycmVtO1xcclxcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5tb2RhbHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGhlaWdodDogMTByZW07XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXgtd2lkdGg6IDgwcmVtO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogNTAlO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDVweCAxMHB4IDVweCByZ2JhKDAsMCwwLDAuMTUpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG5mb3Jte1xcclxcbiAgICBtYXgtd2lkdGg6IDUwcmVtO1xcclxcbn1cXHJcXG4ud2hpdGV7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuLmJsYWNre1xcclxcbiAgICBjb2xvcjpibGFjaztcXHJcXG59XFxyXFxuLmFjdGl2ZXtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1kYXJrYmx1ZSk7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuI21vZGFsX3Byb2plY3R7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG59XFxyXFxuXFxyXFxuI21vZGFsX3RvZG97XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLCtEQUFtRDtJQUNuRCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCO0FBQ0o7SUFDSSxtQkFBbUI7SUFDbkIsK0RBQWdEO0lBQ2hELGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEI7O0FBRUo7SUFDSSxhQUFhO0lBQ2Isb0NBQW9DOztBQUV4Qzs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osZUFBZTtBQUNuQjtBQUNBO0lBQ0kseURBQXFDO0lBQ3JDLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZUFBZTtJQUNmLDBCQUEwQix1QkFBdUIsWUFBWTtJQUM3RCw4QkFBOEI7SUFDOUIsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixVQUFVO0lBQ1YsZ0NBQWdDO0lBQ2hDLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsZUFBZTs7QUFFbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCw2QkFBNkI7SUFDN0IsaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGtDQUFrQztJQUNsQyxvQkFBb0I7SUFDcEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksa0NBQWtDO0lBQ2xDLFlBQVk7QUFDaEI7QUFDQTtJQUNJLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksK0JBQStCO0FBQ25DO0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG9DQUFvQztJQUNwQyxxQkFBcUI7SUFDckIsMkNBQTJDO0lBQzNDLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksNENBQTRDO0FBQ2hEOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOzs7QUFHQTtJQUNJLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztJQUNoQyxhQUFhO0lBQ2IsMkNBQTJDO0lBQzNDLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxnQ0FBZ0M7SUFDaEMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290e1xcclxcbiAgICAtLWxpZ2h0Ymx1ZSA6ICMwYTE2M2Y7XFxyXFxuICAgIC0tZGFya2JsdWUgOiAjMTQyQjdFO1xcclxcbiAgICAtLWxpZ2h0Z3JleSA6ICNmMGYwZjA7XFxyXFxufVxcclxcbip7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAncmVnJztcXHJcXG4gICAgc3JjOiB1cmwoJy4vRE1TYW5zLVJlZ3VsYXIudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIH1cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdib2xkJztcXHJcXG4gICAgc3JjOiB1cmwoJy4vRE1TYW5zLUJvbGQudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFye1xcclxcbiAgICB3aWR0aDogMS41cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMzLCAyMzMsIDIzMyk7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2t7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYntcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODg4ODg4O1xcclxcbn1cXHJcXG5cXHJcXG5oMXtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdib2xkJztcXHJcXG4gICAgZm9udC1zaXplOiA3LjVyZW07XFxyXFxufVxcclxcbmgye1xcclxcbiAgICBmb250LWZhbWlseTogJ3JlZyc7XFxyXFxuICAgIGZvbnQtc2l6ZTogNXJlbTtcXHJcXG59XFxyXFxuaDN7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAncmVnJztcXHJcXG4gICAgZm9udC1zaXplOiAzLjVyZW07XFxyXFxufVxcclxcbmg0e1xcclxcbiAgICBmb250LWZhbWlseTogJ3JlZyc7XFxyXFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbn1cXHJcXG5oNXtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdyZWcnO1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxufVxcclxcbnB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBmb250LWZhbWlseTogJ3JlZyc7XFxyXFxufVxcclxcbmh0bWx7XFxyXFxuICAgIGZvbnQtc2l6ZTogNjIuNSU7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcclxcbn1cXHJcXG5idXR0b257XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxufVxcclxcbmJvZHl7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWcvYmcucG5nJyk7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIG1heC13aWR0aDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiAgICAgY292ZXI7ICAgICAgICAgICAgICAgICAgICAgIC8qIDwtLS0tLS0gKi9cXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6ICAgbm8tcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyOyAgIFxcclxcbn1cXHJcXG5cXHJcXG5tYWlue1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdhcDogMTByZW07XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xcclxcbiAgICBwYWRkaW5nOiAwcmVtO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMTVyZW07XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiA1cmVtO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDgwdnc7XFxyXFxuICAgIG1heC13aWR0aDogMTAwJTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmxlZnR7XFxyXFxuICAgIHdpZHRoOiA1MHJlbTtcXHJcXG4gICAgaGVpZ2h0OiA1MHJlbTtcXHJcXG59XFxyXFxuLm5hdmJhcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyLjVyZW0gMi41cmVtIDAgMCA7XFxyXFxufVxcclxcbi5uYXZJdGVte1xcclxcbiAgICBwYWRkaW5nOjFyZW0gMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBjb2xvcjogdmFyKC0tZGFya2JsdWUpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGdyZXkpO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC43cztcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4ubmF2SXRlbTpob3ZlcntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRibHVlKTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG4ubGVmdE5hdntcXHJcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMi41cmVtO1xcclxcbn1cXHJcXG4ucmlnaHROYXZ7XFxyXFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyLjVyZW07XFxyXFxufVxcclxcbi5yaWdodHtcXHJcXG4gICAgd2lkdGg6IDUwcmVtO1xcclxcbiAgICBoZWlnaHQ6IDUwcmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIuNXJlbTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCA1cHggMzBweCA1cHggcmdiYSgwLDAsMCwwLjE1KTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuN3M7XFxyXFxufVxcclxcbi5yaWdodDpob3ZlcntcXHJcXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggNXB4IHJnYmEoMCwwLDAsMC4yNSk7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5jb250ZW50e1xcclxcbiAgICBoZWlnaHQ6IDQycmVtO1xcclxcbiAgICBwYWRkaW5nOiAycmVtO1xcclxcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5tb2RhbHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGhlaWdodDogMTByZW07XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXgtd2lkdGg6IDgwcmVtO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogNTAlO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDVweCAxMHB4IDVweCByZ2JhKDAsMCwwLDAuMTUpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG5mb3Jte1xcclxcbiAgICBtYXgtd2lkdGg6IDUwcmVtO1xcclxcbn1cXHJcXG4ud2hpdGV7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuLmJsYWNre1xcclxcbiAgICBjb2xvcjpibGFjaztcXHJcXG59XFxyXFxuLmFjdGl2ZXtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1kYXJrYmx1ZSk7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuI21vZGFsX3Byb2plY3R7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG59XFxyXFxuXFxyXFxuI21vZGFsX3RvZG97XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNsYXNzIFByb2plY3R7XHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIHRvZG9zKSB7XHJcbiAgICAgICAgdGhpcy50aXRsZT10aXRsZTtcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uPWRlc2NyaXB0aW9uO1xyXG4gICAgICAgIHRoaXMudG9kb3M9dG9kb3M7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydHtQcm9qZWN0fSIsImNsYXNzIFRvZG97XHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSxkZXNjcmlwdGlvbixkdWVEYXRlLHByaW9yaXR5LGNoZWNrbGlzdCl7XHJcbiAgICAgICAgdGhpcy50aXRsZT10aXRsZTtcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uPWRlc2NyaXB0aW9uO1xyXG4gICAgICAgIHRoaXMuZHVlRGF0ZT1kdWVEYXRlO1xyXG4gICAgICAgIHRoaXMucHJpb3JpdHk9cHJpb3JpdHk7XHJcbiAgICAgICAgdGhpcy5jaGVja2xpc3Q9Y2hlY2tsaXN0O1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHtUb2RvfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCB7VG9kb30gZnJvbSAnLi90b2RvX2NsYXNzJztcclxuaW1wb3J0IHtQcm9qZWN0fSBmcm9tICcuL3Byb2plY3RfY2xhc3MnO1xyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcbi8vIFFVRVJZIFNFTEVDVE9SXHJcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpXHJcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xyXG5jb25zdCBoMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZV90ZXh0Jyk7XHJcbmNvbnN0IG5hdmJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXInKTtcclxuY29uc3QgY29udGVudF90aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50X3RpdGxlJyk7XHJcbi8vIGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbGljaycpXHJcbmNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQnKVxyXG5jb25zdCBmb3JtX3Byb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybV9wcm9qZWN0JylcclxuY29uc3QgbW9kYWxfcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbF9wcm9qZWN0JylcclxuY29uc3QgbW9kYWxfdG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbF90b2RvJylcclxuY29uc3QgY29udGVudF9ib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnRfYm9keScpXHJcblxyXG5cclxuY29uc3QgaDFfdG9kbyA9IFwiPGgyPllvdXI8L2gyPlRvZG8gTGlzdFwiO1xyXG5oMS5pbm5lckhUTUwgPSBoMV90b2RvO1xyXG5cclxuY29uc3QgbmF2X21haW4gPSBcIjxidXR0b24gY2xhc3M9J25hdkl0ZW0gYmx1ZSBsZWZ0TmF2IGFjdGl2ZScgaWQ9J3RvZG9zJz5Ub2RvJ3M8L2J1dHRvbj48YnV0dG9uIGNsYXNzPSduYXZJdGVtIHJpZ2h0TmF2JyBpZD0ncHJvamVjdHMnPlByb2plY3QnczwvYnV0dG9uPlwiXHJcbm5hdmJhci5pbm5lckhUTUwgPSBuYXZfbWFpbjtcclxuY29uc3QgbmF2SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZJdGVtJylcclxuY29uc3QgdG9kb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kb3MnKVxyXG5jb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0cycpXHJcblxyXG5uYXZJdGVtLmZvckVhY2gobmF2ID0+e1xyXG4gICAgbmF2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tMaXN0ZW4sIGZhbHNlKVxyXG59KVxyXG5cclxubGV0IGFycmF5X3Byb2plY3QgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6J2hlbGxvJywgXHJcbiAgICAgICAgZGVzY3JpcHRpb246J3Rlc3RpbmcnLFxyXG4gICAgICAgIHRvZG9zOiBbXVxyXG4gICAgIH0sXHJcbiAgICAge1xyXG4gICAgICAgIHRpdGxlOidoYWknLCBcclxuICAgICAgICBkZXNjcmlwdGlvbjondGVzIGxhZ2knLFxyXG4gICAgICAgIHRvZG9zOiBbXVxyXG4gICAgIH1cclxuXVxyXG5sZXQgYXJyYXlfdG9kbyA9IFtcclxuICAgIHtcclxuICAgICAgICB0aXRsZTonaGFpJywgXHJcbiAgICAgICAgZGVzY3JpcHRpb246J3RlcyBsYWdpJyxcclxuICAgICAgICBkdWVEYXRlOiAnMjAgamFudWFyaScsXHJcbiAgICAgICAgcHJpb3JpdHk6ICdnYWsgcGVudGluZycsXHJcbiAgICAgICAgY2hlY2tsaXN0OiAnc3VkYWgnXHJcbiAgICAgfSxcclxuICAgICB7XHJcbiAgICAgICAgdGl0bGU6J3RlcyAyJywgXHJcbiAgICAgICAgZGVzY3JpcHRpb246J3dhZHVoIGxhZ2knLFxyXG4gICAgICAgIGR1ZURhdGU6ICc1MCBqYW51YXJpJyxcclxuICAgICAgICBwcmlvcml0eTogJ3BlbnRpbmcnLFxyXG4gICAgICAgIGNoZWNrbGlzdDogJ2JlbG9tJ1xyXG4gICAgIH0sXHJcbiAgICAge1xyXG4gICAgICAgIHRpdGxlOid0ZXMgMicsIFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOid3YWR1aCBsYWdpJyxcclxuICAgICAgICBkdWVEYXRlOiAnNTAgamFudWFyaScsXHJcbiAgICAgICAgcHJpb3JpdHk6ICdwZW50aW5nJyxcclxuICAgICAgICBjaGVja2xpc3Q6ICdiZWxvbSdcclxuICAgICB9LFxyXG4gICAgIHtcclxuICAgICAgICB0aXRsZTondGVzIDInLCBcclxuICAgICAgICBkZXNjcmlwdGlvbjond2FkdWggbGFnaScsXHJcbiAgICAgICAgZHVlRGF0ZTogJzUwIGphbnVhcmknLFxyXG4gICAgICAgIHByaW9yaXR5OiAncGVudGluZycsXHJcbiAgICAgICAgY2hlY2tsaXN0OiAnYmVsb20nXHJcbiAgICAgfSxcclxuICAgICB7XHJcbiAgICAgICAgdGl0bGU6J3RlcyAyJywgXHJcbiAgICAgICAgZGVzY3JpcHRpb246J3dhZHVoIGxhZ2knLFxyXG4gICAgICAgIGR1ZURhdGU6ICc1MCBqYW51YXJpJyxcclxuICAgICAgICBwcmlvcml0eTogJ3BlbnRpbmcnLFxyXG4gICAgICAgIGNoZWNrbGlzdDogJ2JlbG9tJ1xyXG4gICAgIH0sIFxyXG5dXHJcblxyXG4vLyBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4vLyAgICAgaWYobW9kYWwuc3R5bGUuZGlzcGxheSA9PSAnZmxleCcpe1xyXG4vLyAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuLy8gICAgIH1cclxuLy8gICAgIGVsc2V7XHJcbi8vICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xyXG4vLyAgICAgfVxyXG4vLyB9KVxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkUHJvamVjdFxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGZvcm1fcHJvamVjdFswXS52YWx1ZSAsIGZvcm1fcHJvamVjdFsxXS52YWx1ZSlcclxuICAgICxmYWxzZSk7IFxyXG59LGZhbHNlKTtcclxuXHJcbmZ1bmN0aW9uIGFkZFByb2plY3RIYW5kbGVyKCl7XHJcbiAgICBcclxuICAgIGlmKG1vZGFsX3Byb2plY3QuZGlzcGxheSA9PSAnZmxleCcpe1xyXG4gICAgICAgIG1vZGFsX3Byb2plY3Quc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgbW9kYWxfcHJvamVjdC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXHJcbiAgICB9XHJcbiAgICByZXR1cm4gMDtcclxufVxyXG5mdW5jdGlvbiBhZGRUb2RvSGFuZGxlcigpe1xyXG4gICAgY29uc29sZS5sb2cobW9kYWxfdG9kby5zdHlsZS5kaXNwbGF5KVxyXG4gICAgaWYobW9kYWxfdG9kby5zdHlsZS5kaXNwbGF5ID09ICdmbGV4Jyl7XHJcbiAgICAgICAgbW9kYWxfdG9kby5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBtb2RhbF90b2RvLnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcclxuICAgIH1cclxuICAgIHJldHVybiAwO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRQcm9qZWN0KGUpe1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgdGl0bGUgPSBmb3JtX3Byb2plY3RbMF0udmFsdWVcclxuICAgIGNvbnN0IGRlc2MgPSBmb3JtX3Byb2plY3RbMV0udmFsdWVcclxuICAgIGNvbnN0IGVtcHR5X2FycmF5ID1bXVxyXG4gICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KHRpdGxlLGRlc2MsZW1wdHlfYXJyYXkpXHJcbiAgICBjb25zb2xlLmxvZyhhcnJheV9wcm9qZWN0KVxyXG4gICAgYXJyYXlfcHJvamVjdC5wdXNoKHByb2plY3QpXHJcbn1cclxuZnVuY3Rpb24gYWRkVG9kbyhlKXtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHRpdGxlID0gZm9ybV9wcm9qZWN0WzBdLnZhbHVlXHJcbiAgICBjb25zdCBkZXNjID0gZm9ybV9wcm9qZWN0WzFdLnZhbHVlXHJcbiAgICBjb25zdCBlbXB0eV9hcnJheSA9W11cclxuICAgIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdCh0aXRsZSxkZXNjLGVtcHR5X2FycmF5KVxyXG4gICAgY29uc29sZS5sb2coYXJyYXlfcHJvamVjdClcclxuICAgIGFycmF5X3Byb2plY3QucHVzaChwcm9qZWN0KVxyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93UHJvamVjdHMoKXtcclxuICAgIGNvbnRlbnRfYm9keS5pbm5lckhUTUwgPSBcIlwiXHJcbiAgICBhcnJheV9wcm9qZWN0LmZvckVhY2gocHJvamVjdCA9PntcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBwcm9qZWN0X3RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxyXG4gICAgICAgIHByb2plY3RfdGl0bGUuaW5uZXJUZXh0ID0gcHJvamVjdC50aXRsZVxyXG4gICAgICAgIGNvbnN0IHByb2plY3RfZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgICAgIHByb2plY3RfZGVzYy5pbm5lclRleHQgPSBwcm9qZWN0LmRlc2NyaXB0aW9uXHJcbiAgICAgICAgY29udGVudF9ib2R5LmFwcGVuZENoaWxkKHByb2plY3RfdGl0bGUpXHJcbiAgICAgICAgY29udGVudF9ib2R5LmFwcGVuZENoaWxkKHByb2plY3RfZGVzYylcclxuXHJcbiAgICB9KVxyXG4gICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnQlVUVE9OJylcclxuICAgIGFkZEJ1dHRvbi5pbm5lckhUTUwgPSAnQUREIFBST0pFQ1QnXHJcbiAgICBhZGRCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWRkTmV3JylcclxuICAgIGNvbnRlbnRfYm9keS5hcHBlbmRDaGlsZChhZGRCdXR0b24pXHJcbiAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRQcm9qZWN0SGFuZGxlcilcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd1RvZG9zKCl7XHJcbiAgICBjb250ZW50X2JvZHkuaW5uZXJIVE1MID0gXCJcIlxyXG5cclxuICAgIGFycmF5X3RvZG8uZm9yRWFjaCh0b2RvID0+e1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHRvZG9fYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgdG9kb19ib2R5LmlubmVySFRNTCA9IGA8aDM+JHt0b2RvLnRpdGxlfTwvaDM+PHA+JHt0b2RvLmRlc2NyaXB0aW9ufTwvcD48cD4ke3RvZG8uZHVlRGF0ZX08L3A+PHA+JHt0b2RvLnByaW9yaXR5fTwvcD48cD4ke3RvZG8uY2hlY2tsaXN0fTwvcD5gXHJcbiAgICAgICAgY29udGVudF9ib2R5LmFwcGVuZENoaWxkKHRvZG9fYm9keSlcclxuXHJcbiAgICB9KVxyXG4gICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnQlVUVE9OJylcclxuICAgIGFkZEJ1dHRvbi5pbm5lckhUTUwgPSAnQUREIFRPRE8nXHJcbiAgICBhZGRCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWRkTmV3JylcclxuICAgIGNvbnRlbnRfYm9keS5hcHBlbmRDaGlsZChhZGRCdXR0b24pXHJcblxyXG4gICAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkVG9kb0hhbmRsZXIpXHJcbn1cclxuXHJcbmNvbnN0IHRvZG9zX2NvbnRlbnQgPSBgPGgzPlRoaXMgaXMgeW91ciB0b2RvczwvaDM+YFxyXG5jb25zdCBwcm9qZWN0c19jb250ZW50ID0gIFwiPGgzPlRoaXMgaXMgeW91ciBwcm9qZWN0czwvaDM+XCJcclxuY29udGVudF90aXRsZS5pbm5lckhUTUwgPSB0b2Rvc19jb250ZW50XHJcblxyXG5mdW5jdGlvbiBjbGlja0xpc3RlbihlKXtcclxuICAgIGNvbnNvbGUubG9nKCdiZXJoYXNpbCcpXHJcbiAgICBjb25zdCBidXR0b25fcGF0aCA9IGUucGF0aFswXS5pZFxyXG4gICAgaWYoYnV0dG9uX3BhdGg9PVwidG9kb3NcIil7XHJcbiAgICAgICAgdG9kb3MuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuICAgICAgICBwcm9qZWN0cy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gICAgICAgIGNvbnRlbnRfdGl0bGUuaW5uZXJIVE1MID0gdG9kb3NfY29udGVudFxyXG4gICAgICAgIHNob3dUb2RvcygpXHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKGJ1dHRvbl9wYXRoPT1cInByb2plY3RzXCIpe1xyXG4gICAgICAgIHRvZG9zLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgICAgICAgcHJvamVjdHMuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuICAgICAgICBjb250ZW50X3RpdGxlLmlubmVySFRNTCA9IHByb2plY3RzX2NvbnRlbnRcclxuICAgICAgICBzaG93UHJvamVjdHMoKVxyXG4gICAgfVxyXG59XHJcblxyXG5zaG93VG9kb3MoKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==