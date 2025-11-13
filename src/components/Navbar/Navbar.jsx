import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src="/assets/Logo.png"  // Corrected image path if placed in public/assets
            alt="Company Logo"
            style={{ height: '80px' , borderRadius: '6px'}}
            className="company-logo"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/business">Our Business</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/products">Products</Link></li>
                <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="calibrationDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Calibration Services
              </Link>
              <ul className="dropdown-menu" aria-labelledby="calibrationDropdown">
                <li>
                  <Link className="dropdown-item" to="/calibration/calibration-services">
                    Calibration Services
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/calibration/electro-technical-calibration">
                    Electro-Technical Calibration
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/calibration/thermal-calibration">
                    Thermal Calibration
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/calibration/mechanical-calibration">
                    Mechanical Calibration
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item"><Link className="nav-link" to="/blog">Blog</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/shop">Get Quote</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">Contact Us</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/join">Join Us</Link></li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
