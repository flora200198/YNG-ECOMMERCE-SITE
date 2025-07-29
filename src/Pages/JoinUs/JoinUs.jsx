import React from 'react';

const JoinUs = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        {/* Left Side: Form */}
        <div className="col-md-6">
          <h1>Join Us</h1>
          <form>
            <div className="mb-3">
              <label htmlFor="vendorName" className="form-label">Vendor Name</label>
              <input type="text" className="form-control" id="vendorName" required />
            </div>
            <div className="mb-3">
              <label htmlFor="company" className="form-label">Company Name</label>
              <input type="text" className="form-control" id="company" required />
            </div>
            <div className="mb-3">
              <label htmlFor="contact" className="form-label">Contact Information</label>
              <input type="text" className="form-control" id="contact" required />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>

        {/* Right Side: Company Info */}
        <div className="col-md-6 bg-white">
          <div className="ms-4 mt-4" style={{ maxWidth: "500px" }}>
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

export default JoinUs;
