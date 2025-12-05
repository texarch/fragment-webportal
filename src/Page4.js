import React from "react";
import "./Page4.css";

import CreateImg from "./Group 43057 Create Image.png";
import PlanImg from "./Group 650 Plan Image.png";
import ShareImg from "./Group 578 Share Image.png";
import KnowImg from "./Group 651 Know Image.png";
import AddImg from "./Group 43059 Add Image.png";
import ShowImg from "./Group 43060 Show Image.png";
import InteractImg from "./Group 43061 Interact Image.png";
import SeeImg from "./Group 43062 See Image.png";

const sections = [
  { title: "Create", sub: "User Groups", img: CreateImg },
  { title: "Plan", sub: "Schedules and events for your groups.", img: PlanImg },
  { title: "Share", sub: "Calendars and events privately or with all Users", img: ShareImg },
  { title: "Know", sub: "Who follows your calendars and gets updates automatically", img: KnowImg },
  { title: "Add", sub: "Tickets to the events", img: AddImg },
  { title: "Show", sub: "Availability for one on one's and other reservations", img: ShowImg },
  { title: "Interact", sub: "With your Users", img: InteractImg },
  { title: "See", sub: "User Likes and Attending", img: SeeImg }
];

export default function Page4() {
  return (
    <div className="page4-wrapper">
      {sections.map((sec, i) => (
        <div key={i} className="section-block">
          <h1 className="section-title">{sec.title}</h1>
          <div className="center-line"></div>
          <p className="section-sub">{sec.sub}</p>
          <img src={sec.img} alt={sec.title} className="section-image" />
        </div>
      ))}
    </div>
  );
}
