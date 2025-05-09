import React from 'react';
import './Navbar.css';
import logo from './logo2.png'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Company Logo" />
      </div>

      <div className="nav-links-wrapper">
        <div className="nav-links">
          <a href="#">About</a>
          <a href="#">Pricing</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
          <a href="#"> Demo</a>
        </div>
      </div>
      <div className="auth-buttons">
        <button className="signup">Sign Up</button>
        <button className="login">Log In</button>
      </div>
    </nav>
  );
};

export default Navbar;

