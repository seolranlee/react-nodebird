webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, addPost, addPostAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addPost\", function() { return addPost; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addPostAction\", function() { return addPostAction; });\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n// reducer중심으로 생각.\n// 화면이 아니라 데이터를 먼저 구성.\nvar initialState = {\n  mainPosts: [{\n    id: 1,\n    User: {\n      id: 1,\n      nickname: 'seolranlee'\n    },\n    content: '첫 번째 게시글 #해시태그 #익스프레스',\n    Images: [{\n      src: 'https://ccdn.lezhin.com/v2/banners/explore_boys/images/17467.webp?updated=1634792020109'\n    }, {\n      src: 'https://ccdn.lezhin.com/v2/banners/explore_boys/images/17630.webp?updated=1635250994567'\n    }, {\n      src: 'https://ccdn.lezhin.com/v2/banners/explore_boys/images/17303.webp?updated=1634553971673s'\n    }],\n    Comments: [{\n      User: {\n        nickname: 'user1'\n      },\n      content: '코멘트1'\n    }, {\n      User: {\n        nickname: 'user2'\n      },\n      content: '코멘트2'\n    }]\n  }],\n  imagePaths: [],\n  postAdded: false\n}; // 액션 이름을 상수로 빼둔다=>오타확률을 낮춘다\n\nvar ADD_POST = 'ADD_POST';\nvar addPost = {\n  type: ADD_POST\n};\nvar addPostAction = function addPostAction(content) {\n  return {\n    type: ADD_POST,\n    content: content\n  };\n};\nvar dummyPost = {\n  id: 2,\n  content: 'dummy data',\n  User: {\n    id: 1,\n    nickname: 'foo'\n  },\n  Images: [],\n  Comments: []\n};\n\nvar reducer = function reducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case ADD_POST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        // dummyPost를 앞에다가 추가해줘야 새로운 게시글이 위에 올라간다.\n        mainPosts: [dummyPost].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.mainPosts)),\n        postAdded: true\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcz9hN2UzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsIm1haW5Qb3N0cyIsImlkIiwiVXNlciIsIm5pY2tuYW1lIiwiY29udGVudCIsIkltYWdlcyIsInNyYyIsIkNvbW1lbnRzIiwiaW1hZ2VQYXRocyIsInBvc3RBZGRlZCIsIkFERF9QT1NUIiwiYWRkUG9zdCIsInR5cGUiLCJhZGRQb3N0QWN0aW9uIiwiZHVtbXlQb3N0IiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVPLElBQU1BLFlBQVksR0FBRztBQUMxQkMsV0FBUyxFQUFFLENBQUM7QUFDVkMsTUFBRSxFQUFFLENBRE07QUFFVkMsUUFBSSxFQUFFO0FBQ0pELFFBQUUsRUFBRSxDQURBO0FBRUpFLGNBQVEsRUFBRTtBQUZOLEtBRkk7QUFNVkMsV0FBTyxFQUFFLHVCQU5DO0FBT1ZDLFVBQU0sRUFBRSxDQUNOO0FBQ0VDLFNBQUcsRUFBRTtBQURQLEtBRE0sRUFJTjtBQUNFQSxTQUFHLEVBQUU7QUFEUCxLQUpNLEVBT047QUFDRUEsU0FBRyxFQUFFO0FBRFAsS0FQTSxDQVBFO0FBa0JWQyxZQUFRLEVBQUUsQ0FDUjtBQUNFTCxVQUFJLEVBQUU7QUFDSkMsZ0JBQVEsRUFBRTtBQUROLE9BRFI7QUFJRUMsYUFBTyxFQUFFO0FBSlgsS0FEUSxFQU9SO0FBQ0VGLFVBQUksRUFBRTtBQUNKQyxnQkFBUSxFQUFFO0FBRE4sT0FEUjtBQUlFQyxhQUFPLEVBQUU7QUFKWCxLQVBRO0FBbEJBLEdBQUQsQ0FEZTtBQWtDMUJJLFlBQVUsRUFBRSxFQWxDYztBQW1DMUJDLFdBQVMsRUFBRTtBQW5DZSxDQUFyQixDLENBc0NQOztBQUNBLElBQU1DLFFBQVEsR0FBRyxVQUFqQjtBQUVPLElBQU1DLE9BQU8sR0FBRztBQUNyQkMsTUFBSSxFQUFFRjtBQURlLENBQWhCO0FBSUEsSUFBTUcsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDVCxPQUFELEVBQWE7QUFDeEMsU0FBTztBQUNMUSxRQUFJLEVBQUVGLFFBREQ7QUFFTE4sV0FBTyxFQUFQQTtBQUZLLEdBQVA7QUFJRCxDQUxNO0FBT1AsSUFBTVUsU0FBUyxHQUFHO0FBQ2hCYixJQUFFLEVBQUUsQ0FEWTtBQUVoQkcsU0FBTyxFQUFFLFlBRk87QUFHaEJGLE1BQUksRUFBRTtBQUNKRCxNQUFFLEVBQUUsQ0FEQTtBQUVKRSxZQUFRLEVBQUU7QUFGTixHQUhVO0FBT2hCRSxRQUFNLEVBQUUsRUFQUTtBQVFoQkUsVUFBUSxFQUFFO0FBUk0sQ0FBbEI7O0FBV0EsSUFBTVEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBa0M7QUFBQSxNQUFqQ0MsS0FBaUMsdUVBQXpCakIsWUFBeUI7QUFBQSxNQUFYa0IsTUFBVzs7QUFDaEQsVUFBUUEsTUFBTSxDQUFDTCxJQUFmO0FBQ0UsU0FBS0YsUUFBTDtBQUNFLDZDQUNLTSxLQURMO0FBRUU7QUFDQWhCLGlCQUFTLEdBQUdjLFNBQUgsc0dBQWlCRSxLQUFLLENBQUNoQixTQUF2QixFQUhYO0FBSUVTLGlCQUFTLEVBQUU7QUFKYjs7QUFNRjtBQUNFLGFBQU9PLEtBQVA7QUFUSjtBQVdELENBWkQ7O0FBY2VELHNFQUFmIiwiZmlsZSI6Ii4vcmVkdWNlcnMvcG9zdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHJlZHVjZXLspJHsi6zsnLzroZwg7IOd6rCBLlxuLy8g7ZmU66m07J20IOyVhOuLiOudvCDrjbDsnbTthLDrpbwg66i87KCAIOq1rOyEsS5cblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgbWFpblBvc3RzOiBbe1xuICAgIGlkOiAxLFxuICAgIFVzZXI6IHtcbiAgICAgIGlkOiAxLFxuICAgICAgbmlja25hbWU6ICdzZW9scmFubGVlJ1xuICAgIH0sXG4gICAgY29udGVudDogJ+yyqyDrsojsp7gg6rKM7Iuc6riAICPtlbTsi5ztg5zqt7ggI+ydteyKpO2UhOugiOyKpCcsXG4gICAgSW1hZ2VzOiBbXG4gICAgICB7XG4gICAgICAgIHNyYzogJ2h0dHBzOi8vY2Nkbi5sZXpoaW4uY29tL3YyL2Jhbm5lcnMvZXhwbG9yZV9ib3lzL2ltYWdlcy8xNzQ2Ny53ZWJwP3VwZGF0ZWQ9MTYzNDc5MjAyMDEwOSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNyYzogJ2h0dHBzOi8vY2Nkbi5sZXpoaW4uY29tL3YyL2Jhbm5lcnMvZXhwbG9yZV9ib3lzL2ltYWdlcy8xNzYzMC53ZWJwP3VwZGF0ZWQ9MTYzNTI1MDk5NDU2NydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNyYzogJ2h0dHBzOi8vY2Nkbi5sZXpoaW4uY29tL3YyL2Jhbm5lcnMvZXhwbG9yZV9ib3lzL2ltYWdlcy8xNzMwMy53ZWJwP3VwZGF0ZWQ9MTYzNDU1Mzk3MTY3M3MnXG4gICAgICB9XG4gICAgXSxcbiAgICBDb21tZW50czogW1xuICAgICAge1xuICAgICAgICBVc2VyOiB7XG4gICAgICAgICAgbmlja25hbWU6ICd1c2VyMSdcbiAgICAgICAgfSxcbiAgICAgICAgY29udGVudDogJ+y9lOupmO2KuDEnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBVc2VyOiB7XG4gICAgICAgICAgbmlja25hbWU6ICd1c2VyMidcbiAgICAgICAgfSxcbiAgICAgICAgY29udGVudDogJ+y9lOupmO2KuDInXG4gICAgICB9XG4gICAgXVxuICB9XSxcbiAgaW1hZ2VQYXRoczogW10sXG4gIHBvc3RBZGRlZDogZmFsc2Vcbn1cblxuLy8g7JWh7IWYIOydtOumhOydhCDsg4HsiJjroZwg67m865GU64ukPT7smKTtg4DtmZXrpaDsnYQg64Ku7LaY64ukXG5jb25zdCBBRERfUE9TVCA9ICdBRERfUE9TVCdcblxuZXhwb3J0IGNvbnN0IGFkZFBvc3QgPSB7XG4gIHR5cGU6IEFERF9QT1NUXG59XG5cbmV4cG9ydCBjb25zdCBhZGRQb3N0QWN0aW9uID0gKGNvbnRlbnQpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBRERfUE9TVCxcbiAgICBjb250ZW50XG4gIH1cbn1cblxuY29uc3QgZHVtbXlQb3N0ID0ge1xuICBpZDogMixcbiAgY29udGVudDogJ2R1bW15IGRhdGEnLFxuICBVc2VyOiB7XG4gICAgaWQ6IDEsXG4gICAgbmlja25hbWU6ICdmb28nXG4gIH0sXG4gIEltYWdlczogW10sXG4gIENvbW1lbnRzOiBbXVxufVxuXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQUREX1BPU1Q6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgLy8gZHVtbXlQb3N066W8IOyVnuyXkOuLpOqwgCDstpTqsIDtlbTspJjslbwg7IOI66Gc7Jq0IOqyjOyLnOq4gOydtCDsnITsl5Ag7Jis65286rCE64ukLlxuICAgICAgICBtYWluUG9zdHM6IFtkdW1teVBvc3QsIC4uLnN0YXRlLm1haW5Qb3N0c10sXG4gICAgICAgIHBvc3RBZGRlZDogdHJ1ZVxuICAgICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./reducers/post.js\n");

/***/ })

})