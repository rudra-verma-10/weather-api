'use client';

import React, {useState} from 'react'
import Input from '../components/input';
// require('dotenv').config();


const page = () => {
  const [location, setLocation] = useState('');
  const [data, setData] = useState({});

  const apiKey = process.env.REACT_APP_API_KEY;

  const url = `http://api.weatherapi.com/v1/forecast.json?key=80fa953b0f13487f8cd221145241803&q=${location}&days=7&aqi=yes&alerts=yes`;

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
    <div>

    </div>
    </main>
  )
}

export default page;
