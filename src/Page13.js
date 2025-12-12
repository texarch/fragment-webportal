import React from "react";
import "./Page13.css";

import logo from "./assets/logo0.png";

import Page13_Create from "./assets/Page13_Create.png";
import Page13_Plan from "./assets/Page13_Plan.png";
import Page13_Follow from "./assets/Page13_Follow.png";
import Page13_Get from "./assets/Page13_Get.png";
import Page13_Book from "./assets/Page13_Book.png";
import Page13_Comment from "./assets/Page13_Comment.png";
import Page13_View from "./assets/page13_View.png";

const Page13 = () => {
  return (
    <div className="page13">
      {/* Header */}
      <div className="page13-header">
        <img src={logo} alt="Logo" className="page13-logo" />
        <div className="page13-header-text">
          <span className="page13-with-text">with </span>
          <span className="page13-fragment-text">Fragment</span>
        </div>
      </div>

      {/* Sections */}
      <div className="page13-section"><img src={Page13_Create} alt="Create" className="page13-image" /></div>
      <div className="page13-section"><img src={Page13_Plan} alt="Plan" className="page13-image" /></div>
      <div className="page13-section"><img src={Page13_Follow} alt="Follow" className="page13-image" /></div>
      <div className="page13-section"><img src={Page13_Get} alt="Get" className="page13-image" /></div>
      <div className="page13-section"><img src={Page13_Book} alt="Book" className="page13-image" /></div>
      <div className="page13-section"><img src={Page13_Comment} alt="Comment" className="page13-image" /></div>
      <div className="page13-section"><img src={Page13_View} alt="View" className="page13-image" /></div>
    </div>
  );
};

export default Page13;


