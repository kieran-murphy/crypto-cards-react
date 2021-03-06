import { useRef, useEffect, useState, useContext, Component } from "react";
import "../App.css";
import { motion } from "framer-motion";
import { Select } from "@chakra-ui/react";

import coinGecko from "../apis/coinGecko";
import Card from "./card/Card";
import Nav from "./Nav";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../themes/themes.js";
import { WatchListContext } from "../context/watchListContext";
import { ThemeContext } from "../context/themeContext";

const CoinList = () => {
  const [width, setWidth] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const carousel = useRef();
  const { watchList, deleteCoin, addCoin } = useContext(WatchListContext);
  const { theme } = useContext(ThemeContext);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await coinGecko.get("/coins/markets", {
        params: {
          vs_currency: "aud",
          ids: watchList.join(","),
        },
      });

      setCoins(response.data);
      setIsLoading(false);
    };
    if (watchList.length > 0) {
      fetchData();
    } else {
      setCoins([]);
    }
  }, [watchList]);

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, [coins]);

  const renderCoins = () => {
    return (
      <motion.div
        ref={carousel}
        className="carousel"
        whileTap={{ cursor: "grabbing" }}
      >
        <div className="container">
          <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyles />
            <div className="App">
              <motion.div
                drag="x"
                dragConstraints={{ right: 0, left: -width }}
                className="inner-carousel"
              >
                {coins.map((coin) => {
                  return (
                    <Card
                      key={coin.id}
                      coin={coin}
                      deleteCard={deleteCoin}
                    ></Card>
                  );
                })}
              </motion.div>
            </div>
          </ThemeProvider>
        </div>
      </motion.div>
    );
  };
  //   };

  return <div>{renderCoins()}</div>;
};

export default CoinList;
