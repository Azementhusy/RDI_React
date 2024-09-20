import React from "react";
import option1 from "../images/option1.png";
import option2 from "../images/option2.png";
import option3 from "../images/option3.png";
import option4 from "../images/option4.png";
import option5 from "../images/option5.png";

function Image() {
  return (
    <div>
      <img src={option1} alt="Excellent" />
      <img src={option2} alt="Excellent" />
      <img src={option3} alt="Excellent" />
      <img src={option4} alt="Excellent" />
      <img src={option5} alt="Excellent" />
    </div>
  );
}
export default Image;
