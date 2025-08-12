const router = require('express').Router();
const {sendAdminEmail, sendUserEmail} = require('../controller/mailer');
// const { validateContact } = require('../Middlewares/Contact.Middleware');
const Contact = require('../models/contact');


// POST route to handle contact form submission
router.post('/contact', async (req, res) => {
const {  vendor_name, company_name, number} = req.body;
    // Check if all required fields are present
  
try {
    const contact = new Contact ({vendor_name, company_name, number });
    await contact.save();

try {
      await sendAdminEmail(req.body);
      console.log("✅ Admin email sent");
    } catch (err) {
      console.error("❌ Failed to send admin email:", err);
    }

    // 2️⃣ Thank-you email to user
    try {
      await sendUserEmail(req.body);
      console.log("✅ Thank-you email sent to user");
    } catch (err) {
      console.error("❌ Failed to send user email:", err);
    }

    res.status(201).json({ message: 'Join Us form submitted successfully' });    
    console.log('Contact saved:', contact);
}
catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Route to get all contacts
module.exports = router;
    
