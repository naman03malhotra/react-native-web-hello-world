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
import Grid from 'material-ui/Grid';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import { CircularProgress } from 'material-ui/Progress';
import CloseIcon from 'material-ui-icons/Close';
import Color from 'color';
import AppTheme from '../../../../theme/variables';

const styles = theme => ({
	crossContainer: {
		alignSelf: 'flex-end',
		marginTop: '-50px',
		color: AppTheme.colorWhite,
		height: '50px',
		cursor: 'pointer'
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
	}
});

class AddBankModal extends React.Component {
	state = {
		accountNo: '',
		ifsc: '',
		bankName: '',
		branchName: '',
		city: ''
	};
	componentWillReceiveProps(props) {
		const { userData } = props;
		if (userData.bankDetails !== undefined && userData.bankDetails.length > 0) {
			const { accountNo, ifsc, bankName, branchName, city } = userData.bankDetails[0];
			this.setState({
				accountNo,
				ifsc,
				bankName,
				branchName,
				city
			});
		}
	}
	// _focusInput(inputField) {
	// 	this[inputField]._root.focus();
	// }
	_saveBankDetails = () => {
		const dataToSend = this.state;
		const {
			withdraw,
			withdrawActions,
			userData,
			access_token,
			handleRequestClose
		} = this.props;
		if (!this._validateData(dataToSend)) return;
		withdrawActions.addBank(dataToSend, userData, access_token).then(() => {
			const { status } = this.props.withdraw.addBank;
			if (status === 1) {
				handleRequestClose();
			} else {
				alert('Some error occured');
			}
		});
	};
	_validateData = data => {
		if (data.accountNo === '') {
			alert('Please enter account number');
			return false;
		}
		if (data.ifsc === '') {
			alert('Please enter  IFSC code');
			return false;
		}
		if (data.bankName === '') {
			alert('Please enter bank name');
			return false;
		}
		if (data.branchName === '') {
			alert('Please enter branch name');
			return false;
		}
		if (data.city === '') {
			alert('Please enter city');
			return false;
		}
		return true;
	};
	render() {
		const { accountNo, ifsc, bankName, branchName, city } = this.state;
		const {
			open,
			handleRequestClose,
			classes,
			withdraw,
			withdrawActions
		} = this.props;
		return (
			<div>
				<Dialog open={open} onRequestClose={handleRequestClose}>
					<span className={classes.crossContainer} onClick={handleRequestClose}>
						<CloseIcon className={classes.icon} />
					</span>
					<DialogTitle>Add Bank (One Time Process)</DialogTitle>
					<DialogContent>
						<DialogContentText>
							Account Name is same as your name given in KYC
						</DialogContentText>
						<TextField
							autoFocus
							margin="dense"
							id="name"
							label="Account Number"
							type="number"
							fullWidth
							value={accountNo}
							onChange={event =>
								this.setState({ accountNo: event.currentTarget.value })}
						/>
						<TextField
							margin="dense"
							id="name"
							label="IFSC Code"
							type="text"
							fullWidth
							value={ifsc}
							onChange={event =>
								this.setState({ ifsc: event.currentTarget.value })}
						/>
						<TextField
							margin="dense"
							id="name"
							label="Bank Name"
							type="text"
							fullWidth
							value={bankName}
							onChange={event =>
								this.setState({ bankName: event.currentTarget.value })}
						/>
						<TextField
							margin="dense"
							id="name"
							label="Branch Name"
							type="text"
							fullWidth
							value={branchName}
							onChange={event =>
								this.setState({ branchName: event.currentTarget.value })}
						/>
						<TextField
							margin="dense"
							id="name"
							label="City"
							type="text"
							fullWidth
							value={city}
							onChange={event =>
								this.setState({ city: event.currentTarget.value })}
						/>
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
								disabled={withdraw.addBank.loading}
								onClick={this._saveBankDetails}
							>
								{!withdraw.addBank.loading ? (
									'Save'
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

export default withStyles(styles)(AddBankModal);
