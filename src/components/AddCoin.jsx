import React, { useContext, useState } from "react";

const AddCoin = ({ addCard }) => {
  const [isActive, setIsActive] = useState(false);

  const availableCoins = [
    { dataName: "bitcoin", displayName: "Bitcoin" },
    { dataName: "ethereum", displayName: "Ethereum" },
    { dataName: "ripple", displayName: "Ripple" },
    { dataName: "tether", displayName: "Tether" },
    { dataName: "bitcoin-cash", displayName: "Bitcoin-Cash" },
    { dataName: "litecoin", displayName: "Litecoin" },
    { dataName: "eos", displayName: "EOS.IO" },
    { dataName: "polkadot", displayName: "Polkadot" },
    { dataName: "cardano", displayName: "Cardano" },
  ];

  const handleClick = (coin) => {
    addCard(coin);
    setIsActive(false);
  };

  return (
    <div className="dropdown">
      <button
        onClick={() => setIsActive(!isActive)}
        className="btn btn-primary dropdown-toggle"
        type="button"
      >
        Add Coin
      </button>
      <div className={isActive ? "dropdown-menu show" : "dropdown-menu"}>
        {availableCoins.map((el) => {
          return (
            <a
              key={el.dataName}
              onClick={() => handleClick(el)}
              href="#"
              className="dropdown-item"
            >
              {el.displayName}
              <br></br>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default AddCoin;
