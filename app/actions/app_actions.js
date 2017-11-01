import ACTION from '../constants/constants';
import { API } from '../configs/app_config';
import APIManager from '../utils/APIManager';
import { HandleCatch } from '../utils/helpers';
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
	loadUserData: (data, history = null) => {
		const header = `Bearer ${data}`;
		return dispatch => {
			return APIManager.getData(API.fetchUser, null, header)
				.then(res => {
					Store.save({
						key: 'userData',
						data: res.body.result,
						expires: null
					});
					dispatch({
						type: ACTION.APP.USER_LOAD,
						data: res.body.result
					});
				})
				.catch(err => {
					HandleCatch(err, history);
					dispatch({
						type: ACTION.APP.APP_ERROR,
						data: err
					});
				});
		};
	},
	loadRate: data => {
		const newData = {
			crypto: 'btc'
		};
		return dispatch => {
			return APIManager.getData(API.currentPrice, newData, null).then(res => {
				newData.crypto = 'eth';
				return APIManager.getData(
					API.currentPrice,
					newData,
					null
				).then(res1 => {
					const rateData = {
						btc: res.body.result,
						eth: res1.body.result
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
				});
			});
			// .catch(err => {
			// 	dispatch({
			// 		type: ACTION.APP.APP_ERROR,
			// 		data: err
			// 	});
			// });
		};
	},
	sendFirebaseToken: (data, access_token) => {
		const header = `Bearer ${access_token}`;
		return dispatch => {
			return APIManager.postData(API.updateUser, data, header).then(res => {
				return true;
			});
		};
	}
};

export default appLoadActions;
