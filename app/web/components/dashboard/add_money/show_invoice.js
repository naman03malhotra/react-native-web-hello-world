import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';

import List, {
	ListItem,
	ListItemText,
	ListItemAvatar,
	ListItemSecondaryAction
} from 'material-ui/List';
import Grid from 'material-ui/Grid';
import Hidden from 'material-ui/Hidden';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import green from 'material-ui/colors/green';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import Payment from 'material-ui-icons/Payment';
import { CircularProgress } from 'material-ui/Progress';
import Biz from 'material-ui-icons/BusinessCenter';
import CheckIcon from 'material-ui-icons/Check';
import AddIcon from 'material-ui-icons/Add';
import classNames from 'classnames';
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
		marginTop: AppTheme.spacingUnit * 4,
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
	state = {
		loading: false,
		success: false,
		value: 0
	};
	componentWillUnmount() {
		clearTimeout(this.timer);
	}
	handleButtonClick = () => {
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
					}, 2000);
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
								You have successfully entered the payment reference number for
								INR 500000, details are shown below.
							</Typography>
						</Paper>
						<List>
							<ListItem button className={classes.list}>
								<ListItemText
									style={{ flex: 0.7 }}
									primary="Request"
									secondary={`Number`}
								/>
								<ListItemSecondaryAction style={{ flex: 0.2 }}>
									<ListItemText primary={`D23492398742938`} />
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
									<ListItemText primary={`12 DEC 2017 12:15 PM`} />
								</ListItemSecondaryAction>
							</ListItem>
							<Divider />
						</List>
						<List>
							<div className={classes.actionContainer}>
								<TextField
									label="Update Payment reference"
									value='SBIaisdhkajb39328'
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
											Update
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
								
									<Button
										raised
										className={classes.button}
										onClick={this.handleButtonClick}
									>
										Cancel Request
										<ArrowForward className={classes.icon} />
									</Button>
									<Button
										raised
										className={classes.button}
										onClick={this.handleButtonClick}
									>
										See Transactions
										<ArrowForward className={classes.icon} />
									</Button>
								</div>
							</div>
						</List>
					</div>
				</Grid>
			</Grid>
		);
	}
}

ShowInvoice.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ShowInvoice);
