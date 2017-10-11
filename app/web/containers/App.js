import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// dumb components
// import Header from '../components/Header';
// import HelloWorld from '../components/HelloWorld';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from '../components/dashboard/main';
import Dashboard from '../components/dashboard/dashboard_components/dashboard';
import Trade from '../components/dashboard/trade/trade';
import AddMoney from '../components/dashboard/add_money/add_money';
import Send from '../components/dashboard/send/send';
import Receive from '../components/dashboard/receive/receive';
import Withdraw from '../components/dashboard/withdraw/withdraw';
import Passbook from '../components/dashboard/passbook/passbook';
import Settings from '../components/dashboard/settings/settings';

// actions
import { toggleColor } from '../../actions/actions';

/** The app entry point */
class ReactNativeWebHelloWorld extends Component {
	static propTypes = {
		dispatch: PropTypes.func.isRequired,
		color: PropTypes.string.isRequired,
		data: PropTypes.object.isRequired
	};
	render() {
		// injected by connect call
		const { dispatch, color, data } = this.props;

		return (
			<div className="react-native-web">
				<Router>
					<Route>
						<App>
							<Route title="Dashboard" exact path="/" component={Dashboard} />
							<Route
								title="Dashboard"
								exact
								path="/dashboard"
								component={Dashboard}
							/>
							<Route title="Trade" exact path="/trade" component={Trade} />
							<Route
								title="Add Money"
								exact
								path="/add-money"
								component={AddMoney}
							/>
							<Route
								title="Send"
								exact
								path="/send"
								component={Send}
							/>
							<Route
								title="Receive"
								exact
								path="/receive"
								component={Receive}
							/>
							<Route
								title="Withdraw"
								exact
								path="/withdraw"
								component={Withdraw}
							/>
							<Route
								title="Passbook"
								exact
								path="/passbook"
								component={Passbook}
							/>
							<Route
								title="Settings"
								exact
								path="/settings"
								component={Settings}
							/>
						</App>
					</Route>
				</Router>
			</div>
		);
	}
}

const select = state => state;

// Wrap the component to inject dispatch and state into it
export default connect(select)(ReactNativeWebHelloWorld);

{
	/* <Header />
<HelloWorld onClick={() => dispatch(toggleColor())} color={color} /> */
}
