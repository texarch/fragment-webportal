import React from "react";
import "./Page8.css";
import phoneEmojiImage from "./phone_emoji_image_page8.png";

const Page8 = () => {
  return (
    <div className="page8-container">

      {/* TEXT SECTION */}
      <div className="text-block">

        <div className="small-heading">
          Our Calendars keep you on time
        </div>

        {/* Title Centered Like Screenshot */}
        <div className="title-wrapper">
          <div className="title-line-1 cambo">
            Our <span className="larger">To-Do’s</span> keep you
          </div>

          <div className="title-line-2 cambo">
            on Track!
          </div>
        </div>
      </div>

      {/* PHONE IMAGE */}
      <div className="image-wrapper">
        <img
          src={phoneEmojiImage}
          alt="To-do mockup"
          className="phone-img"
        />
      </div>

    </div >
  );
};

export default Page8;