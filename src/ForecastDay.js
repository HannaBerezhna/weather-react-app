import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="border-hover">
      <div>{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={50} />
      <div className="main-information-section">
        <span> {maxTemperature()} </span>
        <span className="temp-min"> {minTemperature()} </span>
      </div>
    </div>
  );
}
