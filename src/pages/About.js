import React, { useState } from "react";
import "./Aboutus.css";
import page1bg from "../page1bg.jpg"; // Fixed: removed the dot before filename
import apg1image from "../apg00image.png";
import apg2a from "../apg2a.jpg";
import apg2b from "../apg2b.jpg";

import Insta from "../insta.png";
import LinkedIn from "../linkedin.png";
import YouTube from "../email.png";

import pg3a from "../pg3a.png";
import pg3b from "../pg3b.png";
import pg3c from "../pg3c.png";
import pg3d from "../pg3d.png";

// APage1 Component
const APage1 = () => {
  return (
    <div
      className="apage1-section-container"
      style={{
        backgroundImage: `url(${page1bg})`,
        backgroundSize: "120%",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)", // for Safari support
        backgroundColor: "rgba(255, 255, 255, 0.5)", // semi-transparent white background
        opacity: 0.9,
        position: "relative"
      }}
    >
      <div className="apage1-section-content">
        <div className="apage1-text-block">
          <h1 className="apage1-heading">Fragment</h1>
          <h3 className="apage1-subheading">
            For personal use or business, we make<br />
            Scheduling easy
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

// Apage2 Component
const Apage2 = () => {
  return (
    <div className="apage2-container">
      <h1 className="apage2-heading">Story Behind Us</h1>

      <div className="apage2-section">
        <img src={apg2a} alt="Visual 1" className="apage2-image-left" />
        <p className="apage2-text-right">
          In a time when most of us are constantly distracted by unnecessary content, information overload,
          and endless scrolling, we wanted to create something that <strong>reduces the daily hustle</strong> and helps us
          <strong> stay focused on our goals.</strong>
        </p>
      </div>

      <div className="apage2-section reverse">
        <p className="apage2-text-left">
          A platform like no other, <strong>Fragment</strong> helps <strong>organise daily events effortlessly.</strong> While many platforms
          cater to large, one-time events, none address the everyday activities that shape our lives.
        </p>
        <img src={apg2b} alt="Visual 2" className="apage2-image-right" />
      </div>

      <p className="apage2-final-text">
        So, we built <strong>Fragment</strong>—a scheduling platform for both <strong>personal planning</strong> and for <strong>organisers</strong> to easily
        create, share, and <strong>manage schedules with their users.</strong>
      </p>
    </div>
  );
};

// Apage3 Component
const Apage3 = () => {
  return (
    <div className="apage3-container">
      <h2 className="apage3-heading">Why Choose Us?</h2>
      <div className="apage3-images">
        <img className="apage3-image" src={pg3a} alt="pg3a" />
        <img className="apage3-image" src={pg3b} alt="pg3b" />
        <img className="apage3-image" src={pg3c} alt="pg3c" />
        <img className="apage3-image" src={pg3d} alt="pg3d" />
      </div>
    </div>
  );
};

// Apage4 Component
const Apage4 = () => {
  const [showMessage, setShowMessage] = useState(false);

  const handleSubscribe = () => {
    setShowMessage(true);
  };

  return (
    <div className="apage4-container">
      <h1 className="apage4-title">Subscribe Us</h1>
      <h2 className="apage4-subtitle">Via </h2>
      {/* <h2 className="apage4-subtitle">Be the first to know about our new products..<br></br>
      For more information contact us through
      </h2> */}
      <h2 className="apage4-subtitle1">
       <a href="mailto:hi@thefragment.app">hi@thefragment.app</a></h2>
      {/* <div className="apage4-form">
        <input
          type="email"
          placeholder="Enter your email"
          className="apage4-input"
        />
        <button className="apage4-button" onClick={handleSubscribe}>
          Subscribe
        </button>
      </div> */}
      {showMessage && <p className="apage4-message">Feature needs to be added</p>}
    </div>
  );
};

// Apage5 Component
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
              <a href="www.linkedin.com/company/thefragmentapp/" target="_blank" rel="noopener noreferrer">
                <img src={LinkedIn} alt="LinkedIn" />
              </a>
              <a href="https://www.youtube.com/@thefragmentapp" target="_blank" rel="noopener noreferrer">
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

// Combined Wrapper Component
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

export { APage1, Apage2, Apage3, Apage4, Apage5, About };
