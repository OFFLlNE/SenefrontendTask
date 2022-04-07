import React, { useState, useEffect } from 'react';

import './Toggle.css';

const Toggle = ({ questionOptions, correctAnswer }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const onCheckBoxChange = (questionIndex) => {
    if (selectedOption !== correctAnswer) {
      setSelectedOption(questionOptions[questionIndex]);
    }
  };

  useEffect(() => {
    if (selectedOption === correctAnswer) {
      console.log('THIS IS THE CORRECT ON!!!');
    }
  }, [correctAnswer, selectedOption]);

  return (
    <>
      Current selected option: {selectedOption}
      <div className="toggle-questions">
        {questionOptions.map((option, optionIndex) => {
          return (
            <div key={option}>
              <label htmlFor={option} className="toggle-option">
                {option}
              </label>
              <input
                id={option}
                type="checkbox"
                checked={selectedOption === option}
                onChange={() => onCheckBoxChange(optionIndex)}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Toggle;
