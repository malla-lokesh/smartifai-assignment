import { useContext } from "react";
import WeatherContext from "../../store/WeatherContext";

const TodayCard = () => {
  const weatherContext = useContext(WeatherContext);
  const avgTemp = weatherContext?.todayWeather?.day?.maxtemp_c;
  const weatherIconUrl = weatherContext?.todayWeather?.day?.condition?.icon;
  const weatherText = weatherContext?.todayWeather?.day?.condition?.text;
  const modifiedWeatherIconUrl =
    "https:" + weatherIconUrl?.replace(/^\/\//, "");
  const location = weatherContext?.location;

  return (
    <div className="bg-slate-300 w-2/6 p-4 rounded-2xl">
      <img
        src={modifiedWeatherIconUrl}
        alt={weatherContext?.todayWeather?.day?.condition?.text}
        className="h-24 w-24 mb-2"
      />
      <div className="flex">
        <div className="text-2xl">{avgTemp}&deg; </div>
        <div>C</div>
      </div>
      <div>{weatherText}</div>
      <hr className="border-b border-gray-400 border-t-0 my-2" />
      <div>{location}</div>
    </div>
  );
};

export default TodayCard;
