import ACTION from '../constants/constants';
import { API, MINIMUM, ERRORS, MODE } from '../configs/app_config';
import APIManager from '../utils/APIManager';
import Store from '../utils/storage';

const passbookActions = {
	getPassbookData: (dataToSend, access_token, data) => {
		const header = `Bearer ${access_token}`;
		const api = API.passbook;
		const newData = {};
		return dispatch => {
			newData.inputData = {
					data,
					loading: true,
					skip: dataToSend.skip
			};
			dispatch({
				type: ACTION.PASSBOOK.GET_DATA,
				data: newData
			});
			return APIManager.getData(api, dataToSend, header).then(res => {
        console.log(res.body.result);
				newData.inputData = {
						data: data.concat(res.body.result),
						loading: false,
						skip: res.body.result.length < 10 ? -1 : dataToSend.skip + 10
				};
				dispatch({
					type: ACTION.PASSBOOK.GET_DATA,
					data: newData
				});
			});
		};
	}
};

export default passbookActions;
