import React from "react";
import "./Page17.css";
import Individual_Page17 from "./Individual_Page17.png";

const Page17 = () => {
  return (
    <div className="page17-container">

      {/* PHONE IMAGE LEFT */}
      <div className="page17-image-wrapper">
        <img
          src={Individual_Page17}
          alt="To-do mockup"
          className="page17-phone-img"
        />
      </div>

      {/* TEXT RIGHT */}
      <div className="page17-text-block">

        <div className="page17-small-heading">
          Our Calendars keep you on time
        </div>

        <div className="page17-title-wrapper">
          <div className="page17-title-line-1 cambo">
            Our <span className="page17-larger">To-Do’s</span> keep you
          </div>

          <div className="page17-title-line-2 cambo">
            on Track!
          </div>
        </div>

      </div>
    </div>
  );
};

export default Page17;
