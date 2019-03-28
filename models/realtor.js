const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const realtorSchema = new Schema({
  name: String,
  companyId: String,
  comments: [String],
  branchId: String
});


// A collection in the database.
module.exports = mongoose.model('Realtor', realtorSchema);