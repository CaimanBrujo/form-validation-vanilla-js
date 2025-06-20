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

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://template-webpack/./src/css/style.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n\n\nconst form = document.getElementById('form');\nconst email = document.getElementById('email');\nconst country = document.getElementById('country');\nconst postal = document.getElementById('postal');\nconst password = document.getElementById('password');\nconst confirmPassword = document.getElementById('confirm-password');\nconst successMsg = document.getElementById('success-msg');\n\nconst fields = [email, country, postal, password, confirmPassword];\n\nfields.forEach((field) => {\n  field.addEventListener('blur', () => validateField(field));\n});\n\nform.addEventListener('submit', (e) => {\n  e.preventDefault();\n  let isValid = true;\n\n  fields.forEach((field) => {\n    const valid = validateField(field);\n    if (!valid) isValid = false;\n  });\n\n  if (isValid) {\n    successMsg.textContent = 'Form submitted.';\n    form.reset();\n    fields.forEach((f) => f.classList.remove('invalid'));\n  }\n});\n\nfunction validateField(field) {\n  const error = field.nextElementSibling;\n  let msg = '';\n\n  if (field.validity.valueMissing) {\n    msg = 'This field is required.';\n  } else if (field.validity.typeMismatch) {\n    msg = 'Invalid format.';\n  } else if (field.validity.tooShort) {\n    msg = `Minimum length: ${field.minLength}`;\n  } else if (field === confirmPassword && field.value !== password.value) {\n    msg = 'Passwords do not match.';\n  } else if (!field.validity.valid) {\n    msg = 'Invalid input.';\n  }\n\n  if (msg) {\n    error.textContent = msg;\n    field.classList.add('invalid');\n    return false;\n  } else {\n    error.textContent = '';\n    field.classList.remove('invalid');\n    return true;\n  }\n}\n\n\n//# sourceURL=webpack://template-webpack/./src/index.js?");

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