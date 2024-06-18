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

.blur {

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

/* /// ARTICLES /// */

h1 {
    font-size: 2.5rem;
    letter-spacing: 5px;
    cursor: default;
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
    animation: fade-in 0.7s ease-out;
}

article.start,
article.child {
    padding: 30px;
}

article.start p {

    font-size: 1.6rem;
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

article section,
article div,
article button {

    cursor: pointer;
}

article section {

    text-align: center;
    padding: 30px;
    margin-block: 0;
}

article button {

    margin: auto;
}

article section p {

    transition: ease-in-out 0.4s;
}

article section:hover p {

    transform: scale(1.15);
}

article section p,
article label,
article legend,
article button {

    font-size: 1.2rem;
}

article.mode-selection > :first-child {
    border-bottom: 2px solid black;
}


/* CHILDREN ARTICLES */

/* article.child{

    padding: 30px;

} */

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

article.game-over output,
article.game-over h2 {
    color: black;
    text-align: center;
    font-size: 1.6rem;
}

article.game-over section.replay {
    border-bottom: 1px solid black;
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
    border: 1px solid black;
    box-shadow: 2px 2px 3px rgb(44, 44, 44);
    transition: ease-in-out 0.3s;
}

button:active {

    transform: scale(0.95);
    box-shadow: 1px 1px 3px rgb(44, 44, 44);
}


/* /// HEADER /// */

header {

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

}

header h1 {
    color: beige;
    margin-bottom: 30px;
}

header h3 {
    color: beige;
}



/* /// MAIN /// */

main {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

section {
    display: grid;
    grid-template-rows: auto 1fr 20%;
    margin: 15px;
    padding: 15px;
}

section > button {
    margin-inline-end: auto;
    margin-inline-start: 15px;
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

.board#uncover div.ship {
    border: 1px solid red;
    background-color: white;

}

.board div.hit,
.board div.miss {

    cursor: not-allowed;
}

.board div.hit:active,
.board div.miss:active {

    background-color: rgba(173, 173, 173, 0.5);
}

.board div.hit {
    border: 1px solid red;
    background-color: red;

}

.board div.miss {
    border: 1px solid blue;
    background-color: lightblue;

}

.board div.hit.sunk {
    border: 1px solid rgb(91, 2, 2,0.7);
    background-color: rgb(91, 2, 2, 0.7);

}

.options {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin: 15px;
    padding: 15px;
}

output {
    font-size: 1.3rem;
}

.options div {
    display: flex;
    gap: 15px;
}

.options button.random{
    border-radius: 50%;
}

.options p, output {
    color: beige;
    display: flex;
    align-items: center;
}


/* /// FOOTER /// */

footer {
    text-align: center;
    color: beige;
    /* margin-block-start: 1.8rem; */
    padding: 1.5rem;
}


`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n:root {\r\n    box-sizing: border-box;\r\n    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n}\r\n\r\n/* /// CLASSES /// */\r\n\r\n.blur {\r\n\r\n    filter: blur(20px);\r\n    pointer-events: none;\r\n}\r\n\r\n.unable {\r\n    pointer-events: none;\r\n}\r\n\r\n#close {\r\n\r\n    animation: fade-out 0.7s ease-out;\r\n    display: none;\r\n}\r\n\r\n.space {\r\n\r\n    padding: var();\r\n    margin: var();\r\n\r\n}\r\n\r\n.display-flex-col{\r\n\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\nbody{\r\n    background-color: black;\r\n    display: grid;\r\n    /* grid-template-rows: 10% 1fr 5%; */\r\n    grid-template-rows: auto 1fr auto;\r\n\r\n}\r\n\r\n/* /// ARTICLES /// */\r\n\r\nh1 {\r\n    font-size: 2.5rem;\r\n    letter-spacing: 5px;\r\n    cursor: default;\r\n}\r\n\r\narticle {\r\n    font-weight: 600;\r\n    background-color: #fff;\r\n    border-radius: 5px;\r\n    /* Esto es lo necesario para que el pop-up quede en el medio */\r\n    position: fixed;\r\n    left: 50%;\r\n    top: 50%;\r\n    transform: translate(-50%, -50%);\r\n    /* hasta aca */\r\n    animation: fade-in 0.7s ease-out;\r\n}\r\n\r\narticle.start,\r\narticle.child {\r\n    padding: 30px;\r\n}\r\n\r\narticle.start p {\r\n\r\n    font-size: 1.6rem;\r\n}\r\n\r\n\r\n@keyframes fade-in {\r\n    0% {\r\n      opacity: 0;\r\n      transform: translate(-50%, -50%) scaleY(0);\r\n      display: none;\r\n    }\r\n  \r\n    100% {\r\n      opacity: 1;\r\n      transform: translate(-50%, -50%) scaleY(1);\r\n      display: block;\r\n    }\r\n  }\r\n  \r\n  @keyframes fade-out {\r\n    0% {\r\n      opacity: 1;\r\n      transform: translate(-50%, -50%) scaleY(1);\r\n      display: block;\r\n    }\r\n  \r\n    100% {\r\n      opacity: 0;\r\n      transform: translate(-50%, -50%) scaleY(0);\r\n      display: none;\r\n    }\r\n}\r\n\r\narticle section,\r\narticle div,\r\narticle button {\r\n\r\n    cursor: pointer;\r\n}\r\n\r\narticle section {\r\n\r\n    text-align: center;\r\n    padding: 30px;\r\n    margin-block: 0;\r\n}\r\n\r\narticle button {\r\n\r\n    margin: auto;\r\n}\r\n\r\narticle section p {\r\n\r\n    transition: ease-in-out 0.4s;\r\n}\r\n\r\narticle section:hover p {\r\n\r\n    transform: scale(1.15);\r\n}\r\n\r\narticle section p,\r\narticle label,\r\narticle legend,\r\narticle button {\r\n\r\n    font-size: 1.2rem;\r\n}\r\n\r\narticle.mode-selection > :first-child {\r\n    border-bottom: 2px solid black;\r\n}\r\n\r\n\r\n/* CHILDREN ARTICLES */\r\n\r\n/* article.child{\r\n\r\n    padding: 30px;\r\n\r\n} */\r\n\r\narticle.child div {\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n    border-bottom: 1px solid black;\r\n    padding: 15px;\r\n}\r\n\r\narticle.CpuMode.child div {\r\n    border-bottom: none;\r\n}\r\n\r\narticle.child fieldset div {\r\n\r\n    flex-direction: row;\r\n}\r\n\r\narticle.child div.buttons {\r\n\r\n    flex-direction: row;\r\n    border-bottom: none;\r\n}\r\n\r\narticle.game-over output,\r\narticle.game-over h2 {\r\n    color: black;\r\n    text-align: center;\r\n    font-size: 1.6rem;\r\n}\r\n\r\narticle.game-over section.replay {\r\n    border-bottom: 1px solid black;\r\n}\r\n\r\n\r\ninput {\r\n    font-size: 16.5px;\r\n    font-weight: 500;\r\n    padding: 5px 15px;\r\n    border-radius: 50px;\r\n    outline: none;\r\n    border: 1px solid black;\r\n}\r\n\r\n\r\nbutton {\r\n\r\n    background-color: #fff;\r\n    font-size: 15px;\r\n    font-weight: 500;\r\n    padding: 5px 10px;\r\n    border-radius: 5px;\r\n    border: 1px solid black;\r\n    box-shadow: 2px 2px 3px rgb(44, 44, 44);\r\n    transition: ease-in-out 0.3s;\r\n}\r\n\r\nbutton:active {\r\n\r\n    transform: scale(0.95);\r\n    box-shadow: 1px 1px 3px rgb(44, 44, 44);\r\n}\r\n\r\n\r\n/* /// HEADER /// */\r\n\r\nheader {\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n}\r\n\r\nheader h1 {\r\n    color: beige;\r\n    margin-bottom: 30px;\r\n}\r\n\r\nheader h3 {\r\n    color: beige;\r\n}\r\n\r\n\r\n\r\n/* /// MAIN /// */\r\n\r\nmain {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n}\r\n\r\nsection {\r\n    display: grid;\r\n    grid-template-rows: auto 1fr 20%;\r\n    margin: 15px;\r\n    padding: 15px;\r\n}\r\n\r\nsection > button {\r\n    margin-inline-end: auto;\r\n    margin-inline-start: 15px;\r\n}\r\n\r\n.board {\r\n    display: grid;\r\n    grid-template-rows: repeat(10, 1fr);\r\n    grid-template-columns:  repeat(10, 1fr);\r\n\r\n    margin: 15px;\r\n}\r\n\r\n.board div {\r\n    border: 1px solid white;\r\n    min-width: 30px;\r\n    min-height: 30px;\r\n}\r\n\r\n.board#uncover div.ship {\r\n    border: 1px solid red;\r\n    background-color: white;\r\n\r\n}\r\n\r\n.board div.hit,\r\n.board div.miss {\r\n\r\n    cursor: not-allowed;\r\n}\r\n\r\n.board div.hit:active,\r\n.board div.miss:active {\r\n\r\n    background-color: rgba(173, 173, 173, 0.5);\r\n}\r\n\r\n.board div.hit {\r\n    border: 1px solid red;\r\n    background-color: red;\r\n\r\n}\r\n\r\n.board div.miss {\r\n    border: 1px solid blue;\r\n    background-color: lightblue;\r\n\r\n}\r\n\r\n.board div.hit.sunk {\r\n    border: 1px solid rgb(91, 2, 2,0.7);\r\n    background-color: rgb(91, 2, 2, 0.7);\r\n\r\n}\r\n\r\n.options {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 12px;\r\n    margin: 15px;\r\n    padding: 15px;\r\n}\r\n\r\noutput {\r\n    font-size: 1.3rem;\r\n}\r\n\r\n.options div {\r\n    display: flex;\r\n    gap: 15px;\r\n}\r\n\r\n.options button.random{\r\n    border-radius: 50%;\r\n}\r\n\r\n.options p, output {\r\n    color: beige;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n\r\n/* /// FOOTER /// */\r\n\r\nfooter {\r\n    text-align: center;\r\n    color: beige;\r\n    /* margin-block-start: 1.8rem; */\r\n    padding: 1.5rem;\r\n}\r\n\r\n\r\n"],"sourceRoot":""}]);
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
/* harmony export */   displayPlayerTurn: () => (/* binding */ displayPlayerTurn),
/* harmony export */   displayShip: () => (/* binding */ displayShip),
/* harmony export */   displayWinner: () => (/* binding */ displayWinner)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage */ "./src/storage.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! . */ "./src/index.js");










function displayShip(whichPlayer) {
    
    let board = _dom__WEBPACK_IMPORTED_MODULE_2__.elements.boards[whichPlayer]

    ___WEBPACK_IMPORTED_MODULE_4__.GAME.getPlayerShips(whichPlayer).flat().forEach(coord => addClass(board, coord, "ship"))
}

function displayBoard(){

    let board = _dom__WEBPACK_IMPORTED_MODULE_2__.elements.boards[___WEBPACK_IMPORTED_MODULE_4__.GAME.getActivePlayerRef()]

    ___WEBPACK_IMPORTED_MODULE_4__.GAME.getPlayerHitList().forEach(coord => addClass(board, coord, "hit"))
    ___WEBPACK_IMPORTED_MODULE_4__.GAME.getPlayerMissList().forEach(coord => addClass(board, coord, "miss"))
    ___WEBPACK_IMPORTED_MODULE_4__.GAME.getPlayerSunkShips().flat().forEach(coord => addClass(board, coord, "sunk"))
}


function addClass(board, quadrant, className) {

    let [row, col] = quadrant

    let square = board.querySelector(`[data-square="${row}-${col}"]`)

    square.classList.add(`${className}`)
}


function displayNames() {

    for(let i = 0; i < _dom__WEBPACK_IMPORTED_MODULE_2__.elements.outputArr.length; i++) {

        _dom__WEBPACK_IMPORTED_MODULE_2__.elements.outputArr[i].textContent = ___WEBPACK_IMPORTED_MODULE_4__.GAME.getPlayerName(i)
    }
}

function displayPlayerTurn() {

    let title = _dom__WEBPACK_IMPORTED_MODULE_2__.elements.title

    title.textContent = `${___WEBPACK_IMPORTED_MODULE_4__.GAME.getPlayerName()}'s turn!`
}

function displayWinner(){

    console.log("pasivo display", ___WEBPACK_IMPORTED_MODULE_4__.GAME.getPlayerName(___WEBPACK_IMPORTED_MODULE_4__.GAME.getPassivePlayerRef()))

    _dom__WEBPACK_IMPORTED_MODULE_2__.elements.winner.textContent = 
    `${___WEBPACK_IMPORTED_MODULE_4__.GAME.getPlayerName(___WEBPACK_IMPORTED_MODULE_4__.GAME.getPassivePlayerRef())} is the winner!!`;
}





function displayTotalBoard(){

    for (let player of ___WEBPACK_IMPORTED_MODULE_4__.GAME.players) {

        let board = _dom__WEBPACK_IMPORTED_MODULE_2__.elements.boards[player.ID]

        player.gameBoard.shipsCoords.flat().forEach(coord => addClass(board, coord, "ship")) 

        player.gameBoard.shipHitList.forEach(coord => addClass(board, coord, "hit"))

        player.gameBoard.waterHitList.forEach(coord => addClass(board, coord, "miss"))
    }
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
    dialogStart: document.querySelector("article"),
    dialogMode: document.querySelector("article.mode-selection"),
    dialogPlayerMode: document.querySelector("article.PlayerMode"),
    dialogCpuMode: document.querySelector("article.CpuMode"),
    dialogGameOver: document.querySelector("article.game-over"),
    btnCancel: Array.from(document.querySelectorAll("button.cancel")),
    btnOk: Array.from(document.querySelectorAll("button.ok")),
    inputsNames: Array.from(document.querySelectorAll("[name=player-name]")),
    inputsRadio: Array.from(document.querySelectorAll("[name=difficulty]")),
    btnRandomArr: Array.from(document.querySelectorAll("button.random")),
    btnReadyArr: Array.from(document.querySelectorAll("button.ready")),
    btnCoverArr: Array.from(document.querySelectorAll("button.cover")),
    outputArr: Array.from(document.querySelectorAll("output:not(.winner)")),
    start: document.querySelector("article.start section p"),
    title: document.querySelector("h3"),
    winner: document.querySelector(".winner"),
    replay: document.querySelector(".replay"),
    reset: document.querySelector(".reset"),

    init() {
        this.addListeners()
    },

    addListeners() {

        window.addEventListener("load", openStartDialog);
        window.addEventListener("load", applyGrid);
        this.dialogChildren().forEach(child => child.addEventListener("click", gameModeSelection));
        this.btnCancel.forEach(btn => btn.addEventListener("click", cancelDialog));
        this.btnOk.forEach(btn => btn.addEventListener("click", approveDialog));
        this.btnOk.forEach(btn => btn.addEventListener("click", _display__WEBPACK_IMPORTED_MODULE_4__.displayNames));
        this.btnRandomArr.forEach(btn => btn.addEventListener("click", createRandomShips));
        this.btnReadyArr.forEach(btn => btn.addEventListener("click", playersReady));
        this.btnCoverArr.forEach(btn => btn.addEventListener("click", toggleCoverBoard));
        this.start.addEventListener("click", openModeDialog);
        this.replay.addEventListener("click", replay);
        this.reset.addEventListener("click", reset);
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
    board.setAttribute("id", "uncover")

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

function openStartDialog(){

    elements.wrapper.classList.add("blur")
    elements.dialogStart.removeAttribute("id")
}

function openModeDialog(){

    elements.dialogStart.setAttribute("id", "close")
    elements.dialogMode.removeAttribute("id")
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
    cpuReady()

    e.currentTarget.parentElement.parentElement.setAttribute("id", "close")
    elements.inputsNames.forEach(input => input.value = "")
    elements.wrapper.classList.remove("blur")
}


function gameModeData(mode){

    if(mode === "PlayerMode") {

        _index__WEBPACK_IMPORTED_MODULE_5__.GAME.setGameData(mode, [elements.inputsNames[0].value, elements.inputsNames[1].value], null)
    }
    
    else if(mode === "CpuMode") {

        let difficulty

        elements.inputsRadio.forEach(input => { if(input.checked) difficulty = input.value })

        _index__WEBPACK_IMPORTED_MODULE_5__.GAME.setGameData(mode, [elements.inputsNames[2].value], difficulty)
    }

    console.log("GAME", _index__WEBPACK_IMPORTED_MODULE_5__.GAME)
};


function createRandomShips(e) {

    let whichPlayer = Number(e.currentTarget.dataset.board)
    let board = elements.boards[whichPlayer]

    createGrid(board)

    _index__WEBPACK_IMPORTED_MODULE_5__.GAME.placePlayerShips(whichPlayer)

    ;(0,_display__WEBPACK_IMPORTED_MODULE_4__.displayShip)(whichPlayer)
}


function playersReady(e) {

    e.currentTarget.dataset.ready = true
    e.currentTarget.disabled = true

    let whichBoard = e.currentTarget.parentElement.parentElement.dataset.board
    elements.btnRandomArr[whichBoard].disabled = true
    elements.boards[whichBoard].removeAttribute("id", "uncover")
    elements.btnCoverArr[whichBoard].disabled = true

    for(let btn of elements.btnReadyArr) if(btn.dataset.ready === "false") return

    _index__WEBPACK_IMPORTED_MODULE_5__.GAME.startGame()

    displayTurn()
}


function hitListener(e) {

    elements.boards[_index__WEBPACK_IMPORTED_MODULE_5__.GAME.getActivePlayerRef()].removeAttribute("id")

    let quadrant = e.target.dataset.square.split("-").map(str => Number(str))
   
    playerTurn(quadrant)

    if(_index__WEBPACK_IMPORTED_MODULE_5__.GAME.isGameOver()) {

        gameOverDialog()
        return
    }

    cpuTurn()
}


function playerTurn(quadrant){

    _index__WEBPACK_IMPORTED_MODULE_5__.GAME.turn(quadrant)
    displayTurn()
}


function cpuTurn() {

    if(_index__WEBPACK_IMPORTED_MODULE_5__.GAME.getMode() !== "CpuMode") return

    _index__WEBPACK_IMPORTED_MODULE_5__.GAME.CPUturn()

    setTimeout(() => { displayTurn() }, 2000)

    if(_index__WEBPACK_IMPORTED_MODULE_5__.GAME.isGameOver()) gameOverDialog()
}


function displayTurn(){

    toggleCoverButton()
    toggleActiveBoard()
    ;(0,_display__WEBPACK_IMPORTED_MODULE_4__.displayPlayerTurn)()
    ;(0,_display__WEBPACK_IMPORTED_MODULE_4__.displayBoard)()
}


function toggleActiveBoard() {

    elements.boards[_index__WEBPACK_IMPORTED_MODULE_5__.GAME.getPassivePlayerRef()].classList.remove("unable")
    elements.boards[_index__WEBPACK_IMPORTED_MODULE_5__.GAME.getActivePlayerRef()].classList.add("unable")

    if(_index__WEBPACK_IMPORTED_MODULE_5__.GAME.getMode() === "CpuMode") elements.boards[0].classList.add("unable")
}


function toggleCoverButton(){

    elements.btnCoverArr[_index__WEBPACK_IMPORTED_MODULE_5__.GAME.getPassivePlayerRef()].disabled = true
    elements.btnCoverArr[_index__WEBPACK_IMPORTED_MODULE_5__.GAME.getActivePlayerRef()].disabled = false

    if(_index__WEBPACK_IMPORTED_MODULE_5__.GAME.getMode() === "CpuMode") elements.btnCoverArr[1].disabled = true
}


function toggleCoverBoard(e){

    let whichBoard = e.currentTarget.parentElement.dataset.board
    let board = elements.boards[whichBoard]

    if(board.hasAttribute("id")) board.removeAttribute("id")
    else board.setAttribute("id", "uncover")
}

function cpuReady() {

    if(_index__WEBPACK_IMPORTED_MODULE_5__.GAME.getMode() !== "CpuMode") return

    elements.btnReadyArr[1].dataset.ready = true
    elements.btnReadyArr[1].disabled = true
    elements.btnRandomArr[1].disabled = true
    elements.btnCoverArr[1].disabled = true
    _index__WEBPACK_IMPORTED_MODULE_5__.GAME.placePlayerShips(1)
}

function gameOverDialog(){

    elements.dialogGameOver.removeAttribute("id");
    elements.wrapper.classList.add("blur");

    (0,_display__WEBPACK_IMPORTED_MODULE_4__.displayWinner)()
}

function replay(){

    _index__WEBPACK_IMPORTED_MODULE_5__.GAME.replay()
    resetDOM()
}

function reset(){

    _index__WEBPACK_IMPORTED_MODULE_5__.GAME.reset()
    resetDOM()
    openStartDialog()
}

function resetDOM () {

    applyGrid();
    elements.title.textContent = "";
    elements.btnRandomArr.forEach(btn => btn.disabled = false);
    elements.btnReadyArr.forEach(btn => btn.disabled = false);
    elements.btnCoverArr.forEach(btn => btn.disabled = false);
    elements.dialogGameOver.setAttribute("id", "close");
    elements.wrapper.classList.remove("blur");
    cpuReady();
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








class Game {

    #playerTurn;
    #players = [];
    #mode;
    #difficulty;

    constructor() {
        
        //this.#playerTurn; 
        //this.players = [];
       /*  this.mode;
        this.difficulty; */
    }

    setGameData(mode, playersNames, difficulty) {

        this.#mode = mode
        this.#difficulty = difficulty

        if(mode === "PlayerMode") {

            for(let name of playersNames) this.#createPlayer(name)
            
            return
        }

        this.#createPlayer(playersNames[0])
        this.#createCPU(playersNames[1])
    }
  
    #createPlayer(name) {

        let index = this.#players.length
        let num = index === 0 ? "One" : "Two"

        let player = new _player__WEBPACK_IMPORTED_MODULE_1__.Player(name || `Player ${num}`, index)

        this.#players.push(player)
    }

    #createCPU() {

        let player = new _player__WEBPACK_IMPORTED_MODULE_1__.CPU("CPU", 1, this.#difficulty)

        this.#players.push(player)
    }

    startGame(){
            
        this.#playerTurn = /* Math.floor(Math.random() * 2) */ 0
    }

    turn(quadrant) {
 
        let duplicatedMove = this.#players[this.#playerTurn].checkMoves(quadrant)
     
        if(duplicatedMove) return
        
        this.#sendAttack(quadrant)

        this.#playerTurn = this.getPassivePlayerRef()
    }

    CPUturn(){

        if(this.#playerTurn === 0) return

        let square = this.#players[1].attack()
        this.#sendAttack(square)

        this.#playerTurn = this.getPassivePlayerRef()
    }

    replay(){

        this.#players.forEach(player => player.replay())
        this.#playerTurn = ""
    }

    reset(){

        this.#difficulty = ""
        this.#mode = ""
        this.#playerTurn = ""
        this.#players = []
    }

    #sendAttack(quadrant) {

        let player = this.#players[this.getPassivePlayerRef()]
        player.receiveAttack(quadrant)
    }

    isGameOver() {
    
        for(let player of this.#players) {

            if(player.getSunkShips().length === /* 5 */2) {

                return true
            }
        }
        
        return false
    }

    getMode() {
        return this.#mode
    }

    getPassivePlayerRef() {

        return this.#playerTurn === 0 ? 1 : 0
    }

    getActivePlayerRef() {

        return this.#playerTurn
    }

    getPlayerName(whichPlayer = this.#playerTurn){

        return this.#players[whichPlayer].upperCaseName()
    }

    getPlayerHitList(whichPlayer = this.#playerTurn){

        return this.#players[whichPlayer].getHitList()
    }

    getPlayerMissList(whichPlayer = this.#playerTurn){

        return this.#players[whichPlayer].getMissList()
    }

    getPlayerShips(whichPlayer = this.#playerTurn){

        return this.#players[whichPlayer].getShipsCoords()
    }

    getPlayerSunkShips(whichPlayer = this.#playerTurn) {
        
        return this.#players[whichPlayer].getSunkShips()
    }

    placePlayerShips(whichPlayer = this.#playerTurn){

        this.#players[whichPlayer].placeShips()
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
        this.shipTypes = [/* {type: "carrier", length: 5}, {type: "battleship", length: 4}, 
                          {type: "destroyer", length: 3},*/ {type: "submarine", length: 3},  
                          {type: "patrol boat", length: 2}],
        this.ships = [],
        this.sunkShips = [],
        this.waterHitList = [],
        this.shipHitList = [] 
    }

    #createShips(){
                    
        let shipsQueue = []

        for(let ship of this.shipTypes){
  
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
        this.sunkShips = []
        this.shipsCoords = []
    }

    receiveAttack(square){
    
        let hitOnTarget = false

        for(let ship of this.ships) {

            for(let coordinate of ship.coordinates){

                if(coordinate[0] === square[0] && coordinate[1] === square[1]) {

                    ship.hit()
                    if(ship.isSunk) this.sunkShips.push(ship)
                        
                    this.shipHitList.push(square)        
                    hitOnTarget = true

                    break
                }
            }

            if(hitOnTarget) return
        } 

        this.waterHitList.push(square)
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
/* harmony export */   CPU: () => (/* binding */ CPU),
/* harmony export */   Player: () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");




class Player {

    constructor(name, ID){

        this.name = name
        this.ID = ID
        this.gameBoard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__.GameBoard()
        this.moves = []
    }

    upperCaseName() {

       return this.name.charAt(0).toUpperCase() + this.name.slice(1)
    }

    checkMoves(quadrant) {

        for(let move of this.moves) {

            let [row, col] = move

            if(row === quadrant[0] && col === quadrant[1]) {

                return true
            } 
        }

        this.moves.push(quadrant)
    }

    placeShips(){

        this.gameBoard.placeShips()
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

    getShipsCoords(){
        
        let ships = this.gameBoard.ships

        let shipsCoords = []
     
        for(let ship of ships) shipsCoords.push(ship.coordinates)

        return shipsCoords
    }

    getSunkShips(){
        
        let ships = this.gameBoard.sunkShips

        if(ships.length < 1) return []
     
        let coords = []
     
        for(let ship of ships) coords.push(ship.coordinates)
     
        return coords
    }

    replay(){

        this.moves = []
        this.gameBoard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__.GameBoard()
    }

}


class CPU extends Player {

    constructor(name, ID, difficulty){
        super(name, ID)
        this.difficulty = difficulty
    }

    #randomSquare(){

        let randomRow =  Math.floor(Math.random() * 10)
        let randomCol =  Math.floor(Math.random() * 10)

        let square = [randomRow, randomCol]

        return square
    }

    attack(){

        let square = this.#randomSquare()

            while(this.checkMoves(square)) square = this.#randomSquare()

        return square
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

    constructor(length = null, type = null){
        this.length = length
        this.type = type
        this.coordinates = []
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sYUFBYSxPQUFPLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksY0FBYyxPQUFPLGFBQWEsTUFBTSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sWUFBWSxRQUFRLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsS0FBSyxNQUFNLFFBQVEsVUFBVSxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxTQUFTLFlBQVksT0FBTyxLQUFLLFlBQVksUUFBUSxhQUFhLFNBQVMsTUFBTSxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxRQUFRLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksUUFBUSxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLFFBQVEsYUFBYSxPQUFPLFVB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QiwyQ0FBTSxtQkFBbUIsSUFBSTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsd0NBQUc7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbEsyQjtBQUMzQjtBQUNrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QiwyQkFBMkIsR0FBRyw4QkFBOEI7QUFDMUYsMkJBQTJCLDZCQUE2QixLQUFLLDZCQUE2QjtBQUMxRiwyQkFBMkIsK0JBQStCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyx1Q0FBSTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsaUJBQWlCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BLeUI7QUFDTTtBQUNNO0FBQ1Y7QUFDRztBQUNEO0FBQzdCO0FBQ2U7QUFDZjtBQUNBLGVBQWUsdUNBQUk7QUFDbkIsMENBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkcUM7QUFDckM7QUFDb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsaURBQVM7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsaURBQVM7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNySGE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QitCO0FBQ0o7QUFDM0I7QUFDNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsMkNBQU07QUFDOUIsd0JBQXdCLDJDQUFNO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixvQkFBb0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix3QkFBd0I7QUFDL0M7QUFDQSxtQ0FBbUMsdUNBQUk7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDeERBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuOnJvb3Qge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGZvbnQtZmFtaWx5OidTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4vKiAvLy8gQ0xBU1NFUyAvLy8gKi9cclxuXHJcbi5ibHVyIHtcclxuXHJcbiAgICBmaWx0ZXI6IGJsdXIoMjBweCk7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuLnVuYWJsZSB7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuI2Nsb3NlIHtcclxuXHJcbiAgICBhbmltYXRpb246IGZhZGUtb3V0IDAuN3MgZWFzZS1vdXQ7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uc3BhY2Uge1xyXG5cclxuICAgIHBhZGRpbmc6IHZhcigpO1xyXG4gICAgbWFyZ2luOiB2YXIoKTtcclxuXHJcbn1cclxuXHJcbi5kaXNwbGF5LWZsZXgtY29se1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5ib2R5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgLyogZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMCUgMWZyIDUlOyAqL1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xyXG5cclxufVxyXG5cclxuLyogLy8vIEFSVElDTEVTIC8vLyAqL1xyXG5cclxuaDEge1xyXG4gICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xyXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xyXG59XHJcblxyXG5hcnRpY2xlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLyogRXN0byBlcyBsbyBuZWNlc2FyaW8gcGFyYSBxdWUgZWwgcG9wLXVwIHF1ZWRlIGVuIGVsIG1lZGlvICovXHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgLyogaGFzdGEgYWNhICovXHJcbiAgICBhbmltYXRpb246IGZhZGUtaW4gMC43cyBlYXNlLW91dDtcclxufVxyXG5cclxuYXJ0aWNsZS5zdGFydCxcclxuYXJ0aWNsZS5jaGlsZCB7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG59XHJcblxyXG5hcnRpY2xlLnN0YXJ0IHAge1xyXG5cclxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG59XHJcblxyXG5cclxuQGtleWZyYW1lcyBmYWRlLWluIHtcclxuICAgIDAlIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGVZKDApO1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgMTAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlWSgxKTtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgZmFkZS1vdXQge1xyXG4gICAgMCUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZVkoMSk7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgMTAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlWSgwKTtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufVxyXG5cclxuYXJ0aWNsZSBzZWN0aW9uLFxyXG5hcnRpY2xlIGRpdixcclxuYXJ0aWNsZSBidXR0b24ge1xyXG5cclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuYXJ0aWNsZSBzZWN0aW9uIHtcclxuXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgbWFyZ2luLWJsb2NrOiAwO1xyXG59XHJcblxyXG5hcnRpY2xlIGJ1dHRvbiB7XHJcblxyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG5hcnRpY2xlIHNlY3Rpb24gcCB7XHJcblxyXG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgMC40cztcclxufVxyXG5cclxuYXJ0aWNsZSBzZWN0aW9uOmhvdmVyIHAge1xyXG5cclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XHJcbn1cclxuXHJcbmFydGljbGUgc2VjdGlvbiBwLFxyXG5hcnRpY2xlIGxhYmVsLFxyXG5hcnRpY2xlIGxlZ2VuZCxcclxuYXJ0aWNsZSBidXR0b24ge1xyXG5cclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG59XHJcblxyXG5hcnRpY2xlLm1vZGUtc2VsZWN0aW9uID4gOmZpcnN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuXHJcbi8qIENISUxEUkVOIEFSVElDTEVTICovXHJcblxyXG4vKiBhcnRpY2xlLmNoaWxke1xyXG5cclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcblxyXG59ICovXHJcblxyXG5hcnRpY2xlLmNoaWxkIGRpdiB7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDEwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcblxyXG5hcnRpY2xlLkNwdU1vZGUuY2hpbGQgZGl2IHtcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbn1cclxuXHJcbmFydGljbGUuY2hpbGQgZmllbGRzZXQgZGl2IHtcclxuXHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG5hcnRpY2xlLmNoaWxkIGRpdi5idXR0b25zIHtcclxuXHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxufVxyXG5cclxuYXJ0aWNsZS5nYW1lLW92ZXIgb3V0cHV0LFxyXG5hcnRpY2xlLmdhbWUtb3ZlciBoMiB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEuNnJlbTtcclxufVxyXG5cclxuYXJ0aWNsZS5nYW1lLW92ZXIgc2VjdGlvbi5yZXBsYXkge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG5cclxuaW5wdXQge1xyXG4gICAgZm9udC1zaXplOiAxNi41cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgcGFkZGluZzogNXB4IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG5cclxuYnV0dG9uIHtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDNweCByZ2IoNDQsIDQ0LCA0NCk7XHJcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAwLjNzO1xyXG59XHJcblxyXG5idXR0b246YWN0aXZlIHtcclxuXHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggcmdiKDQ0LCA0NCwgNDQpO1xyXG59XHJcblxyXG5cclxuLyogLy8vIEhFQURFUiAvLy8gKi9cclxuXHJcbmhlYWRlciB7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG59XHJcblxyXG5oZWFkZXIgaDEge1xyXG4gICAgY29sb3I6IGJlaWdlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuaGVhZGVyIGgzIHtcclxuICAgIGNvbG9yOiBiZWlnZTtcclxufVxyXG5cclxuXHJcblxyXG4vKiAvLy8gTUFJTiAvLy8gKi9cclxuXHJcbm1haW4ge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxufVxyXG5cclxuc2VjdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciAyMCU7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcblxyXG5zZWN0aW9uID4gYnV0dG9uIHtcclxuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiBhdXRvO1xyXG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogMTVweDtcclxufVxyXG5cclxuLmJvYXJkIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogIHJlcGVhdCgxMCwgMWZyKTtcclxuXHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbn1cclxuXHJcbi5ib2FyZCBkaXYge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICBtaW4td2lkdGg6IDMwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4uYm9hcmQjdW5jb3ZlciBkaXYuc2hpcCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHJcbn1cclxuXHJcbi5ib2FyZCBkaXYuaGl0LFxyXG4uYm9hcmQgZGl2Lm1pc3Mge1xyXG5cclxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbn1cclxuXHJcbi5ib2FyZCBkaXYuaGl0OmFjdGl2ZSxcclxuLmJvYXJkIGRpdi5taXNzOmFjdGl2ZSB7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNzMsIDE3MywgMTczLCAwLjUpO1xyXG59XHJcblxyXG4uYm9hcmQgZGl2LmhpdCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcblxyXG59XHJcblxyXG4uYm9hcmQgZGl2Lm1pc3Mge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcclxuXHJcbn1cclxuXHJcbi5ib2FyZCBkaXYuaGl0LnN1bmsge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDkxLCAyLCAyLDAuNyk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTEsIDIsIDIsIDAuNyk7XHJcblxyXG59XHJcblxyXG4ub3B0aW9ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMTJweDtcclxuICAgIG1hcmdpbjogMTVweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuXHJcbm91dHB1dCB7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxufVxyXG5cclxuLm9wdGlvbnMgZGl2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDE1cHg7XHJcbn1cclxuXHJcbi5vcHRpb25zIGJ1dHRvbi5yYW5kb217XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5vcHRpb25zIHAsIG91dHB1dCB7XHJcbiAgICBjb2xvcjogYmVpZ2U7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi8qIC8vLyBGT09URVIgLy8vICovXHJcblxyXG5mb290ZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IGJlaWdlO1xyXG4gICAgLyogbWFyZ2luLWJsb2NrLXN0YXJ0OiAxLjhyZW07ICovXHJcbiAgICBwYWRkaW5nOiAxLjVyZW07XHJcbn1cclxuXHJcblxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLDJEQUEyRDtBQUMvRDs7QUFFQSxvQkFBb0I7O0FBRXBCOztJQUVJLGtCQUFrQjtJQUNsQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7O0lBRUksaUNBQWlDO0lBQ2pDLGFBQWE7QUFDakI7O0FBRUE7O0lBRUksY0FBYztJQUNkLGFBQWE7O0FBRWpCOztBQUVBOztJQUVJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLG9DQUFvQztJQUNwQyxpQ0FBaUM7O0FBRXJDOztBQUVBLHFCQUFxQjs7QUFFckI7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGVBQWU7QUFD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O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7O0FBR0EsbUJBQW1COztBQUVuQjtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZ0NBQWdDO0lBQ2hDLGVBQWU7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBmb250LWZhbWlseTonU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLyogLy8vIENMQVNTRVMgLy8vICovXFxyXFxuXFxyXFxuLmJsdXIge1xcclxcblxcclxcbiAgICBmaWx0ZXI6IGJsdXIoMjBweCk7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udW5hYmxlIHtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNjbG9zZSB7XFxyXFxuXFxyXFxuICAgIGFuaW1hdGlvbjogZmFkZS1vdXQgMC43cyBlYXNlLW91dDtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNwYWNlIHtcXHJcXG5cXHJcXG4gICAgcGFkZGluZzogdmFyKCk7XFxyXFxuICAgIG1hcmdpbjogdmFyKCk7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5kaXNwbGF5LWZsZXgtY29se1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5e1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgLyogZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMCUgMWZyIDUlOyAqL1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi8qIC8vLyBBUlRJQ0xFUyAvLy8gKi9cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xcclxcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxufVxcclxcblxcclxcbmFydGljbGUge1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIC8qIEVzdG8gZXMgbG8gbmVjZXNhcmlvIHBhcmEgcXVlIGVsIHBvcC11cCBxdWVkZSBlbiBlbCBtZWRpbyAqL1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgdG9wOiA1MCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgICAvKiBoYXN0YSBhY2EgKi9cXHJcXG4gICAgYW5pbWF0aW9uOiBmYWRlLWluIDAuN3MgZWFzZS1vdXQ7XFxyXFxufVxcclxcblxcclxcbmFydGljbGUuc3RhcnQsXFxyXFxuYXJ0aWNsZS5jaGlsZCB7XFxyXFxuICAgIHBhZGRpbmc6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbmFydGljbGUuc3RhcnQgcCB7XFxyXFxuXFxyXFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGZhZGUtaW4ge1xcclxcbiAgICAwJSB7XFxyXFxuICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZVkoMCk7XFxyXFxuICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcbiAgXFxyXFxuICAgIDEwMCUge1xcclxcbiAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGVZKDEpO1xcclxcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIEBrZXlmcmFtZXMgZmFkZS1vdXQge1xcclxcbiAgICAwJSB7XFxyXFxuICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZVkoMSk7XFxyXFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIH1cXHJcXG4gIFxcclxcbiAgICAxMDAlIHtcXHJcXG4gICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlWSgwKTtcXHJcXG4gICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbmFydGljbGUgc2VjdGlvbixcXHJcXG5hcnRpY2xlIGRpdixcXHJcXG5hcnRpY2xlIGJ1dHRvbiB7XFxyXFxuXFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuYXJ0aWNsZSBzZWN0aW9uIHtcXHJcXG5cXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAzMHB4O1xcclxcbiAgICBtYXJnaW4tYmxvY2s6IDA7XFxyXFxufVxcclxcblxcclxcbmFydGljbGUgYnV0dG9uIHtcXHJcXG5cXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5hcnRpY2xlIHNlY3Rpb24gcCB7XFxyXFxuXFxyXFxuICAgIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IDAuNHM7XFxyXFxufVxcclxcblxcclxcbmFydGljbGUgc2VjdGlvbjpob3ZlciBwIHtcXHJcXG5cXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcXHJcXG59XFxyXFxuXFxyXFxuYXJ0aWNsZSBzZWN0aW9uIHAsXFxyXFxuYXJ0aWNsZSBsYWJlbCxcXHJcXG5hcnRpY2xlIGxlZ2VuZCxcXHJcXG5hcnRpY2xlIGJ1dHRvbiB7XFxyXFxuXFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG5hcnRpY2xlLm1vZGUtc2VsZWN0aW9uID4gOmZpcnN0LWNoaWxkIHtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBDSElMRFJFTiBBUlRJQ0xFUyAqL1xcclxcblxcclxcbi8qIGFydGljbGUuY2hpbGR7XFxyXFxuXFxyXFxuICAgIHBhZGRpbmc6IDMwcHg7XFxyXFxuXFxyXFxufSAqL1xcclxcblxcclxcbmFydGljbGUuY2hpbGQgZGl2IHtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIHBhZGRpbmc6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbmFydGljbGUuQ3B1TW9kZS5jaGlsZCBkaXYge1xcclxcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5hcnRpY2xlLmNoaWxkIGZpZWxkc2V0IGRpdiB7XFxyXFxuXFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxufVxcclxcblxcclxcbmFydGljbGUuY2hpbGQgZGl2LmJ1dHRvbnMge1xcclxcblxcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5hcnRpY2xlLmdhbWUtb3ZlciBvdXRwdXQsXFxyXFxuYXJ0aWNsZS5nYW1lLW92ZXIgaDIge1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxyXFxufVxcclxcblxcclxcbmFydGljbGUuZ2FtZS1vdmVyIHNlY3Rpb24ucmVwbGF5IHtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5pbnB1dCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTYuNXB4O1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggM3B4IHJnYig0NCwgNDQsIDQ0KTtcXHJcXG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uOmFjdGl2ZSB7XFxyXFxuXFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxyXFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IHJnYig0NCwgNDQsIDQ0KTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogLy8vIEhFQURFUiAvLy8gKi9cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIGgxIHtcXHJcXG4gICAgY29sb3I6IGJlaWdlO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgaDMge1xcclxcbiAgICBjb2xvcjogYmVpZ2U7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qIC8vLyBNQUlOIC8vLyAqL1xcclxcblxcclxcbm1haW4ge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxufVxcclxcblxcclxcbnNlY3Rpb24ge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIDIwJTtcXHJcXG4gICAgbWFyZ2luOiAxNXB4O1xcclxcbiAgICBwYWRkaW5nOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5zZWN0aW9uID4gYnV0dG9uIHtcXHJcXG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IGF1dG87XFxyXFxuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5ib2FyZCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6ICByZXBlYXQoMTAsIDFmcik7XFxyXFxuXFxyXFxuICAgIG1hcmdpbjogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkIGRpdiB7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcclxcbiAgICBtaW4td2lkdGg6IDMwcHg7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5ib2FyZCN1bmNvdmVyIGRpdi5zaGlwIHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkIGRpdi5oaXQsXFxyXFxuLmJvYXJkIGRpdi5taXNzIHtcXHJcXG5cXHJcXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkIGRpdi5oaXQ6YWN0aXZlLFxcclxcbi5ib2FyZCBkaXYubWlzczphY3RpdmUge1xcclxcblxcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3MywgMTczLCAxNzMsIDAuNSk7XFxyXFxufVxcclxcblxcclxcbi5ib2FyZCBkaXYuaGl0IHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5ib2FyZCBkaXYubWlzcyB7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkIGRpdi5oaXQuc3VuayB7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYig5MSwgMiwgMiwwLjcpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTEsIDIsIDIsIDAuNyk7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5vcHRpb25zIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAxMnB4O1xcclxcbiAgICBtYXJnaW46IDE1cHg7XFxyXFxuICAgIHBhZGRpbmc6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbm91dHB1dCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ub3B0aW9ucyBkaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5vcHRpb25zIGJ1dHRvbi5yYW5kb217XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm9wdGlvbnMgcCwgb3V0cHV0IHtcXHJcXG4gICAgY29sb3I6IGJlaWdlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiAvLy8gRk9PVEVSIC8vLyAqL1xcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6IGJlaWdlO1xcclxcbiAgICAvKiBtYXJnaW4tYmxvY2stc3RhcnQ6IDEuOHJlbTsgKi9cXHJcXG4gICAgcGFkZGluZzogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7UGxheWVyfSBmcm9tIFwiLi9wbGF5ZXJcIlxyXG5pbXBvcnQge0dhbWVCb2FyZH0gZnJvbSBcIi4vZ2FtZWJvYXJkXCJcclxuaW1wb3J0IHtlbGVtZW50cywgY3JlYXRlR3JpZH0gZnJvbSBcIi4vZG9tXCJcclxuaW1wb3J0IHtzdG9yZURhdGEsIHJldHJpZXZlRGF0YSwgdXBkYXRlRGF0YX0gZnJvbSBcIi4vc3RvcmFnZVwiXHJcbmltcG9ydCB7IEdBTUUgfSBmcm9tIFwiLlwiXHJcblxyXG5leHBvcnQge2Rpc3BsYXlCb2FyZCwgZGlzcGxheVNoaXAsIGRpc3BsYXlOYW1lcywgZGlzcGxheVBsYXllclR1cm4sIGRpc3BsYXlXaW5uZXJ9XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlTaGlwKHdoaWNoUGxheWVyKSB7XHJcbiAgICBcclxuICAgIGxldCBib2FyZCA9IGVsZW1lbnRzLmJvYXJkc1t3aGljaFBsYXllcl1cclxuXHJcbiAgICBHQU1FLmdldFBsYXllclNoaXBzKHdoaWNoUGxheWVyKS5mbGF0KCkuZm9yRWFjaChjb29yZCA9PiBhZGRDbGFzcyhib2FyZCwgY29vcmQsIFwic2hpcFwiKSlcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheUJvYXJkKCl7XHJcblxyXG4gICAgbGV0IGJvYXJkID0gZWxlbWVudHMuYm9hcmRzW0dBTUUuZ2V0QWN0aXZlUGxheWVyUmVmKCldXHJcblxyXG4gICAgR0FNRS5nZXRQbGF5ZXJIaXRMaXN0KCkuZm9yRWFjaChjb29yZCA9PiBhZGRDbGFzcyhib2FyZCwgY29vcmQsIFwiaGl0XCIpKVxyXG4gICAgR0FNRS5nZXRQbGF5ZXJNaXNzTGlzdCgpLmZvckVhY2goY29vcmQgPT4gYWRkQ2xhc3MoYm9hcmQsIGNvb3JkLCBcIm1pc3NcIikpXHJcbiAgICBHQU1FLmdldFBsYXllclN1bmtTaGlwcygpLmZsYXQoKS5mb3JFYWNoKGNvb3JkID0+IGFkZENsYXNzKGJvYXJkLCBjb29yZCwgXCJzdW5rXCIpKVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gYWRkQ2xhc3MoYm9hcmQsIHF1YWRyYW50LCBjbGFzc05hbWUpIHtcclxuXHJcbiAgICBsZXQgW3JvdywgY29sXSA9IHF1YWRyYW50XHJcblxyXG4gICAgbGV0IHNxdWFyZSA9IGJvYXJkLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXNxdWFyZT1cIiR7cm93fS0ke2NvbH1cIl1gKVxyXG5cclxuICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKGAke2NsYXNzTmFtZX1gKVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZGlzcGxheU5hbWVzKCkge1xyXG5cclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBlbGVtZW50cy5vdXRwdXRBcnIubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgZWxlbWVudHMub3V0cHV0QXJyW2ldLnRleHRDb250ZW50ID0gR0FNRS5nZXRQbGF5ZXJOYW1lKGkpXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlQbGF5ZXJUdXJuKCkge1xyXG5cclxuICAgIGxldCB0aXRsZSA9IGVsZW1lbnRzLnRpdGxlXHJcblxyXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBgJHtHQU1FLmdldFBsYXllck5hbWUoKX0ncyB0dXJuIWBcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheVdpbm5lcigpe1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwicGFzaXZvIGRpc3BsYXlcIiwgR0FNRS5nZXRQbGF5ZXJOYW1lKEdBTUUuZ2V0UGFzc2l2ZVBsYXllclJlZigpKSlcclxuXHJcbiAgICBlbGVtZW50cy53aW5uZXIudGV4dENvbnRlbnQgPSBcclxuICAgIGAke0dBTUUuZ2V0UGxheWVyTmFtZShHQU1FLmdldFBhc3NpdmVQbGF5ZXJSZWYoKSl9IGlzIHRoZSB3aW5uZXIhIWA7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5VG90YWxCb2FyZCgpe1xyXG5cclxuICAgIGZvciAobGV0IHBsYXllciBvZiBHQU1FLnBsYXllcnMpIHtcclxuXHJcbiAgICAgICAgbGV0IGJvYXJkID0gZWxlbWVudHMuYm9hcmRzW3BsYXllci5JRF1cclxuXHJcbiAgICAgICAgcGxheWVyLmdhbWVCb2FyZC5zaGlwc0Nvb3Jkcy5mbGF0KCkuZm9yRWFjaChjb29yZCA9PiBhZGRDbGFzcyhib2FyZCwgY29vcmQsIFwic2hpcFwiKSkgXHJcblxyXG4gICAgICAgIHBsYXllci5nYW1lQm9hcmQuc2hpcEhpdExpc3QuZm9yRWFjaChjb29yZCA9PiBhZGRDbGFzcyhib2FyZCwgY29vcmQsIFwiaGl0XCIpKVxyXG5cclxuICAgICAgICBwbGF5ZXIuZ2FtZUJvYXJkLndhdGVySGl0TGlzdC5mb3JFYWNoKGNvb3JkID0+IGFkZENsYXNzKGJvYXJkLCBjb29yZCwgXCJtaXNzXCIpKVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLyogZnVuY3Rpb24gZGlzcGxheUhpdChwbGF5ZXIpIHtcclxuXHJcbiAgICBsZXQgYm9hcmQgPSBlbGVtZW50cy5ib2FyZHNbcGxheWVyLklEXVxyXG5cclxuICAgIHBsYXllci5nYW1lQm9hcmQuc2hpcEhpdExpc3QuZm9yRWFjaChjb29yZCA9PiBhZGRDbGFzcyhib2FyZCwgY29vcmQsIFwiaGl0XCIpKSBcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlNaXNzKHBsYXllcikge1xyXG5cclxuICAgIGxldCBib2FyZCA9IGVsZW1lbnRzLmJvYXJkc1twbGF5ZXIuSURdXHJcblxyXG4gICAgcGxheWVyLmdhbWVCb2FyZC53YXRlckhpdExpc3QuZm9yRWFjaChjb29yZCA9PiBhZGRDbGFzcyhib2FyZCwgY29vcmQsIFwibWlzc1wiKSlcclxufSAqL1xyXG4iLCJpbXBvcnQgeyBQbGF5ZXIsIENQVSB9IGZyb20gXCIuL3BsYXllclwiXHJcbmltcG9ydCB7IEdhbWVCb2FyZCB9IGZyb20gXCIuL2dhbWVib2FyZFwiXHJcbmltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi9zaGlwXCJcclxuaW1wb3J0IHsgc3RvcmVEYXRhLCByZXRyaWV2ZURhdGEsIHVwZGF0ZURhdGEgfSBmcm9tIFwiLi9zdG9yYWdlXCJcclxuaW1wb3J0IHsgZGlzcGxheUJvYXJkLCBkaXNwbGF5U2hpcCwgZGlzcGxheU5hbWVzLCBkaXNwbGF5UGxheWVyVHVybiwgZGlzcGxheVdpbm5lciB9IGZyb20gXCIuL2Rpc3BsYXlcIlxyXG5pbXBvcnQgeyBHQU1FIH0gZnJvbSBcIi4vaW5kZXhcIlxyXG5cclxuZXhwb3J0IHtlbGVtZW50cywgY3JlYXRlR3JpZCwgcGxheWVyc1JlYWR5fVxyXG5cclxuXHJcbmxldCBlbGVtZW50cyA9IHtcclxuXHJcbiAgICB3cmFwcGVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndyYXBwZXJcIiksXHJcbiAgICBib2FyZHM6IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ib2FyZFwiKSksXHJcbiAgICBkaWFsb2dTdGFydDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImFydGljbGVcIiksXHJcbiAgICBkaWFsb2dNb2RlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYXJ0aWNsZS5tb2RlLXNlbGVjdGlvblwiKSxcclxuICAgIGRpYWxvZ1BsYXllck1vZGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhcnRpY2xlLlBsYXllck1vZGVcIiksXHJcbiAgICBkaWFsb2dDcHVNb2RlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYXJ0aWNsZS5DcHVNb2RlXCIpLFxyXG4gICAgZGlhbG9nR2FtZU92ZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhcnRpY2xlLmdhbWUtb3ZlclwiKSxcclxuICAgIGJ0bkNhbmNlbDogQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uLmNhbmNlbFwiKSksXHJcbiAgICBidG5PazogQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uLm9rXCIpKSxcclxuICAgIGlucHV0c05hbWVzOiBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbmFtZT1wbGF5ZXItbmFtZV1cIikpLFxyXG4gICAgaW5wdXRzUmFkaW86IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltuYW1lPWRpZmZpY3VsdHldXCIpKSxcclxuICAgIGJ0blJhbmRvbUFycjogQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uLnJhbmRvbVwiKSksXHJcbiAgICBidG5SZWFkeUFycjogQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uLnJlYWR5XCIpKSxcclxuICAgIGJ0bkNvdmVyQXJyOiBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b24uY292ZXJcIikpLFxyXG4gICAgb3V0cHV0QXJyOiBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJvdXRwdXQ6bm90KC53aW5uZXIpXCIpKSxcclxuICAgIHN0YXJ0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYXJ0aWNsZS5zdGFydCBzZWN0aW9uIHBcIiksXHJcbiAgICB0aXRsZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgzXCIpLFxyXG4gICAgd2lubmVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndpbm5lclwiKSxcclxuICAgIHJlcGxheTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXBsYXlcIiksXHJcbiAgICByZXNldDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXNldFwiKSxcclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKClcclxuICAgIH0sXHJcblxyXG4gICAgYWRkTGlzdGVuZXJzKCkge1xyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgb3BlblN0YXJ0RGlhbG9nKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgYXBwbHlHcmlkKTtcclxuICAgICAgICB0aGlzLmRpYWxvZ0NoaWxkcmVuKCkuZm9yRWFjaChjaGlsZCA9PiBjaGlsZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ2FtZU1vZGVTZWxlY3Rpb24pKTtcclxuICAgICAgICB0aGlzLmJ0bkNhbmNlbC5mb3JFYWNoKGJ0biA9PiBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNhbmNlbERpYWxvZykpO1xyXG4gICAgICAgIHRoaXMuYnRuT2suZm9yRWFjaChidG4gPT4gYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhcHByb3ZlRGlhbG9nKSk7XHJcbiAgICAgICAgdGhpcy5idG5Pay5mb3JFYWNoKGJ0biA9PiBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRpc3BsYXlOYW1lcykpO1xyXG4gICAgICAgIHRoaXMuYnRuUmFuZG9tQXJyLmZvckVhY2goYnRuID0+IGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3JlYXRlUmFuZG9tU2hpcHMpKTtcclxuICAgICAgICB0aGlzLmJ0blJlYWR5QXJyLmZvckVhY2goYnRuID0+IGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcGxheWVyc1JlYWR5KSk7XHJcbiAgICAgICAgdGhpcy5idG5Db3ZlckFyci5mb3JFYWNoKGJ0biA9PiBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZUNvdmVyQm9hcmQpKTtcclxuICAgICAgICB0aGlzLnN0YXJ0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvcGVuTW9kZURpYWxvZyk7XHJcbiAgICAgICAgdGhpcy5yZXBsYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlcGxheSk7XHJcbiAgICAgICAgdGhpcy5yZXNldC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVzZXQpO1xyXG4gICAgfSxcclxuXHJcbiAgICBkaWFsb2dDaGlsZHJlbigpe1xyXG5cclxuICAgICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuZGlhbG9nTW9kZS5jaGlsZHJlbikgXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoZWxlbWVudCwgY2xhc3NOYW1lLCBzZWNvbmRDbGFzc05hbWUpe1xyXG5cclxuICAgIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudClcclxuICAgIGVsLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKVxyXG5cclxuICAgIGlmKHNlY29uZENsYXNzTmFtZSkgZWwuY2xhc3NMaXN0LmFkZChzZWNvbmRDbGFzc05hbWUpXHJcblxyXG4gICAgcmV0dXJuIGVsXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUdyaWQoYm9hcmQpe1xyXG5cclxuICAgIGJvYXJkLmlubmVySFRNTCA9IFwiXCJcclxuICAgIGJvYXJkLmNsYXNzTGlzdC5hZGQoXCJ1bmFibGVcIilcclxuICAgIGJvYXJkLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidW5jb3ZlclwiKVxyXG5cclxuICAgIGxldCBudW0gPSAxMFxyXG5cclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBudW07IGkrKykge1xyXG5cclxuICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgbnVtOyBqKyspIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBxdWFkcmFudCA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgYHJvdy0ke2l9YCwgYGNvbC0ke2p9YClcclxuICAgICAgICAgICAgcXVhZHJhbnQuc2V0QXR0cmlidXRlKFwiZGF0YS1zcXVhcmVcIiwgYCR7aX0tJHtqfWApXHJcbiAgICAgICAgICAgIHF1YWRyYW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoaXRMaXN0ZW5lcilcclxuICAgICAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQocXVhZHJhbnQpXHJcbiAgICAgICAgfSBcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlHcmlkKCkge1xyXG5cclxuICAgIGZvcihsZXQgYm9hcmQgb2YgZWxlbWVudHMuYm9hcmRzKSBjcmVhdGVHcmlkKGJvYXJkKSBcclxufVxyXG5cclxuZnVuY3Rpb24gb3BlblN0YXJ0RGlhbG9nKCl7XHJcblxyXG4gICAgZWxlbWVudHMud3JhcHBlci5jbGFzc0xpc3QuYWRkKFwiYmx1clwiKVxyXG4gICAgZWxlbWVudHMuZGlhbG9nU3RhcnQucmVtb3ZlQXR0cmlidXRlKFwiaWRcIilcclxufVxyXG5cclxuZnVuY3Rpb24gb3Blbk1vZGVEaWFsb2coKXtcclxuXHJcbiAgICBlbGVtZW50cy5kaWFsb2dTdGFydC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNsb3NlXCIpXHJcbiAgICBlbGVtZW50cy5kaWFsb2dNb2RlLnJlbW92ZUF0dHJpYnV0ZShcImlkXCIpXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBnYW1lTW9kZVNlbGVjdGlvbihlKSB7XHJcblxyXG4gICAgZWxlbWVudHMuZGlhbG9nTW9kZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNsb3NlXCIpXHJcblxyXG4gICAgbGV0IGdhbWVNb2RlID0gZS5jdXJyZW50VGFyZ2V0LmNsYXNzTmFtZVxyXG5cclxuICAgIGxldCBkaWFsb2cgPSBlbGVtZW50c1tgZGlhbG9nJHtnYW1lTW9kZX1gXVxyXG4gICAgZGlhbG9nLnJlbW92ZUF0dHJpYnV0ZShcImlkXCIpXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBjYW5jZWxEaWFsb2coZSl7XHJcblxyXG4gICAgLy9pZihlLmtleSAhPT0gXCJFc2NhcGVcIikgcmV0dXJuXHJcbiAgICBlLmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY2xvc2VcIilcclxuICAgIGVsZW1lbnRzLmlucHV0c05hbWVzLmZvckVhY2goaW5wdXQgPT4gaW5wdXQudmFsdWUgPSBcIlwiKVxyXG5cclxuICAgIG9wZW5Nb2RlRGlhbG9nKClcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGFwcHJvdmVEaWFsb2coZSkge1xyXG5cclxuICAgIC8vaWYoZS5rZXkgIT09IFwiRW50ZXJcIikgcmV0dXJuXHJcbiAgICBsZXQgbW9kZSA9IGUudGFyZ2V0LmRhdGFzZXQubW9kZVxyXG5cclxuICAgIGdhbWVNb2RlRGF0YShtb2RlKVxyXG4gICAgY3B1UmVhZHkoKVxyXG5cclxuICAgIGUuY3VycmVudFRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjbG9zZVwiKVxyXG4gICAgZWxlbWVudHMuaW5wdXRzTmFtZXMuZm9yRWFjaChpbnB1dCA9PiBpbnB1dC52YWx1ZSA9IFwiXCIpXHJcbiAgICBlbGVtZW50cy53cmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJibHVyXCIpXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBnYW1lTW9kZURhdGEobW9kZSl7XHJcblxyXG4gICAgaWYobW9kZSA9PT0gXCJQbGF5ZXJNb2RlXCIpIHtcclxuXHJcbiAgICAgICAgR0FNRS5zZXRHYW1lRGF0YShtb2RlLCBbZWxlbWVudHMuaW5wdXRzTmFtZXNbMF0udmFsdWUsIGVsZW1lbnRzLmlucHV0c05hbWVzWzFdLnZhbHVlXSwgbnVsbClcclxuICAgIH1cclxuICAgIFxyXG4gICAgZWxzZSBpZihtb2RlID09PSBcIkNwdU1vZGVcIikge1xyXG5cclxuICAgICAgICBsZXQgZGlmZmljdWx0eVxyXG5cclxuICAgICAgICBlbGVtZW50cy5pbnB1dHNSYWRpby5mb3JFYWNoKGlucHV0ID0+IHsgaWYoaW5wdXQuY2hlY2tlZCkgZGlmZmljdWx0eSA9IGlucHV0LnZhbHVlIH0pXHJcblxyXG4gICAgICAgIEdBTUUuc2V0R2FtZURhdGEobW9kZSwgW2VsZW1lbnRzLmlucHV0c05hbWVzWzJdLnZhbHVlXSwgZGlmZmljdWx0eSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIkdBTUVcIiwgR0FNRSlcclxufTtcclxuXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVSYW5kb21TaGlwcyhlKSB7XHJcblxyXG4gICAgbGV0IHdoaWNoUGxheWVyID0gTnVtYmVyKGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmJvYXJkKVxyXG4gICAgbGV0IGJvYXJkID0gZWxlbWVudHMuYm9hcmRzW3doaWNoUGxheWVyXVxyXG5cclxuICAgIGNyZWF0ZUdyaWQoYm9hcmQpXHJcblxyXG4gICAgR0FNRS5wbGFjZVBsYXllclNoaXBzKHdoaWNoUGxheWVyKVxyXG5cclxuICAgIGRpc3BsYXlTaGlwKHdoaWNoUGxheWVyKVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gcGxheWVyc1JlYWR5KGUpIHtcclxuXHJcbiAgICBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5yZWFkeSA9IHRydWVcclxuICAgIGUuY3VycmVudFRhcmdldC5kaXNhYmxlZCA9IHRydWVcclxuXHJcbiAgICBsZXQgd2hpY2hCb2FyZCA9IGUuY3VycmVudFRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZGF0YXNldC5ib2FyZFxyXG4gICAgZWxlbWVudHMuYnRuUmFuZG9tQXJyW3doaWNoQm9hcmRdLmRpc2FibGVkID0gdHJ1ZVxyXG4gICAgZWxlbWVudHMuYm9hcmRzW3doaWNoQm9hcmRdLnJlbW92ZUF0dHJpYnV0ZShcImlkXCIsIFwidW5jb3ZlclwiKVxyXG4gICAgZWxlbWVudHMuYnRuQ292ZXJBcnJbd2hpY2hCb2FyZF0uZGlzYWJsZWQgPSB0cnVlXHJcblxyXG4gICAgZm9yKGxldCBidG4gb2YgZWxlbWVudHMuYnRuUmVhZHlBcnIpIGlmKGJ0bi5kYXRhc2V0LnJlYWR5ID09PSBcImZhbHNlXCIpIHJldHVyblxyXG5cclxuICAgIEdBTUUuc3RhcnRHYW1lKClcclxuXHJcbiAgICBkaXNwbGF5VHVybigpXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBoaXRMaXN0ZW5lcihlKSB7XHJcblxyXG4gICAgZWxlbWVudHMuYm9hcmRzW0dBTUUuZ2V0QWN0aXZlUGxheWVyUmVmKCldLnJlbW92ZUF0dHJpYnV0ZShcImlkXCIpXHJcblxyXG4gICAgbGV0IHF1YWRyYW50ID0gZS50YXJnZXQuZGF0YXNldC5zcXVhcmUuc3BsaXQoXCItXCIpLm1hcChzdHIgPT4gTnVtYmVyKHN0cikpXHJcbiAgIFxyXG4gICAgcGxheWVyVHVybihxdWFkcmFudClcclxuXHJcbiAgICBpZihHQU1FLmlzR2FtZU92ZXIoKSkge1xyXG5cclxuICAgICAgICBnYW1lT3ZlckRpYWxvZygpXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgY3B1VHVybigpXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBwbGF5ZXJUdXJuKHF1YWRyYW50KXtcclxuXHJcbiAgICBHQU1FLnR1cm4ocXVhZHJhbnQpXHJcbiAgICBkaXNwbGF5VHVybigpXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBjcHVUdXJuKCkge1xyXG5cclxuICAgIGlmKEdBTUUuZ2V0TW9kZSgpICE9PSBcIkNwdU1vZGVcIikgcmV0dXJuXHJcblxyXG4gICAgR0FNRS5DUFV0dXJuKClcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHsgZGlzcGxheVR1cm4oKSB9LCAyMDAwKVxyXG5cclxuICAgIGlmKEdBTUUuaXNHYW1lT3ZlcigpKSBnYW1lT3ZlckRpYWxvZygpXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5VHVybigpe1xyXG5cclxuICAgIHRvZ2dsZUNvdmVyQnV0dG9uKClcclxuICAgIHRvZ2dsZUFjdGl2ZUJvYXJkKClcclxuICAgIGRpc3BsYXlQbGF5ZXJUdXJuKClcclxuICAgIGRpc3BsYXlCb2FyZCgpXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiB0b2dnbGVBY3RpdmVCb2FyZCgpIHtcclxuXHJcbiAgICBlbGVtZW50cy5ib2FyZHNbR0FNRS5nZXRQYXNzaXZlUGxheWVyUmVmKCldLmNsYXNzTGlzdC5yZW1vdmUoXCJ1bmFibGVcIilcclxuICAgIGVsZW1lbnRzLmJvYXJkc1tHQU1FLmdldEFjdGl2ZVBsYXllclJlZigpXS5jbGFzc0xpc3QuYWRkKFwidW5hYmxlXCIpXHJcblxyXG4gICAgaWYoR0FNRS5nZXRNb2RlKCkgPT09IFwiQ3B1TW9kZVwiKSBlbGVtZW50cy5ib2FyZHNbMF0uY2xhc3NMaXN0LmFkZChcInVuYWJsZVwiKVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gdG9nZ2xlQ292ZXJCdXR0b24oKXtcclxuXHJcbiAgICBlbGVtZW50cy5idG5Db3ZlckFycltHQU1FLmdldFBhc3NpdmVQbGF5ZXJSZWYoKV0uZGlzYWJsZWQgPSB0cnVlXHJcbiAgICBlbGVtZW50cy5idG5Db3ZlckFycltHQU1FLmdldEFjdGl2ZVBsYXllclJlZigpXS5kaXNhYmxlZCA9IGZhbHNlXHJcblxyXG4gICAgaWYoR0FNRS5nZXRNb2RlKCkgPT09IFwiQ3B1TW9kZVwiKSBlbGVtZW50cy5idG5Db3ZlckFyclsxXS5kaXNhYmxlZCA9IHRydWVcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZUNvdmVyQm9hcmQoZSl7XHJcblxyXG4gICAgbGV0IHdoaWNoQm9hcmQgPSBlLmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudC5kYXRhc2V0LmJvYXJkXHJcbiAgICBsZXQgYm9hcmQgPSBlbGVtZW50cy5ib2FyZHNbd2hpY2hCb2FyZF1cclxuXHJcbiAgICBpZihib2FyZC5oYXNBdHRyaWJ1dGUoXCJpZFwiKSkgYm9hcmQucmVtb3ZlQXR0cmlidXRlKFwiaWRcIilcclxuICAgIGVsc2UgYm9hcmQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ1bmNvdmVyXCIpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNwdVJlYWR5KCkge1xyXG5cclxuICAgIGlmKEdBTUUuZ2V0TW9kZSgpICE9PSBcIkNwdU1vZGVcIikgcmV0dXJuXHJcblxyXG4gICAgZWxlbWVudHMuYnRuUmVhZHlBcnJbMV0uZGF0YXNldC5yZWFkeSA9IHRydWVcclxuICAgIGVsZW1lbnRzLmJ0blJlYWR5QXJyWzFdLmRpc2FibGVkID0gdHJ1ZVxyXG4gICAgZWxlbWVudHMuYnRuUmFuZG9tQXJyWzFdLmRpc2FibGVkID0gdHJ1ZVxyXG4gICAgZWxlbWVudHMuYnRuQ292ZXJBcnJbMV0uZGlzYWJsZWQgPSB0cnVlXHJcbiAgICBHQU1FLnBsYWNlUGxheWVyU2hpcHMoMSlcclxufVxyXG5cclxuZnVuY3Rpb24gZ2FtZU92ZXJEaWFsb2coKXtcclxuXHJcbiAgICBlbGVtZW50cy5kaWFsb2dHYW1lT3Zlci5yZW1vdmVBdHRyaWJ1dGUoXCJpZFwiKTtcclxuICAgIGVsZW1lbnRzLndyYXBwZXIuY2xhc3NMaXN0LmFkZChcImJsdXJcIik7XHJcblxyXG4gICAgZGlzcGxheVdpbm5lcigpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlcGxheSgpe1xyXG5cclxuICAgIEdBTUUucmVwbGF5KClcclxuICAgIHJlc2V0RE9NKClcclxufVxyXG5cclxuZnVuY3Rpb24gcmVzZXQoKXtcclxuXHJcbiAgICBHQU1FLnJlc2V0KClcclxuICAgIHJlc2V0RE9NKClcclxuICAgIG9wZW5TdGFydERpYWxvZygpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc2V0RE9NICgpIHtcclxuXHJcbiAgICBhcHBseUdyaWQoKTtcclxuICAgIGVsZW1lbnRzLnRpdGxlLnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgIGVsZW1lbnRzLmJ0blJhbmRvbUFyci5mb3JFYWNoKGJ0biA9PiBidG4uZGlzYWJsZWQgPSBmYWxzZSk7XHJcbiAgICBlbGVtZW50cy5idG5SZWFkeUFyci5mb3JFYWNoKGJ0biA9PiBidG4uZGlzYWJsZWQgPSBmYWxzZSk7XHJcbiAgICBlbGVtZW50cy5idG5Db3ZlckFyci5mb3JFYWNoKGJ0biA9PiBidG4uZGlzYWJsZWQgPSBmYWxzZSk7XHJcbiAgICBlbGVtZW50cy5kaWFsb2dHYW1lT3Zlci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNsb3NlXCIpO1xyXG4gICAgZWxlbWVudHMud3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKFwiYmx1clwiKTtcclxuICAgIGNwdVJlYWR5KCk7XHJcbn1cclxuXHJcblxyXG4iLCJpbXBvcnQge2VsZW1lbnRzLCBwbGF5ZXJzUmVhZHl9IGZyb20gXCIuL2RvbVwiXHJcbmltcG9ydCB7IFBsYXllciwgQ1BVIH0gZnJvbSBcIi4vcGxheWVyXCJcclxuLy9pbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vc2hpcFwiXHJcbmltcG9ydCB7c3RvcmVEYXRhLCByZXRyaWV2ZURhdGEsIHVwZGF0ZURhdGF9IGZyb20gXCIuL3N0b3JhZ2VcIlxyXG5pbXBvcnQgeyBkaXNwbGF5VHVybiB9IGZyb20gXCIuL2Rpc3BsYXlcIlxyXG5pbXBvcnQgeyBHQU1FIH0gZnJvbSBcIi5cIlxyXG5cclxuXHJcbmV4cG9ydCB7IEdhbWUgfVxyXG5cclxuXHJcbmNsYXNzIEdhbWUge1xyXG5cclxuICAgICNwbGF5ZXJUdXJuO1xyXG4gICAgI3BsYXllcnMgPSBbXTtcclxuICAgICNtb2RlO1xyXG4gICAgI2RpZmZpY3VsdHk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy90aGlzLiNwbGF5ZXJUdXJuOyBcclxuICAgICAgICAvL3RoaXMucGxheWVycyA9IFtdO1xyXG4gICAgICAgLyogIHRoaXMubW9kZTtcclxuICAgICAgICB0aGlzLmRpZmZpY3VsdHk7ICovXHJcbiAgICB9XHJcblxyXG4gICAgc2V0R2FtZURhdGEobW9kZSwgcGxheWVyc05hbWVzLCBkaWZmaWN1bHR5KSB7XHJcblxyXG4gICAgICAgIHRoaXMuI21vZGUgPSBtb2RlXHJcbiAgICAgICAgdGhpcy4jZGlmZmljdWx0eSA9IGRpZmZpY3VsdHlcclxuXHJcbiAgICAgICAgaWYobW9kZSA9PT0gXCJQbGF5ZXJNb2RlXCIpIHtcclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgbmFtZSBvZiBwbGF5ZXJzTmFtZXMpIHRoaXMuI2NyZWF0ZVBsYXllcihuYW1lKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLiNjcmVhdGVQbGF5ZXIocGxheWVyc05hbWVzWzBdKVxyXG4gICAgICAgIHRoaXMuI2NyZWF0ZUNQVShwbGF5ZXJzTmFtZXNbMV0pXHJcbiAgICB9XHJcbiAgXHJcbiAgICAjY3JlYXRlUGxheWVyKG5hbWUpIHtcclxuXHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy4jcGxheWVycy5sZW5ndGhcclxuICAgICAgICBsZXQgbnVtID0gaW5kZXggPT09IDAgPyBcIk9uZVwiIDogXCJUd29cIlxyXG5cclxuICAgICAgICBsZXQgcGxheWVyID0gbmV3IFBsYXllcihuYW1lIHx8IGBQbGF5ZXIgJHtudW19YCwgaW5kZXgpXHJcblxyXG4gICAgICAgIHRoaXMuI3BsYXllcnMucHVzaChwbGF5ZXIpXHJcbiAgICB9XHJcblxyXG4gICAgI2NyZWF0ZUNQVSgpIHtcclxuXHJcbiAgICAgICAgbGV0IHBsYXllciA9IG5ldyBDUFUoXCJDUFVcIiwgMSwgdGhpcy4jZGlmZmljdWx0eSlcclxuXHJcbiAgICAgICAgdGhpcy4jcGxheWVycy5wdXNoKHBsYXllcilcclxuICAgIH1cclxuXHJcbiAgICBzdGFydEdhbWUoKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgdGhpcy4jcGxheWVyVHVybiA9IC8qIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpICovIDBcclxuICAgIH1cclxuXHJcbiAgICB0dXJuKHF1YWRyYW50KSB7XHJcbiBcclxuICAgICAgICBsZXQgZHVwbGljYXRlZE1vdmUgPSB0aGlzLiNwbGF5ZXJzW3RoaXMuI3BsYXllclR1cm5dLmNoZWNrTW92ZXMocXVhZHJhbnQpXHJcbiAgICAgXHJcbiAgICAgICAgaWYoZHVwbGljYXRlZE1vdmUpIHJldHVyblxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuI3NlbmRBdHRhY2socXVhZHJhbnQpXHJcblxyXG4gICAgICAgIHRoaXMuI3BsYXllclR1cm4gPSB0aGlzLmdldFBhc3NpdmVQbGF5ZXJSZWYoKVxyXG4gICAgfVxyXG5cclxuICAgIENQVXR1cm4oKXtcclxuXHJcbiAgICAgICAgaWYodGhpcy4jcGxheWVyVHVybiA9PT0gMCkgcmV0dXJuXHJcblxyXG4gICAgICAgIGxldCBzcXVhcmUgPSB0aGlzLiNwbGF5ZXJzWzFdLmF0dGFjaygpXHJcbiAgICAgICAgdGhpcy4jc2VuZEF0dGFjayhzcXVhcmUpXHJcblxyXG4gICAgICAgIHRoaXMuI3BsYXllclR1cm4gPSB0aGlzLmdldFBhc3NpdmVQbGF5ZXJSZWYoKVxyXG4gICAgfVxyXG5cclxuICAgIHJlcGxheSgpe1xyXG5cclxuICAgICAgICB0aGlzLiNwbGF5ZXJzLmZvckVhY2gocGxheWVyID0+IHBsYXllci5yZXBsYXkoKSlcclxuICAgICAgICB0aGlzLiNwbGF5ZXJUdXJuID0gXCJcIlxyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0KCl7XHJcblxyXG4gICAgICAgIHRoaXMuI2RpZmZpY3VsdHkgPSBcIlwiXHJcbiAgICAgICAgdGhpcy4jbW9kZSA9IFwiXCJcclxuICAgICAgICB0aGlzLiNwbGF5ZXJUdXJuID0gXCJcIlxyXG4gICAgICAgIHRoaXMuI3BsYXllcnMgPSBbXVxyXG4gICAgfVxyXG5cclxuICAgICNzZW5kQXR0YWNrKHF1YWRyYW50KSB7XHJcblxyXG4gICAgICAgIGxldCBwbGF5ZXIgPSB0aGlzLiNwbGF5ZXJzW3RoaXMuZ2V0UGFzc2l2ZVBsYXllclJlZigpXVxyXG4gICAgICAgIHBsYXllci5yZWNlaXZlQXR0YWNrKHF1YWRyYW50KVxyXG4gICAgfVxyXG5cclxuICAgIGlzR2FtZU92ZXIoKSB7XHJcbiAgICBcclxuICAgICAgICBmb3IobGV0IHBsYXllciBvZiB0aGlzLiNwbGF5ZXJzKSB7XHJcblxyXG4gICAgICAgICAgICBpZihwbGF5ZXIuZ2V0U3Vua1NoaXBzKCkubGVuZ3RoID09PSAvKiA1ICovMikge1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TW9kZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4jbW9kZVxyXG4gICAgfVxyXG5cclxuICAgIGdldFBhc3NpdmVQbGF5ZXJSZWYoKSB7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLiNwbGF5ZXJUdXJuID09PSAwID8gMSA6IDBcclxuICAgIH1cclxuXHJcbiAgICBnZXRBY3RpdmVQbGF5ZXJSZWYoKSB7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLiNwbGF5ZXJUdXJuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UGxheWVyTmFtZSh3aGljaFBsYXllciA9IHRoaXMuI3BsYXllclR1cm4pe1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy4jcGxheWVyc1t3aGljaFBsYXllcl0udXBwZXJDYXNlTmFtZSgpXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UGxheWVySGl0TGlzdCh3aGljaFBsYXllciA9IHRoaXMuI3BsYXllclR1cm4pe1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy4jcGxheWVyc1t3aGljaFBsYXllcl0uZ2V0SGl0TGlzdCgpXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UGxheWVyTWlzc0xpc3Qod2hpY2hQbGF5ZXIgPSB0aGlzLiNwbGF5ZXJUdXJuKXtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuI3BsYXllcnNbd2hpY2hQbGF5ZXJdLmdldE1pc3NMaXN0KClcclxuICAgIH1cclxuXHJcbiAgICBnZXRQbGF5ZXJTaGlwcyh3aGljaFBsYXllciA9IHRoaXMuI3BsYXllclR1cm4pe1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy4jcGxheWVyc1t3aGljaFBsYXllcl0uZ2V0U2hpcHNDb29yZHMoKVxyXG4gICAgfVxyXG5cclxuICAgIGdldFBsYXllclN1bmtTaGlwcyh3aGljaFBsYXllciA9IHRoaXMuI3BsYXllclR1cm4pIHtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gdGhpcy4jcGxheWVyc1t3aGljaFBsYXllcl0uZ2V0U3Vua1NoaXBzKClcclxuICAgIH1cclxuXHJcbiAgICBwbGFjZVBsYXllclNoaXBzKHdoaWNoUGxheWVyID0gdGhpcy4jcGxheWVyVHVybil7XHJcblxyXG4gICAgICAgIHRoaXMuI3BsYXllcnNbd2hpY2hQbGF5ZXJdLnBsYWNlU2hpcHMoKVxyXG4gICAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQge1NoaXB9IGZyb20gXCIuL3NoaXBcIlxyXG5cclxuZXhwb3J0IHtHYW1lQm9hcmR9XHJcblxyXG5jbGFzcyBHYW1lQm9hcmQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHJvd1F1YW50aXR5ID0gMTAsIGNvbHVtblF1YW50aXR5ID0gMTApe1xyXG5cclxuICAgICAgICB0aGlzLnJvd1F1YW50aXR5ID0gcm93UXVhbnRpdHksXHJcbiAgICAgICAgdGhpcy5jb2x1bW5RdWFudGl0eSA9IGNvbHVtblF1YW50aXR5LFxyXG4gICAgICAgIHRoaXMuc2hpcFR5cGVzID0gWy8qIHt0eXBlOiBcImNhcnJpZXJcIiwgbGVuZ3RoOiA1fSwge3R5cGU6IFwiYmF0dGxlc2hpcFwiLCBsZW5ndGg6IDR9LCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7dHlwZTogXCJkZXN0cm95ZXJcIiwgbGVuZ3RoOiAzfSwqLyB7dHlwZTogXCJzdWJtYXJpbmVcIiwgbGVuZ3RoOiAzfSwgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt0eXBlOiBcInBhdHJvbCBib2F0XCIsIGxlbmd0aDogMn1dLFxyXG4gICAgICAgIHRoaXMuc2hpcHMgPSBbXSxcclxuICAgICAgICB0aGlzLnN1bmtTaGlwcyA9IFtdLFxyXG4gICAgICAgIHRoaXMud2F0ZXJIaXRMaXN0ID0gW10sXHJcbiAgICAgICAgdGhpcy5zaGlwSGl0TGlzdCA9IFtdIFxyXG4gICAgfVxyXG5cclxuICAgICNjcmVhdGVTaGlwcygpe1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIGxldCBzaGlwc1F1ZXVlID0gW11cclxuXHJcbiAgICAgICAgZm9yKGxldCBzaGlwIG9mIHRoaXMuc2hpcFR5cGVzKXtcclxuICBcclxuICAgICAgICAgICAgc2hpcHNRdWV1ZS5wdXNoKG5ldyBTaGlwKHNoaXAubGVuZ3RoLCBzaGlwLnR5cGUpKSAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBzaGlwc1F1ZXVlICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHBsYWNlU2hpcHMoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuc2hpcHMgPSBbXVxyXG4gICAgICAgIHRoaXMuc2hpcHNDb29yZHMgPSBbXVxyXG5cclxuICAgICAgICBsZXQgc2hpcHNRdWV1ZSA9IHRoaXMuI2NyZWF0ZVNoaXBzKClcclxuICAgICAgICBsZXQgYWRqYWNlbmN5TGlzdCA9IFtbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXV1cclxuXHJcbiAgICAgICAgd2hpbGUoc2hpcHNRdWV1ZS5sZW5ndGggPiAwKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgbGV0IHJhbmRvbVJvdyA9ICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMClcclxuICAgICAgICAgICAgbGV0IHJhbmRvbUNvbCA9ICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMClcclxuICAgICAgICAgICAgbGV0IHZlcnRpY2FsID0gICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKVxyXG4gICAgXHJcbiAgICAgICAgICAgIGxldCByYW5kb21Sb3dDb3B5ID0gcmFuZG9tUm93XHJcbiAgICAgICAgICAgIGxldCByYW5kb21Db2xDb3B5ID0gcmFuZG9tQ29sIFxyXG4gICAgXHJcbiAgICAgICAgICAgIGxldCBzaGlwID0gc2hpcHNRdWV1ZS5zaGlmdCgpXHJcbiAgICAgICAgICAgIHRoaXMuc2hpcHMucHVzaChzaGlwKVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKyl7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGFkamFjZW5jeUxpc3RbcmFuZG9tUm93Q29weV0uaW5jbHVkZXMocmFuZG9tQ29sQ29weSkpe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcC5jb29yZGluYXRlcyA9IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBzUXVldWUudW5zaGlmdChzaGlwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNoaXBzLnBvcCgpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2hpcC5jb29yZGluYXRlcy5wdXNoKFtyYW5kb21Sb3dDb3B5LCByYW5kb21Db2xDb3B5XSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYodmVydGljYWwpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJhbmRvbVJvd0NvcHkgPCAodGhpcy5yb3dRdWFudGl0eSAtIDEpKSB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhbmRvbVJvd0NvcHkgKytcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByYW5kb21Sb3dDb3B5ID0gcmFuZG9tUm93IC0gKHNoaXAubGVuZ3RoIC0gKGkgKyAxKSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJhbmRvbUNvbENvcHkgPCAodGhpcy5jb2x1bW5RdWFudGl0eSAtIDEpKSB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhbmRvbUNvbENvcHkgKytcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByYW5kb21Db2xDb3B5ID0gcmFuZG9tQ29sIC0gKHNoaXAubGVuZ3RoIC0gKGkgKyAxKSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoc2hpcC5jb29yZGluYXRlcy5sZW5ndGggPiAwKSB0aGlzLiNlbmNsb3NlU2hpcChzaGlwLCBhZGphY2VuY3lMaXN0KVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgICNlbmNsb3NlU2hpcChzaGlwLCBhZGphY2VuY3lMaXN0KXtcclxuXHJcbiAgICAgICAgZm9yKGxldCBjb29yZGluYXRlIG9mIHNoaXAuY29vcmRpbmF0ZXMpIHtcclxuXHJcbiAgICAgICAgICAgIGxldCByb3cgPSBjb29yZGluYXRlWzBdXHJcbiAgICAgICAgICAgIGxldCBjb2wgPSBjb29yZGluYXRlWzFdXHJcblxyXG4gICAgICAgICAgICBsZXQgYXJlYSA9IFtbcm93IC0gMSwgY29sXSwgW3JvdyAtIDEsIGNvbCAtIDFdLCBbcm93IC0gMSwgY29sICsgMV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtyb3cgKyAxLCBjb2xdLCBbcm93ICsgMSwgY29sIC0gMV0sIFtyb3cgKyAxLCBjb2wgKyAxXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW3JvdywgY29sXSwgW3JvdywgY29sIC0gMV0sIFtyb3csIGNvbCArIDFdXVxyXG5cclxuICAgICAgICAgICAgZm9yKGxldCBhcnIgb2YgYXJlYSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKGFyclswXSA8IDAgfHwgYXJyWzFdIDwgMCB8fFxyXG4gICAgICAgICAgICAgICAgICAgYXJyWzBdID4gKHRoaXMucm93UXVhbnRpdHkgLSAxKSB8fCBhcnJbMV0gPiAodGhpcy5jb2x1bW5RdWFudGl0eSAtIDEpKSBjb250aW51ZVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKCFhZGphY2VuY3lMaXN0W2FyclswXV0uaW5jbHVkZXMoYXJyWzFdKSkgYWRqYWNlbmN5TGlzdFthcnJbMF1dLnB1c2goYXJyWzFdKSBcclxuICAgICAgICAgICAgfSAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXIoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuc2hpcEhpdExpc3QgPSAgW1tdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdXVxyXG4gICAgICAgIHRoaXMud2F0ZXJIaXRMaXN0ID0gW1tdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdXVxyXG4gICAgICAgIHRoaXMuc2hpcHMgPSBbXVxyXG4gICAgICAgIHRoaXMuc3Vua1NoaXBzID0gW11cclxuICAgICAgICB0aGlzLnNoaXBzQ29vcmRzID0gW11cclxuICAgIH1cclxuXHJcbiAgICByZWNlaXZlQXR0YWNrKHNxdWFyZSl7XHJcbiAgICBcclxuICAgICAgICBsZXQgaGl0T25UYXJnZXQgPSBmYWxzZVxyXG5cclxuICAgICAgICBmb3IobGV0IHNoaXAgb2YgdGhpcy5zaGlwcykge1xyXG5cclxuICAgICAgICAgICAgZm9yKGxldCBjb29yZGluYXRlIG9mIHNoaXAuY29vcmRpbmF0ZXMpe1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKGNvb3JkaW5hdGVbMF0gPT09IHNxdWFyZVswXSAmJiBjb29yZGluYXRlWzFdID09PSBzcXVhcmVbMV0pIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2hpcC5oaXQoKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHNoaXAuaXNTdW5rKSB0aGlzLnN1bmtTaGlwcy5wdXNoKHNoaXApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hpcEhpdExpc3QucHVzaChzcXVhcmUpICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBoaXRPblRhcmdldCA9IHRydWVcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoaGl0T25UYXJnZXQpIHJldHVyblxyXG4gICAgICAgIH0gXHJcblxyXG4gICAgICAgIHRoaXMud2F0ZXJIaXRMaXN0LnB1c2goc3F1YXJlKVxyXG4gICAgfVxyXG5cclxuICAgIC8qIGFsbFNoaXBzU3VuayhzaGlwKSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU0hJUCBTVU5LRURcIiwgc2hpcClcclxuXHJcbiAgICAgICAgdGhpcy5zaGlwc1N1bmsucHVzaChzaGlwKVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNISVAgU1VOS0VEIEFSUkFZXCIsIHRoaXMuc2hpcHNTdW5rKVxyXG5cclxuICAgICAgICBpZighdGhpcy5zaGlwc1N1bmsubGVuZ3RoID09PSA1KSByZXR1cm4gbnVsbFxyXG5cclxuICAgICAgICAvL0FDQSBBTEdPIEhBUklBIFBBUkEgQVZJU0FSIFFVRSBFU1RBTiBUT0RPUyBVTkRJRE9TXHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgIH0gKi9cclxuICAgIFxyXG59XHJcblxyXG4iLCJpbXBvcnQgXCIuLi9zcmMvc3R5bGUuY3NzXCJcclxuaW1wb3J0IHtQbGF5ZXJ9IGZyb20gXCIuL3BsYXllclwiXHJcbmltcG9ydCB7R2FtZUJvYXJkfSBmcm9tIFwiLi9nYW1lYm9hcmRcIlxyXG5pbXBvcnQge1NoaXB9IGZyb20gXCIuL3NoaXBcIlxyXG5pbXBvcnQge2VsZW1lbnRzfSBmcm9tIFwiLi9kb21cIlxyXG5pbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi4vZ2FtZVwiXHJcblxyXG5leHBvcnQgeyBHQU1FIH1cclxuXHJcbmxldCBHQU1FID0gbmV3IEdhbWUoKVxyXG5lbGVtZW50cy5pbml0KClcclxuXHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7R2FtZUJvYXJkfSBmcm9tIFwiLi9nYW1lYm9hcmRcIlxyXG5cclxuZXhwb3J0IHtQbGF5ZXIsIENQVX1cclxuXHJcbmNsYXNzIFBsYXllciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IobmFtZSwgSUQpe1xyXG5cclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lXHJcbiAgICAgICAgdGhpcy5JRCA9IElEXHJcbiAgICAgICAgdGhpcy5nYW1lQm9hcmQgPSBuZXcgR2FtZUJvYXJkKClcclxuICAgICAgICB0aGlzLm1vdmVzID0gW11cclxuICAgIH1cclxuXHJcbiAgICB1cHBlckNhc2VOYW1lKCkge1xyXG5cclxuICAgICAgIHJldHVybiB0aGlzLm5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0aGlzLm5hbWUuc2xpY2UoMSlcclxuICAgIH1cclxuXHJcbiAgICBjaGVja01vdmVzKHF1YWRyYW50KSB7XHJcblxyXG4gICAgICAgIGZvcihsZXQgbW92ZSBvZiB0aGlzLm1vdmVzKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgW3JvdywgY29sXSA9IG1vdmVcclxuXHJcbiAgICAgICAgICAgIGlmKHJvdyA9PT0gcXVhZHJhbnRbMF0gJiYgY29sID09PSBxdWFkcmFudFsxXSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm1vdmVzLnB1c2gocXVhZHJhbnQpXHJcbiAgICB9XHJcblxyXG4gICAgcGxhY2VTaGlwcygpe1xyXG5cclxuICAgICAgICB0aGlzLmdhbWVCb2FyZC5wbGFjZVNoaXBzKClcclxuICAgIH1cclxuXHJcbiAgICByZWNlaXZlQXR0YWNrKHNxdWFyZSkge1xyXG5cclxuICAgICAgICB0aGlzLmdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKHNxdWFyZSlcclxuICAgIH1cclxuXHJcbiAgICBnZXRIaXRMaXN0KCl7XHJcblxyXG4gICAgICAgcmV0dXJuIHRoaXMuZ2FtZUJvYXJkLnNoaXBIaXRMaXN0XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TWlzc0xpc3QoKXtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2FtZUJvYXJkLndhdGVySGl0TGlzdFxyXG4gICAgfVxyXG5cclxuICAgIGdldFNoaXBzQ29vcmRzKCl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHNoaXBzID0gdGhpcy5nYW1lQm9hcmQuc2hpcHNcclxuXHJcbiAgICAgICAgbGV0IHNoaXBzQ29vcmRzID0gW11cclxuICAgICBcclxuICAgICAgICBmb3IobGV0IHNoaXAgb2Ygc2hpcHMpIHNoaXBzQ29vcmRzLnB1c2goc2hpcC5jb29yZGluYXRlcylcclxuXHJcbiAgICAgICAgcmV0dXJuIHNoaXBzQ29vcmRzXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U3Vua1NoaXBzKCl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHNoaXBzID0gdGhpcy5nYW1lQm9hcmQuc3Vua1NoaXBzXHJcblxyXG4gICAgICAgIGlmKHNoaXBzLmxlbmd0aCA8IDEpIHJldHVybiBbXVxyXG4gICAgIFxyXG4gICAgICAgIGxldCBjb29yZHMgPSBbXVxyXG4gICAgIFxyXG4gICAgICAgIGZvcihsZXQgc2hpcCBvZiBzaGlwcykgY29vcmRzLnB1c2goc2hpcC5jb29yZGluYXRlcylcclxuICAgICBcclxuICAgICAgICByZXR1cm4gY29vcmRzXHJcbiAgICB9XHJcblxyXG4gICAgcmVwbGF5KCl7XHJcblxyXG4gICAgICAgIHRoaXMubW92ZXMgPSBbXVxyXG4gICAgICAgIHRoaXMuZ2FtZUJvYXJkID0gbmV3IEdhbWVCb2FyZCgpXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuY2xhc3MgQ1BVIGV4dGVuZHMgUGxheWVyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBJRCwgZGlmZmljdWx0eSl7XHJcbiAgICAgICAgc3VwZXIobmFtZSwgSUQpXHJcbiAgICAgICAgdGhpcy5kaWZmaWN1bHR5ID0gZGlmZmljdWx0eVxyXG4gICAgfVxyXG5cclxuICAgICNyYW5kb21TcXVhcmUoKXtcclxuXHJcbiAgICAgICAgbGV0IHJhbmRvbVJvdyA9ICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMClcclxuICAgICAgICBsZXQgcmFuZG9tQ29sID0gIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKVxyXG5cclxuICAgICAgICBsZXQgc3F1YXJlID0gW3JhbmRvbVJvdywgcmFuZG9tQ29sXVxyXG5cclxuICAgICAgICByZXR1cm4gc3F1YXJlXHJcbiAgICB9XHJcblxyXG4gICAgYXR0YWNrKCl7XHJcblxyXG4gICAgICAgIGxldCBzcXVhcmUgPSB0aGlzLiNyYW5kb21TcXVhcmUoKVxyXG5cclxuICAgICAgICAgICAgd2hpbGUodGhpcy5jaGVja01vdmVzKHNxdWFyZSkpIHNxdWFyZSA9IHRoaXMuI3JhbmRvbVNxdWFyZSgpXHJcblxyXG4gICAgICAgIHJldHVybiBzcXVhcmVcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbn1cclxuXHJcbiIsImV4cG9ydCB7U2hpcH1cclxuXHJcbmNsYXNzIFNoaXAge1xyXG5cclxuICAgICNoaXRDb3VudGVyID0gMFxyXG4gICAgI2lzU3VuayA9IGZhbHNlXHJcblxyXG4gICAgY29uc3RydWN0b3IobGVuZ3RoID0gbnVsbCwgdHlwZSA9IG51bGwpe1xyXG4gICAgICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoXHJcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZVxyXG4gICAgICAgIHRoaXMuY29vcmRpbmF0ZXMgPSBbXVxyXG4gICAgfVxyXG5cclxuICAgIGhpdCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy4jaGl0Q291bnRlciArK1xyXG4gICAgICAgIHRoaXMuI3N1bmtDaGVjaygpXHJcbiAgICB9XHJcblxyXG4gICAgI3N1bmtDaGVjaygpe1xyXG4gXHJcbiAgICAgICAgaWYodGhpcy4jaGl0Q291bnRlciA9PT0gdGhpcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy4jaXNTdW5rID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXQgaXNTdW5rKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuI2lzU3Vua1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtQbGF5ZXJ9IGZyb20gXCIuL3BsYXllclwiXHJcbmltcG9ydCB7U2hpcH0gZnJvbSBcIi4vc2hpcFwiXHJcblxyXG5leHBvcnQge3N0b3JlRGF0YSwgcmV0cmlldmVEYXRhLCB1cGRhdGVEYXRhfVxyXG5cclxuXHJcbmZ1bmN0aW9uIHN0b3JlRGF0YShtb2RlLCBwbGF5ZXJPbmUsIHBsYXllclR3bykge1xyXG5cclxuICAgIGxldCBzdGF0ZSA9IHtcclxuICAgICAgICBtb2RlOiBtb2RlLFxyXG4gICAgICAgIHBsYXllcnM6IFtwbGF5ZXJPbmUsIHBsYXllclR3b11cclxuICAgIH1cclxuXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInN0YXRlXCIsIEpTT04uc3RyaW5naWZ5KHN0YXRlKSkgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZURhdGEoc3RhdGUpe1xyXG5cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic3RhdGVcIiwgSlNPTi5zdHJpbmdpZnkoc3RhdGUpKVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gcmV0cmlldmVEYXRhKCkge1xyXG5cclxuICAgbGV0IHN0YXRlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInN0YXRlXCIpKVxyXG5cclxuICAgbGV0IHBsYXllck9uZSAgPSBuZXcgUGxheWVyKClcclxuICAgbGV0IHBsYXllclR3byAgPSBuZXcgUGxheWVyKClcclxuICAgbGV0IHBsYXllcnMgPSBbcGxheWVyT25lLCBwbGF5ZXJUd29dXHJcblxyXG5cclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwbGF5ZXJzLmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgIHBsYXllcnNbaV0uc2V0UHJvcGVydGllcyhzdGF0ZS5wbGF5ZXJzW2ldKVxyXG5cclxuICAgICAgICBwbGF5ZXJzW2ldLmdhbWVCb2FyZC5zZXRQcm9wZXJ0aWVzKHN0YXRlLnBsYXllcnNbaV0uZ2FtZUJvYXJkKVxyXG5cclxuICAgICAgICBsZXQgcGxheWVyU2hpcHMgPSBwbGF5ZXJzW2ldLmdhbWVCb2FyZC5zaGlwc1xyXG5cclxuXHJcbiAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IHBsYXllclNoaXBzLmxlbmd0aDsgaisrKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgc2hpcEluc3RhbmNlID0gbmV3IFNoaXAocGxheWVyU2hpcHNbal0pXHJcblxyXG4gICAgICAgICAgICBzaGlwSW5zdGFuY2Uuc2V0UHJvcGVydGllcyhzdGF0ZS5wbGF5ZXJzW2ldLmdhbWVCb2FyZC5zaGlwc1tqXSlcclxuXHJcbiAgICAgICAgICAgIC8vIHJlZW1wbGF6byBsYSBjb3BpYSBkZSBkYXRvcyBkZWwgc2hpcCBxdWUgZXN0YWJhIGVuIEpTT04gcG9yIFxyXG4gICAgICAgICAgICAvLyBlbCBzaGlwIGluc3RhbnNpYWRvIHkgYWN0dWFsaXphZG8uXHJcbiAgICAgICAgICAgIHBsYXllcnNbaV0uZ2FtZUJvYXJkLnNoaXBzW2pdID0gc2hpcEluc3RhbmNlXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBzdGF0ZS5wbGF5ZXJzID0gcGxheWVyc1xyXG5cclxuICAgcmV0dXJuIHN0YXRlXHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==