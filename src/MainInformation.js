import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import WeatherUnit from "./WeatherUnit";

export default function MainInformation(props) {
  return (
    <div className="Main-information">
      <div className="row">
        <div className="col-md-6 col-sm-6">
          <h1> {props.info.city} </h1>
          <div className="main-information-header">
            {" "}
            <FormatDate date={props.info.date} />{" "}
          </div>
          <div className="main-information-section">
            Humidity: {props.info.humidity} %
          </div>
          <div className="main-information-section">
            Wind: {props.info.wind} km/h
          </div>
        </div>
        <div className="col-md-6 col-sm-6">
          <div className="d-flex justify-content-end margin-right">
            <div className="main-icon">
              <WeatherIcon code={props.info.icon} />
            </div>
            <div>
              <WeatherUnit celsius={props.info.temperature} />
              <div className="main-information-section">
                <span>{props.info.mingrade} </span>° /
                <span> {props.info.maxgrade}</span>°
              </div>
              <div className="main-information-header text-capitalize">
                {" "}
                {props.info.description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
