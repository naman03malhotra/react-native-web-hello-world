import { combineReducers } from 'redux';
import ACTION from '../constants/constants';

const initalLoad = (state = null, action) => {
	switch (action.type) {
		case ACTION.DASHBOARD.INITIAL_LOAD:
			return Object.assign({}, state, action.data);
	}
	return state;
};

const manageAmount = (state = { inputData: null, error: null }, action) => {
	switch (action.type) {
		case ACTION.DASHBOARD.MANAGE_AMOUNT:
			return Object.assign({}, state, action.data);
		case ACTION.DASHBOARD.DASHBOARD_INPUT_VALIDATION_ERROR:
			return Object.assign({}, state, action.data);
		case ACTION.DASHBOARD.EXECUTE_INSTANT:
			return Object.assign({}, state, action.data);
	}
	return state;
};

const dashboard = combineReducers({
	initalLoad,
	manageAmount
});

export default dashboard;
