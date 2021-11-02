webpackHotUpdate_N_E("pages/_app",{

/***/ "./sagas/index.js":
/*!************************!*\
  !*** ./sagas/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return rootSaga; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ \"./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(logIn),\n    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLogin),\n    _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLogOut),\n    _marked4 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchAddPosts),\n    _marked5 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(rootSaga);\n\n\n // 서버에 요청하는 함수는 일반 함수!!!\n\nfunction loginAPI() {\n  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/login');\n}\n\nfunction logIn() {\n  var result;\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function logIn$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.prev = 0;\n          _context.next = 3;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])( // action 객체\n          {\n            type: 'LOG_IN_SUCCESS',\n            data: result.data\n          });\n\n        case 3:\n          _context.next = 5;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"call\"])(loginAPI);\n\n        case 5:\n          result = _context.sent;\n          _context.next = 12;\n          break;\n\n        case 8:\n          _context.prev = 8;\n          _context.t0 = _context[\"catch\"](0);\n          _context.next = 12;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            type: 'LOG_IN_FAILURE',\n            data: _context.t0.response.data\n          });\n\n        case 12:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _marked, null, [[0, 8]]);\n}\n\nfunction watchLogin() {\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLogin$(_context2) {\n    while (1) {\n      switch (_context2.prev = _context2.next) {\n        case 0:\n          _context2.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"take\"])('LOG_IN_REQUEST', logIn);\n\n        case 2:\n        case \"end\":\n          return _context2.stop();\n      }\n    }\n  }, _marked2);\n}\n\nfunction watchLogOut() {\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLogOut$(_context3) {\n    while (1) {\n      switch (_context3.prev = _context3.next) {\n        case 0:\n          _context3.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"take\"])('LOG_OUT_REQUEST');\n\n        case 2:\n        case \"end\":\n          return _context3.stop();\n      }\n    }\n  }, _marked3);\n}\n\nfunction watchAddPosts() {\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchAddPosts$(_context4) {\n    while (1) {\n      switch (_context4.prev = _context4.next) {\n        case 0:\n          _context4.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"take\"])('ADD_POST');\n\n        case 2:\n        case \"end\":\n          return _context4.stop();\n      }\n    }\n  }, _marked4);\n}\n\nfunction rootSaga() {\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function rootSaga$(_context5) {\n    while (1) {\n      switch (_context5.prev = _context5.next) {\n        case 0:\n          _context5.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"all\"])([// 1) fork나 call로 generator함수를 실행시켜준다\n          Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"fork\"])(watchLogin), // fork !== call \n          Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"fork\"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"fork\"])(watchAddPosts)]);\n\n        case 2:\n        case \"end\":\n          return _context5.stop();\n      }\n    }\n  }, _marked5);\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvaW5kZXguanM/NzdlMyJdLCJuYW1lcyI6WyJsb2dJbiIsIndhdGNoTG9naW4iLCJ3YXRjaExvZ091dCIsIndhdGNoQWRkUG9zdHMiLCJyb290U2FnYSIsImxvZ2luQVBJIiwiYXhpb3MiLCJwb3N0IiwicHV0IiwidHlwZSIsImRhdGEiLCJyZXN1bHQiLCJjYWxsIiwicmVzcG9uc2UiLCJ0YWtlIiwiYWxsIiwiZm9yayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O2tHQVFVQSxLO21HQW9CQUMsVTttR0FNQUMsVzttR0FJQUMsYTttR0FJZUMsUTs7QUExQ3pCO0NBR0E7O0FBQ0EsU0FBU0MsUUFBVCxHQUFvQjtBQUNsQixTQUFPQyw0Q0FBSyxDQUFDQyxJQUFOLENBQVcsWUFBWCxDQUFQO0FBQ0Q7O0FBRUQsU0FBVVAsS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUksaUJBQU1RLDhEQUFHLEVBQ1A7QUFDQTtBQUNFQyxnQkFBSSxFQUFFLGdCQURSO0FBRUVDLGdCQUFJLEVBQUVDLE1BQU0sQ0FBQ0Q7QUFGZixXQUZPLENBQVQ7O0FBSko7QUFBQTtBQVdtQixpQkFBTUUsK0RBQUksQ0FBQ1AsUUFBRCxDQUFWOztBQVhuQjtBQVdVTSxnQkFYVjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFhSSxpQkFBTUgsOERBQUcsQ0FBQztBQUNSQyxnQkFBSSxFQUFFLGdCQURFO0FBRVJDLGdCQUFJLEVBQUUsWUFBSUcsUUFBSixDQUFhSDtBQUZYLFdBQUQsQ0FBVDs7QUFiSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFvQkEsU0FBVVQsVUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHRSxpQkFBTWEsK0RBQUksQ0FBQyxnQkFBRCxFQUFtQmQsS0FBbkIsQ0FBVjs7QUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFNQSxTQUFVRSxXQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFLGlCQUFNWSwrREFBSSxDQUFDLGlCQUFELENBQVY7O0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBSUEsU0FBVVgsYUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRSxpQkFBTVcsK0RBQUksQ0FBQyxVQUFELENBQVY7O0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBSWUsU0FBVVYsUUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFYixpQkFBTVcsOERBQUcsQ0FBQyxDQUNSO0FBQ0FDLHlFQUFJLENBQUNmLFVBQUQsQ0FGSSxFQUVVO0FBQ2xCZSx5RUFBSSxDQUFDZCxXQUFELENBSEksRUFJUmMsK0RBQUksQ0FBQ2IsYUFBRCxDQUpJLENBQUQsQ0FBVDs7QUFGYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiIuL3NhZ2FzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWxsLCBmb3JrLCBjYWxsLCBwdXQsIHRha2UgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbi8vIOyEnOuyhOyXkCDsmpTssq3tlZjripQg7ZWo7IiY64qUIOydvOuwmCDtlajsiJghISFcbmZ1bmN0aW9uIGxvZ2luQVBJKCkge1xuICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9sb2dpbicpXG59XG5cbmZ1bmN0aW9uKiBsb2dJbigpIHtcbiAgdHJ5IHtcbiAgICAvLyBlZmZlY3TslZ7sl5DripQg7ZWt7IOBIHlpZWxk66W8IOu2meyduOuLpC5cbiAgICAvLyBwdXTsnYAgZGlzcGF0Y2guXG4gICAgeWllbGQgcHV0KFxuICAgICAgLy8gYWN0aW9uIOqwneyytFxuICAgICAge1xuICAgICAgICB0eXBlOiAnTE9HX0lOX1NVQ0NFU1MnLFxuICAgICAgICBkYXRhOiByZXN1bHQuZGF0YVxuICAgICAgfVxuICAgIClcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ2luQVBJKVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogJ0xPR19JTl9GQUlMVVJFJyxcbiAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhXG4gICAgfSlcbiAgfVxufVxuXG5mdW5jdGlvbiogd2F0Y2hMb2dpbigpIHtcbiAgLy8gJ0xPR0lOJ+ydtOudvOuKlCDslaHshZjsnbQg65Ok7Ja07Jik66m0IGxvZ0luIGdlbmVyYXRvciDtlajsiJjrpbwg7Iuk7ZaJ7ZWc64ukLlxuICAvLyBldmVudExpc3RuZXLsmYAg7Jyg7IKs7ZWcIOuKkOuCjFxuICB5aWVsZCB0YWtlKCdMT0dfSU5fUkVRVUVTVCcsIGxvZ0luKVxufVxuXG5mdW5jdGlvbiogd2F0Y2hMb2dPdXQoKSB7XG4gIHlpZWxkIHRha2UoJ0xPR19PVVRfUkVRVUVTVCcpXG59XG5cbmZ1bmN0aW9uKiB3YXRjaEFkZFBvc3RzKCkge1xuICB5aWVsZCB0YWtlKCdBRERfUE9TVCcpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpIHtcbiAgLy8gYWxs7J2EIDEpIOyVoOuTpOydhCDrj5nsi5zsl5Ag7Iuk7ZaJ7ZWgIOyImCDsnojqsowg7ZW07KSA64ukLlxuICB5aWVsZCBhbGwoW1xuICAgIC8vIDEpIGZvcmvrgpggY2FsbOuhnCBnZW5lcmF0b3LtlajsiJjrpbwg7Iuk7ZaJ7Iuc7Lyc7KSA64ukXG4gICAgZm9yayh3YXRjaExvZ2luKSwgLy8gZm9yayAhPT0gY2FsbCBcbiAgICBmb3JrKHdhdGNoTG9nT3V0KSxcbiAgICBmb3JrKHdhdGNoQWRkUG9zdHMpLFxuICBdKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./sagas/index.js\n");

/***/ })

})