import { useEffect, useState } from "react";

const Navbar = () => {
  const [searchCity, setSearchCity] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      const fetchForecastData = async () => {
        const response = await fetch(
          "https://api.weatherapi.com/v1/forecast.json?key=1793dd06ec7c4e70836121938240506&q=Hyderabad&days=7&aqi=yes&alerts=yes"
        );
        const data = await response.json();
        console.log(data);
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
