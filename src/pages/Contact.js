import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import './Contact.css';

import BackImage from '../main2.png'; 
import Insta from '../insta2.jpg';
import LinkedIn from '../linkedin2.jpg';
import YouTube from '../youtube.jpg';
import Facebook from '../facebook.jpg';

import InstaIcon from '../insta.png';       
import LinkedInIcon from '../linkedin.png';
import EmailIcon from '../email.png';

const REACT_APP_API_URL='https://fragment.thefragment.app/website'


function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    question: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' or 'error'

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePhoneChange = (value) => {
    setFormData(prev => ({
      ...prev,
      phone: value || ''
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      const response = await fetch(`${REACT_APP_API_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Thank you! Your message has been sent successfully.');
        setMessageType('success');
        setFormData({ name: '', email: '', phone: '', question: '' });
      } else {
        setMessage(data.error || 'Failed to send message. Please try again.');
        setMessageType('error');
      }
    } catch (error) {
      setMessage('Network error. Please check your connection and try again.');
      setMessageType('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    
    if (!email) {
      alert('Please enter your email address');
      return;
    }

    // Disable the submit button to prevent multiple submissions
    const submitButton = e.target.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.textContent = 'Subscribing...';

    try {
      const response = await fetch(`${REACT_APP_API_URL}/subscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message || 'Thank you for subscribing!');
        e.target.reset();
      } else {
        // Handle different error cases - use data.message instead of data.error
        if (response.status === 400 && data.message && data.message.includes('already subscribed')) {
          alert('You are already subscribed to our newsletter!');
        } else {
          alert(data.message || 'Failed to subscribe. Please try again.');
        }
      }
    } catch (error) {
      console.error('Network error:', error);
      alert('Network error. Please check your connection and try again.');
    } finally {
      // Re-enable the submit button
      submitButton.disabled = false;
      submitButton.textContent = originalText;
    }
  };

  return (
    <div className="contact-page">
      
      <div className="back-image-wrapper">
        <img src={BackImage} alt="Back" className="back-image" />
      </div>

      <div className="form-container">
        <h2 className="first-heading">Email your Question!</h2>
        <h3 className="second-heading">Our Calendars keep you on time</h3>
        
        {message && (
          <div className={`message ${messageType}`}>
            {message}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email ID</label>
            <input 
              type="email" 
              id="email" 
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="phone">Phone Number (Optional)</label>
            <PhoneInput
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handlePhoneChange}
              defaultCountry="IN"
              international
              countryCallingCodeEditable={false}
              className="phone-input-custom"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="question">Question</label>
            <textarea 
              id="question" 
              name="question"
              rows="5"
              value={formData.question}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Submit'}
          </button>
        </form>
      </div>

      <div className="social-section">
        <h2>Follow us on Social Media <br /> Platforms</h2>
        <div className="social-icons">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={Insta} alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com/company/thefragmentapp/" target="_blank" rel="noopener noreferrer">
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
          <form className="subscribe-form" onSubmit={handleSubscribe}>
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
            <p>Email:<span> hi@thefragment.app</span> </p>
            {/* <p>Phone number</p>
            <p>Address</p> */}
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