import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TodayCard from "./components/TodayCard";
import WeatherProvider from "./store/WeatherContextProvider";

function App() {
  return (
    <WeatherProvider>
      <div className="bg-sky-100 text-gray-950 min-h-screen">
        <Navbar />
        <TodayCard />
      </div>
    </WeatherProvider>
  );
}

export default App;
