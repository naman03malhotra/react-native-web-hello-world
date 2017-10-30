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
import assign from 'object-assign';
import Otp from './otp';
import AppTheme from '../../../theme/variables';
import SimpleAlert from '../../components/common/simple_alert';
import Store from '../../../utils/storage';

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
	}
});

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
		isReady: false
	};
	componentDidMount() {
		const { signUpActions } = this.props;
		signUpActions.authExistingToken().then(() => {
			const { authStatus } = this.props.signup.signUpAccount;
			if (authStatus === 1) window.location = '/dashboard';
			else this.setState({ isReady: true });
			Store.load({
				key: 'mobile'
			}).then(mobileData => {
				signUpActions.mobileInput(mobileData.mobileNumber);
			});
		});
	}

	_toggleLoading = () => {
		this.setState({ loading: !this.state.loading });
	};

	_processSignin = () => {
		const { signup, signUpActions } = this.props;
		signUpActions.signIn(signup.signUpMobileInput).then(() => {
			const { signup, signUpActions } = this.props;
			if (signup.signInAccount.access_token != '') {
				signUpActions.loadingOtp(false);
				// this._sendFirebaseToken(signup.signInAccount.access_token);
				window.location = '/dashboard';
			}
		});
	};
	_enterDashboard = otp => {
		const { signup, signUpActions } = this.props;
		const dataToSend = assign({}, signup.signUpMobileInput, otp);
		if (!signup.signUpAccount.loadingOtp) {
			signUpActions.loadingOtp(true);
			signUpActions.signUp(dataToSend).then(() => {
				const { signup, signUpAccount } = this.props.signup;
				if (signUpAccount.status === 1) {
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
	render() {
		const { loading, error, otpError, isReady } = this.state;
		const { classes, signUpActions, signup } = this.props;
		// console.log(this.props);
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
													signUpActions.mobileInput(event.currentTarget.value)}
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
