import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
       <nav className="bg-slate-600 dark:bg-slate-200 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <div className="text-lg font-bold">E-Commerce</div>
        <div className="hidden md:flex space-x-6">
        <NavLink className='text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium'> <Link to="/register">Register</Link></NavLink>
        <NavLink className='text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium'> <Link to="/login">Login</Link></NavLink>
        <NavLink className='text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium'> <Link to="/">Home</Link></NavLink>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-blue-700">
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
          <Link to="/home">Home</Link>
        </div>
      )}
    </nav>
     </div>
  )
}

export default Navbar
