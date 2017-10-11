import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AppBar from 'material-ui/AppBar';
import { withStyles } from 'material-ui/styles';
import { CircularProgress } from 'material-ui/Progress';
import green from 'material-ui/colors/green';
import Button from 'material-ui/Button';
import CheckIcon from 'material-ui-icons/Check';
import AddIcon from 'material-ui-icons/Add';
import Tabs, { Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import Color from 'color';

import DialogContainer from './dialog';

import AppTheme from '../../../../theme/variables';

const styles = theme => ({
	root: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around'
	},
	textField: {
		margin: AppTheme.spacingUnit,
		fontSize: AppTheme.spacingUnit * 3
	},
	wrapper: {
		margin: theme.spacing.unit,
		position: 'relative'
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
		color: green[500],
		position: 'absolute',
		top: -2,
		left: -2
	},
	button: {
		backgroundColor: AppTheme.colorPrimary,
		color: AppTheme.colorWhite,
		'&:hover': {
			backgroundColor: Color(AppTheme.colorPrimary)
				.lighten(0.3)
				.hex()
		}
	},
	buttonSize: {
		width: '100px',
		height: '100px'
	}
});
function TabContainer(props) {
	return (
		<div style={{ padding: AppTheme.spaceExtraBig }}>{props.children}</div>
	);
}
class AddMoney extends Component {
	state = {
		loading: false,
		success: false,
		value: 0
	};

	componentWillUnmount() {
		clearTimeout(this.timer);
	}

	handleRequestClose = () => {
		this.setState({ success: false });
	};

	handleButtonClick = () => {
		if (!this.state.loading) {
			this.setState(
				{
					success: false,
					loading: true
				},
				() => {
					this.timer = setTimeout(() => {
						this.setState({
							loading: false,
							success: true
						});
					}, 100);
				}
			);
		}
	};

	timer = undefined;

	render() {
		const { loading, success } = this.state;
		const { classes } = this.props;
		const buttonClassname = classNames(
			{
				[classes.buttonSuccess]: success
			},
			{ [classes.button]: !success },
			classes.buttonSize
		);
		return (
			<div>
				<Grid container spacing={24}>
					<Grid item xs={12} className={classes.gridStyle}>
						<AppBar position="static" color="default">
							<Tabs
								value={this.state.value}
								indicatorColor={AppTheme.colorPrimary}
								textColor={AppTheme.colorPrimary}
								fullWidth
								centered
							>
								<Tab label="Add Money" icon={<AddIcon />} />
							</Tabs>
						</AppBar>
						<SwipeableViews index={this.state.value}>
							<TabContainer>
								<TextField
									label="Enter Amount"
									className={classes.textField}
									helperText="Some important text"
								/>
								<div className={classes.root}>
									<div className={classes.wrapper}>
										<Button
											fab
											color="primary"
											className={buttonClassname}
											onClick={this.handleButtonClick}
										>
											{success ? <CheckIcon /> : <AddIcon />}
										</Button>
										{loading && (
											<CircularProgress
												size={103}
												className={classes.fabProgress}
											/>
										)}
									</div>
								</div>
							</TabContainer>
						</SwipeableViews>
					</Grid>
				</Grid>
				<DialogContainer success={success} onRequestClose={this.handleRequestClose} />
			</div>
		);
	}
}

AddMoney.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AddMoney);
