import React from 'react';
import './Page9.css';
import Group from './Group.png'; 

const Page9 = () => {
  return (
    <div className="page9-container">
      <div className="left-side9">
        <h1 className="text9">View</h1>
      </div>
      <div className="right-side9">
        <img src={Group} alt="Page 8" className="page9-image" />
      </div>
    </div>
  );
};

export default Page9;
