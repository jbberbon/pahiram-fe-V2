"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src/middleware",{

/***/ "(middleware)/./src/utils/_middleware.ts":
/*!**********************************!*\
  !*** ./src/utils/_middleware.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authMiddleware: () => (/* binding */ authMiddleware)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/dist/esm/api/server.js\");\n\nconst authMiddleware = async (request)=>{\n    console.log(\"Middleware for /blog\", request.nextUrl.pathname);\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.next();\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL3V0aWxzL19taWRkbGV3YXJlLnRzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTJDO0FBV3BDLE1BQU1DLGlCQUFpQixPQUFPQztJQUNqQ0MsUUFBUUMsR0FBRyxDQUFDLHdCQUF3QkYsUUFBUUcsT0FBTyxDQUFDQyxRQUFRO0lBQzVELE9BQU9OLHFEQUFZQSxDQUFDTyxJQUFJO0FBQzVCLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzL19taWRkbGV3YXJlLnRzP2E5YmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XHJcbmltcG9ydCB0eXBlIHsgTmV4dFJlcXVlc3QgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcclxuaW1wb3J0IHtcclxuICAgIHB1YmxpY1JvdXRlcyxcclxuICAgIGF1dGhSb3V0ZXMsXHJcbiAgICBhcGlBdXRoUHJlZml4LFxyXG4gICAgREVGQVVMVF9MT0dJTl9SRURJUkVDVFxyXG59IGZyb20gXCJAL3JvdXRlc1wiO1xyXG5pbXBvcnQgTWlkZGxld2FyZVV0aWxzIGZyb20gXCJAL3V0aWxzL21pZGRsZXdhcmUtY2xhc3NcIjtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgYXV0aE1pZGRsZXdhcmUgPSBhc3luYyAocmVxdWVzdDogTmV4dFJlcXVlc3QpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdNaWRkbGV3YXJlIGZvciAvYmxvZycsIHJlcXVlc3QubmV4dFVybC5wYXRobmFtZSk7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLm5leHQoKTtcclxufTsiXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiYXV0aE1pZGRsZXdhcmUiLCJyZXF1ZXN0IiwiY29uc29sZSIsImxvZyIsIm5leHRVcmwiLCJwYXRobmFtZSIsIm5leHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./src/utils/_middleware.ts\n");

/***/ })

});