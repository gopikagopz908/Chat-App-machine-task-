import React from 'react'
import { FaEnvelope, FaBell, FaUserCircle } from 'react-icons/fa';


function NavBar() {
  return (
    <nav className='bg-white  shadow-md  px-6 py-3 flex items-center justify-between'>

    
    <div className='flex w-full gap-28 text-xl font-medium text-gray-700'>
        <h2>Home</h2>
        <h2>Friends</h2>
        <h2>Groups</h2>
        <h2>Groups</h2>
        <h2>Products</h2>
     
    </div>
    <div className='flex  gap-6 text-primary '>

      <FaEnvelope className="cursor-pointer w-[25px]  h-[25px]" />
        <FaBell className="cursor-pointer w-[25px]  h-[25px]" />
        <FaUserCircle className="cursor-pointer w-[25px]  h-[25px]" />
    </div>
    </nav>
  )
}

export default NavBar
