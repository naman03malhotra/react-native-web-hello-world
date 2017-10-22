import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import appLoadActions from '../../actions/app_actions';
import { CircularProgress } from 'material-ui/Progress';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Main from '../components/dashboard/main';
import Dashboard from '../components/dashboard/dashboard_components/dashboard';
import Trade from '../components/dashboard/trade/trade';
import AddMoney from '../components/dashboard/add_money/add_money';
import Send from '../components/dashboard/send/send';
import Receive from '../components/dashboard/receive/receive';
import Withdraw from '../components/dashboard/withdraw/withdraw';
import Passbook from '../components/dashboard/passbook/passbook';
import Settings from '../components/dashboard/settings/settings';
import AppTheme from '../../theme/variables';

const styles = theme => ({
	fabProgress: {
		color: AppTheme.colorPrimary,
		position: 'absolute',
		top: 'calc(50% - 100px)',
		left: 'calc(50% - 100px)',
		zIndex: 1
	}
});

class App extends Component {
	static propTypes = {
		app: PropTypes.object.isRequired,
		appActions: PropTypes.object.isRequired,
		classes: PropTypes.object.isRequired,
		fiat: PropTypes.string
	};
	static defaultProps = {
		fiat: 'inr'
	};
	state = {
		title: null,
		isReady: false
	};
	componentWillMount() {
		const { app, appActions } = this.props;
		appActions.appLoad().then(() => {
			const { app } = this.props;
			const access_token = app.initialLoad.access_token;
			if (access_token === null || access_token.length < 50) {
				window.location = '/';
				return;
			}
			appActions.loadUserData(access_token).then(() => {
				appActions.loadRate().then(() => {
					this.setState({
						isReady: true
					});
				});
			});
		});
	}
	_renderTitle = title => {
		document.title = title;
		this.setState({ title });
	};
	render() {
		const { title, isReady } = this.state;
		const { app, classes, fiat } = this.props;
		// console.log(this.props);
		return (
			<div className="react-native-web">
				{!isReady ? (
					<CircularProgress
						className={classes.fabProgress}
						size={200}
						thickness={0.5}
					/>
				) : (
					<Router>
						<Route>
							<Main title={title}>
								<Route
									exact
									path="/dashboard"
									render={routeProps => (
										<Dashboard
											{...routeProps}
											title="Dashboard"
											access_token={app.initialLoad.access_token}
											userData={app.userData}
											cryptoRate={app.cryptoRate}
											loadTitle={this._renderTitle}
											fiat={fiat}
										/>
									)}
								/>
								<Route
									exact
									path="/trade"
									render={routeProps => (
										<Trade
											{...routeProps}
											title="Trade"
											access_token={app.initialLoad.access_token}
											userData={app.userData}
											loadTitle={this._renderTitle}
											fiat={fiat}
										/>
									)}
								/>
								<Route
									exact
									path="/add-money"
									render={routeProps => (
										<AddMoney
											{...routeProps}
											title="Add Money"
											access_token={app.initialLoad.access_token}
											userData={app.userData}
											loadTitle={this._renderTitle}
											fiat={fiat}
										/>
									)}
								/>
								<Route
									exact
									path="/send"
									render={routeProps => (
										<Send
											{...routeProps}
											title="Send"
											access_token={app.initialLoad.access_token}
											userData={app.userData}
											loadTitle={this._renderTitle}
											fiat={fiat}
										/>
									)}
								/>
								<Route
									exact
									path="/receive"
									render={routeProps => (
										<Receive
											{...routeProps}
											title="Receive"
											access_token={app.initialLoad.access_token}
											userData={app.userData}
											loadTitle={this._renderTitle}
											fiat={fiat}
										/>
									)}
								/>
								<Route
									exact
									path="/withdraw"
									render={routeProps => (
										<Withdraw
											{...routeProps}
											title="Withdraw"
											access_token={app.initialLoad.access_token}
											userData={app.userData}
											loadTitle={this._renderTitle}
											fiat={fiat}
										/>
									)}
								/>
								<Route
									exact
									path="/passbook"
									render={routeProps => (
										<Passbook
											{...routeProps}
											title="Passbook"
											access_token={app.initialLoad.access_token}
											userData={app.userData}
											loadTitle={this._renderTitle}
											fiat={fiat}
										/>
									)}
								/>
								<Route
									exact
									path="/settings"
									render={routeProps => (
										<Settings
											{...routeProps}
											title="Settings"
											access_token={app.initialLoad.access_token}
											userData={app.userData}
											loadTitle={this._renderTitle}
											fiat={fiat}
										/>
									)}
								/>
							</Main>
						</Route>
					</Router>
				)}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		app: state.app.appLoad
	};
}

function mapDispatchToProps(dispatch) {
	return {
		appActions: bindActionCreators(appLoadActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(
	withStyles(styles)(App)
);

{
	/* <Header />
<HelloWorld onClick={() => dispatch(toggleColor())} color={color} /> */
}
