import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from './assets/logo2.png';
import loginBtn from './assets/editor/Log in.png';
import startBtnOrganiser from './assets/editor/Start for free_Organiser.png';
import startBtnIndividual from './assets/editor/Start for free_Individual.png';
// New Home Page Specific Images


const Navbar = ({ currentView }) => {
  const location = useLocation();
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

  // Determine destination routes based on Page and View
  // Determine destination routes based on Page and View
  // const isOrganiserAuthContext = ... (removed)

  const loginRoute = '/login';
  const signupRoute = '/signup';

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
          <Link to="/blog" className="blog-link" onClick={() => setIsOpen(false)}>Blog</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link to="/demo" onClick={() => setIsOpen(false)}>Demo</Link>
        </div>
        {/* Auth buttons inside the menu for mobile  */}
        <div className="auth-buttons auth-buttons-mobile">
          <button className="login" onClick={() => setIsOpen(false)}>Log In</button>
          <button className="signup" onClick={() => setIsOpen(false)}>Start for free</button>
        </div>
      </div>

      {/* Auth buttons for desktop */}
      {/* Auth buttons for desktop */}
      <div className="auth-buttons auth-buttons-desktop">
        <div className="organiser-auth-btns">
          <Link to={loginRoute} className="login-link">
            <span className="login-text-btn">Log in</span>
          </Link>

          {/* Logic: Show Individual button ONLY if on tabbed pages and view is 'individual'.
              Otherwise (non-tabbed pages or organiser view), show Organiser button.
              Tabbed pages: Home (/), Blog (/blog), Demo (/demo) AND Blog Posts (/blog/post/...)
          */}
          {((['/', '/blog', '/demo', '/Blog', '/Demo'].includes(location.pathname) || location.pathname.startsWith('/blog/post/')) && currentView === 'individual') ? (
            <Link to={signupRoute}>
              <img src={startBtnIndividual} alt="Start for free" className="nav-img-btn start-img-btn" />
            </Link>
          ) : (
            <Link to={signupRoute}>
              <img src={startBtnOrganiser} alt="Start for free" className="nav-img-btn start-img-btn" />
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

