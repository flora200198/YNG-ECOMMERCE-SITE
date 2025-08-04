import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <>
  <footer className="custom-footer text-white pt-5">
    <div className="container">
      <div className="row">
        {/* Company Info */}
        <div className="col-md-4 mb-4">
          <img src="./assets/Logo.png" alt="Company Logo" className="mb-3" style={{ height: '60px', background:'white', borderRadius:'5px' }} />
          <p>
            YNG infra is a global provider of industrial automation and precision measurement instruments.
            Trusted for innovation, accuracy, and reliability.
          </p>
          {/* Social Links */}
          <div className="d-flex gap-3 mt-3">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-white fs-5">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-white fs-5">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="mailto:info@company.com" className="text-white fs-5">
              <i className="bi bi-envelope-fill"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-white fs-5">
              <i className="bi bi-twitter-x"></i>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="col-md-4 mb-4">
          <h5 className="text-white mb-3">Quick Links</h5>
          <ul className="list-unstyled">
            <li><Link to="/" className="text-white text-decoration-none">Home</Link></li>
            <li><Link to="/products" className="text-white text-decoration-none">Products</Link></li>
            <li><Link to="/about" className="text-white text-decoration-none">About</Link></li>
            <li><Link to="/blog" className="text-white text-decoration-none">Blog</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="col-md-4 mb-4">
          <h5 className="text-white mb-3">Contact Us</h5>
          <p><i className="bi bi-geo-alt-fill me-2"></i>123 Industrial Lane, Tech City, Country</p>
          <p><i className="bi bi-telephone-fill me-2"></i>+91 98765 43210</p>
          <p><i className="bi bi-envelope-fill me-2"></i>info@company.com</p>
        </div>
      </div>
    </div>
  </footer>

  {/* Separate Black Bar */}
  <div className="footer-bottom">
    © {new Date().getFullYear()} YNG Infra. All rights reserved.
  </div>
</>
  );
};
export default Footer;
