const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const branchSchema = new Schema({
  name: String,
  companyId: String,
  realtors: [String]
});


// A collection in the database.
module.exports = mongoose.model('Branch', branchSchema);