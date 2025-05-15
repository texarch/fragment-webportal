// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './logo2.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Fragment Logo" />
        </Link>
      </div>

      <div className="nav-links-wrapper">
        <div className="nav-links">
          <Link to="/about">About</Link>
          <Link to="/pricing">Pricing</Link>
          {/* <Link to="/blog">Blog</Link> */}
          <Link to="/contact">Contact</Link>
          <Link to="/demo">Demo</Link>
        </div>
      </div>

      <div className="auth-buttons">
        <Link to="/signup"><button className="signup">Sign Up</button></Link>
        <Link to="/login"><button className="login">Log In</button></Link>
      </div>
    </nav>
  );
};

export default Navbar;
