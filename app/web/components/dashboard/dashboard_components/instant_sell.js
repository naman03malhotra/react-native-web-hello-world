// @flow weak

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import ArrowDownward from 'material-ui-icons/ArrowDownward';
import Color from 'color';
import AppTheme from '../../../../theme/variables';

const styles = theme => ({
	textField: {
		margin: AppTheme.spacingUnit,
		fontSize: AppTheme.spacingUnit * 3
	},
	gridStyle: {
		textAlign: 'center'
	},
	button: {
		padding: AppTheme.spacingUnit * 2,
		fontSize: theme.typography.button.fontSize * 1.2,
		width: '100%',
		backgroundColor: AppTheme.colorPrimary,
		color: AppTheme.colorWhite,
		'&:hover': {
			backgroundColor: Color(AppTheme.colorPrimary)
				.lighten(0.3)
				.hex()
		}
	},
	icon: {
		marginLeft: AppTheme.spacingUnit
	}
});

class InstantSell extends Component {
	static propTypes = {
		classes: PropTypes.object.isRequired
	};
	render() {
		const { classes } = this.props;
		return (
			<Grid container spacing={24}>
				<Grid item xs={6} className={classes.gridStyle}>
					<TextField
						label="BTC"
						defaultValue="1"
						className={classes.textField}
						helperText="Some important text"
					/>
				</Grid>
				<Grid item xs={6} className={classes.gridStyle}>
					<TextField
						label="INR"
						defaultValue="290000"
						className={classes.textField}
						helperText="Some important text"
					/>
				</Grid>
				<Grid item xs={12} className={classes.gridStyle}>
					<Button raised color="primary" className={classes.button}>
						INSTANT SELL
						<ArrowDownward className={classes.icon} />
					</Button>
				</Grid>
			</Grid>
		);
	}
}

export default withStyles(styles)(InstantSell);
