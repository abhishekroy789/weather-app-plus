import React, { useEffect, useState } from "react";
import "./App.css";
import Forecast from "./components/Forecast/Forecast";
import OtherDetails from "./components/OtherDetails/OtherDetails";
import QuickCities from "./components/QuickCities/QuickCities";
import SearchBar from "./components/SearchBar/SearchBar";
import SunDeatails from "./components/SunDeatails/SunDeatails";
import TemperatureDetails from "./components/TemperatureDetails/TemperatureDetails";
import TimeAndLocation from "./components/TimeAndLocation/TimeAndLocation";
import getFormattedWeatherData from "./services/WeatherService";

function App() {
  const [query, setQuery] = useState({ q: "bhilai" });
  const [weather, setWeather] = useState(null);
  let units = "metric";

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);

  const formatBg = () => {
    if (!weather) return "linear-gradient(to right, dodgerblue, blue)";
    const thershold = 25;
    if (weather.temp <= thershold)
      return "linear-gradient(to right, dodgerblue, blue)";
    return "linear-gradient(to right, orange, orangered)";
  };

  return (
    <div
      className="App"
      style={{background:`${formatBg()}`}}
    >
      <QuickCities setQuery={setQuery} />
      <SearchBar setQuery={setQuery} />
      {weather && (
        <>
          <TimeAndLocation weather={weather} />
          <TemperatureDetails weather={weather} />
          <SunDeatails weather={weather} />
          <OtherDetails weather={weather} />
          <Forecast items={weather.list} />
        </>
      )}
    </div>
  );
}

export default App;
