webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, addPost, addPostAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addPost\", function() { return addPost; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addPostAction\", function() { return addPostAction; });\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n// reducer중심으로 생각.\n// 화면이 아니라 데이터를 먼저 구성.\nvar initialState = {\n  mainPosts: [{\n    id: 1,\n    User: {\n      id: 1,\n      nickname: 'seolranlee'\n    },\n    content: '첫 번째 게시글 #해시태그 #익스프레스',\n    Images: [{\n      src: 'https://ccdn.lezhin.com/v2/banners/explore_boys/images/17467.webp?updated=1634792020109'\n    } // {\n    //   src: 'https://ccdn.lezhin.com/v2/banners/explore_boys/images/17630.webp?updated=1635250994567'\n    // },\n    // {\n    //   src: 'https://ccdn.lezhin.com/v2/banners/explore_boys/images/17303.webp?updated=1634553971673s'\n    // }\n    ],\n    Comments: [{\n      User: {\n        nickname: 'user1'\n      },\n      content: '코멘트1'\n    }, {\n      User: {\n        nickname: 'user2'\n      },\n      content: '코멘트2'\n    }]\n  }],\n  imagePaths: [],\n  postAdded: false\n}; // 액션 이름을 상수로 빼둔다=>오타확률을 낮춘다\n\nvar ADD_POST = 'ADD_POST';\nvar addPost = {\n  type: ADD_POST\n};\nvar addPostAction = function addPostAction(data) {\n  console.log('data:', data);\n  return {\n    type: ADD_POST,\n    data: data\n  };\n};\nvar dummyPost = {\n  id: 2,\n  content: 'dummy data',\n  User: {\n    id: 1,\n    nickname: 'foo'\n  },\n  Images: [],\n  Comments: []\n};\n\nvar reducer = function reducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case ADD_POST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        // dummyPost를 앞에다가 추가해줘야 새로운 게시글이 위에 올라간다.\n        mainPosts: [dummyPost].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.mainPosts)),\n        postAdded: true\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcz9hN2UzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsIm1haW5Qb3N0cyIsImlkIiwiVXNlciIsIm5pY2tuYW1lIiwiY29udGVudCIsIkltYWdlcyIsInNyYyIsIkNvbW1lbnRzIiwiaW1hZ2VQYXRocyIsInBvc3RBZGRlZCIsIkFERF9QT1NUIiwiYWRkUG9zdCIsInR5cGUiLCJhZGRQb3N0QWN0aW9uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJkdW1teVBvc3QiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sSUFBTUEsWUFBWSxHQUFHO0FBQzFCQyxXQUFTLEVBQUUsQ0FBQztBQUNWQyxNQUFFLEVBQUUsQ0FETTtBQUVWQyxRQUFJLEVBQUU7QUFDSkQsUUFBRSxFQUFFLENBREE7QUFFSkUsY0FBUSxFQUFFO0FBRk4sS0FGSTtBQU1WQyxXQUFPLEVBQUUsdUJBTkM7QUFPVkMsVUFBTSxFQUFFLENBQ047QUFDRUMsU0FBRyxFQUFFO0FBRFAsS0FETSxDQUlOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRNLEtBUEU7QUFrQlZDLFlBQVEsRUFBRSxDQUNSO0FBQ0VMLFVBQUksRUFBRTtBQUNKQyxnQkFBUSxFQUFFO0FBRE4sT0FEUjtBQUlFQyxhQUFPLEVBQUU7QUFKWCxLQURRLEVBT1I7QUFDRUYsVUFBSSxFQUFFO0FBQ0pDLGdCQUFRLEVBQUU7QUFETixPQURSO0FBSUVDLGFBQU8sRUFBRTtBQUpYLEtBUFE7QUFsQkEsR0FBRCxDQURlO0FBa0MxQkksWUFBVSxFQUFFLEVBbENjO0FBbUMxQkMsV0FBUyxFQUFFO0FBbkNlLENBQXJCLEMsQ0FzQ1A7O0FBQ0EsSUFBTUMsUUFBUSxHQUFHLFVBQWpCO0FBRU8sSUFBTUMsT0FBTyxHQUFHO0FBQ3JCQyxNQUFJLEVBQUVGO0FBRGUsQ0FBaEI7QUFJQSxJQUFNRyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLElBQUQsRUFBVTtBQUNyQ0MsU0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWixFQUFxQkYsSUFBckI7QUFDQSxTQUFPO0FBQ0xGLFFBQUksRUFBRUYsUUFERDtBQUVMSSxRQUFJLEVBQUpBO0FBRkssR0FBUDtBQUlELENBTk07QUFRUCxJQUFNRyxTQUFTLEdBQUc7QUFDaEJoQixJQUFFLEVBQUUsQ0FEWTtBQUVoQkcsU0FBTyxFQUFFLFlBRk87QUFHaEJGLE1BQUksRUFBRTtBQUNKRCxNQUFFLEVBQUUsQ0FEQTtBQUVKRSxZQUFRLEVBQUU7QUFGTixHQUhVO0FBT2hCRSxRQUFNLEVBQUUsRUFQUTtBQVFoQkUsVUFBUSxFQUFFO0FBUk0sQ0FBbEI7O0FBV0EsSUFBTVcsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBa0M7QUFBQSxNQUFqQ0MsS0FBaUMsdUVBQXpCcEIsWUFBeUI7QUFBQSxNQUFYcUIsTUFBVzs7QUFDaEQsVUFBUUEsTUFBTSxDQUFDUixJQUFmO0FBQ0UsU0FBS0YsUUFBTDtBQUNFLDZDQUNLUyxLQURMO0FBRUU7QUFDQW5CLGlCQUFTLEdBQUdpQixTQUFILHNHQUFpQkUsS0FBSyxDQUFDbkIsU0FBdkIsRUFIWDtBQUlFUyxpQkFBUyxFQUFFO0FBSmI7O0FBTUY7QUFDRSxhQUFPVSxLQUFQO0FBVEo7QUFXRCxDQVpEOztBQWNlRCxzRUFBZiIsImZpbGUiOiIuL3JlZHVjZXJzL3Bvc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZWR1Y2Vy7KSR7Ius7Jy866GcIOyDneqwgS5cbi8vIO2ZlOuptOydtCDslYTri4jrnbwg642w7J207YSw66W8IOuovOyggCDqtazshLEuXG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIG1haW5Qb3N0czogW3tcbiAgICBpZDogMSxcbiAgICBVc2VyOiB7XG4gICAgICBpZDogMSxcbiAgICAgIG5pY2tuYW1lOiAnc2VvbHJhbmxlZSdcbiAgICB9LFxuICAgIGNvbnRlbnQ6ICfssqsg67KI7Ke4IOqyjOyLnOq4gCAj7ZW07Iuc7YOc6re4ICPsnbXsiqTtlITroIjsiqQnLFxuICAgIEltYWdlczogW1xuICAgICAge1xuICAgICAgICBzcmM6ICdodHRwczovL2NjZG4ubGV6aGluLmNvbS92Mi9iYW5uZXJzL2V4cGxvcmVfYm95cy9pbWFnZXMvMTc0Njcud2VicD91cGRhdGVkPTE2MzQ3OTIwMjAxMDknXG4gICAgICB9LFxuICAgICAgLy8ge1xuICAgICAgLy8gICBzcmM6ICdodHRwczovL2NjZG4ubGV6aGluLmNvbS92Mi9iYW5uZXJzL2V4cGxvcmVfYm95cy9pbWFnZXMvMTc2MzAud2VicD91cGRhdGVkPTE2MzUyNTA5OTQ1NjcnXG4gICAgICAvLyB9LFxuICAgICAgLy8ge1xuICAgICAgLy8gICBzcmM6ICdodHRwczovL2NjZG4ubGV6aGluLmNvbS92Mi9iYW5uZXJzL2V4cGxvcmVfYm95cy9pbWFnZXMvMTczMDMud2VicD91cGRhdGVkPTE2MzQ1NTM5NzE2NzNzJ1xuICAgICAgLy8gfVxuICAgIF0sXG4gICAgQ29tbWVudHM6IFtcbiAgICAgIHtcbiAgICAgICAgVXNlcjoge1xuICAgICAgICAgIG5pY2tuYW1lOiAndXNlcjEnXG4gICAgICAgIH0sXG4gICAgICAgIGNvbnRlbnQ6ICfsvZTrqZjtirgxJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgVXNlcjoge1xuICAgICAgICAgIG5pY2tuYW1lOiAndXNlcjInXG4gICAgICAgIH0sXG4gICAgICAgIGNvbnRlbnQ6ICfsvZTrqZjtirgyJ1xuICAgICAgfVxuICAgIF1cbiAgfV0sXG4gIGltYWdlUGF0aHM6IFtdLFxuICBwb3N0QWRkZWQ6IGZhbHNlXG59XG5cbi8vIOyVoeyFmCDsnbTrpoTsnYQg7IOB7IiY66GcIOu5vOuRlOuLpD0+7Jik7YOA7ZmV66Wg7J2EIOuCruy2mOuLpFxuY29uc3QgQUREX1BPU1QgPSAnQUREX1BPU1QnXG5cbmV4cG9ydCBjb25zdCBhZGRQb3N0ID0ge1xuICB0eXBlOiBBRERfUE9TVFxufVxuXG5leHBvcnQgY29uc3QgYWRkUG9zdEFjdGlvbiA9IChkYXRhKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdkYXRhOicsIGRhdGEpXG4gIHJldHVybiB7XG4gICAgdHlwZTogQUREX1BPU1QsXG4gICAgZGF0YVxuICB9XG59XG5cbmNvbnN0IGR1bW15UG9zdCA9IHtcbiAgaWQ6IDIsXG4gIGNvbnRlbnQ6ICdkdW1teSBkYXRhJyxcbiAgVXNlcjoge1xuICAgIGlkOiAxLFxuICAgIG5pY2tuYW1lOiAnZm9vJ1xuICB9LFxuICBJbWFnZXM6IFtdLFxuICBDb21tZW50czogW11cbn1cblxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEFERF9QT1NUOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIC8vIGR1bW15UG9zdOulvCDslZ7sl5Dri6TqsIAg7LaU6rCA7ZW07KSY7JW8IOyDiOuhnOyatCDqsozsi5zquIDsnbQg7JyE7JeQIOyYrOudvOqwhOuLpC5cbiAgICAgICAgbWFpblBvc3RzOiBbZHVtbXlQb3N0LCAuLi5zdGF0ZS5tYWluUG9zdHNdLFxuICAgICAgICBwb3N0QWRkZWQ6IHRydWVcbiAgICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./reducers/post.js\n");

/***/ })

})