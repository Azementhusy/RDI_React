import React, { useState } from "react";
import Question from "./Question";
import OptionArea from "./OptionArea";
import NextButton from "./NextButton";
import BackButton from "./BackButton";
import questions from "./questions";

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedValues, setSelectedValues] = useState({});
  const [flashActive, setFlashActive] = useState(false);
  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionClick = (value) => {
    setSelectedValues({
      ...selectedValues,
      [currentQuestion.id]: value,
    });
    setFlashActive(false);
  };

  //Handle NextButton
  const handleNextClick = () => {
    //if not yet choose answer
    if (selectedValues[currentQuestion.id] == null) {
      setFlashActive(true);
      setTimeout(() => {
        setFlashActive(false);
      }, 1000);
      return;
    }
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      //Done all the questions
      alert("You've done all the questions");
    }
  };

  //Handle BackButton
  const handleBackClick = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Question text={currentQuestion.text} />
      <OptionArea
        options={currentQuestion.options}
        selectedValue={selectedValues[currentQuestion.id]}
        onOptionClick={handleOptionClick}
        flashActive={flashActive}
      />

      <BackButton
        onClick={handleBackClick}
        disabled={currentQuestionIndex === 0}
      />
      <NextButton
        onClick={handleNextClick}
        isLastQuestion={currentQuestionIndex === questions.length - 1}
      />
    </div>
  );
}

export default App;
