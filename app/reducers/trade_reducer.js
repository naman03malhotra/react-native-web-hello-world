import { combineReducers } from 'redux';
import ACTION from '../constants/constants';

const getBidData = (state = { inputData: null }, action) => {
	switch (action.type) {
		case ACTION.TRADE.LOAD_BIDS:
			return Object.assign({}, state, action.data);
	}
	return state;
};

const manageAmount = (state = { inputData: null, error: null }, action) => {
	switch (action.type) {
		case ACTION.TRADE.MANAGE_AMOUNT:
			return Object.assign({}, state, action.data);
		case ACTION.TRADE.TRADE_INPUT_VALIDATION_ERROR:
			return Object.assign({}, state, action.data);
		case ACTION.TRADE.INITIATE:
			return Object.assign({}, state, action.data);
	}
	return state;
};

const getActiveOrders = (state = { inputData: null }, action) => {
	switch (action.type) {
		case ACTION.TRADE.ACTIVE_ORDERS:
			return Object.assign({}, state, action.data);
	}
	return state;
};

const cancelActiveOrders = (state = { status: 0, error: null }, action) => {
	switch (action.type) {
		case ACTION.TRADE.CANCEL:
			return Object.assign({}, state, action.data);
	}
	return state;
};

const trade = combineReducers({
	getBidData,
  manageAmount,
  getActiveOrders,
  cancelActiveOrders
});

export default trade;
