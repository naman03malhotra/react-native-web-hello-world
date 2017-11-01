/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import classNames from 'classnames';
import List, {
	ListItem,
	ListItemAvatar,
	ListItemIcon,
	ListItemSecondaryAction,
	ListItemText
} from 'material-ui/List';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { CircularProgress } from 'material-ui/Progress';
import Button from 'material-ui/Button';
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
import passbookActions from '../../../../actions/passbook_action';
import Color from 'color';
import Table, {
	TableBody,
	TableCell,
	TableHead,
	TableRow
} from 'material-ui/Table';

import AppTheme from '../../../../theme/variables';

let id = 0;

function createData(idx, type, date, amount, status) {
	id += 1;
	return { id, idx, type, date, amount, status };
}
function TabContainer(props) {
	return (
		<div style={{ padding: AppTheme.spaceExtraBig }}>{props.children}</div>
	);
}

const styles = theme => ({
	paper: {
		marginTop: theme.spacing.unit
	},
	tableHeading: {
		backgroundColor: AppTheme.colorTabBg,
		boxShadow: theme.shadows[4],
		borderRadius: '2px'
	},
	spinnerContainer: {
		// marginTop: AppTheme.spacingUnit
	},
	textCenter: {
		textAlign: 'center'
	},
	fabProgress: {
		color: AppTheme.colorPrimary
	},
	button: {
		minWidth: '300px',
		padding: AppTheme.spacingUnit * 2,
		marginTop: AppTheme.spacingUnit * 2,
		backgroundColor: AppTheme.colorPrimary,
		color: AppTheme.colorWhite,
		'&:hover': {
			backgroundColor: Color(AppTheme.colorPrimary)
				.lighten(0.3)
				.hex()
		}
	},
	colorSuccess: {
		backgroundColor: Color(AppTheme.colorSuccess)
			.lighten(0.7)
			.hex()
	},
	colorError: {
		backgroundColor: Color(AppTheme.colorError)
			.lighten(0.5)
			.hex()
	},
	colorWarning: {
		backgroundColor: Color(AppTheme.colorWarning)
			.lighten(0.7)
			.hex()
	}
});

const options = {
	weekday: 'short',
	year: 'numeric',
	month: 'short',
	day: 'numeric',
	hour: '2-digit',
	minute: '2-digit'
};

class Passbook extends Component {
	static propTypes = {
		classes: PropTypes.object.isRequired
	};
	state = {
		indexValue: 0,
		data: [],
		loading: false,
		error: null,
		skip: 0
	};

	componentDidMount() {
		const { loadTitle, title } = this.props;
		loadTitle(title);
		this._loadTransactions();
	}
	componentWillReceiveProps(props) {
		const { passbook } = props;
		const { inputData } = passbook.getPassbookData;
		if (inputData !== null) {
			try {
				const { data } = inputData;
				this.setState({ data });
			} catch (err) {}
			try {
				const { loading } = inputData;
				this.setState({ loading });
			} catch (err) {}
			try {
				const { skip } = inputData;
				this.setState({ skip });
			} catch (err) {}
		}
	}

	_loadTransactions = () => {
		const { data, skip } = this.state;
		const { access_token, passbookActions } = this.props;
		const dataToSend = { skip };
		passbookActions.getPassbookData(dataToSend, access_token, data);
	};

	render() {
		const { indexValue, data, loading, skip } = this.state;
		const { classes, fiat } = this.props;
		const fiatUp = fiat.toUpperCase();
		let date = null;
		return (
			<Grid container spacing={24}>
				<Grid item xs={12} sm={12}>
					<AppBar position="static" color="default">
						<Tabs
							value={indexValue}
							onChange={this.cryptoHandleChange}
							indicatorColor={AppTheme.colorPrimary}
							textColor={AppTheme.colorPrimary}
							fullWidth
							centered
						>
							<Tab label="Transaction History" icon={<PassbookIcon />} />
						</Tabs>
					</AppBar>
					<SwipeableViews index={0}>
						<TabContainer>
							{data.length > 0 ? (
								<Table>
									<TableHead>
										<TableRow>
											<TableCell>Txn ID</TableCell>
											<TableCell>Mode</TableCell>
											<TableCell>Status</TableCell>
											<TableCell>Info</TableCell>
											<TableCell>Date</TableCell>
											<TableCell numeric>
												Fee ({fiat.toUpperCase()})
											</TableCell>
											<TableCell numeric>
												Total ({fiat.toUpperCase()})
											</TableCell>
											<TableCell numeric>Total Crypto</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										{data.map(n => {
											date = new Date(n.created);
											date = date.toLocaleString('en-us', options);
											return (
												<TableRow
													key={n.transactionId}
													className={classNames({
														[classes.colorSuccess]: n.status === 'COMPLETED',
														[classes.colorWarning]: n.status === 'PENDING',
														[classes.colorError]: n.status === 'CANCELLED'
													})}
												>
													<TableCell>{n.transactionId}</TableCell>
													<TableCell>{n.mode}</TableCell>
													<TableCell>{n.status}</TableCell>
													<TableCell>{n.narration}</TableCell>
													<TableCell>{date}</TableCell>
													<TableCell numeric>
														{`${n.fee}`}
													</TableCell>
													<TableCell numeric>
														{`${n.fiatTxnAmount}`}
													</TableCell>
													<TableCell numeric>
														{n.btcTxnAmount !== 0
															? `${n.btcTxnAmount} BTC`
															: n.ethTxnAmount !== 0
																? `${n.ethTxnAmount} ETH`
																: '-'}
													</TableCell>
												</TableRow>
											);
										})}
									</TableBody>
								</Table>
							) : (
								<div
									className={classNames(
										classes.spinnerContainer,
										classes.textCenter
									)}
								>
									{loading ? (
										<CircularProgress
											size={100}
											thickness={1}
											className={classes.fabProgress}
										/>
									) : (
										<Typography type="headline">No Transactions to show</Typography>
									)}
								</div>
							)}
						</TabContainer>
					</SwipeableViews>
					{data.length > 0 ? (
						<div className={classes.textCenter}>
							{skip !== -1 ? (
								<Button
									raised
									color="primary"
									disabled={loading}
									className={classes.button}
									onClick={this._loadTransactions}
								>
									{!loading ? (
										'Load More'
									) : (
										<CircularProgress
											size={24}
											className={classes.fabProgress}
										/>
									)}
								</Button>
							) : (
								<Button color="primary">All transactions are loaded</Button>
							)}
						</div>
					) : (
						''
					)}
				</Grid>
			</Grid>
		);
	}
}

function mapStateToProps(state) {
	return {
		passbook: state.app.passbook
	};
}

function mapDispatchToProps(dispatch) {
	return {
		passbookActions: bindActionCreators(passbookActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(
	withStyles(styles)(Passbook)
);
