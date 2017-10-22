import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AppBar from 'material-ui/AppBar';
import { withStyles } from 'material-ui/styles';
import { CircularProgress } from 'material-ui/Progress';
import green from 'material-ui/colors/green';
import Button from 'material-ui/Button';
import CheckIcon from 'material-ui-icons/Check';
import ArrowForward from 'material-ui-icons/ArrowForward';
import Typography from 'material-ui/Typography';
import SendIcon from 'material-ui-icons/Send';
import SvgIcon from 'material-ui/SvgIcon';
import Tabs, { Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import Color from 'color';
import CustomTextInput from '../../common/text_input';
import AppTheme from '../../../../theme/variables';
import SimpleAlert from '../../../components/common/simple_alert';

const styles = theme => ({
	root: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around'
	},
	textField: {
		width: '100%',
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
	button: {
		width: '100%',
		padding: AppTheme.spacingUnit * 2,
		marginTop: AppTheme.spacingUnit * 4,
		backgroundColor: AppTheme.colorPrimary,
		color: AppTheme.colorWhite,
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
const field = {
	ADDRESS: 'address',
	AMOUNT: 'amount',
	DESCP: 'descp'
};
class SendINR extends Component {
	state = {
		loading: false,
		address: '',
		amount: '',
		descp: '',
		status: 0
	};
	componentWillReceiveProps(props) {
		const { mode, crypto, fiat, send } = props;
		const { inputData } = send.amountInput;

		if (inputData !== null) {
			try {
				const address = inputData[crypto][mode][field.ADDRESS].value;
				this.setState({ address });
			} catch (err) {}
			try {
				const amount = inputData[crypto][mode][field.AMOUNT].value;
				this.setState({ amount });
			} catch (err) {}
			try {
				const descp = inputData[crypto][mode][field.DESCP].value;
				this.setState({ descp });
			} catch (err) {}
			try {
				const loading = inputData[crypto].loading;
				this.setState({ loading });
			} catch (err) {}
			try {
				const status = inputData[crypto].status;
				this.setState({ status });
			} catch (err) {}
		}
	}
	_initiateSend = () => {
		const { address, amount, descp } = this.state;
		const {
			send,
			sendActions,
			userData,
			fiat,
			crypto,
			mode,
			history
		} = this.props;
		const data = {
			amount,
			to: address,
			narration: descp
		};
		const { error } = sendActions.validateData(
			userData,
			data,
			crypto,
			fiat,
			mode
		).data;
		if (error !== null) {
			if (error.code === 0) {
				error.closeButtonText = 'Close';
				error.mainButtonText = 'Add Money';
				error.func = () => {
					history.push('/add-money');
				};
			} else if (error.code === 10) {
				error.closeButtonText = 'Close';
				error.mainButtonText = `Add ${crypto.toUpperCase()}`;
				error.func = () => {
					history.push('/receive');
				};
			} else if (error.code === 1) {
				error.closeButtonText = 'Cancel';
				error.mainButtonText = 'Confirm';
				error.func = () => {
					this._handleErrorRequestClose();
					this._executeSend(data);
				};
			}
			this.setState({ error });
		}
	};
	_executeSend = data => {
		const {
			send,
			sendActions,
			userData,
			access_token,
			fiat,
			crypto,
			mode,
			history
		} = this.props;
		sendActions.executeSend(data, access_token, crypto, fiat, mode).then(() => {
			const { error } = this.props.send.amountInput;
			const { status } = this.state;
			if (status === 1) {
				error.closeButtonText = 'close';
				error.mainButtonText = 'Check Passbook';
				error.func = () => {
					history.push('/passbook');
				};
			}
			this.setState({ error });
		});
	};
	_handleErrorRequestClose = () => {
		this.setState({ error: null });
	};
	render() {
		const { address, amount, descp, loading, error } = this.state;
		const {
			classes,
			mode,
			userData,
			crypto,
			fiat,
			send,
			sendActions
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
				<div className={classes.balanceContainer}>
					<Typography type="subheading">Your Balance</Typography>
					<Typography type="title" className={classes.title}>
						{mode === 'fiat'
							? userData.balanceFiat
							: userData[crypto].balanceReal + userData[crypto].balanceVirtual}
					</Typography>
					<Typography type="subheading">
						{mode === 'fiat' ? fiat.toUpperCase() : crypto.toUpperCase()}
					</Typography>
				</div>
				<TextField
					label={`Sender's Mobile Number ${mode === 'crypto'
						? `or ${crypto.toUpperCase()} address`
						: ''}`}
					className={classes.textField}
					type={mode === 'fiat' ? 'text' : 'text'}
					value={address}
					onChange={event =>
						sendActions.amountInput(
							event.currentTarget.value,
							mode,
							fiat,
							crypto,
							field.ADDRESS
						)}
				/>
				<TextField
					label="Enter Amount"
					className={classes.textField}
					type="number"
					value={amount}
					onChange={event =>
						sendActions.amountInput(
							event.currentTarget.value,
							mode,
							fiat,
							crypto,
							field.AMOUNT
						)}
				/>
				<TextField
					label="Optional Description"
					helperText="Some important text"
					className={classes.textField}
					value={descp}
					onChange={event =>
						sendActions.amountInput(
							event.currentTarget.value,
							mode,
							fiat,
							crypto,
							field.DESCP
						)}
				/>
				<div>
					{!loading ? (
						<Button
							raised
							className={classes.button}
							onClick={this._initiateSend}
						>
							Proceed
							<SendIcon className={classes.icon} />
						</Button>
					) : (
						<Button raised disabled className={classes.button}>
							<CircularProgress size={24} className={classes.fabProgress} />
						</Button>
					)}
				</div>
			</div>
		);
	}
}

SendINR.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SendINR);
