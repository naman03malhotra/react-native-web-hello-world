import { combineReducers } from 'redux';
// import assign from 'object-assign';
import ACTION from '../constants/constants';

const signUpAccount = (state = { open: false, loadingOtp: false }, action) => {
	switch (action.type) {
		case ACTION.SIGNUP.SIGNUP_ACCOUNT:
			return Object.assign({}, state, action.data);
		case ACTION.SIGNUP.TOGGLE_OTP:
			return Object.assign({}, state, action.data);
		case ACTION.SIGNUP.LOADING_OTP:
			return Object.assign({}, state, action.data);
		case ACTION.SIGNUP.SIGNUP_ACCOUNT_ERR:
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
