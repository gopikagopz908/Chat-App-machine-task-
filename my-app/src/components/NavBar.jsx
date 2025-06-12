import React from 'react'
import { FaEnvelope, FaBell, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';


function NavBar() {
  return (
    <nav className='bg-white  shadow-md  px-4 py-2 flex items-center justify-between'>

    
    <div className='flex w-full gap-28 text-xl font-medium text-gray-700'>
<a href="/home">
  <h2 class="cursor-pointer font-semibold text-gray-700 ">Home</h2>
</a>

<Link to="/friends">
  <h2 className="text-lg font-semibold text-gray-700  cursor-pointer">
    Friends
  </h2>
</Link>        <h2>Groups</h2>
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
