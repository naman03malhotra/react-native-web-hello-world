import ACTION from '../constants/constants';
import { API, MINIMUM, ERRORS } from '../configs/app_config';
import APIManager from '../utils/APIManager';
import Store from '../utils/storage';

const withdrawActions = {
	amountInput: data => {
		const dataToSend = {
			amount: data
		};
		return {
			type: ACTION.WITHDRAW.AMOUNT_INPUT,
			data: dataToSend
		};
	},
	validateData: (data, fiat, userData) => {
		const newData = {
			error: null
		};
		if (userData.balanceFiat === 0) {
			newData.error = ERRORS.WITHDRAW.ZERO_BALANCE;
		} else if (data.amount < MINIMUM.WITHDRAW[fiat]) {
			newData.error = ERRORS.WITHDRAW.MIN_AMT(
				`${MINIMUM.WITHDRAW[fiat]} ${fiat.toUpperCase()}`
			);
		} else if (data.amount > userData.balanceFiat) {
			newData.error = ERRORS.WITHDRAW.MORE_MORE_THAN_CAPACITY;
		} else if (userData.bankDetails.length === 0) {
			newData.error = ERRORS.WITHDRAW.BANK;
		} else {
			newData.error = ERRORS.WITHDRAW.CONFIRM(
				`${data.amount} ${fiat.toUpperCase()}`
			);
		}
		return {
			type: ACTION.WITHDRAW.VALIDATE_DATA,
			data: newData
		};
	},
	// confirmPrompt: (data, fiat) => {
	// 	const newData = {
	// 		error: null
	// 	};
	// 	newData.error = ERRORS.WITHDRAW.CONFIRM(
	// 		`${data.amount} ${fiat.toUpperCase()}`
	// 	);
	// 	return {
	// 		type: ACTION.WITHDRAW.SHOW_PROMPT,
	// 		data: newData
	// 	};
	// },
	initiateDeposit: (data, access_token) => {
		const header = `Bearer ${access_token}`;
		const dataToSend = {
			amount: data.amount
		};
		const newData = {
			status: 0,
			loading: true
		};
		return dispatch => {
			dispatch({
				type: ACTION.WITHDRAW.INITIATE,
				data: newData
			});
			return APIManager.postData(
				API.createWithdraw,
				dataToSend,
				header
			).then(res => {
				newData.loading = false;
				if (res.body.status === 1) {
					newData.status = res.body.status;
					newData.error = ERRORS.WITHDRAW.SUCCESS;
				} else {
					newData.status = res.body.status;
					newData.error = ERRORS.DASHBOARD.FAILED(
						JSON.stringify(res.body.errors[0])
					);
				}
				dispatch({
					type: ACTION.WITHDRAW.INITIATE,
					data: newData
				});
			});
		};
	},
	addBank: (data, userData, access_token) => {
		const header = `Bearer ${access_token}`;
		const dataToSend = data;
		const newData = {
			status: 0,
			loading: true
		};
		let newUserData = userData;
		newUserData.bankDetails = [];
		newUserData.bankDetails.push(data);
		return dispatch => {
			dispatch({
				type: ACTION.WITHDRAW.ADD_BANK,
				data: newData
			});
			return APIManager.postData(API.addBank, dataToSend, header).then(res => {
				newData.loading = false;
				if (res.body.status === 1) {
					newData.status = res.body.status;
					dispatch({
						type: ACTION.WITHDRAW.ADD_BANK,
						data: newData
					});
					dispatch({
						type: ACTION.APP.USER_LOAD,
						data: newUserData
					});
				} else {
					newData.status = res.body.status;
					newData.error = ERRORS.DASHBOARD.FAILED(
						JSON.stringify(res.body.errors[0])
					);
					dispatch({
						type: ACTION.ADD_MONEY.VALIDATE_PAYMENT_REFDATA,
						data: newData
					});
				}
			});
		};
	}
};

export default withdrawActions;
