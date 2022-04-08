import React, { useState, useEffect } from 'react';
import './Toggle.css';
const Toggle = ({ questionOptions, correctAnswer }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const onRadioChange = (questionIndex) => {
    if (selectedOption !== correctAnswer) {
      setSelectedOption(questionOptions[questionIndex]);
    }
  };
  useEffect(() => {
    if (selectedOption === correctAnswer) {
      console.log('THIS IS THE CORRECT ONE!!!');
    }
  }, [correctAnswer, selectedOption]);
  return (
    <>
      Current selected option: {selectedOption}
      <div className="toggle-questions">
        {questionOptions.map((option, optionIndex) => {
          return (
            <label
              key={option}
              htmlFor={option}
              className={
                selectedOption === option
                  ? 'toggle-option active'
                  : 'toggle-option'
              }
            >
              <input
                id={option}
                type="radio"
                checked={selectedOption === option}
                onChange={() => onRadioChange(optionIndex)}
              />
              {option}
            </label>
          );
        })}
      </div>
    </>
  );
};
export default Toggle;
