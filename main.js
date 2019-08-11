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

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/*! exports provided: aboutTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"aboutTab\", function() { return aboutTab; });\n/* harmony import */ var _elementfunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementfunctions */ \"./src/elementfunctions.js\");\n\n\nfunction aboutTab() {\n  const tabContainer = Object(_elementfunctions__WEBPACK_IMPORTED_MODULE_0__[\"tabCreator\"])();\n  const atmosphere = atmosphereCreator();\n  const cafe = cafeCreator();\n  const story = storyCreator();\n\n  tabContainer.classList.add('about-tab');\n\n  tabContainer.appendChild(story);\n  tabContainer.appendChild(atmosphere);\n  tabContainer.appendChild(cafe);\n}\n\nfunction atmosphereCreator() {\n  const atmosphere = Object(_elementfunctions__WEBPACK_IMPORTED_MODULE_0__[\"elementCreator\"])('div', 'atmosphere');\n  const header = Object(_elementfunctions__WEBPACK_IMPORTED_MODULE_0__[\"elementCreator\"])('div', 'about-header');\n  const body = Object(_elementfunctions__WEBPACK_IMPORTED_MODULE_0__[\"elementCreator\"])('div', 'about-body');\n  \n  header.textContent = 'The Atmosphere';\n  body.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad officiis eius amet atque laudantium quae, unde, nostrum nisi cupiditate, mollitia facilis. Consequuntur harum eaque officia ad adipisci libero, doloremque cumque?';\n\n  atmosphere.appendChild(header);\n  atmosphere.appendChild(body);\n\n  return atmosphere;\n}\n\nfunction cafeCreator() {\n  const cafe = Object(_elementfunctions__WEBPACK_IMPORTED_MODULE_0__[\"elementCreator\"])('div', 'cafe');\n  const header = Object(_elementfunctions__WEBPACK_IMPORTED_MODULE_0__[\"elementCreator\"])('div', 'about-header');\n  const body = Object(_elementfunctions__WEBPACK_IMPORTED_MODULE_0__[\"elementCreator\"])('div', 'about-body');\n  \n  header.textContent = 'The Cafe';\n  body.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad officiis eius amet atque laudantium quae, unde, nostrum nisi cupiditate, mollitia facilis. Consequuntur harum eaque officia ad adipisci libero, doloremque cumque?';\n\n  cafe.appendChild(header);\n  cafe.appendChild(body);\n  \n  return cafe;\n}\n\nfunction storyCreator() {\n  const story = Object(_elementfunctions__WEBPACK_IMPORTED_MODULE_0__[\"elementCreator\"])('div', 'story');\n  const header = Object(_elementfunctions__WEBPACK_IMPORTED_MODULE_0__[\"elementCreator\"])('div', 'about-header');\n  const body = Object(_elementfunctions__WEBPACK_IMPORTED_MODULE_0__[\"elementCreator\"])('div', 'about-body');\n  \n  header.textContent = 'The Story';\n  body.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad officiis eius amet atque laudantium quae, unde, nostrum nisi cupiditate, mollitia facilis. Consequuntur harum eaque officia ad adipisci libero, doloremque cumque?';\n\n  story.appendChild(header);\n  story.appendChild(body);\n  \n  return story;\n}\n\n\n\n//# sourceURL=webpack:///./src/about.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/*! exports provided: contactTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"contactTab\", function() { return contactTab; });\n/* harmony import */ var _elementfunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementfunctions */ \"./src/elementfunctions.js\");\n\n\nfunction contactTab() {\n  const tabContainer = Object(_elementfunctions__WEBPACK_IMPORTED_MODULE_0__[\"tabCreator\"])();\n  const socialDiv = Object(_elementfunctions__WEBPACK_IMPORTED_MODULE_0__[\"elementCreator\"])('div', 'social-div');\n  const phoneDiv = Object(_elementfunctions__WEBPACK_IMPORTED_MODULE_0__[\"elementCreator\"])('div', 'phone-div');\n\n  tabContainer.classList.add('contact-tab');\n\n  socialDiv.innerHTML = '<div>Social Media:</div><a href=\"#\"><img src=\"./instagram.png\"></img></a><a href=\"#\"><img src=\"./twitter.png\"></img></a><a href=\"#\"><img src=\"./facebook.png\"></img></a>';\n  phoneDiv.innerHTML = '<div class=\"phones\">Phones:</div><div class=\"numbers\"><span>1800-000-1111</span><span>1800-000-1112</span></div>';\n\n  tabContainer.appendChild(socialDiv);\n  tabContainer.appendChild(phoneDiv);\n}\n\n\n\n//# sourceURL=webpack:///./src/contact.js?");

