import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AppBar from 'material-ui/AppBar';
import { withStyles } from 'material-ui/styles';
import { CircularProgress } from 'material-ui/Progress';
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

import SignupForm from './signup_form';
import AppTheme from '../../../theme/variables';

const styles = theme => ({
	appBar: {
		position: 'relative',
		backgroundColor: AppTheme.colorPrimary
	},
	flex: {
		flex: 1
	}
});

class SignUp extends Component {
	static propTypes = {
		classes: PropTypes.object.isRequired,
		success: PropTypes.bool.isRequired,
		onRequestClose: PropTypes.func.isRequired
	};

	render() {
		const { classes, success, onRequestClose } = this.props;
		return (
			<Dialog
				fullScreen
				open={success}
				onRequestClose={onRequestClose}
				transition={<Slide direction="up" />}
			>
				<AppBar className={classes.appBar}>
					<Toolbar>
						<IconButton
							color="contrast"
							onClick={onRequestClose}
							aria-label="Close"
						>
							<ArrowBack />
						</IconButton>
						<Typography
							type="subheading"
							color="inherit"
							className={classes.flex}
						>
							Alconomy
						</Typography>
						<IconButton
							color="contrast"
							onClick={onRequestClose}
							aria-label="Close"
						>
							<CloseIcon />
						</IconButton>
					</Toolbar>
				</AppBar>
				<SignupForm />
			</Dialog>
		);
	}
}

SignUp.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SignUp);
