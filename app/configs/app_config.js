const serverIp = '54.169.5.21';
// const serverIp = '54.169.109.31'; old srever ip

const API = {
	signup: `http://${serverIp}/signup`,
	signin: `http://${serverIp}/oauth2/token`,
	fetchUser: `http://${serverIp}/api/userinfo`,
	updateUser: `http://${serverIp}/api/user/update`,
	//landing
	currentBTCPrice: `http://${serverIp}/api/bid/currentBTCPrice`,
	//Trading
	createBuyBid: `http://${serverIp}/api/bid/buyer/create`,
	createSellerBid: `http://${serverIp}/api/bid/seller/create`,
	getBuyersBid: `http://${serverIp}/api/bid/buyer/get`,
	getSellersBid: `http://${serverIp}/api/bid/seller/get`,
	getActiveOrders: `http://${serverIp}/api/bid/history`,
	cancelBuyerBid: `http://${serverIp}/api/bid/buyer/cancel`,
	cancelSellerBid: `http://${serverIp}/api/bid/seller/cancel`,	
	//instant buy / Dashboard
	getInstantBuyingPrice: `http://${serverIp}/api/bid/getInstantBuyingPrice`,
	getInstantSellingPrice: `http://${serverIp}/api/bid/getInstantSellingPrice`,
	instantBuy: `http://${serverIp}/api/bid/instantBuy`,
	instantSell: `http://${serverIp}/api/bid/instantSell`,	
	//deposit
	createDeposit: `http://${serverIp}/api/deposit/create`,
	cancelDeposit: `http://${serverIp}/api/deposit/cancel`,
	getPendingTransactions: `http://${serverIp}/api/deposit/pending/get`,
	updatePayementReferece: `http://${serverIp}/api/deposit/verify`,
	//withdraw
	createWithdraw: `http://${serverIp}/api/withdraw/create`,
	cancelWithdraw: `http://${serverIp}/api/withdraw/cancel`,
	pendingWithdaw: `http://${serverIp}/api/withdraw/pending/get`,
	addBank: `http://${serverIp}/api/user/addBank`,
	//passbook
	passbook: `http://${serverIp}/api/passbook`,
	//send
	sendBTC: `http://${serverIp}/api/btc/send`,
	sendINR: `http://${serverIp}/api/fiat/send`
};

const COUNTRY_CODE = {
	ind: {
		code: '+91',
		currency_code: 'INR',
		name: 'Indian Rupee'
	}
};

const CLIENT = {
	grant_type: 'password',
	client_id: 'mobileapp',
	client_secret: 'donttell'
};

export { API, COUNTRY_CODE, CLIENT };
