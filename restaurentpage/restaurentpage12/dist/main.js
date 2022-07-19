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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"appendContact\": () => (/* binding */ appendContact)\n/* harmony export */ });\nconst appendContact = () => {\n    const paraEl = document.createElement('p');\n    const titleBoxEl = document.createElement('h3');\n    const contactBoxContainerEl = document.createElement('div');\n    const titleContactEl = document.createElement('h2');\n    const titleContaierEl = document.createElement('div');\n    const gridContactContainer = document.createElement('div');\n\n    paraEl.innerHTML = 'Monday - Sunday <br> 10am - 11pm <br> Mohali, Softobiz <br> Akash.kumar@softobiz.com'\n    titleBoxEl.innerHTML = 'OUR CONTACT:';\n    contactBoxContainerEl.classList = 'contact-cell-info';\n    titleContactEl.innerHTML = 'It\\'s tea <br> time';\n    titleContaierEl.classList = 'contact-cell-title';\n    gridContactContainer.classList = 'grid-container-contact'\n\n    contactBoxContainerEl.appendChild(titleBoxEl);\n    contactBoxContainerEl.appendChild(paraEl);\n    titleContaierEl.appendChild(titleContactEl);\n    gridContactContainer.appendChild(titleContaierEl);\n    gridContactContainer.appendChild(contactBoxContainerEl);\n   \n\n    return gridContactContainer;\n\n}\n\n\n\n\n\n//# sourceURL=webpack://webpackprac/./src/contact.js?");

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"appendHome\": () => (/* binding */ appendHome)\n/* harmony export */ });\n\nconst appendHome = () => {\n    const containerElement = document.createElement('div');\n    const titleContainerElement = document.createElement('div');\n    const titleElement = document.createElement('h1');\n    const subTitleElement = document.createElement('h3');\n    const imageContainerElement = document.createElement('div');\n    const imageElement = document.createElement('img');\n\n\n\n\n\n    containerElement.classList = 'container';\n    titleContainerElement.classList = 'title-container';\n    titleElement.innerHTML = \"The tea you'll <br> never forget\";\n    titleElement.classList = 'title';\n    subTitleElement.innerHTML = '100% ORGANIC & AUTHENTICATE';\n    imageContainerElement.classList = 'img-container';\n    imageElement.setAttribute('src', '../img/tea5.jpg');\n    imageElement.setAttribute('alt', 'tea cup');\n\n\n\n    titleContainerElement.appendChild(subTitleElement );\n    titleContainerElement.appendChild(titleElement);\n    containerElement.appendChild(titleContainerElement);\n    imageContainerElement.appendChild(imageElement);\n    containerElement.appendChild(imageContainerElement);\n\n\n    return containerElement;\n\n}\n\n\n\n//# sourceURL=webpack://webpackprac/./src/homepage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ \"./src/homepage.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\ncontent.appendChild((0,_homepage__WEBPACK_IMPORTED_MODULE_0__.appendHome)());\n\n \n\n(function updateDisplay() {\n\nconst content = document.getElementById('content');\nconst homeBtnElement = document.getElementById('home');\nconst menuBtnElement = document.getElementById('menu');\nconst contactElement = document.getElementById('contact');\n\n\nfunction switchToHome() {\n    reset();\n    content.appendChild((0,_homepage__WEBPACK_IMPORTED_MODULE_0__.appendHome)());\n}\n\n\nfunction switchToMenu() {\n    reset();\n    content.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_1__.appendMenu)());\n}\n\nfunction switchToContact() {\n    reset();\n    content.appendChild((0,_contact__WEBPACK_IMPORTED_MODULE_2__.appendContact)());\n}\n\n\nfunction reset() {\n    content.innerHTML = '';\n}\n\n\nhomeBtnElement.addEventListener('click', switchToHome);\nmenuBtnElement.addEventListener('click', switchToMenu);\ncontactElement.addEventListener('click', switchToContact);\n\n})();\n\n\n//# sourceURL=webpack://webpackprac/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"appendMenu\": () => (/* binding */ appendMenu)\n/* harmony export */ });\n//import tea1 from \"./img/tea1.jpg\"\nconst appendMenu = () => {\n    const gridContainer = document.createElement('div');\n    gridContainer.classList = 'grid-container';  \n    \n    const menu = [\n        {img: '../img/tea1.jpg',\n        name: 'Green Tea'},\n        {img: '../img/tea6.jpg',\n        name: 'Normal Tea'},\n        {img: '../img/tea3.jpg',\n        name: 'Herbal Tea'}\n    ];\n\n    menu.forEach(x => render(x));\n\n// Creates the menu elements \n\n    function render(x) {\n        const img = document.createElement('img');\n        const name = document.createElement('h3');\n        const productCell = document.createElement('div');\n\n        img.setAttribute('src', x.img);\n        name.innerHTML = x.name;\n        productCell.classList = 'cell';\n\n        appendProduct(img, name, productCell);\n    }\n    \n// Appends the elements\n\n    function appendProduct(img, name, cell) {\n        cell.appendChild(img);\n        cell.appendChild(name);\n        gridContainer.appendChild(cell);\n    }\n\n    return gridContainer;\n\n}\n\n//# sourceURL=webpack://webpackprac/./src/menu.js?");

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