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

/***/ "(middleware)/./src/middleware.ts":
/*!***************************!*\
  !*** ./src/middleware.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_easy_middlewares__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-easy-middlewares */ \"(middleware)/./node_modules/next-easy-middlewares/dist/index.js\");\n/* harmony import */ var _utils_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/_middleware */ \"(middleware)/./src/utils/_middleware.ts\");\n\n\nconst middlewares = {\n    \"/\": _utils_middleware__WEBPACK_IMPORTED_MODULE_1__.authMiddleware\n};\n// @ts-ignore\nconst middleware = (0,next_easy_middlewares__WEBPACK_IMPORTED_MODULE_0__.createMiddleware)(middlewares);\nconst config = {\n    matcher: [\n        \"/((?!api/|_next/|_static|_vercel|[\\\\w-]+\\\\.\\\\w+).*)\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL21pZGRsZXdhcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFnRjtBQUM3QjtBQUluRCxNQUFNRSxjQUFjO0lBQ2xCLEtBQUtELDZEQUFjQTtBQUNyQjtBQUVBLGFBQWE7QUFDTixNQUFNRSxhQUFhSCx1RUFBZ0JBLENBQUNFLGFBQWE7QUFFakQsTUFBTUUsU0FBUztJQUNwQkMsU0FBUztRQUFDO0tBQXNEO0FBQ2xFLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL21pZGRsZXdhcmUudHM/ZDE5OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NyZWF0ZU1pZGRsZXdhcmUsIE1pZGRsZXdhcmVGdW5jdGlvblByb3BzfSBmcm9tICduZXh0LWVhc3ktbWlkZGxld2FyZXMnO1xyXG5pbXBvcnQge2F1dGhNaWRkbGV3YXJlfSBmcm9tIFwiQC91dGlscy9fbWlkZGxld2FyZVwiO1xyXG5pbXBvcnQge05leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2V9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xyXG5cclxuXHJcbmNvbnN0IG1pZGRsZXdhcmVzID0ge1xyXG4gICcvJzogYXV0aE1pZGRsZXdhcmUsXHJcbn1cclxuXHJcbi8vIEB0cy1pZ25vcmVcclxuZXhwb3J0IGNvbnN0IG1pZGRsZXdhcmUgPSBjcmVhdGVNaWRkbGV3YXJlKG1pZGRsZXdhcmVzKTtcclxuXHJcbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XHJcbiAgbWF0Y2hlcjogWycvKCg/IWFwaS98X25leHQvfF9zdGF0aWN8X3ZlcmNlbHxbXFxcXHctXStcXFxcLlxcXFx3KykuKiknXSxcclxufTsiXSwibmFtZXMiOlsiY3JlYXRlTWlkZGxld2FyZSIsImF1dGhNaWRkbGV3YXJlIiwibWlkZGxld2FyZXMiLCJtaWRkbGV3YXJlIiwiY29uZmlnIiwibWF0Y2hlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./src/middleware.ts\n");

/***/ }),

/***/ "(middleware)/./src/utils/_middleware.ts":
/*!**********************************!*\
  !*** ./src/utils/_middleware.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authMiddleware: () => (/* binding */ authMiddleware)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/dist/esm/api/server.js\");\n\nconst authMiddleware = async ({ request, response })=>{\n    console.log(\"Middleware for /blog\", request.nextUrl.pathname);\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.next();\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL3V0aWxzL19taWRkbGV3YXJlLnRzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXNEO0FBSy9DLE1BQU1DLGlCQUFpQixPQUFPLEVBQUNDLE9BQU8sRUFBRUMsUUFBUSxFQUEwQjtJQUM3RUMsUUFBUUMsR0FBRyxDQUFDLHdCQUF3QkgsUUFBUUksT0FBTyxDQUFDQyxRQUFRO0lBQzVELE9BQU9QLHFEQUFZQSxDQUFDUSxJQUFJO0FBQzVCLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzL19taWRkbGV3YXJlLnRzP2E5YmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcclxuaW1wb3J0IHthcGlBdXRoUHJlZml4LCBhdXRoUm91dGVzLCBERUZBVUxUX0xPR0lOX1JFRElSRUNULCBwdWJsaWNSb3V0ZXN9IGZyb20gXCJAL3JvdXRlc1wiO1xyXG5pbXBvcnQge2Nvb2tpZXN9IGZyb20gXCJuZXh0L2hlYWRlcnNcIjtcclxuaW1wb3J0IHtNaWRkbGV3YXJlRnVuY3Rpb25Qcm9wc30gZnJvbSBcIm5leHQtZWFzeS1taWRkbGV3YXJlc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGF1dGhNaWRkbGV3YXJlID0gYXN5bmMgKHtyZXF1ZXN0LCByZXNwb25zZX06IE1pZGRsZXdhcmVGdW5jdGlvblByb3BzKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnTWlkZGxld2FyZSBmb3IgL2Jsb2cnLCByZXF1ZXN0Lm5leHRVcmwucGF0aG5hbWUpO1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5uZXh0KCk7XHJcbn07Il0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImF1dGhNaWRkbGV3YXJlIiwicmVxdWVzdCIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsIm5leHRVcmwiLCJwYXRobmFtZSIsIm5leHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./src/utils/_middleware.ts\n");

/***/ })

});