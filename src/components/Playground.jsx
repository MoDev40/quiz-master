import { shuffle,size } from 'lodash';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import SelectionForm from './SelectionForm';
import { Link } from 'react-router-dom';

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
  const [correct, setCorrect] = useState(0);
  const [isCheck, setIsCheck] = useState(false);
  const [isDone, setIsDone] = useState(false);
  
  function handleDone (){
    setI(0)
    setCorrect(0)
    setQuestions([])
    setIsDone(false)
  }

  const handleCheckAndNext = (answer) => {
    setIsCheck(true);
    if(answer === questions[i]?.correct_answer){
      setCorrect(prevC => prevC + 1);
      notify(true);
    }else{
      notify(false);
    }

    if (i+1 < size(questions)) {
      setI(prevI => prevI + 1);
    } else {
      setIsDone(true)
    }
    setIsCheck(false)
  };

  return (
  <div className="mx-auto max-w-2xl flex flex-col space-y-4 justify-center h-screen">
      <h1 className="text-4xl font-bold text-center tracking-tight text-gray-900 sm:text-6xl">Playground</h1>
      {
      size(questions) > 0 ? (
      isDone ? <Result correct={correct} questionsLength={size(questions)} handleDone={handleDone}/> :
      <div className='flex flex-col items-center container mx-auto py-10'>
        <div className='mb-6 text-center'>
          <h1 className='text-xl font-bold'>{sanitizeHtml(questions[i]?.question)}</h1>
          <p className='text-gray-600'>({i + 1}/{size(questions)})</p>
        </div>
        <div className='grid w-full md:grid-cols-2 gap-4'>
          {shuffle(questions[i]?.incorrect_answers.concat(questions[i]?.correct_answer)).map((choose, index) => (
            <button
              className='w-full btn'
              key={index}
              disabled={isCheck}
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
      }
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Link onClick={()=>{
          setI(0)
          setQuestions([])
        }} className="underline" to="/">
          Back to Home
        </Link>
      </div>
    </div>   
  );
}

function Result({ correct, questionsLength, handleDone }) {
  return (
    <div className='flex flex-col items-center space-y-5 container mx-auto py-10'>
      <h1 className='text-4xl font-bold text-indigo-700'>Corrected: {correct}/{questionsLength}</h1>
      <button onClick={handleDone} className='btn'>
        Done
      </button>
    </div>
  );
}


export default Playground;
