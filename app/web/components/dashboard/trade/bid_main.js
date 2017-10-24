// @flow weak

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import { CircularProgress } from 'material-ui/Progress';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import ArrowUpward from 'material-ui-icons/ArrowUpward';
import Color from 'color';
import Typography from 'material-ui/Typography';
import AppTheme from '../../../../theme/variables';
import CustomTextInput from '../../common/text_input';
import SimpleAlert from '../../../components/common/simple_alert';
import { MINIMUM, ERRORS } from '../../../../configs/app_config';

const styles = theme => ({
	textField: {
		margin: AppTheme.spacingUnit,
		fontSize: AppTheme.spacingUnit * 3
	},
	gridStyle: {
		textAlign: 'center'
	},
	button: {
		padding: AppTheme.spacingUnit * 2,
		fontSize: theme.typography.button.fontSize * 1.2,
		width: '100%',
		backgroundColor: AppTheme.colorPrimary,
		color: AppTheme.colorWhite,
		'&:hover': {
			backgroundColor: Color(AppTheme.colorPrimary)
				.lighten(0.3)
				.hex()
		}
	},
	icon: {
		marginLeft: AppTheme.spacingUnit
	}
});

const mode = {
	FIAT: 'fiat',
	CRYPTO: 'crypto'
};

class BidMain extends Component {
	static propTypes = {
		classes: PropTypes.object.isRequired
	};
	state = {
		cryptoAmt: 1,
		fiatAmt: 0,
		loading: false,
		cryptoError: { message: null, noerror: true },
		fiatError: { message: null, noerror: true },
		error: null,
		status: 0
	};
	componentDidMount() {
		const { type, crypto, fiat, cryptoRate } = this.props;
		const cryptoError = ERRORS.TRADE.DEFAULT(mode.CRYPTO, type, crypto);
		const fiatError = ERRORS.TRADE.DEFAULT(mode.FIAT, type, crypto);
		const fiatAmt = cryptoRate[crypto][type];
		this.setState({ cryptoError, fiatError, fiatAmt });
	}
	componentWillReceiveProps(props) {
		const { crypto, trade, type } = props;
		const { inputData } = trade.manageAmount;

		if (inputData !== null) {
			try {
				const fiatError = inputData[crypto][type][mode.FIAT].error;
				this.setState({ fiatError });
			} catch (err) {}
			try {
				const cryptoError = inputData[crypto][type][mode.CRYPTO].error;
				this.setState({ cryptoError });
			} catch (err) {}
			try {
				const cryptoAmt = inputData[crypto][type][mode.CRYPTO].amt;
				this.setState({ cryptoAmt });
			} catch (err) {}
			try {
				const fiatAmt = inputData[crypto][type][mode.FIAT].amt;
				this.setState({ fiatAmt });
			} catch (err) {}
			try {
				const loading = inputData[crypto][type].loading;
				this.setState({ loading });
			} catch (err) {}
			try {
				const status = inputData[crypto][type].status;
				this.setState({ status });
			} catch (err) {}
		}
	}
	_manageAmount = (text, mode) => {
		const { tradeActions, access_token, crypto, type, cryptoRate } = this.props;
		tradeActions.manageAmount(
			text,
			mode,
			type,
			access_token,
			crypto,
			cryptoRate
		);
	};
	_initiateBidding = total => {
		const { cryptoAmt, fiatAmt, cryptoError, fiatError } = this.state;
		if (!(cryptoError.noerror === true && fiatError.noerror === true)) return;
		const {
			userData,
			tradeActions,
			crypto,
			fiat,
			history,
			access_token,
			type
		} = this.props;
		const data = {
			volume: cryptoAmt,
			price: fiatAmt,
			total
		};
		const { error } = tradeActions.validateData(
			userData,
			data,
			crypto,
			fiat,
			type
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
					this._executeBidding(data);
				};
			}
			this.setState({ error });
		}
	};
	_executeBidding = data => {
		const {
			tradeActions,
			crypto,
			fiat,
			history,
			access_token,
			type
		} = this.props;
		tradeActions
			.executeBidding(data, access_token, crypto, fiat, type)
			.then(() => {
				const { error } = this.props.trade.manageAmount;
				const { status } = this.state;
				if (status === 1 || status === 2 || status === 3) {
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
		const {
			cryptoAmt,
			fiatAmt,
			loading,
			cryptoError,
			fiatError,
			error
		} = this.state;
		const { classes, fiat, type, crypto, userData } = this.props;
		const fee = cryptoAmt * fiatAmt * MINIMUM.TRADE.fee;
		let total = null;
		if (type === 'buy') {
			total = cryptoAmt * fiatAmt + fee;
		} else {
			total = cryptoAmt * fiatAmt - fee;
		}
		const totalCrypto =
			userData[crypto].balanceReal + userData[crypto].balanceVirtual;
		return (
			<Grid container spacing={24}>
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
					<Typography>
						{type === 'buy'
							? `${fiat.toUpperCase()} Balance: ${userData.balanceFiat}`
							: `${crypto.toUpperCase()} Balance: ${totalCrypto}`}
					</Typography>
				</Grid>
				<Grid item xs={6} className={classes.gridStyle}>
					<CustomTextInput
						label={crypto}
						type="number"
						value={cryptoAmt}
						helperText={cryptoError.message}
						error={!cryptoError.noerror}
						caps
						onChange={event =>
							this._manageAmount(event.currentTarget.value, mode.CRYPTO)}
					/>
				</Grid>
				<Grid item xs={6} className={classes.gridStyle}>
					<CustomTextInput
						label={fiat}
						type="number"
						value={fiatAmt}
						helperText={fiatError.message}
						error={!fiatError.noerror}
						caps
						onChange={event =>
							this._manageAmount(event.currentTarget.value, mode.FIAT)}
					/>
				</Grid>
				<Grid item xs={6} className={classes.gridStyle}>
					<Typography>{`Total: ${total.toFixed(
						2
					)} ${fiat.toUpperCase()}`}</Typography>
				</Grid>
				<Grid item xs={6} className={classes.gridStyle}>
					<Typography>{`Fee: ${fee.toFixed(
						2
					)} ${fiat.toUpperCase()}`}</Typography>
				</Grid>
				<Grid item xs={12} className={classes.gridStyle}>
					{!loading ? (
						<Button
							raised
							color="primary"
							className={classes.button}
							onClick={() => this._initiateBidding(total)}
						>
							{`Place ${type.toUpperCase()} Bid`}
							<ArrowUpward className={classes.icon} />
						</Button>
					) : (
						<Button raised disabled className={classes.button}>
							<CircularProgress size={24} className={classes.fabProgress} />
						</Button>
					)}
				</Grid>
			</Grid>
		);
	}
}

export default withStyles(styles)(BidMain);
