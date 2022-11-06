import React from "react";
import "./style.css";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { iconUrlFromCode } from "../../services/WeatherService";

const TemperatureDetails = ({
  weather: { details, icon, temp, temp_min, temp_max, feels_like },
}) => {
  return (
    <>
      <div className="weather-container">
        <img alt="weather icon" src={iconUrlFromCode(icon)} />
        <div className="current">
          {`${temp.toFixed()}`}
          <sup>°C</sup>
        </div>
        <div className="min-max">
          <span>
            <AiOutlineArrowUp /> {`${temp_max.toFixed()}`}°C
          </span>
          <span>
            <AiOutlineArrowDown /> {`${temp_min.toFixed()}`}°C
          </span>
        </div>
      </div>
      <div className="weather-description">
        <span>Feels Like : {`${feels_like.toFixed()}`}°C</span>
        <p>{details}</p>
      </div>
    </>
  );
};

export default TemperatureDetails;
