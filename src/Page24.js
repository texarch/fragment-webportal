import React from 'react';
import Insta from './insta.png';       
import LinkedIn from './linkedin.png';
import email from './email.png';   
import './Page24.css'; 

const Page24 = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column social-contact">
          <div className="social-icons-footer">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={Insta} alt="Instagram" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={LinkedIn} alt="LinkedIn" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <img src={email} alt="YouTube" />
            </a>
          </div>
          <p>Email hi@thefragment.app</p>
          <p>Phone number 77605 13755</p>
          <p>Address Bangalore, India</p>
        </div>

        <div className="footer-column offset-top">
          <p>About Us</p>
          <p>Work with us</p>
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
  );
};

export default Page24;
