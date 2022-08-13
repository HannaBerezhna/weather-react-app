import React, { useState } from "react";
import axios from "axios";

export default function Header() {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
      city: response.data.name,
      date: "Monday, 18:00",
      humidity: response.data.main.humidity,
      mingrade: Math.round(response.data.main.temp_min),
      maxgrade: Math.round(response.data.main.temp_max),
      description: response.data.weather[0].main,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="SearchEngine">
        <div className="Main-header">
          <form className="boxes">
            <input
              type="search"
              placeholder="Enter the city..."
              autoComplete="off"
              className="boxes-border beauty box-shadow"
            />
            <input
              type="submit"
              value="Search"
              className="boxes-border box-shadow"
            />
            <button className="boxes-border box-shadow">Current</button>
          </form>
        </div>
        <div className="Main-information">
          <div className="row">
            <div className="col-md-6 col-sm-6">
              <h1> {weatherData.city} </h1>
              <div className="main-information-header">{weatherData.date}</div>
              <div className="main-information-section">
                Humidity: {weatherData.humidity} %
              </div>
              <div className="main-information-section">
                Wind: {weatherData.wind} km/h
              </div>
            </div>
            <div className="col-md-6 col-sm-6">
              <div className="d-flex justify-content-end margin-right">
                <div>
                  <img
                    src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
                    alt="Clear"
                    className="main-icon"
                  />
                </div>
                <div>
                  <div className="main-grade"> {weatherData.temperature}°</div>
                  <div className="main-information-section">
                    <a href="/"> °C </a> |<a href="/"> °F </a>
                  </div>
                  <div className="main-information-section">
                    <span>{weatherData.mingrade} </span>° /
                    <span> {weatherData.maxgrade}</span>°
                  </div>
                  <div className="main-information-header">
                    {" "}
                    {weatherData.description}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let city = "London";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2c48af3f43b8d8d0dc03bb103b9b4d3e&units=metric`;
    axios.get(url).then(handleResponse);
    return "Loading";
  }
}
