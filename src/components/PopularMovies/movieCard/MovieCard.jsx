import { Image_Domain } from '@/api/movies';
import React from 'react'
import { Link } from 'react-router-dom';

const MovieCard = ({movies}) => {
  
  // const popularMovies = {
  //   "page": 1,
  //   "results": [
  //     {
  //       "adult": false,
  //       "backdrop_path": "/v9acaWVVFdZT5yAU7J2QjwfhXyD.jpg",
  //       "genre_ids": [16, 878, 10751],
  //       "id": 1184918,
  //       "original_language": "en",
  //       "original_title": "The Wild Robot",
  //       "overview": "After a shipwreck, an intelligent robot called Roz is stranded on an uninhabited island. To survive the harsh environment, Roz bonds with the island's animals and cares for an orphaned baby goose.",
  //       "popularity": 4473.701,
  //       "poster_path": "/9w0Vh9eizfBXrcomiaFWTIPdboo.jpg",
  //       "release_date": "2024-09-12",
  //       "title": "The Wild Robot",
  //       "video": false,
  //       "vote_average": 8.614,
  //       "vote_count": 628
  //     }
  //   ],
  //   "total_pages": 46582,
  //   "total_results": 931628
  // }

  // const { results } = popularMovies;
  // const movies = results[0];

  const title = movies.original_title.length > 14 ? movies.original_title.slice(0,14)+".." : movies.original_title;

  return (
    <Link to={`/Movie/${movies.id}`} target='_blank' className='w-48 bg-slate-950 p-3 m-2 rounded-lg hover:scale-105 duration-150 ease-in-out'>
      <img className='rounded-lg mb-1 hover:scale-105 duration-150 ease-in-out' src={`${Image_Domain}${movies.poster_path}`} alt={title} />
      <h1 className='text-teal-50 font-bold text-lg mb-2'>
        {title}
      </h1>
      <p className='text-gray-500 text-sm flex justify-start'>
        <span className='font-semibold mr-1'>Rating:</span>
          {movies.vote_average.toFixed(1)}
        <span className='font-semibold ml-auto mr-1'>Reviews:</span>
          {movies.vote_count}
      </p>
    </Link>

  )
}

export default MovieCard
