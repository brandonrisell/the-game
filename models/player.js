var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var PlayerSchema = new Schema({
  name: String,
  units: []
});

mongoose.model('Player', PlayerSchema);