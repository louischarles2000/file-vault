import React, { useState } from 'react'
import colors from '../constants/colors';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const  Navbar = () => {
  const [ nav, setNav ] = useState(false);

  const handleMenuToggle = () => {
    setNav(!nav);
  }

  return (
    <div className='flex text-white px-4 justify-between items-center h-24 max-w-[1240px] mx-auto'>
      <h1
        className='text-xl font-bold text-[#80df9a]'>
        FileVault.
      </h1>
      <ul className='hidden md:flex uppercase'>
        <li className='p-4 text-xs cursor-pointer font-bold'>Upload</li>
        <li className='p-4 text-xs cursor-pointer font-bold'>Home</li>
        <li className='p-4 text-xs cursor-pointer font-bold'>Signin / Register</li>
        <li className='p-4 text-xs cursor-pointer font-bold'>About</li>
      </ul>
      <div onClick={handleMenuToggle} className='cursor-pointer block md:hidden'>
        {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
      </div>
      <div className={nav ? 
          'fixed left-0 bg-[#000300] top-0 w-[60%] h-full border-r border-r-gray-900 text-left px-5 ease-in-out duration-500' :
          'fixed left-[-60%] ease-in-out duration-500'
        }
      >
        <h1
          className='text-xl font-bold text-[#80df9a] mt-20'>
          FileVault.
        </h1>
        <ul className='pt-24 uppercase'>
          <li className='p-4 text-xs border-b border-gray-600 cursor-pointer'>Upload</li>
          <li className='p-4 text-xs border-b border-gray-600 cursor-pointer'>Home</li>
          <li className='p-4 text-xs border-b border-gray-600 cursor-pointer'>Signin / Register</li>
          <li className='p-4 text-xs border-b border-gray-600 cursor-pointer'>About</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;