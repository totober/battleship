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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/eye-white.svg */ "./images/eye-white.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/eye-slash-white.svg */ "./images/eye-slash-white.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/eye.svg */ "./images/eye.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../images/eye-slash.svg */ "./images/eye-slash.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../images/ship-steering.svg */ "./images/ship-steering.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../images/ship-steering-white.svg */ "./images/ship-steering-white.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `

/* /// RESET /// */

*,
*::before,
*::after {
  box-sizing: border-box;
}


* {
    margin: 0;
    padding: 0;
    font: inherit;
}

html:focus-within {
    scroll-behavior: smooth;
}

html, body {
    height: 100%;
}

body {
    text-rendering: optimizeSpeed;
    line-height: 1.5;
}

h1, h2, h3, h4, h5, h6, button, input, label {
    line-height: 1.1;
}

p, output {
    text-wrap: balance;
}

img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */

@media (prefers-reduced-motion: reduce) {
    html:focus-within {
     scroll-behavior: auto;
    }
    
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

/* /// ROOT /// */

:root {

/* FONTS FAMILY */
    --ff: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

/* FONTS WEIGHT */
    --fw-regular: 400;
    --fw-bold: 700;

/* FONTS SIZE */
  --fs-xs: clamp(0.6944rem, 0.6525rem + 0.2096vi, 0.9145rem); /* 11.11 a 14.63 px / 320 a 2000 vw */
  --fs-s: clamp(0.8333rem, 0.7599rem + 0.3674vi, 1.2191rem); /* 13.33 a 19.50 px / 320 a 2000 vw */
  --fs-m: clamp(1rem, 0.881rem + 0.5952vi, 1.625rem); /* 16 a 26 px / 320 a 2000 vw */
  --fs-l: clamp(1.2rem, 1.016rem + 0.9201vi, 2.1661rem); /* 19.20 a 34.66 px / 320 a 2000 vw */
  --fs-xl: clamp(1.44rem, 1.1643rem + 1.3785vi, 2.8874rem); /* 23.04 a 46.20 px / 320 a 2000 vw */
  --fs-xxl: clamp(1.728rem, 1.324rem + 2.02vi, 3.849rem); /* 27.65 a 61.58 px / 320 a 2000 vw */
  --fs-sl: clamp(2.0736rem, 1.4913rem + 2.9115vi, 5.1307rem); /* 33.18 a 82.09 px / 320 a 2000 vw */


/* SPACE */
  --space-xs: clamp(0.75rem, 0.7041rem + 0.2294vi, 1.0625rem); /* 12 a 17 px / 320 a 2500 vw */
  --space-s: clamp(1rem, 0.945rem + 0.2752vi, 1.375rem); /* 16 a 22 px / 320 a 2500 vw */
  --space-m: clamp(1.5rem, 1.4174rem + 0.4128vi, 2.0625rem); /* 24 a 33 px / 320 a 2500 vw */
  --space-l: clamp(2rem, 1.8899rem + 0.5505vi, 2.75rem); /* 32 a 44 px / 320 a 2500 vw */
  --space-xl: clamp(3rem, 2.8349rem + 0.8257vi, 4.125rem); /* 48 a 66 px / 320 a 2500 vw */

}

/* /// UTILITY CLASSES /// */

.theme-dark {
    --bgc: linear-gradient(to left, #000000, #2D3436);
    --color-primary: rgb(30, 30, 30);
    --color-secondary: rgba(52, 52, 52, 0.9);
    --color-contrast: rgb(237, 234, 222) ; /* #EDEADE */
    --color-shadow: rgb(211, 211, 211);
    /* --filter: invert(92%) sepia(11%) saturate(399%) hue-rotate(331deg) brightness(108%) contrast(86%) */
}

.theme-light {
    --bgc: linear-gradient(to left, #ffffff, #d2cbc9);
    --color-primary: rgb(225,225,225);
    --color-secondary: rgba(203, 203, 203, 0.9);
    --color-contrast: rgb(18, 21, 33);
    --color-shadow: rgb(44, 44, 44);
    /* --filter: invert(6%) sepia(15%) saturate(1801%) hue-rotate(191deg) brightness(97%) contrast(95%); */
}

.fs-xs {
    font-size: var(--fs-xs);
}

.fs-s {
    font-size: var(--fs-s);
}

.fs-m {
    font-size: var(--fs-m);
}

.fs-l {
    font-size: var(--fs-l);
}

.fs-xl {
    font-size: var(--fs-xl);
}

.fs-xxl {
    font-size: var(--fs-xxl);
}

@media (min-width: 110rem) {

    :root{

        --space-xs: clamp(1rem, 0.945rem + 0.2752vi, 1.375rem); /* 16 a 22 px / 320 a 2500 vw */
        --space-s: clamp(1.5rem, 1.4174rem + 0.4128vi, 2.0625rem); /* 24 a 33 px / 320 a 2500 vw */
        --space-m: clamp(2rem, 1.8899rem + 0.5505vi, 2.75rem); /* 32 a 44 px / 320 a 2500 vw */
        --space-l: clamp(3rem, 2.8349rem + 0.8257vi, 4.125rem); /* 48 a 66 px / 320 a 2500 vw */
    }

    .fs-xs {
        font-size: var(--fs-s);
    }
    
    .fs-s {
        font-size: var(--fs-m);
    }
    
    .fs-m {
        font-size: var(--fs-l);
    }
    
    .fs-l {
        font-size: var(--fs-xl);
    }
    
    .fs-xl {
        font-size: var(--fs-xxl);
    }

    .fs-xxl {
        font-size: var(--fs-sl);
    }
}


.fw-regular {
    font-weight: var(--fw-regular);
}

.fw-bold {
    font-weight: var(--fw-bold);
}

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

/* .container {
    --max-width: 1100px;
    --margin: 1rem;

    width: min(var(--max-width), 100% - (var(--margin) * 2));
    margin-inline: auto;
} */


@media (min-width: 50em) {
    .even-columns{
        grid-auto-flow: column;
        grid-auto-columns: 1fr;
    }
}

/* /// BODY /// */

body{
    font-family: var(--ff);
    background-image: var(--bgc);
    display: grid;
    grid-template-rows: auto 1fr auto;
}

*:disabled {
    background-color: dimgrey;
    opacity: 0.4;
    pointer-events: none;
    
}

/* /// ARTICLES /// */

h1 {
    letter-spacing: 5px;
    cursor: default;
}

article {
    background-color: var(--color-primary);
    border-radius: 5px;
    color: var(--color-contrast);

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
    padding: var(--space-m)
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
    padding: var(--space-m);
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

article.mode-selection > :first-child {
    border-bottom: 2px solid var(--color-contrast);
}


/* CHILDREN ARTICLES */


article.child div {

    display: flex;
    flex-direction: column;
    gap: .75rem;
    border-bottom: 1px solid var(--color-contrast);
    padding: var(--space-s);
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
    color: var(--color-contrast);
    display: flex;
    justify-content: center;
}

article.game-over section.replay {
    border-bottom: 1px solid var(--color-contrast)
}


input {
    padding: 5px 15px;
    border-radius: 50px;
    outline: none;
    border: 1px solid var(--color-contrast);
}


button {

    background-color: var(--color-contrast);
    color: var(--color-primary);
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px solid var(--color-contrast);
    box-shadow: 2px 2px 2px var(--color-shadow);
    transition: ease-in-out 0.3s;
}

button:active {

    transform: scale(0.95);
    box-shadow: 1px 1px 3px var(--color-shadow);
}


/* /// HEADER /// */

header div{

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

}

header button, 
button.cover {

    margin: 1rem;
    width: var(--space-xl);
    border: none;
    background-color: transparent;
    box-shadow: none;

    transition: ease-in-out 0.1s;
}

header button:active,
button.cover {

    transform: scale(0.8);
    box-shadow: none;
} 

header h1 {
    color: var(--color-contrast);
    margin-bottom: var(--space-m);
}

header h3 {
    color: var(--color-contrast);
}

img[data-hidden="true"] {
    display: none;
}


/* /// MAIN /// */


@media (min-width: 52rem) {

    main {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    p, output {
        text-wrap: wrap;
    }
}

section {
    display: grid;
    grid-template-rows: auto 1fr auto;
    margin: 1rem;
    padding: 1rem;
    background-color: var(--color-primary);
}

section > button.cover {
    margin-inline-end: auto;
    margin-inline-start: 1rem;
    margin-block: 0;
}

body.theme-dark button.cover img:nth-child(1){

    content: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

body.theme-dark button.cover img:nth-child(2){

    content: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}


body.theme-light button.cover img:nth-child(1){

    content: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
}

body.theme-light button.cover img:nth-child(2){

    content: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
}

.board {
    display: grid;
    grid-template-rows: repeat(10, 1fr);
    grid-template-columns:  repeat(10, 1fr);

    margin: 1rem;
}

.board div {
    border: 1px solid var(--color-secondary);
    aspect-ratio: 1;
    border: 1px solid var(--color-contrast);
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
    gap: .9rem;
    margin: 1rem;
    padding: 1rem;
}


.options div {

    display: flex;
    gap: 1rem;
    align-items: center;
}

.options button.random{

    border-radius: 50%;
    width: var(--space-xl);
    padding: 0;
}

body.theme-dark button.random img {
    content: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
}

body.theme-light button.random img {
    content: url(${___CSS_LOADER_URL_REPLACEMENT_5___});
}

.options p, output {

    color: var(--color-contrast);

}


/* /// FOOTER /// */

footer {
    text-align: center;
    color: var(--color-contrast);
    padding: var(--space-m);
}


`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["\r\n\r\n/* /// RESET /// */\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    font: inherit;\r\n}\r\n\r\nhtml:focus-within {\r\n    scroll-behavior: smooth;\r\n}\r\n\r\nhtml, body {\r\n    height: 100%;\r\n}\r\n\r\nbody {\r\n    text-rendering: optimizeSpeed;\r\n    line-height: 1.5;\r\n}\r\n\r\nh1, h2, h3, h4, h5, h6, button, input, label {\r\n    line-height: 1.1;\r\n}\r\n\r\np, output {\r\n    text-wrap: balance;\r\n}\r\n\r\nimg, picture, video, canvas, svg {\r\n    display: block;\r\n    max-width: 100%;\r\n}\r\n\r\n/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */\r\n\r\n@media (prefers-reduced-motion: reduce) {\r\n    html:focus-within {\r\n     scroll-behavior: auto;\r\n    }\r\n    \r\n    *,\r\n    *::before,\r\n    *::after {\r\n      animation-duration: 0.01ms !important;\r\n      animation-iteration-count: 1 !important;\r\n      transition-duration: 0.01ms !important;\r\n      scroll-behavior: auto !important;\r\n    }\r\n  }\r\n\r\n/* /// ROOT /// */\r\n\r\n:root {\r\n\r\n/* FONTS FAMILY */\r\n    --ff: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n\r\n/* FONTS WEIGHT */\r\n    --fw-regular: 400;\r\n    --fw-bold: 700;\r\n\r\n/* FONTS SIZE */\r\n  --fs-xs: clamp(0.6944rem, 0.6525rem + 0.2096vi, 0.9145rem); /* 11.11 a 14.63 px / 320 a 2000 vw */\r\n  --fs-s: clamp(0.8333rem, 0.7599rem + 0.3674vi, 1.2191rem); /* 13.33 a 19.50 px / 320 a 2000 vw */\r\n  --fs-m: clamp(1rem, 0.881rem + 0.5952vi, 1.625rem); /* 16 a 26 px / 320 a 2000 vw */\r\n  --fs-l: clamp(1.2rem, 1.016rem + 0.9201vi, 2.1661rem); /* 19.20 a 34.66 px / 320 a 2000 vw */\r\n  --fs-xl: clamp(1.44rem, 1.1643rem + 1.3785vi, 2.8874rem); /* 23.04 a 46.20 px / 320 a 2000 vw */\r\n  --fs-xxl: clamp(1.728rem, 1.324rem + 2.02vi, 3.849rem); /* 27.65 a 61.58 px / 320 a 2000 vw */\r\n  --fs-sl: clamp(2.0736rem, 1.4913rem + 2.9115vi, 5.1307rem); /* 33.18 a 82.09 px / 320 a 2000 vw */\r\n\r\n\r\n/* SPACE */\r\n  --space-xs: clamp(0.75rem, 0.7041rem + 0.2294vi, 1.0625rem); /* 12 a 17 px / 320 a 2500 vw */\r\n  --space-s: clamp(1rem, 0.945rem + 0.2752vi, 1.375rem); /* 16 a 22 px / 320 a 2500 vw */\r\n  --space-m: clamp(1.5rem, 1.4174rem + 0.4128vi, 2.0625rem); /* 24 a 33 px / 320 a 2500 vw */\r\n  --space-l: clamp(2rem, 1.8899rem + 0.5505vi, 2.75rem); /* 32 a 44 px / 320 a 2500 vw */\r\n  --space-xl: clamp(3rem, 2.8349rem + 0.8257vi, 4.125rem); /* 48 a 66 px / 320 a 2500 vw */\r\n\r\n}\r\n\r\n/* /// UTILITY CLASSES /// */\r\n\r\n.theme-dark {\r\n    --bgc: linear-gradient(to left, #000000, #2D3436);\r\n    --color-primary: rgb(30, 30, 30);\r\n    --color-secondary: rgba(52, 52, 52, 0.9);\r\n    --color-contrast: rgb(237, 234, 222) ; /* #EDEADE */\r\n    --color-shadow: rgb(211, 211, 211);\r\n    /* --filter: invert(92%) sepia(11%) saturate(399%) hue-rotate(331deg) brightness(108%) contrast(86%) */\r\n}\r\n\r\n.theme-light {\r\n    --bgc: linear-gradient(to left, #ffffff, #d2cbc9);\r\n    --color-primary: rgb(225,225,225);\r\n    --color-secondary: rgba(203, 203, 203, 0.9);\r\n    --color-contrast: rgb(18, 21, 33);\r\n    --color-shadow: rgb(44, 44, 44);\r\n    /* --filter: invert(6%) sepia(15%) saturate(1801%) hue-rotate(191deg) brightness(97%) contrast(95%); */\r\n}\r\n\r\n.fs-xs {\r\n    font-size: var(--fs-xs);\r\n}\r\n\r\n.fs-s {\r\n    font-size: var(--fs-s);\r\n}\r\n\r\n.fs-m {\r\n    font-size: var(--fs-m);\r\n}\r\n\r\n.fs-l {\r\n    font-size: var(--fs-l);\r\n}\r\n\r\n.fs-xl {\r\n    font-size: var(--fs-xl);\r\n}\r\n\r\n.fs-xxl {\r\n    font-size: var(--fs-xxl);\r\n}\r\n\r\n@media (min-width: 110rem) {\r\n\r\n    :root{\r\n\r\n        --space-xs: clamp(1rem, 0.945rem + 0.2752vi, 1.375rem); /* 16 a 22 px / 320 a 2500 vw */\r\n        --space-s: clamp(1.5rem, 1.4174rem + 0.4128vi, 2.0625rem); /* 24 a 33 px / 320 a 2500 vw */\r\n        --space-m: clamp(2rem, 1.8899rem + 0.5505vi, 2.75rem); /* 32 a 44 px / 320 a 2500 vw */\r\n        --space-l: clamp(3rem, 2.8349rem + 0.8257vi, 4.125rem); /* 48 a 66 px / 320 a 2500 vw */\r\n    }\r\n\r\n    .fs-xs {\r\n        font-size: var(--fs-s);\r\n    }\r\n    \r\n    .fs-s {\r\n        font-size: var(--fs-m);\r\n    }\r\n    \r\n    .fs-m {\r\n        font-size: var(--fs-l);\r\n    }\r\n    \r\n    .fs-l {\r\n        font-size: var(--fs-xl);\r\n    }\r\n    \r\n    .fs-xl {\r\n        font-size: var(--fs-xxl);\r\n    }\r\n\r\n    .fs-xxl {\r\n        font-size: var(--fs-sl);\r\n    }\r\n}\r\n\r\n\r\n.fw-regular {\r\n    font-weight: var(--fw-regular);\r\n}\r\n\r\n.fw-bold {\r\n    font-weight: var(--fw-bold);\r\n}\r\n\r\n.blur {\r\n\r\n    filter: blur(20px);\r\n    pointer-events: none;\r\n}\r\n\r\n.unable {\r\n    pointer-events: none;\r\n}\r\n\r\n#close {\r\n\r\n    animation: fade-out 0.7s ease-out;\r\n    display: none;\r\n}\r\n\r\n/* .container {\r\n    --max-width: 1100px;\r\n    --margin: 1rem;\r\n\r\n    width: min(var(--max-width), 100% - (var(--margin) * 2));\r\n    margin-inline: auto;\r\n} */\r\n\r\n\r\n@media (min-width: 50em) {\r\n    .even-columns{\r\n        grid-auto-flow: column;\r\n        grid-auto-columns: 1fr;\r\n    }\r\n}\r\n\r\n/* /// BODY /// */\r\n\r\nbody{\r\n    font-family: var(--ff);\r\n    background-image: var(--bgc);\r\n    display: grid;\r\n    grid-template-rows: auto 1fr auto;\r\n}\r\n\r\n*:disabled {\r\n    background-color: dimgrey;\r\n    opacity: 0.4;\r\n    pointer-events: none;\r\n    \r\n}\r\n\r\n/* /// ARTICLES /// */\r\n\r\nh1 {\r\n    letter-spacing: 5px;\r\n    cursor: default;\r\n}\r\n\r\narticle {\r\n    background-color: var(--color-primary);\r\n    border-radius: 5px;\r\n    color: var(--color-contrast);\r\n\r\n    /* Esto es lo necesario para que el pop-up quede en el medio */\r\n    position: fixed;\r\n    left: 50%;\r\n    top: 50%;\r\n    transform: translate(-50%, -50%);\r\n    /* hasta aca */\r\n\r\n    animation: fade-in 0.7s ease-out;\r\n}\r\n\r\narticle.start,\r\narticle.child {\r\n    padding: var(--space-m)\r\n}\r\n\r\n\r\n@keyframes fade-in {\r\n    0% {\r\n      opacity: 0;\r\n      transform: translate(-50%, -50%) scaleY(0);\r\n      display: none;\r\n    }\r\n  \r\n    100% {\r\n      opacity: 1;\r\n      transform: translate(-50%, -50%) scaleY(1);\r\n      display: block;\r\n    }\r\n  }\r\n  \r\n  @keyframes fade-out {\r\n    0% {\r\n      opacity: 1;\r\n      transform: translate(-50%, -50%) scaleY(1);\r\n      display: block;\r\n    }\r\n  \r\n    100% {\r\n      opacity: 0;\r\n      transform: translate(-50%, -50%) scaleY(0);\r\n      display: none;\r\n    }\r\n}\r\n\r\narticle section,\r\narticle div,\r\narticle button {\r\n\r\n    cursor: pointer;\r\n}\r\n\r\narticle section {\r\n\r\n    text-align: center;\r\n    padding: var(--space-m);\r\n    margin-block: 0;\r\n}\r\n\r\narticle button {\r\n\r\n    margin: auto;\r\n}\r\n\r\narticle section p {\r\n\r\n    transition: ease-in-out 0.4s;\r\n}\r\n\r\narticle section:hover p {\r\n\r\n    transform: scale(1.15);\r\n}\r\n\r\narticle.mode-selection > :first-child {\r\n    border-bottom: 2px solid var(--color-contrast);\r\n}\r\n\r\n\r\n/* CHILDREN ARTICLES */\r\n\r\n\r\narticle.child div {\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: .75rem;\r\n    border-bottom: 1px solid var(--color-contrast);\r\n    padding: var(--space-s);\r\n}\r\n\r\narticle.CpuMode.child div {\r\n    border-bottom: none;\r\n}\r\n\r\narticle.child fieldset div {\r\n\r\n    flex-direction: row;\r\n}\r\n\r\narticle.child div.buttons {\r\n\r\n    flex-direction: row;\r\n    border-bottom: none;\r\n}\r\n\r\narticle.game-over output,\r\narticle.game-over h2 {\r\n    color: var(--color-contrast);\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\narticle.game-over section.replay {\r\n    border-bottom: 1px solid var(--color-contrast)\r\n}\r\n\r\n\r\ninput {\r\n    padding: 5px 15px;\r\n    border-radius: 50px;\r\n    outline: none;\r\n    border: 1px solid var(--color-contrast);\r\n}\r\n\r\n\r\nbutton {\r\n\r\n    background-color: var(--color-contrast);\r\n    color: var(--color-primary);\r\n    padding: 5px 10px;\r\n    border-radius: 5px;\r\n    border: 1px solid var(--color-contrast);\r\n    box-shadow: 2px 2px 2px var(--color-shadow);\r\n    transition: ease-in-out 0.3s;\r\n}\r\n\r\nbutton:active {\r\n\r\n    transform: scale(0.95);\r\n    box-shadow: 1px 1px 3px var(--color-shadow);\r\n}\r\n\r\n\r\n/* /// HEADER /// */\r\n\r\nheader div{\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n}\r\n\r\nheader button, \r\nbutton.cover {\r\n\r\n    margin: 1rem;\r\n    width: var(--space-xl);\r\n    border: none;\r\n    background-color: transparent;\r\n    box-shadow: none;\r\n\r\n    transition: ease-in-out 0.1s;\r\n}\r\n\r\nheader button:active,\r\nbutton.cover {\r\n\r\n    transform: scale(0.8);\r\n    box-shadow: none;\r\n} \r\n\r\nheader h1 {\r\n    color: var(--color-contrast);\r\n    margin-bottom: var(--space-m);\r\n}\r\n\r\nheader h3 {\r\n    color: var(--color-contrast);\r\n}\r\n\r\nimg[data-hidden=\"true\"] {\r\n    display: none;\r\n}\r\n\r\n\r\n/* /// MAIN /// */\r\n\r\n\r\n@media (min-width: 52rem) {\r\n\r\n    main {\r\n        display: grid;\r\n        grid-template-columns: 1fr 1fr;\r\n    }\r\n\r\n    p, output {\r\n        text-wrap: wrap;\r\n    }\r\n}\r\n\r\nsection {\r\n    display: grid;\r\n    grid-template-rows: auto 1fr auto;\r\n    margin: 1rem;\r\n    padding: 1rem;\r\n    background-color: var(--color-primary);\r\n}\r\n\r\nsection > button.cover {\r\n    margin-inline-end: auto;\r\n    margin-inline-start: 1rem;\r\n    margin-block: 0;\r\n}\r\n\r\nbody.theme-dark button.cover img:nth-child(1){\r\n\r\n    content: url(../images/eye-white.svg);\r\n}\r\n\r\nbody.theme-dark button.cover img:nth-child(2){\r\n\r\n    content: url(../images/eye-slash-white.svg);\r\n}\r\n\r\n\r\nbody.theme-light button.cover img:nth-child(1){\r\n\r\n    content: url(../images/eye.svg);\r\n}\r\n\r\nbody.theme-light button.cover img:nth-child(2){\r\n\r\n    content: url(../images/eye-slash.svg);\r\n}\r\n\r\n.board {\r\n    display: grid;\r\n    grid-template-rows: repeat(10, 1fr);\r\n    grid-template-columns:  repeat(10, 1fr);\r\n\r\n    margin: 1rem;\r\n}\r\n\r\n.board div {\r\n    border: 1px solid var(--color-secondary);\r\n    aspect-ratio: 1;\r\n    border: 1px solid var(--color-contrast);\r\n}\r\n\r\n.board#uncover div.ship {\r\n    border: 1px solid red;\r\n    background-color: white;\r\n\r\n}\r\n\r\n.board div.hit,\r\n.board div.miss {\r\n\r\n    cursor: not-allowed;\r\n}\r\n\r\n.board div.hit:active,\r\n.board div.miss:active {\r\n\r\n    background-color: rgba(173, 173, 173, 0.5);\r\n}\r\n\r\n.board div.hit {\r\n    border: 1px solid red;\r\n    background-color: red;\r\n\r\n}\r\n\r\n.board div.miss {\r\n    border: 1px solid blue;\r\n    background-color: lightblue;\r\n\r\n}\r\n\r\n.board div.hit.sunk {\r\n    border: 1px solid rgb(91, 2, 2,0.7);\r\n    background-color: rgb(91, 2, 2, 0.7);\r\n\r\n}\r\n\r\n.options {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: .9rem;\r\n    margin: 1rem;\r\n    padding: 1rem;\r\n}\r\n\r\n\r\n.options div {\r\n\r\n    display: flex;\r\n    gap: 1rem;\r\n    align-items: center;\r\n}\r\n\r\n.options button.random{\r\n\r\n    border-radius: 50%;\r\n    width: var(--space-xl);\r\n    padding: 0;\r\n}\r\n\r\nbody.theme-dark button.random img {\r\n    content: url(../images/ship-steering.svg);\r\n}\r\n\r\nbody.theme-light button.random img {\r\n    content: url(../images/ship-steering-white.svg);\r\n}\r\n\r\n.options p, output {\r\n\r\n    color: var(--color-contrast);\r\n\r\n}\r\n\r\n\r\n/* /// FOOTER /// */\r\n\r\nfooter {\r\n    text-align: center;\r\n    color: var(--color-contrast);\r\n    padding: var(--space-m);\r\n}\r\n\r\n\r\n"],"sourceRoot":""}]);
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
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
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
    body: document.querySelector("body"),
    boards: Array.from(document.querySelectorAll(".board")),
    dialogStart: document.querySelector("article"),
    dialogMode: document.querySelector("article.mode-selection"),
    dialogPlayerMode: document.querySelector("article.PlayerMode"),
    dialogCpuMode: document.querySelector("article.CpuMode"),
    dialogGameOver: document.querySelector("article.game-over"),
    btnCancel: Array.from(document.querySelectorAll("button.cancel")),
    btnOk: Array.from(document.querySelectorAll("button.ok")),
    btnTheme: document.querySelector(".theme"),
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
        this.btnTheme.addEventListener("click", toggleTheme);
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
    elements.btnCoverArr[whichBoard].firstElementChild.dataset.hidden = true
    elements.btnCoverArr[whichBoard].lastElementChild.dataset.hidden = false

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
    elements.btnCoverArr[_index__WEBPACK_IMPORTED_MODULE_5__.GAME.getPassivePlayerRef()].firstElementChild.dataset.hidden = true
    elements.btnCoverArr[_index__WEBPACK_IMPORTED_MODULE_5__.GAME.getPassivePlayerRef()].lastElementChild.dataset.hidden = false

    elements.btnCoverArr[_index__WEBPACK_IMPORTED_MODULE_5__.GAME.getActivePlayerRef()].disabled = false

    if(_index__WEBPACK_IMPORTED_MODULE_5__.GAME.getMode() === "CpuMode") elements.btnCoverArr[1].disabled = true
}


