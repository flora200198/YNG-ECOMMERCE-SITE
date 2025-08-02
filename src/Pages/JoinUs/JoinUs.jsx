import React from 'react';

const JoinUs = () => {
  return (
    <div className="container-fluid py-5 bg-light">
      <div className="row justify-content-center">
        {/* Left Side: Join Us Form */}
        <div className="col-md-6 d-flex align-items-center justify-content-center py-4">
          <div className="p-4 shadow-sm bg-white rounded w-100" style={{ maxWidth: "500px" }}>
            <h2 className="text-center mb-4">Join Us</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="vendorName" className="form-label">Vendor Name</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="vendorName" 
                  placeholder="Enter your name" 
                  required 
                />
              </div>
              <div className="mb-3">
                <label htmlFor="company" className="form-label">Company Name</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="company" 
                  placeholder="Enter company name" 
                  required 
                />
              </div>
              <div className="mb-3">
                <label htmlFor="contact" className="form-label">Contact Information</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="contact" 
                  placeholder="Email or phone" 
                  required 
                />
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary w-100">Submit</button>
              </div>
            </form>
          </div>
        </div>

        {/* Right Side: Company Info */}
        <div className="col-md-6 d-flex align-items-center  py-5">
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
