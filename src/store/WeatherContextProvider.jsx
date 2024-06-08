import { useState } from "react";
import WeatherContext from "./WeatherContext";

const WeatherProvider = (props) => {
  const [todayWeather, setTodayWeather] = useState({});

  const todayWeatherHandler = (weather) => {
    setTodayWeather(weather);
  };

  const weatherContext = {
    todayWeather,
    todayWeatherHandler,
  };

  return (
    <WeatherContext.Provider value={weatherContext}>
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
