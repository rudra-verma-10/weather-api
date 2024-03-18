import React from 'react'
import { IoSearchCircleSharp } from "react-icons/io5";

const Input = () => {
  return (
    <div className=''>
        <form className='flex'>
            <input
            className="h-10 w-1/3  bg-inherit placeholder:text-white border-b-2 outline-none"
            type="text"
            placeholder="Enter city"
            />
            <IoSearchCircleSharp className='text-4xl'/>
        </form>
    </div>
  )
}

export default Input;
