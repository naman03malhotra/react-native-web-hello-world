webpackHotUpdate(0,{

/***/ 1177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(132);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_constants__ = __webpack_require__(448);\n\n// import assign from 'object-assign';\n\n\nconst signUpAccount = (state = { open: false, loadingOtp: false }, action) => {\n\tswitch (action.type) {\n\t\tcase __WEBPACK_IMPORTED_MODULE_1__constants_constants__[\"a\" /* default */].SIGNUP.SIGNUP_ACCOUNT:\n\t\t\treturn Object.assign({}, state, action.data);\n\t\tcase __WEBPACK_IMPORTED_MODULE_1__constants_constants__[\"a\" /* default */].SIGNUP.TOGGLE_OTP:\n\t\t\treturn Object.assign({}, state, action.data);\n\t\tcase __WEBPACK_IMPORTED_MODULE_1__constants_constants__[\"a\" /* default */].SIGNUP.LOADING_OTP:\n\t\t\treturn Object.assign({}, state, action.data);\n\t\tcase __WEBPACK_IMPORTED_MODULE_1__constants_constants__[\"a\" /* default */].SIGNUP.SIGNUP_ACCOUNT_ERR:\n\t\t\treturn Object.assign({}, state, action.data);\n\t}\n\treturn state;\n};\n\nconst signInAccount = (state = { access_token: null }, action) => {\n\tswitch (action.type) {\n\t\tcase __WEBPACK_IMPORTED_MODULE_1__constants_constants__[\"a\" /* default */].SIGNUP.SIGNIN_ACCOUNT:\n\t\t\treturn Object.assign({}, state, action.data);\n\t}\n\treturn state;\n};\n\nconst signUpMobileInput = (state = { mobile: '' }, action) => {\n\tswitch (action.type) {\n\t\tcase __WEBPACK_IMPORTED_MODULE_1__constants_constants__[\"a\" /* default */].SIGNUP.MOBILE_INPUT:\n\t\t\treturn Object.assign({}, state, action.data);\n\t}\n\treturn state;\n};\n\nconst signUpForm = Object(__WEBPACK_IMPORTED_MODULE_0_redux__[\"combineReducers\"])({\n  signUpAccount,\n  signInAccount,\n\tsignUpMobileInput\n});\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (signUpForm);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTE3Ny5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2FwcC9yZWR1Y2Vycy9zaWdudXBfZm9ybV9yZWR1Y2VyLmpzPzdmMWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xuLy8gaW1wb3J0IGFzc2lnbiBmcm9tICdvYmplY3QtYXNzaWduJztcbmltcG9ydCBBQ1RJT04gZnJvbSAnLi4vY29uc3RhbnRzL2NvbnN0YW50cyc7XG5cbmNvbnN0IHNpZ25VcEFjY291bnQgPSAoc3RhdGUgPSB7IG9wZW46IGZhbHNlLCBsb2FkaW5nT3RwOiBmYWxzZSB9LCBhY3Rpb24pID0+IHtcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xuXHRcdGNhc2UgQUNUSU9OLlNJR05VUC5TSUdOVVBfQUNDT1VOVDpcblx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgYWN0aW9uLmRhdGEpO1xuXHRcdGNhc2UgQUNUSU9OLlNJR05VUC5UT0dHTEVfT1RQOlxuXHRcdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCBhY3Rpb24uZGF0YSk7XG5cdFx0Y2FzZSBBQ1RJT04uU0lHTlVQLkxPQURJTkdfT1RQOlxuXHRcdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCBhY3Rpb24uZGF0YSk7XG5cdFx0Y2FzZSBBQ1RJT04uU0lHTlVQLlNJR05VUF9BQ0NPVU5UX0VSUjpcblx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgYWN0aW9uLmRhdGEpO1xuXHR9XG5cdHJldHVybiBzdGF0ZTtcbn07XG5cbmNvbnN0IHNpZ25JbkFjY291bnQgPSAoc3RhdGUgPSB7IGFjY2Vzc190b2tlbjogbnVsbCB9LCBhY3Rpb24pID0+IHtcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xuXHRcdGNhc2UgQUNUSU9OLlNJR05VUC5TSUdOSU5fQUNDT1VOVDpcblx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgYWN0aW9uLmRhdGEpO1xuXHR9XG5cdHJldHVybiBzdGF0ZTtcbn07XG5cbmNvbnN0IHNpZ25VcE1vYmlsZUlucHV0ID0gKHN0YXRlID0geyBtb2JpbGU6ICcnIH0sIGFjdGlvbikgPT4ge1xuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cdFx0Y2FzZSBBQ1RJT04uU0lHTlVQLk1PQklMRV9JTlBVVDpcblx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgYWN0aW9uLmRhdGEpO1xuXHR9XG5cdHJldHVybiBzdGF0ZTtcbn07XG5cbmNvbnN0IHNpZ25VcEZvcm0gPSBjb21iaW5lUmVkdWNlcnMoe1xuICBzaWduVXBBY2NvdW50LFxuICBzaWduSW5BY2NvdW50LFxuXHRzaWduVXBNb2JpbGVJbnB1dFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHNpZ25VcEZvcm07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcC9yZWR1Y2Vycy9zaWdudXBfZm9ybV9yZWR1Y2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTc3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1177\n");

/***/ })

})