import React from "react";
import "../App.css";

const Nav = ({ lightBackground, darkBackground, resetCards }) => {
  return (
    <div id="topnav">
      <h3>
        <a onClick={lightBackground}>Light Mode ☀️</a>
      </h3>
      <h3>
        <a onClick={darkBackground}>Night Mode 🌑</a>
      </h3>
      <div id="reset">
        <h3>
          <a onClick={resetCards}>Reset Coins 🔁</a>
        </h3>
      </div>
    </div>
  );
};

export default Nav;
