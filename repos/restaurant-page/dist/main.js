/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadContact)\n/* harmony export */ });\nfunction loadContact(){\r\n    const contact = document.createElement(\"div\");\r\n    contact.classList.add(\"contact\");\r\n    \r\n    const heading = document.createElement(\"h1\");\r\n    heading.textContent = \"Contact Us\";\r\n\r\n    const phone = document.createElement(\"p\");\r\n    phone.textContent = \"Phone: 123-456-7890\";\r\n\r\n    const address = document.createElement(\"p\")\r\n    address.textContent = \"Address: 871 Main Toppings Street, Foodcity\"\r\n\r\n\r\n    contact.appendChild(heading)\r\n    contact.appendChild(phone)\r\n    contact.appendChild(address)\r\n\r\n\r\n    return contact;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadHome)\n/* harmony export */ });\nfunction loadHome(){\r\n\r\n    const home = document.createElement(\"div\");\r\n    home.classList.add(\"home\");\r\n\r\n    const heading = document.createElement(\"h1\")\r\n    heading.textContent = \"Welcome to Flavor Haven!\";\r\n\r\n    const description = document.createElement(\"p\");\r\n    description.textContent = \"Enjoy handcraft meals, fresh ingredients, and warm atomosphere. \";\r\n\r\n\r\n    home.appendChild(heading);\r\n    home.appendChild(description);\r\n\r\n    return home;\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\r\n\r\n\r\n\r\nconst content = document.getElementById(\"content\");\r\ncontent.textContent = \"\";\r\ncontent.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\r\n\r\ndocument.getElementById(\"home-tab\").addEventListener(\"click\", () => {\r\ncontent.textContent= \"\";\r\ncontent.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\r\n});\r\n\r\ndocument.getElementById(\"menu-tab\").addEventListener(\"click\", () => {\r\ncontent.textContent= \"\";\r\ncontent.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\r\n});\r\n\r\ndocument.getElementById(\"contact-tab\").addEventListener(\"click\", () => {\r\ncontent.textContent= \"\";\r\ncontent.appendChild((0,_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\r\n});\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadMenu)\n/* harmony export */ });\nfunction loadMenu() {\r\n    const menu = document.createElement(\"div\");\r\n    menu.classList.add(\"menu\");\r\n\r\n    const item1 = document.createElement(\"p\");\r\n    item1.textContent = \"Spaghetti Bolognese\";\r\n\r\n    const item2 = document.createElement(\"p\");\r\n    item2.textContent = \"Marherita Pizza\";\r\n\r\n    const item3 = document.createElement(\"p\");\r\n    item3.textContent = \"Caesar Salad\";\r\n\r\n    menu.appendChild(item1);\r\n    menu.appendChild(item2);\r\n    menu.appendChild(item3);\r\n\r\n    return menu;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;