"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.jsx":
/*!*****************************!*\
  !*** ./src/pages/index.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Homepage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_confetti__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-confetti */ \"./node_modules/react-confetti/dist/react-confetti.min.js\");\n/* harmony import */ var react_confetti__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_confetti__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_calendar_dist_Calendar_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-calendar/dist/Calendar.css */ \"./node_modules/react-calendar/dist/Calendar.css\");\n/* harmony import */ var react_calendar_dist_Calendar_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_calendar_dist_Calendar_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Homepage() {\n    _s();\n    const [width, setWidth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [height, setHeight] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [color, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"#ffffff\");\n    const [pieces, setPieces] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(10);\n    const [posX, setPosX] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [posY, setPosY] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (true) {\n            setWidth(window.innerWidth);\n            setHeight(window.innerHeight);\n        }\n    }, []);\n    const onHandleColorChange = (e)=>setColor(e.target.value);\n    const onHandlePiecesChange = (e)=>setPieces(e.target.value);\n    const onHandleSquare = (e)=>{\n        setPosX(e.clientX - pieces / 2 - 20);\n        setPosY(e.clientY - pieces / 2 - 20);\n    };\n    return(// <div onMouseMove={onHandleSquare} style={{ height: \"100vh\" }}>\n    //   <input type=\"color\" value={color} onChange={onHandleColorChange} />\n    //   <input\n    //     type=\"range\"\n    //     value={pieces}\n    //     onChange={onHandlePiecesChange}\n    //     max={500}\n    //   />\n    //   <div\n    //     style={{\n    //       border: `2px solid ${color}`,\n    //       width: `${pieces}px`,\n    //       height: `${pieces}px`,\n    //       transform: `translate(${posX}px, ${posY}px)`,\n    //     }}\n    //   ></div>\n    // </div>\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"banner\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"title\",\n                children: \"Fai il compleanno?\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\elena\\\\Dropbox\\\\Il mio PC (LAPTOP-HB5SRNSG)\\\\Desktop\\\\Coding Bootcamp\\\\CB8\\\\26-01-24\\\\src\\\\pages\\\\index.jsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                className: \"link\",\n                href: \"/auguri\",\n                children: \"Tanti auguri!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\elena\\\\Dropbox\\\\Il mio PC (LAPTOP-HB5SRNSG)\\\\Desktop\\\\Coding Bootcamp\\\\CB8\\\\26-01-24\\\\src\\\\pages\\\\index.jsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\elena\\\\Dropbox\\\\Il mio PC (LAPTOP-HB5SRNSG)\\\\Desktop\\\\Coding Bootcamp\\\\CB8\\\\26-01-24\\\\src\\\\pages\\\\index.jsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, this));\n}\n_s(Homepage, \"wcU99y1b3EmG4e3WMt/xf9cxfLQ=\");\n_c = Homepage;\nvar _c;\n$RefreshReg$(_c, \"Homepage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7QUFDZjtBQUNTO0FBQ0E7QUFDSTtBQUUzQixTQUFTSzs7SUFDdEIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ08sUUFBUUMsVUFBVSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUNTLE9BQU9DLFNBQVMsR0FBR1YsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDVyxRQUFRQyxVQUFVLEdBQUdaLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ2EsTUFBTUMsUUFBUSxHQUFHZCwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNlLE1BQU1DLFFBQVEsR0FBR2hCLCtDQUFRQSxDQUFDO0lBRWpDRCxnREFBU0EsQ0FBQztRQUNSLElBQUksSUFBMkJrQixFQUFFO1lBQy9CWCxTQUFTWSxPQUFPQyxVQUFVO1lBQzFCWCxVQUFVVSxPQUFPRSxXQUFXO1FBQzlCO0lBQ0YsR0FBRyxFQUFFO0lBRUwsTUFBTUMsc0JBQXNCLENBQUNDLElBQU1aLFNBQVNZLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztJQUUxRCxNQUFNQyx1QkFBdUIsQ0FBQ0gsSUFBTVYsVUFBVVUsRUFBRUMsTUFBTSxDQUFDQyxLQUFLO0lBRTVELE1BQU1FLGlCQUFpQixDQUFDSjtRQUN0QlIsUUFBUVEsRUFBRUssT0FBTyxHQUFHaEIsU0FBUyxJQUFJO1FBQ2pDSyxRQUFRTSxFQUFFTSxPQUFPLEdBQUdqQixTQUFTLElBQUk7SUFDbkM7SUFFQSxPQUNFLGlFQUFpRTtJQUNqRSx3RUFBd0U7SUFDeEUsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsc0NBQXNDO0lBQ3RDLGdCQUFnQjtJQUNoQixPQUFPO0lBRVAsU0FBUztJQUNULGVBQWU7SUFDZixzQ0FBc0M7SUFDdEMsOEJBQThCO0lBQzlCLCtCQUErQjtJQUMvQixzREFBc0Q7SUFDdEQsU0FBUztJQUNULFlBQVk7SUFDWixTQUFTO2tCQUNULDhEQUFDa0I7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUFROzs7Ozs7MEJBQ3RCLDhEQUFDRTtnQkFBRUYsV0FBVTtnQkFBT0csTUFBSzswQkFBVTs7Ozs7Ozs7Ozs7O0FBS3pDO0dBbER3QjdCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC5qc3g/ZDM1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgQ2FsZW5kYXIgZnJvbSBcInJlYWN0LWNhbGVuZGFyXCI7XG5pbXBvcnQgQ29uZmV0dGkgZnJvbSBcInJlYWN0LWNvbmZldHRpXCI7XG5pbXBvcnQgXCJyZWFjdC1jYWxlbmRhci9kaXN0L0NhbGVuZGFyLmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lcGFnZSgpIHtcbiAgY29uc3QgW3dpZHRoLCBzZXRXaWR0aF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2hlaWdodCwgc2V0SGVpZ2h0XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbY29sb3IsIHNldENvbG9yXSA9IHVzZVN0YXRlKFwiI2ZmZmZmZlwiKTtcbiAgY29uc3QgW3BpZWNlcywgc2V0UGllY2VzXSA9IHVzZVN0YXRlKDEwKTtcbiAgY29uc3QgW3Bvc1gsIHNldFBvc1hdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtwb3NZLCBzZXRQb3NZXSA9IHVzZVN0YXRlKDApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IHVuZGVmaW5lZCkge1xuICAgICAgc2V0V2lkdGgod2luZG93LmlubmVyV2lkdGgpO1xuICAgICAgc2V0SGVpZ2h0KHdpbmRvdy5pbm5lckhlaWdodCk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgY29uc3Qgb25IYW5kbGVDb2xvckNoYW5nZSA9IChlKSA9PiBzZXRDb2xvcihlLnRhcmdldC52YWx1ZSk7XG5cbiAgY29uc3Qgb25IYW5kbGVQaWVjZXNDaGFuZ2UgPSAoZSkgPT4gc2V0UGllY2VzKGUudGFyZ2V0LnZhbHVlKTtcblxuICBjb25zdCBvbkhhbmRsZVNxdWFyZSA9IChlKSA9PiB7XG4gICAgc2V0UG9zWChlLmNsaWVudFggLSBwaWVjZXMgLyAyIC0gMjApO1xuICAgIHNldFBvc1koZS5jbGllbnRZIC0gcGllY2VzIC8gMiAtIDIwKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIC8vIDxkaXYgb25Nb3VzZU1vdmU9e29uSGFuZGxlU3F1YXJlfSBzdHlsZT17eyBoZWlnaHQ6IFwiMTAwdmhcIiB9fT5cbiAgICAvLyAgIDxpbnB1dCB0eXBlPVwiY29sb3JcIiB2YWx1ZT17Y29sb3J9IG9uQ2hhbmdlPXtvbkhhbmRsZUNvbG9yQ2hhbmdlfSAvPlxuICAgIC8vICAgPGlucHV0XG4gICAgLy8gICAgIHR5cGU9XCJyYW5nZVwiXG4gICAgLy8gICAgIHZhbHVlPXtwaWVjZXN9XG4gICAgLy8gICAgIG9uQ2hhbmdlPXtvbkhhbmRsZVBpZWNlc0NoYW5nZX1cbiAgICAvLyAgICAgbWF4PXs1MDB9XG4gICAgLy8gICAvPlxuXG4gICAgLy8gICA8ZGl2XG4gICAgLy8gICAgIHN0eWxlPXt7XG4gICAgLy8gICAgICAgYm9yZGVyOiBgMnB4IHNvbGlkICR7Y29sb3J9YCxcbiAgICAvLyAgICAgICB3aWR0aDogYCR7cGllY2VzfXB4YCxcbiAgICAvLyAgICAgICBoZWlnaHQ6IGAke3BpZWNlc31weGAsXG4gICAgLy8gICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlKCR7cG9zWH1weCwgJHtwb3NZfXB4KWAsXG4gICAgLy8gICAgIH19XG4gICAgLy8gICA+PC9kaXY+XG4gICAgLy8gPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJiYW5uZXJcIj5cbiAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aXRsZVwiPkZhaSBpbCBjb21wbGVhbm5vPzwvaDM+XG4gICAgICA8YSBjbGFzc05hbWU9XCJsaW5rXCIgaHJlZj1cIi9hdWd1cmlcIj5cbiAgICAgICAgVGFudGkgYXVndXJpIVxuICAgICAgPC9hPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGluayIsIkNhbGVuZGFyIiwiQ29uZmV0dGkiLCJIb21lcGFnZSIsIndpZHRoIiwic2V0V2lkdGgiLCJoZWlnaHQiLCJzZXRIZWlnaHQiLCJjb2xvciIsInNldENvbG9yIiwicGllY2VzIiwic2V0UGllY2VzIiwicG9zWCIsInNldFBvc1giLCJwb3NZIiwic2V0UG9zWSIsInVuZGVmaW5lZCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsIm9uSGFuZGxlQ29sb3JDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJvbkhhbmRsZVBpZWNlc0NoYW5nZSIsIm9uSGFuZGxlU3F1YXJlIiwiY2xpZW50WCIsImNsaWVudFkiLCJkaXYiLCJjbGFzc05hbWUiLCJoMyIsImEiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.jsx\n"));

/***/ })

});