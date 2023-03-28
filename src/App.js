import { useState } from "react";
import WeatherService from "./services/WeatherService";

function App() {
  const [city, setCity] = useState(''); 
  const [temperature, setTemperature] = useState('');
  const [displayCity, setDisplayCity] = useState('');
  const [error, setError] = useState(false);

  const weatherService = new WeatherService();

  const onError = () => {
    setError(true);
  }

  const onWeatherLoaded = (weatherObject) => {
    setTemperature(weatherObject.temp_c);
    setDisplayCity(weatherObject.name);
    setError(false);
  }

  const updateWeather = () => {
    weatherService.getCurrentWeather(city)
      .then(onWeatherLoaded)
      .catch(onError)
  }

  return (
    <div className="App">
      <h1>PMG weather app</h1>
      <div className="container">
        <div className="left-panel">
          <input 
            id="search"
            type="text" 
            value={city} 
            onChange={(e) => setCity(e.target.value)}
            placeholder='Enter the city' />
          <button onClick={updateWeather}>Search</button>
        </div>

        <div className="right-panel">
          <VisibleContent displayCity={displayCity} temperature={temperature} error={error} /> 
        </div>
      </div>
    </div>
  );
}

const VisibleContent = ({displayCity, temperature, error}) => { 
  if (error) { 
    return ( 
      <>
        <h2>Oops... </h2> 
        <h2>Please, enter the correct data</h2>
      </>
    ) 
  }

  return ( 
    <> 
      <h2>{!displayCity ? 'City Name' : displayCity}</h2> 
      <h2>{temperature ? `${temperature}°C` : 'Temperature in °C'}</h2> 
    </> 
  ) 
}

export default App;