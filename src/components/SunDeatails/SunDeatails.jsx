import React from "react";
import "./style.css";
import { BsSunriseFill, BsSunsetFill } from "react-icons/bs";
import { formatToLocalTime } from "../../services/WeatherService";

const SunDeatails = ({ weather: { sunrise, sunset, timezone } }) => {
  return (
    <div className="sun-container">
      <div className="sun-details">
        <i>
          <BsSunriseFill />
        </i>
        <p>Sun Rise</p>
        <span>{formatToLocalTime(sunrise, timezone, "hh:mm a")}</span>
      </div>
      <div className="sun-details">
        <i>
          <BsSunsetFill />
        </i>
        <p>Sun Set</p>
        <span>{formatToLocalTime(sunset, timezone, "hh:mm a")}</span>
      </div>
    </div>
  );
};

export default SunDeatails;
