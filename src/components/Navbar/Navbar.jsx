import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='p-4 flex justify-end items-center gap-6 bg-gray-950'>
      <p className='text-base font-bold flex gap-6'>
        <Link 
          to={`/PopularMovies`} 
          className='text-gray-50 hover:text-yellow-400 ease-in duration-150'>Popular</Link>
        {/* <Link 
          className='text-gray-50 hover:text-yellow-400 ease-in duration-150'
          to={`/Explore`}>Explore</Link> */}
        <Link 
          className='text-gray-50 hover:text-yellow-400 ease-in duration-150'
          to={`/TopRated`}>Top Rated</Link>
        <Link 
          className='text-gray-50 hover:text-yellow-400 ease-in duration-150'
          to={`/Upcoming`}>Upcoming</Link>
      </p>
      <input 
        type='text'
        className='bg-slate-400 rounded-md py-1 px-2 font-medium hover:bg-slate-500 ease-in-out duration-150 focus:outline-0 focus:bg-slate-300'
      ></input>
    </nav>
  )
}

export default Navbar
