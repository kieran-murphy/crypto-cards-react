import logo from "./logo.svg";
import "./App.css";
import { motion } from "framer-motion";
import { Select } from "@chakra-ui/react";
import { useRef, useEffect, useState, Component } from "react";
import coinGecko from "./apis/coinGecko";
//import defaultCoinsData from "./coins";
import Card from "./components/Card";
import Nav from "./components/Nav";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes.js";
import AddCoin from "./components/AddCoin";

const defaultCoinsData = ["bitcoin", "ethereum", "ripple"];
const StyledApp = styled.div`
  .placeholder: ${(props) => props.theme.fontColor};
`;

function App() {
  const [width, setWidth] = useState(0);
  //const [isLoading, setIsLoading] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [dataCoins, setDataCoins] = useState(defaultCoinsData);
  const [coins, setCoins] = useState([]);
  const carousel = useRef();

  const loading = () => {
    if (localStorage.getItem("coins")) {
      return localStorage.getItem("coins").split(",");
    } else {
      return defaultCoinsData;
    }
  };

  const themeToggler = (color) => {
    color === "light" ? setTheme("light") : setTheme("dark");
  };

  useEffect(() => {
    localStorage.setItem("coins", dataCoins);
  }, [dataCoins]);

  useEffect(() => {
    const fetchData = async () => {
      // setIsLoading(true);
      const response = await coinGecko.get("/coins/markets", {
        params: {
          vs_currency: "aud",
          ids: dataCoins.join(","),
        },
      });

      setCoins(response.data);
      // setIsLoading(false);
    };
    if (dataCoins.length > 0) {
      fetchData();
    } else {
      setCoins([]);
    }
  }, [dataCoins]);

  const addCard = (coin) => {
    const coinNames = dataCoins.map((value) => value.dataName);
    if (!coinNames.includes(coin.dataName)) {
      setDataCoins([...dataCoins, coin]);
    }
  };

  const deleteCard = (coin) => {
    setDataCoins(
      dataCoins.filter((el) => {
        return el.dataName !== coin.name;
      })
    );
  };

  const resetCards = () => {
    setDataCoins([]);
    setDataCoins(defaultCoinsData);
  };

  const lightBackground = () => {
    themeToggler("light");
  };

  const darkBackground = () => {
    themeToggler("dark");
  };

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, [dataCoins]);

  // if (isLoading) {
  //   return (
  //     <div>
  //       <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
  //         <GlobalStyles />
  //         <motion.div
  //           ref={carousel}
  //           className="carousel"
  //           whileTap={{ cursor: "grabbing" }}
  //         >
  //           <h2 id="loading">Loading...</h2>
  //         </motion.div>
  //       </ThemeProvider>
  //     </div>
  //   );
  // } else {
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
                <Card key={coin.id} coin={coin} deleteCard={deleteCard}></Card>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
      {/* </StyledApp> */}
    </ThemeProvider>
  );
}
// }

export default App;
