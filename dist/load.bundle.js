/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/loadContact.js":
/*!****************************!*\
  !*** ./src/loadContact.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadContact": () => (/* binding */ loadContact)
/* harmony export */ });


function loadContact(){
    const main = document.getElementById('main');
    main.innerHTML = contactInfo();
}

function contactInfo(){
    return `
    \<br>
    \<br>
    You can reach me via e-mail here:
    \<br>
    \<br>
    patcharaponkongpitak@gmail.com
    \<br>
    \<br>
    `
}



/***/ }),

/***/ "./src/loadHome.js":
/*!*************************!*\
  !*** ./src/loadHome.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadHome": () => (/* binding */ loadHome),
/* harmony export */   "introduction": () => (/* binding */ introduction)
/* harmony export */ });
function loadHome(){
   
    const main = document.getElementById('main');
    main.innerHTML = introduction();

}

function introduction(){
    return `
    Welcome to my cafe! My name is Patch!
    \<br>
    \<br>
    Everything in my cafe is home grown and hand picked.
    \<br>
    \<br>
    All of my food is made to be healthy, yet tasty!
    \<br>
    \<br>
    Please check out all of our amazing fresh food on our menu!
    `
}



/***/ }),

/***/ "./src/loadMenu.js":
/*!*************************!*\
  !*** ./src/loadMenu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadMenu": () => (/* binding */ loadMenu)
/* harmony export */ });
/* harmony import */ var _food1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./food1.jpg */ "./src/food1.jpg");
/* harmony import */ var _food2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./food2.jpg */ "./src/food2.jpg");
/* harmony import */ var _food3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./food3.jpg */ "./src/food3.jpg");
/* harmony import */ var _food4_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./food4.jpg */ "./src/food4.jpg");





function loadMenu(){
    const imgs = [_food1_jpg__WEBPACK_IMPORTED_MODULE_0__, _food2_jpg__WEBPACK_IMPORTED_MODULE_1__, _food3_jpg__WEBPACK_IMPORTED_MODULE_2__, _food4_jpg__WEBPACK_IMPORTED_MODULE_3__];
    const texts= [`Freash Takoyaki that has only been half eaten! \<br>$2.00 \<br>\<br>`, 
    'Lots of random mushrooms I found in the forest!\<br> $5.00\<br>\<br>', 
    'Speacial handmade cookies. Choco and vanilla! YUM YUM!\<br> $3.50\<br>\<br>', 
    'My favourite menu item!! THE AMAZING WATERMELON!\<br> $12.75\<br>\<br>'];
    const main = document.getElementById('main');
    main.innerHTML = `Please choose any of out amazing menu items!! \<br> Hand made/picked daily! \<br>\<br>\<br>`;


    for (let i = 0; i < imgs.length; i++) {
        const element = imgs[i];
        const img = new Image(200, 350);
        img.src = element;

        const imgText = document.createElement('p');
        imgText.innerHTML = texts[i];

        main.appendChild(img);
        main.appendChild(imgText);
        console.log("appended");
    }
}



/***/ }),

/***/ "./src/Banner.jpg":
/*!************************!*\
  !*** ./src/Banner.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a3a9f61eb226dd90a9c9.jpg";

/***/ }),

/***/ "./src/food1.jpg":
/*!***********************!*\
  !*** ./src/food1.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "516f0edf1be9aa521698.jpg";

/***/ }),

/***/ "./src/food2.jpg":
/*!***********************!*\
  !*** ./src/food2.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d8e2f41a76ea2d37f4ad.jpg";

/***/ }),

/***/ "./src/food3.jpg":
/*!***********************!*\
  !*** ./src/food3.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "752c547161d6f72c4373.jpg";

/***/ }),

/***/ "./src/food4.jpg":
/*!***********************!*\
  !*** ./src/food4.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "31fe0b40d3c98eed4895.jpg";

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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addBanner": () => (/* binding */ addBanner),
/* harmony export */   "pageSetup": () => (/* binding */ pageSetup),
/* harmony export */   "nav": () => (/* binding */ nav)
/* harmony export */ });
/* harmony import */ var _Banner_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Banner.jpg */ "./src/Banner.jpg");
/* harmony import */ var _loadMenu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadMenu.js */ "./src/loadMenu.js");
/* harmony import */ var _loadContact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadContact.js */ "./src/loadContact.js");
/* harmony import */ var _loadHome_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loadHome.js */ "./src/loadHome.js");





function addBanner(element){
    const div = document.createElement('div')
    div.id ="banner";

    const newBanner = new Image();
    newBanner.src = _Banner_jpg__WEBPACK_IMPORTED_MODULE_0__;

    div.appendChild(newBanner);
    element.appendChild(div);
}


