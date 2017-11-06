import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signUpActions } from '../../../actions/actions';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Hidden from 'material-ui/Hidden';
import Button from 'material-ui/Button';
import { CircularProgress } from 'material-ui/Progress';
import Paper from 'material-ui/Paper';
import Color from 'color';
import Typography from 'material-ui/Typography';
import ArrowForward from 'material-ui-icons/ArrowForward';
import classNames from 'classnames';
import List, {
	ListItem,
	ListItemSecondaryAction,
	ListItemText
} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import CountrySelect from './country_select';
import Otp from './otp';

import AppTheme from '../../../theme/variables';
import SimpleAlert from '../../components/common/simple_alert';
import Store from '../../../utils/storage';
import { COUNTRIES } from '../../../configs/app_config';

const styles = theme => ({
	list: {
		paddingTop: AppTheme.spacingUnit * 4,
		paddingBottom: AppTheme.spacingUnit * 4
	},
	paper: {
		marginTop: AppTheme.spacingUnit * 4,
		padding: AppTheme.spacingUnit * 3
	},
	textCenter: {
		textAlign: 'center'
	},
	wrapperStyle: {
		marginLeft: AppTheme.spacingUnit * 4,
		marginRight: AppTheme.spacingUnit * 4
	},
	textFieldContainer: {
		marginTop: AppTheme.spacingUnit,
		marginBottom: AppTheme.spacingUnit
	},
	textField: {
		width: '100%',
		fontSize: `${AppTheme.spacingUnit * 3}px !important`
	},
	button: {
		width: '100%',
		padding: AppTheme.spacingUnit * 2,
		marginTop: AppTheme.spacingUnit * 2,
		backgroundColor: AppTheme.colorPrimary,
		color: AppTheme.colorWhite,
		'&:hover': {
			backgroundColor: Color(AppTheme.colorPrimary)
				.lighten(0.3)
				.hex()
		}
	},
	fabProgressMain: {
		color: AppTheme.colorPrimary,
		position: 'absolute',
		top: 'calc(50% - 100px)',
		left: 'calc(50% - 100px)',
		zIndex: 1
	},
	fabProgress: {
		color: AppTheme.colorPrimary
	},
	icon: {
		marginLeft: AppTheme.spacingUnit
	},
	listItemCountry: {
		marginTop: AppTheme.spacingUnit * 3,
		marginBottom: AppTheme.spacingUnit * -2
	}
});

const codeMap = {
	'+91': 'inr',
	'+971': 'aed'
};

class SignupForm extends Component {
	static propTypes = {
		classes: PropTypes.object.isRequired,
		signUpActions: PropTypes.object.isRequired,
		signup: PropTypes.object.isRequired
	};

	state = {
		loading: false,
		success: false,
		error: null,
		otpError: null,
		isReady: false,
		openCountry: false,
		selectedCountry: 'default'
	};
	componentDidMount() {
		const { signUpActions } = this.props;
		signUpActions.authExistingToken().then(() => {
			const { authStatus } = this.props.signup.signUpAccount;
			if (authStatus === 1) {
				window.location = '/dashboard';
				return;
			}
			Store.load({
				key: 'mobile'
			})
				.then(mobileData => {
					signUpActions.mobileInput(
						mobileData.mobileNumber,
						mobileData.countryCode
					);
					this.setState({
						selectedCountry: codeMap[mobileData.countryCode],
						isReady: true
					});
				})
				.catch(err => {
					signUpActions.loadLocation().then(() => {
						const { currencyCode } = this.props.signup.signUpAccount;
						if (COUNTRIES[currencyCode.toLowerCase()] !== undefined) {
							signUpActions.mobileInput('', currencyCode.toLowerCase());
							this.setState({
								selectedCountry: currencyCode.toLowerCase(),
								isReady: true
							});
						} else {
							this.setState({ isReady: true });
						}
					});
				});
		});
	}

	_toggleLoading = () => {
		this.setState({ loading: !this.state.loading });
	};

