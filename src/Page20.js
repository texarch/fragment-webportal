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
          />
          <p className="email">hi@fragment.com</p>
        </div>

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

      <div className="copyright">
        <p>CopyRight Info</p>
      </div>
    </footer>
  );
};

export default Page20;


