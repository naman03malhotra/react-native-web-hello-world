import ACTION from '../constants/constants';
import { API, ERRORS, MINIMUM } from '../configs/app_config';
import APIManager from '../utils/APIManager';
import Store from '../utils/storage';

const convertFiat = (input, rate, mode, type, crypto) => {
	let data = null,
		newData = {};
	if (mode === 'crypto') {
		data = (Math.round(input * parseFloat(rate) * 100) / 100).toFixed(2);
		newData.inputData = {
			[crypto]: {
				[type]: {
					['fiat']: {
						amt: data,
						rate
					},
					loading: false
				}
			}
		};
	} else if (mode === 'fiat') {
		data = parseFloat(input / parseFloat(rate)).toFixed(8);
		newData.inputData = {
			[crypto]: {
				[type]: {
					['crypto']: {
						amt: data,
						rate
					},
					loading: false
				}
			}
		};
	}
	return newData;
};

const validateAmount = (amt, mode) => {
	if (amt === '') return false;
	if (amt < 0) {
		alert(ERRORS.DASHBOARD.NEGATIVE_NUMBER.message);
		return false;
	}
	// if (isNaN(amt)) {
	// 	alert(ERRORS.DASHBOARD.INVALID_NUMBER.message);
	// 	return false;
	// }
	return true;
};

const dashboardActions = {
	manageAmount: (data, mode, type, access_token, cryptoRate, crypto) => {
		let api = API.getInstantPrice[type],
			rate = cryptoRate[crypto][type],
			newData = {},
			dataToSend = {};
		const header = `Bearer ${access_token}`;
		let input = data === '' ? 0 : parseFloat(data);
		if (isNaN(input)) input = 0;
		if (!validateAmount(input, mode)) {
			newData.error = ERRORS.DASHBOARD.NEGATIVE_NUMBER;
			return {
				type: ACTION.DASHBOARD.DASHBOARD_INPUT_VALIDATION_ERROR,
				data: newData
			};
		}
		if (mode === 'crypto') {
			dataToSend = {
				volume: input,
				crypto
			};
		} else if (mode === 'fiat') {
			dataToSend = {
				amount: input,
				crypto
			};
		}
		newData.inputData = {
			[crypto]: {
				[type]: {
					[mode]: {
						amt: data
					},
					loading: true
				}
			}
		};
		return dispatch => {
			dispatch({
				type: ACTION.DASHBOARD.MANAGE_AMOUNT,
				data: newData
			});
			return APIManager.getData(api, dataToSend, header).then(res => {
				if (res.body.status === 1) rate = res.body.result.price;
				newData = convertFiat(input, rate, mode, type, crypto);
				dispatch({
					type: ACTION.DASHBOARD.MANAGE_AMOUNT,
					data: newData
				});
			});
		};
	},
	validateData: (userData, data, crypto, fiat, type) => {
		const newData = {
			error: null
		};
		const totalCrypto =
			userData[crypto].balance;
		const minAmtCrypto = (MINIMUM.DASHBOARD[crypto] / data.price).toFixed(3);
		const minAmtFiat = MINIMUM.DASHBOARD[crypto];
		if (
			(userData.balanceFiat === 0 && type === 'buy') ||
			(totalCrypto === 0 && type === 'sell')
		) {
			newData.error = ERRORS.DASHBOARD.WALLET_BALANCE_ZERO[type];
		} else if (
			(userData.balanceFiat < data.amount && type === 'buy') ||
			(totalCrypto < data.volume && type === 'sell')
		) {
			newData.error = ERRORS.DASHBOARD.BUY_MORE_THAN_CAPACITY(
				userData,
				totalCrypto,
				data,
				crypto,
				fiat,
				type
			)[type];
		} else if (data.volume < minAmtCrypto && data.amount < minAmtFiat) {
			newData.error = ERRORS.DASHBOARD.MIN_AMT(
				`${minAmtCrypto} ${crypto.toUpperCase()}`,
				`${minAmtFiat} ${fiat.toUpperCase()}`,
				type
			);
		} else {
			newData.error = ERRORS.DASHBOARD.CONFIRM(data, crypto, fiat, type);
		}
		return {
			type: ACTION.DASHBOARD.DASHBOARD_INPUT_VALIDATION_ERROR,
			data: newData
		};
	},
	executeInstant: (data, access_token, crypto, fiat, type) => {
		const header = `Bearer ${access_token}`;
		const api = API.instant[type];
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
				type: ACTION.DASHBOARD.EXECUTE_INSTANT,
				data: newData
			});
			return APIManager.postData(api, data, header).then(res => {
				newData.inputData = {
					[crypto]: {
						[type]: {
							status: res.body.status,
							loading: false
						}
					}
				};
				if (res.body.status === 1) {
					newData.error = ERRORS.DASHBOARD.SUCCESS(data, crypto, fiat, type);
					dispatch({
						type: ACTION.DASHBOARD.EXECUTE_INSTANT,
						data: newData
					});
				} else {
					newData.error = ERRORS.DASHBOARD.FAILED(
						JSON.stringify(res.body.errors[0])
					);
					dispatch({
						type: ACTION.DASHBOARD.EXECUTE_INSTANT,
						data: newData
					});
				}
			});
		};
	}
};

export default dashboardActions;
