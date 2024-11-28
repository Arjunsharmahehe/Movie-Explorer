import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'

const Explore = () => {
  
  const genres = [
      {
        "id": 28,
        "name": "Action"
      },
      {
        "id": 28,
        "name": "Action"
      },
      {
        "id": 28,
        "name": "Action"
      },
      {
        "id": 28,
        "name": "Action"
      },
      {
        "id": 28,
        "name": "Action"
      },
      {
        "id": 28,
        "name": "Action"
      },
      {
        "id": 28,
        "name": "Action"
      },
      {
        "id": 28,
        "name": "Action"
      },
      {
        "id": 28,
        "name": "Action"
      },
      {
        "id": 28,
        "name": "Action"
      },
      {
        "id": 28,
        "name": "Action"
      },
      {
        "id": 28,
        "name": "Action"
      },
      {
        "id": 28,
        "name": "Action"
      },
      {
        "id": 28,
        "name": "Action"
      },
      {
        "id": 28,
        "name": "Action"
      },
      {
        "id": 28,
        "name": "Action"
      },
      {
        "id": 28,
        "name": "Action"
      },
      {
        "id": 28,
        "name": "Action"
      }
    
    ];

  const [selected, setSelected] = useState([]);

  function onGenreClick(genre){
    const tempSelected = [...selected];
    const currIndex = tempSelected.findIndex((item) => item.id === genre.id);
    if(currIndex < 0){
      tempSelected.push(genre);
    }else{
      tempSelected.splice(currIndex, 1);
    }

    setSelected(tempSelected);
    console.log(selected);
  }


  return (
    <div className='bg-gray-900'>
      <Navbar/>
      <h2 className='text-3xl text-teal-50 font-bold text-wrap px-3 my-4'>Filters</h2>
      <div className='flex flex-wrap gap-4 p-3'>
      {genres?.map((genre, i) => <button onClick={(item) => onGenreClick(item)} className={`text-gray-50 text-base font-normal py-2 px-4 outline-1 outline outline-slate-300 rounded-xl hover:bg-gray-900`} key={i} >{genre.name}</button>)}
      </div>
      <h1>Explore</h1>
    </div>
  )
}

export default Explore
