import React, { useState } from "react";
import "./Page10.css";

const Page10 = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter your email.");
      return;
    }

    alert(`Subscribed with: ${email}`);
    setEmail(""); // clear input after submit
  };

  return (
    <div className="subscribe-section">
      <div className="subscribe-container">
        <h2 className="subscribe-title">Subscribe</h2>
        <p className="subscribe-subtitle">
          Be the first to know about our new features
        </p>

        <form className="subscribe-box" onSubmit={handleSubmit}>
          <input
            type="email"
            className="subscribe-input"
            placeholder="Enter Email.."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button type="submit" className="subscribe-btn">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page10;
