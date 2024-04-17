"use client"

import React, {useState} from "react";
import { IoSearchCircleSharp } from "react-icons/io5";

const Input = ({ setLocation, fetchData }) => {
  return (
    <div className="">
      <form onSubmit={fetchData} className="flex border w-3/4 rounded-xl p-4">
        <input
          className="h-10 w-full bg-inherit placeholder:text-white  outline-none"
          type="text"
          placeholder="Enter city"
          onChange={(e) => setLocation(e.target.value)}
        />
        <IoSearchCircleSharp className="text-4xl" />
      </form>
    </div>
  );
};

export default Input;
