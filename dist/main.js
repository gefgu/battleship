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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  margin: 0;\\n  min-height: 100vh;\\n  font-family: sans-serif;\\n  text-align: center;\\n  padding: 16px;\\n}\\n\\n.grid-container {\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: space-evenly;\\n  padding: 32px;\\n  gap: 64px;\\n}\\n\\n.gameboard-grid {\\n  display: grid;\\n  grid-template-columns: 1fr;\\n  grid-template-rows: repeat(10, 50px);\\n}\\n\\n.gameboard-grid > div {\\n  display: grid;\\n  grid-template-columns: repeat(10, 50px);\\n  grid-template-rows: 1fr;\\n}\\n\\n.gameboard-grid > div > div {\\n  border: 1px solid black;\\n}\\n\\n.gameboard-grid > div > div.ship {\\n  background-color: rgba(0, 0, 0, 0.75);\\n}\\n\\n.gameboard-grid > div > div.hit {\\n  background-color: rgba(255, 0, 0, 0.5);\\n}\\n\\n.gameboard-grid > div > div.ship.hit {\\n  background-color: rgba(255, 0, 0, 1);\\n}\\n\\n.gameboard-grid > div > div.drag-over {\\n  background-color: rgba(0, 0, 0, 0.25);\\n}\\n\\nh1 {\\n  letter-spacing: 0.5rem;\\n  font-size: 4rem;\\n}\\n\\n.ships-container {\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: space-around;\\n}\\n\\n#carrier {\\n  width: calc(50px * 5);\\n  height: 50px;\\n  background-color: rgba(0, 0, 0, 0.75);\\n}\\n\\n#battleship {\\n  width: calc(50px * 4);\\n  height: 50px;\\n  background-color: rgba(0, 0, 0, 0.75);\\n}\\n#destroyer {\\n  width: calc(50px * 3);\\n  height: 50px;\\n  background-color: rgba(0, 0, 0, 0.75);\\n}\\n#submarine {\\n  width: calc(50px * 3);\\n  height: 50px;\\n  background-color: rgba(0, 0, 0, 0.75);\\n}\\n#patrol {\\n  width: calc(50px * 2);\\n  height: 50px;\\n  background-color: rgba(0, 0, 0, 0.75);\\n}\\n\\n.end-message {\\n  font-size: 2rem;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/display-controller.js":
/*!***********************************!*\
  !*** ./src/display-controller.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayController\": () => (/* binding */ displayController)\n/* harmony export */ });\nconst displayController = (() => {\n  const playerGameboardID = \"player-id\";\n  const botGameboardID = \"bot-id\";\n  const gameboardClass = \"gameboard-grid\";\n  const gridContainerClassName = \"grid-container\";\n\n  const body = document.querySelector(\"body\");\n  const heading = document.createElement(\"h1\");\n  heading.textContent = \"BATTLESHIP\";\n  body.appendChild(heading);\n  const gridContainer = document.createElement(\"div\");\n  gridContainer.classList.add(gridContainerClassName);\n  body.appendChild(gridContainer);\n\n  // Allow drop events\n  document.addEventListener(\"dragover\", (e) => {\n    e.preventDefault();\n  });\n  document.addEventListener(\"dragenter\", (e) => {\n    e.preventDefault();\n  });\n\n  const createGameboardGrid = () => {\n    const gameboardGrid = document.createElement(\"div\");\n    gameboardGrid.classList.add(gameboardClass);\n    for (let y = 0; y < 10; y++) {\n      const row = document.createElement(\"div\");\n      for (let x = 0; x < 10; x++) {\n        const cell = document.createElement(\"div\");\n        cell.dataset.x = x;\n        cell.dataset.y = y;\n        row.appendChild(cell);\n      }\n      gameboardGrid.appendChild(row);\n    }\n    return gameboardGrid;\n  };\n\n  const createPlayerGameboard = (gameboard) => {\n    const playerSpace = document.createElement(\"div\");\n    const playerGameboard = createGameboardGrid();\n    playerGameboard.id = playerGameboardID;\n    const grid = gameboard.show();\n    playerGameboard.childNodes.forEach((row, y) => {\n      row.childNodes.forEach((cell, x) => {\n        if (grid[y][x] !== \"\") {\n          cell.classList.add(\"ship\");\n        }\n        cell.addEventListener(\"dragover\", () => {\n          const shipLength = +dragged.dataset.length;\n\n          if (x + shipLength <= 10) {\n            for (let i = 0; i < shipLength; i++) {\n              playerGameboard.childNodes[y].childNodes[x + i].classList.add(\n                \"drag-over\"\n              );\n            }\n          }\n        });\n        cell.addEventListener(\"dragleave\", () => {\n          const shipLength = +dragged.dataset.length;\n          if (x + shipLength <= 10) {\n            for (let i = 0; i < shipLength; i++) {\n              playerGameboard.childNodes[y].childNodes[x + i].classList.remove(\n                \"drag-over\"\n              );\n            }\n          }\n        });\n      });\n    });\n    gameboard.reportShots().forEach(([x, y]) => {\n      playerGameboard.childNodes[y].childNodes[x].classList.add(\"hit\");\n    });\n\n    const label = document.createElement(\"h3\");\n    label.textContent = \"Player's Gameboard\";\n\n    playerSpace.appendChild(playerGameboard);\n    playerSpace.appendChild(label);\n\n    gridContainer.appendChild(playerSpace);\n  };\n\n  const createBotGameboard = (gameboard) => {\n    const botSpace = document.createElement(\"div\");\n    const botGrid = createGameboardGrid();\n    botGrid.id = botGameboardID;\n    const grid = gameboard.show();\n    gameboard.reportShots().forEach(([x, y]) => {\n      botGrid.childNodes[y].childNodes[x].classList.add(\"hit\");\n      if (grid[y][x] !== \"\") {\n        botGrid.childNodes[y].childNodes[x].classList.add(\"ship\");\n      }\n    });\n\n    const label = document.createElement(\"h3\");\n    label.textContent = \"Bot's Gameboard\";\n\n    botSpace.appendChild(botGrid);\n    botSpace.appendChild(label);\n\n    gridContainer.appendChild(botSpace);\n  };\n\n  const getPlayerMove = async () => {\n    const botGrid = document.querySelector(`#${botGameboardID}`);\n    return new Promise((resolve) => {\n      botGrid.addEventListener(\"click\", (e) => {\n        if (!e.target.classList.contains(\"hit\")) {\n          resolve([e.target.dataset.x, e.target.dataset.y]);\n        }\n      });\n    });\n  };\n\n  const update = (playerGameboard, botGameboard) => {\n    document.querySelector(`.${gridContainerClassName}`).textContent = \"\";\n    createPlayerGameboard(playerGameboard);\n    createBotGameboard(botGameboard);\n  };\n\n  // create ships\n  const shipsContainer = document.createElement(\"div\");\n  shipsContainer.classList.add(\"ships-container\");\n  const carrier = document.createElement(\"div\");\n  carrier.draggable = true;\n  carrier.id = \"carrier\";\n  carrier.dataset.length = 5;\n  const battleship = document.createElement(\"div\");\n  battleship.draggable = true;\n  battleship.id = \"battleship\";\n  battleship.dataset.length = 4;\n  const destroyer = document.createElement(\"div\");\n  destroyer.draggable = true;\n  destroyer.id = \"destroyer\";\n  destroyer.dataset.length = 3;\n  const submarine = document.createElement(\"div\");\n  submarine.draggable = true;\n  submarine.id = \"submarine\";\n  submarine.dataset.length = 3;\n  const patrol = document.createElement(\"div\");\n  patrol.draggable = true;\n  patrol.id = \"patrol\";\n  patrol.dataset.length = 2;\n\n  shipsContainer.append(carrier, battleship, destroyer, submarine, patrol);\n  body.appendChild(shipsContainer);\n\n  let dragged;\n\n  document.addEventListener(\"dragstart\", (event) => {\n    dragged = event.target;\n  });\n\n  const resolvePositionOfDrop = (shipObject, size, resolveMethod) => {\n    document.addEventListener(\"drop\", (event) => {\n      const x = +event.target.dataset.x;\n      const y = +event.target.dataset.y;\n      if (\n        dragged === shipObject &&\n        x + size <= 10 &&\n        event.target.parentElement.parentElement.id === playerGameboardID\n      ) {\n        for (let i = 0; i < size; i++) {\n          const cell = document.querySelector(\n            `#${playerGameboardID} div[data-x='${x + i}'][data-y='${y}']`\n          );\n          if (cell.classList.contains(\"ship\")) {\n            return;\n          }\n        }\n        dragged.remove();\n        resolveMethod([x, y]);\n      }\n    });\n  };\n\n  const getCarrierPosition = () => {\n    return new Promise((resolve) => resolvePositionOfDrop(carrier, 5, resolve));\n  };\n  const getBattleshipPosition = () => {\n    return new Promise((resolve) =>\n      resolvePositionOfDrop(battleship, 4, resolve)\n    );\n  };\n  const getDestroyerPosition = () => {\n    return new Promise((resolve) =>\n      resolvePositionOfDrop(destroyer, 3, resolve)\n    );\n  };\n  const getSubmarinePosition = () => {\n    return new Promise((resolve) =>\n      resolvePositionOfDrop(submarine, 3, resolve)\n    );\n  };\n  const getPatrolBoatPosition = () => {\n    return new Promise((resolve) => resolvePositionOfDrop(patrol, 2, resolve));\n  };\n\n  const showEndMessage = (playerWon) => {\n    const messageElement = document.createElement(\"h2\");\n    messageElement.classList.add(\"end-message\");\n    if (playerWon) {\n      messageElement.textContent = \"You Won!!!\";\n    } else {\n      messageElement.textContent = \"The Bot Won!!!\";\n    }\n    body.insertBefore(messageElement, gridContainer);\n  };\n\n  return {\n    getPlayerMove,\n    update,\n    getCarrierPosition,\n    getBattleshipPosition,\n    getDestroyerPosition,\n    getSubmarinePosition,\n    getPatrolBoatPosition,\n    showEndMessage,\n  };\n})();\n\n\n\n\n//# sourceURL=webpack://battleship/./src/display-controller.js?");

/***/ }),

