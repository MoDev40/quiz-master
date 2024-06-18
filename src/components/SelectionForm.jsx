import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const levels = ['easy','medium','hard']

function SelectionForm() {
  const [categories,setCategories] = useState([])
  const [isError,setIsError] = useState(false)

  useEffect(()=>{
    const fetchCategories = async ()=>{
      await fetch('https://opentdb.com/api_category.php')
      .then(async(res)=>{
        const {trivia_categories} = await res.json();
        setCategories(trivia_categories) })
      .catch(()=>{ setIsError(true),toast.error("Unexpected Error") })
    }
    toast.promise(fetchCategories(),{
      success:"success",
      error:"Unexpected Error",
      loading:"Fetching categories"
    })
    
  },[])

  function handleSelectedData (e) {
    e.preventDefault()

    const formData = new FormData(e.target)

    const selectedData = {
      category:formData.get('category'),
      level:formData.get('level'),
      amount:Number(formData.get('amount'))
    }

    console.log(selectedData)
  }
  return (
    <div className="flex flex-col h-screen justify-center items-center p-5 w-full">
      {
        isError ?
        <div>
          <button onClick={()=>{setIsError(false)}}>Refetch</button>
        </div>
        :
          <form className='flex flex-col space-y-4' onSubmit={handleSelectedData}>
            <select required className='border border-indigo-500 border-solid border-3 focus:outline-none rounded p-2' name="category" id="category">
              {
                categories.map(category=>(
                  <option key={category.id} value={category.id}>{category.name}</option>
                ))
              }
            </select>
            <select required className='border border-indigo-500 border-solid border-3 focus:outline-none rounded p-2' name="level" id="level">
              {
                levels.map(level=>(
                  <option key={level} value={level}>{level.charAt(0).toUpperCase().concat(level.slice(1))}</option>
                ))
              }
            </select>
            <input required className='border border-indigo-500 border-solid border-3 focus:outline-none rounded p-2' type="number" name='amount' id='amount' placeholder='Number of questions'/>
            <button 
            className='bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700' 
            type="submit">
              Submit
            </button>         
      </form>
      }
    </div>
  )
}

export default SelectionForm