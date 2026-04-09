import React from 'react'

const Info = ({color ,name, insite, amount}) => {
  const bgClasses = {
  green: "bg-green-50",
  yellow: "bg-yellow-50",
  red: "bg-red-50",
  cyan: "bg-cyan-50",
  blue: "bg-blue-50",
};

const textClasses = {
  green: "text-green-600",
  yellow: "text-yellow-600",
  red: "text-red-600",
  cyan: "text-cyan-600",
  blue: "text-blue-600",
};
  return (
    <div className={` h-35 w-40 flex flex-col justify-evenly p-3 mt-6 ${bgClasses[color]} rounded-md `}>
        <h2 className='font-semibold'>{name}</h2>
        <h2> <span className='font-bold'>{amount}</span> </h2>
       <h2> <span className={`${textClasses[color]} font-semibold`}>{insite}%</span> <span>from last week</span></h2>
    </div>
  )
}

export default Info