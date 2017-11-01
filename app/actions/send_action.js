import ACTION from '../constants/constants';
import { API, ERRORS, MINIMUM } from '../configs/app_config';
import APIManager from '../utils/APIManager';
import Store from '../utils/storage';

const sendActions = {
	amountInput: (data, mode, fiat, crypto, field) => {
		const newData = {};
		newData.inputData = {
			[crypto]: {
				[mode]: {
					[field]: {
						value: data
					}
				}
			}
		};
		return {
			type: ACTION.SEND.AMOUNT_INPUT,
			data: newData
		};
	},
	validateData: (userData, data, crypto, fiat, mode) => {
		const newData = { error: null };
		let totalCrypto = null;
		if (mode === 'crypto') {
			totalCrypto = userData[crypto].balance;
		}
		const minAmtCrypto = MINIMUM.SEND[crypto];
		const minAddressLength = MINIMUM.LENGTH;

		if (
			(userData.balanceFiat === 0 && mode === 'fiat') ||
			(totalCrypto === 0 && mode === 'crypto')
		) {
			newData.error = ERRORS.SEND.ZERO_BALANCE(fiat, crypto, mode);
		} else if (data.to === '') {
			newData.error = ERRORS.SEND.RECEPIENT_ADDRESS_MISSING;
		} else if (data.to.length < minAddressLength) {
			newData.error = ERRORS.SEND.INVALID_RECEPIENT_ADDRESS(crypto);
		} else if (data.amount === '') {
			newData.error = ERRORS.SEND.AMOUNT_MISSING;
		} else if (
			(userData.balanceFiat < data.amount && mode === 'fiat') ||
			(totalCrypto < data.amount && mode === 'crypto')
		) {
			newData.error = ERRORS.SEND.SEND_MORE_THAN_CAPACITY(
				userData,
				totalCrypto,
				data,
				fiat,
				crypto,
				mode
			);
		} else if (data.amount < minAmtCrypto) {
			newData.error = ERRORS.SEND.MIN_AMT(minAmtCrypto, crypto);
		} else {
			newData.error = ERRORS.SEND.CONFIRM(data, crypto);
		}
		return {
			type: ACTION.SEND.VALIDATE_DATA,
			data: newData
		};
	},
	executeSend: (data, access_token, crypto, fiat, mode) => {
		const header = `Bearer ${access_token}`;
		const api = API.send[mode];
		const newData = {};
		newData.inputData = {
			[crypto]: {
				status: 0,
				loading: true
			}
		};
		return dispatch => {
			dispatch({
				type: ACTION.SEND.INITIATE,
				data: newData
			});
			return APIManager.postData(api, data, header).then(res => {
				newData.inputData = {
					[crypto]: {
						status: 0,
						loading: false
					}
				};
				if (res.body.status === 1) {
					newData.error = ERRORS.SEND.SUCCESS(data, crypto);
					dispatch({
						type: ACTION.SEND.INITIATE,
						data: newData
					});
				} else {
					newData.error = ERRORS.DASHBOARD.FAILED(
						JSON.stringify(res.body.errors[0])
					);
					dispatch({
						type: ACTION.SEND.INITIATE,
						data: newData
					});
				}
			});
		};
	}
};

export default sendActions;
