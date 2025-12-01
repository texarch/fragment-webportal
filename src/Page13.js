// import React from 'react';
// import './Page13.css';
// import './Page12.css';
// import page1bg from './page1bg.png';
// import grey from './page13image.png';
// const Page13 = () => {
//   return (
//     <div className="page12-container">
//       <div className="page13-left-section" style={{ backgroundImage: `url(${page1bg})` }}>
//         <div className="page13-image-wrapper">
//           <img src={grey} alt="Page 18" className="page13-image" />
//           <h1 className="page13-plan-text">Plan</h1>
//         </div>
//       </div>
//       <div className="page13-right-section"></div>
//     </div>
//   );
// };
// export default Page13;

import React from "react";
import "./Page13.css";

import logo from "./logo0.png";

import Page13_Create from "./Page13_Create.png";
import Page13_Plan from "./Page13_Plan.png";
import Page13_Follow from "./Page13_Follow.png";
import Page13_Get from "./Page13_Get.png";
import Page13_Book from "./Page13_Book.png";
import Page13_Comment from "./Page13_Comment.png";
import Page13_View from "./page13_View.png";

const Page13 = () => {
  return (
    <div className="page13">
      {/* Header */}
      <div className="page13-header">
        <img src={logo} alt="Logo" className="page13-logo" />
        <span className="page13-with">with</span>
        <span className="page13-title">Fragment</span>
      </div>

      {/* 1. Create – image left, text right */}
      <div className="page13-section section-create">
        <img src={Page13_Create} alt="Create" className="page13-image" />
        <h2 className="page13-heading page13-text-right">Create</h2>
      </div>

      {/* 2. Plan – image right, text left */}
      <div className="page13-section page13-section-reverse section-plan">
        <img src={Page13_Plan} alt="Plan" className="page13-image" />
        <h2 className="page13-heading page13-text-left">Plan</h2>
      </div>

      {/* 3. Follow – image left, text right */}
      <div className="page13-section section-follow">
        <img src={Page13_Follow} alt="Follow" className="page13-image" />
        <h2 className="page13-heading page13-text-right">Follow</h2>
      </div>

      {/* 4. Get – image right, text left */}
      <div className="page13-section page13-section-reverse section-get">
        <img src={Page13_Get} alt="Get" className="page13-image" />
        <h2 className="page13-heading page13-text-left">Get</h2>
      </div>

      {/* 5. Book – image left, text right */}
      <div className="page13-section section-book">
        <img src={Page13_Book} alt="Book" className="page13-image" />
        <h2 className="page13-heading page13-text-right">Book</h2>
      </div>

      {/* 6. Comment – image right, text left */}
      <div className="page13-section page13-section-reverse section-comment">
        <img src={Page13_Comment} alt="Comment" className="page13-image" />
        <h2 className="page13-heading page13-text-left">Comment</h2>
      </div>

      {/* 7. View – image left, text right */}
      <div className="page13-section section-view">
        <img src={Page13_View} alt="View" className="page13-image" />
        <h2 className="page13-heading page13-text-right">View</h2>
      </div>
    </div>
  );
};
export default Page13;