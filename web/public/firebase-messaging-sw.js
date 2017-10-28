importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js');

const config = {
	apiKey: 'AIzaSyA-D1yKfzLZE97ySKo5pDmoRBcUezsEH2o',
	authDomain: 'alconomy-01.firebaseapp.com',
	databaseURL: 'https://alconomy-01.firebaseio.com',
	projectId: 'alconomy-01',
	storageBucket: 'alconomy-01.appspot.com',
	messagingSenderId: '239635614025'
};

firebase.initializeApp(config);

const messaging = firebase.messaging();

// messaging.setBackgroundMessageHandler(function(payload) {
//   console.log('[firebase-messaging-sw.js] Received background message ', payload);
//   // Customize notification here
//   const notificationTitle = 'Background Message Title';
//   const notificationOptions = {
//     body: 'Background Message body.',
//     icon: '/firebase-logo.png'
//   };

//   return self.registration.showNotification(notificationTitle,
//       notificationOptions);
// });
