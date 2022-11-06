import React from "react";
import "./style.css";
import { iconUrlFromCode } from "../../services/WeatherService";

const Forecast = ({ items }) => {
  return (
    <div className="forecast-container">
      <p>Forecast</p>
      <hr />

      <div className="forecast-wrapper">
        {items.map((item, index) => (
          <div key={index}>
            <span>{item.title}</span>
            <img alt="weather icon" src={iconUrlFromCode(item.icon)} />
            <p>{`${item.temp.toFixed()}`}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
