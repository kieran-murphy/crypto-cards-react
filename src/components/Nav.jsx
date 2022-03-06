import React from 'react'
import '../App.css';

const Nav = () => {
  return (
    <div id="topnav">
      
      <a onClick={() => console.log("light mode")}>☀️</a>
      <a onClick={() => console.log("dark mode")}>🌑</a>
      <div id="reset">
        <a onClick={() => console.log("reset")}>🔁</a>
      </div>
      
      
      
    </div>
  )
}

export default Nav