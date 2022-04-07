import React from 'react';
import './App.css';

import Toggle from './Toggle';
const questions = [
  { id: 'pet', options: ['Dog', 'Cat'], correct: 'Dog' },
  {
    id: 'food',
    options: ['Pizza', 'Ice Cream', 'Hamburger'],
    correct: 'Ice Cream',
  },
  { id: 'season', options: ['Summer', 'Winter'], correct: 'Summer' },
];

const App = () => {
  return questions.map((questionSet) => {
    return (
      <Toggle
        key={questionSet.id}
        questionOptions={questionSet.options}
        correctAnswer={questionSet.correct}
      ></Toggle>
    );
  });
};
export default App;
