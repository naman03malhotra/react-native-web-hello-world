import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AppBar from 'material-ui/AppBar';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { CircularProgress } from 'material-ui/Progress';
import green from 'material-ui/colors/green';
import Button from 'material-ui/Button';
import CheckIcon from 'material-ui-icons/Check';
import ArrowForward from 'material-ui-icons/ArrowForward';
import Typography from 'material-ui/Typography';
import SendIcon from 'material-ui-icons/Send';
import SvgIcon from 'material-ui/SvgIcon';
import Tabs, { Tab } from 'material-ui/Tabs';
import Hidden from 'material-ui/Hidden';
import SwipeableViews from 'react-swipeable-views';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import Color from 'color';
import sendActions from '../../../../actions/send_action';
import AppTheme from '../../../../theme/variables';

import SendMain from './send_main';
import SendBTC from './send_btc';
import SendETH from './send_eth';

const styles = theme => ({
	root: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around'
	},
	textField: {
		width: '100%',
		fontSize: AppTheme.spacingUnit * 2
	},
	wrapper: {
		margin: theme.spacing.unit,
		position: 'relative'
	},
	balanceContainer: {
		marginTop: AppTheme.spacingUnit * 3,
		marginBottom: AppTheme.spacingUnit * 3
	},
	title: {
		fontSize: AppTheme.spacingUnit * 4
	},
	gridStyle: {
		textAlign: 'center'
	},
	buttonSuccess: {
		backgroundColor: green[500],
		'&:hover': {
			backgroundColor: green[700]
		}
	},
	fabProgress: {
		color: AppTheme.colorPrimary
	},
	icon: {
		marginLeft: AppTheme.spacingUnit
	},
	button: {
		width: '100%',
		padding: AppTheme.spacingUnit * 2,
		marginTop: AppTheme.spacingUnit * 4,
		backgroundColor: AppTheme.colorPrimary,
		color: AppTheme.colorWhite,
		'&:hover': {
			backgroundColor: Color(AppTheme.colorPrimary)
				.lighten(0.3)
				.hex()
		}
	}
});
const INRIcon = props => (
	<SvgIcon {...props}>
		<path d="M8,3H18L17,5H13.74C14.22,5.58 14.58,6.26 14.79,7H18L17,9H15C14.75,11.57 12.74,13.63 10.2,13.96V14H9.5L15.5,21H13L7,14V12H9.5V12C11.26,12 12.72,10.7 12.96,9H7L8,7H12.66C12.1,5.82 10.9,5 9.5,5H7L8,3Z" />
	</SvgIcon>
);

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
		<div style={{ padding: AppTheme.spaceExtraBig }}>
			<Grid container spacing={24}>
				<Hidden xsDown>
					<Grid item xs={3} />
				</Hidden>
				<Grid item xs={12} sm={6}>
					{props.children}
				</Grid>
			</Grid>
		</div>
	);
}
class Send extends Component {
	static propTypes = {
		classes: PropTypes.object.isRequired,
		userData: PropTypes.object.isRequired,
		access_token: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		loadTitle: PropTypes.func.isRequired,
		history: PropTypes.object.isRequired,
		location: PropTypes.object
	};
	state = {
		indexValue: 0
	};
	componentWillMount() {
		const { loadTitle, title } = this.props;
		loadTitle(title);
	}
	_handleChange = (event, indexValue) => {
		this.setState({ indexValue });
	};
	_handleChangeSwipe = indexValue => {
		this.setState({ indexValue });
	};

	render() {
		console.log(this.props);
		const { indexValue } = this.state;
		const { fiat } = this.props;
		const { classes, ...all } = this.props;
		return (
			<div>
				<Grid container spacing={24}>
					<Grid item xs={12} className={classes.gridStyle}>
						<AppBar position="static" color="default">
							<Tabs
								value={indexValue}
								onChange={this._handleChange}
								indicatorColor={AppTheme.colorPrimary}
								textColor={AppTheme.colorPrimary}
								fullWidth
								centered
							>
								<Tab label={`${fiat.toUpperCase()}`} icon={<INRIcon />} />
								<Tab label="BTC" icon={<BTCIcon />} />
								<Tab label="ETH" icon={<ETHIcon />} />
							</Tabs>
						</AppBar>
						<SwipeableViews
							index={indexValue}
							onChangeIndex={this._handleChangeSwipe}
						>
							<TabContainer>
								<SendMain {...all} mode="fiat" crypto={fiat} />
							</TabContainer>
							<TabContainer>
								<SendMain {...all} mode="crypto" crypto="btc" />
							</TabContainer>
							<TabContainer>
							<SendMain {...all} mode="crypto" crypto="eth" />
							</TabContainer>
						</SwipeableViews>
					</Grid>
				</Grid>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		send: state.app.send
	};
}

function mapDispatchToProps(dispatch) {
	return {
		sendActions: bindActionCreators(sendActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(
	withStyles(styles)(Send)
);
