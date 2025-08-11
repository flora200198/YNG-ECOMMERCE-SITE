const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema(
  {
    name:    { type: String, required: true, trim: true },
    address: { type: String, required: true, trim: true },
    number:  { type: String, required: true, trim: true },
    message: { type: String }
  },
  // This adds createdAt/updatedAt; rename createdAt -> submittedAt
  { timestamps: { createdAt: 'submittedAt', updatedAt: 'updatedAt' } }
);

const Contact = mongoose.model('Contact', contactSchema);
module.exports = Contact;
