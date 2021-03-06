module.exports = function(app){
    var players = require('./controllers/players');

    app.get('/players', players.findAll);
    app.get('/players/:id', players.findById);
    app.post('/players', players.add);
    app.put('/players/:id', players.update);
    //app.delete('/players/:id', players.delete); // Unecessary?
    app.get('/import', players.import);
    app.get('/reset', players.deleteAll);

    // routes for game
    var game = require('./controllers/game');
    app.get('/', game.load );
    app.get('/alt', game.alt );
    app.get('/goog', game.goog );
};