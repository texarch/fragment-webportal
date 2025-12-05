import React from "react";
import "./Page4.css";
import BUlogo from "./BU_logo.png";
import CreateImg from "./Group 43057 Create Image.png";
import PlanImg from "./Group 650 Plan Image.png";
import ShareImg from "./Group 578 Share Image.png";
import KnowImg from "./Group 651 Know Image.png";
import AddImg from "./Group 43059 Add Image.png";
import ShowImg from "./Group 43060 Show Image.png";
import InteractImg from "./Group 43061 Interact Image.png";
import SeeImg from "./Group 43062 See Image.png";

const images = [
  BUlogo,
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
      {images.map((img, i) => (
        <div key={i} className="image-row">
          <img src={img} className={`section-image ${i === 0 ? "title-image" : ""}`} alt={`section-${i}`} />
        </div>
      ))}
    </div>
  );
}
