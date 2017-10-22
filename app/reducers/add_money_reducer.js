import { combineReducers } from 'redux';
import ACTION from '../constants/constants';

const amountInput = (
	state = {
		amount: '',
		ref: '',
		error: null,
		loading: false,
		status: 0,
		transaction: null
	},
	action
) => {
	switch (action.type) {
		case ACTION.ADD_MONEY.AMOUNT_INPUT:
			return Object.assign({}, state, action.data);
		case ACTION.ADD_MONEY.INITIATE:
			return Object.assign({}, state, action.data);
		case ACTION.ADD_MONEY.VALIDATE_DATA:
			return Object.assign({}, state, action.data);
		case ACTION.ADD_MONEY.INPUT_REFERENCE:
			return Object.assign({}, state, action.data);
		case ACTION.ADD_MONEY.INITIATE_PAYMENT_REF:
			return Object.assign({}, state, action.data);
		case ACTION.ADD_MONEY.VALIDATE_PAYMENT_REFDATA:
			return Object.assign({}, state, action.data);
		case ACTION.ADD_MONEY.SNACK_CANCEL:
			return Object.assign({}, state, action.data);
	}
	return state;
};

const addMoney = combineReducers({
	amountInput
});

export default addMoney;
