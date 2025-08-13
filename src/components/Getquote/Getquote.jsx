import React, { useState, useEffect } from 'react';
import 'animate.css';
import { postGetquoteForm } from '../../Pages/Services/Api';

const PHONE_RE = /^[0-9()\-\+ ]{7,15}$/;

const Getquote = ({ selectedProduct, onClose }) => {
  const [formData, setFormData] = useState({
    productName: '',
    quantity: '',
    name: '',
    email: '',
    phone: '',
    company: '',
    lineSize: '',
    application: '',
    applicationMedia: '',
    opTemperature: '',
    opPressure: '',
    flowRange: '',
    message: ''
  });

  const [submittedData, setSubmittedData] = useState(null);
  const [confirmed, setConfirmed] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (selectedProduct) {
      setFormData(prev => ({
        ...prev,
        productName: selectedProduct.name || '',
        quantity: prev.quantity || '1'
      }));
    }
  }, [selectedProduct]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  // Step 1: Review screen
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    // lightweight client validation
    if (!formData.name.trim() || !formData.email.trim()) {
      return setError('Name and Email are required.');
    }
    if (formData.phone && !PHONE_RE.test(formData.phone.trim())) {
      return setError('Invalid phone. Use 7–15 chars: digits, space, + ( ) -');
    }
    setSubmittedData(formData);
  };

  // Build backend-friendly payload (aligns with your mailer getQuote case)
 const buildPayload = (d) => ({
  productName: d.productName.trim(),   // backend expects productName
  name: d.name.trim(),
  email: d.email.trim(),
  phone: d.phone.trim(),               // backend expects phone (not number)
  quantity: d.quantity,                // ok to send as string; server casts/saves
  company: d.company.trim(),
  lineSize: d.lineSize.trim(),
  application: d.application.trim(),
  applicationMedia: d.applicationMedia.trim(),
  opTemperature: d.opTemperature.trim(),
  opPressure: d.opPressure.trim(),
  flowRange: d.flowRange.trim(),
  message: d.message.trim()
});


  // Step 2: Confirm & Submit -> actually POST to backend
  const handleFinalSubmit = async () => {
    if (!submittedData) return;
    setSubmitting(true);
    setError(null);

    try {
      const payload = buildPayload(submittedData);
      const res = await postGetquoteForm(payload); // e.g., POST /api/getquote

      if (res.status === 200 || res.status === 201) {
        setConfirmed(true);
        // clear & close after a moment
        setTimeout(() => {
          setConfirmed(false);
          setSubmittedData(null);
          setFormData({
            productName: '',
            quantity: '',
            name: '',
            email: '',
            phone: '',
            company: '',
            lineSize: '',
            application: '',
            applicationMedia: '',
            opTemperature: '',
            opPressure: '',
            flowRange: '',
            message: ''
          });
          onClose && onClose();
        }, 1500);
      } else {
        setError(res?.data?.message || 'Failed to submit quote request. Please try again.');
      }
    } catch (err) {
      console.error('Error submitting quote request:', err);
      setError(err?.response?.data?.message || 'An error occurred. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="modal show fade d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content animate__animated animate__fadeInUp">
          <div className="modal-header">
            <h5 className="modal-title">Get a Quote</h5>
            <button type="button" className="btn-close" onClick={onClose} />
          </div>

          <div className="modal-body">
            {error && <div className="alert alert-danger">{error}</div>}

            {/* Form */}
            {!confirmed && !submittedData && (
              <form onSubmit={handleSubmit} noValidate>
                {[
                  'productName','quantity','name','email','phone','company',
                  'lineSize','application','applicationMedia','opTemperature',
                  'opPressure','flowRange'
                ].map((field, idx) => (
                  <div className="mb-3" key={idx}>
                    <label htmlFor={field} className="form-label fw-semibold">
                      {field.replace(/([A-Z])/g, ' $1')}
                    </label>
                    <input
                      type={
                        field === 'email' ? 'email'
                        : field === 'quantity' ? 'number'
                        : 'text'
                      }
                      className="form-control"
                      id={field}
                      value={formData[field]}
                      onChange={handleChange}
                      placeholder={`Enter ${field.replace(/([A-Z])/g, ' $1')}`}
                      required={['productName','quantity','name','email'].includes(field)}
                      readOnly={field === 'productName'}
                    />
                  </div>
                ))}

                <div className="mb-3">
                  <label htmlFor="message" className="form-label fw-semibold">Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your message"
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-lg w-100">
                  Review &amp; Confirm
                </button>
              </form>
            )}

            {/* Review table */}
            {submittedData && !confirmed && (
              <div className="animate__animated animate__fadeIn">
                <h5 className="mb-3 text-center">Confirm Your Details</h5>
                <table className="table table-striped table-hover">
                  <tbody>
                    {Object.entries(submittedData).map(([key, value]) => (
                      <tr key={key}>
                        <th style={{ textTransform: 'capitalize', width: '30%' }}>
                          {key.replace(/([A-Z])/g, ' $1')}
                        </th>
                        <td>{String(value)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="text-center mt-3 d-flex gap-2 justify-content-center">
                  <button
                    className="btn btn-secondary px-4"
                    onClick={() => setSubmittedData(null)}
                    disabled={submitting}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-success btn-lg px-4"
                    onClick={handleFinalSubmit}
                    disabled={submitting}
                  >
                    {submitting ? 'Submitting…' : 'Confirm & Submit'}
                  </button>
                </div>
              </div>
            )}

            {/* Success */}
            {confirmed && (
              <div className="alert alert-success text-center animate__animated animate__fadeIn">
                ✅ Thank you! Your quote request has been submitted successfully.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Getquote;
