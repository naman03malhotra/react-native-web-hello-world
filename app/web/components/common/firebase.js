import * as firebase from 'firebase';

const config = {
	apiKey: 'AIzaSyA-D1yKfzLZE97ySKo5pDmoRBcUezsEH2o',
	authDomain: 'alconomy-01.firebaseapp.com',
	databaseURL: 'https://alconomy-01.firebaseio.com',
	projectId: 'alconomy-01',
	storageBucket: 'alconomy-01.appspot.com',
	messagingSenderId: '239635614025'
};

const Firebase = firebase.initializeApp(config);

export default Firebase;
