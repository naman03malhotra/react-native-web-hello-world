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
import CheckIcon from 'material-ui-icons/Check';
import AddIcon from 'material-ui-icons/Add';
import Tabs, { Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import Grid from 'material-ui/Grid';
import Color from 'color';
import Hidden from 'material-ui/Hidden';
import DialogContainer from './dialog';
import AppTheme from '../../../../theme/variables';
import CustomTextInput from '../../common/text_input';
import addMoneyActions from '../../../../actions/add_money_action';
import SimpleAlert from '../../../components/common/simple_alert';
import SnackBar from '../../common/snack_bar';

const styles = theme => ({
	root: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around'
	},
	wrapper: {
		margin: theme.spacing.unit,
		position: 'relative'
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
		color: green[500],
		position: 'absolute',
		top: -10,
		left: -10
	},
	button: {
		backgroundColor: AppTheme.colorPrimary,
		color: AppTheme.colorWhite,
		'&:hover': {
			backgroundColor: Color(AppTheme.colorPrimary)
				.lighten(0.3)
				.hex()
		}
	},
	buttonSize: {
		width: '100px',
		height: '100px'
	}
});
function TabContainer(props) {
	return (
		<div style={{ padding: AppTheme.spaceExtraBig }}>
			<Grid container spacing={24}>
				<Hidden xsDown>
					<Grid item xs={3} />
				</Hidden>
				<Grid item xs={12} sm={6}>
					{props.children}
				</Grid>
			</Grid>
		</div>
	);
}
class AddMoney extends Component {
	static propTypes = {
		classes: PropTypes.object.isRequired,
		addMoney: PropTypes.object.isRequired,
		addMoneyActions: PropTypes.object.isRequired,
		userData: PropTypes.object.isRequired,
		access_token: PropTypes.string.isRequired,
		fiat: PropTypes.string.isRequired,		
		title: PropTypes.string.isRequired,
		loadTitle: PropTypes.func.isRequired,		
		history: PropTypes.object.isRequired,
		location: PropTypes.object,
		fee: PropTypes.number
	};
	static defaultProps = {
		fee: 0.025
	};
	state = {
		success: false,
		stage: 0,
		indexValue: 0,
		error: null,
		snackMsg: null
	};
	componentWillMount() {
		const { loadTitle, title } = this.props;
		loadTitle(title);
	}
	_initiateDeposit = event => {
		event.preventDefault();
		const { addMoneyActions, addMoney, access_token, fiat } = this.props;
		const { error } = addMoneyActions.validateData(
			addMoney.amountInput,
			fiat
		).data;
		if (error !== null) {
			this.setState({ error });
			return;
		}
		addMoneyActions
			.initiate(addMoney.amountInput.amount, access_token)
			.then(() => {
				const { status, transaction, error } = this.props.addMoney.amountInput;
				if (status === 1) {
					this.setState({ success: true, stage: 0 });
				} else if (status === 2) {
					addMoneyActions.inputReference(transaction.paymentReference);
					addMoneyActions.amountInput(transaction.balance['INR'].txnAmount); ///////////// FIX THIS.
					this.setState({ success: true, stage: 2 });
				} else {
					this.setState({ error });
				}
			});
	};
	_refInitiate = (currentStage, event) => {
		event.preventDefault();
		const { addMoneyActions, addMoney, access_token, fiat } = this.props;
		const { error } = addMoneyActions.validateRefData(
			addMoney.amountInput
		).data;
		if (error !== null) {
			this.setState({ error });
			return;
		}
		addMoneyActions
			.initiateInputRef(addMoney.amountInput.ref, access_token)
			.then(() => {
				const { status, error } = this.props.addMoney.amountInput;
				if (status === 2) {
					this.setState({ success: true, stage: status }); // move to final screen
					if (currentStage === status) {
						this.setState({ snackMsg: error });
					}
				} else {
					this.setState({ error });
				}
			});
	};
	_cancelPrompt = () => {
		const { addMoneyActions, access_token } = this.props;
		const { stage } = this.state;
		const { error } = addMoneyActions.cancelPrompt().data;
		if (error.code === 1) {
			error.closeButtonText = 'Cancel';
			error.mainButtonText = 'Confirm';
			error.func = () => {
				this._handleErrorRequestClose();
				this._handleDialogRequestClose();
				addMoneyActions.cancelDeposit(stage, access_token).then(() => {
					const { status, error } = this.props.addMoney.amountInput;
					if (status === 1) {
						this.setState({ snackMsg: error });
					} else {
						this.setState({ error });
					}
				});
			};
			this.setState({ error });
		}
	};
	_handleDialogRequestClose = () => {
		const { addMoneyActions } = this.props;
		addMoneyActions.amountInput('');
		this.setState({ success: false });
	};
	_handleErrorRequestClose = () => {
		this.setState({ error: null });
	};
	_setCompoentRenderState = value => {
		this.setState({ stage: value });
	};
	_closeSnackBar = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}
		this.setState({ snackMsg: null });
	};

	render() {
		console.log(this.props);
		const { success, indexValue, error, stage, snackMsg } = this.state;
		const { addMoney, addMoneyActions, fiat, fee } = this.props;
		const { classes, ...all } = this.props;
		const buttonClassname = classNames(
			{
				[classes.buttonSuccess]: success
			},
			{ [classes.button]: !success },
			classes.buttonSize
		);
		return (
			<div>
				<Grid container spacing={24}>
					{snackMsg && ( ///////////// FIX THIS.
						<SnackBar
							message={snackMsg.message}
							open
							close={this._closeSnackBar}
						/>
					)}
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
					<Grid item xs={12} className={classes.gridStyle}>
						<AppBar position="static" color="default">
							<Tabs
								value={indexValue}
								indicatorColor={AppTheme.colorPrimary}
								textColor={AppTheme.colorPrimary}
								fullWidth
								centered
							>
								<Tab label="Add Money" icon={<AddIcon />} />
							</Tabs>
						</AppBar>
						<SwipeableViews index={indexValue}>
							<TabContainer>
								<form onSubmit={this._initiateDeposit}>
									<CustomTextInput
										label="Enter Amount"
										type="number"
										helperText="Some important text"
										value={addMoney.amountInput.amount}
										onChange={event =>
											addMoneyActions.amountInput(event.currentTarget.value)}
									/>
									<div className={classes.root}>
										<div className={classes.wrapper}>
											<Button
												fab
												color="primary"
												type="submit"
												className={buttonClassname}
											>
												{success ? <CheckIcon /> : <AddIcon />}
											</Button>
											{addMoney.amountInput.loading && (
												<CircularProgress
													size={120}
													thickness={1.5}
													className={classes.fabProgress}
												/>
											)}
										</div>
									</div>
								</form>
							</TabContainer>
						</SwipeableViews>
					</Grid>
				</Grid>
				<DialogContainer
					success={success}
					onRequestClose={this._cancelPrompt}
					justCloseDialog={this._handleDialogRequestClose}
					amount={parseFloat(addMoney.amountInput.amount)}
					stage={stage}
					refInit={this._refInitiate}
					progress={this._setCompoentRenderState}
					{...all}
				/>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		addMoney: state.app.addMoney
	};
}

function mapDispatchToProps(dispatch) {
	return {
		addMoneyActions: bindActionCreators(addMoneyActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(
	withStyles(styles)(AddMoney)
);
