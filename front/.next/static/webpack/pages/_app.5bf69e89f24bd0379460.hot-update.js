webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_POST_REQUEST\", function() { return ADD_POST_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_POST_SUCCESS\", function() { return ADD_POST_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_POST_FAILURE\", function() { return ADD_POST_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_COMMENT_REQUEST\", function() { return ADD_COMMENT_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_COMMENT_SUCCESS\", function() { return ADD_COMMENT_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_COMMENT_FAILURE\", function() { return ADD_COMMENT_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addPost\", function() { return addPost; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addComment\", function() { return addComment; });\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shortid */ \"./node_modules/shortid/index.js\");\n/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n // reducer중심으로 생각.\n// 화면이 아니라 데이터를 먼저 구성.\n\nvar initialState = {\n  mainPosts: [{\n    id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),\n    User: {\n      id: 1,\n      nickname: 'seolranlee'\n    },\n    content: '첫 번째 게시글 #해시태그 #익스프레스',\n    Images: [{\n      id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),\n      src: 'https://ccdn.lezhin.com/v2/banners/explore_boys/images/17467.webp?updated=1634792020109'\n    }, {\n      id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),\n      src: 'https://ccdn.lezhin.com/v2/banners/explore_boys/images/17630.webp?updated=1635250994567'\n    }, {\n      id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),\n      src: 'https://ccdn.lezhin.com/v2/banners/explore_boys/images/17303.webp?updated=1634553971673s'\n    }],\n    Comments: [{\n      id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),\n      User: {\n        id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),\n        nickname: 'user1'\n      },\n      content: '코멘트1'\n    }, {\n      id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),\n      User: {\n        id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),\n        nickname: 'user2'\n      },\n      content: '코멘트2'\n    }]\n  }],\n  imagePaths: [],\n  addPostLoading: false,\n  addPostDone: false,\n  addPostError: null,\n  addCommentLoading: false,\n  addCommentDone: false,\n  addCommentError: null\n}; // 액션 이름을 상수로 빼둔다=>오타확률을 낮춘다\n\nvar ADD_POST_REQUEST = 'ADD_POST_REQUEST';\nvar ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';\nvar ADD_POST_FAILURE = 'ADD_POST_FAILURE';\nvar ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';\nvar ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';\nvar ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';\nvar addPost = function addPost(data) {\n  return {\n    type: ADD_POST_REQUEST,\n    data: data\n  };\n};\nvar addComment = function addComment(data) {\n  return {\n    type: ADD_COMMENT_REQUEST,\n    data: data\n  };\n};\n\nvar dummyPost = function dummyPost(data) {\n  return {\n    id: data.id,\n    content: data.content,\n    User: {\n      id: 1,\n      nickname: 'foo'\n    },\n    Images: [],\n    Comments: []\n  };\n};\n\nvar dummyComment = function dummyComment(data) {\n  return {\n    id: shortid.generate(),\n    content: data,\n    User: {\n      id: 1,\n      nickname: 'seolranlee'\n    }\n  };\n};\n\nvar reducer = function reducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case ADD_POST_REQUEST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        addPostLoading: true,\n        addPostDone: false,\n        addPostError: null\n      });\n\n    case ADD_POST_SUCCESS:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        // dummyPost를 앞에다가 추가해줘야 새로운 게시글이 위에 올라간다.\n        mainPosts: [dummyPost(action.data)].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.mainPosts)),\n        addPostLoading: false,\n        addPostDone: true\n      });\n\n    case ADD_POST_FAILURE:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        addPostLoading: true,\n        addPostError: action.error\n      });\n\n    case ADD_COMMENT_REQUEST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        addCommentLoading: true,\n        addCommentDone: false,\n        addCommentError: null\n      });\n\n    case ADD_COMMENT_SUCCESS:\n      var postIndex = state.mainPosts.findIndex(function (v) {\n        return v.id === action.data.postId;\n      });\n\n      var post = _objectSpread({}, state.mainPosts[postIndex]);\n\n      post.Comments = [dummyComment(action.data.content)].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(post.Comments));\n\n      var mainPosts = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.mainPosts);\n\n      mainPosts[postIndex] = post;\n      return _objectSpread(_objectSpread({}, state), {}, {\n        mainPosts: mainPosts,\n        addCommentLoading: false,\n        addCommentDone: true\n      });\n\n    case ADD_COMMENT_FAILURE:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        addCommentLoading: true,\n        addCommentError: action.error\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcz9hN2UzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsIm1haW5Qb3N0cyIsImlkIiwic2hvcnRJZCIsImdlbmVyYXRlIiwiVXNlciIsIm5pY2tuYW1lIiwiY29udGVudCIsIkltYWdlcyIsInNyYyIsIkNvbW1lbnRzIiwiaW1hZ2VQYXRocyIsImFkZFBvc3RMb2FkaW5nIiwiYWRkUG9zdERvbmUiLCJhZGRQb3N0RXJyb3IiLCJhZGRDb21tZW50TG9hZGluZyIsImFkZENvbW1lbnREb25lIiwiYWRkQ29tbWVudEVycm9yIiwiQUREX1BPU1RfUkVRVUVTVCIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwiYWRkUG9zdCIsImRhdGEiLCJ0eXBlIiwiYWRkQ29tbWVudCIsImR1bW15UG9zdCIsImR1bW15Q29tbWVudCIsInNob3J0aWQiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJlcnJvciIsInBvc3RJbmRleCIsImZpbmRJbmRleCIsInYiLCJwb3N0SWQiLCJwb3N0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTtBQUNBOztBQUVPLElBQU1BLFlBQVksR0FBRztBQUMxQkMsV0FBUyxFQUFFLENBQUM7QUFDVkMsTUFBRSxFQUFFQyw4Q0FBTyxDQUFDQyxRQUFSLEVBRE07QUFFVkMsUUFBSSxFQUFFO0FBQ0pILFFBQUUsRUFBRSxDQURBO0FBRUpJLGNBQVEsRUFBRTtBQUZOLEtBRkk7QUFNVkMsV0FBTyxFQUFFLHVCQU5DO0FBT1ZDLFVBQU0sRUFBRSxDQUNOO0FBQ0VOLFFBQUUsRUFBRUMsOENBQU8sQ0FBQ0MsUUFBUixFQUROO0FBRUVLLFNBQUcsRUFBRTtBQUZQLEtBRE0sRUFLTjtBQUNFUCxRQUFFLEVBQUVDLDhDQUFPLENB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QUVnQixNQUFNLENBQUNDO0FBSDFCOztBQUtGO0FBQ0UsYUFBT0YsS0FBUDtBQWhESjtBQWtERCxDQW5ERDs7QUFxRGVELHNFQUFmIiwiZmlsZSI6Ii4vcmVkdWNlcnMvcG9zdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzaG9ydElkIGZyb20gJ3Nob3J0aWQnXG4vLyByZWR1Y2Vy7KSR7Ius7Jy866GcIOyDneqwgS5cbi8vIO2ZlOuptOydtCDslYTri4jrnbwg642w7J207YSw66W8IOuovOyggCDqtazshLEuXG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIG1haW5Qb3N0czogW3tcbiAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxuICAgIFVzZXI6IHtcbiAgICAgIGlkOiAxLFxuICAgICAgbmlja25hbWU6ICdzZW9scmFubGVlJ1xuICAgIH0sXG4gICAgY29udGVudDogJ+yyqyDrsojsp7gg6rKM7Iuc6riAICPtlbTsi5ztg5zqt7ggI+ydteyKpO2UhOugiOyKpCcsXG4gICAgSW1hZ2VzOiBbXG4gICAgICB7XG4gICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXG4gICAgICAgIHNyYzogJ2h0dHBzOi8vY2Nkbi5sZXpoaW4uY29tL3YyL2Jhbm5lcnMvZXhwbG9yZV9ib3lzL2ltYWdlcy8xNzQ2Ny53ZWJwP3VwZGF0ZWQ9MTYzNDc5MjAyMDEwOSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXG4gICAgICAgIHNyYzogJ2h0dHBzOi8vY2Nkbi5sZXpoaW4uY29tL3YyL2Jhbm5lcnMvZXhwbG9yZV9ib3lzL2ltYWdlcy8xNzYzMC53ZWJwP3VwZGF0ZWQ9MTYzNTI1MDk5NDU2NydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXG4gICAgICAgIHNyYzogJ2h0dHBzOi8vY2Nkbi5sZXpoaW4uY29tL3YyL2Jhbm5lcnMvZXhwbG9yZV9ib3lzL2ltYWdlcy8xNzMwMy53ZWJwP3VwZGF0ZWQ9MTYzNDU1Mzk3MTY3M3MnXG4gICAgICB9XG4gICAgXSxcbiAgICBDb21tZW50czogW1xuICAgICAge1xuICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxuICAgICAgICBVc2VyOiB7XG4gICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcbiAgICAgICAgICBuaWNrbmFtZTogJ3VzZXIxJ1xuICAgICAgICB9LFxuICAgICAgICBjb250ZW50OiAn7L2U66mY7Yq4MSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXG4gICAgICAgIFVzZXI6IHtcbiAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxuICAgICAgICAgIG5pY2tuYW1lOiAndXNlcjInXG4gICAgICAgIH0sXG4gICAgICAgIGNvbnRlbnQ6ICfsvZTrqZjtirgyJ1xuICAgICAgfVxuICAgIF1cbiAgfV0sXG4gIGltYWdlUGF0aHM6IFtdLFxuICBhZGRQb3N0TG9hZGluZzogZmFsc2UsXG4gIGFkZFBvc3REb25lOiBmYWxzZSxcbiAgYWRkUG9zdEVycm9yOiBudWxsLFxuICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXG4gIGFkZENvbW1lbnREb25lOiBmYWxzZSxcbiAgYWRkQ29tbWVudEVycm9yOiBudWxsXG59XG5cbi8vIOyVoeyFmCDsnbTrpoTsnYQg7IOB7IiY66GcIOu5vOuRlOuLpD0+7Jik7YOA7ZmV66Wg7J2EIOuCruy2mOuLpFxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1JFUVVFU1QgPSAnQUREX1BPU1RfUkVRVUVTVCdcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9TVUNDRVNTID0gJ0FERF9QT1NUX1NVQ0NFU1MnXG5leHBvcnQgY29uc3QgQUREX1BPU1RfRkFJTFVSRSA9ICdBRERfUE9TVF9GQUlMVVJFJ1xuXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfUkVRVUVTVCA9ICdBRERfQ09NTUVOVF9SRVFVRVNUJ1xuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1NVQ0NFU1MgPSAnQUREX0NPTU1FTlRfU1VDQ0VTUydcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9GQUlMVVJFID0gJ0FERF9DT01NRU5UX0ZBSUxVUkUnXG5cbmV4cG9ydCBjb25zdCBhZGRQb3N0ID0gKGRhdGEpID0+ICh7XG4gIHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsXG4gIGRhdGFcbn0pXG5cbmV4cG9ydCBjb25zdCBhZGRDb21tZW50ID0gKGRhdGEpID0+ICh7XG4gIHR5cGU6IEFERF9DT01NRU5UX1JFUVVFU1QsXG4gIGRhdGFcbn0pXG5cbmNvbnN0IGR1bW15UG9zdCA9IChkYXRhKSA9PiAoe1xuICBpZDogZGF0YS5pZCxcbiAgY29udGVudDogZGF0YS5jb250ZW50LFxuICBVc2VyOiB7XG4gICAgaWQ6IDEsXG4gICAgbmlja25hbWU6ICdmb28nXG4gIH0sXG4gIEltYWdlczogW10sXG4gIENvbW1lbnRzOiBbXVxufSlcblxuY29uc3QgZHVtbXlDb21tZW50ID0gKGRhdGEpID0+ICh7XG4gIGlkOiBzaG9ydGlkLmdlbmVyYXRlKCksXG4gIGNvbnRlbnQ6IGRhdGEsXG4gIFVzZXI6IHtcbiAgICBpZDogMSxcbiAgICBuaWNrbmFtZTogJ3Nlb2xyYW5sZWUnXG4gIH1cbn0pXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQUREX1BPU1RfUkVRVUVTVDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBhZGRQb3N0TG9hZGluZzogdHJ1ZSxcbiAgICAgICAgYWRkUG9zdERvbmU6IGZhbHNlLFxuICAgICAgICBhZGRQb3N0RXJyb3I6IG51bGxcbiAgICAgIH1cbiAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgLy8gZHVtbXlQb3N066W8IOyVnuyXkOuLpOqwgCDstpTqsIDtlbTspJjslbwg7IOI66Gc7Jq0IOqyjOyLnOq4gOydtCDsnITsl5Ag7Jis65286rCE64ukLlxuICAgICAgICBtYWluUG9zdHM6IFtkdW1teVBvc3QoYWN0aW9uLmRhdGEpLCAuLi5zdGF0ZS5tYWluUG9zdHNdLFxuICAgICAgICBhZGRQb3N0TG9hZGluZzogZmFsc2UsXG4gICAgICAgIGFkZFBvc3REb25lOiB0cnVlXG4gICAgICB9XG4gICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGFkZFBvc3RMb2FkaW5nOiB0cnVlLFxuICAgICAgICBhZGRQb3N0RXJyb3I6IGFjdGlvbi5lcnJvclxuICAgICAgfVxuICAgIGNhc2UgQUREX0NPTU1FTlRfUkVRVUVTVDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBhZGRDb21tZW50TG9hZGluZzogdHJ1ZSxcbiAgICAgICAgYWRkQ29tbWVudERvbmU6IGZhbHNlLFxuICAgICAgICBhZGRDb21tZW50RXJyb3I6IG51bGxcbiAgICAgIH1cbiAgICBjYXNlIEFERF9DT01NRU5UX1NVQ0NFU1M6XG4gICAgICBjb25zdCBwb3N0SW5kZXggPSBzdGF0ZS5tYWluUG9zdHMuZmluZEluZGV4KCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5wb3N0SWQpXG4gICAgICBjb25zdCBwb3N0ID0gey4uLnN0YXRlLm1haW5Qb3N0c1twb3N0SW5kZXhdfVxuICAgICAgcG9zdC5Db21tZW50cyA9ICBbZHVtbXlDb21tZW50KGFjdGlvbi5kYXRhLmNvbnRlbnQpLCAuLi5wb3N0LkNvbW1lbnRzXVxuICAgICAgY29uc3QgbWFpblBvc3RzID0gWy4uLnN0YXRlLm1haW5Qb3N0c11cbiAgICAgIG1haW5Qb3N0c1twb3N0SW5kZXhdID0gcG9zdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIG1haW5Qb3N0cyxcbiAgICAgICAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxuICAgICAgICBhZGRDb21tZW50RG9uZTogdHJ1ZVxuICAgICAgfVxuICAgIGNhc2UgQUREX0NPTU1FTlRfRkFJTFVSRTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBhZGRDb21tZW50TG9hZGluZzogdHJ1ZSxcbiAgICAgICAgYWRkQ29tbWVudEVycm9yOiBhY3Rpb24uZXJyb3JcbiAgICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./reducers/post.js\n");

