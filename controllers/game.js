var fs = require('fs');

/* routes for the game */
exports.load = function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write("game time!");
	res.end();
};