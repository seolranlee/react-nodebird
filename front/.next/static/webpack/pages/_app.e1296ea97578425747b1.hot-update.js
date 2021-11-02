webpackHotUpdate_N_E("pages/_app",{

/***/ "./sagas/index.js":
/*!************************!*\
  !*** ./sagas/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return rootSaga; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ \"./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(logIn),\n    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(logOut),\n    _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLogin),\n    _marked4 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLogOut),\n    _marked5 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchAddPosts),\n    _marked6 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(rootSaga);\n\n\n // 서버에 요청하는 함수는 일반 함수!!!\n\nfunction loginAPI() {\n  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/login');\n}\n\nfunction logIn() {\n  var result;\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function logIn$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.prev = 0;\n          _context.next = 3;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])( // action 객체\n          {\n            type: 'LOG_IN_SUCCESS',\n            data: result.data\n          });\n\n        case 3:\n          _context.next = 5;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"call\"])(loginAPI);\n\n        case 5:\n          result = _context.sent;\n          _context.next = 12;\n          break;\n\n        case 8:\n          _context.prev = 8;\n          _context.t0 = _context[\"catch\"](0);\n          _context.next = 12;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            type: 'LOG_IN_FAILURE',\n            data: _context.t0.response.data\n          });\n\n        case 12:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _marked, null, [[0, 8]]);\n}\n\nfunction logOut() {\n  var result;\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function logOut$(_context2) {\n    while (1) {\n      switch (_context2.prev = _context2.next) {\n        case 0:\n          _context2.prev = 0;\n          _context2.next = 3;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])( // action 객체\n          {\n            type: 'LOG_OUT_SUCCESS',\n            data: result.data\n          });\n\n        case 3:\n          _context2.next = 5;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"call\"])(loginAPI);\n\n        case 5:\n          result = _context2.sent;\n          _context2.next = 12;\n          break;\n\n        case 8:\n          _context2.prev = 8;\n          _context2.t0 = _context2[\"catch\"](0);\n          _context2.next = 12;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            type: 'LOG_OUT_FAILURE',\n            data: _context2.t0.response.data\n          });\n\n        case 12:\n        case \"end\":\n          return _context2.stop();\n      }\n    }\n  }, _marked2, null, [[0, 8]]);\n}\n\nfunction watchLogin() {\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLogin$(_context3) {\n    while (1) {\n      switch (_context3.prev = _context3.next) {\n        case 0:\n          _context3.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"take\"])('LOG_IN_REQUEST', logIn);\n\n        case 2:\n        case \"end\":\n          return _context3.stop();\n      }\n    }\n  }, _marked3);\n}\n\nfunction watchLogOut() {\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLogOut$(_context4) {\n    while (1) {\n      switch (_context4.prev = _context4.next) {\n        case 0:\n          _context4.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"take\"])('LOG_OUT_REQUEST', logOut);\n\n        case 2:\n        case \"end\":\n          return _context4.stop();\n      }\n    }\n  }, _marked4);\n}\n\nfunction watchAddPosts() {\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchAddPosts$(_context5) {\n    while (1) {\n      switch (_context5.prev = _context5.next) {\n        case 0:\n          _context5.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"take\"])('ADD_POST_REQUEST');\n\n        case 2:\n        case \"end\":\n          return _context5.stop();\n      }\n    }\n  }, _marked5);\n}\n\nfunction rootSaga() {\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function rootSaga$(_context6) {\n    while (1) {\n      switch (_context6.prev = _context6.next) {\n        case 0:\n          _context6.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"all\"])([// 1) fork나 call로 generator함수를 실행시켜준다\n          Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"fork\"])(watchLogin), // fork !== call \n          Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"fork\"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"fork\"])(watchAddPosts)]);\n\n        case 2:\n        case \"end\":\n          return _context6.stop();\n      }\n    }\n  }, _marked6);\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvaW5kZXguanM/NzdlMyJdLCJuYW1lcyI6WyJsb2dJbiIsImxvZ091dCIsIndhdGNoTG9naW4iLCJ3YXRjaExvZ091dCIsIndhdGNoQWRkUG9zdHMiLCJyb290U2FnYSIsImxvZ2luQVBJIiwiYXhpb3MiLCJwb3N0IiwicHV0IiwidHlwZSIsImRhdGEiLCJyZXN1bHQiLCJjYWxsIiwicmVzcG9uc2UiLCJ0YWtlIiwiYWxsIiwiZm9yayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O2tHQVFVQSxLO21HQXVCQUMsTTttR0F1QkFDLFU7bUdBTUFDLFc7bUdBSUFDLGE7bUdBSWVDLFE7O0FBcEV6QjtDQUdBOztBQUNBLFNBQVNDLFFBQVQsR0FBb0I7QUFDbEIsU0FBT0MsNENBQUssQ0FBQ0MsSUFBTixDQUFXLFlBQVgsQ0FBUDtBQUNEOztBQUVELFNBQVVSLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlJLGlCQUFNUyw4REFBRyxFQUNQO0FBQ0E7QUFDRUMsZ0JBQUksRUFBRSxnQkFEUjtBQUVFQyxnQkFBSSxFQUFFQyxNQUFNLENBQUNEO0FBRmYsV0FGTyxDQUFUOztBQUpKO0FBQUE7QUFhbUIsaUJBQU1FLCtEQUFJLENBQUNQLFFBQUQsQ0FBVjs7QUFibkI7QUFhVU0sZ0JBYlY7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZ0JJLGlCQUFNSCw4REFBRyxDQUFDO0FBQ1JDLGdCQUFJLEVBQUUsZ0JBREU7QUFFUkMsZ0JBQUksRUFBRSxZQUFJRyxRQUFKLENBQWFIO0FBRlgsV0FBRCxDQUFUOztBQWhCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUF1QkEsU0FBVVYsTUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUksaUJBQU1RLDhEQUFHLEVBQ1A7QUFDQTtBQUNFQyxnQkFBSSxFQUFFLGlCQURSO0FBRUVDLGdCQUFJLEVBQUVDLE1BQU0sQ0FBQ0Q7QUFGZixXQUZPLENBQVQ7O0FBSko7QUFBQTtBQWFtQixpQkFBTUUsK0RBQUksQ0FBQ1AsUUFBRCxDQUFWOztBQWJuQjtBQWFVTSxnQkFiVjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFnQkksaUJBQU1ILDhEQUFHLENBQUM7QUFDUkMsZ0JBQUksRUFBRSxpQkFERTtBQUVSQyxnQkFBSSxFQUFFLGFBQUlHLFFBQUosQ0FBYUg7QUFGWCxXQUFELENBQVQ7O0FBaEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQXVCQSxTQUFVVCxVQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdFLGlCQUFNYSwrREFBSSxDQUFDLGdCQUFELEVBQW1CZixLQUFuQixDQUFWOztBQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQU1BLFNBQVVHLFdBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0UsaUJBQU1ZLCtEQUFJLENBQUMsaUJBQUQsRUFBb0JkLE1BQXBCLENBQVY7O0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBSUEsU0FBVUcsYUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRSxpQkFBTVcsK0RBQUksQ0FBQyxrQkFBRCxDQUFWOztBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUllLFNBQVVWLFFBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRWIsaUJBQU1XLDhEQUFHLENBQUMsQ0FDUjtBQUNBQyx5RUFBSSxDQUFDZixVQUFELENBRkksRUFFVTtBQUNsQmUseUVBQUksQ0FBQ2QsV0FBRCxDQUhJLEVBSVJjLCtEQUFJLENBQUNiLGFBQUQsQ0FKSSxDQUFELENBQVQ7O0FBRmE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiLi9zYWdhcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFsbCwgZm9yaywgY2FsbCwgcHV0LCB0YWtlIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG4vLyDshJzrsoTsl5Ag7JqU7LKt7ZWY64qUIO2VqOyImOuKlCDsnbzrsJgg7ZWo7IiYISEhXG5mdW5jdGlvbiBsb2dpbkFQSSgpIHtcbiAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvbG9naW4nKVxufVxuXG5mdW5jdGlvbiogbG9nSW4oKSB7XG4gIHRyeSB7XG4gICAgLy8gZWZmZWN07JWe7JeQ64qUIO2VreyDgSB5aWVsZOulvCDrtpnsnbjri6QuXG4gICAgLy8gcHV07J2AIGRpc3BhdGNoLlxuICAgIHlpZWxkIHB1dChcbiAgICAgIC8vIGFjdGlvbiDqsJ3ssrRcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ0xPR19JTl9TVUNDRVNTJyxcbiAgICAgICAgZGF0YTogcmVzdWx0LmRhdGFcbiAgICAgIH1cbiAgICApXG4gICAgLy8gY2FsbDog64+Z6riwIO2VqOyImCDtmLjstpw6IOqysOqzvOqwkuydhCDquLDri6Trpqzqs6Ag64uk7J2MIOykhOuhnCDrhJjslrTqsITri6QuIGF3YWl07J20656RIOu5hOyKt+2VmOuLpOqzoCDsg53qsIFcbiAgICAvLyBmb3JrOiDruYTrj5nquLAg7ZWo7IiYIO2YuOy2nChub24tYmxvY2tpbmcpOiDqsrDqs7zqsJLsnYQg6riw64uk66as7KeAIOyViuqzoCDri6TsnYwg7KSE66GcIOuEmOyWtOqwhOuLpC5cbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ2luQVBJKSAvLyBjYWxs7J2EIOyNqOyVvCDtlZzri6QhIVxuICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGZvcmsobG9naW5BUEkpXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiAnTE9HX0lOX0ZBSUxVUkUnLFxuICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGFcbiAgICB9KVxuICB9XG59XG5cbmZ1bmN0aW9uKiBsb2dPdXQoKSB7XG4gIHRyeSB7XG4gICAgLy8gZWZmZWN07JWe7JeQ64qUIO2VreyDgSB5aWVsZOulvCDrtpnsnbjri6QuXG4gICAgLy8gcHV07J2AIGRpc3BhdGNoLlxuICAgIHlpZWxkIHB1dChcbiAgICAgIC8vIGFjdGlvbiDqsJ3ssrRcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ0xPR19PVVRfU1VDQ0VTUycsXG4gICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhXG4gICAgICB9XG4gICAgKVxuICAgIC8vIGNhbGw6IOuPmeq4sCDtlajsiJgg7Zi47LacOiDqsrDqs7zqsJLsnYQg6riw64uk66as6rOgIOuLpOydjCDspITroZwg64SY7Ja06rCE64ukLiBhd2FpdOydtOuekSDruYTsirftlZjri6Tqs6Ag7IOd6rCBXG4gICAgLy8gZm9yazog67mE64+Z6riwIO2VqOyImCDtmLjstpwobm9uLWJsb2NraW5nKTog6rKw6rO86rCS7J2EIOq4sOuLpOumrOyngCDslYrqs6Ag64uk7J2MIOykhOuhnCDrhJjslrTqsITri6QuXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dpbkFQSSkgLy8gY2FsbOydhCDsjajslbwg7ZWc64ukISFcbiAgICAvLyBjb25zdCByZXN1bHQgPSB5aWVsZCBmb3JrKGxvZ2luQVBJKVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogJ0xPR19PVVRfRkFJTFVSRScsXG4gICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YVxuICAgIH0pXG4gIH1cbn1cblxuZnVuY3Rpb24qIHdhdGNoTG9naW4oKSB7XG4gIC8vICdMT0dJTifsnbTrnbzripQg7JWh7IWY7J20IOuTpOyWtOyYpOuptCBsb2dJbiBnZW5lcmF0b3Ig7ZWo7IiY66W8IOyLpO2Wie2VnOuLpC5cbiAgLy8gZXZlbnRMaXN0bmVy7JmAIOycoOyCrO2VnCDripDrgoxcbiAgeWllbGQgdGFrZSgnTE9HX0lOX1JFUVVFU1QnLCBsb2dJbilcbn1cblxuZnVuY3Rpb24qIHdhdGNoTG9nT3V0KCkge1xuICB5aWVsZCB0YWtlKCdMT0dfT1VUX1JFUVVFU1QnLCBsb2dPdXQpXG59XG5cbmZ1bmN0aW9uKiB3YXRjaEFkZFBvc3RzKCkge1xuICB5aWVsZCB0YWtlKCdBRERfUE9TVF9SRVFVRVNUJylcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xuICAvLyBhbGzsnYQgMSkg7JWg65Ok7J2EIOuPmeyLnOyXkCDsi6TtlontlaAg7IiYIOyeiOqyjCDtlbTspIDri6QuXG4gIHlpZWxkIGFsbChbXG4gICAgLy8gMSkgZm9ya+uCmCBjYWxs66GcIGdlbmVyYXRvcu2VqOyImOulvCDsi6Ttlonsi5zsvJzspIDri6RcbiAgICBmb3JrKHdhdGNoTG9naW4pLCAvLyBmb3JrICE9PSBjYWxsIFxuICAgIGZvcmsod2F0Y2hMb2dPdXQpLFxuICAgIGZvcmsod2F0Y2hBZGRQb3N0cyksXG4gIF0pXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./sagas/index.js\n");

/***/ })

})