/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[lang]",{

/***/ "./src/components/introduction.tsx":
/*!*****************************************!*\
  !*** ./src/components/introduction.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Introduction\": function() { return /* binding */ Introduction; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! i18next */ \"./node_modules/i18next/dist/esm/i18next.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/u01/wk/mywork/booking1a/website/src/components/introduction.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar Introduction = function Introduction() {\n  _s();\n\n  var parentRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n  var childRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n  var imgRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n\n  var onClickNavigation = function onClickNavigation(ref) {\n    var _ref$current;\n\n    var header = document.querySelector('#header');\n    window.scrollTo({\n      left: 0,\n      top: ((_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.offsetTop) - header.scrollHeight,\n      behavior: 'smooth'\n    });\n  };\n\n  var handelOpenDemo = function handelOpenDemo() {\n    window.open('https://demo.booking1a.com/');\n  };\n\n  var handleResize = function handleResize() {\n    if (childRef.current && parentRef.current) {\n      var childHeight = childRef.current.offsetHeight;\n      var imgHeight = imgRef.current.offsetHeight;\n      parentRef.current.style.height = \"\".concat(childHeight + 140 + imgHeight / 2, \"px\");\n    }\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    handleResize();\n    window.addEventListener('resize', handleResize);\n    window.addEventListener('load', handleResize);\n    return function () {\n      window.removeEventListener('resize', handleResize);\n      window.removeEventListener('load', handleResize);\n    };\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    id: \"introduction\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"introduction-container \",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"banner\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n          src: \"\".concat(\"\", \"/images/introduction_banner.jfif\"),\n          ref: parentRef\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"banner-under mx-auto\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n          className: \"img-airplanes position-absolute\",\n          src: \"\".concat(\"\", \"/images/airplane_01.png\")\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"section-content\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          ref: childRef,\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"introduction-title mx-auto\",\n            children: i18next__WEBPACK_IMPORTED_MODULE_1__.default.t('home.introduction.introductionTitle')\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 47,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"introduction-description mx-auto\",\n            children: i18next__WEBPACK_IMPORTED_MODULE_1__.default.t('home.introduction.description')\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 49,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Button, {\n            className: \"demo-btn \",\n            onClick: function onClick() {\n              return handelOpenDemo();\n            },\n            variant: \"success\",\n            children: i18next__WEBPACK_IMPORTED_MODULE_1__.default.t('home.introduction.watchDemo')\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            className: \"img mx-auto shadow\",\n            src: \"\".concat(\"\", \"/images/image_demo.svg\"),\n            ref: imgRef\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          id: \"introduction-bot\",\n          className: \"introduction-title mx-auto\",\n          style: {\n            marginTop: '97px'\n          },\n          children: i18next__WEBPACK_IMPORTED_MODULE_1__.default.t('home.introduction.introductionBotTitle')\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"introduction-system \",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \" system d-flex mx-auto\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n              className: \"introduction-title\",\n              children: i18next__WEBPACK_IMPORTED_MODULE_1__.default.t('home.introduction.introductionSystem')\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 65,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n              className: \"\",\n              src: \"\".concat(\"\", \"/images/amadeus_v2.png\"),\n              alt: \"amadeus\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 66,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 64,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"introduction-description mx-auto \",\n          style: {\n            marginTop: '3px'\n          },\n          children: i18next__WEBPACK_IMPORTED_MODULE_1__.default.t('home.introduction.descriptionBot')\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 37,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Introduction, \"8z1cXiE2Wan1zEvYUhapMHxS2Qc=\");\n\n_c = Introduction;\n\nvar _c;\n\n$RefreshReg$(_c, \"Introduction\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW50cm9kdWN0aW9uLnRzeD80Njg3Il0sIm5hbWVzIjpbIkludHJvZHVjdGlvbiIsInBhcmVudFJlZiIsInVzZVJlZiIsImNoaWxkUmVmIiwiaW1nUmVmIiwib25DbGlja05hdmlnYXRpb24iLCJyZWYiLCJoZWFkZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsImxlZnQiLCJ0b3AiLCJjdXJyZW50Iiwib2Zmc2V0VG9wIiwic2Nyb2xsSGVpZ2h0IiwiYmVoYXZpb3IiLCJoYW5kZWxPcGVuRGVtbyIsIm9wZW4iLCJoYW5kbGVSZXNpemUiLCJjaGlsZEhlaWdodCIsIm9mZnNldEhlaWdodCIsImltZ0hlaWdodCIsInN0eWxlIiwiaGVpZ2h0IiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJwcm9jZXNzIiwiaTE4bmV4dCIsIm1hcmdpblRvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDTyxJQUFNQSxZQUFzQixHQUFHLFNBQXpCQSxZQUF5QixHQUFNO0FBQUE7O0FBQzFDLE1BQU1DLFNBQVMsR0FBR0MsNkNBQU0sQ0FBQyxJQUFELENBQXhCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHRCw2Q0FBTSxDQUFDLElBQUQsQ0FBdkI7QUFDQSxNQUFNRSxNQUFNLEdBQUdGLDZDQUFNLENBQUMsSUFBRCxDQUFyQjs7QUFDQSxNQUFNRyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUFDLEdBQUcsRUFBSTtBQUFBOztBQUMvQixRQUFNQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixTQUF2QixDQUFmO0FBQ0FDLFVBQU0sQ0FBQ0MsUUFBUCxDQUFnQjtBQUFFQyxVQUFJLEVBQUUsQ0FBUjtBQUFXQyxTQUFHLEVBQUUsaUJBQUFQLEdBQUcsQ0FBQ1EsT0FBSiw4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Q0FBQSxDQUFrQix3Q0FBbEI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWZGLGVBa0JFO0FBQUssbUJBQVMsRUFBQyxzQkFBZjtBQUFBLGlDQUNFO0FBQUsscUJBQVMsRUFBQyx3QkFBZjtBQUFBLG9DQUNFO0FBQUssdUJBQVMsRUFBQyxvQkFBZjtBQUFBLHdCQUFxQ0EsOENBQUEsQ0FBa0Isc0NBQWxCO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRTtBQUFLLHVCQUFTLEVBQUMsRUFBZjtBQUFrQixpQkFBRyxZQUFLRCxFQUFMLDJCQUFyQjtBQUFxRixpQkFBRyxFQUFDO0FBQXpGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFsQkYsZUF3QkU7QUFBSyxtQkFBUyxFQUFDLG1DQUFmO0FBQW1ELGVBQUssRUFBRTtBQUFFRSxxQkFBUyxFQUFFO0FBQWIsV0FBMUQ7QUFBQSxvQkFDR0QsOENBQUEsQ0FBa0Isa0NBQWxCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF4QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBd0NELENBeEVNOztHQUFNOUIsWTs7S0FBQUEsWSIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL2ludHJvZHVjdGlvbi50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaTE4bmV4dCBmcm9tICdpMThuZXh0JztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5leHBvcnQgY29uc3QgSW50cm9kdWN0aW9uOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgcGFyZW50UmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBjaGlsZFJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgaW1nUmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBvbkNsaWNrTmF2aWdhdGlvbiA9IHJlZiA9PiB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hlYWRlcicpO1xuICAgIHdpbmRvdy5zY3JvbGxUbyh7IGxlZnQ6IDAsIHRvcDogcmVmLmN1cnJlbnQ/Lm9mZnNldFRvcCAtIGhlYWRlci5zY3JvbGxIZWlnaHQsIGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcbiAgfTtcblxuICBjb25zdCBoYW5kZWxPcGVuRGVtbyA9ICgpID0+IHtcbiAgICB3aW5kb3cub3BlbignaHR0cHM6Ly9kZW1vLmJvb2tpbmcxYS5jb20vJyk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUmVzaXplID0gKCkgPT4ge1xuICAgIGlmIChjaGlsZFJlZi5jdXJyZW50ICYmIHBhcmVudFJlZi5jdXJyZW50KSB7XG4gICAgICBjb25zdCBjaGlsZEhlaWdodCA9IGNoaWxkUmVmLmN1cnJlbnQub2Zmc2V0SGVpZ2h0O1xuICAgICAgY29uc3QgaW1nSGVpZ2h0ID0gaW1nUmVmLmN1cnJlbnQub2Zmc2V0SGVpZ2h0O1xuICAgICAgcGFyZW50UmVmLmN1cnJlbnQuc3R5bGUuaGVpZ2h0ID0gYCR7Y2hpbGRIZWlnaHQgKyAxNDAgKyBpbWdIZWlnaHQgLyAyfXB4YDtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBoYW5kbGVSZXNpemUoKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGhhbmRsZVJlc2l6ZSk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9hZCcsIGhhbmRsZVJlc2l6ZSk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBpZD1cImludHJvZHVjdGlvblwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnRyb2R1Y3Rpb24tY29udGFpbmVyIFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lclwiPlxuICAgICAgICAgIDxpbWcgc3JjPXtgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQVNFX1BBVEh9L2ltYWdlcy9pbnRyb2R1Y3Rpb25fYmFubmVyLmpmaWZgfSByZWY9e3BhcmVudFJlZn0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyLXVuZGVyIG14LWF1dG9cIj5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZy1haXJwbGFuZXMgcG9zaXRpb24tYWJzb2x1dGVcIiBzcmM9e2Ake3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JBU0VfUEFUSH0vaW1hZ2VzL2FpcnBsYW5lXzAxLnBuZ2B9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tY29udGVudFwiPlxuICAgICAgICAgIDxkaXYgcmVmPXtjaGlsZFJlZn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImludHJvZHVjdGlvbi10aXRsZSBteC1hdXRvXCI+e2kxOG5leHQudDxzdHJpbmc+KCdob21lLmludHJvZHVjdGlvbi5pbnRyb2R1Y3Rpb25UaXRsZScpfTwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImludHJvZHVjdGlvbi1kZXNjcmlwdGlvbiBteC1hdXRvXCI+e2kxOG5leHQudDxzdHJpbmc+KCdob21lLmludHJvZHVjdGlvbi5kZXNjcmlwdGlvbicpfTwvZGl2PlxuXG4gICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImRlbW8tYnRuIFwiIG9uQ2xpY2s9eygpID0+IGhhbmRlbE9wZW5EZW1vKCl9IHZhcmlhbnQ9XCJzdWNjZXNzXCI+XG4gICAgICAgICAgICAgIHtpMThuZXh0LnQ8c3RyaW5nPignaG9tZS5pbnRyb2R1Y3Rpb24ud2F0Y2hEZW1vJyl9XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZyBteC1hdXRvIHNoYWRvd1wiIHNyYz17YCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9QQVRIfS9pbWFnZXMvaW1hZ2VfZGVtby5zdmdgfSByZWY9e2ltZ1JlZn0gLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgaWQ9XCJpbnRyb2R1Y3Rpb24tYm90XCIgY2xhc3NOYW1lPVwiaW50cm9kdWN0aW9uLXRpdGxlIG14LWF1dG9cIiBzdHlsZT17eyBtYXJnaW5Ub3A6ICc5N3B4JyB9fT5cbiAgICAgICAgICAgIHtpMThuZXh0LnQ8c3RyaW5nPignaG9tZS5pbnRyb2R1Y3Rpb24uaW50cm9kdWN0aW9uQm90VGl0bGUnKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImludHJvZHVjdGlvbi1zeXN0ZW0gXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBzeXN0ZW0gZC1mbGV4IG14LWF1dG9cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnRyb2R1Y3Rpb24tdGl0bGVcIj57aTE4bmV4dC50PHN0cmluZz4oJ2hvbWUuaW50cm9kdWN0aW9uLmludHJvZHVjdGlvblN5c3RlbScpfTwvZGl2PlxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIlwiIHNyYz17YCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9QQVRIfS9pbWFnZXMvYW1hZGV1c192Mi5wbmdgfSBhbHQ9XCJhbWFkZXVzXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW50cm9kdWN0aW9uLWRlc2NyaXB0aW9uIG14LWF1dG8gXCIgc3R5bGU9e3sgbWFyZ2luVG9wOiAnM3B4JyB9fT5cbiAgICAgICAgICAgIHtpMThuZXh0LnQ8c3RyaW5nPignaG9tZS5pbnRyb2R1Y3Rpb24uZGVzY3JpcHRpb25Cb3QnKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/introduction.tsx\n");

/***/ })

});