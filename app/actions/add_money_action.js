import ACTION from '../constants/constants';
import { API, MINIMUM, ERRORS } from '../configs/app_config';
import APIManager from '../utils/APIManager';
import Store from '../utils/storage';

const sendPendingTransaction = (dispatch, newData, header) => {
	return APIManager.getData(
		API.getPendingTransactions,
		null,
		header
	).then(res => {
		newData.transaction = res.body.result;
		newData.error = ERRORS.ADD_MONEY.SNACK_SUCCESS_UPDATE;
		dispatch({
			type: ACTION.ADD_MONEY.INITIATE,
			data: newData
		});
	});
};

const addMoneyActions = {
	amountInput: data => {
		const newData = {
			amount: data
		};
		return {
			type: ACTION.ADD_MONEY.AMOUNT_INPUT,
			data: newData
		};
	},
	validateData: (data, fiat) => {
		const newData = {
			error: null
		};
		if (data.amount < MINIMUM.ADD_MONEY[fiat]) {
			newData.error = ERRORS.ADD_MONEY.MIN_AMT(
				`${MINIMUM.ADD_MONEY[fiat]} ${fiat.toUpperCase()}`
			);
		}
		return {
			type: ACTION.ADD_MONEY.VALIDATE_DATA,
			data: newData
		};
	},
	initiate: (data, access_token) => {
		const header = `Bearer ${access_token}`;
		const dataToSend = {
			amount: data
		};
		const newData = {
			status: 0,
			loading: true
		};
		return dispatch => {
			dispatch({
				type: ACTION.ADD_MONEY.INITIATE,
				data: newData
			});
			return APIManager.postData(
				API.createDeposit,
				dataToSend,
				header
			).then(res => {
				newData.loading = false;
				newData.status = res.body.status;
				if (res.body.status === 1) {
					dispatch({
						type: ACTION.ADD_MONEY.INITIATE,
						data: newData
					});
				} else if (res.body.status === 2) {
					return sendPendingTransaction(dispatch, newData, header);
				} else {
					newData.error = ERRORS.DASHBOARD.FAILED(
						JSON.stringify(res.body.errors[0])
					);
					dispatch({
						type: ACTION.ADD_MONEY.VALIDATE_DATA,
						data: newData
					});
				}
			});
		};
	},
	validateRefData: data => {
		const newData = {
			error: null
		};
		if (data.ref == '' || data.ref.length < 6) {
			newData.error = ERRORS.ADD_MONEY.REF_DATA;
		}
		return {
			type: ACTION.ADD_MONEY.VALIDATE_PAYMENT_REFDATA,
			data: newData
		};
	},
	inputReference: data => {
		const dataToSend = {
			ref: data
		};
		return {
			type: ACTION.ADD_MONEY.INPUT_REFERENCE,
			data: dataToSend
		};
	},
	initiateInputRef: (data, access_token) => {
		const header = `Bearer ${access_token}`;
		const dataToSend = {
			paymentReference: data
		};
		const newData = {
			status: 0,
			loading: true
		};
		return dispatch => {
			dispatch({
				type: ACTION.ADD_MONEY.INITIATE_PAYMENT_REF,
				data: newData
			});
			return APIManager.postData(
				API.updatePayementReferece,
				dataToSend,
				header
			).then(res => {
				newData.status = 2;
				if (res.body.status === 1) {
					newData.loading = false;
					return sendPendingTransaction(dispatch, newData, header);
				} else {
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
	},
	cancelPrompt: () => {
		const newData = {
			error: null
		};
		newData.error = ERRORS.ADD_MONEY.CANCEL;
		return {
			type: ACTION.ADD_MONEY.VALIDATE_PAYMENT_REFDATA,
			data: newData
		};
	},
	cancelDeposit: (data, access_token) => {
		const header = `Bearer ${access_token}`;
		const dataToSend = {
			stage: data
		};
		const newData = {
			status: 0
		};
		return dispatch => {
			return APIManager.getData(
				API.cancelDeposit,
				dataToSend,
				header
			).then(res => {
				if (res.body.status === 1) {
					newData.status = res.body.status;
					newData.error = ERRORS.ADD_MONEY.SNACK_CANCEL;
					dispatch({
						type: ACTION.ADD_MONEY.INITIATE,
						data: newData
					});
				} else {
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

export default addMoneyActions;
