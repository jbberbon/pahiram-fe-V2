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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authMiddleware: () => (/* binding */ authMiddleware)\n/* harmony export */ });\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/routes */ \"(middleware)/./src/routes.ts\");\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/headers */ \"(middleware)/./node_modules/next/dist/esm/api/headers.js\");\n\n\nconst authMiddleware = async ({ request })=>{\n    const isAuthenticated = (0,next_headers__WEBPACK_IMPORTED_MODULE_1__.cookies)().get(\"isAuthenticated\")?.value;\n    const { nextUrl } = request;\n    const isPublicRoute = _routes__WEBPACK_IMPORTED_MODULE_0__.publicRoutes.includes(nextUrl.pathname);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL3V0aWxzL19taWRkbGV3YXJlLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUN5RjtBQUNwRDtBQUc5QixNQUFNRSxpQkFBaUIsT0FBTyxFQUFDQyxPQUFPLEVBQTBCO0lBQ3BFLE1BQU1DLGtCQUFrQkgscURBQU9BLEdBQUdJLEdBQUcsQ0FBQyxvQkFBb0JDO0lBRXpELE1BQU0sRUFBRUMsT0FBTyxFQUFFLEdBQUdKO0lBQ3BCLE1BQU1LLGdCQUFnQlIsaURBQVlBLENBQUNTLFFBQVEsQ0FBQ0YsUUFBUUcsUUFBUTtBQUloRSxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy91dGlscy9fbWlkZGxld2FyZS50cz9hOWJhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZX0gZnJvbSBcIm5leHQvc2VydmVyXCI7XHJcbmltcG9ydCB7YXBpQXV0aFByZWZpeCwgYXV0aFJvdXRlcywgREVGQVVMVF9MT0dJTl9SRURJUkVDVCwgcHVibGljUm91dGVzfSBmcm9tIFwiQC9yb3V0ZXNcIjtcclxuaW1wb3J0IHtjb29raWVzfSBmcm9tIFwibmV4dC9oZWFkZXJzXCI7XHJcbmltcG9ydCB7TWlkZGxld2FyZUZ1bmN0aW9uUHJvcHN9IGZyb20gXCJuZXh0LWVhc3ktbWlkZGxld2FyZXNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoTWlkZGxld2FyZSA9IGFzeW5jICh7cmVxdWVzdH06IE1pZGRsZXdhcmVGdW5jdGlvblByb3BzKSA9PiB7XHJcbiAgIGNvbnN0IGlzQXV0aGVudGljYXRlZCA9IGNvb2tpZXMoKS5nZXQoJ2lzQXV0aGVudGljYXRlZCcpPy52YWx1ZTtcclxuXHJcbiAgICBjb25zdCB7IG5leHRVcmwgfSA9IHJlcXVlc3Q7XHJcbiAgICBjb25zdCBpc1B1YmxpY1JvdXRlID0gcHVibGljUm91dGVzLmluY2x1ZGVzKG5leHRVcmwucGF0aG5hbWUpO1xyXG5cclxuXHJcbiAgICBcclxufTsiXSwibmFtZXMiOlsicHVibGljUm91dGVzIiwiY29va2llcyIsImF1dGhNaWRkbGV3YXJlIiwicmVxdWVzdCIsImlzQXV0aGVudGljYXRlZCIsImdldCIsInZhbHVlIiwibmV4dFVybCIsImlzUHVibGljUm91dGUiLCJpbmNsdWRlcyIsInBhdGhuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./src/utils/_middleware.ts\n");

/***/ })

});