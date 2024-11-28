import React from 'react'
import Navbar from '../Navbar/Navbar'
import { useState, useEffect } from 'react';
import { getUpcomingMovie } from '../../api/movies';
import MovieCard from '../PopularMovies/movieCard/MovieCard';

const Upcoming = () => {
  
  const [currPage, setCurrPage] = useState(1)
  const [upcomingMovies, setUpcomingMovies] = useState({});
  
  useEffect(() => {getUpcomingMovie(currPage).then((res) => setUpcomingMovies(res))}, [currPage])

  const { results } = upcomingMovies;
  return (
    <>
    <Navbar/>
    <div className='bg-gray-900 flex flex-col items-center p-3'>
      <h1 className='font-extrabold text-4xl text-slate-100 my-3'>Upcoming Movies</h1>
      <p className='text-gray-600 text-base mb-1'>{upcomingMovies.dates?.minimum} - {upcomingMovies.dates?.maximum}</p>
      <div className='flex flex-wrap justify-center'>
        {results?.map((result) => <MovieCard movies={result} key={result.id}/> )}
      </div>
      <div className='flex justify-evenly max-w-96 m-6'>
        <button 
          className='bg-gray-950 px-5 py-1 m-2 text-gray-50 rounded-lg hover:bg-gray-800 duration-150 ease-in'
          onClick={() => currPage > 1 ? setCurrPage(currPage - 1) : setCurrPage(currPage)}>
            Prev
        </button>
        <h1 className='bg-gray-950 px-5 py-1 m-2 text-gray-50 rounded-lg border-2 border-teal-100  hover:bg-gray-900 duration-150 ease-in'>{currPage}</h1>
        <button 
          className='bg-gray-950 px-5 py-1 m-2 text-gray-50 rounded-lg hover:bg-gray-800 duration-150 ease-in'
          onClick={() => currPage < upcomingMovies.total_pages ? setCurrPage(currPage + 1) : setCurrPage(currPage)}>
            Next
        </button>
      </div>
    </div>
    </>
  )
}

export default Upcoming
