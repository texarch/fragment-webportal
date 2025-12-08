// import React from 'react';
// import './Page14.css';
// import page1bg from './page1bg.png';
// import page14 from './page14a.png';


// const Page14 = () => {
//   return (
//     <div className="page14-container">
//       <div
//         className="page14-left-section"
//         style={{ backgroundImage: `url(${page1bg})` }}
//       >
//         <div className="page14-image-wrapper">
//           <h1 className="page14-text">View</h1>
//           <img
//             src={page14}
//             alt="Page 16"
//             className="page14-image"
//           />
//         </div>
//       </div>
//       <div className="page14-right-section">
    
//       </div>
//     </div>
//   );
// };

// export default Page14;

import React from "react";
import "./Page14.css";

import playBadge from "./playstore_button.png";
import appBadge from "./Appstore_button.png";
import globeIcon from "./Icon set_Page5.png";

import googleCalBtn from "./Button_download_Googlecalendars.png";
import appleCalBtn from "./Button_download_Applecalendar.png";

const Page14 = () => {
  return (
    <div className="page14">
      {/* Section 1 */}
      <div className="planner-section">
        <p className="planner-text">
          Busy being a <span className="highlight">Planner</span>
        </p>

        <p className="subtext">Fragment makes time feel Kinder !!</p>

        {/* <div className="website">
          <img src={globeIcon} alt="globe icon" className="globe-img" />
          www.Fragment.com
        </div>

        <p className="or-text">or</p> */}

        <div className="store-buttons">
          <img
            src={playBadge}
            alt="Play Store"
            className="store-badge"
            onClick={() =>
              window.open(
                "https://play.google.com/store/apps/details?id=com.example.fragment",
                "_blank"
              )
            }
          />

          <img
            src={appBadge}
            alt="App Store"
            className="store-badge"
            onClick={() =>
              window.open(
                "https://apps.apple.com/app/example-fragment/id00000000",
                "_blank"
              )
            }
          />
        </div>
      </div>

      {/* Section 2 — Sync Calendars */}
      <div className="sync-section">
        <p className="sync-heading">
          Sync your other calendars with Fragment
        </p>

        <div className="calendar-buttons">
          <img
            src={googleCalBtn}
            alt="Google Calendars"
            className="calendar-download-btn"
            onClick={() =>
              window.open("https://calendar.google.com", "_blank")
            }
          />

          <img
            src={appleCalBtn}
            alt="Apple Calendars"
            className="calendar-download-btn"
            onClick={() =>
              window.open(
                "https://support.apple.com/guide/calendar/welcome/mac",
                "_blank"
              )
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Page14;


