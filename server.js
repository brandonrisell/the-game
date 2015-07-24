var express = require('express'),
	mongoose = require('mongoose'),
	bodyParser  = require('body-parser'),
	fs = require('fs');

var mongoUri = 'mongodb://localhost/the-game';
mongoose.connect(mongoUri);
var db = mongoose.connection;
db.on('error', function () {
  throw new Error('unable to connect to database at ' + mongoUri);
});

var app = express();

app.set('views', './views');
app.set('view engine', 'html');
app.use(express.static('./public'));

app.use(bodyParser.urlencoded({
  extended: true
}));

require('./models/player');
require('./routes')(app);

app.listen(8080);
console.log('Listening on port 8080...');