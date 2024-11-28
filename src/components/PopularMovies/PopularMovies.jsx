import React, {useEffect, useState} from 'react'
import MovieCard from './movieCard/MovieCard'
import { getPopularMovie } from '../../api/movies'
import Navbar from '../Navbar/Navbar'

const PopularMovies = () => {

  const [currPage, setCurrPage] = useState(1)
  const [popularMovies, setPopularMovies] = useState({});
  
  useEffect(() => {getPopularMovie(currPage).then((res) => setPopularMovies(res))}, [currPage])

  const { results } = popularMovies;
  return (
    <>
    <Navbar/>
    <div className='bg-gray-900 flex flex-col items-center p-3 w-fit'>
      <h1 className='font-extrabold text-4xl text-slate-100 my-2 mb-4'>Popular Movies</h1>
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
          onClick={() => currPage < popularMovies.total_pages ? setCurrPage(currPage + 1) : setCurrPage(currPage)}>
            Next
        </button>
      </div>
    </div>
    </>
  )
}

export default PopularMovies

