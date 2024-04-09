"use client";

import React, { useState } from "react";
import Input from "./components/input";
import Data from "./components/data";
import { FaCloudSun } from "react-icons/fa";

// require('dotenv').config();

// useEffect(()=> {console.log("key: ", process.env.NEXT_)}, []);
export default function Page() {
  const [location, setLocation] = useState("");
  const [data, setData] = useState({});

  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  const url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=7&aqi=yes&alerts=yes`;

  const fetchData = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setData(data);
      // console.log('data:', data);
      setLocation("");
    } catch (error) {
      console.error("Error:", error);
      setData({});
    }
  };
  return (
    <main className=" bg-cover bg-blue-500 bg-gradient-to-r from-blue-500 to-blue-300 h-screen w-screen  ">
      <div className="flex w-full">
        <div className="p-5 w-1/2">
          <Input fetchData={fetchData} setLocation={setLocation} />
        </div>
        <div className="flex flex-col  w-1/2">
          <div className="flex ">
            <h1 className="text-3xl font-bold mt-6 pr-2">
              Welcome to Weather API app
            </h1>
            <div>
              <FaCloudSun className="text-8xl fill-yellow-300" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center w-fit">
        <div className="bg-black/60">
          {data.location && <Data information={data} />}
        </div>
      </div>
    </main>
  );
}
