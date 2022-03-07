import logo from "./logo.svg";
import "./App.css";
import { motion } from "framer-motion";
import { Select } from "@chakra-ui/react";
import { useRef, useEffect, useState, Component } from "react";
import coinsdata from "./coins";
import Card from "./components/Card";
import Nav from "./components/Nav";

function App() {
  const [width, setWidth] = useState(0);
  const [coins, setCoins] = useState(coinsdata);
  const carousel = useRef();

  const addCard = (coin) => {
    const coinNames = coins.map((value) => value.name);
    if (!coinNames.includes(coin.name)) {
      setCoins([...coins, coin]);
    }
  };

  const deleteCard = (coin) => {
    setCoins(
      coins.filter((el) => {
        return el.name !== coin.name;
      })
    );
  };

  const resetCards = () => {
    setCoins([]);
    setCoins(coinsdata);
  };

  const lightBackground = () => {
    console.log("light");
    document.body.style = "background: rgb(245, 245, 255);";
  };

  const darkBackground = () => {
    console.log("dark");
    document.body.style = "background: rgb(24, 26, 26);";
  };

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, [coins]);

  return (
    <div className="App">
      <Nav
        lightBackground={lightBackground}
        darkBackground={darkBackground}
        resetCards={resetCards}
      />
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
              <Card key={coin.name} coin={coin} deleteCard={deleteCard}></Card>
            );
          })}
        </motion.div>
      </motion.div>

      <div className="add">
        <select placeholder="Select option">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>

        <div className="example-container">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() =>
              addCard({
                name: "New coin",
                color: "green",
                price: 7302.76,
                change: "6.63%",
              })
            }
          >
            Add Card
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default App;
