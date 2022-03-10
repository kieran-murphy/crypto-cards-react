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
import AddCoin from "./components/AddCoin";

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
    const coinNames = coins.map((value) => value.dataName);
    if (!coinNames.includes(coin.dataName)) {
      setCoins([
        ...coins,
        {
          displayName: coin.displayName,
          dataName: coin.dataName,
          color: "green",
          price: 66282.72,
          change: "2.43%",
        },
      ]);
    }
  };

  const deleteCard = (coin) => {
    setCoins(
      coins.filter((el) => {
        return el.dataName !== coin.dataName;
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
          addCard={addCard}
        />
        <AddCoin addCard={addCard} />

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
      </div>
      {/* </StyledApp> */}
    </ThemeProvider>
  );
}

export default App;