function toggleCoverBoard(e){

    let whichBoard = e.currentTarget.parentElement.dataset.board
    let board = elements.boards[whichBoard]

    toggleCoverIcon(whichBoard)

    if(board.hasAttribute("id")) board.removeAttribute("id")
    else board.setAttribute("id", "uncover")
}

function toggleCoverIcon(whichPlayer){

    let btn = elements.btnCoverArr[whichPlayer]

    btn.firstElementChild.dataset.hidden === "true" ? 
    btn.firstElementChild.dataset.hidden = "false" : btn.firstElementChild.dataset.hidden = "true";

    btn.lastElementChild.dataset.hidden === "true" ? 
    btn.lastElementChild.dataset.hidden = "false" : btn.lastElementChild.dataset.hidden = "true";
}


function cpuReady() {

    if(_index__WEBPACK_IMPORTED_MODULE_5__.GAME.getMode() !== "CpuMode") return

    elements.btnReadyArr[1].dataset.ready = true
    elements.btnReadyArr[1].disabled = true
    elements.btnRandomArr[1].disabled = true
    elements.btnCoverArr[1].disabled = true
    elements.btnCoverArr[1].firstElementChild.dataset.hidden = true
    elements.btnCoverArr[1].lastElementChild.dataset.hidden = false

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

function toggleTheme(e){

    let target = e.currentTarget

    if(elements.body.className === "theme-dark") {

        elements.body.className = "theme-light"
        target.firstElementChild.dataset.hidden = true
        target.lastElementChild.dataset.hidden = false

    } else if(elements.body.className === "theme-light") {

        elements.body.className = "theme-dark"
        target.firstElementChild.dataset.hidden = false
        target.lastElementChild.dataset.hidden = true
    }
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

    setRivalHitList(rivalHitList) {

        this.rivalHitList = rivalHitList
    }

    setRivalSunkShips(rivalSunkList){

        if(rivalSunkList.length === this.rivalSunkList.length) return

        this.rivalSunkList = rivalSunkList
        this.direction = null

        if(this.difficulty === "hard") this.#encloseSunkShip() 
    }

    attack(){

        let square = this.#moveAlgorithm()

        if(square !== null) return square

        square = this.#randomSquare()

            while(this.checkMoves(square)) square = this.#randomSquare()

        return square
    }

    #randomSquare(){

        let randomRow =  Math.floor(Math.random() * 10)
        let randomCol =  Math.floor(Math.random() * 10)

        let square = [randomRow, randomCol]

        return square
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

/***/ }),

/***/ "./images/eye-slash-white.svg":
/*!************************************!*\
  !*** ./images/eye-slash-white.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "49173bde350381e2db19.svg";

/***/ }),

/***/ "./images/eye-slash.svg":
/*!******************************!*\
  !*** ./images/eye-slash.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b0908e22a02f4d6e2db2.svg";

/***/ }),

/***/ "./images/eye-white.svg":
/*!******************************!*\
  !*** ./images/eye-white.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "60726836328ecbcc806d.svg";

/***/ }),

/***/ "./images/eye.svg":
/*!************************!*\
  !*** ./images/eye.svg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e8983346820bbc2537b2.svg";

/***/ }),

/***/ "./images/ship-steering-white.svg":
/*!****************************************!*\
  !*** ./images/ship-steering-white.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e12953511c4d7bc3d93e.svg";

/***/ }),

