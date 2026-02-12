import React from "react";
import "./Page13.css";

import logo from "./assets/logo0.png";

import Page13_Create from "./assets/Page13_Create.png";
import Page13_Plan from "./assets/Page13_Plan.png";
import Page13_Follow from "./assets/Page13_Follow.png";
import Page13_Get from "./assets/Page13_Get.png";
import Page13_Book from "./assets/Page13_Book.png";
import Page13_Comment from "./assets/Page13_Comment.png";
import Page13_View from "./assets/page13_View.png";

import Page13_Create_Mobile from "./assets/editor/Create_mobile.png";
import Page13_Plan_Mobile from "./assets/editor/Plan_mobile.png";
import Page13_Follow_Mobile from "./assets/editor/Follow_mobile.png";
import Page13_Get_Mobile from "./assets/editor/Get_mobile.png";
import Page13_Book_Mobile from "./assets/editor/Book_mobile.png";
import Page13_Comment_Mobile from "./assets/editor/Comment_mobile.png";
import Page13_View_Mobile from "./assets/editor/View_mobile.png";

const mobileItems = [
  { text: "Create", subtitle: "Personal Planning Space", img: Page13_Create_Mobile },
  { text: "Plan", subtitle: "Your Days", img: Page13_Plan_Mobile },
  { text: "Follow", subtitle: "Organisers you Like", img: Page13_Follow_Mobile },
  { text: "Get", subtitle: "Your Organisers’ event details", img: Page13_Get_Mobile },
  { text: "Book", subtitle: <>Your slots and events<br />with organisers </>, img: Page13_Book_Mobile },
  { text: "Comment", subtitle: "On events, like and mark Attendance", img: Page13_Comment_Mobile },
  { text: "View", subtitle: "Your events Together!", img: Page13_View_Mobile },
];

const Page13 = () => {
  return (
    <div className="page13">
      {/* Desktop View */}
      <div className="page13-desktop">
        <div className="page13-header">
          <span className="page13-with-text">with </span>
          <img src={logo} alt="Logo" className="page13-logo" />
          <span className="page13-fragment-text">Fragment</span>
        </div>

        <div className="page13-section"><img src={Page13_Create} alt="Create" className="page13-image" /></div>
        <div className="page13-section"><img src={Page13_Plan} alt="Plan" className="page13-image" /></div>
        <div className="page13-section"><img src={Page13_Follow} alt="Follow" className="page13-image" /></div>
        <div className="page13-section"><img src={Page13_Get} alt="Get" className="page13-image" /></div>
        <div className="page13-section"><img src={Page13_Book} alt="Book" className="page13-image" /></div>
        <div className="page13-section"><img src={Page13_Comment} alt="Comment" className="page13-image" /></div>
        <div className="page13-section"><img src={Page13_View} alt="View" className="page13-image" /></div>
      </div>

      {/* Mobile View */}
      <div className="page13-mobile">
        <div className="page13-header page13-header-mobile">
          <span className="page13-with-text">with </span>
          <img src={logo} alt="Logo" className="page13-logo" />
          <span className="page13-fragment-text">Fragment</span>
        </div>

        {mobileItems.map((item, i) => (
          <React.Fragment key={i}>
            <div className="page13-mobile-item">
              <span className={
                item.text === "Create" ? "page13-mobile-text-create" :
                  item.text === "Plan" ? "page13-mobile-text-plan" :
                    item.text === "Follow" ? "page13-mobile-text-follow" :
                      item.text === "Get" ? "page13-mobile-text-get" :
                        item.text === "Book" ? "page13-mobile-text-book" :
                          item.text === "Comment" ? "page13-mobile-text-comment" :
                            item.text === "View" ? "page13-mobile-text-view" :
                              "page13-mobile-text"
              }>
                {item.text}
              </span>
              {item.subtitle && (
                <span className={
                  item.text === "Plan" ? "page13-mobile-subtitle-plan" :
                    item.text === "Follow" ? "page13-mobile-subtitle-follow" :
                      item.text === "Get" ? "page13-mobile-subtitle-get" :
                        item.text === "Book" ? "page13-mobile-subtitle-book" :
                          item.text === "Comment" ? "page13-mobile-subtitle-comment" :
                            item.text === "View" ? "page13-mobile-subtitle-view" :
                              "page13-mobile-subtitle"
                }>
                  {item.subtitle}
                </span>
              )}
              <img src={item.img} className="page13-mobile-image" alt={item.text} />
            </div>
            {/* Vector 1609: alternating line - left for even index, right for odd index */}
            <div className={`page13-mobile-divider-line ${i % 2 === 0 ? 'p13-line-left' : 'p13-line-right'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="200" height="4" viewBox="0 0 200 4" fill="none">
                <path d="M0 1.75244L200 1.75252" stroke="#3BC2DF" strokeWidth="3.50495" />
              </svg>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Page13;