/***/ "./src/game-loop.js":
/*!**************************!*\
  !*** ./src/game-loop.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"gameController\": () => (/* binding */ gameController)\n/* harmony export */ });\n/* harmony import */ var _player_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player-factory */ \"./src/player-factory.js\");\n/* harmony import */ var _gameboard_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard-factory */ \"./src/gameboard-factory.js\");\n/* harmony import */ var _display_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display-controller */ \"./src/display-controller.js\");\n\n\n\n\nconst gameController = (() => {\n  const player1 = (0,_player_factory__WEBPACK_IMPORTED_MODULE_0__.createPlayer)();\n  const player2 = (0,_player_factory__WEBPACK_IMPORTED_MODULE_0__.createPlayer)();\n  const player1Gameboard = (0,_gameboard_factory__WEBPACK_IMPORTED_MODULE_1__.createGameboard)();\n  const player2Gameboard = (0,_gameboard_factory__WEBPACK_IMPORTED_MODULE_1__.createGameboard)();\n\n  let isPlayer1Turn = true;\n\n  // Fisher???Yates shuffle\n  const shuffle = (array) => {\n    let currentIndex = array.length,\n      randomIndex;\n\n    while (currentIndex != 0) {\n      randomIndex = Math.floor(Math.random() * currentIndex);\n      currentIndex--;\n\n      [array[currentIndex], array[randomIndex]] = [\n        array[randomIndex],\n        array[currentIndex],\n      ];\n    }\n\n    return array;\n  };\n\n  const placeBotShips = () => {\n    const ySelected = shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]).slice(0, 5);\n    const xSelected = shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]).slice(0, 5);\n\n    player2Gameboard.placeShip(\n      xSelected[0] <= 5 ? xSelected[0] : 5,\n      ySelected[0],\n      5\n    ); // Carrier\n    player2Gameboard.placeShip(\n      xSelected[1] <= 6 ? xSelected[1] : 6,\n      ySelected[1],\n      4\n    ); // Battleship\n    player2Gameboard.placeShip(\n      xSelected[2] <= 7 ? xSelected[2] : 7,\n      ySelected[2],\n      3\n    ); // Destroyer\n    player2Gameboard.placeShip(\n      xSelected[3] <= 7 ? xSelected[3] : 7,\n      ySelected[3],\n      3\n    ); // Submarine\n    player2Gameboard.placeShip(\n      xSelected[4] <= 8 ? xSelected[4] : 8,\n      ySelected[4],\n      2\n    ); // Patrol Boat\n  };\n\n  const setUp = async () => {\n    _display_controller__WEBPACK_IMPORTED_MODULE_2__.displayController.update(player1Gameboard, player2Gameboard);\n\n    placeBotShips();\n\n    await Promise.all([\n      _display_controller__WEBPACK_IMPORTED_MODULE_2__.displayController.getCarrierPosition().then(([x, y]) => {\n        player1Gameboard.placeShip(x, y, 5);\n        _display_controller__WEBPACK_IMPORTED_MODULE_2__.displayController.update(player1Gameboard, player2Gameboard);\n      }),\n      _display_controller__WEBPACK_IMPORTED_MODULE_2__.displayController.getBattleshipPosition().then(([x, y]) => {\n        player1Gameboard.placeShip(x, y, 4);\n        _display_controller__WEBPACK_IMPORTED_MODULE_2__.displayController.update(player1Gameboard, player2Gameboard);\n      }),\n      _display_controller__WEBPACK_IMPORTED_MODULE_2__.displayController.getDestroyerPosition().then(([x, y]) => {\n        player1Gameboard.placeShip(x, y, 3);\n        _display_controller__WEBPACK_IMPORTED_MODULE_2__.displayController.update(player1Gameboard, player2Gameboard);\n      }),\n      _display_controller__WEBPACK_IMPORTED_MODULE_2__.displayController.getSubmarinePosition().then(([x, y]) => {\n        player1Gameboard.placeShip(x, y, 3);\n        _display_controller__WEBPACK_IMPORTED_MODULE_2__.displayController.update(player1Gameboard, player2Gameboard);\n      }),\n      _display_controller__WEBPACK_IMPORTED_MODULE_2__.displayController.getPatrolBoatPosition().then(([x, y]) => {\n        player1Gameboard.placeShip(x, y, 2);\n        _display_controller__WEBPACK_IMPORTED_MODULE_2__.displayController.update(player1Gameboard, player2Gameboard);\n      }),\n    ]);\n  };\n\n  const playTurn = async () => {\n    if (isPlayer1Turn) {\n      const position = await _display_controller__WEBPACK_IMPORTED_MODULE_2__.displayController.getPlayerMove();\n      player1.attack(player2Gameboard, position[0], position[1]);\n      isPlayer1Turn = false;\n    } else {\n      player2.attack(player1Gameboard);\n      isPlayer1Turn = true;\n    }\n    _display_controller__WEBPACK_IMPORTED_MODULE_2__.displayController.update(player1Gameboard, player2Gameboard);\n  };\n\n  const run = async () => {\n    await setUp();\n    while (!player1Gameboard.allSunk() && !player2Gameboard.allSunk()) {\n      await playTurn();\n    }\n    _display_controller__WEBPACK_IMPORTED_MODULE_2__.displayController.showEndMessage(player2Gameboard.allSunk());\n  };\n  return { run };\n})();\n\n\n\n// Fix Drag and Drop in Bot's Gameboard\n// Improve bot logic\n\n\n//# sourceURL=webpack://battleship/./src/game-loop.js?");

