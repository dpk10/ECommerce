import React from 'react'

const Home = () => {
const userName=JSON.parse(localStorage.getItem('user'));

  return (
    <div className='flex min-h-screen items-center justify-center bg-gradient-to-tr to-blue-400 from-green-500 p-10'>
        <div className='w-max'>
        <h1 className='animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-white font-bold'>Welcome {userName.fname}</h1>
        </div>
    </div>
  )
}

export default Home
