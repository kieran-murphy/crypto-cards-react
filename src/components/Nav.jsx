import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../context/themeContext";
import { WatchListContext } from "../context/watchListContext";
import { CoinAddOverlay } from "./CoinAddOverlay";
import "../App.css";
import AddCoin from "./AddCoin";
import coinGecko from "../apis/coinGecko";

const Nav = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { resetCoins, addCoin } = useContext(WatchListContext);
  const [allCoins, setAllCoins] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

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
    setIsOpen(true);
    console.log(allCoins);
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
          <a onClick={resetCoins}>Reset Coins 🔁</a>
        </h3>
        <h3>
          <a onClick={openCoins}>Add Coin 🪙</a>
        </h3>
      </div>
      <CoinAddOverlay open={isOpen} onClose={() => setIsOpen(false)}>
        <AddCoin allCoins={allCoins} setIsOpen={setIsOpen} />
      </CoinAddOverlay>
    </>
  );
};

export default Nav;
