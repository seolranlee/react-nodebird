webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ \"./node_modules/next-redux-wrapper/es6/index.js\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ \"./reducers/user.js\");\n/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./post */ \"./reducers/post.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n // user, post reducer들을 불러온다\n\n\n\nvar initialState = {\n  // reducer를 쪼갠 기준: state(user.js, post.js)\n  user: {},\n  post: {}\n}; // reducer: (이전상태, 액션) => return 다음상태\n//\n\nvar rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_2__[\"combineReducers\"])({\n  index: function index() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n    var action = arguments.length > 1 ? arguments[1] : undefined;\n\n    switch (action.type) {\n      case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__[\"HYDRATE\"]:\n        console.log('HYDATE:', next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__[\"HYDRATE\"]);\n        return _objectSpread(_objectSpread({}, state), action.payload);\n      // 최초 초기화 시점을 위한 코드\n\n      default:\n        return state;\n    }\n  },\n  user: _user__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  post: _post__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (rootReducer);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvaW5kZXguanM/Y2U4ZSJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJ1c2VyIiwicG9zdCIsInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwiaW5kZXgiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJIWURSQVRFIiwiY29uc29sZSIsImxvZyIsInBheWxvYWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0NBR0E7O0FBQ0E7QUFDQTtBQUVBLElBQU1BLFlBQVksR0FBRztBQUNuQjtBQUNBQyxNQUFJLEVBQUUsRUFGYTtBQUluQkMsTUFBSSxFQUFFO0FBSmEsQ0FBckIsQyxDQVFBO0FBQ0E7O0FBQ0EsSUFBTUMsV0FBVyxHQUFHQyw2REFBZSxDQUFDO0FBQ2xDQyxPQUFLLEVBQUUsaUJBQXdCO0FBQUEsUUFBdkJDLEtBQXVCLHVFQUFmLEVBQWU7QUFBQSxRQUFYQyxNQUFXOztBQUM3QixZQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxXQUFLQywwREFBTDtBQUNFQyxlQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCRiwwREFBdkI7QUFDQSwrQ0FBWUgsS0FBWixHQUFzQkMsTUFBTSxDQUFDSyxPQUE3QjtBQUNGOztBQUNBO0FBQ0UsZUFBT04sS0FBUDtBQU5KO0FBUUQsR0FWaUM7QUFXbENMLE1BQUksRUFBSkEsNkNBWGtDO0FBWWxDQyxNQUFJLEVBQUpBLDZDQUFJQTtBQVo4QixDQUFELENBQW5DO0FBZWVDLDBFQUFmIiwiZmlsZSI6Ii4vcmVkdWNlcnMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIWURSQVRFIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiXG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCdcblxuLy8gdXNlciwgcG9zdCByZWR1Y2Vy65Ok7J2EIOu2iOufrOyYqOuLpFxuaW1wb3J0IHVzZXIgZnJvbSAnLi91c2VyJ1xuaW1wb3J0IHBvc3QgZnJvbSAnLi9wb3N0J1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIC8vIHJlZHVjZXLrpbwg7Kq86rCgIOq4sOykgDogc3RhdGUodXNlci5qcywgcG9zdC5qcylcbiAgdXNlcjoge1xuICB9LFxuICBwb3N0OiB7XG4gIH1cbn1cblxuLy8gcmVkdWNlcjogKOydtOyghOyDge2DnCwg7JWh7IWYKSA9PiByZXR1cm4g64uk7J2M7IOB7YOcXG4vL1xuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICBpbmRleDogKHN0YXRlID0ge30sIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgSFlEUkFURTpcbiAgICAgICAgY29uc29sZS5sb2coJ0hZREFURTonLCBIWURSQVRFKVxuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgLi4uYWN0aW9uLnBheWxvYWQgfVxuICAgICAgLy8g7LWc7LSIIOy0iOq4sO2ZlCDsi5zsoJDsnYQg7JyE7ZWcIOy9lOuTnFxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgfVxuICB9LFxuICB1c2VyLFxuICBwb3N0LFxufSlcblxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./reducers/index.js\n");

/***/ })

})