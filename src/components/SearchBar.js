import React from "react";
import "./Search.css";

export default function SearchBar(props) {
  const loader = props.loadingBtn ? (
    <button className="hvr-bounce-to-right myBtn">
      <i className="fa fa-refresh fa-spin" style={{ fontSize: "24px" }}></i>
    </button>
  ) : (
    <button className="hvr-bounce-to-right myBtn" onClick={props.getWeatherBtn}>
      Search
    </button>
  );

  return (
    <div>
      <div id="inputField">
        <h2 className="weather-heading">Weather App</h2>
        <input
          type="text"
          placeholder="Get weather in your city"
          value={props.clearInput ? "" : props.inputVal}
          className="inputs"
          onChange={props.getCity}
        />
        {loader}
      </div>
    </div>
  );
}
