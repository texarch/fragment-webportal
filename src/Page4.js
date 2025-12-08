import React from "react";
import "./Page4.css";
import logo from "./logo0.png";
import CreateImg from "./Group 43057 Create Image.png";
import PlanImg from "./Group 650 Plan Image.png";
import ShareImg from "./Group 578 Share Image.png";
import KnowImg from "./Group 651 Know Image.png";
import AddImg from "./Group 43059 Add Image.png";
import ShowImg from "./Group 43060 Show Image.png";
import InteractImg from "./Group 43061 Interact Image.png";
import SeeImg from "./Group 43062 See Image.png";

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
    <div className="page4-wrapper">
      <div className="page4-header">
        <img src={logo} alt="Logo" className="page4-logo" />
        <div className="page4-header-text">
          <span className="page4-with-text">For </span>
          <span className="page4-fragment-text">Business</span>
        </div>
      </div>
      {images.map((img, i) => (
        <div key={i} className="image-row">
          <img src={img} className="section-image" alt={`section-${i}`} />
        </div>
      ))}
    </div>
  );
}