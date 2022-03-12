import React, { createContext, useEffect, useState } from "react";

export const WatchListContext = createContext();
const defaultCoins = ["bitcoin", "ethereum", "ripple", "litecoin"];

export const WatchListContextProvider = (props) => {
  const loading = () => {
    if (localStorage.getItem("watchList")) {
      return localStorage.getItem("watchList").split(",");
    } else {
      return defaultCoins;
    }
  };

  const [watchList, setWatchList] = useState(loading());

  useEffect(() => {
    localStorage.setItem("watchList", watchList);
  }, [watchList]);

  const addCoin = (coin) => {
    if (!watchList.includes(coin)) {
      setWatchList([...watchList, coin]);
    }
  };

  const deleteCoin = (coin) => {
    setWatchList(
      watchList.filter((el) => {
        return el !== coin;
      })
    );
  };

  const resetCoins = () => {
    setWatchList();
    setWatchList(defaultCoins);
  };

  return (
    <WatchListContext.Provider
      value={{ watchList, deleteCoin, addCoin, resetCoins }}
    >
      {props.children}
    </WatchListContext.Provider>
  );
};
