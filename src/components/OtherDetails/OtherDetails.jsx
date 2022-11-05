import React from "react";
import "./style.css";
import { BsDropletHalf, BsWind } from "react-icons/bs";
import { MdOutlineCompress } from "react-icons/md"

const OtherDetails = () => {
  return (
    <div className="other-container">
      <div className="other">
        <i><BsDropletHalf /></i>
        <p>Humidity</p>
        <span>50%</span>
      </div>
      <div className="other">
        <i><MdOutlineCompress /></i>
        <p>Pressure</p>
        <span>50%</span>
      </div>
      <div className="other">
        <i><BsWind /></i>
        <p>Wind Speed</p>
        <span>5 kmph</span>
      </div>
    </div>
  );
};

export default OtherDetails;
