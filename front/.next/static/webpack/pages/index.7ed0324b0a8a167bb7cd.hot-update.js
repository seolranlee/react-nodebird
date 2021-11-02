webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PostCard.js":
/*!********************************!*\
  !*** ./components/PostCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"/Users/seolranlee/study/react-nodebird/front/components/PostCard.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar PostCard = function PostCard(_ref) {\n  _s();\n\n  var post = _ref.post;\n\n  // const { me } = useSelector((state) => state.user)\n  // // const id = me && me.id와 같은 문법. 옵셔널 체이닝 연산자. me가 있으면 me.id가 할당되고 없으면 undefined 할당\n  // const id = me?.id\n  // const { id } = useSelector((state) => state.user.me && state.user.me.id)\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useSelector\"])(function (state) {\n    var _state$user$me;\n\n    return (_state$user$me = state.user.me) === null || _state$user$me === void 0 ? void 0 : _state$user$me.id;\n  }),\n      id = _useSelector.id;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_2__[\"Card\"], {\n      cover: post.Images[0] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(PostImages, {\n        images: post.Images\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 34\n      }, _this),\n      actions: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__[\"RetweetOutlined\"], {}, \"retweet\", false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__[\"HeartOutlined\"], {}, \"heart\", false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__[\"MessageOutlined\"], {}, \"commnet\", false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_2__[\"Popover\"], {\n        content: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(ButtonGroup, {\n          children: id && post.User.id === id ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"Fragment\"], {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n              children: \"\\uC218\\uC815\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 26,\n              columnNumber: 21\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n              tyep: \"danger\",\n              children: \"\\uC0AD\\uC81C\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 27,\n              columnNumber: 21\n            }, _this)]\n          }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n            children: \"\\uC2E0\\uACE0\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 29,\n            columnNumber: 21\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 13\n        }, _this),\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__[\"EllipsisOutlined\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 13\n        }, _this)\n      }, \"more\", false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 11\n      }, _this)],\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_2__[\"Card\"].Meta, {\n        avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_2__[\"Avatar\"], {\n          children: post.User.nickname[0]\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 19\n        }, _this),\n        title: post.User.nickname,\n        description: post.content\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(PostCard, \"cU5nkyctemZZKEci2xR5hEayVcQ=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useSelector\"]];\n});\n\n_c = PostCard;\nPostCard.propTypes = {\n  // shape: object 타입을 더 자세히 명시해두고 싶을 때 쓴다.\n  post: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({\n    id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,\n    User: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({\n      id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,\n      nickname: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string\n    }),\n    content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n    createdAt: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,\n    // arrayOf(PropTypes.object): 객체들의 배열이라는 뜻\n    Comments: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object),\n    Images: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object)\n  }).isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostCard);\n\nvar _c;\n\n$RefreshReg$(_c, \"PostCard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcz85MWRiIl0sIm5hbWVzIjpbIlBvc3RDYXJkIiwicG9zdCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJpZCIsIkltYWdlcyIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzaGFwZSIsIm51bWJlciIsInN0cmluZyIsImNyZWF0ZWRBdCIsIm9iamVjdCIsIkNvbW1lbnRzIiwiYXJyYXlPZiIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQWM7QUFBQTs7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7O0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQWVDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBOztBQUFBLDZCQUFXQSxLQUFLLENBQUNDLElBQU4sQ0FBV0MsRUFBdEIsbURBQVcsZUFBZUMsRUFBMUI7QUFBQSxHQUFELENBQTFCO0FBQUEsTUFBUUEsRUFBUixnQkFBUUEsRUFBUjs7QUFFQSxzQkFDRTtBQUFBLDJCQUNFLHFFQUFDLHlDQUFEO0FBQ0UsV0FBSyxFQUFFTCxJQUFJLENBQUNNLE1BQUwsQ0FBWSxDQUFaLGtCQUFrQixxRUFBQyxVQUFEO0FBQVksY0FBTSxFQUFFTixJQUFJLENBQUNNO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEM0I7QUFFRSxhQUFPLEVBQUUsY0FDUCxxRUFBQyxpRUFBRCxNQUFxQixTQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRE8sZUFFUCxxRUFBQywrREFBRCxNQUFtQixPQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRk8sZUFHUCxxRUFBQyxpRUFBRCxNQUFxQixTQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSE8sZUFJUCxxRUFBQyw0Q0FBRDtBQUFvQixlQUFPLGVBQ3pCLHFFQUFDLFdBQUQ7QUFBQSxvQkFDR0QsRUFBRSxJQUFJTCxJQUFJLENBQUNPLElBQUwsQ0FBVUYsRUFBVixLQUFpQkEsRUFBdkIsZ0JBQ0c7QUFBQSxvQ0FDRSxxRUFBQywyQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFLHFFQUFDLDJDQUFEO0FBQVEsa0JBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUEsMEJBREgsZ0JBS0sscUVBQUMsMkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBQUEsK0JBVUUscUVBQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVZGLFNBQWEsTUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSk8sQ0FGWDtBQUFBLDZCQW9CRSxxRUFBQyx5Q0FBRCxDQUFNLElBQU47QUFDRSxjQUFNLGVBQUUscUVBQUMsMkNBQUQ7QUFBQSxvQkFBU0wsSUFBSSxDQUFDTyxJQUFMLENBQVVDLFFBQVYsQ0FBbUIsQ0FBbkI7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURWO0FBRUUsYUFBSyxFQUFFUixJQUFJLENBQUNPLElBQUwsQ0FBVUMsUUFGbkI7QUFHRSxtQkFBVyxFQUFFUixJQUFJLENBQUNTO0FBSHBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFwQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWdDRCxDQXZDRDs7R0FBTVYsUTtVQUtXRSx1RDs7O0tBTFhGLFE7QUF5Q05BLFFBQVEsQ0FBQ1csU0FBVCxHQUFxQjtBQUNuQjtBQUNBVixNQUFJLEVBQUVXLGlEQUFTLENBQUNDLEtBQVYsQ0FBZ0I7QUFDcEJQLE1BQUUsRUFBRU0saURBQVMsQ0FBQ0UsTUFETTtBQUVwQk4sUUFBSSxFQUFFSSxpREFBUyxDQUFDQyxLQUFWLENBQWdCO0FBQ3BCUCxRQUFFLEVBQUVNLGlEQUFTLENBQUNFLE1BRE07QUFFcEJMLGNBQVEsRUFBRUcsaURBQVMsQ0FBQ0c7QUFGQSxLQUFoQixDQUZjO0FBTXBCTCxXQUFPLEVBQUVFLGlEQUFTLENBQUNHLE1BTkM7QUFPcEJDLGFBQVMsRUFBRUosaURBQVMsQ0FBQ0ssTUFQRDtBQVFwQjtBQUNBQyxZQUFRLEVBQUVOLGlEQUFTLENBQUNPLE9BQVYsQ0FBa0JQLGlEQUFTLENBQUNLLE1BQTVCLENBVFU7QUFVcEJWLFVBQU0sRUFBRUssaURBQVMsQ0FBQ08sT0FBVixDQUFrQlAsaURBQVMsQ0FBQ0ssTUFBNUI7QUFWWSxHQUFoQixFQVdIRztBQWJnQixDQUFyQjtBQWVlcEIsdUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Bvc3RDYXJkLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgQ2FyZCwgUG9wb3ZlciwgQnV0dG9uLCBBdmF0YXIgfSBmcm9tICdhbnRkJ1xuaW1wb3J0IHsgRWxsaXBzaXNPdXRsaW5lZCwgSGVhcnRPdXRsaW5lZCwgTWVzc2FnZU91dGxpbmVkLCBSZXR3ZWV0T3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucydcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmNvbnN0IFBvc3RDYXJkID0gKHsgcG9zdCB9KSA9PiB7XG4gIC8vIGNvbnN0IHsgbWUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcilcbiAgLy8gLy8gY29uc3QgaWQgPSBtZSAmJiBtZS5pZOyZgCDqsJnsnYAg66y467KVLiDsmLXshZTrhJAg7LK07J2064udIOyXsOyCsOyekC4gbWXqsIAg7J6I7Jy866m0IG1lLmlk6rCAIO2VoOuLueuQmOqzoCDsl4bsnLzrqbQgdW5kZWZpbmVkIO2VoOuLuVxuICAvLyBjb25zdCBpZCA9IG1lPy5pZFxuICAvLyBjb25zdCB7IGlkIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIubWUgJiYgc3RhdGUudXNlci5tZS5pZClcbiAgY29uc3QgeyBpZCB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLm1lPy5pZClcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8Q2FyZFxuICAgICAgICBjb3Zlcj17cG9zdC5JbWFnZXNbMF0gJiYgPFBvc3RJbWFnZXMgaW1hZ2VzPXtwb3N0LkltYWdlc30vPn1cbiAgICAgICAgYWN0aW9ucz17W1xuICAgICAgICAgIDxSZXR3ZWV0T3V0bGluZWQga2V5PVwicmV0d2VldFwiIC8+LFxuICAgICAgICAgIDxIZWFydE91dGxpbmVkIGtleT1cImhlYXJ0XCIgLz4sXG4gICAgICAgICAgPE1lc3NhZ2VPdXRsaW5lZCBrZXk9XCJjb21tbmV0XCIgLz4sXG4gICAgICAgICAgPFBvcG92ZXIga2V5PVwibW9yZVwiIGNvbnRlbnQ9eyhcbiAgICAgICAgICAgIDxCdXR0b25Hcm91cD5cbiAgICAgICAgICAgICAge2lkICYmIHBvc3QuVXNlci5pZCA9PT0gaWQgPyAoXG4gICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPuyImOyglTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5ZXA9XCJkYW5nZXJcIj7sgq3soJw8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICkgOiA8QnV0dG9uPuyLoOqzoDwvQnV0dG9uPn1cbiAgICAgICAgICAgIDwvQnV0dG9uR3JvdXA+XG4gICAgICAgICAgKX0+XG4gICAgICAgICAgICA8RWxsaXBzaXNPdXRsaW5lZCAvPlxuICAgICAgICAgIDwvUG9wb3Zlcj5cbiAgICAgICAgXX1cbiAgICAgID5cbiAgICAgICAgPENhcmQuTWV0YSBcbiAgICAgICAgICBhdmF0YXI9ezxBdmF0YXI+e3Bvc3QuVXNlci5uaWNrbmFtZVswXX08L0F2YXRhcj59XG4gICAgICAgICAgdGl0bGU9e3Bvc3QuVXNlci5uaWNrbmFtZX1cbiAgICAgICAgICBkZXNjcmlwdGlvbj17cG9zdC5jb250ZW50fVxuICAgICAgICAvPlxuICAgICAgPC9DYXJkPlxuICAgICAgey8qIDxDb21tZW50Rm9ybSAvPlxuICAgICAgPENvbW1lbnRzIC8+ICovfVxuICAgIDwvZGl2PlxuICApXG59XG5cblBvc3RDYXJkLnByb3BUeXBlcyA9IHtcbiAgLy8gc2hhcGU6IG9iamVjdCDtg4DsnoXsnYQg642UIOyekOyEuO2eiCDrqoXsi5ztlbTrkZDqs6Ag7Iu27J2EIOuVjCDsk7Tri6QuXG4gIHBvc3Q6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgaWQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgVXNlcjogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGlkOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgbmlja25hbWU6IFByb3BUeXBlcy5zdHJpbmdcbiAgICB9KSxcbiAgICBjb250ZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNyZWF0ZWRBdDogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAvLyBhcnJheU9mKFByb3BUeXBlcy5vYmplY3QpOiDqsJ3ssrTrk6TsnZgg67Cw7Je07J20652864qUIOucu1xuICAgIENvbW1lbnRzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcbiAgICBJbWFnZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxuICB9KS5pc1JlcXVpcmVkXG59XG5leHBvcnQgZGVmYXVsdCBQb3N0Q2FyZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/PostCard.js\n");

/***/ }),

