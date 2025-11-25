import React from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  // Highlight Calibration Services when any of its pages are active
  const isCalibrationActive = location.pathname.startsWith("/calibration/");

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">

        <Link className="navbar-brand" to="/">
          <img
            src="/assets/Logo.png"
            alt="Company Logo"
            style={{ height: '80px', borderRadius: '6px' }}
            className="company-logo"
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/business">Our Business</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/products">Products</NavLink>
            </li>

            {/* ===================== CALIBRATION DROPDOWN ===================== */}
            <li className="nav-item dropdown">
              <Link
                className={`nav-link dropdown-toggle ${isCalibrationActive ? "active-page" : ""}`}
                to="#"
                id="calibrationDropdown"
                role="button"
                data-bs-toggle="dropdown"
              >
                Calibration Services
              </Link>

              <ul className="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item" to="/calibration/calibration-services">
                    Calibration Services
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/calibration/electro-technical-calibration">
                    Electro-Technical Calibration
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/calibration/thermal-calibration">
                    Thermal Calibration
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/calibration/mechanical-calibration">
                    Mechanical Calibration
                  </NavLink>
                </li>
              </ul>
            </li>
            {/* ================================================================ */}

            <li className="nav-item">
              <NavLink className="nav-link" to="/blog">Blog</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/shop">Get Quote</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/join">Join Us</NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
