webpackHotUpdate(0,{

/***/ 1177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(132);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_object_assign__ = __webpack_require__(160);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_object_assign__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_constants__ = __webpack_require__(448);\n\n\n\n\nconst signUpAccount = (state = { open: false, loadingOtp: false }, action) => {\n\tswitch (action.type) {\n\t\tcase __WEBPACK_IMPORTED_MODULE_2__constants_constants__[\"a\" /* default */].SIGNUP.SIGNUP_ACCOUNT:\n\t\t\treturn __WEBPACK_IMPORTED_MODULE_1_object_assign___default()({}, state, action.data);\n\t\tcase __WEBPACK_IMPORTED_MODULE_2__constants_constants__[\"a\" /* default */].SIGNUP.TOGGLE_OTP:\n\t\t\treturn __WEBPACK_IMPORTED_MODULE_1_object_assign___default()({}, state, action.data);\n\t\tcase __WEBPACK_IMPORTED_MODULE_2__constants_constants__[\"a\" /* default */].SIGNUP.LOADING_OTP:\n\t\t\treturn __WEBPACK_IMPORTED_MODULE_1_object_assign___default()({}, state, action.data);\n\t\tcase __WEBPACK_IMPORTED_MODULE_2__constants_constants__[\"a\" /* default */].SIGNUP.SIGNUP_ACCOUNT_ERR:\n\t\t\treturn __WEBPACK_IMPORTED_MODULE_1_object_assign___default()({}, state, action.data);\n\t}\n\treturn state;\n};\n\nconst signUpMobileInput = (state = { mobile: '' }, action) => {\n\tswitch (action.type) {\n\t\tcase __WEBPACK_IMPORTED_MODULE_2__constants_constants__[\"a\" /* default */].SIGNUP.MOBILE_INPUT:\n\t\t\treturn __WEBPACK_IMPORTED_MODULE_1_object_assign___default()({}, state, action.data);\n\t}\n\treturn state;\n};\n\nconst signUpForm = Object(__WEBPACK_IMPORTED_MODULE_0_redux__[\"combineReducers\"])({\n\tsignUpAccount,\n\tsignUpMobileInput\n});\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (signUpForm);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTE3Ny5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2FwcC9yZWR1Y2Vycy9zaWdudXBfZm9ybV9yZWR1Y2VyLmpzPzdmMWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IGFzc2lnbiBmcm9tICdvYmplY3QtYXNzaWduJztcbmltcG9ydCBBQ1RJT04gZnJvbSAnLi4vY29uc3RhbnRzL2NvbnN0YW50cyc7XG5cbmNvbnN0IHNpZ25VcEFjY291bnQgPSAoc3RhdGUgPSB7IG9wZW46IGZhbHNlLCBsb2FkaW5nT3RwOiBmYWxzZSB9LCBhY3Rpb24pID0+IHtcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xuXHRcdGNhc2UgQUNUSU9OLlNJR05VUC5TSUdOVVBfQUNDT1VOVDpcblx0XHRcdHJldHVybiBhc3NpZ24oe30sIHN0YXRlLCBhY3Rpb24uZGF0YSk7XG5cdFx0Y2FzZSBBQ1RJT04uU0lHTlVQLlRPR0dMRV9PVFA6XG5cdFx0XHRyZXR1cm4gYXNzaWduKHt9LCBzdGF0ZSwgYWN0aW9uLmRhdGEpO1xuXHRcdGNhc2UgQUNUSU9OLlNJR05VUC5MT0FESU5HX09UUDpcblx0XHRcdHJldHVybiBhc3NpZ24oe30sIHN0YXRlLCBhY3Rpb24uZGF0YSk7XG5cdFx0Y2FzZSBBQ1RJT04uU0lHTlVQLlNJR05VUF9BQ0NPVU5UX0VSUjpcblx0XHRcdHJldHVybiBhc3NpZ24oe30sIHN0YXRlLCBhY3Rpb24uZGF0YSk7XG5cdH1cblx0cmV0dXJuIHN0YXRlO1xufTtcblxuY29uc3Qgc2lnblVwTW9iaWxlSW5wdXQgPSAoc3RhdGUgPSB7IG1vYmlsZTogJycgfSwgYWN0aW9uKSA9PiB7XG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblx0XHRjYXNlIEFDVElPTi5TSUdOVVAuTU9CSUxFX0lOUFVUOlxuXHRcdFx0cmV0dXJuIGFzc2lnbih7fSwgc3RhdGUsIGFjdGlvbi5kYXRhKTtcblx0fVxuXHRyZXR1cm4gc3RhdGU7XG59O1xuXG5jb25zdCBzaWduVXBGb3JtID0gY29tYmluZVJlZHVjZXJzKHtcblx0c2lnblVwQWNjb3VudCxcblx0c2lnblVwTW9iaWxlSW5wdXRcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBzaWduVXBGb3JtO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHAvcmVkdWNlcnMvc2lnbnVwX2Zvcm1fcmVkdWNlci5qc1xuLy8gbW9kdWxlIGlkID0gMTE3N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1177\n");

/***/ })

})