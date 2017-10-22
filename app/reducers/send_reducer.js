import { combineReducers } from 'redux';
import ACTION from '../constants/constants';

const amountInput = (
	state = {
    inputData: null,
		error: null
	},
	action
) => {
	switch (action.type) {
		case ACTION.SEND.AMOUNT_INPUT:
			return Object.assign({}, state, action.data);
		case ACTION.SEND.INITIATE:
			return Object.assign({}, state, action.data);
		case ACTION.SEND.VALIDATE_DATA:
			return Object.assign({}, state, action.data);
		case ACTION.SEND.SHOW_PROMPT:
			return Object.assign({}, state, action.data);
	}
	return state;
};

const send = combineReducers({
	amountInput
});

export default send;
