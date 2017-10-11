// @flow
// This file is shared across the demos.

import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Home from 'material-ui-icons/Home';
import Add from 'material-ui-icons/Add';
import TrendingUp from 'material-ui-icons/TrendingUp';

import SendIcon from 'material-ui-icons/Send';
import Receive from 'material-ui-icons/CloudDownload';
import Withdraw from 'material-ui-icons/FileDownload';

import Passbook from 'material-ui-icons/History';
import Settings from 'material-ui-icons/Settings';

import { Link } from 'react-router-dom';

import AppTheme from '../../../theme/variables';

const styles = {
	textDecoration: 'none',
	color: AppTheme.colorPrimary
};

export const incomingTransactions = (
	<div>
		<Link to="/dashboard" style={styles}>
			<ListItem button>
				<ListItemIcon>
					<Home />
				</ListItemIcon>
				<ListItemText primary="Dashboard / Instant Buy" />
			</ListItem>
		</Link>
		<Link to="/trade" style={styles}>
			<ListItem button>
				<ListItemIcon>
					<TrendingUp />
				</ListItemIcon>
				<ListItemText primary="Trade" />
			</ListItem>
		</Link>
		<Link to="/add-money" style={styles}>
			<ListItem button>
				<ListItemIcon>
					<Add />
				</ListItemIcon>
				<ListItemText primary="Add Money" />
			</ListItem>
		</Link>
	</div>
);

export const outgoingTransactions = (
	<div>
		<Link to="/send" style={styles}>
			<ListItem button>
				<ListItemIcon>
					<SendIcon />
				</ListItemIcon>
				<ListItemText primary="Send" />
			</ListItem>
		</Link>
		<Link to="/receive" style={styles}>
			<ListItem button>
				<ListItemIcon>
					<Receive />
				</ListItemIcon>
				<ListItemText primary="Receive" />
			</ListItem>
		</Link>
		<Link to="/withdraw" style={styles}>
			<ListItem button>
				<ListItemIcon>
					<Withdraw />
				</ListItemIcon>
				<ListItemText primary="Withdraw" />
			</ListItem>
		</Link>
	</div>
);

export const settings = (
	<div>
		<Link to="/passbook" style={styles}>
			<ListItem button>
				<ListItemIcon>
					<Passbook />
				</ListItemIcon>
				<ListItemText primary="Passbook" />
			</ListItem>
		</Link>
		<Link to="/settings" style={styles}>
			<ListItem button>
				<ListItemIcon>
					<Settings />
				</ListItemIcon>
				<ListItemText primary="Settings" />
			</ListItem>
		</Link>
	</div>
);
