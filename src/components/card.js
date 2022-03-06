import React, { Component } from "react";
import { motion } from "framer-motion";
import { TriangleUpIcon, TriangleDownIcon, DeleteIcon } from "@chakra-ui/icons";

export class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { coin, deleteCard } = this.props;

    

    return (
      <motion.div
        className="item"
        key={coin.name}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.95 }}
        initial={{ x: 300 }}
        whileInView={{ x: 1 }}
        viewport={{ once: true }}
      >
        <div className={coin.color}>
          <h1>{coin.name}</h1>
          <br></br>
          <div className="stats">
            <div className="price">
              <h2>Price: {coin.price}</h2>
            </div>
            <br></br>
            <div className="change">
              <h2>24hr Change: {coin.change}</h2>
            </div>
            <br></br>
          </div>
          <motion.div>
            {coin.color === "green" ? (
              <TriangleUpIcon w="30" h="30" color="green" />
            ) : (
              <TriangleDownIcon w="30" h="30" color="red" />
            )}
          </motion.div>
          <br></br>
          <br></br>
          <motion.div
            whileHover={{ scale: 1.3 }}
            onClick={() => {
              deleteCard(coin);
            }}
            //onClick={print}
          >
            {coin.color === "green" ? (
              <DeleteIcon w="30" h="30" color="green" />
            ) : (
              <DeleteIcon w="30" h="30" color="red" />
            )}
          </motion.div>
        </div>
      </motion.div>
    );
  }
}
