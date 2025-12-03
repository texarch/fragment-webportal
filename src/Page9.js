import React from "react";
import "./Page9.css";
import LaptopPage9 from "./laptop_page9.png";

const Page9 = () => {
  return (
    <div className="page9">
      <div className="page9-text">
        <div className="page9-title">
          <span className="cambo normal text-8xl">Try us on your </span>
          <span className="sf-bold text-8xl">Desktop </span>
          <span className="cambo normal text-8xl">!!</span>
        </div>

        <p className="page9-subtitle">
          <span className="sf-bold text-3xl">Fragment Business </span>
          <span className="sf text-3xl">
            is also available for your Desktop and Website not just your mobile.
          </span>
        </p>
      </div>

      <div className="page9-image">
        <img
          src={LaptopPage9}
          alt="Fragment Business Desktop Preview"
          className="desktop-preview"
        />
      </div>
    </div>
  );
};

export default Page9;
