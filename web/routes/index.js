var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
	res.render('index', { title: 'Alconomy' });
});


router.get('/dashboard', function(req, res, next) {
	res.render('dashboard', { title: 'Dashboard' });
});

router.get('/trade', function(req, res, next) {
	res.render('dashboard', { title: 'Trade' });
});

router.get('/add-money', function(req, res, next) {
	res.render('dashboard', { title: 'Add Money' });
});

router.get('/send', function(req, res, next) {
	res.render('dashboard', { title: 'Send' });
});

router.get('/receive', function(req, res, next) {
	res.render('dashboard', { title: 'Receive' });
});

router.get('/withdraw', function(req, res, next) {
	res.render('dashboard', { title: 'Withdraw' });
});

router.get('/passbook', function(req, res, next) {
	res.render('dashboard', { title: 'Passbook' });
});

router.get('/settings', function(req, res, next) {
	res.render('dashboard', { title: 'Settings' });
});

router.get('/standby', function(req, res, next) {
	res.render('dashboard', { title: 'Stand By' });
});

module.exports = router;
