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
import { withStyles } from 'material-ui/styles';
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
	buttonStyle: {
		width: '200px',
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
		open: false
	};

	handleClickOpen = () => {
		this.setState({ open: true });
	};

	handleRequestClose = () => {
		this.setState({ open: false });
	};

	render() {
		const { open, handleRequestClose, classes } = this.props;
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
						/>
						<TextField
							margin="dense"
							id="name"
							label="IFSC Code"
							type="text"
							fullWidth
						/>
						<TextField
							margin="dense"
							id="name"
							label="Bank Name"
							type="text"
							fullWidth
						/>
						<TextField
							margin="dense"
							id="name"
							label="Branch Name"
							type="text"
							fullWidth
						/>
						<TextField
							margin="dense"
							id="name"
							label="City"
							type="text"
							fullWidth
						/>
					</DialogContent>
					<DialogActions>
						<Button onClick={handleRequestClose} color="primary">
							Cancel
						</Button>
						<Button raised className={classes.buttonStyle} onClick={handleRequestClose} color="primary">
							save
						</Button>
					</DialogActions>
				</Dialog>
			</div>
		);
	}
}

export default withStyles(styles)(AddBankModal);
