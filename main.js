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

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ InitialPageLoad)\n/* harmony export */ });\nfunction InitialPageLoad(){\n    const content=document.querySelector('#content');\n    \n    const main=document.createElement('div');\n    main.classList.add('main');\n\n    const heading=document.createElement('div');\n    heading.classList.add('heading');\n    heading.innerHTML='About';\n    main.appendChild(heading);\n\n    const photo=document.createElement('div');\n    photo.classList.add('photo');\n\n    const img=document.createElement('img');\n    img.src='../assets/momos.png';\n    photo.appendChild(img);\n    main.appendChild(photo);\n\n    const info=document.createElement('div');\n    info.classList.add('info');\n    info.innerHTML='Momos House is a cozy little shop that specializes in serving mouth-watering momos, a popular dumpling dish that originates from Nepal and Tibet. Located in a bustling neighborhood, the aroma of steaming momos can be smelt from a distance, luring passersby to come in and try the delicious food.<br><br>The momos are made fresh daily using high-quality ingredients and authentic spices to ensure that each bite is bursting with flavor. Customers can choose from different levels of spiciness, from mild to extra spicy, depending on their preference.<br><br>Overall, Momos House is a go-to destination for momo lovers looking for a tasty and authentic experience. Whether you are grabbing a quick lunch or meeting friends for a snack, Momos House promises a memorable dining experience that will leave you craving for more.'\n\n    main.appendChild(info);\n    content.appendChild(main);\n};\n\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ RenderContact)\n/* harmony export */ });\nfunction RenderContact(e){\n    const content=document.querySelector('#content');\n    const main=document.querySelector('.main');\n    content.removeChild(main);\n\n    const newMain=document.createElement('div');\n    newMain.classList.add('main');\n\n    const heading=document.createElement('div');\n    heading.classList.add('heading');\n    heading.innerHTML='Contact';\n    newMain.appendChild(heading);\n\n    const contactData=[\n        {\n            asset:'../assets/map-marker.svg',\n            content:'Near Takhatmal English High School, In front of Srijan Hospital, Sai Nagar, Amravati, 444607'\n        },\n        {\n            asset:'../assets/phone.svg',\n            content:'+91 1234567890'\n        },\n        {\n            asset:'../assets/email.svg',\n            content:'momoshouse@gmail.com'\n        },\n        {\n            asset:'../assets/web.svg',\n            content:'www.momoshouse.com'\n        }\n    ]\n    const contactCard=document.createElement('div');\n    contactCard.classList.add('contactCard');;\n    contactData.forEach(element=>{\n        const row=document.createElement('div')\n        row.classList.add('contactRow');\n\n        const rowIcon=document.createElement('img');\n        rowIcon.classList.add('rowIcon');\n        rowIcon.src=element.asset;\n        row.appendChild(rowIcon);\n\n        const rowContent=document.createElement('div');\n        rowContent.classList.add('rowContent');\n        rowContent.innerHTML=element.content;\n        row.appendChild(rowContent);\n\n        contactCard.appendChild(row);\n    });\n    \n    \n\n    newMain.appendChild(contactCard);\n\n    content.appendChild(newMain);\n}\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\n\n\nLoadNavigationBar();\n(0,_about__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\nfunction LoadNavigationBar(){\n    const content=document.querySelector('#content');\n    \n    const nav=document.createElement('div');\n    nav.classList.add('nav');\n    \n    const logo=document.createElement('div');\n    logo.classList.add('logo');\n    logo.innerHTML='Momos House';\n    nav.appendChild(logo);\n    \n    const navItems=document.createElement('ul');\n    navItems.classList.add('navItems');\n    const listItems=['About','Menu','Contact'];\n    for(let i=0;i<3;i++){\n        const navItem=document.createElement('li');\n        navItem.setAttribute('id',listItems[i]);\n        navItem.innerHTML=listItems[i];\n        navItems.appendChild(navItem);\n    }\n    nav.appendChild(navItems);\n    content.appendChild(nav);\n}\n\nfunction RenderAbout(e){\n    const content=document.querySelector('#content');\n    const main=document.querySelector('.main');\n    content.removeChild(main);\n    (0,_about__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n}\n\n\nconst about=document.querySelector('#About');\nabout.addEventListener('click', RenderAbout);\n\nconst menu=document.querySelector('#Menu');\nmenu.addEventListener('click', _menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n\nconst contact=document.querySelector('#Contact');\ncontact.addEventListener('click', _contact__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ RenderMenu)\n/* harmony export */ });\nfunction RenderMenu(e){\n    const content=document.querySelector('#content');\n    const main=document.querySelector('.main');\n    content.removeChild(main);\n\n    const newMain=document.createElement('div');\n    newMain.classList.add('main');\n\n    const heading=document.createElement('div');\n    heading.classList.add('heading');\n    heading.innerHTML='Menu';\n    newMain.appendChild(heading);\n\n    const menuGrid=document.createElement('div');\n    menuGrid.classList.add('menuGrid');\n\n    const menuCardData=['Veg Momos','Paneer Momos','Cheese Momos','Kurkure Momos', 'Peri Peri Momos','Tandoori Momos', 'Gravy Momos', 'Momos House Special'];\n    \n    for(let i=0;i<8;i++){\n        const menuCard=document.createElement('div');\n        menuCard.classList.add('menuCard');\n        \n        const menuCardImage=document.createElement('div');\n        menuCardImage.classList.add('menuCardImage');\n        \n        const img=document.createElement('img');\n        img.src='../assets/momos.png';\n\n        menuCardImage.appendChild(img);\n        menuCard.appendChild(menuCardImage);\n\n        const menuCardName=document.createElement('div');\n        menuCardName.classList.add('menuCardName');\n        menuCardName.innerHTML=menuCardData[i];\n        menuCard.appendChild(menuCardName)\n\n        menuGrid.appendChild(menuCard);\n    }\n    newMain.appendChild(menuGrid);\n    content.appendChild(newMain);\n};\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

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