import "./style.css";
import React from "react";
import { formatToLocalTime } from "../../services/WeatherService";

const TimeAndLocation = ({ weather: { dt, timezone, name, country } }) => {
  return (
    <div className="time-loc-container">
      <div className="time-container">
        <span>{formatToLocalTime(dt, timezone)}</span>
      </div>
      <div className="loc-container">
        <span>{`${name}, ${country}`}</span>
      </div>
    </div>
  );
};

export default TimeAndLocation;
