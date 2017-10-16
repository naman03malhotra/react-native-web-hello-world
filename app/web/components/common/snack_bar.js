/* eslint-disable flowtype/require-valid-file-annotation */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Snackbar from 'material-ui/Snackbar';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Close';
import Slide from 'material-ui/transitions/Slide';

const styles = theme => ({
	close: {
		width: theme.spacing.unit * 4,
		height: theme.spacing.unit * 4
	}
});

class SimpleSnackbar extends React.Component {
	state = {
		open: true
	};

	render() {
		const { classes, message, open, close, otp } = this.props;
		return (
			<div>
				<Snackbar
					anchorOrigin={{
						vertical: 'top',
						horizontal: 'center'
					}}
					open={open}
					autoHideDuration={5000}
					onRequestClose={close}
					onExit={close}
					SnackbarContentProps={{
						'aria-describedby': 'message-id'
					}}
					message={<span id="message-id">{message}</span>}
					action={!otp && [
						<IconButton
							key="close"
							aria-label="Close"
							color="accent"
							className={classes.close}
							onClick={close}
						>
							<CloseIcon />
						</IconButton>
					]}
				/>
			</div>
		);
	}
}

SimpleSnackbar.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleSnackbar);
