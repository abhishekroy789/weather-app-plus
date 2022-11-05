import React from "react";
import "./App.css";
import QuickCities from "./components/QuickCities/QuickCities";
import SearchBar from "./components/SearchBar/SearchBar";
import TimeAndLocation from "./components/TimeAndLocation/TimeAndLocation";

function App() {
  return (
    <div className="App">
      <QuickCities />
      <SearchBar />
      <TimeAndLocation />
    </div>
  );
}

export default App;
