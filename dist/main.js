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

/***/ "./src/display-controller.js":
/*!***********************************!*\
  !*** ./src/display-controller.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayController\": () => (/* binding */ displayController)\n/* harmony export */ });\nconst displayController = (() => {\n  const body = document.querySelector(\"body\");\n\n  const createGameboardGrid = () => {\n    const gameboardGrid = document.createElement(\"div\");\n    for (let i = 0; i < 10; i++) {\n      const row = document.createElement(\"div\");\n      for (let j = 0; j < 10; j++) {\n        const cell = document.createElement(\"div\");\n        row.appendChild(cell);\n      }\n      gameboardGrid.appendChild(row);\n    }\n    return gameboardGrid;\n  };\n\n  const createPlayerGameboard = (gameboard) => {\n    body.appendChild(createGameboardGrid());\n  };\n\n  const createBotGameboard = (gameboard) => {\n    body.appendChild(createGameboardGrid());\n  };\n\n  return {\n    createPlayerGameboard,\n    createBotGameboard,\n  };\n})();\n\n\n\n\n//# sourceURL=webpack://battleship/./src/display-controller.js?");

/***/ }),

/***/ "./src/game-loop.js":
/*!**************************!*\
  !*** ./src/game-loop.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"gameController\": () => (/* binding */ gameController)\n/* harmony export */ });\n/* harmony import */ var _player_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player-factory */ \"./src/player-factory.js\");\n/* harmony import */ var _gameboard_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard-factory */ \"./src/gameboard-factory.js\");\n/* harmony import */ var _display_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display-controller */ \"./src/display-controller.js\");\n\n\n\n\nconst gameController = (() => {\n  const run = () => {\n    const player1 = (0,_player_factory__WEBPACK_IMPORTED_MODULE_0__.createPlayer)();\n    const player2 = (0,_player_factory__WEBPACK_IMPORTED_MODULE_0__.createPlayer)();\n    const player1Gameboard = (0,_gameboard_factory__WEBPACK_IMPORTED_MODULE_1__.createGameboard)();\n    player1Gameboard.placeShip(0, 0, 5); // Carrier\n    player1Gameboard.placeShip(3, 4, 4); // Battleship\n    player1Gameboard.placeShip(7, 2, 3); // Destroyer\n    player1Gameboard.placeShip(2, 8, 3); // Submarine\n    player1Gameboard.placeShip(5, 5, 2); // Patrol Boat\n    const player2Gameboard = (0,_gameboard_factory__WEBPACK_IMPORTED_MODULE_1__.createGameboard)();\n    player2Gameboard.placeShip(5, 3, 5); // Carrier\n    player2Gameboard.placeShip(6, 1, 4); // Battleship\n    player2Gameboard.placeShip(0, 4, 3); // Destroyer\n    player2Gameboard.placeShip(4, 8, 3); // Submarine\n    player2Gameboard.placeShip(7, 5, 2); // Patrol Boat\n\n    _display_controller__WEBPACK_IMPORTED_MODULE_2__.displayController.createPlayerGameboard(player1Gameboard);\n    _display_controller__WEBPACK_IMPORTED_MODULE_2__.displayController.createBotGameboard(player2Gameboard);\n  };\n  return { run };\n})();\n\n\n\n\n//# sourceURL=webpack://battleship/./src/game-loop.js?");

/***/ }),

/***/ "./src/gameboard-factory.js":
/*!**********************************!*\
  !*** ./src/gameboard-factory.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createGameboard\": () => (/* binding */ createGameboard)\n/* harmony export */ });\n/* harmony import */ var _ship_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship-factory */ \"./src/ship-factory.js\");\n\n\nconst createGameboard = () => {\n  let grid = Array.from({ length: 10 }, () =>\n    Array.from({ length: 10 }, () => \"\")\n  );\n  let ships = {};\n  let shots = [];\n  const placeShip = (x, y, length) => {\n    const placeIsEmpty = grid[y].slice(x, x + length).reduce((prev, curr) => {\n      if (curr === \"\") {\n        return  true && prev;\n      }\n      return false;\n    }, true);\n    const hasSpaceForShip = x + length <= 10;\n    if (!placeIsEmpty || !hasSpaceForShip) {\n      throw new TypeError(\"Invalid Ship Location\");\n    }\n    const ship = (0,_ship_factory__WEBPACK_IMPORTED_MODULE_0__.createShip)(length);\n    const shipName = `ship${Object.keys(ships).length}`;\n    ships[shipName] = ship;\n    for (let i = 0; i < length; i++) {\n      grid[y][x + i] = `${shipName}.${x + i}`;\n    }\n  };\n  const receiveAttack = (x, y) => {\n    const cellContent = grid[y][x];\n    if (cellContent.includes(\"ship\")) {\n      const shipName = cellContent.split(\".\")[0];\n      ships[shipName].hit(+cellContent.split(\".\")[1]);\n    }\n    shots.push([x, y]);\n  };\n  const allSunk = () => {\n    return Object.keys(ships)\n      .map((key) => ships[key].isSunk())\n      .reduce((prev, curr) => prev && curr, true);\n  };\n  const reportShots = () => shots;\n  return {\n    placeShip,\n    receiveAttack,\n    allSunk,\n    reportShots,\n  };\n};\n\n\n\n\n//# sourceURL=webpack://battleship/./src/gameboard-factory.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_loop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game-loop */ \"./src/game-loop.js\");\n\n\n(() => {\n  _game_loop__WEBPACK_IMPORTED_MODULE_0__.gameController.run()\n})()\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/player-factory.js":
/*!*******************************!*\
  !*** ./src/player-factory.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createPlayer\": () => (/* binding */ createPlayer)\n/* harmony export */ });\nconst createPlayer = () => {\n  const attack = (enemyGameboard, x, y) => {\n    const pastShots = enemyGameboard.reportShots();\n    if (x === undefined || y === undefined) {\n      while (true) {\n        const randomX = Math.floor(Math.random() * 10);\n        const randomY = Math.floor(Math.random() * 10);\n        if (!pastShots.includes([randomX, randomY])) {\n          enemyGameboard.receiveAttack(randomX, randomY);\n          return;\n        }\n      }\n    }\n    if(!pastShots.includes([x, y])) {\n      enemyGameboard.receiveAttack(x, y);\n    }\n  };\n\n  return {\n    attack,\n  };\n};\n\n\n\n\n//# sourceURL=webpack://battleship/./src/player-factory.js?");

/***/ }),

/***/ "./src/ship-factory.js":
/*!*****************************!*\
  !*** ./src/ship-factory.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createShip\": () => (/* binding */ createShip)\n/* harmony export */ });\nconst createShip = (length) => {\n  let hitLocations = Array.from({length: length}, () => false)\n  return {\n    hit: (position) => {\n      hitLocations[position] = true;\n    },\n    isSunk: () => {\n      return hitLocations.reduce((prev, curr) => prev && curr, true);\n    }\n  }\n};\n\n\n\n\n//# sourceURL=webpack://battleship/./src/ship-factory.js?");

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