var express = require('express'),
path = require('path'),
hbs = require('hbs'),
mongoose = require('mongoose'),
bodyParser  = require('body-parser'),
io = require('socket.io'),
fs = require('fs');

var mongoUri = 'mongodb://localhost/the-game';
mongoose.connect(mongoUri);
var db = mongoose.connection;
db.on('error', function () {
  throw new Error('unable to connect to database at ' + mongoUri);
});

var app = express();

app.set('views', './views');
app.use(express.static('./public'));

// handlebars
hbs.registerPartials(__dirname + '/views/common');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(bodyParser.urlencoded({
  extended: true
}));

io.on('connection', function(socket) {
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('a user disconnected');
  });
  socket.on('player move', function(playerName, targetX, targetY){
    //var conditions = { name: playerName }, update = { $inc: { visits: 1 }}, options = { multi: true };
    //Player.update(conditions, update, options, function() {
      
    //});
    io.emit('player move', {playerName, targetX, targetY});
  });
});



require('./models/player');
require('./routes')(app);

app.listen(8080);
console.log('Listening on port 8080...');