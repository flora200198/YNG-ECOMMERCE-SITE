import React, { useState } from "react";
import { postContactForm } from "../../Pages/Services/Api";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    mobile: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [ok, setOk] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setError(null);
    setOk(false);

    const payload = {
      name: formData.name.trim(),
      address: formData.address.trim(),
      number: formData.mobile.trim(), // server expects "number"
      message: formData.message.trim(),
    };

    try {
      const res = await postContactForm(payload);
      if (res.status === 200 || res.status === 201) {
        setOk(true);
        setFormData({ name: "", address: "", mobile: "", message: "" });
        console.log("Contact form submitted successfully:", res.data);
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
    <div className="container-fluid py-5">
      <div className="row">
        {/* Left: Contact Form */}
        <div className="col-md-6 bg-light d-flex align-items-center py-5">
          <div style={{ width: "80%", maxWidth: "500px", margin: "auto" }}>
            <h2 className="mb-3 text-center">Contact Us</h2>

            {ok && <div className="alert alert-success">Thanks! We received your message.</div>}
            {error && <div className="alert alert-danger">{error}</div>}

            <form onSubmit={handleSubmit} noValidate>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="address" className="form-label">Address</label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  className="form-control"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="mobile" className="form-label">Mobile Number</label>
                <input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  className="form-control"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-control"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>

        {/* Right: Company Info */}
        <div className="col-md-6 bg-white d-flex align-items-center py-5">
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
