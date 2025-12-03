import React from "react";
import "./Page8.css";
import phoneEmojiImage from "./phone_emoji_image_page8.png";

const Page8 = () => {
  return (
    <div className="page8-container">

      {/* TEXT SECTION */}
      <div className="text-block">
        <div className="w-[1104.88px] justify-start text-black text-3xl font-['SF_Pro'] leading-9 tracking-wider">
          Our Calendars keep you on time
        </div>

        <div className="title-wrapper">
          <div className="title-line-1">
            <span className="cambo text-7xl">Our </span>
            <span className="cambo text-8xl">To-Do’s</span>
            <span className="cambo text-7xl"> keep you </span>
          </div>

          <div className="title-line-2 cambo text-8xl">
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

    </div>
  );
};

export default Page8;
