import React, { useContext, useState } from "react";
import { WatchListContext } from "../context/watchListContext";

const AddCoin = ({ allCoins }) => {
  const [isActive, setIsActive] = useState(false);
  const { addCoin } = useContext(WatchListContext);

  const availableCoins = [
    "bitcoin",
    "ethereum",
    "ripple",
    "tether",
    "bitcoin-cash",
    "litecoin",
    "eos",
    "polkadot",
    "cardano",
  ];

  const handleClick = (coin) => {
    addCoin(coin);
    setIsActive(false);
  };

  return (
    <div className="dropdown">
      <div className={isActive ? "dropdown-menu show" : "dropdown-menu"}>
        {allCoins.map((el) => {
          return (
            <a
              key={el.id}
              onClick={() => handleClick(el.id)}
              href="#"
              className="dropdown-item"
            >
              {el.name}
              <br></br>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default AddCoin;