/***/ }),

/***/ "./src/elementfunctions.js":
/*!*********************************!*\
  !*** ./src/elementfunctions.js ***!
  \*********************************/
/*! exports provided: elementCreator, tabCreator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"elementCreator\", function() { return elementCreator; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tabCreator\", function() { return tabCreator; });\nfunction elementCreator() {\n  const element = document.createElement(arguments[0]);\n  \n  for(let i = 1; i < arguments.length; i++) {\n    element.classList.add(arguments[i]);\n  }\n\n  return element;\n}\n\nfunction tabCreator() {\n  const main = document.querySelector('.main');\n  const tabContainer = elementCreator('div', 'tab-container');\n\n  main.appendChild(tabContainer);\n  \n  return tabContainer;\n}\n\n\n\n//# sourceURL=webpack:///./src/elementfunctions.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageload */ \"./src/pageload.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _reservations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reservations */ \"./src/reservations.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\n\n\nObject(_pageload__WEBPACK_IMPORTED_MODULE_0__[\"pageload\"])();\n\n(function tabs() {\n  const tabs = document.querySelectorAll('nav a');\n  \n  tabs.forEach(tab => {\n    tab.addEventListener('click', () => {\n      reset();\n      newTab(tab);\n    });\n  }); \n\n  function reset() {\n    const main = document.querySelector('.main');\n    \n    if(main.childNodes[1]) {\n      main.removeChild(main.childNodes[1]);\n    }\n    \n    tabs.forEach(tab => {\n      tab.style.borderBottom = '0';\n      tab.style.color = '';  \n    });\n  }\n\n  function selectTab(tab) {\n    tab.style.borderBottom = '3px solid rgba(211, 110, 15, 0.95)';\n    tab.style.color = 'white';\n  }\n\n  function newTab(tab) {\n    const tabClass = tab.className;\n    selectTab(tab);\n    switch(tabClass) {\n      case 'menu':\n        Object(_menu__WEBPACK_IMPORTED_MODULE_1__[\"menuTab\"])();\n        break;\n      /*case 'reservations':\n        reservationsTab();\n        break;*/\n      case 'about':\n        Object(_about__WEBPACK_IMPORTED_MODULE_3__[\"aboutTab\"])();\n        break;\n      case 'contact':\n        Object(_contact__WEBPACK_IMPORTED_MODULE_4__[\"contactTab\"])();\n        break;\n    }\n  }\n})();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/*! exports provided: menuTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"menuTab\", function() { return menuTab; });\n/* harmony import */ var _elementfunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementfunctions */ \"./src/elementfunctions.js\");\n\n\nfunction menuTab() {\n  const tabContainer = Object(_elementfunctions__WEBPACK_IMPORTED_MODULE_0__[\"tabCreator\"])();\n  const menuHeader = Object(_elementfunctions__WEBPACK_IMPORTED_MODULE_0__[\"elementCreator\"])('div', 'menu-header');\n\n  tabContainer.classList.add('menu-tab');\n  menuHeader.innerHTML = '<span class=\"coffee\">Coffee</span><span class=\"mid\">|</span><span class=\"breakfast\">Breakfast</span>';\n  tabContainer.appendChild(menuHeader);\n\n  menuLoad(menuHeader.childNodes[2]);\n  enableMenuSwitch();\n}\n\nfunction enableMenuSwitch() {\n  const menuOptions = document.querySelectorAll('.menu-header span');\n\n  menuOptions.forEach(menuOption => {\n    menuOption.addEventListener('click', (e) => {\n      if(menuOption.className == 'mid') return;\n      resetMenu();\n      menuLoad(menuOption);\n    });\n  });\n}\n\nfunction resetMenu() {\n  const menuOptions = document.querySelectorAll('.menu-header span');\n  const menu = document.querySelector('.menu-tab');\n\n  if(menu.childNodes[1]) {\n    menu.removeChild(menu.childNodes[1]);\n  }\n  \n  menuOptions.forEach(menuOption => {\n    menuOption.removeAttribute('style');\n  });\n}\n\nfunction menuLoad(menuOption) {\n  const menuClass = menuOption.className;\n  \n  menuOption.style.color = 'rgba(211, 110, 15, 0.95)';\n  \n  if(menuClass == 'breakfast') {\n    loadBreakfast();\n  } else {\n    loadCoffee();\n  }\n}\n\nfunction loadBreakfast() {\n  const menuBody = addMenuBody();\n  const table = menuTableCreator(6);\n  const tableProperties = getTableProperties(table);\n\n  tableProperties.dishes[0].innerHTML = 'Pancakes with Maple Syrup';\n  tableProperties.descriptions[0].textContent = 'Light, fluffy and delicious pancakes drizzled with rich maple syrup.';\n  tableProperties.prices[0].textContent = '$20';\n\n  tableProperties.dishes[1].textContent = 'Belgian Style Waffles';\n  tableProperties.descriptions[1].textContent = 'Crispy on the outside but light and spungy on the inside, with deep pockets filled with your favorite syrups - chocolate, caramel, maple or blueberry!!';\n  tableProperties.prices[1].textContent = '$20';\n\n  tableProperties.dishes[2].textContent = 'Pancakes with Maple Syrup';\n  tableProperties.descriptions[2].textContent = 'Light, fluffy and delicious pancakes drizzled with rich maple syrup.';\n  tableProperties.prices[2].textContent = '$20';\n\n  tableProperties.dishes[3].textContent = 'Belgian Style Waffles';\n  tableProperties.descriptions[3].textContent = 'Crispy on the outside but light and spungy on the inside, with deep pockets filled with your favorite syrups - chocolate, caramel, maple or blueberry!!';\n  tableProperties.prices[3].textContent = '$20';\n\n  tableProperties.dishes[4].textContent = 'Pancakes with Maple Syrup';\n  tableProperties.descriptions[4].textContent = 'Light, fluffy and delicious pancakes drizzled with rich maple syrup.';\n  tableProperties.prices[4].textContent = '$20';\n\n  tableProperties.dishes[5].textContent = 'Belgian Style Waffles';\n  tableProperties.descriptions[5].textContent = 'Crispy on the outside but light and spungy on the inside, with deep pockets filled with your favorite syrups - chocolate, caramel, maple or blueberry!!';\n  tableProperties.prices[5].textContent = '$20';\n\n  menuBody.appendChild(table);\n}\n\nfunction loadCoffee() {\n  const menuBody = addMenuBody();\n  const table = menuTableCreator(4);\n  const tableProperties = getTableProperties(table);\n\n  tableProperties.dishes[0].textContent = 'Caffè Americano';\n  tableProperties.descriptions[0].textContent = 'Made from the finest Arabica beans espresso. As simple and flavorful as an Americano gets.';\n  tableProperties.prices[0].textContent = '$10';\n\n  tableProperties.dishes[1].textContent = 'Cinnamon Cappuccino - Hot / Iced';\n  tableProperties.descriptions[1].textContent = 'Foamy, creamy and filled with the flavors of Arabica beans.';\n  tableProperties.prices[1].textContent = '$10';\n\n  tableProperties.dishes[2].textContent = 'Caffè Americano';\n  tableProperties.descriptions[2].textContent = 'Made from the finest Arabica beans espresso. As simple and flavorful as an Americano gets.';\n  tableProperties.prices[2].textContent = '$10';\n\n  tableProperties.dishes[3].textContent = 'Cinnamon Cappuccino - Hot / Iced';\n  tableProperties.descriptions[3].textContent = 'Foamy, creamy and filled with the flavors of Arabica beans.';\n  tableProperties.prices[3].textContent = '$10';\n\n  menuBody.appendChild(table);\n}\n\nfunction addMenuBody() {\n  const menuTab = document.querySelector('.menu-tab');\n  const menuBody = Object(_elementfunctions__WEBPACK_IMPORTED_MODULE_0__[\"elementCreator\"])('div', 'menu-body');\n\n  menuTab.appendChild(menuBody);\n  return menuBody;\n}\n\nfunction menuTableCreator(size) {\n  const table = Object(_elementfunctions__WEBPACK_IMPORTED_MODULE_0__[\"elementCreator\"])('table', 'menu-table');\n  \n  for(let i = 0; i < size; i++) {\n    table.insertRow(i);\n  }\n\n  Array.from(table.rows).forEach(row => {\n    row.insertCell(-1);\n    row.insertCell(-1);\n  });\n\n  Array.from(table.rows).forEach(row => {\n    row.cells[0].appendChild(Object(_elementfunctions__WEBPACK_IMPORTED_MODULE_0__[\"elementCreator\"])('div', 'dish'));\n    row.cells[0].appendChild(Object(_elementfunctions__WEBPACK_IMPORTED_MODULE_0__[\"elementCreator\"])('div', 'dish-description'));\n    row.cells[1].appendChild(Object(_elementfunctions__WEBPACK_IMPORTED_MODULE_0__[\"elementCreator\"])('div', 'price'));\n  });\n\n  return table;\n}\n\nfunction getTableProperties(table) {\n  const dishes = getDishes(table);\n  const descriptions = getDescriptions(table);\n  const prices = getPrices(table);\n\n  function getDishes(table) {\n    const dishes = [];\n    \n    Array.from(table.rows).forEach(row => {\n      dishes.push(row.cells[0].childNodes[0]);\n    });\n  \n    return dishes;\n  }\n  \n  function getDescriptions(table) {\n    const descriptions = [];\n    \n    Array.from(table.rows).forEach(row => {\n      descriptions.push(row.cells[0].childNodes[1]);\n    });\n  \n    return descriptions;\n  }\n  \n  function getPrices(table) {\n    const prices = [];\n    \n    Array.from(table.rows).forEach(row => {\n      prices.push(row.cells[1].childNodes[0]);\n    });\n  \n    return prices;\n  }\n\n  return {dishes, descriptions, prices};\n}\n\n\n\n//# sourceURL=webpack:///./src/menu.js?");

