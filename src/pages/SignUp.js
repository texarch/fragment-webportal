import React from 'react';
import './Pricing.css';
import comingSoonImg from '../comingsoon.jpg';
import Insta0 from '../insta.png';       
import LinkedIn0 from '../linkedin.png';
import YouTube0 from '../email.png';

const SignUp = () => {
  return (
    <div>
    <div className="pricing-container">
      <div className="pricing-overlay"></div>
      <div className="pricing-content">
        <h1 className="pricing-heading">Coming Soon...</h1>
        <img src={comingSoonImg} alt="Coming Soon" className="pricing-image" />
        <p className="pricing-subtext">
          We are piecing our Fragments together, one event at a Time
        </p>
      </div>
    </div>
    <footer className="footer">
        <div className="footer-content">
          <div className="footer-column social-contact">
            <div className="social-icons-footer">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src={Insta0} alt="Instagram" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src={LinkedIn0} alt="LinkedIn" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <img src={YouTube0} alt="YouTube" />
              </a>
            </div>
            <p>Email.id@email.com</p>
            <p>Phone number</p>
            <p>Address</p>
          </div>

          <div className="footer-column offset-top">
            <p>About Us</p>
            <p>Work with us</p>
            <p>FAQs</p>
          </div>

          <div className="footer-column offset-top">
            <p>Privacy</p>
            <p>Terms and Conditions</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>CopyRight Info</p>
        </div>
      </footer>
    </div>
  );
};

export default SignUp;
