/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import Grid from 'material-ui/Grid';
import SvgIcon from 'material-ui/SvgIcon';
import TrendingUp from 'material-ui-icons/TrendingUp';
import TrendingDown from 'material-ui-icons/TrendingDown';
import { CircularProgress } from 'material-ui/Progress';
import AppTheme from '../../../../theme/variables';
import BidMain from './bid_main';
import SellBid from './ask';

import ActiveBids from './active_bids';
import ActiveOrders from './active_orders';
import tradeActions from '../../../../actions/trade_action';
import SnackBar from '../../common/snack_bar';

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

class Trade extends Component {
	static propTypes = {
		classes: PropTypes.object.isRequired,
		userData: PropTypes.object.isRequired,
		access_token: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		loadTitle: PropTypes.func.isRequired,
		history: PropTypes.object.isRequired,
		cryptoRate: PropTypes.object.isRequired,
		location: PropTypes.object
	};
	state = {
		index1: 0,
		index2: 0,
		cryptoGridValue: 0,
		isReady: false,
		snackMsg: null
	};
	componentWillMount() {
		const { loadTitle, title } = this.props;
		loadTitle(title);
		this.setState({ isReady: true });
	}
	_handleChange1 = (event, index1) => {
		if (index1 > 1) return;
		this.setState({ index1 });
	};
	_handleChangeSwipe1 = index1 => {
		if (index1 > 1) return;
		this.setState({ index1 });
	};
	_handleChange2 = (event, index2) => {
		if (index2 > 1) return;
		this.setState({ index2 });
	};
	_handleChangeSwipe2 = index2 => {
		if (index2 > 1) return;
		this.setState({ index2 });
	};
	_cryptoHandleChange = (event, index) => {
		if (index > 1) return;
		this.setState({ cryptoGridValue: index });
	};
	_cryptoHandleChangeSwipe = index => {
		if (index > 1) return;
		this.setState({ cryptoGridValue: index });
	};

	_returnBTCGrid(crypto) {
		const { index1, index2 } = this.state;
		const { classes, ...all } = this.props;
		return (
			<Grid container spacing={24}>
				<Grid item xs={12} sm={6}>
					<AppBar position="static" color="default">
						<Tabs
							value={index1}
							onChange={this._handleChange1}
							indicatorColor={AppTheme.colorPrimary}
							textColor={AppTheme.colorPrimary}
							fullWidth
							centered
						>
							<Tab label="Place Buy Bid" icon={<TrendingUp />} />
							<Tab label="Place Sell Bid" icon={<TrendingDown />} />
						</Tabs>
					</AppBar>
					<SwipeableViews
						index={index1}
						onChangeIndex={this._handleChangeSwipe1}
					>
						<TabContainer>
							<BidMain {...all} crypto={crypto} type="buy" />
						</TabContainer>
						<TabContainer>
							<BidMain {...all} crypto={crypto} type="sell" />
						</TabContainer>
					</SwipeableViews>
				</Grid>
				<Grid item xs={12} sm={6}>
					<AppBar position="static" color="default">
						<Tabs
							value={index2}
							onChange={this._handleChange2}
							indicatorColor={AppTheme.colorPrimary}
							textColor={AppTheme.colorPrimary}
							fullWidth
							centered
						>
							<Tab label="Sell Orders" icon={<TrendingDown />} />
							<Tab label="Buy Orders" icon={<TrendingUp />} />
						</Tabs>
					</AppBar>
					<SwipeableViews
						index={index2}
						onChangeIndex={this._handleChangeSwipe2}
					>
						<TabContainer>
							<ActiveBids {...all} crypto={crypto} type="buy" />
						</TabContainer>
						<TabContainer>
							<ActiveBids {...all} crypto={crypto} type="sell" />
						</TabContainer>
					</SwipeableViews>
				</Grid>
				<Grid item xs={12} sm={12}>
					<ActiveOrders
						{...all}
						crypto={crypto}
						setSnackMsg={this._setSnackMsg}
					/>
				</Grid>
			</Grid>
		);
	}
	_setSnackMsg = snackMsg => {
		this.setState({ snackMsg });
	};
	_closeSnackBar = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}
		this.setState({ snackMsg: null });
	};
	render() {
		console.log(this.props);
		const { classes } = this.props;
		const { cryptoGridValue, isReady, snackMsg } = this.state;
		return (
			<Grid container spacing={24} className={classes.gridContainer}>
				{snackMsg && (
					<SnackBar
						message={snackMsg.message}
						open
						close={this._closeSnackBar}
					/>
				)}
				{!isReady ? (
					<CircularProgress
						className={classes.fabProgress}
						size={200}
						thickness={0.5}
					/>
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
							<TabContainer>{this._returnBTCGrid('btc')}</TabContainer>
							<TabContainer>{this._returnBTCGrid('btc')}</TabContainer>
						</SwipeableViews>
					</Grid>
				)}
			</Grid>
		);
	}
}

function mapStateToProps(state) {
	return {
		trade: state.app.trade
	};
}

function mapDispatchToProps(dispatch) {
	return {
		tradeActions: bindActionCreators(tradeActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(
	withStyles(styles)(Trade)
);
