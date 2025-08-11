const router = require('express').Router();
const GetQuote = require('../models/getquote'); // Ensure correct import based on your file structure
const { sendAdminEmail, sendUserEmail } = require('../utils/mailer');

// POST /get-quote
router.post('/get-quote', async (req, res) => {
  const {
    productName,
    quantity,
    name,
    email,
    phone,
    company,
    lineSize,
    application,
    applicationMedia,
    opTemperature,
    opPressure,
    flowRange,
    message
  } = req.body;

  try {
    // 1) Save to DB (Mongoose will validate required fields)
    const quote = new GetQuote({
      productName,
      quantity,
      name,
      email,
      phone,
      company,
      lineSize,
      application,
      applicationMedia,
      opTemperature,
      opPressure,
      flowRange,
      message
    });
    await quote.save();

    // 2) Email admin (reuse contact mailer API by mapping fields)
    //    - address := company
    //    - number  := phone
    //    - message := formatted quote summary
    const adminPayload = {
      name,
      email,
      address: company,
      number: phone,
      message: `
Product: ${productName} (Qty: ${quantity})
Line Size: ${lineSize || '-'}
Application: ${application || '-'}
Media: ${applicationMedia || '-'}
Operating Temp: ${opTemperature ?? '-'}
Operating Pressure: ${opPressure ?? '-'}
Flow Range: ${flowRange || '-'}
Notes: ${message || '-'}
      `.trim()
    };

    sendAdminEmail(adminPayload).catch(err =>
      console.error('❌ Failed to send admin email:', err)
    );

    // 3) Acknowledge user (if email present)
    if (email) {
      sendUserEmail({ name, email }).catch(err =>
        console.error('❌ Failed to send user email:', err)
      );
    }

    res.status(201).json({ message: 'Quote submitted successfully', id: quote._id });
  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).json({ message: 'Validation failed', errors: error.errors });
    }
    console.error('Error saving quote:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
