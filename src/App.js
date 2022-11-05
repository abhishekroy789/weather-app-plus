import React from "react";
import "./App.css";
import OtherDetails from "./components/OtherDetails/OtherDetails";
import QuickCities from "./components/QuickCities/QuickCities";
import SearchBar from "./components/SearchBar/SearchBar";
import SunDeatails from "./components/SunDeatails/SunDeatails";
import TemperatureDetails from "./components/TemperatureDetails/TemperatureDetails";
import TimeAndLocation from "./components/TimeAndLocation/TimeAndLocation";

function App() {
  return (
    <div className="App">
      <QuickCities />
      <SearchBar />
      <TimeAndLocation />
      <TemperatureDetails />
      <SunDeatails />
      <OtherDetails />
    </div>
  );
}

export default App;
