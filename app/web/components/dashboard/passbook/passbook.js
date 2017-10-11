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
import PassbookIcon from 'material-ui-icons/History';
import Table, {
	TableBody,
	TableCell,
	TableHead,
	TableRow
} from 'material-ui/Table';

import AppTheme from '../../../../theme/variables';

let id = 0;

function createData(idx, type, date, amount, crypto, status) {
	id += 1;
	return { id, idx, type, date, amount, crypto, status };
}
function TabContainer(props) {
	return (
		<div style={{ padding: AppTheme.spaceExtraBig }}>{props.children}</div>
	);
}

const data = [
	createData(
		'D712323423423423',
		'DEPOSIT (Bank Transfer)',
		'Oct 9, 12:00 AM',
		'500000',
		'1 BTC',
		'PENDING'
	),
	createData(
		'D712323423423423',
		'DEPOSIT (Bank Transfer)',
		'Oct 9, 12:00 AM',
		'500000',
		'1 BTC',
		'PENDING'		
	),
	createData(
		'D712323423423423',
		'DEPOSIT (Bank Transfer)',
		'Oct 9, 12:00 AM',
		'500000',
		'1 BTC',
		'PENDING'	
	),
	createData(
		'D712323423423423',
		'DEPOSIT (Bank Transfer)',
		'Oct 9, 12:00 AM',
		'500000',
		'1 BTC',
		'APPROVED'	
	),
	createData(
		'D712323423423423',
		'DEPOSIT (Bank Transfer)',
		'Oct 9, 12:00 AM',
		'500000',
		'1 BTC',
		'APPROVED'		
	)
];

const styles = theme => ({
	paper: {
		marginTop: theme.spacing.unit
	},
	tableHeading: {
		backgroundColor: AppTheme.colorTabBg,
		boxShadow: theme.shadows[4],
		borderRadius: '2px'
	}
});

class Passbook extends Component {
	static propTypes = {
		classes: PropTypes.object.isRequired
	};
	state = {
		value: 0
	};

	render() {
		const { classes } = this.props;

		return (
			<Grid container spacing={24}>
				<Grid item xs={12} sm={12}>
					<AppBar position="static" color="default">
						<Tabs
							value={0}
							onChange={this.cryptoHandleChange}
							indicatorColor={AppTheme.colorPrimary}
							textColor={AppTheme.colorPrimary}
							fullWidth
							centered
						>
							<Tab label="Transaction History" icon={<PassbookIcon />} />
						</Tabs>
					</AppBar>
					<SwipeableViews
						index={0}
					>
						<TabContainer>
							<Table>
								<TableHead>
									<TableRow>
										<TableCell>Txn ID</TableCell>
										<TableCell>Type</TableCell>
										<TableCell>Date</TableCell>
										<TableCell numeric>Total (INR)</TableCell>
										<TableCell numeric>BTC Amount</TableCell>
										<TableCell numeric>Status</TableCell>										
									</TableRow>
								</TableHead>
								<TableBody>
									{data.map(n => {
										return (
											<TableRow key={n.id}>
												<TableCell>{n.idx}</TableCell>
												<TableCell>{n.type}</TableCell>												
												<TableCell>{n.date}</TableCell>
												<TableCell numeric>{`${n.amount} BTC`}</TableCell>
												<TableCell numeric>{n.crypto}</TableCell>
												<TableCell numeric>{n.status}</TableCell>												
											</TableRow>
										);
									})}
								</TableBody>
							</Table>
						</TabContainer>
					</SwipeableViews>
				</Grid>
			</Grid>

			// <div className={classes.paper}>
			// 	<Grid container spacing={24}>
			// 		<Grid item xs={12} sm={6}>
			// 			<Table>
			// 				<TableHead className={classes.tableHeading}>
			// 					<TableRow>
			// 						<TableCell>Price Per BTC</TableCell>
			// 						<TableCell>BTC Amount</TableCell>
			// 						<TableCell>Total (INR)</TableCell>
			// 					</TableRow>
			// 				</TableHead>
			// 				<TableBody>
			// 					{data.map(n => {
			// 						return (
			// 							<TableRow key={n.id}>
			// 								<TableCell>{n.price}</TableCell>
			// 								<TableCell>{`${n.amount} BTC`}</TableCell>
			// 								<TableCell>{n.total}</TableCell>
			// 							</TableRow>
			// 						);
			// 					})}
			// 				</TableBody>
			// 			</Table>
			// 		</Grid>
			// 	</Grid>
			// </div>
		);
	}
}

export default withStyles(styles)(Passbook);
