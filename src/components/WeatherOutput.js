import React from "react";
import "./WeatherOutput.css";

export default function WeatherOutput(props) {
  return (
    <div className="weather-output">
      <table className="generated-table">
        <thead>
          <tr>
            <th colSpan="2">City: {props.cityName}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Temp:</td>
            <td>{props.temperature}°С</td>
          </tr>
          <tr>
            <td>Clouds:</td>
            <td>{props.clouds}%</td>
          </tr>
          <tr>
            <td>Humidity:</td>
            <td>{props.humidity}%</td>
          </tr>
          <tr>
            <td>Pressure:</td>
            <td>{props.pressure}hPa</td>
          </tr>
          <tr>
            <td>Wind Direction:</td>
            <td>{props.windDr}°</td>
          </tr>
          <tr>
            <td>Wind Speed:</td>
            <td>{props.windSp}m/s</td>
          </tr>
        </tbody>
      </table>
      {/* <!-- Codes by Quackit.com --> */}
    </div>
  );
}
