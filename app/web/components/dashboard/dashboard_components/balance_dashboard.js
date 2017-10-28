/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import List, {
	ListItem,
	ListItemAvatar,
	ListItemSecondaryAction,
	ListItemText
} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import AccountBalance from 'material-ui-icons/AccountBalance';
import Tabs, { Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import SvgIcon from 'material-ui/SvgIcon';

import AppTheme from '../../../../theme/variables';

const BTCIcon = props => (
	<SvgIcon {...props}>
		<path d="M4.5,5H8V2H10V5H11.5V2H13.5V5C19,5 19,11 16,11.25C20,11 21,19 13.5,19V22H11.5V19H10V22H8V19H4.5L5,17H6A1,1 0 0,0 7,16V8A1,1 0 0,0 6,7H4.5V5M10,7V11C10,11 14.5,11.25 14.5,9C14.5,6.75 10,7 10,7M10,12.5V17C10,17 15.5,17 15.5,14.75C15.5,12.5 10,12.5 10,12.5Z" />
	</SvgIcon>
);

const ETHIcon = props => (
	<SvgIcon {...props}>
		<path d="M12,1.75L5.75,12.25L12,16L18.25,12.25L12,1.75M5.75,13.5L12,22.25L18.25,13.5L12,17.25L5.75,13.5Z" />
	</SvgIcon>
);

const INRIcon = props => (
	<SvgIcon {...props}>
		<path d="M8,3H18L17,5H13.74C14.22,5.58 14.58,6.26 14.79,7H18L17,9H15C14.75,11.57 12.74,13.63 10.2,13.96V14H9.5L15.5,21H13L7,14V12H9.5V12C11.26,12 12.72,10.7 12.96,9H7L8,7H12.66C12.1,5.82 10.9,5 9.5,5H7L8,3Z" />
	</SvgIcon>
);

const styles = theme => ({
	list: {
		paddingTop: AppTheme.spacingUnit * 4,
		paddingBottom: AppTheme.spacingUnit * 4
	},
	listSecondaryItem: {
		textAlign: 'right'
	},
	icon: {
		backgroundColor: AppTheme.colorPrimary
	}
});

function TabContainer(props) {
	return (
		<div style={{ padding: AppTheme.spaceExtraBig }}>{props.children}</div>
	);
}

TabContainer.propTypes = {
	children: PropTypes.node.isRequired
};

function generate(element) {
	return [0, 1, 2].map(value =>
		React.cloneElement(element, {
			key: value
		})
	);
}

class BalanceDashboard extends Component {
	static propTypes = {
		classes: PropTypes.object.isRequired,
		cryptoRate: PropTypes.object.isRequired,
		userData: PropTypes.object.isRequired,
		fiat: PropTypes.string.isRequired
	};
	state = {
		value: 0
	};

	render() {
		const { classes, userData, cryptoRate, fiat } = this.props;
		const totalBTC = (userData.btc.balanceReal + userData.btc.balanceVirtual
		).toFixed(4);

		return (
			<Grid container spacing={24}>
				<Grid item xs={12}>
					<AppBar position="static" color="default">
						<Tabs
							value={this.state.value}
							indicatorColor={AppTheme.colorPrimary}
							textColor={AppTheme.colorPrimary}
							fullWidth
							centered
						>
							<Tab label="Account Balance" icon={<AccountBalance />} />
						</Tabs>
					</AppBar>
					<SwipeableViews index={this.state.value}>
						<TabContainer>
							<List>
								<ListItem className={classes.list}>
									<ListItemAvatar>
										<Avatar className={classes.icon}>
											<BTCIcon />
										</Avatar>
									</ListItemAvatar>
									<ListItemText primary="Bitcoin" />
									<ListItemSecondaryAction>
										<ListItemText
											primary={`${totalBTC} BTC`}
											secondary={`${(totalBTC * cryptoRate.btc.sell).toFixed(
												2
											)} ${fiat.toUpperCase()}`}
											className={classes.listSecondaryItem}
										/>
									</ListItemSecondaryAction>
								</ListItem>
								<Divider />
								<ListItem className={classes.list}>
									<ListItemAvatar>
										<Avatar className={classes.icon}>
											<ETHIcon />
										</Avatar>
									</ListItemAvatar>
									<ListItemText primary="Etherium" />
									<ListItemSecondaryAction>
										<ListItemText
											className={classes.listSecondaryItem}
											primary="0.0000 ETH"
											secondary={`0.00 ${fiat.toUpperCase()}`}
										/>
									</ListItemSecondaryAction>
								</ListItem>
								<Divider />
								<ListItem className={classes.list}>
									<ListItemAvatar>
										<Avatar className={classes.icon}>
											<INRIcon />
										</Avatar>
									</ListItemAvatar>
									<ListItemText primary="Indian Rupee" />
									<ListItemSecondaryAction>
										<ListItemText
											className={classes.listSecondaryItem}
											primary={userData.balanceFiat.toFixed(2)}
											secondary={fiat.toUpperCase()}
										/>
									</ListItemSecondaryAction>
								</ListItem>
								<Divider />
								<ListItem>
									<Typography type="caption" className={classes.listSecondaryItem}>
										{`${(userData.balanceFiat / cryptoRate.btc.buy).toFixed(
											2
										)} BTC can be bought with your current balance`}
									</Typography>
								</ListItem>
							</List>
						</TabContainer>
					</SwipeableViews>
				</Grid>
			</Grid>
		);
	}
}

export default withStyles(styles)(BalanceDashboard);
