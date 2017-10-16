import ACTION from '../constants/constants';
import { API, COUNTRY_CODE, CLIENT } from '../configs/app_config';
import APIManager from '../utils/APIManager';
import Store from '../utils/storage';

const appLoadActions = {
	appLoad: data => {
		return dispatch => {
			return Store.load({ key: 'userAuth' })
				.then(res => {
					dispatch({
						type: ACTION.APP.INITIAL_LOAD,
						data: res
					});
				})
				.catch(err => {
					dispatch({
						type: ACTION.APP.INITIAL_LOAD_ERROR,
						data: err
					});
				});
		};
	},
	loadUserData: data => {
		const header = `Bearer ${data}`;
		return dispatch => {
			return APIManager.getData(API.fetchUser, null, header)
				.then(res => {
					Store.save({
						key: 'userData',
						data: res.body,
						expires: null
					});
					dispatch({
						type: ACTION.APP.USER_LOAD,
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
	loadRate: data => {
		return dispatch => {
			return APIManager.getData(API.currentBTCPrice, null, null)
				.then(res => {
					const rateData = {
						btc: res.body.result
					};
					Store.save({
						key: 'cryptoRate',
						data: rateData,
						expires: null
					});
					dispatch({
						type: ACTION.APP.LOAD_RATE,
						data: rateData
					});
				})
				.catch(err => {
					dispatch({
						type: ACTION.APP.APP_ERROR,
						data: err
					});
				});
		};
	}
};

export default appLoadActions;
