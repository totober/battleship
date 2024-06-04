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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    margin: 0;
    padding: 0;
}

:root {
    box-sizing: border-box;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
}

/* /// CLASSES /// */

.blur{

    filter: blur(20px);
    pointer-events: none;
}

#close {

    animation: fade-out 0.7s ease-out;
    display: none;
}

.space {

    padding: var();
    margin: var();

}

.display-flex-col{

    display: flex;
    align-items: center;
}

body{
    background-color: black;
    display: grid;
    /* grid-template-rows: 10% 1fr 5%; */
    grid-template-rows: auto 1fr auto;

}

/* /// HEADER /// */

header {

    display: flex;
    align-items: center;
    justify-content: center;

}

h1 {
    color: white;
}

/* /// MAIN /// */

main {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

article {
    font-weight: 600;
    background-color: #fff;
    border-radius: 5px;
    /* Esto es lo necesario para que el pop-up quede en el medio */
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    /* hasta aca */
    cursor: pointer;
    animation: fade-in 0.7s ease-out;
}


article.mode-selection {

    display: flex;
    flex-direction: column;

    min-width: 25vw;
    outline: none;
}

@keyframes fade-in {
    0% {
      opacity: 0;
      transform: translate(-50%, -50%) scaleY(0);
      display: none;
    }
  
    100% {
      opacity: 1;
      transform: translate(-50%, -50%) scaleY(1);
      display: block;
    }
  }
  
  @keyframes fade-out {
    0% {
      opacity: 1;
      transform: translate(-50%, -50%) scaleY(1);
      display: block;
    }
  
    100% {
      opacity: 0;
      transform: translate(-50%, -50%) scaleY(0);
      display: none;
    }
}


article.mode-selection > :first-child {
    border-bottom: 2px solid black;
}


article section {

    text-align: center;
    padding: 30px;
    margin-block: 0;
    
}

article section p {
    transition: ease-in-out 0.4s;
}

article section:hover p {

    transform: scale(1.15);
}

/* DIALOGS CHIQUITOS */

article.child{

    padding: 30px;

}

article.child div {

    display: flex;
    flex-direction: column;
    gap: 10px;
    border-bottom: 1px solid black;
    padding: 15px;
}

article.CpuMode.child div {
    border-bottom: none;
}

article.child fieldset div {

    flex-direction: row;
}

article.child div.buttons {

    flex-direction: row;
    border-bottom: none;
}

input {
    font-size: 16.5px;
    font-weight: 500;
    padding: 5px 15px;
    border-radius: 50px;
    outline: none;
    border: 1px solid black;
}

button {

    background-color: #fff;
    font-size: 15px;
    font-weight: 500;
    padding: 5px 10px;
    border-radius: 5px;
    margin: auto;
    border: 1px solid black;
    box-shadow: 2px 2px 3px rgb(44, 44, 44);
    transition: ease-in-out 0.3s;
}

button:active {

    transform: scale(0.95);
    box-shadow: 1px 1px 3px rgb(44, 44, 44);
}










section {
    display: grid;
    grid-template-rows: 1fr 20%;
    margin: 15px;
    padding: 15px;

}

.board {
    display: grid;
    grid-template-rows: repeat(10, 1fr);
    grid-template-columns:  repeat(10, 1fr);

    margin: 15px;
    padding: 15px;
}

.board div {
    border: 1px solid white;
    min-width: 30px;
    min-height: 30px;
}

.board div.ship {
    border: 1px solid red;
    background-color: white;

}

.options {
    margin: 15px;
    padding: 15px;
}

.options p {
    color: white;
}

/* /// FOOTER /// */

footer {
    text-align: center;
    color: beige;
}


`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,sBAAsB;IACtB;AACJ;;AAEA,oBAAoB;;AAEpB;;IAEI,kBAAkB;IAClB,oBAAoB;AACxB;;AAEA;;IAEI,iCAAiC;IACjC,aAAa;AACjB;;AAEA;;IAEI,cAAc;IACd,aAAa;;AAEjB;;AAEA;;IAEI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,uBAAuB;IACvB,aAAa;IACb,oCAAoC;IACpC,iCAAiC;;AAErC;;AAEA,mBAAmB;;AAEnB;;IAEI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;;AAE3B;;AAEA;IACI,YAAY;AAChB;;AAEA,iBAAiB;;AAEjB;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,gBAAgB;IAChB,sBAAsB;IACtB,kBAAkB;IAClB,8DAA8D;IAC9D,eAAe;IACf,SAAS;IACT,QAAQ;IACR,gCAAgC;IAChC,cAAc;IACd,eAAe;IACf,gCAAgC;AACpC;;;AAGA;;IAEI,aAAa;IACb,sBAAsB;;IAEtB,eAAe;IACf,aAAa;AACjB;;AAEA;IACI;MACE,UAAU;MACV,0CAA0C;MAC1C,aAAa;IACf;;IAEA;MACE,UAAU;MACV,0CAA0C;MAC1C,cAAc;IAChB;EACF;;EAEA;IACE;MACE,UAAU;MACV,0CAA0C;MAC1C,cAAc;IAChB;;IAEA;MACE,UAAU;MACV,0CAA0C;MAC1C,aAAa;IACf;AACJ;;;AAGA;IACI,8BAA8B;AAClC;;;AAGA;;IAEI,kBAAkB;IAClB,aAAa;IACb,eAAe;;AAEnB;;AAEA;IACI,4BAA4B;AAChC;;AAEA;;IAEI,sBAAsB;AAC1B;;AAEA,sBAAsB;;AAEtB;;IAEI,aAAa;;AAEjB;;AAEA;;IAEI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,8BAA8B;IAC9B,aAAa;AACjB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;;IAEI,mBAAmB;AACvB;;AAEA;;IAEI,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,iBAAiB;IACjB,mBAAmB;IACnB,aAAa;IACb,uBAAuB;AAC3B;;AAEA;;IAEI,sBAAsB;IACtB,eAAe;IACf,gBAAgB;IAChB,iBAAiB;IACjB,kBAAkB;IAClB,YAAY;IACZ,uBAAuB;IACvB,uCAAuC;IACvC,4BAA4B;AAChC;;AAEA;;IAEI,sBAAsB;IACtB,uCAAuC;AAC3C;;;;;;;;;;;AAWA;IACI,aAAa;IACb,2BAA2B;IAC3B,YAAY;IACZ,aAAa;;AAEjB;;AAEA;IACI,aAAa;IACb,mCAAmC;IACnC,uCAAuC;;IAEvC,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,uBAAuB;IACvB,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,qBAAqB;IACrB,uBAAuB;;AAE3B;;AAEA;IACI,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,YAAY;AAChB;;AAEA,mBAAmB;;AAEnB;IACI,kBAAkB;IAClB,YAAY;AAChB","sourcesContent":["* {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n:root {\r\n    box-sizing: border-box;\r\n    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif\r\n}\r\n\r\n/* /// CLASSES /// */\r\n\r\n.blur{\r\n\r\n    filter: blur(20px);\r\n    pointer-events: none;\r\n}\r\n\r\n#close {\r\n\r\n    animation: fade-out 0.7s ease-out;\r\n    display: none;\r\n}\r\n\r\n.space {\r\n\r\n    padding: var();\r\n    margin: var();\r\n\r\n}\r\n\r\n.display-flex-col{\r\n\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\nbody{\r\n    background-color: black;\r\n    display: grid;\r\n    /* grid-template-rows: 10% 1fr 5%; */\r\n    grid-template-rows: auto 1fr auto;\r\n\r\n}\r\n\r\n/* /// HEADER /// */\r\n\r\nheader {\r\n\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n}\r\n\r\nh1 {\r\n    color: white;\r\n}\r\n\r\n/* /// MAIN /// */\r\n\r\nmain {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n}\r\n\r\narticle {\r\n    font-weight: 600;\r\n    background-color: #fff;\r\n    border-radius: 5px;\r\n    /* Esto es lo necesario para que el pop-up quede en el medio */\r\n    position: fixed;\r\n    left: 50%;\r\n    top: 50%;\r\n    transform: translate(-50%, -50%);\r\n    /* hasta aca */\r\n    cursor: pointer;\r\n    animation: fade-in 0.7s ease-out;\r\n}\r\n\r\n\r\narticle.mode-selection {\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n\r\n    min-width: 25vw;\r\n    outline: none;\r\n}\r\n\r\n@keyframes fade-in {\r\n    0% {\r\n      opacity: 0;\r\n      transform: translate(-50%, -50%) scaleY(0);\r\n      display: none;\r\n    }\r\n  \r\n    100% {\r\n      opacity: 1;\r\n      transform: translate(-50%, -50%) scaleY(1);\r\n      display: block;\r\n    }\r\n  }\r\n  \r\n  @keyframes fade-out {\r\n    0% {\r\n      opacity: 1;\r\n      transform: translate(-50%, -50%) scaleY(1);\r\n      display: block;\r\n    }\r\n  \r\n    100% {\r\n      opacity: 0;\r\n      transform: translate(-50%, -50%) scaleY(0);\r\n      display: none;\r\n    }\r\n}\r\n\r\n\r\narticle.mode-selection > :first-child {\r\n    border-bottom: 2px solid black;\r\n}\r\n\r\n\r\narticle section {\r\n\r\n    text-align: center;\r\n    padding: 30px;\r\n    margin-block: 0;\r\n    \r\n}\r\n\r\narticle section p {\r\n    transition: ease-in-out 0.4s;\r\n}\r\n\r\narticle section:hover p {\r\n\r\n    transform: scale(1.15);\r\n}\r\n\r\n/* DIALOGS CHIQUITOS */\r\n\r\narticle.child{\r\n\r\n    padding: 30px;\r\n\r\n}\r\n\r\narticle.child div {\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n    border-bottom: 1px solid black;\r\n    padding: 15px;\r\n}\r\n\r\narticle.CpuMode.child div {\r\n    border-bottom: none;\r\n}\r\n\r\narticle.child fieldset div {\r\n\r\n    flex-direction: row;\r\n}\r\n\r\narticle.child div.buttons {\r\n\r\n    flex-direction: row;\r\n    border-bottom: none;\r\n}\r\n\r\ninput {\r\n    font-size: 16.5px;\r\n    font-weight: 500;\r\n    padding: 5px 15px;\r\n    border-radius: 50px;\r\n    outline: none;\r\n    border: 1px solid black;\r\n}\r\n\r\nbutton {\r\n\r\n    background-color: #fff;\r\n    font-size: 15px;\r\n    font-weight: 500;\r\n    padding: 5px 10px;\r\n    border-radius: 5px;\r\n    margin: auto;\r\n    border: 1px solid black;\r\n    box-shadow: 2px 2px 3px rgb(44, 44, 44);\r\n    transition: ease-in-out 0.3s;\r\n}\r\n\r\nbutton:active {\r\n\r\n    transform: scale(0.95);\r\n    box-shadow: 1px 1px 3px rgb(44, 44, 44);\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nsection {\r\n    display: grid;\r\n    grid-template-rows: 1fr 20%;\r\n    margin: 15px;\r\n    padding: 15px;\r\n\r\n}\r\n\r\n.board {\r\n    display: grid;\r\n    grid-template-rows: repeat(10, 1fr);\r\n    grid-template-columns:  repeat(10, 1fr);\r\n\r\n    margin: 15px;\r\n    padding: 15px;\r\n}\r\n\r\n.board div {\r\n    border: 1px solid white;\r\n    min-width: 30px;\r\n    min-height: 30px;\r\n}\r\n\r\n.board div.ship {\r\n    border: 1px solid red;\r\n    background-color: white;\r\n\r\n}\r\n\r\n.options {\r\n    margin: 15px;\r\n    padding: 15px;\r\n}\r\n\r\n.options p {\r\n    color: white;\r\n}\r\n\r\n/* /// FOOTER /// */\r\n\r\nfooter {\r\n    text-align: center;\r\n    color: beige;\r\n}\r\n\r\n\r\n"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
    return [content].concat([sourceMapping]).join("\n");
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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayShip: () => (/* binding */ displayShip),
/* harmony export */   gameModeData: () => (/* binding */ gameModeData),
/* harmony export */   hitListener: () => (/* binding */ hitListener)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ "./src/storage.js");







function gameModeData(mode){

    let playerOne, playerTwo, difficulty

    if(mode === "PlayerMode") {

        playerOne = new _player__WEBPACK_IMPORTED_MODULE_0__.Player(_dom__WEBPACK_IMPORTED_MODULE_1__.elements.inputsNames[0].value || "Player One")
        playerTwo = new _player__WEBPACK_IMPORTED_MODULE_0__.Player(_dom__WEBPACK_IMPORTED_MODULE_1__.elements.inputsNames[1].value || "Player Two")

        //return [new Player(playerOne), new Player(playerTwo)]
        //game([new Player(playerOne), new Player(playerTwo)])

        //return
    }
    
    else if(mode === "CpuMode") {

        playerOne = new _player__WEBPACK_IMPORTED_MODULE_0__.Player({name: _dom__WEBPACK_IMPORTED_MODULE_1__.elements.inputsNames[2].value || "Player One"})
        playerTwo = new _player__WEBPACK_IMPORTED_MODULE_0__.Player({name: "CPU"})

        _dom__WEBPACK_IMPORTED_MODULE_1__.elements.inputsRadio.forEach(input => {
            if(input.checked) difficulty = input.value
        })

        //return [new Player(playerOne)]
        //game([new Player(playerOne), new Player(playerTwo)], difficulty)

        //return
    }

    (0,_storage__WEBPACK_IMPORTED_MODULE_2__.storeData)(mode, playerOne, playerTwo)

    // TEMPORAL: ESTA FUNCION NO DEBERIA SER LLAMADA ACA:
    //applyGrid()
}

function game(playersArr, difficulty = null){


    let index = 0

    for(let player of playersArr) {

        displayBoard(player, _dom__WEBPACK_IMPORTED_MODULE_1__.elements.boards[index])

        index ++
    }


}

function displayBoard(player, board){



   /*  player.gameBoard.placeShips()
    let ships = player.gameBoard.ships

    ships.forEach(ship => {

        ship.coordinates.forEach(coord => {
            
            let [row, col] = coord

            let quadrant = board.querySelector(`[data-q="${row}-${col}"]`)

            quadrant.classList.add("ship")

        })
   }) */

   //displayShip(player, board)

}



function displayShip(e) {

    let num = Number(e.currentTarget.dataset.board)

    let player = (0,_storage__WEBPACK_IMPORTED_MODULE_2__.retrieveData)()[num]
    let board = _dom__WEBPACK_IMPORTED_MODULE_1__.elements.boards[num]

    board.innerHTML = ""
    ;(0,_dom__WEBPACK_IMPORTED_MODULE_1__.createGrid)(board)

    player.gameBoard.placeShips()

    let ships = player.gameBoard.ships
    ships.forEach(ship => {

        ship.coordinates.forEach(coord => {
            
            let [row, col] = coord

            let quadrant = board.querySelector(`[data-q="${row}-${col}"]`)

            quadrant.classList.add("ship")
        })
   })
}



function displayHit(player) {

    let hits = player.gameBoard.shipHitList

    for(let hit of hits) {

        let [row, col] = hit

        let quadrant = board.querySelector(`[data-q="${row}-${col}"]`)

        quadrant.classList.add("hit")
    }
}



function displayMiss(player) {

    let misses = player.gameBoard.shipWaterList

    for(let miss of misses) {

        let [row, col] = miss

        let quadrant = board.querySelector(`[data-q="${row}-${col}"]`)

        quadrant.classList.add("miss")
    }
}



function identifyQuadrant(e){

    console.log("target", e.target)
    console.log("target", e.target.parentElement.parentElement)

    return [e.target, e.target.parentElement.parentElement]
}



function hitListener(e) {

    let quadrant = e.target
    let player = e.target.parentElement.parentElement.className

    console.log("quadrant", quadrant)
    console.log("player", player)

// aca tendria que tener el player (tal vez guardado en la sesion) y desde ahi,
// ir desplegando la data, segun sea player 1 o 2

    ships.forEach(ship => {

        ship.coordinates.forEach(coord => {
            
            let [row, col] = coord

            let quadrant = board.querySelector(`[data-q="${row}-${col}"]`)

            quadrant.classList.add("ship")

        })
   })


}


/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createGrid: () => (/* binding */ createGrid),
/* harmony export */   elements: () => (/* binding */ elements)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage */ "./src/storage.js");
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./display */ "./src/display.js");








let elements = {

    wrapper: document.querySelector(".wrapper"),
    boards: Array.from(document.querySelectorAll(".board")),
    dialogMode: document.querySelector("article"),
    dialogPlayerMode: document.querySelector("article.PlayerMode"),
    dialogCpuMode: document.querySelector("article.CpuMode"),
    btnCancel: Array.from(document.querySelectorAll("button.cancel")),
    btnOk: Array.from(document.querySelectorAll("button.ok")),
    inputsNames: Array.from(document.querySelectorAll("[name=player-name]")),
    inputsRadio: Array.from(document.querySelectorAll("[name=difficulty]")),
    btnRandomArr: Array.from(document.querySelectorAll("button.random")),

    init() {
        this.addListeners()
    },

    addListeners() {

        window.addEventListener("load", openModeDialog);
        window.addEventListener("load", applyGrid);
        this.dialogChildren().forEach(child => child.addEventListener("click", gameModeSelection));
        this.btnCancel.forEach(btn => btn.addEventListener("click", cancelDialog));
        this.btnOk.forEach(btn => btn.addEventListener("click", approveDialog));
        this.btnRandomArr.forEach(btn => btn.addEventListener("click", _display__WEBPACK_IMPORTED_MODULE_4__.displayShip));
    },

    dialogChildren(){

       return Array.from(this.dialogMode.children) 
    },

}

function createElement(element, className, secondClassName){

    let el = document.createElement(element)
    el.classList.add(className)

    if(secondClassName) el.classList.add(secondClassName)

    return el
}

function createGrid(board){

    let num = 10

    for(let i = 0; i < num; i++) {

        for(let j = 0; j < num; j++) {

            let quadrant = createElement("div", `row-${i}`, `col-${j}`)
            quadrant.setAttribute("data-q", `${i}-${j}`)
            quadrant.addEventListener("click", /* identifyQuadrant */ _display__WEBPACK_IMPORTED_MODULE_4__.hitListener)
            board.appendChild(quadrant) 
        } 
    }
}

function applyGrid() {

    for(let board of elements.boards) {

        //board.innerHTML = ""
        createGrid(board) 
    }
}



function openModeDialog(){

    if(elements.dialogMode.getAttribute("id") === "close") elements.dialogMode.removeAttribute("id")
    if(!elements.wrapper.classList.contains("blur")) elements.wrapper.classList.add("blur")

}

function gameModeSelection(e) {

    elements.dialogMode.setAttribute("id", "close")

    let gameMode = e.currentTarget.className

    let dialog = elements[`dialog${gameMode}`]
    dialog.removeAttribute("id")
}

function cancelDialog(e){

    //if(e.key !== "Escape") return
    e.currentTarget.parentElement.parentElement.setAttribute("id", "close")
    elements.inputsNames.forEach(input => input.value = "")

    openModeDialog()
}

function approveDialog(e) {

    //if(e.key !== "Enter") return
    let mode = e.target.dataset.mode

    /* let [playerOne, playerTwo] =  */;(0,_display__WEBPACK_IMPORTED_MODULE_4__.gameModeData)(mode)
    //game(playerOne, playerTwo)

    e.currentTarget.parentElement.parentElement.setAttribute("id", "close")
    elements.inputsNames.forEach(input => input.value = "")
    elements.wrapper.classList.remove("blur")
}




/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GameBoard: () => (/* binding */ GameBoard)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");




class GameBoard {

    constructor(rowQuantity = 10, columnQuantity = 10){

        this.rowQuantity = rowQuantity,
        this.columnQuantity = columnQuantity,
        this.ships = [],
        this.shipsSunk = [],
        this.waterHitList =  [[], [], [], [], [], [], [], [], [], []],
        this.shipHitList =  [[], [], [], [], [], [], [], [], [], []]   
    }

    setProperties(state){

        this.rowQuantity = state.rowQuantity;
        this.columnQuantity = state.columnQuantity;
        this.ships = state.ships;
        this.shipsSunk = state.shipsSunk;
        this.waterHitList = state.waterHitList;
        this.shipHitList = state.shipHitList
    };

    #createShips(){

        let shipTypes = [{type: "carrier", length: 5}, {type: "battleship", length: 4}, 
                        {type: "destroyer", length: 3}, {type: "submarine", length: 3}, 
                        {type: "patrol boat", length: 2}]
                    
        let shipsQueue = []

        for(let ship of shipTypes){
  
            shipsQueue.push(new _ship__WEBPACK_IMPORTED_MODULE_0__.Ship(ship))            
        }

        return shipsQueue    
    }

    placeShips() {

        let shipsQueue = this.#createShips()
        let adjacencyList = [[], [], [], [], [], [], [], [], [], []]

        while(shipsQueue.length > 0) {


            let randomRow =  Math.floor(Math.random() * 10)
            let randomCol =  Math.floor(Math.random() * 10)
            let vertical =   Math.floor(Math.random() * 2)
    
            let randomRowCopy = randomRow
            let randomColCopy = randomCol 
    
            let ship = shipsQueue.shift()
            this.ships.push(ship)


                for(let i = 0; i < ship.length; i++){

                    if(adjacencyList[randomRowCopy].includes(randomColCopy)){

                        ship.coordinates = []
                        shipsQueue.unshift(ship)
                        this.ships.pop()

                        break
                    }

                    ship.coordinates.push([randomRowCopy, randomColCopy])

                    if(vertical) {

                        if(randomRowCopy < (this.rowQuantity - 1)) {
                
                            randomRowCopy ++
                            continue
                        }
    
                        randomRowCopy = randomRow - (ship.length - (i + 1))

                    } else {

                        if(randomColCopy < (this.columnQuantity - 1)) {
                
                            randomColCopy ++
                            continue
                        }
    
                        randomColCopy = randomCol - (ship.length - (i + 1))
                    }
                }

                if(ship.coordinates.length > 0) this.#encloseShip(ship, adjacencyList)
        }
        
        //return adjacencyList
    }
    
    #encloseShip(ship, adjacencyList){

        for(let coordinate of ship.coordinates) {

            let row = coordinate[0]
            let col = coordinate[1]

            let area = [[row - 1, col], [row - 1, col - 1], [row - 1, col + 1],
                        [row + 1, col], [row + 1, col - 1], [row + 1, col + 1],
                        [row, col], [row, col - 1], [row, col + 1]]

            for(let arr of area) {

                if(arr[0] < 0 || arr[1] < 0 ||
                   arr[0] > (this.rowQuantity - 1) || arr[1] > (this.columnQuantity - 1)) continue

                if(!adjacencyList[arr[0]].includes(arr[1])) adjacencyList[arr[0]].push(arr[1]) 
            }    
        }
    }

    clear() {

        this.shipHitList =  [[], [], [], [], [], [], [], [], [], []]
        this.waterHitList = [[], [], [], [], [], [], [], [], [], []]
        this.ships = []
        this.shipsSunk = []
    }

    receiveAttack(point){
    
        let hitOnTarget = false

        for(let ship of this.ships) {

            for(let coordinate of ship.coordinates){

                if(coordinate[0] === point[0] && coordinate[1] === point[1]) {

                    ship.hit()
                    if(ship.isSunk) this.allShipsSunk(ship)
                    this.shipHitList[point[0]].push(point[1])             
                    hitOnTarget = true

                    break
                }
            }

            if(hitOnTarget) break
        } 

        if(hitOnTarget === false) this.waterHitList[point[0]].push(point[1])
    }

    allShipsSunk(ship) {

        this.shipsSunk.push(ship)

        if(!this.shipsSunk.length === 5) return

        //ACA ALGO HARIA PARA AVISAR QUE ESTAN TODOS UNDIDOS
    }


}



/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Player: () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");




class Player {

    constructor(name){

        this.name = name
        /* this.ships = [{type: "carrier", length: 5}, {type: "battleship", length: 4}, {type: "destroyer", length: 3},
                     {type: "submarine", length: 3}, {type: "patrol boat", length: 2}] */
        this.gameBoard = /* new GameBoard() ||  */new _gameboard__WEBPACK_IMPORTED_MODULE_0__.GameBoard()
    }
}



/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ship: () => (/* binding */ Ship)
/* harmony export */ });


class Ship {

    #hitCounter = 0
    #isSunk = false

    constructor({length, type}){
        this.length = length
        this.type = type
        this.coordinates = []
    }

    setProperties(state) {
        this.length = state.length;
        this.type = state.type;
        this.coordinates = state.coordinates
    }

    hit() {

        this.#hitCounter ++
        this.#sunkCheck()
    }

    #sunkCheck(){
 
        if(this.#hitCounter === this.length) {
            this.#isSunk = true
        }
    }

    get isSunk(){
        return this.#isSunk
    }

}

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   retrieveData: () => (/* binding */ retrieveData),
/* harmony export */   storeData: () => (/* binding */ storeData)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/player.js");





function storeData(mode, playerOne, playerTwo) {

    let state = {
        mode: mode,
        players: [playerOne, playerTwo]
    }

    console.log("STATE", state)
    console.log("PLAYERS", state.players)
    console.log("p1", state.players[0])

    localStorage.setItem("state", JSON.stringify(state)) 
}


function retrieveData() {

   let state = JSON.parse(localStorage.getItem("state"))

   console.log("a ver ahora", state)

   let playerOne  = new _player__WEBPACK_IMPORTED_MODULE_0__.Player(state.players[0].name)
   let playerTwo  = new _player__WEBPACK_IMPORTED_MODULE_0__.Player(state.players[1].name)

   let players = [playerOne, playerTwo]

   let i = 0

   for(let player of players) {

        player.gameBoard.setProperties(state.players[i].gameBoard)

        let j = 0

        for(let ship of player.gameBoard.ships) {

            ship.setProperties(state.players[i].gameBoard.ships[j])

            j++
        }

        i++
   }

   console.log("ARRAY OF PLAYERS", players)
   console.log("inst p1", playerOne )
   console.log("inst p2", playerTwo )

   return players
}

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _src_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/style.css */ "./src/style.css");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom */ "./src/dom.js");






_dom__WEBPACK_IMPORTED_MODULE_4__.elements.init()


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sYUFBYSxPQUFPLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksY0FBYyxPQUFPLGFBQWEsT0FBTyxVQUFVLFlBQVksY0FBYyxPQUFPLEtBQUssVUFBVSxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxRQUFRLE1BQU0sVUFBVSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxNQUFNLEtBQUss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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDcEMrQjtBQUMvQjtBQUNnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDJDQUFNO0FBQzlCLHdCQUF3QiwyQ0FBTTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ3REQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0F5QjtBQUNNO0FBQ007QUFDVjtBQUNHO0FBQzlCO0FBQ0EsMENBQVE7QUFDUiIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kaXNwbGF5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG46cm9vdCB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZm9udC1mYW1pbHk6J1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWZcclxufVxyXG5cclxuLyogLy8vIENMQVNTRVMgLy8vICovXHJcblxyXG4uYmx1cntcclxuXHJcbiAgICBmaWx0ZXI6IGJsdXIoMjBweCk7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuI2Nsb3NlIHtcclxuXHJcbiAgICBhbmltYXRpb246IGZhZGUtb3V0IDAuN3MgZWFzZS1vdXQ7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uc3BhY2Uge1xyXG5cclxuICAgIHBhZGRpbmc6IHZhcigpO1xyXG4gICAgbWFyZ2luOiB2YXIoKTtcclxuXHJcbn1cclxuXHJcbi5kaXNwbGF5LWZsZXgtY29se1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5ib2R5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgLyogZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMCUgMWZyIDUlOyAqL1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xyXG5cclxufVxyXG5cclxuLyogLy8vIEhFQURFUiAvLy8gKi9cclxuXHJcbmhlYWRlciB7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbn1cclxuXHJcbmgxIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLyogLy8vIE1BSU4gLy8vICovXHJcblxyXG5tYWluIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbn1cclxuXHJcbmFydGljbGUge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAvKiBFc3RvIGVzIGxvIG5lY2VzYXJpbyBwYXJhIHF1ZSBlbCBwb3AtdXAgcXVlZGUgZW4gZWwgbWVkaW8gKi9cclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAvKiBoYXN0YSBhY2EgKi9cclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGFuaW1hdGlvbjogZmFkZS1pbiAwLjdzIGVhc2Utb3V0O1xyXG59XHJcblxyXG5cclxuYXJ0aWNsZS5tb2RlLXNlbGVjdGlvbiB7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgbWluLXdpZHRoOiAyNXZ3O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlLWluIHtcclxuICAgIDAlIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGVZKDApO1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgMTAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlWSgxKTtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgZmFkZS1vdXQge1xyXG4gICAgMCUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZVkoMSk7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgMTAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlWSgwKTtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmFydGljbGUubW9kZS1zZWxlY3Rpb24gPiA6Zmlyc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG5cclxuYXJ0aWNsZSBzZWN0aW9uIHtcclxuXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgbWFyZ2luLWJsb2NrOiAwO1xyXG4gICAgXHJcbn1cclxuXHJcbmFydGljbGUgc2VjdGlvbiBwIHtcclxuICAgIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IDAuNHM7XHJcbn1cclxuXHJcbmFydGljbGUgc2VjdGlvbjpob3ZlciBwIHtcclxuXHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xyXG59XHJcblxyXG4vKiBESUFMT0dTIENISVFVSVRPUyAqL1xyXG5cclxuYXJ0aWNsZS5jaGlsZHtcclxuXHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG5cclxufVxyXG5cclxuYXJ0aWNsZS5jaGlsZCBkaXYge1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxufVxyXG5cclxuYXJ0aWNsZS5DcHVNb2RlLmNoaWxkIGRpdiB7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG59XHJcblxyXG5hcnRpY2xlLmNoaWxkIGZpZWxkc2V0IGRpdiB7XHJcblxyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuYXJ0aWNsZS5jaGlsZCBkaXYuYnV0dG9ucyB7XHJcblxyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICAgIGZvbnQtc2l6ZTogMTYuNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuYnV0dG9uIHtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDNweCByZ2IoNDQsIDQ0LCA0NCk7XHJcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAwLjNzO1xyXG59XHJcblxyXG5idXR0b246YWN0aXZlIHtcclxuXHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggcmdiKDQ0LCA0NCwgNDQpO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5zZWN0aW9uIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyMCU7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG5cclxufVxyXG5cclxuLmJvYXJkIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogIHJlcGVhdCgxMCwgMWZyKTtcclxuXHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcblxyXG4uYm9hcmQgZGl2IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgbWluLXdpZHRoOiAzMHB4O1xyXG4gICAgbWluLWhlaWdodDogMzBweDtcclxufVxyXG5cclxuLmJvYXJkIGRpdi5zaGlwIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cclxufVxyXG5cclxuLm9wdGlvbnMge1xyXG4gICAgbWFyZ2luOiAxNXB4O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxufVxyXG5cclxuLm9wdGlvbnMgcCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi8qIC8vLyBGT09URVIgLy8vICovXHJcblxyXG5mb290ZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IGJlaWdlO1xyXG59XHJcblxyXG5cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QjtBQUNKOztBQUVBLG9CQUFvQjs7QUFFcEI7O0lBRUksa0JBQWtCO0lBQ2xCLG9CQUFvQjtBQUN4Qjs7QUFFQTs7SUFFSSxpQ0FBaUM7SUFDakMsYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSxjQUFjO0lBQ2QsYUFBYTs7QUFFakI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLGlDQUFpQzs7QUFFckM7O0FBRUEsbUJBQW1COztBQUVuQjs7SUFFSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1Qjs7QUFFM0I7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBLGlCQUFpQjs7QUFFakI7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsOERBQThEO0lBQzlELGVBQWU7SUFDZixTQUFTO0lBQ1QsUUFBUTtJQUNSLGdDQUFnQztJQUNoQyxjQUFjO0lBQ2QsZUFBZTtJQUNmLGdDQUFnQztBQUNwQzs7O0FBR0E7O0lBRUksYUFBYTtJQUNiLHNCQUFzQjs7SUFFdEIsZUFBZTtJQUNmLGFBQWE7QUFDakI7O0FBRUE7SUFDSTtNQUNFLFVBQVU7TUFDViwwQ0FBMEM7TUFDMUMsYUFBYTtJQUNmOztJQUVBO01BQ0UsVUFBVTtNQUNWLDBDQUEwQztNQUMxQyxjQUFjO0lBQ2hCO0VBQ0Y7O0VBRUE7SUFDRTtNQUNFLFVBQVU7TUFDViwwQ0FBMEM7TUFDMUMsY0FBYztJQUNoQjs7SUFFQTtNQUNFLFVBQVU7TUFDViwwQ0FBMEM7TUFDMUMsYUFBYTtJQUNmO0FBQ0o7OztBQUdBO0lBQ0ksOEJBQThCO0FBQ2xDOzs7QUFHQTs7SUFFSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGVBQWU7O0FBRW5COztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBOztJQUVJLHNCQUFzQjtBQUMxQjs7QUFFQSxzQkFBc0I7O0FBRXRCOztJQUVJLGFBQWE7O0FBRWpCOztBQUVBOztJQUVJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztJQUNULDhCQUE4QjtJQUM5QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBOztJQUVJLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7O0lBRUksc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLHVDQUF1QztJQUN2Qyw0QkFBNEI7QUFDaEM7O0FBRUE7O0lBRUksc0JBQXNCO0lBQ3RCLHVDQUF1QztBQUMzQzs7Ozs7Ozs7Ozs7QUFXQTtJQUNJLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsWUFBWTtJQUNaLGFBQWE7O0FBRWpCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1DQUFtQztJQUNuQyx1Q0FBdUM7O0lBRXZDLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsdUJBQXVCOztBQUUzQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQSxtQkFBbUI7O0FBRW5CO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBmb250LWZhbWlseTonU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZlxcclxcbn1cXHJcXG5cXHJcXG4vKiAvLy8gQ0xBU1NFUyAvLy8gKi9cXHJcXG5cXHJcXG4uYmx1cntcXHJcXG5cXHJcXG4gICAgZmlsdGVyOiBibHVyKDIwcHgpO1xcclxcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI2Nsb3NlIHtcXHJcXG5cXHJcXG4gICAgYW5pbWF0aW9uOiBmYWRlLW91dCAwLjdzIGVhc2Utb3V0O1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uc3BhY2Uge1xcclxcblxcclxcbiAgICBwYWRkaW5nOiB2YXIoKTtcXHJcXG4gICAgbWFyZ2luOiB2YXIoKTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmRpc3BsYXktZmxleC1jb2x7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmJvZHl7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAvKiBncmlkLXRlbXBsYXRlLXJvd3M6IDEwJSAxZnIgNSU7ICovXFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLyogLy8vIEhFQURFUiAvLy8gKi9cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi8qIC8vLyBNQUlOIC8vLyAqL1xcclxcblxcclxcbm1haW4ge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxufVxcclxcblxcclxcbmFydGljbGUge1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIC8qIEVzdG8gZXMgbG8gbmVjZXNhcmlvIHBhcmEgcXVlIGVsIHBvcC11cCBxdWVkZSBlbiBlbCBtZWRpbyAqL1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgdG9wOiA1MCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgICAvKiBoYXN0YSBhY2EgKi9cXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBhbmltYXRpb246IGZhZGUtaW4gMC43cyBlYXNlLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuYXJ0aWNsZS5tb2RlLXNlbGVjdGlvbiB7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFxyXFxuICAgIG1pbi13aWR0aDogMjV2dztcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBmYWRlLWluIHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGVZKDApO1xcclxcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG4gIFxcclxcbiAgICAxMDAlIHtcXHJcXG4gICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlWSgxKTtcXHJcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgXFxyXFxuICBAa2V5ZnJhbWVzIGZhZGUtb3V0IHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGVZKDEpO1xcclxcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB9XFxyXFxuICBcXHJcXG4gICAgMTAwJSB7XFxyXFxuICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZVkoMCk7XFxyXFxuICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5hcnRpY2xlLm1vZGUtc2VsZWN0aW9uID4gOmZpcnN0LWNoaWxkIHtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5hcnRpY2xlIHNlY3Rpb24ge1xcclxcblxcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDMwcHg7XFxyXFxuICAgIG1hcmdpbi1ibG9jazogMDtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbmFydGljbGUgc2VjdGlvbiBwIHtcXHJcXG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgMC40cztcXHJcXG59XFxyXFxuXFxyXFxuYXJ0aWNsZSBzZWN0aW9uOmhvdmVyIHAge1xcclxcblxcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBESUFMT0dTIENISVFVSVRPUyAqL1xcclxcblxcclxcbmFydGljbGUuY2hpbGR7XFxyXFxuXFxyXFxuICAgIHBhZGRpbmc6IDMwcHg7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbmFydGljbGUuY2hpbGQgZGl2IHtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIHBhZGRpbmc6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbmFydGljbGUuQ3B1TW9kZS5jaGlsZCBkaXYge1xcclxcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5hcnRpY2xlLmNoaWxkIGZpZWxkc2V0IGRpdiB7XFxyXFxuXFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxufVxcclxcblxcclxcbmFydGljbGUuY2hpbGQgZGl2LmJ1dHRvbnMge1xcclxcblxcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTYuNXB4O1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAzcHggcmdiKDQ0LCA0NCwgNDQpO1xcclxcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAwLjNzO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b246YWN0aXZlIHtcXHJcXG5cXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXHJcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggcmdiKDQ0LCA0NCwgNDQpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5zZWN0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMjAlO1xcclxcbiAgICBtYXJnaW46IDE1cHg7XFxyXFxuICAgIHBhZGRpbmc6IDE1cHg7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5ib2FyZCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6ICByZXBlYXQoMTAsIDFmcik7XFxyXFxuXFxyXFxuICAgIG1hcmdpbjogMTVweDtcXHJcXG4gICAgcGFkZGluZzogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkIGRpdiB7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcclxcbiAgICBtaW4td2lkdGg6IDMwcHg7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5ib2FyZCBkaXYuc2hpcCB7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5vcHRpb25zIHtcXHJcXG4gICAgbWFyZ2luOiAxNXB4O1xcclxcbiAgICBwYWRkaW5nOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ub3B0aW9ucyBwIHtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAvLy8gRk9PVEVSIC8vLyAqL1xcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6IGJlaWdlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7UGxheWVyfSBmcm9tIFwiLi9wbGF5ZXJcIlxyXG5pbXBvcnQge2VsZW1lbnRzLCBjcmVhdGVHcmlkfSBmcm9tIFwiLi9kb21cIlxyXG5pbXBvcnQge3N0b3JlRGF0YSwgcmV0cmlldmVEYXRhfSBmcm9tIFwiLi9zdG9yYWdlXCJcclxuXHJcbmV4cG9ydCB7Z2FtZU1vZGVEYXRhLCBkaXNwbGF5U2hpcCwgaGl0TGlzdGVuZXJ9XHJcblxyXG5cclxuZnVuY3Rpb24gZ2FtZU1vZGVEYXRhKG1vZGUpe1xyXG5cclxuICAgIGxldCBwbGF5ZXJPbmUsIHBsYXllclR3bywgZGlmZmljdWx0eVxyXG5cclxuICAgIGlmKG1vZGUgPT09IFwiUGxheWVyTW9kZVwiKSB7XHJcblxyXG4gICAgICAgIHBsYXllck9uZSA9IG5ldyBQbGF5ZXIoZWxlbWVudHMuaW5wdXRzTmFtZXNbMF0udmFsdWUgfHwgXCJQbGF5ZXIgT25lXCIpXHJcbiAgICAgICAgcGxheWVyVHdvID0gbmV3IFBsYXllcihlbGVtZW50cy5pbnB1dHNOYW1lc1sxXS52YWx1ZSB8fCBcIlBsYXllciBUd29cIilcclxuXHJcbiAgICAgICAgLy9yZXR1cm4gW25ldyBQbGF5ZXIocGxheWVyT25lKSwgbmV3IFBsYXllcihwbGF5ZXJUd28pXVxyXG4gICAgICAgIC8vZ2FtZShbbmV3IFBsYXllcihwbGF5ZXJPbmUpLCBuZXcgUGxheWVyKHBsYXllclR3byldKVxyXG5cclxuICAgICAgICAvL3JldHVyblxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBlbHNlIGlmKG1vZGUgPT09IFwiQ3B1TW9kZVwiKSB7XHJcblxyXG4gICAgICAgIHBsYXllck9uZSA9IG5ldyBQbGF5ZXIoe25hbWU6IGVsZW1lbnRzLmlucHV0c05hbWVzWzJdLnZhbHVlIHx8IFwiUGxheWVyIE9uZVwifSlcclxuICAgICAgICBwbGF5ZXJUd28gPSBuZXcgUGxheWVyKHtuYW1lOiBcIkNQVVwifSlcclxuXHJcbiAgICAgICAgZWxlbWVudHMuaW5wdXRzUmFkaW8uZm9yRWFjaChpbnB1dCA9PiB7XHJcbiAgICAgICAgICAgIGlmKGlucHV0LmNoZWNrZWQpIGRpZmZpY3VsdHkgPSBpbnB1dC52YWx1ZVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vcmV0dXJuIFtuZXcgUGxheWVyKHBsYXllck9uZSldXHJcbiAgICAgICAgLy9nYW1lKFtuZXcgUGxheWVyKHBsYXllck9uZSksIG5ldyBQbGF5ZXIocGxheWVyVHdvKV0sIGRpZmZpY3VsdHkpXHJcblxyXG4gICAgICAgIC8vcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgc3RvcmVEYXRhKG1vZGUsIHBsYXllck9uZSwgcGxheWVyVHdvKVxyXG5cclxuICAgIC8vIFRFTVBPUkFMOiBFU1RBIEZVTkNJT04gTk8gREVCRVJJQSBTRVIgTExBTUFEQSBBQ0E6XHJcbiAgICAvL2FwcGx5R3JpZCgpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdhbWUocGxheWVyc0FyciwgZGlmZmljdWx0eSA9IG51bGwpe1xyXG5cclxuXHJcbiAgICBsZXQgaW5kZXggPSAwXHJcblxyXG4gICAgZm9yKGxldCBwbGF5ZXIgb2YgcGxheWVyc0Fycikge1xyXG5cclxuICAgICAgICBkaXNwbGF5Qm9hcmQocGxheWVyLCBlbGVtZW50cy5ib2FyZHNbaW5kZXhdKVxyXG5cclxuICAgICAgICBpbmRleCArK1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlCb2FyZChwbGF5ZXIsIGJvYXJkKXtcclxuXHJcblxyXG5cclxuICAgLyogIHBsYXllci5nYW1lQm9hcmQucGxhY2VTaGlwcygpXHJcbiAgICBsZXQgc2hpcHMgPSBwbGF5ZXIuZ2FtZUJvYXJkLnNoaXBzXHJcblxyXG4gICAgc2hpcHMuZm9yRWFjaChzaGlwID0+IHtcclxuXHJcbiAgICAgICAgc2hpcC5jb29yZGluYXRlcy5mb3JFYWNoKGNvb3JkID0+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCBbcm93LCBjb2xdID0gY29vcmRcclxuXHJcbiAgICAgICAgICAgIGxldCBxdWFkcmFudCA9IGJvYXJkLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXE9XCIke3Jvd30tJHtjb2x9XCJdYClcclxuXHJcbiAgICAgICAgICAgIHF1YWRyYW50LmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpXHJcblxyXG4gICAgICAgIH0pXHJcbiAgIH0pICovXHJcblxyXG4gICAvL2Rpc3BsYXlTaGlwKHBsYXllciwgYm9hcmQpXHJcblxyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlTaGlwKGUpIHtcclxuXHJcbiAgICBsZXQgbnVtID0gTnVtYmVyKGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmJvYXJkKVxyXG5cclxuICAgIGxldCBwbGF5ZXIgPSByZXRyaWV2ZURhdGEoKVtudW1dXHJcbiAgICBsZXQgYm9hcmQgPSBlbGVtZW50cy5ib2FyZHNbbnVtXVxyXG5cclxuICAgIGJvYXJkLmlubmVySFRNTCA9IFwiXCJcclxuICAgIGNyZWF0ZUdyaWQoYm9hcmQpXHJcblxyXG4gICAgcGxheWVyLmdhbWVCb2FyZC5wbGFjZVNoaXBzKClcclxuXHJcbiAgICBsZXQgc2hpcHMgPSBwbGF5ZXIuZ2FtZUJvYXJkLnNoaXBzXHJcbiAgICBzaGlwcy5mb3JFYWNoKHNoaXAgPT4ge1xyXG5cclxuICAgICAgICBzaGlwLmNvb3JkaW5hdGVzLmZvckVhY2goY29vcmQgPT4ge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IFtyb3csIGNvbF0gPSBjb29yZFxyXG5cclxuICAgICAgICAgICAgbGV0IHF1YWRyYW50ID0gYm9hcmQucXVlcnlTZWxlY3RvcihgW2RhdGEtcT1cIiR7cm93fS0ke2NvbH1cIl1gKVxyXG5cclxuICAgICAgICAgICAgcXVhZHJhbnQuY2xhc3NMaXN0LmFkZChcInNoaXBcIilcclxuICAgICAgICB9KVxyXG4gICB9KVxyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlIaXQocGxheWVyKSB7XHJcblxyXG4gICAgbGV0IGhpdHMgPSBwbGF5ZXIuZ2FtZUJvYXJkLnNoaXBIaXRMaXN0XHJcblxyXG4gICAgZm9yKGxldCBoaXQgb2YgaGl0cykge1xyXG5cclxuICAgICAgICBsZXQgW3JvdywgY29sXSA9IGhpdFxyXG5cclxuICAgICAgICBsZXQgcXVhZHJhbnQgPSBib2FyZC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1xPVwiJHtyb3d9LSR7Y29sfVwiXWApXHJcblxyXG4gICAgICAgIHF1YWRyYW50LmNsYXNzTGlzdC5hZGQoXCJoaXRcIilcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5TWlzcyhwbGF5ZXIpIHtcclxuXHJcbiAgICBsZXQgbWlzc2VzID0gcGxheWVyLmdhbWVCb2FyZC5zaGlwV2F0ZXJMaXN0XHJcblxyXG4gICAgZm9yKGxldCBtaXNzIG9mIG1pc3Nlcykge1xyXG5cclxuICAgICAgICBsZXQgW3JvdywgY29sXSA9IG1pc3NcclxuXHJcbiAgICAgICAgbGV0IHF1YWRyYW50ID0gYm9hcmQucXVlcnlTZWxlY3RvcihgW2RhdGEtcT1cIiR7cm93fS0ke2NvbH1cIl1gKVxyXG5cclxuICAgICAgICBxdWFkcmFudC5jbGFzc0xpc3QuYWRkKFwibWlzc1wiKVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGlkZW50aWZ5UXVhZHJhbnQoZSl7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJ0YXJnZXRcIiwgZS50YXJnZXQpXHJcbiAgICBjb25zb2xlLmxvZyhcInRhcmdldFwiLCBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQpXHJcblxyXG4gICAgcmV0dXJuIFtlLnRhcmdldCwgZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50XVxyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGhpdExpc3RlbmVyKGUpIHtcclxuXHJcbiAgICBsZXQgcXVhZHJhbnQgPSBlLnRhcmdldFxyXG4gICAgbGV0IHBsYXllciA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc05hbWVcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcInF1YWRyYW50XCIsIHF1YWRyYW50KVxyXG4gICAgY29uc29sZS5sb2coXCJwbGF5ZXJcIiwgcGxheWVyKVxyXG5cclxuLy8gYWNhIHRlbmRyaWEgcXVlIHRlbmVyIGVsIHBsYXllciAodGFsIHZleiBndWFyZGFkbyBlbiBsYSBzZXNpb24pIHkgZGVzZGUgYWhpLFxyXG4vLyBpciBkZXNwbGVnYW5kbyBsYSBkYXRhLCBzZWd1biBzZWEgcGxheWVyIDEgbyAyXHJcblxyXG4gICAgc2hpcHMuZm9yRWFjaChzaGlwID0+IHtcclxuXHJcbiAgICAgICAgc2hpcC5jb29yZGluYXRlcy5mb3JFYWNoKGNvb3JkID0+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCBbcm93LCBjb2xdID0gY29vcmRcclxuXHJcbiAgICAgICAgICAgIGxldCBxdWFkcmFudCA9IGJvYXJkLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXE9XCIke3Jvd30tJHtjb2x9XCJdYClcclxuXHJcbiAgICAgICAgICAgIHF1YWRyYW50LmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpXHJcblxyXG4gICAgICAgIH0pXHJcbiAgIH0pXHJcblxyXG5cclxufVxyXG4iLCJpbXBvcnQge1BsYXllcn0gZnJvbSBcIi4vcGxheWVyXCJcclxuaW1wb3J0IHtHYW1lQm9hcmR9IGZyb20gXCIuL2dhbWVib2FyZFwiXHJcbmltcG9ydCB7U2hpcH0gZnJvbSBcIi4vc2hpcFwiXHJcbmltcG9ydCB7c3RvcmVEYXRhLCByZXRyaWV2ZURhdGF9IGZyb20gXCIuL3N0b3JhZ2VcIlxyXG5pbXBvcnQge2dhbWVNb2RlRGF0YSwgZGlzcGxheVNoaXAsIGhpdExpc3RlbmVyfSBmcm9tIFwiLi9kaXNwbGF5XCJcclxuXHJcbmV4cG9ydCB7ZWxlbWVudHMsIGNyZWF0ZUdyaWR9XHJcblxyXG5sZXQgZWxlbWVudHMgPSB7XHJcblxyXG4gICAgd3JhcHBlcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53cmFwcGVyXCIpLFxyXG4gICAgYm9hcmRzOiBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYm9hcmRcIikpLFxyXG4gICAgZGlhbG9nTW9kZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImFydGljbGVcIiksXHJcbiAgICBkaWFsb2dQbGF5ZXJNb2RlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYXJ0aWNsZS5QbGF5ZXJNb2RlXCIpLFxyXG4gICAgZGlhbG9nQ3B1TW9kZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImFydGljbGUuQ3B1TW9kZVwiKSxcclxuICAgIGJ0bkNhbmNlbDogQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uLmNhbmNlbFwiKSksXHJcbiAgICBidG5PazogQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uLm9rXCIpKSxcclxuICAgIGlucHV0c05hbWVzOiBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbmFtZT1wbGF5ZXItbmFtZV1cIikpLFxyXG4gICAgaW5wdXRzUmFkaW86IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltuYW1lPWRpZmZpY3VsdHldXCIpKSxcclxuICAgIGJ0blJhbmRvbUFycjogQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uLnJhbmRvbVwiKSksXHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpXHJcbiAgICB9LFxyXG5cclxuICAgIGFkZExpc3RlbmVycygpIHtcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIG9wZW5Nb2RlRGlhbG9nKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgYXBwbHlHcmlkKTtcclxuICAgICAgICB0aGlzLmRpYWxvZ0NoaWxkcmVuKCkuZm9yRWFjaChjaGlsZCA9PiBjaGlsZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ2FtZU1vZGVTZWxlY3Rpb24pKTtcclxuICAgICAgICB0aGlzLmJ0bkNhbmNlbC5mb3JFYWNoKGJ0biA9PiBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNhbmNlbERpYWxvZykpO1xyXG4gICAgICAgIHRoaXMuYnRuT2suZm9yRWFjaChidG4gPT4gYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhcHByb3ZlRGlhbG9nKSk7XHJcbiAgICAgICAgdGhpcy5idG5SYW5kb21BcnIuZm9yRWFjaChidG4gPT4gYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkaXNwbGF5U2hpcCkpO1xyXG4gICAgfSxcclxuXHJcbiAgICBkaWFsb2dDaGlsZHJlbigpe1xyXG5cclxuICAgICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuZGlhbG9nTW9kZS5jaGlsZHJlbikgXHJcbiAgICB9LFxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudChlbGVtZW50LCBjbGFzc05hbWUsIHNlY29uZENsYXNzTmFtZSl7XHJcblxyXG4gICAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KVxyXG4gICAgZWwuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpXHJcblxyXG4gICAgaWYoc2Vjb25kQ2xhc3NOYW1lKSBlbC5jbGFzc0xpc3QuYWRkKHNlY29uZENsYXNzTmFtZSlcclxuXHJcbiAgICByZXR1cm4gZWxcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlR3JpZChib2FyZCl7XHJcblxyXG4gICAgbGV0IG51bSA9IDEwXHJcblxyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IG51bTsgaSsrKSB7XHJcblxyXG4gICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCBudW07IGorKykge1xyXG5cclxuICAgICAgICAgICAgbGV0IHF1YWRyYW50ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBgcm93LSR7aX1gLCBgY29sLSR7an1gKVxyXG4gICAgICAgICAgICBxdWFkcmFudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXFcIiwgYCR7aX0tJHtqfWApXHJcbiAgICAgICAgICAgIHF1YWRyYW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAvKiBpZGVudGlmeVF1YWRyYW50ICovIGhpdExpc3RlbmVyKVxyXG4gICAgICAgICAgICBib2FyZC5hcHBlbmRDaGlsZChxdWFkcmFudCkgXHJcbiAgICAgICAgfSBcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlHcmlkKCkge1xyXG5cclxuICAgIGZvcihsZXQgYm9hcmQgb2YgZWxlbWVudHMuYm9hcmRzKSB7XHJcblxyXG4gICAgICAgIC8vYm9hcmQuaW5uZXJIVE1MID0gXCJcIlxyXG4gICAgICAgIGNyZWF0ZUdyaWQoYm9hcmQpIFxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIG9wZW5Nb2RlRGlhbG9nKCl7XHJcblxyXG4gICAgaWYoZWxlbWVudHMuZGlhbG9nTW9kZS5nZXRBdHRyaWJ1dGUoXCJpZFwiKSA9PT0gXCJjbG9zZVwiKSBlbGVtZW50cy5kaWFsb2dNb2RlLnJlbW92ZUF0dHJpYnV0ZShcImlkXCIpXHJcbiAgICBpZighZWxlbWVudHMud3JhcHBlci5jbGFzc0xpc3QuY29udGFpbnMoXCJibHVyXCIpKSBlbGVtZW50cy53cmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJibHVyXCIpXHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBnYW1lTW9kZVNlbGVjdGlvbihlKSB7XHJcblxyXG4gICAgZWxlbWVudHMuZGlhbG9nTW9kZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNsb3NlXCIpXHJcblxyXG4gICAgbGV0IGdhbWVNb2RlID0gZS5jdXJyZW50VGFyZ2V0LmNsYXNzTmFtZVxyXG5cclxuICAgIGxldCBkaWFsb2cgPSBlbGVtZW50c1tgZGlhbG9nJHtnYW1lTW9kZX1gXVxyXG4gICAgZGlhbG9nLnJlbW92ZUF0dHJpYnV0ZShcImlkXCIpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNhbmNlbERpYWxvZyhlKXtcclxuXHJcbiAgICAvL2lmKGUua2V5ICE9PSBcIkVzY2FwZVwiKSByZXR1cm5cclxuICAgIGUuY3VycmVudFRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjbG9zZVwiKVxyXG4gICAgZWxlbWVudHMuaW5wdXRzTmFtZXMuZm9yRWFjaChpbnB1dCA9PiBpbnB1dC52YWx1ZSA9IFwiXCIpXHJcblxyXG4gICAgb3Blbk1vZGVEaWFsb2coKVxyXG59XHJcblxyXG5mdW5jdGlvbiBhcHByb3ZlRGlhbG9nKGUpIHtcclxuXHJcbiAgICAvL2lmKGUua2V5ICE9PSBcIkVudGVyXCIpIHJldHVyblxyXG4gICAgbGV0IG1vZGUgPSBlLnRhcmdldC5kYXRhc2V0Lm1vZGVcclxuXHJcbiAgICAvKiBsZXQgW3BsYXllck9uZSwgcGxheWVyVHdvXSA9ICAqL2dhbWVNb2RlRGF0YShtb2RlKVxyXG4gICAgLy9nYW1lKHBsYXllck9uZSwgcGxheWVyVHdvKVxyXG5cclxuICAgIGUuY3VycmVudFRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjbG9zZVwiKVxyXG4gICAgZWxlbWVudHMuaW5wdXRzTmFtZXMuZm9yRWFjaChpbnB1dCA9PiBpbnB1dC52YWx1ZSA9IFwiXCIpXHJcbiAgICBlbGVtZW50cy53cmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJibHVyXCIpXHJcbn1cclxuXHJcblxyXG4iLCJpbXBvcnQge1NoaXB9IGZyb20gXCIuL3NoaXBcIlxyXG5cclxuZXhwb3J0IHtHYW1lQm9hcmR9XHJcblxyXG5jbGFzcyBHYW1lQm9hcmQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHJvd1F1YW50aXR5ID0gMTAsIGNvbHVtblF1YW50aXR5ID0gMTApe1xyXG5cclxuICAgICAgICB0aGlzLnJvd1F1YW50aXR5ID0gcm93UXVhbnRpdHksXHJcbiAgICAgICAgdGhpcy5jb2x1bW5RdWFudGl0eSA9IGNvbHVtblF1YW50aXR5LFxyXG4gICAgICAgIHRoaXMuc2hpcHMgPSBbXSxcclxuICAgICAgICB0aGlzLnNoaXBzU3VuayA9IFtdLFxyXG4gICAgICAgIHRoaXMud2F0ZXJIaXRMaXN0ID0gIFtbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXV0sXHJcbiAgICAgICAgdGhpcy5zaGlwSGl0TGlzdCA9ICBbW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW11dICAgXHJcbiAgICB9XHJcblxyXG4gICAgc2V0UHJvcGVydGllcyhzdGF0ZSl7XHJcblxyXG4gICAgICAgIHRoaXMucm93UXVhbnRpdHkgPSBzdGF0ZS5yb3dRdWFudGl0eTtcclxuICAgICAgICB0aGlzLmNvbHVtblF1YW50aXR5ID0gc3RhdGUuY29sdW1uUXVhbnRpdHk7XHJcbiAgICAgICAgdGhpcy5zaGlwcyA9IHN0YXRlLnNoaXBzO1xyXG4gICAgICAgIHRoaXMuc2hpcHNTdW5rID0gc3RhdGUuc2hpcHNTdW5rO1xyXG4gICAgICAgIHRoaXMud2F0ZXJIaXRMaXN0ID0gc3RhdGUud2F0ZXJIaXRMaXN0O1xyXG4gICAgICAgIHRoaXMuc2hpcEhpdExpc3QgPSBzdGF0ZS5zaGlwSGl0TGlzdFxyXG4gICAgfTtcclxuXHJcbiAgICAjY3JlYXRlU2hpcHMoKXtcclxuXHJcbiAgICAgICAgbGV0IHNoaXBUeXBlcyA9IFt7dHlwZTogXCJjYXJyaWVyXCIsIGxlbmd0aDogNX0sIHt0eXBlOiBcImJhdHRsZXNoaXBcIiwgbGVuZ3RoOiA0fSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0eXBlOiBcImRlc3Ryb3llclwiLCBsZW5ndGg6IDN9LCB7dHlwZTogXCJzdWJtYXJpbmVcIiwgbGVuZ3RoOiAzfSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0eXBlOiBcInBhdHJvbCBib2F0XCIsIGxlbmd0aDogMn1dXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgbGV0IHNoaXBzUXVldWUgPSBbXVxyXG5cclxuICAgICAgICBmb3IobGV0IHNoaXAgb2Ygc2hpcFR5cGVzKXtcclxuICBcclxuICAgICAgICAgICAgc2hpcHNRdWV1ZS5wdXNoKG5ldyBTaGlwKHNoaXApKSAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHNoaXBzUXVldWUgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcGxhY2VTaGlwcygpIHtcclxuXHJcbiAgICAgICAgbGV0IHNoaXBzUXVldWUgPSB0aGlzLiNjcmVhdGVTaGlwcygpXHJcbiAgICAgICAgbGV0IGFkamFjZW5jeUxpc3QgPSBbW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW11dXHJcblxyXG4gICAgICAgIHdoaWxlKHNoaXBzUXVldWUubGVuZ3RoID4gMCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgIGxldCByYW5kb21Sb3cgPSAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXHJcbiAgICAgICAgICAgIGxldCByYW5kb21Db2wgPSAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXHJcbiAgICAgICAgICAgIGxldCB2ZXJ0aWNhbCA9ICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMilcclxuICAgIFxyXG4gICAgICAgICAgICBsZXQgcmFuZG9tUm93Q29weSA9IHJhbmRvbVJvd1xyXG4gICAgICAgICAgICBsZXQgcmFuZG9tQ29sQ29weSA9IHJhbmRvbUNvbCBcclxuICAgIFxyXG4gICAgICAgICAgICBsZXQgc2hpcCA9IHNoaXBzUXVldWUuc2hpZnQoKVxyXG4gICAgICAgICAgICB0aGlzLnNoaXBzLnB1c2goc2hpcClcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZihhZGphY2VuY3lMaXN0W3JhbmRvbVJvd0NvcHldLmluY2x1ZGVzKHJhbmRvbUNvbENvcHkpKXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXAuY29vcmRpbmF0ZXMgPSBbXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwc1F1ZXVlLnVuc2hpZnQoc2hpcClcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGlwcy5wb3AoKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNoaXAuY29vcmRpbmF0ZXMucHVzaChbcmFuZG9tUm93Q29weSwgcmFuZG9tQ29sQ29weV0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHZlcnRpY2FsKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyYW5kb21Sb3dDb3B5IDwgKHRoaXMucm93UXVhbnRpdHkgLSAxKSkge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYW5kb21Sb3dDb3B5ICsrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmFuZG9tUm93Q29weSA9IHJhbmRvbVJvdyAtIChzaGlwLmxlbmd0aCAtIChpICsgMSkpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyYW5kb21Db2xDb3B5IDwgKHRoaXMuY29sdW1uUXVhbnRpdHkgLSAxKSkge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYW5kb21Db2xDb3B5ICsrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmFuZG9tQ29sQ29weSA9IHJhbmRvbUNvbCAtIChzaGlwLmxlbmd0aCAtIChpICsgMSkpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKHNoaXAuY29vcmRpbmF0ZXMubGVuZ3RoID4gMCkgdGhpcy4jZW5jbG9zZVNoaXAoc2hpcCwgYWRqYWNlbmN5TGlzdClcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9yZXR1cm4gYWRqYWNlbmN5TGlzdFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAjZW5jbG9zZVNoaXAoc2hpcCwgYWRqYWNlbmN5TGlzdCl7XHJcblxyXG4gICAgICAgIGZvcihsZXQgY29vcmRpbmF0ZSBvZiBzaGlwLmNvb3JkaW5hdGVzKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgcm93ID0gY29vcmRpbmF0ZVswXVxyXG4gICAgICAgICAgICBsZXQgY29sID0gY29vcmRpbmF0ZVsxXVxyXG5cclxuICAgICAgICAgICAgbGV0IGFyZWEgPSBbW3JvdyAtIDEsIGNvbF0sIFtyb3cgLSAxLCBjb2wgLSAxXSwgW3JvdyAtIDEsIGNvbCArIDFdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbcm93ICsgMSwgY29sXSwgW3JvdyArIDEsIGNvbCAtIDFdLCBbcm93ICsgMSwgY29sICsgMV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtyb3csIGNvbF0sIFtyb3csIGNvbCAtIDFdLCBbcm93LCBjb2wgKyAxXV1cclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgYXJyIG9mIGFyZWEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihhcnJbMF0gPCAwIHx8IGFyclsxXSA8IDAgfHxcclxuICAgICAgICAgICAgICAgICAgIGFyclswXSA+ICh0aGlzLnJvd1F1YW50aXR5IC0gMSkgfHwgYXJyWzFdID4gKHRoaXMuY29sdW1uUXVhbnRpdHkgLSAxKSkgY29udGludWVcclxuXHJcbiAgICAgICAgICAgICAgICBpZighYWRqYWNlbmN5TGlzdFthcnJbMF1dLmluY2x1ZGVzKGFyclsxXSkpIGFkamFjZW5jeUxpc3RbYXJyWzBdXS5wdXNoKGFyclsxXSkgXHJcbiAgICAgICAgICAgIH0gICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyKCkge1xyXG5cclxuICAgICAgICB0aGlzLnNoaXBIaXRMaXN0ID0gIFtbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXV1cclxuICAgICAgICB0aGlzLndhdGVySGl0TGlzdCA9IFtbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXV1cclxuICAgICAgICB0aGlzLnNoaXBzID0gW11cclxuICAgICAgICB0aGlzLnNoaXBzU3VuayA9IFtdXHJcbiAgICB9XHJcblxyXG4gICAgcmVjZWl2ZUF0dGFjayhwb2ludCl7XHJcbiAgICBcclxuICAgICAgICBsZXQgaGl0T25UYXJnZXQgPSBmYWxzZVxyXG5cclxuICAgICAgICBmb3IobGV0IHNoaXAgb2YgdGhpcy5zaGlwcykge1xyXG5cclxuICAgICAgICAgICAgZm9yKGxldCBjb29yZGluYXRlIG9mIHNoaXAuY29vcmRpbmF0ZXMpe1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKGNvb3JkaW5hdGVbMF0gPT09IHBvaW50WzBdICYmIGNvb3JkaW5hdGVbMV0gPT09IHBvaW50WzFdKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNoaXAuaGl0KClcclxuICAgICAgICAgICAgICAgICAgICBpZihzaGlwLmlzU3VuaykgdGhpcy5hbGxTaGlwc1N1bmsoc2hpcClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNoaXBIaXRMaXN0W3BvaW50WzBdXS5wdXNoKHBvaW50WzFdKSAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBoaXRPblRhcmdldCA9IHRydWVcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoaGl0T25UYXJnZXQpIGJyZWFrXHJcbiAgICAgICAgfSBcclxuXHJcbiAgICAgICAgaWYoaGl0T25UYXJnZXQgPT09IGZhbHNlKSB0aGlzLndhdGVySGl0TGlzdFtwb2ludFswXV0ucHVzaChwb2ludFsxXSlcclxuICAgIH1cclxuXHJcbiAgICBhbGxTaGlwc1N1bmsoc2hpcCkge1xyXG5cclxuICAgICAgICB0aGlzLnNoaXBzU3Vuay5wdXNoKHNoaXApXHJcblxyXG4gICAgICAgIGlmKCF0aGlzLnNoaXBzU3Vuay5sZW5ndGggPT09IDUpIHJldHVyblxyXG5cclxuICAgICAgICAvL0FDQSBBTEdPIEhBUklBIFBBUkEgQVZJU0FSIFFVRSBFU1RBTiBUT0RPUyBVTkRJRE9TXHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuIiwiaW1wb3J0IHtHYW1lQm9hcmR9IGZyb20gXCIuL2dhbWVib2FyZFwiXHJcblxyXG5leHBvcnQge1BsYXllcn1cclxuXHJcbmNsYXNzIFBsYXllciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IobmFtZSl7XHJcblxyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWVcclxuICAgICAgICAvKiB0aGlzLnNoaXBzID0gW3t0eXBlOiBcImNhcnJpZXJcIiwgbGVuZ3RoOiA1fSwge3R5cGU6IFwiYmF0dGxlc2hpcFwiLCBsZW5ndGg6IDR9LCB7dHlwZTogXCJkZXN0cm95ZXJcIiwgbGVuZ3RoOiAzfSxcclxuICAgICAgICAgICAgICAgICAgICAge3R5cGU6IFwic3VibWFyaW5lXCIsIGxlbmd0aDogM30sIHt0eXBlOiBcInBhdHJvbCBib2F0XCIsIGxlbmd0aDogMn1dICovXHJcbiAgICAgICAgdGhpcy5nYW1lQm9hcmQgPSAvKiBuZXcgR2FtZUJvYXJkKCkgfHwgICovbmV3IEdhbWVCb2FyZCgpXHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImV4cG9ydCB7U2hpcH1cclxuXHJcbmNsYXNzIFNoaXAge1xyXG5cclxuICAgICNoaXRDb3VudGVyID0gMFxyXG4gICAgI2lzU3VuayA9IGZhbHNlXHJcblxyXG4gICAgY29uc3RydWN0b3Ioe2xlbmd0aCwgdHlwZX0pe1xyXG4gICAgICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoXHJcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZVxyXG4gICAgICAgIHRoaXMuY29vcmRpbmF0ZXMgPSBbXVxyXG4gICAgfVxyXG5cclxuICAgIHNldFByb3BlcnRpZXMoc3RhdGUpIHtcclxuICAgICAgICB0aGlzLmxlbmd0aCA9IHN0YXRlLmxlbmd0aDtcclxuICAgICAgICB0aGlzLnR5cGUgPSBzdGF0ZS50eXBlO1xyXG4gICAgICAgIHRoaXMuY29vcmRpbmF0ZXMgPSBzdGF0ZS5jb29yZGluYXRlc1xyXG4gICAgfVxyXG5cclxuICAgIGhpdCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy4jaGl0Q291bnRlciArK1xyXG4gICAgICAgIHRoaXMuI3N1bmtDaGVjaygpXHJcbiAgICB9XHJcblxyXG4gICAgI3N1bmtDaGVjaygpe1xyXG4gXHJcbiAgICAgICAgaWYodGhpcy4jaGl0Q291bnRlciA9PT0gdGhpcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy4jaXNTdW5rID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXQgaXNTdW5rKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuI2lzU3Vua1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7UGxheWVyfSBmcm9tIFwiLi9wbGF5ZXJcIlxyXG5cclxuZXhwb3J0IHtzdG9yZURhdGEsIHJldHJpZXZlRGF0YX1cclxuXHJcblxyXG5mdW5jdGlvbiBzdG9yZURhdGEobW9kZSwgcGxheWVyT25lLCBwbGF5ZXJUd28pIHtcclxuXHJcbiAgICBsZXQgc3RhdGUgPSB7XHJcbiAgICAgICAgbW9kZTogbW9kZSxcclxuICAgICAgICBwbGF5ZXJzOiBbcGxheWVyT25lLCBwbGF5ZXJUd29dXHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJTVEFURVwiLCBzdGF0ZSlcclxuICAgIGNvbnNvbGUubG9nKFwiUExBWUVSU1wiLCBzdGF0ZS5wbGF5ZXJzKVxyXG4gICAgY29uc29sZS5sb2coXCJwMVwiLCBzdGF0ZS5wbGF5ZXJzWzBdKVxyXG5cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic3RhdGVcIiwgSlNPTi5zdHJpbmdpZnkoc3RhdGUpKSBcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHJldHJpZXZlRGF0YSgpIHtcclxuXHJcbiAgIGxldCBzdGF0ZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzdGF0ZVwiKSlcclxuXHJcbiAgIGNvbnNvbGUubG9nKFwiYSB2ZXIgYWhvcmFcIiwgc3RhdGUpXHJcblxyXG4gICBsZXQgcGxheWVyT25lICA9IG5ldyBQbGF5ZXIoc3RhdGUucGxheWVyc1swXS5uYW1lKVxyXG4gICBsZXQgcGxheWVyVHdvICA9IG5ldyBQbGF5ZXIoc3RhdGUucGxheWVyc1sxXS5uYW1lKVxyXG5cclxuICAgbGV0IHBsYXllcnMgPSBbcGxheWVyT25lLCBwbGF5ZXJUd29dXHJcblxyXG4gICBsZXQgaSA9IDBcclxuXHJcbiAgIGZvcihsZXQgcGxheWVyIG9mIHBsYXllcnMpIHtcclxuXHJcbiAgICAgICAgcGxheWVyLmdhbWVCb2FyZC5zZXRQcm9wZXJ0aWVzKHN0YXRlLnBsYXllcnNbaV0uZ2FtZUJvYXJkKVxyXG5cclxuICAgICAgICBsZXQgaiA9IDBcclxuXHJcbiAgICAgICAgZm9yKGxldCBzaGlwIG9mIHBsYXllci5nYW1lQm9hcmQuc2hpcHMpIHtcclxuXHJcbiAgICAgICAgICAgIHNoaXAuc2V0UHJvcGVydGllcyhzdGF0ZS5wbGF5ZXJzW2ldLmdhbWVCb2FyZC5zaGlwc1tqXSlcclxuXHJcbiAgICAgICAgICAgIGorK1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaSsrXHJcbiAgIH1cclxuXHJcbiAgIGNvbnNvbGUubG9nKFwiQVJSQVkgT0YgUExBWUVSU1wiLCBwbGF5ZXJzKVxyXG4gICBjb25zb2xlLmxvZyhcImluc3QgcDFcIiwgcGxheWVyT25lIClcclxuICAgY29uc29sZS5sb2coXCJpbnN0IHAyXCIsIHBsYXllclR3byApXHJcblxyXG4gICByZXR1cm4gcGxheWVyc1xyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi4vc3JjL3N0eWxlLmNzc1wiXHJcbmltcG9ydCB7UGxheWVyfSBmcm9tIFwiLi9wbGF5ZXJcIlxyXG5pbXBvcnQge0dhbWVCb2FyZH0gZnJvbSBcIi4vZ2FtZWJvYXJkXCJcclxuaW1wb3J0IHtTaGlwfSBmcm9tIFwiLi9zaGlwXCJcclxuaW1wb3J0IHtlbGVtZW50c30gZnJvbSBcIi4vZG9tXCJcclxuXHJcbmVsZW1lbnRzLmluaXQoKVxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9