import React, { useState } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? "app dark" : "app light"}>
      <div className="card">
        <h1>{darkMode ? "Dark Mode 🌙" : "Light Mode 🌞"}</h1>
        <p>Click the switch below to toggle the theme.</p>
        <label className="switch">
          <input type="checkbox" onChange={toggleTheme} checked={darkMode} />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  );
}

export default App;
