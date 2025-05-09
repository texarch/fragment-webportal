import React, { useState } from 'react';
import './Page23.css';

const Page23 = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="subscribe-section-wrapper">
      <div className="subscribe-section">
        <h2 className="subscribe-title">Subscribe</h2>
        <p className="subscribe-desc">Be the first to know about our new products</p>
        <form className="subscribe-form" onSubmit={handleSubmit}>
          <input type="email" placeholder="Enter Email..." aria-label="Email" required />
          <button type="submit">Subscribe</button>
        </form>
        {submitted && <p className="submit-message">Thank you for subscribing!</p>}
      </div>
    </div>
  );
};

export default Page23;
