import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import appLoadActions from '../../actions/app_actions';
import { CircularProgress } from 'material-ui/Progress';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import firebase from '../components/common/firebase';

import Main from '../components/dashboard/main';
import Dashboard from '../components/dashboard/dashboard_components/dashboard';
import Trade from '../components/dashboard/trade/trade';
import AddMoney from '../components/dashboard/add_money/add_money';
import Send from '../components/dashboard/send/send';
import Receive from '../components/dashboard/receive/receive';
import Withdraw from '../components/dashboard/withdraw/withdraw';
import Passbook from '../components/dashboard/passbook/passbook';
import Settings from '../components/dashboard/settings/settings';
import StandBy from '../components/dashboard/settings/standby';
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
// const messaging = firebase.messaging();

class App extends Component {
	static propTypes = {
		app: PropTypes.object.isRequired,
		appActions: PropTypes.object.isRequired,
		classes: PropTypes.object.isRequired,
		fiat: PropTypes.string
	};
	state = {
		title: null,
		isReady: false,
		history: null
	};
	componentDidMount() {
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
					this.interval = setInterval(
						() => appActions.loadUserData(access_token, this.state.history),
						4000
					);
					// this._registerFirebase();
					this.setState({
						isReady: true
					});
				});
			});
		});
	}
	componentWillUnmount() {
		clearInterval(this.interval);
	}

	// _registerFirebase = () => {
	// 	messaging
	// 		.requestPermission()
	// 		.then(() => {
	// 			console.log('Notification permission granted.');
	// 			this._fetchToken();
	// 		})
	// 		.catch(err => {
	// 			console.log('Unable to get permission to notify.', err);
	// 		});
	// };
	// _fetchToken = () => {
	// 	const { app, appActions } = this.props;
	// 	const access_token = app.initialLoad.access_token;
	// 	messaging
	// 		.getToken()
	// 		.then(currentToken => {
	// 			if (currentToken) {
	// 				console.log(currentToken);
	// 				const firebaseToken = {
	// 					firebaseRegistrationTokens: currentToken
	// 				};

	// 				this._mountMessaging();
	// 				appActions.sendFirebaseToken(firebaseToken, access_token);
	// 			} else {
	// 				console.log(
	// 					'No Instance ID token available. Request permission to generate one.'
	// 				);
	// 			}
	// 		})
	// 		.catch(err => {
	// 			console.log('An error occurred while retrieving token. ', err);
	// 		});
	// };
	// _mountMessaging = () => {
	// 	messaging.onMessage(message => {
	// 		console.log(message);
	// 	});
	// };
	_renderTitle = (title, history = null) => {
		document.title = title;
		this.setState({ title, history });
	};
	render() {
		const { title, isReady } = this.state;
		const { app, classes, appActions } = this.props;
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
											fiat={app.userData.currencyCode}
											appActions={appActions}
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
											cryptoRate={app.cryptoRate}
											loadTitle={this._renderTitle}
											fiat={app.userData.currencyCode}
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
											fiat={app.userData.currencyCode}
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
											fiat={app.userData.currencyCode}
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
											fiat={app.userData.currencyCode}
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
											fiat={app.userData.currencyCode}
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
											fiat={app.userData.currencyCode}
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
											fiat={app.userData.currencyCode}
										/>
									)}
								/>
								<Route
									exact
									path="/standby"
									render={routeProps => (
										<StandBy
											{...routeProps}
											title="Stand By"
											access_token={app.initialLoad.access_token}
											userData={app.userData}
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
