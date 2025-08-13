const express = require('express');
const router = require('express').Router();
const { sendAdminEmail, sendUserEmail } = require('../controller/mailer');
const Join = require('../models/join');

// POST /join
router.post('/join', async (req, res) => { // note: '/' because base is /join

  try {
     const { vendor_name, company_name, number } = req.body || {};

  if (!vendor_name || !company_name || !number) {
    return res.status(400).json({ message: 'vendor_name, company_name, and number are required' });
  }
    const joinDoc = new Join({ vendor_name, company_name, number });
    await joinDoc.save();
    console.log('Join form saved:', joinDoc);
    return res.status(201).json({ message: 'Join Us form submitted successfully' });

    
     setImmediate(async () => {
          try {
            await sendAdminEmail(joinDoc.toObject());
            console.log('📧 Admin email sent', contact);
          } catch (err) {
            console.error('❌ Admin email failed:', err);
          }
          try {
            await sendUserEmail(joinDoc.toObject());
            console.log('📧 User email sent');
          } catch (err) {
            console.error('❌ User email failed:', err);
          }
        });

  } catch (error) {
    console.error('Error saving join:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
