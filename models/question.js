const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  type: String,
  question: String,
  order: Number
});


// A collection in the database.
module.exports = mongoose.model('Question', questionSchema);