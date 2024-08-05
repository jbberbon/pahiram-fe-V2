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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_easy_middlewares__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-easy-middlewares */ \"(middleware)/./node_modules/next-easy-middlewares/dist/index.js\");\n/* harmony import */ var _utils_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/_middleware */ \"(middleware)/./src/utils/_middleware.ts\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/dist/esm/api/server.js\");\n\n\n\nconst globalMiddlewares = {\n    both: _utils_middleware__WEBPACK_IMPORTED_MODULE_1__.authMiddleware\n};\nconst middlewares = {\n    \"/\": async (request)=>{\n        console.log(\"Middleware for /blog\", request.nextUrl.pathname);\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.next();\n    }\n};\n// @ts-ignore\nconst middleware = (0,next_easy_middlewares__WEBPACK_IMPORTED_MODULE_0__.createMiddleware)(middlewares, globalMiddlewares);\nconst config = {\n    matcher: [\n        \"/((?!api/|_next/|_static|_vercel|[\\\\w-]+\\\\.\\\\w+).*)\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL21pZGRsZXdhcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBeUQ7QUFDTjtBQUNHO0FBRXRELE1BQU1HLG9CQUFvQjtJQUN4QkMsTUFBTUgsNkRBQWNBO0FBQ3RCO0FBRUEsTUFBTUksY0FBYztJQUNsQixLQUFLLE9BQU9DO1FBQ1ZDLFFBQVFDLEdBQUcsQ0FBQyx3QkFBd0JGLFFBQVFHLE9BQU8sQ0FBQ0MsUUFBUTtRQUM1RCxPQUFPUixxREFBWUEsQ0FBQ1MsSUFBSTtJQUMxQjtBQUNGO0FBRUEsYUFBYTtBQUNOLE1BQU1DLGFBQWFaLHVFQUFnQkEsQ0FBQ0ssYUFBYUYsbUJBQW1CO0FBRXBFLE1BQU1VLFNBQVM7SUFDcEJDLFNBQVM7UUFBQztLQUFzRDtBQUNsRSxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9taWRkbGV3YXJlLnRzP2QxOTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlTWlkZGxld2FyZSB9IGZyb20gJ25leHQtZWFzeS1taWRkbGV3YXJlcyc7XHJcbmltcG9ydCB7YXV0aE1pZGRsZXdhcmV9IGZyb20gXCJAL3V0aWxzL19taWRkbGV3YXJlXCI7XHJcbmltcG9ydCB7TmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZX0gZnJvbSBcIm5leHQvc2VydmVyXCI7XHJcblxyXG5jb25zdCBnbG9iYWxNaWRkbGV3YXJlcyA9IHtcclxuICBib3RoOiBhdXRoTWlkZGxld2FyZSxcclxufTtcclxuXHJcbmNvbnN0IG1pZGRsZXdhcmVzID0ge1xyXG4gICcvJzogYXN5bmMgKHJlcXVlc3Q6IE5leHRSZXF1ZXN0KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnTWlkZGxld2FyZSBmb3IgL2Jsb2cnLCByZXF1ZXN0Lm5leHRVcmwucGF0aG5hbWUpO1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5uZXh0KCk7XHJcbiAgfSxcclxufVxyXG5cclxuLy8gQHRzLWlnbm9yZVxyXG5leHBvcnQgY29uc3QgbWlkZGxld2FyZSA9IGNyZWF0ZU1pZGRsZXdhcmUobWlkZGxld2FyZXMsIGdsb2JhbE1pZGRsZXdhcmVzKTtcclxuXHJcbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XHJcbiAgbWF0Y2hlcjogWycvKCg/IWFwaS98X25leHQvfF9zdGF0aWN8X3ZlcmNlbHxbXFxcXHctXStcXFxcLlxcXFx3KykuKiknXSxcclxufTsiXSwibmFtZXMiOlsiY3JlYXRlTWlkZGxld2FyZSIsImF1dGhNaWRkbGV3YXJlIiwiTmV4dFJlc3BvbnNlIiwiZ2xvYmFsTWlkZGxld2FyZXMiLCJib3RoIiwibWlkZGxld2FyZXMiLCJyZXF1ZXN0IiwiY29uc29sZSIsImxvZyIsIm5leHRVcmwiLCJwYXRobmFtZSIsIm5leHQiLCJtaWRkbGV3YXJlIiwiY29uZmlnIiwibWF0Y2hlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./src/middleware.ts\n");

/***/ })

});