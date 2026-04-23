import React from "react";
import "./Page1.css";
import heroImage from "./assets/hero image.png";

const Page1 = () => {
  return (
    <div className="page1-hero-container">
      {/* Badge */}
      <div className="hero-badge">
        <div className="badge-dot" />
        <div className="badge-text">Not just events.</div>
      </div>

      {/* Main Heading */}
      <div className="hero-heading-wrapper">
        <h1 className="hero-title">Run group schedules and recurring events</h1>
        <h1 className="hero-subtitle">with Zero Setup</h1>
      </div>

      {/* Subtext/Description */}
      <div className="hero-description-wrapper">
        <p className="hero-description">
          Create groups, manage schedules, run one-on-ones and collect payments.
          <br />
          All from one place. Always updated. Automatically shared.
        </p>
      </div>

      {/* Hero Image Mockup */}
      <div className="hero-image-wrapper">
        <img src={heroImage} alt="Fragment Calendar Mockup" className="hero-image" />
      </div>
    </div>
  );
};

export default Page1;

