webpackHotUpdate_N_E("pages/index",{

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, loginRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loginRequestAction\", function() { return loginRequestAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"logoutRequestAction\", function() { return logoutRequestAction; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nvar initialState = {\n  isLoggingIn: false,\n  // 로그인 시도중  // 로딩창 UI구현을 위함\n  isLoggedIn: false,\n  isLoggingOut: false,\n  // 로그아웃 시도중  // 로딩창 UI구현을 위함\n  me: null,\n  signUpData: {},\n  loginData: {}\n};\nvar LOG_IN_REQUEST = 'LOG_IN_REQUEST';\nvar LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';\nvar LOG_IN_FAILURE = 'LOG_IN_FAILURE'; // 그때 그때 액션을 만드는 action creater\n\nvar loginRequestAction = function loginRequestAction(data) {\n  return {\n    type: 'LOG_IN_REQUEST',\n    data: data\n  };\n};\nvar logoutRequestAction = function logoutRequestAction() {\n  return {\n    type: 'LOG_OUT_REQUEST'\n  };\n};\n\nvar reducer = function reducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case 'LOG_IN_REQUEST':\n      console.log('reducer login');\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoggingIn: true\n      });\n\n    case 'LOG_IN_SUCCESS':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoggingIn: false,\n        isLoggedIn: true,\n        me: _objectSpread(_objectSpread({}, action.data), {}, {\n          nickname: 'seolranlee'\n        })\n      });\n\n    case 'LOG_IN_FAILURE':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoggingIn: false,\n        isLoggedIn: false\n      });\n\n    case 'LOG_OUT_REQUEST':\n      console.log('reducer loginOut');\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoggingOut: true\n      });\n\n    case 'LOG_OUT_SUCCESS':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoggingOut: false,\n        isLoggedIn: false,\n        me: null\n      });\n\n    case 'LOG_OUT_FAILURE':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoggingOut: false,\n        isLoggedIn: false\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcz8yYzA1Il0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsImlzTG9nZ2luZ0luIiwiaXNMb2dnZWRJbiIsImlzTG9nZ2luZ091dCIsIm1lIiwic2lnblVwRGF0YSIsImxvZ2luRGF0YSIsIkxPR19JTl9SRVFVRVNUIiwiTE9HX0lOX1NVQ0NFU1MiLCJMT0dfSU5fRkFJTFVSRSIsImxvZ2luUmVxdWVzdEFjdGlvbiIsImRhdGEiLCJ0eXBlIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJuaWNrbmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxZQUFZLEdBQUc7QUFDMUJDLGFBQVcsRUFBRSxLQURhO0FBQ047QUFDcEJDLFlBQVUsRUFBRSxLQUZjO0FBRzFCQyxjQUFZLEVBQUUsS0FIWTtBQUdKO0FBQ3RCQyxJQUFFLEVBQUUsSUFKc0I7QUFLMUJDLFlBQVUsRUFBRSxFQUxjO0FBTTFCQyxXQUFTLEVBQUU7QUFOZSxDQUFyQjtBQVNQLElBQU1DLGNBQWMsR0FBRyxnQkFBdkI7QUFDQSxJQUFNQyxjQUFjLEdBQUcsZ0JBQXZCO0FBQ0EsSUFBTUMsY0FBYyxHQUFHLGdCQUF2QixDLENBRUE7O0FBQ08sSUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxJQUFELEVBQVU7QUFDMUMsU0FBTztBQUNMQyxRQUFJLEVBQUUsZ0JBREQ7QUFFTEQsUUFBSSxFQUFKQTtBQUZLLEdBQVA7QUFJRCxDQUxNO0FBT0EsSUFBTUUsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixHQUFNO0FBQ3ZDLFNBQU87QUFDTEQsUUFBSSxFQUFFO0FBREQsR0FBUDtBQUdELENBSk07O0FBTVAsSUFBTUUsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBa0M7QUFBQSxNQUFqQ0MsS0FBaUMsdUVBQXpCZixZQUF5QjtBQUFBLE1BQVhnQixNQUFXOztBQUNoRCxVQUFRQSxNQUFNLENBQUNKLElBQWY7QUFDRSxTQUFLLGdCQUFMO0FBQ0VLLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVo7QUFDQSw2Q0FDS0gsS0FETDtBQUVFZCxtQkFBVyxFQUFFO0FBRmY7O0FBSUYsU0FBSyxnQkFBTDtBQUNFLDZDQUNLYyxLQURMO0FBRUVkLG1CQUFXLEVBQUUsS0FGZjtBQUdFQyxrQkFBVSxFQUFFLElBSGQ7QUFJRUUsVUFBRSxrQ0FBT1ksTUFBTSxDQUFDTCxJQUFkO0FBQW9CUSxrQkFBUSxFQUFFO0FBQTlCO0FBSko7O0FBTUYsU0FBSyxnQkFBTDtBQUNFLDZDQUNLSixLQURMO0FBRUVkLG1CQUFXLEVBQUUsS0FGZjtBQUdFQyxrQkFBVSxFQUFFO0FBSGQ7O0FBS0YsU0FBSyxpQkFBTDtBQUNFZSxhQUFPLENBQUNDLEdBQVIsQ0FBWSxrQkFBWjtBQUNBLDZDQUNLSCxLQURMO0FBRUVaLG9CQUFZLEVBQUU7QUFGaEI7O0FBSUYsU0FBSyxpQkFBTDtBQUNFLDZDQUNLWSxLQURMO0FBRUVaLG9CQUFZLEVBQUUsS0FGaEI7QUFHRUQsa0JBQVUsRUFBRSxLQUhkO0FBSUVFLFVBQUUsRUFBRTtBQUpOOztBQU1GLFNBQUssaUJBQUw7QUFDRSw2Q0FDS1csS0FETDtBQUVFWixvQkFBWSxFQUFFLEtBRmhCO0FBR0VELGtCQUFVLEVBQUU7QUFIZDs7QUFLRjtBQUNFLGFBQU9hLEtBQVA7QUF4Q0o7QUEwQ0QsQ0EzQ0Q7O0FBNkNlRCxzRUFBZiIsImZpbGUiOiIuL3JlZHVjZXJzL3VzZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBpc0xvZ2dpbmdJbjogZmFsc2UsIC8vIOuhnOq3uOyduCDsi5zrj4TspJEgIC8vIOuhnOuUqeywvSBVSeq1rO2YhOydhCDsnITtlahcbiAgaXNMb2dnZWRJbjogZmFsc2UsXG4gIGlzTG9nZ2luZ091dDogZmFsc2UsICAvLyDroZzqt7jslYTsm4Mg7Iuc64+E7KSRICAvLyDroZzrlKnssL0gVUnqtaztmITsnYQg7JyE7ZWoXG4gIG1lOiBudWxsLFxuICBzaWduVXBEYXRhOiB7fSxcbiAgbG9naW5EYXRhOiB7fVxufVxuXG5jb25zdCBMT0dfSU5fUkVRVUVTVCA9ICdMT0dfSU5fUkVRVUVTVCdcbmNvbnN0IExPR19JTl9TVUNDRVNTID0gJ0xPR19JTl9TVUNDRVNTJ1xuY29uc3QgTE9HX0lOX0ZBSUxVUkUgPSAnTE9HX0lOX0ZBSUxVUkUnXG4gXG4vLyDqt7jrlYwg6re465WMIOyVoeyFmOydhCDrp4zrk5zripQgYWN0aW9uIGNyZWF0ZXJcbmV4cG9ydCBjb25zdCBsb2dpblJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdMT0dfSU5fUkVRVUVTVCcsXG4gICAgZGF0YVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBsb2dvdXRSZXF1ZXN0QWN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdMT0dfT1VUX1JFUVVFU1QnXG4gIH1cbn1cblxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdMT0dfSU5fUkVRVUVTVCc6XG4gICAgICBjb25zb2xlLmxvZygncmVkdWNlciBsb2dpbicpXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNMb2dnaW5nSW46IHRydWUsXG4gICAgICB9XG4gICAgY2FzZSAnTE9HX0lOX1NVQ0NFU1MnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzTG9nZ2luZ0luOiBmYWxzZSxcbiAgICAgICAgaXNMb2dnZWRJbjogdHJ1ZSxcbiAgICAgICAgbWU6IHsgLi4uYWN0aW9uLmRhdGEsIG5pY2tuYW1lOiAnc2VvbHJhbmxlZScgfVxuICAgICAgfVxuICAgIGNhc2UgJ0xPR19JTl9GQUlMVVJFJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc0xvZ2dpbmdJbjogZmFsc2UsXG4gICAgICAgIGlzTG9nZ2VkSW46IGZhbHNlXG4gICAgICB9XG4gICAgY2FzZSAnTE9HX09VVF9SRVFVRVNUJzpcbiAgICAgIGNvbnNvbGUubG9nKCdyZWR1Y2VyIGxvZ2luT3V0JylcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc0xvZ2dpbmdPdXQ6IHRydWUsXG4gICAgICB9XG4gICAgY2FzZSAnTE9HX09VVF9TVUNDRVNTJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc0xvZ2dpbmdPdXQ6IGZhbHNlLFxuICAgICAgICBpc0xvZ2dlZEluOiBmYWxzZSxcbiAgICAgICAgbWU6IG51bGxcbiAgICAgIH1cbiAgICBjYXNlICdMT0dfT1VUX0ZBSUxVUkUnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzTG9nZ2luZ091dDogZmFsc2UsXG4gICAgICAgIGlzTG9nZ2VkSW46IGZhbHNlLFxuICAgICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./reducers/user.js\n");

/***/ })

})