import React from "react";
import "./Page5.css";

import Button_download_playstore from "./assets/Button_download_playstore.png";
import Button_download_Appstore from "./assets/Button_download_Appstore.png";
import Icon_set_Page5 from "./assets/Icon set_Page5.png";

import Button_download_Googlecalendars from "./assets/Button_download_Googlecalendars.png";
import Button_download_Applecalendar from "./assets/Button_download_Applecalendar.png";

const Page5 = () => {
  return (
    <div className="fragment-container">
      <div data-property-1="Variant3" className="fragment-card">

        {/* Heading */}
        <div className="heading-row">
          <span className="heading-text">If you are a</span>
          <span className="heading-creator">Creator</span>
        </div>

        {/* Subtitle */}
        <p className="sub-text">
          Fragment Business helps keep your entire team on the same page!
        </p>

        
        {/* <div className="website-row">
          <img src={Icon_set_Page5} alt="Website icon" className="website-icon-img" />
          <a href="https://www.business.thefragment.app" className="website-link" target="_blank" rel="noopener noreferrer">
            www.business.thefragment.app
          </a>
        </div> */}

        {/* OR */}
        {/* <div className="or-row">
          <span className="or-text">or</span>
        </div> */}

        {/* Store Buttons */}
        <div className="store-row">
          <img
            src={Button_download_playstore}
            alt="Download on Play Store"
            className="store-image"
            onClick={() => window.open("https://play.google.com", "_blank")}
          />

          <img
            src={Button_download_Appstore}
            alt="Download on App Store"
            className="store-image"
            onClick={() => window.open("https://apps.apple.com", "_blank")}
          />
        </div>

        {/* NEW CALENDAR SYNC SECTION */}
        <div className="calendar-sync-container">
          <div className="calendar-sync-heading">
            Sync your other calendars with Fragment
          </div>

          <div className="calendar-sync-buttons">
            <img
              src={Button_download_Googlecalendars}
              alt="Google Calendars"
              className="calendar-sync-img"
              onClick={() => window.open("https://calendar.google.com", "_blank")}
            />

            <img
              src={Button_download_Applecalendar}
              alt="Apple Calendars"
              className="calendar-sync-img"
              onClick={() =>
                window.open("https://support.apple.com/guide/calendar/welcome/mac", "_blank")
              }
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Page5;


