import React, { useState } from "react";
import { postJoinForm } from "../../Pages/Services/Api";

const JoinUs = () => {
  const [loading, setLoading] = useState(false);

 const handleSubmit = async (e) => {
  e.preventDefault();

  const form = e.currentTarget;               
  const data = Object.fromEntries(new FormData(form));

  const formData = {
    vendor_name: (data.vendor_name || "").trim(),
    company_name: (data.company_name || "").trim(),
    number: (data.number || "").trim(),
  };

  try {
    const res = await postJoinForm(formData);
    console.log("Join response:", res?.data);
    alert("Form submitted successfully!");
    form.reset();
    console.log("Form reset successfully");
  } catch (err) {
    console.error("Error submitting form:", err?.response?.data || err.message);
    alert(err?.response?.data?.message || "There was an error submitting the form.");
  }
};


  return (
    <div className="container-fluid py-5 bg-light">
      <div className="row justify-content-center">
        <div className="col-md-6 d-flex align-items-center justify-content-center py-4">
          <div className="p-4 shadow-sm bg-white rounded w-100" style={{ maxWidth: "500px" }}>
            <h2 className="text-center mb-4">Join Us</h2>

            <form onSubmit={handleSubmit} noValidate>
              <div className="mb-3">
                <label htmlFor="vendor_name" className="form-label">Vendor Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="vendor_name"
                  name="vendor_name"
                  placeholder="Enter your name"
                  autoComplete="name"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="company_name" className="form-label">Company Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="company_name"
                  name="company_name"
                  placeholder="Enter company name"
                  autoComplete="organization"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="number" className="form-label">Contact Number</label>
                <input
                  type="tel"
                  className="form-control"
                  id="number"
                  name="number"
                  placeholder="Phone"
                  inputMode="tel"
                  pattern="^[0-9+\-\s()]{7,15}$"
                  required
                />
              </div>

              <div className="text-center">
                <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="col-md-6 d-flex align-items-center py-5">
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
