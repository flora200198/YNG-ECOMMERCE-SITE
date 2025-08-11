const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const joinSchema = new Schema(
  {
    company_name: { type: String, required: true, trim: true },
    vendor_name:  { type: String, required: true, trim: true },
    number:       { type: String, required: true, trim: true },
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

const Join = mongoose.model('Join', joinSchema);
module.exports = Join;
