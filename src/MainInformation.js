import React from "react";

export default function MainInformation() {
  let weatherData = {
    city: "Kyiv",
    date: "Monday, 18:00",
    humidity: "3.5",
    wind: "4",
    maingrade: "23",
    mingrade: "18",
    maxgrade: "25",
    description: "Cloud",
  };
  return (
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
              <div className="main-grade"> {weatherData.maingrade}</div>
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
  );
}
