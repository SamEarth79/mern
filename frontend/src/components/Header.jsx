import React from 'react'
import {FaUser, FaUserPlus} from "react-icons/fa"
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <div className='w-full p-10 border-2 flex justify-between items-center'>
      <div className="logo text-xl font-bold">
        <Link to="/"><h1>Sitcoms for all</h1></Link>
      </div>
      <div className="actions flex items-center gap-8">
        <Link className='flex gap-2 items-center' to="/signup"><FaUserPlus className='text-3xl'/>Register</Link>
        <Link className='flex gap-2 items-center' to="/login"><FaUser className='text-2xl'/>Login</Link>
      </div>
    </div>
  )
}

export default Header
