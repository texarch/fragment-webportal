import React, { useState } from "react";
import "./Aboutus.css";
import page1bg from "../page1bg.jpg";
import apg1image from "../apg2image.png";
import apg2a from '../apg2a.jpg';
import apg2b from '../apg2b.jpg';
import pg3img from "../pg3img.jpg";
import Insta from '../insta.png';       
import LinkedIn from '../linkedin.png';
import YouTube from '../email.png';  

const APage1 = () => {
  return (
    <div
      className="apage1-section-container"
      style={{ backgroundImage: `url(${page1bg})` }}
    >
      <div className="apage1-section-content">
        <div className="apage1-text-block">
          <h1 className="apage1-heading">Fragment</h1>
          <h3 className="apage1-subheading">
            For personal use or business, we make<br />Scheduling easy
          </h3>
        </div>
        <div className="apage1-image-block">
          <img
            src={apg1image}
            alt="Scheduling illustration"
            className="apage1-image"
          />
        </div>
      </div>
    </div>
  );
};

const Apage2 = () => {
  return (
    <div className="apage2-container">
      <h1 className="apage2-heading">Story Behind Us</h1>
      <div className="apage2-section">
        <img src={apg2a} alt="Visual 1" className="apage2-image-left" />
        <p className="apage2-text-right">
          In a time when most of us are constantly distracted by unnecessary content, information overload,
          and endless scrolling, we wanted to create something that reduces the daily hustle and helps us
          stay focused on our goals.
        </p>
      </div>
      <div className="apage2-section reverse">
        <p className="apage2-text-left">
          A platform like no other, Fragment helps organise daily events effortlessly. While many platforms
          cater to large, one-time events, none address the everyday activities that shape our lives.
        </p>
        <img src={apg2b} alt="Visual 2" className="apage2-image-right" />
      </div>
      <p className="apage2-final-text">
        So, we built Fragment—a scheduling platform for both personal planning and for organisers to easily
        create, share, and manage schedules with their users.
      </p>
    </div>
  );
};

const Apage3 = () => {
  return (
    <div>
      <div className="apage3-container">
        <h2 className="apage3-heading">Why Choose Us</h2>
      </div>
      <div>
        <img src={pg3img} alt="Why Choose Us" className="apage3-image" />
      </div>
    </div>
  );
};

const Apage4 = () => {
  const [showMessage, setShowMessage] = useState(false);

  const handleSubscribe = () => {
    setShowMessage(true);
  };

  return (
    <div className="apage4-container">
      <h1 className="apage4-title">Subscribe</h1>
      <h2 className="apage4-subtitle">Be the first to know about our new products</h2>
      <div className="apage4-form">
        <input
          type="email"
          placeholder="Enter your email"
          className="apage4-input"
        />
        <button className="apage4-button" onClick={handleSubscribe}>
          Subscribe
        </button>
      </div>
      {showMessage && <p className="apage4-message">Feature need to be added</p>}
    </div>
  );
};

const Apage5 = () => {
  return (
    <div>
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
                <img src={YouTube} alt="YouTube" />
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

const About = () => {
  return (
    <>
      <APage1 />
      <Apage2 />
      <Apage3 />
      <Apage4 />
      <Apage5 />
    </>
  );
};

export { APage1, Apage2, Apage3, Apage4, Apage5, About };