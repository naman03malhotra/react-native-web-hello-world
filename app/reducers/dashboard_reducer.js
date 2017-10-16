import { combineReducers } from 'redux';
import assign from 'object-assign';
import ACTION from '../constants/constants';

const initalLoad = (state = null, action) => {
	switch (ACION.type) {
		case ACTION.DASHBOARD.INITIAL_LOAD:
			return assign({}, stage, action.data);
	}
	return state;
};

const dashboard = combineReducer({
	initalLoad
});

export default dashboard;
