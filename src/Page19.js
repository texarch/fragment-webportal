import React, { useState } from "react";
import "./Page19.css";

const REACT_APP_API_URL = 'http://localhost:4000/website';

const Page19 = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter your email.");
      return;
    }

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
        setEmail(""); // clear input after submit
      } else {
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
      submitButton.disabled = false;
      submitButton.textContent = originalText;
    }
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
              className="subscribe-input-19"
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

