import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import GenerateInvoice from "../../components/Invoice/Invoice";
import { bottom } from "@popperjs/core";

const Checkout = () => {
  const [cartItems, setCartItems] = useState(() => {
  return JSON.parse(localStorage.getItem("cart")) || [];
});
  const navigate = useNavigate();
  
  // Sample cart items (replace with your actual state or props)
  // const cartItems = [
  //   {
  //     id: 1,
  //     title: "Product A",
  //     image: "https://via.placeholder.com/60",
  //     quantity: 2,
  //   },
  //   {
  //     id: 2,
  //     title: "Product B",
  //     image: "https://via.placeholder.com/60",
  //     quantity: 1,
  //   },
  // ];

  const [addresses, setAddresses] = useState([]);
  const [currentAddress, setCurrentAddress] = useState({
    name: "",
    phone: "",
    line1: "",
    line2: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });
  const [showForm, setShowForm] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [selectedShippingIndex, setSelectedShippingIndex] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [cardDetails, setCardDetails] = useState({ number: "", expiry: "", cvv: "" });
  const [upiDetails, setUpiDetails] = useState({ id: "", method: "Google Pay" });
  const [emiPlan, setEmiPlan] = useState("6 Months");

  const resetForm = () => {
    setCurrentAddress({
      name: "",
      phone: "",
      line1: "",
      line2: "",
      city: "",
      state: "",
      zip: "",
      country: "",
    });
    setEditingIndex(null);
    setShowForm(false);
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setCurrentAddress((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveAddress = (e) => {
    e.preventDefault();
    if (editingIndex !== null) {
      const updated = [...addresses];
      updated[editingIndex] = currentAddress;
      localStorage.setItem('addresses', JSON.stringify(currentAddress));
      setAddresses(updated);
    } else {
      setAddresses([...addresses, currentAddress]);
    }
    
    resetForm();
  };

  const handleEditAddress = (index) => {
    setCurrentAddress(addresses[index]);
    setEditingIndex(index);
    setShowForm(true);
  };

  const handleDeleteAddress = (index) => {
    const updated = addresses.filter((_, i) => i !== index);
    setAddresses(updated);
    if (selectedShippingIndex === index) {
      setSelectedShippingIndex(null);
    }
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleCardChange = (e) => {
    const { name, value } = e.target;
    setCardDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpiChange = (e) => {
    const { name, value } = e.target;
    setUpiDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    if (selectedShippingIndex === null) {
      alert("Please select a shipping address.");
      return;
    }

    navigate("/thankyou");
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {/* LEFT: Checkout Form */}
        <div className="col-md-8">
          <h2 className="mb-4">Your Cart</h2>

          {/* Address Section */}
          <div className="mb-4">
            <h4 className="mb-3">Shipping Addresses</h4>

            {addresses.map((addr, i) => (
              <div
                key={i}
                className="border rounded p-3 mb-3 d-flex justify-content-between align-items-start"
              >
                <div className="form-check">
                  <input
                    className="form-check-input me-2"
                    type="radio"
                    name="shippingAddress"
                    checked={selectedShippingIndex === i}
                    onChange={() => setSelectedShippingIndex(i)}
                  />
                  <label className="form-check-label">
                    <strong>{addr.name}</strong> <br />
                    {addr.phone} <br />
                    {addr.line1}, {addr.line2 && `${addr.line2}, `}
                    {addr.city}, {addr.state} - {addr.zip}, {addr.country}
                  </label>
                </div>
                <div className="d-flex gap-2">
                  <button className="btn btn-sm btn-light" onClick={() => handleEditAddress(i)}>🖉</button>
                  <button className="btn btn-sm btn-light" onClick={() => handleDeleteAddress(i)}>🗑️</button>
                </div>
              </div>
            ))}

            {!showForm && (
              <button
                className="btn btn-outline-primary"
                onClick={() => {
                  setCurrentAddress({
                    name: "",
                    phone: "",
                    line1: "",
                    line2: "",
                    city: "",
                    state: "",
                    zip: "",
                    country: "",
                  });
                  setEditingIndex(null);
                  setShowForm(true);
                }}
              >
                Add Address
              </button>
            )}

            {showForm && (
              <form onSubmit={handleSaveAddress} className="border p-4 rounded mt-3">
                {[
                  { label: "Full Name", name: "name" },
                  { label: "Phone Number", name: "phone", type: "tel" },
                  { label: "Address Line 1", name: "line1" },
                  { label: "Address Line 2 (Optional)", name: "line2", required: false },
                  { label: "City", name: "city" },
                  { label: "State", name: "state" },
                  { label: "ZIP/Postal Code", name: "zip" },
                  { label: "Country", name: "country" },
                ].map((field, i) => (
                  <div className="mb-3" key={i}>
                    <label className="form-label">{field.label}</label>
                    <input
                      type={field.type || "text"}
                      className="form-control"
                      name={field.name}
                      value={currentAddress[field.name]}
                      onChange={handleAddressChange}
                      required={field.required !== false}
                    />
                  </div>
                ))}
                <button type="submit" className="btn btn-success me-2">
                  {editingIndex !== null ? "Update Address" : "Save Address"}
                </button>
                <button type="button" className="btn btn-secondary" onClick={resetForm}>
                  Cancel
                </button>
              </form>
            )}
          </div>

          <form onSubmit={handleCheckout}>
            <h4 className="mb-3">Payment Method</h4>
            {["card", "upi", "emi"].map((method) => (
              <div className="form-check mb-2" key={method}>
                <input
                  className="form-check-input"
                  type="radio"
                  name="paymentMethod"
                  value={method}
                  checked={paymentMethod === method}
                  onChange={handlePaymentMethodChange}
                  id={method}
                />
                <label className="form-check-label" htmlFor={method}>
                  {method === "card" ? "Credit/Debit Card" : method.toUpperCase()}
                </label>
              </div>
            ))}

            {paymentMethod === "card" && (
              <div className="mt-3">
                <div className="mb-3">
                  <label className="form-label">Card Number</label>
                  <input type="text" className="form-control" name="number" placeholder="1234 5678 9012 3456"
                    value={cardDetails.number} onChange={handleCardChange} />
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Expiry</label>
                    <input type="text" className="form-control" name="expiry" placeholder="MM/YY"
                      value={cardDetails.expiry} onChange={handleCardChange} />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">CVV</label>
                    <input type="password" className="form-control" name="cvv" placeholder="123"
                      value={cardDetails.cvv} onChange={handleCardChange} />
                  </div>
                </div>
              </div>
            )}

            {paymentMethod === "upi" && (
              <div className="mt-3">
                <div className="mb-3">
                  <label className="form-label">UPI ID</label>
                  <input type="text" className="form-control" name="id" placeholder="example@upi"
                    value={upiDetails.id} onChange={handleUpiChange} />
                </div>
                <div className="mb-3">
                  <label className="form-label">UPI App</label>
                  <select className="form-select" name="method" value={upiDetails.method} onChange={handleUpiChange}>
                    <option>Google Pay</option>
                    <option>PhonePe</option>
                    <option>Paytm</option>
                    <option>BHIM</option>
                  </select>
                </div>
              </div>
            )}

            {paymentMethod === "emi" && (
              <div className="mt-3 mb-3">
                <label className="form-label">EMI Plan</label>
                <select className="form-select" value={emiPlan} onChange={(e) => setEmiPlan(e.target.value)}>
                  <option>3 Months</option>
                  <option>6 Months</option>
                  <option>12 Months</option>
                  <option>24 Months</option>
                </select>
              </div>
            )}

            <button type="submit" className="btn btn-primary mt-3">Checkout</button>
          </form>
        </div>

        {/* RIGHT: Cart Summary */}
        <div className="col-12 col-md-4 mt-4">
          <h4 className="mb-3">Cart Items</h4> 
          <div className="border rounded p-3" style={{ maxHeight: "400px", overflowY: "auto" , margin:"10px"}}>
            {cartItems.map((item) => (
              <div key={item.id} className="d-flex align-items-center mb-3">
                <img src={item.image} alt={item.title} width="60" height="60" className="me-3 rounded" />
                <div>
                  <div><strong>{item.name}</strong></div>
                  <div>Qty: {item.quantity}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
    </div>
  );
};

export default Checkout;
