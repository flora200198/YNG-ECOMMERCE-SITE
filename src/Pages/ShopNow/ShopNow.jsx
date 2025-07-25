import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCheckout } from '../Context/Context';
import Cart from '../../components/Cart/Cart';
import Checkout from '../CheckOut/Checkout';

const ShopNow = () => {
  const navigate = useNavigate();
  const { products } = useCheckout();
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem('cart')) || []);
  const [isLoggedIn, setIsLoggedIn] = useState(() => JSON.parse(localStorage.getItem('isLoggedIn')) || false);


  // Keep cart updated in localStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Sync isLoggedIn state with localStorage on mount
  useEffect(() => {
    const loggedInStatus = JSON.parse(localStorage.getItem('isLoggedIn')) || false;
    setIsLoggedIn(loggedInStatus);
  }, []);

  const getQuantity = (productId) => {
    const item = cart.find((item) => item.id === productId);
    return item ? item.quantity : 0;
  };

  const addToCart = (product) => {
    if (!isLoggedIn) {
      localStorage.setItem('redirectAfterLogin', '/shop');
      localStorage.setItem('pendingAddToCart', JSON.stringify(product));
      navigate('/login');
      return;
    }

    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      setCart(cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const increment = (productId) => {
    setCart(cart.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decrement = (productId) => {
    setCart(cart
      .map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0)
    );
  };

  const viewCart = () => {
    if (!isLoggedIn) {
      localStorage.setItem('redirectAfterLogin', '/cart');
      navigate('/login');
    } else {
      navigate('/cart');
    }
  };

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Shop Now</h1>
        <button className="btn btn-outline-primary" onClick={viewCart}>
          View Cart ({cart.reduce((sum, item) => sum + item.quantity, 0)})
        </button>
      </div>
      <div className="row">
        {products.map((product) => {
          const quantity = getQuantity(product.id);
          return (
            <div className="col-md-4 mb-4" key={product.id}>
              <div className="card h-100 shadow-sm">
                <img src={product.image} className="card-img-top" alt={product.name} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="fw-bold mb-2">₹{product.price}</p>

                  {quantity === 0 ? (
                    <button className="btn btn-primary mt-auto" onClick={() => addToCart(product)}>
                      <i className="bi bi-cart-plus me-2"></i>Add to Cart
                    </button>
                  ) : (
                    <div className="d-flex justify-content-between align-items-center mt-auto">
                      <button className="btn btn-outline-secondary" onClick={() => decrement(product.id)}>-</button>
                      <span className="mx-3">{quantity}</span>
                      <button className="btn btn-outline-secondary" onClick={() => increment(product.id)}>+</button>
                    </div>
                  )}
                  
                </div>
              </div>
            </div>
          );
        })} 
      </div>

    </div>
  );
};

export default ShopNow;
