import React, { useContext, useState ,useEffect} from 'react'
import map from '../assets/map.jpg'
import { useNavigate, useNavigation } from 'react-router'
import { socketContext } from '../context/socket.io.context'

const Postdetail = ({show,setshow, item}) => {
    const [status, setstatus] = useState('Get Food')
    const [mapSrc, setMapSrc] = useState("");
    console.log(item)
    const {socket}=useContext(socketContext)
    
    const navigation= useNavigate()

    const handleGetFood=(e)=>{
        e.preventDefault()
        try {
            setstatus('pending');
            socket.emit('request',{item})

        } catch (error) {
            console.log('error in getting food')
        }
    }

    const handleChat=(e)=>{
        try {
            navigation('/chat')
        } catch (error) {
            console.log('error')
        }
    }
useEffect(() => {
  if (item?.location) {
    const encoded = encodeURIComponent(item.location);
    setMapSrc(`https://maps.google.com/maps?q=${encoded}&output=embed`);
  }
}, [item]);

  return (
    <div className= {show?'rounded-md border bg-white z-10 absolute p-4 flex w-full items-center justify-between':'hidden'}>
        <div className='absolute right-5  top-5 h-8 w-8 border rounded-md flex items-cente justify-center text-red-300 cursor-pointer hover:scale-105 transition-all delay-105' onClick={()=>{setshow(false)}}>X</div>
        <div className='image flex flex-col gap-2'>
            <div className='mainImage h-40 w-40 bg-green-400 rounded-md '>
                <img src={item?.image.url} alt="" 
                className='h-full w-full object-cover' 
                />
            </div>
            
        </div>
        <div className='detail '>
            <h1 className='font-bold text-xl'>{item?.food}</h1>
            <h1>quantity:{item?.quantity}kg </h1>
            <h1>type: {item?.type}</h1>
            <h1>time: {item?.expireIn} hr </h1>
            
        </div>
        <div className='map h-50 w-96 bg-amber-500 rounded-md'>
          <iframe
          title="map"
          src={mapSrc}
          className="w-full h-full rounded-lg border"
          loading="lazy"
        ></iframe>
        </div>
        <div className='location'>
            <h1>{item?.location}</h1>
        </div>
        <div>
             <button className='h-10 w-30 hover:scale-105 transition-all delay-100 bg-green-600 rounded-md cursor-pointer'
             onClick={handleChat}
              >Chat us</button>
            <button className={status=='pending'?'h-10 w-30 hover:scale-105 transition-all delay-100 bg-yellow-600 rounded-md cursor-pointer':'h-10 w-30 hover:scale-105 transition-all delay-100 bg-green-600 rounded-md cursor-pointer'}
            onClick={handleGetFood}
            >{status}</button>
        </div>
    </div>
  )
}

export default Postdetail