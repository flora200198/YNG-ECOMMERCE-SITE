const express = require('express');
const router = express.Router();
const Contact = require('../models/contact');
const { sendAdminEmail, sendUserEmail } = require('../controller/mailer');

// POST /contact
router.post('/contact', async (req, res) => {
  const { name, address, number, message } = req.body || {};

  // 1) Validate input (return 400 instead of vague 500s)
  if (!name || !number || !message) {
    return res.status(400).json({
      ok: false,
      message: 'name, number, and message are required',
      missing: {
        name: !name,
        number: !number,
        message: !message,
      },
    });
  }

  // Optional: basic phone check, trim strings
  const clean = {
    name: String(name).trim(),
    address: address ? String(address).trim() : '',
    number: String(number).trim(),
    message: String(message).trim(),
  };

  try {
    // 2) Save to DB
    const contact = await Contact.create(clean);
    console.log('✅ Contact saved:', contact._id);

    // 3) Respond first (fast UX). Emails run in background.
    res.status(201).json({ ok: true, message: 'Contact form submitted' });
    console.log('📬 Contact form submitted:', contact);

    // 4) Fire-and-forget emails (don’t block the response)
    setImmediate(async () => {
      try {
        await sendAdminEmail(contact.toObject());
        console.log('📧 Admin email sent', contact);
      } catch (err) {
        console.error('❌ Admin email failed:', err);
      }
      try {
        await sendUserEmail(contact.toObject());
        console.log('📧 User email sent');
      } catch (err) {
        console.error('❌ User email failed:', err);
      }
    });
  } catch (error) {
    // 5) Clear error for DB failures
    console.error('❌ POST /contact error:', error);
    // Common: validation errors on schema fields
    if (error.name === 'ValidationError') {
      return res.status(400).json({ ok: false, message: error.message });
    }
    res.status(500).json({ ok: false, message: 'Internal server error' });
  }
});

module.exports = router;