/***/ "./node_modules/@ant-design/icons-svg/lib/asn/CheckCircleFilled.js":
false,

/***/ "./node_modules/@ant-design/icons-svg/lib/asn/CheckCircleOutlined.js":
false,

/***/ "./node_modules/@ant-design/icons-svg/lib/asn/CloseCircleFilled.js":
false,

/***/ "./node_modules/@ant-design/icons-svg/lib/asn/CloseCircleOutlined.js":
false,

/***/ "./node_modules/@ant-design/icons-svg/lib/asn/CloseOutlined.js":
false,

/***/ "./node_modules/@ant-design/icons-svg/lib/asn/ExclamationCircleFilled.js":
false,

/***/ "./node_modules/@ant-design/icons-svg/lib/asn/ExclamationCircleOutlined.js":
false,

/***/ "./node_modules/@ant-design/icons-svg/lib/asn/InfoCircleFilled.js":
false,

/***/ "./node_modules/@ant-design/icons-svg/lib/asn/InfoCircleOutlined.js":
false,

/***/ "./node_modules/@ant-design/icons-svg/lib/asn/LoadingOutlined.js":
false,

/***/ "./node_modules/@ant-design/icons/CheckCircleFilled.js":
false,

/***/ "./node_modules/@ant-design/icons/CheckCircleOutlined.js":
false,

