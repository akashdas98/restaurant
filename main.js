/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/elementfunctions.js":
/*!*********************************!*\
  !*** ./src/elementfunctions.js ***!
  \*********************************/
/*! exports provided: elementCreator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"elementCreator\", function() { return elementCreator; });\nfunction elementCreator() {\n  const element = document.createElement(arguments[0]);\n  \n  for(let i = 1; i < arguments.length; i++) {\n    element.classList.add(arguments[i]);\n  }\n\n  return element;\n}\n\n\n\n//# sourceURL=webpack:///./src/elementfunctions.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageload */ \"./src/pageload.js\");\n\n\nObject(_pageload__WEBPACK_IMPORTED_MODULE_0__[\"pageload\"])();\n\nconst Tabs = (() => {\n  const tabs = document.querySelectorAll('nav a');\n  \n  function clickTab() {\n    tabs.forEach(tab => {\n      tab.addEventListener('click', () => {\n        reset();\n        newTab(tab);\n      });\n    });\n  }\n\n  function reset() {\n    Array.from(tabs).forEach(tab => {\n      tab.style.borderBottom = '0';\n    });\n  }\n\n  function newTab(tab) {\n    tab.style.borderBottom = '5px solid rgba(211, 110, 15, 0.95)';\n  }\n\n  return {clickTab};\n})();\n\nTabs.clickTab();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/pageload.js":
/*!*************************!*\
  !*** ./src/pageload.js ***!
  \*************************/
/*! exports provided: pageload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pageload\", function() { return pageload; });\n/* harmony import */ var _elementfunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementfunctions */ \"./src/elementfunctions.js\");\n\n\nfunction pageload() {\n  const content = document.querySelector('#content');  \n  const bg = Object(_elementfunctions__WEBPACK_IMPORTED_MODULE_0__[\"elementCreator\"])('div', 'bg');\n  const layer = Object(_elementfunctions__WEBPACK_IMPORTED_MODULE_0__[\"elementCreator\"])('div', 'layer');\n  const main = Object(_elementfunctions__WEBPACK_IMPORTED_MODULE_0__[\"elementCreator\"])('div', 'main');\n  const header = Object(_elementfunctions__WEBPACK_IMPORTED_MODULE_0__[\"elementCreator\"])('header');\n  const logo = Object(_elementfunctions__WEBPACK_IMPORTED_MODULE_0__[\"elementCreator\"])('div', 'logo');\n  const description = Object(_elementfunctions__WEBPACK_IMPORTED_MODULE_0__[\"elementCreator\"])('div', 'description');\n  const nav = Object(_elementfunctions__WEBPACK_IMPORTED_MODULE_0__[\"elementCreator\"])('nav');\n\n  logo.innerHTML = `JOHN<span>'s</span>`;\n  \n  description.innerHTML = `<h2>Chef:</h2>\n    <p>We've prepared the flakiest puff pastries for you. Start your day with a puff!</p>`;\n    \n  nav.innerHTML = `<ul>\n      <li><a href=\"#\">Menu</a></li>\n      <li><a href=\"#\">Reservations</a></li>\n      <li><a href=\"#\">About</a></li>\n      <li><a href=\"#\">Contact</a></li>\n    </ul>`;\n  \n  header.appendChild(logo);\n  main.appendChild(header);\n  main.appendChild(description);\n  layer.appendChild(main);\n  layer.appendChild(nav);\n  bg.appendChild(layer);\n  content.appendChild(bg);\n}\n\n\n\n//# sourceURL=webpack:///./src/pageload.js?");

/***/ })

/******/ });