webpackHotUpdate_N_E("pages/index",{

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, loginRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_IN_REQUEST\", function() { return LOG_IN_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_IN_SUCCESS\", function() { return LOG_IN_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_IN_FAILURE\", function() { return LOG_IN_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_OUT_REQUEST\", function() { return LOG_OUT_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_OUT_SUCCESS\", function() { return LOG_OUT_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_OUT_FAILURE\", function() { return LOG_OUT_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FOLLOW_REQUEST\", function() { return FOLLOW_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FOLLOW_SUCCESS\", function() { return FOLLOW_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FOLLOW_FAILURE\", function() { return FOLLOW_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UNFOLLOW_REQUEST\", function() { return UNFOLLOW_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UNFOLLOW_SUCCESS\", function() { return UNFOLLOW_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UNFOLLOW_FAILURE\", function() { return UNFOLLOW_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loginRequestAction\", function() { return loginRequestAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"logoutRequestAction\", function() { return logoutRequestAction; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nvar initialState = {\n  logInLoading: false,\n  // 로그인 시도중  // 로딩창 UI구현을 위함\n  logInDone: false,\n  logInError: false,\n  logOutLoading: false,\n  // 로그아웃 시도중  // 로딩창 UI구현을 위함\n  logOutDone: false,\n  logOutError: false,\n  me: null,\n  signUpData: {},\n  loginData: {}\n}; // 변수는 에디터가 관리해주기 때문에 오타가 날 확률이 줄어든다.\n\nvar LOG_IN_REQUEST = 'LOG_IN_REQUEST';\nvar LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';\nvar LOG_IN_FAILURE = 'LOG_IN_FAILURE';\nvar LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';\nvar LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';\nvar LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';\nvar FOLLOW_REQUEST = 'FOLLOW_REQUEST';\nvar FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';\nvar FOLLOW_FAILURE = 'FOLLOW_FAILURE';\nvar UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';\nvar UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';\nvar UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';\n\nvar dummyUser = function dummyUser(data) {\n  return _objectSpread(_objectSpread({}, data), {}, {\n    nickname: 'seolranlee',\n    id: 1,\n    Posts: [],\n    Followings: [],\n    Followers: []\n  });\n}; // 그때 그때 액션을 만드는 action creater\n\n\nvar loginRequestAction = function loginRequestAction(data) {\n  return {\n    type: LOG_IN_REQUEST,\n    data: data\n  };\n};\nvar logoutRequestAction = function logoutRequestAction() {\n  return {\n    type: 'LOG_OUT_REQUEST'\n  };\n};\n\nvar reducer = function reducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case LOG_IN_REQUEST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        logInLoading: true,\n        logInError: null,\n        logInDone: false\n      });\n\n    case LOG_IN_SUCCESS:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        logInLoading: false,\n        logInDone: true,\n        me: dummyUser(action.data)\n      });\n\n    case LOG_IN_FAILURE:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        logInLoading: false,\n        logInError: action.error\n      });\n\n    case LOG_OUT_REQUEST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        logOutLoading: true,\n        logInError: true\n      });\n\n    case LOG_OUT_SUCCESS:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        logInError: false,\n        logInDone: false,\n        me: null\n      });\n\n    case LOG_OUT_FAILURE:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        logInError: false,\n        logInDone: false\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcz8yYzA1Il0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsImxvZ0luTG9hZGluZyIsImxvZ0luRG9uZSIsImxvZ0luRXJyb3IiLCJsb2dPdXRMb2FkaW5nIiwibG9nT3V0RG9uZSIsImxvZ091dEVycm9yIiwibWUiLCJzaWduVXBEYXRhIiwibG9naW5EYXRhIiwiTE9HX0lOX1JFUVVFU1QiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwiTE9HX09VVF9SRVFVRVNUIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwiRk9MTE9XX1JFUVVFU1QiLCJGT0xMT1dfU1VDQ0VTUyIsIkZPTExPV19GQUlMVVJFIiwiVU5GT0xMT1dfUkVRVUVTVCIsIlVORk9MTE9XX1NVQ0NFU1MiLCJVTkZPTExPV19GQUlMVVJFIiwiZHVtbXlVc2VyIiwiZGF0YSIsIm5pY2tuYW1lIiwiaWQiLCJQb3N0cyIsIkZvbGxvd2luZ3MiLCJGb2xsb3dlcnMiLCJsb2dpblJlcXVlc3RBY3Rpb24iLCJ0eXBlIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsImVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLFlBQVksR0FBRztBQUMxQkMsY0FBWSxFQUFFLEtBRFk7QUFDTDtBQUNyQkMsV0FBUyxFQUFFLEtBRmU7QUFHMUJDLFlBQVUsRUFBRSxLQUhjO0FBSzFCQyxlQUFhLEVBQUUsS0FMVztBQUtKO0FBQ3RCQyxZQUFVLEVBQUUsS0FOYztBQU8xQkMsYUFBVyxFQUFFLEtBUGE7QUFRMUJDLElBQUUsRUFBRSxJQVJzQjtBQVMxQkMsWUFBVSxFQUFFLEVBVGM7QUFVMUJDLFdBQVMsRUFBRTtBQVZlLENBQXJCLEMsQ0FhUDs7QUFDTyxJQUFNQyxjQUFjLEdBQUcsZ0JBQXZCO0FBQ0EsSUFBTUMsY0FBYyxHQUFHLGdCQUF2QjtBQUNBLElBQU1DLGNBQWMsR0FBRyxnQkFBdkI7QUFFQSxJQUFNQyxlQUFlLEdBQUcsaUJBQXhCO0FBQ0EsSUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUNBLElBQU1DLGVBQWUsR0FBRyxpQkFBeEI7QUFFQSxJQUFNQyxjQUFjLEdBQUcsZ0JBQXZCO0FBQ0EsSUFBTUMsY0FBYyxHQUFHLGdCQUF2QjtBQUNBLElBQU1DLGNBQWMsR0FBRyxnQkFBdkI7QUFFQSxJQUFNQyxnQkFBZ0IsR0FBRyxrQkFBekI7QUFDQSxJQUFNQyxnQkFBZ0IsR0FBRyxrQkFBekI7QUFDQSxJQUFNQyxnQkFBZ0IsR0FBRyxrQkFBekI7O0FBRU4sSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsSUFBRDtBQUFBLHlDQUNiQSxJQURhO0FBRWhCQyxZQUFRLEVBQUUsWUFGTTtBQUdoQkMsTUFBRSxFQUFFLENBSFk7QUFJaEJDLFNBQUssRUFBRSxFQUpTO0FBS2hCQyxjQUFVLEVBQUUsRUFMSTtBQU1oQkMsYUFBUyxFQUFFO0FBTks7QUFBQSxDQUFsQixDLENBUUQ7OztBQUNPLElBQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ04sSUFBRCxFQUFVO0FBQzFDLFNBQU87QUFDTE8sUUFBSSxFQUFFcEIsY0FERDtBQUVMYSxRQUFJLEVBQUpBO0FBRkssR0FBUDtBQUlELENBTE07QUFPQSxJQUFNUSxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLEdBQU07QUFDdkMsU0FBTztBQUNMRCxRQUFJLEVBQUU7QUFERCxHQUFQO0FBR0QsQ0FKTTs7QUFNUCxJQUFNRSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFrQztBQUFBLE1BQWpDQyxLQUFpQyx1RUFBekJqQyxZQUF5QjtBQUFBLE1BQVhrQyxNQUFXOztBQUNoRCxVQUFRQSxNQUFNLENBQUNKLElBQWY7QUFDRSxTQUFLcEIsY0FBTDtBQUNFLDZDQUNLdUIsS0FETDtBQUVFaEMsb0JBQVksRUFBRSxJQUZoQjtBQUdFRSxrQkFBVSxFQUFFLElBSGQ7QUFJRUQsaUJBQVMsRUFBRTtBQUpiOztBQU1GLFNBQUtTLGNBQUw7QUFDRSw2Q0FDS3NCLEtBREw7QUFFRWhDLG9CQUFZLEVBQUUsS0FGaEI7QUFHRUMsaUJBQVMsRUFBRSxJQUhiO0FBSUVLLFVBQUUsRUFBRWUsU0FBUyxDQUFDWSxNQUFNLENBQUNYLElBQVI7QUFKZjs7QUFNRixTQUFLWCxjQUFMO0FBQ0UsNkNBQ0txQixLQURMO0FBRUVoQyxvQkFBWSxFQUFFLEtBRmhCO0FBR0VFLGtCQUFVLEVBQUUrQixNQUFNLENBQUNDO0FBSHJCOztBQU1GLFNBQUt0QixlQUFMO0FBQ0UsNkNBQ0tvQixLQURMO0FBRUU3QixxQkFBYSxFQUFFLElBRmpCO0FBR0VELGtCQUFVLEVBQUU7QUFIZDs7QUFLRixTQUFLVyxlQUFMO0FBQ0UsNkNBQ0ttQixLQURMO0FBRUU5QixrQkFBVSxFQUFFLEtBRmQ7QUFHRUQsaUJBQVMsRUFBRSxLQUhiO0FBSUVLLFVBQUUsRUFBRTtBQUpOOztBQU1GLFNBQUtRLGVBQUw7QUFDRSw2Q0FDS2tCLEtBREw7QUFFRTlCLGtCQUFVLEVBQUUsS0FGZDtBQUdFRCxpQkFBUyxFQUFFO0FBSGI7O0FBS0Y7QUFDRSxhQUFPK0IsS0FBUDtBQTFDSjtBQTRDRCxDQTdDRDs7QUErQ2VELHNFQUFmIiwiZmlsZSI6Ii4vcmVkdWNlcnMvdXNlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGxvZ0luTG9hZGluZzogZmFsc2UsIC8vIOuhnOq3uOyduCDsi5zrj4TspJEgIC8vIOuhnOuUqeywvSBVSeq1rO2YhOydhCDsnITtlahcbiAgbG9nSW5Eb25lOiBmYWxzZSxcbiAgbG9nSW5FcnJvcjogZmFsc2UsXG5cbiAgbG9nT3V0TG9hZGluZzogZmFsc2UsIC8vIOuhnOq3uOyVhOybgyDsi5zrj4TspJEgIC8vIOuhnOuUqeywvSBVSeq1rO2YhOydhCDsnITtlahcbiAgbG9nT3V0RG9uZTogZmFsc2UsXG4gIGxvZ091dEVycm9yOiBmYWxzZSxcbiAgbWU6IG51bGwsXG4gIHNpZ25VcERhdGE6IHt9LFxuICBsb2dpbkRhdGE6IHt9XG59XG5cbi8vIOuzgOyImOuKlCDsl5DrlJTthLDqsIAg6rSA66as7ZW07KO86riwIOuVjOusuOyXkCDsmKTtg4DqsIAg64KgIO2ZleuloOydtCDspITslrTrk6Dri6QuXG5leHBvcnQgY29uc3QgTE9HX0lOX1JFUVVFU1QgPSAnTE9HX0lOX1JFUVVFU1QnXG5leHBvcnQgY29uc3QgTE9HX0lOX1NVQ0NFU1MgPSAnTE9HX0lOX1NVQ0NFU1MnXG5leHBvcnQgY29uc3QgTE9HX0lOX0ZBSUxVUkUgPSAnTE9HX0lOX0ZBSUxVUkUnXG5cbmV4cG9ydCBjb25zdCBMT0dfT1VUX1JFUVVFU1QgPSAnTE9HX09VVF9SRVFVRVNUJ1xuZXhwb3J0IGNvbnN0IExPR19PVVRfU1VDQ0VTUyA9ICdMT0dfT1VUX1NVQ0NFU1MnXG5leHBvcnQgY29uc3QgTE9HX09VVF9GQUlMVVJFID0gJ0xPR19PVVRfRkFJTFVSRSdcblxuZXhwb3J0IGNvbnN0IEZPTExPV19SRVFVRVNUID0gJ0ZPTExPV19SRVFVRVNUJ1xuZXhwb3J0IGNvbnN0IEZPTExPV19TVUNDRVNTID0gJ0ZPTExPV19TVUNDRVNTJ1xuZXhwb3J0IGNvbnN0IEZPTExPV19GQUlMVVJFID0gJ0ZPTExPV19GQUlMVVJFJ1xuXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfUkVRVUVTVCA9ICdVTkZPTExPV19SRVFVRVNUJ1xuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1NVQ0NFU1MgPSAnVU5GT0xMT1dfU1VDQ0VTUydcbmV4cG9ydCBjb25zdCBVTkZPTExPV19GQUlMVVJFID0gJ1VORk9MTE9XX0ZBSUxVUkUnXG5cbiBjb25zdCBkdW1teVVzZXIgPSAoZGF0YSkgPT4gKHsgXG4gICAuLi5kYXRhLCBcbiAgIG5pY2tuYW1lOiAnc2VvbHJhbmxlZScsXG4gICBpZDogMSxcbiAgIFBvc3RzOiBbXSxcbiAgIEZvbGxvd2luZ3M6IFtdLFxuICAgRm9sbG93ZXJzOiBbXVxuICB9KVxuLy8g6re465WMIOq3uOuVjCDslaHshZjsnYQg66eM65Oc64qUIGFjdGlvbiBjcmVhdGVyXG5leHBvcnQgY29uc3QgbG9naW5SZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBMT0dfSU5fUkVRVUVTVCxcbiAgICBkYXRhXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGxvZ291dFJlcXVlc3RBY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ0xPR19PVVRfUkVRVUVTVCdcbiAgfVxufVxuXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgTE9HX0lOX1JFUVVFU1Q6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbG9nSW5Mb2FkaW5nOiB0cnVlLFxuICAgICAgICBsb2dJbkVycm9yOiBudWxsLFxuICAgICAgICBsb2dJbkRvbmU6IGZhbHNlXG4gICAgICB9XG4gICAgY2FzZSBMT0dfSU5fU1VDQ0VTUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBsb2dJbkxvYWRpbmc6IGZhbHNlLFxuICAgICAgICBsb2dJbkRvbmU6IHRydWUsXG4gICAgICAgIG1lOiBkdW1teVVzZXIoYWN0aW9uLmRhdGEpXG4gICAgICB9XG4gICAgY2FzZSBMT0dfSU5fRkFJTFVSRTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBsb2dJbkxvYWRpbmc6IGZhbHNlLFxuICAgICAgICBsb2dJbkVycm9yOiBhY3Rpb24uZXJyb3JcbiAgICAgIH1cblxuICAgIGNhc2UgTE9HX09VVF9SRVFVRVNUOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGxvZ091dExvYWRpbmc6IHRydWUsXG4gICAgICAgIGxvZ0luRXJyb3I6IHRydWUsXG4gICAgICB9XG4gICAgY2FzZSBMT0dfT1VUX1NVQ0NFU1M6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbG9nSW5FcnJvcjogZmFsc2UsXG4gICAgICAgIGxvZ0luRG9uZTogZmFsc2UsXG4gICAgICAgIG1lOiBudWxsXG4gICAgICB9XG4gICAgY2FzZSBMT0dfT1VUX0ZBSUxVUkU6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbG9nSW5FcnJvcjogZmFsc2UsXG4gICAgICAgIGxvZ0luRG9uZTogZmFsc2UsXG4gICAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./reducers/user.js\n");

/***/ })

})