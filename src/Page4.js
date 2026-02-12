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

// Mobile editor images
import MobileCreateImg from "./assets/editor/Create (1).png";
import MobilePlanImg from "./assets/editor/Plan.png";
import MobileShareImg from "./assets/editor/Share.png";
import MobileKnowImg from "./assets/editor/Know.png";
import MobileAddImg from "./assets/editor/Add.png";
import MobileShowImg from "./assets/editor/Show.png";
import MobileInteractImg from "./assets/editor/Interact.png";
import MobileSeeImg from "./assets/editor/See.png";

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

const mobileItems = [
  { text: "Create", subtitle: "User Groups", img: MobileCreateImg },
  { text: "Plan", subtitle: "Schedules and events for your groups.", img: MobilePlanImg },
  { text: "Share", subtitle: "Calendars and events privately or with all Users", img: MobileShareImg },
  { text: "Know", subtitle: "Who follows your calendars and gets updates automatically", img: MobileKnowImg },
  { text: "Add", subtitle: "Tickets to the events", img: MobileAddImg },
  { text: "Show", subtitle: "Availability for one on one's and other reservations", img: MobileShowImg },
  { text: "Interact", subtitle: "With your Users", img: MobileInteractImg },
  { text: "See", subtitle: "User Likes and Attending", img: MobileSeeImg },
];

export default function Page4() {
  return (
    <div className="page4-wrapper" style={{ position: "relative" }}>
      {/* Desktop View */}
      <div className="page4-desktop">
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

      {/* Mobile View */}
      <div className="page4-mobile">
        <div className="page4-header page4-header-mobile">
          <span className="page4-with-text">with </span>
          <img src={logo} alt="Logo" className="page4-logo" />
          <span className="page4-fragment-text">Fragment Business</span>
        </div>
        {mobileItems.map((item, i) => (
          <React.Fragment key={i}>
            <div className="mobile-item">
              <span className="mobile-item-text">{item.text}</span>
              {item.subtitle && <span className="mobile-item-subtitle">{item.subtitle}</span>}
              <img src={item.img} className="mobile-item-image" alt={item.text} />
            </div>
            {/* Alternating line: left for even index (0,2,4,6), right for odd index (1,3,5,7) */}
            <div className={`mobile-divider-line ${i % 2 === 0 ? 'line-left' : 'line-right'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="200" height="4" viewBox="0 0 200 4" fill="none">
                <path d="M0 1.75244L200 1.75252" stroke="#404B5E" strokeWidth="3.50495" />
              </svg>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
