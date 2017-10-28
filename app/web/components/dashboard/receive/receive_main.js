import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import List, {
	ListItem,
	ListItemAvatar,
	ListItemSecondaryAction,
	ListItemText
} from 'material-ui/List';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import CopyIcon from 'material-ui-icons/ContentCopy';
import QRCode from 'qrcode.react';
import Hidden from 'material-ui/Hidden';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import AppTheme from '../../../../theme/variables';

const styles = theme => ({
	balanceContainer: {
		marginTop: AppTheme.spacingUnit * 3,
		marginBottom: AppTheme.spacingUnit * 3
	},
	title: {
		fontSize: AppTheme.spacingUnit * 4
	},
	receiveDetails: {
		borderTop: `0.5px solid ${theme.palette.grey['500']}`,
		marginTop: AppTheme.spacingUnit
	}
});

class ReceiveMain extends Component {
	static propTypes = {
		classes: PropTypes.object.isRequired
	};

	render() {
		const { classes, userData, fiat, crypto, mode, setSnackMsg } = this.props;
		const { countryCode, mobile } = userData;
		const combinedMobile = `${countryCode}-${mobile}`;
		const addressValue =
			mode === 'fiat' ? combinedMobile : userData[crypto].address;
		return (
			<div>
				<div className={classes.balanceContainer}>
					<Typography type="subheading">Your Balance</Typography>
					<Typography type="title" className={classes.title}>
						{mode === 'fiat'
							? userData.balanceFiat
							: userData[crypto].balanceReal + userData[crypto].balanceVirtual}
					</Typography>
					<Typography type="subheading">
						{mode === 'fiat' ? fiat.toUpperCase() : crypto.toUpperCase()}
					</Typography>
				</div>
				<div>
					<QRCode
						size={200}
						bgColor={AppTheme.colorClouds}
						fgColor={AppTheme.colorPrimary}
						value={addressValue}
					/>
				</div>
				<Grid container>
					<Hidden xsDown>
						<Grid item xs={3} />
					</Hidden>
					<Grid item xs={12} sm={6}>
						<Typography type="caption">{addressValue}</Typography>
						<Typography className={classes.receiveDetails}>
							{`Share your ${mode === 'fiat'
								? 'Mobile Number'
								: `${crypto.toUpperCase()} address`} or QR code to receive payments in ${crypto.toUpperCase()}`}
						</Typography>
						<CopyToClipboard
							text={addressValue}
							onCopy={() => setSnackMsg('Address copied to clipboard')}
						>
							<IconButton aria-label="Copy">
								<CopyIcon />
							</IconButton>
						</CopyToClipboard>
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default withStyles(styles)(ReceiveMain);
