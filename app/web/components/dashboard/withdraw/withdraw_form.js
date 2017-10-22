import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AppBar from 'material-ui/AppBar';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { CircularProgress } from 'material-ui/Progress';
import green from 'material-ui/colors/green';
import Button from 'material-ui/Button';
import ArrowForward from 'material-ui-icons/ArrowForward';
import Typography from 'material-ui/Typography';
import SendIcon from 'material-ui-icons/Send';
import SvgIcon from 'material-ui/SvgIcon';
import Tabs, { Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import Color from 'color';
import AddIcon from 'material-ui-icons/Add';
import CheckIcon from 'material-ui-icons/Check';
import CustomTextInput from '../../common/text_input';
import AddBankModal from './add_bank_modal';
import AppTheme from '../../../../theme/variables';
import SimpleAlert from '../../../components/common/simple_alert';
import withdrawActions from '../../../../actions/withdraw_form_action';

const styles = theme => ({
	root: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around'
	},
	textField: {
		fontSize: AppTheme.spacingUnit * 2
	},
	wrapper: {
		margin: theme.spacing.unit,
		position: 'relative'
	},
	balanceContainer: {
		marginTop: AppTheme.spacingUnit * 3,
		marginBottom: AppTheme.spacingUnit * 3
	},
	title: {
		fontSize: AppTheme.spacingUnit * 4
	},
	gridStyle: {
		textAlign: 'center'
	},
	buttonSuccess: {
		backgroundColor: green[500],
		'&:hover': {
			backgroundColor: green[700]
		}
	},
	fabProgress: {
		color: AppTheme.colorPrimary
	},
	icon: {
		marginLeft: AppTheme.spacingUnit
	},
	iconAdd: {
		marginRight: AppTheme.spacingUnit
	},
	button: {
		width: '100%',
		padding: AppTheme.spacingUnit * 2,
		marginTop: AppTheme.spacingUnit * 4,
		color: AppTheme.colorWhite
	},
	addBankButton: {
		padding: AppTheme.spacingUnit * 2,
		marginTop: AppTheme.spacingUnit * 2,
		minWidth: '200px',
		borderRadius: '50px'
	},
	primaryBackground: {
		backgroundColor: AppTheme.colorPrimary,
		'&:hover': {
			backgroundColor: Color(AppTheme.colorPrimary)
				.lighten(0.3)
				.hex()
		}
	}
});

const INRIcon = props => (
	<SvgIcon {...props}>
		<path d="M8,3H18L17,5H13.74C14.22,5.58 14.58,6.26 14.79,7H18L17,9H15C14.75,11.57 12.74,13.63 10.2,13.96V14H9.5L15.5,21H13L7,14V12H9.5V12C11.26,12 12.72,10.7 12.96,9H7L8,7H12.66C12.1,5.82 10.9,5 9.5,5H7L8,3Z" />
	</SvgIcon>
);

const BTCIcon = props => (
	<SvgIcon {...props}>
		<path d="M4.5,5H8V2H10V5H11.5V2H13.5V5C19,5 19,11 16,11.25C20,11 21,19 13.5,19V22H11.5V19H10V22H8V19H4.5L5,17H6A1,1 0 0,0 7,16V8A1,1 0 0,0 6,7H4.5V5M10,7V11C10,11 14.5,11.25 14.5,9C14.5,6.75 10,7 10,7M10,12.5V17C10,17 15.5,17 15.5,14.75C15.5,12.5 10,12.5 10,12.5Z" />
	</SvgIcon>
);

