// models/GetQuote.js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const getQuoteSchema = new Schema(
  {
    productName:   { type: String, required: true, trim: true },
    quantity:      { type: Number, required: true, min: 1 },

    name:          { type: String, required: true, trim: true },
    email:         { 
      type: String,
      trim: true, 
      lowercase: true,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email address']
    },
    phone:         { 
      type: String, 
      required: true, 
      trim: true,
      // adjust to your locale; this allows +, spaces, dashes, 7–15 digits
      match: [/^\+?[0-9\s\-()]{7,15}$/, 'Invalid phone number'] 
    },

    company:       { type: String, required: true, trim: true },

    lineSize:      { type: String, trim: true },          // e.g., "2 inch", "DN50"
    application:   { type: String, trim: true },
    applicationMedia: { type: String, trim: true },       // e.g., "Water", "Steam", "Acid"
    opTemperature: { type: Number },                      // °C (store as number)
    opPressure:    { type: Number },                      // bar/psi (document unit)
    flowRange:     { type: String, trim: true },          // e.g., "0.5–5 m³/h"

    message:       { type: String, trim: true, maxlength: 2000 },
    createdAt: { type: Date, default: Date.now }
  },
  
);

// Optional: helpful indexes
getQuoteSchema.index({ submittedAt: -1 });
getQuoteSchema.index({ email: 1 });

const GetQuote = mongoose.model('GetQuote', getQuoteSchema, 'GetQuoteForms');
module.exports = GetQuote;
