import React, { useContext } from 'react'
import Sidebar from '../Components/Sidebar'
import { userContext } from '../context/User.context'
import { IoIosLogOut } from "react-icons/io";

const Profile = () => {
    const user=JSON.parse(localStorage.getItem('user'))
    console.log(user)
    const {signOut}=useContext(userContext)
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
            <div className='border h-full w-full  flex justify-center'>
                <h1 className='text-xl font-bold '> requests</h1>
            </div>
        </div>
    </div>
  )
}

export default Profile