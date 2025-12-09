// import React from 'react';
// import './Page12.css';
// import page1bg from './assets/page1bg.png';
// import page12 from './assets/page12.png';
// import blogo from './assets/blogo.png';

// // Page12 component renders a section with a logo, text, and image, styled with Page12.css
// const Page12 = () => {
//   return (
//     <div>
//       <div className="dark-margin"></div>
//       <div className="page12-container">
//         <div
//           className="page12-content"
//           style={{ backgroundImage: `url(${page1bg})` }}
//           data-testid="page12-content"
//         >
//           <div className="logo-image">
//             <img className="logo-img12" src={blogo} alt="Logo" />
//             <span className="fragmentb">Fragment Business</span>
//           </div>
//           <div className="page12-image-wrapper">
//             <img className="page12-image" src={page12} alt="Main Image" />
//             <div className="page12-text">Create</div>
//           </div>
//         </div>
//         <div className="page12-right-section">
//           <div className="page12-right-section-inner"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Page12;

import React from "react";
import "./Page12.css";
import IndividualPage2 from "./assets/Individual_Page2.png";

// Local buttons
import PlayStoreButton from "./assets/playstore_button.png";
import AppStoreButton from "./assets/Appstore_button.png";

const Page12 = () => {
  return (
    <div className="page12">
      <div className="page12-content">

        {/* Top Section */}
        <div className="page12-top">

          {/* UPDATED HEADING */}
          <div className="page12-heading-custom">
            Bring clarity to your day!!
          </div>

          {/* UPDATED SUBTEXT */}
          <div className="page12-subtext-custom">
            Also Available on
          </div>

          <div className="page12-buttons">
            <a href="#" className="store-btn">
              <img src={PlayStoreButton} alt="Play Store" />
            </a>
            <a href="#" className="store-btn">
              <img src={AppStoreButton} alt="App Store" />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="page12-bottom">
          <div className="page12-image-container">
            <img
              src={IndividualPage2}
              alt="Calendar App Preview"
              className="page12-image"
            />
          </div>

          <div className="page12-text">

            {/* UPDATED SLOGAN */}
            <div className="page12-slogan-custom">
              Plan better, sync faster, stay in the know.
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Page12;




