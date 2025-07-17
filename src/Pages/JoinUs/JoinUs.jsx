import React from 'react';

const JoinUs = () => {
  return (
    <div className="container">
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
        <button type="submit" className="btn btn-primary">Submit Application</button>
      </form>
    </div>
  );
};

export default JoinUs;
