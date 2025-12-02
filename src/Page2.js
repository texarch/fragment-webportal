import React from "react";
import ipadMini from "./iPadMini_Page2.png";
import Button_download_playstore from "./page2_playstore.png";
import Button_download_Appstore from "./page2_appstore.png";
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
            <img
              src={Button_download_playstore}
              alt="Download on Play Store"
              className="store-badge"
              onClick={() => window.open("https://play.google.com", "_blank")}
            />

            <img
              src={Button_download_Appstore}
              alt="Download on App Store"
              className="store-badge"
              onClick={() => window.open("https://apps.apple.com", "_blank")}
            />
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
