import React from 'react';

const ContactForm = () => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" className="form-control" id="name" required />
      </div>
      <div className="mb-3">
        <label htmlFor="address" className="form-label">Address</label>
        <input type="text" className="form-control" id="address" required />
      </div>
      <div className="mb-3">
        <label htmlFor="mobile" className="form-label">Mobile Number</label>
        <input type="tel" className="form-control" id="mobile" required />
      </div>
      <div className="mb-3">
        <label htmlFor="message" className="form-label">Message</label>
        <textarea className="form-control" id="message" rows="3" required></textarea>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default ContactForm;
