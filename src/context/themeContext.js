import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = (props) => {
  const loading = () => {
    if (localStorage.getItem("theme")) {
      return localStorage.getItem("theme");
    } else {
      return "dark";
    }
  };

  const [theme, setTheme] = useState(loading());

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = (theme) => {
    theme === "dark" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