/***/ "./node_modules/@ant-design/icons/CloseCircleFilled.js":
false,

/***/ "./node_modules/@ant-design/icons/CloseCircleOutlined.js":
false,

/***/ "./node_modules/@ant-design/icons/CloseOutlined.js":
false,

/***/ "./node_modules/@ant-design/icons/ExclamationCircleFilled.js":
false,

/***/ "./node_modules/@ant-design/icons/ExclamationCircleOutlined.js":
false,

/***/ "./node_modules/@ant-design/icons/InfoCircleFilled.js":
false,

/***/ "./node_modules/@ant-design/icons/InfoCircleOutlined.js":
false,

/***/ "./node_modules/@ant-design/icons/LoadingOutlined.js":
false,

/***/ "./node_modules/@ant-design/icons/lib/components/AntdIcon.js":
false,

/***/ "./node_modules/@ant-design/icons/lib/components/Context.js":
false,

/***/ "./node_modules/@ant-design/icons/lib/components/IconBase.js":
false,

/***/ "./node_modules/@ant-design/icons/lib/components/twoTonePrimaryColor.js":
false,

/***/ "./node_modules/@ant-design/icons/lib/icons/CheckCircleFilled.js":
false,

/***/ "./node_modules/@ant-design/icons/lib/icons/CheckCircleOutlined.js":
false,

