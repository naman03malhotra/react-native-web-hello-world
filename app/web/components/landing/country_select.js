import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Avatar from 'material-ui/Avatar';
import List, { ListItem, ListItemAvatar, ListItemText } from 'material-ui/List';
import Dialog, { DialogTitle } from 'material-ui/Dialog';
import PersonIcon from 'material-ui-icons/Person';
import AddIcon from 'material-ui-icons/Add';
import Typography from 'material-ui/Typography';
import blue from 'material-ui/colors/blue';
import { COUNTRIES } from '../../../configs/app_config';

const styles = {
	avatar: {
		background: blue[100],
		color: blue[600]
	}
};

const currencies = ['inr', 'aed'];

class CountrySelect extends React.Component {
	static propTypes = {
		classes: PropTypes.object.isRequired,
    onRequestClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired
	};

	render() {
		const { classes, onRequestClose, open } = this.props;

		return (
			<Dialog onRequestClose={this.onRequestClose} open={open}>
				<DialogTitle>Select Country</DialogTitle>
				<div>
					<List>
						{currencies.map(data => (
							<ListItem
								button
								onClick={() => onRequestClose(data)}
								key={data}
							>
								<ListItemAvatar>
									<Avatar
										className={classes.avatar}
										alt={COUNTRIES[data].countryName}
										src={`/images/flags/${data}.svg`}
									/>
								</ListItemAvatar>
								<ListItemText primary={COUNTRIES[data].countryName} />
							</ListItem>
						))}
					</List>
				</div>
			</Dialog>
		);
	}
}

export default withStyles(styles)(CountrySelect);