const ETHIcon = props => (
	<SvgIcon {...props}>
		<path d="M12,1.75L5.75,12.25L12,16L18.25,12.25L12,1.75M5.75,13.5L12,22.25L18.25,13.5L12,17.25L5.75,13.5Z" />
	</SvgIcon>
);
function TabContainer(props) {
	return (
		<div style={{ padding: AppTheme.spaceExtraBig }}>{props.children}</div>
	);
}
class WithdrawForm extends Component {
	state = {
		success: false,
		open: false,
		error: null
	};
	static propTypes = {
		classes: PropTypes.object.isRequired
	};
	_initiateWithdraw = event => {
		event.preventDefault();
		const {
			withdraw,
			withdrawActions,
			userData,
			access_token,
			fiat
		} = this.props;
		let { error } = withdrawActions.validateData(
			withdraw.amountInput,
			fiat,
			userData
		).data;
		if (error !== null) {
			if (error.code === 0) {
				error.closeButtonText = 'Close';
				error.mainButtonText = 'Add Bank';
				error.func = () => {
					this._handleErrorRequestClose();
					this._toggleModal();
				};
			} else if (error.code === 1) {
				error.closeButtonText = 'Cancel';
				error.mainButtonText = 'Confirm';
				error.func = () => {
					this._handleErrorRequestClose();
					this._executeWithdraw(withdraw.amountInput);
				};
			}
			this.setState({ error });
		}
		// error = withdrawActions.confirmPrompt(withdraw.amountInput, fiat).data
		// 	.error;
		// if (error.code === 1) {
		// 	error.closeButtonText = 'Cancel';
		// 	error.mainButtonText = 'Confirm';
		// 	error.func = () => {
		// 		this._handleErrorRequestClose();
		// 		this._executeWithdraw(withdraw.amountInput);
		// 	};
		// 	this.setState({ error });			
		// }
	};

	_executeWithdraw = data => {
		const { withdraw, withdrawActions, access_token, history } = this.props;
		withdrawActions
			.initiateDeposit(withdraw.amountInput, access_token)
			.then(() => {
				const { status, error } = this.props.withdraw.amountInput;
				if (status === 1) {
					error.closeButtonText = 'Close';
					error.mainButtonText = 'See Transactions';
					error.func = () => {
						this._handleErrorRequestClose();
						history.push('/passbook');
					};
					this.setState({ error });
				} else {
					this.setState({ error });
				}
			});
	};
	_toggleModal = () => {
		this.setState({
			open: !this.state.open
		});
	};
	_handleErrorRequestClose = () => {
		this.setState({ error: null });
	};

	render() {
		console.log(this.props);
		const { open, error } = this.state;
		const {
			classes,
			withdraw,
			withdrawActions,
			userData,
			access_token,
			fiat
		} = this.props;
		return (
			<div>
				{error && (
					<SimpleAlert
						open
						title={error.title}
						message={error.message}
						close={this._handleErrorRequestClose}
						mainButtonFunc={error.func}
						closeButtonText={error.closeButtonText}
						mainButtonText={error.mainButtonText}
					/>
				)}
				<AddBankModal
					open={open}
					handleRequestClose={this._toggleModal}
					withdraw={withdraw}
					userData={userData}
					withdrawActions={withdrawActions}
					access_token={access_token}
				/>
				<div className={classes.balanceContainer}>
					<Typography type="subheading">Your Balance</Typography>
					<Typography type="title" className={classes.title}>
						{`${userData.balanceFiat}`}
					</Typography>
					<Typography type="subheading">{`${fiat.toUpperCase()}`}</Typography>
				</div>
				<form onSubmit={this._initiateWithdraw}>
					<CustomTextInput
						label="Enter Amount"
						type="number"
						helperText="Some important text"
						value={withdraw.amountInput.amount}
						onChange={event =>
							withdrawActions.amountInput(event.currentTarget.value)}
					/>
					{userData.bankDetails.length > 0 ? (
						<Button
							raised
							color="primary"
							className={classNames(
								classes.addBankButton,
								classes.buttonSuccess
							)}
							onClick={this._toggleModal}
						>
							<CheckIcon className={classes.iconAdd} />
							{userData.bankDetails[0].bankName}
						</Button>
					) : (
						<Button
							raised
							color="primary"
							className={classNames(
								classes.addBankButton,
								classes.primaryBackground
							)}
							onClick={this._toggleModal}
						>
							<AddIcon className={classes.iconAdd} /> Add Bank
						</Button>
					)}
					<div>
						{!withdraw.amountInput.loading ? (
							<Button
								raised
								className={classNames(
									classes.button,
									classes.primaryBackground
								)}
								onClick={this.handleButtonClick}
								type="submit"
							>
								Withdraw
								<SendIcon className={classes.icon} />
							</Button>
						) : (
							<Button raised disabled className={classes.button}>
								<CircularProgress size={24} className={classes.fabProgress} />
							</Button>
						)}
					</div>
				</form>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		withdraw: state.app.withdraw
	};
}

function mapDispatchToProps(dispatch) {
	return {
		withdrawActions: bindActionCreators(withdrawActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(
	withStyles(styles)(WithdrawForm)
);
