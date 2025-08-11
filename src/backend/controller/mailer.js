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
async function sendAdminEmail(userData) {
  const { name, email, number, district, course, specialization, join } = userData;

  return transporter.sendMail({
    from: `"Enquiry Form" <${process.env.SMTP_USER}>`,
    to: process.env.ADMIN_EMAIL,
    subject: 'New Registration',
    html: `
      <h2>New User Registered</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${number}</p>
      <p><strong>District:</strong> ${district}</p>
      <p><strong>Course:</strong> ${course}</p>
      <p><strong>Specialization:</strong> ${specialization || 'N/A'}</p>
      <p><strong>Immediate Join:</strong> ${join ? 'Yes' : 'No'}</p>
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
    subject: 'Thank You for Registering!',
    html: `
      <h3>Hi ${name},</h3>
      <p>Thanks for registering for the ${course} training program.</p>
      <p>We will contact you shortly with more details.</p>
      <br />
      <p>Best regards,<br />RLT Tri Force Academy </p><br /> <p>Phone: +91 9479 999 999</p>
    `
  });
}

module.exports = {
  sendAdminEmail,
  sendUserEmail
};