import React, { Component, useState } from "react";
import { motion } from "framer-motion";
import { TriangleUpIcon, TriangleDownIcon, DeleteIcon } from "@chakra-ui/icons";

const Card = ({ coin, deleteCard }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <motion.div
      className="item"
      key={coin.name}
      whileHover={{ scale: 1.03 }}
      onHoverStart={() => {
        setIsHover(true);
      }}
      onHoverEnd={() => {
        setIsHover(false);
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ x: 300 }}
      whileInView={{ x: 1 }}
      viewport={{ once: true }}
    >
      <div className={coin.price_change_percentage_24h > 0 ? "green" : "red"}>
        <h1>{coin.name}</h1>
        <br></br>
        <div className="stats">
          <div className="price">
            <h2>Price: ${coin.current_price}</h2>
          </div>
          <br></br>
          <div className="change">
            <h2>24hr Change: {coin.price_change_percentage_24h}</h2>
          </div>
          <br></br>
        </div>
        <motion.div>
          {coin.price_change_percentage_24h > 0 ? (
            <TriangleUpIcon w="30" h="30" color="green" />
          ) : (
            <TriangleDownIcon w="30" h="30" color="red" />
          )}
        </motion.div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <motion.div
          whileHover={{ scale: 1.3 }}
          onClick={() => {
            deleteCard(coin);
          }}
        >
          {coin.price_change_percentage_24h > 0 ? (
            <DeleteIcon w="40" h="40" color="green" opacity={isHover ? 1 : 0} />
          ) : (
            <DeleteIcon w="40" h="40" color="red" opacity={isHover ? 1 : 0} />
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Card;
