import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import keycode from 'keycode';
import Table, {
	TableBody,
	TableCell,
	TableFooter,
	TableHead,
	TablePagination,
	TableRow,
	TableSortLabel
} from 'material-ui/Table';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import Tooltip from 'material-ui/Tooltip';
import DeleteIcon from 'material-ui-icons/Delete';
import InfoIcon from 'material-ui-icons/Info';
import { CircularProgress } from 'material-ui/Progress';
import Color from 'color';
import SimpleAlert from '../../../components/common/simple_alert';
import SnackBar from '../../common/snack_bar';
import AppTheme from '../../../../theme/variables';

let counter = 0;

const options = {
	weekday: 'short',
	year: 'numeric',
	month: 'short',
	day: 'numeric',
	hour: '2-digit',
	minute: '2-digit'
};

function createData(name, calories, fat, carbs, protein) {
	counter += 1;
	return { id: counter, name, calories, fat, carbs, protein };
}

class EnhancedTableHead extends React.Component {
	static propTypes = {
		numSelected: PropTypes.number.isRequired,
		onRequestSort: PropTypes.func.isRequired,
		onSelectAllClick: PropTypes.func.isRequired,
		order: PropTypes.string.isRequired,
		orderBy: PropTypes.string.isRequired,
		rowCount: PropTypes.number.isRequired
	};

	createSortHandler = property => event => {
		this.props.onRequestSort(event, property);
	};

	render() {
		const {
			onSelectAllClick,
			order,
			orderBy,
			numSelected,
			rowCount
		} = this.props;
		const { crypto, fiat } = this.props;
		const columnData = [
			{
				id: 'id',
				numeric: false,
				disablePadding: true,
				label: 'Txn ID'
			},
			{ id: 'Type', numeric: true, disablePadding: false, label: 'Type' },			
			{ id: 'status', numeric: true, disablePadding: false, label: 'Status' },
			{ id: 'Date', numeric: true, disablePadding: false, label: 'Date' },
			{
				id: 'amount',
				numeric: true,
				disablePadding: false,
				label: `${crypto.toUpperCase()} Amount`
			},
			{
				id: 'price',
				numeric: true,
				disablePadding: false,
				label: `${crypto.toUpperCase()} Price`
			},
			{
				id: 'total',
				numeric: true,
				disablePadding: false,
				label: `Total (${fiat.toUpperCase()})`
			}
		];
		{
			/* onClick={this.createSortHandler(column.id)} */
		}

		return (
			<TableHead>
				<TableRow>
					<TableCell padding="checkbox">
						<Checkbox
							indeterminate={numSelected > 0 && numSelected < rowCount}
							checked={numSelected === rowCount}
							onChange={onSelectAllClick}
						/>
					</TableCell>
					{columnData.map(column => {
						return (
							<TableCell
								key={column.id}
								numeric={column.numeric}
								padding={column.disablePadding ? 'none' : 'default'}
							>
								<Tooltip
									title={column.label}
									placement="bottom-start"
									enterDelay={300}
								>
									<TableSortLabel
										active={orderBy === column.id}
										direction={order}
									>
										{column.label}
									</TableSortLabel>
								</Tooltip>
							</TableCell>
						);
					}, this)}
				</TableRow>
			</TableHead>
		);
	}
}

const toolbarStyles = theme => ({
	root: {
		paddingRight: 2
	},
	highlight:
		theme.palette.type === 'light'
			? {
					color: theme.palette.secondary.A700,
					backgroundColor: theme.palette.secondary.A100
				}
			: {
					color: theme.palette.secondary.A100,
					backgroundColor: theme.palette.secondary.A700
				},
	spacer: {
		flex: '1 1 100%'
	},
	actions: {
		color: theme.palette.text.secondary
	},
	title: {
		flex: '0 0 auto'
	}
});

