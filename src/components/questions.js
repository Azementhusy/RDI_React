import option1 from "../images/option1.png";
import option2 from "../images/option2.png";
import option3 from "../images/option3.png";
import option4 from "../images/option4.png";
import option5 from "../images/option5.png";
import personselves from "../images/personselves.png";
import assistants from "../images/assistants.png";
import answeryes from "../images/answeryes.png";
import answerno from "../images/answerno.png";
import sometimes from "../images/sometimes.png";

const questions = [
  {
    id: 1,
    text: "1. Are you answering the questionnaire as a...?",
    options: [
      {
        value: 1,
        name: "Person living now or in the past with a rare disease",
        img: personselves,
      },
      {
        value: 2,
        name: "Family member of someone living with a rare disease",
        img: assistants,
      },
    ],
  },
  {
    id: 2,
    text: "2. Do you consider yourself to have a disability?",
    options: [
      { value: 1, name: "Yes", img: answeryes },
      { value: 2, name: "Sometimes", img: sometimes },
      { value: 3, name: "No", img: answerno },
    ],
  },
  {
    id: 3,
    text: "3. Are you",
    options: [
      { value: 1, name: "No Problem", img: option1 },
      { value: 2, name: "Mild Problems", img: option2 },
      { value: 3, name: "Moderate Problems", img: option3 },
      { value: 4, name: "Severe Problems", img: option4 },
      { value: 5, name: "Can't do", img: option5 },
    ],
  },
  {
    id: 4,
    text: "4. Can you see things at a distance without glasses? ",
    options: [
      { value: 1, name: "No Problem", img: option1 },
      { value: 2, name: "Mild Problems", img: option2 },
      { value: 3, name: "Moderate Problems", img: option3 },
      { value: 4, name: "Severe Problems", img: option4 },
      { value: 5, name: "Can't do", img: option5 },
    ],
  },
  {
    id: 5,
    text: "5. Can you hear without hearing aids? ",
    options: [
      { value: 1, name: "No Problem", img: option1 },
      { value: 2, name: "Mild Problems", img: option2 },
      { value: 3, name: "Moderate Problems", img: option3 },
      { value: 4, name: "Severe Problems", img: option4 },
      { value: 5, name: "Can't do", img: option5 },
    ],
  },
  {
    id: 6,
    text: "6. Can you communicate without assistive devices, for example, speak, use sign language, lip read? ",
    options: [
      { value: 1, name: "No Problem", img: option1 },
      { value: 2, name: "Mild Problems", img: option2 },
      { value: 3, name: "Moderate Problems", img: option3 },
      { value: 4, name: "Severe Problems", img: option4 },
      { value: 5, name: "Can't do", img: option5 },
    ],
  },
  {
    id: 7,
    text: "7. Can you walk or go up/down steps without help? ",
    options: [
      { value: 1, name: "No Problem", img: option1 },
      { value: 2, name: "Mild Problems", img: option2 },
      { value: 3, name: "Moderate Problems", img: option3 },
      { value: 4, name: "Severe Problems", img: option4 },
      { value: 5, name: "Can't do", img: option5 },
    ],
  },
];

export default questions;
