import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';

import List, {
	ListItem,
	ListItemText,
	ListItemAvatar,
	ListItemSecondaryAction
} from 'material-ui/List';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import green from 'material-ui/colors/green';
import Divider from 'material-ui/Divider';
import { CircularProgress } from 'material-ui/Progress';
import Paper from 'material-ui/Paper';
import Color from 'color';
import Typography from 'material-ui/Typography';
import ArrowForward from 'material-ui-icons/ArrowForward';

import AppTheme from '../../../../theme/variables';

const styles = theme => ({
	list: {
		paddingTop: AppTheme.spacingUnit * 4,
		paddingBottom: AppTheme.spacingUnit * 4
	},
	paper: {
		backgroundColor: green[500],
		marginTop: AppTheme.spacingUnit * 4,
		padding: AppTheme.spacingUnit * 3
	},
	heading: {
		color: AppTheme.colorWhite
	},
	textCenter: {
		textAlign: 'center'
	},
	wrapperStyle: {
		marginLeft: AppTheme.spacingUnit * 4,
		marginRight: AppTheme.spacingUnit * 4
	},
	actionContainer: {
		marginTop: AppTheme.spacingUnit * 2,
		marginBottom: AppTheme.spacingUnit * 4
	},
	textField: {
		width: '100%',
		fontSize: AppTheme.spacingUnit * 2
	},
	button: {
		width: '100%',
		marginTop: AppTheme.spacingUnit * 2,
		backgroundColor: AppTheme.colorPrimary,
		color: AppTheme.colorWhite,
		'&:hover': {
			backgroundColor: Color(AppTheme.colorPrimary)
				.lighten(0.3)
				.hex()
		}
	},
	fabProgress: {
		color: AppTheme.colorPrimary
	},
	icon: {
		marginLeft: AppTheme.spacingUnit
	}
});

class ShowInvoice extends Component {
	render() {
		const {
			classes,
			amount,
			fiat,
			addMoney,
			addMoneyActions,
			refInit,
			stage,
			onRequestClose,
			history
		} = this.props;
		return (
			<div className={classes.wrapperStyle}>
				<Paper className={classes.paper}>
					<Typography type="subheading" className={classes.heading}>
						{`You have successfully entered the payment reference number for
								${amount.toFixed(2)} ${fiat.toUpperCase()}, details are shown below.`}
					</Typography>
				</Paper>
				<List>
					<ListItem button className={classes.list}>
						<ListItemText
							style={{ flex: 0.7 }}
							primary="Deposit"
							secondary={`ID`}
						/>
						<ListItemSecondaryAction style={{ flex: 0.2 }}>
							<ListItemText
								primary={addMoney.amountInput.transaction.transactionId}
							/>
						</ListItemSecondaryAction>
					</ListItem>
					<Divider />
					<ListItem button className={classes.list}>
						<ListItemText
							style={{ flex: 0.7 }}
							primary="Date"
							secondary={`Time`}
						/>
						<ListItemSecondaryAction style={{ flex: 0.2 }}>
							<ListItemText
								primary={addMoney.amountInput.transaction.created}
							/>
						</ListItemSecondaryAction>
					</ListItem>
					<Divider />

					<form onSubmit={(e) => refInit(stage, e)} className={classes.actionContainer}>
						<TextField
							label="Update Payment reference"
							className={classes.textField}
							helperText="Some important text"
							value={addMoney.amountInput.ref}
							onChange={event =>
								addMoneyActions.inputReference(event.currentTarget.value)}
						/>
						<div>
							{!addMoney.amountInput.loading ? (
								<Button raised className={classes.button} type="submit">
									Update
									<ArrowForward className={classes.icon} />
								</Button>
							) : (
								<Button raised disabled className={classes.button}>
									<CircularProgress size={24} className={classes.fabProgress} />
								</Button>
							)}

							<Button
								raised
								className={classes.button}
								onClick={onRequestClose}
							>
								Cancel Request
								<ArrowForward className={classes.icon} />
							</Button>
							<Button
								raised
								className={classes.button}
								onClick={() => history.push('/passbook')}
							>
								See Transactions
								<ArrowForward className={classes.icon} />
							</Button>
						</div>
					</form>
				</List>
			</div>
		);
	}
}

ShowInvoice.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ShowInvoice);
