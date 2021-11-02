webpackHotUpdate_N_E("pages/_app",{

/***/ "./sagas/index.js":
/*!************************!*\
  !*** ./sagas/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return rootSaga; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ \"./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(logIn),\n    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(logOut),\n    _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLogin),\n    _marked4 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLogOut),\n    _marked5 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchAddPosts),\n    _marked6 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(rootSaga);\n\n\n // 서버에 요청하는 함수는 일반 함수!!!\n\nfunction loginAPI() {\n  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/login');\n}\n\nfunction logIn() {\n  var result;\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function logIn$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.prev = 0;\n          _context.next = 3;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"call\"])(loginAPI);\n\n        case 3:\n          result = _context.sent;\n          _context.next = 6;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])( // action 객체\n          {\n            type: 'LOG_IN_SUCCESS',\n            data: result.data\n          });\n\n        case 6:\n          _context.next = 12;\n          break;\n\n        case 8:\n          _context.prev = 8;\n          _context.t0 = _context[\"catch\"](0);\n          _context.next = 12;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            type: 'LOG_IN_FAILURE',\n            data: _context.t0.response.data\n          });\n\n        case 12:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _marked, null, [[0, 8]]);\n}\n\nfunction logoutAPI() {\n  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/logout');\n}\n\nfunction logOut() {\n  var result;\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function logOut$(_context2) {\n    while (1) {\n      switch (_context2.prev = _context2.next) {\n        case 0:\n          _context2.prev = 0;\n          _context2.next = 3;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"call\"])(logoutAPI);\n\n        case 3:\n          result = _context2.sent;\n          _context2.next = 6;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            type: 'LOG_OUT_SUCCESS',\n            data: result.data\n          });\n\n        case 6:\n          _context2.next = 12;\n          break;\n\n        case 8:\n          _context2.prev = 8;\n          _context2.t0 = _context2[\"catch\"](0);\n          _context2.next = 12;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            type: 'LOG_OUT_FAILURE',\n            data: _context2.t0.response.data\n          });\n\n        case 12:\n        case \"end\":\n          return _context2.stop();\n      }\n    }\n  }, _marked2, null, [[0, 8]]);\n}\n\nfunction watchLogin() {\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLogin$(_context3) {\n    while (1) {\n      switch (_context3.prev = _context3.next) {\n        case 0:\n          _context3.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"take\"])('LOG_IN_REQUEST', logIn);\n\n        case 2:\n        case \"end\":\n          return _context3.stop();\n      }\n    }\n  }, _marked3);\n}\n\nfunction watchLogOut() {\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLogOut$(_context4) {\n    while (1) {\n      switch (_context4.prev = _context4.next) {\n        case 0:\n          _context4.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"take\"])('LOG_OUT_REQUEST', logOut);\n\n        case 2:\n        case \"end\":\n          return _context4.stop();\n      }\n    }\n  }, _marked4);\n}\n\nfunction watchAddPosts() {\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchAddPosts$(_context5) {\n    while (1) {\n      switch (_context5.prev = _context5.next) {\n        case 0:\n          _context5.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"take\"])('ADD_POST_REQUEST');\n\n        case 2:\n        case \"end\":\n          return _context5.stop();\n      }\n    }\n  }, _marked5);\n}\n\nfunction rootSaga() {\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function rootSaga$(_context6) {\n    while (1) {\n      switch (_context6.prev = _context6.next) {\n        case 0:\n          _context6.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"all\"])([// 1) fork나 call로 generator함수를 실행시켜준다\n          Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"fork\"])(watchLogin), // fork !== call \n          Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"fork\"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"fork\"])(watchAddPosts)]);\n\n        case 2:\n        case \"end\":\n          return _context6.stop();\n      }\n    }\n  }, _marked6);\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvaW5kZXguanM/NzdlMyJdLCJuYW1lcyI6WyJsb2dJbiIsImxvZ091dCIsIndhdGNoTG9naW4iLCJ3YXRjaExvZ091dCIsIndhdGNoQWRkUG9zdHMiLCJyb290U2FnYSIsImxvZ2luQVBJIiwiYXhpb3MiLCJwb3N0IiwiY2FsbCIsInJlc3VsdCIsInB1dCIsInR5cGUiLCJkYXRhIiwicmVzcG9uc2UiLCJsb2dvdXRBUEkiLCJ0YWtlIiwiYWxsIiwiZm9yayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O2tHQVFVQSxLO21HQTJCQUMsTTttR0FpQkFDLFU7bUdBTUFDLFc7bUdBSUFDLGE7bUdBSWVDLFE7O0FBbEV6QjtDQUdBOztBQUNBLFNBQVNDLFFBQVQsR0FBb0I7QUFDbEIsU0FBT0MsNENBQUssQ0FBQ0MsSUFBTixDQUFXLFlBQVgsQ0FBUDtBQUNEOztBQUVELFNBQVVSLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUltQixpQkFBTVMsK0RBQUksQ0FBQ0gsUUFBRCxDQUFWOztBQUpuQjtBQUlVSSxnQkFKVjtBQUFBO0FBT0ksaUJBQU1DLDhEQUFHLEVBQ1A7QUFDQTtBQUNFQyxnQkFBSSxFQUFFLGdCQURSO0FBRUVDLGdCQUFJLEVBQUVILE1BQU0sQ0FBQ0c7QUFGZixXQUZPLENBQVQ7O0FBUEo7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZ0JJLGlCQUFNRiw4REFBRyxDQUFDO0FBQ1JDLGdCQUFJLEVBQUUsZ0JBREU7QUFFUkMsZ0JBQUksRUFBRSxZQUFJQyxRQUFKLENBQWFEO0FBRlgsV0FBRCxDQUFUOztBQWhCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUF1QkEsU0FBU0UsU0FBVCxHQUFxQjtBQUNuQixTQUFPUiw0Q0FBSyxDQUFDQyxJQUFOLENBQVcsYUFBWCxDQUFQO0FBQ0Q7O0FBRUQsU0FBVVAsTUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRW1CLGlCQUFNUSwrREFBSSxDQUFDTSxTQUFELENBQVY7O0FBRm5CO0FBRVVMLGdCQUZWO0FBQUE7QUFHSSxpQkFBTUMsOERBQUcsQ0FBQztBQUNOQyxnQkFBSSxFQUFFLGlCQURBO0FBRU5DLGdCQUFJLEVBQUVILE1BQU0sQ0FBQ0c7QUFGUCxXQUFELENBQVQ7O0FBSEo7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVUksaUJBQU1GLDhEQUFHLENBQUM7QUFDUkMsZ0JBQUksRUFBRSxpQkFERTtBQUVSQyxnQkFBSSxFQUFFLGFBQUlDLFFBQUosQ0FBYUQ7QUFGWCxXQUFELENBQVQ7O0FBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBaUJBLFNBQVVYLFVBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0UsaUJBQU1jLCtEQUFJLENBQUMsZ0JBQUQsRUFBbUJoQixLQUFuQixDQUFWOztBQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQU1BLFNBQVVHLFdBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0UsaUJBQU1hLCtEQUFJLENBQUMsaUJBQUQsRUFBb0JmLE1BQXBCLENBQVY7O0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBSUEsU0FBVUcsYUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRSxpQkFBTVksK0RBQUksQ0FBQyxrQkFBRCxDQUFWOztBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUllLFNBQVVYLFFBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRWIsaUJBQU1ZLDhEQUFHLENBQUMsQ0FDUjtBQUNBQyx5RUFBSSxDQUFDaEIsVUFBRCxDQUZJLEVBRVU7QUFDbEJnQix5RUFBSSxDQUFDZixXQUFELENBSEksRUFJUmUsK0RBQUksQ0FBQ2QsYUFBRCxDQUpJLENBQUQsQ0FBVDs7QUFGYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiIuL3NhZ2FzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWxsLCBmb3JrLCBjYWxsLCBwdXQsIHRha2UgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbi8vIOyEnOuyhOyXkCDsmpTssq3tlZjripQg7ZWo7IiY64qUIOydvOuwmCDtlajsiJghISFcbmZ1bmN0aW9uIGxvZ2luQVBJKCkge1xuICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9sb2dpbicpXG59XG5cbmZ1bmN0aW9uKiBsb2dJbigpIHtcbiAgdHJ5IHtcbiAgICAvLyBjYWxsOiDrj5nquLAg7ZWo7IiYIO2YuOy2nDog6rKw6rO86rCS7J2EIOq4sOuLpOumrOqzoCDri6TsnYwg7KSE66GcIOuEmOyWtOqwhOuLpC4gYXdhaXTsnbTrnpEg67mE7Iq37ZWY64uk6rOgIOyDneqwgVxuICAgIC8vIGZvcms6IOu5hOuPmeq4sCDtlajsiJgg7Zi47LacKG5vbi1ibG9ja2luZyk6IOqysOqzvOqwkuydhCDquLDri6Trpqzsp4Ag7JWK6rOgIOuLpOydjCDspITroZwg64SY7Ja06rCE64ukLlxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9naW5BUEkpIC8vIGNhbGzsnYQg7I2o7JW8IO2VnOuLpCEhXG4gICAgLy8gZWZmZWN07JWe7JeQ64qUIO2VreyDgSB5aWVsZOulvCDrtpnsnbjri6QuXG4gICAgLy8gcHV07J2AIGRpc3BhdGNoLlxuICAgIHlpZWxkIHB1dChcbiAgICAgIC8vIGFjdGlvbiDqsJ3ssrRcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ0xPR19JTl9TVUNDRVNTJyxcbiAgICAgICAgZGF0YTogcmVzdWx0LmRhdGFcbiAgICAgIH1cbiAgICApXG4gICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgZm9yayhsb2dpbkFQSSlcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6ICdMT0dfSU5fRkFJTFVSRScsXG4gICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YVxuICAgIH0pXG4gIH1cbn1cblxuZnVuY3Rpb24gbG9nb3V0QVBJKCkge1xuICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9sb2dvdXQnKVxufVxuXG5mdW5jdGlvbiogbG9nT3V0KCkge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nb3V0QVBJKVxuICAgIHlpZWxkIHB1dCh7XG4gICAgICAgIHR5cGU6ICdMT0dfT1VUX1NVQ0NFU1MnLFxuICAgICAgICBkYXRhOiByZXN1bHQuZGF0YVxuICAgICAgfSlcbiAgXG4gICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgZm9yayhsb2dpbkFQSSlcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6ICdMT0dfT1VUX0ZBSUxVUkUnLFxuICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGFcbiAgICB9KVxuICB9XG59XG5cbmZ1bmN0aW9uKiB3YXRjaExvZ2luKCkge1xuICAvLyAnTE9HSU4n7J20652864qUIOyVoeyFmOydtCDrk6TslrTsmKTrqbQgbG9nSW4gZ2VuZXJhdG9yIO2VqOyImOulvCDsi6TtlontlZzri6QuXG4gIC8vIGV2ZW50TGlzdG5lcuyZgCDsnKDsgqztlZwg64qQ64KMXG4gIHlpZWxkIHRha2UoJ0xPR19JTl9SRVFVRVNUJywgbG9nSW4pXG59XG5cbmZ1bmN0aW9uKiB3YXRjaExvZ091dCgpIHtcbiAgeWllbGQgdGFrZSgnTE9HX09VVF9SRVFVRVNUJywgbG9nT3V0KVxufVxuXG5mdW5jdGlvbiogd2F0Y2hBZGRQb3N0cygpIHtcbiAgeWllbGQgdGFrZSgnQUREX1BPU1RfUkVRVUVTVCcpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpIHtcbiAgLy8gYWxs7J2EIDEpIOyVoOuTpOydhCDrj5nsi5zsl5Ag7Iuk7ZaJ7ZWgIOyImCDsnojqsowg7ZW07KSA64ukLlxuICB5aWVsZCBhbGwoW1xuICAgIC8vIDEpIGZvcmvrgpggY2FsbOuhnCBnZW5lcmF0b3LtlajsiJjrpbwg7Iuk7ZaJ7Iuc7Lyc7KSA64ukXG4gICAgZm9yayh3YXRjaExvZ2luKSwgLy8gZm9yayAhPT0gY2FsbCBcbiAgICBmb3JrKHdhdGNoTG9nT3V0KSxcbiAgICBmb3JrKHdhdGNoQWRkUG9zdHMpLFxuICBdKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./sagas/index.js\n");

/***/ })

})