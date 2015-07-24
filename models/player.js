var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var PlayerSchema = new Schema({
  name: String,
  units: [],
  cells: []
});

mongoose.model('Player', PlayerSchema);