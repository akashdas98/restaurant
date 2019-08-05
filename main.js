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
/*! exports provided: elementCreator, tabCreator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"elementCreator\", function() { return elementCreator; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tabCreator\", function() { return tabCreator; });\nfunction elementCreator() {\n  const element = document.createElement(arguments[0]);\n  \n  for(let i = 1; i < arguments.length; i++) {\n    element.classList.add(arguments[i]);\n  }\n\n  return element;\n}\n\nfunction tabCreator() {\n  const main = document.querySelector('.main');\n  const tabContainer = elementCreator('div', 'tab-container');\n\n  tabContainer.classList.add('tab-container');\n  main.appendChild(tabContainer);\n  \n  return tabContainer;\n}\n\n\n\n//# sourceURL=webpack:///./src/elementfunctions.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageload */ \"./src/pageload.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\n\n\nObject(_pageload__WEBPACK_IMPORTED_MODULE_0__[\"pageload\"])();\n\n(function tabs() {\n  const tabs = document.querySelectorAll('nav a');\n  \n  tabs.forEach(tab => {\n    tab.addEventListener('click', () => {\n      reset();\n      newTab(tab);\n    });\n  }); \n\n  function reset() {\n    const main = document.querySelector('.main');\n    \n    if(main.childNodes[1]) {\n      main.removeChild(main.childNodes[1]);\n    }\n    \n    tabs.forEach(tab => {\n      tab.style.borderBottom = '0';\n      tab.style.color = '';  \n    });\n  }\n\n  function selectTab(tab) {\n    tab.style.borderBottom = '3px solid rgba(211, 110, 15, 0.95)';\n    tab.style.color = 'white';\n  }\n\n  function newTab(tab) {\n    const tabClass = tab.className;\n    selectTab(tab);\n    switch(tabClass) {\n      case 'menu':\n        Object(_menu__WEBPACK_IMPORTED_MODULE_1__[\"menuTab\"])();\n        break;\n      /*case 'reservations':\n        reservationsTab();\n        break;\n      case 'about':\n        aboutTab();\n        break;\n      case 'contact':\n        contactTab();\n        break;*/\n    }\n  }\n})();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/*! exports provided: menuTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"menuTab\", function() { return menuTab; });\n/* harmony import */ var _elementfunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementfunctions */ \"./src/elementfunctions.js\");\n\n\nfunction menuTab() {\n  const tabContainer = Object(_elementfunctions__WEBPACK_IMPORTED_MODULE_0__[\"tabCreator\"])();\n  const menuHeader = Object(_elementfunctions__WEBPACK_IMPORTED_MODULE_0__[\"elementCreator\"])('div', 'menu-header');\n\n  tabContainer.classList.add('menu-tab');\n  menuHeader.innerHTML = '<span class=\"coffee\">Coffee</span><span class=\"mid\">|</span><span class=\"breakfast\">Breakfast</span>';\n  tabContainer.appendChild(menuHeader);\n\n  menuLoad(menuHeader.childNodes[2]);\n  enableMenuSwitch();\n}\n\nfunction enableMenuSwitch() {\n  const menuOptions = document.querySelectorAll('.menu-header span');\n\n  menuOptions.forEach(menuOption => {\n    menuOption.addEventListener('click', (e) => {\n      if(menuOption.className == 'mid') return;\n      resetMenu();\n      menuLoad(menuOption);\n    });\n  });\n}\n\nfunction resetMenu() {\n  const menuOptions = document.querySelectorAll('.menu-header span');\n  const menu = document.querySelector('.menu-tab');\n\n  if(menu.childNodes[1]) {\n    menu.removeChild(menu.childNodes[1]);\n  }\n  \n  menuOptions.forEach(menuOption => {\n    menuOption.removeAttribute('style');\n  });\n}\n\nfunction menuLoad(menuOption) {\n  const menuClass = menuOption.className;\n  \n  menuOption.style.color = 'rgba(211, 110, 15, 0.95)';\n  \n  if(menuClass == 'breakfast') {\n    loadBreakfast();\n  } else {\n    loadCoffee();\n  }\n}\n\nfunction loadBreakfast() {\n  const table = Object(_elementfunctions__WEBPACK_IMPORTED_MODULE_0__[\"elementCreator\"])('table');\n  const rows = [];\n  const cells = [];\n  const menuBody = addMenuBody();\n  \n  table.classList.add('menu-table');\n\n  for(let i = 0; i < 6; i++) {\n    cells[i] = new Array(2);\n  }\n  \n  for(let i = 0; i < 6; i++) {\n    rows[i] = table.insertRow(i);\n    for(let j = 0; j < 2; j++) {\n      cells[i].push(rows[i].insertCell(j));\n    }\n  }\n  \n  menuBody.appendChild(table);\n}\n\nfunction loadCoffee() {\n  const table = Object(_elementfunctions__WEBPACK_IMPORTED_MODULE_0__[\"elementCreator\"])('table');\n  const rows = [];\n  const cells = [];\n  const menuBody = addMenuBody();\n  \n  table.classList.add('menu-table');\n\n  for(let i = 0; i < 4; i++) {\n    cells[i] = new Array(2);\n  }\n  \n  for(let i = 0; i < 4; i++) {\n    rows[i] = table.insertRow(i);\n    for(let j = 0; j < 2; j++) {\n      cells[i].push(rows[i].insertCell(j));\n    }\n  }\n  \n  menuBody.appendChild(table);\n}\n\nfunction addMenuBody() {\n  const menuTab = document.querySelector('.menu-tab');\n  const menuBody = Object(_elementfunctions__WEBPACK_IMPORTED_MODULE_0__[\"elementCreator\"])('div', 'menu-body');\n\n  menuTab.appendChild(menuBody);\n  return menuBody;\n}\n\n\n\n//# sourceURL=webpack:///./src/menu.js?");

