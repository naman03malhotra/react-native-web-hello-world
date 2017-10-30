import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AppBar from 'material-ui/AppBar';
import { withStyles } from 'material-ui/styles';
import { CircularProgress } from 'material-ui/Progress';
import Paper from 'material-ui/Paper';
import Hidden from 'material-ui/Hidden';
import green from 'material-ui/colors/green';
import Button from 'material-ui/Button';
import CheckIcon from 'material-ui-icons/Check';
import AddIcon from 'material-ui-icons/Add';
import Tabs, { Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import CloseIcon from 'material-ui-icons/Close';
import ArrowBack from 'material-ui-icons/ArrowBack';
import Slide from 'material-ui/transitions/Slide';
import Dialog from 'material-ui/Dialog';
import Color from 'color';
import ArrowForward from 'material-ui-icons/ArrowForward';

import AppTheme from '../../../../theme/variables';

const styles = theme => ({
	appBar: {
		position: 'relative',
		backgroundColor: AppTheme.colorPrimary
	},
	paper: {
		marginTop: AppTheme.spacingUnit * 4,
		padding: AppTheme.spacingUnit * 3
	},
	wrapperStyle: {
		marginLeft: AppTheme.spacingUnit * 4,
		marginRight: AppTheme.spacingUnit * 4
	},
	flex: {
		flex: 1
	},
	button: {
		width: '100%',
		padding: AppTheme.spacingUnit * 2,
		marginTop: AppTheme.spacingUnit * 2,
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

class StandBy extends Component {
	static propTypes = {
		classes: PropTypes.object.isRequired
	};
	_handleGotoDashboard = () => {
		const { history } = this.props;
		history.push('/dashboard');
	};

	render() {
		const { classes } = this.props;
		console.log(this.props);
		return (
			<Dialog
				fullScreen
				open
				onRequestClose={this._handleGotoDashboard}
			>
				<AppBar className={classes.appBar}>
					<Toolbar>
						<IconButton
							color="contrast"
							onClick={this._handleGotoDashboard}
							aria-label="Close"
						>
							<ArrowBack />
						</IconButton>
						<Typography
							type="subheading"
							color="inherit"
							className={classes.flex}
						>
							Alconomy - Stand By Mode
						</Typography>
					</Toolbar>
				</AppBar>
				<Grid container spacing={24}>
					<Hidden xsDown>
						<Grid item xs={3} />
					</Hidden>
					<Grid item xs={12} md={6}>
						<div className={classes.wrapperStyle}>
							<Paper className={classes.paper}>
								<Typography type="subheading" className={classes.heading}>
									You have been redirected to standby mode, this might be due to
									the slow internet connection or you were inactive for a
									significant amount of time.
								</Typography>
							</Paper>

							<Button
								raised
								className={classes.button}
								type="submit"
								onClick={this._handleGotoDashboard}
							>
								Go to dashboard
								<ArrowForward className={classes.icon} />
							</Button>
						</div>
					</Grid>
				</Grid>
			</Dialog>
		);
	}
}

export default withStyles(styles)(StandBy);
