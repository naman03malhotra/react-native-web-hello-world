import { combineReducers } from 'redux';
import ACTION from '../constants/constants';

const getPassbookData = (state = { inputData: null }, action) => {
	switch (action.type) {
		case ACTION.PASSBOOK.GET_DATA:
			return Object.assign({}, state, action.data);
	}
	return state;
};

const passbook = combineReducers({
  getPassbookData
});

export default passbook;
