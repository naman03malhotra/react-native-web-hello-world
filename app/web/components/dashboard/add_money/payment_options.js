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
import Divider from 'material-ui/Divider';
import Payment from 'material-ui-icons/Payment';
import Biz from 'material-ui-icons/BusinessCenter';
import Hidden from 'material-ui/Hidden';
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

class PaymentOptions extends Component {
	state = {};

	render() {
		const { classes, progress, amount, fiat, fee } = this.props;
		const totalAmount = (amount + (amount * fee)).toFixed(2);
		return (
			<List>
				<ListItem button className={classes.list} onClick={() => progress(1)}>
					<Hidden xsDown>
						<ListItemAvatar>
							<Avatar className={classes.icon}>
								<Payment />
							</Avatar>
						</ListItemAvatar>
					</Hidden>
					<ListItemText
						style={{ flex: 0.7 }}
						primary="Payment Gateway | 30 Min Processing Time"
						secondary={`${fee * 100}% of ${(amount).toFixed(2)} = ${(amount *
							fee).toFixed(2)} ${fiat.toUpperCase()} | Pay via Net Banking / Credit Card / Debit Card / UPI`}
					/>
					<ListItemSecondaryAction style={{ flex: 0.2 }}>
						<ListItemText primary={`${totalAmount} ${fiat.toUpperCase()}`} secondary={`Fee: ${(amount *
							fee).toFixed(2)} ${fiat.toUpperCase()}`} />
					</ListItemSecondaryAction>
				</ListItem>
				<Divider />
				<ListItem button className={classes.list} onClick={() => progress(1)}>
					<Hidden xsDown>
						<ListItemAvatar>
							<Avatar className={classes.icon}>
								<Biz />
							</Avatar>
						</ListItemAvatar>
					</Hidden>
					<ListItemText
						style={{ flex: 0.7 }}
						primary="Payment Gateway | 30 Min Processing Time"
						secondary={`2.5% of 50000 = 1250 INR | Pay via Net Banking / Credit Card / Debit Card / UPI`}
					/>
					<ListItemSecondaryAction style={{ flex: 0.2 }}>
						<ListItemText primary={`₹ 51250.00`} secondary={'Fee: ₹ 1250.00'} />
					</ListItemSecondaryAction>
				</ListItem>
				<Divider />
			</List>
		);
	}
}

PaymentOptions.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PaymentOptions);
