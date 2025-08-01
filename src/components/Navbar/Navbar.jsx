import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg" >
      <div className="container">
        <Link className="navbar-brand text-white" to="/">
          <img src="./assets/Logo.png" alt="Company Logo" style={{ height: '80px' }} className='company-logo' />
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
            <li className="nav-item"><Link className="nav-link text-white" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to="/products">Products</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to="/blog">Blog</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to="/shop">Shop Now</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to="/contact">Contact Us</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to="/join">Join Us</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