/***/ "./node_modules/@ant-design/icons/lib/icons/CloseCircleFilled.js":
false,

/***/ "./node_modules/@ant-design/icons/lib/icons/CloseCircleOutlined.js":
false,

/***/ "./node_modules/@ant-design/icons/lib/icons/CloseOutlined.js":
false,

/***/ "./node_modules/@ant-design/icons/lib/icons/ExclamationCircleFilled.js":
false,

/***/ "./node_modules/@ant-design/icons/lib/icons/ExclamationCircleOutlined.js":
false,

/***/ "./node_modules/@ant-design/icons/lib/icons/InfoCircleFilled.js":
false,

/***/ "./node_modules/@ant-design/icons/lib/icons/InfoCircleOutlined.js":
false,

/***/ "./node_modules/@ant-design/icons/lib/icons/LoadingOutlined.js":
false,

/***/ "./node_modules/@ant-design/icons/lib/utils.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/createSuper.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/objectSpread2.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
false,

/***/ "./node_modules/antd/lib/_util/devWarning.js":
false,

/***/ "./node_modules/antd/lib/_util/unreachableException.js":
false,

/***/ "./node_modules/antd/lib/button/button-group.js":
false,

/***/ "./node_modules/antd/lib/calendar/locale/en_US.js":
false,

