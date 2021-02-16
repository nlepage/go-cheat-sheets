webpackHotUpdate_N_E("pages/language",{

/***/ "./components/code.js":
/*!****************************!*\
  !*** ./components/code.js ***!
  \****************************/
/*! exports provided: go, useCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"go\", function() { return go; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useCode\", function() { return useCode; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_nico_git_go_cheat_sheets_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highlight.js/lib/core */ \"./node_modules/highlight.js/lib/core.js\");\n/* harmony import */ var highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var highlight_js_lib_languages_go__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! highlight.js/lib/languages/go */ \"./node_modules/highlight.js/lib/languages/go.js\");\n/* harmony import */ var highlight_js_lib_languages_go__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_go__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\nvar _jsxFileName = \"/home/nico/git/go-cheat-sheets/components/code.js\",\n    _s = $RefreshSig$();\n\n\n\n\nhighlight_js_lib_core__WEBPACK_IMPORTED_MODULE_3___default.a.registerLanguage('go', highlight_js_lib_languages_go__WEBPACK_IMPORTED_MODULE_4___default.a);\nfunction go(_ref) {\n  var _ref2 = Object(_home_nico_git_go_cheat_sheets_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref, 1),\n      s = _ref2[0];\n\n  return code(s, 'go');\n}\n\nfunction code(code, language) {\n  var lines = code.split('\\n');\n  if (lines[0] === '') lines = lines.slice(1);\n  if (/^ +$/.test(lines[lines.length - 1])) lines = lines.slice(0, lines.length - 1);\n  var indent = lines.map(function (line) {\n    var _$exec;\n\n    return (_$exec = /^ +/.exec(line)) === null || _$exec === void 0 ? void 0 : _$exec[0].length;\n  }).filter(function (v) {\n    return v;\n  }).reduce(function (a, b) {\n    return Math.min(a, b);\n  });\n  var prefix = ' '.repeat(indent);\n  lines = lines.map(function (line) {\n    return line.startsWith(prefix) ? line.substr(indent) : line;\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Code, {\n    language: language,\n    children: lines.join('\\n')\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 10\n  }, this);\n}\n\nfunction Code(_ref3) {\n  var language = _ref3.language,\n      children = _ref3.children;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"pre\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"code\", {\n      className: language,\n      children: children\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 15\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 10\n  }, this);\n}\n\n_c = Code;\nfunction useCode() {\n  _s();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useLayoutEffect\"])(function () {\n    highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_3___default.a.highlightAll();\n  }, []);\n}\n\n_s(useCode, \"n7/vCynhJvM+pLkyL2DMQUF0odM=\");\n\nvar _c;\n\n$RefreshReg$(_c, \"Code\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb2RlLmpzPzg3MDYiXSwibmFtZXMiOlsiaGxqcyIsInJlZ2lzdGVyTGFuZ3VhZ2UiLCJobGpzR28iLCJnbyIsInMiLCJjb2RlIiwibGFuZ3VhZ2UiLCJsaW5lcyIsInNwbGl0Iiwic2xpY2UiLCJ0ZXN0IiwibGVuZ3RoIiwiaW5kZW50IiwibWFwIiwibGluZSIsImV4ZWMiLCJmaWx0ZXIiLCJ2IiwicmVkdWNlIiwiYSIsImIiLCJNYXRoIiwibWluIiwicHJlZml4IiwicmVwZWF0Iiwic3RhcnRzV2l0aCIsInN1YnN0ciIsImpvaW4iLCJDb2RlIiwiY2hpbGRyZW4iLCJ1c2VDb2RlIiwidXNlTGF5b3V0RWZmZWN0IiwiaGlnaGxpZ2h0QWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQUEsNERBQUksQ0FBQ0MsZ0JBQUwsQ0FBc0IsSUFBdEIsRUFBNEJDLG9FQUE1QjtBQUVPLFNBQVNDLEVBQVQsT0FBaUI7QUFBQTtBQUFBLE1BQUpDLENBQUk7O0FBQ3RCLFNBQU9DLElBQUksQ0FBQ0QsQ0FBRCxFQUFJLElBQUosQ0FBWDtBQUNEOztBQUVELFNBQVNDLElBQVQsQ0FBY0EsSUFBZCxFQUFvQkMsUUFBcEIsRUFBOEI7QUFDNUIsTUFBSUMsS0FBSyxHQUFHRixJQUFJLENBQUNHLEtBQUwsQ0FBVyxJQUFYLENBQVo7QUFDQSxNQUFJRCxLQUFLLENBQUMsQ0FBRCxDQUFMLEtBQWEsRUFBakIsRUFBcUJBLEtBQUssR0FBR0EsS0FBSyxDQUFDRSxLQUFOLENBQVksQ0FBWixDQUFSO0FBQ3JCLE1BQUksT0FBT0MsSUFBUCxDQUFZSCxLQUFLLENBQUNBLEtBQUssQ0FBQ0ksTUFBTixHQUFlLENBQWhCLENBQWpCLENBQUosRUFBMENKLEtBQUssR0FBR0EsS0FBSyxDQUFDRSxLQUFOLENBQVksQ0FBWixFQUFlRixLQUFLLENBQUNJLE1BQU4sR0FBZSxDQUE5QixDQUFSO0FBQzFDLE1BQU1DLE1BQU0sR0FBR0wsS0FBSyxDQUFDTSxHQUFOLENBQVUsVUFBQUMsSUFBSTtBQUFBOztBQUFBLHFCQUFJLE1BQU1DLElBQU4sQ0FBV0QsSUFBWCxDQUFKLDJDQUFJLE9BQW1CLENBQW5CLEVBQXNCSCxNQUExQjtBQUFBLEdBQWQsRUFBZ0RLLE1BQWhELENBQXVELFVBQUFDLENBQUM7QUFBQSxXQUFJQSxDQUFKO0FBQUEsR0FBeEQsRUFBK0RDLE1BQS9ELENBQXNFLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLFdBQVVDLElBQUksQ0FBQ0MsR0FBTCxDQUFTSCxDQUFULEVBQVlDLENBQVosQ0FBVjtBQUFBLEdBQXRFLENBQWY7QUFDQSxNQUFNRyxNQUFNLEdBQUcsSUFBSUMsTUFBSixDQUFXWixNQUFYLENBQWY7QUFDQUwsT0FBSyxHQUFHQSxLQUFLLENBQUNNLEdBQU4sQ0FBVSxVQUFBQyxJQUFJO0FBQUEsV0FBSUEsSUFBSSxDQUFDVyxVQUFMLENBQWdCRixNQUFoQixJQUEwQlQsSUFBSSxDQUFDWSxNQUFMLENBQVlkLE1BQVosQ0FBMUIsR0FBZ0RFLElBQXBEO0FBQUEsR0FBZCxDQUFSO0FBQ0Esc0JBQU8scUVBQUMsSUFBRDtBQUFNLFlBQVEsRUFBRVIsUUFBaEI7QUFBQSxjQUEyQkMsS0FBSyxDQUFDb0IsSUFBTixDQUFXLElBQVg7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0Q7O0FBRUQsU0FBU0MsSUFBVCxRQUFzQztBQUFBLE1BQXRCdEIsUUFBc0IsU0FBdEJBLFFBQXNCO0FBQUEsTUFBWnVCLFFBQVksU0FBWkEsUUFBWTtBQUNwQyxzQkFBTztBQUFBLDJCQUFLO0FBQU0sZUFBUyxFQUFFdkIsUUFBakI7QUFBQSxnQkFBNEJ1QjtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0Q7O0tBRlFELEk7QUFJRixTQUFTRSxPQUFULEdBQW1CO0FBQUE7O0FBQ3hCQywrREFBZSxDQUFDLFlBQU07QUFDcEIvQixnRUFBSSxDQUFDZ0MsWUFBTDtBQUNELEdBRmMsRUFFWixFQUZZLENBQWY7QUFHRDs7R0FKZUYsTyIsImZpbGUiOiIuL2NvbXBvbmVudHMvY29kZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUxheW91dEVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGhsanMgZnJvbSAnaGlnaGxpZ2h0LmpzL2xpYi9jb3JlJ1xuaW1wb3J0IGhsanNHbyBmcm9tICdoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9nbydcblxuaGxqcy5yZWdpc3Rlckxhbmd1YWdlKCdnbycsIGhsanNHbylcblxuZXhwb3J0IGZ1bmN0aW9uIGdvKFtzXSkge1xuICByZXR1cm4gY29kZShzLCAnZ28nKVxufVxuXG5mdW5jdGlvbiBjb2RlKGNvZGUsIGxhbmd1YWdlKSB7XG4gIGxldCBsaW5lcyA9IGNvZGUuc3BsaXQoJ1xcbicpXG4gIGlmIChsaW5lc1swXSA9PT0gJycpIGxpbmVzID0gbGluZXMuc2xpY2UoMSlcbiAgaWYgKC9eICskLy50ZXN0KGxpbmVzW2xpbmVzLmxlbmd0aCAtIDFdKSkgbGluZXMgPSBsaW5lcy5zbGljZSgwLCBsaW5lcy5sZW5ndGggLSAxKVxuICBjb25zdCBpbmRlbnQgPSBsaW5lcy5tYXAobGluZSA9PiAvXiArLy5leGVjKGxpbmUpPy5bMF0ubGVuZ3RoKS5maWx0ZXIodiA9PiB2KS5yZWR1Y2UoKGEsIGIpID0+IE1hdGgubWluKGEsIGIpKVxuICBjb25zdCBwcmVmaXggPSAnICcucmVwZWF0KGluZGVudClcbiAgbGluZXMgPSBsaW5lcy5tYXAobGluZSA9PiBsaW5lLnN0YXJ0c1dpdGgocHJlZml4KSA/IGxpbmUuc3Vic3RyKGluZGVudCkgOiBsaW5lKVxuICByZXR1cm4gPENvZGUgbGFuZ3VhZ2U9e2xhbmd1YWdlfT57bGluZXMuam9pbignXFxuJyl9PC9Db2RlPlxufVxuXG5mdW5jdGlvbiBDb2RlKHsgbGFuZ3VhZ2UsIGNoaWxkcmVuIH0pIHtcbiAgcmV0dXJuIDxwcmU+PGNvZGUgY2xhc3NOYW1lPXtsYW5ndWFnZX0+e2NoaWxkcmVufTwvY29kZT48L3ByZT5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUNvZGUoKSB7XG4gIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgaGxqcy5oaWdobGlnaHRBbGwoKVxuICB9LCBbXSlcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/code.js\n");

/***/ })

})