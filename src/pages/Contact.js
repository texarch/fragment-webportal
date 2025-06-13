import React from 'react';
import './Contact.css';

import BackImage from '../main2.png'; 
import Insta from '../insta2.jpg';
import LinkedIn from '../linkedin2.jpg';
import YouTube from '../youtube.jpg';
import Facebook from '../facebook.jpg';

import InstaIcon from '../insta.png';       
import LinkedInIcon from '../linkedin.png';
import EmailIcon from '../email.png';


function Contact() {
  return (
    <div className="contact-page">
      
      <div className="back-image-wrapper">
        <img src={BackImage} alt="Back" className="back-image" />
      </div>

      <div className="form-container">
  <h2 className="first-heading">Email your Question!</h2>
  <h3 className="second-heading">Our Calendars keep you on time</h3>
  <form>
    <div className="form-group">
      <label htmlFor="name">Name</label>
      <input type="text" id="name" />
    </div>
    
    <div className="form-group">
      <label htmlFor="email">Email ID</label>
      <input type="email" id="email" />
    </div>
    
    <div className="form-group">
      <label htmlFor="question">Question</label>
      <textarea id="question" rows="5"></textarea>
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
          <a href="www.linkedin.com/company/thefragmentapp/" target="_blank" rel="noopener noreferrer">
            <img src={LinkedIn} alt="LinkedIn" />
          </a>
          <a href="https://www.youtube.com/@thefragmentapp" target="_blank" rel="noopener noreferrer">
            <img src={YouTube} alt="YouTube" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={Facebook} alt="facebook" />
          </a>
        </div>
      </div>

      <div className="subscribe-section-wrapper">
        <div className="subscribe-section">
          <h2 className="subscribe-title">Subscribe Us</h2>
          <p className="subscribe-desc">Be the first to know about our new products</p>
          <form className="subscribe-form" onSubmit={(e) => {
            e.preventDefault();
            const email = e.target.elements.email.value;
            if (!email) {
              alert('Please enter your email address');
              return;
            }
            // Handle form submission here
          }}>
            <input 
              type="email" 
              name="email"
              placeholder="Enter Email.." 
              required
            />
            <button type="submit">Subscribe</button>
          </form>
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
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <img src={EmailIcon} alt="YouTube" />
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
}

export default Contact;
