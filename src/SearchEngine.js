import React, { useState } from "react";
import axios from "axios";
import MainInformation from "./MainInformation";
import Forecast from "./Forecast";
import { InfinitySpin } from "react-loader-spinner";

export default function SearchEngine(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
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
    event.preventDefault();
    setCity(event.target.value);
  }

  function handlePosition(position) {
  let apiKey = "2c48af3f43b8d8d0dc03bb103b9b4d3e";
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
}
function getCurrentPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(handlePosition);}

  if (weatherData.ready) {
    return (
      <div className="SearchEngine">
        <div className="border-section box-shadow markUp">
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
              <button className="boxes-border box-shadow" onClick={getCurrentPosition}>Current</button>
            </form>
          </div>
          <MainInformation info={weatherData} />
        </div>
        <Forecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    Search();
    return (
      <div className="Spinner">
        <InfinitySpin width="200" color="#5a6275" />
      </div>
    );
  }
}
