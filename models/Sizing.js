var mongoose = require('mongoose');

var SizingSchema = new mongoose.Schema({
  name: String,
  cores: Number,
  memory: Number,
  storage: Number,
  note: String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Sizing', SizingSchema);