/***/ }),

/***/ "./src/pageload.js":
/*!*************************!*\
  !*** ./src/pageload.js ***!
  \*************************/
/*! exports provided: pageload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pageload\", function() { return pageload; });\n/* harmony import */ var _elementfunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementfunctions */ \"./src/elementfunctions.js\");\n\n\nfunction pageload() {\n  const content = document.querySelector('#content');  \n  const layer = Object(_elementfunctions__WEBPACK_IMPORTED_MODULE_0__[\"elementCreator\"])('div', 'layer');\n  const main = Object(_elementfunctions__WEBPACK_IMPORTED_MODULE_0__[\"elementCreator\"])('div', 'main');\n  const header = Object(_elementfunctions__WEBPACK_IMPORTED_MODULE_0__[\"elementCreator\"])('header');\n  const logo = Object(_elementfunctions__WEBPACK_IMPORTED_MODULE_0__[\"elementCreator\"])('div', 'logo');\n  const chef = Object(_elementfunctions__WEBPACK_IMPORTED_MODULE_0__[\"elementCreator\"])('div', 'chef');\n  const nav = Object(_elementfunctions__WEBPACK_IMPORTED_MODULE_0__[\"elementCreator\"])('nav');\n\n  logo.innerHTML = `<a href=\"./index.html\">JOHN<span>'s</span></a>`;\n  \n  chef.innerHTML = `<h2>Chef:</h2>\n    <p>We have prepared the fluffiest waffles for you. Start your day with a bite of this crispy goodness!</p>`;\n    \n  nav.innerHTML = `<ul>\n      <li><a href=\"#\" class=\"menu\">Menu</a></li>\n      <!-- <li><a href=\"#\" class=\"reservations\">Reservations</a></li> -->\n      <li><a href=\"#\" class=\"about\">About</a></li>\n      <li><a href=\"#\" class=\"contact\">Contact</a></li>\n    </ul>`;\n  \n  header.appendChild(logo);\n  main.appendChild(header);\n  main.appendChild(chef);\n  layer.appendChild(main);\n  layer.appendChild(nav);\n  content.appendChild(layer);\n}\n\n\n\n//# sourceURL=webpack:///./src/pageload.js?");

/***/ }),

/***/ "./src/reservations.js":
/*!*****************************!*\
  !*** ./src/reservations.js ***!
  \*****************************/
/*! exports provided: reservationsTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reservationsTab\", function() { return reservationsTab; });\n/* harmony import */ var _elementfunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementfunctions */ \"./src/elementfunctions.js\");\n\n\nfunction reservationsTab() {\n  const tabContainer = Object(_elementfunctions__WEBPACK_IMPORTED_MODULE_0__[\"tabCreator\"])();\n}\n\n\n\n//# sourceURL=webpack:///./src/reservations.js?");

/***/ })

/******/ });