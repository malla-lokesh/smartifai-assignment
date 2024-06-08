import { useContext, useEffect, useState } from "react";
import WeatherContext from "../../store/WeatherContext";

const Navbar = () => {
  const [searchCity, setSearchCity] = useState("");
  const weatherContext = useContext(WeatherContext);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      console.log(position.coords);
      const fetchForecastData = async () => {
        const response = await fetch(
          "https://api.weatherapi.com/v1/forecast.json?key=1793dd06ec7c4e70836121938240506&q=Hyderabad&days=7&aqi=yes&alerts=yes"
        );
        const data = await response.json();
        console.log(data);
        weatherContext?.todayWeatherHandler(data?.forecast?.forecastday[0]);
        weatherContext?.locationHandler(
          data?.location?.name + ", " + data?.location?.country
        );
      };

      fetchForecastData();
    });
  }, []);
  return (
    <nav className="h-1/5">
      <input
        type="text"
        placeholder="Search city..."
        value={searchCity}
        onChange={(e) => setSearchCity(e?.target?.value)}
        className="text-gray-950 p-2 rounded-lg w-48"
      />
    </nav>
  );
};

export default Navbar;
