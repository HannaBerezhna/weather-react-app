import React, { useState } from "react";
import axios from "axios";
import MainInformation from "./MainInformation";

export default function SearchEngine(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      humidity: response.data.main.humidity,
      mingrade: Math.round(response.data.main.temp_min),
      maxgrade: Math.round(response.data.main.temp_max),
      description: response.data.weather[0].main,
      icon: response.data.weather[0].icon,
    });
  }

  function Search() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2c48af3f43b8d8d0dc03bb103b9b4d3e&units=metric`;
    axios.get(url).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    Search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="SearchEngine">
        <div className="Main-header">
          <form className="boxes" onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Enter the city..."
              autoComplete="off"
              className="boxes-border beauty box-shadow"
              onChange={handleCityChange}
            />
            <input
              type="submit"
              value="Search"
              className="boxes-border box-shadow"
            />
            <button className="boxes-border box-shadow">Current</button>
          </form>
        </div>
        <MainInformation info={weatherData} />
      </div>
    );
  } else {
    Search();
    return "Loading";
  }
}