/***/ "./node_modules/antd/lib/config-provider/SizeContext.js":
false,

/***/ "./node_modules/antd/lib/config-provider/context.js":
false,

/***/ "./node_modules/antd/lib/config-provider/index.js":
false,

/***/ "./node_modules/antd/lib/config-provider/renderEmpty.js":
false,

/***/ "./node_modules/antd/lib/date-picker/locale/en_US.js":
false,

/***/ "./node_modules/antd/lib/empty/empty.js":
false,

/***/ "./node_modules/antd/lib/empty/index.js":
false,

/***/ "./node_modules/antd/lib/empty/simple.js":
false,

/***/ "./node_modules/antd/lib/locale-provider/LocaleReceiver.js":
false,

/***/ "./node_modules/antd/lib/locale-provider/context.js":
false,

/***/ "./node_modules/antd/lib/locale-provider/default.js":
false,

/***/ "./node_modules/antd/lib/locale-provider/index.js":
false,

/***/ "./node_modules/antd/lib/locale/default.js":
false,

/***/ "./node_modules/antd/lib/message/hooks/useMessage.js":
false,

/***/ "./node_modules/antd/lib/message/index.js":
false,

/***/ "./node_modules/antd/lib/modal/locale.js":
false,

/***/ "./node_modules/antd/lib/notification/hooks/useNotification.js":
false,

/***/ "./node_modules/antd/lib/notification/index.js":
false,

/***/ "./node_modules/antd/lib/time-picker/locale/en_US.js":
false,

/***/ "./node_modules/antd/node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
false,

/***/ "./node_modules/antd/node_modules/@babel/runtime/helpers/arrayWithHoles.js":
false,

/***/ "./node_modules/antd/node_modules/@babel/runtime/helpers/assertThisInitialized.js":
false,

/***/ "./node_modules/antd/node_modules/@babel/runtime/helpers/classCallCheck.js":
false,

/***/ "./node_modules/antd/node_modules/@babel/runtime/helpers/createClass.js":
false,

/***/ "./node_modules/antd/node_modules/@babel/runtime/helpers/createSuper.js":
false,

/***/ "./node_modules/antd/node_modules/@babel/runtime/helpers/defineProperty.js":
false,

/***/ "./node_modules/antd/node_modules/@babel/runtime/helpers/extends.js":
false,

/***/ "./node_modules/antd/node_modules/@babel/runtime/helpers/getPrototypeOf.js":
false,

/***/ "./node_modules/antd/node_modules/@babel/runtime/helpers/inherits.js":
false,

/***/ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
false,

/***/ "./node_modules/antd/node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js":
false,

/***/ "./node_modules/antd/node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
false,

/***/ "./node_modules/antd/node_modules/@babel/runtime/helpers/nonIterableRest.js":
false,

/***/ "./node_modules/antd/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
false,

/***/ "./node_modules/antd/node_modules/@babel/runtime/helpers/setPrototypeOf.js":
false,

/***/ "./node_modules/antd/node_modules/@babel/runtime/helpers/slicedToArray.js":
false,

/***/ "./node_modules/antd/node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
false,

/***/ "./node_modules/rc-notification/lib/Notice.js":
false,

/***/ "./node_modules/rc-notification/lib/useNotification.js":
false,

/***/ "./node_modules/rc-pagination/lib/locale/en_US.js":
false,

/***/ "./node_modules/rc-picker/lib/locale/en_US.js":
false,

/***/ "./node_modules/rc-util/lib/Dom/canUseDom.js":
false,

/***/ "./node_modules/rc-util/lib/Dom/dynamicCSS.js":
false,

/***/ "./node_modules/rc-util/lib/hooks/useMemo.js":
false,

/***/ "./node_modules/rc-util/lib/warning.js":
false,

/***/ "./node_modules/rc-util/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
false,

