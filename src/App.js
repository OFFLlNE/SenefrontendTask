import React, { useState } from 'react';
import './App.css';

import Toggle from './Toggle';
const questions = [
  { id: 'salary', options: ['good pay', 'bad pay'], correct: 'good pay' },
  {
    id: 'meetings',
    options: ['lot of meetings', 'less meetings'],
    correct: 'less meetings',
  },
  {
    id: 'coffee',
    options: ['free coffee', 'expensive coffee', 'no coffee'],
    correct: 'free coffee',
  },
  {
    id: 'pet',
    options: ['bear in office', 'dog in office'],
    correct: 'dog in office',
  },
];

const App = () => {
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const questionCount = questions.length;

  return (
    <div className="App">
      <h2>What are the ideal conditions inside an office?</h2>
      {questions.map((questionSet) => {
        return (
          <Toggle
            key={questionSet.id}
            questionOptions={questionSet.options}
            correctAnswer={questionSet.correct}
            addCorrectCounter={() => setCorrectAnswers(correctAnswers + 1)}
          ></Toggle>
        );
      })}
      <p>
        Answer is {correctAnswers === questionCount ? 'correct' : 'incorrect'}
      </p>
    </div>
  );
};

export default App;
