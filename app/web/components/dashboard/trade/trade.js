/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import Grid from 'material-ui/Grid';
import SvgIcon from 'material-ui/SvgIcon';
import TrendingUp from 'material-ui-icons/TrendingUp';
import TrendingDown from 'material-ui-icons/TrendingDown';
import { CircularProgress } from 'material-ui/Progress';
import AppTheme from '../../../../theme/variables';
import BuyBid from './bid';
import SellBid from './ask';

import ActiveBids from './active_bids';
import ActiveOrders from './active_orders';

const styles = theme => ({
	fabProgress: {
		color: AppTheme.colorPrimary,
		position: 'relative',
		top: 'calc(50% - 100px)',
		left: 'calc(50% - 100px)',
		zIndex: 1
	},
	gridContainer: {
		height: '100%'
	}
});

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

function TabContainer(props) {
	return (
		<div style={{ padding: AppTheme.spaceExtraBig }}>{props.children}</div>
	);
}

TabContainer.propTypes = {
	children: PropTypes.node.isRequired
};

class Dashboard extends Component {
	state = {
		index: 0,
		cryptoGridValue: 0,
		isReady: false
	};

	static propTypes = {
		classes: PropTypes.object.isRequired
	};

	componentWillMount() {
		const { loadTitle, title } = this.props;
		loadTitle(title);
	}
	componentDidMount() {
		this.setState({
			isReady: false
		});
	}

	_handleChange = (event, index) => {
		if (index > 1) return;
		this.setState({ index });
	};

	_handleChangeSwipe = index => {
		if (index > 1) return;
		this.setState({ index });
	};

	_cryptoHandleChange = (event, index) => {
		if (index > 1) return;
		this.setState({ cryptoGridValue: index });
	};

	_cryptoHandleChangeSwipe = index => {
		if (index > 1) return;
		this.setState({ cryptoGridValue: index });
	};

	_returnBTCGrid() {
		const { index } = this.state;
		return (
			<Grid container spacing={24}>
				<Grid item xs={12} sm={6}>
					<AppBar position="static" color="default">
						<Tabs
							value={index}
							onChange={this._handleChange}
							indicatorColor={AppTheme.colorPrimary}
							textColor={AppTheme.colorPrimary}
							fullWidth
							centered
						>
							<Tab label="Place Buy Bid" icon={<TrendingUp />} />
							<Tab label="Place Sell Bid" icon={<TrendingDown />} />
						</Tabs>
					</AppBar>
					<SwipeableViews index={index} onChangeIndex={this._handleChangeSwipe}>
						<TabContainer>
							<BuyBid />
						</TabContainer>
						<TabContainer>
							<SellBid />
						</TabContainer>
					</SwipeableViews>
				</Grid>
				<Grid item xs={12} sm={6}>
					<AppBar position="static" color="default">
						<Tabs
							value={index}
							onChange={this._handleChange}
							indicatorColor={AppTheme.colorPrimary}
							textColor={AppTheme.colorPrimary}
							fullWidth
							centered
						>
							<Tab label="Sell Orders" icon={<TrendingDown />} />
							<Tab label="Buy Orders" icon={<TrendingUp />} />
						</Tabs>
					</AppBar>
					<SwipeableViews index={index} onChangeIndex={this._handleChangeSwipe}>
						<TabContainer>
							<ActiveBids />
						</TabContainer>
						<TabContainer>
							<ActiveBids />
						</TabContainer>
					</SwipeableViews>
				</Grid>
				<Grid item xs={12} sm={12}>
					<ActiveOrders />
				</Grid>
			</Grid>
		);
	}
	render() {
		const { classes } = this.props;
		const { cryptoGridValue, isReady } = this.state;
		return (
			<Grid container spacing={24} className={classes.gridContainer}>
				{!isReady ? (
					<CircularProgress className={classes.fabProgress} size={200} />
				) : (
					<Grid item xs={12} sm={12}>
						<AppBar position="static" color="default">
							<Tabs
								value={cryptoGridValue}
								onChange={this._cryptoHandleChange}
								indicatorColor={AppTheme.colorPrimary}
								textColor={AppTheme.colorPrimary}
								fullWidth
								centered
							>
								<Tab label="BTC" icon={<BTCIcon />} />
								<Tab label="ETH" icon={<ETHIcon />} />
							</Tabs>
						</AppBar>
						<SwipeableViews
							index={cryptoGridValue}
							onChangeIndex={this._cryptoHandleChangeSwipe}
						>
							<TabContainer>{this._returnBTCGrid()}</TabContainer>
							<TabContainer>{this._returnBTCGrid()}</TabContainer>
						</SwipeableViews>
					</Grid>
				)}
			</Grid>
		);
	}
}
export default withStyles(styles)(Dashboard);
