import React from 'react'
import '../App.css';

const Nav = ({resetCards}) => {
  return (
    <div id="topnav">
      
      <h3><a onClick={() => console.log("light mode")}>Light Mode ☀️</a></h3>
      <h3><a onClick={() => console.log("dark mode")}>Night Mode 🌑</a></h3>
      <div id="reset">
        <h3><a onClick={resetCards}>Reset Coins 🔁</a></h3>
      </div>
      
      
      
    </div>
  )
}

export default Nav