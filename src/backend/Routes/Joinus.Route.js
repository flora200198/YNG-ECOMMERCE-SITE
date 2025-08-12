// const router = require('express').Router();
// const {sendAdminEmail, sendUserEmail} = require('../controller/mailer');
// // const { validateContact } = require('../Middlewares/Contact.Middleware');
// const Join = require('../models/join');


// // POST route to handle contact form submission
// router.post('/join', async (req, res) => {
// const {  vendor_name, company_name, number} = req.body;
//     // Check if all required fields are present
  
// try {
//     const join = new Join ({vendor_name, company_name, number });
//     await join.save();

// try {
//       await sendAdminEmail(req.body);
//       console.log("✅ Admin email sent");
//     } catch (err) {
//       console.error("❌ Failed to send admin email:", err);
//     }

//     // 2️⃣ Thank-you email to user
//     try {
//       await sendUserEmail(req.body);
//       console.log("✅ Thank-you email sent to user");
//     } catch (err) {
//       console.error("❌ Failed to send user email:", err);
//     }

//     res.status(201).json({ message: 'Join Us form submitted successfully' });    
//     console.log('Join form saved:', contact);
// }
// catch (error) {
//     console.error('Error saving contact:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });

// // Route to get all contacts
// module.exports = router;
    
const router = require('express').Router();
const { sendAdminEmail, sendUserEmail } = require('../controller/mailer');
const Join = require('../models/join');

// POST /join
router.post('/', async (req, res) => { // note: '/' because base is /join
  const { vendor_name, company_name, number } = req.body || {};

  if (!vendor_name || !company_name || !number) {
    return res.status(400).json({ message: 'vendor_name, company_name, and number are required' });
  }

  try {
    const joinDoc = new Join({ vendor_name, company_name, number });
    await joinDoc.save();

    Promise.resolve(sendAdminEmail(req.body)).catch(err => console.error('Admin email failed:', err));
    Promise.resolve(sendUserEmail(req.body)).catch(err => console.error('User email failed:', err));

    console.log('Join form saved:', joinDoc._id);
    return res.status(201).json({ message: 'Join Us form submitted successfully' });
  } catch (error) {
    console.error('Error saving join:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
