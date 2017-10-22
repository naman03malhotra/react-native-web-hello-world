import { combineReducers } from 'redux';
import ACTION from '../constants/constants';

const amountInput = (
	state = {
		amount: '',
		error: null,
		loading: false,
		status: 0
	},
	action
) => {
	switch (action.type) {
		case ACTION.WITHDRAW.AMOUNT_INPUT:
			return Object.assign({}, state, action.data);
		case ACTION.WITHDRAW.INITIATE:
			return Object.assign({}, state, action.data);
		case ACTION.WITHDRAW.VALIDATE_DATA:
			return Object.assign({}, state, action.data);
		case ACTION.WITHDRAW.SHOW_PROMPT:
			return Object.assign({}, state, action.data);
	}
	return state;
};

const addBank = (state = { loading: false, status: 0 }, action) => {
	switch (action.type) {
		case ACTION.WITHDRAW.ADD_BANK:
			return Object.assign({}, state, action.data);
	}
	return state;
};

const withdraw = combineReducers({
	amountInput,
	addBank
});

export default withdraw;
