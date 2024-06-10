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
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* /// CLASSES /// */

.blur{

    filter: blur(20px);
    pointer-events: none;
}

.unable {
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
    flex-direction: column;
    align-items: center;
    justify-content: center;

}

h1 {
    color: beige;
    margin-bottom: 30px;
}

h3 {
    color: beige;
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

.options p, output {
    color: beige;
}


/* /// FOOTER /// */

footer {
    text-align: center;
    color: beige;
}


`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,sBAAsB;IACtB,2DAA2D;AAC/D;;AAEA,oBAAoB;;AAEpB;;IAEI,kBAAkB;IAClB,oBAAoB;AACxB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;;IAEI,iCAAiC;IACjC,aAAa;AACjB;;AAEA;;IAEI,cAAc;IACd,aAAa;;AAEjB;;AAEA;;IAEI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,uBAAuB;IACvB,aAAa;IACb,oCAAoC;IACpC,iCAAiC;;AAErC;;AAEA,mBAAmB;;AAEnB;;IAEI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;;AAE3B;;AAEA;IACI,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,YAAY;AAChB;;AAEA,iBAAiB;;AAEjB;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,gBAAgB;IAChB,sBAAsB;IACtB,kBAAkB;IAClB,8DAA8D;IAC9D,eAAe;IACf,SAAS;IACT,QAAQ;IACR,gCAAgC;IAChC,cAAc;IACd,eAAe;IACf,gCAAgC;AACpC;;;AAGA;;IAEI,aAAa;IACb,sBAAsB;;IAEtB,eAAe;IACf,aAAa;AACjB;;AAEA;IACI;MACE,UAAU;MACV,0CAA0C;MAC1C,aAAa;IACf;;IAEA;MACE,UAAU;MACV,0CAA0C;MAC1C,cAAc;IAChB;EACF;;EAEA;IACE;MACE,UAAU;MACV,0CAA0C;MAC1C,cAAc;IAChB;;IAEA;MACE,UAAU;MACV,0CAA0C;MAC1C,aAAa;IACf;AACJ;;;AAGA;IACI,8BAA8B;AAClC;;;AAGA;;IAEI,kBAAkB;IAClB,aAAa;IACb,eAAe;;AAEnB;;AAEA;IACI,4BAA4B;AAChC;;AAEA;;IAEI,sBAAsB;AAC1B;;AAEA,sBAAsB;;AAEtB;;IAEI,aAAa;;AAEjB;;AAEA;;IAEI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,8BAA8B;IAC9B,aAAa;AACjB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;;IAEI,mBAAmB;AACvB;;AAEA;;IAEI,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,iBAAiB;IACjB,mBAAmB;IACnB,aAAa;IACb,uBAAuB;AAC3B;;AAEA;;IAEI,sBAAsB;IACtB,eAAe;IACf,gBAAgB;IAChB,iBAAiB;IACjB,kBAAkB;IAClB,YAAY;IACZ,uBAAuB;IACvB,uCAAuC;IACvC,4BAA4B;AAChC;;AAEA;;IAEI,sBAAsB;IACtB,uCAAuC;AAC3C;;;;;;;;;;;AAWA;IACI,aAAa;IACb,2BAA2B;IAC3B,YAAY;IACZ,aAAa;;AAEjB;;AAEA;IACI,aAAa;IACb,mCAAmC;IACnC,uCAAuC;;IAEvC,YAAY;AAChB;;AAEA;IACI,uBAAuB;IACvB,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,qBAAqB;IACrB,uBAAuB;;AAE3B;;AAEA;IACI,qBAAqB;IACrB,qBAAqB;;AAEzB;;AAEA;IACI,sBAAsB;IACtB,2BAA2B;;AAE/B;;;;AAIA;IACI,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,YAAY;AAChB;;;AAGA,mBAAmB;;AAEnB;IACI,kBAAkB;IAClB,YAAY;AAChB","sourcesContent":["* {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n:root {\r\n    box-sizing: border-box;\r\n    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n}\r\n\r\n/* /// CLASSES /// */\r\n\r\n.blur{\r\n\r\n    filter: blur(20px);\r\n    pointer-events: none;\r\n}\r\n\r\n.unable {\r\n    pointer-events: none;\r\n}\r\n\r\n#close {\r\n\r\n    animation: fade-out 0.7s ease-out;\r\n    display: none;\r\n}\r\n\r\n.space {\r\n\r\n    padding: var();\r\n    margin: var();\r\n\r\n}\r\n\r\n.display-flex-col{\r\n\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\nbody{\r\n    background-color: black;\r\n    display: grid;\r\n    /* grid-template-rows: 10% 1fr 5%; */\r\n    grid-template-rows: auto 1fr auto;\r\n\r\n}\r\n\r\n/* /// HEADER /// */\r\n\r\nheader {\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n}\r\n\r\nh1 {\r\n    color: beige;\r\n    margin-bottom: 30px;\r\n}\r\n\r\nh3 {\r\n    color: beige;\r\n}\r\n\r\n/* /// MAIN /// */\r\n\r\nmain {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n}\r\n\r\narticle {\r\n    font-weight: 600;\r\n    background-color: #fff;\r\n    border-radius: 5px;\r\n    /* Esto es lo necesario para que el pop-up quede en el medio */\r\n    position: fixed;\r\n    left: 50%;\r\n    top: 50%;\r\n    transform: translate(-50%, -50%);\r\n    /* hasta aca */\r\n    cursor: pointer;\r\n    animation: fade-in 0.7s ease-out;\r\n}\r\n\r\n\r\narticle.mode-selection {\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n\r\n    min-width: 25vw;\r\n    outline: none;\r\n}\r\n\r\n@keyframes fade-in {\r\n    0% {\r\n      opacity: 0;\r\n      transform: translate(-50%, -50%) scaleY(0);\r\n      display: none;\r\n    }\r\n  \r\n    100% {\r\n      opacity: 1;\r\n      transform: translate(-50%, -50%) scaleY(1);\r\n      display: block;\r\n    }\r\n  }\r\n  \r\n  @keyframes fade-out {\r\n    0% {\r\n      opacity: 1;\r\n      transform: translate(-50%, -50%) scaleY(1);\r\n      display: block;\r\n    }\r\n  \r\n    100% {\r\n      opacity: 0;\r\n      transform: translate(-50%, -50%) scaleY(0);\r\n      display: none;\r\n    }\r\n}\r\n\r\n\r\narticle.mode-selection > :first-child {\r\n    border-bottom: 2px solid black;\r\n}\r\n\r\n\r\narticle section {\r\n\r\n    text-align: center;\r\n    padding: 30px;\r\n    margin-block: 0;\r\n    \r\n}\r\n\r\narticle section p {\r\n    transition: ease-in-out 0.4s;\r\n}\r\n\r\narticle section:hover p {\r\n\r\n    transform: scale(1.15);\r\n}\r\n\r\n/* DIALOGS CHIQUITOS */\r\n\r\narticle.child{\r\n\r\n    padding: 30px;\r\n\r\n}\r\n\r\narticle.child div {\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n    border-bottom: 1px solid black;\r\n    padding: 15px;\r\n}\r\n\r\narticle.CpuMode.child div {\r\n    border-bottom: none;\r\n}\r\n\r\narticle.child fieldset div {\r\n\r\n    flex-direction: row;\r\n}\r\n\r\narticle.child div.buttons {\r\n\r\n    flex-direction: row;\r\n    border-bottom: none;\r\n}\r\n\r\ninput {\r\n    font-size: 16.5px;\r\n    font-weight: 500;\r\n    padding: 5px 15px;\r\n    border-radius: 50px;\r\n    outline: none;\r\n    border: 1px solid black;\r\n}\r\n\r\nbutton {\r\n\r\n    background-color: #fff;\r\n    font-size: 15px;\r\n    font-weight: 500;\r\n    padding: 5px 10px;\r\n    border-radius: 5px;\r\n    margin: auto;\r\n    border: 1px solid black;\r\n    box-shadow: 2px 2px 3px rgb(44, 44, 44);\r\n    transition: ease-in-out 0.3s;\r\n}\r\n\r\nbutton:active {\r\n\r\n    transform: scale(0.95);\r\n    box-shadow: 1px 1px 3px rgb(44, 44, 44);\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nsection {\r\n    display: grid;\r\n    grid-template-rows: 1fr 20%;\r\n    margin: 15px;\r\n    padding: 15px;\r\n\r\n}\r\n\r\n.board {\r\n    display: grid;\r\n    grid-template-rows: repeat(10, 1fr);\r\n    grid-template-columns:  repeat(10, 1fr);\r\n\r\n    margin: 15px;\r\n}\r\n\r\n.board div {\r\n    border: 1px solid white;\r\n    min-width: 30px;\r\n    min-height: 30px;\r\n}\r\n\r\n.board div.ship {\r\n    border: 1px solid red;\r\n    background-color: white;\r\n\r\n}\r\n\r\n.board div.hit {\r\n    border: 1px solid red;\r\n    background-color: red;\r\n\r\n}\r\n\r\n.board div.miss {\r\n    border: 1px solid blue;\r\n    background-color: lightblue;\r\n\r\n}\r\n\r\n\r\n\r\n.options {\r\n    margin: 15px;\r\n    padding: 15px;\r\n}\r\n\r\n.options p, output {\r\n    color: beige;\r\n}\r\n\r\n\r\n/* /// FOOTER /// */\r\n\r\nfooter {\r\n    text-align: center;\r\n    color: beige;\r\n}\r\n\r\n\r\n"],"sourceRoot":""}]);
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
/* harmony export */   displayBoard: () => (/* binding */ displayBoard),
/* harmony export */   displayNames: () => (/* binding */ displayNames),
/* harmony export */   displayShip: () => (/* binding */ displayShip),
/* harmony export */   displayTurn: () => (/* binding */ displayTurn)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage */ "./src/storage.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! . */ "./src/index.js");










// CAMBIOS GAME //
function displayTotalBoard(){

    //let state = retrieveData()

    for (let player of /* state.players */___WEBPACK_IMPORTED_MODULE_4__.GAME.players) {

        let board = _dom__WEBPACK_IMPORTED_MODULE_2__.elements.boards[player.ID]

        player.gameBoard.shipsCoords.flat().forEach(coord => addClass(board, coord, "ship")) 

        player.gameBoard.shipHitList.forEach(coord => addClass(board, coord, "hit"))

        player.gameBoard.waterHitList.forEach(coord => addClass(board, coord, "miss"))
    }
}


function displayShip(player) {

    let board = _dom__WEBPACK_IMPORTED_MODULE_2__.elements.boards[player.ID]

    player.gameBoard.shipsCoords.flat().forEach(coord => addClass(board, coord, "ship"))
}

function displayBoard(){

    let player = ___WEBPACK_IMPORTED_MODULE_4__.GAME.players[___WEBPACK_IMPORTED_MODULE_4__.GAME.playerTurn]
    let board = _dom__WEBPACK_IMPORTED_MODULE_2__.elements.boards[player.ID]

    /* player.gameBoard.shipHitList.forEach(coord => addClass(board, coord, "hit")) 
    player.gameBoard.waterHitList.forEach(coord => addClass(board, coord, "miss")) */
    player.getHitList().forEach(coord => addClass(board, coord, "hit")) 
    player.getMissList().forEach(coord => addClass(board, coord, "miss"))
}


function addClass(board, quadrant, className) {

    if(quadrant.length < 1) return

    let [row, col] = quadrant

    let square = board.querySelector(`[data-square="${row}-${col}"]`)

    square.classList.add(`${className}`)
}


function displayNames() {

    for(let i = 0; i < _dom__WEBPACK_IMPORTED_MODULE_2__.elements.outputArr.length; i++) {

        //elements.outputArr[i].textContent = state.players[i].upperCaseName()
        _dom__WEBPACK_IMPORTED_MODULE_2__.elements.outputArr[i].textContent = ___WEBPACK_IMPORTED_MODULE_4__.GAME.players[i].upperCaseName()
    }
}

function displayTurn() {

    let player = ___WEBPACK_IMPORTED_MODULE_4__.GAME.players[___WEBPACK_IMPORTED_MODULE_4__.GAME.playerTurn]
    let title = _dom__WEBPACK_IMPORTED_MODULE_2__.elements.title

    title.textContent = `${player.upperCaseName()}'s turn!`
}


