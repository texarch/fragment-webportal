import React from "react";
import "./Page20.css";
import connections_page11 from "./assets/connections_page11.png";
import { Link } from "react-router-dom";

const Page20 = () => {
  return (
    <footer className="page24">
      <div className="footer-content">
        <div className="footer-left">
          <p className="connect-text">Connect with us on</p>
          <div className="social-icons-sprite">
            <a href="https://www.instagram.com/thefragment.app/" target="_blank" rel="noopener noreferrer" className="sprite-icon instagram" aria-label="Instagram"></a>
            <a href="https://www.linkedin.com/company/thefragmentapp/" target="_blank" rel="noopener noreferrer" className="sprite-icon linkedin" aria-label="LinkedIn"></a>
            <a href="https://www.youtube.com/@thefragmentapp" target="_blank" rel="noopener noreferrer" className="sprite-icon youtube" aria-label="YouTube"></a>
          </div>
          <p className="email">hi@fragment.com</p>
        </div>

        <div className="footer-links-wrapper">
          <div className="footer-middle">
            <Link to="/about">About Us</Link>
            <a href="/">Work with us</a>
            <Link to="/faqs">FAQ's</Link>
          </div>

          <div className="footer-right">
            <a href="/">Privacy</a>
            <a href="/">Terms and Conditions</a>
          </div>
        </div>
      </div>

      <div className="copyright">
        <p>CopyRight Info</p>
      </div>
    </footer>
  );
};

export default Page20;


