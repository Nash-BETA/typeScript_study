/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/food-app/food.ts":
/*!******************************!*\
  !*** ./src/food-app/food.ts ***!
  \******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Food\n/* harmony export */ });\n/* harmony import */ var _score__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./score */ \"./src/food-app/score.ts\");\n\nclass Food {\n    constructor(element) {\n        this.element = element;\n        //bindを使うことで\n        element.addEventListener('click', this.clickEventHandler.bind(this));\n    }\n    //food--activeをトグル操作する\n    clickEventHandler() {\n        //classLisst.remove('food--active') => [jQuery]('.food--active').remove();\n        this.element.classList.toggle('food--active');\n        const score = new _score__WEBPACK_IMPORTED_MODULE_0__.Score();\n        score.render();\n    }\n}\n\n\n//# sourceURL=webpack:///./src/food-app/food.ts?");

/***/ }),

/***/ "./src/food-app/foods.ts":
/*!*******************************!*\
  !*** ./src/food-app/foods.ts ***!
  \*******************************/
/*! namespace exports */
/*! export Foods [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Foods\": () => /* binding */ Foods\n/* harmony export */ });\n/* harmony import */ var _food__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./food */ \"./src/food-app/food.ts\");\n\nclass Foods {\n    constructor() {\n        this.elements = document.querySelectorAll('.food');\n        this._activeElements = [];\n        this._activeElementsScore = [];\n        this.elements.forEach(element => {\n            new _food__WEBPACK_IMPORTED_MODULE_0__.default(element);\n        });\n    }\n    /**\n     * activeElements - 現状アクティブ状態の物を取得する\n     */\n    get activeElements() {\n        //初期化して値の重複を避ける\n        this._activeElements = [];\n        this.elements.forEach(element => {\n            //food--activeクラスを持っているエレメント\n            if (element.classList.contains('food--active')) {\n                //_activeElementsの配列に値を入れる\n                this._activeElements.push(element);\n            }\n        });\n        //_activeElementsの値を定義する\n        return this._activeElements;\n    }\n    /**\n     * activeElementsScore - アクティブ状態のものの数値を返す\n     */\n    get activeElementsScore() {\n        this._activeElementsScore = [];\n        this.activeElements.forEach(element => {\n            const FoodScore = element.querySelector('.food__score');\n            //nullの場合を避ける為\n            if (FoodScore) {\n                //取得した値を配列に代入\n                this._activeElementsScore.push(Number(FoodScore.textContent));\n            }\n        });\n        return this._activeElementsScore;\n    }\n    static getInstance() {\n        if (!Foods.instance) {\n            Foods.instance = new Foods();\n        }\n        return Foods.instance;\n    }\n}\n\n\n//# sourceURL=webpack:///./src/food-app/foods.ts?");

/***/ }),

/***/ "./src/food-app/main.ts":
/*!******************************!*\
  !*** ./src/food-app/main.ts ***!
  \******************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _foods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./foods */ \"./src/food-app/foods.ts\");\n//fromの拡張子は付けないのか？\n//ウェブパックを使わない場合は.jsを付けなくてはいけない\n\n_foods__WEBPACK_IMPORTED_MODULE_0__.Foods.getInstance();\n\n\n//# sourceURL=webpack:///./src/food-app/main.ts?");

/***/ }),

/***/ "./src/food-app/score.ts":
/*!*******************************!*\
  !*** ./src/food-app/score.ts ***!
  \*******************************/
/*! namespace exports */
/*! export Score [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Score\": () => /* binding */ Score\n/* harmony export */ });\n/* harmony import */ var _foods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./foods */ \"./src/food-app/foods.ts\");\n\nclass Score {\n    /**\n    * totalScore - 現状の合計スコアの足し算\n    */\n    get totalScore() {\n        const foods = _foods__WEBPACK_IMPORTED_MODULE_0__.Foods.getInstance();\n        //reduce数値の足し算で使われる関数\n        return foods.activeElementsScore.reduce((total, score) => total + score, 0);\n    }\n    //DOMの書き換え\n    render() {\n        document.querySelector('.score__number').textContent = String(this.totalScore);\n    }\n    static getInstance() {\n        if (!Score.instance) {\n            Score.instance = new Score();\n        }\n        return Score.instance;\n    }\n}\n\n\n//# sourceURL=webpack:///./src/food-app/score.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/food-app/main.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;