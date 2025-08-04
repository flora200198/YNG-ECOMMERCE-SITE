import React, { useState, useEffect } from 'react';
import 'animate.css';

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

    useEffect(() => {
        if (selectedProduct) {
            setFormData((prev) => ({
                ...prev,
                productName: selectedProduct.name,
                quantity: 1
            }));
        }
    }, [selectedProduct]);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedData(formData);
    };

    const handleConfirm = () => {
        console.log('Final Submitted Data:', submittedData);
        setConfirmed(true);
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
            if (onClose) onClose();
        }, 2000);
    };

    return (
        <div className="modal show fade d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content animate__animated animate__fadeInUp">
                    <div className="modal-header">
                        <h5 className="modal-title">Get a Quote</h5>
                        <button type="button" className="btn-close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        {!confirmed && !submittedData && (
                            <form onSubmit={handleSubmit}>
                                {['productName','quantity','name','email','phone','company','lineSize','application','applicationMedia','opTemperature','opPressure','flowRange'].map((field, idx) => (
                                    <div className="mb-3" key={idx}>
                                        <label htmlFor={field} className="form-label fw-semibold">
                                            {field.replace(/([A-Z])/g, ' $1')}
                                        </label>
                                        <input
                                            type={field === 'email' ? 'email' : field === 'quantity' ? 'number' : 'text'}
                                            className="form-control"
                                            id={field}
                                            value={formData[field]}
                                            onChange={handleChange}
                                            placeholder={`Enter ${field.replace(/([A-Z])/g, ' $1')}`}
                                            required
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
                                        required
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary btn-lg w-100">Review & Confirm</button>
                            </form>
                        )}

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
                                                <td>{value}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <div className="text-center mt-3">
                                    <button className="btn btn-success btn-lg px-4" onClick={handleConfirm}>
                                        Confirm & Submit
                                    </button>
                                </div>
                            </div>
                        )}

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
