import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-light text-dark pt-5 border-top border-golden">
      <div className="container">
        <div className="row">

          {/* Company Info */}
          <div className="col-md-4 mb-4">
            <img src="https://placehold.co/150x50" alt="Company Logo" className="mb-3" />
            <p>
              [Your Company Name] is a global provider of industrial automation and precision measurement instruments.
              Trusted for innovation, accuracy, and reliability.
            </p>
            {/* Social Links */}
            <div className="d-flex gap-3 mt-3">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-golden fs-5">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-golden fs-5">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="mailto:info@company.com" className="text-golden fs-5">
                <i className="bi bi-envelope-fill"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-golden fs-5">
                <i className="bi bi-twitter-x"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h5 className="text-golden mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-dark text-decoration-none">Home</Link></li>
              <li><Link to="/products" className="text-dark text-decoration-none">Products</Link></li>
              <li><Link to="/about" className="text-dark text-decoration-none">About</Link></li>
              <li><Link to="/blog" className="text-dark text-decoration-none">Blog</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-4">
            <h5 className="text-golden mb-3">Contact Us</h5>
            <p><i className="bi bi-geo-alt-fill me-2"></i>123 Industrial Lane, Tech City, Country</p>
            <p><i className="bi bi-telephone-fill me-2"></i>+91 98765 43210</p>
            <p><i className="bi bi-envelope-fill me-2"></i>info@company.com</p>
          </div>
        </div>
      </div>

      <div className="bg-dark text-center text-white py-3 mt-4">
        © {new Date().getFullYear()} [Your Company Name]. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
