import ACTION from '../constants/constants';
import { API, MINIMUM, ERRORS, MODE } from '../configs/app_config';
import APIManager from '../utils/APIManager';
import Store from '../utils/storage';

const tradeActions = {
	getBidData: (type, crypto, access_token) => {
		const header = `Bearer ${access_token}`;
		const api = API.getBids[type];
		const newData = {};
		const dataToSend = {
			crypto
		};
		newData.inputData = {
			[crypto]: {
				[type]: {
					loading: true
				}
			}
		};
		return dispatch => {
			return APIManager.getData(api, dataToSend, header).then(res => {
				if (res.body.status === 1) {
					newData.inputData = {
						[crypto]: {
							[type]: {
								bidData: res.body.result,
								loading: false
							}
						}
					};
				} else {
					newData.inputData = {
						[crypto]: {
							[type]: {
								bidData: [],
								loading: false
							}
						}
					};
				}
				dispatch({
					type: ACTION.TRADE.LOAD_BIDS,
					data: newData
				});
			});
		};
	},
	manageAmount: (data, mode, type, access_token, crypto, cryptoRate) => {
		const newData = {};
		let error = null;
		const minAmt = MINIMUM.TRADE[crypto];
		const rate = cryptoRate[crypto][type];
		const min = rate - MINIMUM.TRADE.percentage * rate,
			max = rate + MINIMUM.TRADE.percentage * rate;
		if (data < 0) {
			error = ERRORS.DASHBOARD.NEGATIVE_NUMBER;
			data = '';
		} else if (data < minAmt && mode === MODE.CRYPTO) {
			error = ERRORS.TRADE.MIN_AMT(minAmt, crypto);
		} else if ((data < min || data > max) && mode === MODE.FIAT && rate !== null) {
			error = ERRORS.TRADE.PRICE_DIFFERENCE;
		} else {
			error = ERRORS.TRADE.DEFAULT(mode, type, crypto);
		}
		newData.inputData = {
			[crypto]: {
				[type]: {
					[mode]: {
						amt: data,
						error
					}
				}
			}
		};
		if (error !== null) {
			return {
				type: ACTION.TRADE.TRADE_INPUT_VALIDATION_ERROR,
				data: newData
			};
		}
		newData.inputData = {
			[crypto]: {
				[type]: {
					[mode]: {
						amt: data,
						error
					}
				}
			}
		};
		return {
			type: ACTION.TRADE.TRADE_INPUT_VALIDATION_ERROR,
			data: newData
		};
	},
	validateData: (userData, data, crypto, fiat, type) => {
		const newData = {
			error: null
		};
		const totalCrypto = userData[crypto].balance;

		if (
			(userData.balanceFiat === 0 && type === 'buy') ||
			(totalCrypto === 0 && type === 'sell')
		) {
			newData.error = ERRORS.DASHBOARD.WALLET_BALANCE_ZERO[type];
		} else if (
			(userData.balanceFiat < data.total && type === 'buy') ||
			(totalCrypto < data.volume && type === 'sell')
		) {
			newData.error = ERRORS.TRADE.BUY_MORE_THAN_CAPACITY(
				userData,
				totalCrypto,
				data,
				crypto,
				fiat,
				type
			)[type];
		} else {
			newData.error = ERRORS.TRADE.CONFIRM(data, crypto, fiat, type);
		}
		return {
			type: ACTION.TRADE.TRADE_INPUT_VALIDATION_ERROR,
			data: newData
		};
	},
	executeBidding: (data, access_token, crypto, fiat, type) => {
		const header = `Bearer ${access_token}`;
		const api = API.createBid[type];
		const newData = {};
		newData.inputData = {
			[crypto]: {
				[type]: {
					status: 0,
					loading: true
				}
			}
		};
		return dispatch => {
			dispatch({
				type: ACTION.TRADE.INITIATE,
				data: newData
			});
			return APIManager.postData(api, data, header).then(res => {
				const status = res.body.status;
				newData.inputData = {
					[crypto]: {
						[type]: {
							status,
							loading: false
						}
					}
				};
				if (status === 1 || status === 2 || status === 3) {
					newData.error = ERRORS.TRADE.SUCCESS(data, crypto, fiat, type)[
						status
					];
					dispatch({
						type: ACTION.TRADE.INITIATE,
						data: newData
					});
				} else {
					newData.error = ERRORS.DASHBOARD.FAILED(
						JSON.stringify(res.body.errors[0])
					);
					dispatch({
						type: ACTION.TRADE.INITIATE,
						data: newData
					});
				}
			});
		};
	},
	getActiveOrders: (dataToSend, crypto, access_token, data) => {
		const header = `Bearer ${access_token}`;
		const api = API.getActiveOrders;
		const newData = {};
		return dispatch => {
			newData.inputData = {
				[crypto]: {
					data,
					loading: true,
					skip: dataToSend.skip
				}
			};
			dispatch({
				type: ACTION.TRADE.ACTIVE_ORDERS,
				data: newData
			});
			return APIManager.getData(api, dataToSend, header).then(res => {
				newData.inputData = {
					[crypto]: {
						data: data.concat(res.body.result),
						loading: false,
						skip: res.body.result.length < 10 ? -1 : dataToSend.skip + 10
					}
				};
				dispatch({
					type: ACTION.TRADE.ACTIVE_ORDERS,
					data: newData
				});
			});
		};
	},
	cancelPrompt: number => {
		const newData = {
			error: null
		};
		newData.error = ERRORS.TRADE.CANCEL(number);
		return {
			type: ACTION.WITHDRAW.SHOW_PROMPT,
			data: newData
		};
	},
	cancelActiveOrders: (data, access_token) => {
		const header = `Bearer ${access_token}`;
		const newData = {
			status: 0
		};
		return dispatch => {
			return APIManager.postData(API.cancelBid, data, header).then(res => {
				if (res.body.status === 1) {
					newData.status = res.body.status;
					newData.error = ERRORS.TRADE.SNACK_CANCEL;
					dispatch({
						type: ACTION.TRADE.CANCEL,
						data: newData
					});
				} else {
					newData.error = ERRORS.DASHBOARD.FAILED(
						JSON.stringify(res.body.errors[0])
					);
					dispatch({
						type: ACTION.TRADE.CANCEL,
						data: newData
					});
				}
			});
		};
	}
};

export default tradeActions;
