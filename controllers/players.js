var mongoose = require('mongoose'),
Player = mongoose.model('Player');


exports.findAll = function(req, res){
  Player.find({},function(err, results) {
    return res.send(results);
  });
};
exports.findById = function() {};
exports.add = function() {};
exports.update = function(req, res) {
  
};
//exports.delete = function() {};
exports.deleteAll = function(req, res) {
  Player.remove(function(err){
    if (err) return console.log(err);
    return res.sendStatus(202);
  });
};
exports.import = function(req, res) {
  Player.create(
    { "name": "Ben", "color": "#888800", "units": [{locationX: "0", locationY: "0"}], "cells": [{locationX: "0", locationY: "0"}] },
    { "name": "Mike", "color": "#008888", "units": [{locationX: "2", locationY: "2"}], "cells": [{locationX: "2", locationY: "2"}] },
    { "name": "Eric", "color": "#aaaa00", "units": [{locationX: "4", locationY: "4"}], "cells": [{locationX: "4", locationY: "4"}] },
    { "name": "Paul", "color": "#00aaaa", "units": [{locationX: "6", locationY: "6"}], "cells": [{locationX: "6", locationY: "6"}] }
  , function (err) {
    if (err) return console.log(err);
    return res.sendStatus(202);
  });
};