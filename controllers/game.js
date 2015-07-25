var fs = require('fs');

/* routes for the game */
exports.load = function(req, res) {
	res.render('index', { title: 'The Game' });
};

exports.alt = function( req, res ) {
	res.render('index-alt', { title: 'The Game' });
};

exports.goog = function( req, res ) {
	res.render('google-play-services', { title: 'Google Play Services' });
};