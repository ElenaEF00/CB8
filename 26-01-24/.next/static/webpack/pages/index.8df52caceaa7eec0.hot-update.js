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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Homepage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_confetti__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-confetti */ \"./node_modules/react-confetti/dist/react-confetti.min.js\");\n/* harmony import */ var react_confetti__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_confetti__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_calendar_dist_Calendar_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-calendar/dist/Calendar.css */ \"./node_modules/react-calendar/dist/Calendar.css\");\n/* harmony import */ var react_calendar_dist_Calendar_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_calendar_dist_Calendar_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Homepage() {\n    _s();\n    const [width, setWidth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [height, setHeight] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [color, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"#ffffff\");\n    const [pieces, setPieces] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(10);\n    const [posX, setPosX] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [posY, setPosY] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [date, setDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Date());\n    const [isUserOn, setUserOn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const onHandleDate = (date)=>{\n        setDate(date);\n    };\n    const checkUserBirthday = ()=>{\n        if (date.getMonth() === 0 && date.getDate() === 23) {\n            setUserOn(true);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (true) {\n            setWidth(window.innerWidth);\n            setHeight(window.innerHeight);\n        }\n    }, []);\n    const onHandleColorChange = (e)=>setColor(e.target.value);\n    const onHandlePiecesChange = (e)=>setPieces(e.target.value);\n    const onHandleSquare = (e)=>{\n        setPosX(e.clientX - pieces / 2 - 20);\n        setPosY(e.clientY - pieces / 2 - 20);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        onMouseMove: onHandleSquare,\n        style: {\n            height: \"100vh\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"color\",\n                value: color,\n                onChange: onHandleColorChange\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\elena\\\\Dropbox\\\\Il mio PC (LAPTOP-HB5SRNSG)\\\\Desktop\\\\Coding Bootcamp\\\\CB8\\\\26-01-24\\\\src\\\\pages\\\\index.jsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"range\",\n                value: pieces,\n                onChange: onHandlePiecesChange,\n                max: 500\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\elena\\\\Dropbox\\\\Il mio PC (LAPTOP-HB5SRNSG)\\\\Desktop\\\\Coding Bootcamp\\\\CB8\\\\26-01-24\\\\src\\\\pages\\\\index.jsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    border: \"2px solid \".concat(color),\n                    width: \"\".concat(pieces, \"px\"),\n                    height: \"\".concat(pieces, \"px\"),\n                    transform: \"translate(\".concat(posX, \"px, \").concat(posY, \"px)\")\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\elena\\\\Dropbox\\\\Il mio PC (LAPTOP-HB5SRNSG)\\\\Desktop\\\\Coding Bootcamp\\\\CB8\\\\26-01-24\\\\src\\\\pages\\\\index.jsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\elena\\\\Dropbox\\\\Il mio PC (LAPTOP-HB5SRNSG)\\\\Desktop\\\\Coding Bootcamp\\\\CB8\\\\26-01-24\\\\src\\\\pages\\\\index.jsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, this);\n}\n_s(Homepage, \"vZ3e/aoP33oMOUOzCb3nBDzmUUo=\");\n_c = Homepage;\nvar _c;\n$RefreshReg$(_c, \"Homepage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ047QUFDQTtBQUNJO0FBRTNCLFNBQVNJOztJQUN0QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0wsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDTSxRQUFRQyxVQUFVLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ1EsT0FBT0MsU0FBUyxHQUFHVCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNVLFFBQVFDLFVBQVUsR0FBR1gsK0NBQVFBLENBQUM7SUFDckMsTUFBTSxDQUFDWSxNQUFNQyxRQUFRLEdBQUdiLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ2MsTUFBTUMsUUFBUSxHQUFHZiwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNnQixNQUFNQyxRQUFRLEdBQUdqQiwrQ0FBUUEsQ0FBQyxJQUFJa0I7SUFDckMsTUFBTSxDQUFDQyxVQUFVQyxVQUFVLEdBQUdwQiwrQ0FBUUEsQ0FBQztJQUV2QyxNQUFNcUIsZUFBZSxDQUFDTDtRQUNwQkMsUUFBUUQ7SUFDVjtJQUVBLE1BQU1NLG9CQUFvQjtRQUN4QixJQUFJTixLQUFLTyxRQUFRLE9BQU8sS0FBS1AsS0FBS1EsT0FBTyxPQUFPLElBQUk7WUFDbERKLFVBQVU7UUFDWjtJQUNGO0lBRUFyQixnREFBU0EsQ0FBQztRQUNSLElBQUksSUFBMkIwQixFQUFFO1lBQy9CcEIsU0FBU3FCLE9BQU9DLFVBQVU7WUFDMUJwQixVQUFVbUIsT0FBT0UsV0FBVztRQUM5QjtJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU1DLHNCQUFzQixDQUFDQyxJQUFNckIsU0FBU3FCLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztJQUUxRCxNQUFNQyx1QkFBdUIsQ0FBQ0gsSUFBTW5CLFVBQVVtQixFQUFFQyxNQUFNLENBQUNDLEtBQUs7SUFFNUQsTUFBTUUsaUJBQWlCLENBQUNKO1FBQ3RCakIsUUFBUWlCLEVBQUVLLE9BQU8sR0FBR3pCLFNBQVMsSUFBSTtRQUNqQ0ssUUFBUWUsRUFBRU0sT0FBTyxHQUFHMUIsU0FBUyxJQUFJO0lBQ25DO0lBRUEscUJBQ0UsOERBQUMyQjtRQUFJQyxhQUFhSjtRQUFnQkssT0FBTztZQUFFakMsUUFBUTtRQUFROzswQkFLekQsOERBQUNrQztnQkFBTUMsTUFBSztnQkFBUVQsT0FBT3hCO2dCQUFPa0MsVUFBVWI7Ozs7OzswQkFDNUMsOERBQUNXO2dCQUNDQyxNQUFLO2dCQUNMVCxPQUFPdEI7Z0JBQ1BnQyxVQUFVVDtnQkFDVlUsS0FBSzs7Ozs7OzBCQUdQLDhEQUFDTjtnQkFDQ0UsT0FBTztvQkFDTEssUUFBUSxhQUFtQixPQUFOcEM7b0JBQ3JCSixPQUFPLEdBQVUsT0FBUE0sUUFBTztvQkFDakJKLFFBQVEsR0FBVSxPQUFQSSxRQUFPO29CQUNsQm1DLFdBQVcsYUFBd0IvQixPQUFYRixNQUFLLFFBQVcsT0FBTEUsTUFBSztnQkFDMUM7Ozs7Ozs7Ozs7OztBQUlSO0dBNUR3Qlg7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzeD9kMzVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDYWxlbmRhciBmcm9tIFwicmVhY3QtY2FsZW5kYXJcIjtcbmltcG9ydCBDb25mZXR0aSBmcm9tIFwicmVhY3QtY29uZmV0dGlcIjtcbmltcG9ydCBcInJlYWN0LWNhbGVuZGFyL2Rpc3QvQ2FsZW5kYXIuY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVwYWdlKCkge1xuICBjb25zdCBbd2lkdGgsIHNldFdpZHRoXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbaGVpZ2h0LCBzZXRIZWlnaHRdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtjb2xvciwgc2V0Q29sb3JdID0gdXNlU3RhdGUoXCIjZmZmZmZmXCIpO1xuICBjb25zdCBbcGllY2VzLCBzZXRQaWVjZXNdID0gdXNlU3RhdGUoMTApO1xuICBjb25zdCBbcG9zWCwgc2V0UG9zWF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3Bvc1ksIHNldFBvc1ldID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtkYXRlLCBzZXREYXRlXSA9IHVzZVN0YXRlKG5ldyBEYXRlKCkpO1xuICBjb25zdCBbaXNVc2VyT24sIHNldFVzZXJPbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgb25IYW5kbGVEYXRlID0gKGRhdGUpID0+IHtcbiAgICBzZXREYXRlKGRhdGUpO1xuICB9O1xuXG4gIGNvbnN0IGNoZWNrVXNlckJpcnRoZGF5ID0gKCkgPT4ge1xuICAgIGlmIChkYXRlLmdldE1vbnRoKCkgPT09IDAgJiYgZGF0ZS5nZXREYXRlKCkgPT09IDIzKSB7XG4gICAgICBzZXRVc2VyT24odHJ1ZSk7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IHVuZGVmaW5lZCkge1xuICAgICAgc2V0V2lkdGgod2luZG93LmlubmVyV2lkdGgpO1xuICAgICAgc2V0SGVpZ2h0KHdpbmRvdy5pbm5lckhlaWdodCk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgY29uc3Qgb25IYW5kbGVDb2xvckNoYW5nZSA9IChlKSA9PiBzZXRDb2xvcihlLnRhcmdldC52YWx1ZSk7XG5cbiAgY29uc3Qgb25IYW5kbGVQaWVjZXNDaGFuZ2UgPSAoZSkgPT4gc2V0UGllY2VzKGUudGFyZ2V0LnZhbHVlKTtcblxuICBjb25zdCBvbkhhbmRsZVNxdWFyZSA9IChlKSA9PiB7XG4gICAgc2V0UG9zWChlLmNsaWVudFggLSBwaWVjZXMgLyAyIC0gMjApO1xuICAgIHNldFBvc1koZS5jbGllbnRZIC0gcGllY2VzIC8gMiAtIDIwKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgb25Nb3VzZU1vdmU9e29uSGFuZGxlU3F1YXJlfSBzdHlsZT17eyBoZWlnaHQ6IFwiMTAwdmhcIiB9fT5cbiAgICAgIHsvKiA8Q29uZmV0dGkgd2lkdGg9e3dpZHRofSBoZWlnaHQ9e2hlaWdodH0gY29sb3JzPXtbY29sb3JdfSBudW1iZXJPZlBpZWNlcz17cGllY2VzfSAvPiAqL31cbiAgICAgIHsvKiA8Q2FsZW5kYXIgdmFsdWU9e2RhdGV9IG9uQ2hhbmdlPXtvbkhhbmRsZURhdGV9IGxvY2FsZT1cIml0LUlUXCIgLz4gKi99XG4gICAgICB7Lyoge2lzVXNlck9uICYmIDxDb25mZXR0aSB3aWR0aD17NTAwfSBoZWlnaHQ9ezM1MH0gLz4gKi99XG4gICAgICB7LyogPGJ1dHRvbiBvbkNsaWNrPXtjaGVja1VzZXJCaXJ0aGRheX0+SG8gc2VsZXppb25hdG8gY29tcGxlYW5ubzwvYnV0dG9uPiAqL31cbiAgICAgIDxpbnB1dCB0eXBlPVwiY29sb3JcIiB2YWx1ZT17Y29sb3J9IG9uQ2hhbmdlPXtvbkhhbmRsZUNvbG9yQ2hhbmdlfSAvPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJyYW5nZVwiXG4gICAgICAgIHZhbHVlPXtwaWVjZXN9XG4gICAgICAgIG9uQ2hhbmdlPXtvbkhhbmRsZVBpZWNlc0NoYW5nZX1cbiAgICAgICAgbWF4PXs1MDB9XG4gICAgICAvPlxuXG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgYm9yZGVyOiBgMnB4IHNvbGlkICR7Y29sb3J9YCxcbiAgICAgICAgICB3aWR0aDogYCR7cGllY2VzfXB4YCxcbiAgICAgICAgICBoZWlnaHQ6IGAke3BpZWNlc31weGAsXG4gICAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlKCR7cG9zWH1weCwgJHtwb3NZfXB4KWAsXG4gICAgICAgIH19XG4gICAgICA+PC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDYWxlbmRhciIsIkNvbmZldHRpIiwiSG9tZXBhZ2UiLCJ3aWR0aCIsInNldFdpZHRoIiwiaGVpZ2h0Iiwic2V0SGVpZ2h0IiwiY29sb3IiLCJzZXRDb2xvciIsInBpZWNlcyIsInNldFBpZWNlcyIsInBvc1giLCJzZXRQb3NYIiwicG9zWSIsInNldFBvc1kiLCJkYXRlIiwic2V0RGF0ZSIsIkRhdGUiLCJpc1VzZXJPbiIsInNldFVzZXJPbiIsIm9uSGFuZGxlRGF0ZSIsImNoZWNrVXNlckJpcnRoZGF5IiwiZ2V0TW9udGgiLCJnZXREYXRlIiwidW5kZWZpbmVkIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0Iiwib25IYW5kbGVDb2xvckNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uSGFuZGxlUGllY2VzQ2hhbmdlIiwib25IYW5kbGVTcXVhcmUiLCJjbGllbnRYIiwiY2xpZW50WSIsImRpdiIsIm9uTW91c2VNb3ZlIiwic3R5bGUiLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsIm1heCIsImJvcmRlciIsInRyYW5zZm9ybSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.jsx\n"));

/***/ })

});