/***/ }),

/***/ "./src/gameboard-factory.js":
/*!**********************************!*\
  !*** ./src/gameboard-factory.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createGameboard\": () => (/* binding */ createGameboard)\n/* harmony export */ });\n/* harmony import */ var _ship_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship-factory */ \"./src/ship-factory.js\");\n\n\nconst createGameboard = () => {\n  let grid = Array.from({ length: 10 }, () =>\n    Array.from({ length: 10 }, () => \"\")\n  );\n  let ships = {};\n  let shots = [];\n  const placeShip = (x, y, length) => {\n    const placeIsEmpty = grid[y].slice(x, x + length).reduce((prev, curr) => {\n      if (curr === \"\") {\n        return  true && prev;\n      }\n      return false;\n    }, true);\n    const hasSpaceForShip = x + length <= 10;\n    if (!placeIsEmpty || !hasSpaceForShip) {\n      throw new TypeError(\"Invalid Ship Location\");\n    }\n    const ship = (0,_ship_factory__WEBPACK_IMPORTED_MODULE_0__.createShip)(length);\n    const shipName = `ship${Object.keys(ships).length}`;\n    ships[shipName] = ship;\n    for (let i = 0; i < length; i++) {\n      grid[y][x + i] = `${shipName}.${i}`;\n    }\n  };\n  const receiveAttack = (x, y) => {\n    const cellContent = grid[y][x];\n    shots.push([x, y]);\n    if (cellContent.includes(\"ship\")) {\n      const shipName = cellContent.split(\".\")[0];\n      ships[shipName].hit(+cellContent.split(\".\")[1]);\n      return true;\n    }\n    return false;\n  };\n  const allSunk = () => {\n    return Object.keys(ships)\n      .map((key) => ships[key].isSunk())\n      .reduce((prev, curr) => prev && curr, true);\n  };\n  const reportShots = () => shots;\n  const show = () => grid;\n  return {\n    placeShip,\n    receiveAttack,\n    allSunk,\n    reportShots,\n    show,\n  };\n};\n\n\n\n\n//# sourceURL=webpack://battleship/./src/gameboard-factory.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_loop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game-loop */ \"./src/game-loop.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n(() => {\n  _game_loop__WEBPACK_IMPORTED_MODULE_0__.gameController.run();\n})();\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/player-factory.js":
