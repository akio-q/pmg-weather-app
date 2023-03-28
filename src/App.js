import { useState } from "react";

function App() {
  const [city, setCity] = useState(''); 
  const [temperature, setTemperature] = useState('');
  const [displayCity, setDisplayCity] = useState('');

  const onWeatherLoaded = (weatherObject) => {
    setTemperature(weatherObject.temp_c);
    setDisplayCity(weatherObject.name);
  }

  const updateWeather = () => {
    weatherService.getCurrentWeather(city)
      .then(onWeatherLoaded)
      .catch()
  }

  return (
    <div className="App">
      <h1>PMG weather app</h1>
      <div className="container">
        <div className="left-panel">
          <input id="search" value={city} onChange={(e) => setCity(e.target.value)}></input>
          <button onClick={updateWeather}>search</button>
        </div>

        <div className="right-panel">
          <h1>City Name</h1>
          <h2>Temperature in °C</h2>
        </div>
      </div>
    </div>
  );
}