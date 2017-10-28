import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';

import List, {
	ListItem,
	ListItemText,
	ListItemAvatar,
	ListItemSecondaryAction
} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import AppBar from 'material-ui/AppBar';
import Divider from 'material-ui/Divider';
import Tabs, { Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import Payment from 'material-ui-icons/Payment';
import Biz from 'material-ui-icons/BusinessCenter';
import Hidden from 'material-ui/Hidden';
import Grid from 'material-ui/Grid';
import IconButton from 'material-ui/IconButton';
import SettingsIcon from 'material-ui-icons/Settings';
import AppTheme from '../../../../theme/variables';

const styles = theme => ({
	list: {
		paddingTop: AppTheme.spacingUnit * 4,
		paddingBottom: AppTheme.spacingUnit * 4
	},
	icon: {
		backgroundColor: AppTheme.colorPrimary
	}
});

class Settings extends Component {
	state = {};
	componentWillMount() {
		const { loadTitle, title } = this.props;
		loadTitle(title);
	}

	render() {
		const { classes, progress } = this.props;

		return (
			<Grid container spacing={24}>
				<Grid item xs={12} sm={12}>
					<AppBar position="static" color="default">
						<Tabs
							value={0}
							onChange={this.cryptoHandleChange}
							indicatorColor={AppTheme.colorPrimary}
							textColor={AppTheme.colorPrimary}
							fullWidth
							centered
						>
							<Tab label="Settings" icon={<SettingsIcon />} />
						</Tabs>
					</AppBar>
					<SwipeableViews index={0}>
						<List>
							<ListItem
								button
								className={classes.list}
								onClick={() => progress(1)}
							>
								<Hidden xsDown>
									<ListItemAvatar>
										<Avatar className={classes.icon}>
											<Payment />
										</Avatar>
									</ListItemAvatar>
								</Hidden>
								<ListItemText primary="Full" secondary={`Name`} />
								<ListItemSecondaryAction>
									<ListItemText primary={`Naman`} secondary={'Malhotra'} />
								</ListItemSecondaryAction>
							</ListItem>
							<Divider />
							<ListItem
								button
								className={classes.list}
								onClick={() => progress(1)}
							>
								<Hidden xsDown>
									<ListItemAvatar>
										<Avatar className={classes.icon}>
											<Biz />
										</Avatar>
									</ListItemAvatar>
								</Hidden>
								<ListItemText primary="Your" secondary={`Email`} />
								<ListItemSecondaryAction>
									<ListItemText
										primary={`naman03malhotra@gmail.com`}
										secondary={`Primary Email`}
									/>
								</ListItemSecondaryAction>
							</ListItem>
							<Divider />
							<ListItem
								button
								className={classes.list}
								onClick={() => progress(1)}
							>
								<Hidden xsDown>
									<ListItemAvatar>
										<Avatar className={classes.icon}>
											<Biz />
										</Avatar>
									</ListItemAvatar>
								</Hidden>
								<ListItemText primary="KYC Status" />
								<ListItemSecondaryAction>
									<IconButton aria-label="Delete">
										<SettingsIcon />
									</IconButton>
								</ListItemSecondaryAction>
							</ListItem>
							<Divider />
							<ListItem
								button
								className={classes.list}
								onClick={() => progress(1)}
							>
								<Hidden xsDown>
									<ListItemAvatar>
										<Avatar className={classes.icon}>
											<Biz />
										</Avatar>
									</ListItemAvatar>
								</Hidden>
								<ListItemText primary="Contact Us" />
								<ListItemSecondaryAction>
									<IconButton aria-label="Delete">
										<SettingsIcon />
									</IconButton>
								</ListItemSecondaryAction>
							</ListItem>
							<Divider />
							<ListItem
								button
								className={classes.list}
								onClick={() => progress(1)}
							>
								<Hidden xsDown>
									<ListItemAvatar>
										<Avatar className={classes.icon}>
											<Biz />
										</Avatar>
									</ListItemAvatar>
								</Hidden>
								<ListItemText primary="FAQs" />
								<ListItemSecondaryAction>
									<IconButton aria-label="Delete">
										<SettingsIcon />
									</IconButton>
								</ListItemSecondaryAction>
							</ListItem>
							<Divider />
						</List>
					</SwipeableViews>
				</Grid>
			</Grid>
		);
	}
}

Settings.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Settings);
