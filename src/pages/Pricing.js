import React, { useState } from 'react';
import './Pricing.css';
import comingSoonImg from '../assets/comingsoon.jpg';
import Insta0 from '../assets/insta.png';
import LinkedIn0 from '../assets/linkedin.png';
import YouTube0 from '../assets/email.png';
import RoleSelectionModal from '../components/RoleSelectionModal';

const Pricing = () => {
  const [showRoleModal, setShowRoleModal] = useState(false);

  return (
    <div>
      <div className="pricing-container">
        <div className="pricing-overlay"></div>
        <div className="pricing-content">
          <div className="pricing-cards-wrapper">
            {/* Organiser Card */}
            <div className="pricing-card">
              <div className="card-header">
                <h2 className="card-title organiser-title">Organiser</h2>
                <h3 className="card-subtitle">Experience the zero set<br />up scheduling platform</h3>
              </div>
              <div className="card-body">
                <ul className="card-features">
                  <li>Create unlimited groups</li>
                  <li>Onboard users instantly</li>
                  <li>Interact directly on events</li>
                  <li>Add bookings to any event</li>
                  <li>Share your availability for 1:1 sessions</li>
                  <li>No ads. No distractions — for you or your users</li>
                </ul>
                <button className="btn-signup organiser-btn" onClick={() => setShowRoleModal(true)}>Start for Free</button>
              </div>
            </div>

            {/* Individual Card */}
            <div className="pricing-card">
              <div className="card-header">
                <h2 className="card-title individual-title">Individual</h2>
                <h3 className="card-subtitle">Your zen space for<br />what's happening next.</h3>
              </div>
              <div className="card-body">
                <ul className="card-features">
                  <li>Create your personal planning space</li>
                  <li>Organize with multiple calendars</li>
                  <li>Stay on top of your to-dos</li>
                  <li>Follow schedules that matter to you</li>
                  <li>Book events and 1:1 sessions</li>
                  <li>Interact with Organisers directly</li>
                </ul>
                <button className="btn-signup individual-btn" onClick={() => setShowRoleModal(true)}>Start for Free</button>
              </div>
            </div>
          </div>
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

      <RoleSelectionModal
        isOpen={showRoleModal}
        onClose={() => setShowRoleModal(false)}
        prefixText="Sign-in as"
        onIndividualClick={() => window.open('http://localhost:5173/signup', '_blank')}
        onOrganiserClick={() => window.open('http://localhost:5174/signup', '_blank')}
      />
    </div>
  );
};

export default Pricing;


