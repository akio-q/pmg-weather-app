import { useState } from "react";

function App() {
  const [city, setCity] = useState(''); 
  const [temperature, setTemperature] = useState('');

  return (
    <div className="App">
      <h1>PMG weather app</h1>
      <div className="container">
        <div className="left-panel">
          <input id="search"></input>
          <button>search</button>
        </div>

        <div className="right-panel">
          <h1>City Name</h1>
          <h2>Temperature in °C</h2>
        </div>
      </div>
    </div>
  );
}