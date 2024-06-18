import React, { useState } from 'react';
import toast from 'react-hot-toast';
import SelectionForm from './SelectionForm';
import { shuffle } from 'lodash';

const notify = (correct) => {
  correct ? toast.success('Correct!') : toast.error('Incorrect!');
}

const sanitizeHtml = (text) => {
  const element = document.createElement('div');
  element.innerHTML = text;
  return element.textContent || element.innerText;
}

function Playground() {
  const [questions, setQuestions] = useState([]);
  const [i, setI] = useState(0);
  
  const handleCheckAndNext = (answer) => {
    notify(answer === questions[i]?.correct_answer);
    if (i + 1 !== questions.length) {
      setI(prevI => prevI + 1);
    } else {
      setI(0);
      setQuestions([]);
    }
  };

  return (
    questions.length > 0 ? (
      <div className='flex flex-col items-center container mx-auto py-10'>
        <div className='mb-6 text-center'>
          <h1 className='text-xl font-bold'>{sanitizeHtml(questions[i]?.question)}</h1>
          <p className='text-gray-600'>({i + 1}/{questions.length})</p>
        </div>
        <div className='grid w-full md:grid-cols-2 gap-4'>
          {shuffle(questions[i]?.incorrect_answers.concat(questions[i]?.correct_answer)).map((choose, index) => (
            <button
              className='w-full p-4 bg-indigo-500 text-white rounded hover:bg-indigo-600'
              key={index}
              onClick={() => handleCheckAndNext(choose)}
            >
              {sanitizeHtml(choose)}
            </button>
          ))}
        </div>
      </div>
    ) : (
      <SelectionForm setQuestions={setQuestions} />
    )
  );
}

export default Playground;
