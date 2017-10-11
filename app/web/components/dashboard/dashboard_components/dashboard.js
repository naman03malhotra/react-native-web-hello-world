/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import Grid from 'material-ui/Grid';
import SvgIcon from 'material-ui/SvgIcon';

import AppTheme from '../../../../theme/variables';
import InstantBuy from './instant_buy';
import InstantSell from './instant_sell';

import BalanceDashboard from './balance_dashboard';


const styles = theme => ({});

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
		value: 0
	};

	static propTypes = {
		classes: PropTypes.object.isRequired
	};

	handleChange = (event, value) => {
		this.setState({ value });
	};

	handleChangeIndex = index => {
		this.setState({ value: index });
	};

	render() {
		const { classes } = this.props;

		return (
			<Grid container spacing={24}>
				<Grid item xs={12} sm={6}>
					<AppBar position="static" color="default">
						<Tabs
							value={this.state.value}
							onChange={this.handleChange}
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
						index={this.state.value}
						onChangeIndex={this.handleChangeIndex}
					>
						<TabContainer>
							<InstantBuy />
							<InstantSell />
						</TabContainer>
						<TabContainer>{'Item Two'}</TabContainer>
					</SwipeableViews>
				</Grid>
				<Grid item xs={12} sm={6}>
					<BalanceDashboard />
				</Grid>
			</Grid>
		);
	}
}
export default withStyles(styles)(Dashboard);
