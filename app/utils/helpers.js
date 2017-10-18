import Store from './storage';

const HandleCatch = err => {
	if (err.errno || err.crossDomain) {
		alert('You are offline, please connect to the internet.');
		window.location = '/offline';
	} else if (err.status === 403) {
		alert('Invalid Mobile number or password, please try again!');
	} else if (err.status === 401) {
		alert(
			'You have been logged out, no problem just login again.'
		);
		Logout();
	} else if (err)
		alert(`Error occured, please contact us. Error code:${err.status}`);
};

const Logout = () => {
	Store.remove({
		key: 'userAuth'
	});
	Store.remove({
		key: 'userData'
	});
	window.location = '/';
};

export { HandleCatch, Logout };
