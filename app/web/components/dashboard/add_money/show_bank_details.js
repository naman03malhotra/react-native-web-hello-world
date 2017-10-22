import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';

import List, {
	ListItem,
	ListItemText,
	ListItemSecondaryAction
} from 'material-ui/List';

import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import { CircularProgress } from 'material-ui/Progress';
import Paper from 'material-ui/Paper';
import Color from 'color';
import Typography from 'material-ui/Typography';
import ArrowForward from 'material-ui-icons/ArrowForward';
import CustomTextInput from '../../common/text_input';
import AppTheme from '../../../../theme/variables';

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
	textField: {
		width: '100%',
		fontSize: AppTheme.spacingUnit * 2
	},
	actionContainer: {
		marginTop: AppTheme.spacingUnit * 2,
		marginBottom: AppTheme.spacingUnit * 4
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

class ShowBankDetails extends Component {
	render() {
		const {
			classes,
			amount,
			fiat,
			addMoney,
			addMoneyActions,
			refInit,
			stage
		} = this.props;
		return (
			<div className={classes.wrapperStyle}>
				<Paper className={classes.paper}>
					<Typography type="subheading" className={classes.heading}>
						{`Deposit ${amount.toFixed(
							2
						)} ${fiat.toUpperCase()} to the following bank account and enter the
								payment reference number below`}
					</Typography>
				</Paper>
				<List>
					<ListItem button className={classes.list}>
						<ListItemText
							style={{ flex: 0.7 }}
							primary="HDFC Bank"
							secondary={`Account Number`}
						/>
						<ListItemSecondaryAction style={{ flex: 0.2 }}>
							<ListItemText primary={`3220445213234`} />
						</ListItemSecondaryAction>
					</ListItem>
					<Divider />
					<ListItem button className={classes.list}>
						<ListItemText
							style={{ flex: 0.7 }}
							primary="IFSC"
							secondary={`Code`}
						/>
						<ListItemSecondaryAction style={{ flex: 0.2 }}>
							<ListItemText primary={`SBI01123123`} />
						</ListItemSecondaryAction>
					</ListItem>
					<Divider />
					<ListItem button className={classes.list}>
						<ListItemText
							style={{ flex: 0.7 }}
							primary="Branch"
							secondary={`Name`}
						/>
						<ListItemSecondaryAction style={{ flex: 0.2 }}>
							<ListItemText primary={`Ganesh Nagar`} />
						</ListItemSecondaryAction>
					</ListItem>
					<Divider />

					<form onSubmit={(e) => refInit(stage, e)} className={classes.actionContainer}>
						<TextField
							label="Enter Payment reference number"
							className={classes.textField}
							helperText="Some important text"
							value={addMoney.amountInput.ref}
							onChange={event =>
								addMoneyActions.inputReference(event.currentTarget.value)}
						/>
						<div>
							{!addMoney.amountInput.loading ? (
								<Button raised className={classes.button} type="submit">
									Proceed
									<ArrowForward className={classes.icon} />
								</Button>
							) : (
								<Button raised disabled className={classes.button}>
									<CircularProgress size={24} className={classes.fabProgress} />
								</Button>
							)}
						</div>
					</form>
				</List>
			</div>
		);
	}
}

ShowBankDetails.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ShowBankDetails);
