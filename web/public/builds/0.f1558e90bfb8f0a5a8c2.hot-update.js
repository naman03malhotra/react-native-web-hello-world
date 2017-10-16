webpackHotUpdate(0,{

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_superagent__ = __webpack_require__(1189);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_superagent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_superagent__);\n/**\n* Api Manager Module\n* Used ES6 arrow function\n*/\n\n\nconst responseTime = 30000;\nconst APIManager = {\n\tgetData: (url, params, header, callback, err) => {\n\t\t// var datax = (params != null)? params  : '';\n\t\t__WEBPACK_IMPORTED_MODULE_0_superagent___default.a.get(url)\n\t\t\t.timeout({\n\t\t\t\tresponse: responseTime\n\t\t\t})\n\t\t\t.set('Authorization', header)\n\t\t\t.query(params)\n\t\t\t.then(callback)\n\t\t\t.catch(err);\n\t},\n\tpostData: (url, params, header, callback, err) => {\n\t\t__WEBPACK_IMPORTED_MODULE_0_superagent___default.a.post(url)\n\t\t\t.timeout({\n\t\t\t\tresponse: responseTime\n\t\t\t})\n\t\t\t.send(params)\n\t\t\t.set('Authorization', header)\n\t\t\t.set('Accept', 'application/json')\n\t\t\t.then(callback)\n\t\t\t.catch(err);\n\t},\n\tputData: (url, params, header, callback, err) => {\n\t\t__WEBPACK_IMPORTED_MODULE_0_superagent___default.a.put(url)\n\t\t\t.timeout({\n\t\t\t\tresponse: responseTime\n\t\t\t})\n\t\t\t.send(params)\n\t\t\t.set('Authorization', header)\n\t\t\t.set('Accept', 'application/json')\n\t\t\t.then(callback)\n\t\t\t.catch(err);\n\t},\n\tdeleteData: (url, callback, header, err) => {\n\t\t__WEBPACK_IMPORTED_MODULE_0_superagent___default.a.delete(url)\n\t\t\t.timeout({\n\t\t\t\tresponse: responseTime\n\t\t\t})\n\t\t\t.send(params)\n\t\t\t.set('Authorization', header)\n\t\t\t.set('Accept', 'application/json')\n\t\t\t.then(callback)\n\t\t\t.catch(err);\n\t}\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (APIManager);\n\n\n// postData: (url, params, header) => {\n// \treturn new Promise((resolve, reject) => {\n// \tRequest.post(url)\n// \t\t.timeout({\n// \t\t\tresponse: responseTime\n// \t\t})\n// \t\t.send(params)\n// \t\t.set('Authorization', header)\n// \t\t.set('Accept', 'application/json')\n// \t\t.then(resolve)\n// \t\t.catch(reject);\n// \t});\n// },\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDU0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXBwL3V0aWxzL0FQSU1hbmFnZXIuanM/OGMwMSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiogQXBpIE1hbmFnZXIgTW9kdWxlXG4qIFVzZWQgRVM2IGFycm93IGZ1bmN0aW9uXG4qL1xuaW1wb3J0IFJlcXVlc3QgZnJvbSAnc3VwZXJhZ2VudCc7XG5cbmNvbnN0IHJlc3BvbnNlVGltZSA9IDMwMDAwO1xuY29uc3QgQVBJTWFuYWdlciA9IHtcblx0Z2V0RGF0YTogKHVybCwgcGFyYW1zLCBoZWFkZXIsIGNhbGxiYWNrLCBlcnIpID0+IHtcblx0XHQvLyB2YXIgZGF0YXggPSAocGFyYW1zICE9IG51bGwpPyBwYXJhbXMgIDogJyc7XG5cdFx0UmVxdWVzdC5nZXQodXJsKVxuXHRcdFx0LnRpbWVvdXQoe1xuXHRcdFx0XHRyZXNwb25zZTogcmVzcG9uc2VUaW1lXG5cdFx0XHR9KVxuXHRcdFx0LnNldCgnQXV0aG9yaXphdGlvbicsIGhlYWRlcilcblx0XHRcdC5xdWVyeShwYXJhbXMpXG5cdFx0XHQudGhlbihjYWxsYmFjaylcblx0XHRcdC5jYXRjaChlcnIpO1xuXHR9LFxuXHRwb3N0RGF0YTogKHVybCwgcGFyYW1zLCBoZWFkZXIsIGNhbGxiYWNrLCBlcnIpID0+IHtcblx0XHRSZXF1ZXN0LnBvc3QodXJsKVxuXHRcdFx0LnRpbWVvdXQoe1xuXHRcdFx0XHRyZXNwb25zZTogcmVzcG9uc2VUaW1lXG5cdFx0XHR9KVxuXHRcdFx0LnNlbmQocGFyYW1zKVxuXHRcdFx0LnNldCgnQXV0aG9yaXphdGlvbicsIGhlYWRlcilcblx0XHRcdC5zZXQoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi9qc29uJylcblx0XHRcdC50aGVuKGNhbGxiYWNrKVxuXHRcdFx0LmNhdGNoKGVycik7XG5cdH0sXG5cdHB1dERhdGE6ICh1cmwsIHBhcmFtcywgaGVhZGVyLCBjYWxsYmFjaywgZXJyKSA9PiB7XG5cdFx0UmVxdWVzdC5wdXQodXJsKVxuXHRcdFx0LnRpbWVvdXQoe1xuXHRcdFx0XHRyZXNwb25zZTogcmVzcG9uc2VUaW1lXG5cdFx0XHR9KVxuXHRcdFx0LnNlbmQocGFyYW1zKVxuXHRcdFx0LnNldCgnQXV0aG9yaXphdGlvbicsIGhlYWRlcilcblx0XHRcdC5zZXQoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi9qc29uJylcblx0XHRcdC50aGVuKGNhbGxiYWNrKVxuXHRcdFx0LmNhdGNoKGVycik7XG5cdH0sXG5cdGRlbGV0ZURhdGE6ICh1cmwsIGNhbGxiYWNrLCBoZWFkZXIsIGVycikgPT4ge1xuXHRcdFJlcXVlc3QuZGVsZXRlKHVybClcblx0XHRcdC50aW1lb3V0KHtcblx0XHRcdFx0cmVzcG9uc2U6IHJlc3BvbnNlVGltZVxuXHRcdFx0fSlcblx0XHRcdC5zZW5kKHBhcmFtcylcblx0XHRcdC5zZXQoJ0F1dGhvcml6YXRpb24nLCBoZWFkZXIpXG5cdFx0XHQuc2V0KCdBY2NlcHQnLCAnYXBwbGljYXRpb24vanNvbicpXG5cdFx0XHQudGhlbihjYWxsYmFjaylcblx0XHRcdC5jYXRjaChlcnIpO1xuXHR9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBUElNYW5hZ2VyO1xuXG5cbi8vIHBvc3REYXRhOiAodXJsLCBwYXJhbXMsIGhlYWRlcikgPT4ge1xuLy8gXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuLy8gXHRSZXF1ZXN0LnBvc3QodXJsKVxuLy8gXHRcdC50aW1lb3V0KHtcbi8vIFx0XHRcdHJlc3BvbnNlOiByZXNwb25zZVRpbWVcbi8vIFx0XHR9KVxuLy8gXHRcdC5zZW5kKHBhcmFtcylcbi8vIFx0XHQuc2V0KCdBdXRob3JpemF0aW9uJywgaGVhZGVyKVxuLy8gXHRcdC5zZXQoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi9qc29uJylcbi8vIFx0XHQudGhlbihyZXNvbHZlKVxuLy8gXHRcdC5jYXRjaChyZWplY3QpO1xuLy8gXHR9KTtcbi8vIH0sXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcC91dGlscy9BUElNYW5hZ2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA0NTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///454\n");

/***/ })

})