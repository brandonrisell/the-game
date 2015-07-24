var fs = require('fs');

/* routes for the game */
exports.load = function(req, res) {
	res.render('index', { title: 'The Game' });
};