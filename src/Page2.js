import React from "react";
import ipadMini from "./iPadMini_Page2.png";
import "./Page2.css";

const Page2 = () => {
  return (
    <div className="Page2-wrapper">
      <div className="Page2-inner-box">
        <div className="Page2-header-text">
          <h2>
            Build communities around your events, don’t just send invites!
          </h2>

          <h3 className="available-text">Also Available on</h3>

          <div className="store-buttons">
            {/* Google Play Button */}
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="store-badge"
              />
            </a>

            {/* App Store Button */}
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                className="store-badge"
              />
            </a>
          </div>
        </div>

        <div className="Page2-content">
          <img src={ipadMini} alt="App preview" className="Page2-ipad" />
          <div className="Page2-text-right">
            <p>
              Whether it’s small, big, daily, or recurring — keep every event
              organized and everyone in sync.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
