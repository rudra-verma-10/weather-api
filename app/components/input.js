"use client"

import React, {useState} from "react";
import { IoSearchCircleSharp } from "react-icons/io5";

const Input = ({ setLocation, fetchData }) => {
  return (
    <div className="">
      <form onSubmit={fetchData} className="flex ">
        <input
          className="h-10 w-1/2  bg-inherit placeholder:text-white border-b-2 outline-none"
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
