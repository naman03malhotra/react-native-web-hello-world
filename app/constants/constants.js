const actions = {
  APP: {
    INITIAL_LOAD: 'APP_INITIAL_LOAD',
    INITIAL_LOAD_ERROR: 'INITIAL_LOAD_ERROR',
    USER_LOAD: 'USER_LOAD',
    LOAD_RATE: 'LOAD_RATE',
    APP_ERROR: 'APP_ERROR'
  },
	SIGNUP: {
    MOBILE_INPUT: 'MOBILE_INPUT',
    SIGNIN_ACCOUNT: 'SIGNIN_ACCOUNT',
    SIGNIN_ACCOUNT_ERR: 'SIGNIN_ACCOUNT_ERR',       
    SIGNUP_ACCOUNT: 'SIGNUP_ACCOUNT',
    SIGNUP_ACCOUNT_ERR: 'SIGNUP_ACCOUNT_ERR',
    SIGNUP_ACCOUNT_VALIDATION_ERR: 'SIGNIN_ACCOUNT_VALIDATION_ERR',
    TOGGLE_OTP: 'TOGGLE_OTP',
    LOADING_OTP: 'LOADING_OTP'
  },
  DASHBOARD: {
    INITIAL_LOAD: 'DASHBOARD_INITIAL_LOAD',
    MANAGE_AMOUNT: 'DASHBOARD_MANAGE_AMOUNT',
    DASHBOARD_INPUT_VALIDATION_ERROR: 'DASHBOARD_INPUT_VALIDATION_ERROR',
    // Instant Buy
    EXECUTE_INSTANT: 'DASHBOARD_EXECUTE_INSTANT'
  },
  ADD_MONEY: {
    AMOUNT_INPUT: 'ADD_MONEY_AMOUNT_INPUT',
    VALIDATE_DATA: 'ADD_MONEY_VALIDATE_DATA',
    INITIATE: 'ADD_MONEY_INITIATE',
    VALIDATE_PAYMENT_REFDATA: 'ADD_MONEY_VALIDATE_PAYMENT_REFDATA',
    INPUT_REFERENCE: 'ADD_MONEY_INPUT_REFERENCE',
    INITIATE_PAYMENT_REF: 'ADD_MONEY_INITIATE_PAYMENT_REF',
    SNACK_CANCEL: 'ADD_MONEY_SNACK_CANCEL'
  },
  SEND: {
    AMOUNT_INPUT: 'SEND_AMOUNT_INPUT',
    VALIDATE_DATA: 'SEND_VALIDATE_DATA',
    INITIATE: 'SEND_INITIATE',
    SHOW_PROMPT: 'SEND_SHOW_PROMPT'
  },
  WITHDRAW: {
    AMOUNT_INPUT: 'WITHDRAW_AMOUNT_INPUT',
    VALIDATE_DATA: 'WITHDRAW_VALIDATE_DATA',
    INITIATE: 'WITHDRAW_INITIATE',
    ADD_BANK: 'ADD_BANK',
    SHOW_PROMPT: 'WITHDRAW_SHOW_PROMPT'
  }
};

export default actions;
