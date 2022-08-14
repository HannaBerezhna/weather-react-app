import React, { useState } from "react";

export default function WeatherUnit(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="main-grade">
        {Math.round(props.celsius)} °
        <div className="main-information-section">
          °C |
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </div>
      </div>
    );
  } else {
    return (
      <div className="main-grade">
        {Math.round(fahrenheit())} °
        <div className="main-information-section">
          <a href="/" onClick={showCelsius}>
            °C
          </a>
          | °F
        </div>
      </div>
    );
  }
}
