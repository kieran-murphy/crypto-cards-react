import React from "react";
import ReactDom from "react-dom";
import { motion } from "framer-motion";
import { HistoryChart } from "./HistoryChart";

export const GraphOverlay = ({ coinData, coin, open, children, onClose }) => {
  if (!open) {
    return null;
  }
  return ReactDom.createPortal(
    <>
      <div id="overlay" onClick={onClose} />
      <div id="graphModal">
        <motion.div
          id="addCoinClose"
          onClick={onClose}
          className="dropdown-item"
          whileHover={{ scale: 1.04 }}
        >
          <h2>Close </h2>
        </motion.div>
        <div id="graph">
          <HistoryChart coinData={coinData} coin={coin}></HistoryChart>
        </div>
      </div>
    </>,
    document.getElementById("graph")
  );
};