/***/ }),

/***/ "./sagas/post.js":
/*!***********************!*\
  !*** ./sagas/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return postSaga; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @redux-saga/core/effects */ \"./node_modules/@redux-saga/core/dist/redux-saga-effects.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/post */ \"./reducers/post.js\");\n/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ \"./reducers/user.js\");\n/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shortid */ \"./node_modules/shortid/index.js\");\n/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(addPost),\n    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(addComment),\n    _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchAddPosts),\n    _marked4 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchAddComment),\n    _marked5 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(postSaga);\n\n\n\n\n\n // addPost\n\nfunction addPostAPI(data) {\n  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/post', data);\n}\n\nfunction addPost(action) {\n  var id;\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function addPost$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.prev = 0;\n          _context.next = 3;\n          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__[\"delay\"])(1000);\n\n        case 3:\n          // 겹치지 않는 랜덤한 아이디를 생성해서 return해주는 npm.\n          id = shortid__WEBPACK_IMPORTED_MODULE_5___default.a.generate();\n          _context.next = 6;\n          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__[\"ADD_POST_SUCCESS\"],\n            data: {\n              id: id,\n              content: action.data\n            }\n          });\n\n        case 6:\n          _context.next = 8;\n          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__[\"ADD_POST_TO_ME\"],\n            data: id\n          });\n\n        case 8:\n          _context.next = 14;\n          break;\n\n        case 10:\n          _context.prev = 10;\n          _context.t0 = _context[\"catch\"](0);\n          _context.next = 14;\n          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__[\"ADD_POST_FAILURE\"],\n            error: _context.t0.response.data\n          });\n\n        case 14:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _marked, null, [[0, 10]]);\n} // addComment\n\n\nfunction addCommentAPI(data) {\n  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.Comment('/api/post/${data.postId}/comment', data);\n}\n\nfunction addComment(action) {\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function addComment$(_context2) {\n    while (1) {\n      switch (_context2.prev = _context2.next) {\n        case 0:\n          _context2.prev = 0;\n          _context2.next = 3;\n          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__[\"delay\"])(1000);\n\n        case 3:\n          _context2.next = 5;\n          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__[\"ADD_COMMENT_SUCCESS\"],\n            data: action.data\n          });\n\n        case 5:\n          _context2.next = 11;\n          break;\n\n        case 7:\n          _context2.prev = 7;\n          _context2.t0 = _context2[\"catch\"](0);\n          _context2.next = 11;\n          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__[\"ADD_COMMENT_FAILURE\"],\n            error: _context2.t0.response.data\n          });\n\n        case 11:\n        case \"end\":\n          return _context2.stop();\n      }\n    }\n  }, _marked2, null, [[0, 7]]);\n}\n\nfunction watchAddPosts() {\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchAddPosts$(_context3) {\n    while (1) {\n      switch (_context3.prev = _context3.next) {\n        case 0:\n          _context3.next = 2;\n          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__[\"takeLatest\"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__[\"ADD_POST_REQUEST\"], addPost);\n\n        case 2:\n        case \"end\":\n          return _context3.stop();\n      }\n    }\n  }, _marked3);\n}\n\nfunction watchAddComment() {\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchAddComment$(_context4) {\n    while (1) {\n      switch (_context4.prev = _context4.next) {\n        case 0:\n          _context4.next = 2;\n          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__[\"takeLatest\"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__[\"ADD_COMMENT_REQUEST\"], addComment);\n\n        case 2:\n        case \"end\":\n          return _context4.stop();\n      }\n    }\n  }, _marked4);\n}\n\nfunction postSaga() {\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function postSaga$(_context5) {\n    while (1) {\n      switch (_context5.prev = _context5.next) {\n        case 0:\n          _context5.next = 2;\n          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__[\"all\"])([Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__[\"fork\"])(watchAddPosts), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__[\"fork\"])(watchAddComment)]);\n\n        case 2:\n        case \"end\":\n          return _context5.stop();\n      }\n    }\n  }, _marked5);\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvcG9zdC5qcz8zYWJhIl0sIm5hbWVzIjpbImFkZFBvc3QiLCJhZGRDb21tZW50Iiwid2F0Y2hBZGRQb3N0cyIsIndhdGNoQWRkQ29tbWVudCIsInBvc3RTYWdhIiwiYWRkUG9zdEFQSSIsImRhdGEiLCJheGlvcyIsInBvc3QiLCJhY3Rpb24iLCJkZWxheSIsImlkIiwic2hvcnRJZCIsImdlbmVyYXRlIiwicHV0IiwidHlwZSIsIkFERF9QT1NUX1NVQ0NFU1MiLCJjb250ZW50IiwiQUREX1BPU1RfVE9fTUUiLCJBRERfUE9TVF9GQUlMVVJFIiwiZXJyb3IiLCJyZXNwb25zZSIsImFkZENvbW1lbnRBUEkiLCJDb21tZW50IiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJ0YWtlTGF0ZXN0IiwiQUREX1BPU1RfUkVRVUVTVCIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJhbGwiLCJmb3JrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O2tHQWNVQSxPO21HQWdDQUMsVTttR0FnQkFDLGE7bUdBSUFDLGU7bUdBSWVDLFE7O0FBdEV6QjtBQUNBO0FBQ0E7QUFJQTtDQUdBOztBQUNBLFNBQVNDLFVBQVQsQ0FBb0JDLElBQXBCLEVBQTBCO0FBQ3hCLFNBQU9DLDRDQUFLLENBQUNDLElBQU4sQ0FBVyxXQUFYLEVBQXdCRixJQUF4QixDQUFQO0FBQ0Q7O0FBRUQsU0FBVU4sT0FBVixDQUFrQlMsTUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdJLGlCQUFNQyxzRUFBSyxDQUFDLElBQUQsQ0FBWDs7QUFISjtBQUlJO0FBQ01DLFlBTFYsR0FLZUMsOENBQU8sQ0FBQ0MsUUFBUixFQUxmO0FBQUE7QUFNSSxpQkFBTUMsb0VBQUcsQ0FBQztBQUNSQyxnQkFBSSxFQUFFQywrREFERTtBQUVSVixnQkFBSSxFQUFFO0FBQ0pLLGdCQUFFLEVBQUZBLEVBREk7QUFFSk0scUJBQU8sRUFBRVIsTUFBTSxDQUFDSDtBQUZaO0FBRkUsV0FBRCxDQUFUOztBQU5KO0FBQUE7QUFlSSxpQkFBTVEsb0VBQUcsQ0FBQztBQUNSQyxnQkFBSSxFQUFFRyw2REFERTtBQUVSWixnQkFBSSxFQUFFSztBQUZFLFdBQUQsQ0FBVDs7QUFmSjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFvQkksaUJBQU1HLG9FQUFHLENBQUM7QUFDUkMsZ0JBQUksRUFBRUksK0RBREU7QUFFUkMsaUJBQUssRUFBRSxZQUFJQyxRQUFKLENBQWFmO0FBRlosV0FBRCxDQUFUOztBQXBCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDLENBMkJBOzs7QUFDQSxTQUFTZ0IsYUFBVCxDQUF1QmhCLElBQXZCLEVBQTZCO0FBQzNCLFNBQU9DLDRDQUFLLENBQUNnQixPQUFOLENBQWMsa0NBQWQsRUFBa0RqQixJQUFsRCxDQUFQO0FBQ0Q7O0FBRUQsU0FBVUwsVUFBVixDQUFxQlEsTUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHSSxpQkFBTUMsc0VBQUssQ0FBQyxJQUFELENBQVg7O0FBSEo7QUFBQTtBQUlJLGlCQUFNSSxvRUFBRyxDQUFDO0FBQ1JDLGdCQUFJLEVBQUVTLGtFQURFO0FBRVJsQixnQkFBSSxFQUFFRyxNQUFNLENBQUNIO0FBRkwsV0FBRCxDQUFUOztBQUpKO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNJLGlCQUFNUSxvRUFBRyxDQUFDO0FBQ1JDLGdCQUFJLEVBQUVVLGtFQURFO0FBRVJMLGlCQUFLLEVBQUUsYUFBSUMsUUFBSixDQUFhZjtBQUZaLFdBQUQsQ0FBVDs7QUFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFnQkEsU0FBVUosYUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRSxpQkFBTXdCLDJFQUFVLENBQUNDLCtEQUFELEVBQW1CM0IsT0FBbkIsQ0FBaEI7O0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBSUEsU0FBVUcsZUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRSxpQkFBTXVCLDJFQUFVLENBQUNFLGtFQUFELEVBQXNCM0IsVUFBdEIsQ0FBaEI7O0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBSWUsU0FBVUcsUUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDYixpQkFBTXlCLG9FQUFHLENBQUMsQ0FDUkMscUVBQUksQ0FBQzVCLGFBQUQsQ0FESSxFQUVSNEIscUVBQUksQ0FBQzNCLGVBQUQsQ0FGSSxDQUFELENBQVQ7O0FBRGE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiLi9zYWdhcy9wb3N0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWxsLCBmb3JrLCBjYWxsLCBwdXQsIHRha2VMYXRlc3QsIGRlbGF5IH0gZnJvbSBcIkByZWR1eC1zYWdhL2NvcmUvZWZmZWN0c1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHsgXG4gIEFERF9QT1NUX1JFUVVFU1QsIEFERF9QT1NUX1NVQ0NFU1MsIEFERF9QT1NUX0ZBSUxVUkUsXG4gIEFERF9DT01NRU5UX1JFUVVFU1QsIEFERF9DT01NRU5UX1NVQ0NFU1MsIEFERF9DT01NRU5UX0ZBSUxVUkUgXG59IGZyb20gXCIuLi9yZWR1Y2Vycy9wb3N0XCI7XG5pbXBvcnQgeyBBRERfUE9TVF9UT19NRSB9IGZyb20gXCIuLi9yZWR1Y2Vycy91c2VyXCI7XG5pbXBvcnQgc2hvcnRJZCBmcm9tICdzaG9ydGlkJ1xuXG4vLyBhZGRQb3N0XG5mdW5jdGlvbiBhZGRQb3N0QVBJKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvcG9zdCcsIGRhdGEpXG59XG5cbmZ1bmN0aW9uKiBhZGRQb3N0KGFjdGlvbikge1xuICB0cnkge1xuICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkUG9zdEFQSSwgYWN0aW9uLmRhdGEpXG4gICAgeWllbGQgZGVsYXkoMTAwMClcbiAgICAvLyDqsrnsuZjsp4Ag7JWK64qUIOuenOuNpO2VnCDslYTsnbTrlJTrpbwg7IOd7ISx7ZW07IScIHJldHVybu2VtOyjvOuKlCBucG0uXG4gICAgY29uc3QgaWQgPSBzaG9ydElkLmdlbmVyYXRlKClcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogQUREX1BPU1RfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgaWQsXG4gICAgICAgIGNvbnRlbnQ6IGFjdGlvbi5kYXRhXG4gICAgICB9XG4gICAgfSlcbiAgICAvLyBBRERfUE9TVF9TVUNDRVNTIO2bhCBcbiAgICAvLyBzYWdh64qUIOuPmeyLnOyXkCDsl6zrn6wg7JWh7IWY7J2EIGRpc3BhdGNo7ZWgIOyImCDsnojri6QuXG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IEFERF9QT1NUX1RPX01FLFxuICAgICAgZGF0YTogaWRcbiAgICB9KVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogQUREX1BPU1RfRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YVxuICAgIH0pXG4gIH1cbn1cblxuLy8gYWRkQ29tbWVudFxuZnVuY3Rpb24gYWRkQ29tbWVudEFQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5Db21tZW50KCcvYXBpL3Bvc3QvJHtkYXRhLnBvc3RJZH0vY29tbWVudCcsIGRhdGEpXG59XG5cbmZ1bmN0aW9uKiBhZGRDb21tZW50KGFjdGlvbikge1xuICB0cnkge1xuICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkQ29tbWVudEFQSSwgYWN0aW9uLmRhdGEpXG4gICAgeWllbGQgZGVsYXkoMTAwMClcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogQUREX0NPTU1FTlRfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IGFjdGlvbi5kYXRhXG4gICAgfSlcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IEFERF9DT01NRU5UX0ZBSUxVUkUsXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGFcbiAgICB9KVxuICB9XG59XG5cbmZ1bmN0aW9uKiB3YXRjaEFkZFBvc3RzKCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9QT1NUX1JFUVVFU1QsIGFkZFBvc3QpXG59XG5cbmZ1bmN0aW9uKiB3YXRjaEFkZENvbW1lbnQoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoQUREX0NPTU1FTlRfUkVRVUVTVCwgYWRkQ29tbWVudClcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHBvc3RTYWdhKCkge1xuICB5aWVsZCBhbGwoW1xuICAgIGZvcmsod2F0Y2hBZGRQb3N0cyksXG4gICAgZm9yayh3YXRjaEFkZENvbW1lbnQpXG4gIF0pXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./sagas/post.js\n");

/***/ })

})