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
    <div className="subscribe-bg-layer-10">
      <div className="subscribe-section-10">
        <div className="subscribe-container-10">
          <h2 className="subscribe-title-10">Subscribe</h2>
          <p className="subscribe-subtitle-10">
            Be the first to know about our new features
          </p>

          <form className="subscribe-box-10" onSubmit={handleSubmit}>
            <input
              type="email"
              className="subscribe-input-10"
              placeholder="Enter Email.."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <button type="submit" className="subscribe-btn-10">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page10;
