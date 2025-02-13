import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Loader from './Loader';

const levels = ['easy', 'medium', 'hard'];

function SelectionForm({ setQuestions }) {
  const [categories, setCategories] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch('https://opentdb.com/api_category.php');
        const { trivia_categories } = await res.json();
        setCategories(trivia_categories);
      } catch (error) {
        setIsError(true);
        setCategories([])
        toast.error("Unexpected Error");
      }
    };

    toast.promise(fetchCategories(), {
      loading: "Fetching categories",
    });
  }, [isError]);

  const handleSelectedData = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.target);

    const data = {
      category: Number(formData.get('category')),
      level: formData.get('level'),
      amount: Number(formData.get('amount')),
    };

    try {
      const res = await fetch(`https://opentdb.com/api.php?amount=${data.amount}&category=${data.category}&difficulty=${data.level}`);
      const { results } = await res.json();
      setQuestions(results);
    } catch (error) {
      toast.error("Unexpected Error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center p-5 w-full">
      {isError ? (
        <div>
          <button 
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            onClick={() => { setIsError(false); }}
          >
            Refetch
          </button>
        </div>
      ) : (
        <form className='flex flex-col space-y-4 w-full p-6 rounded-lg shadow-lg' onSubmit={handleSelectedData}>
          <select required className='border border-indigo-500 focus:outline-none focus:border-indigo-600 rounded p-2' name="category" id="category">
            {categories.map(category => (
              <option key={category.id} value={category.id}>{category.name}</option>
            ))}
          </select>
          <select required className='border border-indigo-500 focus:outline-none focus:border-indigo-600 rounded p-2' name="level" id="level">
            {levels.map(level => (
              <option key={level} value={level}>{level.charAt(0).toUpperCase() + level.slice(1)}</option>
            ))}
          </select>
          <input required className='border border-indigo-500 focus:outline-none focus:border-indigo-600 rounded p-2' type="number" name='amount' id='amount' placeholder='Number of questions'/>
          <button className='btn' type="submit">
            {isLoading ? <Loader /> : "Submit"}
          </button>
        </form>
      )}
    </div>
  );
}

export default SelectionForm;
