import React, { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
import "../App.css";

const Nav = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div id="topnav">
      <h3>
        <a onClick={() => toggleTheme("light")}>Light Mode ☀️</a>
      </h3>
      <h3>
        <a onClick={() => toggleTheme("dark")}>Night Mode 🌑</a>
      </h3>
      <div id="reset">
        <h3>
          <a onClick={() => console.log("reset")}>Reset Coins 🔁</a>
        </h3>
      </div>
    </div>
  );
};

export default Nav;
