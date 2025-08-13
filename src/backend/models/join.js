const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const joinSchema = new Schema(
  {
    company_name: { type: String, required: true, trim: true },
    vendor_name:  { type: String, required: true, trim: true },
    number:       { type: String, required: true, trim: true },
    createdAt: { type: Date, default: Date.now }
  }
);
const Join = mongoose.model('Join', joinSchema, 'JoinForms');
module.exports = Join;
