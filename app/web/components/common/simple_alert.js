import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import CloseIcon from 'material-ui-icons/Close';
import Dialog, {
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle
} from 'material-ui/Dialog';
import AppTheme from '../../../theme/variables';

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
	}
});

class SimpleAlert extends React.Component {
	static propTypes = {
		title: PropTypes.string,
		message: PropTypes.string.isRequired,
		open: PropTypes.bool.isRequired,
		close: PropTypes.func.isRequired,
		mainButtonText: PropTypes.string,
		mainButtonFunc: PropTypes.func,
		closeButtonText: PropTypes.string
	};
	static defaultProps = {
		mainButtonText: 'Okay',
		mainButtonFunc: null,
		closeButtonText: null
	};
	render() {
		const {
			title,
			message,
			open,
			close,
			mainButtonText,
			mainButtonFunc,
			closeButtonText,
			classes
		} = this.props;
		const mainButtonAction = mainButtonFunc === null ? close : mainButtonFunc;
		return (
			<div>
				<Dialog open={open} onRequestClose={close}>
					{/* <span className={classes.crossContainer} onClick={close}>
						<CloseIcon className={classes.icon} />
					</span> */}
					{title !== null && <DialogTitle>{title}</DialogTitle>}
					<DialogContent>
						<DialogContentText>{message}</DialogContentText>
					</DialogContent>
					<DialogActions>
						{closeButtonText && (
							<Button onClick={close} color="primary">
								{closeButtonText}
							</Button>
						)}
						<Button onClick={mainButtonAction} color="primary">
							{mainButtonText}
						</Button>
					</DialogActions>
				</Dialog>
			</div>
		);
	}
}

export default withStyles(styles)(SimpleAlert);
