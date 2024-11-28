import React, { useState, useEffect } from 'react'
import { getSimilarMovies } from '@/api/movies';
import MovieCard from '../PopularMovies/movieCard/MovieCard';

const Similar = ({movieId}) => {
  
  const [similarMovies, setSimilarMovies] = useState({});
  
  useEffect(() => {getSimilarMovies(movieId).then((res) => setSimilarMovies(res))}, [])

  const { results } = similarMovies;

  return (
    <div className='bg-gradient-to-b from-slate-950 to-slate-900 overflow-x-scroll overflow-y-hidden'>
      <h1 className='font-extrabold text-4xl text-slate-100 my-4 mx-5'>Similar Movies</h1>
      <div className='flex justify-start'>
        {results?.map((result) => <MovieCard movies={result} key={result.id}/> )}
      </div>
    </div>
  )
}

export default Similar
