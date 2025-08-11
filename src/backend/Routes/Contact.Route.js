const router = require('express').Router();
const ContactController = require('../Controllers/Contact.Controller'); 
const { validateContact } = require('../Middlewares/Contact.Middleware');
// Route to handle contact form submission
router.post('/submit', validateContact, ContactController.submitContactForm);

