import React, { useState } from "react";
import "./Page19.css";

const Page19 = () => {
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
    <div className="subscribe-bg-layer-19">
      <div className="subscribe-section-19">
        <div className="subscribe-container-19">
          <h2 className="subscribe-title-19">Subscribe</h2>
          <p className="subscribe-subtitle-19">
            Be the first to know about our new features
          </p>

          <form className="subscribe-box-19" onSubmit={handleSubmit}>
            <input
              type="email"
              className="subscribe-input"
              placeholder="Enter Email.."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <button type="submit" className="subscribe-btn-19">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page19;