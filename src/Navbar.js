import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from './assets/logo2.png';
import loginBtn from './assets/editor/Log in.png';
import startBtnOrganiser from './assets/editor/Start for free_Organiser.png';
import startBtnIndividual from './assets/editor/Start for free_Individual.png';
import RoleSelectionModal from './components/RoleSelectionModal';
import { isMobileDevice, openFragmentApp, openFragmentBusinessApp } from './utils/smartAppLink';
// New Home Page Specific Images


const Navbar = ({ currentView }) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [showRoleModal, setShowRoleModal] = useState(false);
  const [modalMode, setModalMode] = useState('login');
  const navRef = useRef(null);
  const modalPages = ['/about', '/pricing', '/contact', '/demo', '/About', '/Pricing', '/Contact', '/Demo'];
  // Pages where login button should show role selection modal
  // const modalPages = ['/about', '/pricing', '/contact', '/demo', '/About', '/Pricing', '/Contact', '/Demo'];
  const isModalPage = modalPages.includes(location.pathname);
  // True when the user is in individual context — either via tab toggle or direct /individual route
  const isIndividualView = currentView === 'individual' || ['/individual', '/Individual'].includes(location.pathname);

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
          <Link to="/blog" className="blog-link" onClick={() => setIsOpen(false)}>Blog</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link to="/faqs" onClick={() => setIsOpen(false)}>FAQs</Link>
          <Link to="/pricing" onClick={() => setIsOpen(false)}>Pricing</Link>
          <Link to="/individual" className="individual-link" onClick={() => setIsOpen(false)}>Individual</Link>
        </div>
        {/* Auth buttons inside the menu for mobile — same as desktop */}
        <div className="auth-buttons auth-buttons-mobile">
          <div className="organiser-auth-btns">
            {isModalPage ? (
              <button
                className="login-link login-btn-modal"
                onClick={() => {
                  setIsOpen(false);
                  setModalMode('login');
                  setShowRoleModal(true);
                }}
              >
                <span className="login-text-btn">Log in</span>
              </button>
            ) : (
              isIndividualView && isMobileDevice() ? (
                <button
                  className="login-link login-btn-modal"
                  onClick={() => {
                    setIsOpen(false);
                    openFragmentApp('login');
                  }}
                >
                  <span className="login-text-btn">Log in</span>
                </button>
              ) : !isIndividualView && isMobileDevice() ? (
                <button
                  className="login-link login-btn-modal"
                  onClick={() => {
                    setIsOpen(false);
                    openFragmentBusinessApp('login');
                  }}
                >
                  <span className="login-text-btn">Log in</span>
                </button>
              ) : (
                <a
                  href={isIndividualView ? 'https://my.thefragment.app/login' : 'https://business.thefragment.app/login'}
                  className="login-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="login-text-btn">Log in</span>
                </a>
              )
            )}

            {isModalPage ? (
              <button
                className="nav-img-btn login-btn-modal"
                style={{ background: 'transparent', padding: 0, border: 'none' }}
                onClick={() => {
                  setIsOpen(false);
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
              isIndividualView ? (
                isMobileDevice() ? (
                  <button
                    className="nav-img-btn login-btn-modal"
                    style={{ background: 'transparent', padding: 0, border: 'none' }}
                    onClick={() => {
                      setIsOpen(false);
                      openFragmentApp('signup');
                    }}
                  >
                    <img src={startBtnIndividual} alt="Start for free" className="nav-img-btn start-img-btn" />
                  </button>
                ) : (
                  <a
                    href="https://my.thefragment.app/signup"
                    target="_blank" rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                  >
                    <img src={startBtnIndividual} alt="Start for free" className="nav-img-btn start-img-btn" />
                  </a>
                )
              ) : (
                isMobileDevice() ? (
                  <button
                    className="nav-img-btn login-btn-modal"
                    style={{ background: 'transparent', padding: 0, border: 'none' }}
                    onClick={() => {
                      setIsOpen(false);
                      openFragmentBusinessApp('signup');
                    }}
                  >
                    <img src={startBtnOrganiser} alt="Start for free" className="nav-img-btn start-img-btn" />
                  </button>
                ) : (
                  <a
                    href="https://business.thefragment.app/signup"
                    target="_blank" rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                  >
                    <img src={startBtnOrganiser} alt="Start for free" className="nav-img-btn start-img-btn" />
                  </a>
                )
              )
            )}
          </div>
        </div>
      </div>

      {/* Auth buttons for desktop */}
      {/* Auth buttons for desktop */}
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
            isIndividualView && isMobileDevice() ? (
              <button
                className="login-link login-btn-modal"
                onClick={() => openFragmentApp('login')}
              >
                <span className="login-text-btn">Log in</span>
              </button>
            ) : !isIndividualView && isMobileDevice() ? (
              <button
                className="login-link login-btn-modal"
                onClick={() => openFragmentBusinessApp('login')}
              >
                <span className="login-text-btn">Log in</span>
              </button>
            ) : (
              <a
                href={isIndividualView ? 'https://my.thefragment.app/login' : 'https://business.thefragment.app/login'}
                // href={isIndividualView ? 'http://localhost:5173/login' : 'http://localhost:5174/login'}
                className="login-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="login-text-btn">Log in</span>
              </a>
            )
          )}

          {/* Logic: Show Individual button ONLY if on tabbed pages and view is 'individual'.
              Otherwise (non-tabbed pages or organiser view), show Organiser button.
          */}
          {isModalPage ? (
            /* On Modal Pages (About, Pricing, etc.), show generic "Start for free" that opens modal */
            <button
              className="nav-img-btn login-btn-modal"
              style={{ background: 'transparent', padding: 0, border: 'none' }}
              onClick={() => {
                setModalMode('signup');
                setShowRoleModal(true);
              }}
            >
              {/* Default to Organiser image or generic? Request implies same button but opens modal. 
                   Since we need to pick an image, let's use the one matching the current view logic or just default.
                   Actually, user said "Do the same thing (left right sides) for 'Start for Free'".
                   The original code swapped images based on currentView. Let's keep that visual but change behavior.
               */}
              <img
                src={currentView === 'individual' ? startBtnIndividual : startBtnOrganiser}
                alt="Start for free"
                className="nav-img-btn start-img-btn"
              />
            </button>
          ) : (
            /* On other pages, use isIndividualView to pick the right button/link */
            isIndividualView ? (
              isMobileDevice() ? (
                <button
                  className="nav-img-btn login-btn-modal"
                  style={{ background: 'transparent', padding: 0, border: 'none' }}
                  onClick={() => openFragmentApp('signup')}
                >
                  <img src={startBtnIndividual} alt="Start for free" className="nav-img-btn start-img-btn" />
                </button>
              ) : (
                <a
                  href="https://my.thefragment.app/signup"
                  // href="http://localhost:5173/signup"
                  target="_blank" rel="noopener noreferrer">
                  <img src={startBtnIndividual} alt="Start for free" className="nav-img-btn start-img-btn" />
                </a>
              )
            ) : (
              isMobileDevice() ? (
                <button
                  className="nav-img-btn login-btn-modal"
                  style={{ background: 'transparent', padding: 0, border: 'none' }}
                  onClick={() => openFragmentBusinessApp('signup')}
                >
                  <img src={startBtnOrganiser} alt="Start for free" className="nav-img-btn start-img-btn" />
                </button>
              ) : (
                <a
                  href="https://business.thefragment.app/signup"
                  // href="http://localhost:5174/signup"
                  target="_blank" rel="noopener noreferrer">
                  <img src={startBtnOrganiser} alt="Start for free" className="nav-img-btn start-img-btn" />
                </a>
              )
            )
          )}
        </div>
      </div>

      {/* Role Selection Modal */}
      <RoleSelectionModal
        isOpen={showRoleModal}
        onClose={() => setShowRoleModal(false)}
        prefixText={modalMode === 'login' ? 'Log-in as' : 'Sign-in as'}
        onIndividualClick={() => {
          if (isMobileDevice()) {
            openFragmentApp(modalMode);
          } else {
            window.open(modalMode === 'login' ? 'https://my.thefragment.app/login' : 'https://my.thefragment.app/signup', '_blank');
          }
        }}
        // onIndividualClick={() => window.open(modalMode === 'login' ? 'http://localhost:5173/login' : 'http://localhost:5173/signup', '_blank')}
        onOrganiserClick={() => {
          if (isMobileDevice()) {
            openFragmentBusinessApp(modalMode);
          } else {
            window.open(modalMode === 'login' ? 'https://business.thefragment.app/login' : 'https://business.thefragment.app/signup', '_blank');
          }
        }}
      // onOrganiserClick={() => window.open(modalMode === 'login' ? 'http://localhost:5174/login' : 'http://localhost:5174/signup', '_blank')}
      />
    </nav>
  );
};

export default Navbar;
