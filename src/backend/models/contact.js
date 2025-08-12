const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema(
  {
    name:    { type: String, required: true, trim: true },
    address: { type: String, required: true, trim: true },
    number:  { type: String, required: true, trim: true },
    message: { type: String },
    createdAt: { type: Date, default: Date.now }
  },
  // This adds createdAt/updatedAt; rename createdAt -> submittedAt

);

const Contact = mongoose.model('Contact', contactSchema, 'ContactForms'); // 'ContactForms' is the collection name
module.exports = Contact;
