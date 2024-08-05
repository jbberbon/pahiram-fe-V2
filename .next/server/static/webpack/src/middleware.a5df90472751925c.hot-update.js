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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authMiddleware: () => (/* binding */ authMiddleware)\n/* harmony export */ });\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/routes */ \"(middleware)/./src/routes.ts\");\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/headers */ \"(middleware)/./node_modules/next/dist/esm/api/headers.js\");\n\n\nconst authMiddleware = async ({ request })=>{\n    const isAuthenticated = (0,next_headers__WEBPACK_IMPORTED_MODULE_1__.cookies)().get(\"isAuthenticated\")?.value;\n    const { nextUrl } = request;\n    const isPublicRoute = _routes__WEBPACK_IMPORTED_MODULE_0__.publicRoutes.includes(nextUrl.pathname);\n    if (!isAuthenticated && !isPublicRoute) {}\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL3V0aWxzL19taWRkbGV3YXJlLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUN5RjtBQUNwRDtBQUc5QixNQUFNRSxpQkFBaUIsT0FBTyxFQUFDQyxPQUFPLEVBQTBCO0lBQ3BFLE1BQU1DLGtCQUFrQkgscURBQU9BLEdBQUdJLEdBQUcsQ0FBQyxvQkFBb0JDO0lBRXpELE1BQU0sRUFBRUMsT0FBTyxFQUFFLEdBQUdKO0lBQ3BCLE1BQU1LLGdCQUFnQlIsaURBQVlBLENBQUNTLFFBQVEsQ0FBQ0YsUUFBUUcsUUFBUTtJQUU1RCxJQUFHLENBQUNOLG1CQUFtQixDQUFDSSxlQUFjLENBRXRDO0FBQ0osRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvdXRpbHMvX21pZGRsZXdhcmUudHM/YTliYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2V9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xyXG5pbXBvcnQge2FwaUF1dGhQcmVmaXgsIGF1dGhSb3V0ZXMsIERFRkFVTFRfTE9HSU5fUkVESVJFQ1QsIHB1YmxpY1JvdXRlc30gZnJvbSBcIkAvcm91dGVzXCI7XHJcbmltcG9ydCB7Y29va2llc30gZnJvbSBcIm5leHQvaGVhZGVyc1wiO1xyXG5pbXBvcnQge01pZGRsZXdhcmVGdW5jdGlvblByb3BzfSBmcm9tIFwibmV4dC1lYXN5LW1pZGRsZXdhcmVzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgYXV0aE1pZGRsZXdhcmUgPSBhc3luYyAoe3JlcXVlc3R9OiBNaWRkbGV3YXJlRnVuY3Rpb25Qcm9wcykgPT4ge1xyXG4gICBjb25zdCBpc0F1dGhlbnRpY2F0ZWQgPSBjb29raWVzKCkuZ2V0KCdpc0F1dGhlbnRpY2F0ZWQnKT8udmFsdWU7XHJcblxyXG4gICAgY29uc3QgeyBuZXh0VXJsIH0gPSByZXF1ZXN0O1xyXG4gICAgY29uc3QgaXNQdWJsaWNSb3V0ZSA9IHB1YmxpY1JvdXRlcy5pbmNsdWRlcyhuZXh0VXJsLnBhdGhuYW1lKTtcclxuXHJcbiAgICBpZighaXNBdXRoZW50aWNhdGVkICYmICFpc1B1YmxpY1JvdXRlKXtcclxuICAgICAgICBcclxuICAgIH1cclxufTsiXSwibmFtZXMiOlsicHVibGljUm91dGVzIiwiY29va2llcyIsImF1dGhNaWRkbGV3YXJlIiwicmVxdWVzdCIsImlzQXV0aGVudGljYXRlZCIsImdldCIsInZhbHVlIiwibmV4dFVybCIsImlzUHVibGljUm91dGUiLCJpbmNsdWRlcyIsInBhdGhuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./src/utils/_middleware.ts\n");

/***/ })

});