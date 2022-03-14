import React, { useContext, useState } from "react";
import { WatchListContext } from "../context/watchListContext";

const AddCoin = ({ allCoins, setIsOpen }) => {
  const { addCoin } = useContext(WatchListContext);

  const handleClick = (coin) => {
    addCoin(coin);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <div>
        {allCoins.map((el) => {
          return (
            <div
              id="addCoin"
              key={el.id}
              onClick={() => handleClick(el.id)}
              className="dropdown-item"
            >
              <h2>{el.name}</h2>
              <img src={el.image} height="30rem" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AddCoin;
