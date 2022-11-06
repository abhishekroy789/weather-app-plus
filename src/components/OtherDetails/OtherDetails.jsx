import React from "react";
import "./style.css";
import { BsDropletHalf, BsWind } from "react-icons/bs";
import { MdOutlineCompress } from "react-icons/md";

const OtherDetails = ({ weather: { humidity, pressure, speed } }) => {
  return (
    <div className="other-container">
      <div className="other">
        <i>
          <BsDropletHalf />
        </i>
        <p>Humidity</p>
        <span>{`${humidity.toFixed()}`}%</span>
      </div>
      <div className="other">
        <i>
          <MdOutlineCompress />
        </i>
        <p>Pressure</p>
        <span>{`${pressure.toFixed()}`} hPa</span>
      </div>
      <div className="other">
        <i>
          <BsWind />
        </i>
        <p>Wind Speed</p>
        <span>{`${speed.toFixed()}`} km/h</span>
      </div>
    </div>
  );
};

export default OtherDetails;
