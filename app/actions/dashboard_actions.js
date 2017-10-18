import ACTION from '../constants/constants';
import { API, ERRORS } from '../configs/app_config';
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
						amt: data
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
						amt: data
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
				volume: input
			};
		} else if (mode === 'fiat') {
			dataToSend = {
				amount: input
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
	}
};

export default dashboardActions;
