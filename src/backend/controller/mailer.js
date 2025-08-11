// utils/mailer.js
const nodemailer = require('nodemailer');
require('dotenv').config();

// Setup transporter once
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    }
});

// Send email to admin
async function sendAdminEmail(contactData) {
    const { name, address, number, message } = contactData;


    return transporter.sendMail({
        from: `"Contact Form" <${process.env.SMTP_USER}>`,
        to: process.env.ADMIN_EMAIL,
        subject: 'YNG Infra New Contact Enquiry',
        html: `
      <h2>New contact Enquiry</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Address:</strong> ${address}</p>
      <p><strong>Phone:</strong> ${number}</p>
      <p><strong>Message:</strong> ${message}</p>
    `
    });
}

// Send thank-you email to user
async function sendUserEmail(userData) {
    const { name, email, course } = userData;

    return transporter.sendMail({
        from: `"YNG Infra" <${process.env.SMTP_USER}>`,
        to: email,
        replyTo: process.env.ADMIN_EMAIL,
        subject: 'We’ve received your enquiry — YNG Infra',
        html: `
      <h3>Hi ${name},</h3>
      <p>Thanks for contacting <strong>YNG Infra</strong>. We’ve received your message and our team will get back to you shortly.</p>
      <p>If you need to add anything, just reply to this email.</p>
      <br />
      <p>Best regards,<br />YNG Infra</p>
      <p>Phone: +91 9479 999 999</p>
    `
    });
}

module.exports = {
    sendAdminEmail,
    sendUserEmail
};