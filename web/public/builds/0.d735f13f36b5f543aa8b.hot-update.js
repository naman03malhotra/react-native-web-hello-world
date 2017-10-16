webpackHotUpdate(0,{

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"API\", function() { return API; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"COUNTRY_CODE\", function() { return COUNTRY_CODE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CLIENT\", function() { return CLIENT; });\nconst serverIp = '54.169.5.21';\n// const serverIp = '54.169.109.31'; old srever ip\n\nconst API = {\n\tsignup: `http://${serverIp}/signup`,\n\tsignin: `http://${serverIp}/oauth2/token`,\n\tfetchUser: `http://${serverIp}/api/userinfo`,\n\tupdateUser: `http://${serverIp}/api/user/update`,\n\t//landing\n\tcurrentBTCPrice: `http://${serverIp}/api/bid/currentBTCPrice`,\n\t//Trading\n\tcreateBuyBid: `http://${serverIp}/api/bid/buyer/create`,\n\tcreateSellerBid: `http://${serverIp}/api/bid/seller/create`,\n\tgetBuyersBid: `http://${serverIp}/api/bid/buyer/get`,\n\tgetSellersBid: `http://${serverIp}/api/bid/seller/get`,\n\tgetActiveOrders: `http://${serverIp}/api/bid/history`,\n\tcancelBuyerBid: `http://${serverIp}/api/bid/buyer/cancel`,\n\tcancelSellerBid: `http://${serverIp}/api/bid/seller/cancel`,\t\n\t//instant buy / Dashboard\n\tgetInstantBuyingPrice: `http://${serverIp}/api/bid/getInstantBuyingPrice`,\n\tgetInstantSellingPrice: `http://${serverIp}/api/bid/getInstantSellingPrice`,\n\tinstantBuy: `http://${serverIp}/api/bid/instantBuy`,\n\tinstantSell: `http://${serverIp}/api/bid/instantSell`,\t\n\t//deposit\n\tcreateDeposit: `http://${serverIp}/api/deposit/create`,\n\tcancelDeposit: `http://${serverIp}/api/deposit/cancel`,\n\tgetPendingTransactions: `http://${serverIp}/api/deposit/pending/get`,\n\tupdatePayementReferece: `http://${serverIp}/api/deposit/verify`,\n\t//withdraw\n\tcreateWithdraw: `http://${serverIp}/api/withdraw/create`,\n\tcancelWithdraw: `http://${serverIp}/api/withdraw/cancel`,\n\tpendingWithdaw: `http://${serverIp}/api/withdraw/pending/get`,\n\taddBank: `http://${serverIp}/api/user/addBank`,\n\t//passbook\n\tpassbook: `http://${serverIp}/api/passbook`,\n\t//send\n\tsendBTC: `http://${serverIp}/api/btc/send`,\n\tsendINR: `http://${serverIp}/api/fiat/send`\n};\n\nconst COUNTRY_CODE = {\n\tind: {\n\t\tcode: '+91',\n\t\tcurrency_code: 'INR',\n\t\tname: 'Indian Rupee'\n\t}\n};\n\nconst CLIENT = {\n\tgrant_type: 'password',\n\tclient_id: 'mobileapp',\n\tclient_secret: 'donttell'\n};\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjgxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXBwL2NvbmZpZ3MvYXBwX2NvbmZpZy5qcz9hMDI5Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNlcnZlcklwID0gJzU0LjE2OS41LjIxJztcbi8vIGNvbnN0IHNlcnZlcklwID0gJzU0LjE2OS4xMDkuMzEnOyBvbGQgc3JldmVyIGlwXG5cbmNvbnN0IEFQSSA9IHtcblx0c2lnbnVwOiBgaHR0cDovLyR7c2VydmVySXB9L3NpZ251cGAsXG5cdHNpZ25pbjogYGh0dHA6Ly8ke3NlcnZlcklwfS9vYXV0aDIvdG9rZW5gLFxuXHRmZXRjaFVzZXI6IGBodHRwOi8vJHtzZXJ2ZXJJcH0vYXBpL3VzZXJpbmZvYCxcblx0dXBkYXRlVXNlcjogYGh0dHA6Ly8ke3NlcnZlcklwfS9hcGkvdXNlci91cGRhdGVgLFxuXHQvL2xhbmRpbmdcblx0Y3VycmVudEJUQ1ByaWNlOiBgaHR0cDovLyR7c2VydmVySXB9L2FwaS9iaWQvY3VycmVudEJUQ1ByaWNlYCxcblx0Ly9UcmFkaW5nXG5cdGNyZWF0ZUJ1eUJpZDogYGh0dHA6Ly8ke3NlcnZlcklwfS9hcGkvYmlkL2J1eWVyL2NyZWF0ZWAsXG5cdGNyZWF0ZVNlbGxlckJpZDogYGh0dHA6Ly8ke3NlcnZlcklwfS9hcGkvYmlkL3NlbGxlci9jcmVhdGVgLFxuXHRnZXRCdXllcnNCaWQ6IGBodHRwOi8vJHtzZXJ2ZXJJcH0vYXBpL2JpZC9idXllci9nZXRgLFxuXHRnZXRTZWxsZXJzQmlkOiBgaHR0cDovLyR7c2VydmVySXB9L2FwaS9iaWQvc2VsbGVyL2dldGAsXG5cdGdldEFjdGl2ZU9yZGVyczogYGh0dHA6Ly8ke3NlcnZlcklwfS9hcGkvYmlkL2hpc3RvcnlgLFxuXHRjYW5jZWxCdXllckJpZDogYGh0dHA6Ly8ke3NlcnZlcklwfS9hcGkvYmlkL2J1eWVyL2NhbmNlbGAsXG5cdGNhbmNlbFNlbGxlckJpZDogYGh0dHA6Ly8ke3NlcnZlcklwfS9hcGkvYmlkL3NlbGxlci9jYW5jZWxgLFx0XG5cdC8vaW5zdGFudCBidXkgLyBEYXNoYm9hcmRcblx0Z2V0SW5zdGFudEJ1eWluZ1ByaWNlOiBgaHR0cDovLyR7c2VydmVySXB9L2FwaS9iaWQvZ2V0SW5zdGFudEJ1eWluZ1ByaWNlYCxcblx0Z2V0SW5zdGFudFNlbGxpbmdQcmljZTogYGh0dHA6Ly8ke3NlcnZlcklwfS9hcGkvYmlkL2dldEluc3RhbnRTZWxsaW5nUHJpY2VgLFxuXHRpbnN0YW50QnV5OiBgaHR0cDovLyR7c2VydmVySXB9L2FwaS9iaWQvaW5zdGFudEJ1eWAsXG5cdGluc3RhbnRTZWxsOiBgaHR0cDovLyR7c2VydmVySXB9L2FwaS9iaWQvaW5zdGFudFNlbGxgLFx0XG5cdC8vZGVwb3NpdFxuXHRjcmVhdGVEZXBvc2l0OiBgaHR0cDovLyR7c2VydmVySXB9L2FwaS9kZXBvc2l0L2NyZWF0ZWAsXG5cdGNhbmNlbERlcG9zaXQ6IGBodHRwOi8vJHtzZXJ2ZXJJcH0vYXBpL2RlcG9zaXQvY2FuY2VsYCxcblx0Z2V0UGVuZGluZ1RyYW5zYWN0aW9uczogYGh0dHA6Ly8ke3NlcnZlcklwfS9hcGkvZGVwb3NpdC9wZW5kaW5nL2dldGAsXG5cdHVwZGF0ZVBheWVtZW50UmVmZXJlY2U6IGBodHRwOi8vJHtzZXJ2ZXJJcH0vYXBpL2RlcG9zaXQvdmVyaWZ5YCxcblx0Ly93aXRoZHJhd1xuXHRjcmVhdGVXaXRoZHJhdzogYGh0dHA6Ly8ke3NlcnZlcklwfS9hcGkvd2l0aGRyYXcvY3JlYXRlYCxcblx0Y2FuY2VsV2l0aGRyYXc6IGBodHRwOi8vJHtzZXJ2ZXJJcH0vYXBpL3dpdGhkcmF3L2NhbmNlbGAsXG5cdHBlbmRpbmdXaXRoZGF3OiBgaHR0cDovLyR7c2VydmVySXB9L2FwaS93aXRoZHJhdy9wZW5kaW5nL2dldGAsXG5cdGFkZEJhbms6IGBodHRwOi8vJHtzZXJ2ZXJJcH0vYXBpL3VzZXIvYWRkQmFua2AsXG5cdC8vcGFzc2Jvb2tcblx0cGFzc2Jvb2s6IGBodHRwOi8vJHtzZXJ2ZXJJcH0vYXBpL3Bhc3Nib29rYCxcblx0Ly9zZW5kXG5cdHNlbmRCVEM6IGBodHRwOi8vJHtzZXJ2ZXJJcH0vYXBpL2J0Yy9zZW5kYCxcblx0c2VuZElOUjogYGh0dHA6Ly8ke3NlcnZlcklwfS9hcGkvZmlhdC9zZW5kYFxufTtcblxuY29uc3QgQ09VTlRSWV9DT0RFID0ge1xuXHRpbmQ6IHtcblx0XHRjb2RlOiAnKzkxJyxcblx0XHRjdXJyZW5jeV9jb2RlOiAnSU5SJyxcblx0XHRuYW1lOiAnSW5kaWFuIFJ1cGVlJ1xuXHR9XG59O1xuXG5jb25zdCBDTElFTlQgPSB7XG5cdGdyYW50X3R5cGU6ICdwYXNzd29yZCcsXG5cdGNsaWVudF9pZDogJ21vYmlsZWFwcCcsXG5cdGNsaWVudF9zZWNyZXQ6ICdkb250dGVsbCdcbn07XG5cbmV4cG9ydCB7IEFQSSwgQ09VTlRSWV9DT0RFLCBDTElFTlQgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwL2NvbmZpZ3MvYXBwX2NvbmZpZy5qc1xuLy8gbW9kdWxlIGlkID0gMjgxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///281\n");

/***/ })

})