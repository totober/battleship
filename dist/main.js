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
/* harmony export */   displayShip: () => (/* binding */ displayShip)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage */ "./src/storage.js");










function displayTotalBoard(){

    let state = (0,_storage__WEBPACK_IMPORTED_MODULE_3__.retrieveData)()

    for (let player of state.players) {

        let board = _dom__WEBPACK_IMPORTED_MODULE_2__.elements.boards[player.ID]

        player.gameBoard.shipsCoords.flat().forEach(coord => addClass(board, coord, "ship")) 

        player.gameBoard.shipHitList.forEach(coord => addClass(board, coord, "hit"))

        player.gameBoard.waterHitList.forEach(coord => addClass(board, coord, "miss"))
    }
}


function displayBoard(player, hitOnTarget) {

    if(hitOnTarget) displayHit(player)

    if(!hitOnTarget) displayMiss(player)
}


function displayShip(player) {

    let board = _dom__WEBPACK_IMPORTED_MODULE_2__.elements.boards[player.ID]

    player.gameBoard.shipsCoords.flat().forEach(coord => addClass(board, coord, "ship"))
}


function displayHit(player) {

    let board = _dom__WEBPACK_IMPORTED_MODULE_2__.elements.boards[player.ID]

    player.gameBoard.shipHitList.forEach(coord => addClass(board, coord, "hit")) 
}


function displayMiss(player) {

    let board = _dom__WEBPACK_IMPORTED_MODULE_2__.elements.boards[player.ID]

    player.gameBoard.waterHitList.forEach(coord => addClass(board, coord, "miss"))
}


function addClass(board, quadrant, className) {

    if(quadrant.length < 1) return

    let [row, col] = quadrant

    let square = board.querySelector(`[data-square="${row}-${col}"]`)

    square.classList.add(`${className}`)
}

function displayNames() {

    let state = (0,_storage__WEBPACK_IMPORTED_MODULE_3__.retrieveData)() 

    for(let i = 0; i < _dom__WEBPACK_IMPORTED_MODULE_2__.elements.outputArr.length; i++) {

        _dom__WEBPACK_IMPORTED_MODULE_2__.elements.outputArr[i].textContent = state.players[i].upperCaseName()

    }

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
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game */ "./src/game.js");










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
        //window.addEventListener("load", game);
        this.dialogChildren().forEach(child => child.addEventListener("click", gameModeSelection));
        this.btnCancel.forEach(btn => btn.addEventListener("click", cancelDialog));
        this.btnOk.forEach(btn => btn.addEventListener("click", approveDialog));
        this.btnOk.forEach(btn => btn.addEventListener("click", _display__WEBPACK_IMPORTED_MODULE_4__.displayNames));
        this.btnRandomArr.forEach(btn => btn.addEventListener("click", createRandomShips));
        this.btnReadyArr.forEach(btn => btn.addEventListener("click", _game__WEBPACK_IMPORTED_MODULE_5__.startGame));
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
    board.classList.add("unable")

    let num = 10

    for(let i = 0; i < num; i++) {

        for(let j = 0; j < num; j++) {

            let quadrant = createElement("div", `row-${i}`, `col-${j}`)
            quadrant.setAttribute("data-square", `${i}-${j}`)
            quadrant.addEventListener("click", hitListener)
            quadrant.addEventListener("click", _game__WEBPACK_IMPORTED_MODULE_5__.turn)
            board.appendChild(quadrant) 
        } 
    }
}

function applyGrid() {

    for(let board of elements.boards) createGrid(board) 
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

    ;(0,_game__WEBPACK_IMPORTED_MODULE_5__.gameModeData)(mode)
    //game(playerOne, playerTwo)

    e.currentTarget.parentElement.parentElement.setAttribute("id", "close")
    elements.inputsNames.forEach(input => input.value = "")
    elements.wrapper.classList.remove("blur")
}





function createRandomShips(e) {

    let state =  (0,_storage__WEBPACK_IMPORTED_MODULE_3__.retrieveData)()

    let whichPlayer = Number(e.currentTarget.dataset.board)
 
    let player = state.players[whichPlayer]
    let board = elements.boards[whichPlayer]

    createGrid(board)

    player.gameBoard.placeShips()

    ;(0,_display__WEBPACK_IMPORTED_MODULE_4__.displayShip)(player)

    ;(0,_storage__WEBPACK_IMPORTED_MODULE_3__.updateData)(state)
}


function hitListener(e) {

    let state = (0,_storage__WEBPACK_IMPORTED_MODULE_3__.retrieveData)()
    //console.log("STATE HIT LISTENER", state)

    let quadrant = e.target.dataset.square.split("-").map(str => Number(str))
    //console.log("quadrant", quadrant)
    let whichPlayer = Number(e.target.parentElement.dataset.board)

    let player = state.players[whichPlayer]
    //console.log("PLAYER", player)

   let hitOnTarget = player.gameBoard.receiveAttack(quadrant)

    //displayBoard()

    //console.log("SHIPS DEL PLAYER", player.gameBoard.ships)

    ;(0,_display__WEBPACK_IMPORTED_MODULE_4__.displayBoard)(player, hitOnTarget)

   

    /* let shiphit = player.gameBoard.shipHitList
    console.log("shiphit LIST", shiphit)
    let waterhit = player.gameBoard.waterHitList
    console.log("waterhit LIST", waterhit) */


    ;(0,_storage__WEBPACK_IMPORTED_MODULE_3__.updateData)(state)

    //turnToggle(player)
}




/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   game: () => (/* binding */ game),
/* harmony export */   gameModeData: () => (/* binding */ gameModeData),
/* harmony export */   startGame: () => (/* binding */ startGame),
/* harmony export */   turn: () => (/* binding */ turn)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ "./src/storage.js");


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



function game(){

    


}

/* function turnToggle(player) {

    if(player.ID === 0) return 1

    if(player.ID === 1) return 0 
} */





