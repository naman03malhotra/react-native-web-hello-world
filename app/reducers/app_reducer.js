import { combineReducers } from 'redux';
import { HandleCatch } from '../utils/helpers';
import ACTION from '../constants/constants';

const initialLoad = (state = { access_token: null }, action) => {
	switch (action.type) {
		case ACTION.APP.INITIAL_LOAD:
			return Object.assign({}, state, action.data);
		case ACTION.APP.INITIAL_LOAD_ERROR:
			return Object.assign({}, state, action.data);
	}
	return state;
};

const userData = (state = null, action) => {
	switch (action.type) {
		case ACTION.APP.USER_LOAD:
			return Object.assign({}, state, action.data);
	}
	return state;
};

const cryptoRate = (state = null, action) => {
	switch (action.type) {
		case ACTION.APP.LOAD_RATE:
			return Object.assign({}, state, action.data);
	}
	return state;
};

const appError = (state = null, action) => {
	switch (action.type) {
		case ACTION.APP.APP_ERROR:
			const error = {
				text: action.data,
				json: JSON.parse(JSON.stringify(action.data))
			};
			// HandleCatch(action.data);
			return Object.assign({}, state, error);
	}
	return state;
};

const appLoad = combineReducers({
	initialLoad,
	userData,
	cryptoRate,
	appError
});

export default appLoad;
