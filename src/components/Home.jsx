import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="mx-auto max-w-2xl flex flex-col justify-center h-screen">
      <div className="hidden sm:mb-8 sm:flex sm:justify-center">
        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          Announcing our next round of funding.{' '}
          <Link to="/contact" className="font-semibold text-indigo-600">
            <span className="absolute inset-0" aria-hidden="true" />
            contact us <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Welcome to QuizMaster</h1>
        <p className="mt-6 text-md leading-8 text-gray-600">
          Dive into the ultimate quiz experience with QuizMaster! Test your knowledge across various subjects,
          challenge your friends, and enhance your learning. Whether you're a trivia enthusiast or just looking for
          a fun way to learn, QuizMaster offers a seamless and engaging platform for all ages. Join us today and
          start your journey towards becoming a quiz master!
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6"></div>
      </div>
      <Link className="flex flex-col w-full" to="/playground">
        <button className="btn">Start now</button>
      </Link>
    </div>
  );
}

export default Home;
