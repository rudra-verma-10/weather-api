import React from 'react'
import Input from '../components/input';

const page = () => {
  return (
    <main className='flex bg-cover bg-blue-500 bg-gradient-to-r from-blue-500 to-blue-300 h-screen '>
    <div className='p-5 w-full'>
      <Input />
    </div>
    <div className='w-1/4 mt-8'>
      Weather API app
    </div>
    </main>
  )
}

export default page;