/* function displayHit(player) {

    let board = elements.boards[player.ID]

    player.gameBoard.shipHitList.forEach(coord => addClass(board, coord, "hit")) 
}


function displayMiss(player) {

    let board = elements.boards[player.ID]

    player.gameBoard.waterHitList.forEach(coord => addClass(board, coord, "miss"))
} */


/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createGrid: () => (/* binding */ createGrid),
/* harmony export */   elements: () => (/* binding */ elements),
/* harmony export */   playersReady: () => (/* binding */ playersReady)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage */ "./src/storage.js");
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./display */ "./src/display.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index */ "./src/index.js");










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
    btnReadyArr: Array.from(document.querySelectorAll("button.ready")),
    outputArr: Array.from(document.querySelectorAll("output")),
    title: document.querySelector("h3"),

    init() {
        this.addListeners()
    },

    addListeners() {

        window.addEventListener("load", openModeDialog);
        window.addEventListener("load", applyGrid);
        this.dialogChildren().forEach(child => child.addEventListener("click", gameModeSelection));
        this.btnCancel.forEach(btn => btn.addEventListener("click", cancelDialog));
        this.btnOk.forEach(btn => btn.addEventListener("click", approveDialog));
        this.btnOk.forEach(btn => btn.addEventListener("click", _display__WEBPACK_IMPORTED_MODULE_4__.displayNames));
        this.btnRandomArr.forEach(btn => btn.addEventListener("click", createRandomShips));
        this.btnReadyArr.forEach(btn => btn.addEventListener("click", playersReady));
    },

    dialogChildren(){

       return Array.from(this.dialogMode.children) 
    }
}

function createElement(element, className, secondClassName){

    let el = document.createElement(element)
    el.classList.add(className)

    if(secondClassName) el.classList.add(secondClassName)

    return el
}

function createGrid(board){

    board.innerHTML = ""
    board.classList.add("unable")

    let num = 10

    for(let i = 0; i < num; i++) {

        for(let j = 0; j < num; j++) {

            let quadrant = createElement("div", `row-${i}`, `col-${j}`)
            quadrant.setAttribute("data-square", `${i}-${j}`)
            quadrant.addEventListener("click", hitListener)
            board.appendChild(quadrant)
        } 
    }
}

function applyGrid() {

    for(let board of elements.boards) createGrid(board) 
}



function openModeDialog(){

    elements.dialogMode.removeAttribute("id")
    elements.wrapper.classList.add("blur")
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

    gameModeData(mode)

    console.log("GAME PRIMERO", _index__WEBPACK_IMPORTED_MODULE_5__.GAME)

    e.currentTarget.parentElement.parentElement.setAttribute("id", "close")
    elements.inputsNames.forEach(input => input.value = "")
    elements.wrapper.classList.remove("blur")
}

function gameModeData(mode){

    if(mode === "PlayerMode") {

        _index__WEBPACK_IMPORTED_MODULE_5__.GAME.getGameData(mode, [elements.inputsNames[0].value, elements.inputsNames[1].value], null)
    }
    
    else if(mode === "CpuMode") {

        let difficulty

        elements.inputsRadio.forEach(input => { if(input.checked) difficulty = input.value })

        _index__WEBPACK_IMPORTED_MODULE_5__.GAME.getGameData(mode, [elements.inputsNames[2].value], difficulty)
    }
};


function createRandomShips(e) {

    let whichPlayer = Number(e.currentTarget.dataset.board)
 
    let player = _index__WEBPACK_IMPORTED_MODULE_5__.GAME.players[whichPlayer]
    let board = elements.boards[whichPlayer]

    createGrid(board)

    player.gameBoard.placeShips()

    ;(0,_display__WEBPACK_IMPORTED_MODULE_4__.displayShip)(player)
}

function hitListener(e) {

    let quadrant = e.target.dataset.square.split("-").map(str => Number(str))
   
    _index__WEBPACK_IMPORTED_MODULE_5__.GAME.turn(quadrant)

    ;(0,_display__WEBPACK_IMPORTED_MODULE_4__.displayBoard)()
    ;(0,_display__WEBPACK_IMPORTED_MODULE_4__.displayTurn)()
    toggleBoard()
}

function playersReady(e) {

    console.log("players ready")

    e.currentTarget.dataset.ready = true

    for(let btn of elements.btnReadyArr) if(btn.dataset.ready === "false") return

    _index__WEBPACK_IMPORTED_MODULE_5__.GAME.startGame()

    toggleBoard()
    ;(0,_display__WEBPACK_IMPORTED_MODULE_4__.displayTurn)()
}

function toggleBoard() {

    elements.boards[_index__WEBPACK_IMPORTED_MODULE_5__.GAME.getPassivePlayer()].classList.remove("unable")
    elements.boards[_index__WEBPACK_IMPORTED_MODULE_5__.GAME.playerTurn].classList.add("unable")
}




/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Game: () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ "./src/storage.js");
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./display */ "./src/display.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! . */ "./src/index.js");


//import { Ship } from "./ship"







function gameModeData(mode){

    let playerOne, playerTwo, difficulty

    if(mode === "PlayerMode") {

        playerOne = new _player__WEBPACK_IMPORTED_MODULE_1__.Player(_dom__WEBPACK_IMPORTED_MODULE_0__.elements.inputsNames[0].value || "Player One", 0)
        playerTwo = new _player__WEBPACK_IMPORTED_MODULE_1__.Player(_dom__WEBPACK_IMPORTED_MODULE_0__.elements.inputsNames[1].value || "Player Two", 1)
    }
    
    else if(mode === "CpuMode") {

        playerOne = new _player__WEBPACK_IMPORTED_MODULE_1__.Player(_dom__WEBPACK_IMPORTED_MODULE_0__.elements.inputsNames[2].value || "Player One", 0)
        playerTwo = new _player__WEBPACK_IMPORTED_MODULE_1__.Player("CPU", 1)

        _dom__WEBPACK_IMPORTED_MODULE_0__.elements.inputsRadio.forEach(input => {
            if(input.checked) difficulty = input.value
        })
    }

    (0,_storage__WEBPACK_IMPORTED_MODULE_2__.storeData)(mode, playerOne, playerTwo)
}

function gameOver() {

    let state = (0,_storage__WEBPACK_IMPORTED_MODULE_2__.retrieveData)()

    for(let player of state.players) {

       if (player.gameBoard.shipsSunk.length === 5) {

            console.log("GAMEOVER")

            return true
       }

    }

    return false
}



function startGame(e){

    e.currentTarget.dataset.ready = true


    if(!(_dom__WEBPACK_IMPORTED_MODULE_0__.elements.btnReadyArr[0].dataset.ready === "true" 
    && _dom__WEBPACK_IMPORTED_MODULE_0__.elements.btnReadyArr[1].dataset.ready === "true")) return

    console.log("START GAME")

    let playerTurn =   /* Math.floor(Math.random() * 2) */ 0


    let rivalBoard = playerTurn === 0 ? 1 : 0
    _dom__WEBPACK_IMPORTED_MODULE_0__.elements.boards[rivalBoard].classList.toggle("unable")

    ;(0,_display__WEBPACK_IMPORTED_MODULE_3__.displayTurn)(playerTurn)
}

function turn(e) {

   //let playerBoard = e.currentTarget.dataset.board
   let playerBoard = e.target.parentElement.dataset.board
   console.log("este es el board", playerBoard)

   let target = e.target
   console.log("target", target)

   let quadrant = e.target.dataset.square.split("-").map(str => Number(str))

   //console.log("quadrant", quadrant)

   let duplicatedMove = saveMove(playerBoard, quadrant)

    if(duplicatedMove) return

   _dom__WEBPACK_IMPORTED_MODULE_0__.elements.boards.forEach(board => board.classList.toggle("unable"))

   let isOver = gameOver()

   if(isOver) {
       // chequear quien gano y anunciarlo.
       console.log("GAME OVER")

   }

}

function saveMove(playerBoard, quadrant){

    let state = (0,_storage__WEBPACK_IMPORTED_MODULE_2__.retrieveData)()

    let whichPlayer = playerBoard === "0" ? 1 : 0

    let player = state.players[whichPlayer]

    console.log("a ver player", player)

   let duplicatedMove = player.checkMoves(quadrant)

   if(duplicatedMove) {

        console.log("movimiento repetido!")
        return true
   }

    (0,_storage__WEBPACK_IMPORTED_MODULE_2__.updateData)(state)
}


class Game {

    constructor() {
        
        this.playerTurn;
        this.playerOne;
        this.playerTwo; 
        this.players = [];
        this.mode;
        this.difficulty;
    }

    getGameData(mode, players, difficulty) {

        this.mode = mode
        this.difficulty = difficulty

        if(mode === "PlayerMode") {

            for(let player of players) this.createPlayer(player)
            
            return
        }

        this.createPlayer(players[0])
        //this.createCPU(players[1])
        this.createPlayer(players[1])

    }
  
    createPlayer(name) {

        let index = this.players.length
        let num = index === 0 ? "One" : "Two"

        let player = new _player__WEBPACK_IMPORTED_MODULE_1__.Player(name || `Player ${num}`, index)

        this.players.push(player)
    }

    createCPU() {

        let CPU = new CPU("CPU", 1, this.difficulty)

        this.players.push(CPU)
    }

    startGame(){
    
        console.log("START GAME")
    
        this.playerTurn = Math.floor(Math.random() * 2)
    }

    turn(quadrant) {
 
        let duplicatedMove = this.players[this.playerTurn].checkMoves(quadrant)
     
        if(duplicatedMove) {
             
             console.log("movimiento repetido!")
             return
        }
        
        this.#sendAttack(quadrant)

        if(this.gameOver()) {
            // chequear quien gano y anunciarlo.
            console.log("GAME OVER")
        }

        this.playerTurn = this.getPassivePlayer()
    }

    #sendAttack(quadrant) {

        let player = this.players[this.getPassivePlayer()]
        player.receiveAttack(quadrant)
    }

    gameOver() {
    
        for(let player of this.players) {
            if(player.gameBoard.shipsSunk.length === 5) return true
        }
        
        return false
    }

    getPassivePlayer() {

        return this.playerTurn === 0 ? 1 : 0
    }

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

                    ship.hit()
                    //if(ship.isSunk) this.allShipsSunk(ship)
                    if(ship.isSunk) this.shipsSunk.push(ship)

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

    /* allShipsSunk(ship) {

        console.log("SHIP SUNKED", ship)

        this.shipsSunk.push(ship)

        console.log("SHIP SUNKED ARRAY", this.shipsSunk)

        if(!this.shipsSunk.length === 5) return null

        //ACA ALGO HARIA PARA AVISAR QUE ESTAN TODOS UNDIDOS
        return true
    } */
    
}



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GAME: () => (/* binding */ GAME)
/* harmony export */ });
/* harmony import */ var _src_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/style.css */ "./src/style.css");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game */ "./src/game.js");









