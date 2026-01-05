import React from "react";
import "./Page12.css";
import IndividualPage2 from "./assets/Individual_Page2.png";

// Local buttons
import PlayStoreButton from "./assets/playstore_button.png";
import AppStoreButton from "./assets/Appstore_button.png";

const Page12 = () => {
  return (
    <section className="Page12-section">
      <div className="Page12-inner-box">

        {/* Header Area */}
        <div className="Page12-header-text">
          <div className="Page12-heading-custom">
            Bring clarity to your day!!
          </div>

          <div className="Page12-subtext-custom">
            Also Available on
          </div>

          <div className="store-buttons">
            <img
              src={PlayStoreButton}
              alt="Play Store"
              className="store-btn"
              onClick={() => window.open("https://play.google.com", "_blank")}
            />
            <img
              src={AppStoreButton}
              alt="App Store"
              className="store-btn"
              onClick={() => window.open("https://apps.apple.com", "_blank")}
            />
          </div>
        </div>

        {/* Content Area */}
        <div className="Page12-content">
          <img
            src={IndividualPage2}
            alt="Calendar App Preview"
            className="Page12-ipad"
          />
          <div className="Page12-text-right">
            <div className="Page12-slogan-custom">
              Plan better, sync faster, stay in the know.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Page12;