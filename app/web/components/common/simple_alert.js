import React from 'react';
import Button from 'material-ui/Button';
import Dialog, {
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle
} from 'material-ui/Dialog';

export default class AlertDialogSlide extends React.Component {

	render() {
		const { title, message, open, close } = this.props;
		return (
			<div>
				<Dialog
					open={open}
					onRequestClose={close}
				>
        {(title !== null) && <DialogTitle>{title}</DialogTitle>}
					<DialogContent>
						<DialogContentText>
						{message}
						</DialogContentText>
					</DialogContent>
					<DialogActions>
						<Button onClick={close} color="primary">
							Okay
						</Button>
					</DialogActions>
				</Dialog>
			</div>
		);
	}
}
