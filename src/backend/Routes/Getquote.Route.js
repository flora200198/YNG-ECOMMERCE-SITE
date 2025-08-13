// Routes/GetQuote.Route.js
const router = require('express').Router();
const GetQuote = require('../models/getquote'); // make sure schema matches fields below
// Use the path where your UPDATED mailer lives:
const { sendAdminEmail, sendUserEmail } = require('../utils/mailer'); // or '../controller/mailer'

const PHONE_RE = /^[0-9()\-\+ ]{7,15}$/;

router.post('/get-quote', async (req, res) => {
  try {
    // 1) Extract & normalize
    const productName      = (req.body?.productName ?? '').trim();
    const quantity         = req.body?.quantity ?? '';
    const name             = (req.body?.name ?? '').trim();
    const email            = (req.body?.email ?? '').trim();
    const phone            = (req.body?.phone ?? '').trim(); // stored as phone in DB
    const company          = (req.body?.company ?? '').trim();
    const lineSize         = (req.body?.lineSize ?? '').trim();
    const application      = (req.body?.application ?? '').trim();
    const applicationMedia = (req.body?.applicationMedia ?? '').trim();
    const opTemperature    = (req.body?.opTemperature ?? '').trim();
    const opPressure       = (req.body?.opPressure ?? '').trim();
    const flowRange        = (req.body?.flowRange ?? '').trim();
    const message          = (req.body?.message ?? '').trim();

    // 2) Validate requireds before DB (clear 400s for the client)
    const missing = {
      productName: !productName,
      name: !name,
      email: !email,
    };
    if (missing.productName || missing.name || missing.email) {
      return res.status(400).json({
        ok: false,
        message: 'productName, name, and email are required',
        missing,
      });
    }
    if (phone && !PHONE_RE.test(phone)) {
      return res.status(400).json({
        ok: false,
        message: 'Invalid phone number format. Use 7–15 characters: digits, space, + ( ) -',
      });
    }

    // 3) Save to DB (schema should have these fields)
    const quote = await GetQuote.create({
      productName,
      quantity,
      name,
      email,
      phone, // kept as 'phone' in DB
      company,
      lineSize,
      application,
      applicationMedia,
      opTemperature,
      opPressure,
      flowRange,
      message,
    });
    console.log('✅ Quote saved:', quote._id);

    // 4) Respond fast (don’t block on email)
    res.status(201).json({ ok: true, message: 'Quote submitted successfully', id: quote._id });

    // 5) Email admin + user asynchronously
    setImmediate(async () => {
      try {
        // Build payload for the mailer (mailer expects 'number'; map phone -> number)
        const payload = {
          name,
          email,
          number: phone,         // mailer uses 'number'
          productName,
          quantity,
          company,
          lineSize,
          application,
          applicationMedia,
          opTemperature,
          opPressure,
          flowRange,
          message,
        };

        await sendAdminEmail('getQuote', payload); // <-- correct signature with formType
        console.log('📧 Admin email sent for', quote._id);
      } catch (err) {
        console.error('❌ Admin email failed:', err);
      }

      try {
        await sendUserEmail({ name, email }, 'getQuote'); // <-- correct signature
        console.log('📧 User email sent for', quote._id);
      } catch (err) {
        console.error('❌ User email failed:', err);
      }
    });
  } catch (error) {
    console.error('❌ Error saving quote:', error);
    if (error.name === 'ValidationError') {
      return res.status(400).json({ ok: false, message: 'Validation failed', errors: error.errors });
    }
    res.status(500).json({ ok: false, message: 'Internal server error' });
  }
});

module.exports = router;
