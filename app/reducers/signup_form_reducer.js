import { combineReducers } from 'redux';
// import assign from 'object-assign';
import ACTION from '../constants/constants';

const signUpAccount = (
	state = {
		open: false,
		loadingOtp: false,
		error: null,
		authStatus: 0,
		currencyCode: null
	},
	action
) => {
	switch (action.type) {
		case ACTION.SIGNUP.EXISTING_AUTH:
			return Object.assign({}, state, action.data);
		case ACTION.SIGNUP.LOAD_LOCATION:
			return Object.assign({}, state, action.data);
		case ACTION.SIGNUP.SIGNUP_ACCOUNT:
			return Object.assign({}, state, action.data);
		case ACTION.SIGNUP.TOGGLE_OTP:
			return Object.assign({}, state, action.data);
		case ACTION.SIGNUP.LOADING_OTP:
			return Object.assign({}, state, action.data);
		case ACTION.SIGNUP.SIGNUP_ACCOUNT_ERR:
			return Object.assign({}, state, action.data);
		case ACTION.SIGNUP.SIGNUP_ACCOUNT_VALIDATION_ERR:
			return Object.assign({}, state, action.data);
	}
	return state;
};

const signInAccount = (state = { access_token: null }, action) => {
	switch (action.type) {
		case ACTION.SIGNUP.SIGNIN_ACCOUNT:
			return Object.assign({}, state, action.data);
	}
	return state;
};

const signUpMobileInput = (state = { mobile: '' }, action) => {
	switch (action.type) {
		case ACTION.SIGNUP.MOBILE_INPUT:
			return Object.assign({}, state, action.data);
	}
	return state;
};

const signUpForm = combineReducers({
	signUpAccount,
	signInAccount,
	signUpMobileInput
});

export default signUpForm;
