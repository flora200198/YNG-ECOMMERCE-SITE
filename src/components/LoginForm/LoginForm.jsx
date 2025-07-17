import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const validatePassword = (password) => password.length >= 6;

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic password validation
    if (!validatePassword(formData.password)) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    // Simulate successful login (replace with real auth if needed)
    localStorage.setItem('isLoggedIn', true);

    // Handle pending "Add to Cart" item (if any)
    const pendingProduct = JSON.parse(localStorage.getItem('pendingAddToCart'));
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (pendingProduct) {
      const exists = cart.find((item) => item.id === pendingProduct.id);
      const updatedCart = exists
        ? cart.map((item) =>
            item.id === pendingProduct.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...cart, { ...pendingProduct, quantity: 1 }];

      localStorage.setItem('cart', JSON.stringify(updatedCart));
      localStorage.removeItem('pendingAddToCart');
    }

    // Redirect to the intended page or default to home
    const redirectPath = localStorage.getItem('redirectAfterLogin') || '/';
    localStorage.removeItem('redirectAfterLogin');
    navigate(redirectPath);
  };

  return (
    <div className="container col-md-6 p-4 border rounded shadow-sm bg-white mt-5">
      <h2 className="mb-3">Login to Continue</h2>

      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            id="email"
            type="email"
            className="form-control"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password:</label>
          <input
            id="password"
            type="password"
            className="form-control"
            required
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
