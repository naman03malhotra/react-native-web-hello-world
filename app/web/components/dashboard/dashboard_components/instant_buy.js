// @flow weak

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import ArrowUpward from 'material-ui-icons/ArrowUpward';
import Color from 'color';
import classNames from 'classnames';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
import { CircularProgress } from 'material-ui/Progress';
import AppTheme from '../../../../theme/variables';
import CustomTextInput from '../../common/text_input';
import SimpleAlert from '../../../components/common/simple_alert';

const styles = theme => ({
	textField: {
		margin: AppTheme.spacingUnit,
		fontSize: AppTheme.spacingUnit * 3
	},
	colorPrimary: {
		color: AppTheme.colorPrimary
	},
	inputField: {
		'&:after': {
			backgroundColor: AppTheme.colorPrimary
		}
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
	fabProgress: {
		color: AppTheme.colorWhite
	},
	icon: {
		marginLeft: AppTheme.spacingUnit
	}
});

const mode = {
	FIAT: 'fiat',
	CRYPTO: 'crypto'
};

class InstantBuy extends Component {
	static propTypes = {
		classes: PropTypes.object.isRequired,
		dashboard: PropTypes.object.isRequired,
		dashboardActions: PropTypes.object.isRequired,
		cryptoRate: PropTypes.object.isRequired,
		userData: PropTypes.object.isRequired,
		access_token: PropTypes.string.isRequired,
		fiat: PropTypes.string.isRequired,
		type: PropTypes.string.isRequired,
		history: PropTypes.object.isRequired
	};
	state = {
		cryptoAmt: 1,
		fiatAmt: 0,
		loading: false,
		cryptoError: { message: null },
		fiatError: { message: null },
		rate: null,
		error: null,
		status: 0
	};

	componentDidMount() {
		const { crypto, type, cryptoRate, fiat } = this.props;
		const { cryptoAmt } = this.state;
		const fiatAmtFinal = (cryptoAmt * cryptoRate[crypto][type]).toFixed(2);
		const cryptoError = { message: `Min amt is 0.001 ${crypto.toUpperCase()}` };
		const fiatError = { message: `Min amt is 1000 ${fiat.toUpperCase()}` };
		this.setState({ fiatAmt: fiatAmtFinal, cryptoError, fiatError });
		this._manageAmount(cryptoAmt, mode.CRYPTO);
	}
	componentWillReceiveProps(props) {
		const { crypto, dashboard, type } = props;
		const { inputData } = dashboard.manageAmount;

		if (inputData !== null) {
			try {
				const cryptoAmt = inputData[crypto][type][mode.CRYPTO].amt;
				this.setState({ cryptoAmt });
			} catch (err) {}
			try {
				const fiatAmt = inputData[crypto][type][mode.FIAT].amt;
				this.setState({ fiatAmt });
			} catch (err) {}
			try {
				const rate = inputData[crypto][type][mode.FIAT].rate;
				this.setState({ rate });
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
		const {
			dashboardActions,
			access_token,
			cryptoRate,
			crypto,
			type
		} = this.props;
		dashboardActions.manageAmount(
			text,
			mode,
			type,
			access_token,
			cryptoRate,
			crypto
		);
	};
	_initiateInstant = () => {
		const { cryptoAmt, fiatAmt, rate } = this.state;
		const {
			userData,
			dashboardActions,
			crypto,
			fiat,
			history,
			access_token,
			type
		} = this.props;
		const data = {
			volume: cryptoAmt,
			amount: fiatAmt,
			price: rate
		};
		const { error } = dashboardActions.validateData(
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
					this._executeInstant(data);
				};
			}
			this.setState({ error });
		}
	};
	_executeInstant = data => {
		const {
			dashboardActions,
			crypto,
			fiat,
			history,
			access_token,
			type
		} = this.props;
		dashboardActions
			.executeInstant(data, access_token, crypto, fiat, type)
			.then(() => {
				const { error } = this.props.dashboard.manageAmount;
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
		const {
			cryptoAmt,
			fiatAmt,
			loading,
			cryptoError,
			fiatError,
			error
		} = this.state;
		const { classes, fiat, type, crypto } = this.props;
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
				<Grid item xs={6} className={classes.gridStyle}>
					<CustomTextInput
						label={crypto}
						type="number"
						value={cryptoAmt}
						helperText={cryptoError.message}
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
						onChange={event =>
							this._manageAmount(event.currentTarget.value, mode.FIAT)}
					/>
				</Grid>
				<Grid item xs={12} className={classes.gridStyle}>
					{!loading ? (
						<Button
							raised
							color="primary"
							className={classes.button}
							onClick={this._initiateInstant}
						>
							{`INSTANT ${type.toUpperCase()}`}
							<ArrowUpward className={classes.icon} />
						</Button>
					) : (
						<Button raised className={classes.button}>
							<CircularProgress size={24} className={classes.fabProgress} />
						</Button>
					)}
				</Grid>
			</Grid>
		);
	}
}

export default withStyles(styles)(InstantBuy);
