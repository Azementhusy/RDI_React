import React, { useState, useEffect } from "react";
import FiveOptions from "./FiveOptions";

function OptionArea({ options, selectedValue, onOptionClick, flashActive }) {
  return (
    <div className="optionArea">
      {options.map((option) => (
        <FiveOptions
          key={option.value}
          text={option.name}
          alt={option.name}
          img={option.img}
          value={option.value}
          selectedValue={selectedValue}
          onClick={onOptionClick}
          flashActive={flashActive}
        />
      ))}
    </div>
  );
}

export default OptionArea;