function startGame(e){

    e.currentTarget.dataset.ready = true


    if(!(_dom__WEBPACK_IMPORTED_MODULE_0__.elements.btnReadyArr[0].dataset.ready === "true" 
    && _dom__WEBPACK_IMPORTED_MODULE_0__.elements.btnReadyArr[1].dataset.ready === "true")) return

    console.log("START GAME")

    let playerTurn =   /* Math.floor(Math.random() * 2) */ 0


    let rivalBoard = playerTurn === 0 ? 1 : 0
    _dom__WEBPACK_IMPORTED_MODULE_0__.elements.boards[rivalBoard].classList.toggle("unable")

    displayTurn(playerTurn)
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


function displayTurn(player) {

    let state = (0,_storage__WEBPACK_IMPORTED_MODULE_2__.retrieveData)()

    let title = _dom__WEBPACK_IMPORTED_MODULE_0__.elements.title

    title.textContent = `${state.players[player].upperCaseName()}'s turn!`
}

function startGameButton(e) {

    e.currentTarget.dataset.ready = true

   /*  if(!(elements.btnReadyArr[0].dataset.ready === "true" 
        && elements.btnReadyArr[1].dataset.ready === "true")) return */

    for(let btn of _dom__WEBPACK_IMPORTED_MODULE_0__.elements.btnReadyArr) {

       if(btn.dataset.ready === "false") return
    }

}

class Game {

    constructor() {
        
        this.playerOne
        this.playerTwo 
        this.players = [this.playerOne, this.playerTwo]
        this.mode
        this.difficulty
        this.playerTurn
    }
  

    gameModeData(mode){

        //let playerOne, playerTwo, difficulty

        this.mode = mode
    
        if(mode === "PlayerMode") {
    
            this.playerOne = new _player__WEBPACK_IMPORTED_MODULE_1__.Player(_dom__WEBPACK_IMPORTED_MODULE_0__.elements.inputsNames[0].value || "Player One", 0)
            this.playerTwo = new _player__WEBPACK_IMPORTED_MODULE_1__.Player(_dom__WEBPACK_IMPORTED_MODULE_0__.elements.inputsNames[1].value || "Player Two", 1)
            this.difficulty = null
        }
        
        else if(mode === "CpuMode") {
    
            this.playerOne = new _player__WEBPACK_IMPORTED_MODULE_1__.Player(_dom__WEBPACK_IMPORTED_MODULE_0__.elements.inputsNames[2].value || "Player One", 0)
            this.playerTwo = new _player__WEBPACK_IMPORTED_MODULE_1__.Player("CPU", 1)
            this.difficulty = _dom__WEBPACK_IMPORTED_MODULE_0__.elements.inputsRadio.forEach(input => { if(input.checked) return input.value })
        }
    
        //storeData(mode, playerOne, playerTwo)
    };

    startGame(e){

        e.currentTarget.dataset.ready = true
    
    /* 
        if(!(elements.btnReadyArr[0].dataset.ready === "true" 
        && elements.btnReadyArr[1].dataset.ready === "true")) return */

        for(let btn of _dom__WEBPACK_IMPORTED_MODULE_0__.elements.btnReadyArr) if(btn.dataset.ready === "false") return
    
        console.log("START GAME")
    
        this.playerTurn =   /* Math.floor(Math.random() * 2) */ 0

    }
    
    turn(e) {

        let rivalBoard = this.playerTurn === 0 ? 1 : 0

        _dom__WEBPACK_IMPORTED_MODULE_0__.elements.boards[rivalBoard].classList.toggle("unable")
    
       //let playerBoard = e.target.parentElement.dataset.board
       //console.log("este es el board", playerBoard)
    
       let target = e.target
       console.log("target", target)
    
       let quadrant = e.target.dataset.square.split("-").map(str => Number(str))
    
       //console.log("quadrant", quadrant)
    
       //let duplicatedMove = saveMove(playerBoard, quadrant)
        let duplicatedMove = this.players[this.playerTurn].checkMoves(quadrant)
    
        if(duplicatedMove) return
    
        _dom__WEBPACK_IMPORTED_MODULE_0__.elements.boards.forEach(board => board.classList.toggle("unable"))
    
        if(this.gameOver) {
           // chequear quien gano y anunciarlo.
           console.log("GAME OVER")
    
       }
    }

    /* saveMove(playerBoard, quadrant){

        let state = retrieveData()
    
        let whichPlayer = playerBoard === "0" ? 1 : 0
    
        let player = state.players[whichPlayer]
    
        console.log("a ver player", player)
    
       let duplicatedMove = player.checkMoves(quadrant)
    
       if(duplicatedMove) {
    
            console.log("movimiento repetido!")
            return true
       }
    
        updateData(state)
    } */

    gameOver() {
    
        for(let player of this.players) {
    
           if (player.gameBoard.shipsSunk.length === 5) {
    
                console.log("GAMEOVER")
    
                return true
           }
    
        }
    
        return false
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

                    console.log("SHIP", ship)

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

            if(row === quadrant[0] && col === quadrant[1]) return true
        }

        this.moves.push(quadrant)
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





//import { game } from "./game"

_dom__WEBPACK_IMPORTED_MODULE_4__.elements.init()
//game()


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sYUFBYSxPQUFPLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksY0FBYyxPQUFPLGFBQWEsT0FBTyxVQUFVLFlBQVksYUFBYSxjQUFjLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLE9BQU8s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eUJBQXlCLCtCQUErQjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHVDQUFJO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixpQkFBaUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqTnFDO0FBQ3JDO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiwyQkFBMkIsR0FBRyw4QkFBOEIsR0FBRyw2QkFBNkI7QUFDdEgsc0JBQXNCLDZCQUE2QixHQUFHLCtCQUErQjtBQUNyRixzREFBc0QsaURBQVM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMxQ2E7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDK0I7QUFDSjtBQUMzQjtBQUM0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QiwyQ0FBTTtBQUM5Qix3QkFBd0IsMkNBQU07QUFDOUI7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLG9CQUFvQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHdCQUF3QjtBQUMvQztBQUNBLG1DQUFtQyx1Q0FBSTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUN4REE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBeUI7QUFDTTtBQUNNO0FBQ1Y7QUFDRztBQUM5QixXQUFXLE9BQU87QUFDbEI7QUFDQSwwQ0FBUTtBQUNSO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbjpyb290IHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBmb250LWZhbWlseTonU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLyogLy8vIENMQVNTRVMgLy8vICovXHJcblxyXG4uYmx1cntcclxuXHJcbiAgICBmaWx0ZXI6IGJsdXIoMjBweCk7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuLnVuYWJsZSB7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuI2Nsb3NlIHtcclxuXHJcbiAgICBhbmltYXRpb246IGZhZGUtb3V0IDAuN3MgZWFzZS1vdXQ7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uc3BhY2Uge1xyXG5cclxuICAgIHBhZGRpbmc6IHZhcigpO1xyXG4gICAgbWFyZ2luOiB2YXIoKTtcclxuXHJcbn1cclxuXHJcbi5kaXNwbGF5LWZsZXgtY29se1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5ib2R5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgLyogZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMCUgMWZyIDUlOyAqL1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xyXG5cclxufVxyXG5cclxuLyogLy8vIEhFQURFUiAvLy8gKi9cclxuXHJcbmhlYWRlciB7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG59XHJcblxyXG5oMSB7XHJcbiAgICBjb2xvcjogYmVpZ2U7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG5oMyB7XHJcbiAgICBjb2xvcjogYmVpZ2U7XHJcbn1cclxuXHJcbi8qIC8vLyBNQUlOIC8vLyAqL1xyXG5cclxubWFpbiB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG59XHJcblxyXG5hcnRpY2xlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLyogRXN0byBlcyBsbyBuZWNlc2FyaW8gcGFyYSBxdWUgZWwgcG9wLXVwIHF1ZWRlIGVuIGVsIG1lZGlvICovXHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgLyogaGFzdGEgYWNhICovXHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBhbmltYXRpb246IGZhZGUtaW4gMC43cyBlYXNlLW91dDtcclxufVxyXG5cclxuXHJcbmFydGljbGUubW9kZS1zZWxlY3Rpb24ge1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgIG1pbi13aWR0aDogMjV2dztcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZS1pbiB7XHJcbiAgICAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlWSgwKTtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICBcclxuICAgIDEwMCUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZVkoMSk7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIGZhZGUtb3V0IHtcclxuICAgIDAlIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGVZKDEpO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICBcclxuICAgIDEwMCUge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZVkoMCk7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5hcnRpY2xlLm1vZGUtc2VsZWN0aW9uID4gOmZpcnN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuXHJcbmFydGljbGUgc2VjdGlvbiB7XHJcblxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIG1hcmdpbi1ibG9jazogMDtcclxuICAgIFxyXG59XHJcblxyXG5hcnRpY2xlIHNlY3Rpb24gcCB7XHJcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAwLjRzO1xyXG59XHJcblxyXG5hcnRpY2xlIHNlY3Rpb246aG92ZXIgcCB7XHJcblxyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcclxufVxyXG5cclxuLyogRElBTE9HUyBDSElRVUlUT1MgKi9cclxuXHJcbmFydGljbGUuY2hpbGR7XHJcblxyXG4gICAgcGFkZGluZzogMzBweDtcclxuXHJcbn1cclxuXHJcbmFydGljbGUuY2hpbGQgZGl2IHtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMTBweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuXHJcbmFydGljbGUuQ3B1TW9kZS5jaGlsZCBkaXYge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxufVxyXG5cclxuYXJ0aWNsZS5jaGlsZCBmaWVsZHNldCBkaXYge1xyXG5cclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbmFydGljbGUuY2hpbGQgZGl2LmJ1dHRvbnMge1xyXG5cclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgICBmb250LXNpemU6IDE2LjVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAzcHggcmdiKDQ0LCA0NCwgNDQpO1xyXG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgMC4zcztcclxufVxyXG5cclxuYnV0dG9uOmFjdGl2ZSB7XHJcblxyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IHJnYig0NCwgNDQsIDQ0KTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuc2VjdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMjAlO1xyXG4gICAgbWFyZ2luOiAxNXB4O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuXHJcbn1cclxuXHJcbi5ib2FyZCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6ICByZXBlYXQoMTAsIDFmcik7XHJcblxyXG4gICAgbWFyZ2luOiAxNXB4O1xyXG59XHJcblxyXG4uYm9hcmQgZGl2IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgbWluLXdpZHRoOiAzMHB4O1xyXG4gICAgbWluLWhlaWdodDogMzBweDtcclxufVxyXG5cclxuLmJvYXJkIGRpdi5zaGlwIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cclxufVxyXG5cclxuLmJvYXJkIGRpdi5oaXQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG5cclxufVxyXG5cclxuLmJvYXJkIGRpdi5taXNzIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XHJcblxyXG59XHJcblxyXG5cclxuXHJcbi5vcHRpb25zIHtcclxuICAgIG1hcmdpbjogMTVweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuXHJcbi5vcHRpb25zIHAsIG91dHB1dCB7XHJcbiAgICBjb2xvcjogYmVpZ2U7XHJcbn1cclxuXHJcblxyXG4vKiAvLy8gRk9PVEVSIC8vLyAqL1xyXG5cclxuZm9vdGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiBiZWlnZTtcclxufVxyXG5cclxuXHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsMkRBQTJEO0FBQy9EOztBQUVBLG9CQUFvQjs7QUFFcEI7O0lBRUksa0JBQWtCO0lBQ2xCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTs7SUFFSSxpQ0FBaUM7SUFDakMsYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSxjQUFjO0lBQ2QsYUFBYTs7QUFFakI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLGlDQUFpQzs7QUFFckM7O0FBRUEsbUJBQW1COztBQUVuQjs7SUFFSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7O0FBRTNCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUEsaUJBQWlCOztBQUVqQjtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQiw4REFBOEQ7SUFDOUQsZUFBZTtJQUNmLFNBQVM7SUFDVCxRQUFRO0lBQ1IsZ0NBQWdDO0lBQ2hDLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0NBQWdDO0FBQ3BDOzs7QUFHQTs7SUFFSSxhQUFhO0lBQ2Isc0JBQXNCOztJQUV0QixlQUFlO0lBQ2YsYUFBYTtBQUNqQjs7QUFFQTtJQUNJO01BQ0UsVUFBVTtNQUNWLDBDQUEwQztNQUMxQyxhQUFhO0lBQ2Y7O0lBRUE7TUFDRSxVQUFVO01BQ1YsMENBQTBDO01BQzFDLGNBQWM7SUFDaEI7RUFDRjs7RUFFQTtJQUNFO01BQ0UsVUFBVTtNQUNWLDBDQUEwQztNQUMxQyxjQUFjO0lBQ2hCOztJQUVBO01BQ0UsVUFBVTtNQUNWLDBDQUEwQztNQUMxQyxhQUFhO0lBQ2Y7QUFDSjs7O0FBR0E7SUFDSSw4QkFBOEI7QUFDbEM7OztBQUdBOztJQUVJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZUFBZTs7QUFFbkI7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUE7O0lBRUksc0JBQXNCO0FBQzFCOztBQUVBLHNCQUFzQjs7QUFFdEI7O0lBRUksYUFBYTs7QUFFakI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsOEJBQThCO0lBQzlCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksbUJBQW1CO0FBQ3ZCOztBQUVBOztJQUVJLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTs7SUFFSSxzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsdUNBQXVDO0lBQ3ZDLDRCQUE0QjtBQUNoQzs7QUFFQTs7SUFFSSxzQkFBc0I7SUFDdEIsdUNBQXVDO0FBQzNDOzs7Ozs7Ozs7OztBQVdBO0lBQ0ksYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osYUFBYTs7QUFFakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUNBQW1DO0lBQ25DLHVDQUF1Qzs7SUFFdkMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLHVCQUF1Qjs7QUFFM0I7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIscUJBQXFCOztBQUV6Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QiwyQkFBMkI7O0FBRS9COzs7O0FBSUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7OztBQUdBLG1CQUFtQjs7QUFFbkI7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGZvbnQtZmFtaWx5OidTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAvLy8gQ0xBU1NFUyAvLy8gKi9cXHJcXG5cXHJcXG4uYmx1cntcXHJcXG5cXHJcXG4gICAgZmlsdGVyOiBibHVyKDIwcHgpO1xcclxcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnVuYWJsZSB7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jY2xvc2Uge1xcclxcblxcclxcbiAgICBhbmltYXRpb246IGZhZGUtb3V0IDAuN3MgZWFzZS1vdXQ7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5zcGFjZSB7XFxyXFxuXFxyXFxuICAgIHBhZGRpbmc6IHZhcigpO1xcclxcbiAgICBtYXJnaW46IHZhcigpO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uZGlzcGxheS1mbGV4LWNvbHtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keXtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIC8qIGdyaWQtdGVtcGxhdGUtcm93czogMTAlIDFmciA1JTsgKi9cXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4vKiAvLy8gSEVBREVSIC8vLyAqL1xcclxcblxcclxcbmhlYWRlciB7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICAgIGNvbG9yOiBiZWlnZTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuaDMge1xcclxcbiAgICBjb2xvcjogYmVpZ2U7XFxyXFxufVxcclxcblxcclxcbi8qIC8vLyBNQUlOIC8vLyAqL1xcclxcblxcclxcbm1haW4ge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxufVxcclxcblxcclxcbmFydGljbGUge1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIC8qIEVzdG8gZXMgbG8gbmVjZXNhcmlvIHBhcmEgcXVlIGVsIHBvcC11cCBxdWVkZSBlbiBlbCBtZWRpbyAqL1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgdG9wOiA1MCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgICAvKiBoYXN0YSBhY2EgKi9cXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBhbmltYXRpb246IGZhZGUtaW4gMC43cyBlYXNlLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuYXJ0aWNsZS5tb2RlLXNlbGVjdGlvbiB7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFxyXFxuICAgIG1pbi13aWR0aDogMjV2dztcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBmYWRlLWluIHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGVZKDApO1xcclxcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG4gIFxcclxcbiAgICAxMDAlIHtcXHJcXG4gICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlWSgxKTtcXHJcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgXFxyXFxuICBAa2V5ZnJhbWVzIGZhZGUtb3V0IHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGVZKDEpO1xcclxcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB9XFxyXFxuICBcXHJcXG4gICAgMTAwJSB7XFxyXFxuICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZVkoMCk7XFxyXFxuICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5hcnRpY2xlLm1vZGUtc2VsZWN0aW9uID4gOmZpcnN0LWNoaWxkIHtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5hcnRpY2xlIHNlY3Rpb24ge1xcclxcblxcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDMwcHg7XFxyXFxuICAgIG1hcmdpbi1ibG9jazogMDtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbmFydGljbGUgc2VjdGlvbiBwIHtcXHJcXG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgMC40cztcXHJcXG59XFxyXFxuXFxyXFxuYXJ0aWNsZSBzZWN0aW9uOmhvdmVyIHAge1xcclxcblxcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBESUFMT0dTIENISVFVSVRPUyAqL1xcclxcblxcclxcbmFydGljbGUuY2hpbGR7XFxyXFxuXFxyXFxuICAgIHBhZGRpbmc6IDMwcHg7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbmFydGljbGUuY2hpbGQgZGl2IHtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIHBhZGRpbmc6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbmFydGljbGUuQ3B1TW9kZS5jaGlsZCBkaXYge1xcclxcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5hcnRpY2xlLmNoaWxkIGZpZWxkc2V0IGRpdiB7XFxyXFxuXFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxufVxcclxcblxcclxcbmFydGljbGUuY2hpbGQgZGl2LmJ1dHRvbnMge1xcclxcblxcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTYuNXB4O1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAzcHggcmdiKDQ0LCA0NCwgNDQpO1xcclxcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAwLjNzO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b246YWN0aXZlIHtcXHJcXG5cXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXHJcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggcmdiKDQ0LCA0NCwgNDQpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5zZWN0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMjAlO1xcclxcbiAgICBtYXJnaW46IDE1cHg7XFxyXFxuICAgIHBhZGRpbmc6IDE1cHg7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5ib2FyZCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6ICByZXBlYXQoMTAsIDFmcik7XFxyXFxuXFxyXFxuICAgIG1hcmdpbjogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkIGRpdiB7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcclxcbiAgICBtaW4td2lkdGg6IDMwcHg7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5ib2FyZCBkaXYuc2hpcCB7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5ib2FyZCBkaXYuaGl0IHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5ib2FyZCBkaXYubWlzcyB7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLm9wdGlvbnMge1xcclxcbiAgICBtYXJnaW46IDE1cHg7XFxyXFxuICAgIHBhZGRpbmc6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5vcHRpb25zIHAsIG91dHB1dCB7XFxyXFxuICAgIGNvbG9yOiBiZWlnZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogLy8vIEZPT1RFUiAvLy8gKi9cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOiBiZWlnZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQge1BsYXllcn0gZnJvbSBcIi4vcGxheWVyXCJcclxuaW1wb3J0IHtHYW1lQm9hcmR9IGZyb20gXCIuL2dhbWVib2FyZFwiXHJcbmltcG9ydCB7ZWxlbWVudHMsIGNyZWF0ZUdyaWR9IGZyb20gXCIuL2RvbVwiXHJcbmltcG9ydCB7c3RvcmVEYXRhLCByZXRyaWV2ZURhdGEsIHVwZGF0ZURhdGF9IGZyb20gXCIuL3N0b3JhZ2VcIlxyXG5cclxuZXhwb3J0IHtkaXNwbGF5Qm9hcmQsIGRpc3BsYXlTaGlwLCBkaXNwbGF5TmFtZXN9XHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5VG90YWxCb2FyZCgpe1xyXG5cclxuICAgIGxldCBzdGF0ZSA9IHJldHJpZXZlRGF0YSgpXHJcblxyXG4gICAgZm9yIChsZXQgcGxheWVyIG9mIHN0YXRlLnBsYXllcnMpIHtcclxuXHJcbiAgICAgICAgbGV0IGJvYXJkID0gZWxlbWVudHMuYm9hcmRzW3BsYXllci5JRF1cclxuXHJcbiAgICAgICAgcGxheWVyLmdhbWVCb2FyZC5zaGlwc0Nvb3Jkcy5mbGF0KCkuZm9yRWFjaChjb29yZCA9PiBhZGRDbGFzcyhib2FyZCwgY29vcmQsIFwic2hpcFwiKSkgXHJcblxyXG4gICAgICAgIHBsYXllci5nYW1lQm9hcmQuc2hpcEhpdExpc3QuZm9yRWFjaChjb29yZCA9PiBhZGRDbGFzcyhib2FyZCwgY29vcmQsIFwiaGl0XCIpKVxyXG5cclxuICAgICAgICBwbGF5ZXIuZ2FtZUJvYXJkLndhdGVySGl0TGlzdC5mb3JFYWNoKGNvb3JkID0+IGFkZENsYXNzKGJvYXJkLCBjb29yZCwgXCJtaXNzXCIpKVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZGlzcGxheUJvYXJkKHBsYXllciwgaGl0T25UYXJnZXQpIHtcclxuXHJcbiAgICBpZihoaXRPblRhcmdldCkgZGlzcGxheUhpdChwbGF5ZXIpXHJcblxyXG4gICAgaWYoIWhpdE9uVGFyZ2V0KSBkaXNwbGF5TWlzcyhwbGF5ZXIpXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5U2hpcChwbGF5ZXIpIHtcclxuXHJcbiAgICBsZXQgYm9hcmQgPSBlbGVtZW50cy5ib2FyZHNbcGxheWVyLklEXVxyXG5cclxuICAgIHBsYXllci5nYW1lQm9hcmQuc2hpcHNDb29yZHMuZmxhdCgpLmZvckVhY2goY29vcmQgPT4gYWRkQ2xhc3MoYm9hcmQsIGNvb3JkLCBcInNoaXBcIikpXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5SGl0KHBsYXllcikge1xyXG5cclxuICAgIGxldCBib2FyZCA9IGVsZW1lbnRzLmJvYXJkc1twbGF5ZXIuSURdXHJcblxyXG4gICAgcGxheWVyLmdhbWVCb2FyZC5zaGlwSGl0TGlzdC5mb3JFYWNoKGNvb3JkID0+IGFkZENsYXNzKGJvYXJkLCBjb29yZCwgXCJoaXRcIikpIFxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZGlzcGxheU1pc3MocGxheWVyKSB7XHJcblxyXG4gICAgbGV0IGJvYXJkID0gZWxlbWVudHMuYm9hcmRzW3BsYXllci5JRF1cclxuXHJcbiAgICBwbGF5ZXIuZ2FtZUJvYXJkLndhdGVySGl0TGlzdC5mb3JFYWNoKGNvb3JkID0+IGFkZENsYXNzKGJvYXJkLCBjb29yZCwgXCJtaXNzXCIpKVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gYWRkQ2xhc3MoYm9hcmQsIHF1YWRyYW50LCBjbGFzc05hbWUpIHtcclxuXHJcbiAgICBpZihxdWFkcmFudC5sZW5ndGggPCAxKSByZXR1cm5cclxuXHJcbiAgICBsZXQgW3JvdywgY29sXSA9IHF1YWRyYW50XHJcblxyXG4gICAgbGV0IHNxdWFyZSA9IGJvYXJkLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXNxdWFyZT1cIiR7cm93fS0ke2NvbH1cIl1gKVxyXG5cclxuICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKGAke2NsYXNzTmFtZX1gKVxyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5TmFtZXMoKSB7XHJcblxyXG4gICAgbGV0IHN0YXRlID0gcmV0cmlldmVEYXRhKCkgXHJcblxyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGVsZW1lbnRzLm91dHB1dEFyci5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICBlbGVtZW50cy5vdXRwdXRBcnJbaV0udGV4dENvbnRlbnQgPSBzdGF0ZS5wbGF5ZXJzW2ldLnVwcGVyQ2FzZU5hbWUoKVxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vcGxheWVyXCJcclxuaW1wb3J0IHsgR2FtZUJvYXJkIH0gZnJvbSBcIi4vZ2FtZWJvYXJkXCJcclxuaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL3NoaXBcIlxyXG5pbXBvcnQgeyBzdG9yZURhdGEsIHJldHJpZXZlRGF0YSwgdXBkYXRlRGF0YSB9IGZyb20gXCIuL3N0b3JhZ2VcIlxyXG5pbXBvcnQgeyBkaXNwbGF5Qm9hcmQsIGRpc3BsYXlTaGlwLCBkaXNwbGF5TmFtZXMgfSBmcm9tIFwiLi9kaXNwbGF5XCJcclxuaW1wb3J0IHsgZ2FtZU1vZGVEYXRhLCBnYW1lLCBzdGFydEdhbWUsIHR1cm59IGZyb20gXCIuL2dhbWVcIlxyXG5cclxuZXhwb3J0IHtlbGVtZW50cywgY3JlYXRlR3JpZH1cclxuXHJcblxyXG5sZXQgZWxlbWVudHMgPSB7XHJcblxyXG4gICAgd3JhcHBlcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53cmFwcGVyXCIpLFxyXG4gICAgYm9hcmRzOiBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYm9hcmRcIikpLFxyXG4gICAgZGlhbG9nTW9kZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImFydGljbGVcIiksXHJcbiAgICBkaWFsb2dQbGF5ZXJNb2RlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYXJ0aWNsZS5QbGF5ZXJNb2RlXCIpLFxyXG4gICAgZGlhbG9nQ3B1TW9kZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImFydGljbGUuQ3B1TW9kZVwiKSxcclxuICAgIGJ0bkNhbmNlbDogQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uLmNhbmNlbFwiKSksXHJcbiAgICBidG5PazogQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uLm9rXCIpKSxcclxuICAgIGlucHV0c05hbWVzOiBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbmFtZT1wbGF5ZXItbmFtZV1cIikpLFxyXG4gICAgaW5wdXRzUmFkaW86IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltuYW1lPWRpZmZpY3VsdHldXCIpKSxcclxuICAgIGJ0blJhbmRvbUFycjogQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uLnJhbmRvbVwiKSksXHJcbiAgICBidG5SZWFkeUFycjogQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uLnJlYWR5XCIpKSxcclxuICAgIG91dHB1dEFycjogQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwib3V0cHV0XCIpKSxcclxuICAgIHRpdGxlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDNcIiksXHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpXHJcbiAgICB9LFxyXG5cclxuICAgIGFkZExpc3RlbmVycygpIHtcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIG9wZW5Nb2RlRGlhbG9nKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgYXBwbHlHcmlkKTtcclxuICAgICAgICAvL3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBnYW1lKTtcclxuICAgICAgICB0aGlzLmRpYWxvZ0NoaWxkcmVuKCkuZm9yRWFjaChjaGlsZCA9PiBjaGlsZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ2FtZU1vZGVTZWxlY3Rpb24pKTtcclxuICAgICAgICB0aGlzLmJ0bkNhbmNlbC5mb3JFYWNoKGJ0biA9PiBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNhbmNlbERpYWxvZykpO1xyXG4gICAgICAgIHRoaXMuYnRuT2suZm9yRWFjaChidG4gPT4gYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhcHByb3ZlRGlhbG9nKSk7XHJcbiAgICAgICAgdGhpcy5idG5Pay5mb3JFYWNoKGJ0biA9PiBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRpc3BsYXlOYW1lcykpO1xyXG4gICAgICAgIHRoaXMuYnRuUmFuZG9tQXJyLmZvckVhY2goYnRuID0+IGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3JlYXRlUmFuZG9tU2hpcHMpKTtcclxuICAgICAgICB0aGlzLmJ0blJlYWR5QXJyLmZvckVhY2goYnRuID0+IGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3RhcnRHYW1lKSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGRpYWxvZ0NoaWxkcmVuKCl7XHJcblxyXG4gICAgICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5kaWFsb2dNb2RlLmNoaWxkcmVuKSBcclxuICAgIH0sXHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KGVsZW1lbnQsIGNsYXNzTmFtZSwgc2Vjb25kQ2xhc3NOYW1lKXtcclxuXHJcbiAgICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpXHJcbiAgICBlbC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSlcclxuXHJcbiAgICBpZihzZWNvbmRDbGFzc05hbWUpIGVsLmNsYXNzTGlzdC5hZGQoc2Vjb25kQ2xhc3NOYW1lKVxyXG5cclxuICAgIHJldHVybiBlbFxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVHcmlkKGJvYXJkKXtcclxuXHJcbiAgICBib2FyZC5pbm5lckhUTUwgPSBcIlwiXHJcbiAgICBib2FyZC5jbGFzc0xpc3QuYWRkKFwidW5hYmxlXCIpXHJcblxyXG4gICAgbGV0IG51bSA9IDEwXHJcblxyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IG51bTsgaSsrKSB7XHJcblxyXG4gICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCBudW07IGorKykge1xyXG5cclxuICAgICAgICAgICAgbGV0IHF1YWRyYW50ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBgcm93LSR7aX1gLCBgY29sLSR7an1gKVxyXG4gICAgICAgICAgICBxdWFkcmFudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXNxdWFyZVwiLCBgJHtpfS0ke2p9YClcclxuICAgICAgICAgICAgcXVhZHJhbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhpdExpc3RlbmVyKVxyXG4gICAgICAgICAgICBxdWFkcmFudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdHVybilcclxuICAgICAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQocXVhZHJhbnQpIFxyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5R3JpZCgpIHtcclxuXHJcbiAgICBmb3IobGV0IGJvYXJkIG9mIGVsZW1lbnRzLmJvYXJkcykgY3JlYXRlR3JpZChib2FyZCkgXHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gb3Blbk1vZGVEaWFsb2coKXtcclxuXHJcbiAgICBpZihlbGVtZW50cy5kaWFsb2dNb2RlLmdldEF0dHJpYnV0ZShcImlkXCIpID09PSBcImNsb3NlXCIpIGVsZW1lbnRzLmRpYWxvZ01vZGUucmVtb3ZlQXR0cmlidXRlKFwiaWRcIilcclxuICAgIGlmKCFlbGVtZW50cy53cmFwcGVyLmNsYXNzTGlzdC5jb250YWlucyhcImJsdXJcIikpIGVsZW1lbnRzLndyYXBwZXIuY2xhc3NMaXN0LmFkZChcImJsdXJcIilcclxufVxyXG5cclxuZnVuY3Rpb24gZ2FtZU1vZGVTZWxlY3Rpb24oZSkge1xyXG5cclxuICAgIGVsZW1lbnRzLmRpYWxvZ01vZGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjbG9zZVwiKVxyXG5cclxuICAgIGxldCBnYW1lTW9kZSA9IGUuY3VycmVudFRhcmdldC5jbGFzc05hbWVcclxuXHJcbiAgICBsZXQgZGlhbG9nID0gZWxlbWVudHNbYGRpYWxvZyR7Z2FtZU1vZGV9YF1cclxuICAgIGRpYWxvZy5yZW1vdmVBdHRyaWJ1dGUoXCJpZFwiKVxyXG59XHJcblxyXG5mdW5jdGlvbiBjYW5jZWxEaWFsb2coZSl7XHJcblxyXG4gICAgLy9pZihlLmtleSAhPT0gXCJFc2NhcGVcIikgcmV0dXJuXHJcbiAgICBlLmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY2xvc2VcIilcclxuICAgIGVsZW1lbnRzLmlucHV0c05hbWVzLmZvckVhY2goaW5wdXQgPT4gaW5wdXQudmFsdWUgPSBcIlwiKVxyXG5cclxuICAgIG9wZW5Nb2RlRGlhbG9nKClcclxufVxyXG5cclxuZnVuY3Rpb24gYXBwcm92ZURpYWxvZyhlKSB7XHJcblxyXG4gICAgLy9pZihlLmtleSAhPT0gXCJFbnRlclwiKSByZXR1cm5cclxuICAgIGxldCBtb2RlID0gZS50YXJnZXQuZGF0YXNldC5tb2RlXHJcblxyXG4gICAgZ2FtZU1vZGVEYXRhKG1vZGUpXHJcbiAgICAvL2dhbWUocGxheWVyT25lLCBwbGF5ZXJUd28pXHJcblxyXG4gICAgZS5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNsb3NlXCIpXHJcbiAgICBlbGVtZW50cy5pbnB1dHNOYW1lcy5mb3JFYWNoKGlucHV0ID0+IGlucHV0LnZhbHVlID0gXCJcIilcclxuICAgIGVsZW1lbnRzLndyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZShcImJsdXJcIilcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVJhbmRvbVNoaXBzKGUpIHtcclxuXHJcbiAgICBsZXQgc3RhdGUgPSAgcmV0cmlldmVEYXRhKClcclxuXHJcbiAgICBsZXQgd2hpY2hQbGF5ZXIgPSBOdW1iZXIoZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuYm9hcmQpXHJcbiBcclxuICAgIGxldCBwbGF5ZXIgPSBzdGF0ZS5wbGF5ZXJzW3doaWNoUGxheWVyXVxyXG4gICAgbGV0IGJvYXJkID0gZWxlbWVudHMuYm9hcmRzW3doaWNoUGxheWVyXVxyXG5cclxuICAgIGNyZWF0ZUdyaWQoYm9hcmQpXHJcblxyXG4gICAgcGxheWVyLmdhbWVCb2FyZC5wbGFjZVNoaXBzKClcclxuXHJcbiAgICBkaXNwbGF5U2hpcChwbGF5ZXIpXHJcblxyXG4gICAgdXBkYXRlRGF0YShzdGF0ZSlcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGhpdExpc3RlbmVyKGUpIHtcclxuXHJcbiAgICBsZXQgc3RhdGUgPSByZXRyaWV2ZURhdGEoKVxyXG4gICAgLy9jb25zb2xlLmxvZyhcIlNUQVRFIEhJVCBMSVNURU5FUlwiLCBzdGF0ZSlcclxuXHJcbiAgICBsZXQgcXVhZHJhbnQgPSBlLnRhcmdldC5kYXRhc2V0LnNxdWFyZS5zcGxpdChcIi1cIikubWFwKHN0ciA9PiBOdW1iZXIoc3RyKSlcclxuICAgIC8vY29uc29sZS5sb2coXCJxdWFkcmFudFwiLCBxdWFkcmFudClcclxuICAgIGxldCB3aGljaFBsYXllciA9IE51bWJlcihlLnRhcmdldC5wYXJlbnRFbGVtZW50LmRhdGFzZXQuYm9hcmQpXHJcblxyXG4gICAgbGV0IHBsYXllciA9IHN0YXRlLnBsYXllcnNbd2hpY2hQbGF5ZXJdXHJcbiAgICAvL2NvbnNvbGUubG9nKFwiUExBWUVSXCIsIHBsYXllcilcclxuXHJcbiAgIGxldCBoaXRPblRhcmdldCA9IHBsYXllci5nYW1lQm9hcmQucmVjZWl2ZUF0dGFjayhxdWFkcmFudClcclxuXHJcbiAgICAvL2Rpc3BsYXlCb2FyZCgpXHJcblxyXG4gICAgLy9jb25zb2xlLmxvZyhcIlNISVBTIERFTCBQTEFZRVJcIiwgcGxheWVyLmdhbWVCb2FyZC5zaGlwcylcclxuXHJcbiAgICBkaXNwbGF5Qm9hcmQocGxheWVyLCBoaXRPblRhcmdldClcclxuXHJcbiAgIFxyXG5cclxuICAgIC8qIGxldCBzaGlwaGl0ID0gcGxheWVyLmdhbWVCb2FyZC5zaGlwSGl0TGlzdFxyXG4gICAgY29uc29sZS5sb2coXCJzaGlwaGl0IExJU1RcIiwgc2hpcGhpdClcclxuICAgIGxldCB3YXRlcmhpdCA9IHBsYXllci5nYW1lQm9hcmQud2F0ZXJIaXRMaXN0XHJcbiAgICBjb25zb2xlLmxvZyhcIndhdGVyaGl0IExJU1RcIiwgd2F0ZXJoaXQpICovXHJcblxyXG5cclxuICAgIHVwZGF0ZURhdGEoc3RhdGUpXHJcblxyXG4gICAgLy90dXJuVG9nZ2xlKHBsYXllcilcclxufVxyXG5cclxuXHJcbiIsImltcG9ydCB7ZWxlbWVudHN9IGZyb20gXCIuL2RvbVwiXHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL3BsYXllclwiXHJcbi8vaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL3NoaXBcIlxyXG5pbXBvcnQge3N0b3JlRGF0YSwgcmV0cmlldmVEYXRhLCB1cGRhdGVEYXRhfSBmcm9tIFwiLi9zdG9yYWdlXCJcclxuXHJcblxyXG5leHBvcnQge2dhbWVNb2RlRGF0YSwgZ2FtZSwgc3RhcnRHYW1lLCB0dXJufVxyXG5cclxuZnVuY3Rpb24gZ2FtZU1vZGVEYXRhKG1vZGUpe1xyXG5cclxuICAgIGxldCBwbGF5ZXJPbmUsIHBsYXllclR3bywgZGlmZmljdWx0eVxyXG5cclxuICAgIGlmKG1vZGUgPT09IFwiUGxheWVyTW9kZVwiKSB7XHJcblxyXG4gICAgICAgIHBsYXllck9uZSA9IG5ldyBQbGF5ZXIoZWxlbWVudHMuaW5wdXRzTmFtZXNbMF0udmFsdWUgfHwgXCJQbGF5ZXIgT25lXCIsIDApXHJcbiAgICAgICAgcGxheWVyVHdvID0gbmV3IFBsYXllcihlbGVtZW50cy5pbnB1dHNOYW1lc1sxXS52YWx1ZSB8fCBcIlBsYXllciBUd29cIiwgMSlcclxuICAgIH1cclxuICAgIFxyXG4gICAgZWxzZSBpZihtb2RlID09PSBcIkNwdU1vZGVcIikge1xyXG5cclxuICAgICAgICBwbGF5ZXJPbmUgPSBuZXcgUGxheWVyKGVsZW1lbnRzLmlucHV0c05hbWVzWzJdLnZhbHVlIHx8IFwiUGxheWVyIE9uZVwiLCAwKVxyXG4gICAgICAgIHBsYXllclR3byA9IG5ldyBQbGF5ZXIoXCJDUFVcIiwgMSlcclxuXHJcbiAgICAgICAgZWxlbWVudHMuaW5wdXRzUmFkaW8uZm9yRWFjaChpbnB1dCA9PiB7XHJcbiAgICAgICAgICAgIGlmKGlucHV0LmNoZWNrZWQpIGRpZmZpY3VsdHkgPSBpbnB1dC52YWx1ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgc3RvcmVEYXRhKG1vZGUsIHBsYXllck9uZSwgcGxheWVyVHdvKVxyXG59XHJcblxyXG5mdW5jdGlvbiBnYW1lT3ZlcigpIHtcclxuXHJcbiAgICBsZXQgc3RhdGUgPSByZXRyaWV2ZURhdGEoKVxyXG5cclxuICAgIGZvcihsZXQgcGxheWVyIG9mIHN0YXRlLnBsYXllcnMpIHtcclxuXHJcbiAgICAgICBpZiAocGxheWVyLmdhbWVCb2FyZC5zaGlwc1N1bmsubGVuZ3RoID09PSA1KSB7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkdBTUVPVkVSXCIpXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2VcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBnYW1lKCl7XHJcblxyXG4gICAgXHJcblxyXG5cclxufVxyXG5cclxuLyogZnVuY3Rpb24gdHVyblRvZ2dsZShwbGF5ZXIpIHtcclxuXHJcbiAgICBpZihwbGF5ZXIuSUQgPT09IDApIHJldHVybiAxXHJcblxyXG4gICAgaWYocGxheWVyLklEID09PSAxKSByZXR1cm4gMCBcclxufSAqL1xyXG5cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHN0YXJ0R2FtZShlKXtcclxuXHJcbiAgICBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5yZWFkeSA9IHRydWVcclxuXHJcblxyXG4gICAgaWYoIShlbGVtZW50cy5idG5SZWFkeUFyclswXS5kYXRhc2V0LnJlYWR5ID09PSBcInRydWVcIiBcclxuICAgICYmIGVsZW1lbnRzLmJ0blJlYWR5QXJyWzFdLmRhdGFzZXQucmVhZHkgPT09IFwidHJ1ZVwiKSkgcmV0dXJuXHJcblxyXG4gICAgY29uc29sZS5sb2coXCJTVEFSVCBHQU1FXCIpXHJcblxyXG4gICAgbGV0IHBsYXllclR1cm4gPSAgIC8qIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpICovIDBcclxuXHJcblxyXG4gICAgbGV0IHJpdmFsQm9hcmQgPSBwbGF5ZXJUdXJuID09PSAwID8gMSA6IDBcclxuICAgIGVsZW1lbnRzLmJvYXJkc1tyaXZhbEJvYXJkXS5jbGFzc0xpc3QudG9nZ2xlKFwidW5hYmxlXCIpXHJcblxyXG4gICAgZGlzcGxheVR1cm4ocGxheWVyVHVybilcclxufVxyXG5cclxuZnVuY3Rpb24gdHVybihlKSB7XHJcblxyXG4gICAvL2xldCBwbGF5ZXJCb2FyZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmJvYXJkXHJcbiAgIGxldCBwbGF5ZXJCb2FyZCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuZGF0YXNldC5ib2FyZFxyXG4gICBjb25zb2xlLmxvZyhcImVzdGUgZXMgZWwgYm9hcmRcIiwgcGxheWVyQm9hcmQpXHJcblxyXG4gICBsZXQgdGFyZ2V0ID0gZS50YXJnZXRcclxuICAgY29uc29sZS5sb2coXCJ0YXJnZXRcIiwgdGFyZ2V0KVxyXG5cclxuICAgbGV0IHF1YWRyYW50ID0gZS50YXJnZXQuZGF0YXNldC5zcXVhcmUuc3BsaXQoXCItXCIpLm1hcChzdHIgPT4gTnVtYmVyKHN0cikpXHJcblxyXG4gICAvL2NvbnNvbGUubG9nKFwicXVhZHJhbnRcIiwgcXVhZHJhbnQpXHJcblxyXG4gICBsZXQgZHVwbGljYXRlZE1vdmUgPSBzYXZlTW92ZShwbGF5ZXJCb2FyZCwgcXVhZHJhbnQpXHJcblxyXG4gICAgaWYoZHVwbGljYXRlZE1vdmUpIHJldHVyblxyXG5cclxuICAgZWxlbWVudHMuYm9hcmRzLmZvckVhY2goYm9hcmQgPT4gYm9hcmQuY2xhc3NMaXN0LnRvZ2dsZShcInVuYWJsZVwiKSlcclxuXHJcbiAgIGxldCBpc092ZXIgPSBnYW1lT3ZlcigpXHJcblxyXG4gICBpZihpc092ZXIpIHtcclxuICAgICAgIC8vIGNoZXF1ZWFyIHF1aWVuIGdhbm8geSBhbnVuY2lhcmxvLlxyXG4gICAgICAgY29uc29sZS5sb2coXCJHQU1FIE9WRVJcIilcclxuXHJcbiAgIH1cclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNhdmVNb3ZlKHBsYXllckJvYXJkLCBxdWFkcmFudCl7XHJcblxyXG4gICAgbGV0IHN0YXRlID0gcmV0cmlldmVEYXRhKClcclxuXHJcbiAgICBsZXQgd2hpY2hQbGF5ZXIgPSBwbGF5ZXJCb2FyZCA9PT0gXCIwXCIgPyAxIDogMFxyXG5cclxuICAgIGxldCBwbGF5ZXIgPSBzdGF0ZS5wbGF5ZXJzW3doaWNoUGxheWVyXVxyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiYSB2ZXIgcGxheWVyXCIsIHBsYXllcilcclxuXHJcbiAgIGxldCBkdXBsaWNhdGVkTW92ZSA9IHBsYXllci5jaGVja01vdmVzKHF1YWRyYW50KVxyXG5cclxuICAgaWYoZHVwbGljYXRlZE1vdmUpIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJtb3ZpbWllbnRvIHJlcGV0aWRvIVwiKVxyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgIH1cclxuXHJcbiAgICB1cGRhdGVEYXRhKHN0YXRlKVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZGlzcGxheVR1cm4ocGxheWVyKSB7XHJcblxyXG4gICAgbGV0IHN0YXRlID0gcmV0cmlldmVEYXRhKClcclxuXHJcbiAgICBsZXQgdGl0bGUgPSBlbGVtZW50cy50aXRsZVxyXG5cclxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gYCR7c3RhdGUucGxheWVyc1twbGF5ZXJdLnVwcGVyQ2FzZU5hbWUoKX0ncyB0dXJuIWBcclxufVxyXG5cclxuZnVuY3Rpb24gc3RhcnRHYW1lQnV0dG9uKGUpIHtcclxuXHJcbiAgICBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5yZWFkeSA9IHRydWVcclxuXHJcbiAgIC8qICBpZighKGVsZW1lbnRzLmJ0blJlYWR5QXJyWzBdLmRhdGFzZXQucmVhZHkgPT09IFwidHJ1ZVwiIFxyXG4gICAgICAgICYmIGVsZW1lbnRzLmJ0blJlYWR5QXJyWzFdLmRhdGFzZXQucmVhZHkgPT09IFwidHJ1ZVwiKSkgcmV0dXJuICovXHJcblxyXG4gICAgZm9yKGxldCBidG4gb2YgZWxlbWVudHMuYnRuUmVhZHlBcnIpIHtcclxuXHJcbiAgICAgICBpZihidG4uZGF0YXNldC5yZWFkeSA9PT0gXCJmYWxzZVwiKSByZXR1cm5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmNsYXNzIEdhbWUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucGxheWVyT25lXHJcbiAgICAgICAgdGhpcy5wbGF5ZXJUd28gXHJcbiAgICAgICAgdGhpcy5wbGF5ZXJzID0gW3RoaXMucGxheWVyT25lLCB0aGlzLnBsYXllclR3b11cclxuICAgICAgICB0aGlzLm1vZGVcclxuICAgICAgICB0aGlzLmRpZmZpY3VsdHlcclxuICAgICAgICB0aGlzLnBsYXllclR1cm5cclxuICAgIH1cclxuICBcclxuXHJcbiAgICBnYW1lTW9kZURhdGEobW9kZSl7XHJcblxyXG4gICAgICAgIC8vbGV0IHBsYXllck9uZSwgcGxheWVyVHdvLCBkaWZmaWN1bHR5XHJcblxyXG4gICAgICAgIHRoaXMubW9kZSA9IG1vZGVcclxuICAgIFxyXG4gICAgICAgIGlmKG1vZGUgPT09IFwiUGxheWVyTW9kZVwiKSB7XHJcbiAgICBcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJPbmUgPSBuZXcgUGxheWVyKGVsZW1lbnRzLmlucHV0c05hbWVzWzBdLnZhbHVlIHx8IFwiUGxheWVyIE9uZVwiLCAwKVxyXG4gICAgICAgICAgICB0aGlzLnBsYXllclR3byA9IG5ldyBQbGF5ZXIoZWxlbWVudHMuaW5wdXRzTmFtZXNbMV0udmFsdWUgfHwgXCJQbGF5ZXIgVHdvXCIsIDEpXHJcbiAgICAgICAgICAgIHRoaXMuZGlmZmljdWx0eSA9IG51bGxcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgZWxzZSBpZihtb2RlID09PSBcIkNwdU1vZGVcIikge1xyXG4gICAgXHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyT25lID0gbmV3IFBsYXllcihlbGVtZW50cy5pbnB1dHNOYW1lc1syXS52YWx1ZSB8fCBcIlBsYXllciBPbmVcIiwgMClcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJUd28gPSBuZXcgUGxheWVyKFwiQ1BVXCIsIDEpXHJcbiAgICAgICAgICAgIHRoaXMuZGlmZmljdWx0eSA9IGVsZW1lbnRzLmlucHV0c1JhZGlvLmZvckVhY2goaW5wdXQgPT4geyBpZihpbnB1dC5jaGVja2VkKSByZXR1cm4gaW5wdXQudmFsdWUgfSlcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAvL3N0b3JlRGF0YShtb2RlLCBwbGF5ZXJPbmUsIHBsYXllclR3bylcclxuICAgIH07XHJcblxyXG4gICAgc3RhcnRHYW1lKGUpe1xyXG5cclxuICAgICAgICBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5yZWFkeSA9IHRydWVcclxuICAgIFxyXG4gICAgLyogXHJcbiAgICAgICAgaWYoIShlbGVtZW50cy5idG5SZWFkeUFyclswXS5kYXRhc2V0LnJlYWR5ID09PSBcInRydWVcIiBcclxuICAgICAgICAmJiBlbGVtZW50cy5idG5SZWFkeUFyclsxXS5kYXRhc2V0LnJlYWR5ID09PSBcInRydWVcIikpIHJldHVybiAqL1xyXG5cclxuICAgICAgICBmb3IobGV0IGJ0biBvZiBlbGVtZW50cy5idG5SZWFkeUFycikgaWYoYnRuLmRhdGFzZXQucmVhZHkgPT09IFwiZmFsc2VcIikgcmV0dXJuXHJcbiAgICBcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNUQVJUIEdBTUVcIilcclxuICAgIFxyXG4gICAgICAgIHRoaXMucGxheWVyVHVybiA9ICAgLyogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMikgKi8gMFxyXG5cclxuICAgIH1cclxuICAgIFxyXG4gICAgdHVybihlKSB7XHJcblxyXG4gICAgICAgIGxldCByaXZhbEJvYXJkID0gdGhpcy5wbGF5ZXJUdXJuID09PSAwID8gMSA6IDBcclxuXHJcbiAgICAgICAgZWxlbWVudHMuYm9hcmRzW3JpdmFsQm9hcmRdLmNsYXNzTGlzdC50b2dnbGUoXCJ1bmFibGVcIilcclxuICAgIFxyXG4gICAgICAgLy9sZXQgcGxheWVyQm9hcmQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmRhdGFzZXQuYm9hcmRcclxuICAgICAgIC8vY29uc29sZS5sb2coXCJlc3RlIGVzIGVsIGJvYXJkXCIsIHBsYXllckJvYXJkKVxyXG4gICAgXHJcbiAgICAgICBsZXQgdGFyZ2V0ID0gZS50YXJnZXRcclxuICAgICAgIGNvbnNvbGUubG9nKFwidGFyZ2V0XCIsIHRhcmdldClcclxuICAgIFxyXG4gICAgICAgbGV0IHF1YWRyYW50ID0gZS50YXJnZXQuZGF0YXNldC5zcXVhcmUuc3BsaXQoXCItXCIpLm1hcChzdHIgPT4gTnVtYmVyKHN0cikpXHJcbiAgICBcclxuICAgICAgIC8vY29uc29sZS5sb2coXCJxdWFkcmFudFwiLCBxdWFkcmFudClcclxuICAgIFxyXG4gICAgICAgLy9sZXQgZHVwbGljYXRlZE1vdmUgPSBzYXZlTW92ZShwbGF5ZXJCb2FyZCwgcXVhZHJhbnQpXHJcbiAgICAgICAgbGV0IGR1cGxpY2F0ZWRNb3ZlID0gdGhpcy5wbGF5ZXJzW3RoaXMucGxheWVyVHVybl0uY2hlY2tNb3ZlcyhxdWFkcmFudClcclxuICAgIFxyXG4gICAgICAgIGlmKGR1cGxpY2F0ZWRNb3ZlKSByZXR1cm5cclxuICAgIFxyXG4gICAgICAgIGVsZW1lbnRzLmJvYXJkcy5mb3JFYWNoKGJvYXJkID0+IGJvYXJkLmNsYXNzTGlzdC50b2dnbGUoXCJ1bmFibGVcIikpXHJcbiAgICBcclxuICAgICAgICBpZih0aGlzLmdhbWVPdmVyKSB7XHJcbiAgICAgICAgICAgLy8gY2hlcXVlYXIgcXVpZW4gZ2FubyB5IGFudW5jaWFybG8uXHJcbiAgICAgICAgICAgY29uc29sZS5sb2coXCJHQU1FIE9WRVJcIilcclxuICAgIFxyXG4gICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qIHNhdmVNb3ZlKHBsYXllckJvYXJkLCBxdWFkcmFudCl7XHJcblxyXG4gICAgICAgIGxldCBzdGF0ZSA9IHJldHJpZXZlRGF0YSgpXHJcbiAgICBcclxuICAgICAgICBsZXQgd2hpY2hQbGF5ZXIgPSBwbGF5ZXJCb2FyZCA9PT0gXCIwXCIgPyAxIDogMFxyXG4gICAgXHJcbiAgICAgICAgbGV0IHBsYXllciA9IHN0YXRlLnBsYXllcnNbd2hpY2hQbGF5ZXJdXHJcbiAgICBcclxuICAgICAgICBjb25zb2xlLmxvZyhcImEgdmVyIHBsYXllclwiLCBwbGF5ZXIpXHJcbiAgICBcclxuICAgICAgIGxldCBkdXBsaWNhdGVkTW92ZSA9IHBsYXllci5jaGVja01vdmVzKHF1YWRyYW50KVxyXG4gICAgXHJcbiAgICAgICBpZihkdXBsaWNhdGVkTW92ZSkge1xyXG4gICAgXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibW92aW1pZW50byByZXBldGlkbyFcIilcclxuICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIHVwZGF0ZURhdGEoc3RhdGUpXHJcbiAgICB9ICovXHJcblxyXG4gICAgZ2FtZU92ZXIoKSB7XHJcbiAgICBcclxuICAgICAgICBmb3IobGV0IHBsYXllciBvZiB0aGlzLnBsYXllcnMpIHtcclxuICAgIFxyXG4gICAgICAgICAgIGlmIChwbGF5ZXIuZ2FtZUJvYXJkLnNoaXBzU3Vuay5sZW5ndGggPT09IDUpIHtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJHQU1FT1ZFUlwiKVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxufVxyXG4iLCJpbXBvcnQge1NoaXB9IGZyb20gXCIuL3NoaXBcIlxyXG5cclxuZXhwb3J0IHtHYW1lQm9hcmR9XHJcblxyXG5jbGFzcyBHYW1lQm9hcmQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHJvd1F1YW50aXR5ID0gMTAsIGNvbHVtblF1YW50aXR5ID0gMTApe1xyXG5cclxuICAgICAgICB0aGlzLnJvd1F1YW50aXR5ID0gcm93UXVhbnRpdHksXHJcbiAgICAgICAgdGhpcy5jb2x1bW5RdWFudGl0eSA9IGNvbHVtblF1YW50aXR5LFxyXG4gICAgICAgIHRoaXMuc2hpcHMgPSBbXSxcclxuICAgICAgICB0aGlzLnNoaXBzU3VuayA9IFtdLFxyXG4gICAgICAgIHRoaXMud2F0ZXJIaXRMaXN0ID0gW10gLyogW1tdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdXSAqLyxcclxuICAgICAgICB0aGlzLnNoaXBIaXRMaXN0ID0gW10gLyogW1tdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdXSAqLyxcclxuICAgICAgICB0aGlzLnNoaXBzQ29vcmRzID0gW10gICBcclxuICAgIH1cclxuXHJcbiAgICBzZXRQcm9wZXJ0aWVzKHN0YXRlKXtcclxuXHJcbiAgICAgICAgdGhpcy5yb3dRdWFudGl0eSA9IHN0YXRlLnJvd1F1YW50aXR5O1xyXG4gICAgICAgIHRoaXMuY29sdW1uUXVhbnRpdHkgPSBzdGF0ZS5jb2x1bW5RdWFudGl0eTtcclxuICAgICAgICB0aGlzLnNoaXBzID0gc3RhdGUuc2hpcHM7XHJcbiAgICAgICAgdGhpcy5zaGlwc1N1bmsgPSBzdGF0ZS5zaGlwc1N1bms7XHJcbiAgICAgICAgdGhpcy53YXRlckhpdExpc3QgPSBzdGF0ZS53YXRlckhpdExpc3Q7XHJcbiAgICAgICAgdGhpcy5zaGlwSGl0TGlzdCA9IHN0YXRlLnNoaXBIaXRMaXN0O1xyXG4gICAgICAgIHRoaXMuc2hpcHNDb29yZHMgPSBzdGF0ZS5zaGlwc0Nvb3Jkc1xyXG4gICAgfTtcclxuXHJcbiAgICAjY3JlYXRlU2hpcHMoKXtcclxuXHJcbiAgICAgICAgbGV0IHNoaXBUeXBlcyA9IFt7dHlwZTogXCJjYXJyaWVyXCIsIGxlbmd0aDogNX0sIHt0eXBlOiBcImJhdHRsZXNoaXBcIiwgbGVuZ3RoOiA0fSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0eXBlOiBcImRlc3Ryb3llclwiLCBsZW5ndGg6IDN9LCB7dHlwZTogXCJzdWJtYXJpbmVcIiwgbGVuZ3RoOiAzfSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0eXBlOiBcInBhdHJvbCBib2F0XCIsIGxlbmd0aDogMn1dXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgbGV0IHNoaXBzUXVldWUgPSBbXVxyXG5cclxuICAgICAgICBmb3IobGV0IHNoaXAgb2Ygc2hpcFR5cGVzKXtcclxuICBcclxuICAgICAgICAgICAgc2hpcHNRdWV1ZS5wdXNoKG5ldyBTaGlwKHNoaXAubGVuZ3RoLCBzaGlwLnR5cGUpKSAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBzaGlwc1F1ZXVlICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHBsYWNlU2hpcHMoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuc2hpcHMgPSBbXVxyXG4gICAgICAgIHRoaXMuc2hpcHNDb29yZHMgPSBbXVxyXG5cclxuICAgICAgICBsZXQgc2hpcHNRdWV1ZSA9IHRoaXMuI2NyZWF0ZVNoaXBzKClcclxuICAgICAgICBsZXQgYWRqYWNlbmN5TGlzdCA9IFtbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXV1cclxuXHJcbiAgICAgICAgd2hpbGUoc2hpcHNRdWV1ZS5sZW5ndGggPiAwKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgbGV0IHJhbmRvbVJvdyA9ICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMClcclxuICAgICAgICAgICAgbGV0IHJhbmRvbUNvbCA9ICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMClcclxuICAgICAgICAgICAgbGV0IHZlcnRpY2FsID0gICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKVxyXG4gICAgXHJcbiAgICAgICAgICAgIGxldCByYW5kb21Sb3dDb3B5ID0gcmFuZG9tUm93XHJcbiAgICAgICAgICAgIGxldCByYW5kb21Db2xDb3B5ID0gcmFuZG9tQ29sIFxyXG4gICAgXHJcbiAgICAgICAgICAgIGxldCBzaGlwID0gc2hpcHNRdWV1ZS5zaGlmdCgpXHJcbiAgICAgICAgICAgIHRoaXMuc2hpcHMucHVzaChzaGlwKVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKyl7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGFkamFjZW5jeUxpc3RbcmFuZG9tUm93Q29weV0uaW5jbHVkZXMocmFuZG9tQ29sQ29weSkpe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcC5jb29yZGluYXRlcyA9IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBzUXVldWUudW5zaGlmdChzaGlwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNoaXBzLnBvcCgpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2hpcC5jb29yZGluYXRlcy5wdXNoKFtyYW5kb21Sb3dDb3B5LCByYW5kb21Db2xDb3B5XSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYodmVydGljYWwpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJhbmRvbVJvd0NvcHkgPCAodGhpcy5yb3dRdWFudGl0eSAtIDEpKSB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhbmRvbVJvd0NvcHkgKytcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByYW5kb21Sb3dDb3B5ID0gcmFuZG9tUm93IC0gKHNoaXAubGVuZ3RoIC0gKGkgKyAxKSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJhbmRvbUNvbENvcHkgPCAodGhpcy5jb2x1bW5RdWFudGl0eSAtIDEpKSB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhbmRvbUNvbENvcHkgKytcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByYW5kb21Db2xDb3B5ID0gcmFuZG9tQ29sIC0gKHNoaXAubGVuZ3RoIC0gKGkgKyAxKSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoc2hpcC5jb29yZGluYXRlcy5sZW5ndGggPiAwKSB0aGlzLiNlbmNsb3NlU2hpcChzaGlwLCBhZGphY2VuY3lMaXN0KVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuI3NoaXBzUmVmcygpXHJcblxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAjZW5jbG9zZVNoaXAoc2hpcCwgYWRqYWNlbmN5TGlzdCl7XHJcblxyXG4gICAgICAgIGZvcihsZXQgY29vcmRpbmF0ZSBvZiBzaGlwLmNvb3JkaW5hdGVzKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgcm93ID0gY29vcmRpbmF0ZVswXVxyXG4gICAgICAgICAgICBsZXQgY29sID0gY29vcmRpbmF0ZVsxXVxyXG5cclxuICAgICAgICAgICAgbGV0IGFyZWEgPSBbW3JvdyAtIDEsIGNvbF0sIFtyb3cgLSAxLCBjb2wgLSAxXSwgW3JvdyAtIDEsIGNvbCArIDFdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbcm93ICsgMSwgY29sXSwgW3JvdyArIDEsIGNvbCAtIDFdLCBbcm93ICsgMSwgY29sICsgMV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtyb3csIGNvbF0sIFtyb3csIGNvbCAtIDFdLCBbcm93LCBjb2wgKyAxXV1cclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgYXJyIG9mIGFyZWEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihhcnJbMF0gPCAwIHx8IGFyclsxXSA8IDAgfHxcclxuICAgICAgICAgICAgICAgICAgIGFyclswXSA+ICh0aGlzLnJvd1F1YW50aXR5IC0gMSkgfHwgYXJyWzFdID4gKHRoaXMuY29sdW1uUXVhbnRpdHkgLSAxKSkgY29udGludWVcclxuXHJcbiAgICAgICAgICAgICAgICBpZighYWRqYWNlbmN5TGlzdFthcnJbMF1dLmluY2x1ZGVzKGFyclsxXSkpIGFkamFjZW5jeUxpc3RbYXJyWzBdXS5wdXNoKGFyclsxXSkgXHJcbiAgICAgICAgICAgIH0gICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyKCkge1xyXG5cclxuICAgICAgICB0aGlzLnNoaXBIaXRMaXN0ID0gIFtbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXV1cclxuICAgICAgICB0aGlzLndhdGVySGl0TGlzdCA9IFtbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXV1cclxuICAgICAgICB0aGlzLnNoaXBzID0gW11cclxuICAgICAgICB0aGlzLnNoaXBzU3VuayA9IFtdXHJcbiAgICAgICAgdGhpcy5zaGlwc0Nvb3JkcyA9IFtdXHJcbiAgICB9XHJcblxyXG4gICAgcmVjZWl2ZUF0dGFjayhzcXVhcmUpe1xyXG4gICAgXHJcbiAgICAgICAgbGV0IGhpdE9uVGFyZ2V0ID0gZmFsc2VcclxuXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIkEgVkVSIExPUyBTSElQU1wiLCB0aGlzLnNoaXBzKVxyXG5cclxuICAgICAgICBmb3IobGV0IHNoaXAgb2YgdGhpcy5zaGlwcykge1xyXG5cclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIlNISVBcIiwgc2hpcClcclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgY29vcmRpbmF0ZSBvZiBzaGlwLmNvb3JkaW5hdGVzKXtcclxuXHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiQ09PUkRcIiwgY29vcmRpbmF0ZSlcclxuXHJcbiAgICAgICAgICAgICAgICBpZihjb29yZGluYXRlWzBdID09PSBzcXVhcmVbMF0gJiYgY29vcmRpbmF0ZVsxXSA9PT0gc3F1YXJlWzFdKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU0hJUFwiLCBzaGlwKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBzaGlwLmhpdCgpXHJcbiAgICAgICAgICAgICAgICAgICAgLy9pZihzaGlwLmlzU3VuaykgdGhpcy5hbGxTaGlwc1N1bmsoc2hpcClcclxuICAgICAgICAgICAgICAgICAgICBpZihzaGlwLmlzU3VuaykgdGhpcy5zaGlwc1N1bmsucHVzaChzaGlwKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL3RoaXMuc2hpcEhpdExpc3Rbc3F1YXJlWzBdXS5wdXNoKHNxdWFyZVsxXSkgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hpcEhpdExpc3QucHVzaChzcXVhcmUpICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBoaXRPblRhcmdldCA9IHRydWVcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9pZihoaXRPblRhcmdldCkgYnJlYWtcclxuXHJcbiAgICAgICAgICAgIGlmKGhpdE9uVGFyZ2V0KSByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIH0gXHJcblxyXG4gICAgICAgIC8vaWYoaGl0T25UYXJnZXQgPT09IGZhbHNlKSB0aGlzLndhdGVySGl0TGlzdFtzcXVhcmVbMF1dLnB1c2goc3F1YXJlWzFdKVxyXG5cclxuICAgICAgICAvL3RoaXMud2F0ZXJIaXRMaXN0W3NxdWFyZVswXV0ucHVzaChzcXVhcmVbMV0pXHJcbiAgICAgICAgdGhpcy53YXRlckhpdExpc3QucHVzaChzcXVhcmUpXHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgICNzaGlwc1JlZnMoKSB7XHJcblxyXG4gICAgICAgIGZvcihsZXQgc2hpcCBvZiB0aGlzLnNoaXBzKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgY29vcmRBcnIgPSBbXVxyXG5cclxuICAgICAgICAgICAgZm9yKGxldCBjb29yZGluYXRlIG9mIHNoaXAuY29vcmRpbmF0ZXMpIGNvb3JkQXJyLnB1c2goY29vcmRpbmF0ZSkgXHJcblxyXG4gICAgICAgICAgICB0aGlzLnNoaXBzQ29vcmRzLnB1c2goY29vcmRBcnIpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qIGFsbFNoaXBzU3VuayhzaGlwKSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU0hJUCBTVU5LRURcIiwgc2hpcClcclxuXHJcbiAgICAgICAgdGhpcy5zaGlwc1N1bmsucHVzaChzaGlwKVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNISVAgU1VOS0VEIEFSUkFZXCIsIHRoaXMuc2hpcHNTdW5rKVxyXG5cclxuICAgICAgICBpZighdGhpcy5zaGlwc1N1bmsubGVuZ3RoID09PSA1KSByZXR1cm4gbnVsbFxyXG5cclxuICAgICAgICAvL0FDQSBBTEdPIEhBUklBIFBBUkEgQVZJU0FSIFFVRSBFU1RBTiBUT0RPUyBVTkRJRE9TXHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgIH0gKi9cclxuICAgIFxyXG59XHJcblxyXG4iLCJpbXBvcnQge0dhbWVCb2FyZH0gZnJvbSBcIi4vZ2FtZWJvYXJkXCJcclxuXHJcbmV4cG9ydCB7UGxheWVyfVxyXG5cclxuY2xhc3MgUGxheWVyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBJRCl7XHJcblxyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWVcclxuICAgICAgICB0aGlzLklEID0gSURcclxuICAgICAgICAvKiB0aGlzLnNoaXBzID0gW3t0eXBlOiBcImNhcnJpZXJcIiwgbGVuZ3RoOiA1fSwge3R5cGU6IFwiYmF0dGxlc2hpcFwiLCBsZW5ndGg6IDR9LCB7dHlwZTogXCJkZXN0cm95ZXJcIiwgbGVuZ3RoOiAzfSxcclxuICAgICAgICAgICAgICAgICAgICAge3R5cGU6IFwic3VibWFyaW5lXCIsIGxlbmd0aDogM30sIHt0eXBlOiBcInBhdHJvbCBib2F0XCIsIGxlbmd0aDogMn1dICovXHJcbiAgICAgICAgdGhpcy5nYW1lQm9hcmQgPSAvKiBuZXcgR2FtZUJvYXJkKCkgfHwgICovbmV3IEdhbWVCb2FyZCgpXHJcbiAgICAgICAgdGhpcy5tb3ZlcyA9IFtdXHJcbiAgICB9XHJcblxyXG4gICAgc2V0UHJvcGVydGllcyhzdGF0ZSkge1xyXG5cclxuICAgICAgICB0aGlzLm5hbWUgPSBzdGF0ZS5uYW1lXHJcbiAgICAgICAgdGhpcy5JRCA9IHN0YXRlLklEXHJcbiAgICAgICAgdGhpcy5tb3ZlcyA9IHN0YXRlLm1vdmVzXHJcbiAgICB9XHJcblxyXG4gICAgdXBwZXJDYXNlTmFtZSgpIHtcclxuXHJcbiAgICAgICByZXR1cm4gdGhpcy5uYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5uYW1lLnNsaWNlKDEpXHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tNb3ZlcyhxdWFkcmFudCkge1xyXG5cclxuICAgICAgICAvL2lmKHRoaXMubW92ZXMubGVuZ3RoIDwgMSkgcmV0dXJuXHJcblxyXG4gICAgICAgIGZvcihsZXQgbW92ZSBvZiB0aGlzLm1vdmVzKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgW3JvdywgY29sXSA9IG1vdmVcclxuXHJcbiAgICAgICAgICAgIGlmKHJvdyA9PT0gcXVhZHJhbnRbMF0gJiYgY29sID09PSBxdWFkcmFudFsxXSkgcmV0dXJuIHRydWVcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubW92ZXMucHVzaChxdWFkcmFudClcclxuICAgIH1cclxufVxyXG5cclxuIiwiZXhwb3J0IHtTaGlwfVxyXG5cclxuY2xhc3MgU2hpcCB7XHJcblxyXG4gICAgaGl0Q291bnRlciA9IDBcclxuICAgICNpc1N1bmsgPSBmYWxzZVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKGxlbmd0aCA9IG51bGwsIHR5cGUgPSBudWxsKXtcclxuICAgICAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aFxyXG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGVcclxuICAgICAgICB0aGlzLmNvb3JkaW5hdGVzID0gW11cclxuICAgIH1cclxuXHJcbiAgICBzZXRQcm9wZXJ0aWVzKHN0YXRlKSB7XHJcbiAgICAgICAgdGhpcy5sZW5ndGggPSBzdGF0ZS5sZW5ndGg7XHJcbiAgICAgICAgdGhpcy50eXBlID0gc3RhdGUudHlwZTtcclxuICAgICAgICB0aGlzLmNvb3JkaW5hdGVzID0gc3RhdGUuY29vcmRpbmF0ZXNcclxuICAgICAgICB0aGlzLmhpdENvdW50ZXIgPSBzdGF0ZS5oaXRDb3VudGVyXHJcbiAgICB9XHJcblxyXG4gICAgaGl0KCkge1xyXG5cclxuICAgICAgICB0aGlzLmhpdENvdW50ZXIgKytcclxuICAgICAgICB0aGlzLiNzdW5rQ2hlY2soKVxyXG4gICAgfVxyXG5cclxuICAgICNzdW5rQ2hlY2soKXtcclxuIFxyXG4gICAgICAgIGlmKHRoaXMuaGl0Q291bnRlciA9PT0gdGhpcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy4jaXNTdW5rID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXQgaXNTdW5rKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuI2lzU3Vua1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtQbGF5ZXJ9IGZyb20gXCIuL3BsYXllclwiXHJcbmltcG9ydCB7U2hpcH0gZnJvbSBcIi4vc2hpcFwiXHJcblxyXG5leHBvcnQge3N0b3JlRGF0YSwgcmV0cmlldmVEYXRhLCB1cGRhdGVEYXRhfVxyXG5cclxuXHJcbmZ1bmN0aW9uIHN0b3JlRGF0YShtb2RlLCBwbGF5ZXJPbmUsIHBsYXllclR3bykge1xyXG5cclxuICAgIGxldCBzdGF0ZSA9IHtcclxuICAgICAgICBtb2RlOiBtb2RlLFxyXG4gICAgICAgIHBsYXllcnM6IFtwbGF5ZXJPbmUsIHBsYXllclR3b11cclxuICAgIH1cclxuXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInN0YXRlXCIsIEpTT04uc3RyaW5naWZ5KHN0YXRlKSkgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZURhdGEoc3RhdGUpe1xyXG5cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic3RhdGVcIiwgSlNPTi5zdHJpbmdpZnkoc3RhdGUpKVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gcmV0cmlldmVEYXRhKCkge1xyXG5cclxuICAgbGV0IHN0YXRlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInN0YXRlXCIpKVxyXG5cclxuICAgbGV0IHBsYXllck9uZSAgPSBuZXcgUGxheWVyKClcclxuICAgbGV0IHBsYXllclR3byAgPSBuZXcgUGxheWVyKClcclxuICAgbGV0IHBsYXllcnMgPSBbcGxheWVyT25lLCBwbGF5ZXJUd29dXHJcblxyXG5cclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwbGF5ZXJzLmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgIHBsYXllcnNbaV0uc2V0UHJvcGVydGllcyhzdGF0ZS5wbGF5ZXJzW2ldKVxyXG5cclxuICAgICAgICBwbGF5ZXJzW2ldLmdhbWVCb2FyZC5zZXRQcm9wZXJ0aWVzKHN0YXRlLnBsYXllcnNbaV0uZ2FtZUJvYXJkKVxyXG5cclxuICAgICAgICBsZXQgcGxheWVyU2hpcHMgPSBwbGF5ZXJzW2ldLmdhbWVCb2FyZC5zaGlwc1xyXG5cclxuXHJcbiAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IHBsYXllclNoaXBzLmxlbmd0aDsgaisrKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgc2hpcEluc3RhbmNlID0gbmV3IFNoaXAocGxheWVyU2hpcHNbal0pXHJcblxyXG4gICAgICAgICAgICBzaGlwSW5zdGFuY2Uuc2V0UHJvcGVydGllcyhzdGF0ZS5wbGF5ZXJzW2ldLmdhbWVCb2FyZC5zaGlwc1tqXSlcclxuXHJcbiAgICAgICAgICAgIC8vIHJlZW1wbGF6byBsYSBjb3BpYSBkZSBkYXRvcyBkZWwgc2hpcCBxdWUgZXN0YWJhIGVuIEpTT04gcG9yIFxyXG4gICAgICAgICAgICAvLyBlbCBzaGlwIGluc3RhbnNpYWRvIHkgYWN0dWFsaXphZG8uXHJcbiAgICAgICAgICAgIHBsYXllcnNbaV0uZ2FtZUJvYXJkLnNoaXBzW2pdID0gc2hpcEluc3RhbmNlXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBzdGF0ZS5wbGF5ZXJzID0gcGxheWVyc1xyXG5cclxuICAgcmV0dXJuIHN0YXRlXHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuLi9zcmMvc3R5bGUuY3NzXCJcclxuaW1wb3J0IHtQbGF5ZXJ9IGZyb20gXCIuL3BsYXllclwiXHJcbmltcG9ydCB7R2FtZUJvYXJkfSBmcm9tIFwiLi9nYW1lYm9hcmRcIlxyXG5pbXBvcnQge1NoaXB9IGZyb20gXCIuL3NoaXBcIlxyXG5pbXBvcnQge2VsZW1lbnRzfSBmcm9tIFwiLi9kb21cIlxyXG4vL2ltcG9ydCB7IGdhbWUgfSBmcm9tIFwiLi9nYW1lXCJcclxuXHJcbmVsZW1lbnRzLmluaXQoKVxyXG4vL2dhbWUoKVxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9