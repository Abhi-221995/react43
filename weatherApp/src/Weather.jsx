import React, { useState } from "react";
import axios from "axios";
import "./App.css";

const weatherIcons = {
  Clear: "☀️",
  Clouds: "☁️",
  Rain: "🌧️",
  Drizzle: "🌦️",
  Thunderstorm: "⛈️",
  Snow: "❄️",
  Mist: "🌫️",
};

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const apiKey = "c9cc81972027746b6585cb802d5768bd";

  const fetchWeather = async () => {
    if (!city.trim()) {
      setError("Please enter a city name.");
      return;
    }

    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      );
      setWeather(response.data);
    } catch (error) {
      setError("City not found. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="weather-container">
      <h1 className="title">Weather App</h1>
      <div className="input-section">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={fetchWeather}>Search</button>
      </div>

      {loading && <p className="loading">Loading...</p>}

      {error && <p className="error">{error}</p>}

      {weather && (
        <div className="weather-card">
          <h2>{weather.name}</h2>
          <div className="temp">
            {(weather.main.temp - 273.15).toFixed(2)}°C
          </div>
          <div className="condition">
            {weatherIcons[weather.weather[0].main] || "🌍"}{" "}
            {weather.weather[0].main}
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
