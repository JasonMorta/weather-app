import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./components/SearchBar";
import "./App.css";
import React from "react";
import WeatherOutput from "./components/WeatherOutput";

export default function App() {
  const [myWeather, setMyWeather] = React.useState({});
  const [state, setState] = React.useState({
    loadingBtn: false,
    errors: false,
    isLoaded: false,
    userCity: "s", // user city name
    displayWeather: false,
    updateUI: false,
    inputVal: false,
    clearInput: false
  });

  //add your own API after appid=yourKey
  const request = async function () {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${state.userCity}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
    );
    const data = await response.json(); //convert data to json
    setMyWeather(data); //save data to state

    //handle errors
    if (data.message) {
      setState({ errors: true, inputVal: "" }); // if errors, dont update UI. only display error message
    } else {
      setState({
        updateUI: true, // if no errors, update UI
        loadingBtn: false,
        inputVal: "",
        userCity: "",
        clearInput: true
      });
    }

   
  }; //end of request

  //gets the wether data BUTTON
  //to avoid ui errors, set updateUi to false, then fetch api request.
  async function getWeatherBtn() {
    setState({
      updateUI: false, // if fetch has errors, UI will crash.
      loadingBtn: true,
    }); //So disable UI before update. then only update after fetch was success.
    request();
    setTimeout(() => {
    setState({clearInput: true})// clear input after request
    }, 0);
  }

  //get the users INPUT/city name and adds it to state.
  function getCity(e) {
    setState({ userCity: e.target.value });
  }

  const searchBtn = (
    <SearchBar
      loadingBtn={state.loadingBtn}
      getWeatherBtn={getWeatherBtn}
      getCity={getCity}
      clearInput={state.clearInput}
    />
  );
  return (
    <div className="App">
      <section className="App-header">
        {searchBtn}
        {state.updateUI ? (
          <WeatherOutput
            cityName={myWeather.name}
            temperature={myWeather.main.temp}
            clouds={myWeather.clouds.all}
            humidity={myWeather.main.humidity}
            pressure={myWeather.main.pressure}
            windDr={myWeather.wind.deg}
            windSp={myWeather.wind.speed}
            inputVal={state.inputVal}
            
          />
        ) : myWeather.message ? (
          <p>City Not Found</p>
        ) : (
          <></>
        )}
      </section>
    </div>
  );
}
