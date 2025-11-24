import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCheckout } from '../Context/Context';
import './ShopNow.css';
import Getquote from '../../components/Getquote/Getquote';

const ShopNow = () => {
  const navigate = useNavigate();
  const { products, setSelectedProduct } = useCheckout(); // Get context function
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem('cart')) || []);
  const [isLoggedIn, setIsLoggedIn] = useState(() => JSON.parse(localStorage.getItem('isLoggedIn')) || false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState(null); // For GetQuote popup only

  const categories = ['All', 'Flow', 'Pressure', 'Level', 'Analyzer', 'Air Quality', 'Water Quality', 'Temperature'];

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
      setCart(cart.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const increment = (productId) => {
    setCart(cart.map((item) => (item.id === productId ? { ...item, quantity: item.quantity + 1 } : item)));
  };

  const decrement = (productId) => {
    setCart(
      cart
        .map((item) => (item.id === productId ? { ...item, quantity: item.quantity - 1 } : item))
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
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleCardClick = (product) => {
    setSelectedProduct(product); // Save product to context
    navigate('/product-details'); // Navigate to details page
  };

  return (
    <div className="container py-5">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Shop Now</h1>
        {/* <button className="btn btn-outline-primary" onClick={viewCart}>
          View Cart ({cart.reduce((sum, item) => sum + item.quantity, 0)})
        </button> */}
      </div>

      {/* Search and Filter */}
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

      {/* Products */}
      <div className="row">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => {
            const quantity = getQuantity(product.id);
            return (
              <div className="col-md-4 mb-4" key={product.id}>
                {/* CLICKABLE CARD */}
                <div
                  className="card h-100 shadow-sm product-card"
                  onClick={() => handleCardClick(product)}
                  style={{ cursor: 'pointer' }}
                >
                  <img src={product.image} className="card-img-top product-image" alt={product.name} />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description}</p>
                     <button
                            className="btn btn-primary"
                            onClick={(e) => { e.stopPropagation(); setQuoteProduct(product); setShowQuoteForm(true); }}
                          >
                            Get Quote
                          </button>
                    {/* <p className="fw-bold mb-2">₹{product.price}</p> */}
                    
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center">No products found.</p>
        )}
      </div>

      {showQuoteForm && <Getquote selectedProduct={quoteProduct} onClose={() => setShowQuoteForm(false)} />}
    </div>
  );
};

export default ShopNow;