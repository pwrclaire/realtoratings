const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  text: String,
  knowledge: Number,
  responsiveness: Number,
  interest: Number,
  professionalism: Number,
  realtorId: String,
  dateCreated: { type: Date },
  starTotal: Number
});


// A collection in the database.
module.exports = mongoose.model('Comment', commentSchema);