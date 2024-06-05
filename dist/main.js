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

.board div.hit {
    border: 1px solid red;
    background-color: red;

}

.board div.miss {
    border: 1px solid blue;
    background-color: lightblue;

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


`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,sBAAsB;IACtB;AACJ;;AAEA,oBAAoB;;AAEpB;;IAEI,kBAAkB;IAClB,oBAAoB;AACxB;;AAEA;;IAEI,iCAAiC;IACjC,aAAa;AACjB;;AAEA;;IAEI,cAAc;IACd,aAAa;;AAEjB;;AAEA;;IAEI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,uBAAuB;IACvB,aAAa;IACb,oCAAoC;IACpC,iCAAiC;;AAErC;;AAEA,mBAAmB;;AAEnB;;IAEI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;;AAE3B;;AAEA;IACI,YAAY;AAChB;;AAEA,iBAAiB;;AAEjB;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,gBAAgB;IAChB,sBAAsB;IACtB,kBAAkB;IAClB,8DAA8D;IAC9D,eAAe;IACf,SAAS;IACT,QAAQ;IACR,gCAAgC;IAChC,cAAc;IACd,eAAe;IACf,gCAAgC;AACpC;;;AAGA;;IAEI,aAAa;IACb,sBAAsB;;IAEtB,eAAe;IACf,aAAa;AACjB;;AAEA;IACI;MACE,UAAU;MACV,0CAA0C;MAC1C,aAAa;IACf;;IAEA;MACE,UAAU;MACV,0CAA0C;MAC1C,cAAc;IAChB;EACF;;EAEA;IACE;MACE,UAAU;MACV,0CAA0C;MAC1C,cAAc;IAChB;;IAEA;MACE,UAAU;MACV,0CAA0C;MAC1C,aAAa;IACf;AACJ;;;AAGA;IACI,8BAA8B;AAClC;;;AAGA;;IAEI,kBAAkB;IAClB,aAAa;IACb,eAAe;;AAEnB;;AAEA;IACI,4BAA4B;AAChC;;AAEA;;IAEI,sBAAsB;AAC1B;;AAEA,sBAAsB;;AAEtB;;IAEI,aAAa;;AAEjB;;AAEA;;IAEI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,8BAA8B;IAC9B,aAAa;AACjB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;;IAEI,mBAAmB;AACvB;;AAEA;;IAEI,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,iBAAiB;IACjB,mBAAmB;IACnB,aAAa;IACb,uBAAuB;AAC3B;;AAEA;;IAEI,sBAAsB;IACtB,eAAe;IACf,gBAAgB;IAChB,iBAAiB;IACjB,kBAAkB;IAClB,YAAY;IACZ,uBAAuB;IACvB,uCAAuC;IACvC,4BAA4B;AAChC;;AAEA;;IAEI,sBAAsB;IACtB,uCAAuC;AAC3C;;;;;;;;;;;AAWA;IACI,aAAa;IACb,2BAA2B;IAC3B,YAAY;IACZ,aAAa;;AAEjB;;AAEA;IACI,aAAa;IACb,mCAAmC;IACnC,uCAAuC;;IAEvC,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,uBAAuB;IACvB,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,qBAAqB;IACrB,uBAAuB;;AAE3B;;AAEA;IACI,qBAAqB;IACrB,qBAAqB;;AAEzB;;AAEA;IACI,sBAAsB;IACtB,2BAA2B;;AAE/B;;;;AAIA;IACI,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,YAAY;AAChB;;AAEA,mBAAmB;;AAEnB;IACI,kBAAkB;IAClB,YAAY;AAChB","sourcesContent":["* {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n:root {\r\n    box-sizing: border-box;\r\n    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif\r\n}\r\n\r\n/* /// CLASSES /// */\r\n\r\n.blur{\r\n\r\n    filter: blur(20px);\r\n    pointer-events: none;\r\n}\r\n\r\n#close {\r\n\r\n    animation: fade-out 0.7s ease-out;\r\n    display: none;\r\n}\r\n\r\n.space {\r\n\r\n    padding: var();\r\n    margin: var();\r\n\r\n}\r\n\r\n.display-flex-col{\r\n\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\nbody{\r\n    background-color: black;\r\n    display: grid;\r\n    /* grid-template-rows: 10% 1fr 5%; */\r\n    grid-template-rows: auto 1fr auto;\r\n\r\n}\r\n\r\n/* /// HEADER /// */\r\n\r\nheader {\r\n\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n}\r\n\r\nh1 {\r\n    color: white;\r\n}\r\n\r\n/* /// MAIN /// */\r\n\r\nmain {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n}\r\n\r\narticle {\r\n    font-weight: 600;\r\n    background-color: #fff;\r\n    border-radius: 5px;\r\n    /* Esto es lo necesario para que el pop-up quede en el medio */\r\n    position: fixed;\r\n    left: 50%;\r\n    top: 50%;\r\n    transform: translate(-50%, -50%);\r\n    /* hasta aca */\r\n    cursor: pointer;\r\n    animation: fade-in 0.7s ease-out;\r\n}\r\n\r\n\r\narticle.mode-selection {\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n\r\n    min-width: 25vw;\r\n    outline: none;\r\n}\r\n\r\n@keyframes fade-in {\r\n    0% {\r\n      opacity: 0;\r\n      transform: translate(-50%, -50%) scaleY(0);\r\n      display: none;\r\n    }\r\n  \r\n    100% {\r\n      opacity: 1;\r\n      transform: translate(-50%, -50%) scaleY(1);\r\n      display: block;\r\n    }\r\n  }\r\n  \r\n  @keyframes fade-out {\r\n    0% {\r\n      opacity: 1;\r\n      transform: translate(-50%, -50%) scaleY(1);\r\n      display: block;\r\n    }\r\n  \r\n    100% {\r\n      opacity: 0;\r\n      transform: translate(-50%, -50%) scaleY(0);\r\n      display: none;\r\n    }\r\n}\r\n\r\n\r\narticle.mode-selection > :first-child {\r\n    border-bottom: 2px solid black;\r\n}\r\n\r\n\r\narticle section {\r\n\r\n    text-align: center;\r\n    padding: 30px;\r\n    margin-block: 0;\r\n    \r\n}\r\n\r\narticle section p {\r\n    transition: ease-in-out 0.4s;\r\n}\r\n\r\narticle section:hover p {\r\n\r\n    transform: scale(1.15);\r\n}\r\n\r\n/* DIALOGS CHIQUITOS */\r\n\r\narticle.child{\r\n\r\n    padding: 30px;\r\n\r\n}\r\n\r\narticle.child div {\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n    border-bottom: 1px solid black;\r\n    padding: 15px;\r\n}\r\n\r\narticle.CpuMode.child div {\r\n    border-bottom: none;\r\n}\r\n\r\narticle.child fieldset div {\r\n\r\n    flex-direction: row;\r\n}\r\n\r\narticle.child div.buttons {\r\n\r\n    flex-direction: row;\r\n    border-bottom: none;\r\n}\r\n\r\ninput {\r\n    font-size: 16.5px;\r\n    font-weight: 500;\r\n    padding: 5px 15px;\r\n    border-radius: 50px;\r\n    outline: none;\r\n    border: 1px solid black;\r\n}\r\n\r\nbutton {\r\n\r\n    background-color: #fff;\r\n    font-size: 15px;\r\n    font-weight: 500;\r\n    padding: 5px 10px;\r\n    border-radius: 5px;\r\n    margin: auto;\r\n    border: 1px solid black;\r\n    box-shadow: 2px 2px 3px rgb(44, 44, 44);\r\n    transition: ease-in-out 0.3s;\r\n}\r\n\r\nbutton:active {\r\n\r\n    transform: scale(0.95);\r\n    box-shadow: 1px 1px 3px rgb(44, 44, 44);\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nsection {\r\n    display: grid;\r\n    grid-template-rows: 1fr 20%;\r\n    margin: 15px;\r\n    padding: 15px;\r\n\r\n}\r\n\r\n.board {\r\n    display: grid;\r\n    grid-template-rows: repeat(10, 1fr);\r\n    grid-template-columns:  repeat(10, 1fr);\r\n\r\n    margin: 15px;\r\n    padding: 15px;\r\n}\r\n\r\n.board div {\r\n    border: 1px solid white;\r\n    min-width: 30px;\r\n    min-height: 30px;\r\n}\r\n\r\n.board div.ship {\r\n    border: 1px solid red;\r\n    background-color: white;\r\n\r\n}\r\n\r\n.board div.hit {\r\n    border: 1px solid red;\r\n    background-color: red;\r\n\r\n}\r\n\r\n.board div.miss {\r\n    border: 1px solid blue;\r\n    background-color: lightblue;\r\n\r\n}\r\n\r\n\r\n\r\n.options {\r\n    margin: 15px;\r\n    padding: 15px;\r\n}\r\n\r\n.options p {\r\n    color: white;\r\n}\r\n\r\n/* /// FOOTER /// */\r\n\r\nfooter {\r\n    text-align: center;\r\n    color: beige;\r\n}\r\n\r\n\r\n"],"sourceRoot":""}]);
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
/* harmony export */   createRandomShips: () => (/* binding */ createRandomShips),
/* harmony export */   gameModeData: () => (/* binding */ gameModeData),
/* harmony export */   hitListener: () => (/* binding */ hitListener)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage */ "./src/storage.js");








function gameModeData(mode){

    let playerOne, playerTwo, difficulty

    if(mode === "PlayerMode") {

        playerOne = new _player__WEBPACK_IMPORTED_MODULE_0__.Player(_dom__WEBPACK_IMPORTED_MODULE_2__.elements.inputsNames[0].value || "Player One", 0)
        playerTwo = new _player__WEBPACK_IMPORTED_MODULE_0__.Player(_dom__WEBPACK_IMPORTED_MODULE_2__.elements.inputsNames[1].value || "Player Two", 1)

        //return [new Player(playerOne), new Player(playerTwo)]
        //game([new Player(playerOne), new Player(playerTwo)])

        //return
    }
    
    else if(mode === "CpuMode") {

        playerOne = new _player__WEBPACK_IMPORTED_MODULE_0__.Player(_dom__WEBPACK_IMPORTED_MODULE_2__.elements.inputsNames[2].value || "Player One", 0)
        playerTwo = new _player__WEBPACK_IMPORTED_MODULE_0__.Player("CPU", 1)

        _dom__WEBPACK_IMPORTED_MODULE_2__.elements.inputsRadio.forEach(input => {
            if(input.checked) difficulty = input.value
        })

        //return [new Player(playerOne)]
        //game([new Player(playerOne), new Player(playerTwo)], difficulty)

        //return
    }

    (0,_storage__WEBPACK_IMPORTED_MODULE_3__.storeData)(mode, playerOne, playerTwo)

    // TEMPORAL: ESTA FUNCION NO DEBERIA SER LLAMADA ACA:
    //applyGrid()
}

function createRandomShips(e) {

    let state =  (0,_storage__WEBPACK_IMPORTED_MODULE_3__.retrieveData)()

    let whichPlayer = Number(e.currentTarget.dataset.board)
 
    let player = state.players[whichPlayer]
    let board = _dom__WEBPACK_IMPORTED_MODULE_2__.elements.boards[whichPlayer]

    ;(0,_dom__WEBPACK_IMPORTED_MODULE_2__.createGrid)(board)

    player.gameBoard.placeShips()

    displayShip(player)

    ;(0,_storage__WEBPACK_IMPORTED_MODULE_3__.updateData)(state)
}


function displayTotalBoard(){

    let state = (0,_storage__WEBPACK_IMPORTED_MODULE_3__.retrieveData)()

    for (let player of state.players) {

        let board = _dom__WEBPACK_IMPORTED_MODULE_2__.elements.boards[player.id]

        player.gameBoard.shipsCoords.flat().forEach(coord => addClass(board, coord, "ship")) 

        player.gameBoard.shipHitList.forEach(coord => addClass(board, coord, "hit"))

        player.gameBoard.waterHitList.forEach(coord => addClass(board, coord, "miss"))
    }
}




function addClass(board, quadrant, className) {

    if(quadrant.length < 1) return

    let [row, col] = quadrant

    let square = board.querySelector(`[data-square="${row}-${col}"]`)

    square.classList.add(`${className}`)
}






function hitListener(e) {

    let state = (0,_storage__WEBPACK_IMPORTED_MODULE_3__.retrieveData)()
    //console.log("STATE HIT LISTENER", state)

    let quadrant = e.target.dataset.square.split("-").map(str => Number(str))
    console.log("quadrant", quadrant)
    let whichPlayer = Number(e.target.parentElement.dataset.board)

    let player = state.players[whichPlayer]
    //console.log("PLAYER", player)

   let hitOnTarget = player.gameBoard.receiveAttack(quadrant)

    //displayBoard()

    console.log("SHIPS DEL PLAYER", player.gameBoard.ships)

    displayBoard(player, hitOnTarget)

   

    /* let shiphit = player.gameBoard.shipHitList
    console.log("shiphit LIST", shiphit)
    let waterhit = player.gameBoard.waterHitList
    console.log("waterhit LIST", waterhit) */


    ;(0,_storage__WEBPACK_IMPORTED_MODULE_3__.updateData)(state)
}

function game(playersArr, difficulty = null){


    let index = 0

    for(let player of playersArr) {

        //displayBoard(player, elements.boards[index])

        index ++
    }


}


function displayBoard(player, hitOnTarget) {

    if(hitOnTarget) displayHit(player)

    if(!hitOnTarget) displayMiss(player)
}

function displayShip(player) {

    let board = _dom__WEBPACK_IMPORTED_MODULE_2__.elements.boards[player.id]

    player.gameBoard.shipsCoords.flat().forEach(coord => addClass(board, coord, "ship"))
}


function displayHit(player) {

    let board = _dom__WEBPACK_IMPORTED_MODULE_2__.elements.boards[player.id]

    player.gameBoard.shipHitList.forEach(coord => addClass(board, coord, "hit")) 
}

function displayMiss(player) {

    let board = _dom__WEBPACK_IMPORTED_MODULE_2__.elements.boards[player.id]

    player.gameBoard.waterHitList.forEach(coord => addClass(board, coord, "miss"))
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
        this.btnRandomArr.forEach(btn => btn.addEventListener("click", _display__WEBPACK_IMPORTED_MODULE_4__.createRandomShips));
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

    board.innerHTML = ""

    let num = 10

    for(let i = 0; i < num; i++) {

        for(let j = 0; j < num; j++) {

            let quadrant = createElement("div", `row-${i}`, `col-${j}`)
            quadrant.setAttribute("data-square", `${i}-${j}`)
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
        this.waterHitList = [] /* [[], [], [], [], [], [], [], [], [], []] */,
        this.shipHitList = [] /* [[], [], [], [], [], [], [], [], [], []] */,
        this.shipsCoords = []   
    }

    setProperties(state){

        this.rowQuantity = state.rowQuantity;
        this.columnQuantity = state.columnQuantity;
        this.ships = state.ships;
        this.shipsSunk = state.shipsSunk;
        this.waterHitList = state.waterHitList;
        this.shipHitList = state.shipHitList;
        this.shipsCoords = state.shipsCoords
    };

    #createShips(){

        let shipTypes = [{type: "carrier", length: 5}, {type: "battleship", length: 4}, 
                        {type: "destroyer", length: 3}, {type: "submarine", length: 3}, 
                        {type: "patrol boat", length: 2}]
                    
        let shipsQueue = []

        for(let ship of shipTypes){
  
            shipsQueue.push(new _ship__WEBPACK_IMPORTED_MODULE_0__.Ship(ship.length, ship.type))          
        }

        return shipsQueue    
    }

    placeShips() {

        this.ships = []
        this.shipsCoords = []

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

        this.#shipsRefs()

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
        this.shipsCoords = []
    }

    receiveAttack(square){
    
        let hitOnTarget = false

        //console.log("A VER LOS SHIPS", this.ships)

        for(let ship of this.ships) {

            //console.log("SHIP", ship)

            for(let coordinate of ship.coordinates){

                //console.log("COORD", coordinate)

                if(coordinate[0] === square[0] && coordinate[1] === square[1]) {

                    console.log("SHIP", ship)

                    ship.hit()
                    if(ship.isSunk) this.allShipsSunk(ship)
                    //this.shipHitList[square[0]].push(square[1])     
                    this.shipHitList.push(square)        
                    hitOnTarget = true

                    break
                }
            }

            //if(hitOnTarget) break

            if(hitOnTarget) return true
        } 

        //if(hitOnTarget === false) this.waterHitList[square[0]].push(square[1])

        //this.waterHitList[square[0]].push(square[1])
        this.waterHitList.push(square)

        return false
    }

    #shipsRefs() {

        for(let ship of this.ships) {

            let coordArr = []

            for(let coordinate of ship.coordinates) coordArr.push(coordinate) 

            this.shipsCoords.push(coordArr)
        }
    }

    allShipsSunk(ship) {

        console.log("SHIP SUNKED", ship)

        this.shipsSunk.push(ship)

        console.log("SHIP SUNKED ARRAY", this.shipsSunk)

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

    constructor(name, id){

        this.name = name
        this.id = id
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

    hitCounter = 0
    #isSunk = false

    constructor(length = null, type = null){
        this.length = length
        this.type = type
        this.coordinates = []
    }

    setProperties(state) {
        this.length = state.length;
        this.type = state.type;
        this.coordinates = state.coordinates
        this.hitCounter = state.hitCounter
    }

    hit() {

        this.hitCounter ++
        this.#sunkCheck()
    }

    #sunkCheck(){
 
        if(this.hitCounter === this.length) {
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
/* harmony export */   storeData: () => (/* binding */ storeData),
/* harmony export */   updateData: () => (/* binding */ updateData)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ "./src/ship.js");






function storeData(mode, playerOne, playerTwo) {

    let state = {
        mode: mode,
        players: [playerOne, playerTwo]
    }

    localStorage.setItem("state", JSON.stringify(state)) 
}

function updateData(state){

    localStorage.setItem("state", JSON.stringify(state))
}


function retrieveData() {

   let state = JSON.parse(localStorage.getItem("state"))

   let playerOne  = new _player__WEBPACK_IMPORTED_MODULE_0__.Player(state.players[0].name, 0)
   let playerTwo  = new _player__WEBPACK_IMPORTED_MODULE_0__.Player(state.players[1].name, 1)
   let players = [playerOne, playerTwo]


    for(let i = 0; i < players.length; i++) {

        players[i].gameBoard.setProperties(state.players[i].gameBoard)

        let playerShips = players[i].gameBoard.ships


        for(let j = 0; j < playerShips.length; j++) {

            let shipInstance = new _ship__WEBPACK_IMPORTED_MODULE_1__.Ship(playerShips[j])

            shipInstance.setProperties(state.players[i].gameBoard.ships[j])

            // reemplazo la copia de datos del ship que estaba en JSON por 
            // el ship instansiado y actualizado.
            players[i].gameBoard.ships[j] = shipInstance
        }

    }

    state.players = players

   return state

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLGFBQWEsT0FBTyxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGNBQWMsT0FBTyxhQUFhLE9BQU8sVUFBVSxZQUFZLGNBQWMsT0FBTyxLQUFLLFVBQVUsT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksUUFBUSxNQUFNLFVBQVUsYUFBYSxXQUFXLFVBQVUs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QjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHVDQUFJO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixpQkFBaUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvTXFDO0FBQ3JDO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiwyQkFBMkIsR0FBRyw4QkFBOEIsR0FBRyw2QkFBNkI7QUFDdEgsc0JBQXNCLDZCQUE2QixHQUFHLCtCQUErQjtBQUNyRixzREFBc0QsaURBQVM7QUFDL0Q7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNmYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEMrQjtBQUNKO0FBQzNCO0FBQzRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDJDQUFNO0FBQzlCLHdCQUF3QiwyQ0FBTTtBQUM5QjtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsb0JBQW9CO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix3QkFBd0I7QUFDL0M7QUFDQSxtQ0FBbUMsdUNBQUk7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUN2REE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBeUI7QUFDTTtBQUNNO0FBQ1Y7QUFDRztBQUM5QjtBQUNBLDBDQUFRO0FBQ1IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuOnJvb3Qge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGZvbnQtZmFtaWx5OidTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmXHJcbn1cclxuXHJcbi8qIC8vLyBDTEFTU0VTIC8vLyAqL1xyXG5cclxuLmJsdXJ7XHJcblxyXG4gICAgZmlsdGVyOiBibHVyKDIwcHgpO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbiNjbG9zZSB7XHJcblxyXG4gICAgYW5pbWF0aW9uOiBmYWRlLW91dCAwLjdzIGVhc2Utb3V0O1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnNwYWNlIHtcclxuXHJcbiAgICBwYWRkaW5nOiB2YXIoKTtcclxuICAgIG1hcmdpbjogdmFyKCk7XHJcblxyXG59XHJcblxyXG4uZGlzcGxheS1mbGV4LWNvbHtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuYm9keXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIC8qIGdyaWQtdGVtcGxhdGUtcm93czogMTAlIDFmciA1JTsgKi9cclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcclxuXHJcbn1cclxuXHJcbi8qIC8vLyBIRUFERVIgLy8vICovXHJcblxyXG5oZWFkZXIge1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG59XHJcblxyXG5oMSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi8qIC8vLyBNQUlOIC8vLyAqL1xyXG5cclxubWFpbiB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG59XHJcblxyXG5hcnRpY2xlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLyogRXN0byBlcyBsbyBuZWNlc2FyaW8gcGFyYSBxdWUgZWwgcG9wLXVwIHF1ZWRlIGVuIGVsIG1lZGlvICovXHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgLyogaGFzdGEgYWNhICovXHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBhbmltYXRpb246IGZhZGUtaW4gMC43cyBlYXNlLW91dDtcclxufVxyXG5cclxuXHJcbmFydGljbGUubW9kZS1zZWxlY3Rpb24ge1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgIG1pbi13aWR0aDogMjV2dztcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZS1pbiB7XHJcbiAgICAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlWSgwKTtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICBcclxuICAgIDEwMCUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZVkoMSk7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIGZhZGUtb3V0IHtcclxuICAgIDAlIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGVZKDEpO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICBcclxuICAgIDEwMCUge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZVkoMCk7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5hcnRpY2xlLm1vZGUtc2VsZWN0aW9uID4gOmZpcnN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuXHJcbmFydGljbGUgc2VjdGlvbiB7XHJcblxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIG1hcmdpbi1ibG9jazogMDtcclxuICAgIFxyXG59XHJcblxyXG5hcnRpY2xlIHNlY3Rpb24gcCB7XHJcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAwLjRzO1xyXG59XHJcblxyXG5hcnRpY2xlIHNlY3Rpb246aG92ZXIgcCB7XHJcblxyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcclxufVxyXG5cclxuLyogRElBTE9HUyBDSElRVUlUT1MgKi9cclxuXHJcbmFydGljbGUuY2hpbGR7XHJcblxyXG4gICAgcGFkZGluZzogMzBweDtcclxuXHJcbn1cclxuXHJcbmFydGljbGUuY2hpbGQgZGl2IHtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMTBweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuXHJcbmFydGljbGUuQ3B1TW9kZS5jaGlsZCBkaXYge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxufVxyXG5cclxuYXJ0aWNsZS5jaGlsZCBmaWVsZHNldCBkaXYge1xyXG5cclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbmFydGljbGUuY2hpbGQgZGl2LmJ1dHRvbnMge1xyXG5cclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgICBmb250LXNpemU6IDE2LjVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAzcHggcmdiKDQ0LCA0NCwgNDQpO1xyXG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgMC4zcztcclxufVxyXG5cclxuYnV0dG9uOmFjdGl2ZSB7XHJcblxyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IHJnYig0NCwgNDQsIDQ0KTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuc2VjdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMjAlO1xyXG4gICAgbWFyZ2luOiAxNXB4O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuXHJcbn1cclxuXHJcbi5ib2FyZCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6ICByZXBlYXQoMTAsIDFmcik7XHJcblxyXG4gICAgbWFyZ2luOiAxNXB4O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxufVxyXG5cclxuLmJvYXJkIGRpdiB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgIG1pbi13aWR0aDogMzBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi5ib2FyZCBkaXYuc2hpcCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHJcbn1cclxuXHJcbi5ib2FyZCBkaXYuaGl0IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuXHJcbn1cclxuXHJcbi5ib2FyZCBkaXYubWlzcyB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG4ub3B0aW9ucyB7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcblxyXG4ub3B0aW9ucyBwIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLyogLy8vIEZPT1RFUiAvLy8gKi9cclxuXHJcbmZvb3RlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogYmVpZ2U7XHJcbn1cclxuXHJcblxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCO0FBQ0o7O0FBRUEsb0JBQW9COztBQUVwQjs7SUFFSSxrQkFBa0I7SUFDbEIsb0JBQW9CO0FBQ3hCOztBQUVBOztJQUVJLGlDQUFpQztJQUNqQyxhQUFhO0FBQ2pCOztBQUVBOztJQUVJLGNBQWM7SUFDZCxhQUFhOztBQUVqQjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixvQ0FBb0M7SUFDcEMsaUNBQWlDOztBQUVyQzs7QUFFQSxtQkFBbUI7O0FBRW5COztJQUVJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCOztBQUUzQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUEsaUJBQWlCOztBQUVqQjtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQiw4REFBOEQ7SUFDOUQsZUFBZTtJQUNmLFNBQVM7SUFDVCxRQUFRO0lBQ1IsZ0NBQWdDO0lBQ2hDLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0NBQWdDO0FBQ3BDOzs7QUFHQTs7SUFFSSxhQUFhO0lBQ2Isc0JBQXNCOztJQUV0QixlQUFlO0lBQ2YsYUFBYTtBQUNqQjs7QUFFQTtJQUNJO01BQ0UsVUFBVTtNQUNWLDBDQUEwQztNQUMxQyxhQUFhO0lBQ2Y7O0lBRUE7TUFDRSxVQUFVO01BQ1YsMENBQTBDO01BQzFDLGNBQWM7SUFDaEI7RUFDRjs7RUFFQTtJQUNFO01BQ0UsVUFBVTtNQUNWLDBDQUEwQztNQUMxQyxjQUFjO0lBQ2hCOztJQUVBO01BQ0UsVUFBVTtNQUNWLDBDQUEwQztNQUMxQyxhQUFhO0lBQ2Y7QUFDSjs7O0FBR0E7SUFDSSw4QkFBOEI7QUFDbEM7OztBQUdBOztJQUVJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZUFBZTs7QUFFbkI7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUE7O0lBRUksc0JBQXNCO0FBQzFCOztBQUVBLHNCQUFzQjs7QUFFdEI7O0lBRUksYUFBYTs7QUFFakI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsOEJBQThCO0lBQzlCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksbUJBQW1CO0FBQ3ZCOztBQUVBOztJQUVJLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTs7SUFFSSxzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsdUNBQXVDO0lBQ3ZDLDRCQUE0QjtBQUNoQzs7QUFFQTs7SUFFSSxzQkFBc0I7SUFDdEIsdUNBQXVDO0FBQzNDOzs7Ozs7Ozs7OztBQVdBO0lBQ0ksYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osYUFBYTs7QUFFakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUNBQW1DO0lBQ25DLHVDQUF1Qzs7SUFFdkMsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQix1QkFBdUI7O0FBRTNCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLHFCQUFxQjs7QUFFekI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsMkJBQTJCOztBQUUvQjs7OztBQUlBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBLG1CQUFtQjs7QUFFbkI7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGZvbnQtZmFtaWx5OidTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmXFxyXFxufVxcclxcblxcclxcbi8qIC8vLyBDTEFTU0VTIC8vLyAqL1xcclxcblxcclxcbi5ibHVye1xcclxcblxcclxcbiAgICBmaWx0ZXI6IGJsdXIoMjBweCk7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jY2xvc2Uge1xcclxcblxcclxcbiAgICBhbmltYXRpb246IGZhZGUtb3V0IDAuN3MgZWFzZS1vdXQ7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5zcGFjZSB7XFxyXFxuXFxyXFxuICAgIHBhZGRpbmc6IHZhcigpO1xcclxcbiAgICBtYXJnaW46IHZhcigpO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uZGlzcGxheS1mbGV4LWNvbHtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keXtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIC8qIGdyaWQtdGVtcGxhdGUtcm93czogMTAlIDFmciA1JTsgKi9cXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4vKiAvLy8gSEVBREVSIC8vLyAqL1xcclxcblxcclxcbmhlYWRlciB7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogLy8vIE1BSU4gLy8vICovXFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG59XFxyXFxuXFxyXFxuYXJ0aWNsZSB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgLyogRXN0byBlcyBsbyBuZWNlc2FyaW8gcGFyYSBxdWUgZWwgcG9wLXVwIHF1ZWRlIGVuIGVsIG1lZGlvICovXFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICB0b3A6IDUwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICAgIC8qIGhhc3RhIGFjYSAqL1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGFuaW1hdGlvbjogZmFkZS1pbiAwLjdzIGVhc2Utb3V0O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5hcnRpY2xlLm1vZGUtc2VsZWN0aW9uIHtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHJcXG4gICAgbWluLXdpZHRoOiAyNXZ3O1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGZhZGUtaW4ge1xcclxcbiAgICAwJSB7XFxyXFxuICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZVkoMCk7XFxyXFxuICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcbiAgXFxyXFxuICAgIDEwMCUge1xcclxcbiAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGVZKDEpO1xcclxcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIEBrZXlmcmFtZXMgZmFkZS1vdXQge1xcclxcbiAgICAwJSB7XFxyXFxuICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZVkoMSk7XFxyXFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIH1cXHJcXG4gIFxcclxcbiAgICAxMDAlIHtcXHJcXG4gICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlWSgwKTtcXHJcXG4gICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcblxcclxcbmFydGljbGUubW9kZS1zZWxlY3Rpb24gPiA6Zmlyc3QtY2hpbGQge1xcclxcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcblxcclxcbmFydGljbGUgc2VjdGlvbiB7XFxyXFxuXFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMzBweDtcXHJcXG4gICAgbWFyZ2luLWJsb2NrOiAwO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuYXJ0aWNsZSBzZWN0aW9uIHAge1xcclxcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAwLjRzO1xcclxcbn1cXHJcXG5cXHJcXG5hcnRpY2xlIHNlY3Rpb246aG92ZXIgcCB7XFxyXFxuXFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XFxyXFxufVxcclxcblxcclxcbi8qIERJQUxPR1MgQ0hJUVVJVE9TICovXFxyXFxuXFxyXFxuYXJ0aWNsZS5jaGlsZHtcXHJcXG5cXHJcXG4gICAgcGFkZGluZzogMzBweDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuYXJ0aWNsZS5jaGlsZCBkaXYge1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgcGFkZGluZzogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuYXJ0aWNsZS5DcHVNb2RlLmNoaWxkIGRpdiB7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmFydGljbGUuY2hpbGQgZmllbGRzZXQgZGl2IHtcXHJcXG5cXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG59XFxyXFxuXFxyXFxuYXJ0aWNsZS5jaGlsZCBkaXYuYnV0dG9ucyB7XFxyXFxuXFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmlucHV0IHtcXHJcXG4gICAgZm9udC1zaXplOiAxNi41cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG5cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDNweCByZ2IoNDQsIDQ0LCA0NCk7XFxyXFxuICAgIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IDAuM3M7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbjphY3RpdmUge1xcclxcblxcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcclxcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCByZ2IoNDQsIDQ0LCA0NCk7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcbnNlY3Rpb24ge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyMCU7XFxyXFxuICAgIG1hcmdpbjogMTVweDtcXHJcXG4gICAgcGFkZGluZzogMTVweDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogIHJlcGVhdCgxMCwgMWZyKTtcXHJcXG5cXHJcXG4gICAgbWFyZ2luOiAxNXB4O1xcclxcbiAgICBwYWRkaW5nOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYm9hcmQgZGl2IHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxyXFxuICAgIG1pbi13aWR0aDogMzBweDtcXHJcXG4gICAgbWluLWhlaWdodDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkIGRpdi5zaGlwIHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkIGRpdi5oaXQge1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkIGRpdi5taXNzIHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4ub3B0aW9ucyB7XFxyXFxuICAgIG1hcmdpbjogMTVweDtcXHJcXG4gICAgcGFkZGluZzogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm9wdGlvbnMgcCB7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogLy8vIEZPT1RFUiAvLy8gKi9cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOiBiZWlnZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQge1BsYXllcn0gZnJvbSBcIi4vcGxheWVyXCJcclxuaW1wb3J0IHtHYW1lQm9hcmR9IGZyb20gXCIuL2dhbWVib2FyZFwiXHJcbmltcG9ydCB7ZWxlbWVudHMsIGNyZWF0ZUdyaWR9IGZyb20gXCIuL2RvbVwiXHJcbmltcG9ydCB7c3RvcmVEYXRhLCByZXRyaWV2ZURhdGEsIHVwZGF0ZURhdGF9IGZyb20gXCIuL3N0b3JhZ2VcIlxyXG5cclxuZXhwb3J0IHtnYW1lTW9kZURhdGEsIGNyZWF0ZVJhbmRvbVNoaXBzLCBoaXRMaXN0ZW5lcn1cclxuXHJcblxyXG5mdW5jdGlvbiBnYW1lTW9kZURhdGEobW9kZSl7XHJcblxyXG4gICAgbGV0IHBsYXllck9uZSwgcGxheWVyVHdvLCBkaWZmaWN1bHR5XHJcblxyXG4gICAgaWYobW9kZSA9PT0gXCJQbGF5ZXJNb2RlXCIpIHtcclxuXHJcbiAgICAgICAgcGxheWVyT25lID0gbmV3IFBsYXllcihlbGVtZW50cy5pbnB1dHNOYW1lc1swXS52YWx1ZSB8fCBcIlBsYXllciBPbmVcIiwgMClcclxuICAgICAgICBwbGF5ZXJUd28gPSBuZXcgUGxheWVyKGVsZW1lbnRzLmlucHV0c05hbWVzWzFdLnZhbHVlIHx8IFwiUGxheWVyIFR3b1wiLCAxKVxyXG5cclxuICAgICAgICAvL3JldHVybiBbbmV3IFBsYXllcihwbGF5ZXJPbmUpLCBuZXcgUGxheWVyKHBsYXllclR3byldXHJcbiAgICAgICAgLy9nYW1lKFtuZXcgUGxheWVyKHBsYXllck9uZSksIG5ldyBQbGF5ZXIocGxheWVyVHdvKV0pXHJcblxyXG4gICAgICAgIC8vcmV0dXJuXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGVsc2UgaWYobW9kZSA9PT0gXCJDcHVNb2RlXCIpIHtcclxuXHJcbiAgICAgICAgcGxheWVyT25lID0gbmV3IFBsYXllcihlbGVtZW50cy5pbnB1dHNOYW1lc1syXS52YWx1ZSB8fCBcIlBsYXllciBPbmVcIiwgMClcclxuICAgICAgICBwbGF5ZXJUd28gPSBuZXcgUGxheWVyKFwiQ1BVXCIsIDEpXHJcblxyXG4gICAgICAgIGVsZW1lbnRzLmlucHV0c1JhZGlvLmZvckVhY2goaW5wdXQgPT4ge1xyXG4gICAgICAgICAgICBpZihpbnB1dC5jaGVja2VkKSBkaWZmaWN1bHR5ID0gaW5wdXQudmFsdWVcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAvL3JldHVybiBbbmV3IFBsYXllcihwbGF5ZXJPbmUpXVxyXG4gICAgICAgIC8vZ2FtZShbbmV3IFBsYXllcihwbGF5ZXJPbmUpLCBuZXcgUGxheWVyKHBsYXllclR3byldLCBkaWZmaWN1bHR5KVxyXG5cclxuICAgICAgICAvL3JldHVyblxyXG4gICAgfVxyXG5cclxuICAgIHN0b3JlRGF0YShtb2RlLCBwbGF5ZXJPbmUsIHBsYXllclR3bylcclxuXHJcbiAgICAvLyBURU1QT1JBTDogRVNUQSBGVU5DSU9OIE5PIERFQkVSSUEgU0VSIExMQU1BREEgQUNBOlxyXG4gICAgLy9hcHBseUdyaWQoKVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVSYW5kb21TaGlwcyhlKSB7XHJcblxyXG4gICAgbGV0IHN0YXRlID0gIHJldHJpZXZlRGF0YSgpXHJcblxyXG4gICAgbGV0IHdoaWNoUGxheWVyID0gTnVtYmVyKGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmJvYXJkKVxyXG4gXHJcbiAgICBsZXQgcGxheWVyID0gc3RhdGUucGxheWVyc1t3aGljaFBsYXllcl1cclxuICAgIGxldCBib2FyZCA9IGVsZW1lbnRzLmJvYXJkc1t3aGljaFBsYXllcl1cclxuXHJcbiAgICBjcmVhdGVHcmlkKGJvYXJkKVxyXG5cclxuICAgIHBsYXllci5nYW1lQm9hcmQucGxhY2VTaGlwcygpXHJcblxyXG4gICAgZGlzcGxheVNoaXAocGxheWVyKVxyXG5cclxuICAgIHVwZGF0ZURhdGEoc3RhdGUpXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5VG90YWxCb2FyZCgpe1xyXG5cclxuICAgIGxldCBzdGF0ZSA9IHJldHJpZXZlRGF0YSgpXHJcblxyXG4gICAgZm9yIChsZXQgcGxheWVyIG9mIHN0YXRlLnBsYXllcnMpIHtcclxuXHJcbiAgICAgICAgbGV0IGJvYXJkID0gZWxlbWVudHMuYm9hcmRzW3BsYXllci5pZF1cclxuXHJcbiAgICAgICAgcGxheWVyLmdhbWVCb2FyZC5zaGlwc0Nvb3Jkcy5mbGF0KCkuZm9yRWFjaChjb29yZCA9PiBhZGRDbGFzcyhib2FyZCwgY29vcmQsIFwic2hpcFwiKSkgXHJcblxyXG4gICAgICAgIHBsYXllci5nYW1lQm9hcmQuc2hpcEhpdExpc3QuZm9yRWFjaChjb29yZCA9PiBhZGRDbGFzcyhib2FyZCwgY29vcmQsIFwiaGl0XCIpKVxyXG5cclxuICAgICAgICBwbGF5ZXIuZ2FtZUJvYXJkLndhdGVySGl0TGlzdC5mb3JFYWNoKGNvb3JkID0+IGFkZENsYXNzKGJvYXJkLCBjb29yZCwgXCJtaXNzXCIpKVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBhZGRDbGFzcyhib2FyZCwgcXVhZHJhbnQsIGNsYXNzTmFtZSkge1xyXG5cclxuICAgIGlmKHF1YWRyYW50Lmxlbmd0aCA8IDEpIHJldHVyblxyXG5cclxuICAgIGxldCBbcm93LCBjb2xdID0gcXVhZHJhbnRcclxuXHJcbiAgICBsZXQgc3F1YXJlID0gYm9hcmQucXVlcnlTZWxlY3RvcihgW2RhdGEtc3F1YXJlPVwiJHtyb3d9LSR7Y29sfVwiXWApXHJcblxyXG4gICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoYCR7Y2xhc3NOYW1lfWApXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gaGl0TGlzdGVuZXIoZSkge1xyXG5cclxuICAgIGxldCBzdGF0ZSA9IHJldHJpZXZlRGF0YSgpXHJcbiAgICAvL2NvbnNvbGUubG9nKFwiU1RBVEUgSElUIExJU1RFTkVSXCIsIHN0YXRlKVxyXG5cclxuICAgIGxldCBxdWFkcmFudCA9IGUudGFyZ2V0LmRhdGFzZXQuc3F1YXJlLnNwbGl0KFwiLVwiKS5tYXAoc3RyID0+IE51bWJlcihzdHIpKVxyXG4gICAgY29uc29sZS5sb2coXCJxdWFkcmFudFwiLCBxdWFkcmFudClcclxuICAgIGxldCB3aGljaFBsYXllciA9IE51bWJlcihlLnRhcmdldC5wYXJlbnRFbGVtZW50LmRhdGFzZXQuYm9hcmQpXHJcblxyXG4gICAgbGV0IHBsYXllciA9IHN0YXRlLnBsYXllcnNbd2hpY2hQbGF5ZXJdXHJcbiAgICAvL2NvbnNvbGUubG9nKFwiUExBWUVSXCIsIHBsYXllcilcclxuXHJcbiAgIGxldCBoaXRPblRhcmdldCA9IHBsYXllci5nYW1lQm9hcmQucmVjZWl2ZUF0dGFjayhxdWFkcmFudClcclxuXHJcbiAgICAvL2Rpc3BsYXlCb2FyZCgpXHJcblxyXG4gICAgY29uc29sZS5sb2coXCJTSElQUyBERUwgUExBWUVSXCIsIHBsYXllci5nYW1lQm9hcmQuc2hpcHMpXHJcblxyXG4gICAgZGlzcGxheUJvYXJkKHBsYXllciwgaGl0T25UYXJnZXQpXHJcblxyXG4gICBcclxuXHJcbiAgICAvKiBsZXQgc2hpcGhpdCA9IHBsYXllci5nYW1lQm9hcmQuc2hpcEhpdExpc3RcclxuICAgIGNvbnNvbGUubG9nKFwic2hpcGhpdCBMSVNUXCIsIHNoaXBoaXQpXHJcbiAgICBsZXQgd2F0ZXJoaXQgPSBwbGF5ZXIuZ2FtZUJvYXJkLndhdGVySGl0TGlzdFxyXG4gICAgY29uc29sZS5sb2coXCJ3YXRlcmhpdCBMSVNUXCIsIHdhdGVyaGl0KSAqL1xyXG5cclxuXHJcbiAgICB1cGRhdGVEYXRhKHN0YXRlKVxyXG59XHJcblxyXG5mdW5jdGlvbiBnYW1lKHBsYXllcnNBcnIsIGRpZmZpY3VsdHkgPSBudWxsKXtcclxuXHJcblxyXG4gICAgbGV0IGluZGV4ID0gMFxyXG5cclxuICAgIGZvcihsZXQgcGxheWVyIG9mIHBsYXllcnNBcnIpIHtcclxuXHJcbiAgICAgICAgLy9kaXNwbGF5Qm9hcmQocGxheWVyLCBlbGVtZW50cy5ib2FyZHNbaW5kZXhdKVxyXG5cclxuICAgICAgICBpbmRleCArK1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5Qm9hcmQocGxheWVyLCBoaXRPblRhcmdldCkge1xyXG5cclxuICAgIGlmKGhpdE9uVGFyZ2V0KSBkaXNwbGF5SGl0KHBsYXllcilcclxuXHJcbiAgICBpZighaGl0T25UYXJnZXQpIGRpc3BsYXlNaXNzKHBsYXllcilcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheVNoaXAocGxheWVyKSB7XHJcblxyXG4gICAgbGV0IGJvYXJkID0gZWxlbWVudHMuYm9hcmRzW3BsYXllci5pZF1cclxuXHJcbiAgICBwbGF5ZXIuZ2FtZUJvYXJkLnNoaXBzQ29vcmRzLmZsYXQoKS5mb3JFYWNoKGNvb3JkID0+IGFkZENsYXNzKGJvYXJkLCBjb29yZCwgXCJzaGlwXCIpKVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZGlzcGxheUhpdChwbGF5ZXIpIHtcclxuXHJcbiAgICBsZXQgYm9hcmQgPSBlbGVtZW50cy5ib2FyZHNbcGxheWVyLmlkXVxyXG5cclxuICAgIHBsYXllci5nYW1lQm9hcmQuc2hpcEhpdExpc3QuZm9yRWFjaChjb29yZCA9PiBhZGRDbGFzcyhib2FyZCwgY29vcmQsIFwiaGl0XCIpKSBcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheU1pc3MocGxheWVyKSB7XHJcblxyXG4gICAgbGV0IGJvYXJkID0gZWxlbWVudHMuYm9hcmRzW3BsYXllci5pZF1cclxuXHJcbiAgICBwbGF5ZXIuZ2FtZUJvYXJkLndhdGVySGl0TGlzdC5mb3JFYWNoKGNvb3JkID0+IGFkZENsYXNzKGJvYXJkLCBjb29yZCwgXCJtaXNzXCIpKVxyXG59XHJcblxyXG4iLCJpbXBvcnQge1BsYXllcn0gZnJvbSBcIi4vcGxheWVyXCJcclxuaW1wb3J0IHtHYW1lQm9hcmR9IGZyb20gXCIuL2dhbWVib2FyZFwiXHJcbmltcG9ydCB7U2hpcH0gZnJvbSBcIi4vc2hpcFwiXHJcbmltcG9ydCB7c3RvcmVEYXRhLCByZXRyaWV2ZURhdGF9IGZyb20gXCIuL3N0b3JhZ2VcIlxyXG5pbXBvcnQge2dhbWVNb2RlRGF0YSwgY3JlYXRlUmFuZG9tU2hpcHMsIGhpdExpc3RlbmVyfSBmcm9tIFwiLi9kaXNwbGF5XCJcclxuXHJcbmV4cG9ydCB7ZWxlbWVudHMsIGNyZWF0ZUdyaWR9XHJcblxyXG5cclxubGV0IGVsZW1lbnRzID0ge1xyXG5cclxuICAgIHdyYXBwZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud3JhcHBlclwiKSxcclxuICAgIGJvYXJkczogQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJvYXJkXCIpKSxcclxuICAgIGRpYWxvZ01vZGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhcnRpY2xlXCIpLFxyXG4gICAgZGlhbG9nUGxheWVyTW9kZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImFydGljbGUuUGxheWVyTW9kZVwiKSxcclxuICAgIGRpYWxvZ0NwdU1vZGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhcnRpY2xlLkNwdU1vZGVcIiksXHJcbiAgICBidG5DYW5jZWw6IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImJ1dHRvbi5jYW5jZWxcIikpLFxyXG4gICAgYnRuT2s6IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImJ1dHRvbi5va1wiKSksXHJcbiAgICBpbnB1dHNOYW1lczogQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW25hbWU9cGxheWVyLW5hbWVdXCIpKSxcclxuICAgIGlucHV0c1JhZGlvOiBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbmFtZT1kaWZmaWN1bHR5XVwiKSksXHJcbiAgICBidG5SYW5kb21BcnI6IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImJ1dHRvbi5yYW5kb21cIikpLFxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKVxyXG4gICAgfSxcclxuXHJcbiAgICBhZGRMaXN0ZW5lcnMoKSB7XHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBvcGVuTW9kZURpYWxvZyk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGFwcGx5R3JpZCk7XHJcbiAgICAgICAgdGhpcy5kaWFsb2dDaGlsZHJlbigpLmZvckVhY2goY2hpbGQgPT4gY2hpbGQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdhbWVNb2RlU2VsZWN0aW9uKSk7XHJcbiAgICAgICAgdGhpcy5idG5DYW5jZWwuZm9yRWFjaChidG4gPT4gYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjYW5jZWxEaWFsb2cpKTtcclxuICAgICAgICB0aGlzLmJ0bk9rLmZvckVhY2goYnRuID0+IGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXBwcm92ZURpYWxvZykpO1xyXG4gICAgICAgIHRoaXMuYnRuUmFuZG9tQXJyLmZvckVhY2goYnRuID0+IGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3JlYXRlUmFuZG9tU2hpcHMpKTtcclxuICAgIH0sXHJcblxyXG4gICAgZGlhbG9nQ2hpbGRyZW4oKXtcclxuXHJcbiAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLmRpYWxvZ01vZGUuY2hpbGRyZW4pIFxyXG4gICAgfSxcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoZWxlbWVudCwgY2xhc3NOYW1lLCBzZWNvbmRDbGFzc05hbWUpe1xyXG5cclxuICAgIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudClcclxuICAgIGVsLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKVxyXG5cclxuICAgIGlmKHNlY29uZENsYXNzTmFtZSkgZWwuY2xhc3NMaXN0LmFkZChzZWNvbmRDbGFzc05hbWUpXHJcblxyXG4gICAgcmV0dXJuIGVsXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUdyaWQoYm9hcmQpe1xyXG5cclxuICAgIGJvYXJkLmlubmVySFRNTCA9IFwiXCJcclxuXHJcbiAgICBsZXQgbnVtID0gMTBcclxuXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgbnVtOyBpKyspIHtcclxuXHJcbiAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IG51bTsgaisrKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgcXVhZHJhbnQgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIGByb3ctJHtpfWAsIGBjb2wtJHtqfWApXHJcbiAgICAgICAgICAgIHF1YWRyYW50LnNldEF0dHJpYnV0ZShcImRhdGEtc3F1YXJlXCIsIGAke2l9LSR7an1gKVxyXG4gICAgICAgICAgICBxdWFkcmFudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgLyogaWRlbnRpZnlRdWFkcmFudCAqLyBoaXRMaXN0ZW5lcilcclxuICAgICAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQocXVhZHJhbnQpIFxyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5R3JpZCgpIHtcclxuXHJcbiAgICBmb3IobGV0IGJvYXJkIG9mIGVsZW1lbnRzLmJvYXJkcykge1xyXG5cclxuICAgICAgICAvL2JvYXJkLmlubmVySFRNTCA9IFwiXCJcclxuICAgICAgICBjcmVhdGVHcmlkKGJvYXJkKSBcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBvcGVuTW9kZURpYWxvZygpe1xyXG5cclxuICAgIGlmKGVsZW1lbnRzLmRpYWxvZ01vZGUuZ2V0QXR0cmlidXRlKFwiaWRcIikgPT09IFwiY2xvc2VcIikgZWxlbWVudHMuZGlhbG9nTW9kZS5yZW1vdmVBdHRyaWJ1dGUoXCJpZFwiKVxyXG4gICAgaWYoIWVsZW1lbnRzLndyYXBwZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYmx1clwiKSkgZWxlbWVudHMud3JhcHBlci5jbGFzc0xpc3QuYWRkKFwiYmx1clwiKVxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gZ2FtZU1vZGVTZWxlY3Rpb24oZSkge1xyXG5cclxuICAgIGVsZW1lbnRzLmRpYWxvZ01vZGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjbG9zZVwiKVxyXG5cclxuICAgIGxldCBnYW1lTW9kZSA9IGUuY3VycmVudFRhcmdldC5jbGFzc05hbWVcclxuXHJcbiAgICBsZXQgZGlhbG9nID0gZWxlbWVudHNbYGRpYWxvZyR7Z2FtZU1vZGV9YF1cclxuICAgIGRpYWxvZy5yZW1vdmVBdHRyaWJ1dGUoXCJpZFwiKVxyXG59XHJcblxyXG5mdW5jdGlvbiBjYW5jZWxEaWFsb2coZSl7XHJcblxyXG4gICAgLy9pZihlLmtleSAhPT0gXCJFc2NhcGVcIikgcmV0dXJuXHJcbiAgICBlLmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY2xvc2VcIilcclxuICAgIGVsZW1lbnRzLmlucHV0c05hbWVzLmZvckVhY2goaW5wdXQgPT4gaW5wdXQudmFsdWUgPSBcIlwiKVxyXG5cclxuICAgIG9wZW5Nb2RlRGlhbG9nKClcclxufVxyXG5cclxuZnVuY3Rpb24gYXBwcm92ZURpYWxvZyhlKSB7XHJcblxyXG4gICAgLy9pZihlLmtleSAhPT0gXCJFbnRlclwiKSByZXR1cm5cclxuICAgIGxldCBtb2RlID0gZS50YXJnZXQuZGF0YXNldC5tb2RlXHJcblxyXG4gICAgLyogbGV0IFtwbGF5ZXJPbmUsIHBsYXllclR3b10gPSAgKi9nYW1lTW9kZURhdGEobW9kZSlcclxuICAgIC8vZ2FtZShwbGF5ZXJPbmUsIHBsYXllclR3bylcclxuXHJcbiAgICBlLmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY2xvc2VcIilcclxuICAgIGVsZW1lbnRzLmlucHV0c05hbWVzLmZvckVhY2goaW5wdXQgPT4gaW5wdXQudmFsdWUgPSBcIlwiKVxyXG4gICAgZWxlbWVudHMud3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKFwiYmx1clwiKVxyXG59XHJcblxyXG5cclxuIiwiaW1wb3J0IHtTaGlwfSBmcm9tIFwiLi9zaGlwXCJcclxuXHJcbmV4cG9ydCB7R2FtZUJvYXJkfVxyXG5cclxuY2xhc3MgR2FtZUJvYXJkIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihyb3dRdWFudGl0eSA9IDEwLCBjb2x1bW5RdWFudGl0eSA9IDEwKXtcclxuXHJcbiAgICAgICAgdGhpcy5yb3dRdWFudGl0eSA9IHJvd1F1YW50aXR5LFxyXG4gICAgICAgIHRoaXMuY29sdW1uUXVhbnRpdHkgPSBjb2x1bW5RdWFudGl0eSxcclxuICAgICAgICB0aGlzLnNoaXBzID0gW10sXHJcbiAgICAgICAgdGhpcy5zaGlwc1N1bmsgPSBbXSxcclxuICAgICAgICB0aGlzLndhdGVySGl0TGlzdCA9IFtdIC8qIFtbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXV0gKi8sXHJcbiAgICAgICAgdGhpcy5zaGlwSGl0TGlzdCA9IFtdIC8qIFtbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXV0gKi8sXHJcbiAgICAgICAgdGhpcy5zaGlwc0Nvb3JkcyA9IFtdICAgXHJcbiAgICB9XHJcblxyXG4gICAgc2V0UHJvcGVydGllcyhzdGF0ZSl7XHJcblxyXG4gICAgICAgIHRoaXMucm93UXVhbnRpdHkgPSBzdGF0ZS5yb3dRdWFudGl0eTtcclxuICAgICAgICB0aGlzLmNvbHVtblF1YW50aXR5ID0gc3RhdGUuY29sdW1uUXVhbnRpdHk7XHJcbiAgICAgICAgdGhpcy5zaGlwcyA9IHN0YXRlLnNoaXBzO1xyXG4gICAgICAgIHRoaXMuc2hpcHNTdW5rID0gc3RhdGUuc2hpcHNTdW5rO1xyXG4gICAgICAgIHRoaXMud2F0ZXJIaXRMaXN0ID0gc3RhdGUud2F0ZXJIaXRMaXN0O1xyXG4gICAgICAgIHRoaXMuc2hpcEhpdExpc3QgPSBzdGF0ZS5zaGlwSGl0TGlzdDtcclxuICAgICAgICB0aGlzLnNoaXBzQ29vcmRzID0gc3RhdGUuc2hpcHNDb29yZHNcclxuICAgIH07XHJcblxyXG4gICAgI2NyZWF0ZVNoaXBzKCl7XHJcblxyXG4gICAgICAgIGxldCBzaGlwVHlwZXMgPSBbe3R5cGU6IFwiY2FycmllclwiLCBsZW5ndGg6IDV9LCB7dHlwZTogXCJiYXR0bGVzaGlwXCIsIGxlbmd0aDogNH0sIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dHlwZTogXCJkZXN0cm95ZXJcIiwgbGVuZ3RoOiAzfSwge3R5cGU6IFwic3VibWFyaW5lXCIsIGxlbmd0aDogM30sIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dHlwZTogXCJwYXRyb2wgYm9hdFwiLCBsZW5ndGg6IDJ9XVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIGxldCBzaGlwc1F1ZXVlID0gW11cclxuXHJcbiAgICAgICAgZm9yKGxldCBzaGlwIG9mIHNoaXBUeXBlcyl7XHJcbiAgXHJcbiAgICAgICAgICAgIHNoaXBzUXVldWUucHVzaChuZXcgU2hpcChzaGlwLmxlbmd0aCwgc2hpcC50eXBlKSkgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gc2hpcHNRdWV1ZSAgICBcclxuICAgIH1cclxuXHJcbiAgICBwbGFjZVNoaXBzKCkge1xyXG5cclxuICAgICAgICB0aGlzLnNoaXBzID0gW11cclxuICAgICAgICB0aGlzLnNoaXBzQ29vcmRzID0gW11cclxuXHJcbiAgICAgICAgbGV0IHNoaXBzUXVldWUgPSB0aGlzLiNjcmVhdGVTaGlwcygpXHJcbiAgICAgICAgbGV0IGFkamFjZW5jeUxpc3QgPSBbW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW11dXHJcblxyXG4gICAgICAgIHdoaWxlKHNoaXBzUXVldWUubGVuZ3RoID4gMCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgIGxldCByYW5kb21Sb3cgPSAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXHJcbiAgICAgICAgICAgIGxldCByYW5kb21Db2wgPSAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXHJcbiAgICAgICAgICAgIGxldCB2ZXJ0aWNhbCA9ICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMilcclxuICAgIFxyXG4gICAgICAgICAgICBsZXQgcmFuZG9tUm93Q29weSA9IHJhbmRvbVJvd1xyXG4gICAgICAgICAgICBsZXQgcmFuZG9tQ29sQ29weSA9IHJhbmRvbUNvbCBcclxuICAgIFxyXG4gICAgICAgICAgICBsZXQgc2hpcCA9IHNoaXBzUXVldWUuc2hpZnQoKVxyXG4gICAgICAgICAgICB0aGlzLnNoaXBzLnB1c2goc2hpcClcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZihhZGphY2VuY3lMaXN0W3JhbmRvbVJvd0NvcHldLmluY2x1ZGVzKHJhbmRvbUNvbENvcHkpKXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXAuY29vcmRpbmF0ZXMgPSBbXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwc1F1ZXVlLnVuc2hpZnQoc2hpcClcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGlwcy5wb3AoKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNoaXAuY29vcmRpbmF0ZXMucHVzaChbcmFuZG9tUm93Q29weSwgcmFuZG9tQ29sQ29weV0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHZlcnRpY2FsKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyYW5kb21Sb3dDb3B5IDwgKHRoaXMucm93UXVhbnRpdHkgLSAxKSkge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYW5kb21Sb3dDb3B5ICsrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmFuZG9tUm93Q29weSA9IHJhbmRvbVJvdyAtIChzaGlwLmxlbmd0aCAtIChpICsgMSkpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyYW5kb21Db2xDb3B5IDwgKHRoaXMuY29sdW1uUXVhbnRpdHkgLSAxKSkge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYW5kb21Db2xDb3B5ICsrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmFuZG9tQ29sQ29weSA9IHJhbmRvbUNvbCAtIChzaGlwLmxlbmd0aCAtIChpICsgMSkpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKHNoaXAuY29vcmRpbmF0ZXMubGVuZ3RoID4gMCkgdGhpcy4jZW5jbG9zZVNoaXAoc2hpcCwgYWRqYWNlbmN5TGlzdClcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLiNzaGlwc1JlZnMoKVxyXG5cclxuICAgIH1cclxuICAgIFxyXG4gICAgI2VuY2xvc2VTaGlwKHNoaXAsIGFkamFjZW5jeUxpc3Qpe1xyXG5cclxuICAgICAgICBmb3IobGV0IGNvb3JkaW5hdGUgb2Ygc2hpcC5jb29yZGluYXRlcykge1xyXG5cclxuICAgICAgICAgICAgbGV0IHJvdyA9IGNvb3JkaW5hdGVbMF1cclxuICAgICAgICAgICAgbGV0IGNvbCA9IGNvb3JkaW5hdGVbMV1cclxuXHJcbiAgICAgICAgICAgIGxldCBhcmVhID0gW1tyb3cgLSAxLCBjb2xdLCBbcm93IC0gMSwgY29sIC0gMV0sIFtyb3cgLSAxLCBjb2wgKyAxXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW3JvdyArIDEsIGNvbF0sIFtyb3cgKyAxLCBjb2wgLSAxXSwgW3JvdyArIDEsIGNvbCArIDFdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbcm93LCBjb2xdLCBbcm93LCBjb2wgLSAxXSwgW3JvdywgY29sICsgMV1dXHJcblxyXG4gICAgICAgICAgICBmb3IobGV0IGFyciBvZiBhcmVhKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoYXJyWzBdIDwgMCB8fCBhcnJbMV0gPCAwIHx8XHJcbiAgICAgICAgICAgICAgICAgICBhcnJbMF0gPiAodGhpcy5yb3dRdWFudGl0eSAtIDEpIHx8IGFyclsxXSA+ICh0aGlzLmNvbHVtblF1YW50aXR5IC0gMSkpIGNvbnRpbnVlXHJcblxyXG4gICAgICAgICAgICAgICAgaWYoIWFkamFjZW5jeUxpc3RbYXJyWzBdXS5pbmNsdWRlcyhhcnJbMV0pKSBhZGphY2VuY3lMaXN0W2FyclswXV0ucHVzaChhcnJbMV0pIFxyXG4gICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjbGVhcigpIHtcclxuXHJcbiAgICAgICAgdGhpcy5zaGlwSGl0TGlzdCA9ICBbW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW11dXHJcbiAgICAgICAgdGhpcy53YXRlckhpdExpc3QgPSBbW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW11dXHJcbiAgICAgICAgdGhpcy5zaGlwcyA9IFtdXHJcbiAgICAgICAgdGhpcy5zaGlwc1N1bmsgPSBbXVxyXG4gICAgICAgIHRoaXMuc2hpcHNDb29yZHMgPSBbXVxyXG4gICAgfVxyXG5cclxuICAgIHJlY2VpdmVBdHRhY2soc3F1YXJlKXtcclxuICAgIFxyXG4gICAgICAgIGxldCBoaXRPblRhcmdldCA9IGZhbHNlXHJcblxyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJBIFZFUiBMT1MgU0hJUFNcIiwgdGhpcy5zaGlwcylcclxuXHJcbiAgICAgICAgZm9yKGxldCBzaGlwIG9mIHRoaXMuc2hpcHMpIHtcclxuXHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJTSElQXCIsIHNoaXApXHJcblxyXG4gICAgICAgICAgICBmb3IobGV0IGNvb3JkaW5hdGUgb2Ygc2hpcC5jb29yZGluYXRlcyl7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkNPT1JEXCIsIGNvb3JkaW5hdGUpXHJcblxyXG4gICAgICAgICAgICAgICAgaWYoY29vcmRpbmF0ZVswXSA9PT0gc3F1YXJlWzBdICYmIGNvb3JkaW5hdGVbMV0gPT09IHNxdWFyZVsxXSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNISVBcIiwgc2hpcClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2hpcC5oaXQoKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHNoaXAuaXNTdW5rKSB0aGlzLmFsbFNoaXBzU3VuayhzaGlwKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vdGhpcy5zaGlwSGl0TGlzdFtzcXVhcmVbMF1dLnB1c2goc3F1YXJlWzFdKSAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGlwSGl0TGlzdC5wdXNoKHNxdWFyZSkgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGhpdE9uVGFyZ2V0ID0gdHJ1ZVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL2lmKGhpdE9uVGFyZ2V0KSBicmVha1xyXG5cclxuICAgICAgICAgICAgaWYoaGl0T25UYXJnZXQpIHJldHVybiB0cnVlXHJcbiAgICAgICAgfSBcclxuXHJcbiAgICAgICAgLy9pZihoaXRPblRhcmdldCA9PT0gZmFsc2UpIHRoaXMud2F0ZXJIaXRMaXN0W3NxdWFyZVswXV0ucHVzaChzcXVhcmVbMV0pXHJcblxyXG4gICAgICAgIC8vdGhpcy53YXRlckhpdExpc3Rbc3F1YXJlWzBdXS5wdXNoKHNxdWFyZVsxXSlcclxuICAgICAgICB0aGlzLndhdGVySGl0TGlzdC5wdXNoKHNxdWFyZSlcclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgI3NoaXBzUmVmcygpIHtcclxuXHJcbiAgICAgICAgZm9yKGxldCBzaGlwIG9mIHRoaXMuc2hpcHMpIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBjb29yZEFyciA9IFtdXHJcblxyXG4gICAgICAgICAgICBmb3IobGV0IGNvb3JkaW5hdGUgb2Ygc2hpcC5jb29yZGluYXRlcykgY29vcmRBcnIucHVzaChjb29yZGluYXRlKSBcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2hpcHNDb29yZHMucHVzaChjb29yZEFycilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYWxsU2hpcHNTdW5rKHNoaXApIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTSElQIFNVTktFRFwiLCBzaGlwKVxyXG5cclxuICAgICAgICB0aGlzLnNoaXBzU3Vuay5wdXNoKHNoaXApXHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU0hJUCBTVU5LRUQgQVJSQVlcIiwgdGhpcy5zaGlwc1N1bmspXHJcblxyXG4gICAgICAgIGlmKCF0aGlzLnNoaXBzU3Vuay5sZW5ndGggPT09IDUpIHJldHVyblxyXG5cclxuICAgICAgICAvL0FDQSBBTEdPIEhBUklBIFBBUkEgQVZJU0FSIFFVRSBFU1RBTiBUT0RPUyBVTkRJRE9TXHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuIiwiaW1wb3J0IHtHYW1lQm9hcmR9IGZyb20gXCIuL2dhbWVib2FyZFwiXHJcblxyXG5leHBvcnQge1BsYXllcn1cclxuXHJcbmNsYXNzIFBsYXllciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IobmFtZSwgaWQpe1xyXG5cclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lXHJcbiAgICAgICAgdGhpcy5pZCA9IGlkXHJcbiAgICAgICAgLyogdGhpcy5zaGlwcyA9IFt7dHlwZTogXCJjYXJyaWVyXCIsIGxlbmd0aDogNX0sIHt0eXBlOiBcImJhdHRsZXNoaXBcIiwgbGVuZ3RoOiA0fSwge3R5cGU6IFwiZGVzdHJveWVyXCIsIGxlbmd0aDogM30sXHJcbiAgICAgICAgICAgICAgICAgICAgIHt0eXBlOiBcInN1Ym1hcmluZVwiLCBsZW5ndGg6IDN9LCB7dHlwZTogXCJwYXRyb2wgYm9hdFwiLCBsZW5ndGg6IDJ9XSAqL1xyXG4gICAgICAgIHRoaXMuZ2FtZUJvYXJkID0gLyogbmV3IEdhbWVCb2FyZCgpIHx8ICAqL25ldyBHYW1lQm9hcmQoKVxyXG4gICAgfVxyXG59XHJcblxyXG4iLCJleHBvcnQge1NoaXB9XHJcblxyXG5jbGFzcyBTaGlwIHtcclxuXHJcbiAgICBoaXRDb3VudGVyID0gMFxyXG4gICAgI2lzU3VuayA9IGZhbHNlXHJcblxyXG4gICAgY29uc3RydWN0b3IobGVuZ3RoID0gbnVsbCwgdHlwZSA9IG51bGwpe1xyXG4gICAgICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoXHJcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZVxyXG4gICAgICAgIHRoaXMuY29vcmRpbmF0ZXMgPSBbXVxyXG4gICAgfVxyXG5cclxuICAgIHNldFByb3BlcnRpZXMoc3RhdGUpIHtcclxuICAgICAgICB0aGlzLmxlbmd0aCA9IHN0YXRlLmxlbmd0aDtcclxuICAgICAgICB0aGlzLnR5cGUgPSBzdGF0ZS50eXBlO1xyXG4gICAgICAgIHRoaXMuY29vcmRpbmF0ZXMgPSBzdGF0ZS5jb29yZGluYXRlc1xyXG4gICAgICAgIHRoaXMuaGl0Q291bnRlciA9IHN0YXRlLmhpdENvdW50ZXJcclxuICAgIH1cclxuXHJcbiAgICBoaXQoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuaGl0Q291bnRlciArK1xyXG4gICAgICAgIHRoaXMuI3N1bmtDaGVjaygpXHJcbiAgICB9XHJcblxyXG4gICAgI3N1bmtDaGVjaygpe1xyXG4gXHJcbiAgICAgICAgaWYodGhpcy5oaXRDb3VudGVyID09PSB0aGlzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLiNpc1N1bmsgPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBpc1N1bmsoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy4jaXNTdW5rXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge1BsYXllcn0gZnJvbSBcIi4vcGxheWVyXCJcclxuaW1wb3J0IHtTaGlwfSBmcm9tIFwiLi9zaGlwXCJcclxuXHJcbmV4cG9ydCB7c3RvcmVEYXRhLCByZXRyaWV2ZURhdGEsIHVwZGF0ZURhdGF9XHJcblxyXG5cclxuZnVuY3Rpb24gc3RvcmVEYXRhKG1vZGUsIHBsYXllck9uZSwgcGxheWVyVHdvKSB7XHJcblxyXG4gICAgbGV0IHN0YXRlID0ge1xyXG4gICAgICAgIG1vZGU6IG1vZGUsXHJcbiAgICAgICAgcGxheWVyczogW3BsYXllck9uZSwgcGxheWVyVHdvXVxyXG4gICAgfVxyXG5cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic3RhdGVcIiwgSlNPTi5zdHJpbmdpZnkoc3RhdGUpKSBcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlRGF0YShzdGF0ZSl7XHJcblxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzdGF0ZVwiLCBKU09OLnN0cmluZ2lmeShzdGF0ZSkpXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiByZXRyaWV2ZURhdGEoKSB7XHJcblxyXG4gICBsZXQgc3RhdGUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic3RhdGVcIikpXHJcblxyXG4gICBsZXQgcGxheWVyT25lICA9IG5ldyBQbGF5ZXIoc3RhdGUucGxheWVyc1swXS5uYW1lLCAwKVxyXG4gICBsZXQgcGxheWVyVHdvICA9IG5ldyBQbGF5ZXIoc3RhdGUucGxheWVyc1sxXS5uYW1lLCAxKVxyXG4gICBsZXQgcGxheWVycyA9IFtwbGF5ZXJPbmUsIHBsYXllclR3b11cclxuXHJcblxyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHBsYXllcnMubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgcGxheWVyc1tpXS5nYW1lQm9hcmQuc2V0UHJvcGVydGllcyhzdGF0ZS5wbGF5ZXJzW2ldLmdhbWVCb2FyZClcclxuXHJcbiAgICAgICAgbGV0IHBsYXllclNoaXBzID0gcGxheWVyc1tpXS5nYW1lQm9hcmQuc2hpcHNcclxuXHJcblxyXG4gICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCBwbGF5ZXJTaGlwcy5sZW5ndGg7IGorKykge1xyXG5cclxuICAgICAgICAgICAgbGV0IHNoaXBJbnN0YW5jZSA9IG5ldyBTaGlwKHBsYXllclNoaXBzW2pdKVxyXG5cclxuICAgICAgICAgICAgc2hpcEluc3RhbmNlLnNldFByb3BlcnRpZXMoc3RhdGUucGxheWVyc1tpXS5nYW1lQm9hcmQuc2hpcHNbal0pXHJcblxyXG4gICAgICAgICAgICAvLyByZWVtcGxhem8gbGEgY29waWEgZGUgZGF0b3MgZGVsIHNoaXAgcXVlIGVzdGFiYSBlbiBKU09OIHBvciBcclxuICAgICAgICAgICAgLy8gZWwgc2hpcCBpbnN0YW5zaWFkbyB5IGFjdHVhbGl6YWRvLlxyXG4gICAgICAgICAgICBwbGF5ZXJzW2ldLmdhbWVCb2FyZC5zaGlwc1tqXSA9IHNoaXBJbnN0YW5jZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGUucGxheWVycyA9IHBsYXllcnNcclxuXHJcbiAgIHJldHVybiBzdGF0ZVxyXG5cclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4uL3NyYy9zdHlsZS5jc3NcIlxyXG5pbXBvcnQge1BsYXllcn0gZnJvbSBcIi4vcGxheWVyXCJcclxuaW1wb3J0IHtHYW1lQm9hcmR9IGZyb20gXCIuL2dhbWVib2FyZFwiXHJcbmltcG9ydCB7U2hpcH0gZnJvbSBcIi4vc2hpcFwiXHJcbmltcG9ydCB7ZWxlbWVudHN9IGZyb20gXCIuL2RvbVwiXHJcblxyXG5lbGVtZW50cy5pbml0KClcclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==