import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import { withStyles } from 'material-ui/styles';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import CloseIcon from 'material-ui-icons/Close';
import ArrowBack from 'material-ui-icons/ArrowBack';
import Slide from 'material-ui/transitions/Slide';
import Dialog from 'material-ui/Dialog';
import Grid from 'material-ui/Grid';
import Hidden from 'material-ui/Hidden';
import PaymentOptions from './payment_options';
import ShowBankDetails from './show_bank_details';
import ShowInvoice from './show_invoice';
import AppTheme from '../../../../theme/variables';

const styles = theme => ({
	appBar: {
		position: 'relative',
		backgroundColor: AppTheme.colorPrimary
	},
	gridContainer: {
		overflow: 'auto'
	},
	flex: {
		flex: 1
	}
});

class DialogContainer extends Component {
	static propTypes = {
		success: PropTypes.bool.isRequired,
		onRequestClose: PropTypes.func.isRequired,
		justCloseDialog: PropTypes.func.isRequired,
		amount: PropTypes.number.isRequired,
		stage: PropTypes.number.isRequired,
		refInit: PropTypes.func.isRequired,
		progress: PropTypes.func.isRequired
	};
	_handleComponentRender = () => {
		const { classes, stage, ...all } = this.props;
		switch (stage) {
			case 0:
				return <PaymentOptions stage={stage} {...all} />;
			case 1:
				return <ShowBankDetails stage={stage} {...all} />;
			case 2:
				return <ShowInvoice stage={stage} {...all} />;
			default:
				return <div>{'Loading ...'}</div>;
		}
	};

	render() {
		const {
			classes,
			success,
			onRequestClose,
			justCloseDialog,
			stage
		} = this.props;
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
							onClick={stage === 2 ? justCloseDialog : onRequestClose}
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
							onClick={stage === 2 ? justCloseDialog : onRequestClose}
							aria-label="Close"
						>
							<CloseIcon />
						</IconButton>
					</Toolbar>
				</AppBar>
				<Grid container spacing={24} className={classes.gridContainer}>
					<Hidden xsDown>
						<Grid item xs={3} />
					</Hidden>
					<Grid item xs={12} sm={6}>
						{this._handleComponentRender()}
					</Grid>
				</Grid>
			</Dialog>
		);
	}
}

DialogContainer.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DialogContainer);
