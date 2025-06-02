import React, { useState } from 'react';
import './Page3.css';
import DeviceImage from './Device3.png';
import RobotImage from './robot3.png';

function Page3() {
  const [checkedItems, setCheckedItems] = useState([true, true, true, true]);

  const toggleCheckbox = (index) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  };

  return (
    <div>
      <div className="dark-margin1"></div>
      <div className="app-background">
        <div className="box teal-box"></div>
        <div className="box gray-box"></div>

        <img src={DeviceImage} alt="Mobile Device" className="device-image" />

        <div className="robot-wrapper">
          <img src={RobotImage} alt="Robot" className="robot-image" />
          <div className="robot-shadow"></div>
        </div>

        <div className="text-content">
          <h1 className="main-heading"><b>Use Advanced AI </b>technology</h1>
          <div className="feature-list">
            <p className="intro-line">to</p>
            {[
              "Generate conflict free Schedules",
              "Set Reminder",
              "Generate Images",
              "Descriptions",
            ].map((text, index) => (
              <div className="feature-item" onClick={() => toggleCheckbox(index)} key={index}>
                <span className={`checkbox ${checkedItems[index] ? 'checked' : ''}`}></span>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page3;
