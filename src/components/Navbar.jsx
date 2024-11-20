import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react';


const Navbar = () => {
    // const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
        <nav className='bg-gray-200 shadow shadow-gray-300 w-100 px-8 md:px-auto'>
        <div className='md:h-12 w-auto mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap'> 
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/home">Home</Link>
      </div>
      </nav>
    </div>
  )
}

export default Navbar