/***/ }),

/***/ "./src/pageload.js":
/*!*************************!*\
  !*** ./src/pageload.js ***!
  \*************************/
/*! exports provided: pageload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pageload\", function() { return pageload; });\n/* harmony import */ var _elementfunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementfunctions */ \"./src/elementfunctions.js\");\n\n\nfunction pageload() {\n  const content = document.querySelector('#content');  \n  const bg = Object(_elementfunctions__WEBPACK_IMPORTED_MODULE_0__[\"elementCreator\"])('div', 'bg');\n  const layer = Object(_elementfunctions__WEBPACK_IMPORTED_MODULE_0__[\"elementCreator\"])('div', 'layer');\n  const main = Object(_elementfunctions__WEBPACK_IMPORTED_MODULE_0__[\"elementCreator\"])('div', 'main');\n  const header = Object(_elementfunctions__WEBPACK_IMPORTED_MODULE_0__[\"elementCreator\"])('header');\n  const logo = Object(_elementfunctions__WEBPACK_IMPORTED_MODULE_0__[\"elementCreator\"])('div', 'logo');\n  const description = Object(_elementfunctions__WEBPACK_IMPORTED_MODULE_0__[\"elementCreator\"])('div', 'description');\n  const nav = Object(_elementfunctions__WEBPACK_IMPORTED_MODULE_0__[\"elementCreator\"])('nav');\n\n  logo.innerHTML = `<a href=\"./index.html\">JOHN<span>'s</span></a>`;\n  \n  description.innerHTML = `<h2>Chef:</h2>\n    <p>We've prepared the flakiest puff pastries for you. Start your day with a puff!</p>`;\n    \n  nav.innerHTML = `<ul>\n      <li><a href=\"#\" class=\"menu\">Menu</a></li>\n      <li><a href=\"#\" class=\"reservations\">Reservations</a></li>\n      <li><a href=\"#\" class=\"about\">About</a></li>\n      <li><a href=\"#\" class=\"contacr\">Contact</a></li>\n    </ul>`;\n  \n  header.appendChild(logo);\n  main.appendChild(header);\n  main.appendChild(description);\n  layer.appendChild(main);\n  layer.appendChild(nav);\n  bg.appendChild(layer);\n  content.appendChild(bg);\n}\n\n\n\n//# sourceURL=webpack:///./src/pageload.js?");

/***/ })

/******/ });