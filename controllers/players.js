var mongoose = require('mongoose'),
Player = mongoose.model('Player');


exports.findAll = function(req, res){
  Player.find({},function(err, results) {
    return res.send(results);
  });
};
exports.findById = function() {};
exports.add = function() {};
exports.update = function() {};
exports.delete = function() {};
exports.import = function(req, res){
  Player.create(
    { "name": "Ben", "units": [{location: "fe2"}] },
    { "name": "Mike", "units": [{location: "ac6"}] },
    { "name": "Eric", "units": [{location: "8b3"}] },
    { "name": "Paul", "units": [{location: "7d4"}] }
  , function (err) {
    if (err) return console.log(err);
    return res.send(202);
  });
};