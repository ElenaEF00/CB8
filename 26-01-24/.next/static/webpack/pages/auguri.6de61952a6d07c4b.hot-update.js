"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/auguri",{

/***/ "./src/components/InputColor/InputColor.jsx":
/*!**************************************************!*\
  !*** ./src/components/InputColor/InputColor.jsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst InputColor = (param)=>{\n    let { setColorChange } = param;\n    _s();\n    const [textInput, setTextInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const onHandleTextChange = (e)=>{\n        setTextInput(e.target.value);\n    };\n    const onHandleSubmit = (e)=>{\n        e.preventDefault();\n        setColorChange(textInput);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: onHandleSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                value: textInput,\n                onChange: onHandleTextChange\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\elena\\\\Dropbox\\\\Il mio PC (LAPTOP-HB5SRNSG)\\\\Desktop\\\\Coding Bootcamp\\\\CB8\\\\26-01-24\\\\src\\\\components\\\\InputColor\\\\InputColor.jsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"submit\",\n                value: \"Applica\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\elena\\\\Dropbox\\\\Il mio PC (LAPTOP-HB5SRNSG)\\\\Desktop\\\\Coding Bootcamp\\\\CB8\\\\26-01-24\\\\src\\\\components\\\\InputColor\\\\InputColor.jsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\elena\\\\Dropbox\\\\Il mio PC (LAPTOP-HB5SRNSG)\\\\Desktop\\\\Coding Bootcamp\\\\CB8\\\\26-01-24\\\\src\\\\components\\\\InputColor\\\\InputColor.jsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined);\n};\n_s(InputColor, \"U0Um8mY+J8Xn+VY7J2jHNNaffNw=\");\n_c = InputColor;\n/* harmony default export */ __webpack_exports__[\"default\"] = (InputColor);\nvar _c;\n$RefreshReg$(_c, \"InputColor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9JbnB1dENvbG9yL0lucHV0Q29sb3IuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBaUM7QUFFakMsTUFBTUMsYUFBYTtRQUFDLEVBQUVDLGNBQWMsRUFBRTs7SUFDcEMsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdKLCtDQUFRQSxDQUFDO0lBRTNDLE1BQU1LLHFCQUFxQixDQUFDQztRQUMxQkYsYUFBYUUsRUFBRUMsTUFBTSxDQUFDQyxLQUFLO0lBQzdCO0lBQ0EsTUFBTUMsaUJBQWlCLENBQUNIO1FBQ3RCQSxFQUFFSSxjQUFjO1FBQ2hCUixlQUFlQztJQUNqQjtJQUVBLHFCQUNFLDhEQUFDUTtRQUFLQyxVQUFVSDs7MEJBQ2QsOERBQUNJO2dCQUFNQyxNQUFLO2dCQUFPTixPQUFPTDtnQkFBV1ksVUFBVVY7Ozs7OzswQkFDL0MsOERBQUNRO2dCQUFNQyxNQUFLO2dCQUFTTixPQUFNOzs7Ozs7Ozs7Ozs7QUFHakM7R0FqQk1QO0tBQUFBO0FBbUJOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0lucHV0Q29sb3IvSW5wdXRDb2xvci5qc3g/ZjA2NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgSW5wdXRDb2xvciA9ICh7IHNldENvbG9yQ2hhbmdlIH0pID0+IHtcclxuICBjb25zdCBbdGV4dElucHV0LCBzZXRUZXh0SW5wdXRdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IG9uSGFuZGxlVGV4dENoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBzZXRUZXh0SW5wdXQoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcbiAgY29uc3Qgb25IYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0Q29sb3JDaGFuZ2UodGV4dElucHV0KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm0gb25TdWJtaXQ9e29uSGFuZGxlU3VibWl0fT5cclxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RleHRJbnB1dH0gb25DaGFuZ2U9e29uSGFuZGxlVGV4dENoYW5nZX0gLz5cclxuICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkFwcGxpY2FcIiAvPlxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnB1dENvbG9yO1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJJbnB1dENvbG9yIiwic2V0Q29sb3JDaGFuZ2UiLCJ0ZXh0SW5wdXQiLCJzZXRUZXh0SW5wdXQiLCJvbkhhbmRsZVRleHRDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJvbkhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/InputColor/InputColor.jsx\n"));

/***/ })

});