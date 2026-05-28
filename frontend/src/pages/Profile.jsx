import React, { useContext } from 'react'
import Sidebar from '../Components/Sidebar'
import { userContext } from '../context/User.context'
import { IoIosLogOut } from "react-icons/io";
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
const backend = import.meta.env.VITE_BACKEND

const Profile = () => {


    const [selected, setselected] = useState('posts')
    const [posts, setposts] = useState([])
    const user=JSON.parse(localStorage.getItem('user'))
    console.log(user)
    const {signOut}=useContext(userContext)

    const getposts=async()=>{
        console.log("fetching posts")
        try {
            const res=await axios.get(`${backend}/user/getposts`,{withCredentials:true})
            const data=await res.data
            setposts(data.posts)
            console.log(data)
        } catch (error) {
            console.error('Error fetching posts:', error)
        }
    }

    useEffect(()=>{
        getposts()
    },[])
  return (
    <div className='h-screen w-screen flex '>
        <div className='left'>
            <Sidebar/>
        </div>
        <div className='right flex justify-center w-full flex-col'>
            <div className='border flex w-full justify-center items-center'>
                <div className='flex flex-col items-center justify-center'>
                    <div className='h-30 w-30 rounded-full border bg-green-200 '></div>
                <h1 className='font-bold text-xl'>{user?.name}</h1>
                <h1 className='font-semibold '>{user?.email}</h1>
                <div className='h-10 w-40 rounded border flex items-center gap-2' onClick={signOut}>
                    <IoIosLogOut className='text-red-300 h-8 w-8' />
                    <h1 className='font-bold text-red-300'>sign out</h1>
                </div>
                </div>

            </div>
            <div className='border h-full w-full  '>
                <div className='flex gap-4'>
                    <h1 className={selected === 'posts' ? 'font-bold text-green-600' : 'font-bold text-gray-600'} onClick={() => setselected('posts')} >Your Posts</h1>
                    <h1 className={selected === 'requests' ? 'font-bold text-green-600' : 'font-bold text-gray-600'} onClick={() => setselected('requests')} >Requests</h1>

                    
                </div>
                {selected === 'posts' &&posts.length > 0 ? (
                    posts.map((item) => (
                        <div key={item._id} className=' p-2 rounded-md mt-2 flex justify-between shadow-lg'>
                            <h1>{item.food}</h1>
                            <h1>{item.quantity}</h1>
                            <h1>{item.type}</h1>
                            <h1>{item.expireIn}</h1>
                            <button className='bg-red-500 text-white px-4 py-2 rounded-md' >
                                Delete
                            </button>
                        </div>
                    ))
                ) : (
                    <p>No posts found.</p>
                )}  

                 {selected === 'requests' &&posts.length > 0 ? (
                    posts.map((item) => (
                        <div key={item._id} className=' p-2 rounded-md mt-2 flex justify-between shadow-lg'>
                            <h1>{item.food}</h1>
                            <h1>{item.quantity}</h1>
                            <h1>{item.type}</h1>
                            <h1>{item.expireIn}</h1>
                            <button className='bg-red-500 text-white px-4 py-2 rounded-md' >
                                accept
                            </button>
                        </div>
                    ))
                ) : (
                    <></>
                )}  
            </div>
            
        </div>
    </div>
  )
}

export default Profile