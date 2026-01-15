import React from "react";
import "./Page4.css";
import logo from "./assets/blogo.png";
import CreateImg from "./assets/Group 43057 Create Image.png";
import PlanImg from "./assets/Group 650 Plan Image.png";
import ShareImg from "./assets/Group 578 Share Image.png";
import KnowImg from "./assets/Group 651 Know Image.png";
import AddImg from "./assets/Group 43059 Add Image.png";
import ShowImg from "./assets/Group 43060 Show Image.png";
import InteractImg from "./assets/Group 43061 Interact Image.png";
import SeeImg from "./assets/Group 43062 See Image.png";

const images = [
  CreateImg,
  PlanImg,
  ShareImg,
  KnowImg,
  AddImg,
  ShowImg,
  InteractImg,
  SeeImg
];

export default function Page4() {
  return (
    <div className="page4-wrapper" style={{ position: "relative" }}>
      <div className="page4-header">
        <span className="page4-with-text">with </span>
        <img src={logo} alt="Logo" className="page4-logo" />
        <span className="page4-fragment-text">Fragment Business</span>
      </div>
      {images.map((img, i) => (
        <div key={i} className="image-row">
          <img src={img} className="section-image" alt={`section-${i}`} />
        </div>
      ))}
    </div>
  );
}