let GAME = new _game__WEBPACK_IMPORTED_MODULE_5__.Game()
_dom__WEBPACK_IMPORTED_MODULE_4__.elements.init()






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

    constructor(name, ID){

        this.name = name
        this.ID = ID
        /* this.ships = [{type: "carrier", length: 5}, {type: "battleship", length: 4}, {type: "destroyer", length: 3},
                     {type: "submarine", length: 3}, {type: "patrol boat", length: 2}] */
        this.gameBoard = /* new GameBoard() ||  */new _gameboard__WEBPACK_IMPORTED_MODULE_0__.GameBoard()
        this.moves = []
    }

    setProperties(state) {

        this.name = state.name
        this.ID = state.ID
        this.moves = state.moves
    }

    upperCaseName() {

       return this.name.charAt(0).toUpperCase() + this.name.slice(1)
    }

    checkMoves(quadrant) {

        //if(this.moves.length < 1) return

        for(let move of this.moves) {

            let [row, col] = move

            if(row === quadrant[0] && col === quadrant[1]) {

                //console.log("dentro del object, MOVIMIENTO REPETIDO!")
                //console.log("moves arr", this.moves)

                return true
            } 
        }

        //console.log("dentro del object, MOVIMIENTO VALIDO!")
        //console.log("moves arr", this.moves)
        this.moves.push(quadrant)
    }

    receiveAttack(square) {

        this.gameBoard.receiveAttack(square)
    }

    getHitList(){

       return this.gameBoard.shipHitList
    }

    getMissList(){

        return this.gameBoard.waterHitList
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

   let playerOne  = new _player__WEBPACK_IMPORTED_MODULE_0__.Player()
   let playerTwo  = new _player__WEBPACK_IMPORTED_MODULE_0__.Player()
   let players = [playerOne, playerTwo]


    for(let i = 0; i < players.length; i++) {

        players[i].setProperties(state.players[i])

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sYUFBYSxPQUFPLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksY0FBYyxPQUFPLGFBQWEsT0FBTyxVQUFVLFlBQVksYUFBYSxjQUFjLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLE9BQU8s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QTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG46cm9vdCB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZm9udC1mYW1pbHk6J1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi8qIC8vLyBDTEFTU0VTIC8vLyAqL1xyXG5cclxuLmJsdXJ7XHJcblxyXG4gICAgZmlsdGVyOiBibHVyKDIwcHgpO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbi51bmFibGUge1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbiNjbG9zZSB7XHJcblxyXG4gICAgYW5pbWF0aW9uOiBmYWRlLW91dCAwLjdzIGVhc2Utb3V0O1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnNwYWNlIHtcclxuXHJcbiAgICBwYWRkaW5nOiB2YXIoKTtcclxuICAgIG1hcmdpbjogdmFyKCk7XHJcblxyXG59XHJcblxyXG4uZGlzcGxheS1mbGV4LWNvbHtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuYm9keXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIC8qIGdyaWQtdGVtcGxhdGUtcm93czogMTAlIDFmciA1JTsgKi9cclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcclxuXHJcbn1cclxuXHJcbi8qIC8vLyBIRUFERVIgLy8vICovXHJcblxyXG5oZWFkZXIge1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxufVxyXG5cclxuaDEge1xyXG4gICAgY29sb3I6IGJlaWdlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuaDMge1xyXG4gICAgY29sb3I6IGJlaWdlO1xyXG59XHJcblxyXG4vKiAvLy8gTUFJTiAvLy8gKi9cclxuXHJcbm1haW4ge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxufVxyXG5cclxuYXJ0aWNsZSB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC8qIEVzdG8gZXMgbG8gbmVjZXNhcmlvIHBhcmEgcXVlIGVsIHBvcC11cCBxdWVkZSBlbiBlbCBtZWRpbyAqL1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIC8qIGhhc3RhIGFjYSAqL1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYW5pbWF0aW9uOiBmYWRlLWluIDAuN3MgZWFzZS1vdXQ7XHJcbn1cclxuXHJcblxyXG5hcnRpY2xlLm1vZGUtc2VsZWN0aW9uIHtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICBtaW4td2lkdGg6IDI1dnc7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGUtaW4ge1xyXG4gICAgMCUge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZVkoMCk7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAxMDAlIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGVZKDEpO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBmYWRlLW91dCB7XHJcbiAgICAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlWSgxKTtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAxMDAlIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGVZKDApO1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuYXJ0aWNsZS5tb2RlLXNlbGVjdGlvbiA+IDpmaXJzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcblxyXG5hcnRpY2xlIHNlY3Rpb24ge1xyXG5cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICBtYXJnaW4tYmxvY2s6IDA7XHJcbiAgICBcclxufVxyXG5cclxuYXJ0aWNsZSBzZWN0aW9uIHAge1xyXG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgMC40cztcclxufVxyXG5cclxuYXJ0aWNsZSBzZWN0aW9uOmhvdmVyIHAge1xyXG5cclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XHJcbn1cclxuXHJcbi8qIERJQUxPR1MgQ0hJUVVJVE9TICovXHJcblxyXG5hcnRpY2xlLmNoaWxke1xyXG5cclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcblxyXG59XHJcblxyXG5hcnRpY2xlLmNoaWxkIGRpdiB7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDEwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcblxyXG5hcnRpY2xlLkNwdU1vZGUuY2hpbGQgZGl2IHtcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbn1cclxuXHJcbmFydGljbGUuY2hpbGQgZmllbGRzZXQgZGl2IHtcclxuXHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG5hcnRpY2xlLmNoaWxkIGRpdi5idXR0b25zIHtcclxuXHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gICAgZm9udC1zaXplOiAxNi41cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgcGFkZGluZzogNXB4IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIGJveC1zaGFkb3c6IDJweCAycHggM3B4IHJnYig0NCwgNDQsIDQ0KTtcclxuICAgIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IDAuM3M7XHJcbn1cclxuXHJcbmJ1dHRvbjphY3RpdmUge1xyXG5cclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCByZ2IoNDQsIDQ0LCA0NCk7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbnNlY3Rpb24ge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDIwJTtcclxuICAgIG1hcmdpbjogMTVweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcblxyXG59XHJcblxyXG4uYm9hcmQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAgcmVwZWF0KDEwLCAxZnIpO1xyXG5cclxuICAgIG1hcmdpbjogMTVweDtcclxufVxyXG5cclxuLmJvYXJkIGRpdiB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgIG1pbi13aWR0aDogMzBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi5ib2FyZCBkaXYuc2hpcCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHJcbn1cclxuXHJcbi5ib2FyZCBkaXYuaGl0IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuXHJcbn1cclxuXHJcbi5ib2FyZCBkaXYubWlzcyB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG4ub3B0aW9ucyB7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcblxyXG4ub3B0aW9ucyBwLCBvdXRwdXQge1xyXG4gICAgY29sb3I6IGJlaWdlO1xyXG59XHJcblxyXG5cclxuLyogLy8vIEZPT1RFUiAvLy8gKi9cclxuXHJcbmZvb3RlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogYmVpZ2U7XHJcbn1cclxuXHJcblxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLDJEQUEyRDtBQUMvRDs7QUFFQSxvQkFBb0I7O0FBRXBCOztJQUVJLGtCQUFrQjtJQUNsQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7O0lBRUksaUNBQWlDO0lBQ2pDLGFBQWE7QUFDakI7O0FBRUE7O0lBRUksY0FBYztJQUNkLGFBQWE7O0FBRWpCOztBQUVBOztJQUVJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLG9DQUFvQztJQUNwQyxpQ0FBaUM7O0FBRXJDOztBQUVBLG1CQUFtQjs7QUFFbkI7O0lBRUksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCOztBQUUzQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBLGlCQUFpQjs7QUFFakI7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsOERBQThEO0lBQzlELGVBQWU7SUFDZixTQUFTO0lBQ1QsUUFBUTtJQUNSLGdDQUFnQztJQUNoQyxjQUFjO0lBQ2QsZUFBZTtJQUNmLGdDQUFnQztBQUNwQzs7O0FBR0E7O0lBRUksYUFBYTtJQUNiLHNCQUFzQjs7SUFFdEIsZUFBZTtJQUNmLGFBQWE7QUFDakI7O0FBRUE7SUFDSTtNQUNFLFVBQVU7TUFDViwwQ0FBMEM7TUFDMUMsYUFBYTtJQUNmOztJQUVBO01BQ0UsVUFBVTtNQUNWLDBDQUEwQztNQUMxQyxjQUFjO0lBQ2hCO0VBQ0Y7O0VBRUE7SUFDRTtNQUNFLFVBQVU7TUFDViwwQ0FBMEM7TUFDMUMsY0FBYztJQUNoQjs7SUFFQTtNQUNFLFVBQVU7TUFDViwwQ0FBMEM7TUFDMUMsYUFBYTtJQUNmO0FBQ0o7OztBQUdBO0lBQ0ksOEJBQThCO0FBQ2xDOzs7QUFHQTs7SUFFSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGVBQWU7O0FBRW5COztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBOztJQUVJLHNCQUFzQjtBQUMxQjs7QUFFQSxzQkFBc0I7O0FBRXRCOztJQUVJLGFBQWE7O0FBRWpCOztBQUVBOztJQUVJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztJQUNULDhCQUE4QjtJQUM5QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBOztJQUVJLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7O0lBRUksc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLHVDQUF1QztJQUN2Qyw0QkFBNEI7QUFDaEM7O0FBRUE7O0lBRUksc0JBQXNCO0lBQ3RCLHVDQUF1QztBQUMzQzs7Ozs7Ozs7Ozs7QUFXQTtJQUNJLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsWUFBWTtJQUNaLGFBQWE7O0FBRWpCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1DQUFtQztJQUNuQyx1Q0FBdUM7O0lBRXZDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQix1QkFBdUI7O0FBRTNCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLHFCQUFxQjs7QUFFekI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsMkJBQTJCOztBQUUvQjs7OztBQUlBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOzs7QUFHQSxtQkFBbUI7O0FBRW5CO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBmb250LWZhbWlseTonU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLyogLy8vIENMQVNTRVMgLy8vICovXFxyXFxuXFxyXFxuLmJsdXJ7XFxyXFxuXFxyXFxuICAgIGZpbHRlcjogYmx1cigyMHB4KTtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi51bmFibGUge1xcclxcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI2Nsb3NlIHtcXHJcXG5cXHJcXG4gICAgYW5pbWF0aW9uOiBmYWRlLW91dCAwLjdzIGVhc2Utb3V0O1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uc3BhY2Uge1xcclxcblxcclxcbiAgICBwYWRkaW5nOiB2YXIoKTtcXHJcXG4gICAgbWFyZ2luOiB2YXIoKTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmRpc3BsYXktZmxleC1jb2x7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmJvZHl7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAvKiBncmlkLXRlbXBsYXRlLXJvd3M6IDEwJSAxZnIgNSU7ICovXFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLyogLy8vIEhFQURFUiAvLy8gKi9cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgICBjb2xvcjogYmVpZ2U7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxyXFxufVxcclxcblxcclxcbmgzIHtcXHJcXG4gICAgY29sb3I6IGJlaWdlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAvLy8gTUFJTiAvLy8gKi9cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbn1cXHJcXG5cXHJcXG5hcnRpY2xlIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICAvKiBFc3RvIGVzIGxvIG5lY2VzYXJpbyBwYXJhIHF1ZSBlbCBwb3AtdXAgcXVlZGUgZW4gZWwgbWVkaW8gKi9cXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIHRvcDogNTAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gICAgLyogaGFzdGEgYWNhICovXFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYW5pbWF0aW9uOiBmYWRlLWluIDAuN3MgZWFzZS1vdXQ7XFxyXFxufVxcclxcblxcclxcblxcclxcbmFydGljbGUubW9kZS1zZWxlY3Rpb24ge1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcclxcbiAgICBtaW4td2lkdGg6IDI1dnc7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgZmFkZS1pbiB7XFxyXFxuICAgIDAlIHtcXHJcXG4gICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlWSgwKTtcXHJcXG4gICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB9XFxyXFxuICBcXHJcXG4gICAgMTAwJSB7XFxyXFxuICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZVkoMSk7XFxyXFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgQGtleWZyYW1lcyBmYWRlLW91dCB7XFxyXFxuICAgIDAlIHtcXHJcXG4gICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlWSgxKTtcXHJcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgfVxcclxcbiAgXFxyXFxuICAgIDEwMCUge1xcclxcbiAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGVZKDApO1xcclxcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuYXJ0aWNsZS5tb2RlLXNlbGVjdGlvbiA+IDpmaXJzdC1jaGlsZCB7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuYXJ0aWNsZSBzZWN0aW9uIHtcXHJcXG5cXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAzMHB4O1xcclxcbiAgICBtYXJnaW4tYmxvY2s6IDA7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG5hcnRpY2xlIHNlY3Rpb24gcCB7XFxyXFxuICAgIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IDAuNHM7XFxyXFxufVxcclxcblxcclxcbmFydGljbGUgc2VjdGlvbjpob3ZlciBwIHtcXHJcXG5cXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcXHJcXG59XFxyXFxuXFxyXFxuLyogRElBTE9HUyBDSElRVUlUT1MgKi9cXHJcXG5cXHJcXG5hcnRpY2xlLmNoaWxke1xcclxcblxcclxcbiAgICBwYWRkaW5nOiAzMHB4O1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5hcnRpY2xlLmNoaWxkIGRpdiB7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBwYWRkaW5nOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5hcnRpY2xlLkNwdU1vZGUuY2hpbGQgZGl2IHtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuYXJ0aWNsZS5jaGlsZCBmaWVsZHNldCBkaXYge1xcclxcblxcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbn1cXHJcXG5cXHJcXG5hcnRpY2xlLmNoaWxkIGRpdi5idXR0b25zIHtcXHJcXG5cXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQge1xcclxcbiAgICBmb250LXNpemU6IDE2LjVweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgcGFkZGluZzogNXB4IDE1cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcblxcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBmb250LXNpemU6IDE1cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggM3B4IHJnYig0NCwgNDQsIDQ0KTtcXHJcXG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uOmFjdGl2ZSB7XFxyXFxuXFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxyXFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IHJnYig0NCwgNDQsIDQ0KTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuc2VjdGlvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDIwJTtcXHJcXG4gICAgbWFyZ2luOiAxNXB4O1xcclxcbiAgICBwYWRkaW5nOiAxNXB4O1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uYm9hcmQge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAgcmVwZWF0KDEwLCAxZnIpO1xcclxcblxcclxcbiAgICBtYXJnaW46IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5ib2FyZCBkaXYge1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG4gICAgbWluLXdpZHRoOiAzMHB4O1xcclxcbiAgICBtaW4taGVpZ2h0OiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYm9hcmQgZGl2LnNoaXAge1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uYm9hcmQgZGl2LmhpdCB7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uYm9hcmQgZGl2Lm1pc3Mge1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxyXFxuXFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi5vcHRpb25zIHtcXHJcXG4gICAgbWFyZ2luOiAxNXB4O1xcclxcbiAgICBwYWRkaW5nOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ub3B0aW9ucyBwLCBvdXRwdXQge1xcclxcbiAgICBjb2xvcjogYmVpZ2U7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIC8vLyBGT09URVIgLy8vICovXFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBjb2xvcjogYmVpZ2U7XFxyXFxufVxcclxcblxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHtQbGF5ZXJ9IGZyb20gXCIuL3BsYXllclwiXHJcbmltcG9ydCB7R2FtZUJvYXJkfSBmcm9tIFwiLi9nYW1lYm9hcmRcIlxyXG5pbXBvcnQge2VsZW1lbnRzLCBjcmVhdGVHcmlkfSBmcm9tIFwiLi9kb21cIlxyXG5pbXBvcnQge3N0b3JlRGF0YSwgcmV0cmlldmVEYXRhLCB1cGRhdGVEYXRhfSBmcm9tIFwiLi9zdG9yYWdlXCJcclxuaW1wb3J0IHsgR0FNRSB9IGZyb20gXCIuXCJcclxuXHJcbmV4cG9ydCB7ZGlzcGxheUJvYXJkLCBkaXNwbGF5U2hpcCwgZGlzcGxheU5hbWVzLCBkaXNwbGF5VHVybn1cclxuXHJcblxyXG5cclxuLy8gQ0FNQklPUyBHQU1FIC8vXHJcbmZ1bmN0aW9uIGRpc3BsYXlUb3RhbEJvYXJkKCl7XHJcblxyXG4gICAgLy9sZXQgc3RhdGUgPSByZXRyaWV2ZURhdGEoKVxyXG5cclxuICAgIGZvciAobGV0IHBsYXllciBvZiAvKiBzdGF0ZS5wbGF5ZXJzICovR0FNRS5wbGF5ZXJzKSB7XHJcblxyXG4gICAgICAgIGxldCBib2FyZCA9IGVsZW1lbnRzLmJvYXJkc1twbGF5ZXIuSURdXHJcblxyXG4gICAgICAgIHBsYXllci5nYW1lQm9hcmQuc2hpcHNDb29yZHMuZmxhdCgpLmZvckVhY2goY29vcmQgPT4gYWRkQ2xhc3MoYm9hcmQsIGNvb3JkLCBcInNoaXBcIikpIFxyXG5cclxuICAgICAgICBwbGF5ZXIuZ2FtZUJvYXJkLnNoaXBIaXRMaXN0LmZvckVhY2goY29vcmQgPT4gYWRkQ2xhc3MoYm9hcmQsIGNvb3JkLCBcImhpdFwiKSlcclxuXHJcbiAgICAgICAgcGxheWVyLmdhbWVCb2FyZC53YXRlckhpdExpc3QuZm9yRWFjaChjb29yZCA9PiBhZGRDbGFzcyhib2FyZCwgY29vcmQsIFwibWlzc1wiKSlcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlTaGlwKHBsYXllcikge1xyXG5cclxuICAgIGxldCBib2FyZCA9IGVsZW1lbnRzLmJvYXJkc1twbGF5ZXIuSURdXHJcblxyXG4gICAgcGxheWVyLmdhbWVCb2FyZC5zaGlwc0Nvb3Jkcy5mbGF0KCkuZm9yRWFjaChjb29yZCA9PiBhZGRDbGFzcyhib2FyZCwgY29vcmQsIFwic2hpcFwiKSlcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheUJvYXJkKCl7XHJcblxyXG4gICAgbGV0IHBsYXllciA9IEdBTUUucGxheWVyc1tHQU1FLnBsYXllclR1cm5dXHJcbiAgICBsZXQgYm9hcmQgPSBlbGVtZW50cy5ib2FyZHNbcGxheWVyLklEXVxyXG5cclxuICAgIC8qIHBsYXllci5nYW1lQm9hcmQuc2hpcEhpdExpc3QuZm9yRWFjaChjb29yZCA9PiBhZGRDbGFzcyhib2FyZCwgY29vcmQsIFwiaGl0XCIpKSBcclxuICAgIHBsYXllci5nYW1lQm9hcmQud2F0ZXJIaXRMaXN0LmZvckVhY2goY29vcmQgPT4gYWRkQ2xhc3MoYm9hcmQsIGNvb3JkLCBcIm1pc3NcIikpICovXHJcbiAgICBwbGF5ZXIuZ2V0SGl0TGlzdCgpLmZvckVhY2goY29vcmQgPT4gYWRkQ2xhc3MoYm9hcmQsIGNvb3JkLCBcImhpdFwiKSkgXHJcbiAgICBwbGF5ZXIuZ2V0TWlzc0xpc3QoKS5mb3JFYWNoKGNvb3JkID0+IGFkZENsYXNzKGJvYXJkLCBjb29yZCwgXCJtaXNzXCIpKVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gYWRkQ2xhc3MoYm9hcmQsIHF1YWRyYW50LCBjbGFzc05hbWUpIHtcclxuXHJcbiAgICBpZihxdWFkcmFudC5sZW5ndGggPCAxKSByZXR1cm5cclxuXHJcbiAgICBsZXQgW3JvdywgY29sXSA9IHF1YWRyYW50XHJcblxyXG4gICAgbGV0IHNxdWFyZSA9IGJvYXJkLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXNxdWFyZT1cIiR7cm93fS0ke2NvbH1cIl1gKVxyXG5cclxuICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKGAke2NsYXNzTmFtZX1gKVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZGlzcGxheU5hbWVzKCkge1xyXG5cclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBlbGVtZW50cy5vdXRwdXRBcnIubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgLy9lbGVtZW50cy5vdXRwdXRBcnJbaV0udGV4dENvbnRlbnQgPSBzdGF0ZS5wbGF5ZXJzW2ldLnVwcGVyQ2FzZU5hbWUoKVxyXG4gICAgICAgIGVsZW1lbnRzLm91dHB1dEFycltpXS50ZXh0Q29udGVudCA9IEdBTUUucGxheWVyc1tpXS51cHBlckNhc2VOYW1lKClcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheVR1cm4oKSB7XHJcblxyXG4gICAgbGV0IHBsYXllciA9IEdBTUUucGxheWVyc1tHQU1FLnBsYXllclR1cm5dXHJcbiAgICBsZXQgdGl0bGUgPSBlbGVtZW50cy50aXRsZVxyXG5cclxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gYCR7cGxheWVyLnVwcGVyQ2FzZU5hbWUoKX0ncyB0dXJuIWBcclxufVxyXG5cclxuXHJcbi8qIGZ1bmN0aW9uIGRpc3BsYXlIaXQocGxheWVyKSB7XHJcblxyXG4gICAgbGV0IGJvYXJkID0gZWxlbWVudHMuYm9hcmRzW3BsYXllci5JRF1cclxuXHJcbiAgICBwbGF5ZXIuZ2FtZUJvYXJkLnNoaXBIaXRMaXN0LmZvckVhY2goY29vcmQgPT4gYWRkQ2xhc3MoYm9hcmQsIGNvb3JkLCBcImhpdFwiKSkgXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5TWlzcyhwbGF5ZXIpIHtcclxuXHJcbiAgICBsZXQgYm9hcmQgPSBlbGVtZW50cy5ib2FyZHNbcGxheWVyLklEXVxyXG5cclxuICAgIHBsYXllci5nYW1lQm9hcmQud2F0ZXJIaXRMaXN0LmZvckVhY2goY29vcmQgPT4gYWRkQ2xhc3MoYm9hcmQsIGNvb3JkLCBcIm1pc3NcIikpXHJcbn0gKi9cclxuIiwiaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vcGxheWVyXCJcclxuaW1wb3J0IHsgR2FtZUJvYXJkIH0gZnJvbSBcIi4vZ2FtZWJvYXJkXCJcclxuaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL3NoaXBcIlxyXG5pbXBvcnQgeyBzdG9yZURhdGEsIHJldHJpZXZlRGF0YSwgdXBkYXRlRGF0YSB9IGZyb20gXCIuL3N0b3JhZ2VcIlxyXG5pbXBvcnQgeyBkaXNwbGF5Qm9hcmQsIGRpc3BsYXlTaGlwLCBkaXNwbGF5TmFtZXMsIGRpc3BsYXlUdXJuIH0gZnJvbSBcIi4vZGlzcGxheVwiXHJcbmltcG9ydCB7IEdBTUUgfSBmcm9tIFwiLi9pbmRleFwiXHJcblxyXG5leHBvcnQge2VsZW1lbnRzLCBjcmVhdGVHcmlkLCBwbGF5ZXJzUmVhZHl9XHJcblxyXG5cclxubGV0IGVsZW1lbnRzID0ge1xyXG5cclxuICAgIHdyYXBwZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud3JhcHBlclwiKSxcclxuICAgIGJvYXJkczogQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJvYXJkXCIpKSxcclxuICAgIGRpYWxvZ01vZGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhcnRpY2xlXCIpLFxyXG4gICAgZGlhbG9nUGxheWVyTW9kZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImFydGljbGUuUGxheWVyTW9kZVwiKSxcclxuICAgIGRpYWxvZ0NwdU1vZGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhcnRpY2xlLkNwdU1vZGVcIiksXHJcbiAgICBidG5DYW5jZWw6IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImJ1dHRvbi5jYW5jZWxcIikpLFxyXG4gICAgYnRuT2s6IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImJ1dHRvbi5va1wiKSksXHJcbiAgICBpbnB1dHNOYW1lczogQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW25hbWU9cGxheWVyLW5hbWVdXCIpKSxcclxuICAgIGlucHV0c1JhZGlvOiBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbmFtZT1kaWZmaWN1bHR5XVwiKSksXHJcbiAgICBidG5SYW5kb21BcnI6IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImJ1dHRvbi5yYW5kb21cIikpLFxyXG4gICAgYnRuUmVhZHlBcnI6IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImJ1dHRvbi5yZWFkeVwiKSksXHJcbiAgICBvdXRwdXRBcnI6IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIm91dHB1dFwiKSksXHJcbiAgICB0aXRsZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgzXCIpLFxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKVxyXG4gICAgfSxcclxuXHJcbiAgICBhZGRMaXN0ZW5lcnMoKSB7XHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBvcGVuTW9kZURpYWxvZyk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGFwcGx5R3JpZCk7XHJcbiAgICAgICAgdGhpcy5kaWFsb2dDaGlsZHJlbigpLmZvckVhY2goY2hpbGQgPT4gY2hpbGQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdhbWVNb2RlU2VsZWN0aW9uKSk7XHJcbiAgICAgICAgdGhpcy5idG5DYW5jZWwuZm9yRWFjaChidG4gPT4gYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjYW5jZWxEaWFsb2cpKTtcclxuICAgICAgICB0aGlzLmJ0bk9rLmZvckVhY2goYnRuID0+IGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXBwcm92ZURpYWxvZykpO1xyXG4gICAgICAgIHRoaXMuYnRuT2suZm9yRWFjaChidG4gPT4gYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkaXNwbGF5TmFtZXMpKTtcclxuICAgICAgICB0aGlzLmJ0blJhbmRvbUFyci5mb3JFYWNoKGJ0biA9PiBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNyZWF0ZVJhbmRvbVNoaXBzKSk7XHJcbiAgICAgICAgdGhpcy5idG5SZWFkeUFyci5mb3JFYWNoKGJ0biA9PiBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHBsYXllcnNSZWFkeSkpO1xyXG4gICAgfSxcclxuXHJcbiAgICBkaWFsb2dDaGlsZHJlbigpe1xyXG5cclxuICAgICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuZGlhbG9nTW9kZS5jaGlsZHJlbikgXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoZWxlbWVudCwgY2xhc3NOYW1lLCBzZWNvbmRDbGFzc05hbWUpe1xyXG5cclxuICAgIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudClcclxuICAgIGVsLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKVxyXG5cclxuICAgIGlmKHNlY29uZENsYXNzTmFtZSkgZWwuY2xhc3NMaXN0LmFkZChzZWNvbmRDbGFzc05hbWUpXHJcblxyXG4gICAgcmV0dXJuIGVsXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUdyaWQoYm9hcmQpe1xyXG5cclxuICAgIGJvYXJkLmlubmVySFRNTCA9IFwiXCJcclxuICAgIGJvYXJkLmNsYXNzTGlzdC5hZGQoXCJ1bmFibGVcIilcclxuXHJcbiAgICBsZXQgbnVtID0gMTBcclxuXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgbnVtOyBpKyspIHtcclxuXHJcbiAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IG51bTsgaisrKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgcXVhZHJhbnQgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIGByb3ctJHtpfWAsIGBjb2wtJHtqfWApXHJcbiAgICAgICAgICAgIHF1YWRyYW50LnNldEF0dHJpYnV0ZShcImRhdGEtc3F1YXJlXCIsIGAke2l9LSR7an1gKVxyXG4gICAgICAgICAgICBxdWFkcmFudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGl0TGlzdGVuZXIpXHJcbiAgICAgICAgICAgIGJvYXJkLmFwcGVuZENoaWxkKHF1YWRyYW50KVxyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5R3JpZCgpIHtcclxuXHJcbiAgICBmb3IobGV0IGJvYXJkIG9mIGVsZW1lbnRzLmJvYXJkcykgY3JlYXRlR3JpZChib2FyZCkgXHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gb3Blbk1vZGVEaWFsb2coKXtcclxuXHJcbiAgICBlbGVtZW50cy5kaWFsb2dNb2RlLnJlbW92ZUF0dHJpYnV0ZShcImlkXCIpXHJcbiAgICBlbGVtZW50cy53cmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJibHVyXCIpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdhbWVNb2RlU2VsZWN0aW9uKGUpIHtcclxuXHJcbiAgICBlbGVtZW50cy5kaWFsb2dNb2RlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY2xvc2VcIilcclxuXHJcbiAgICBsZXQgZ2FtZU1vZGUgPSBlLmN1cnJlbnRUYXJnZXQuY2xhc3NOYW1lXHJcblxyXG4gICAgbGV0IGRpYWxvZyA9IGVsZW1lbnRzW2BkaWFsb2cke2dhbWVNb2RlfWBdXHJcbiAgICBkaWFsb2cucmVtb3ZlQXR0cmlidXRlKFwiaWRcIilcclxufVxyXG5cclxuZnVuY3Rpb24gY2FuY2VsRGlhbG9nKGUpe1xyXG5cclxuICAgIC8vaWYoZS5rZXkgIT09IFwiRXNjYXBlXCIpIHJldHVyblxyXG4gICAgZS5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNsb3NlXCIpXHJcbiAgICBlbGVtZW50cy5pbnB1dHNOYW1lcy5mb3JFYWNoKGlucHV0ID0+IGlucHV0LnZhbHVlID0gXCJcIilcclxuXHJcbiAgICBvcGVuTW9kZURpYWxvZygpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcHJvdmVEaWFsb2coZSkge1xyXG5cclxuICAgIC8vaWYoZS5rZXkgIT09IFwiRW50ZXJcIikgcmV0dXJuXHJcbiAgICBsZXQgbW9kZSA9IGUudGFyZ2V0LmRhdGFzZXQubW9kZVxyXG5cclxuICAgIGdhbWVNb2RlRGF0YShtb2RlKVxyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiR0FNRSBQUklNRVJPXCIsIEdBTUUpXHJcblxyXG4gICAgZS5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNsb3NlXCIpXHJcbiAgICBlbGVtZW50cy5pbnB1dHNOYW1lcy5mb3JFYWNoKGlucHV0ID0+IGlucHV0LnZhbHVlID0gXCJcIilcclxuICAgIGVsZW1lbnRzLndyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZShcImJsdXJcIilcclxufVxyXG5cclxuZnVuY3Rpb24gZ2FtZU1vZGVEYXRhKG1vZGUpe1xyXG5cclxuICAgIGlmKG1vZGUgPT09IFwiUGxheWVyTW9kZVwiKSB7XHJcblxyXG4gICAgICAgIEdBTUUuZ2V0R2FtZURhdGEobW9kZSwgW2VsZW1lbnRzLmlucHV0c05hbWVzWzBdLnZhbHVlLCBlbGVtZW50cy5pbnB1dHNOYW1lc1sxXS52YWx1ZV0sIG51bGwpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGVsc2UgaWYobW9kZSA9PT0gXCJDcHVNb2RlXCIpIHtcclxuXHJcbiAgICAgICAgbGV0IGRpZmZpY3VsdHlcclxuXHJcbiAgICAgICAgZWxlbWVudHMuaW5wdXRzUmFkaW8uZm9yRWFjaChpbnB1dCA9PiB7IGlmKGlucHV0LmNoZWNrZWQpIGRpZmZpY3VsdHkgPSBpbnB1dC52YWx1ZSB9KVxyXG5cclxuICAgICAgICBHQU1FLmdldEdhbWVEYXRhKG1vZGUsIFtlbGVtZW50cy5pbnB1dHNOYW1lc1syXS52YWx1ZV0sIGRpZmZpY3VsdHkpXHJcbiAgICB9XHJcbn07XHJcblxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUmFuZG9tU2hpcHMoZSkge1xyXG5cclxuICAgIGxldCB3aGljaFBsYXllciA9IE51bWJlcihlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5ib2FyZClcclxuIFxyXG4gICAgbGV0IHBsYXllciA9IEdBTUUucGxheWVyc1t3aGljaFBsYXllcl1cclxuICAgIGxldCBib2FyZCA9IGVsZW1lbnRzLmJvYXJkc1t3aGljaFBsYXllcl1cclxuXHJcbiAgICBjcmVhdGVHcmlkKGJvYXJkKVxyXG5cclxuICAgIHBsYXllci5nYW1lQm9hcmQucGxhY2VTaGlwcygpXHJcblxyXG4gICAgZGlzcGxheVNoaXAocGxheWVyKVxyXG59XHJcblxyXG5mdW5jdGlvbiBoaXRMaXN0ZW5lcihlKSB7XHJcblxyXG4gICAgbGV0IHF1YWRyYW50ID0gZS50YXJnZXQuZGF0YXNldC5zcXVhcmUuc3BsaXQoXCItXCIpLm1hcChzdHIgPT4gTnVtYmVyKHN0cikpXHJcbiAgIFxyXG4gICAgR0FNRS50dXJuKHF1YWRyYW50KVxyXG5cclxuICAgIGRpc3BsYXlCb2FyZCgpXHJcbiAgICBkaXNwbGF5VHVybigpXHJcbiAgICB0b2dnbGVCb2FyZCgpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBsYXllcnNSZWFkeShlKSB7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJwbGF5ZXJzIHJlYWR5XCIpXHJcblxyXG4gICAgZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQucmVhZHkgPSB0cnVlXHJcblxyXG4gICAgZm9yKGxldCBidG4gb2YgZWxlbWVudHMuYnRuUmVhZHlBcnIpIGlmKGJ0bi5kYXRhc2V0LnJlYWR5ID09PSBcImZhbHNlXCIpIHJldHVyblxyXG5cclxuICAgIEdBTUUuc3RhcnRHYW1lKClcclxuXHJcbiAgICB0b2dnbGVCb2FyZCgpXHJcbiAgICBkaXNwbGF5VHVybigpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZUJvYXJkKCkge1xyXG5cclxuICAgIGVsZW1lbnRzLmJvYXJkc1tHQU1FLmdldFBhc3NpdmVQbGF5ZXIoKV0uY2xhc3NMaXN0LnJlbW92ZShcInVuYWJsZVwiKVxyXG4gICAgZWxlbWVudHMuYm9hcmRzW0dBTUUucGxheWVyVHVybl0uY2xhc3NMaXN0LmFkZChcInVuYWJsZVwiKVxyXG59XHJcblxyXG5cclxuIiwiaW1wb3J0IHtlbGVtZW50cywgcGxheWVyc1JlYWR5fSBmcm9tIFwiLi9kb21cIlxyXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9wbGF5ZXJcIlxyXG4vL2ltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi9zaGlwXCJcclxuaW1wb3J0IHtzdG9yZURhdGEsIHJldHJpZXZlRGF0YSwgdXBkYXRlRGF0YX0gZnJvbSBcIi4vc3RvcmFnZVwiXHJcbmltcG9ydCB7IGRpc3BsYXlUdXJuIH0gZnJvbSBcIi4vZGlzcGxheVwiXHJcbmltcG9ydCB7IEdBTUUgfSBmcm9tIFwiLlwiXHJcblxyXG5cclxuZXhwb3J0IHsgR2FtZSB9XHJcblxyXG5mdW5jdGlvbiBnYW1lTW9kZURhdGEobW9kZSl7XHJcblxyXG4gICAgbGV0IHBsYXllck9uZSwgcGxheWVyVHdvLCBkaWZmaWN1bHR5XHJcblxyXG4gICAgaWYobW9kZSA9PT0gXCJQbGF5ZXJNb2RlXCIpIHtcclxuXHJcbiAgICAgICAgcGxheWVyT25lID0gbmV3IFBsYXllcihlbGVtZW50cy5pbnB1dHNOYW1lc1swXS52YWx1ZSB8fCBcIlBsYXllciBPbmVcIiwgMClcclxuICAgICAgICBwbGF5ZXJUd28gPSBuZXcgUGxheWVyKGVsZW1lbnRzLmlucHV0c05hbWVzWzFdLnZhbHVlIHx8IFwiUGxheWVyIFR3b1wiLCAxKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBlbHNlIGlmKG1vZGUgPT09IFwiQ3B1TW9kZVwiKSB7XHJcblxyXG4gICAgICAgIHBsYXllck9uZSA9IG5ldyBQbGF5ZXIoZWxlbWVudHMuaW5wdXRzTmFtZXNbMl0udmFsdWUgfHwgXCJQbGF5ZXIgT25lXCIsIDApXHJcbiAgICAgICAgcGxheWVyVHdvID0gbmV3IFBsYXllcihcIkNQVVwiLCAxKVxyXG5cclxuICAgICAgICBlbGVtZW50cy5pbnB1dHNSYWRpby5mb3JFYWNoKGlucHV0ID0+IHtcclxuICAgICAgICAgICAgaWYoaW5wdXQuY2hlY2tlZCkgZGlmZmljdWx0eSA9IGlucHV0LnZhbHVlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzdG9yZURhdGEobW9kZSwgcGxheWVyT25lLCBwbGF5ZXJUd28pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdhbWVPdmVyKCkge1xyXG5cclxuICAgIGxldCBzdGF0ZSA9IHJldHJpZXZlRGF0YSgpXHJcblxyXG4gICAgZm9yKGxldCBwbGF5ZXIgb2Ygc3RhdGUucGxheWVycykge1xyXG5cclxuICAgICAgIGlmIChwbGF5ZXIuZ2FtZUJvYXJkLnNoaXBzU3Vuay5sZW5ndGggPT09IDUpIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiR0FNRU9WRVJcIilcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZVxyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHN0YXJ0R2FtZShlKXtcclxuXHJcbiAgICBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5yZWFkeSA9IHRydWVcclxuXHJcblxyXG4gICAgaWYoIShlbGVtZW50cy5idG5SZWFkeUFyclswXS5kYXRhc2V0LnJlYWR5ID09PSBcInRydWVcIiBcclxuICAgICYmIGVsZW1lbnRzLmJ0blJlYWR5QXJyWzFdLmRhdGFzZXQucmVhZHkgPT09IFwidHJ1ZVwiKSkgcmV0dXJuXHJcblxyXG4gICAgY29uc29sZS5sb2coXCJTVEFSVCBHQU1FXCIpXHJcblxyXG4gICAgbGV0IHBsYXllclR1cm4gPSAgIC8qIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpICovIDBcclxuXHJcblxyXG4gICAgbGV0IHJpdmFsQm9hcmQgPSBwbGF5ZXJUdXJuID09PSAwID8gMSA6IDBcclxuICAgIGVsZW1lbnRzLmJvYXJkc1tyaXZhbEJvYXJkXS5jbGFzc0xpc3QudG9nZ2xlKFwidW5hYmxlXCIpXHJcblxyXG4gICAgZGlzcGxheVR1cm4ocGxheWVyVHVybilcclxufVxyXG5cclxuZnVuY3Rpb24gdHVybihlKSB7XHJcblxyXG4gICAvL2xldCBwbGF5ZXJCb2FyZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmJvYXJkXHJcbiAgIGxldCBwbGF5ZXJCb2FyZCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuZGF0YXNldC5ib2FyZFxyXG4gICBjb25zb2xlLmxvZyhcImVzdGUgZXMgZWwgYm9hcmRcIiwgcGxheWVyQm9hcmQpXHJcblxyXG4gICBsZXQgdGFyZ2V0ID0gZS50YXJnZXRcclxuICAgY29uc29sZS5sb2coXCJ0YXJnZXRcIiwgdGFyZ2V0KVxyXG5cclxuICAgbGV0IHF1YWRyYW50ID0gZS50YXJnZXQuZGF0YXNldC5zcXVhcmUuc3BsaXQoXCItXCIpLm1hcChzdHIgPT4gTnVtYmVyKHN0cikpXHJcblxyXG4gICAvL2NvbnNvbGUubG9nKFwicXVhZHJhbnRcIiwgcXVhZHJhbnQpXHJcblxyXG4gICBsZXQgZHVwbGljYXRlZE1vdmUgPSBzYXZlTW92ZShwbGF5ZXJCb2FyZCwgcXVhZHJhbnQpXHJcblxyXG4gICAgaWYoZHVwbGljYXRlZE1vdmUpIHJldHVyblxyXG5cclxuICAgZWxlbWVudHMuYm9hcmRzLmZvckVhY2goYm9hcmQgPT4gYm9hcmQuY2xhc3NMaXN0LnRvZ2dsZShcInVuYWJsZVwiKSlcclxuXHJcbiAgIGxldCBpc092ZXIgPSBnYW1lT3ZlcigpXHJcblxyXG4gICBpZihpc092ZXIpIHtcclxuICAgICAgIC8vIGNoZXF1ZWFyIHF1aWVuIGdhbm8geSBhbnVuY2lhcmxvLlxyXG4gICAgICAgY29uc29sZS5sb2coXCJHQU1FIE9WRVJcIilcclxuXHJcbiAgIH1cclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNhdmVNb3ZlKHBsYXllckJvYXJkLCBxdWFkcmFudCl7XHJcblxyXG4gICAgbGV0IHN0YXRlID0gcmV0cmlldmVEYXRhKClcclxuXHJcbiAgICBsZXQgd2hpY2hQbGF5ZXIgPSBwbGF5ZXJCb2FyZCA9PT0gXCIwXCIgPyAxIDogMFxyXG5cclxuICAgIGxldCBwbGF5ZXIgPSBzdGF0ZS5wbGF5ZXJzW3doaWNoUGxheWVyXVxyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiYSB2ZXIgcGxheWVyXCIsIHBsYXllcilcclxuXHJcbiAgIGxldCBkdXBsaWNhdGVkTW92ZSA9IHBsYXllci5jaGVja01vdmVzKHF1YWRyYW50KVxyXG5cclxuICAgaWYoZHVwbGljYXRlZE1vdmUpIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJtb3ZpbWllbnRvIHJlcGV0aWRvIVwiKVxyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgIH1cclxuXHJcbiAgICB1cGRhdGVEYXRhKHN0YXRlKVxyXG59XHJcblxyXG5cclxuY2xhc3MgR2FtZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5wbGF5ZXJUdXJuO1xyXG4gICAgICAgIHRoaXMucGxheWVyT25lO1xyXG4gICAgICAgIHRoaXMucGxheWVyVHdvOyBcclxuICAgICAgICB0aGlzLnBsYXllcnMgPSBbXTtcclxuICAgICAgICB0aGlzLm1vZGU7XHJcbiAgICAgICAgdGhpcy5kaWZmaWN1bHR5O1xyXG4gICAgfVxyXG5cclxuICAgIGdldEdhbWVEYXRhKG1vZGUsIHBsYXllcnMsIGRpZmZpY3VsdHkpIHtcclxuXHJcbiAgICAgICAgdGhpcy5tb2RlID0gbW9kZVxyXG4gICAgICAgIHRoaXMuZGlmZmljdWx0eSA9IGRpZmZpY3VsdHlcclxuXHJcbiAgICAgICAgaWYobW9kZSA9PT0gXCJQbGF5ZXJNb2RlXCIpIHtcclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgcGxheWVyIG9mIHBsYXllcnMpIHRoaXMuY3JlYXRlUGxheWVyKHBsYXllcilcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jcmVhdGVQbGF5ZXIocGxheWVyc1swXSlcclxuICAgICAgICAvL3RoaXMuY3JlYXRlQ1BVKHBsYXllcnNbMV0pXHJcbiAgICAgICAgdGhpcy5jcmVhdGVQbGF5ZXIocGxheWVyc1sxXSlcclxuXHJcbiAgICB9XHJcbiAgXHJcbiAgICBjcmVhdGVQbGF5ZXIobmFtZSkge1xyXG5cclxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLnBsYXllcnMubGVuZ3RoXHJcbiAgICAgICAgbGV0IG51bSA9IGluZGV4ID09PSAwID8gXCJPbmVcIiA6IFwiVHdvXCJcclxuXHJcbiAgICAgICAgbGV0IHBsYXllciA9IG5ldyBQbGF5ZXIobmFtZSB8fCBgUGxheWVyICR7bnVtfWAsIGluZGV4KVxyXG5cclxuICAgICAgICB0aGlzLnBsYXllcnMucHVzaChwbGF5ZXIpXHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlQ1BVKCkge1xyXG5cclxuICAgICAgICBsZXQgQ1BVID0gbmV3IENQVShcIkNQVVwiLCAxLCB0aGlzLmRpZmZpY3VsdHkpXHJcblxyXG4gICAgICAgIHRoaXMucGxheWVycy5wdXNoKENQVSlcclxuICAgIH1cclxuXHJcbiAgICBzdGFydEdhbWUoKXtcclxuICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU1RBUlQgR0FNRVwiKVxyXG4gICAgXHJcbiAgICAgICAgdGhpcy5wbGF5ZXJUdXJuID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMilcclxuICAgIH1cclxuXHJcbiAgICB0dXJuKHF1YWRyYW50KSB7XHJcbiBcclxuICAgICAgICBsZXQgZHVwbGljYXRlZE1vdmUgPSB0aGlzLnBsYXllcnNbdGhpcy5wbGF5ZXJUdXJuXS5jaGVja01vdmVzKHF1YWRyYW50KVxyXG4gICAgIFxyXG4gICAgICAgIGlmKGR1cGxpY2F0ZWRNb3ZlKSB7XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibW92aW1pZW50byByZXBldGlkbyFcIilcclxuICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLiNzZW5kQXR0YWNrKHF1YWRyYW50KVxyXG5cclxuICAgICAgICBpZih0aGlzLmdhbWVPdmVyKCkpIHtcclxuICAgICAgICAgICAgLy8gY2hlcXVlYXIgcXVpZW4gZ2FubyB5IGFudW5jaWFybG8uXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiR0FNRSBPVkVSXCIpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnBsYXllclR1cm4gPSB0aGlzLmdldFBhc3NpdmVQbGF5ZXIoKVxyXG4gICAgfVxyXG5cclxuICAgICNzZW5kQXR0YWNrKHF1YWRyYW50KSB7XHJcblxyXG4gICAgICAgIGxldCBwbGF5ZXIgPSB0aGlzLnBsYXllcnNbdGhpcy5nZXRQYXNzaXZlUGxheWVyKCldXHJcbiAgICAgICAgcGxheWVyLnJlY2VpdmVBdHRhY2socXVhZHJhbnQpXHJcbiAgICB9XHJcblxyXG4gICAgZ2FtZU92ZXIoKSB7XHJcbiAgICBcclxuICAgICAgICBmb3IobGV0IHBsYXllciBvZiB0aGlzLnBsYXllcnMpIHtcclxuICAgICAgICAgICAgaWYocGxheWVyLmdhbWVCb2FyZC5zaGlwc1N1bmsubGVuZ3RoID09PSA1KSByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICBnZXRQYXNzaXZlUGxheWVyKCkge1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5wbGF5ZXJUdXJuID09PSAwID8gMSA6IDBcclxuICAgIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHtTaGlwfSBmcm9tIFwiLi9zaGlwXCJcclxuXHJcbmV4cG9ydCB7R2FtZUJvYXJkfVxyXG5cclxuY2xhc3MgR2FtZUJvYXJkIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihyb3dRdWFudGl0eSA9IDEwLCBjb2x1bW5RdWFudGl0eSA9IDEwKXtcclxuXHJcbiAgICAgICAgdGhpcy5yb3dRdWFudGl0eSA9IHJvd1F1YW50aXR5LFxyXG4gICAgICAgIHRoaXMuY29sdW1uUXVhbnRpdHkgPSBjb2x1bW5RdWFudGl0eSxcclxuICAgICAgICB0aGlzLnNoaXBzID0gW10sXHJcbiAgICAgICAgdGhpcy5zaGlwc1N1bmsgPSBbXSxcclxuICAgICAgICB0aGlzLndhdGVySGl0TGlzdCA9IFtdIC8qIFtbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXV0gKi8sXHJcbiAgICAgICAgdGhpcy5zaGlwSGl0TGlzdCA9IFtdIC8qIFtbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXV0gKi8sXHJcbiAgICAgICAgdGhpcy5zaGlwc0Nvb3JkcyA9IFtdICAgXHJcbiAgICB9XHJcblxyXG4gICAgc2V0UHJvcGVydGllcyhzdGF0ZSl7XHJcblxyXG4gICAgICAgIHRoaXMucm93UXVhbnRpdHkgPSBzdGF0ZS5yb3dRdWFudGl0eTtcclxuICAgICAgICB0aGlzLmNvbHVtblF1YW50aXR5ID0gc3RhdGUuY29sdW1uUXVhbnRpdHk7XHJcbiAgICAgICAgdGhpcy5zaGlwcyA9IHN0YXRlLnNoaXBzO1xyXG4gICAgICAgIHRoaXMuc2hpcHNTdW5rID0gc3RhdGUuc2hpcHNTdW5rO1xyXG4gICAgICAgIHRoaXMud2F0ZXJIaXRMaXN0ID0gc3RhdGUud2F0ZXJIaXRMaXN0O1xyXG4gICAgICAgIHRoaXMuc2hpcEhpdExpc3QgPSBzdGF0ZS5zaGlwSGl0TGlzdDtcclxuICAgICAgICB0aGlzLnNoaXBzQ29vcmRzID0gc3RhdGUuc2hpcHNDb29yZHNcclxuICAgIH07XHJcblxyXG4gICAgI2NyZWF0ZVNoaXBzKCl7XHJcblxyXG4gICAgICAgIGxldCBzaGlwVHlwZXMgPSBbe3R5cGU6IFwiY2FycmllclwiLCBsZW5ndGg6IDV9LCB7dHlwZTogXCJiYXR0bGVzaGlwXCIsIGxlbmd0aDogNH0sIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dHlwZTogXCJkZXN0cm95ZXJcIiwgbGVuZ3RoOiAzfSwge3R5cGU6IFwic3VibWFyaW5lXCIsIGxlbmd0aDogM30sIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dHlwZTogXCJwYXRyb2wgYm9hdFwiLCBsZW5ndGg6IDJ9XVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIGxldCBzaGlwc1F1ZXVlID0gW11cclxuXHJcbiAgICAgICAgZm9yKGxldCBzaGlwIG9mIHNoaXBUeXBlcyl7XHJcbiAgXHJcbiAgICAgICAgICAgIHNoaXBzUXVldWUucHVzaChuZXcgU2hpcChzaGlwLmxlbmd0aCwgc2hpcC50eXBlKSkgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gc2hpcHNRdWV1ZSAgICBcclxuICAgIH1cclxuXHJcbiAgICBwbGFjZVNoaXBzKCkge1xyXG5cclxuICAgICAgICB0aGlzLnNoaXBzID0gW11cclxuICAgICAgICB0aGlzLnNoaXBzQ29vcmRzID0gW11cclxuXHJcbiAgICAgICAgbGV0IHNoaXBzUXVldWUgPSB0aGlzLiNjcmVhdGVTaGlwcygpXHJcbiAgICAgICAgbGV0IGFkamFjZW5jeUxpc3QgPSBbW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW11dXHJcblxyXG4gICAgICAgIHdoaWxlKHNoaXBzUXVldWUubGVuZ3RoID4gMCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgIGxldCByYW5kb21Sb3cgPSAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXHJcbiAgICAgICAgICAgIGxldCByYW5kb21Db2wgPSAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXHJcbiAgICAgICAgICAgIGxldCB2ZXJ0aWNhbCA9ICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMilcclxuICAgIFxyXG4gICAgICAgICAgICBsZXQgcmFuZG9tUm93Q29weSA9IHJhbmRvbVJvd1xyXG4gICAgICAgICAgICBsZXQgcmFuZG9tQ29sQ29weSA9IHJhbmRvbUNvbCBcclxuICAgIFxyXG4gICAgICAgICAgICBsZXQgc2hpcCA9IHNoaXBzUXVldWUuc2hpZnQoKVxyXG4gICAgICAgICAgICB0aGlzLnNoaXBzLnB1c2goc2hpcClcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZihhZGphY2VuY3lMaXN0W3JhbmRvbVJvd0NvcHldLmluY2x1ZGVzKHJhbmRvbUNvbENvcHkpKXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXAuY29vcmRpbmF0ZXMgPSBbXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwc1F1ZXVlLnVuc2hpZnQoc2hpcClcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGlwcy5wb3AoKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNoaXAuY29vcmRpbmF0ZXMucHVzaChbcmFuZG9tUm93Q29weSwgcmFuZG9tQ29sQ29weV0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHZlcnRpY2FsKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyYW5kb21Sb3dDb3B5IDwgKHRoaXMucm93UXVhbnRpdHkgLSAxKSkge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYW5kb21Sb3dDb3B5ICsrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmFuZG9tUm93Q29weSA9IHJhbmRvbVJvdyAtIChzaGlwLmxlbmd0aCAtIChpICsgMSkpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyYW5kb21Db2xDb3B5IDwgKHRoaXMuY29sdW1uUXVhbnRpdHkgLSAxKSkge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYW5kb21Db2xDb3B5ICsrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmFuZG9tQ29sQ29weSA9IHJhbmRvbUNvbCAtIChzaGlwLmxlbmd0aCAtIChpICsgMSkpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKHNoaXAuY29vcmRpbmF0ZXMubGVuZ3RoID4gMCkgdGhpcy4jZW5jbG9zZVNoaXAoc2hpcCwgYWRqYWNlbmN5TGlzdClcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLiNzaGlwc1JlZnMoKVxyXG5cclxuICAgIH1cclxuICAgIFxyXG4gICAgI2VuY2xvc2VTaGlwKHNoaXAsIGFkamFjZW5jeUxpc3Qpe1xyXG5cclxuICAgICAgICBmb3IobGV0IGNvb3JkaW5hdGUgb2Ygc2hpcC5jb29yZGluYXRlcykge1xyXG5cclxuICAgICAgICAgICAgbGV0IHJvdyA9IGNvb3JkaW5hdGVbMF1cclxuICAgICAgICAgICAgbGV0IGNvbCA9IGNvb3JkaW5hdGVbMV1cclxuXHJcbiAgICAgICAgICAgIGxldCBhcmVhID0gW1tyb3cgLSAxLCBjb2xdLCBbcm93IC0gMSwgY29sIC0gMV0sIFtyb3cgLSAxLCBjb2wgKyAxXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW3JvdyArIDEsIGNvbF0sIFtyb3cgKyAxLCBjb2wgLSAxXSwgW3JvdyArIDEsIGNvbCArIDFdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbcm93LCBjb2xdLCBbcm93LCBjb2wgLSAxXSwgW3JvdywgY29sICsgMV1dXHJcblxyXG4gICAgICAgICAgICBmb3IobGV0IGFyciBvZiBhcmVhKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoYXJyWzBdIDwgMCB8fCBhcnJbMV0gPCAwIHx8XHJcbiAgICAgICAgICAgICAgICAgICBhcnJbMF0gPiAodGhpcy5yb3dRdWFudGl0eSAtIDEpIHx8IGFyclsxXSA+ICh0aGlzLmNvbHVtblF1YW50aXR5IC0gMSkpIGNvbnRpbnVlXHJcblxyXG4gICAgICAgICAgICAgICAgaWYoIWFkamFjZW5jeUxpc3RbYXJyWzBdXS5pbmNsdWRlcyhhcnJbMV0pKSBhZGphY2VuY3lMaXN0W2FyclswXV0ucHVzaChhcnJbMV0pIFxyXG4gICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjbGVhcigpIHtcclxuXHJcbiAgICAgICAgdGhpcy5zaGlwSGl0TGlzdCA9ICBbW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW11dXHJcbiAgICAgICAgdGhpcy53YXRlckhpdExpc3QgPSBbW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW11dXHJcbiAgICAgICAgdGhpcy5zaGlwcyA9IFtdXHJcbiAgICAgICAgdGhpcy5zaGlwc1N1bmsgPSBbXVxyXG4gICAgICAgIHRoaXMuc2hpcHNDb29yZHMgPSBbXVxyXG4gICAgfVxyXG5cclxuICAgIHJlY2VpdmVBdHRhY2soc3F1YXJlKXtcclxuICAgIFxyXG4gICAgICAgIGxldCBoaXRPblRhcmdldCA9IGZhbHNlXHJcblxyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJBIFZFUiBMT1MgU0hJUFNcIiwgdGhpcy5zaGlwcylcclxuXHJcbiAgICAgICAgZm9yKGxldCBzaGlwIG9mIHRoaXMuc2hpcHMpIHtcclxuXHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJTSElQXCIsIHNoaXApXHJcblxyXG4gICAgICAgICAgICBmb3IobGV0IGNvb3JkaW5hdGUgb2Ygc2hpcC5jb29yZGluYXRlcyl7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkNPT1JEXCIsIGNvb3JkaW5hdGUpXHJcblxyXG4gICAgICAgICAgICAgICAgaWYoY29vcmRpbmF0ZVswXSA9PT0gc3F1YXJlWzBdICYmIGNvb3JkaW5hdGVbMV0gPT09IHNxdWFyZVsxXSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzaGlwLmhpdCgpXHJcbiAgICAgICAgICAgICAgICAgICAgLy9pZihzaGlwLmlzU3VuaykgdGhpcy5hbGxTaGlwc1N1bmsoc2hpcClcclxuICAgICAgICAgICAgICAgICAgICBpZihzaGlwLmlzU3VuaykgdGhpcy5zaGlwc1N1bmsucHVzaChzaGlwKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL3RoaXMuc2hpcEhpdExpc3Rbc3F1YXJlWzBdXS5wdXNoKHNxdWFyZVsxXSkgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hpcEhpdExpc3QucHVzaChzcXVhcmUpICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBoaXRPblRhcmdldCA9IHRydWVcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9pZihoaXRPblRhcmdldCkgYnJlYWtcclxuXHJcbiAgICAgICAgICAgIGlmKGhpdE9uVGFyZ2V0KSByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIH0gXHJcblxyXG4gICAgICAgIC8vaWYoaGl0T25UYXJnZXQgPT09IGZhbHNlKSB0aGlzLndhdGVySGl0TGlzdFtzcXVhcmVbMF1dLnB1c2goc3F1YXJlWzFdKVxyXG5cclxuICAgICAgICAvL3RoaXMud2F0ZXJIaXRMaXN0W3NxdWFyZVswXV0ucHVzaChzcXVhcmVbMV0pXHJcbiAgICAgICAgdGhpcy53YXRlckhpdExpc3QucHVzaChzcXVhcmUpXHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgICNzaGlwc1JlZnMoKSB7XHJcblxyXG4gICAgICAgIGZvcihsZXQgc2hpcCBvZiB0aGlzLnNoaXBzKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgY29vcmRBcnIgPSBbXVxyXG5cclxuICAgICAgICAgICAgZm9yKGxldCBjb29yZGluYXRlIG9mIHNoaXAuY29vcmRpbmF0ZXMpIGNvb3JkQXJyLnB1c2goY29vcmRpbmF0ZSkgXHJcblxyXG4gICAgICAgICAgICB0aGlzLnNoaXBzQ29vcmRzLnB1c2goY29vcmRBcnIpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qIGFsbFNoaXBzU3VuayhzaGlwKSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU0hJUCBTVU5LRURcIiwgc2hpcClcclxuXHJcbiAgICAgICAgdGhpcy5zaGlwc1N1bmsucHVzaChzaGlwKVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNISVAgU1VOS0VEIEFSUkFZXCIsIHRoaXMuc2hpcHNTdW5rKVxyXG5cclxuICAgICAgICBpZighdGhpcy5zaGlwc1N1bmsubGVuZ3RoID09PSA1KSByZXR1cm4gbnVsbFxyXG5cclxuICAgICAgICAvL0FDQSBBTEdPIEhBUklBIFBBUkEgQVZJU0FSIFFVRSBFU1RBTiBUT0RPUyBVTkRJRE9TXHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgIH0gKi9cclxuICAgIFxyXG59XHJcblxyXG4iLCJpbXBvcnQgXCIuLi9zcmMvc3R5bGUuY3NzXCJcclxuaW1wb3J0IHtQbGF5ZXJ9IGZyb20gXCIuL3BsYXllclwiXHJcbmltcG9ydCB7R2FtZUJvYXJkfSBmcm9tIFwiLi9nYW1lYm9hcmRcIlxyXG5pbXBvcnQge1NoaXB9IGZyb20gXCIuL3NoaXBcIlxyXG5pbXBvcnQge2VsZW1lbnRzfSBmcm9tIFwiLi9kb21cIlxyXG5pbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi4vZ2FtZVwiXHJcblxyXG5leHBvcnQgeyBHQU1FIH1cclxuXHJcbmxldCBHQU1FID0gbmV3IEdhbWUoKVxyXG5lbGVtZW50cy5pbml0KClcclxuXHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7R2FtZUJvYXJkfSBmcm9tIFwiLi9nYW1lYm9hcmRcIlxyXG5cclxuZXhwb3J0IHtQbGF5ZXJ9XHJcblxyXG5jbGFzcyBQbGF5ZXIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIElEKXtcclxuXHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZVxyXG4gICAgICAgIHRoaXMuSUQgPSBJRFxyXG4gICAgICAgIC8qIHRoaXMuc2hpcHMgPSBbe3R5cGU6IFwiY2FycmllclwiLCBsZW5ndGg6IDV9LCB7dHlwZTogXCJiYXR0bGVzaGlwXCIsIGxlbmd0aDogNH0sIHt0eXBlOiBcImRlc3Ryb3llclwiLCBsZW5ndGg6IDN9LFxyXG4gICAgICAgICAgICAgICAgICAgICB7dHlwZTogXCJzdWJtYXJpbmVcIiwgbGVuZ3RoOiAzfSwge3R5cGU6IFwicGF0cm9sIGJvYXRcIiwgbGVuZ3RoOiAyfV0gKi9cclxuICAgICAgICB0aGlzLmdhbWVCb2FyZCA9IC8qIG5ldyBHYW1lQm9hcmQoKSB8fCAgKi9uZXcgR2FtZUJvYXJkKClcclxuICAgICAgICB0aGlzLm1vdmVzID0gW11cclxuICAgIH1cclxuXHJcbiAgICBzZXRQcm9wZXJ0aWVzKHN0YXRlKSB7XHJcblxyXG4gICAgICAgIHRoaXMubmFtZSA9IHN0YXRlLm5hbWVcclxuICAgICAgICB0aGlzLklEID0gc3RhdGUuSURcclxuICAgICAgICB0aGlzLm1vdmVzID0gc3RhdGUubW92ZXNcclxuICAgIH1cclxuXHJcbiAgICB1cHBlckNhc2VOYW1lKCkge1xyXG5cclxuICAgICAgIHJldHVybiB0aGlzLm5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0aGlzLm5hbWUuc2xpY2UoMSlcclxuICAgIH1cclxuXHJcbiAgICBjaGVja01vdmVzKHF1YWRyYW50KSB7XHJcblxyXG4gICAgICAgIC8vaWYodGhpcy5tb3Zlcy5sZW5ndGggPCAxKSByZXR1cm5cclxuXHJcbiAgICAgICAgZm9yKGxldCBtb3ZlIG9mIHRoaXMubW92ZXMpIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBbcm93LCBjb2xdID0gbW92ZVxyXG5cclxuICAgICAgICAgICAgaWYocm93ID09PSBxdWFkcmFudFswXSAmJiBjb2wgPT09IHF1YWRyYW50WzFdKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImRlbnRybyBkZWwgb2JqZWN0LCBNT1ZJTUlFTlRPIFJFUEVUSURPIVwiKVxyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIm1vdmVzIGFyclwiLCB0aGlzLm1vdmVzKVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiZGVudHJvIGRlbCBvYmplY3QsIE1PVklNSUVOVE8gVkFMSURPIVwiKVxyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJtb3ZlcyBhcnJcIiwgdGhpcy5tb3ZlcylcclxuICAgICAgICB0aGlzLm1vdmVzLnB1c2gocXVhZHJhbnQpXHJcbiAgICB9XHJcblxyXG4gICAgcmVjZWl2ZUF0dGFjayhzcXVhcmUpIHtcclxuXHJcbiAgICAgICAgdGhpcy5nYW1lQm9hcmQucmVjZWl2ZUF0dGFjayhzcXVhcmUpXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SGl0TGlzdCgpe1xyXG5cclxuICAgICAgIHJldHVybiB0aGlzLmdhbWVCb2FyZC5zaGlwSGl0TGlzdFxyXG4gICAgfVxyXG5cclxuICAgIGdldE1pc3NMaXN0KCl7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmdhbWVCb2FyZC53YXRlckhpdExpc3RcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbiIsImV4cG9ydCB7U2hpcH1cclxuXHJcbmNsYXNzIFNoaXAge1xyXG5cclxuICAgIGhpdENvdW50ZXIgPSAwXHJcbiAgICAjaXNTdW5rID0gZmFsc2VcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihsZW5ndGggPSBudWxsLCB0eXBlID0gbnVsbCl7XHJcbiAgICAgICAgdGhpcy5sZW5ndGggPSBsZW5ndGhcclxuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlXHJcbiAgICAgICAgdGhpcy5jb29yZGluYXRlcyA9IFtdXHJcbiAgICB9XHJcblxyXG4gICAgc2V0UHJvcGVydGllcyhzdGF0ZSkge1xyXG4gICAgICAgIHRoaXMubGVuZ3RoID0gc3RhdGUubGVuZ3RoO1xyXG4gICAgICAgIHRoaXMudHlwZSA9IHN0YXRlLnR5cGU7XHJcbiAgICAgICAgdGhpcy5jb29yZGluYXRlcyA9IHN0YXRlLmNvb3JkaW5hdGVzXHJcbiAgICAgICAgdGhpcy5oaXRDb3VudGVyID0gc3RhdGUuaGl0Q291bnRlclxyXG4gICAgfVxyXG5cclxuICAgIGhpdCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5oaXRDb3VudGVyICsrXHJcbiAgICAgICAgdGhpcy4jc3Vua0NoZWNrKClcclxuICAgIH1cclxuXHJcbiAgICAjc3Vua0NoZWNrKCl7XHJcbiBcclxuICAgICAgICBpZih0aGlzLmhpdENvdW50ZXIgPT09IHRoaXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuI2lzU3VuayA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGlzU3Vuaygpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLiNpc1N1bmtcclxuICAgIH1cclxufSIsImltcG9ydCB7UGxheWVyfSBmcm9tIFwiLi9wbGF5ZXJcIlxyXG5pbXBvcnQge1NoaXB9IGZyb20gXCIuL3NoaXBcIlxyXG5cclxuZXhwb3J0IHtzdG9yZURhdGEsIHJldHJpZXZlRGF0YSwgdXBkYXRlRGF0YX1cclxuXHJcblxyXG5mdW5jdGlvbiBzdG9yZURhdGEobW9kZSwgcGxheWVyT25lLCBwbGF5ZXJUd28pIHtcclxuXHJcbiAgICBsZXQgc3RhdGUgPSB7XHJcbiAgICAgICAgbW9kZTogbW9kZSxcclxuICAgICAgICBwbGF5ZXJzOiBbcGxheWVyT25lLCBwbGF5ZXJUd29dXHJcbiAgICB9XHJcblxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzdGF0ZVwiLCBKU09OLnN0cmluZ2lmeShzdGF0ZSkpIFxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVEYXRhKHN0YXRlKXtcclxuXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInN0YXRlXCIsIEpTT04uc3RyaW5naWZ5KHN0YXRlKSlcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHJldHJpZXZlRGF0YSgpIHtcclxuXHJcbiAgIGxldCBzdGF0ZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzdGF0ZVwiKSlcclxuXHJcbiAgIGxldCBwbGF5ZXJPbmUgID0gbmV3IFBsYXllcigpXHJcbiAgIGxldCBwbGF5ZXJUd28gID0gbmV3IFBsYXllcigpXHJcbiAgIGxldCBwbGF5ZXJzID0gW3BsYXllck9uZSwgcGxheWVyVHdvXVxyXG5cclxuXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgcGxheWVycy5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICBwbGF5ZXJzW2ldLnNldFByb3BlcnRpZXMoc3RhdGUucGxheWVyc1tpXSlcclxuXHJcbiAgICAgICAgcGxheWVyc1tpXS5nYW1lQm9hcmQuc2V0UHJvcGVydGllcyhzdGF0ZS5wbGF5ZXJzW2ldLmdhbWVCb2FyZClcclxuXHJcbiAgICAgICAgbGV0IHBsYXllclNoaXBzID0gcGxheWVyc1tpXS5nYW1lQm9hcmQuc2hpcHNcclxuXHJcblxyXG4gICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCBwbGF5ZXJTaGlwcy5sZW5ndGg7IGorKykge1xyXG5cclxuICAgICAgICAgICAgbGV0IHNoaXBJbnN0YW5jZSA9IG5ldyBTaGlwKHBsYXllclNoaXBzW2pdKVxyXG5cclxuICAgICAgICAgICAgc2hpcEluc3RhbmNlLnNldFByb3BlcnRpZXMoc3RhdGUucGxheWVyc1tpXS5nYW1lQm9hcmQuc2hpcHNbal0pXHJcblxyXG4gICAgICAgICAgICAvLyByZWVtcGxhem8gbGEgY29waWEgZGUgZGF0b3MgZGVsIHNoaXAgcXVlIGVzdGFiYSBlbiBKU09OIHBvciBcclxuICAgICAgICAgICAgLy8gZWwgc2hpcCBpbnN0YW5zaWFkbyB5IGFjdHVhbGl6YWRvLlxyXG4gICAgICAgICAgICBwbGF5ZXJzW2ldLmdhbWVCb2FyZC5zaGlwc1tqXSA9IHNoaXBJbnN0YW5jZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGUucGxheWVycyA9IHBsYXllcnNcclxuXHJcbiAgIHJldHVybiBzdGF0ZVxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=