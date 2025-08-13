// Routes/Join.Route.js
const express = require('express');
const router = express.Router();
const { sendAdminEmail, sendUserEmail } = require('../controller/mailer');
const Join = require('../models/join');

// Simple phone check: digits, space, + ( ) - , 7–15 chars
const PHONE_RE = /^[0-9()\-\+ ]{7,15}$/;

router.post('/join', async (req, res) => {
  try {
    // 1) Extract & normalize
    const vendor_name  = (req.body?.vendor_name ?? '').trim();
    const company_name = (req.body?.company_name ?? '').trim();
    const number       = (req.body?.number ?? '').trim();
    const email        = (req.body?.email ?? '').trim();   // optional

    // 2) Validate required fields
    const missing = {
      vendor_name: !vendor_name,
      company_name: !company_name,
      number: !number
    };
    if (missing.vendor_name || missing.company_name || missing.number) {
      return res.status(400).json({
        ok: false,
        message: 'vendor_name, company_name, and number are required',
        missing
      });
    }

    // 3) Validate phone format (optional but recommended)
    if (!PHONE_RE.test(number)) {
      return res.status(400).json({
        ok: false,
        message: 'Invalid phone number format. Use 7–15 characters: digits, space, + ( ) -'
      });
    }

    // 4) Persist
    const joinDoc = await Join.create({ vendor_name, company_name, number, email });
    console.log('✅ Join form saved:', joinDoc._id);

    // 5) Respond fast (don’t block on email)
    res.status(201).json({ ok: true, message: 'Join Us form submitted successfully' });

    // 6) Fire-and-forget emails
    setImmediate(async () => {
      try {
        // Send admin notification
        await sendAdminEmail('join', joinDoc.toObject());
        console.log('📧 Admin email sent for', joinDoc._id);
      } catch (err) {
        console.error('❌ Admin email failed:', err);
      }

      try {
        // Send user thank-you only if we have an email
        if (email) {
          // user email expects { name, email } at minimum — map vendor_name -> name
          await sendUserEmail({ name: vendor_name, email }, 'join');
          console.log('📧 User email sent for', joinDoc._id);
        } else {
          console.log('ℹ️ No user email provided; skipped thank-you email for', joinDoc._id);
        }
      } catch (err) {
        console.error('❌ User email failed:', err);
      }
    });

  } catch (error) {
    console.error('❌ Error saving join:', error);
    return res.status(500).json({ ok: false, message: 'Internal server error' });
  }
});

module.exports = router;
