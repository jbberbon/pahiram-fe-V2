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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authMiddleware: () => (/* binding */ authMiddleware)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/dist/esm/api/server.js\");\n\nconst authMiddleware = async (request)=>{\n    console.log(\"Middleware for /blog\", request.nextUrl.pathname);\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.next();\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL3V0aWxzL19taWRkbGV3YXJlLnRzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXNEO0FBSS9DLE1BQU1DLGlCQUFpQixPQUFPQztJQUNqQ0MsUUFBUUMsR0FBRyxDQUFDLHdCQUF3QkYsUUFBUUcsT0FBTyxDQUFDQyxRQUFRO0lBQzVELE9BQU9OLHFEQUFZQSxDQUFDTyxJQUFJO0FBQzVCLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzL19taWRkbGV3YXJlLnRzP2E5YmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcclxuaW1wb3J0IHthcGlBdXRoUHJlZml4LCBhdXRoUm91dGVzLCBERUZBVUxUX0xPR0lOX1JFRElSRUNULCBwdWJsaWNSb3V0ZXN9IGZyb20gXCJAL3JvdXRlc1wiO1xyXG5pbXBvcnQge2Nvb2tpZXN9IGZyb20gXCJuZXh0L2hlYWRlcnNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoTWlkZGxld2FyZSA9IGFzeW5jIChyZXF1ZXN0OiBOZXh0UmVxdWVzdCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ01pZGRsZXdhcmUgZm9yIC9ibG9nJywgcmVxdWVzdC5uZXh0VXJsLnBhdGhuYW1lKTtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UubmV4dCgpO1xyXG59OyJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJhdXRoTWlkZGxld2FyZSIsInJlcXVlc3QiLCJjb25zb2xlIiwibG9nIiwibmV4dFVybCIsInBhdGhuYW1lIiwibmV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./src/utils/_middleware.ts\n");

/***/ })

});