// utils/mailer.js
const nodemailer = require('nodemailer');
require('dotenv').config();

/** ---------- Transport ---------- */
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS, // Gmail App Password (recommended)
  },
});

/** ---------- Helpers ---------- */
const safe = (v) => (v ?? '').toString(); // avoid undefined in templates

/** ---------- Admin email (contact | join | getQuote) ---------- */
/**
 * @param {'contact'|'join'|'getQuote'} formType
 * @param {object} data
 */
async function sendAdminEmail(formType, data = {}) {
  let subject = '';
  let html = '';

  switch (formType) {
    case 'contact': {
      const name    = safe(data.name);
      const address = safe(data.address);
      const number  = safe(data.number);
      const message = safe(data.message);
      subject = 'YNG Infra — New Contact Form Submission';
      html = `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Phone:</strong> ${number}</p>
        <p><strong>Message:</strong> ${message}</p>
      `;
      break;
    }

    case 'join': {
      const vendor_name  = safe(data.vendor_name);
      const company_name = safe(data.company_name);
      const number       = safe(data.number);
      const email        = safe(data.email);
      subject = 'YNG Infra — New Join Us Submission';
      html = `
        <h2>New Join Us Submission</h2>
        <p><strong>Vendor Name:</strong> ${vendor_name}</p>
        <p><strong>Company Name:</strong> ${company_name}</p>
        <p><strong>Phone:</strong> ${number}</p>
        ${email ? `<p><strong>Email:</strong> ${email}</p>` : ''}
      `;
      break;
    }

    case 'getQuote': {
      const name    = safe(data.name);
      const email   = safe(data.email);
      const service = safe(data.service);
      const details = safe(data.details);
      const number  = safe(data.number); // optional phone if you collect it
      subject = 'YNG Infra — New Get Quote Request';
      html = `
        <h2>New Get Quote Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${number ? `<p><strong>Phone:</strong> ${number}</p>` : ''}
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Details:</strong> ${details}</p>
      `;
      break;
    }

    default:
      throw new Error(`Unknown form type: ${formType}`);
  }

  return transporter.sendMail({
    from: `"YNG Infra Forms" <${process.env.SMTP_USER}>`,
    to: process.env.ADMIN_EMAIL, // ensure this is set
    subject,
    html,
  });
}

/** ---------- User thank-you email (optional) ---------- */
/**
 * @param {object} data should contain { email } and a friendly name field
 * @param {'contact'|'join'|'getQuote'} formType
 */
async function sendUserEmail(data = {}, formType) {
  const email = safe(data.email);
  if (!email) return; // no recipient → skip politely

  // Prefer 'name', else fall back to join's vendor_name, else "there"
  const name =
    safe(data.name) ||
    safe(data.vendor_name) ||
    'there';

  let intro = 'Thanks for reaching out to us.';
  if (formType === 'contact')  intro = 'Thanks for contacting us via our contact form.';
  if (formType === 'join')     intro = 'Thanks for your interest in joining us.';
  if (formType === 'getQuote') intro = 'Thanks for requesting a quote from us.';

  return transporter.sendMail({
    from: `"YNG Infra" <${process.env.SMTP_USER}>`,
    to: email,
    replyTo: process.env.ADMIN_EMAIL,
    subject: `We’ve received your ${formType} submission — YNG Infra`,
    html: `
      <h3>Hi ${name},</h3>
      <p>${intro} Our team will get back to you shortly.</p>
      <p>If you need to add anything, just reply to this email.</p>
      <br />
      <p>Best regards,<br />YNG Infra</p>
      <p>Phone: +91 9479 999 999</p>
    `,
  });
}

module.exports = { sendAdminEmail, sendUserEmail };
