import React from "react";
import "./style.css";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

const TemperatureDetails = () => {
  return (
    <div className="weather-container">
      <img
        alt="weather icon"
        src="http://openweathermap.org/img/wn/01n@2x.png"
      />
      <div className="current">
        25
        <sup>°C</sup>
      </div>
      <div className="min-max">
        <span>
          <AiOutlineArrowUp /> 25°C
        </span>
        <span>
          <AiOutlineArrowDown /> 25°C
        </span>
      </div>
    </div>
  );
};

export default TemperatureDetails;
