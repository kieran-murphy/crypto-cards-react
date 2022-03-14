import React from "react";
import ReactDom from "react-dom";

export const CoinAddOverlay = ({ open, children, onClose }) => {
  if (!open) {
    return null;
  }
  return ReactDom.createPortal(
    <>
      <div id="overlay" onClick={onClose} />
      <div id="modal">
        <div id="addCoinClose" onClick={onClose} className="dropdown-item">
          <h2>Close </h2>
          {/* <img src={el.image} height="30rem" /> */}
        </div>
        <div id="inner_scroll">{children}</div>
      </div>
    </>,
    document.getElementById("addPortal")
  );
};
