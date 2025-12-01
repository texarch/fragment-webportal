import React from "react";
import "./Page3.css";
import LaptopImage from "./Laptop_Image_Page3.png";

const Page3 = () => {
  return (
    <div className="page3-wrapper">
      <div className="page3-content">

        {/* LEFT TEXT SECTION */}
        <div className="page3-text-section">

          <div className="page3-heading-bar">
            <h2 className="page3-heading">Co-Create Your<br/>Events</h2>
          </div>

          <p className="page3-subtext">
            Add collaborators to your calendars so they can add, edit, and manage events with you
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="page3-image-section">
          <img
            src={LaptopImage}
            alt="Laptop Preview"
            className="page3-laptop-image"
          />
        </div>

      </div>
    </div>
  );
};

export default Page3;
