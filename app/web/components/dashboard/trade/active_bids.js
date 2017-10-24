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
import { CircularProgress } from 'material-ui/Progress';

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
	createData(356, 16.0, 49)
];

const styles = theme => ({
	paper: {
		marginTop: theme.spacing.unit
	},
	textCenter: {
		textAlign: 'center'
	},
	fabProgress: {
		color: AppTheme.colorPrimary
	}
});

class ActiveBids extends Component {
	static propTypes = {
		classes: PropTypes.object.isRequired
	};
	state = {
		bidData: []
	};
	componentDidMount() {
		this._loadBids();
		// this.interval = setInterval(this._loadBids, 2000);
	}
	componentWillReceiveProps(props) {
		const { type, crypto, access_token, trade, tradeActions } = props;
		const { inputData } = trade.getBidData;

		if (inputData !== null) {
			try {
				const { bidData } = inputData[crypto][type];
				this.setState({ bidData });
			} catch (err) {}
		}
	}
	componentWillUnmount() {
		clearInterval(this.interval);
	}
	_loadBids = () => {
		const { type, crypto, access_token, trade, tradeActions } = this.props;
		tradeActions.getBidData(type, crypto, access_token);
	};
	_mapBids = data => {
		const { crypto } = this.props;
		return data.map(n => {
			return (
				<TableRow key={n._id}>
					<TableCell>{n.price}</TableCell>
					<TableCell>{`${n.volume} ${crypto.toUpperCase()}`}</TableCell>
					<TableCell>{n.total}</TableCell>
				</TableRow>
			);
		});
	};
	render() {
		const { bidData } = this.state;
		const { classes, crypto, fiat } = this.props;
		return (
			<div className={classes.paper}>
				{bidData.length > 0 ? (
					<Table>
						<TableHead>
							<TableRow>
								<TableCell>Price Per BTC</TableCell>
								<TableCell>{crypto.toUpperCase()} Volume</TableCell>
								<TableCell>Total ({fiat.toUpperCase()})</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>{this._mapBids(bidData)}</TableBody>
					</Table>
				) : (
					<div className={classes.textCenter}>
						<CircularProgress
							size={50}
							thickness={0.5}
							className={classes.fabProgress}
						/>
					</div>
				)}
			</div>
		);
	}
}

export default withStyles(styles)(ActiveBids);