/***/ "./images/ship-steering.svg":
/*!**********************************!*\
  !*** ./images/ship-steering.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1f80502ddeff1037268f.svg";

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
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
/******/ 			"main": 0
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHNIQUEwQztBQUN0Riw0Q0FBNEMsa0lBQWdEO0FBQzVGLDRDQUE0QywwR0FBb0M7QUFDaEYsNENBQTRDLHNIQUEwQztBQUN0Riw0Q0FBNEMsOEhBQThDO0FBQzFGLDRDQUE0QywwSUFBb0Q7QUFDaEcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RDtBQUM5RCw2REFBNkQ7QUFDN0Qsc0RBQXNEO0FBQ3RELHlEQUF5RDtBQUN6RCw0REFBNEQ7QUFDNUQsMERBQTBEO0FBQzFELDhEQUE4RDtBQUM5RDtBQUNBO0FBQ0E7QUFDQSwrREFBK0Q7QUFDL0QseURBQXlEO0FBQ3pELDZEQUE2RDtBQUM3RCx5REFBeUQ7QUFDekQsMkRBQTJEO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlHQUF5RztBQUN6RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0U7QUFDaEUsbUVBQW1FO0FBQ25FLCtEQUErRDtBQUMvRCxnRUFBZ0U7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLG1DQUFtQztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixtQ0FBbUM7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixtQ0FBbUM7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsbUNBQW1DO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLG1DQUFtQztBQUN0RDtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsbUNBQW1DO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sNkVBQTZFLGFBQWEsUUFBUSxZQUFZLFFBQVEsS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxhQUFhLE1BQU0sS0FBSyxZQUFZLE9BQU8sT0FBTyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxhQUFhLE9BQU8sWUFBWSxhQUFhLGFBQWEsWUFBWSxZQUFZLFdBQVcsd0JBQXdCLHlCQUF5Qix5QkFBeUIseUJBQXlCLHlCQUF5Qix5QkFBeUIsMkJBQTJCLFdBQVcsd0JBQXdCLHlCQUF5Qix5QkFBeUIseUJBQXlCLDBCQUEwQixPQUFPLGFBQWEsTUFBTSxZQUFZLGFBQWEsYUFBYSx1QkFBdUIsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sTUFBTSx3QkFBd0IseUJBQXlCLHlCQUF5Qix5QkFBeUIsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLFdBQVcsT0FBTyxVQUFVLE9BQU8sS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLE1BQU0sYUFBYSxNQUFNLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxhQUFhLE9BQU8sYUFBYSxNQUFNLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGNBQWMsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLFlBQVksWUFBWSxPQUFPLE1BQU0sS0FBSyxPQUFPLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsS0FBSyxNQUFNLFFBQVEsVUFBVSxPQUFPLE1BQU0sWUFBWSxhQUFhLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksUUFBUSxjQUFjLE9BQU8sVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFFBQVEsTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsUUFBUSxhQUFhLE9BQU8sVUFBVSxZQUFZLGFBQWEsY0FBYyxPQUFPLE9BQU8sVUFBVSxZQUFZLFdBQVcsWUFBWSxjQUFjLGFBQWEsT0FBTyxPQUFPLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFFBQVEsY0FBYyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFlBQVksUUFBUSxNQUFNLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxjQUFjLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGNBQWMsT0FBTyxPQUFPLFlBQVksT0FBTyxPQUFPLFlBQVksT0FBTyxLQUFLLFlBQVksY0FBYyxPQUFPLEtBQUssWUFBWSxjQUFjLE9BQU8sS0FBSyxZQUFZLGNBQWMsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxRQUFRLE1BQU0sVUFBVSxVQUFVLFlBQVksT0FB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixpREFBUztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixpREFBUztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDek9hO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0IrQjtBQUNKO0FBQzNCO0FBQzRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDJDQUFNO0FBQzlCLHdCQUF3QiwyQ0FBTTtBQUM5QjtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsb0JBQW9CO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsd0JBQXdCO0FBQy9DO0FBQ0EsbUNBQW1DLHVDQUFJO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3hEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2V5ZS13aGl0ZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvZXllLXNsYXNoLXdoaXRlLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9leWUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2V5ZS1zbGFzaC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvc2hpcC1zdGVlcmluZy5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvc2hpcC1zdGVlcmluZy13aGl0ZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgXHJcblxyXG4vKiAvLy8gUkVTRVQgLy8vICovXHJcblxyXG4qLFxyXG4qOjpiZWZvcmUsXHJcbio6OmFmdGVyIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5cclxuKiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZm9udDogaW5oZXJpdDtcclxufVxyXG5cclxuaHRtbDpmb2N1cy13aXRoaW4ge1xyXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcbn1cclxuXHJcbmh0bWwsIGJvZHkge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZVNwZWVkO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxufVxyXG5cclxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgYnV0dG9uLCBpbnB1dCwgbGFiZWwge1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMTtcclxufVxyXG5cclxucCwgb3V0cHV0IHtcclxuICAgIHRleHQtd3JhcDogYmFsYW5jZTtcclxufVxyXG5cclxuaW1nLCBwaWN0dXJlLCB2aWRlbywgY2FudmFzLCBzdmcge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi8qIFJlbW92ZSBhbGwgYW5pbWF0aW9ucywgdHJhbnNpdGlvbnMgYW5kIHNtb290aCBzY3JvbGwgZm9yIHBlb3BsZSB0aGF0IHByZWZlciBub3QgdG8gc2VlIHRoZW0gKi9cclxuXHJcbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XHJcbiAgICBodG1sOmZvY3VzLXdpdGhpbiB7XHJcbiAgICAgc2Nyb2xsLWJlaGF2aW9yOiBhdXRvO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAqLFxyXG4gICAgKjo6YmVmb3JlLFxyXG4gICAgKjo6YWZ0ZXIge1xyXG4gICAgICBhbmltYXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xyXG4gICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxICFpbXBvcnRhbnQ7XHJcbiAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xyXG4gICAgICBzY3JvbGwtYmVoYXZpb3I6IGF1dG8gIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcblxyXG4vKiAvLy8gUk9PVCAvLy8gKi9cclxuXHJcbjpyb290IHtcclxuXHJcbi8qIEZPTlRTIEZBTUlMWSAqL1xyXG4gICAgLS1mZjogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcblxyXG4vKiBGT05UUyBXRUlHSFQgKi9cclxuICAgIC0tZnctcmVndWxhcjogNDAwO1xyXG4gICAgLS1mdy1ib2xkOiA3MDA7XHJcblxyXG4vKiBGT05UUyBTSVpFICovXHJcbiAgLS1mcy14czogY2xhbXAoMC42OTQ0cmVtLCAwLjY1MjVyZW0gKyAwLjIwOTZ2aSwgMC45MTQ1cmVtKTsgLyogMTEuMTEgYSAxNC42MyBweCAvIDMyMCBhIDIwMDAgdncgKi9cclxuICAtLWZzLXM6IGNsYW1wKDAuODMzM3JlbSwgMC43NTk5cmVtICsgMC4zNjc0dmksIDEuMjE5MXJlbSk7IC8qIDEzLjMzIGEgMTkuNTAgcHggLyAzMjAgYSAyMDAwIHZ3ICovXHJcbiAgLS1mcy1tOiBjbGFtcCgxcmVtLCAwLjg4MXJlbSArIDAuNTk1MnZpLCAxLjYyNXJlbSk7IC8qIDE2IGEgMjYgcHggLyAzMjAgYSAyMDAwIHZ3ICovXHJcbiAgLS1mcy1sOiBjbGFtcCgxLjJyZW0sIDEuMDE2cmVtICsgMC45MjAxdmksIDIuMTY2MXJlbSk7IC8qIDE5LjIwIGEgMzQuNjYgcHggLyAzMjAgYSAyMDAwIHZ3ICovXHJcbiAgLS1mcy14bDogY2xhbXAoMS40NHJlbSwgMS4xNjQzcmVtICsgMS4zNzg1dmksIDIuODg3NHJlbSk7IC8qIDIzLjA0IGEgNDYuMjAgcHggLyAzMjAgYSAyMDAwIHZ3ICovXHJcbiAgLS1mcy14eGw6IGNsYW1wKDEuNzI4cmVtLCAxLjMyNHJlbSArIDIuMDJ2aSwgMy44NDlyZW0pOyAvKiAyNy42NSBhIDYxLjU4IHB4IC8gMzIwIGEgMjAwMCB2dyAqL1xyXG4gIC0tZnMtc2w6IGNsYW1wKDIuMDczNnJlbSwgMS40OTEzcmVtICsgMi45MTE1dmksIDUuMTMwN3JlbSk7IC8qIDMzLjE4IGEgODIuMDkgcHggLyAzMjAgYSAyMDAwIHZ3ICovXHJcblxyXG5cclxuLyogU1BBQ0UgKi9cclxuICAtLXNwYWNlLXhzOiBjbGFtcCgwLjc1cmVtLCAwLjcwNDFyZW0gKyAwLjIyOTR2aSwgMS4wNjI1cmVtKTsgLyogMTIgYSAxNyBweCAvIDMyMCBhIDI1MDAgdncgKi9cclxuICAtLXNwYWNlLXM6IGNsYW1wKDFyZW0sIDAuOTQ1cmVtICsgMC4yNzUydmksIDEuMzc1cmVtKTsgLyogMTYgYSAyMiBweCAvIDMyMCBhIDI1MDAgdncgKi9cclxuICAtLXNwYWNlLW06IGNsYW1wKDEuNXJlbSwgMS40MTc0cmVtICsgMC40MTI4dmksIDIuMDYyNXJlbSk7IC8qIDI0IGEgMzMgcHggLyAzMjAgYSAyNTAwIHZ3ICovXHJcbiAgLS1zcGFjZS1sOiBjbGFtcCgycmVtLCAxLjg4OTlyZW0gKyAwLjU1MDV2aSwgMi43NXJlbSk7IC8qIDMyIGEgNDQgcHggLyAzMjAgYSAyNTAwIHZ3ICovXHJcbiAgLS1zcGFjZS14bDogY2xhbXAoM3JlbSwgMi44MzQ5cmVtICsgMC44MjU3dmksIDQuMTI1cmVtKTsgLyogNDggYSA2NiBweCAvIDMyMCBhIDI1MDAgdncgKi9cclxuXHJcbn1cclxuXHJcbi8qIC8vLyBVVElMSVRZIENMQVNTRVMgLy8vICovXHJcblxyXG4udGhlbWUtZGFyayB7XHJcbiAgICAtLWJnYzogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMwMDAwMDAsICMyRDM0MzYpO1xyXG4gICAgLS1jb2xvci1wcmltYXJ5OiByZ2IoMzAsIDMwLCAzMCk7XHJcbiAgICAtLWNvbG9yLXNlY29uZGFyeTogcmdiYSg1MiwgNTIsIDUyLCAwLjkpO1xyXG4gICAgLS1jb2xvci1jb250cmFzdDogcmdiKDIzNywgMjM0LCAyMjIpIDsgLyogI0VERUFERSAqL1xyXG4gICAgLS1jb2xvci1zaGFkb3c6IHJnYigyMTEsIDIxMSwgMjExKTtcclxuICAgIC8qIC0tZmlsdGVyOiBpbnZlcnQoOTIlKSBzZXBpYSgxMSUpIHNhdHVyYXRlKDM5OSUpIGh1ZS1yb3RhdGUoMzMxZGVnKSBicmlnaHRuZXNzKDEwOCUpIGNvbnRyYXN0KDg2JSkgKi9cclxufVxyXG5cclxuLnRoZW1lLWxpZ2h0IHtcclxuICAgIC0tYmdjOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgI2ZmZmZmZiwgI2QyY2JjOSk7XHJcbiAgICAtLWNvbG9yLXByaW1hcnk6IHJnYigyMjUsMjI1LDIyNSk7XHJcbiAgICAtLWNvbG9yLXNlY29uZGFyeTogcmdiYSgyMDMsIDIwMywgMjAzLCAwLjkpO1xyXG4gICAgLS1jb2xvci1jb250cmFzdDogcmdiKDE4LCAyMSwgMzMpO1xyXG4gICAgLS1jb2xvci1zaGFkb3c6IHJnYig0NCwgNDQsIDQ0KTtcclxuICAgIC8qIC0tZmlsdGVyOiBpbnZlcnQoNiUpIHNlcGlhKDE1JSkgc2F0dXJhdGUoMTgwMSUpIGh1ZS1yb3RhdGUoMTkxZGVnKSBicmlnaHRuZXNzKDk3JSkgY29udHJhc3QoOTUlKTsgKi9cclxufVxyXG5cclxuLmZzLXhzIHtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZnMteHMpO1xyXG59XHJcblxyXG4uZnMtcyB7XHJcbiAgICBmb250LXNpemU6IHZhcigtLWZzLXMpO1xyXG59XHJcblxyXG4uZnMtbSB7XHJcbiAgICBmb250LXNpemU6IHZhcigtLWZzLW0pO1xyXG59XHJcblxyXG4uZnMtbCB7XHJcbiAgICBmb250LXNpemU6IHZhcigtLWZzLWwpO1xyXG59XHJcblxyXG4uZnMteGwge1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1mcy14bCk7XHJcbn1cclxuXHJcbi5mcy14eGwge1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1mcy14eGwpO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTEwcmVtKSB7XHJcblxyXG4gICAgOnJvb3R7XHJcblxyXG4gICAgICAgIC0tc3BhY2UteHM6IGNsYW1wKDFyZW0sIDAuOTQ1cmVtICsgMC4yNzUydmksIDEuMzc1cmVtKTsgLyogMTYgYSAyMiBweCAvIDMyMCBhIDI1MDAgdncgKi9cclxuICAgICAgICAtLXNwYWNlLXM6IGNsYW1wKDEuNXJlbSwgMS40MTc0cmVtICsgMC40MTI4dmksIDIuMDYyNXJlbSk7IC8qIDI0IGEgMzMgcHggLyAzMjAgYSAyNTAwIHZ3ICovXHJcbiAgICAgICAgLS1zcGFjZS1tOiBjbGFtcCgycmVtLCAxLjg4OTlyZW0gKyAwLjU1MDV2aSwgMi43NXJlbSk7IC8qIDMyIGEgNDQgcHggLyAzMjAgYSAyNTAwIHZ3ICovXHJcbiAgICAgICAgLS1zcGFjZS1sOiBjbGFtcCgzcmVtLCAyLjgzNDlyZW0gKyAwLjgyNTd2aSwgNC4xMjVyZW0pOyAvKiA0OCBhIDY2IHB4IC8gMzIwIGEgMjUwMCB2dyAqL1xyXG4gICAgfVxyXG5cclxuICAgIC5mcy14cyB7XHJcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1mcy1zKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmZzLXMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZnMtbSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5mcy1tIHtcclxuICAgICAgICBmb250LXNpemU6IHZhcigtLWZzLWwpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZnMtbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1mcy14bCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5mcy14bCB7XHJcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1mcy14eGwpO1xyXG4gICAgfVxyXG5cclxuICAgIC5mcy14eGwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZnMtc2wpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLmZ3LXJlZ3VsYXIge1xyXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZ3LXJlZ3VsYXIpO1xyXG59XHJcblxyXG4uZnctYm9sZCB7XHJcbiAgICBmb250LXdlaWdodDogdmFyKC0tZnctYm9sZCk7XHJcbn1cclxuXHJcbi5ibHVyIHtcclxuXHJcbiAgICBmaWx0ZXI6IGJsdXIoMjBweCk7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuLnVuYWJsZSB7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuI2Nsb3NlIHtcclxuXHJcbiAgICBhbmltYXRpb246IGZhZGUtb3V0IDAuN3MgZWFzZS1vdXQ7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4vKiAuY29udGFpbmVyIHtcclxuICAgIC0tbWF4LXdpZHRoOiAxMTAwcHg7XHJcbiAgICAtLW1hcmdpbjogMXJlbTtcclxuXHJcbiAgICB3aWR0aDogbWluKHZhcigtLW1heC13aWR0aCksIDEwMCUgLSAodmFyKC0tbWFyZ2luKSAqIDIpKTtcclxuICAgIG1hcmdpbi1pbmxpbmU6IGF1dG87XHJcbn0gKi9cclxuXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNTBlbSkge1xyXG4gICAgLmV2ZW4tY29sdW1uc3tcclxuICAgICAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xyXG4gICAgICAgIGdyaWQtYXV0by1jb2x1bW5zOiAxZnI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qIC8vLyBCT0RZIC8vLyAqL1xyXG5cclxuYm9keXtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mZik7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB2YXIoLS1iZ2MpO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcclxufVxyXG5cclxuKjpkaXNhYmxlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkaW1ncmV5O1xyXG4gICAgb3BhY2l0eTogMC40O1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBcclxufVxyXG5cclxuLyogLy8vIEFSVElDTEVTIC8vLyAqL1xyXG5cclxuaDEge1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxufVxyXG5cclxuYXJ0aWNsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1jb250cmFzdCk7XHJcblxyXG4gICAgLyogRXN0byBlcyBsbyBuZWNlc2FyaW8gcGFyYSBxdWUgZWwgcG9wLXVwIHF1ZWRlIGVuIGVsIG1lZGlvICovXHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgLyogaGFzdGEgYWNhICovXHJcblxyXG4gICAgYW5pbWF0aW9uOiBmYWRlLWluIDAuN3MgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbmFydGljbGUuc3RhcnQsXHJcbmFydGljbGUuY2hpbGQge1xyXG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2UtbSlcclxufVxyXG5cclxuXHJcbkBrZXlmcmFtZXMgZmFkZS1pbiB7XHJcbiAgICAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlWSgwKTtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICBcclxuICAgIDEwMCUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZVkoMSk7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIGZhZGUtb3V0IHtcclxuICAgIDAlIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGVZKDEpO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICBcclxuICAgIDEwMCUge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZVkoMCk7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmFydGljbGUgc2VjdGlvbixcclxuYXJ0aWNsZSBkaXYsXHJcbmFydGljbGUgYnV0dG9uIHtcclxuXHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmFydGljbGUgc2VjdGlvbiB7XHJcblxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2UtbSk7XHJcbiAgICBtYXJnaW4tYmxvY2s6IDA7XHJcbn1cclxuXHJcbmFydGljbGUgYnV0dG9uIHtcclxuXHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbmFydGljbGUgc2VjdGlvbiBwIHtcclxuXHJcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAwLjRzO1xyXG59XHJcblxyXG5hcnRpY2xlIHNlY3Rpb246aG92ZXIgcCB7XHJcblxyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcclxufVxyXG5cclxuYXJ0aWNsZS5tb2RlLXNlbGVjdGlvbiA+IDpmaXJzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tY29sb3ItY29udHJhc3QpO1xyXG59XHJcblxyXG5cclxuLyogQ0hJTERSRU4gQVJUSUNMRVMgKi9cclxuXHJcblxyXG5hcnRpY2xlLmNoaWxkIGRpdiB7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IC43NXJlbTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jb2xvci1jb250cmFzdCk7XHJcbiAgICBwYWRkaW5nOiB2YXIoLS1zcGFjZS1zKTtcclxufVxyXG5cclxuYXJ0aWNsZS5DcHVNb2RlLmNoaWxkIGRpdiB7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG59XHJcblxyXG5hcnRpY2xlLmNoaWxkIGZpZWxkc2V0IGRpdiB7XHJcblxyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuYXJ0aWNsZS5jaGlsZCBkaXYuYnV0dG9ucyB7XHJcblxyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbn1cclxuXHJcbmFydGljbGUuZ2FtZS1vdmVyIG91dHB1dCxcclxuYXJ0aWNsZS5nYW1lLW92ZXIgaDIge1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWNvbnRyYXN0KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuYXJ0aWNsZS5nYW1lLW92ZXIgc2VjdGlvbi5yZXBsYXkge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWNvbnRyYXN0KVxyXG59XHJcblxyXG5cclxuaW5wdXQge1xyXG4gICAgcGFkZGluZzogNXB4IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWNvbnRyYXN0KTtcclxufVxyXG5cclxuXHJcbmJ1dHRvbiB7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItY29udHJhc3QpO1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1jb250cmFzdCk7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDJweCB2YXIoLS1jb2xvci1zaGFkb3cpO1xyXG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgMC4zcztcclxufVxyXG5cclxuYnV0dG9uOmFjdGl2ZSB7XHJcblxyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IHZhcigtLWNvbG9yLXNoYWRvdyk7XHJcbn1cclxuXHJcblxyXG4vKiAvLy8gSEVBREVSIC8vLyAqL1xyXG5cclxuaGVhZGVyIGRpdntcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbn1cclxuXHJcbmhlYWRlciBidXR0b24sIFxyXG5idXR0b24uY292ZXIge1xyXG5cclxuICAgIG1hcmdpbjogMXJlbTtcclxuICAgIHdpZHRoOiB2YXIoLS1zcGFjZS14bCk7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcblxyXG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgMC4xcztcclxufVxyXG5cclxuaGVhZGVyIGJ1dHRvbjphY3RpdmUsXHJcbmJ1dHRvbi5jb3ZlciB7XHJcblxyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxufSBcclxuXHJcbmhlYWRlciBoMSB7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItY29udHJhc3QpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2UtbSk7XHJcbn1cclxuXHJcbmhlYWRlciBoMyB7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItY29udHJhc3QpO1xyXG59XHJcblxyXG5pbWdbZGF0YS1oaWRkZW49XCJ0cnVlXCJdIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcblxyXG4vKiAvLy8gTUFJTiAvLy8gKi9cclxuXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNTJyZW0pIHtcclxuXHJcbiAgICBtYWluIHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICAgIH1cclxuXHJcbiAgICBwLCBvdXRwdXQge1xyXG4gICAgICAgIHRleHQtd3JhcDogd3JhcDtcclxuICAgIH1cclxufVxyXG5cclxuc2VjdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xyXG4gICAgbWFyZ2luOiAxcmVtO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG59XHJcblxyXG5zZWN0aW9uID4gYnV0dG9uLmNvdmVyIHtcclxuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiBhdXRvO1xyXG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogMXJlbTtcclxuICAgIG1hcmdpbi1ibG9jazogMDtcclxufVxyXG5cclxuYm9keS50aGVtZS1kYXJrIGJ1dHRvbi5jb3ZlciBpbWc6bnRoLWNoaWxkKDEpe1xyXG5cclxuICAgIGNvbnRlbnQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcclxufVxyXG5cclxuYm9keS50aGVtZS1kYXJrIGJ1dHRvbi5jb3ZlciBpbWc6bnRoLWNoaWxkKDIpe1xyXG5cclxuICAgIGNvbnRlbnQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcclxufVxyXG5cclxuXHJcbmJvZHkudGhlbWUtbGlnaHQgYnV0dG9uLmNvdmVyIGltZzpudGgtY2hpbGQoMSl7XHJcblxyXG4gICAgY29udGVudDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xyXG59XHJcblxyXG5ib2R5LnRoZW1lLWxpZ2h0IGJ1dHRvbi5jb3ZlciBpbWc6bnRoLWNoaWxkKDIpe1xyXG5cclxuICAgIGNvbnRlbnQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KTtcclxufVxyXG5cclxuLmJvYXJkIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogIHJlcGVhdCgxMCwgMWZyKTtcclxuXHJcbiAgICBtYXJnaW46IDFyZW07XHJcbn1cclxuXHJcbi5ib2FyZCBkaXYge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgIGFzcGVjdC1yYXRpbzogMTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWNvbnRyYXN0KTtcclxufVxyXG5cclxuLmJvYXJkI3VuY292ZXIgZGl2LnNoaXAge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblxyXG59XHJcblxyXG4uYm9hcmQgZGl2LmhpdCxcclxuLmJvYXJkIGRpdi5taXNzIHtcclxuXHJcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG59XHJcblxyXG4uYm9hcmQgZGl2LmhpdDphY3RpdmUsXHJcbi5ib2FyZCBkaXYubWlzczphY3RpdmUge1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTczLCAxNzMsIDE3MywgMC41KTtcclxufVxyXG5cclxuLmJvYXJkIGRpdi5oaXQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG5cclxufVxyXG5cclxuLmJvYXJkIGRpdi5taXNzIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XHJcblxyXG59XHJcblxyXG4uYm9hcmQgZGl2LmhpdC5zdW5rIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYig5MSwgMiwgMiwwLjcpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDkxLCAyLCAyLCAwLjcpO1xyXG5cclxufVxyXG5cclxuLm9wdGlvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IC45cmVtO1xyXG4gICAgbWFyZ2luOiAxcmVtO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxufVxyXG5cclxuXHJcbi5vcHRpb25zIGRpdiB7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMXJlbTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5vcHRpb25zIGJ1dHRvbi5yYW5kb217XHJcblxyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IHZhcigtLXNwYWNlLXhsKTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbmJvZHkudGhlbWUtZGFyayBidXR0b24ucmFuZG9tIGltZyB7XHJcbiAgICBjb250ZW50OiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19ffSk7XHJcbn1cclxuXHJcbmJvZHkudGhlbWUtbGlnaHQgYnV0dG9uLnJhbmRvbSBpbWcge1xyXG4gICAgY29udGVudDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fX30pO1xyXG59XHJcblxyXG4ub3B0aW9ucyBwLCBvdXRwdXQge1xyXG5cclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1jb250cmFzdCk7XHJcblxyXG59XHJcblxyXG5cclxuLyogLy8vIEZPT1RFUiAvLy8gKi9cclxuXHJcbmZvb3RlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItY29udHJhc3QpO1xyXG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2UtbSk7XHJcbn1cclxuXHJcblxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjs7QUFFQSxrQkFBa0I7O0FBRWxCOzs7RUFHRSxzQkFBc0I7QUFDeEI7OztBQUdBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7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SUFDSSxnREFBK0M7QUFDbkQ7O0FBRUE7O0lBRUksNEJBQTRCOztBQUVoQzs7O0FBR0EsbUJBQW1COztBQUVuQjtJQUNJLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsdUJBQXVCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcclxcblxcclxcbi8qIC8vLyBSRVNFVCAvLy8gKi9cXHJcXG5cXHJcXG4qLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlciB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4qIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBmb250OiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG5odG1sOmZvY3VzLXdpdGhpbiB7XFxyXFxuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sLCBib2R5IHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplU3BlZWQ7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XFxyXFxufVxcclxcblxcclxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIGJ1dHRvbiwgaW5wdXQsIGxhYmVsIHtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuMTtcXHJcXG59XFxyXFxuXFxyXFxucCwgb3V0cHV0IHtcXHJcXG4gICAgdGV4dC13cmFwOiBiYWxhbmNlO1xcclxcbn1cXHJcXG5cXHJcXG5pbWcsIHBpY3R1cmUsIHZpZGVvLCBjYW52YXMsIHN2ZyB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi8qIFJlbW92ZSBhbGwgYW5pbWF0aW9ucywgdHJhbnNpdGlvbnMgYW5kIHNtb290aCBzY3JvbGwgZm9yIHBlb3BsZSB0aGF0IHByZWZlciBub3QgdG8gc2VlIHRoZW0gKi9cXHJcXG5cXHJcXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xcclxcbiAgICBodG1sOmZvY3VzLXdpdGhpbiB7XFxyXFxuICAgICBzY3JvbGwtYmVoYXZpb3I6IGF1dG87XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgICosXFxyXFxuICAgICo6OmJlZm9yZSxcXHJcXG4gICAgKjo6YWZ0ZXIge1xcclxcbiAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XFxyXFxuICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMSAhaW1wb3J0YW50O1xcclxcbiAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xcclxcbiAgICAgIHNjcm9sbC1iZWhhdmlvcjogYXV0byAhaW1wb3J0YW50O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuLyogLy8vIFJPT1QgLy8vICovXFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcblxcclxcbi8qIEZPTlRTIEZBTUlMWSAqL1xcclxcbiAgICAtLWZmOiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXHJcXG5cXHJcXG4vKiBGT05UUyBXRUlHSFQgKi9cXHJcXG4gICAgLS1mdy1yZWd1bGFyOiA0MDA7XFxyXFxuICAgIC0tZnctYm9sZDogNzAwO1xcclxcblxcclxcbi8qIEZPTlRTIFNJWkUgKi9cXHJcXG4gIC0tZnMteHM6IGNsYW1wKDAuNjk0NHJlbSwgMC42NTI1cmVtICsgMC4yMDk2dmksIDAuOTE0NXJlbSk7IC8qIDExLjExIGEgMTQuNjMgcHggLyAzMjAgYSAyMDAwIHZ3ICovXFxyXFxuICAtLWZzLXM6IGNsYW1wKDAuODMzM3JlbSwgMC43NTk5cmVtICsgMC4zNjc0dmksIDEuMjE5MXJlbSk7IC8qIDEzLjMzIGEgMTkuNTAgcHggLyAzMjAgYSAyMDAwIHZ3ICovXFxyXFxuICAtLWZzLW06IGNsYW1wKDFyZW0sIDAuODgxcmVtICsgMC41OTUydmksIDEuNjI1cmVtKTsgLyogMTYgYSAyNiBweCAvIDMyMCBhIDIwMDAgdncgKi9cXHJcXG4gIC0tZnMtbDogY2xhbXAoMS4ycmVtLCAxLjAxNnJlbSArIDAuOTIwMXZpLCAyLjE2NjFyZW0pOyAvKiAxOS4yMCBhIDM0LjY2IHB4IC8gMzIwIGEgMjAwMCB2dyAqL1xcclxcbiAgLS1mcy14bDogY2xhbXAoMS40NHJlbSwgMS4xNjQzcmVtICsgMS4zNzg1dmksIDIuODg3NHJlbSk7IC8qIDIzLjA0IGEgNDYuMjAgcHggLyAzMjAgYSAyMDAwIHZ3ICovXFxyXFxuICAtLWZzLXh4bDogY2xhbXAoMS43MjhyZW0sIDEuMzI0cmVtICsgMi4wMnZpLCAzLjg0OXJlbSk7IC8qIDI3LjY1IGEgNjEuNTggcHggLyAzMjAgYSAyMDAwIHZ3ICovXFxyXFxuICAtLWZzLXNsOiBjbGFtcCgyLjA3MzZyZW0sIDEuNDkxM3JlbSArIDIuOTExNXZpLCA1LjEzMDdyZW0pOyAvKiAzMy4xOCBhIDgyLjA5IHB4IC8gMzIwIGEgMjAwMCB2dyAqL1xcclxcblxcclxcblxcclxcbi8qIFNQQUNFICovXFxyXFxuICAtLXNwYWNlLXhzOiBjbGFtcCgwLjc1cmVtLCAwLjcwNDFyZW0gKyAwLjIyOTR2aSwgMS4wNjI1cmVtKTsgLyogMTIgYSAxNyBweCAvIDMyMCBhIDI1MDAgdncgKi9cXHJcXG4gIC0tc3BhY2UtczogY2xhbXAoMXJlbSwgMC45NDVyZW0gKyAwLjI3NTJ2aSwgMS4zNzVyZW0pOyAvKiAxNiBhIDIyIHB4IC8gMzIwIGEgMjUwMCB2dyAqL1xcclxcbiAgLS1zcGFjZS1tOiBjbGFtcCgxLjVyZW0sIDEuNDE3NHJlbSArIDAuNDEyOHZpLCAyLjA2MjVyZW0pOyAvKiAyNCBhIDMzIHB4IC8gMzIwIGEgMjUwMCB2dyAqL1xcclxcbiAgLS1zcGFjZS1sOiBjbGFtcCgycmVtLCAxLjg4OTlyZW0gKyAwLjU1MDV2aSwgMi43NXJlbSk7IC8qIDMyIGEgNDQgcHggLyAzMjAgYSAyNTAwIHZ3ICovXFxyXFxuICAtLXNwYWNlLXhsOiBjbGFtcCgzcmVtLCAyLjgzNDlyZW0gKyAwLjgyNTd2aSwgNC4xMjVyZW0pOyAvKiA0OCBhIDY2IHB4IC8gMzIwIGEgMjUwMCB2dyAqL1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4vKiAvLy8gVVRJTElUWSBDTEFTU0VTIC8vLyAqL1xcclxcblxcclxcbi50aGVtZS1kYXJrIHtcXHJcXG4gICAgLS1iZ2M6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMDAwMDAwLCAjMkQzNDM2KTtcXHJcXG4gICAgLS1jb2xvci1wcmltYXJ5OiByZ2IoMzAsIDMwLCAzMCk7XFxyXFxuICAgIC0tY29sb3Itc2Vjb25kYXJ5OiByZ2JhKDUyLCA1MiwgNTIsIDAuOSk7XFxyXFxuICAgIC0tY29sb3ItY29udHJhc3Q6IHJnYigyMzcsIDIzNCwgMjIyKSA7IC8qICNFREVBREUgKi9cXHJcXG4gICAgLS1jb2xvci1zaGFkb3c6IHJnYigyMTEsIDIxMSwgMjExKTtcXHJcXG4gICAgLyogLS1maWx0ZXI6IGludmVydCg5MiUpIHNlcGlhKDExJSkgc2F0dXJhdGUoMzk5JSkgaHVlLXJvdGF0ZSgzMzFkZWcpIGJyaWdodG5lc3MoMTA4JSkgY29udHJhc3QoODYlKSAqL1xcclxcbn1cXHJcXG5cXHJcXG4udGhlbWUtbGlnaHQge1xcclxcbiAgICAtLWJnYzogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICNmZmZmZmYsICNkMmNiYzkpO1xcclxcbiAgICAtLWNvbG9yLXByaW1hcnk6IHJnYigyMjUsMjI1LDIyNSk7XFxyXFxuICAgIC0tY29sb3Itc2Vjb25kYXJ5OiByZ2JhKDIwMywgMjAzLCAyMDMsIDAuOSk7XFxyXFxuICAgIC0tY29sb3ItY29udHJhc3Q6IHJnYigxOCwgMjEsIDMzKTtcXHJcXG4gICAgLS1jb2xvci1zaGFkb3c6IHJnYig0NCwgNDQsIDQ0KTtcXHJcXG4gICAgLyogLS1maWx0ZXI6IGludmVydCg2JSkgc2VwaWEoMTUlKSBzYXR1cmF0ZSgxODAxJSkgaHVlLXJvdGF0ZSgxOTFkZWcpIGJyaWdodG5lc3MoOTclKSBjb250cmFzdCg5NSUpOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4uZnMteHMge1xcclxcbiAgICBmb250LXNpemU6IHZhcigtLWZzLXhzKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZzLXMge1xcclxcbiAgICBmb250LXNpemU6IHZhcigtLWZzLXMpO1xcclxcbn1cXHJcXG5cXHJcXG4uZnMtbSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZnMtbSk7XFxyXFxufVxcclxcblxcclxcbi5mcy1sIHtcXHJcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mcy1sKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZzLXhsIHtcXHJcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mcy14bCk7XFxyXFxufVxcclxcblxcclxcbi5mcy14eGwge1xcclxcbiAgICBmb250LXNpemU6IHZhcigtLWZzLXh4bCk7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiAxMTByZW0pIHtcXHJcXG5cXHJcXG4gICAgOnJvb3R7XFxyXFxuXFxyXFxuICAgICAgICAtLXNwYWNlLXhzOiBjbGFtcCgxcmVtLCAwLjk0NXJlbSArIDAuMjc1MnZpLCAxLjM3NXJlbSk7IC8qIDE2IGEgMjIgcHggLyAzMjAgYSAyNTAwIHZ3ICovXFxyXFxuICAgICAgICAtLXNwYWNlLXM6IGNsYW1wKDEuNXJlbSwgMS40MTc0cmVtICsgMC40MTI4dmksIDIuMDYyNXJlbSk7IC8qIDI0IGEgMzMgcHggLyAzMjAgYSAyNTAwIHZ3ICovXFxyXFxuICAgICAgICAtLXNwYWNlLW06IGNsYW1wKDJyZW0sIDEuODg5OXJlbSArIDAuNTUwNXZpLCAyLjc1cmVtKTsgLyogMzIgYSA0NCBweCAvIDMyMCBhIDI1MDAgdncgKi9cXHJcXG4gICAgICAgIC0tc3BhY2UtbDogY2xhbXAoM3JlbSwgMi44MzQ5cmVtICsgMC44MjU3dmksIDQuMTI1cmVtKTsgLyogNDggYSA2NiBweCAvIDMyMCBhIDI1MDAgdncgKi9cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZnMteHMge1xcclxcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1mcy1zKTtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgLmZzLXMge1xcclxcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1mcy1tKTtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgLmZzLW0ge1xcclxcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1mcy1sKTtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgLmZzLWwge1xcclxcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1mcy14bCk7XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgIC5mcy14bCB7XFxyXFxuICAgICAgICBmb250LXNpemU6IHZhcigtLWZzLXh4bCk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmZzLXh4bCB7XFxyXFxuICAgICAgICBmb250LXNpemU6IHZhcigtLWZzLXNsKTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uZnctcmVndWxhciB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mdy1yZWd1bGFyKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZ3LWJvbGQge1xcclxcbiAgICBmb250LXdlaWdodDogdmFyKC0tZnctYm9sZCk7XFxyXFxufVxcclxcblxcclxcbi5ibHVyIHtcXHJcXG5cXHJcXG4gICAgZmlsdGVyOiBibHVyKDIwcHgpO1xcclxcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnVuYWJsZSB7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jY2xvc2Uge1xcclxcblxcclxcbiAgICBhbmltYXRpb246IGZhZGUtb3V0IDAuN3MgZWFzZS1vdXQ7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qIC5jb250YWluZXIge1xcclxcbiAgICAtLW1heC13aWR0aDogMTEwMHB4O1xcclxcbiAgICAtLW1hcmdpbjogMXJlbTtcXHJcXG5cXHJcXG4gICAgd2lkdGg6IG1pbih2YXIoLS1tYXgtd2lkdGgpLCAxMDAlIC0gKHZhcigtLW1hcmdpbikgKiAyKSk7XFxyXFxuICAgIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxyXFxufSAqL1xcclxcblxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiA1MGVtKSB7XFxyXFxuICAgIC5ldmVuLWNvbHVtbnN7XFxyXFxuICAgICAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcclxcbiAgICAgICAgZ3JpZC1hdXRvLWNvbHVtbnM6IDFmcjtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKiAvLy8gQk9EWSAvLy8gKi9cXHJcXG5cXHJcXG5ib2R5e1xcclxcbiAgICBmb250LWZhbWlseTogdmFyKC0tZmYpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB2YXIoLS1iZ2MpO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XFxyXFxufVxcclxcblxcclxcbio6ZGlzYWJsZWQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkaW1ncmV5O1xcclxcbiAgICBvcGFjaXR5OiAwLjQ7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLyogLy8vIEFSVElDTEVTIC8vLyAqL1xcclxcblxcclxcbmgxIHtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcXHJcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbn1cXHJcXG5cXHJcXG5hcnRpY2xlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWNvbnRyYXN0KTtcXHJcXG5cXHJcXG4gICAgLyogRXN0byBlcyBsbyBuZWNlc2FyaW8gcGFyYSBxdWUgZWwgcG9wLXVwIHF1ZWRlIGVuIGVsIG1lZGlvICovXFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICB0b3A6IDUwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICAgIC8qIGhhc3RhIGFjYSAqL1xcclxcblxcclxcbiAgICBhbmltYXRpb246IGZhZGUtaW4gMC43cyBlYXNlLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuYXJ0aWNsZS5zdGFydCxcXHJcXG5hcnRpY2xlLmNoaWxkIHtcXHJcXG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2UtbSlcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuQGtleWZyYW1lcyBmYWRlLWluIHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGVZKDApO1xcclxcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG4gIFxcclxcbiAgICAxMDAlIHtcXHJcXG4gICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlWSgxKTtcXHJcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgXFxyXFxuICBAa2V5ZnJhbWVzIGZhZGUtb3V0IHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGVZKDEpO1xcclxcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB9XFxyXFxuICBcXHJcXG4gICAgMTAwJSB7XFxyXFxuICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZVkoMCk7XFxyXFxuICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5hcnRpY2xlIHNlY3Rpb24sXFxyXFxuYXJ0aWNsZSBkaXYsXFxyXFxuYXJ0aWNsZSBidXR0b24ge1xcclxcblxcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmFydGljbGUgc2VjdGlvbiB7XFxyXFxuXFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2UtbSk7XFxyXFxuICAgIG1hcmdpbi1ibG9jazogMDtcXHJcXG59XFxyXFxuXFxyXFxuYXJ0aWNsZSBidXR0b24ge1xcclxcblxcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxufVxcclxcblxcclxcbmFydGljbGUgc2VjdGlvbiBwIHtcXHJcXG5cXHJcXG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgMC40cztcXHJcXG59XFxyXFxuXFxyXFxuYXJ0aWNsZSBzZWN0aW9uOmhvdmVyIHAge1xcclxcblxcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xcclxcbn1cXHJcXG5cXHJcXG5hcnRpY2xlLm1vZGUtc2VsZWN0aW9uID4gOmZpcnN0LWNoaWxkIHtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWNvbG9yLWNvbnRyYXN0KTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogQ0hJTERSRU4gQVJUSUNMRVMgKi9cXHJcXG5cXHJcXG5cXHJcXG5hcnRpY2xlLmNoaWxkIGRpdiB7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogLjc1cmVtO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tY29sb3ItY29udHJhc3QpO1xcclxcbiAgICBwYWRkaW5nOiB2YXIoLS1zcGFjZS1zKTtcXHJcXG59XFxyXFxuXFxyXFxuYXJ0aWNsZS5DcHVNb2RlLmNoaWxkIGRpdiB7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmFydGljbGUuY2hpbGQgZmllbGRzZXQgZGl2IHtcXHJcXG5cXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG59XFxyXFxuXFxyXFxuYXJ0aWNsZS5jaGlsZCBkaXYuYnV0dG9ucyB7XFxyXFxuXFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmFydGljbGUuZ2FtZS1vdmVyIG91dHB1dCxcXHJcXG5hcnRpY2xlLmdhbWUtb3ZlciBoMiB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1jb250cmFzdCk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5hcnRpY2xlLmdhbWUtb3ZlciBzZWN0aW9uLnJlcGxheSB7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jb2xvci1jb250cmFzdClcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuaW5wdXQge1xcclxcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItY29udHJhc3QpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcblxcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1jb250cmFzdCk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXHJcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItY29udHJhc3QpO1xcclxcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDJweCB2YXIoLS1jb2xvci1zaGFkb3cpO1xcclxcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAwLjNzO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b246YWN0aXZlIHtcXHJcXG5cXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXHJcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggdmFyKC0tY29sb3Itc2hhZG93KTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogLy8vIEhFQURFUiAvLy8gKi9cXHJcXG5cXHJcXG5oZWFkZXIgZGl2e1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIGJ1dHRvbiwgXFxyXFxuYnV0dG9uLmNvdmVyIHtcXHJcXG5cXHJcXG4gICAgbWFyZ2luOiAxcmVtO1xcclxcbiAgICB3aWR0aDogdmFyKC0tc3BhY2UteGwpO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICBib3gtc2hhZG93OiBub25lO1xcclxcblxcclxcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAwLjFzO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgYnV0dG9uOmFjdGl2ZSxcXHJcXG5idXR0b24uY292ZXIge1xcclxcblxcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XFxyXFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxufSBcXHJcXG5cXHJcXG5oZWFkZXIgaDEge1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItY29udHJhc3QpO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjZS1tKTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIGgzIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWNvbnRyYXN0KTtcXHJcXG59XFxyXFxuXFxyXFxuaW1nW2RhdGEtaGlkZGVuPVxcXCJ0cnVlXFxcIl0ge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiAvLy8gTUFJTiAvLy8gKi9cXHJcXG5cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNTJyZW0pIHtcXHJcXG5cXHJcXG4gICAgbWFpbiB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIHAsIG91dHB1dCB7XFxyXFxuICAgICAgICB0ZXh0LXdyYXA6IHdyYXA7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuc2VjdGlvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcXHJcXG4gICAgbWFyZ2luOiAxcmVtO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXHJcXG59XFxyXFxuXFxyXFxuc2VjdGlvbiA+IGJ1dHRvbi5jb3ZlciB7XFxyXFxuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiBhdXRvO1xcclxcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAxcmVtO1xcclxcbiAgICBtYXJnaW4tYmxvY2s6IDA7XFxyXFxufVxcclxcblxcclxcbmJvZHkudGhlbWUtZGFyayBidXR0b24uY292ZXIgaW1nOm50aC1jaGlsZCgxKXtcXHJcXG5cXHJcXG4gICAgY29udGVudDogdXJsKC4uL2ltYWdlcy9leWUtd2hpdGUuc3ZnKTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keS50aGVtZS1kYXJrIGJ1dHRvbi5jb3ZlciBpbWc6bnRoLWNoaWxkKDIpe1xcclxcblxcclxcbiAgICBjb250ZW50OiB1cmwoLi4vaW1hZ2VzL2V5ZS1zbGFzaC13aGl0ZS5zdmcpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5ib2R5LnRoZW1lLWxpZ2h0IGJ1dHRvbi5jb3ZlciBpbWc6bnRoLWNoaWxkKDEpe1xcclxcblxcclxcbiAgICBjb250ZW50OiB1cmwoLi4vaW1hZ2VzL2V5ZS5zdmcpO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5LnRoZW1lLWxpZ2h0IGJ1dHRvbi5jb3ZlciBpbWc6bnRoLWNoaWxkKDIpe1xcclxcblxcclxcbiAgICBjb250ZW50OiB1cmwoLi4vaW1hZ2VzL2V5ZS1zbGFzaC5zdmcpO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9hcmQge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAgcmVwZWF0KDEwLCAxZnIpO1xcclxcblxcclxcbiAgICBtYXJnaW46IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5ib2FyZCBkaXYge1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xcclxcbiAgICBhc3BlY3QtcmF0aW86IDE7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWNvbnRyYXN0KTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkI3VuY292ZXIgZGl2LnNoaXAge1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uYm9hcmQgZGl2LmhpdCxcXHJcXG4uYm9hcmQgZGl2Lm1pc3Mge1xcclxcblxcclxcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9hcmQgZGl2LmhpdDphY3RpdmUsXFxyXFxuLmJvYXJkIGRpdi5taXNzOmFjdGl2ZSB7XFxyXFxuXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTczLCAxNzMsIDE3MywgMC41KTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkIGRpdi5oaXQge1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkIGRpdi5taXNzIHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uYm9hcmQgZGl2LmhpdC5zdW5rIHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDkxLCAyLCAyLDAuNyk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5MSwgMiwgMiwgMC43KTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLm9wdGlvbnMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IC45cmVtO1xcclxcbiAgICBtYXJnaW46IDFyZW07XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcbi5vcHRpb25zIGRpdiB7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm9wdGlvbnMgYnV0dG9uLnJhbmRvbXtcXHJcXG5cXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICB3aWR0aDogdmFyKC0tc3BhY2UteGwpO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5LnRoZW1lLWRhcmsgYnV0dG9uLnJhbmRvbSBpbWcge1xcclxcbiAgICBjb250ZW50OiB1cmwoLi4vaW1hZ2VzL3NoaXAtc3RlZXJpbmcuc3ZnKTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keS50aGVtZS1saWdodCBidXR0b24ucmFuZG9tIGltZyB7XFxyXFxuICAgIGNvbnRlbnQ6IHVybCguLi9pbWFnZXMvc2hpcC1zdGVlcmluZy13aGl0ZS5zdmcpO1xcclxcbn1cXHJcXG5cXHJcXG4ub3B0aW9ucyBwLCBvdXRwdXQge1xcclxcblxcclxcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItY29udHJhc3QpO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiAvLy8gRk9PVEVSIC8vLyAqL1xcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWNvbnRyYXN0KTtcXHJcXG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2UtbSk7XFxyXFxufVxcclxcblxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7UGxheWVyfSBmcm9tIFwiLi9wbGF5ZXJcIlxyXG5pbXBvcnQge0dhbWVCb2FyZH0gZnJvbSBcIi4vZ2FtZWJvYXJkXCJcclxuaW1wb3J0IHtlbGVtZW50cywgY3JlYXRlR3JpZH0gZnJvbSBcIi4vZG9tXCJcclxuaW1wb3J0IHtzdG9yZURhdGEsIHJldHJpZXZlRGF0YSwgdXBkYXRlRGF0YX0gZnJvbSBcIi4vc3RvcmFnZVwiXHJcbmltcG9ydCB7IEdBTUUgfSBmcm9tIFwiLlwiXHJcblxyXG5leHBvcnQge2Rpc3BsYXlCb2FyZCwgZGlzcGxheVNoaXAsIGRpc3BsYXlOYW1lcywgZGlzcGxheVBsYXllclR1cm4sIGRpc3BsYXlXaW5uZXJ9XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlTaGlwKHdoaWNoUGxheWVyKSB7XHJcbiAgICBcclxuICAgIGxldCBib2FyZCA9IGVsZW1lbnRzLmJvYXJkc1t3aGljaFBsYXllcl1cclxuXHJcbiAgICBHQU1FLmdldFBsYXllclNoaXBzKHdoaWNoUGxheWVyKS5mbGF0KCkuZm9yRWFjaChjb29yZCA9PiBhZGRDbGFzcyhib2FyZCwgY29vcmQsIFwic2hpcFwiKSlcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheUJvYXJkKCl7XHJcblxyXG4gICAgbGV0IGJvYXJkID0gZWxlbWVudHMuYm9hcmRzW0dBTUUuZ2V0QWN0aXZlUGxheWVyUmVmKCldXHJcblxyXG4gICAgR0FNRS5nZXRQbGF5ZXJIaXRMaXN0KCkuZm9yRWFjaChjb29yZCA9PiBhZGRDbGFzcyhib2FyZCwgY29vcmQsIFwiaGl0XCIpKVxyXG4gICAgR0FNRS5nZXRQbGF5ZXJNaXNzTGlzdCgpLmZvckVhY2goY29vcmQgPT4gYWRkQ2xhc3MoYm9hcmQsIGNvb3JkLCBcIm1pc3NcIikpXHJcbiAgICBHQU1FLmdldFBsYXllclN1bmtTaGlwcygpLmZsYXQoKS5mb3JFYWNoKGNvb3JkID0+IGFkZENsYXNzKGJvYXJkLCBjb29yZCwgXCJzdW5rXCIpKVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gYWRkQ2xhc3MoYm9hcmQsIHF1YWRyYW50LCBjbGFzc05hbWUpIHtcclxuXHJcbiAgICBsZXQgW3JvdywgY29sXSA9IHF1YWRyYW50XHJcblxyXG4gICAgbGV0IHNxdWFyZSA9IGJvYXJkLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXNxdWFyZT1cIiR7cm93fS0ke2NvbH1cIl1gKVxyXG5cclxuICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKGAke2NsYXNzTmFtZX1gKVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZGlzcGxheU5hbWVzKCkge1xyXG5cclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBlbGVtZW50cy5vdXRwdXRBcnIubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgZWxlbWVudHMub3V0cHV0QXJyW2ldLnRleHRDb250ZW50ID0gR0FNRS5nZXRQbGF5ZXJOYW1lKGkpXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlQbGF5ZXJUdXJuKCkge1xyXG5cclxuICAgIGxldCB0aXRsZSA9IGVsZW1lbnRzLnRpdGxlXHJcblxyXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBgJHtHQU1FLmdldFBsYXllck5hbWUoKX0ncyB0dXJuIWBcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheVdpbm5lcigpe1xyXG5cclxuICAgIGVsZW1lbnRzLndpbm5lci50ZXh0Q29udGVudCA9IFxyXG4gICAgYCR7R0FNRS5nZXRQbGF5ZXJOYW1lKEdBTUUuZ2V0UGFzc2l2ZVBsYXllclJlZigpKX0gaXMgdGhlIHdpbm5lciEhYDtcclxufVxyXG5cclxuLyogZnVuY3Rpb24gZGlzcGxheVRvdGFsQm9hcmQoKXtcclxuXHJcbiAgICBmb3IgKGxldCBwbGF5ZXIgb2YgR0FNRS5wbGF5ZXJzKSB7XHJcblxyXG4gICAgICAgIGxldCBib2FyZCA9IGVsZW1lbnRzLmJvYXJkc1twbGF5ZXIuSURdXHJcblxyXG4gICAgICAgIHBsYXllci5nYW1lQm9hcmQuc2hpcHNDb29yZHMuZmxhdCgpLmZvckVhY2goY29vcmQgPT4gYWRkQ2xhc3MoYm9hcmQsIGNvb3JkLCBcInNoaXBcIikpIFxyXG5cclxuICAgICAgICBwbGF5ZXIuZ2FtZUJvYXJkLnNoaXBIaXRMaXN0LmZvckVhY2goY29vcmQgPT4gYWRkQ2xhc3MoYm9hcmQsIGNvb3JkLCBcImhpdFwiKSlcclxuXHJcbiAgICAgICAgcGxheWVyLmdhbWVCb2FyZC53YXRlckhpdExpc3QuZm9yRWFjaChjb29yZCA9PiBhZGRDbGFzcyhib2FyZCwgY29vcmQsIFwibWlzc1wiKSlcclxuICAgIH1cclxufSAqL1xyXG5cclxuIiwiaW1wb3J0IHsgUGxheWVyLCBDUFUgfSBmcm9tIFwiLi9wbGF5ZXJcIlxyXG5pbXBvcnQgeyBHYW1lQm9hcmQgfSBmcm9tIFwiLi9nYW1lYm9hcmRcIlxyXG5pbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vc2hpcFwiXHJcbmltcG9ydCB7IHN0b3JlRGF0YSwgcmV0cmlldmVEYXRhLCB1cGRhdGVEYXRhIH0gZnJvbSBcIi4vc3RvcmFnZVwiXHJcbmltcG9ydCB7IGRpc3BsYXlCb2FyZCwgZGlzcGxheVNoaXAsIGRpc3BsYXlOYW1lcywgZGlzcGxheVBsYXllclR1cm4sIGRpc3BsYXlXaW5uZXIgfSBmcm9tIFwiLi9kaXNwbGF5XCJcclxuaW1wb3J0IHsgR0FNRSB9IGZyb20gXCIuL2luZGV4XCJcclxuXHJcbmV4cG9ydCB7ZWxlbWVudHMsIGNyZWF0ZUdyaWQsIHBsYXllcnNSZWFkeX1cclxuXHJcblxyXG5sZXQgZWxlbWVudHMgPSB7XHJcblxyXG4gICAgd3JhcHBlcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53cmFwcGVyXCIpLFxyXG4gICAgYm9keTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIiksXHJcbiAgICBib2FyZHM6IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ib2FyZFwiKSksXHJcbiAgICBkaWFsb2dTdGFydDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImFydGljbGVcIiksXHJcbiAgICBkaWFsb2dNb2RlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYXJ0aWNsZS5tb2RlLXNlbGVjdGlvblwiKSxcclxuICAgIGRpYWxvZ1BsYXllck1vZGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhcnRpY2xlLlBsYXllck1vZGVcIiksXHJcbiAgICBkaWFsb2dDcHVNb2RlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYXJ0aWNsZS5DcHVNb2RlXCIpLFxyXG4gICAgZGlhbG9nR2FtZU92ZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhcnRpY2xlLmdhbWUtb3ZlclwiKSxcclxuICAgIGJ0bkNhbmNlbDogQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uLmNhbmNlbFwiKSksXHJcbiAgICBidG5PazogQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uLm9rXCIpKSxcclxuICAgIGJ0blRoZW1lOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRoZW1lXCIpLFxyXG4gICAgaW5wdXRzTmFtZXM6IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltuYW1lPXBsYXllci1uYW1lXVwiKSksXHJcbiAgICBpbnB1dHNSYWRpbzogQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW25hbWU9ZGlmZmljdWx0eV1cIikpLFxyXG4gICAgYnRuUmFuZG9tQXJyOiBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b24ucmFuZG9tXCIpKSxcclxuICAgIGJ0blJlYWR5QXJyOiBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b24ucmVhZHlcIikpLFxyXG4gICAgYnRuQ292ZXJBcnI6IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImJ1dHRvbi5jb3ZlclwiKSksXHJcbiAgICBvdXRwdXRBcnI6IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIm91dHB1dDpub3QoLndpbm5lcilcIikpLFxyXG4gICAgc3RhcnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhcnRpY2xlLnN0YXJ0IHNlY3Rpb24gcFwiKSxcclxuICAgIHRpdGxlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDNcIiksXHJcbiAgICB3aW5uZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2lubmVyXCIpLFxyXG4gICAgcmVwbGF5OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlcGxheVwiKSxcclxuICAgIHJlc2V0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc2V0XCIpLFxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKVxyXG4gICAgfSxcclxuXHJcbiAgICBhZGRMaXN0ZW5lcnMoKSB7XHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBvcGVuU3RhcnREaWFsb2cpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBhcHBseUdyaWQpO1xyXG4gICAgICAgIHRoaXMuZGlhbG9nQ2hpbGRyZW4oKS5mb3JFYWNoKGNoaWxkID0+IGNoaWxkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBnYW1lTW9kZVNlbGVjdGlvbikpO1xyXG4gICAgICAgIHRoaXMuYnRuQ2FuY2VsLmZvckVhY2goYnRuID0+IGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2FuY2VsRGlhbG9nKSk7XHJcbiAgICAgICAgdGhpcy5idG5Pay5mb3JFYWNoKGJ0biA9PiBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFwcHJvdmVEaWFsb2cpKTtcclxuICAgICAgICB0aGlzLmJ0bk9rLmZvckVhY2goYnRuID0+IGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGlzcGxheU5hbWVzKSk7XHJcbiAgICAgICAgdGhpcy5idG5UaGVtZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlVGhlbWUpO1xyXG4gICAgICAgIHRoaXMuYnRuUmFuZG9tQXJyLmZvckVhY2goYnRuID0+IGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3JlYXRlUmFuZG9tU2hpcHMpKTtcclxuICAgICAgICB0aGlzLmJ0blJlYWR5QXJyLmZvckVhY2goYnRuID0+IGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcGxheWVyc1JlYWR5KSk7XHJcbiAgICAgICAgdGhpcy5idG5Db3ZlckFyci5mb3JFYWNoKGJ0biA9PiBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZUNvdmVyQm9hcmQpKTtcclxuICAgICAgICB0aGlzLnN0YXJ0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvcGVuTW9kZURpYWxvZyk7XHJcbiAgICAgICAgdGhpcy5yZXBsYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlcGxheSk7XHJcbiAgICAgICAgdGhpcy5yZXNldC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVzZXQpO1xyXG4gICAgfSxcclxuXHJcbiAgICBkaWFsb2dDaGlsZHJlbigpe1xyXG5cclxuICAgICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuZGlhbG9nTW9kZS5jaGlsZHJlbikgXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoZWxlbWVudCwgY2xhc3NOYW1lLCBzZWNvbmRDbGFzc05hbWUpe1xyXG5cclxuICAgIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudClcclxuICAgIGVsLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKVxyXG5cclxuICAgIGlmKHNlY29uZENsYXNzTmFtZSkgZWwuY2xhc3NMaXN0LmFkZChzZWNvbmRDbGFzc05hbWUpXHJcblxyXG4gICAgcmV0dXJuIGVsXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUdyaWQoYm9hcmQpe1xyXG5cclxuICAgIGJvYXJkLmlubmVySFRNTCA9IFwiXCJcclxuICAgIGJvYXJkLmNsYXNzTGlzdC5hZGQoXCJ1bmFibGVcIilcclxuICAgIGJvYXJkLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidW5jb3ZlclwiKVxyXG5cclxuICAgIGxldCBudW0gPSAxMFxyXG5cclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBudW07IGkrKykge1xyXG5cclxuICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgbnVtOyBqKyspIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBxdWFkcmFudCA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgYHJvdy0ke2l9YCwgYGNvbC0ke2p9YClcclxuICAgICAgICAgICAgcXVhZHJhbnQuc2V0QXR0cmlidXRlKFwiZGF0YS1zcXVhcmVcIiwgYCR7aX0tJHtqfWApXHJcbiAgICAgICAgICAgIHF1YWRyYW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoaXRMaXN0ZW5lcilcclxuICAgICAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQocXVhZHJhbnQpXHJcbiAgICAgICAgfSBcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlHcmlkKCkge1xyXG5cclxuICAgIGZvcihsZXQgYm9hcmQgb2YgZWxlbWVudHMuYm9hcmRzKSBjcmVhdGVHcmlkKGJvYXJkKSBcclxufVxyXG5cclxuZnVuY3Rpb24gb3BlblN0YXJ0RGlhbG9nKCl7XHJcblxyXG4gICAgZWxlbWVudHMud3JhcHBlci5jbGFzc0xpc3QuYWRkKFwiYmx1clwiKVxyXG4gICAgZWxlbWVudHMuZGlhbG9nU3RhcnQucmVtb3ZlQXR0cmlidXRlKFwiaWRcIilcclxufVxyXG5cclxuZnVuY3Rpb24gb3Blbk1vZGVEaWFsb2coKXtcclxuXHJcbiAgICBlbGVtZW50cy5kaWFsb2dTdGFydC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNsb3NlXCIpXHJcbiAgICBlbGVtZW50cy5kaWFsb2dNb2RlLnJlbW92ZUF0dHJpYnV0ZShcImlkXCIpXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBnYW1lTW9kZVNlbGVjdGlvbihlKSB7XHJcblxyXG4gICAgZWxlbWVudHMuZGlhbG9nTW9kZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNsb3NlXCIpXHJcblxyXG4gICAgbGV0IGdhbWVNb2RlID0gZS5jdXJyZW50VGFyZ2V0LmNsYXNzTmFtZVxyXG5cclxuICAgIGxldCBkaWFsb2cgPSBlbGVtZW50c1tgZGlhbG9nJHtnYW1lTW9kZX1gXVxyXG4gICAgZGlhbG9nLnJlbW92ZUF0dHJpYnV0ZShcImlkXCIpXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBjYW5jZWxEaWFsb2coZSl7XHJcblxyXG4gICAgLy9pZihlLmtleSAhPT0gXCJFc2NhcGVcIikgcmV0dXJuXHJcbiAgICBlLmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY2xvc2VcIilcclxuICAgIGVsZW1lbnRzLmlucHV0c05hbWVzLmZvckVhY2goaW5wdXQgPT4gaW5wdXQudmFsdWUgPSBcIlwiKVxyXG5cclxuICAgIG9wZW5Nb2RlRGlhbG9nKClcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGFwcHJvdmVEaWFsb2coZSkge1xyXG5cclxuICAgIC8vaWYoZS5rZXkgIT09IFwiRW50ZXJcIikgcmV0dXJuXHJcbiAgICBsZXQgbW9kZSA9IGUudGFyZ2V0LmRhdGFzZXQubW9kZVxyXG5cclxuICAgIGdhbWVNb2RlRGF0YShtb2RlKVxyXG4gICAgY3B1UmVhZHkoKVxyXG5cclxuICAgIGUuY3VycmVudFRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjbG9zZVwiKVxyXG4gICAgZWxlbWVudHMuaW5wdXRzTmFtZXMuZm9yRWFjaChpbnB1dCA9PiBpbnB1dC52YWx1ZSA9IFwiXCIpXHJcbiAgICBlbGVtZW50cy53cmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJibHVyXCIpXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBnYW1lTW9kZURhdGEobW9kZSl7XHJcblxyXG4gICAgaWYobW9kZSA9PT0gXCJQbGF5ZXJNb2RlXCIpIHtcclxuXHJcbiAgICAgICAgR0FNRS5zZXRHYW1lRGF0YShtb2RlLCBbZWxlbWVudHMuaW5wdXRzTmFtZXNbMF0udmFsdWUsIGVsZW1lbnRzLmlucHV0c05hbWVzWzFdLnZhbHVlXSwgbnVsbClcclxuICAgIH1cclxuICAgIFxyXG4gICAgZWxzZSBpZihtb2RlID09PSBcIkNwdU1vZGVcIikge1xyXG5cclxuICAgICAgICBsZXQgZGlmZmljdWx0eVxyXG5cclxuICAgICAgICBlbGVtZW50cy5pbnB1dHNSYWRpby5mb3JFYWNoKGlucHV0ID0+IHsgaWYoaW5wdXQuY2hlY2tlZCkgZGlmZmljdWx0eSA9IGlucHV0LnZhbHVlIH0pXHJcblxyXG4gICAgICAgIEdBTUUuc2V0R2FtZURhdGEobW9kZSwgW2VsZW1lbnRzLmlucHV0c05hbWVzWzJdLnZhbHVlXSwgZGlmZmljdWx0eSlcclxuICAgIH1cclxufTtcclxuXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVSYW5kb21TaGlwcyhlKSB7XHJcblxyXG4gICAgbGV0IHdoaWNoUGxheWVyID0gTnVtYmVyKGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmJvYXJkKVxyXG4gICAgbGV0IGJvYXJkID0gZWxlbWVudHMuYm9hcmRzW3doaWNoUGxheWVyXVxyXG5cclxuICAgIGNyZWF0ZUdyaWQoYm9hcmQpXHJcblxyXG4gICAgR0FNRS5wbGFjZVBsYXllclNoaXBzKHdoaWNoUGxheWVyKVxyXG5cclxuICAgIGRpc3BsYXlTaGlwKHdoaWNoUGxheWVyKVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gcGxheWVyc1JlYWR5KGUpIHtcclxuXHJcbiAgICBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5yZWFkeSA9IHRydWVcclxuICAgIGUuY3VycmVudFRhcmdldC5kaXNhYmxlZCA9IHRydWVcclxuXHJcbiAgICBsZXQgd2hpY2hCb2FyZCA9IGUuY3VycmVudFRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZGF0YXNldC5ib2FyZFxyXG4gICAgZWxlbWVudHMuYnRuUmFuZG9tQXJyW3doaWNoQm9hcmRdLmRpc2FibGVkID0gdHJ1ZVxyXG4gICAgZWxlbWVudHMuYm9hcmRzW3doaWNoQm9hcmRdLnJlbW92ZUF0dHJpYnV0ZShcImlkXCIsIFwidW5jb3ZlclwiKVxyXG4gICAgZWxlbWVudHMuYnRuQ292ZXJBcnJbd2hpY2hCb2FyZF0uZGlzYWJsZWQgPSB0cnVlXHJcbiAgICBlbGVtZW50cy5idG5Db3ZlckFyclt3aGljaEJvYXJkXS5maXJzdEVsZW1lbnRDaGlsZC5kYXRhc2V0LmhpZGRlbiA9IHRydWVcclxuICAgIGVsZW1lbnRzLmJ0bkNvdmVyQXJyW3doaWNoQm9hcmRdLmxhc3RFbGVtZW50Q2hpbGQuZGF0YXNldC5oaWRkZW4gPSBmYWxzZVxyXG5cclxuICAgIGZvcihsZXQgYnRuIG9mIGVsZW1lbnRzLmJ0blJlYWR5QXJyKSBpZihidG4uZGF0YXNldC5yZWFkeSA9PT0gXCJmYWxzZVwiKSByZXR1cm5cclxuXHJcbiAgICBHQU1FLnN0YXJ0R2FtZSgpXHJcblxyXG4gICAgZGlzcGxheVR1cm4oKVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gaGl0TGlzdGVuZXIoZSkge1xyXG5cclxuICAgIGVsZW1lbnRzLmJvYXJkc1tHQU1FLmdldEFjdGl2ZVBsYXllclJlZigpXS5yZW1vdmVBdHRyaWJ1dGUoXCJpZFwiKVxyXG5cclxuICAgIGxldCBxdWFkcmFudCA9IGUudGFyZ2V0LmRhdGFzZXQuc3F1YXJlLnNwbGl0KFwiLVwiKS5tYXAoc3RyID0+IE51bWJlcihzdHIpKVxyXG4gICBcclxuICAgIHBsYXllclR1cm4ocXVhZHJhbnQpXHJcblxyXG4gICAgaWYoR0FNRS5pc0dhbWVPdmVyKCkpIHtcclxuXHJcbiAgICAgICAgZ2FtZU92ZXJEaWFsb2coKVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGNwdVR1cm4oKVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gcGxheWVyVHVybihxdWFkcmFudCl7XHJcblxyXG4gICAgR0FNRS50dXJuKHF1YWRyYW50KVxyXG4gICAgZGlzcGxheVR1cm4oKVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gY3B1VHVybigpIHtcclxuXHJcbiAgICBpZihHQU1FLmdldE1vZGUoKSAhPT0gXCJDcHVNb2RlXCIpIHJldHVyblxyXG5cclxuICAgIEdBTUUuQ1BVdHVybigpXHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7IGRpc3BsYXlUdXJuKCkgfSwgMjAwMClcclxuXHJcbiAgICBpZihHQU1FLmlzR2FtZU92ZXIoKSkgZ2FtZU92ZXJEaWFsb2coKVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZGlzcGxheVR1cm4oKXtcclxuXHJcbiAgICB0b2dnbGVDb3ZlckJ1dHRvbigpXHJcbiAgICB0b2dnbGVBY3RpdmVCb2FyZCgpXHJcbiAgICBkaXNwbGF5UGxheWVyVHVybigpXHJcbiAgICBkaXNwbGF5Qm9hcmQoKVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gdG9nZ2xlQWN0aXZlQm9hcmQoKSB7XHJcblxyXG4gICAgZWxlbWVudHMuYm9hcmRzW0dBTUUuZ2V0UGFzc2l2ZVBsYXllclJlZigpXS5jbGFzc0xpc3QucmVtb3ZlKFwidW5hYmxlXCIpXHJcbiAgICBlbGVtZW50cy5ib2FyZHNbR0FNRS5nZXRBY3RpdmVQbGF5ZXJSZWYoKV0uY2xhc3NMaXN0LmFkZChcInVuYWJsZVwiKVxyXG5cclxuICAgIGlmKEdBTUUuZ2V0TW9kZSgpID09PSBcIkNwdU1vZGVcIikgZWxlbWVudHMuYm9hcmRzWzBdLmNsYXNzTGlzdC5hZGQoXCJ1bmFibGVcIilcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZUNvdmVyQnV0dG9uKCl7XHJcblxyXG4gICAgZWxlbWVudHMuYnRuQ292ZXJBcnJbR0FNRS5nZXRQYXNzaXZlUGxheWVyUmVmKCldLmRpc2FibGVkID0gdHJ1ZVxyXG4gICAgZWxlbWVudHMuYnRuQ292ZXJBcnJbR0FNRS5nZXRQYXNzaXZlUGxheWVyUmVmKCldLmZpcnN0RWxlbWVudENoaWxkLmRhdGFzZXQuaGlkZGVuID0gdHJ1ZVxyXG4gICAgZWxlbWVudHMuYnRuQ292ZXJBcnJbR0FNRS5nZXRQYXNzaXZlUGxheWVyUmVmKCldLmxhc3RFbGVtZW50Q2hpbGQuZGF0YXNldC5oaWRkZW4gPSBmYWxzZVxyXG5cclxuICAgIGVsZW1lbnRzLmJ0bkNvdmVyQXJyW0dBTUUuZ2V0QWN0aXZlUGxheWVyUmVmKCldLmRpc2FibGVkID0gZmFsc2VcclxuXHJcbiAgICBpZihHQU1FLmdldE1vZGUoKSA9PT0gXCJDcHVNb2RlXCIpIGVsZW1lbnRzLmJ0bkNvdmVyQXJyWzFdLmRpc2FibGVkID0gdHJ1ZVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gdG9nZ2xlQ292ZXJCb2FyZChlKXtcclxuXHJcbiAgICBsZXQgd2hpY2hCb2FyZCA9IGUuY3VycmVudFRhcmdldC5wYXJlbnRFbGVtZW50LmRhdGFzZXQuYm9hcmRcclxuICAgIGxldCBib2FyZCA9IGVsZW1lbnRzLmJvYXJkc1t3aGljaEJvYXJkXVxyXG5cclxuICAgIHRvZ2dsZUNvdmVySWNvbih3aGljaEJvYXJkKVxyXG5cclxuICAgIGlmKGJvYXJkLmhhc0F0dHJpYnV0ZShcImlkXCIpKSBib2FyZC5yZW1vdmVBdHRyaWJ1dGUoXCJpZFwiKVxyXG4gICAgZWxzZSBib2FyZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInVuY292ZXJcIilcclxufVxyXG5cclxuZnVuY3Rpb24gdG9nZ2xlQ292ZXJJY29uKHdoaWNoUGxheWVyKXtcclxuXHJcbiAgICBsZXQgYnRuID0gZWxlbWVudHMuYnRuQ292ZXJBcnJbd2hpY2hQbGF5ZXJdXHJcblxyXG4gICAgYnRuLmZpcnN0RWxlbWVudENoaWxkLmRhdGFzZXQuaGlkZGVuID09PSBcInRydWVcIiA/IFxyXG4gICAgYnRuLmZpcnN0RWxlbWVudENoaWxkLmRhdGFzZXQuaGlkZGVuID0gXCJmYWxzZVwiIDogYnRuLmZpcnN0RWxlbWVudENoaWxkLmRhdGFzZXQuaGlkZGVuID0gXCJ0cnVlXCI7XHJcblxyXG4gICAgYnRuLmxhc3RFbGVtZW50Q2hpbGQuZGF0YXNldC5oaWRkZW4gPT09IFwidHJ1ZVwiID8gXHJcbiAgICBidG4ubGFzdEVsZW1lbnRDaGlsZC5kYXRhc2V0LmhpZGRlbiA9IFwiZmFsc2VcIiA6IGJ0bi5sYXN0RWxlbWVudENoaWxkLmRhdGFzZXQuaGlkZGVuID0gXCJ0cnVlXCI7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBjcHVSZWFkeSgpIHtcclxuXHJcbiAgICBpZihHQU1FLmdldE1vZGUoKSAhPT0gXCJDcHVNb2RlXCIpIHJldHVyblxyXG5cclxuICAgIGVsZW1lbnRzLmJ0blJlYWR5QXJyWzFdLmRhdGFzZXQucmVhZHkgPSB0cnVlXHJcbiAgICBlbGVtZW50cy5idG5SZWFkeUFyclsxXS5kaXNhYmxlZCA9IHRydWVcclxuICAgIGVsZW1lbnRzLmJ0blJhbmRvbUFyclsxXS5kaXNhYmxlZCA9IHRydWVcclxuICAgIGVsZW1lbnRzLmJ0bkNvdmVyQXJyWzFdLmRpc2FibGVkID0gdHJ1ZVxyXG4gICAgZWxlbWVudHMuYnRuQ292ZXJBcnJbMV0uZmlyc3RFbGVtZW50Q2hpbGQuZGF0YXNldC5oaWRkZW4gPSB0cnVlXHJcbiAgICBlbGVtZW50cy5idG5Db3ZlckFyclsxXS5sYXN0RWxlbWVudENoaWxkLmRhdGFzZXQuaGlkZGVuID0gZmFsc2VcclxuXHJcbiAgICBHQU1FLnBsYWNlUGxheWVyU2hpcHMoMSlcclxufVxyXG5cclxuZnVuY3Rpb24gZ2FtZU92ZXJEaWFsb2coKXtcclxuXHJcbiAgICBlbGVtZW50cy5kaWFsb2dHYW1lT3Zlci5yZW1vdmVBdHRyaWJ1dGUoXCJpZFwiKTtcclxuICAgIGVsZW1lbnRzLndyYXBwZXIuY2xhc3NMaXN0LmFkZChcImJsdXJcIik7XHJcblxyXG4gICAgZGlzcGxheVdpbm5lcigpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlcGxheSgpe1xyXG5cclxuICAgIEdBTUUucmVwbGF5KClcclxuICAgIHJlc2V0RE9NKClcclxufVxyXG5cclxuZnVuY3Rpb24gcmVzZXQoKXtcclxuXHJcbiAgICBHQU1FLnJlc2V0KClcclxuICAgIHJlc2V0RE9NKClcclxuICAgIG9wZW5TdGFydERpYWxvZygpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc2V0RE9NICgpIHtcclxuXHJcbiAgICBhcHBseUdyaWQoKTtcclxuICAgIGVsZW1lbnRzLnRpdGxlLnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgIGVsZW1lbnRzLmJ0blJhbmRvbUFyci5mb3JFYWNoKGJ0biA9PiBidG4uZGlzYWJsZWQgPSBmYWxzZSk7XHJcbiAgICBlbGVtZW50cy5idG5SZWFkeUFyci5mb3JFYWNoKGJ0biA9PiBidG4uZGlzYWJsZWQgPSBmYWxzZSk7XHJcbiAgICBlbGVtZW50cy5idG5Db3ZlckFyci5mb3JFYWNoKGJ0biA9PiBidG4uZGlzYWJsZWQgPSBmYWxzZSk7XHJcbiAgICBlbGVtZW50cy5kaWFsb2dHYW1lT3Zlci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNsb3NlXCIpO1xyXG4gICAgZWxlbWVudHMud3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKFwiYmx1clwiKTtcclxuICAgIGNwdVJlYWR5KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZVRoZW1lKGUpe1xyXG5cclxuICAgIGxldCB0YXJnZXQgPSBlLmN1cnJlbnRUYXJnZXRcclxuXHJcbiAgICBpZihlbGVtZW50cy5ib2R5LmNsYXNzTmFtZSA9PT0gXCJ0aGVtZS1kYXJrXCIpIHtcclxuXHJcbiAgICAgICAgZWxlbWVudHMuYm9keS5jbGFzc05hbWUgPSBcInRoZW1lLWxpZ2h0XCJcclxuICAgICAgICB0YXJnZXQuZmlyc3RFbGVtZW50Q2hpbGQuZGF0YXNldC5oaWRkZW4gPSB0cnVlXHJcbiAgICAgICAgdGFyZ2V0Lmxhc3RFbGVtZW50Q2hpbGQuZGF0YXNldC5oaWRkZW4gPSBmYWxzZVxyXG5cclxuICAgIH0gZWxzZSBpZihlbGVtZW50cy5ib2R5LmNsYXNzTmFtZSA9PT0gXCJ0aGVtZS1saWdodFwiKSB7XHJcblxyXG4gICAgICAgIGVsZW1lbnRzLmJvZHkuY2xhc3NOYW1lID0gXCJ0aGVtZS1kYXJrXCJcclxuICAgICAgICB0YXJnZXQuZmlyc3RFbGVtZW50Q2hpbGQuZGF0YXNldC5oaWRkZW4gPSBmYWxzZVxyXG4gICAgICAgIHRhcmdldC5sYXN0RWxlbWVudENoaWxkLmRhdGFzZXQuaGlkZGVuID0gdHJ1ZVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIiwiaW1wb3J0IHtlbGVtZW50cywgcGxheWVyc1JlYWR5fSBmcm9tIFwiLi9kb21cIlxyXG5pbXBvcnQgeyBQbGF5ZXIsIENQVSB9IGZyb20gXCIuL3BsYXllclwiXHJcbi8vaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL3NoaXBcIlxyXG5pbXBvcnQge3N0b3JlRGF0YSwgcmV0cmlldmVEYXRhLCB1cGRhdGVEYXRhfSBmcm9tIFwiLi9zdG9yYWdlXCJcclxuaW1wb3J0IHsgZGlzcGxheVR1cm4gfSBmcm9tIFwiLi9kaXNwbGF5XCJcclxuaW1wb3J0IHsgR0FNRSB9IGZyb20gXCIuXCJcclxuXHJcblxyXG5leHBvcnQgeyBHYW1lIH1cclxuXHJcblxyXG5jbGFzcyBHYW1lIHtcclxuXHJcbiAgICAjcGxheWVyVHVybjtcclxuICAgICNwbGF5ZXJzID0gW107XHJcbiAgICAjbW9kZTtcclxuICAgICNkaWZmaWN1bHR5O1xyXG5cclxuICAgIC8vY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICAgIHNldEdhbWVEYXRhKG1vZGUsIHBsYXllcnNOYW1lcywgZGlmZmljdWx0eSkge1xyXG5cclxuICAgICAgICB0aGlzLiNtb2RlID0gbW9kZVxyXG4gICAgICAgIHRoaXMuI2RpZmZpY3VsdHkgPSBkaWZmaWN1bHR5XHJcblxyXG4gICAgICAgIGlmKG1vZGUgPT09IFwiUGxheWVyTW9kZVwiKSB7XHJcblxyXG4gICAgICAgICAgICBmb3IobGV0IG5hbWUgb2YgcGxheWVyc05hbWVzKSB0aGlzLiNjcmVhdGVQbGF5ZXIobmFtZSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy4jY3JlYXRlUGxheWVyKHBsYXllcnNOYW1lc1swXSlcclxuICAgICAgICB0aGlzLiNjcmVhdGVDUFUocGxheWVyc05hbWVzWzFdKVxyXG4gICAgfVxyXG4gIFxyXG4gICAgI2NyZWF0ZVBsYXllcihuYW1lKSB7XHJcblxyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuI3BsYXllcnMubGVuZ3RoXHJcbiAgICAgICAgbGV0IG51bSA9IGluZGV4ID09PSAwID8gXCJPbmVcIiA6IFwiVHdvXCJcclxuXHJcbiAgICAgICAgbGV0IHBsYXllciA9IG5ldyBQbGF5ZXIobmFtZSB8fCBgUGxheWVyICR7bnVtfWApXHJcblxyXG4gICAgICAgIHRoaXMuI3BsYXllcnMucHVzaChwbGF5ZXIpXHJcbiAgICB9XHJcblxyXG4gICAgI2NyZWF0ZUNQVSgpIHtcclxuXHJcbiAgICAgICAgbGV0IHBsYXllciA9IG5ldyBDUFUoXCJDUFVcIiwgdGhpcy4jZGlmZmljdWx0eSlcclxuXHJcbiAgICAgICAgdGhpcy4jcGxheWVycy5wdXNoKHBsYXllcilcclxuICAgIH1cclxuXHJcbiAgICBzdGFydEdhbWUoKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgdGhpcy4jcGxheWVyVHVybiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpXHJcblxyXG4gICAgICAgIGlmKHRoaXMuI21vZGUgPT09IFwiQ3B1TW9kZVwiKSB0aGlzLiNwbGF5ZXJUdXJuID0gMFxyXG4gICAgfVxyXG5cclxuICAgIHR1cm4ocXVhZHJhbnQpIHtcclxuIFxyXG4gICAgICAgIGxldCBkdXBsaWNhdGVkTW92ZSA9IHRoaXMuI3BsYXllcnNbdGhpcy4jcGxheWVyVHVybl0uY2hlY2tNb3ZlcyhxdWFkcmFudClcclxuICAgICBcclxuICAgICAgICBpZihkdXBsaWNhdGVkTW92ZSkgcmV0dXJuXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy4jc2VuZEF0dGFjayhxdWFkcmFudClcclxuXHJcbiAgICAgICAgdGhpcy4jcGxheWVyVHVybiA9IHRoaXMuZ2V0UGFzc2l2ZVBsYXllclJlZigpXHJcbiAgICB9XHJcblxyXG4gICAgQ1BVdHVybigpe1xyXG5cclxuICAgICAgICBpZih0aGlzLiNwbGF5ZXJUdXJuID09PSAwKSByZXR1cm5cclxuXHJcbiAgICAgICAgdGhpcy4jdXBkYXRlU3RhdGUoKVxyXG5cclxuICAgICAgICBsZXQgc3F1YXJlID0gdGhpcy4jcGxheWVyc1sxXS5hdHRhY2soKVxyXG4gICAgICAgIHRoaXMuI3NlbmRBdHRhY2soc3F1YXJlKVxyXG5cclxuICAgICAgICB0aGlzLiNwbGF5ZXJUdXJuID0gdGhpcy5nZXRQYXNzaXZlUGxheWVyUmVmKClcclxuICAgIH1cclxuXHJcbiAgICAjdXBkYXRlU3RhdGUoKXtcclxuXHJcbiAgICAgICAgbGV0IHJpdmFsSGl0TGlzdCA9IHRoaXMuZ2V0UGxheWVySGl0TGlzdCgwKVxyXG4gICAgICAgIHRoaXMuI3BsYXllcnNbMV0uc2V0Uml2YWxIaXRMaXN0KHJpdmFsSGl0TGlzdClcclxuXHJcbiAgICAgICAgbGV0IHN1bmtlbkxpc3QgPSB0aGlzLmdldFBsYXllclN1bmtTaGlwcygwKVxyXG4gICAgICAgIHRoaXMuI3BsYXllcnNbMV0uc2V0Uml2YWxTdW5rU2hpcHMoc3Vua2VuTGlzdClcclxuICAgIH1cclxuXHJcbiAgICByZXBsYXkoKXtcclxuXHJcbiAgICAgICAgdGhpcy4jcGxheWVycy5mb3JFYWNoKHBsYXllciA9PiBwbGF5ZXIucmVwbGF5KCkpXHJcbiAgICAgICAgdGhpcy4jcGxheWVyVHVybiA9IFwiXCJcclxuICAgIH1cclxuXHJcbiAgICByZXNldCgpe1xyXG5cclxuICAgICAgICB0aGlzLiNkaWZmaWN1bHR5ID0gXCJcIlxyXG4gICAgICAgIHRoaXMuI21vZGUgPSBcIlwiXHJcbiAgICAgICAgdGhpcy4jcGxheWVyVHVybiA9IFwiXCJcclxuICAgICAgICB0aGlzLiNwbGF5ZXJzID0gW11cclxuICAgIH1cclxuXHJcbiAgICAjc2VuZEF0dGFjayhxdWFkcmFudCkge1xyXG5cclxuICAgICAgICBsZXQgcGxheWVyID0gdGhpcy4jcGxheWVyc1t0aGlzLmdldFBhc3NpdmVQbGF5ZXJSZWYoKV1cclxuICAgICAgICBwbGF5ZXIucmVjZWl2ZUF0dGFjayhxdWFkcmFudClcclxuICAgIH1cclxuXHJcbiAgICBpc0dhbWVPdmVyKCkge1xyXG4gICAgXHJcbiAgICAgICAgZm9yKGxldCBwbGF5ZXIgb2YgdGhpcy4jcGxheWVycykge1xyXG5cclxuICAgICAgICAgICAgaWYocGxheWVyLmdldFN1bmtTaGlwcygpLmxlbmd0aCA9PT0gNSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TW9kZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4jbW9kZVxyXG4gICAgfVxyXG5cclxuICAgIGdldFBhc3NpdmVQbGF5ZXJSZWYoKSB7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLiNwbGF5ZXJUdXJuID09PSAwID8gMSA6IDBcclxuICAgIH1cclxuXHJcbiAgICBnZXRBY3RpdmVQbGF5ZXJSZWYoKSB7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLiNwbGF5ZXJUdXJuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UGxheWVyTmFtZSh3aGljaFBsYXllciA9IHRoaXMuI3BsYXllclR1cm4pe1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy4jcGxheWVyc1t3aGljaFBsYXllcl0udXBwZXJDYXNlTmFtZSgpXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UGxheWVySGl0TGlzdCh3aGljaFBsYXllciA9IHRoaXMuI3BsYXllclR1cm4pe1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy4jcGxheWVyc1t3aGljaFBsYXllcl0uZ2V0SGl0TGlzdCgpXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UGxheWVyTWlzc0xpc3Qod2hpY2hQbGF5ZXIgPSB0aGlzLiNwbGF5ZXJUdXJuKXtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuI3BsYXllcnNbd2hpY2hQbGF5ZXJdLmdldE1pc3NMaXN0KClcclxuICAgIH1cclxuXHJcbiAgICBnZXRQbGF5ZXJTaGlwcyh3aGljaFBsYXllciA9IHRoaXMuI3BsYXllclR1cm4pe1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy4jcGxheWVyc1t3aGljaFBsYXllcl0uZ2V0U2hpcHNDb29yZHMoKVxyXG4gICAgfVxyXG5cclxuICAgIGdldFBsYXllclN1bmtTaGlwcyh3aGljaFBsYXllciA9IHRoaXMuI3BsYXllclR1cm4pIHtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gdGhpcy4jcGxheWVyc1t3aGljaFBsYXllcl0uZ2V0U3Vua1NoaXBzKClcclxuICAgIH1cclxuXHJcbiAgICBwbGFjZVBsYXllclNoaXBzKHdoaWNoUGxheWVyID0gdGhpcy4jcGxheWVyVHVybil7XHJcblxyXG4gICAgICAgIHRoaXMuI3BsYXllcnNbd2hpY2hQbGF5ZXJdLnBsYWNlU2hpcHMoKVxyXG4gICAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQge1NoaXB9IGZyb20gXCIuL3NoaXBcIlxyXG5cclxuZXhwb3J0IHtHYW1lQm9hcmR9XHJcblxyXG5jbGFzcyBHYW1lQm9hcmQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHJvd1F1YW50aXR5ID0gMTAsIGNvbHVtblF1YW50aXR5ID0gMTApe1xyXG5cclxuICAgICAgICB0aGlzLnJvd1F1YW50aXR5ID0gcm93UXVhbnRpdHksXHJcbiAgICAgICAgdGhpcy5jb2x1bW5RdWFudGl0eSA9IGNvbHVtblF1YW50aXR5LFxyXG4gICAgICAgIHRoaXMuc2hpcFR5cGVzID0gW3t0eXBlOiBcImNhcnJpZXJcIiwgbGVuZ3RoOiA1fSwge3R5cGU6IFwiYmF0dGxlc2hpcFwiLCBsZW5ndGg6IDR9LCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7dHlwZTogXCJkZXN0cm95ZXJcIiwgbGVuZ3RoOiAzfSwge3R5cGU6IFwic3VibWFyaW5lXCIsIGxlbmd0aDogM30sICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7dHlwZTogXCJwYXRyb2wgYm9hdFwiLCBsZW5ndGg6IDJ9XSxcclxuICAgICAgICB0aGlzLnNoaXBzID0gW10sXHJcbiAgICAgICAgdGhpcy5zdW5rU2hpcHMgPSBbXSxcclxuICAgICAgICB0aGlzLndhdGVySGl0TGlzdCA9IFtdLFxyXG4gICAgICAgIHRoaXMuc2hpcEhpdExpc3QgPSBbXSBcclxuICAgIH1cclxuXHJcbiAgICAjY3JlYXRlU2hpcHMoKXtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICBsZXQgc2hpcHNRdWV1ZSA9IFtdXHJcblxyXG4gICAgICAgIGZvcihsZXQgc2hpcCBvZiB0aGlzLnNoaXBUeXBlcyl7XHJcbiAgXHJcbiAgICAgICAgICAgIHNoaXBzUXVldWUucHVzaChuZXcgU2hpcChzaGlwLmxlbmd0aCwgc2hpcC50eXBlKSkgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gc2hpcHNRdWV1ZSAgICBcclxuICAgIH1cclxuXHJcbiAgICBwbGFjZVNoaXBzKCkge1xyXG5cclxuICAgICAgICB0aGlzLnNoaXBzID0gW11cclxuICAgICAgICB0aGlzLnNoaXBzQ29vcmRzID0gW11cclxuXHJcbiAgICAgICAgbGV0IHNoaXBzUXVldWUgPSB0aGlzLiNjcmVhdGVTaGlwcygpXHJcbiAgICAgICAgbGV0IGFkamFjZW5jeUxpc3QgPSBbW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW11dXHJcblxyXG4gICAgICAgIHdoaWxlKHNoaXBzUXVldWUubGVuZ3RoID4gMCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgIGxldCByYW5kb21Sb3cgPSAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXHJcbiAgICAgICAgICAgIGxldCByYW5kb21Db2wgPSAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXHJcbiAgICAgICAgICAgIGxldCB2ZXJ0aWNhbCA9ICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMilcclxuICAgIFxyXG4gICAgICAgICAgICBsZXQgcmFuZG9tUm93Q29weSA9IHJhbmRvbVJvd1xyXG4gICAgICAgICAgICBsZXQgcmFuZG9tQ29sQ29weSA9IHJhbmRvbUNvbCBcclxuICAgIFxyXG4gICAgICAgICAgICBsZXQgc2hpcCA9IHNoaXBzUXVldWUuc2hpZnQoKVxyXG4gICAgICAgICAgICB0aGlzLnNoaXBzLnB1c2goc2hpcClcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZihhZGphY2VuY3lMaXN0W3JhbmRvbVJvd0NvcHldLmluY2x1ZGVzKHJhbmRvbUNvbENvcHkpKXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXAuY29vcmRpbmF0ZXMgPSBbXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwc1F1ZXVlLnVuc2hpZnQoc2hpcClcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGlwcy5wb3AoKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNoaXAuY29vcmRpbmF0ZXMucHVzaChbcmFuZG9tUm93Q29weSwgcmFuZG9tQ29sQ29weV0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHZlcnRpY2FsKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyYW5kb21Sb3dDb3B5IDwgKHRoaXMucm93UXVhbnRpdHkgLSAxKSkge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYW5kb21Sb3dDb3B5ICsrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmFuZG9tUm93Q29weSA9IHJhbmRvbVJvdyAtIChzaGlwLmxlbmd0aCAtIChpICsgMSkpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyYW5kb21Db2xDb3B5IDwgKHRoaXMuY29sdW1uUXVhbnRpdHkgLSAxKSkge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYW5kb21Db2xDb3B5ICsrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmFuZG9tQ29sQ29weSA9IHJhbmRvbUNvbCAtIChzaGlwLmxlbmd0aCAtIChpICsgMSkpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKHNoaXAuY29vcmRpbmF0ZXMubGVuZ3RoID4gMCkgdGhpcy4jZW5jbG9zZVNoaXAoc2hpcCwgYWRqYWNlbmN5TGlzdClcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAjZW5jbG9zZVNoaXAoc2hpcCwgYWRqYWNlbmN5TGlzdCl7XHJcblxyXG4gICAgICAgIGZvcihsZXQgY29vcmRpbmF0ZSBvZiBzaGlwLmNvb3JkaW5hdGVzKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgcm93ID0gY29vcmRpbmF0ZVswXVxyXG4gICAgICAgICAgICBsZXQgY29sID0gY29vcmRpbmF0ZVsxXVxyXG5cclxuICAgICAgICAgICAgbGV0IGFyZWEgPSBbW3JvdyAtIDEsIGNvbF0sIFtyb3cgLSAxLCBjb2wgLSAxXSwgW3JvdyAtIDEsIGNvbCArIDFdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbcm93ICsgMSwgY29sXSwgW3JvdyArIDEsIGNvbCAtIDFdLCBbcm93ICsgMSwgY29sICsgMV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtyb3csIGNvbF0sIFtyb3csIGNvbCAtIDFdLCBbcm93LCBjb2wgKyAxXV1cclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgYXJyIG9mIGFyZWEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihhcnJbMF0gPCAwIHx8IGFyclsxXSA8IDAgfHxcclxuICAgICAgICAgICAgICAgICAgIGFyclswXSA+ICh0aGlzLnJvd1F1YW50aXR5IC0gMSkgfHwgYXJyWzFdID4gKHRoaXMuY29sdW1uUXVhbnRpdHkgLSAxKSkgY29udGludWVcclxuXHJcbiAgICAgICAgICAgICAgICBpZighYWRqYWNlbmN5TGlzdFthcnJbMF1dLmluY2x1ZGVzKGFyclsxXSkpIGFkamFjZW5jeUxpc3RbYXJyWzBdXS5wdXNoKGFyclsxXSkgXHJcbiAgICAgICAgICAgIH0gICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyKCkge1xyXG5cclxuICAgICAgICB0aGlzLnNoaXBIaXRMaXN0ID0gIFtbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXV1cclxuICAgICAgICB0aGlzLndhdGVySGl0TGlzdCA9IFtbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXV1cclxuICAgICAgICB0aGlzLnNoaXBzID0gW11cclxuICAgICAgICB0aGlzLnN1bmtTaGlwcyA9IFtdXHJcbiAgICAgICAgdGhpcy5zaGlwc0Nvb3JkcyA9IFtdXHJcbiAgICB9XHJcblxyXG4gICAgcmVjZWl2ZUF0dGFjayhzcXVhcmUpe1xyXG4gICAgXHJcbiAgICAgICAgbGV0IGhpdE9uVGFyZ2V0ID0gZmFsc2VcclxuXHJcbiAgICAgICAgZm9yKGxldCBzaGlwIG9mIHRoaXMuc2hpcHMpIHtcclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgY29vcmRpbmF0ZSBvZiBzaGlwLmNvb3JkaW5hdGVzKXtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihjb29yZGluYXRlWzBdID09PSBzcXVhcmVbMF0gJiYgY29vcmRpbmF0ZVsxXSA9PT0gc3F1YXJlWzFdKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNoaXAuaGl0KClcclxuICAgICAgICAgICAgICAgICAgICBpZihzaGlwLmlzU3VuaykgdGhpcy5zdW5rU2hpcHMucHVzaChzaGlwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNoaXBIaXRMaXN0LnB1c2goc3F1YXJlKSAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaGl0T25UYXJnZXQgPSB0cnVlXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKGhpdE9uVGFyZ2V0KSByZXR1cm5cclxuICAgICAgICB9IFxyXG5cclxuICAgICAgICB0aGlzLndhdGVySGl0TGlzdC5wdXNoKHNxdWFyZSlcclxuICAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IFwiLi4vc3JjL3N0eWxlLmNzc1wiXHJcbmltcG9ydCB7UGxheWVyfSBmcm9tIFwiLi9wbGF5ZXJcIlxyXG5pbXBvcnQge0dhbWVCb2FyZH0gZnJvbSBcIi4vZ2FtZWJvYXJkXCJcclxuaW1wb3J0IHtTaGlwfSBmcm9tIFwiLi9zaGlwXCJcclxuaW1wb3J0IHtlbGVtZW50c30gZnJvbSBcIi4vZG9tXCJcclxuaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuL2dhbWVcIlxyXG5cclxuZXhwb3J0IHsgR0FNRSB9XHJcblxyXG5sZXQgR0FNRSA9IG5ldyBHYW1lKClcclxuZWxlbWVudHMuaW5pdCgpXHJcblxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQge0dhbWVCb2FyZH0gZnJvbSBcIi4vZ2FtZWJvYXJkXCJcclxuXHJcbmV4cG9ydCB7UGxheWVyLCBDUFV9XHJcblxyXG5jbGFzcyBQbGF5ZXIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5hbWUpe1xyXG5cclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lXHJcbiAgICAgICAgdGhpcy5nYW1lQm9hcmQgPSBuZXcgR2FtZUJvYXJkKClcclxuICAgICAgICB0aGlzLm1vdmVzID0gW1tdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdXVxyXG4gICAgfVxyXG5cclxuICAgIHVwcGVyQ2FzZU5hbWUoKSB7XHJcblxyXG4gICAgICAgcmV0dXJuIHRoaXMubmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHRoaXMubmFtZS5zbGljZSgxKVxyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrTW92ZXMocXVhZHJhbnQpIHtcclxuXHJcbiAgICAgICAgaWYodGhpcy5tb3Zlc1txdWFkcmFudFswXV1bcXVhZHJhbnRbMV1dID09PSBxdWFkcmFudFsxXSkgcmV0dXJuIHRydWVcclxuXHJcbiAgICAgICAgdGhpcy5tb3Zlc1txdWFkcmFudFswXV1bcXVhZHJhbnRbMV1dID0gcXVhZHJhbnRbMV1cclxuICAgIH1cclxuXHJcbiAgICBwbGFjZVNoaXBzKCl7XHJcblxyXG4gICAgICAgIHRoaXMuZ2FtZUJvYXJkLnBsYWNlU2hpcHMoKVxyXG4gICAgfVxyXG5cclxuICAgIHJlY2VpdmVBdHRhY2soc3F1YXJlKSB7XHJcblxyXG4gICAgICAgIHRoaXMuZ2FtZUJvYXJkLnJlY2VpdmVBdHRhY2soc3F1YXJlKVxyXG4gICAgfVxyXG5cclxuICAgIGdldEhpdExpc3QoKXtcclxuXHJcbiAgICAgICByZXR1cm4gdGhpcy5nYW1lQm9hcmQuc2hpcEhpdExpc3RcclxuICAgIH1cclxuXHJcbiAgICBnZXRNaXNzTGlzdCgpe1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5nYW1lQm9hcmQud2F0ZXJIaXRMaXN0XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U2hpcHNDb29yZHMoKXtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgc2hpcHMgPSB0aGlzLmdhbWVCb2FyZC5zaGlwc1xyXG5cclxuICAgICAgICBsZXQgc2hpcHNDb29yZHMgPSBbXVxyXG4gICAgIFxyXG4gICAgICAgIGZvcihsZXQgc2hpcCBvZiBzaGlwcykgc2hpcHNDb29yZHMucHVzaChzaGlwLmNvb3JkaW5hdGVzKVxyXG5cclxuICAgICAgICByZXR1cm4gc2hpcHNDb29yZHNcclxuICAgIH1cclxuXHJcbiAgICBnZXRTdW5rU2hpcHMoKXtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgc2hpcHMgPSB0aGlzLmdhbWVCb2FyZC5zdW5rU2hpcHNcclxuXHJcbiAgICAgICAgaWYoc2hpcHMubGVuZ3RoIDwgMSkgcmV0dXJuIFtdXHJcbiAgICAgXHJcbiAgICAgICAgbGV0IGNvb3JkcyA9IFtdXHJcbiAgICAgXHJcbiAgICAgICAgZm9yKGxldCBzaGlwIG9mIHNoaXBzKSBjb29yZHMucHVzaChzaGlwLmNvb3JkaW5hdGVzKVxyXG4gICAgIFxyXG4gICAgICAgIHJldHVybiBjb29yZHNcclxuICAgIH1cclxuXHJcbiAgICByZXBsYXkoKXtcclxuXHJcbiAgICAgICAgdGhpcy5tb3ZlcyA9IFtbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXV1cclxuICAgICAgICB0aGlzLmdhbWVCb2FyZCA9IG5ldyBHYW1lQm9hcmQoKVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbmNsYXNzIENQVSBleHRlbmRzIFBsYXllciB7XHJcblxyXG4gICAgcml2YWxIaXRMaXN0ID0gW107XHJcbiAgICByaXZhbFN1bmtMaXN0ID0gW107XHJcbiAgICBkaXJlY3Rpb24gPSBudWxsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGRpZmZpY3VsdHkpe1xyXG4gICAgICAgIHN1cGVyKG5hbWUpXHJcbiAgICAgICAgdGhpcy5kaWZmaWN1bHR5ID0gZGlmZmljdWx0eVxyXG4gICAgfVxyXG5cclxuICAgIHJlcGxheSgpe1xyXG5cclxuICAgICAgICB0aGlzLm1vdmVzID0gW1tdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdXVxyXG4gICAgICAgIHRoaXMuZ2FtZUJvYXJkID0gbmV3IEdhbWVCb2FyZCgpXHJcbiAgICAgICAgdGhpcy5yaXZhbEhpdExpc3QgPSBbXVxyXG4gICAgICAgIHRoaXMucml2YWxTdW5rTGlzdCA9IFtdXHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBudWxsXHJcbiAgICB9XHJcblxyXG4gICAgc2V0Uml2YWxIaXRMaXN0KHJpdmFsSGl0TGlzdCkge1xyXG5cclxuICAgICAgICB0aGlzLnJpdmFsSGl0TGlzdCA9IHJpdmFsSGl0TGlzdFxyXG4gICAgfVxyXG5cclxuICAgIHNldFJpdmFsU3Vua1NoaXBzKHJpdmFsU3Vua0xpc3Qpe1xyXG5cclxuICAgICAgICBpZihyaXZhbFN1bmtMaXN0Lmxlbmd0aCA9PT0gdGhpcy5yaXZhbFN1bmtMaXN0Lmxlbmd0aCkgcmV0dXJuXHJcblxyXG4gICAgICAgIHRoaXMucml2YWxTdW5rTGlzdCA9IHJpdmFsU3Vua0xpc3RcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IG51bGxcclxuXHJcbiAgICAgICAgaWYodGhpcy5kaWZmaWN1bHR5ID09PSBcImhhcmRcIikgdGhpcy4jZW5jbG9zZVN1bmtTaGlwKCkgXHJcbiAgICB9XHJcblxyXG4gICAgYXR0YWNrKCl7XHJcblxyXG4gICAgICAgIGxldCBzcXVhcmUgPSB0aGlzLiNtb3ZlQWxnb3JpdGhtKClcclxuXHJcbiAgICAgICAgaWYoc3F1YXJlICE9PSBudWxsKSByZXR1cm4gc3F1YXJlXHJcblxyXG4gICAgICAgIHNxdWFyZSA9IHRoaXMuI3JhbmRvbVNxdWFyZSgpXHJcblxyXG4gICAgICAgICAgICB3aGlsZSh0aGlzLmNoZWNrTW92ZXMoc3F1YXJlKSkgc3F1YXJlID0gdGhpcy4jcmFuZG9tU3F1YXJlKClcclxuXHJcbiAgICAgICAgcmV0dXJuIHNxdWFyZVxyXG4gICAgfVxyXG5cclxuICAgICNyYW5kb21TcXVhcmUoKXtcclxuXHJcbiAgICAgICAgbGV0IHJhbmRvbVJvdyA9ICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMClcclxuICAgICAgICBsZXQgcmFuZG9tQ29sID0gIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKVxyXG5cclxuICAgICAgICBsZXQgc3F1YXJlID0gW3JhbmRvbVJvdywgcmFuZG9tQ29sXVxyXG5cclxuICAgICAgICByZXR1cm4gc3F1YXJlXHJcbiAgICB9XHJcblxyXG4gICAgI2lzU3Vuayhtb3ZlKXtcclxuXHJcbiAgICAgICAgZm9yKGxldCBjb29yZCBvZiB0aGlzLnJpdmFsU3Vua0xpc3QuZmxhdCgpKSBpZihjb29yZFswXSA9PT0gbW92ZVswXSAmJiBjb29yZFsxXSA9PT0gbW92ZVsxXSkgcmV0dXJuIHRydWVcclxuICAgIH1cclxuXHJcbiAgICAjbW92ZUFsZ29yaXRobSgpe1xyXG5cclxuICAgICAgICBpZih0aGlzLnJpdmFsSGl0TGlzdC5sZW5ndGggPCAxKSByZXR1cm4gbnVsbFxyXG5cclxuICAgICAgICBsZXQgY29vcmRRdWV1ZSA9IFsuLi50aGlzLnJpdmFsSGl0TGlzdF1cclxuXHJcbiAgICAgICAgd2hpbGUoY29vcmRRdWV1ZS5sZW5ndGggPiAwKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgY29vcmQgPSBjb29yZFF1ZXVlLnBvcCgpXHJcblxyXG4gICAgICAgICAgICBpZih0aGlzLiNpc1N1bmsoY29vcmQpKSBicmVhayAgXHJcblxyXG4gICAgICAgICAgICBsZXQgcm93ID0gY29vcmRbMF1cclxuICAgICAgICAgICAgbGV0IGNvbCA9IGNvb3JkWzFdXHJcblxyXG4gICAgICAgICAgICBsZXQgbW92ZXMgPSBbW3JvdyAtIDEsIGNvbF0sIFtyb3csIGNvbCArIDFdLCBbcm93ICsgMSwgY29sXSwgW3JvdywgY29sIC0gMV1dXHJcblxyXG4gICAgICAgICAgICBpZih0aGlzLmRpZmZpY3VsdHkgIT09IFwiZWFzeVwiKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5kaXJlY3Rpb24gPT09IG51bGwpIHRoaXMuI2NoZWNrRGlyZWN0aW9uKGNvb3JkKVxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5kaXJlY3Rpb24gPT09IFwidmVydGljYWxcIikgbW92ZXMgPSBbW3JvdyAtIDEsIGNvbF0sIFtyb3cgKyAxLCBjb2xdXVxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5kaXJlY3Rpb24gPT09IFwiaG9yaXpvbnRhbFwiKSBtb3ZlcyA9IFtbcm93LCBjb2wgKyAxXSwgW3JvdywgY29sIC0gMV1dXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgbW92ZSBvZiBtb3Zlcykge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKG1vdmVbMF0gPCAwIHx8IG1vdmVbMV0gPCAwIHx8IG1vdmVbMF0gPiAodGhpcy5nYW1lQm9hcmQucm93UXVhbnRpdHkgLSAxKSB8fCBcclxuICAgICAgICAgICAgICAgIG1vdmVbMV0gPiAodGhpcy5nYW1lQm9hcmQuY29sdW1uUXVhbnRpdHkgLSAxKSkgY29udGludWVcclxuXHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmNoZWNrTW92ZXMobW92ZSkgIT09IHRydWUpIHJldHVybiBtb3ZlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcblxyXG4gICAgI2NoZWNrRGlyZWN0aW9uKGhpdCl7XHJcblxyXG4gICAgICAgIGxldCByaXZhbEhpdExpc3QgPSBbLi4udGhpcy5yaXZhbEhpdExpc3RdXHJcbiAgICAgICAgbGV0IGxhc3RIaXQgPSByaXZhbEhpdExpc3Rbcml2YWxIaXRMaXN0Lmxlbmd0aCAtIDJdXHJcblxyXG4gICAgICAgIGlmKHR5cGVvZiBsYXN0SGl0ID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm5cclxuXHJcbiAgICAgICAgaWYoaGl0WzFdID09PSBsYXN0SGl0WzFdICYmXHJcbiAgICAgICAgICAoaGl0WzBdICsgMSA9PT0gbGFzdEhpdFswXSB8fCBoaXRbMF0gLSAxID09PSBsYXN0SGl0WzBdKSkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBcInZlcnRpY2FsXCJcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihoaXRbMF0gPT09IGxhc3RIaXRbMF0gJiZcclxuICAgICAgICAgIChoaXRbMV0gPT09IGxhc3RIaXRbMV0gKyAxIHx8IGhpdFsxXSA9PT0gbGFzdEhpdFsxXSAtIDEpKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IFwiaG9yaXpvbnRhbFwiXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAjZW5jbG9zZVN1bmtTaGlwKCl7XHJcblxyXG4gICAgICAgIGxldCByaXZhbFN1bmtMaXN0ID0gWy4uLnRoaXMucml2YWxTdW5rTGlzdF1cclxuXHJcbiAgICAgICAgbGV0IHN1bmtTaGlwID0gcml2YWxTdW5rTGlzdC5wb3AoKVxyXG5cclxuICAgICAgICBmb3IobGV0IGNvb3JkaW5hdGUgb2Ygc3Vua1NoaXApIHtcclxuXHJcbiAgICAgICAgICAgIGxldCByb3cgPSBjb29yZGluYXRlWzBdXHJcbiAgICAgICAgICAgIGxldCBjb2wgPSBjb29yZGluYXRlWzFdXHJcblxyXG4gICAgICAgICAgICBsZXQgYXJlYSA9IFtbcm93IC0gMSwgY29sXSwgW3JvdyAtIDEsIGNvbCAtIDFdLCBbcm93IC0gMSwgY29sICsgMV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtyb3cgKyAxLCBjb2xdLCBbcm93ICsgMSwgY29sIC0gMV0sIFtyb3cgKyAxLCBjb2wgKyAxXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW3JvdywgY29sXSwgW3JvdywgY29sIC0gMV0sIFtyb3csIGNvbCArIDFdXVxyXG5cclxuICAgICAgICAgICAgZm9yKGxldCBtb3ZlIG9mIGFyZWEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihtb3ZlWzBdIDwgMCB8fCBtb3ZlWzFdIDwgMCB8fCBtb3ZlWzBdID4gKHRoaXMuZ2FtZUJvYXJkLnJvd1F1YW50aXR5IC0gMSkgfHwgXHJcbiAgICAgICAgICAgICAgICAgICBtb3ZlWzFdID4gKHRoaXMuZ2FtZUJvYXJkLmNvbHVtblF1YW50aXR5IC0gMSkpIGNvbnRpbnVlXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja01vdmVzKG1vdmUpXHJcbiAgICAgICAgICAgIH0gICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcblxyXG4vLyBBTEdPUklUSE1cclxuXHJcbi8vIDEgLSBDdWFuZG8gZW5jdWVudHJhIDEgYmFyY28sIHF1ZSB2YXlhIGNvbW8gbGFzIGFndWphcyBkZWwgcmVsb2ogZW4gY2FkYSB2ZXogcXVlIGxlIHBlZ2FcclxuLy8gMiAtIEN1YW5kbyBlbmN1ZW50cmEgcXVlIGVzIHZlcnRpY2FsIHUgaG9yaXpvbnRhbCwgc29sbyBhdGFjYXIgZW4gbGEgbGluZWEgcXVlIHZhICh5YSBubyBjb21vIGFndWphcyBkZWwgcmVsb2opXHJcbi8vIDMgLSBTZWd1aXIgYXNpIGhhc3RhIHF1ZSBlbCBiYXJjbyBlc3RlIGh1bmRpZG9cclxuLy8gNCAtIEVsaW1pbmFyIGFkeWFjZW5jaWFzIGRlbCBzaGlwIGRlIGxhIHBvc2liaWxpZGFkIGRlIGdvbHBlby4gIiwiZXhwb3J0IHtTaGlwfVxyXG5cclxuY2xhc3MgU2hpcCB7XHJcblxyXG4gICAgI2hpdENvdW50ZXIgPSAwXHJcbiAgICAjaXNTdW5rID0gZmFsc2VcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihsZW5ndGggPSBudWxsLCB0eXBlID0gbnVsbCl7XHJcbiAgICAgICAgdGhpcy5sZW5ndGggPSBsZW5ndGhcclxuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlXHJcbiAgICAgICAgdGhpcy5jb29yZGluYXRlcyA9IFtdXHJcbiAgICB9XHJcblxyXG4gICAgaGl0KCkge1xyXG5cclxuICAgICAgICB0aGlzLiNoaXRDb3VudGVyICsrXHJcbiAgICAgICAgdGhpcy4jc3Vua0NoZWNrKClcclxuICAgIH1cclxuXHJcbiAgICAjc3Vua0NoZWNrKCl7XHJcbiBcclxuICAgICAgICBpZih0aGlzLiNoaXRDb3VudGVyID09PSB0aGlzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLiNpc1N1bmsgPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBpc1N1bmsoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy4jaXNTdW5rXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge1BsYXllcn0gZnJvbSBcIi4vcGxheWVyXCJcclxuaW1wb3J0IHtTaGlwfSBmcm9tIFwiLi9zaGlwXCJcclxuXHJcbmV4cG9ydCB7c3RvcmVEYXRhLCByZXRyaWV2ZURhdGEsIHVwZGF0ZURhdGF9XHJcblxyXG5cclxuZnVuY3Rpb24gc3RvcmVEYXRhKG1vZGUsIHBsYXllck9uZSwgcGxheWVyVHdvKSB7XHJcblxyXG4gICAgbGV0IHN0YXRlID0ge1xyXG4gICAgICAgIG1vZGU6IG1vZGUsXHJcbiAgICAgICAgcGxheWVyczogW3BsYXllck9uZSwgcGxheWVyVHdvXVxyXG4gICAgfVxyXG5cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic3RhdGVcIiwgSlNPTi5zdHJpbmdpZnkoc3RhdGUpKSBcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlRGF0YShzdGF0ZSl7XHJcblxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzdGF0ZVwiLCBKU09OLnN0cmluZ2lmeShzdGF0ZSkpXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiByZXRyaWV2ZURhdGEoKSB7XHJcblxyXG4gICBsZXQgc3RhdGUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic3RhdGVcIikpXHJcblxyXG4gICBsZXQgcGxheWVyT25lICA9IG5ldyBQbGF5ZXIoKVxyXG4gICBsZXQgcGxheWVyVHdvICA9IG5ldyBQbGF5ZXIoKVxyXG4gICBsZXQgcGxheWVycyA9IFtwbGF5ZXJPbmUsIHBsYXllclR3b11cclxuXHJcblxyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHBsYXllcnMubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgcGxheWVyc1tpXS5zZXRQcm9wZXJ0aWVzKHN0YXRlLnBsYXllcnNbaV0pXHJcblxyXG4gICAgICAgIHBsYXllcnNbaV0uZ2FtZUJvYXJkLnNldFByb3BlcnRpZXMoc3RhdGUucGxheWVyc1tpXS5nYW1lQm9hcmQpXHJcblxyXG4gICAgICAgIGxldCBwbGF5ZXJTaGlwcyA9IHBsYXllcnNbaV0uZ2FtZUJvYXJkLnNoaXBzXHJcblxyXG5cclxuICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgcGxheWVyU2hpcHMubGVuZ3RoOyBqKyspIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBzaGlwSW5zdGFuY2UgPSBuZXcgU2hpcChwbGF5ZXJTaGlwc1tqXSlcclxuXHJcbiAgICAgICAgICAgIHNoaXBJbnN0YW5jZS5zZXRQcm9wZXJ0aWVzKHN0YXRlLnBsYXllcnNbaV0uZ2FtZUJvYXJkLnNoaXBzW2pdKVxyXG5cclxuICAgICAgICAgICAgLy8gcmVlbXBsYXpvIGxhIGNvcGlhIGRlIGRhdG9zIGRlbCBzaGlwIHF1ZSBlc3RhYmEgZW4gSlNPTiBwb3IgXHJcbiAgICAgICAgICAgIC8vIGVsIHNoaXAgaW5zdGFuc2lhZG8geSBhY3R1YWxpemFkby5cclxuICAgICAgICAgICAgcGxheWVyc1tpXS5nYW1lQm9hcmQuc2hpcHNbal0gPSBzaGlwSW5zdGFuY2VcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRlLnBsYXllcnMgPSBwbGF5ZXJzXHJcblxyXG4gICByZXR1cm4gc3RhdGVcclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==