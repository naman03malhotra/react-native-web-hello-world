/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import List, {
	ListItem,
	ListItemAvatar,
	ListItemIcon,
	ListItemSecondaryAction,
	ListItemText
} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import AccountBalance from 'material-ui-icons/AccountBalance';
import Tabs, { Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import Grid from 'material-ui/Grid';
import SvgIcon from 'material-ui/SvgIcon';
import Table, {
	TableBody,
	TableCell,
	TableHead,
	TableRow
} from 'material-ui/Table';

import AppTheme from '../../../../theme/variables';


let id = 0;
function createData(price, amount, total) {
  id += 1;
  return { id, price, amount, total };
}

const data = [
  createData(159, 6.0, 24),
  createData(237, 9.0, 37),
  createData(262, 16.0, 24),
  createData(305, 3.7, 67),
  createData(356, 16.0, 49),
];

const styles = theme => ({
	paper: {
		marginTop: theme.spacing.unit
	}
});

class ActiveBids extends Component {
	static propTypes = {
		classes: PropTypes.object.isRequired
	};
	state = {
		value: 0
	};

	render() {
		const { classes } = this.props;

		return (
			<div className={classes.paper}>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Price Per BTC</TableCell>
							<TableCell>BTC Amount</TableCell>
							<TableCell>Total (INR)</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{data.map(n => {
							return (
								<TableRow key={n.id}>
									<TableCell>{n.price}</TableCell>
									<TableCell>{`${n.amount} BTC`}</TableCell>
									<TableCell>{n.total}</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</div>
		);
	}
}

export default withStyles(styles)(ActiveBids);
