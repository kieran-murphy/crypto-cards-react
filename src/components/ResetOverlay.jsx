import React from "react";
import ReactDom from "react-dom";
import { motion } from "framer-motion";

export const ResetOverlay = ({ open, onClose, resetCoins }) => {
  if (!open) {
    return null;
  }

  const reset = () => {
    resetCoins();
    onClose();
  };

  return ReactDom.createPortal(
    <>
      <div id="overlay" onClick={onClose} />
      <div id="resetModal">
        <h3 id="resetWarning">Are you sure you want to reset coins?</h3>
        <motion.div id="yesReset" onClick={reset} whileHover={{ scale: 1.04 }}>
          <h2>Yes</h2>
        </motion.div>
        <motion.div id="noReset" onClick={onClose} whileHover={{ scale: 1.04 }}>
          <h2>No</h2>
        </motion.div>
      </div>
    </>,
    document.getElementById("resetPortal")
  );
};
