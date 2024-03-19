'use client';

import React, {useState, } from 'react'
import Input from '../components/input';
// require('dotenv').config();

// useEffect(()=> {console.log("key: ", process.env.NEXT_)}, []);
const page = () => {
  const [location, setLocation] = useState('');
  const [data, setData] = useState({});

  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  const url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=7&aqi=yes&alerts=yes`;

  const fetchData = async (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setData(data);
      // console.log('data:', data);
      setLocation('');
      
    } catch (error) {
      console.error('Error:', error);
      setData({})
    }
  };
  return (
    <main className='flex bg-cover bg-blue-500 bg-gradient-to-r from-blue-500 to-blue-300 h-screen '>
    <div className='p-5 w-full'>
      <Input fetchData={fetchData} setLocation={setLocation} />
    </div>
    <div className='w-1/4 mt-8'>
      Weather API app
    </div>
    <div className='flex border-2 p-2'>
      {data.location && (
        <div className='border-2 h-fit'>
          <h1>{data.location.name}</h1>
          <h2>{data.location.region}</h2>
          <h3>{data.location.country}</h3>
          <h4>{data.location.localtime}</h4>
          <h5>{data.current.temp_c}°C</h5>
          <h6>{data.current.condition.text}</h6>
          <img src={data.current.condition.icon} alt='weather icon'/>
        </div>
      )}
    </div>
    </main>
  )
}

export default page;
