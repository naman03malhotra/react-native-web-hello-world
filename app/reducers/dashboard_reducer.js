import { combineReducers } from 'redux';
import assign from 'object-assign';
import ACTION from '../constants/constants';

const initalLoad = (state = null, action) => {
	switch (action.type) {
		case ACTION.DASHBOARD.INITIAL_LOAD:
			return assign({}, state, action.data);
	}
	return state;
};

const manageAmount = (state = { inputData: null, error: null }, action) => {
	switch (action.type) {
		case ACTION.DASHBOARD.MANAGE_AMOUNT:
			return assign({}, state, action.data);
		case ACTION.DASHBOARD.DASHBOARD_INPUT_VALIDATION_ERROR:
			return assign({}, state, action.data);
	}
	return state;
};

const dashboard = combineReducers({
	initalLoad,
	manageAmount
});

export default dashboard;
