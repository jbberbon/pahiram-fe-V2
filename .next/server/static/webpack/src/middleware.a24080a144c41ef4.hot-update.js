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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_easy_middlewares__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-easy-middlewares */ \"(middleware)/./node_modules/next-easy-middlewares/dist/index.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/dist/esm/api/server.js\");\n\n\nconst blogMiddleware = async (request)=>{\n    console.log(\"Middleware for /blog\", request.nextUrl.pathname);\n    return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.next();\n};\nconst middlewares = {\n    \"/\": blogMiddleware\n};\n// @ts-ignore\nconst middleware = (0,next_easy_middlewares__WEBPACK_IMPORTED_MODULE_0__.createMiddleware)(middlewares);\nconst config = {\n    matcher: [\n        \"/((?!api/|_next/|_static|_vercel|[\\\\w-]+\\\\.\\\\w+).*)\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL21pZGRsZXdhcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF5RDtBQUVIO0FBRXRELE1BQU1FLGlCQUFpQixPQUFPQztJQUM1QkMsUUFBUUMsR0FBRyxDQUFDLHdCQUF3QkYsUUFBUUcsT0FBTyxDQUFDQyxRQUFRO0lBQzVELE9BQU9OLHFEQUFZQSxDQUFDTyxJQUFJO0FBQzFCO0FBRUEsTUFBTUMsY0FBYztJQUNsQixLQUFLUDtBQUNQO0FBRUEsYUFBYTtBQUNOLE1BQU1RLGFBQWFWLHVFQUFnQkEsQ0FBQ1MsYUFBYTtBQUVqRCxNQUFNRSxTQUFTO0lBQ3BCQyxTQUFTO1FBQUM7S0FBc0Q7QUFDbEUsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvbWlkZGxld2FyZS50cz9kMTk5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZU1pZGRsZXdhcmUgfSBmcm9tICduZXh0LWVhc3ktbWlkZGxld2FyZXMnO1xyXG5pbXBvcnQge2F1dGhNaWRkbGV3YXJlfSBmcm9tIFwiQC91dGlscy9fbWlkZGxld2FyZVwiO1xyXG5pbXBvcnQge05leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2V9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xyXG5cclxuY29uc3QgYmxvZ01pZGRsZXdhcmUgPSBhc3luYyAocmVxdWVzdDogTmV4dFJlcXVlc3QpID0+IHtcclxuICBjb25zb2xlLmxvZygnTWlkZGxld2FyZSBmb3IgL2Jsb2cnLCByZXF1ZXN0Lm5leHRVcmwucGF0aG5hbWUpO1xyXG4gIHJldHVybiBOZXh0UmVzcG9uc2UubmV4dCgpO1xyXG59O1xyXG5cclxuY29uc3QgbWlkZGxld2FyZXMgPSB7XHJcbiAgJy8nOiBibG9nTWlkZGxld2FyZSxcclxufVxyXG5cclxuLy8gQHRzLWlnbm9yZVxyXG5leHBvcnQgY29uc3QgbWlkZGxld2FyZSA9IGNyZWF0ZU1pZGRsZXdhcmUobWlkZGxld2FyZXMpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcclxuICBtYXRjaGVyOiBbJy8oKD8hYXBpL3xfbmV4dC98X3N0YXRpY3xfdmVyY2VsfFtcXFxcdy1dK1xcXFwuXFxcXHcrKS4qKSddLFxyXG59OyJdLCJuYW1lcyI6WyJjcmVhdGVNaWRkbGV3YXJlIiwiTmV4dFJlc3BvbnNlIiwiYmxvZ01pZGRsZXdhcmUiLCJyZXF1ZXN0IiwiY29uc29sZSIsImxvZyIsIm5leHRVcmwiLCJwYXRobmFtZSIsIm5leHQiLCJtaWRkbGV3YXJlcyIsIm1pZGRsZXdhcmUiLCJjb25maWciLCJtYXRjaGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./src/middleware.ts\n");

/***/ })

});