import React from 'react';
import './Contact.css';

import BackImage from '../main2.png'; 
import Insta from '../insta2.jpg';
import LinkedIn from '../linkedin2.jpg';
import YouTube from '../youtube.jpg';
import Facebook from '../facebook.jpg';

import InstaIcon from '../insta.png';       
import LinkedInIcon from '../linkedin.png';
import EmailIcon from '../email.png'; // This was previously YouTube0, assumed to be an email icon

function Contact() {
  return (
    <div className="App">
      <div className="back-image-wrapper">
        <img src={BackImage} alt="Background" className="back-image" />
      </div>

      <div className="form-container">
        <h2 className="first-heading">Email your Question!</h2>
        <h3 className="second-heading">Our Calendars keep you on time</h3>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required placeholder="Your Name" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email ID</label>
            <input type="email" id="email" name="email" required placeholder="Your Email" />
          </div>

          <div className="form-group">
            <label htmlFor="question">Question</label>
            <textarea id="question" name="question" rows="5" required placeholder="Type your question here..."></textarea>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="social-section">
        <h2>Follow us on Social Media <br /> Platforms</h2>
        <div className="social-icons">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={Insta} alt="Instagram" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src={LinkedIn} alt="LinkedIn" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <img src={YouTube} alt="YouTube" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={Facebook} alt="Facebook" />
          </a>
        </div>
      </div>

      <div className="subscribe-section-wrapper">
        <div className="subscribe-section">
          <h2>Subscribe</h2>
          <p>Be the first to know about our new products</p>
          <div className="subscribe-form">
            <input type="email" placeholder="Enter Email.." required />
            <button type="submit">Subscribe</button>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-column social-contact">
            <div className="social-icons-footer">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src={InstaIcon} alt="Instagram" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src={LinkedInIcon} alt="LinkedIn" />
              </a>
              <a href="mailto:your@email.com" target="_blank" rel="noopener noreferrer">
                <img src={EmailIcon} alt="Email" />
              </a>
            </div>
            <p>email.id@email.com</p>
            <p>+123 456 7890</p>
            <p>Your Address, City, Country</p>
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
          <p>© 2025 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Contact;