/***/ "./node_modules/rc-util/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
false,

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, loginAction, logoutAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loginAction\", function() { return loginAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"logoutAction\", function() { return logoutAction; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nvar initialState = {\n  isLoggedIn: false,\n  me: null,\n  signUpData: {},\n  loginData: {}\n}; // 그때 그때 액션을 만드는 action creater\n\nvar loginAction = function loginAction(data) {\n  return {\n    type: 'LOG_IN',\n    data: data\n  };\n};\nvar logoutAction = function logoutAction() {\n  return {\n    type: 'LOG_OUT'\n  };\n};\n\nvar reducer = function reducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case 'LOG_IN':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoggedIn: true,\n        me: action.data\n      });\n\n    case 'LOG_OUT':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoggedIn: false,\n        me: null\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcz8yYzA1Il0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsImlzTG9nZ2VkSW4iLCJtZSIsInNpZ25VcERhdGEiLCJsb2dpbkRhdGEiLCJsb2dpbkFjdGlvbiIsImRhdGEiLCJ0eXBlIiwibG9nb3V0QWN0aW9uIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFPLElBQU1BLFlBQVksR0FBRztBQUMxQkMsWUFBVSxFQUFFLEtBRGM7QUFFMUJDLElBQUUsRUFBRSxJQUZzQjtBQUcxQkMsWUFBVSxFQUFFLEVBSGM7QUFJMUJDLFdBQVMsRUFBRTtBQUplLENBQXJCLEMsQ0FPUDs7QUFDTyxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxJQUFELEVBQVU7QUFDbkMsU0FBTztBQUNMQyxRQUFJLEVBQUUsUUFERDtBQUVMRCxRQUFJLEVBQUpBO0FBRkssR0FBUDtBQUlELENBTE07QUFPQSxJQUFNRSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ2hDLFNBQU87QUFDTEQsUUFBSSxFQUFFO0FBREQsR0FBUDtBQUdELENBSk07O0FBTVAsSUFBTUUsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBa0M7QUFBQSxNQUFqQ0MsS0FBaUMsdUVBQXpCVixZQUF5QjtBQUFBLE1BQVhXLE1BQVc7O0FBQ2hELFVBQVFBLE1BQU0sQ0FBQ0osSUFBZjtBQUNFLFNBQUssUUFBTDtBQUNFLDZDQUNLRyxLQURMO0FBRUVULGtCQUFVLEVBQUUsSUFGZDtBQUdFQyxVQUFFLEVBQUVTLE1BQU0sQ0FBQ0w7QUFIYjs7QUFLRixTQUFLLFNBQUw7QUFDRSw2Q0FDS0ksS0FETDtBQUVFVCxrQkFBVSxFQUFFLEtBRmQ7QUFHRUMsVUFBRSxFQUFFO0FBSE47O0FBS0Y7QUFDRSxhQUFPUSxLQUFQO0FBZEo7QUFnQkQsQ0FqQkQ7O0FBbUJlRCxzRUFBZiIsImZpbGUiOiIuL3JlZHVjZXJzL3VzZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBpc0xvZ2dlZEluOiBmYWxzZSxcbiAgbWU6IG51bGwsXG4gIHNpZ25VcERhdGE6IHt9LFxuICBsb2dpbkRhdGE6IHt9XG59XG5cbi8vIOq3uOuVjCDqt7jrlYwg7JWh7IWY7J2EIOunjOuTnOuKlCBhY3Rpb24gY3JlYXRlclxuZXhwb3J0IGNvbnN0IGxvZ2luQWN0aW9uID0gKGRhdGEpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnTE9HX0lOJyxcbiAgICBkYXRhXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGxvZ291dEFjdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnTE9HX09VVCdcbiAgfVxufVxuXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ0xPR19JTic6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNMb2dnZWRJbjogdHJ1ZSxcbiAgICAgICAgbWU6IGFjdGlvbi5kYXRhXG4gICAgICB9XG4gICAgY2FzZSAnTE9HX09VVCc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNMb2dnZWRJbjogZmFsc2UsXG4gICAgICAgIG1lOiBudWxsXG4gICAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./reducers/user.js\n");

/***/ })

})