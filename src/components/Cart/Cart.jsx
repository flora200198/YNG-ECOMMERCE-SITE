import React from 'react';

const Cart = () => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  return (
    <div className="container py-5">
      <h2 className="mb-4">Your Cart</h2>
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
                  <strong>₹{item.price}</strong>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
