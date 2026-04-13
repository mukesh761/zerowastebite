import React, { useState } from 'react'
import Postdetail from './Postdetail'

const FoodPost = ({item}) => {
    const [showDetail, setshowDetail] = useState(false)
   console.log(item)
  return (
    <div className='h-10 flex items-center justify-between p-2 transition-all delay-150 rounded-md hover:bg-neutral-300 relative shadow-lg mt-2 '>
        <div> 
            <h1>{item?.food}</h1>
        </div>
        <div>
            <h1>Quantity: {item?.quantity}kg </h1>
        </div>
        <div>
            <h1>type: {item?.type}</h1>
        </div>
       
        <div>
            <h1>time : {item?.expireIn} hr </h1>
        </div>
        <div >
            <button className='bg-green-600 rounded p-1 hover:scale-105 transition-all delay-150 cursor-pointer' onClick={()=>{setshowDetail(true)}}>view detail</button>
        </div>
        <Postdetail show={showDetail} setshow={setshowDetail } item={item}/>
    </div>
  )
}

export default FoodPost