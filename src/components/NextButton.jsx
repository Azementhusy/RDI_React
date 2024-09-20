import React, { useState } from "react";

function NextButton({ onClick, isLastQuestion }) {
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
      className="next"
      style={{ backgroundColor: isMouseOver ? "#206e11" : "#3ea829" }}
      onMouseOver={mouseHere}
      onMouseOut={mouseOver}
    >
      {isLastQuestion ? "Done" : "Next"}
    </button>
  );
}
export default NextButton;
