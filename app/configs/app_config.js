// const serverIp = '54.169.5.21';
const serverIp = '13.127.114.100:3000';
// const serverIp = '54.169.109.31'; old srever ip

const API = {
	loadLocation: 'https://cors-anywhere.herokuapp.com/http://getcitydetails.geobytes.com/GetCityDetails',
	signup: `http://${serverIp}/signup`,
	signin: `http://${serverIp}/oauth2/token`,
	fetchUser: `http://${serverIp}/api/userinfo`,
	updateUser: `http://${serverIp}/api/user/update`,
	//landing
	currentPrice: `http://${serverIp}/api/currentPrice`,
	//Trading
	createBid: {
		buy: `http://${serverIp}/api/bid/buyer/create`,
		sell: `http://${serverIp}/api/bid/seller/create`
	},
	getBids: {
		buy: `http://${serverIp}/api/bid/seller/get`,
		sell: `http://${serverIp}/api/bid/buyer/get`
	},
	getActiveOrders: `http://${serverIp}/api/bid/history`,
	cancelBid: `http://${serverIp}/api/bid/cancel`,
	// cancelSellerBid: `http://${serverIp}/api/bid/seller/cancel`,
	//instant buy / Dashboard
	getInstantPrice: {
		buy: `http://${serverIp}/api/buyingPrice`,
		sell: `http://${serverIp}/api/sellingPrice`
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
	send: {
		fiat: `http://${serverIp}/api/fiat/send`,
		crypto: `http://${serverIp}/api/crypto/send`
	}
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
			message: 'Given mobile number length is too short'
		},
		COUNTRY_NOT_PRESENT: {
			title: 'Select Country',
			message: 'Please select a country'
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
					title: 'Not enough balance',
					message: `With your current wallet balance of ${userData.balanceFiat} ${fiat.toUpperCase()} you can ${type} only ${(userData.balanceFiat /
						data.price
					).toFixed(
						8
					)} ${crypto.toUpperCase()}. Please add money to your wallet to ${type} ${data.volume}  ${crypto.toUpperCase()}`,
					code: 0
				},
				sell: {
					title: 'Not enough balance',
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
	TRADE: {
		DEFAULT: (mode, type, crypto) => {
			return {
				title: '',
				message:
					mode === 'crypto'
						? `Amount to ${type.toUpperCase()}`
						: `Price per ${crypto.toUpperCase()}`,
				noerror: true,
				code: null
			};
		},
		MIN_AMT: (amt, crypto) => {
			return {
				title: '',
				message: `Minimum order amount: ${amt} ${crypto.toUpperCase()}`,
				code: null
			};
		},
		PRICE_DIFFERENCE: {
			title: '',
			message: 'Your price differs from the current market price significantly',
			code: null
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
					title: 'Not enough balance',
					message: `Your current wallet balance is ${userData.balanceFiat} ${fiat.toUpperCase()}, which is less than the required total amount: ${data.total} ${fiat.toUpperCase()}`,
					code: 0
				},
				sell: {
					title: 'Not enough balance',
					message: `Your current wallet balance is ${totalCrypto} ${crypto.toUpperCase()}, which is less than the amount you want to ${type}: ${data.volume} ${crypto.toUpperCase()}`,
					code: 10
				}
			};
		},
		CONFIRM: (data, crypto, fiat, type) => {
			return {
				title: `Confirm placing ${type}ing bid?`,
				message: `Confirm placing ${type}ing bid of ${data.volume} ${crypto.toUpperCase()} and ${data.price} ${fiat.toUpperCase()} for a total amount of ${data.total} ${fiat.toUpperCase()}`,
				code: 1
			};
		},
		SUCCESS: (data, crypto, fiat, type) => {
			return {
				1: {
					title: `Success`,
					message: `Bid resolved successfully`,
					code: 2
				},
				2: {
					title: `Partially resolved`,
					message: `Bid partially resolved, check active orders`,
					code: 2
				},
				3: {
					title: `Not resolved`,
					message: `Bid added successfully but not resolved`,
					code: 2
				}
			};
		},
		CANCEL: number => {
			return {
				title: 'Cancel transactions',
				message: `Are you sure you want to cancel the selected ${number} active orders?`,
				code: 1
			};
		},
		SNACK_CANCEL: {
			title: 'Cancelled Successfully',
			message: 'Selected orders cancelled successfully',
			code: null
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
	SEND: {
		ZERO_BALANCE: (fiat, crypto, mode) => {
			return {
				title: 'Zero balance',
				message: `Your current ${mode === 'fiat'
					? fiat.toUpperCase()
					: crypto.toUpperCase()} balance is ZERO`,
				code: mode === 'fiat' ? 0 : 10
			};
		},
		SEND_MORE_THAN_CAPACITY: (
			userData,
			totalCrypto,
			data,
			fiat,
			crypto,
			mode
		) => {
			return {
				title: 'Not enough balance',
				message: `Your current wallet balance is ${mode === 'fiat'
					? `${userData.balanceFiat} ${fiat.toUpperCase()}`
					: `${totalCrypto} ${crypto.toUpperCase()}`} which is less than the amount(${data.amount} ${crypto.toUpperCase()}) you want to send`,
				code: mode === 'fiat' ? 0 : 10
			};
		},
		MIN_AMT: (minAmtCrypto, crypto) => {
			return {
				title: 'Minimum amount required',
				message: `Minimum amount you can send is ${minAmtCrypto} ${crypto.toUpperCase()}`,
				code: null
			};
		},
		RECEPIENT_ADDRESS_MISSING: {
			title: 'Recepient address required',
			message: 'Please enter recepient address',
			code: null
		},
		INVALID_RECEPIENT_ADDRESS: crypto => {
			return {
				title: 'Invalid address',
				message: `Please enter a valid ${crypto.toUpperCase()} Wallet address`,
				code: null
			};
		},
		AMOUNT_MISSING: {
			title: 'Amount required',
			message: 'Please enter the amount you want to send',
			code: null
		},
		CONFIRM: (data, crypto) => {
			return {
				title: 'Confirm send',
				message: `Proceed with sending of ${data.amount} ${crypto.toUpperCase()} to ${data.to}?`,
				code: 1
			};
		},
		SUCCESS: (data, crypto) => {
			return {
				title: 'Sucess',
				message: `Successfully sent ${data.amount} ${crypto.toUpperCase()} to ${data.to}`,
				code: 2
			};
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
	TRADE: {
		btc: 0.01,
		percentage: 0.3,
		fee: 0.002
	},
	ADD_MONEY: {
		inr: 5000,
		FEE: 0.2
	},
	SEND: {
		inr: 1,
		btc: 0.005
	},
	WITHDRAW: {
		inr: 5000
	},
	LENGTH: 10,
	COUNTRY_CODE: '+91'
};

const MODE = {
	FIAT: 'fiat',
	CRYPTO: 'crypto'
};

const COUNTRIES = {
	inr: {
		countryCode: '+91',
		currencyName: 'Indian Rupee',
		countryName: 'India'
	},
	aed: {
		countryCode: '+971',
		currencyName: 'Dirham',
		countryName: 'United Arab Emirates'
	},
	default: {
		countryCode: null,
		currencyName: 'default',
		countryName: 'Select Country'
	}
};

export { API, COUNTRY_CODE, CLIENT, ERRORS, MINIMUM, MODE, COUNTRIES };
