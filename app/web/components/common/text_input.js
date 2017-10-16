import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import AppTheme from '../../../theme/variables';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';

const styles = theme => ({
	textField: {
		margin: AppTheme.spacingUnit,
		fontSize: AppTheme.spacingUnit * 3
	},
	colorPrimary: {
		color: AppTheme.colorPrimary
	},
	inputField: {
		'&:after': {
			backgroundColor: AppTheme.colorPrimary
		}
	}
});

class CustomTextInput extends Component {
	static propTypes = {
		classes: PropTypes.object.isRequired,
		label: PropTypes.string.isRequired,
		helperText: PropTypes.string.isRequired,
		error: PropTypes.bool
	};
	static defaultProps = {
		error: false
	};
	state = {
		focused: false
	};
	render() {
		const { focused } = this.state;
		const { classes, label, helperText, error, ...inputProps } = this.props;
		return (
			<FormControl className={classes.textField} error={error}>
				<InputLabel
					className={classNames({
						[classes.colorPrimary]: !error && focused
					})}
				>
					{label}
				</InputLabel>
				<Input
					className={classNames({
						[classes.inputField]: !error
					})}
					onFocus={() => this.setState({ focused: true })}
					onBlur={() => this.setState({ focused: false })}
					{...inputProps}
				/>
				<FormHelperText
					className={classNames({
						[classes.colorPrimary]: !error && focused
					})}
				>
					{helperText}
				</FormHelperText>
			</FormControl>
		);
	}
}

export default withStyles(styles)(CustomTextInput);
