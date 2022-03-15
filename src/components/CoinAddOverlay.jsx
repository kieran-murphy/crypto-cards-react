import React from "react";
import ReactDom from "react-dom";
import { motion } from "framer-motion";

export const CoinAddOverlay = ({ open, children, onClose }) => {
  if (!open) {
    return null;
  }
  return ReactDom.createPortal(
    <>
      <div id="overlay" onClick={onClose} />
      <div id="modal">
        <motion.div
          id="addCoinClose"
          onClick={onClose}
          className="dropdown-item"
          whileHover={{ scale: 1.04 }}
        >
          <h2>Close </h2>
          {/* <img src={el.image} height="30rem" /> */}
        </motion.div>
        <div id="inner_scroll">{children}</div>
      </div>
    </>,
    document.getElementById("addPortal")
  );
};
