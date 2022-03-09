import logo from "./logo.svg";
import "./App.css";
import { motion } from "framer-motion";
import { Select } from "@chakra-ui/react";
import { useRef, useEffect, useState, Component } from "react";
import coinsdata from "./coins";
import Card from "./components/Card";
import Nav from "./components/Nav";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes.js";

const StyledApp = styled.div`
  .placeholder: ${(props) => props.theme.fontColor};
`;

function App() {
  const [width, setWidth] = useState(0);
  const [coins, setCoins] = useState(coinsdata);
  const [theme, setTheme] = useState("dark");
  const carousel = useRef();

  const themeToggler = (color) => {
    color === "light" ? setTheme("light") : setTheme("dark");
  };

  const addCard = (coin) => {
    const coinNames = coins.map((value) => value.name);
    if (!coinNames.includes(coin.name)) {
      setCoins([...coins, coin]);
    }
  };

  const deleteCard = (coin) => {
    setCoins(
      coins.filter((el) => {
        return el.name !== coin.name;
      })
    );
  };

  const resetCards = () => {
    setCoins([]);
    setCoins(coinsdata);
  };

  const lightBackground = () => {
    themeToggler("light");
  };

  const darkBackground = () => {
    themeToggler("dark");
  };

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, [coins]);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      {/* <StyledApp> */}
      <div className="App">
        <Nav
          lightBackground={lightBackground}
          darkBackground={darkBackground}
          resetCards={resetCards}
        />
        <motion.div
          ref={carousel}
          className="carousel"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="inner-carousel"
          >
            {coins.map((coin) => {
              return (
                <Card
                  key={coin.name}
                  coin={coin}
                  deleteCard={deleteCard}
                ></Card>
              );
            })}
          </motion.div>
        </motion.div>

        <div className="add">
          <select placeholder="Select option">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>

          <div className="example-container">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() =>
                addCard({
                  name: "New coin",
                  color: "green",
                  price: 7302.76,
                  change: "6.63%",
                })
              }
            >
              Add Card
            </motion.button>
          </div>
        </div>
      </div>
      {/* </StyledApp> */}
    </ThemeProvider>
  );
}

export default App;
