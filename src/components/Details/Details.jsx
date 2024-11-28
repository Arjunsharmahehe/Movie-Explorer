import { getMovieDetails, Image_Domain } from '@/api/movies';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../Navbar/Navbar';
import Similar from '../Similar/Similar';
import Reviews from '../Reviews/Reviews';

const Details = () => {
  const param = useParams();
  const movieID = param.movieId;
  const [movieDetails, setMovieDetails] = useState({})

  useEffect(() => {getMovieDetails(movieID).then((res) => setMovieDetails(res))}, [])


  const { budget, revenue, genres } = movieDetails;
  const income = Math.abs(revenue - budget);
  const incomeStatus = (revenue - budget) > 0 ? "Profit" : "Loss";

  function numeberToWords(money){
    if(money > 999999999){
      money = (money/1000000000).toFixed(2);
      return `${money} billion`;
    }else if(income > 999999){
      money = (money/1000000).toFixed(1);
      return `${money} million`;
    }else if(income > 999){
      money = (money/1000).toFixed(0);
      return `${money} thousand`;
    }else{
      return `${income}`
    }
  }


  return (
    <div className='m-0 bg-slate-950 overflow-x-hidden flex flex-col gap-0'>
    <Navbar/>
      <div className='flex w-screen bg-slate-950 p-6'>
        <img className='w-72 rounded-lg mr-6' src={`${Image_Domain}${movieDetails.poster_path}`}></img>
        <div className='flex-shrink'>
          <h1 className='text-4xl text-teal-50 font-bold'>{movieDetails.title}</h1>
          <p className='text-gray-600 text-base'>{movieDetails.runtime} mins | {movieDetails.release_date}</p>
          <hr className='border-1 border-gray-600 my-2'></hr>
          <h2 className='text-xl text-teal-50 font-bold text-wrap'>Overview:</h2>
          <p className='text-lg text-gray-100 font-normal my-1'>{movieDetails.overview}</p>
          
          <p className='text-gray-50 text-lg font-medium my-3 mb-4 flex flex-wrap gap-3'>
            Genres: {genres?.map((genre, i) => 
            <span className='text-gray-50 text-base font-normal py-1 px-2 outline-1 outline outline-slate-300 rounded-xl hover:bg-gray-900' key={i}>{genre.name}</span>)}</p>

          <hr className='border-1 border-gray-600 my-2'></hr>

          <p className='text-gray-50 text-lg font-medium my-3'>
            Languages: {movieDetails.spoken_languages?.map((lang, i) => 
            <span className='text-gray-50 text-base font-normal py-1 px-2 rounded-xl hover:bg-gray-900' key={i}>{lang.english_name}</span>)}</p>
          

          <h2 className='text-xl text-teal-50 font-medium'>Financials:</h2>
          <p className='text-gray-100 font-medium'>Budget: <span className='font-normal mx-1'>${numeberToWords(budget)}</span></p>
          <p className='text-gray-100 font-medium'>Revenue: <span className='font-normal mx-1'>${numeberToWords(revenue)}</span></p>
          <p className='text-gray-100 font-medium'>{incomeStatus}: <span className='font-normal mx-1'>${numeberToWords(income)}</span></p>
          
          <p className='text-gray-100 font-medium mt-4'>Ratings: <span className='font-normal mx-1 text-yellow-300'>{movieDetails.vote_average}</span><span className='text-gray-600 text-base'> | {movieDetails.vote_count}</span></p>
        </div>
      </div>
      <Similar movieId={movieID}/>
      <Reviews movieId={movieID}/>
    </div>
  )
}

export default Details



 // const movieDetails = {
  //   "adult": false,
  //   "backdrop_path": "/417tYZ4XUyJrtyZXj7HpvWf1E8f.jpg",
  //   "belongs_to_collection": {
  //     "id": 1370345,
  //     "name": "The Wild Robot Collection",
  //     "poster_path": null,
  //     "backdrop_path": null
  //   },
  //   "budget": 78000000,
  //   "genres": [
  //     {
  //       "id": 16,
  //       "name": "Animation"
  //     },
  //     {
  //       "id": 878,
  //       "name": "Science Fiction"
  //     },
  //     {
  //       "id": 10751,
  //       "name": "Family"
  //     }
  //   ],
  //   "homepage": "https://www.thewildrobotmovie.com",
  //   "id": 1184918,
  //   "imdb_id": "tt29623480",
  //   "origin_country": [
  //     "US"
  //   ],
  //   "original_language": "en",
  //   "original_title": "The Wild Robot",
  //   "overview": "After a shipwreck, an intelligent robot called Roz is stranded on an uninhabited island. To survive the harsh environment, Roz bonds with the island's animals and cares for an orphaned baby goose.",
  //   "popularity": 5113.594,
  //   "poster_path": "/9w0Vh9eizfBXrcomiaFWTIPdboo.jpg",
  //   "production_companies": [
  //     {
  //       "id": 521,
  //       "logo_path": "/3BPX5VGBov8SDqTV7wC1L1xShAS.png",
  //       "name": "DreamWorks Animation",
  //       "origin_country": "US"
  //     }
  //   ],
  //   "production_countries": [
  //     {
  //       "iso_3166_1": "US",
  //       "name": "United States of America"
  //     }
  //   ],
  //   "release_date": "2024-09-12",
  //   "revenue": 152822000,
  //   "runtime": 102,
  //   "spoken_languages": [
  //     {
  //       "english_name": "English",
  //       "iso_639_1": "en",
  //       "name": "English"
  //     }
  //   ],
  //   "status": "Released",
  //   "tagline": "Discover your true nature.",
  //   "title": "The Wild Robot",
  //   "video": false,
  //   "vote_average": 8.63,
  //   "vote_count": 722
  // }