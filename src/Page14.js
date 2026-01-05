// import React from 'react';
// import './Page14.css';
// import page1bg from './assets/page1bg.png';
// import page14 from './assets/page14a.png';


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

import playBadge from "./assets/playstore_button.png";
import appBadge from "./assets/Appstore_button.png";
import globeIcon from "./assets/Icon set_Page5.png";

import googleCalBtn from "./assets/Button_download_Googlecalendars.png";
import appleCalBtn from "./assets/Button_download_Applecalendar.png";

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
            onClick={() => window.open("https://play.google.com", "_blank")}
          />

          <img
            src={appBadge}
            alt="App Store"
            className="store-badge"
            onClick={() => window.open("https://apps.apple.com", "_blank")}
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
          />

          <img
            src={appleCalBtn}
            alt="Apple Calendars"
            className="calendar-download-btn"
          />
        </div>
      </div>
    </div>
  );
};

export default Page14;




