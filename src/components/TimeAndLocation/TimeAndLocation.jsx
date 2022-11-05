import "./style.css";
import React from "react";

const TimeAndLocation = () => {
  return (
    <div className="time-loc-container">
      <div className="time-container">
        <span>Saturday, 05 Nov 2022 | Local time: 07:32 PM</span>
      </div>
      <div className="loc-container">
        <span>Bhilai, IN</span>
      </div>
    </div>
  );
};

export default TimeAndLocation;
