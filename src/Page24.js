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
            <a href="www.linkedin.com/company/thefragmentapp/" target="_blank" rel="noopener noreferrer">
              <img src={LinkedIn} alt="LinkedIn" />
            </a>
            <a href="https://www.youtube.com/@thefragmentapp" target="_blank" rel="noopener noreferrer">
              <img src={email} alt="YouTube" />
            </a>
          </div>
          <p>Email:<span> hi@thefragment.app</span> </p>
          <p>FAQ</p>
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
