import React from "react";

function Question({ text }) {
  return (
    <div className="questionBar">
      <h1>{text}</h1>
    </div>
  );
}

export default Question;
