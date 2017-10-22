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
	getInstantPrice: {
		buy: `http://${serverIp}/api/bid/getInstantBuyingPrice`,
		sell: `http://${serverIp}/api/bid/getInstantSellingPrice`
	},
	instant: {
		buy: `http://${serverIp}/api/bid/instantBuy`,
		sell: `http://${serverIp}/api/bid/instantSell`
	},
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

const ERRORS = {
	SIGNUP: {
		MOBILE_LENGTH: {
			title: 'Invalid Mobile Number',
			message: 'Mobile number length should be 10 digits'
		}
	},
	DASHBOARD: {
		NEGATIVE_NUMBER: {
			title: 'Nagative Amount',
			message: 'Please input a positive amount',
			code: null
		},
		INVALID_NUMBER: {
			title: 'Invalid Number',
			message: 'Please input a valid number',
			code: null
		},
		WALLET_BALANCE_ZERO: {
			buy: {
				title: 'Zero Balance',
				message: 'Your current wallet balance is ZERO',
				code: 0
			},
			sell: {
				title: 'Zero Balance',
				message: 'Your current wallet balance is ZERO',
				code: 10
			}
		},
		BUY_MORE_THAN_CAPACITY: (
			userData,
			totalCrypto,
			data,
			crypto,
			fiat,
			type
		) => {
			return {
				buy: {
					title: 'You do not have have required wallet balance',
					message: `With your current wallet balance of ${userData.balanceFiat} ${fiat.toUpperCase()} you can ${type} only ${(userData.balanceFiat /
						data.price
					).toFixed(
						8
					)} ${crypto.toUpperCase()}. Please add money to your wallet to ${type} ${data.volume}  ${crypto.toUpperCase()}`,
					code: 0
				},
				sell: {
					title: 'You do not have have required wallet balance',
					message: `With your current wallet balance of ${totalCrypto} ${crypto.toUpperCase()} you can ${type} only ${totalCrypto} ${crypto.toUpperCase()}. Please add money to your wallet to ${type} ${data.volume}  ${crypto.toUpperCase()}`,
					code: 10
				}
			};
		},
		MIN_AMT: (minAmtCrypto, minAmtFiat, type) => {
			return {
				title: 'Minimum amount required',
				message: `Minimum amount you have to ${type} is ${minAmtCrypto} or ${minAmtFiat}`,
				code: null
			};
		},
		CONFIRM: (data, crypto, fiat, type) => {
			return {
				title: `Confirm ${type}ing`,
				message: `Confirm ${type}ing of ${data.volume} ${crypto.toUpperCase()} for ${data.amount} ${fiat.toUpperCase()}`,
				code: 1
			};
		},
		SUCCESS: (data, crypto, fiat, type) => {
			return {
				title: `${type === 'buy' ? 'Purchased' : 'Sold'} Successfully`,
				message: `Successfully ${type === 'buy'
					? 'purchased'
					: 'sold'} ${data.volume} ${crypto.toUpperCase()} for ${data.amount} ${fiat.toUpperCase()}`,
				code: 2
			};
		},
		FAILED: err => {
			return {
				title: 'Call Us',
				message: err,
				code: null
			};
		}
	},
	ADD_MONEY: {
		MIN_AMT: data => {
			return {
				title: 'Minimim amount required',
				message: `Minimum amount you have to deposit is ${data}`,
				code: null
			};
		},
		REF_DATA: {
			title: 'Invalid reference',
			message: 'Please enter a valid payment reference',
			code: null
		},
		CANCEL: {
			title: 'Cancel Transaction',
			message: 'Are you sure you want to cancel this transaction?',
			code: 1
		},
		SNACK_SUCCESS_UPDATE: {
			title: 'Updated successfully',
			message: 'Payment reference updated successfully',
			code: null
		},
		SNACK_CANCEL: {
			title: 'Cancelled Successfully',
			message: 'Transaction cancelled successfully',
			code: null
		}
	},
	WITHDRAW: {
		ZERO_BALANCE: {
			title: 'Zero wallet balance',
			message: 'You cannot withdraw as your current wallet balance is zero',
			code: null
		},
		MIN_AMT: data => {
			return {
				title: 'Minimim amount required',
				message: `Minimum amount you can withdraw is ${data}`,
				code: null
			};
		},
		MORE_MORE_THAN_CAPACITY: {
			title: 'Cannot withdraw',
			message: 'You cannot withdraw more that your account balance',
			code: null
		},
		BANK: {
			title: 'Bank not added',
			message: 'Please add a bank to continue withdrawing',
			code: 0
		},
		CONFIRM: data => {
			return {
				title: 'Confirm withdraw',
				message: `Proceed with withdraw of ${data}?`,
				code: 1
			};
		},
		SUCCESS: {
			title: 'Success',
			message:
				'Deposit request created successfully, the amount will be transferred to your bank account within 24 Hrs.',
			code: 2
		}
	}
};

const MINIMUM = {
	DASHBOARD: {
		btc: 1200
	},
	ADD_MONEY: {
		inr: 5000
	},
	WITHDRAW: {
		inr: 5000
	}
};

export { API, COUNTRY_CODE, CLIENT, ERRORS, MINIMUM };
