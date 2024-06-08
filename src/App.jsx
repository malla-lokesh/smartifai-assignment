import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TodayCard from "./components/TodayCard";

function App() {
  return (
    <div className="bg-slate-800 text-white min-h-screen">
      <Navbar />
      <TodayCard />
    </div>
  );
}

export default App;
