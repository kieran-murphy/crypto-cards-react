import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../context/themeContext";
import { WatchListContext } from "../context/watchListContext";
import { CoinAddOverlay } from "./CoinAddOverlay";
import { ResetOverlay } from "./ResetOverlay";
import { motion } from "framer-motion";
import "../App.css";
import AddCoin from "./AddCoin";
import coinGecko from "../apis/coinGecko";

const Nav = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { resetCoins, addCoin } = useContext(WatchListContext);
  const [allCoins, setAllCoins] = useState([]);
  const [addIsOpen, setAddIsOpen] = useState(false);
  const [resetIsOpen, setResetIsOpen] = useState(false);

  const fetchData = async () => {
    const response = await coinGecko.get("/coins/markets", {
      params: {
        vs_currency: "aud",
        order: "market_cap_desc",
        per_page: 200,
        page: 1,
        sparkline: false,
      },
    });

    setAllCoins(response.data);
  };

  const handleClick = (coin) => {
    addCoin("bitcoin");
  };

  const openCoins = () => {
    fetchData();
    setAddIsOpen(true);
  };

  const openReset = () => {
    setResetIsOpen(true);
  };

  return (
    <>
      <div id="topnav">
        <h3>
          <a onClick={() => toggleTheme("light")}>Light Mode ☀️</a>
        </h3>

        <h3>
          <a onClick={() => toggleTheme("dark")}>Night Mode 🌑</a>
        </h3>

        <h3>
          <a onClick={openReset}>Reset Coins 🔁</a>
        </h3>
        <h3>
          <a onClick={openCoins}>Add Coin 🪙</a>
        </h3>
      </div>

      <CoinAddOverlay open={addIsOpen} onClose={() => setAddIsOpen(false)}>
        <AddCoin allCoins={allCoins} setAddIsOpen={setAddIsOpen} />
      </CoinAddOverlay>

      <ResetOverlay
        open={resetIsOpen}
        onClose={() => setResetIsOpen(false)}
        resetCoins={resetCoins}
      ></ResetOverlay>
    </>
  );
};

export default Nav;
