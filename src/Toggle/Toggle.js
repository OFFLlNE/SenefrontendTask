import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './Toggle.css';

const Toggle = ({ questionOptions, correctAnswer, addCorrectCounter }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [randomizedArray, setRandomizedArray] = useState([]);
  const onRadioChange = (questionIndex) => {
    if (selectedOption !== correctAnswer) {
      setSelectedOption(questionOptions[questionIndex]);
    }
  };

  useEffect(() => {
    setRandomizedArray(shuffle(questionOptions));
  }, []);

  useEffect(() => {
    if (selectedOption === correctAnswer) {
      addCorrectCounter();
    }
  }, [correctAnswer, selectedOption]);

  return (
    <>
      <div className="toggle-questions">
        {randomizedArray.map((option, optionIndex) => {
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

Toggle.propTypes = {
  questionOptions: PropTypes.arrayOf(PropTypes.string),
  correctAnswer: PropTypes.string,
  addCorrectCounter: PropTypes.func,
};
export default Toggle;

// Shuffler found online with some minor adjustments to JS
function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}
