import React from 'react'
import logo from "../../logo.png"
import {Link} from 'react-router-dom'

const AdminNav = () => {
  return (
    <div className=" flex justify-between px-8 py-4 items-center">
        <div className='w-[100px] h-[100px'>
            <img src={logo} alt="logo" className='w-full h-full object-fit'/>
        </div>
        <nav className="flex space-x-4 items-center">
            <ul className='flex space-x-2 items-center'>
                <li className='transition-all duration-300 hover:bg-green-600/70 px-2 py-1 cursor-pointer hover:text-white'>
                    <Link to='/'>Home</Link>
                </li>
                <li className='transition-all duration-300 hover:bg-green-600/70 px-2 py-1 cursor-pointer hover:text-white'>About</li>
                <li className='transition-all duration-300 hover:bg-green-600/70 px-2 py-1 cursor-pointer hover:text-white'>Contact</li>
                <li className='transition-all duration-300 hover:bg-green-600/70 px-2 py-1 cursor-pointer hover:text-white'>Program</li>
            </ul>
            
        </nav>
    </div>
  )
}

export default AdminNav