import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from './assets/logo2.png';
import RoleSelectionModal from './components/RoleSelectionModal';
// New Home Page Specific Images


const Navbar = ({ currentView }) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [showRoleModal, setShowRoleModal] = useState(false);
  const [modalMode, setModalMode] = useState('login');
  const navRef = useRef(null);

  // Pages where login button should show role selection modal
  const modalPages = ['/about', '/pricing', '/contact', '/demo', '/About', '/Pricing', '/Contact', '/Demo'];
  const isModalPage = modalPages.includes(location.pathname);

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
          {/* <Link to="/pricing" onClick={() => setIsOpen(false)}>Pricing</Link> */}
          <Link to="/blog" className="blog-link" onClick={() => setIsOpen(false)}>Blog</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link to="/demo" onClick={() => setIsOpen(false)}>Demo</Link>
        </div>
        {/* Auth buttons inside the menu for mobile  */}
        {/* Commented out login and start for free buttons
        <div className="auth-buttons auth-buttons-mobile">
          <button className="login" onClick={() => setIsOpen(false)}>Log In</button>
          <button className="signup" onClick={() => setIsOpen(false)}>Start for free</button>
        </div>
        */}
      </div>

      {/* Auth buttons for desktop */}
      {/* Auth buttons for desktop */}
      {/* Commented out login and start for free buttons (desktop)
      <div className="auth-buttons auth-buttons-desktop">
        <div className="organiser-auth-btns">
          {isModalPage ? (
            <button
              className="login-link login-btn-modal"
              onClick={() => {
                setModalMode('login');
                setShowRoleModal(true);
              }}
            >
              <span className="login-text-btn">Log in</span>
            </button>
          ) : (
            <a
              // href={currentView === 'individual' ? 'https://my.thefragment.app/login' : 'https://business.thefragment.app/login'}
              href={currentView === 'individual' ? 'http://localhost:5173/login' : 'http://localhost:5174/login'}
              className="login-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="login-text-btn">Log in</span>
            </a>
          )}

          {isModalPage ? (
            <button
              className="nav-img-btn login-btn-modal"
              style={{ background: 'transparent', padding: 0, border: 'none' }}
              onClick={() => {
                setModalMode('signup');
                setShowRoleModal(true);
              }}
            >
              <img
                src={currentView === 'individual' ? startBtnIndividual : startBtnOrganiser}
                alt="Start for free"
                className="nav-img-btn start-img-btn"
              />
            </button>
          ) : (
            ((['/', '/blog', '/demo', '/Blog', '/Demo'].includes(location.pathname) || location.pathname.startsWith('/blog/post/')) && currentView === 'individual') ? (
              <a
                // href="https://my.thefragment.app/signup" 
                href="http://localhost:5173/signup"
                target="_blank" rel="noopener noreferrer">
                <img src={startBtnIndividual} alt="Start for free" className="nav-img-btn start-img-btn" />
              </a>
            ) : (
              <a
                // href="https://business.thefragment.app/signup" 
                href="http://localhost:5174/signup"
                target="_blank" rel="noopener noreferrer">
                <img src={startBtnOrganiser} alt="Start for free" className="nav-img-btn start-img-btn" />
              </a>
            )
          )}
        </div>
      </div>
      */}

      {/* Role Selection Modal */}
      <RoleSelectionModal
        isOpen={showRoleModal}
        onClose={() => setShowRoleModal(false)}
        prefixText={modalMode === 'login' ? 'Log-in as' : 'Sign-in as'}
        // onIndividualClick={() => window.open(modalMode === 'login' ? 'https://my.thefragment.app/login' : 'https://my.thefragment.app/signup', '_blank')}
        onIndividualClick={() => window.open(modalMode === 'login' ? 'http://localhost:5173/login' : 'http://localhost:5173/signup', '_blank')}
        // onOrganiserClick={() => window.open(modalMode === 'login' ? 'https://business.thefragment.app/login' : 'https://business.thefragment.app/signup', '_blank')}
        onOrganiserClick={() => window.open(modalMode === 'login' ? 'http://localhost:5174/login' : 'http://localhost:5174/signup', '_blank')}
      />
    </nav>
  );
};

export default Navbar;

