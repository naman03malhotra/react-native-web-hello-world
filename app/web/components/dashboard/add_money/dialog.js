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

import PaymentOptions from './payment_options';
import ShowBankDetails from './show_bank_details';
import ShowInvoice from './show_invoice';
import AppTheme from '../../../../theme/variables';

const styles = theme => ({
	appBar: {
		position: 'relative',
		backgroundColor: AppTheme.colorPrimary
	},
	flex: {
		flex: 1
	}
});

class DialogContainer extends Component {
	state = {
		success: false,
		stage: 0
	};

	handleRequestClose = () => {};

	handleButtonClick = () => {};
	_handleComponentRender = () => {
		const { stage } = this.state;
		switch (stage) {
			case 0:
				return <PaymentOptions progress={this._setCompoentRenderState} />;
			case 1:
				return <ShowBankDetails progress={this._setCompoentRenderState} />;
			case 2:
				return <ShowInvoice progress={this._setCompoentRenderState} />;
			default:
				return <div>{'Loading ...'}</div>;
		}
	};
	_setCompoentRenderState = value => {
		this.setState({
			stage: value
		});
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
							Select Payment Option
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
				{this._handleComponentRender()}
			</Dialog>
		);
	}
}

DialogContainer.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DialogContainer);
