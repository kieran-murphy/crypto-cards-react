import React, { useContext, useState } from "react";
import { WatchListContext } from "../context/watchListContext";
import { motion } from "framer-motion";

const AddCoin = ({ allCoins, setAddIsOpen }) => {
  const { addCoin } = useContext(WatchListContext);

  const handleClick = (coin) => {
    addCoin(coin);
    setAddIsOpen(false);
  };

  return (
    <div id="dropdown">
      {allCoins.map((el) => {
        return (
          <motion.div
            whileHover={{ scale: 1.04 }}
            id="addCoin"
            key={el.id}
            onClick={() => handleClick(el.id)}
            className="dropdown-item"
          >
            <h2>{el.name}</h2>
            <img src={el.image} height="30rem" />
          </motion.div>
        );
      })}
    </div>
  );
};

export default AddCoin;