let EnhancedTableToolbar = props => {
	const { numSelected, classes, initiateCancel } = props;

	return (
		<Toolbar
			className={classNames(classes.root, {
				[classes.highlight]: numSelected > 0
			})}
		>
			<div className={classes.title}>
				{numSelected > 0 ? (
					<Typography type="subheading">{numSelected} selected</Typography>
				) : (
					<Typography type="title">Active Orders</Typography>
				)}
			</div>
			<div className={classes.spacer} />
			<div className={classes.actions}>
				{numSelected > 0 ? (
					<Tooltip title="Cancel Orders">
						<IconButton aria-label="Cancel Orders" onClick={initiateCancel}>
							<DeleteIcon />
						</IconButton>
					</Tooltip>
				) : (
					<Tooltip title="Click on the rows to cancel the orders">
						<IconButton aria-label="Click on the rows to cancel the orders">
							<InfoIcon />
						</IconButton>
					</Tooltip>
				)}
			</div>
		</Toolbar>
	);
};

EnhancedTableToolbar.propTypes = {
	classes: PropTypes.object.isRequired,
	numSelected: PropTypes.number.isRequired
};

EnhancedTableToolbar = withStyles(toolbarStyles)(EnhancedTableToolbar);

const styles = theme => ({
	root: {
		width: '100%'
	},
	tableWrapper: {
		overflowX: 'auto'
	},
	tableHeader: {
		backgroundColor: AppTheme.colorTabBg
	},
	spinnerContainer: {
		marginTop: AppTheme.spacingUnit * 4
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

class EnhancedTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			order: 'asc',
			orderBy: 'calories',
			selected: [],
			data: [],
			skip: 0,
			page: 0,
			rowsPerPage: 5,
			loading: false,
			error: null,
			snackMsg: null
		};
	}
	componentDidMount() {
		this._loadTransactions();
	}
	componentWillReceiveProps(props) {
		const { crypto, trade } = props;
		const { inputData } = trade.getActiveOrders;
		if (inputData !== null) {
			try {
				const { data } = inputData[crypto];
				this.setState({ data });
			} catch (err) {}
			try {
				const { loading } = inputData[crypto];
				this.setState({ loading });
			} catch (err) {}
			try {
				const { skip } = inputData[crypto];
				this.setState({ skip });
			} catch (err) {}
		}
	}

	_loadTransactions = () => {
		const { data, skip } = this.state;
		const { crypto, access_token, trade, tradeActions } = this.props;
		const dataToSend = { skip };
		tradeActions.getActiveOrders(dataToSend, crypto, access_token, data);
	};

	_initiateCancel = () => {
		const { selected } = this.state;
		const { tradeActions, access_token, setSnackMsg } = this.props;
		const { error } = tradeActions.cancelPrompt(selected.length).data;
		const dataToSend = {
			ids: selected
		};
		if (error.code === 1) {
			error.closeButtonText = 'Cancel';
			error.mainButtonText = 'Confirm';
			error.func = () => {
				this._handleErrorRequestClose();
				tradeActions.cancelActiveOrders(dataToSend, access_token).then(() => {
					const { status, error } = this.props.trade.cancelActiveOrders;
					if (status !== 1) {
						this.setState({ skip: 0, data: [], selected: [] });
						this._loadTransactions();
						setSnackMsg(error);
					} else {
						this.setState({ error });
					}
				});
			};
			this.setState({ error });
		}
	};
	_handleErrorRequestClose = () => {
		this.setState({ error: null });
	};
	_closeSnackBar = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}
		this.setState({ snackMsg: null });
	};
	handleRequestSort = (event, property) => {
		const orderBy = property;
		let order = 'desc';

		if (this.state.orderBy === property && this.state.order === 'desc') {
			order = 'asc';
		}

		const data =
			order === 'desc'
				? this.state.data.sort((a, b) => (b[orderBy] < a[orderBy] ? -1 : 1))
				: this.state.data.sort((a, b) => (a[orderBy] < b[orderBy] ? -1 : 1));

		this.setState({ data, order, orderBy });
	};

	handleSelectAllClick = (event, checked) => {
		if (checked) {
			this.setState({ selected: this.state.data.map(n => n.transactionId) });
			return;
		}
		this.setState({ selected: [] });
	};

	handleKeyDown = (event, id) => {
		if (keycode(event) === 'space') {
			this.handleClick(event, id);
		}
	};

	handleClick = (event, id) => {
		const { selected } = this.state;
		const selectedIndex = selected.indexOf(id);
		let newSelected = [];

		if (selectedIndex === -1) {
			newSelected = newSelected.concat(selected, id);
		} else if (selectedIndex === 0) {
			newSelected = newSelected.concat(selected.slice(1));
		} else if (selectedIndex === selected.length - 1) {
			newSelected = newSelected.concat(selected.slice(0, -1));
		} else if (selectedIndex > 0) {
			newSelected = newSelected.concat(
				selected.slice(0, selectedIndex),
				selected.slice(selectedIndex + 1)
			);
		}

		this.setState({ selected: newSelected });
	};

	handleChangePage = (event, page) => {
		this.setState({ page });
	};

	handleChangeRowsPerPage = event => {
		this.setState({ rowsPerPage: event.target.value });
	};

	isSelected = id => this.state.selected.indexOf(id) !== -1;

	render() {
		const {
			data,
			loading,
			skip,
			error,
			snackMsg,
			order,
			orderBy,
			selected,
			rowsPerPage,
			page
		} = this.state;
		const { classes, ...all } = this.props;

		return (
			<div className={classes.root}>
				{error && (
					<SimpleAlert
						open
						title={error.title}
						message={error.message}
						close={this._handleErrorRequestClose}
						mainButtonFunc={error.func}
						closeButtonText={error.closeButtonText}
						mainButtonText={error.mainButtonText}
					/>
				)}
				<Paper className={classes.tableHeader}>
					<EnhancedTableToolbar
						numSelected={selected.length}
						initiateCancel={this._initiateCancel}
					/>
				</Paper>
				<div className={classes.tableWrapper}>
					{data.length > 0 ? (
						<Table>
							<EnhancedTableHead
								numSelected={selected.length}
								order={order}
								orderBy={orderBy}
								onSelectAllClick={this.handleSelectAllClick}
								onRequestSort={this.handleRequestSort}
								rowCount={data.length}
								{...all}
							/>
							{/* .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) */}

							<TableBody>
								{data.map(n => {
									const isSelected = this.isSelected(n.transactionId);
									let date = new Date(n.created);
									date = date.toLocaleString('en-us', options);
									return (
										<TableRow
											hover
											onClick={event =>
												this.handleClick(event, n.transactionId)}
											onKeyDown={event =>
												this.handleKeyDown(event, n.transactionId)}
											role="checkbox"
											aria-checked={isSelected}
											tabIndex={-1}
											key={n.transactionId}
											selected={isSelected}
											className={classNames({
												[classes.colorSuccess]: n.status === 'COMPLETED',
												[classes.colorWarning]: n.status === 'PENDING',
												[classes.colorError]: n.status === 'CANCELLED'
											})}
										>
											<TableCell padding="checkbox">
												<Checkbox checked={isSelected} />
											</TableCell>
											<TableCell padding="none">{n.transactionId}</TableCell>
											<TableCell numeric>{n.mode}</TableCell>										
											<TableCell numeric>{n.status}</TableCell>
											<TableCell numeric>{date}</TableCell>
											<TableCell numeric>{n.volume}</TableCell>
											<TableCell numeric>{n.price}</TableCell>
											<TableCell numeric>{n.total}</TableCell>
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
								<Typography type="headline">No Active Orders</Typography>
							)}
						</div>
					)}
				
				</div>
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
								<Button color="primary">All orders are loaded</Button>
							)}
						</div>
					) : (
						''
					)}
			</div>
		);
	}
}

EnhancedTable.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EnhancedTable);
