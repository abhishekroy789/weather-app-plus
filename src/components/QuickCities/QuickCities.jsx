import React from "react";
import "./style.css";

const QuickCities = ({ setQuery }) => {
  const cities = [
    {
      id: 1,
      title: "Mumbai",
    },
    {
      id: 2,
      title: "Kolkata",
    },
    {
      id: 3,
      title: "Bangalore",
    },
    {
      id: 4,
      title: "Delhi",
    },
    {
      id: 5,
      title: "Bhilai",
    },
  ];

  return (
    <div className="city-container">
      {cities.map((city) => (
        <span key={city.id} onClick={() => setQuery({ q: city.title })}>
          {city.title}
        </span>
      ))}
    </div>
  );
};

export default QuickCities;
