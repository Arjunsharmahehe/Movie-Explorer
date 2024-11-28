import React from 'react'

const NoReviewCard = () => {
  return (
    <div className='bg-slate-950 m-4 p-3 rounded-lg flex justify-center items-center hover:bg-gray-950 duration-150 ease-in-out'>
      <h1 className='text-slate-400 font-bold text-2xl py-7'>This movie has no reviews yet</h1>
    </div>
  )
}

export default NoReviewCard