	_processSignin = () => {
		// const { signup, signUpActions } = this.props;
		// signUpActions.signIn(signup.signUpMobileInput, otp).then(() => {
		// 	const { signup, signUpActions } = this.props;
		// 	if (signup.signInAccount.access_token != null) {
		// this._sendFirebaseToken(signup.signInAccount.access_token);
		window.location = '/dashboard';
		signUpActions.loadingOtp(false);
		// 	}
		// });
	};
	_enterDashboard = otp => {
		const { signup, signUpActions } = this.props;
		const dataToSend = Object.assign({}, signup.signUpMobileInput, otp);
		if (!signup.signUpAccount.loadingOtp) {
			signUpActions.loadingOtp(true);
			signUpActions.signIn(dataToSend).then(() => {
				const { signup, signUpActions } = this.props;
				if (signup.signInAccount.access_token !== null) {
					this._processSignin();
				} else {
					signUpActions.loadingOtp(false);
					this.setState({
						otpError: 'Invalid OTP, please try again'
					});
				}
			});
		}
	};
	_handleFormSubmit = event => {
		event.preventDefault();
		const { signup, signUpActions } = this.props;
		const { selectedCountry } = this.state;

		const { error } = signUpActions.validateData(signup.signUpMobileInput).data;
		if (error !== null) {
			this.setState({ error });
			return;
		}
		if (!this.state.loading) {
			this._toggleLoading();
			signUpActions.signUp(signup.signUpMobileInput).then(() => {
				this._toggleLoading();
				const { signUpAccount } = this.props.signup;
				if (signUpAccount.status === 1) {
					signUpActions.toggleOtp(true);
				} else {
					const title = 'Error Occured';
					const message = `Please contact us, error: ${signUpAccount.errors[0]
						.errors.mobile.message}`;
					this.setState({
						error: {
							title,
							message
						}
					});
				}
			});
		}
	};
	_handleErrorRequestClose = () => {
		this.setState({ error: null, otpError: null });
	};
	_toggleCountryOpen = () => {
		this.setState({ openCountry: true });
	};
	_toggleCountryClose = selectedCountry => {
		const { signup, signUpActions } = this.props;
		signUpActions.mobileInput(
			signup.signUpMobileInput.mobile,
			COUNTRIES[selectedCountry].countryCode
		);
		this.setState({ selectedCountry, openCountry: false });
	};
	render() {
		const {
			loading,
			error,
			otpError,
			isReady,
			openCountry,
			selectedCountry
		} = this.state;
		const { classes, signUpActions, signup } = this.props;
		console.log(this.props);
		return (
			<div>
				{!isReady ? (
					<CircularProgress
						className={classes.fabProgressMain}
						size={200}
						thickness={0.5}
					/>
				) : (
					<Grid container spacing={24}>
						<Hidden xsDown>
							<Grid item xs={3} />
						</Hidden>
						{error && (
							<SimpleAlert
								open
								title={error.title}
								message={error.message}
								close={this._handleErrorRequestClose}
							/>
						)}
						<Otp
							open={signup.signUpAccount.open}
							handleRequestClose={signUpActions.toggleOtp}
							loading={signup.signUpAccount.loadingOtp}
							resend={this._handleFormSubmit}
							enter={this._enterDashboard}
							otpError={otpError}
							clearError={this._handleErrorRequestClose}
						/>
						<Grid item xs={12} md={6}>
							<div className={classes.wrapperStyle}>
								<Paper className={classes.paper}>
									<Typography type="subheading" className={classes.heading}>
										Please enter your Mobile Number to receive an OTP
									</Typography>
								</Paper>
								<ListItem
									button
									className={classes.listItemCountry}
									onClick={this._toggleCountryOpen}
								>
									<Avatar
										alt={COUNTRIES[selectedCountry].countryName}
										src={`/images/flags/${selectedCountry}.svg`}
									/>
									<ListItemText
										primary={COUNTRIES[selectedCountry].countryName}
									/>
								</ListItem>
								<CountrySelect
									open={openCountry}
									onRequestClose={this._toggleCountryClose}
								/>
								<form onSubmit={this._handleFormSubmit}>
									<div className={classNames('form-group')}>
										<div
											className={classNames(
												'col-xs-12',
												classes.textFieldContainer
											)}
										>
											<input
												type="number"
												value={signup.signUpMobileInput.mobile}
												className={classNames(
													'form-control',
													classes.textField
												)}
												placeholder="Enter Mobile Number"
												onChange={event =>
													signUpActions.mobileInput(
														event.currentTarget.value,
														COUNTRIES[selectedCountry].countryCode
													)}
											/>
										</div>
									</div>
									<div>
										{!loading ? (
											<Button raised className={classes.button} type="submit">
												Proceed
												<ArrowForward className={classes.icon} />
											</Button>
										) : (
											<Button
												raised
												disabled={loading}
												className={classes.button}
											>
												<CircularProgress
													size={24}
													className={classes.fabProgress}
												/>
											</Button>
										)}
									</div>
									<p>
										By continuing, you agree to our Terms & Conditions, Privacy
										Policy.
									</p>
								</form>
							</div>
						</Grid>
					</Grid>
				)}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		signup: state.app.signUpForm
	};
}

function mapDispatchToProps(dispatch) {
	return {
		signUpActions: bindActionCreators(signUpActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(
	withStyles(styles)(SignupForm)
);
