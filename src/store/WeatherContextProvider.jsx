import { useState } from "react";
import WeatherContext from "./WeatherContext";

const WeatherProvider = (props) => {
  const [todayWeather, setTodayWeather] = useState({});
  const [location, setLocation] = useState("");

  const todayWeatherHandler = (weather) => {
    setTodayWeather(weather);
  };

  const locationHandler = (location) => {
    setLocation(location);
  };

  const weatherContext = {
    todayWeather,
    location,
    todayWeatherHandler,
    locationHandler,
  };

  return (
    <WeatherContext.Provider value={weatherContext}>
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
