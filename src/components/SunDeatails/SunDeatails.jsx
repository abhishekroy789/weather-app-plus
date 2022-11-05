import React from "react";
import "./style.css";
import { BsSunriseFill, BsSunsetFill } from "react-icons/bs";

const SunDeatails = () => {
  return (
    <div className="sun-container">
      <div className="sun-details">
        <i>
          <BsSunriseFill />
        </i>
        <p>Sun Rise</p>
        <span>05:21 AM</span>
      </div>
      <div className="sun-details">
        <i>
          <BsSunsetFill />
        </i>
        <p>Sun Set</p>
        <span>05:21 PM</span>
      </div>
    </div>
  );
};

export default SunDeatails;
