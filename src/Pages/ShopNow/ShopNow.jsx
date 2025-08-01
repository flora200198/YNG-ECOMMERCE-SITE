import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCheckout } from '../Context/Context';
import './ShopNow.css';

const ShopNow = () => {
  const navigate = useNavigate();
  const { products } = useCheckout();
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem('cart')) || []);
  const [isLoggedIn, setIsLoggedIn] = useState(() => JSON.parse(localStorage.getItem('isLoggedIn')) || false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Flow',
    'Pressure',
    'Level',
    'Analyzer',
    'Air Quality',
    'Water Quality',
    'Temperature'
  ];

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

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

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === 'All' || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (

    <div className="container py-5">
      {/* Header with Search and Cart */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Shop Now</h1>
        <button className="btn btn-outline-primary" onClick={viewCart}>
          View Cart ({cart.reduce((sum, item) => sum + item.quantity, 0)})
        </button>
      </div>

      {/* Search and Category Filter */}
      <div className="row mb-4">
        <div className="col-md-6 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="col-md-6 mb-2">
          <select
            className="form-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Carousel for Offers and Feedback - MOVED HERE */}
      <div id="offersCarousel" className="carousel slide mb-4" data-bs-ride="carousel" data-bs-interval="3000">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./assets/landing.png" className="d-block w-100" alt="Offer 1" style={{ height: '30vh', objectFit: 'cover' }} />
            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-2">
              <h5>Special Offer!</h5>
              <p>Get 20% off on Flow Meters this month.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="./assets/landing.png" className="d-block w-100" alt="Feedback 1" style={{ height: '30vh', objectFit: 'cover' }} />
            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-2">
              <h5>Customer Feedback</h5>
              <p>"Excellent quality instruments and prompt support!" - ABC Industries</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="./assets/landing.png" className="d-block w-100" alt="Offer 2" style={{ height: '30vh', objectFit: 'cover' }} />
            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-2">
              <h5>New Launch!</h5>
              <p>Introducing our next-gen Smart Level Transmitter.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#offersCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#offersCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      {/* Products */}
      <div className="row">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => {
            const quantity = getQuantity(product.id);
            return (
              <div className="col-md-4 mb-4" key={product.id}>
                <div className="card h-100 shadow-sm">
                  <img
                    src={product.image}
                    className="card-img-top product-image"
                    alt={product.name}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description}</p>
                    <p className="fw-bold mb-2">₹{product.price}</p>

                    {quantity === 0 ? (
                      <div className="d-flex justify-content-between align-items-center mt-auto">
                        <button className="btn btn-primary mt-auto" onClick={() => addToCart(product)}>
                          <i className="bi bi-cart-plus me-2"></i>Add to Cart
                        </button>
                        <button className="btn btn-primary mt-auto">Get Quote</button>
                      </div>
                    ) : (
                      <div className="d-flex justify-content-between align-items-center mt-auto">
                        <button className="btn btn-outline-secondary" onClick={() => decrement(product.id)}>-</button>
                        <span className="mx-3">{quantity}</span>
                        <button className="btn btn-outline-secondary" onClick={() => increment(product.id)}>+</button>
                        <button className="btn btn-primary mt-auto">Get Quote</button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center">No products found.</p>
        )}
      </div>
    </div>
  );


};

export default ShopNow;
