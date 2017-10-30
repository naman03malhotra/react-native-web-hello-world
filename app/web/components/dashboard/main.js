/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List from 'material-ui/List';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Hidden from 'material-ui/Hidden';
import Divider from 'material-ui/Divider';
import MenuIcon from 'material-ui-icons/Menu';
import SvgIcon from 'material-ui/SvgIcon';
import classNames from 'classnames';
import { Swipeable } from 'react-touch';
import ArrowLeft from 'material-ui-icons/ArrowBack';
import AppTheme from '../../../theme/variables';
import { incomingTransactions, outgoingTransactions, settings } from './routes';

const drawerWidth = 280;

const styles = theme => ({
	root: {
		width: '100%',
		height: '100%',
		zIndex: 1,
		overflow: 'hidden'
	},
	appFrame: {
		position: 'relative',
		display: 'flex',
		width: '100%',
		height: '100%'
	},
	appBar: {
		position: 'absolute',
		marginLeft: drawerWidth,
		[theme.breakpoints.up('md')]: {
			width: `calc(100% - ${drawerWidth}px)`
		},
		backgroundColor: AppTheme.colorPrimary
	},
	navIconHide: {
		[theme.breakpoints.up('md')]: {
			display: 'none'
		}
	},
	drawerHeader: theme.mixins.toolbar,
	drawerPaper: {
		width: drawerWidth,
		[theme.breakpoints.up('md')]: {
			width: drawerWidth,
			position: 'relative',
			height: '100%'
		},
		borderRight: '0px',
		backgroundColor: AppTheme.colorClouds
	},
	content: {
		backgroundColor: AppTheme.colorClouds,
		width: '100%',
		padding: AppTheme.spacingUnit * 3,
		height: 'calc(100% - 56px)',
		marginTop: AppTheme.spacingUnit * 7,
		[theme.breakpoints.up('sm')]: {
			height: 'calc(100% - 64px)',
			marginTop: AppTheme.spacingUnit * 8
		},
		border: `1px solid ${theme.palette.common.faintBlack}`,
		overflowY: 'auto'
	},
	colorPrimary: {
		backgroundColor: AppTheme.colorPrimary,
		boxShadow: theme.shadows[4]
	},
	drawerTitle: {
		color: AppTheme.colorWhite,
		padding: '15px 75px'
	},
	list: {
		paddingTop: AppTheme.spaceBig,
		paddingBottom: AppTheme.spaceBig
	},
	styleHeaderIcon: {
		color: AppTheme.colorWhite
	},
	styleHeaderTitle: {
		color: AppTheme.colorWhite,
		fontSize: AppTheme.spacingUnit * 3
	},
	image: {
		height: AppTheme.spacingUnit * 6,
    marginTop: AppTheme.spacingUnit
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

class Main extends Component {
	state = {
		mobileOpen: false,
		value: 0
	};

	static propTypes = {
		classes: PropTypes.object.isRequired
	};
	_handleSwipe = val => {
		this.setState({ mobileOpen: val });
	};
	handleDrawerToggle = () => {
		this.setState({ mobileOpen: !this.state.mobileOpen });
	};
	handleChange = (event, value) => {
		this.setState({ value });
	};

	handleChangeIndex = index => {
		this.setState({ value: index });
	};

	render() {
		const { classes, title } = this.props;
		const drawer = (
			<div onClick={this.handleDrawerToggle}>
				<div className={classNames(classes.drawerHeader, classes.colorPrimary)}>
					<Hidden mdUp>
						<ListItem>
							<ListItemIcon>
								<ArrowLeft className={classes.styleHeaderIcon} />
							</ListItemIcon>
							<ListItemText
								primary="Alconomy"
								className={classes.styleHeaderTitle}
								disableTypography
							/>
						</ListItem>
					</Hidden>
					<Hidden smDown>
						<img
							src="/images/logo/alco-plain-wt.png"
							className={classes.image}
						/>
					</Hidden>
				</div>
				<List className={classes.list}>{incomingTransactions}</List>
				<Divider />
				<List className={classes.list}>{outgoingTransactions}</List>
				<Divider />
				<List className={classes.list}>{settings}</List>
			</div>
		);

		return (
			<Swipeable
				onSwipeLeft={() => this._handleSwipe(false)}
				onSwipeRight={() => this._handleSwipe(true)}
			>
				<div className={classes.root}>
					<div className={classes.appFrame}>
						<AppBar className={classes.appBar}>
							<Toolbar>
								<IconButton
									color="contrast"
									aria-label="open drawer"
									onClick={this.handleDrawerToggle}
									className={classes.navIconHide}
								>
									<MenuIcon />
								</IconButton>
								<Typography type="title" color="inherit" noWrap>
									{title}
								</Typography>
							</Toolbar>
						</AppBar>
						<Hidden mdUp>
							<Drawer
								type="temporary"
								open={this.state.mobileOpen}
								classes={{
									paper: classes.drawerPaper
								}}
								onRequestClose={this.handleDrawerToggle}
								ModalProps={{
									keepMounted: true // Better open performance on mobile.
								}}
							>
								{drawer}
							</Drawer>
						</Hidden>
						<Hidden mdDown implementation="css">
							<Drawer
								type="permanent"
								open
								classes={{
									paper: classes.drawerPaper
								}}
							>
								{drawer}
							</Drawer>
						</Hidden>
						<main className={classes.content}>{this.props.children}</main>
					</div>
				</div>
			</Swipeable>
		);
	}
}

export default withStyles(styles)(Main);