/*!*******************************!*\
  !*** ./src/player-factory.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createPlayer\": () => (/* binding */ createPlayer)\n/* harmony export */ });\nconst createPlayer = () => {\n  const sucessfulShots = [];\n\n  const getRandomPosition = (pastShots) => {\n    while (true) {\n      const randomX = Math.floor(Math.random() * 10);\n      const randomY = Math.floor(Math.random() * 10);\n      if (\n        !pastShots.some((shot) => shot[0] === randomX && shot[1] === randomY)\n      ) {\n        return [randomX, randomY];\n      }\n    }\n  };\n\n  const getProbablePosition = (pastShots) => {\n    let probablePosition;\n    sucessfulShots.some((goodShoot) => {\n      const leftPossibility = [goodShoot[0] - 1, goodShoot[1]];\n      if (\n        leftPossibility[0] >= 0 &&\n        !pastShots.some(\n          (shot) =>\n            shot[0] === leftPossibility[0] && shot[1] === leftPossibility[1]\n        )\n      ) {\n        probablePosition = leftPossibility;\n        return true;\n      }\n      const rightPossibility = [goodShoot[0] + 1, goodShoot[1]];\n      if (\n        rightPossibility[0] < 10 &&\n        !pastShots.some(\n          (shot) =>\n            shot[0] === rightPossibility[0] && shot[1] === rightPossibility[1]\n        )\n      ) {\n        probablePosition = rightPossibility;\n        return true;\n      }\n    });\n    if (probablePosition) return probablePosition;\n    return getRandomPosition(pastShots);\n  };\n\n  const attack = (enemyGameboard, x, y) => {\n    const pastShots = enemyGameboard.reportShots();\n    let selectedX, selectedY;\n    if (!pastShots.includes([x, y])) {\n      selectedX = x;\n      selectedY = y;\n    }\n    if (x === undefined || y === undefined) {\n      [selectedX, selectedY] = getProbablePosition(pastShots);\n    }\n\n    const hitAShip = enemyGameboard.receiveAttack(selectedX, selectedY);\n    if (hitAShip) {\n      sucessfulShots.push([selectedX, selectedY]);\n    }\n  };\n\n  return {\n    attack,\n  };\n};\n\n\n\n\n//# sourceURL=webpack://battleship/./src/player-factory.js?");

/***/ }),

/***/ "./src/ship-factory.js":
/*!*****************************!*\
  !*** ./src/ship-factory.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createShip\": () => (/* binding */ createShip)\n/* harmony export */ });\nconst createShip = (length) => {\n  let hitLocations = Array.from({ length: length }, () => false);\n  return {\n    hit: (position) => {\n      hitLocations[position] = true;\n    },\n    isSunk: () => {\n      return hitLocations.reduce((prev, curr) => prev && curr, true);\n    },\n  };\n};\n\n\n\n\n//# sourceURL=webpack://battleship/./src/ship-factory.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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