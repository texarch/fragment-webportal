import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './logo2.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  // Toggle menu open/close
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar" ref={navRef}>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>

      {/* Hamburger button for mobile */}
      <button
        className="navbar-toggler d-lg-none"
        type="button"
        onClick={toggleMenu}
        aria-controls="navbarNav"
        aria-expanded={isOpen}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Collapsible menu */}
      <div className={`nav-links-wrapper collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
        <div className="nav-links">
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/pricing" onClick={() => setIsOpen(false)}>Pricing</Link>
          {/* <Link to="/blog" onClick={() => setIsOpen(false)}>Blog</Link> */}
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link to="/demo" onClick={() => setIsOpen(false)}>Demo</Link>
        </div>
        {/* Auth buttons inside the menu for mobile */}
        <div className="auth-buttons auth-buttons-mobile">
          // <button className="signup" onClick={() => setIsOpen(false)}>Sign Up</button>
          // <button className="login" onClick={() => setIsOpen(false)}>Log In</button>
        </div>
      </div>

      {/* Auth buttons for desktop */}
      <div className="auth-buttons auth-buttons-desktop">
        // <button className="signup">Sign Up</button>
        // <button className="login">Log In</button>
      </div>
    </nav>
  );
};

export default Navbar;
