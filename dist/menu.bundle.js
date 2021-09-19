/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
  !*** ./src/loadMenu.js ***!
  \*************************/
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


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBZ0M7QUFDQTtBQUNBO0FBQ0E7O0FBRWhDO0FBQ0Esa0JBQWtCLHVDQUFLLEVBQUUsdUNBQUssRUFBRSx1Q0FBSyxFQUFFLHVDQUFLO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0Esb0JBQW9CLGlCQUFpQjtBQUNyQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9sb2FkTWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiOyIsImltcG9ydCBmb29kMSBmcm9tICcuL2Zvb2QxLmpwZyc7XG5pbXBvcnQgZm9vZDIgZnJvbSAnLi9mb29kMi5qcGcnO1xuaW1wb3J0IGZvb2QzIGZyb20gJy4vZm9vZDMuanBnJztcbmltcG9ydCBmb29kNCBmcm9tICcuL2Zvb2Q0LmpwZyc7XG5cbmZ1bmN0aW9uIGxvYWRNZW51KCl7XG4gICAgY29uc3QgaW1ncyA9IFtmb29kMSwgZm9vZDIsIGZvb2QzLCBmb29kNF07XG4gICAgY29uc3QgdGV4dHM9IFtgRnJlYXNoIFRha295YWtpIHRoYXQgaGFzIG9ubHkgYmVlbiBoYWxmIGVhdGVuISBcXDxicj4kMi4wMCBcXDxicj5cXDxicj5gLCBcbiAgICAnTG90cyBvZiByYW5kb20gbXVzaHJvb21zIEkgZm91bmQgaW4gdGhlIGZvcmVzdCFcXDxicj4gJDUuMDBcXDxicj5cXDxicj4nLCBcbiAgICAnU3BlYWNpYWwgaGFuZG1hZGUgY29va2llcy4gQ2hvY28gYW5kIHZhbmlsbGEhIFlVTSBZVU0hXFw8YnI+ICQzLjUwXFw8YnI+XFw8YnI+JywgXG4gICAgJ015IGZhdm91cml0ZSBtZW51IGl0ZW0hISBUSEUgQU1BWklORyBXQVRFUk1FTE9OIVxcPGJyPiAkMTIuNzVcXDxicj5cXDxicj4nXTtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcbiAgICBtYWluLmlubmVySFRNTCA9IGBQbGVhc2UgY2hvb3NlIGFueSBvZiBvdXQgYW1hemluZyBtZW51IGl0ZW1zISEgXFw8YnI+IEhhbmQgbWFkZS9waWNrZWQgZGFpbHkhIFxcPGJyPlxcPGJyPlxcPGJyPmA7XG5cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW1ncy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gaW1nc1tpXTtcbiAgICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKDIwMCwgMzUwKTtcbiAgICAgICAgaW1nLnNyYyA9IGVsZW1lbnQ7XG5cbiAgICAgICAgY29uc3QgaW1nVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgaW1nVGV4dC5pbm5lckhUTUwgPSB0ZXh0c1tpXTtcblxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKGltZyk7XG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoaW1nVGV4dCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYXBwZW5kZWRcIik7XG4gICAgfVxufVxuXG5leHBvcnQge2xvYWRNZW51fSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==