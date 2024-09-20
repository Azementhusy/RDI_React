import React, { useState } from "react";

function BackButton({ onClick, disabled }) {
  const [isMouseOver, setMouseOver] = useState(false);
  function mouseHere() {
    setMouseOver(true);
  }
  function mouseOver() {
    setMouseOver(false);
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="back"
      style={{ backgroundColor: isMouseOver ? "#926d07" : "#f5ba13" }}
      onMouseOver={mouseHere}
      onMouseOut={mouseOver}
    >
      Back
    </button>
  );
}
export default BackButton;
