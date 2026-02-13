import React from "react";
import "./Page9.css";
import LaptopPage9 from "./assets/laptop_page9.png";

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

      {/* Mobile Images (Triangle Layout) */}
      <div className="page9-mobile-images">
        <div className="page9-mobile-top">
          <img src={require("./assets/Page9_mobile(2).png")} alt="Mobile View 2" />
        </div>
        <div className="page9-mobile-bottom">
          <img src={require("./assets/Page9_mobile(1).png")} alt="Mobile View 1" />
          <img src={require("./assets/Page9_mobile(3).png")} alt="Mobile View 3" />
        </div>
      </div>
    </div>
  );
};

export default Page9;
