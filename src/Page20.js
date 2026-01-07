import React from "react";
import "./Page20.css";
import connections_page11 from "./assets/connections_page11.png";

const Page20 = () => {
  return (
    <footer className="page24">
      <div className="footer-content">
        <div className="footer-left">
          <p className="connect-text">Connect with us on</p>
          <img
            src={connections_page11}
            alt="Social media icons"
            className="social-icons"
            useMap="#social-map-page20"
          />
          <map name="social-map-page20">
            {/* Instagram (0-40px) */}
            <area shape="rect" coords="0,0,40,40" href="https://www.instagram.com/thefragment.app/" target="_blank" rel="noopener noreferrer" alt="Instagram" />

            {/* LinkedIn (40-80px) */}
            <area shape="rect" coords="40,0,80,40" href="https://www.linkedin.com/company/thefragmentapp/" target="_blank" rel="noopener noreferrer" alt="LinkedIn" />

            {/* YouTube (120-160px) */}
            <area shape="rect" coords="120,0,160,40" href="https://www.youtube.com/@thefragmentapp" target="_blank" rel="noopener noreferrer" alt="YouTube" />
          </map>
          <p className="email">hi@fragment.com</p>
        </div>

        <div className="footer-links-wrapper">
          <div className="footer-middle">
            <a href="/">About Us</a>
            <a href="/">Work with us</a>
            <a href="/">FAQ's</a>
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