function pageSetup (element){
    const div = document.createElement('div')
    div.id ="main";
    div.innerHTML = (0,_loadHome_js__WEBPACK_IMPORTED_MODULE_3__.introduction)();
    element.appendChild(div);
}


function nav(element){
    const div = document.createElement('div')
    div.id ="nav";

    const home = document.createElement('a');
    home.id = "home";
    home.innerHTML="Home";
    home.addEventListener('click', _loadHome_js__WEBPACK_IMPORTED_MODULE_3__.loadHome);

    const menu = document.createElement('a');
    menu.id = "menu";
    menu.innerHTML="Menu";
    menu.addEventListener('click', _loadMenu_js__WEBPACK_IMPORTED_MODULE_1__.loadMenu);

    const contact = document.createElement('a');
    contact.id = "contact";
    contact.innerHTML="Contact";
    contact.addEventListener('click', _loadContact_js__WEBPACK_IMPORTED_MODULE_2__.loadContact);


    div.appendChild(home);
    div.appendChild(menu);
    div.appendChild(contact);
    element.appendChild(div);
}





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQmdDO0FBQ0E7QUFDQTtBQUNBOztBQUVoQztBQUNBLGtCQUFrQix1Q0FBSyxFQUFFLHVDQUFLLEVBQUUsdUNBQUssRUFBRSx1Q0FBSztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLG9CQUFvQixpQkFBaUI7QUFDckM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzNCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBa0M7QUFDSztBQUNNO0FBQ1E7O0FBRXJEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQix3Q0FBTTs7QUFFMUI7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsMERBQVk7QUFDaEM7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxrREFBUTs7QUFFM0M7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGtEQUFROztBQUUzQztBQUNBO0FBQ0E7QUFDQSxzQ0FBc0Msd0RBQVc7OztBQUdqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHa0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvbG9hZENvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2xvYWRIb21lLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9sb2FkTWVudS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL3BhZ2VMb2FkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG5mdW5jdGlvbiBsb2FkQ29udGFjdCgpe1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xuICAgIG1haW4uaW5uZXJIVE1MID0gY29udGFjdEluZm8oKTtcbn1cblxuZnVuY3Rpb24gY29udGFjdEluZm8oKXtcbiAgICByZXR1cm4gYFxuICAgIFxcPGJyPlxuICAgIFxcPGJyPlxuICAgIFlvdSBjYW4gcmVhY2ggbWUgdmlhIGUtbWFpbCBoZXJlOlxuICAgIFxcPGJyPlxuICAgIFxcPGJyPlxuICAgIHBhdGNoYXJhcG9ua29uZ3BpdGFrQGdtYWlsLmNvbVxuICAgIFxcPGJyPlxuICAgIFxcPGJyPlxuICAgIGBcbn1cblxuZXhwb3J0IHtsb2FkQ29udGFjdH0iLCJmdW5jdGlvbiBsb2FkSG9tZSgpe1xuICAgXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XG4gICAgbWFpbi5pbm5lckhUTUwgPSBpbnRyb2R1Y3Rpb24oKTtcblxufVxuXG5mdW5jdGlvbiBpbnRyb2R1Y3Rpb24oKXtcbiAgICByZXR1cm4gYFxuICAgIFdlbGNvbWUgdG8gbXkgY2FmZSEgTXkgbmFtZSBpcyBQYXRjaCFcbiAgICBcXDxicj5cbiAgICBcXDxicj5cbiAgICBFdmVyeXRoaW5nIGluIG15IGNhZmUgaXMgaG9tZSBncm93biBhbmQgaGFuZCBwaWNrZWQuXG4gICAgXFw8YnI+XG4gICAgXFw8YnI+XG4gICAgQWxsIG9mIG15IGZvb2QgaXMgbWFkZSB0byBiZSBoZWFsdGh5LCB5ZXQgdGFzdHkhXG4gICAgXFw8YnI+XG4gICAgXFw8YnI+XG4gICAgUGxlYXNlIGNoZWNrIG91dCBhbGwgb2Ygb3VyIGFtYXppbmcgZnJlc2ggZm9vZCBvbiBvdXIgbWVudSFcbiAgICBgXG59XG5cbmV4cG9ydCB7bG9hZEhvbWUsIGludHJvZHVjdGlvbn0iLCJpbXBvcnQgZm9vZDEgZnJvbSAnLi9mb29kMS5qcGcnO1xuaW1wb3J0IGZvb2QyIGZyb20gJy4vZm9vZDIuanBnJztcbmltcG9ydCBmb29kMyBmcm9tICcuL2Zvb2QzLmpwZyc7XG5pbXBvcnQgZm9vZDQgZnJvbSAnLi9mb29kNC5qcGcnO1xuXG5mdW5jdGlvbiBsb2FkTWVudSgpe1xuICAgIGNvbnN0IGltZ3MgPSBbZm9vZDEsIGZvb2QyLCBmb29kMywgZm9vZDRdO1xuICAgIGNvbnN0IHRleHRzPSBbYEZyZWFzaCBUYWtveWFraSB0aGF0IGhhcyBvbmx5IGJlZW4gaGFsZiBlYXRlbiEgXFw8YnI+JDIuMDAgXFw8YnI+XFw8YnI+YCwgXG4gICAgJ0xvdHMgb2YgcmFuZG9tIG11c2hyb29tcyBJIGZvdW5kIGluIHRoZSBmb3Jlc3QhXFw8YnI+ICQ1LjAwXFw8YnI+XFw8YnI+JywgXG4gICAgJ1NwZWFjaWFsIGhhbmRtYWRlIGNvb2tpZXMuIENob2NvIGFuZCB2YW5pbGxhISBZVU0gWVVNIVxcPGJyPiAkMy41MFxcPGJyPlxcPGJyPicsIFxuICAgICdNeSBmYXZvdXJpdGUgbWVudSBpdGVtISEgVEhFIEFNQVpJTkcgV0FURVJNRUxPTiFcXDxicj4gJDEyLjc1XFw8YnI+XFw8YnI+J107XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XG4gICAgbWFpbi5pbm5lckhUTUwgPSBgUGxlYXNlIGNob29zZSBhbnkgb2Ygb3V0IGFtYXppbmcgbWVudSBpdGVtcyEhIFxcPGJyPiBIYW5kIG1hZGUvcGlja2VkIGRhaWx5ISBcXDxicj5cXDxicj5cXDxicj5gO1xuXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGltZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGltZ3NbaV07XG4gICAgICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgyMDAsIDM1MCk7XG4gICAgICAgIGltZy5zcmMgPSBlbGVtZW50O1xuXG4gICAgICAgIGNvbnN0IGltZ1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGltZ1RleHQuaW5uZXJIVE1MID0gdGV4dHNbaV07XG5cbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChpbWcpO1xuICAgICAgICBtYWluLmFwcGVuZENoaWxkKGltZ1RleHQpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImFwcGVuZGVkXCIpO1xuICAgIH1cbn1cblxuZXhwb3J0IHtsb2FkTWVudX0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiOyIsImltcG9ydCBiYW5uZXIgZnJvbSAnLi9CYW5uZXIuanBnJztcbmltcG9ydCB7bG9hZE1lbnV9IGZyb20gJy4vbG9hZE1lbnUuanMnO1xuaW1wb3J0IHtsb2FkQ29udGFjdH0gZnJvbSAnLi9sb2FkQ29udGFjdC5qcyc7XG5pbXBvcnQge2xvYWRIb21lLCBpbnRyb2R1Y3Rpb259IGZyb20gJy4vbG9hZEhvbWUuanMnO1xuXG5mdW5jdGlvbiBhZGRCYW5uZXIoZWxlbWVudCl7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkaXYuaWQgPVwiYmFubmVyXCI7XG5cbiAgICBjb25zdCBuZXdCYW5uZXIgPSBuZXcgSW1hZ2UoKTtcbiAgICBuZXdCYW5uZXIuc3JjID0gYmFubmVyO1xuXG4gICAgZGl2LmFwcGVuZENoaWxkKG5ld0Jhbm5lcik7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChkaXYpO1xufVxuXG5cbmZ1bmN0aW9uIHBhZ2VTZXR1cCAoZWxlbWVudCl7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkaXYuaWQgPVwibWFpblwiO1xuICAgIGRpdi5pbm5lckhUTUwgPSBpbnRyb2R1Y3Rpb24oKTtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGRpdik7XG59XG5cblxuZnVuY3Rpb24gbmF2KGVsZW1lbnQpe1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGl2LmlkID1cIm5hdlwiO1xuXG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBob21lLmlkID0gXCJob21lXCI7XG4gICAgaG9tZS5pbm5lckhUTUw9XCJIb21lXCI7XG4gICAgaG9tZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRIb21lKTtcblxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgbWVudS5pZCA9IFwibWVudVwiO1xuICAgIG1lbnUuaW5uZXJIVE1MPVwiTWVudVwiO1xuICAgIG1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkTWVudSk7XG5cbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGNvbnRhY3QuaWQgPSBcImNvbnRhY3RcIjtcbiAgICBjb250YWN0LmlubmVySFRNTD1cIkNvbnRhY3RcIjtcbiAgICBjb250YWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9hZENvbnRhY3QpO1xuXG5cbiAgICBkaXYuYXBwZW5kQ2hpbGQoaG9tZSk7XG4gICAgZGl2LmFwcGVuZENoaWxkKG1lbnUpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChjb250YWN0KTtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGRpdik7XG59XG5cblxuZXhwb3J0IHthZGRCYW5uZXIsIHBhZ2VTZXR1cCwgbmF2fVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=