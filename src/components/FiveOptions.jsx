import React, { useState, useEffect } from "react";

function FiveOptions({
  img,
  alt,
  text,
  value,
  selectedValue,
  onClick,
  flashActive,
}) {
  const [isMouseOver, setMouseOver] = useState(false);

  const [isActiveState, setIsActiveState] = useState(false);

  useEffect(() => {
    let flashTimeout1, flashTimeout2, flashTimeout3;
    if (flashActive) {
      setIsActiveState(true);
      flashTimeout1 = setTimeout(() => {
        setIsActiveState(false);
        flashTimeout2 = setTimeout(() => {
          setIsActiveState(true);
          flashTimeout3 = setTimeout(() => {
            setIsActiveState(false);
          }, 150);
        }, 150);
      }, 50);
    }
    return () => {
      clearTimeout(flashTimeout1);
      clearTimeout(flashTimeout2);
      clearTimeout(flashTimeout3);
    };
  }, [flashActive]);

  const isActive = selectedValue === value || isMouseOver || isActiveState;

  function mouseHere() {
    setMouseOver(true);
  }
  function mouseOver() {
    setMouseOver(false);
  }

  return (
    <div
      className="answerOption"
      style={{
        outline: isActive ? "6px dashed #adce23 " : "none",
      }}
      onMouseOver={mouseHere}
      onMouseOut={mouseOver}
      onClick={() => onClick(value)}
    >
      <img
        src={img}
        alt={alt}
        style={{
          transform: isActive ? "scale(1.2)" : "scale(1)",
          transition: "transform 0.1s ease, outline 0.3s ease",
        }}
      />
      <p>{text}</p>
    </div>
  );
}

export default FiveOptions;
