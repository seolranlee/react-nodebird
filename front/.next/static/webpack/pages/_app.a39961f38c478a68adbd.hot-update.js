webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_POST_REQUEST\", function() { return ADD_POST_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_POST_SUCCESS\", function() { return ADD_POST_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_POST_FAILURE\", function() { return ADD_POST_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_COMMENT_REQUEST\", function() { return ADD_COMMENT_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_COMMENT_SUCCESS\", function() { return ADD_COMMENT_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_COMMENT_FAILURE\", function() { return ADD_COMMENT_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addPost\", function() { return addPost; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addComment\", function() { return addComment; });\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shortid */ \"./node_modules/shortid/index.js\");\n/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n// reducer중심으로 생각.\n// 화면이 아니라 데이터를 먼저 구성.\n\nvar initialState = {\n  mainPosts: [{\n    id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),\n    User: {\n      id: 1,\n      nickname: 'seolranlee'\n    },\n    content: '첫 번째 게시글 #해시태그 #익스프레스',\n    Images: [{\n      src: 'https://ccdn.lezhin.com/v2/banners/explore_boys/images/17467.webp?updated=1634792020109'\n    }, {\n      src: 'https://ccdn.lezhin.com/v2/banners/explore_boys/images/17630.webp?updated=1635250994567'\n    }, {\n      src: 'https://ccdn.lezhin.com/v2/banners/explore_boys/images/17303.webp?updated=1634553971673s'\n    }],\n    Comments: [{\n      id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),\n      User: {\n        nickname: 'user1'\n      },\n      content: '코멘트1'\n    }, {\n      id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),\n      User: {\n        nickname: 'user2'\n      },\n      content: '코멘트2'\n    }]\n  }],\n  imagePaths: [],\n  addPostLoading: false,\n  addPostDone: false,\n  addPostError: null,\n  addCommentLoading: false,\n  addCommentDone: false,\n  addCommentError: null\n}; // 액션 이름을 상수로 빼둔다=>오타확률을 낮춘다\n\nvar ADD_POST_REQUEST = 'ADD_POST_REQUEST';\nvar ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';\nvar ADD_POST_FAILURE = 'ADD_POST_FAILURE';\nvar ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';\nvar ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';\nvar ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';\nvar addPost = function addPost(data) {\n  return {\n    type: ADD_POST_REQUEST,\n    data: data\n  };\n};\nvar addComment = function addComment(data) {\n  return {\n    type: ADD_COMMENT_REQUEST,\n    data: data\n  };\n};\n\nvar dummyPost = function dummyPost(data) {\n  return {\n    // 겹치지 않는 랜덤한 아이디를 생성해서 return해주는 npm.\n    id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),\n    content: data,\n    User: {\n      id: 1,\n      nickname: 'foo'\n    },\n    Images: [],\n    Comments: []\n  };\n};\n\nvar dummyComment = function dummyComment(data) {\n  return {\n    id: shortid.generate(),\n    content: data,\n    User: {\n      id: 1,\n      nickname: 'seolranlee'\n    }\n  };\n};\n\nvar reducer = function reducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case ADD_POST_REQUEST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        addPostLoading: true,\n        addPostDone: false,\n        addPostError: null\n      });\n\n    case ADD_POST_SUCCESS:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        // dummyPost를 앞에다가 추가해줘야 새로운 게시글이 위에 올라간다.\n        mainPosts: [dummyPost(action.data)].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.mainPosts)),\n        addPostLoading: false,\n        addPostDone: true\n      });\n\n    case ADD_POST_FAILURE:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        addPostLoading: true,\n        addPostError: action.error\n      });\n\n    case ADD_COMMENT_REQUEST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        addCommentLoading: true,\n        addCommentDone: false,\n        addCommentError: null\n      });\n\n    case ADD_COMMENT_SUCCESS:\n      var postIndex = state.mainPosts.findIndex(function (v) {\n        return v.id === action.data.postId;\n      });\n\n      var post = _objectSpread({}, state.mainPosts[postIndex]);\n\n      post.Comments = [dummyComment(action.data.content)].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(post.Comments));\n\n      var mainPosts = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.mainPosts);\n\n      mainPosts[postIndex] = post;\n      return _objectSpread(_objectSpread({}, state), {}, {\n        mainPosts: mainPosts,\n        addCommentLoading: false,\n        addCommentDone: true\n      });\n\n    case ADD_COMMENT_FAILURE:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        addCommentLoading: true,\n        addCommentError: action.error\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcz9hN2UzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsIm1haW5Qb3N0cyIsImlkIiwic2hvcnRJZCIsImdlbmVyYXRlIiwiVXNlciIsIm5pY2tuYW1lIiwiY29udGVudCIsIkltYWdlcyIsInNyYyIsIkNvbW1lbnRzIiwiaW1hZ2VQYXRocyIsImFkZFBvc3RMb2FkaW5nIiwiYWRkUG9zdERvbmUiLCJhZGRQb3N0RXJyb3IiLCJhZGRDb21tZW50TG9hZGluZyIsImFkZENvbW1lbnREb25lIiwiYWRkQ29tbWVudEVycm9yIiwiQUREX1BPU1RfUkVRVUVTVCIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwiYWRkUG9zdCIsImRhdGEiLCJ0eXBlIiwiYWRkQ29tbWVudCIsImR1bW15UG9zdCIsImR1bW15Q29tbWVudCIsInNob3J0aWQiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJlcnJvciIsInBvc3RJbmRleCIsImZpbmRJbmRleCIsInYiLCJwb3N0SWQiLCJwb3N0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxZQUFZLEdBQUc7QUFDMUJDLFdBQVMsRUFBRSxDQUFDO0FBQ1ZDLE1BQUUsRUFBRUMsOENBQU8sQ0FBQ0MsUUFBUixFQURNO0FBRVZDLFFBQUksRUFBRTtBQUNKSCxRQUFFLEVBQUUsQ0FEQTtBQUVKSSxjQUFRLEVBQUU7QUFGTixLQUZJO0FBTVZDLFdBQU8sRUFBRSx1QkFOQztBQU9WQyxVQUFNLEVBQUUsQ0FDTjtBQUNFQyxTQUFHLEVBQUU7QUFEUCxLQURNLEVBSU47QUFDRUEsU0FBRyxFQUFFO0FBRFAsS0FKTSxFQU9OO0FBQ0VBLFNBQUcsRUFBRTtBQURQLEtBUE0sQ0FQ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Q0M7QUFIdkI7O0FBS0YsU0FBS2IsbUJBQUw7QUFDRSw2Q0FDS1csS0FETDtBQUVFakIseUJBQWlCLEVBQUUsSUFGckI7QUFHRUMsc0JBQWMsRUFBRSxLQUhsQjtBQUlFQyx1QkFBZSxFQUFFO0FBSm5COztBQU1GLFNBQUtLLG1CQUFMO0FBQ0UsVUFBTWEsU0FBUyxHQUFHSCxLQUFLLENBQUMvQixTQUFOLENBQWdCbUMsU0FBaEIsQ0FBMEIsVUFBQ0MsQ0FBRDtBQUFBLGVBQU9BLENBQUMsQ0FBQ25DLEVBQUYsS0FBUytCLE1BQU0sQ0FBQ1IsSUFBUCxDQUFZYSxNQUE1QjtBQUFBLE9BQTFCLENBQWxCOztBQUNBLFVBQU1DLElBQUkscUJBQU9QLEtBQUssQ0FBQy9CLFNBQU4sQ0FBZ0JrQyxTQUFoQixDQUFQLENBQVY7O0FBQ0FJLFVBQUksQ0FBQzdCLFFBQUwsSUFBa0JtQixZQUFZLENBQUNJLE1BQU0sQ0FBQ1IsSUFBUCxDQUFZbEIsT0FBYixDQUE5QixzR0FBd0RnQyxJQUFJLENBQUM3QixRQUE3RDs7QUFDQSxVQUFNVCxTQUFTLEdBQUcsNkZBQUkrQixLQUFLLENBQUMvQixTQUFiLENBQWY7O0FBQ0FBLGVBQVMsQ0FBQ2tDLFNBQUQsQ0FBVCxHQUF1QkksSUFBdkI7QUFDQSw2Q0FDS1AsS0FETDtBQUVFL0IsaUJBQVMsRUFBVEEsU0FGRjtBQUdFYyx5QkFBaUIsRUFBRSxLQUhyQjtBQUlFQyxzQkFBYyxFQUFFO0FBSmxCOztBQU1GLFNBQUtPLG1CQUFMO0FBQ0UsNkNBQ0tTLEtBREw7QUFFRWpCLHlCQUFpQixFQUFFLElBRnJCO0FBR0VFLHVCQUFlLEVBQUVnQixNQUFNLENBQUNDO0FBSDFCOztBQUtGO0FBQ0UsYUFBT0YsS0FBUDtBQWhESjtBQWtERCxDQW5ERDs7QUFxRGVELHNFQUFmIiwiZmlsZSI6Ii4vcmVkdWNlcnMvcG9zdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHJlZHVjZXLspJHsi6zsnLzroZwg7IOd6rCBLlxuLy8g7ZmU66m07J20IOyVhOuLiOudvCDrjbDsnbTthLDrpbwg66i87KCAIOq1rOyEsS5cbmltcG9ydCBzaG9ydElkIGZyb20gJ3Nob3J0aWQnXG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIG1haW5Qb3N0czogW3tcbiAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxuICAgIFVzZXI6IHtcbiAgICAgIGlkOiAxLFxuICAgICAgbmlja25hbWU6ICdzZW9scmFubGVlJ1xuICAgIH0sXG4gICAgY29udGVudDogJ+yyqyDrsojsp7gg6rKM7Iuc6riAICPtlbTsi5ztg5zqt7ggI+ydteyKpO2UhOugiOyKpCcsXG4gICAgSW1hZ2VzOiBbXG4gICAgICB7XG4gICAgICAgIHNyYzogJ2h0dHBzOi8vY2Nkbi5sZXpoaW4uY29tL3YyL2Jhbm5lcnMvZXhwbG9yZV9ib3lzL2ltYWdlcy8xNzQ2Ny53ZWJwP3VwZGF0ZWQ9MTYzNDc5MjAyMDEwOSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNyYzogJ2h0dHBzOi8vY2Nkbi5sZXpoaW4uY29tL3YyL2Jhbm5lcnMvZXhwbG9yZV9ib3lzL2ltYWdlcy8xNzYzMC53ZWJwP3VwZGF0ZWQ9MTYzNTI1MDk5NDU2NydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNyYzogJ2h0dHBzOi8vY2Nkbi5sZXpoaW4uY29tL3YyL2Jhbm5lcnMvZXhwbG9yZV9ib3lzL2ltYWdlcy8xNzMwMy53ZWJwP3VwZGF0ZWQ9MTYzNDU1Mzk3MTY3M3MnXG4gICAgICB9XG4gICAgXSxcbiAgICBDb21tZW50czogW1xuICAgICAge1xuICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxuICAgICAgICBVc2VyOiB7XG4gICAgICAgICAgbmlja25hbWU6ICd1c2VyMSdcbiAgICAgICAgfSxcbiAgICAgICAgY29udGVudDogJ+y9lOupmO2KuDEnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxuICAgICAgICBVc2VyOiB7XG4gICAgICAgICAgbmlja25hbWU6ICd1c2VyMidcbiAgICAgICAgfSxcbiAgICAgICAgY29udGVudDogJ+y9lOupmO2KuDInXG4gICAgICB9XG4gICAgXVxuICB9XSxcbiAgaW1hZ2VQYXRoczogW10sXG4gIGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcbiAgYWRkUG9zdERvbmU6IGZhbHNlLFxuICBhZGRQb3N0RXJyb3I6IG51bGwsXG4gIGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcbiAgYWRkQ29tbWVudERvbmU6IGZhbHNlLFxuICBhZGRDb21tZW50RXJyb3I6IG51bGxcbn1cblxuLy8g7JWh7IWYIOydtOumhOydhCDsg4HsiJjroZwg67m865GU64ukPT7smKTtg4DtmZXrpaDsnYQg64Ku7LaY64ukXG5leHBvcnQgY29uc3QgQUREX1BPU1RfUkVRVUVTVCA9ICdBRERfUE9TVF9SRVFVRVNUJ1xuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1NVQ0NFU1MgPSAnQUREX1BPU1RfU1VDQ0VTUydcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9GQUlMVVJFID0gJ0FERF9QT1NUX0ZBSUxVUkUnXG5cbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9SRVFVRVNUID0gJ0FERF9DT01NRU5UX1JFUVVFU1QnXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUyA9ICdBRERfQ09NTUVOVF9TVUNDRVNTJ1xuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUxVUkUgPSAnQUREX0NPTU1FTlRfRkFJTFVSRSdcblxuZXhwb3J0IGNvbnN0IGFkZFBvc3QgPSAoZGF0YSkgPT4gKHtcbiAgdHlwZTogQUREX1BPU1RfUkVRVUVTVCxcbiAgZGF0YVxufSlcblxuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnQgPSAoZGF0YSkgPT4gKHtcbiAgdHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCxcbiAgZGF0YVxufSlcblxuY29uc3QgZHVtbXlQb3N0ID0gKGRhdGEpID0+ICh7XG4gIC8vIOqyuey5mOyngCDslYrripQg656c642k7ZWcIOyVhOydtOuUlOulvCDsg53shLHtlbTshJwgcmV0dXJu7ZW07KO864qUIG5wbS5cbiAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcbiAgY29udGVudDogZGF0YSxcbiAgVXNlcjoge1xuICAgIGlkOiAxLFxuICAgIG5pY2tuYW1lOiAnZm9vJ1xuICB9LFxuICBJbWFnZXM6IFtdLFxuICBDb21tZW50czogW11cbn0pXG5cbmNvbnN0IGR1bW15Q29tbWVudCA9IChkYXRhKSA9PiAoe1xuICBpZDogc2hvcnRpZC5nZW5lcmF0ZSgpLFxuICBjb250ZW50OiBkYXRhLFxuICBVc2VyOiB7XG4gICAgaWQ6IDEsXG4gICAgbmlja25hbWU6ICdzZW9scmFubGVlJ1xuICB9XG59KVxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEFERF9QT1NUX1JFUVVFU1Q6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgYWRkUG9zdExvYWRpbmc6IHRydWUsXG4gICAgICAgIGFkZFBvc3REb25lOiBmYWxzZSxcbiAgICAgICAgYWRkUG9zdEVycm9yOiBudWxsXG4gICAgICB9XG4gICAgY2FzZSBBRERfUE9TVF9TVUNDRVNTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIC8vIGR1bW15UG9zdOulvCDslZ7sl5Dri6TqsIAg7LaU6rCA7ZW07KSY7JW8IOyDiOuhnOyatCDqsozsi5zquIDsnbQg7JyE7JeQIOyYrOudvOqwhOuLpC5cbiAgICAgICAgbWFpblBvc3RzOiBbZHVtbXlQb3N0KGFjdGlvbi5kYXRhKSwgLi4uc3RhdGUubWFpblBvc3RzXSxcbiAgICAgICAgYWRkUG9zdExvYWRpbmc6IGZhbHNlLFxuICAgICAgICBhZGRQb3N0RG9uZTogdHJ1ZVxuICAgICAgfVxuICAgIGNhc2UgQUREX1BPU1RfRkFJTFVSRTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBhZGRQb3N0TG9hZGluZzogdHJ1ZSxcbiAgICAgICAgYWRkUG9zdEVycm9yOiBhY3Rpb24uZXJyb3JcbiAgICAgIH1cbiAgICBjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgYWRkQ29tbWVudExvYWRpbmc6IHRydWUsXG4gICAgICAgIGFkZENvbW1lbnREb25lOiBmYWxzZSxcbiAgICAgICAgYWRkQ29tbWVudEVycm9yOiBudWxsXG4gICAgICB9XG4gICAgY2FzZSBBRERfQ09NTUVOVF9TVUNDRVNTOlxuICAgICAgY29uc3QgcG9zdEluZGV4ID0gc3RhdGUubWFpblBvc3RzLmZpbmRJbmRleCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkKVxuICAgICAgY29uc3QgcG9zdCA9IHsuLi5zdGF0ZS5tYWluUG9zdHNbcG9zdEluZGV4XX1cbiAgICAgIHBvc3QuQ29tbWVudHMgPSAgW2R1bW15Q29tbWVudChhY3Rpb24uZGF0YS5jb250ZW50KSwgLi4ucG9zdC5Db21tZW50c11cbiAgICAgIGNvbnN0IG1haW5Qb3N0cyA9IFsuLi5zdGF0ZS5tYWluUG9zdHNdXG4gICAgICBtYWluUG9zdHNbcG9zdEluZGV4XSA9IHBvc3RcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBtYWluUG9zdHMsXG4gICAgICAgIGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgYWRkQ29tbWVudERvbmU6IHRydWVcbiAgICAgIH1cbiAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgYWRkQ29tbWVudExvYWRpbmc6IHRydWUsXG4gICAgICAgIGFkZENvbW1lbnRFcnJvcjogYWN0aW9uLmVycm9yXG4gICAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./reducers/post.js\n");

/***/ })

})