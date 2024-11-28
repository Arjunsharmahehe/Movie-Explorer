import React, { useEffect, useState } from 'react'
import ReviewCard from './ReviewCard/ReviewCard'
import { getMovieReviews } from '@/api/movies';
import NoReviewCard from './NoReviewCard/NoReviewCard';

const Reviews = ({ movieId }) => {

  const [reviews, setReviews] = useState({});

  useEffect(() => {getMovieReviews(movieId).then((res) => setReviews(res))}, []);

  const { results } = reviews; 

  const length = results?.length;

  if(length){
    return (
      <div className='bg-slate-900 pt-2'>
        <h1 className='font-extrabold text-4xl text-slate-100 mt-10 mb-8 mx-5'>Reviews</h1>
        {results?.map((result) => <ReviewCard result={result} key={result.id}/>)}
      </div>
    )
  }else{
    return(
      <div className='bg-slate-900 pt-2'>
        <h1 className='font-extrabold text-4xl text-slate-100 mt-10 mb-8 mx-5'>Reviews</h1>
        <NoReviewCard/>
      </div>
    );
  }
}

export default Reviews


// A movie can also have no reviews
// {"id":26405,"page":1,"results":[],"total_pages":0,"total_results":0}
// Write a condition for that


  // const results = [
  //   {
  //     "author": "shammahrashad",
  //     "author_details": {
  //       "name": "",
  //       "username": "shammahrashad",
  //       "avatar_path": null,
  //       "rating": 6
  //     },
  //     "content": "Theres not much of a plot and the villains weren't that great. It was a good laugh though and amazing cameos and fight scenes.",
  //     "created_at": "2024-07-25T21:26:26.038Z",
  //     "id": "66a2c3023f13b7231f1b94eb",
  //     "updated_at": "2024-07-26T17:17:34.336Z",
  //     "url": "https://www.themoviedb.org/review/66a2c3023f13b7231f1b94eb"
  //   },
  //   {
  //     "author": "r96sk",
  //     "author_details": {
  //       "name": "",
  //       "username": "r96sk",
  //       "avatar_path": "/mwR7rFHoDcobAx1i61I3skzMW3U.jpg",
  //       "rating": 9
  //     },
  //     "content": "Its story may not be the strongest, but the comedy makes \u003Cem\u003E'Deadpool & Wolverine'\u003C/em\u003E an excellent watch!\r\n\r\nThere are some top notch gags in there, particularly to do with the recent offscreen changes for Wade Wilson's alter ego. As you'd expect with Ryan Reynolds in this role, the jokes are plentiful and there is barely any time to react to one before another appears. That can sometimes not work as well as intended, e.g. \u003Cem\u003E'Deadpool 2'\u003C/em\u003E, but here the humour is executed perfectly.\r\n\r\nReynolds himself is quality, it is a quintessential Ryan Reynolds as Deadpool performance. It's real neat to see Hugh Jackman back as Wolverine, he does play second fiddle to the other titular character but still more than holds his own, as you'd expect. Emma Corrin, meanwhile, enters the MCU with a great showing.\r\n\r\nAs noted at the top, I do think the plot couldn't been superior - but not in a negative way. What is portrayed is still entertaining to watch, it's just not necessarily on the same level as the comedic elements. A fun watch, all the same. Do I like it more than the 2016 original? I think so, would only be minorly so though.",
  //     "created_at": "2024-07-25T23:00:25.482Z",
  //     "id": "66a2d90909905455146125df",
  //     "updated_at": "2024-07-25T23:00:25.730Z",
  //     "url": "https://www.themoviedb.org/review/66a2d90909905455146125df"
  //   }
  // ]

