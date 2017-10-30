// import assign from 'object-assign';
import ACTION from '../constants/constants';
import { API, COUNTRY_CODE, CLIENT, ERRORS } from '../configs/app_config';
import APIManager from '../utils/APIManager';
import Store from '../utils/storage';

const signUpActions = {
	authExistingToken: () => {
		const newData = {};
		return dispatch => {
			return Store.load({
				key: 'userAuth'
			})
				.then(res => res.access_token)
				.then(access_token => {
					const header = `Bearer ${access_token}`;
					return APIManager.getData(API.fetchUser, null, header).then(res => {
						if (res) newData.authStatus = 1;
						dispatch({
							type: ACTION.SIGNUP.EXISTING_AUTH,
							data: newData
						});
					});
				})
				.catch(err => {
					dispatch({
						type: ACTION.SIGNUP.EXISTING_AUTH,
						data: newData
					});
				});
		};
	},
	signUp: data => {
		return dispatch => {
			return APIManager.postData(API.signup, data, null)
				.then(res => {
					dispatch({
						type: ACTION.SIGNUP.SIGNUP_ACCOUNT,
						data: res.body
					});
				})
				.catch(err => {
					dispatch({
						type: ACTION.APP.APP_ERROR,
						data: err
					});
				});
		};
	},
	validateData: data => {
		const newData = {
			error: null
		};
		if (data.mobile.length !== 10) {
			newData.error = ERRORS.SIGNUP.MOBILE_LENGTH;
		}
		return {
			type: ACTION.SIGNUP.SIGNUP_ACCOUNT_VALIDATION_ERR,
			data: newData
		};
	},
	signIn: data => {
		const dataToSend = {
			username: `${COUNTRY_CODE.ind.code}-${data.mobile}`,
			password: data.password,
			grant_type: CLIENT.grant_type,
			client_id: CLIENT.client_id,
			client_secret: CLIENT.client_secret
		};
		const mobileData = {
			mobileNumber: data.mobile,
			countryCode: COUNTRY_CODE.ind.code
		};
		return dispatch => {
			return APIManager.postData(API.signin, dataToSend, null)
				.then(res => {
					if (res.body.access_token != '') {
						Store.save({
							key: 'userAuth',
							data: res.body,
							expires: null
						});
						Store.save({
							key: 'mobile',
							data: mobileData,
							expires: null
						});
						dispatch({
							type: ACTION.SIGNUP.SIGNIN_ACCOUNT,
							data: res.body
						});
					} else {
						dispatch({
							type: ACTION.SIGNUP.SIGNIN_ACCOUNT_ERR,
							data: res.body
						});
					}
				})
				.catch(err => {
					dispatch({
						type: ACTION.APP.APP_ERROR,
						data: err
					});
				});
		};
	},
	mobileInput: data => {
		const dataToSend = {
			mobile: data,
			countryCode: COUNTRY_CODE.ind.code,
			password: 'password'
		};
		return {
			type: ACTION.SIGNUP.MOBILE_INPUT,
			data: dataToSend
		};
	},
	toggleOtp: data => {
		const newData = {
			open: data
		};
		return {
			type: ACTION.SIGNUP.TOGGLE_OTP,
			data: newData
		};
	},
	loadingOtp: data => {
		const newData = {
			loadingOtp: data
		};
		return {
			type: ACTION.SIGNUP.LOADING_OTP,
			data: newData
		};
	}
};

export default signUpActions;
