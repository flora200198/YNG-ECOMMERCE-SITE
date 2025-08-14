import React, { useState } from "react";
import { postJoinForm } from "../../Pages/Services/Api";

const JoinUs = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    vendor_name: "",
    company_name: "",
    number: "",
  });
  const [error, setError] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setError(null);
    setSubmitted(false);

    const payload = {
      vendor_name: formData.vendor_name.trim(),
      company_name: formData.company_name.trim(),
      number: formData.number.trim(),
    };

    try {
      const res = await postJoinForm(payload);
      if (res.status === 201 || res.status === 200) {
        setSubmitted(true);
        setFormData({ vendor_name: "", company_name: "", number: "" });
        // e.currentTarget.reset(); // optional
        console.log("Join Us form submitted successfully:", res.data);
      } else {
        setError("Failed to submit form. Please try again.");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      setError(err?.response?.data?.message || "An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid py-5 bg-light">
      <div className="row justify-content-center">
        <div className="col-md-6 d-flex align-items-center justify-content-center py-4">
          <div className="p-4 shadow-sm bg-white rounded w-100" style={{ maxWidth: 500 }}>
            <h2 className="text-center mb-3">Join Us</h2>

            {submitted && (
              <div className="alert alert-success py-2">Form submitted successfully!</div>
            )}
            {error && <div className="alert alert-danger py-2">{error}</div>}

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
                  value={formData.vendor_name}
                  onChange={handleChange}
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
                  value={formData.company_name}
                  onChange={handleChange}
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
                  required
                  value={formData.number}
                  onChange={handleChange}
                />

              </div>

              <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>

        <div className="col-md-6 d-flex align-items-center py-5">
          <div className="ms-4 mt-4" style={{ maxWidth: 500 }}>
            <h2 className="mb-3">Our Company</h2>
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
