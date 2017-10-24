import { combineReducers } from 'redux';
import appLoad from './app_reducer';
import signUpForm from './signup_form_reducer';
import dashboard from './dashboard_reducer';
import trade from './trade_reducer';
import addMoney from './add_money_reducer';
import withdraw from './withdraw_form_reducer';
import send from './send_reducer';

const combineReducer = combineReducers({
  appLoad,
  signUpForm,
  dashboard,
  trade,
  addMoney,
  send,
  withdraw
});

const appReducer = combineReducers({
  app: combineReducer
});

export default appReducer; 


// import clone        from 'clone';
// import assign       from 'object-assign';
// import {
//   TOGGLE_COLOR,
//   EXAMPLE_REQUEST_START,
//   EXAMPLE_REQUEST_DATA,
// } from '../constants/Constants';

// const initialState = {
//   color: 'red',
//   data: {
//     loading: false,
//     objects: [],
//   },
// };

// export default function reduce(state = initialState, action) {
//   switch (action.type) {
//   case TOGGLE_COLOR:
//     return assign({}, state, {
//       color: state.color === 'red' ? 'blue' : 'red'
//     });

//   case EXAMPLE_REQUEST_START:
//     return assign({}, state, {
//       data: assign({}, state.data, {
//         loading: true,
//       }),
//     });

//   case EXAMPLE_REQUEST_DATA:
//     return assign({}, state, {
//       data: assign({}, state.data, {
//         loading: false,
//         objects: action.data,
//       }),
//     });

//   default:
//     return state;
//   }
// }
