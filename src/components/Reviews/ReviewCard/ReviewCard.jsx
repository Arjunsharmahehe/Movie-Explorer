import { Image_Domain } from '@/api/movies';
import React from 'react'

const ReviewCard = ({ result }) => {
  
  // {
  //   "author": "r96sk",
  //   "author_details": {
  //     "name": "",
  //     "username": "r96sk",
  //     "avatar_path": "/mwR7rFHoDcobAx1i61I3skzMW3U.jpg",
  //     "rating": 9
  //   },
  //   "content": "Its story may not be the strongest, but the comedy makes \u003Cem\u003E'Deadpool & Wolverine'\u003C/em\u003E an excellent watch!\r\n\r\nThere are some top notch gags in there, particularly to do with the recent offscreen changes for Wade Wilson's alter ego. As you'd expect with Ryan Reynolds in this role, the jokes are plentiful and there is barely any time to react to one before another appears. That can sometimes not work as well as intended, e.g. \u003Cem\u003E'Deadpool 2'\u003C/em\u003E, but here the humour is executed perfectly.\r\n\r\nReynolds himself is quality, it is a quintessential Ryan Reynolds as Deadpool performance. It's real neat to see Hugh Jackman back as Wolverine, he does play second fiddle to the other titular character but still more than holds his own, as you'd expect. Emma Corrin, meanwhile, enters the MCU with a great showing.\r\n\r\nAs noted at the top, I do think the plot couldn't been superior - but not in a negative way. What is portrayed is still entertaining to watch, it's just not necessarily on the same level as the comedic elements. A fun watch, all the same. Do I like it more than the 2016 original? I think so, would only be minorly so though.",
  //   "created_at": "2024-07-25T23:00:25.482Z",
  //   "id": "66a2d90909905455146125df",
  //   "updated_at": "2024-07-25T23:00:25.730Z",
  //   "url": "https://www.themoviedb.org/review/66a2d90909905455146125df"
  // }

  const name = result.author_details.name === "" ? 'Username' : result.author_details.name;

  return (
    <div className='bg-slate-950 m-4 p-3 rounded-lg hover:bg-gray-950 duration-150 ease-in-out'>
      <div className='flex gap-2 mb-2'>
        <img className='w-8 h-8 rounded-3xl mt-1' src={`${Image_Domain}${result.author_details.avatar_path}`}/>
        <div>
          <h1 className='text-gray-50 font-bold text-lg'>{name} <span className='text-gray-500 font-normal text-sm'>@{result.author}</span></h1>
          <p className='text-gray-500 font-normal text-sm'>{result.created_at.slice(0,10)}<a className='ml-2 text-gray-400 underline' href={result.url}>Source Link</a></p>
        </div>
      </div>
      <p className='text-gray-50 mx-10 ' >{result.content}</p>
    </div>
  )
}

export default ReviewCard
