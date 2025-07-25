import React from 'react';

const ContactForm = () => {
  return (
    <div className="container-fluid py-5">
      <div className="row">
        {/* Left Side: Contact Form */}
        <div className="col-md-6 bg-light">
          <div style={{ width: "80%", maxWidth: "500px", margin: "auto" }}>
            <h2 className="mb-4 text-center">Contact Us</h2>
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
              <button type="submit" className="btn btn-primary w-100">Submit</button>
            </form>
          </div>
        </div>

        {/* Right Side: Company Info */}
        <div className="col-md-6 bg-white">
          <div className="ms-5 mt-4" style={{ maxWidth: "500px" }}>
            <h2 className="mb-4">Our Company</h2>
            <p><strong>YNG Infra Pvt Ltd</strong></p>
            <p>1234 Industrial Estate Road,<br />Chennai, Tamil Nadu, India - 600001</p>
            <p><strong>Email:</strong> yng@infra.com</p>
            <p><strong>Phone:</strong> +91 98765 43210</p>
            <p><strong>Working Hours:</strong> Mon–Sat, 9:00 AM – 6:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
