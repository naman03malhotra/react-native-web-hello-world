/* eslint-disable flowtype/require-valid-file-annotation */

import React from 'react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Dialog, {
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle
} from 'material-ui/Dialog';
import { CircularProgress } from 'material-ui/Progress';
import { withStyles } from 'material-ui/styles';
import CloseIcon from 'material-ui-icons/Close';
import Color from 'color';
import classNames from 'classnames';
import Grid from 'material-ui/Grid';
import AppTheme from '../../../theme/variables';
import SnackBar from '../common/snack_bar';

const styles = theme => ({
	crossContainer: {
		alignSelf: 'flex-end',
		marginTop: '-50px',
		color: AppTheme.colorWhite,
		height: '50px',
		cursor: 'pointer'
	},
	textFieldContainer: {
		marginTop: AppTheme.spacingUnit * 2,
		marginBottom: AppTheme.spacingUnit * 2
	},
	textField: {
		width: '100%',
		fontSize: `${AppTheme.spacingUnit * 4}px !important`
	},
	icon: {
		width: '45px',
		height: '45px'
	},
	buttonContainer: {
		width: '100%'
	},
	buttonStyle: {
		borderRadius: '0px',
		padding: AppTheme.spacingUnit * 3,
		backgroundColor: AppTheme.colorPrimary,
		'&:hover': {
			backgroundColor: Color(AppTheme.colorPrimary)
				.lighten(0.3)
				.hex()
		}
	},
	fabProgress: {
		color: AppTheme.colorPrimary
	}
});

class Otp extends React.Component {
	state = {
		message: null,
		goodmsg: true,
		otp: ''
	};
	componentWillReceiveProps(props) {
		const { otpError } = props;
		if (otpError !== null) {
			this.setState({
				message: otpError,
				goodmsg: false
			});
		}
	}
	_closeSnackBar = (event, reason) => {
		const { clearError } = this.props;
		if (reason === 'clickaway') {
			return;
		}
		this.setState({ message: null });
		clearError(); // clear OTP error
	};
	_resendOtp = event => {
		const { resend } = this.props;
		resend(event);
		this.setState({
			message: 'OTP resent, please check your mobile phone',
			goodmsg: true
		});
	};
	_submitOtp = event => {
		event.preventDefault();
		const { otp } = this.state;
		const { enter } = this.props;
		if (otp.length !== 6) {
			this.setState({
				message: 'OTP must be 6 digits long',
				goodmsg: false
			});
			return;
		}
		const otpObj = {
			otp: otp
		};
		enter(otpObj);
	};
	render() {
		const { open, handleRequestClose, classes, loading } = this.props;
		const { message, goodmsg, otp } = this.state;
		return (
			<div>
				{message && (
					<SnackBar
						message={message}
						open
						close={this._closeSnackBar}
						otp
					/>
				)}
				<Dialog
					ignoreBackdropClick
					open={open}
					onRequestClose={() => handleRequestClose(false)}
				>
					{!loading && (
						<span
							className={classes.crossContainer}
							onClick={() => handleRequestClose(false)}
						>
							<CloseIcon className={classes.icon} />
						</span>
					)}
					<DialogTitle>Enter OTP </DialogTitle>
					<DialogContent>
						<DialogContentText>
							Please wait for 30s for OTP to arrive
						</DialogContentText>
						<div
							className={classNames(
								'form-group',
								message && goodmsg && 'has-success',
								message && !goodmsg && 'has-error'
							)}
						>
							<form
								onSubmit={this._submitOtp}
								className={classNames(
									'col-xs-12',
									'col-sm-10',
									classes.textFieldContainer
								)}
							>
								<input
									type="number"
									value={otp}
									className={classNames('form-control', classes.textField)}
									placeholder="Enter OTP"
									onChange={event =>
										this.setState({
											otp: event.currentTarget.value
										})}
								/>
								{message && (
									<label className="control-label" htmlFor="inputError">
										{message}
									</label>
								)}
							</form>
							<div className="col-xs-12 col-sm-2">
								<Button onClick={this._resendOtp}>Resend OTP</Button>
							</div>
						</div>
					</DialogContent>
					<Grid container>
						<Grid item xs={12}>
							<Button
								raised
								className={classNames(
									classes.buttonStyle,
									classes.buttonContainer
								)}
								color="primary"
								disabled={loading}
								type="submit"
								onClick={this._submitOtp}
							>
								{!loading ? (
									'Verify'
								) : (
									<CircularProgress size={24} className={classes.fabProgress} />
								)}
							</Button>
						</Grid>
					</Grid>
				</Dialog>
			</div>
		);
	}
}

export default withStyles(styles)(Otp);
