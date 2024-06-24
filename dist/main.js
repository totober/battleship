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
    /* text-align: center; */
    font-size: 1.6rem;
    display: flex;
    justify-content: center;
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


`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n:root {\r\n    box-sizing: border-box;\r\n    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n}\r\n\r\n/* /// CLASSES /// */\r\n\r\n.blur {\r\n\r\n    filter: blur(20px);\r\n    pointer-events: none;\r\n}\r\n\r\n.unable {\r\n    pointer-events: none;\r\n}\r\n\r\n#close {\r\n\r\n    animation: fade-out 0.7s ease-out;\r\n    display: none;\r\n}\r\n\r\n.space {\r\n\r\n    padding: var();\r\n    margin: var();\r\n\r\n}\r\n\r\n.display-flex-col{\r\n\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\nbody{\r\n    background-color: black;\r\n    display: grid;\r\n    /* grid-template-rows: 10% 1fr 5%; */\r\n    grid-template-rows: auto 1fr auto;\r\n\r\n}\r\n\r\n/* /// ARTICLES /// */\r\n\r\nh1 {\r\n    font-size: 2.5rem;\r\n    letter-spacing: 5px;\r\n    cursor: default;\r\n}\r\n\r\narticle {\r\n    font-weight: 600;\r\n    background-color: #fff;\r\n    border-radius: 5px;\r\n    /* Esto es lo necesario para que el pop-up quede en el medio */\r\n    position: fixed;\r\n    left: 50%;\r\n    top: 50%;\r\n    transform: translate(-50%, -50%);\r\n    /* hasta aca */\r\n    animation: fade-in 0.7s ease-out;\r\n}\r\n\r\narticle.start,\r\narticle.child {\r\n    padding: 30px;\r\n}\r\n\r\narticle.start p {\r\n\r\n    font-size: 1.6rem;\r\n}\r\n\r\n\r\n@keyframes fade-in {\r\n    0% {\r\n      opacity: 0;\r\n      transform: translate(-50%, -50%) scaleY(0);\r\n      display: none;\r\n    }\r\n  \r\n    100% {\r\n      opacity: 1;\r\n      transform: translate(-50%, -50%) scaleY(1);\r\n      display: block;\r\n    }\r\n  }\r\n  \r\n  @keyframes fade-out {\r\n    0% {\r\n      opacity: 1;\r\n      transform: translate(-50%, -50%) scaleY(1);\r\n      display: block;\r\n    }\r\n  \r\n    100% {\r\n      opacity: 0;\r\n      transform: translate(-50%, -50%) scaleY(0);\r\n      display: none;\r\n    }\r\n}\r\n\r\narticle section,\r\narticle div,\r\narticle button {\r\n\r\n    cursor: pointer;\r\n}\r\n\r\narticle section {\r\n\r\n    text-align: center;\r\n    padding: 30px;\r\n    margin-block: 0;\r\n}\r\n\r\narticle button {\r\n\r\n    margin: auto;\r\n}\r\n\r\narticle section p {\r\n\r\n    transition: ease-in-out 0.4s;\r\n}\r\n\r\narticle section:hover p {\r\n\r\n    transform: scale(1.15);\r\n}\r\n\r\narticle section p,\r\narticle label,\r\narticle legend,\r\narticle button {\r\n\r\n    font-size: 1.2rem;\r\n}\r\n\r\narticle.mode-selection > :first-child {\r\n    border-bottom: 2px solid black;\r\n}\r\n\r\n\r\n/* CHILDREN ARTICLES */\r\n\r\n/* article.child{\r\n\r\n    padding: 30px;\r\n\r\n} */\r\n\r\narticle.child div {\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n    border-bottom: 1px solid black;\r\n    padding: 15px;\r\n}\r\n\r\narticle.CpuMode.child div {\r\n    border-bottom: none;\r\n}\r\n\r\narticle.child fieldset div {\r\n\r\n    flex-direction: row;\r\n}\r\n\r\narticle.child div.buttons {\r\n\r\n    flex-direction: row;\r\n    border-bottom: none;\r\n}\r\n\r\narticle.game-over output,\r\narticle.game-over h2 {\r\n    color: black;\r\n    /* text-align: center; */\r\n    font-size: 1.6rem;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\narticle.game-over section.replay {\r\n    border-bottom: 1px solid black;\r\n}\r\n\r\n\r\ninput {\r\n    font-size: 16.5px;\r\n    font-weight: 500;\r\n    padding: 5px 15px;\r\n    border-radius: 50px;\r\n    outline: none;\r\n    border: 1px solid black;\r\n}\r\n\r\n\r\nbutton {\r\n\r\n    background-color: #fff;\r\n    font-size: 15px;\r\n    font-weight: 500;\r\n    padding: 5px 10px;\r\n    border-radius: 5px;\r\n    border: 1px solid black;\r\n    box-shadow: 2px 2px 3px rgb(44, 44, 44);\r\n    transition: ease-in-out 0.3s;\r\n}\r\n\r\nbutton:active {\r\n\r\n    transform: scale(0.95);\r\n    box-shadow: 1px 1px 3px rgb(44, 44, 44);\r\n}\r\n\r\n\r\n/* /// HEADER /// */\r\n\r\nheader {\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n}\r\n\r\nheader h1 {\r\n    color: beige;\r\n    margin-bottom: 30px;\r\n}\r\n\r\nheader h3 {\r\n    color: beige;\r\n}\r\n\r\n\r\n\r\n/* /// MAIN /// */\r\n\r\nmain {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n}\r\n\r\nsection {\r\n    display: grid;\r\n    grid-template-rows: auto 1fr 20%;\r\n    margin: 15px;\r\n    padding: 15px;\r\n}\r\n\r\nsection > button {\r\n    margin-inline-end: auto;\r\n    margin-inline-start: 15px;\r\n}\r\n\r\n.board {\r\n    display: grid;\r\n    grid-template-rows: repeat(10, 1fr);\r\n    grid-template-columns:  repeat(10, 1fr);\r\n\r\n    margin: 15px;\r\n}\r\n\r\n.board div {\r\n    border: 1px solid white;\r\n    min-width: 30px;\r\n    min-height: 30px;\r\n}\r\n\r\n.board#uncover div.ship {\r\n    border: 1px solid red;\r\n    background-color: white;\r\n\r\n}\r\n\r\n.board div.hit,\r\n.board div.miss {\r\n\r\n    cursor: not-allowed;\r\n}\r\n\r\n.board div.hit:active,\r\n.board div.miss:active {\r\n\r\n    background-color: rgba(173, 173, 173, 0.5);\r\n}\r\n\r\n.board div.hit {\r\n    border: 1px solid red;\r\n    background-color: red;\r\n\r\n}\r\n\r\n.board div.miss {\r\n    border: 1px solid blue;\r\n    background-color: lightblue;\r\n\r\n}\r\n\r\n.board div.hit.sunk {\r\n    border: 1px solid rgb(91, 2, 2,0.7);\r\n    background-color: rgb(91, 2, 2, 0.7);\r\n\r\n}\r\n\r\n.options {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 12px;\r\n    margin: 15px;\r\n    padding: 15px;\r\n}\r\n\r\noutput {\r\n    font-size: 1.3rem;\r\n}\r\n\r\n.options div {\r\n    display: flex;\r\n    gap: 15px;\r\n}\r\n\r\n.options button.random{\r\n    border-radius: 50%;\r\n}\r\n\r\n.options p, output {\r\n    color: beige;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n\r\n/* /// FOOTER /// */\r\n\r\nfooter {\r\n    text-align: center;\r\n    color: beige;\r\n    /* margin-block-start: 1.8rem; */\r\n    padding: 1.5rem;\r\n}\r\n\r\n\r\n"],"sourceRoot":""}]);
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

    _dom__WEBPACK_IMPORTED_MODULE_2__.elements.winner.textContent = 
    `${___WEBPACK_IMPORTED_MODULE_4__.GAME.getPlayerName(___WEBPACK_IMPORTED_MODULE_4__.GAME.getPassivePlayerRef())} is the winner!!`;
}

/* function displayTotalBoard(){

    for (let player of GAME.players) {

        let board = elements.boards[player.ID]

        player.gameBoard.shipsCoords.flat().forEach(coord => addClass(board, coord, "ship")) 

        player.gameBoard.shipHitList.forEach(coord => addClass(board, coord, "hit"))

        player.gameBoard.waterHitList.forEach(coord => addClass(board, coord, "miss"))
    }
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

    //constructor() {}

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

        let player = new _player__WEBPACK_IMPORTED_MODULE_1__.Player(name || `Player ${num}`)

        this.#players.push(player)
    }

    #createCPU() {

        let player = new _player__WEBPACK_IMPORTED_MODULE_1__.CPU("CPU", this.#difficulty)

        this.#players.push(player)
    }

    startGame(){
            
        this.#playerTurn = Math.floor(Math.random() * 2)

        if(this.#mode === "CpuMode") this.#playerTurn = 0
    }

    turn(quadrant) {
 
        let duplicatedMove = this.#players[this.#playerTurn].checkMoves(quadrant)
     
        if(duplicatedMove) return
        
        this.#sendAttack(quadrant)

        this.#playerTurn = this.getPassivePlayerRef()
    }

    CPUturn(){

        if(this.#playerTurn === 0) return

        this.#updateState()

        let square = this.#players[1].attack()
        this.#sendAttack(square)

        this.#playerTurn = this.getPassivePlayerRef()
    }

    #updateState(){

        let rivalHitList = this.getPlayerHitList(0)
        this.#players[1].setRivalHitList(rivalHitList)

        let sunkenList = this.getPlayerSunkShips(0)
        this.#players[1].setRivalSunkShips(sunkenList)
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

            if(player.getSunkShips().length === 5) {

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
        this.shipTypes = [{type: "carrier", length: 5}, {type: "battleship", length: 4}, 
                          {type: "destroyer", length: 3}, {type: "submarine", length: 3},  
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

    constructor(name){

        this.name = name
        this.gameBoard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__.GameBoard()
        this.moves = [[], [], [], [], [], [], [], [], [], []]
    }

    upperCaseName() {

       return this.name.charAt(0).toUpperCase() + this.name.slice(1)
    }

    checkMoves(quadrant) {

        if(this.moves[quadrant[0]][quadrant[1]] === quadrant[1]) return true

        this.moves[quadrant[0]][quadrant[1]] = quadrant[1]
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

        this.moves = [[], [], [], [], [], [], [], [], [], []]
        this.gameBoard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__.GameBoard()
    }

}


class CPU extends Player {

    rivalHitList = [];
    rivalSunkList = [];
    direction = null;

    constructor(name, difficulty){
        super(name)
        this.difficulty = difficulty
    }

    replay(){

        this.moves = [[], [], [], [], [], [], [], [], [], []]
        this.gameBoard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__.GameBoard()
        this.rivalHitList = []
        this.rivalSunkList = []
        this.direction = null
    }

    #randomSquare(){

        let randomRow =  Math.floor(Math.random() * 10)
        let randomCol =  Math.floor(Math.random() * 10)

        let square = [randomRow, randomCol]

        return square
    }

    attack(){

        let square = this.#moveAlgorithm()

        if(square !== null) return square

        square = this.#randomSquare()

            while(this.checkMoves(square)) square = this.#randomSquare()

        return square
    }

    setRivalHitList(rivalHitList) {

        this.rivalHitList = rivalHitList
    }

    setRivalSunkShips(rivalSunkList){

        if(rivalSunkList.length === this.rivalSunkList.length) return

        this.rivalSunkList = rivalSunkList
        this.direction = null

        if(this.difficulty === "hard") this.#encloseSunkShip() 
    }

    #isSunk(move){

        for(let coord of this.rivalSunkList.flat()) if(coord[0] === move[0] && coord[1] === move[1]) return true
    }

    #moveAlgorithm(){

        if(this.rivalHitList.length < 1) return null

        let coordQueue = [...this.rivalHitList]

        while(coordQueue.length > 0) {

            let coord = coordQueue.pop()

            if(this.#isSunk(coord)) break  

            let row = coord[0]
            let col = coord[1]

            let moves = [[row - 1, col], [row, col + 1], [row + 1, col], [row, col - 1]]

            if(this.difficulty !== "easy") {

                if(this.direction === null) this.#checkDirection(coord)
                if(this.direction === "vertical") moves = [[row - 1, col], [row + 1, col]]
                if(this.direction === "horizontal") moves = [[row, col + 1], [row, col - 1]]
            }

            for(let move of moves) {

                if(move[0] < 0 || move[1] < 0 || move[0] > (this.gameBoard.rowQuantity - 1) || 
                move[1] > (this.gameBoard.columnQuantity - 1)) continue

                if(this.checkMoves(move) !== true) return move
            }
        }

        return null
    }

    #checkDirection(hit){

        let rivalHitList = [...this.rivalHitList]
        let lastHit = rivalHitList[rivalHitList.length - 2]

        if(typeof lastHit === "undefined") return

        if(hit[1] === lastHit[1] &&
          (hit[0] + 1 === lastHit[0] || hit[0] - 1 === lastHit[0])) {

            this.direction = "vertical"
            return
        }

        if(hit[0] === lastHit[0] &&
          (hit[1] === lastHit[1] + 1 || hit[1] === lastHit[1] - 1)) {

            this.direction = "horizontal"
            return
        }
    }

    #encloseSunkShip(){

        let rivalSunkList = [...this.rivalSunkList]

        let sunkShip = rivalSunkList.pop()

        for(let coordinate of sunkShip) {

            let row = coordinate[0]
            let col = coordinate[1]

            let area = [[row - 1, col], [row - 1, col - 1], [row - 1, col + 1],
                        [row + 1, col], [row + 1, col - 1], [row + 1, col + 1],
                        [row, col], [row, col - 1], [row, col + 1]]

            for(let move of area) {

                if(move[0] < 0 || move[1] < 0 || move[0] > (this.gameBoard.rowQuantity - 1) || 
                   move[1] > (this.gameBoard.columnQuantity - 1)) continue

                this.checkMoves(move)
            }    
        }
    }


}


// ALGORITHM

// 1 - Cuando encuentra 1 barco, que vaya como las agujas del reloj en cada vez que le pega
// 2 - Cuando encuentra que es vertical u horizontal, solo atacar en la linea que va (ya no como agujas del reloj)
// 3 - Seguir asi hasta que el barco este hundido
// 4 - Eliminar adyacencias del ship de la posibilidad de golpeo. 

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sYUFBYSxPQUFPLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksY0FBYyxPQUFPLGFBQWEsTUFBTSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sWUFBWSxRQUFRLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsS0FBSyxNQUFNLFFBQVEsVUFBVSxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxTQUFTLFlBQVksT0FBTyxLQUFLLFlBQVksUUFBUSxhQUFhLFNBQVMsTUFBTSxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksUUFBUSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFFBQVEsTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFN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QUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixpREFBUztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGlEQUFTO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGlEQUFTO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN6T2E7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QitCO0FBQ0o7QUFDM0I7QUFDNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsMkNBQU07QUFDOUIsd0JBQXdCLDJDQUFNO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixvQkFBb0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix3QkFBd0I7QUFDL0M7QUFDQSxtQ0FBbUMsdUNBQUk7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDeERBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuOnJvb3Qge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGZvbnQtZmFtaWx5OidTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4vKiAvLy8gQ0xBU1NFUyAvLy8gKi9cclxuXHJcbi5ibHVyIHtcclxuXHJcbiAgICBmaWx0ZXI6IGJsdXIoMjBweCk7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuLnVuYWJsZSB7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuI2Nsb3NlIHtcclxuXHJcbiAgICBhbmltYXRpb246IGZhZGUtb3V0IDAuN3MgZWFzZS1vdXQ7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uc3BhY2Uge1xyXG5cclxuICAgIHBhZGRpbmc6IHZhcigpO1xyXG4gICAgbWFyZ2luOiB2YXIoKTtcclxuXHJcbn1cclxuXHJcbi5kaXNwbGF5LWZsZXgtY29se1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5ib2R5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgLyogZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMCUgMWZyIDUlOyAqL1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xyXG5cclxufVxyXG5cclxuLyogLy8vIEFSVElDTEVTIC8vLyAqL1xyXG5cclxuaDEge1xyXG4gICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xyXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xyXG59XHJcblxyXG5hcnRpY2xlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLyogRXN0byBlcyBsbyBuZWNlc2FyaW8gcGFyYSBxdWUgZWwgcG9wLXVwIHF1ZWRlIGVuIGVsIG1lZGlvICovXHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgLyogaGFzdGEgYWNhICovXHJcbiAgICBhbmltYXRpb246IGZhZGUtaW4gMC43cyBlYXNlLW91dDtcclxufVxyXG5cclxuYXJ0aWNsZS5zdGFydCxcclxuYXJ0aWNsZS5jaGlsZCB7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG59XHJcblxyXG5hcnRpY2xlLnN0YXJ0IHAge1xyXG5cclxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG59XHJcblxyXG5cclxuQGtleWZyYW1lcyBmYWRlLWluIHtcclxuICAgIDAlIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGVZKDApO1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgMTAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlWSgxKTtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgZmFkZS1vdXQge1xyXG4gICAgMCUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZVkoMSk7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgMTAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlWSgwKTtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufVxyXG5cclxuYXJ0aWNsZSBzZWN0aW9uLFxyXG5hcnRpY2xlIGRpdixcclxuYXJ0aWNsZSBidXR0b24ge1xyXG5cclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuYXJ0aWNsZSBzZWN0aW9uIHtcclxuXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgbWFyZ2luLWJsb2NrOiAwO1xyXG59XHJcblxyXG5hcnRpY2xlIGJ1dHRvbiB7XHJcblxyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG5hcnRpY2xlIHNlY3Rpb24gcCB7XHJcblxyXG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgMC40cztcclxufVxyXG5cclxuYXJ0aWNsZSBzZWN0aW9uOmhvdmVyIHAge1xyXG5cclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XHJcbn1cclxuXHJcbmFydGljbGUgc2VjdGlvbiBwLFxyXG5hcnRpY2xlIGxhYmVsLFxyXG5hcnRpY2xlIGxlZ2VuZCxcclxuYXJ0aWNsZSBidXR0b24ge1xyXG5cclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG59XHJcblxyXG5hcnRpY2xlLm1vZGUtc2VsZWN0aW9uID4gOmZpcnN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuXHJcbi8qIENISUxEUkVOIEFSVElDTEVTICovXHJcblxyXG4vKiBhcnRpY2xlLmNoaWxke1xyXG5cclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcblxyXG59ICovXHJcblxyXG5hcnRpY2xlLmNoaWxkIGRpdiB7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDEwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcblxyXG5hcnRpY2xlLkNwdU1vZGUuY2hpbGQgZGl2IHtcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbn1cclxuXHJcbmFydGljbGUuY2hpbGQgZmllbGRzZXQgZGl2IHtcclxuXHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG5hcnRpY2xlLmNoaWxkIGRpdi5idXR0b25zIHtcclxuXHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxufVxyXG5cclxuYXJ0aWNsZS5nYW1lLW92ZXIgb3V0cHV0LFxyXG5hcnRpY2xlLmdhbWUtb3ZlciBoMiB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXHJcbiAgICBmb250LXNpemU6IDEuNnJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuYXJ0aWNsZS5nYW1lLW92ZXIgc2VjdGlvbi5yZXBsYXkge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG5cclxuaW5wdXQge1xyXG4gICAgZm9udC1zaXplOiAxNi41cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgcGFkZGluZzogNXB4IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG5cclxuYnV0dG9uIHtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDNweCByZ2IoNDQsIDQ0LCA0NCk7XHJcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAwLjNzO1xyXG59XHJcblxyXG5idXR0b246YWN0aXZlIHtcclxuXHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggcmdiKDQ0LCA0NCwgNDQpO1xyXG59XHJcblxyXG5cclxuLyogLy8vIEhFQURFUiAvLy8gKi9cclxuXHJcbmhlYWRlciB7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG59XHJcblxyXG5oZWFkZXIgaDEge1xyXG4gICAgY29sb3I6IGJlaWdlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuaGVhZGVyIGgzIHtcclxuICAgIGNvbG9yOiBiZWlnZTtcclxufVxyXG5cclxuXHJcblxyXG4vKiAvLy8gTUFJTiAvLy8gKi9cclxuXHJcbm1haW4ge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxufVxyXG5cclxuc2VjdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciAyMCU7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcblxyXG5zZWN0aW9uID4gYnV0dG9uIHtcclxuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiBhdXRvO1xyXG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogMTVweDtcclxufVxyXG5cclxuLmJvYXJkIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogIHJlcGVhdCgxMCwgMWZyKTtcclxuXHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbn1cclxuXHJcbi5ib2FyZCBkaXYge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICBtaW4td2lkdGg6IDMwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4uYm9hcmQjdW5jb3ZlciBkaXYuc2hpcCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHJcbn1cclxuXHJcbi5ib2FyZCBkaXYuaGl0LFxyXG4uYm9hcmQgZGl2Lm1pc3Mge1xyXG5cclxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbn1cclxuXHJcbi5ib2FyZCBkaXYuaGl0OmFjdGl2ZSxcclxuLmJvYXJkIGRpdi5taXNzOmFjdGl2ZSB7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNzMsIDE3MywgMTczLCAwLjUpO1xyXG59XHJcblxyXG4uYm9hcmQgZGl2LmhpdCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcblxyXG59XHJcblxyXG4uYm9hcmQgZGl2Lm1pc3Mge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcclxuXHJcbn1cclxuXHJcbi5ib2FyZCBkaXYuaGl0LnN1bmsge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDkxLCAyLCAyLDAuNyk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTEsIDIsIDIsIDAuNyk7XHJcblxyXG59XHJcblxyXG4ub3B0aW9ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMTJweDtcclxuICAgIG1hcmdpbjogMTVweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuXHJcbm91dHB1dCB7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxufVxyXG5cclxuLm9wdGlvbnMgZGl2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDE1cHg7XHJcbn1cclxuXHJcbi5vcHRpb25zIGJ1dHRvbi5yYW5kb217XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5vcHRpb25zIHAsIG91dHB1dCB7XHJcbiAgICBjb2xvcjogYmVpZ2U7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi8qIC8vLyBGT09URVIgLy8vICovXHJcblxyXG5mb290ZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IGJlaWdlO1xyXG4gICAgLyogbWFyZ2luLWJsb2NrLXN0YXJ0OiAxLjhyZW07ICovXHJcbiAgICBwYWRkaW5nOiAxLjVyZW07XHJcbn1cclxuXHJcblxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLDJEQUEyRDtBQUMvRDs7QUFFQSxvQkFBb0I7O0FBRXBCOztJQUVJLGtCQUFrQjtJQUNsQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7O0lBRUksaUNBQWlDO0lBQ2pDLGFBQWE7QUFDakI7O0FBRUE7O0lBRUksY0FBYztJQUNkLGFBQWE7O0FBRWpCOztBQUVBOztJQUVJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLG9DQUFvQztJQUNwQyxpQ0FBaUM7O0FBRXJDOztBQUVBLHFCQUFxQjs7QUFFckI7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQiw4REFBOEQ7SUFDOUQsZUFBZTtJQUNmLFNBQVM7SUFDVCxRQUFRO0lBQ1IsZ0NBQWdDO0lBQ2hDLGNBQWM7SUFDZCxnQ0FBZ0M7QUFDcEM7O0FBRUE7O0lBRUksYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSxpQkFBaUI7QUFDckI7OztBQUdBO0lBQ0k7TUFDRSxVQUFVO01BQ1YsMENBQTBDO01BQzFDLGFBQWE7SUFDZjs7SUFFQTtNQUNFLFVBQVU7TUFDViwwQ0FBMEM7TUFDMUMsY0FBYztJQUNoQjtFQUNGOztFQUVBO0lBQ0U7TUFDRSxVQUFVO01BQ1YsMENBQTBDO01BQzFDLGNBQWM7SUFDaEI7O0lBRUE7TUFDRSxVQUFVO01BQ1YsMENBQTBDO01BQzFDLGFBQWE7SUFDZjtBQUNKOztBQUVBOzs7O0lBSUksZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUksWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSw0QkFBNEI7QUFDaEM7O0FBRUE7O0lBRUksc0JBQXNCO0FBQzFCOztBQUVBOzs7OztJQUtJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLDhCQUE4QjtBQUNsQzs7O0FBR0Esc0JBQXNCOztBQUV0Qjs7OztHQUlHOztBQUVIOztJQUVJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztJQUNULDhCQUE4QjtJQUM5QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBOztJQUVJLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOztBQUVBOztJQUVJLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7OztBQUdBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7OztBQUdBOztJQUVJLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLHVDQUF1QztJQUN2Qyw0QkFBNEI7QUFDaEM7O0FBRUE7O0lBRUksc0JBQXNCO0lBQ3RCLHVDQUF1QztBQUMzQzs7O0FBR0EsbUJBQW1COztBQUVuQjs7SUFFSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7O0FBRTNCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7Ozs7QUFJQSxpQkFBaUI7O0FBRWpCO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQ0FBZ0M7SUFDaEMsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1DQUFtQztJQUNuQyx1Q0FBdUM7O0lBRXZDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQix1QkFBdUI7O0FBRTNCOztBQUVBOzs7SUFHSSxtQkFBbUI7QUFDdkI7O0FBRUE7OztJQUdJLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixxQkFBcUI7O0FBRXpCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLDJCQUEyQjs7QUFFL0I7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsb0NBQW9DOztBQUV4Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztJQUNULFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOzs7QUFHQSxtQkFBbUI7O0FBRW5CO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixnQ0FBZ0M7SUFDaEMsZUFBZTtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGZvbnQtZmFtaWx5OidTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAvLy8gQ0xBU1NFUyAvLy8gKi9cXHJcXG5cXHJcXG4uYmx1ciB7XFxyXFxuXFxyXFxuICAgIGZpbHRlcjogYmx1cigyMHB4KTtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi51bmFibGUge1xcclxcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI2Nsb3NlIHtcXHJcXG5cXHJcXG4gICAgYW5pbWF0aW9uOiBmYWRlLW91dCAwLjdzIGVhc2Utb3V0O1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uc3BhY2Uge1xcclxcblxcclxcbiAgICBwYWRkaW5nOiB2YXIoKTtcXHJcXG4gICAgbWFyZ2luOiB2YXIoKTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmRpc3BsYXktZmxleC1jb2x7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmJvZHl7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAvKiBncmlkLXRlbXBsYXRlLXJvd3M6IDEwJSAxZnIgNSU7ICovXFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLyogLy8vIEFSVElDTEVTIC8vLyAqL1xcclxcblxcclxcbmgxIHtcXHJcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XFxyXFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXHJcXG59XFxyXFxuXFxyXFxuYXJ0aWNsZSB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgLyogRXN0byBlcyBsbyBuZWNlc2FyaW8gcGFyYSBxdWUgZWwgcG9wLXVwIHF1ZWRlIGVuIGVsIG1lZGlvICovXFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICB0b3A6IDUwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICAgIC8qIGhhc3RhIGFjYSAqL1xcclxcbiAgICBhbmltYXRpb246IGZhZGUtaW4gMC43cyBlYXNlLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuYXJ0aWNsZS5zdGFydCxcXHJcXG5hcnRpY2xlLmNoaWxkIHtcXHJcXG4gICAgcGFkZGluZzogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuYXJ0aWNsZS5zdGFydCBwIHtcXHJcXG5cXHJcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcbkBrZXlmcmFtZXMgZmFkZS1pbiB7XFxyXFxuICAgIDAlIHtcXHJcXG4gICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlWSgwKTtcXHJcXG4gICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB9XFxyXFxuICBcXHJcXG4gICAgMTAwJSB7XFxyXFxuICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZVkoMSk7XFxyXFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgQGtleWZyYW1lcyBmYWRlLW91dCB7XFxyXFxuICAgIDAlIHtcXHJcXG4gICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlWSgxKTtcXHJcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgfVxcclxcbiAgXFxyXFxuICAgIDEwMCUge1xcclxcbiAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGVZKDApO1xcclxcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuYXJ0aWNsZSBzZWN0aW9uLFxcclxcbmFydGljbGUgZGl2LFxcclxcbmFydGljbGUgYnV0dG9uIHtcXHJcXG5cXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5hcnRpY2xlIHNlY3Rpb24ge1xcclxcblxcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDMwcHg7XFxyXFxuICAgIG1hcmdpbi1ibG9jazogMDtcXHJcXG59XFxyXFxuXFxyXFxuYXJ0aWNsZSBidXR0b24ge1xcclxcblxcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxufVxcclxcblxcclxcbmFydGljbGUgc2VjdGlvbiBwIHtcXHJcXG5cXHJcXG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgMC40cztcXHJcXG59XFxyXFxuXFxyXFxuYXJ0aWNsZSBzZWN0aW9uOmhvdmVyIHAge1xcclxcblxcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xcclxcbn1cXHJcXG5cXHJcXG5hcnRpY2xlIHNlY3Rpb24gcCxcXHJcXG5hcnRpY2xlIGxhYmVsLFxcclxcbmFydGljbGUgbGVnZW5kLFxcclxcbmFydGljbGUgYnV0dG9uIHtcXHJcXG5cXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxufVxcclxcblxcclxcbmFydGljbGUubW9kZS1zZWxlY3Rpb24gPiA6Zmlyc3QtY2hpbGQge1xcclxcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIENISUxEUkVOIEFSVElDTEVTICovXFxyXFxuXFxyXFxuLyogYXJ0aWNsZS5jaGlsZHtcXHJcXG5cXHJcXG4gICAgcGFkZGluZzogMzBweDtcXHJcXG5cXHJcXG59ICovXFxyXFxuXFxyXFxuYXJ0aWNsZS5jaGlsZCBkaXYge1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgcGFkZGluZzogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuYXJ0aWNsZS5DcHVNb2RlLmNoaWxkIGRpdiB7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmFydGljbGUuY2hpbGQgZmllbGRzZXQgZGl2IHtcXHJcXG5cXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG59XFxyXFxuXFxyXFxuYXJ0aWNsZS5jaGlsZCBkaXYuYnV0dG9ucyB7XFxyXFxuXFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmFydGljbGUuZ2FtZS1vdmVyIG91dHB1dCxcXHJcXG5hcnRpY2xlLmdhbWUtb3ZlciBoMiB7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xcclxcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmFydGljbGUuZ2FtZS1vdmVyIHNlY3Rpb24ucmVwbGF5IHtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5pbnB1dCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTYuNXB4O1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggM3B4IHJnYig0NCwgNDQsIDQ0KTtcXHJcXG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uOmFjdGl2ZSB7XFxyXFxuXFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxyXFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IHJnYig0NCwgNDQsIDQ0KTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogLy8vIEhFQURFUiAvLy8gKi9cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIGgxIHtcXHJcXG4gICAgY29sb3I6IGJlaWdlO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgaDMge1xcclxcbiAgICBjb2xvcjogYmVpZ2U7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qIC8vLyBNQUlOIC8vLyAqL1xcclxcblxcclxcbm1haW4ge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxufVxcclxcblxcclxcbnNlY3Rpb24ge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIDIwJTtcXHJcXG4gICAgbWFyZ2luOiAxNXB4O1xcclxcbiAgICBwYWRkaW5nOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5zZWN0aW9uID4gYnV0dG9uIHtcXHJcXG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IGF1dG87XFxyXFxuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5ib2FyZCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6ICByZXBlYXQoMTAsIDFmcik7XFxyXFxuXFxyXFxuICAgIG1hcmdpbjogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkIGRpdiB7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcclxcbiAgICBtaW4td2lkdGg6IDMwcHg7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5ib2FyZCN1bmNvdmVyIGRpdi5zaGlwIHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkIGRpdi5oaXQsXFxyXFxuLmJvYXJkIGRpdi5taXNzIHtcXHJcXG5cXHJcXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkIGRpdi5oaXQ6YWN0aXZlLFxcclxcbi5ib2FyZCBkaXYubWlzczphY3RpdmUge1xcclxcblxcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3MywgMTczLCAxNzMsIDAuNSk7XFxyXFxufVxcclxcblxcclxcbi5ib2FyZCBkaXYuaGl0IHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5ib2FyZCBkaXYubWlzcyB7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkIGRpdi5oaXQuc3VuayB7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYig5MSwgMiwgMiwwLjcpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTEsIDIsIDIsIDAuNyk7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5vcHRpb25zIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAxMnB4O1xcclxcbiAgICBtYXJnaW46IDE1cHg7XFxyXFxuICAgIHBhZGRpbmc6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbm91dHB1dCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ub3B0aW9ucyBkaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5vcHRpb25zIGJ1dHRvbi5yYW5kb217XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm9wdGlvbnMgcCwgb3V0cHV0IHtcXHJcXG4gICAgY29sb3I6IGJlaWdlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiAvLy8gRk9PVEVSIC8vLyAqL1xcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6IGJlaWdlO1xcclxcbiAgICAvKiBtYXJnaW4tYmxvY2stc3RhcnQ6IDEuOHJlbTsgKi9cXHJcXG4gICAgcGFkZGluZzogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7UGxheWVyfSBmcm9tIFwiLi9wbGF5ZXJcIlxyXG5pbXBvcnQge0dhbWVCb2FyZH0gZnJvbSBcIi4vZ2FtZWJvYXJkXCJcclxuaW1wb3J0IHtlbGVtZW50cywgY3JlYXRlR3JpZH0gZnJvbSBcIi4vZG9tXCJcclxuaW1wb3J0IHtzdG9yZURhdGEsIHJldHJpZXZlRGF0YSwgdXBkYXRlRGF0YX0gZnJvbSBcIi4vc3RvcmFnZVwiXHJcbmltcG9ydCB7IEdBTUUgfSBmcm9tIFwiLlwiXHJcblxyXG5leHBvcnQge2Rpc3BsYXlCb2FyZCwgZGlzcGxheVNoaXAsIGRpc3BsYXlOYW1lcywgZGlzcGxheVBsYXllclR1cm4sIGRpc3BsYXlXaW5uZXJ9XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlTaGlwKHdoaWNoUGxheWVyKSB7XHJcbiAgICBcclxuICAgIGxldCBib2FyZCA9IGVsZW1lbnRzLmJvYXJkc1t3aGljaFBsYXllcl1cclxuXHJcbiAgICBHQU1FLmdldFBsYXllclNoaXBzKHdoaWNoUGxheWVyKS5mbGF0KCkuZm9yRWFjaChjb29yZCA9PiBhZGRDbGFzcyhib2FyZCwgY29vcmQsIFwic2hpcFwiKSlcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheUJvYXJkKCl7XHJcblxyXG4gICAgbGV0IGJvYXJkID0gZWxlbWVudHMuYm9hcmRzW0dBTUUuZ2V0QWN0aXZlUGxheWVyUmVmKCldXHJcblxyXG4gICAgR0FNRS5nZXRQbGF5ZXJIaXRMaXN0KCkuZm9yRWFjaChjb29yZCA9PiBhZGRDbGFzcyhib2FyZCwgY29vcmQsIFwiaGl0XCIpKVxyXG4gICAgR0FNRS5nZXRQbGF5ZXJNaXNzTGlzdCgpLmZvckVhY2goY29vcmQgPT4gYWRkQ2xhc3MoYm9hcmQsIGNvb3JkLCBcIm1pc3NcIikpXHJcbiAgICBHQU1FLmdldFBsYXllclN1bmtTaGlwcygpLmZsYXQoKS5mb3JFYWNoKGNvb3JkID0+IGFkZENsYXNzKGJvYXJkLCBjb29yZCwgXCJzdW5rXCIpKVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gYWRkQ2xhc3MoYm9hcmQsIHF1YWRyYW50LCBjbGFzc05hbWUpIHtcclxuXHJcbiAgICBsZXQgW3JvdywgY29sXSA9IHF1YWRyYW50XHJcblxyXG4gICAgbGV0IHNxdWFyZSA9IGJvYXJkLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXNxdWFyZT1cIiR7cm93fS0ke2NvbH1cIl1gKVxyXG5cclxuICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKGAke2NsYXNzTmFtZX1gKVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZGlzcGxheU5hbWVzKCkge1xyXG5cclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBlbGVtZW50cy5vdXRwdXRBcnIubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgZWxlbWVudHMub3V0cHV0QXJyW2ldLnRleHRDb250ZW50ID0gR0FNRS5nZXRQbGF5ZXJOYW1lKGkpXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlQbGF5ZXJUdXJuKCkge1xyXG5cclxuICAgIGxldCB0aXRsZSA9IGVsZW1lbnRzLnRpdGxlXHJcblxyXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBgJHtHQU1FLmdldFBsYXllck5hbWUoKX0ncyB0dXJuIWBcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheVdpbm5lcigpe1xyXG5cclxuICAgIGVsZW1lbnRzLndpbm5lci50ZXh0Q29udGVudCA9IFxyXG4gICAgYCR7R0FNRS5nZXRQbGF5ZXJOYW1lKEdBTUUuZ2V0UGFzc2l2ZVBsYXllclJlZigpKX0gaXMgdGhlIHdpbm5lciEhYDtcclxufVxyXG5cclxuLyogZnVuY3Rpb24gZGlzcGxheVRvdGFsQm9hcmQoKXtcclxuXHJcbiAgICBmb3IgKGxldCBwbGF5ZXIgb2YgR0FNRS5wbGF5ZXJzKSB7XHJcblxyXG4gICAgICAgIGxldCBib2FyZCA9IGVsZW1lbnRzLmJvYXJkc1twbGF5ZXIuSURdXHJcblxyXG4gICAgICAgIHBsYXllci5nYW1lQm9hcmQuc2hpcHNDb29yZHMuZmxhdCgpLmZvckVhY2goY29vcmQgPT4gYWRkQ2xhc3MoYm9hcmQsIGNvb3JkLCBcInNoaXBcIikpIFxyXG5cclxuICAgICAgICBwbGF5ZXIuZ2FtZUJvYXJkLnNoaXBIaXRMaXN0LmZvckVhY2goY29vcmQgPT4gYWRkQ2xhc3MoYm9hcmQsIGNvb3JkLCBcImhpdFwiKSlcclxuXHJcbiAgICAgICAgcGxheWVyLmdhbWVCb2FyZC53YXRlckhpdExpc3QuZm9yRWFjaChjb29yZCA9PiBhZGRDbGFzcyhib2FyZCwgY29vcmQsIFwibWlzc1wiKSlcclxuICAgIH1cclxufSAqL1xyXG5cclxuIiwiaW1wb3J0IHsgUGxheWVyLCBDUFUgfSBmcm9tIFwiLi9wbGF5ZXJcIlxyXG5pbXBvcnQgeyBHYW1lQm9hcmQgfSBmcm9tIFwiLi9nYW1lYm9hcmRcIlxyXG5pbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vc2hpcFwiXHJcbmltcG9ydCB7IHN0b3JlRGF0YSwgcmV0cmlldmVEYXRhLCB1cGRhdGVEYXRhIH0gZnJvbSBcIi4vc3RvcmFnZVwiXHJcbmltcG9ydCB7IGRpc3BsYXlCb2FyZCwgZGlzcGxheVNoaXAsIGRpc3BsYXlOYW1lcywgZGlzcGxheVBsYXllclR1cm4sIGRpc3BsYXlXaW5uZXIgfSBmcm9tIFwiLi9kaXNwbGF5XCJcclxuaW1wb3J0IHsgR0FNRSB9IGZyb20gXCIuL2luZGV4XCJcclxuXHJcbmV4cG9ydCB7ZWxlbWVudHMsIGNyZWF0ZUdyaWQsIHBsYXllcnNSZWFkeX1cclxuXHJcblxyXG5sZXQgZWxlbWVudHMgPSB7XHJcblxyXG4gICAgd3JhcHBlcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53cmFwcGVyXCIpLFxyXG4gICAgYm9hcmRzOiBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYm9hcmRcIikpLFxyXG4gICAgZGlhbG9nU3RhcnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhcnRpY2xlXCIpLFxyXG4gICAgZGlhbG9nTW9kZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImFydGljbGUubW9kZS1zZWxlY3Rpb25cIiksXHJcbiAgICBkaWFsb2dQbGF5ZXJNb2RlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYXJ0aWNsZS5QbGF5ZXJNb2RlXCIpLFxyXG4gICAgZGlhbG9nQ3B1TW9kZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImFydGljbGUuQ3B1TW9kZVwiKSxcclxuICAgIGRpYWxvZ0dhbWVPdmVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYXJ0aWNsZS5nYW1lLW92ZXJcIiksXHJcbiAgICBidG5DYW5jZWw6IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImJ1dHRvbi5jYW5jZWxcIikpLFxyXG4gICAgYnRuT2s6IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImJ1dHRvbi5va1wiKSksXHJcbiAgICBpbnB1dHNOYW1lczogQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW25hbWU9cGxheWVyLW5hbWVdXCIpKSxcclxuICAgIGlucHV0c1JhZGlvOiBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbmFtZT1kaWZmaWN1bHR5XVwiKSksXHJcbiAgICBidG5SYW5kb21BcnI6IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImJ1dHRvbi5yYW5kb21cIikpLFxyXG4gICAgYnRuUmVhZHlBcnI6IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImJ1dHRvbi5yZWFkeVwiKSksXHJcbiAgICBidG5Db3ZlckFycjogQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uLmNvdmVyXCIpKSxcclxuICAgIG91dHB1dEFycjogQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwib3V0cHV0Om5vdCgud2lubmVyKVwiKSksXHJcbiAgICBzdGFydDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImFydGljbGUuc3RhcnQgc2VjdGlvbiBwXCIpLFxyXG4gICAgdGl0bGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoM1wiKSxcclxuICAgIHdpbm5lcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aW5uZXJcIiksXHJcbiAgICByZXBsYXk6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVwbGF5XCIpLFxyXG4gICAgcmVzZXQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzZXRcIiksXHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpXHJcbiAgICB9LFxyXG5cclxuICAgIGFkZExpc3RlbmVycygpIHtcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIG9wZW5TdGFydERpYWxvZyk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGFwcGx5R3JpZCk7XHJcbiAgICAgICAgdGhpcy5kaWFsb2dDaGlsZHJlbigpLmZvckVhY2goY2hpbGQgPT4gY2hpbGQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdhbWVNb2RlU2VsZWN0aW9uKSk7XHJcbiAgICAgICAgdGhpcy5idG5DYW5jZWwuZm9yRWFjaChidG4gPT4gYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjYW5jZWxEaWFsb2cpKTtcclxuICAgICAgICB0aGlzLmJ0bk9rLmZvckVhY2goYnRuID0+IGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXBwcm92ZURpYWxvZykpO1xyXG4gICAgICAgIHRoaXMuYnRuT2suZm9yRWFjaChidG4gPT4gYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkaXNwbGF5TmFtZXMpKTtcclxuICAgICAgICB0aGlzLmJ0blJhbmRvbUFyci5mb3JFYWNoKGJ0biA9PiBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNyZWF0ZVJhbmRvbVNoaXBzKSk7XHJcbiAgICAgICAgdGhpcy5idG5SZWFkeUFyci5mb3JFYWNoKGJ0biA9PiBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHBsYXllcnNSZWFkeSkpO1xyXG4gICAgICAgIHRoaXMuYnRuQ292ZXJBcnIuZm9yRWFjaChidG4gPT4gYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVDb3ZlckJvYXJkKSk7XHJcbiAgICAgICAgdGhpcy5zdGFydC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3Blbk1vZGVEaWFsb2cpO1xyXG4gICAgICAgIHRoaXMucmVwbGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZXBsYXkpO1xyXG4gICAgICAgIHRoaXMucmVzZXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlc2V0KTtcclxuICAgIH0sXHJcblxyXG4gICAgZGlhbG9nQ2hpbGRyZW4oKXtcclxuXHJcbiAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLmRpYWxvZ01vZGUuY2hpbGRyZW4pIFxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KGVsZW1lbnQsIGNsYXNzTmFtZSwgc2Vjb25kQ2xhc3NOYW1lKXtcclxuXHJcbiAgICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpXHJcbiAgICBlbC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSlcclxuXHJcbiAgICBpZihzZWNvbmRDbGFzc05hbWUpIGVsLmNsYXNzTGlzdC5hZGQoc2Vjb25kQ2xhc3NOYW1lKVxyXG5cclxuICAgIHJldHVybiBlbFxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVHcmlkKGJvYXJkKXtcclxuXHJcbiAgICBib2FyZC5pbm5lckhUTUwgPSBcIlwiXHJcbiAgICBib2FyZC5jbGFzc0xpc3QuYWRkKFwidW5hYmxlXCIpXHJcbiAgICBib2FyZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInVuY292ZXJcIilcclxuXHJcbiAgICBsZXQgbnVtID0gMTBcclxuXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgbnVtOyBpKyspIHtcclxuXHJcbiAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IG51bTsgaisrKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgcXVhZHJhbnQgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIGByb3ctJHtpfWAsIGBjb2wtJHtqfWApXHJcbiAgICAgICAgICAgIHF1YWRyYW50LnNldEF0dHJpYnV0ZShcImRhdGEtc3F1YXJlXCIsIGAke2l9LSR7an1gKVxyXG4gICAgICAgICAgICBxdWFkcmFudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGl0TGlzdGVuZXIpXHJcbiAgICAgICAgICAgIGJvYXJkLmFwcGVuZENoaWxkKHF1YWRyYW50KVxyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5R3JpZCgpIHtcclxuXHJcbiAgICBmb3IobGV0IGJvYXJkIG9mIGVsZW1lbnRzLmJvYXJkcykgY3JlYXRlR3JpZChib2FyZCkgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9wZW5TdGFydERpYWxvZygpe1xyXG5cclxuICAgIGVsZW1lbnRzLndyYXBwZXIuY2xhc3NMaXN0LmFkZChcImJsdXJcIilcclxuICAgIGVsZW1lbnRzLmRpYWxvZ1N0YXJ0LnJlbW92ZUF0dHJpYnV0ZShcImlkXCIpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9wZW5Nb2RlRGlhbG9nKCl7XHJcblxyXG4gICAgZWxlbWVudHMuZGlhbG9nU3RhcnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjbG9zZVwiKVxyXG4gICAgZWxlbWVudHMuZGlhbG9nTW9kZS5yZW1vdmVBdHRyaWJ1dGUoXCJpZFwiKVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZ2FtZU1vZGVTZWxlY3Rpb24oZSkge1xyXG5cclxuICAgIGVsZW1lbnRzLmRpYWxvZ01vZGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjbG9zZVwiKVxyXG5cclxuICAgIGxldCBnYW1lTW9kZSA9IGUuY3VycmVudFRhcmdldC5jbGFzc05hbWVcclxuXHJcbiAgICBsZXQgZGlhbG9nID0gZWxlbWVudHNbYGRpYWxvZyR7Z2FtZU1vZGV9YF1cclxuICAgIGRpYWxvZy5yZW1vdmVBdHRyaWJ1dGUoXCJpZFwiKVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gY2FuY2VsRGlhbG9nKGUpe1xyXG5cclxuICAgIC8vaWYoZS5rZXkgIT09IFwiRXNjYXBlXCIpIHJldHVyblxyXG4gICAgZS5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNsb3NlXCIpXHJcbiAgICBlbGVtZW50cy5pbnB1dHNOYW1lcy5mb3JFYWNoKGlucHV0ID0+IGlucHV0LnZhbHVlID0gXCJcIilcclxuXHJcbiAgICBvcGVuTW9kZURpYWxvZygpXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBhcHByb3ZlRGlhbG9nKGUpIHtcclxuXHJcbiAgICAvL2lmKGUua2V5ICE9PSBcIkVudGVyXCIpIHJldHVyblxyXG4gICAgbGV0IG1vZGUgPSBlLnRhcmdldC5kYXRhc2V0Lm1vZGVcclxuXHJcbiAgICBnYW1lTW9kZURhdGEobW9kZSlcclxuICAgIGNwdVJlYWR5KClcclxuXHJcbiAgICBlLmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY2xvc2VcIilcclxuICAgIGVsZW1lbnRzLmlucHV0c05hbWVzLmZvckVhY2goaW5wdXQgPT4gaW5wdXQudmFsdWUgPSBcIlwiKVxyXG4gICAgZWxlbWVudHMud3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKFwiYmx1clwiKVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZ2FtZU1vZGVEYXRhKG1vZGUpe1xyXG5cclxuICAgIGlmKG1vZGUgPT09IFwiUGxheWVyTW9kZVwiKSB7XHJcblxyXG4gICAgICAgIEdBTUUuc2V0R2FtZURhdGEobW9kZSwgW2VsZW1lbnRzLmlucHV0c05hbWVzWzBdLnZhbHVlLCBlbGVtZW50cy5pbnB1dHNOYW1lc1sxXS52YWx1ZV0sIG51bGwpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGVsc2UgaWYobW9kZSA9PT0gXCJDcHVNb2RlXCIpIHtcclxuXHJcbiAgICAgICAgbGV0IGRpZmZpY3VsdHlcclxuXHJcbiAgICAgICAgZWxlbWVudHMuaW5wdXRzUmFkaW8uZm9yRWFjaChpbnB1dCA9PiB7IGlmKGlucHV0LmNoZWNrZWQpIGRpZmZpY3VsdHkgPSBpbnB1dC52YWx1ZSB9KVxyXG5cclxuICAgICAgICBHQU1FLnNldEdhbWVEYXRhKG1vZGUsIFtlbGVtZW50cy5pbnB1dHNOYW1lc1syXS52YWx1ZV0sIGRpZmZpY3VsdHkpXHJcbiAgICB9XHJcbn07XHJcblxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUmFuZG9tU2hpcHMoZSkge1xyXG5cclxuICAgIGxldCB3aGljaFBsYXllciA9IE51bWJlcihlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5ib2FyZClcclxuICAgIGxldCBib2FyZCA9IGVsZW1lbnRzLmJvYXJkc1t3aGljaFBsYXllcl1cclxuXHJcbiAgICBjcmVhdGVHcmlkKGJvYXJkKVxyXG5cclxuICAgIEdBTUUucGxhY2VQbGF5ZXJTaGlwcyh3aGljaFBsYXllcilcclxuXHJcbiAgICBkaXNwbGF5U2hpcCh3aGljaFBsYXllcilcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHBsYXllcnNSZWFkeShlKSB7XHJcblxyXG4gICAgZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQucmVhZHkgPSB0cnVlXHJcbiAgICBlLmN1cnJlbnRUYXJnZXQuZGlzYWJsZWQgPSB0cnVlXHJcblxyXG4gICAgbGV0IHdoaWNoQm9hcmQgPSBlLmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmRhdGFzZXQuYm9hcmRcclxuICAgIGVsZW1lbnRzLmJ0blJhbmRvbUFyclt3aGljaEJvYXJkXS5kaXNhYmxlZCA9IHRydWVcclxuICAgIGVsZW1lbnRzLmJvYXJkc1t3aGljaEJvYXJkXS5yZW1vdmVBdHRyaWJ1dGUoXCJpZFwiLCBcInVuY292ZXJcIilcclxuICAgIGVsZW1lbnRzLmJ0bkNvdmVyQXJyW3doaWNoQm9hcmRdLmRpc2FibGVkID0gdHJ1ZVxyXG5cclxuICAgIGZvcihsZXQgYnRuIG9mIGVsZW1lbnRzLmJ0blJlYWR5QXJyKSBpZihidG4uZGF0YXNldC5yZWFkeSA9PT0gXCJmYWxzZVwiKSByZXR1cm5cclxuXHJcbiAgICBHQU1FLnN0YXJ0R2FtZSgpXHJcblxyXG4gICAgZGlzcGxheVR1cm4oKVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gaGl0TGlzdGVuZXIoZSkge1xyXG5cclxuICAgIGVsZW1lbnRzLmJvYXJkc1tHQU1FLmdldEFjdGl2ZVBsYXllclJlZigpXS5yZW1vdmVBdHRyaWJ1dGUoXCJpZFwiKVxyXG5cclxuICAgIGxldCBxdWFkcmFudCA9IGUudGFyZ2V0LmRhdGFzZXQuc3F1YXJlLnNwbGl0KFwiLVwiKS5tYXAoc3RyID0+IE51bWJlcihzdHIpKVxyXG4gICBcclxuICAgIHBsYXllclR1cm4ocXVhZHJhbnQpXHJcblxyXG4gICAgaWYoR0FNRS5pc0dhbWVPdmVyKCkpIHtcclxuXHJcbiAgICAgICAgZ2FtZU92ZXJEaWFsb2coKVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGNwdVR1cm4oKVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gcGxheWVyVHVybihxdWFkcmFudCl7XHJcblxyXG4gICAgR0FNRS50dXJuKHF1YWRyYW50KVxyXG4gICAgZGlzcGxheVR1cm4oKVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gY3B1VHVybigpIHtcclxuXHJcbiAgICBpZihHQU1FLmdldE1vZGUoKSAhPT0gXCJDcHVNb2RlXCIpIHJldHVyblxyXG5cclxuICAgIEdBTUUuQ1BVdHVybigpXHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7IGRpc3BsYXlUdXJuKCkgfSwgMjAwMClcclxuXHJcbiAgICBpZihHQU1FLmlzR2FtZU92ZXIoKSkgZ2FtZU92ZXJEaWFsb2coKVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZGlzcGxheVR1cm4oKXtcclxuXHJcbiAgICB0b2dnbGVDb3ZlckJ1dHRvbigpXHJcbiAgICB0b2dnbGVBY3RpdmVCb2FyZCgpXHJcbiAgICBkaXNwbGF5UGxheWVyVHVybigpXHJcbiAgICBkaXNwbGF5Qm9hcmQoKVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gdG9nZ2xlQWN0aXZlQm9hcmQoKSB7XHJcblxyXG4gICAgZWxlbWVudHMuYm9hcmRzW0dBTUUuZ2V0UGFzc2l2ZVBsYXllclJlZigpXS5jbGFzc0xpc3QucmVtb3ZlKFwidW5hYmxlXCIpXHJcbiAgICBlbGVtZW50cy5ib2FyZHNbR0FNRS5nZXRBY3RpdmVQbGF5ZXJSZWYoKV0uY2xhc3NMaXN0LmFkZChcInVuYWJsZVwiKVxyXG5cclxuICAgIGlmKEdBTUUuZ2V0TW9kZSgpID09PSBcIkNwdU1vZGVcIikgZWxlbWVudHMuYm9hcmRzWzBdLmNsYXNzTGlzdC5hZGQoXCJ1bmFibGVcIilcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZUNvdmVyQnV0dG9uKCl7XHJcblxyXG4gICAgZWxlbWVudHMuYnRuQ292ZXJBcnJbR0FNRS5nZXRQYXNzaXZlUGxheWVyUmVmKCldLmRpc2FibGVkID0gdHJ1ZVxyXG4gICAgZWxlbWVudHMuYnRuQ292ZXJBcnJbR0FNRS5nZXRBY3RpdmVQbGF5ZXJSZWYoKV0uZGlzYWJsZWQgPSBmYWxzZVxyXG5cclxuICAgIGlmKEdBTUUuZ2V0TW9kZSgpID09PSBcIkNwdU1vZGVcIikgZWxlbWVudHMuYnRuQ292ZXJBcnJbMV0uZGlzYWJsZWQgPSB0cnVlXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiB0b2dnbGVDb3ZlckJvYXJkKGUpe1xyXG5cclxuICAgIGxldCB3aGljaEJvYXJkID0gZS5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQuZGF0YXNldC5ib2FyZFxyXG4gICAgbGV0IGJvYXJkID0gZWxlbWVudHMuYm9hcmRzW3doaWNoQm9hcmRdXHJcblxyXG4gICAgaWYoYm9hcmQuaGFzQXR0cmlidXRlKFwiaWRcIikpIGJvYXJkLnJlbW92ZUF0dHJpYnV0ZShcImlkXCIpXHJcbiAgICBlbHNlIGJvYXJkLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidW5jb3ZlclwiKVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcHVSZWFkeSgpIHtcclxuXHJcbiAgICBpZihHQU1FLmdldE1vZGUoKSAhPT0gXCJDcHVNb2RlXCIpIHJldHVyblxyXG5cclxuICAgIGVsZW1lbnRzLmJ0blJlYWR5QXJyWzFdLmRhdGFzZXQucmVhZHkgPSB0cnVlXHJcbiAgICBlbGVtZW50cy5idG5SZWFkeUFyclsxXS5kaXNhYmxlZCA9IHRydWVcclxuICAgIGVsZW1lbnRzLmJ0blJhbmRvbUFyclsxXS5kaXNhYmxlZCA9IHRydWVcclxuICAgIGVsZW1lbnRzLmJ0bkNvdmVyQXJyWzFdLmRpc2FibGVkID0gdHJ1ZVxyXG4gICAgR0FNRS5wbGFjZVBsYXllclNoaXBzKDEpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdhbWVPdmVyRGlhbG9nKCl7XHJcblxyXG4gICAgZWxlbWVudHMuZGlhbG9nR2FtZU92ZXIucmVtb3ZlQXR0cmlidXRlKFwiaWRcIik7XHJcbiAgICBlbGVtZW50cy53cmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJibHVyXCIpO1xyXG5cclxuICAgIGRpc3BsYXlXaW5uZXIoKVxyXG59XHJcblxyXG5mdW5jdGlvbiByZXBsYXkoKXtcclxuXHJcbiAgICBHQU1FLnJlcGxheSgpXHJcbiAgICByZXNldERPTSgpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc2V0KCl7XHJcblxyXG4gICAgR0FNRS5yZXNldCgpXHJcbiAgICByZXNldERPTSgpXHJcbiAgICBvcGVuU3RhcnREaWFsb2coKVxyXG59XHJcblxyXG5mdW5jdGlvbiByZXNldERPTSAoKSB7XHJcblxyXG4gICAgYXBwbHlHcmlkKCk7XHJcbiAgICBlbGVtZW50cy50aXRsZS50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICBlbGVtZW50cy5idG5SYW5kb21BcnIuZm9yRWFjaChidG4gPT4gYnRuLmRpc2FibGVkID0gZmFsc2UpO1xyXG4gICAgZWxlbWVudHMuYnRuUmVhZHlBcnIuZm9yRWFjaChidG4gPT4gYnRuLmRpc2FibGVkID0gZmFsc2UpO1xyXG4gICAgZWxlbWVudHMuYnRuQ292ZXJBcnIuZm9yRWFjaChidG4gPT4gYnRuLmRpc2FibGVkID0gZmFsc2UpO1xyXG4gICAgZWxlbWVudHMuZGlhbG9nR2FtZU92ZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjbG9zZVwiKTtcclxuICAgIGVsZW1lbnRzLndyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZShcImJsdXJcIik7XHJcbiAgICBjcHVSZWFkeSgpO1xyXG59XHJcblxyXG5cclxuIiwiaW1wb3J0IHtlbGVtZW50cywgcGxheWVyc1JlYWR5fSBmcm9tIFwiLi9kb21cIlxyXG5pbXBvcnQgeyBQbGF5ZXIsIENQVSB9IGZyb20gXCIuL3BsYXllclwiXHJcbi8vaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL3NoaXBcIlxyXG5pbXBvcnQge3N0b3JlRGF0YSwgcmV0cmlldmVEYXRhLCB1cGRhdGVEYXRhfSBmcm9tIFwiLi9zdG9yYWdlXCJcclxuaW1wb3J0IHsgZGlzcGxheVR1cm4gfSBmcm9tIFwiLi9kaXNwbGF5XCJcclxuaW1wb3J0IHsgR0FNRSB9IGZyb20gXCIuXCJcclxuXHJcblxyXG5leHBvcnQgeyBHYW1lIH1cclxuXHJcblxyXG5jbGFzcyBHYW1lIHtcclxuXHJcbiAgICAjcGxheWVyVHVybjtcclxuICAgICNwbGF5ZXJzID0gW107XHJcbiAgICAjbW9kZTtcclxuICAgICNkaWZmaWN1bHR5O1xyXG5cclxuICAgIC8vY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICAgIHNldEdhbWVEYXRhKG1vZGUsIHBsYXllcnNOYW1lcywgZGlmZmljdWx0eSkge1xyXG5cclxuICAgICAgICB0aGlzLiNtb2RlID0gbW9kZVxyXG4gICAgICAgIHRoaXMuI2RpZmZpY3VsdHkgPSBkaWZmaWN1bHR5XHJcblxyXG4gICAgICAgIGlmKG1vZGUgPT09IFwiUGxheWVyTW9kZVwiKSB7XHJcblxyXG4gICAgICAgICAgICBmb3IobGV0IG5hbWUgb2YgcGxheWVyc05hbWVzKSB0aGlzLiNjcmVhdGVQbGF5ZXIobmFtZSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy4jY3JlYXRlUGxheWVyKHBsYXllcnNOYW1lc1swXSlcclxuICAgICAgICB0aGlzLiNjcmVhdGVDUFUocGxheWVyc05hbWVzWzFdKVxyXG4gICAgfVxyXG4gIFxyXG4gICAgI2NyZWF0ZVBsYXllcihuYW1lKSB7XHJcblxyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuI3BsYXllcnMubGVuZ3RoXHJcbiAgICAgICAgbGV0IG51bSA9IGluZGV4ID09PSAwID8gXCJPbmVcIiA6IFwiVHdvXCJcclxuXHJcbiAgICAgICAgbGV0IHBsYXllciA9IG5ldyBQbGF5ZXIobmFtZSB8fCBgUGxheWVyICR7bnVtfWApXHJcblxyXG4gICAgICAgIHRoaXMuI3BsYXllcnMucHVzaChwbGF5ZXIpXHJcbiAgICB9XHJcblxyXG4gICAgI2NyZWF0ZUNQVSgpIHtcclxuXHJcbiAgICAgICAgbGV0IHBsYXllciA9IG5ldyBDUFUoXCJDUFVcIiwgdGhpcy4jZGlmZmljdWx0eSlcclxuXHJcbiAgICAgICAgdGhpcy4jcGxheWVycy5wdXNoKHBsYXllcilcclxuICAgIH1cclxuXHJcbiAgICBzdGFydEdhbWUoKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgdGhpcy4jcGxheWVyVHVybiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpXHJcblxyXG4gICAgICAgIGlmKHRoaXMuI21vZGUgPT09IFwiQ3B1TW9kZVwiKSB0aGlzLiNwbGF5ZXJUdXJuID0gMFxyXG4gICAgfVxyXG5cclxuICAgIHR1cm4ocXVhZHJhbnQpIHtcclxuIFxyXG4gICAgICAgIGxldCBkdXBsaWNhdGVkTW92ZSA9IHRoaXMuI3BsYXllcnNbdGhpcy4jcGxheWVyVHVybl0uY2hlY2tNb3ZlcyhxdWFkcmFudClcclxuICAgICBcclxuICAgICAgICBpZihkdXBsaWNhdGVkTW92ZSkgcmV0dXJuXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy4jc2VuZEF0dGFjayhxdWFkcmFudClcclxuXHJcbiAgICAgICAgdGhpcy4jcGxheWVyVHVybiA9IHRoaXMuZ2V0UGFzc2l2ZVBsYXllclJlZigpXHJcbiAgICB9XHJcblxyXG4gICAgQ1BVdHVybigpe1xyXG5cclxuICAgICAgICBpZih0aGlzLiNwbGF5ZXJUdXJuID09PSAwKSByZXR1cm5cclxuXHJcbiAgICAgICAgdGhpcy4jdXBkYXRlU3RhdGUoKVxyXG5cclxuICAgICAgICBsZXQgc3F1YXJlID0gdGhpcy4jcGxheWVyc1sxXS5hdHRhY2soKVxyXG4gICAgICAgIHRoaXMuI3NlbmRBdHRhY2soc3F1YXJlKVxyXG5cclxuICAgICAgICB0aGlzLiNwbGF5ZXJUdXJuID0gdGhpcy5nZXRQYXNzaXZlUGxheWVyUmVmKClcclxuICAgIH1cclxuXHJcbiAgICAjdXBkYXRlU3RhdGUoKXtcclxuXHJcbiAgICAgICAgbGV0IHJpdmFsSGl0TGlzdCA9IHRoaXMuZ2V0UGxheWVySGl0TGlzdCgwKVxyXG4gICAgICAgIHRoaXMuI3BsYXllcnNbMV0uc2V0Uml2YWxIaXRMaXN0KHJpdmFsSGl0TGlzdClcclxuXHJcbiAgICAgICAgbGV0IHN1bmtlbkxpc3QgPSB0aGlzLmdldFBsYXllclN1bmtTaGlwcygwKVxyXG4gICAgICAgIHRoaXMuI3BsYXllcnNbMV0uc2V0Uml2YWxTdW5rU2hpcHMoc3Vua2VuTGlzdClcclxuICAgIH1cclxuXHJcbiAgICByZXBsYXkoKXtcclxuXHJcbiAgICAgICAgdGhpcy4jcGxheWVycy5mb3JFYWNoKHBsYXllciA9PiBwbGF5ZXIucmVwbGF5KCkpXHJcbiAgICAgICAgdGhpcy4jcGxheWVyVHVybiA9IFwiXCJcclxuICAgIH1cclxuXHJcbiAgICByZXNldCgpe1xyXG5cclxuICAgICAgICB0aGlzLiNkaWZmaWN1bHR5ID0gXCJcIlxyXG4gICAgICAgIHRoaXMuI21vZGUgPSBcIlwiXHJcbiAgICAgICAgdGhpcy4jcGxheWVyVHVybiA9IFwiXCJcclxuICAgICAgICB0aGlzLiNwbGF5ZXJzID0gW11cclxuICAgIH1cclxuXHJcbiAgICAjc2VuZEF0dGFjayhxdWFkcmFudCkge1xyXG5cclxuICAgICAgICBsZXQgcGxheWVyID0gdGhpcy4jcGxheWVyc1t0aGlzLmdldFBhc3NpdmVQbGF5ZXJSZWYoKV1cclxuICAgICAgICBwbGF5ZXIucmVjZWl2ZUF0dGFjayhxdWFkcmFudClcclxuICAgIH1cclxuXHJcbiAgICBpc0dhbWVPdmVyKCkge1xyXG4gICAgXHJcbiAgICAgICAgZm9yKGxldCBwbGF5ZXIgb2YgdGhpcy4jcGxheWVycykge1xyXG5cclxuICAgICAgICAgICAgaWYocGxheWVyLmdldFN1bmtTaGlwcygpLmxlbmd0aCA9PT0gNSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TW9kZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4jbW9kZVxyXG4gICAgfVxyXG5cclxuICAgIGdldFBhc3NpdmVQbGF5ZXJSZWYoKSB7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLiNwbGF5ZXJUdXJuID09PSAwID8gMSA6IDBcclxuICAgIH1cclxuXHJcbiAgICBnZXRBY3RpdmVQbGF5ZXJSZWYoKSB7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLiNwbGF5ZXJUdXJuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UGxheWVyTmFtZSh3aGljaFBsYXllciA9IHRoaXMuI3BsYXllclR1cm4pe1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy4jcGxheWVyc1t3aGljaFBsYXllcl0udXBwZXJDYXNlTmFtZSgpXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UGxheWVySGl0TGlzdCh3aGljaFBsYXllciA9IHRoaXMuI3BsYXllclR1cm4pe1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy4jcGxheWVyc1t3aGljaFBsYXllcl0uZ2V0SGl0TGlzdCgpXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UGxheWVyTWlzc0xpc3Qod2hpY2hQbGF5ZXIgPSB0aGlzLiNwbGF5ZXJUdXJuKXtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuI3BsYXllcnNbd2hpY2hQbGF5ZXJdLmdldE1pc3NMaXN0KClcclxuICAgIH1cclxuXHJcbiAgICBnZXRQbGF5ZXJTaGlwcyh3aGljaFBsYXllciA9IHRoaXMuI3BsYXllclR1cm4pe1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy4jcGxheWVyc1t3aGljaFBsYXllcl0uZ2V0U2hpcHNDb29yZHMoKVxyXG4gICAgfVxyXG5cclxuICAgIGdldFBsYXllclN1bmtTaGlwcyh3aGljaFBsYXllciA9IHRoaXMuI3BsYXllclR1cm4pIHtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gdGhpcy4jcGxheWVyc1t3aGljaFBsYXllcl0uZ2V0U3Vua1NoaXBzKClcclxuICAgIH1cclxuXHJcbiAgICBwbGFjZVBsYXllclNoaXBzKHdoaWNoUGxheWVyID0gdGhpcy4jcGxheWVyVHVybil7XHJcblxyXG4gICAgICAgIHRoaXMuI3BsYXllcnNbd2hpY2hQbGF5ZXJdLnBsYWNlU2hpcHMoKVxyXG4gICAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQge1NoaXB9IGZyb20gXCIuL3NoaXBcIlxyXG5cclxuZXhwb3J0IHtHYW1lQm9hcmR9XHJcblxyXG5jbGFzcyBHYW1lQm9hcmQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHJvd1F1YW50aXR5ID0gMTAsIGNvbHVtblF1YW50aXR5ID0gMTApe1xyXG5cclxuICAgICAgICB0aGlzLnJvd1F1YW50aXR5ID0gcm93UXVhbnRpdHksXHJcbiAgICAgICAgdGhpcy5jb2x1bW5RdWFudGl0eSA9IGNvbHVtblF1YW50aXR5LFxyXG4gICAgICAgIHRoaXMuc2hpcFR5cGVzID0gW3t0eXBlOiBcImNhcnJpZXJcIiwgbGVuZ3RoOiA1fSwge3R5cGU6IFwiYmF0dGxlc2hpcFwiLCBsZW5ndGg6IDR9LCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7dHlwZTogXCJkZXN0cm95ZXJcIiwgbGVuZ3RoOiAzfSwge3R5cGU6IFwic3VibWFyaW5lXCIsIGxlbmd0aDogM30sICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7dHlwZTogXCJwYXRyb2wgYm9hdFwiLCBsZW5ndGg6IDJ9XSxcclxuICAgICAgICB0aGlzLnNoaXBzID0gW10sXHJcbiAgICAgICAgdGhpcy5zdW5rU2hpcHMgPSBbXSxcclxuICAgICAgICB0aGlzLndhdGVySGl0TGlzdCA9IFtdLFxyXG4gICAgICAgIHRoaXMuc2hpcEhpdExpc3QgPSBbXSBcclxuICAgIH1cclxuXHJcbiAgICAjY3JlYXRlU2hpcHMoKXtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICBsZXQgc2hpcHNRdWV1ZSA9IFtdXHJcblxyXG4gICAgICAgIGZvcihsZXQgc2hpcCBvZiB0aGlzLnNoaXBUeXBlcyl7XHJcbiAgXHJcbiAgICAgICAgICAgIHNoaXBzUXVldWUucHVzaChuZXcgU2hpcChzaGlwLmxlbmd0aCwgc2hpcC50eXBlKSkgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gc2hpcHNRdWV1ZSAgICBcclxuICAgIH1cclxuXHJcbiAgICBwbGFjZVNoaXBzKCkge1xyXG5cclxuICAgICAgICB0aGlzLnNoaXBzID0gW11cclxuICAgICAgICB0aGlzLnNoaXBzQ29vcmRzID0gW11cclxuXHJcbiAgICAgICAgbGV0IHNoaXBzUXVldWUgPSB0aGlzLiNjcmVhdGVTaGlwcygpXHJcbiAgICAgICAgbGV0IGFkamFjZW5jeUxpc3QgPSBbW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW11dXHJcblxyXG4gICAgICAgIHdoaWxlKHNoaXBzUXVldWUubGVuZ3RoID4gMCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgIGxldCByYW5kb21Sb3cgPSAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXHJcbiAgICAgICAgICAgIGxldCByYW5kb21Db2wgPSAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXHJcbiAgICAgICAgICAgIGxldCB2ZXJ0aWNhbCA9ICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMilcclxuICAgIFxyXG4gICAgICAgICAgICBsZXQgcmFuZG9tUm93Q29weSA9IHJhbmRvbVJvd1xyXG4gICAgICAgICAgICBsZXQgcmFuZG9tQ29sQ29weSA9IHJhbmRvbUNvbCBcclxuICAgIFxyXG4gICAgICAgICAgICBsZXQgc2hpcCA9IHNoaXBzUXVldWUuc2hpZnQoKVxyXG4gICAgICAgICAgICB0aGlzLnNoaXBzLnB1c2goc2hpcClcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZihhZGphY2VuY3lMaXN0W3JhbmRvbVJvd0NvcHldLmluY2x1ZGVzKHJhbmRvbUNvbENvcHkpKXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXAuY29vcmRpbmF0ZXMgPSBbXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwc1F1ZXVlLnVuc2hpZnQoc2hpcClcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGlwcy5wb3AoKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNoaXAuY29vcmRpbmF0ZXMucHVzaChbcmFuZG9tUm93Q29weSwgcmFuZG9tQ29sQ29weV0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHZlcnRpY2FsKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyYW5kb21Sb3dDb3B5IDwgKHRoaXMucm93UXVhbnRpdHkgLSAxKSkge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYW5kb21Sb3dDb3B5ICsrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmFuZG9tUm93Q29weSA9IHJhbmRvbVJvdyAtIChzaGlwLmxlbmd0aCAtIChpICsgMSkpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyYW5kb21Db2xDb3B5IDwgKHRoaXMuY29sdW1uUXVhbnRpdHkgLSAxKSkge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYW5kb21Db2xDb3B5ICsrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmFuZG9tQ29sQ29weSA9IHJhbmRvbUNvbCAtIChzaGlwLmxlbmd0aCAtIChpICsgMSkpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKHNoaXAuY29vcmRpbmF0ZXMubGVuZ3RoID4gMCkgdGhpcy4jZW5jbG9zZVNoaXAoc2hpcCwgYWRqYWNlbmN5TGlzdClcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAjZW5jbG9zZVNoaXAoc2hpcCwgYWRqYWNlbmN5TGlzdCl7XHJcblxyXG4gICAgICAgIGZvcihsZXQgY29vcmRpbmF0ZSBvZiBzaGlwLmNvb3JkaW5hdGVzKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgcm93ID0gY29vcmRpbmF0ZVswXVxyXG4gICAgICAgICAgICBsZXQgY29sID0gY29vcmRpbmF0ZVsxXVxyXG5cclxuICAgICAgICAgICAgbGV0IGFyZWEgPSBbW3JvdyAtIDEsIGNvbF0sIFtyb3cgLSAxLCBjb2wgLSAxXSwgW3JvdyAtIDEsIGNvbCArIDFdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbcm93ICsgMSwgY29sXSwgW3JvdyArIDEsIGNvbCAtIDFdLCBbcm93ICsgMSwgY29sICsgMV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtyb3csIGNvbF0sIFtyb3csIGNvbCAtIDFdLCBbcm93LCBjb2wgKyAxXV1cclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgYXJyIG9mIGFyZWEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihhcnJbMF0gPCAwIHx8IGFyclsxXSA8IDAgfHxcclxuICAgICAgICAgICAgICAgICAgIGFyclswXSA+ICh0aGlzLnJvd1F1YW50aXR5IC0gMSkgfHwgYXJyWzFdID4gKHRoaXMuY29sdW1uUXVhbnRpdHkgLSAxKSkgY29udGludWVcclxuXHJcbiAgICAgICAgICAgICAgICBpZighYWRqYWNlbmN5TGlzdFthcnJbMF1dLmluY2x1ZGVzKGFyclsxXSkpIGFkamFjZW5jeUxpc3RbYXJyWzBdXS5wdXNoKGFyclsxXSkgXHJcbiAgICAgICAgICAgIH0gICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyKCkge1xyXG5cclxuICAgICAgICB0aGlzLnNoaXBIaXRMaXN0ID0gIFtbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXV1cclxuICAgICAgICB0aGlzLndhdGVySGl0TGlzdCA9IFtbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXV1cclxuICAgICAgICB0aGlzLnNoaXBzID0gW11cclxuICAgICAgICB0aGlzLnN1bmtTaGlwcyA9IFtdXHJcbiAgICAgICAgdGhpcy5zaGlwc0Nvb3JkcyA9IFtdXHJcbiAgICB9XHJcblxyXG4gICAgcmVjZWl2ZUF0dGFjayhzcXVhcmUpe1xyXG4gICAgXHJcbiAgICAgICAgbGV0IGhpdE9uVGFyZ2V0ID0gZmFsc2VcclxuXHJcbiAgICAgICAgZm9yKGxldCBzaGlwIG9mIHRoaXMuc2hpcHMpIHtcclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgY29vcmRpbmF0ZSBvZiBzaGlwLmNvb3JkaW5hdGVzKXtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihjb29yZGluYXRlWzBdID09PSBzcXVhcmVbMF0gJiYgY29vcmRpbmF0ZVsxXSA9PT0gc3F1YXJlWzFdKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNoaXAuaGl0KClcclxuICAgICAgICAgICAgICAgICAgICBpZihzaGlwLmlzU3VuaykgdGhpcy5zdW5rU2hpcHMucHVzaChzaGlwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNoaXBIaXRMaXN0LnB1c2goc3F1YXJlKSAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaGl0T25UYXJnZXQgPSB0cnVlXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKGhpdE9uVGFyZ2V0KSByZXR1cm5cclxuICAgICAgICB9IFxyXG5cclxuICAgICAgICB0aGlzLndhdGVySGl0TGlzdC5wdXNoKHNxdWFyZSlcclxuICAgIH1cclxuXHJcbiAgICAvKiBhbGxTaGlwc1N1bmsoc2hpcCkge1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNISVAgU1VOS0VEXCIsIHNoaXApXHJcblxyXG4gICAgICAgIHRoaXMuc2hpcHNTdW5rLnB1c2goc2hpcClcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTSElQIFNVTktFRCBBUlJBWVwiLCB0aGlzLnNoaXBzU3VuaylcclxuXHJcbiAgICAgICAgaWYoIXRoaXMuc2hpcHNTdW5rLmxlbmd0aCA9PT0gNSkgcmV0dXJuIG51bGxcclxuXHJcbiAgICAgICAgLy9BQ0EgQUxHTyBIQVJJQSBQQVJBIEFWSVNBUiBRVUUgRVNUQU4gVE9ET1MgVU5ESURPU1xyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9ICovXHJcbiAgICBcclxufVxyXG5cclxuIiwiaW1wb3J0IFwiLi4vc3JjL3N0eWxlLmNzc1wiXHJcbmltcG9ydCB7UGxheWVyfSBmcm9tIFwiLi9wbGF5ZXJcIlxyXG5pbXBvcnQge0dhbWVCb2FyZH0gZnJvbSBcIi4vZ2FtZWJvYXJkXCJcclxuaW1wb3J0IHtTaGlwfSBmcm9tIFwiLi9zaGlwXCJcclxuaW1wb3J0IHtlbGVtZW50c30gZnJvbSBcIi4vZG9tXCJcclxuaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuL2dhbWVcIlxyXG5cclxuZXhwb3J0IHsgR0FNRSB9XHJcblxyXG5sZXQgR0FNRSA9IG5ldyBHYW1lKClcclxuZWxlbWVudHMuaW5pdCgpXHJcblxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQge0dhbWVCb2FyZH0gZnJvbSBcIi4vZ2FtZWJvYXJkXCJcclxuXHJcbmV4cG9ydCB7UGxheWVyLCBDUFV9XHJcblxyXG5jbGFzcyBQbGF5ZXIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5hbWUpe1xyXG5cclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lXHJcbiAgICAgICAgdGhpcy5nYW1lQm9hcmQgPSBuZXcgR2FtZUJvYXJkKClcclxuICAgICAgICB0aGlzLm1vdmVzID0gW1tdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdXVxyXG4gICAgfVxyXG5cclxuICAgIHVwcGVyQ2FzZU5hbWUoKSB7XHJcblxyXG4gICAgICAgcmV0dXJuIHRoaXMubmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHRoaXMubmFtZS5zbGljZSgxKVxyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrTW92ZXMocXVhZHJhbnQpIHtcclxuXHJcbiAgICAgICAgaWYodGhpcy5tb3Zlc1txdWFkcmFudFswXV1bcXVhZHJhbnRbMV1dID09PSBxdWFkcmFudFsxXSkgcmV0dXJuIHRydWVcclxuXHJcbiAgICAgICAgdGhpcy5tb3Zlc1txdWFkcmFudFswXV1bcXVhZHJhbnRbMV1dID0gcXVhZHJhbnRbMV1cclxuICAgIH1cclxuXHJcbiAgICBwbGFjZVNoaXBzKCl7XHJcblxyXG4gICAgICAgIHRoaXMuZ2FtZUJvYXJkLnBsYWNlU2hpcHMoKVxyXG4gICAgfVxyXG5cclxuICAgIHJlY2VpdmVBdHRhY2soc3F1YXJlKSB7XHJcblxyXG4gICAgICAgIHRoaXMuZ2FtZUJvYXJkLnJlY2VpdmVBdHRhY2soc3F1YXJlKVxyXG4gICAgfVxyXG5cclxuICAgIGdldEhpdExpc3QoKXtcclxuXHJcbiAgICAgICByZXR1cm4gdGhpcy5nYW1lQm9hcmQuc2hpcEhpdExpc3RcclxuICAgIH1cclxuXHJcbiAgICBnZXRNaXNzTGlzdCgpe1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5nYW1lQm9hcmQud2F0ZXJIaXRMaXN0XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U2hpcHNDb29yZHMoKXtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgc2hpcHMgPSB0aGlzLmdhbWVCb2FyZC5zaGlwc1xyXG5cclxuICAgICAgICBsZXQgc2hpcHNDb29yZHMgPSBbXVxyXG4gICAgIFxyXG4gICAgICAgIGZvcihsZXQgc2hpcCBvZiBzaGlwcykgc2hpcHNDb29yZHMucHVzaChzaGlwLmNvb3JkaW5hdGVzKVxyXG5cclxuICAgICAgICByZXR1cm4gc2hpcHNDb29yZHNcclxuICAgIH1cclxuXHJcbiAgICBnZXRTdW5rU2hpcHMoKXtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgc2hpcHMgPSB0aGlzLmdhbWVCb2FyZC5zdW5rU2hpcHNcclxuXHJcbiAgICAgICAgaWYoc2hpcHMubGVuZ3RoIDwgMSkgcmV0dXJuIFtdXHJcbiAgICAgXHJcbiAgICAgICAgbGV0IGNvb3JkcyA9IFtdXHJcbiAgICAgXHJcbiAgICAgICAgZm9yKGxldCBzaGlwIG9mIHNoaXBzKSBjb29yZHMucHVzaChzaGlwLmNvb3JkaW5hdGVzKVxyXG4gICAgIFxyXG4gICAgICAgIHJldHVybiBjb29yZHNcclxuICAgIH1cclxuXHJcbiAgICByZXBsYXkoKXtcclxuXHJcbiAgICAgICAgdGhpcy5tb3ZlcyA9IFtbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXV1cclxuICAgICAgICB0aGlzLmdhbWVCb2FyZCA9IG5ldyBHYW1lQm9hcmQoKVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbmNsYXNzIENQVSBleHRlbmRzIFBsYXllciB7XHJcblxyXG4gICAgcml2YWxIaXRMaXN0ID0gW107XHJcbiAgICByaXZhbFN1bmtMaXN0ID0gW107XHJcbiAgICBkaXJlY3Rpb24gPSBudWxsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGRpZmZpY3VsdHkpe1xyXG4gICAgICAgIHN1cGVyKG5hbWUpXHJcbiAgICAgICAgdGhpcy5kaWZmaWN1bHR5ID0gZGlmZmljdWx0eVxyXG4gICAgfVxyXG5cclxuICAgIHJlcGxheSgpe1xyXG5cclxuICAgICAgICB0aGlzLm1vdmVzID0gW1tdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdXVxyXG4gICAgICAgIHRoaXMuZ2FtZUJvYXJkID0gbmV3IEdhbWVCb2FyZCgpXHJcbiAgICAgICAgdGhpcy5yaXZhbEhpdExpc3QgPSBbXVxyXG4gICAgICAgIHRoaXMucml2YWxTdW5rTGlzdCA9IFtdXHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBudWxsXHJcbiAgICB9XHJcblxyXG4gICAgI3JhbmRvbVNxdWFyZSgpe1xyXG5cclxuICAgICAgICBsZXQgcmFuZG9tUm93ID0gIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKVxyXG4gICAgICAgIGxldCByYW5kb21Db2wgPSAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXHJcblxyXG4gICAgICAgIGxldCBzcXVhcmUgPSBbcmFuZG9tUm93LCByYW5kb21Db2xdXHJcblxyXG4gICAgICAgIHJldHVybiBzcXVhcmVcclxuICAgIH1cclxuXHJcbiAgICBhdHRhY2soKXtcclxuXHJcbiAgICAgICAgbGV0IHNxdWFyZSA9IHRoaXMuI21vdmVBbGdvcml0aG0oKVxyXG5cclxuICAgICAgICBpZihzcXVhcmUgIT09IG51bGwpIHJldHVybiBzcXVhcmVcclxuXHJcbiAgICAgICAgc3F1YXJlID0gdGhpcy4jcmFuZG9tU3F1YXJlKClcclxuXHJcbiAgICAgICAgICAgIHdoaWxlKHRoaXMuY2hlY2tNb3ZlcyhzcXVhcmUpKSBzcXVhcmUgPSB0aGlzLiNyYW5kb21TcXVhcmUoKVxyXG5cclxuICAgICAgICByZXR1cm4gc3F1YXJlXHJcbiAgICB9XHJcblxyXG4gICAgc2V0Uml2YWxIaXRMaXN0KHJpdmFsSGl0TGlzdCkge1xyXG5cclxuICAgICAgICB0aGlzLnJpdmFsSGl0TGlzdCA9IHJpdmFsSGl0TGlzdFxyXG4gICAgfVxyXG5cclxuICAgIHNldFJpdmFsU3Vua1NoaXBzKHJpdmFsU3Vua0xpc3Qpe1xyXG5cclxuICAgICAgICBpZihyaXZhbFN1bmtMaXN0Lmxlbmd0aCA9PT0gdGhpcy5yaXZhbFN1bmtMaXN0Lmxlbmd0aCkgcmV0dXJuXHJcblxyXG4gICAgICAgIHRoaXMucml2YWxTdW5rTGlzdCA9IHJpdmFsU3Vua0xpc3RcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IG51bGxcclxuXHJcbiAgICAgICAgaWYodGhpcy5kaWZmaWN1bHR5ID09PSBcImhhcmRcIikgdGhpcy4jZW5jbG9zZVN1bmtTaGlwKCkgXHJcbiAgICB9XHJcblxyXG4gICAgI2lzU3Vuayhtb3ZlKXtcclxuXHJcbiAgICAgICAgZm9yKGxldCBjb29yZCBvZiB0aGlzLnJpdmFsU3Vua0xpc3QuZmxhdCgpKSBpZihjb29yZFswXSA9PT0gbW92ZVswXSAmJiBjb29yZFsxXSA9PT0gbW92ZVsxXSkgcmV0dXJuIHRydWVcclxuICAgIH1cclxuXHJcbiAgICAjbW92ZUFsZ29yaXRobSgpe1xyXG5cclxuICAgICAgICBpZih0aGlzLnJpdmFsSGl0TGlzdC5sZW5ndGggPCAxKSByZXR1cm4gbnVsbFxyXG5cclxuICAgICAgICBsZXQgY29vcmRRdWV1ZSA9IFsuLi50aGlzLnJpdmFsSGl0TGlzdF1cclxuXHJcbiAgICAgICAgd2hpbGUoY29vcmRRdWV1ZS5sZW5ndGggPiAwKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgY29vcmQgPSBjb29yZFF1ZXVlLnBvcCgpXHJcblxyXG4gICAgICAgICAgICBpZih0aGlzLiNpc1N1bmsoY29vcmQpKSBicmVhayAgXHJcblxyXG4gICAgICAgICAgICBsZXQgcm93ID0gY29vcmRbMF1cclxuICAgICAgICAgICAgbGV0IGNvbCA9IGNvb3JkWzFdXHJcblxyXG4gICAgICAgICAgICBsZXQgbW92ZXMgPSBbW3JvdyAtIDEsIGNvbF0sIFtyb3csIGNvbCArIDFdLCBbcm93ICsgMSwgY29sXSwgW3JvdywgY29sIC0gMV1dXHJcblxyXG4gICAgICAgICAgICBpZih0aGlzLmRpZmZpY3VsdHkgIT09IFwiZWFzeVwiKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5kaXJlY3Rpb24gPT09IG51bGwpIHRoaXMuI2NoZWNrRGlyZWN0aW9uKGNvb3JkKVxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5kaXJlY3Rpb24gPT09IFwidmVydGljYWxcIikgbW92ZXMgPSBbW3JvdyAtIDEsIGNvbF0sIFtyb3cgKyAxLCBjb2xdXVxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5kaXJlY3Rpb24gPT09IFwiaG9yaXpvbnRhbFwiKSBtb3ZlcyA9IFtbcm93LCBjb2wgKyAxXSwgW3JvdywgY29sIC0gMV1dXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgbW92ZSBvZiBtb3Zlcykge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKG1vdmVbMF0gPCAwIHx8IG1vdmVbMV0gPCAwIHx8IG1vdmVbMF0gPiAodGhpcy5nYW1lQm9hcmQucm93UXVhbnRpdHkgLSAxKSB8fCBcclxuICAgICAgICAgICAgICAgIG1vdmVbMV0gPiAodGhpcy5nYW1lQm9hcmQuY29sdW1uUXVhbnRpdHkgLSAxKSkgY29udGludWVcclxuXHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmNoZWNrTW92ZXMobW92ZSkgIT09IHRydWUpIHJldHVybiBtb3ZlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcblxyXG4gICAgI2NoZWNrRGlyZWN0aW9uKGhpdCl7XHJcblxyXG4gICAgICAgIGxldCByaXZhbEhpdExpc3QgPSBbLi4udGhpcy5yaXZhbEhpdExpc3RdXHJcbiAgICAgICAgbGV0IGxhc3RIaXQgPSByaXZhbEhpdExpc3Rbcml2YWxIaXRMaXN0Lmxlbmd0aCAtIDJdXHJcblxyXG4gICAgICAgIGlmKHR5cGVvZiBsYXN0SGl0ID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm5cclxuXHJcbiAgICAgICAgaWYoaGl0WzFdID09PSBsYXN0SGl0WzFdICYmXHJcbiAgICAgICAgICAoaGl0WzBdICsgMSA9PT0gbGFzdEhpdFswXSB8fCBoaXRbMF0gLSAxID09PSBsYXN0SGl0WzBdKSkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBcInZlcnRpY2FsXCJcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihoaXRbMF0gPT09IGxhc3RIaXRbMF0gJiZcclxuICAgICAgICAgIChoaXRbMV0gPT09IGxhc3RIaXRbMV0gKyAxIHx8IGhpdFsxXSA9PT0gbGFzdEhpdFsxXSAtIDEpKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IFwiaG9yaXpvbnRhbFwiXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAjZW5jbG9zZVN1bmtTaGlwKCl7XHJcblxyXG4gICAgICAgIGxldCByaXZhbFN1bmtMaXN0ID0gWy4uLnRoaXMucml2YWxTdW5rTGlzdF1cclxuXHJcbiAgICAgICAgbGV0IHN1bmtTaGlwID0gcml2YWxTdW5rTGlzdC5wb3AoKVxyXG5cclxuICAgICAgICBmb3IobGV0IGNvb3JkaW5hdGUgb2Ygc3Vua1NoaXApIHtcclxuXHJcbiAgICAgICAgICAgIGxldCByb3cgPSBjb29yZGluYXRlWzBdXHJcbiAgICAgICAgICAgIGxldCBjb2wgPSBjb29yZGluYXRlWzFdXHJcblxyXG4gICAgICAgICAgICBsZXQgYXJlYSA9IFtbcm93IC0gMSwgY29sXSwgW3JvdyAtIDEsIGNvbCAtIDFdLCBbcm93IC0gMSwgY29sICsgMV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtyb3cgKyAxLCBjb2xdLCBbcm93ICsgMSwgY29sIC0gMV0sIFtyb3cgKyAxLCBjb2wgKyAxXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW3JvdywgY29sXSwgW3JvdywgY29sIC0gMV0sIFtyb3csIGNvbCArIDFdXVxyXG5cclxuICAgICAgICAgICAgZm9yKGxldCBtb3ZlIG9mIGFyZWEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihtb3ZlWzBdIDwgMCB8fCBtb3ZlWzFdIDwgMCB8fCBtb3ZlWzBdID4gKHRoaXMuZ2FtZUJvYXJkLnJvd1F1YW50aXR5IC0gMSkgfHwgXHJcbiAgICAgICAgICAgICAgICAgICBtb3ZlWzFdID4gKHRoaXMuZ2FtZUJvYXJkLmNvbHVtblF1YW50aXR5IC0gMSkpIGNvbnRpbnVlXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja01vdmVzKG1vdmUpXHJcbiAgICAgICAgICAgIH0gICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcblxyXG4vLyBBTEdPUklUSE1cclxuXHJcbi8vIDEgLSBDdWFuZG8gZW5jdWVudHJhIDEgYmFyY28sIHF1ZSB2YXlhIGNvbW8gbGFzIGFndWphcyBkZWwgcmVsb2ogZW4gY2FkYSB2ZXogcXVlIGxlIHBlZ2FcclxuLy8gMiAtIEN1YW5kbyBlbmN1ZW50cmEgcXVlIGVzIHZlcnRpY2FsIHUgaG9yaXpvbnRhbCwgc29sbyBhdGFjYXIgZW4gbGEgbGluZWEgcXVlIHZhICh5YSBubyBjb21vIGFndWphcyBkZWwgcmVsb2opXHJcbi8vIDMgLSBTZWd1aXIgYXNpIGhhc3RhIHF1ZSBlbCBiYXJjbyBlc3RlIGh1bmRpZG9cclxuLy8gNCAtIEVsaW1pbmFyIGFkeWFjZW5jaWFzIGRlbCBzaGlwIGRlIGxhIHBvc2liaWxpZGFkIGRlIGdvbHBlby4gIiwiZXhwb3J0IHtTaGlwfVxyXG5cclxuY2xhc3MgU2hpcCB7XHJcblxyXG4gICAgI2hpdENvdW50ZXIgPSAwXHJcbiAgICAjaXNTdW5rID0gZmFsc2VcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihsZW5ndGggPSBudWxsLCB0eXBlID0gbnVsbCl7XHJcbiAgICAgICAgdGhpcy5sZW5ndGggPSBsZW5ndGhcclxuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlXHJcbiAgICAgICAgdGhpcy5jb29yZGluYXRlcyA9IFtdXHJcbiAgICB9XHJcblxyXG4gICAgaGl0KCkge1xyXG5cclxuICAgICAgICB0aGlzLiNoaXRDb3VudGVyICsrXHJcbiAgICAgICAgdGhpcy4jc3Vua0NoZWNrKClcclxuICAgIH1cclxuXHJcbiAgICAjc3Vua0NoZWNrKCl7XHJcbiBcclxuICAgICAgICBpZih0aGlzLiNoaXRDb3VudGVyID09PSB0aGlzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLiNpc1N1bmsgPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBpc1N1bmsoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy4jaXNTdW5rXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge1BsYXllcn0gZnJvbSBcIi4vcGxheWVyXCJcclxuaW1wb3J0IHtTaGlwfSBmcm9tIFwiLi9zaGlwXCJcclxuXHJcbmV4cG9ydCB7c3RvcmVEYXRhLCByZXRyaWV2ZURhdGEsIHVwZGF0ZURhdGF9XHJcblxyXG5cclxuZnVuY3Rpb24gc3RvcmVEYXRhKG1vZGUsIHBsYXllck9uZSwgcGxheWVyVHdvKSB7XHJcblxyXG4gICAgbGV0IHN0YXRlID0ge1xyXG4gICAgICAgIG1vZGU6IG1vZGUsXHJcbiAgICAgICAgcGxheWVyczogW3BsYXllck9uZSwgcGxheWVyVHdvXVxyXG4gICAgfVxyXG5cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic3RhdGVcIiwgSlNPTi5zdHJpbmdpZnkoc3RhdGUpKSBcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlRGF0YShzdGF0ZSl7XHJcblxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzdGF0ZVwiLCBKU09OLnN0cmluZ2lmeShzdGF0ZSkpXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiByZXRyaWV2ZURhdGEoKSB7XHJcblxyXG4gICBsZXQgc3RhdGUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic3RhdGVcIikpXHJcblxyXG4gICBsZXQgcGxheWVyT25lICA9IG5ldyBQbGF5ZXIoKVxyXG4gICBsZXQgcGxheWVyVHdvICA9IG5ldyBQbGF5ZXIoKVxyXG4gICBsZXQgcGxheWVycyA9IFtwbGF5ZXJPbmUsIHBsYXllclR3b11cclxuXHJcblxyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHBsYXllcnMubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgcGxheWVyc1tpXS5zZXRQcm9wZXJ0aWVzKHN0YXRlLnBsYXllcnNbaV0pXHJcblxyXG4gICAgICAgIHBsYXllcnNbaV0uZ2FtZUJvYXJkLnNldFByb3BlcnRpZXMoc3RhdGUucGxheWVyc1tpXS5nYW1lQm9hcmQpXHJcblxyXG4gICAgICAgIGxldCBwbGF5ZXJTaGlwcyA9IHBsYXllcnNbaV0uZ2FtZUJvYXJkLnNoaXBzXHJcblxyXG5cclxuICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgcGxheWVyU2hpcHMubGVuZ3RoOyBqKyspIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBzaGlwSW5zdGFuY2UgPSBuZXcgU2hpcChwbGF5ZXJTaGlwc1tqXSlcclxuXHJcbiAgICAgICAgICAgIHNoaXBJbnN0YW5jZS5zZXRQcm9wZXJ0aWVzKHN0YXRlLnBsYXllcnNbaV0uZ2FtZUJvYXJkLnNoaXBzW2pdKVxyXG5cclxuICAgICAgICAgICAgLy8gcmVlbXBsYXpvIGxhIGNvcGlhIGRlIGRhdG9zIGRlbCBzaGlwIHF1ZSBlc3RhYmEgZW4gSlNPTiBwb3IgXHJcbiAgICAgICAgICAgIC8vIGVsIHNoaXAgaW5zdGFuc2lhZG8geSBhY3R1YWxpemFkby5cclxuICAgICAgICAgICAgcGxheWVyc1tpXS5nYW1lQm9hcmQuc2hpcHNbal0gPSBzaGlwSW5zdGFuY2VcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRlLnBsYXllcnMgPSBwbGF5ZXJzXHJcblxyXG4gICByZXR1cm4gc3RhdGVcclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9