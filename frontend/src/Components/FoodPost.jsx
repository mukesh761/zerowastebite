import React, { useState } from 'react'
import Postdetail from './Postdetail'

const FoodPost = () => {
    const [showDetail, setshowDetail] = useState(false)
  return (
    <div className='h-10 flex items-center justify-between p-2 transition-all delay-150 rounded-md hover:bg-neutral-300 relative shadow-lg mt-2 '>
        <div> 
            <h1>fresh vegetable</h1>
        </div>
        <div>
            <h1>Quantity: 45kg </h1>
        </div>
        <div>
            <h1>type: veg</h1>
        </div>
        <div className=' h-5 bg-red-400 flex items-center rounded-full p-2'>
            <h1>urgent</h1>
        </div>
        <div>
            <h1>time : 24 hr </h1>
        </div>
        <div >
            <button className='bg-green-600 rounded-full p-1 hover:scale-105 transition-all delay-150 cursor-pointer' onClick={()=>{setshowDetail(true)}}>view detail</button>
        </div>
        <Postdetail show={showDetail} setshow={setshowDetail}/>
    </div>
  )
}

export default FoodPost