webpackHotUpdate_N_E("pages/index",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_POST_REQUEST\", function() { return ADD_POST_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_POST_SUCCESS\", function() { return ADD_POST_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_POST_FAILURE\", function() { return ADD_POST_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_COMMENT_REQUEST\", function() { return ADD_COMMENT_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_COMMENT_SUCCESS\", function() { return ADD_COMMENT_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_COMMENT_FAILURE\", function() { return ADD_COMMENT_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addPost\", function() { return addPost; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addComment\", function() { return addComment; });\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shortid */ \"./node_modules/shortid/index.js\");\n/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n// reducer중심으로 생각.\n// 화면이 아니라 데이터를 먼저 구성.\n\nvar initialState = {\n  mainPosts: [{\n    id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),\n    User: {\n      id: 1,\n      nickname: 'seolranlee'\n    },\n    content: '첫 번째 게시글 #해시태그 #익스프레스',\n    Images: [{\n      src: 'https://ccdn.lezhin.com/v2/banners/explore_boys/images/17467.webp?updated=1634792020109'\n    }, {\n      src: 'https://ccdn.lezhin.com/v2/banners/explore_boys/images/17630.webp?updated=1635250994567'\n    }, {\n      src: 'https://ccdn.lezhin.com/v2/banners/explore_boys/images/17303.webp?updated=1634553971673s'\n    }],\n    Comments: [{\n      User: {\n        nickname: 'user1'\n      },\n      content: '코멘트1'\n    }, {\n      User: {\n        nickname: 'user2'\n      },\n      content: '코멘트2'\n    }]\n  }],\n  imagePaths: [],\n  addPostLoading: false,\n  addPostDone: false,\n  addPostError: null,\n  addCommentLoading: false,\n  addCommentDone: false,\n  addCommentError: null\n}; // 액션 이름을 상수로 빼둔다=>오타확률을 낮춘다\n\nvar ADD_POST_REQUEST = 'ADD_POST_REQUEST';\nvar ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';\nvar ADD_POST_FAILURE = 'ADD_POST_FAILURE';\nvar ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';\nvar ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';\nvar ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';\nvar addPost = function addPost(data) {\n  return {\n    type: ADD_POST_REQUEST,\n    data: data\n  };\n};\nvar addComment = function addComment(data) {\n  return {\n    type: ADD_COMMENT_REQUEST,\n    data: data\n  };\n};\n\nvar dummyPost = function dummyPost(data) {\n  return {\n    // 겹치지 않는 랜덤한 아이디를 생성해서 return해주는 npm.\n    id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),\n    content: data,\n    User: {\n      id: 1,\n      nickname: 'foo'\n    },\n    Images: [],\n    Comments: []\n  };\n};\n\nvar reducer = function reducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case ADD_POST_REQUEST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        addPostLoading: true,\n        addPostDone: false,\n        addPostError: null\n      });\n\n    case ADD_POST_SUCCESS:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        // dummyPost를 앞에다가 추가해줘야 새로운 게시글이 위에 올라간다.\n        mainPosts: [dummyPost(action.data)].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.mainPosts)),\n        addPostLoading: false,\n        addPostDone: true\n      });\n\n    case ADD_POST_FAILURE:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        addPostLoading: true,\n        addPostError: action.error\n      });\n\n    case ADD_COMMENT_REQUEST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        addCommentLoading: true,\n        addCommentDone: false,\n        addCommentError: null\n      });\n\n    case ADD_COMMENT_SUCCESS:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        addCommentLoading: false,\n        addCommentDone: true\n      });\n\n    case ADD_COMMENT_FAILURE:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        addCommentLoading: true,\n        addCommentError: action.error\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcz9hN2UzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsIm1haW5Qb3N0cyIsImlkIiwic2hvcnRJZCIsImdlbmVyYXRlIiwiVXNlciIsIm5pY2tuYW1lIiwiY29udGVudCIsIkltYWdlcyIsInNyYyIsIkNvbW1lbnRzIiwiaW1hZ2VQYXRocyIsImFkZFBvc3RMb2FkaW5nIiwiYWRkUG9zdERvbmUiLCJhZGRQb3N0RXJyb3IiLCJhZGRDb21tZW50TG9hZGluZyIsImFkZENvbW1lbnREb25lIiwiYWRkQ29tbWVudEVycm9yIiwiQUREX1BPU1RfUkVRVUVTVCIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwiYWRkUG9zdCIsImRhdGEiLCJ0eXBlIiwiYWRkQ29tbWVudCIsImR1bW15UG9zdCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsImVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxZQUFZLEdBQUc7QUFDMUJDLFdBQVMsRUFBRSxDQUFDO0FBQ1ZDLE1BQUUsRUFBRUMsOENBQU8sQ0FBQ0MsUUFBUixFQURNO0FBRVZDLFFBQUksRUFBRTtBQUNKSCxRQUFFLEVBQUUsQ0FEQTtBQUVKSSxjQUFRLEVBQUU7QUFGTixLQUZJO0FBTVZDLFdBQU8sRUFBRSx1QkFOQztBQU9WQyxVQUFNLEVBQUUsQ0FDTjtBQUNFQyxTQUFHLEVBQUU7QUFEUCxLQURNLEVBSU47QUFDRUEsU0FBRyxFQUFFO0FBRFAsS0FKTSxFQU9OO0FBQ0VBLFNBQUcsRUFBRTtBQURQLEtBUE0sQ0FQRTtBQWtCVkMsWUFBUSxFQUFFLENBQ1I7QUFDRUwsVUFBSSxFQUFFO0FBQ0pDLGdCQUFRLEVBQUU7QUFETixPQURSO0FB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Ii4vcmVkdWNlcnMvcG9zdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHJlZHVjZXLspJHsi6zsnLzroZwg7IOd6rCBLlxuLy8g7ZmU66m07J20IOyVhOuLiOudvCDrjbDsnbTthLDrpbwg66i87KCAIOq1rOyEsS5cbmltcG9ydCBzaG9ydElkIGZyb20gJ3Nob3J0aWQnXG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIG1haW5Qb3N0czogW3tcbiAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxuICAgIFVzZXI6IHtcbiAgICAgIGlkOiAxLFxuICAgICAgbmlja25hbWU6ICdzZW9scmFubGVlJ1xuICAgIH0sXG4gICAgY29udGVudDogJ+yyqyDrsojsp7gg6rKM7Iuc6riAICPtlbTsi5ztg5zqt7ggI+ydteyKpO2UhOugiOyKpCcsXG4gICAgSW1hZ2VzOiBbXG4gICAgICB7XG4gICAgICAgIHNyYzogJ2h0dHBzOi8vY2Nkbi5sZXpoaW4uY29tL3YyL2Jhbm5lcnMvZXhwbG9yZV9ib3lzL2ltYWdlcy8xNzQ2Ny53ZWJwP3VwZGF0ZWQ9MTYzNDc5MjAyMDEwOSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNyYzogJ2h0dHBzOi8vY2Nkbi5sZXpoaW4uY29tL3YyL2Jhbm5lcnMvZXhwbG9yZV9ib3lzL2ltYWdlcy8xNzYzMC53ZWJwP3VwZGF0ZWQ9MTYzNTI1MDk5NDU2NydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNyYzogJ2h0dHBzOi8vY2Nkbi5sZXpoaW4uY29tL3YyL2Jhbm5lcnMvZXhwbG9yZV9ib3lzL2ltYWdlcy8xNzMwMy53ZWJwP3VwZGF0ZWQ9MTYzNDU1Mzk3MTY3M3MnXG4gICAgICB9XG4gICAgXSxcbiAgICBDb21tZW50czogW1xuICAgICAge1xuICAgICAgICBVc2VyOiB7XG4gICAgICAgICAgbmlja25hbWU6ICd1c2VyMSdcbiAgICAgICAgfSxcbiAgICAgICAgY29udGVudDogJ+y9lOupmO2KuDEnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBVc2VyOiB7XG4gICAgICAgICAgbmlja25hbWU6ICd1c2VyMidcbiAgICAgICAgfSxcbiAgICAgICAgY29udGVudDogJ+y9lOupmO2KuDInXG4gICAgICB9XG4gICAgXVxuICB9XSxcbiAgaW1hZ2VQYXRoczogW10sXG4gIGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcbiAgYWRkUG9zdERvbmU6IGZhbHNlLFxuICBhZGRQb3N0RXJyb3I6IG51bGwsXG4gIGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcbiAgYWRkQ29tbWVudERvbmU6IGZhbHNlLFxuICBhZGRDb21tZW50RXJyb3I6IG51bGxcbn1cblxuLy8g7JWh7IWYIOydtOumhOydhCDsg4HsiJjroZwg67m865GU64ukPT7smKTtg4DtmZXrpaDsnYQg64Ku7LaY64ukXG5leHBvcnQgY29uc3QgQUREX1BPU1RfUkVRVUVTVCA9ICdBRERfUE9TVF9SRVFVRVNUJ1xuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1NVQ0NFU1MgPSAnQUREX1BPU1RfU1VDQ0VTUydcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9GQUlMVVJFID0gJ0FERF9QT1NUX0ZBSUxVUkUnXG5cbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9SRVFVRVNUID0gJ0FERF9DT01NRU5UX1JFUVVFU1QnXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUyA9ICdBRERfQ09NTUVOVF9TVUNDRVNTJ1xuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUxVUkUgPSAnQUREX0NPTU1FTlRfRkFJTFVSRSdcblxuZXhwb3J0IGNvbnN0IGFkZFBvc3QgPSAoZGF0YSkgPT4gKHtcbiAgdHlwZTogQUREX1BPU1RfUkVRVUVTVCxcbiAgZGF0YVxufSlcblxuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnQgPSAoZGF0YSkgPT4gKHtcbiAgdHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCxcbiAgZGF0YVxufSlcblxuY29uc3QgZHVtbXlQb3N0ID0gKGRhdGEpID0+ICh7XG4gIC8vIOqyuey5mOyngCDslYrripQg656c642k7ZWcIOyVhOydtOuUlOulvCDsg53shLHtlbTshJwgcmV0dXJu7ZW07KO864qUIG5wbS5cbiAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcbiAgY29udGVudDogZGF0YSxcbiAgVXNlcjoge1xuICAgIGlkOiAxLFxuICAgIG5pY2tuYW1lOiAnZm9vJ1xuICB9LFxuICBJbWFnZXM6IFtdLFxuICBDb21tZW50czogW11cbn0pXG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBBRERfUE9TVF9SRVFVRVNUOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGFkZFBvc3RMb2FkaW5nOiB0cnVlLFxuICAgICAgICBhZGRQb3N0RG9uZTogZmFsc2UsXG4gICAgICAgIGFkZFBvc3RFcnJvcjogbnVsbFxuICAgICAgfVxuICAgIGNhc2UgQUREX1BPU1RfU1VDQ0VTUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAvLyBkdW1teVBvc3Trpbwg7JWe7JeQ64uk6rCAIOy2lOqwgO2VtOykmOyVvCDsg4jroZzsmrQg6rKM7Iuc6riA7J20IOychOyXkCDsmKzrnbzqsITri6QuXG4gICAgICAgIG1haW5Qb3N0czogW2R1bW15UG9zdChhY3Rpb24uZGF0YSksIC4uLnN0YXRlLm1haW5Qb3N0c10sXG4gICAgICAgIGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgYWRkUG9zdERvbmU6IHRydWVcbiAgICAgIH1cbiAgICBjYXNlIEFERF9QT1NUX0ZBSUxVUkU6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgYWRkUG9zdExvYWRpbmc6IHRydWUsXG4gICAgICAgIGFkZFBvc3RFcnJvcjogYWN0aW9uLmVycm9yXG4gICAgICB9XG4gICAgY2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGFkZENvbW1lbnRMb2FkaW5nOiB0cnVlLFxuICAgICAgICBhZGRDb21tZW50RG9uZTogZmFsc2UsXG4gICAgICAgIGFkZENvbW1lbnRFcnJvcjogbnVsbFxuICAgICAgfVxuICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXG4gICAgICAgIGFkZENvbW1lbnREb25lOiB0cnVlXG4gICAgICB9XG4gICAgY2FzZSBBRERfQ09NTUVOVF9GQUlMVVJFOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGFkZENvbW1lbnRMb2FkaW5nOiB0cnVlLFxuICAgICAgICBhZGRDb21tZW50RXJyb3I6IGFjdGlvbi5lcnJvclxuICAgICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./reducers/post.js\n");

/***/ })

})