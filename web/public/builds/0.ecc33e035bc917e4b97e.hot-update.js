webpackHotUpdate(0,{

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(132);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_reducer__ = __webpack_require__(1210);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_form_reducer__ = __webpack_require__(1177);\n\n\n\n\nconst combineReducer = Object(__WEBPACK_IMPORTED_MODULE_0_redux__[\"combineReducers\"])({\n  appLoad: __WEBPACK_IMPORTED_MODULE_1__app_reducer__[\"a\" /* default */],\n  signUpForm: __WEBPACK_IMPORTED_MODULE_2__signup_form_reducer__[\"a\" /* default */]\n});\n\nconst appReducer = Object(__WEBPACK_IMPORTED_MODULE_0_redux__[\"combineReducers\"])({\n  app: combineReducer\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (appReducer); \n\n\n// import clone        from 'clone';\n// import assign       from 'object-assign';\n// import {\n//   TOGGLE_COLOR,\n//   EXAMPLE_REQUEST_START,\n//   EXAMPLE_REQUEST_DATA,\n// } from '../constants/Constants';\n\n// const initialState = {\n//   color: 'red',\n//   data: {\n//     loading: false,\n//     objects: [],\n//   },\n// };\n\n// export default function reduce(state = initialState, action) {\n//   switch (action.type) {\n//   case TOGGLE_COLOR:\n//     return assign({}, state, {\n//       color: state.color === 'red' ? 'blue' : 'red'\n//     });\n\n//   case EXAMPLE_REQUEST_START:\n//     return assign({}, state, {\n//       data: assign({}, state.data, {\n//         loading: true,\n//       }),\n//     });\n\n//   case EXAMPLE_REQUEST_DATA:\n//     return assign({}, state, {\n//       data: assign({}, state.data, {\n//         loading: false,\n//         objects: action.data,\n//       }),\n//     });\n\n//   default:\n//     return state;\n//   }\n// }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTE3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXBwL3JlZHVjZXJzL3JlZHVjZXJzLmpzPzg3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IGFwcExvYWQgZnJvbSAnLi9hcHBfcmVkdWNlcic7XG5pbXBvcnQgc2lnblVwRm9ybSBmcm9tICcuL3NpZ251cF9mb3JtX3JlZHVjZXInO1xuXG5jb25zdCBjb21iaW5lUmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIGFwcExvYWQsXG4gIHNpZ25VcEZvcm1cbn0pO1xuXG5jb25zdCBhcHBSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgYXBwOiBjb21iaW5lUmVkdWNlclxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGFwcFJlZHVjZXI7IFxuXG5cbi8vIGltcG9ydCBjbG9uZSAgICAgICAgZnJvbSAnY2xvbmUnO1xuLy8gaW1wb3J0IGFzc2lnbiAgICAgICBmcm9tICdvYmplY3QtYXNzaWduJztcbi8vIGltcG9ydCB7XG4vLyAgIFRPR0dMRV9DT0xPUixcbi8vICAgRVhBTVBMRV9SRVFVRVNUX1NUQVJULFxuLy8gICBFWEFNUExFX1JFUVVFU1RfREFUQSxcbi8vIH0gZnJvbSAnLi4vY29uc3RhbnRzL0NvbnN0YW50cyc7XG5cbi8vIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbi8vICAgY29sb3I6ICdyZWQnLFxuLy8gICBkYXRhOiB7XG4vLyAgICAgbG9hZGluZzogZmFsc2UsXG4vLyAgICAgb2JqZWN0czogW10sXG4vLyAgIH0sXG4vLyB9O1xuXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2Uoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuLy8gICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4vLyAgIGNhc2UgVE9HR0xFX0NPTE9SOlxuLy8gICAgIHJldHVybiBhc3NpZ24oe30sIHN0YXRlLCB7XG4vLyAgICAgICBjb2xvcjogc3RhdGUuY29sb3IgPT09ICdyZWQnID8gJ2JsdWUnIDogJ3JlZCdcbi8vICAgICB9KTtcblxuLy8gICBjYXNlIEVYQU1QTEVfUkVRVUVTVF9TVEFSVDpcbi8vICAgICByZXR1cm4gYXNzaWduKHt9LCBzdGF0ZSwge1xuLy8gICAgICAgZGF0YTogYXNzaWduKHt9LCBzdGF0ZS5kYXRhLCB7XG4vLyAgICAgICAgIGxvYWRpbmc6IHRydWUsXG4vLyAgICAgICB9KSxcbi8vICAgICB9KTtcblxuLy8gICBjYXNlIEVYQU1QTEVfUkVRVUVTVF9EQVRBOlxuLy8gICAgIHJldHVybiBhc3NpZ24oe30sIHN0YXRlLCB7XG4vLyAgICAgICBkYXRhOiBhc3NpZ24oe30sIHN0YXRlLmRhdGEsIHtcbi8vICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4vLyAgICAgICAgIG9iamVjdHM6IGFjdGlvbi5kYXRhLFxuLy8gICAgICAgfSksXG4vLyAgICAgfSk7XG5cbi8vICAgZGVmYXVsdDpcbi8vICAgICByZXR1cm4gc3RhdGU7XG4vLyAgIH1cbi8vIH1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwL3JlZHVjZXJzL3JlZHVjZXJzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///117\n");

/***/ }),

/***/ 1210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(132);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_constants__ = __webpack_require__(448);\n\n\n\nconst initialLoad = (state = { access_token: null }, action) => {\n\tswitch (__WEBPACK_IMPORTED_MODULE_1__constants_constants__[\"a\" /* default */].type) {\n\t\tcase __WEBPACK_IMPORTED_MODULE_1__constants_constants__[\"a\" /* default */].APP.INITIAL_LOAD:\n\t\t\treturn Object.assign({}, state, action.data);\n\t}\n\treturn state;\n};\n\nconst appLoad = Object(__WEBPACK_IMPORTED_MODULE_0_redux__[\"combineReducer\"])({\n  initalLoad\n});\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (appLoad);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTIxMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2FwcC9yZWR1Y2Vycy9hcHBfcmVkdWNlci5qcz82YjM3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VyIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IEFDVElPTiBmcm9tICcuLi9jb25zdGFudHMvY29uc3RhbnRzJztcblxuY29uc3QgaW5pdGlhbExvYWQgPSAoc3RhdGUgPSB7IGFjY2Vzc190b2tlbjogbnVsbCB9LCBhY3Rpb24pID0+IHtcblx0c3dpdGNoIChBQ1RJT04udHlwZSkge1xuXHRcdGNhc2UgQUNUSU9OLkFQUC5JTklUSUFMX0xPQUQ6XG5cdFx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIGFjdGlvbi5kYXRhKTtcblx0fVxuXHRyZXR1cm4gc3RhdGU7XG59O1xuXG5jb25zdCBhcHBMb2FkID0gY29tYmluZVJlZHVjZXIoe1xuICBpbml0YWxMb2FkXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgYXBwTG9hZDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwL3JlZHVjZXJzL2FwcF9yZWR1Y2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1210\n");

/***/ })

})