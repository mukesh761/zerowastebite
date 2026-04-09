import React from 'react'

const FoodPost = () => {
  return (
    <div className='h-55 flex items-center '>
        <div>
            <h1>fresh vegetable</h1>
            <h3>Quantity 45kg</h3>
            <h1>type: Veg</h1>
        </div>
        <div className='image flex flex-col justify-between gap-2'>
            <div className='h-40 w-40 rounded bg-green-300 '>
                <img src="" alt="" />
            </div>
            <div className='flex gap-2'>
                <div className='h-10 w-10 rounded bg-green-300'></div>
                <div className='h-10 w-10 rounded bg-green-300'></div>
                <div className='h-10 w-10 rounded bg-green-300'></div>
            </div>
        </div>
    </div>
  )
}

export default FoodPost