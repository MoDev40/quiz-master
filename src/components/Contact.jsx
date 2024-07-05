import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div className="mx-auto max-w-2xl flex flex-col justify-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Contact Us</h1>
        <p className="mt-6 text-md leading-8 text-gray-600">
          We would love to hear from you! Reach out to us for any queries, feedback, or support.
        </p>
        <div>
          <ul className='text-md font-medium text-indigo-500'>
            <li> <span className='font-bold text-md text-black'>Email</span> example@gmail.com</li>
            <li> <span className='font-bold text-md text-black'>Phone</span> 0 00 00 00</li>
          </ul>
        </div>
      </div>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link className="underline" to="/">
          Back to Home
          </Link>
        </div>
    </div>
  );
}

export default Contact;
