import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const navigate = useNavigate();

  const SubTotal = ()=>{
   const subtotal = cart.reduce((acc, item)=> acc+item.price * item.quantity,0);
   const gst = subtotal*0.18;
    const cgst = subtotal*0.09;
   const sgst = subtotal*0.23;
  //  const delivery = 0;
   const freight = 0;
   const packing = subtotal * 0.02;
    const Total = subtotal + gst + cgst + sgst + freight + packing;  
    return {subtotal, gst, cgst, sgst, Total, freight, packing}
  }
   const { subtotal, gst, cgst,sgst, Total } = SubTotal();
  const checkout = () => {
    // Implement checkout logic here    
    navigate('/checkout');
  };


  return (
    <div className="container py-5">
      <div className="mb-4 d-flex justify-content-between align-items-center">
      <h2 className="mb-4 d-flex ">Your Cart</h2>
      <button className="btn btn-outline-primary" onClick={checkout}>Proceed to pay</button>
      </div>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="row">
          {cart.map((item, idx) => (
            <div key={idx} className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <img src={item.image} className="card-img-top" alt={item.name} />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.description}</p>
                  <strong>₹{item.price * item.quantity}</strong>
                  <strong>{SubTotal}</strong>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="col-12 mt-4">
        <h5>Subtotal: ₹{subtotal.toFixed(2)}</h5> 
        <h5>GST (18%): ₹{gst.toFixed(2)}</h5>
        <h5>CGST (9%): ₹{cgst.toFixed(2)}</h5>
        <h5>SGST (9%): ₹{sgst.toFixed(2 )} </h5>
        <h5>Freight: </h5>
        <h5>Packing and Forwarding: </h5>
        <h4>Total: ₹{Total.toFixed(2)}</h4>   
        <button className="btn btn-outline-primary" onClick={checkout}>Proceed to pay</button>
      </div>
    </div>
  );
};

export default Cart;
