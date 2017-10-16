import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';

import List, {
	ListItem,
	ListItemText,
	ListItemSecondaryAction
} from 'material-ui/List';
import Grid from 'material-ui/Grid';
import Hidden from 'material-ui/Hidden';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
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
	state = {
		loading: false,
		success: false,
		value: 0
	};
	componentWillUnmount() {
		clearTimeout(this.timer);
	}
	handleButtonClick = () => {
		const { progress } = this.props;
		if (!this.state.loading) {
			this.setState(
				{
					success: false,
					loading: true
				},
				() => {
					this.timer = setTimeout(() => {
						this.setState({
							loading: false,
							success: true
						});
						progress(2);
					}, 1000);
				}
			);
		}
	};
	render() {
		const { loading, success } = this.state;
		const { classes } = this.props;
		return (
			<Grid container spacing={24}>
				<Hidden xsDown>
					<Grid item xs={3} />
				</Hidden>
				<Grid item xs={12} sm={6}>
					<div className={classes.wrapperStyle}>
						<Paper className={classes.paper}>
							<Typography type="subheading" className={classes.heading}>
								Deposit INR 50000 to the following bank account and enter the
								payment reference number below
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
						</List>
						<List>
							<div>
								<TextField
									label="Enter Payment reference number"
									className={classes.textField}
									helperText="Some important text"
								/>
								<div>
									{!loading ? (
										<Button
											raised
											className={classes.button}
											onClick={this.handleButtonClick}
										>
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
							</div>
						</List>
					</div>
				</Grid>
			</Grid>
		);
	}
}

ShowBankDetails.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ShowBankDetails);