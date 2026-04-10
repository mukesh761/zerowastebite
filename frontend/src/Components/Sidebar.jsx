import React, { useState } from 'react'
import { MdDashboard,MdInventory ,MdChat, MdHelpCenter} from "react-icons/md";
import { BiSolidDonateHeart } from "react-icons/bi";
import { IoSettingsSharp } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";



const Sidebar = () => {
    const [selected, setselected] = useState('Dashboard')
    
    return (
      
            <div className='left h-screen w-40 shadow-red-200 flex flex-col justify-between m-2 bg-neutral-200 rounded-lg '>
                <div className='upper gap-y-2 font-semibold flex flex-col '>
                    <div className={selected=='Dashboard'?'transition-all duration-300 ease-in-out bg-green-400 text-white shadow-md scale-105 rounded-md flex items-center gap-2':'flex items-center gap-2'} onClick={()=>{setselected('Dashboard')}}>
                        <MdDashboard />
                        <button>Dashboard</button>
                    </div>
                    <div className={selected=='Inventory'?'transition-all duration-300 ease-in-out bg-green-400 text-white shadow-md scale-105 rounded-md flex items-center gap-2':'flex items-center gap-2'} onClick={()=>{setselected('Inventory')}}>
                        <MdInventory />
                        <button>Inventory</button>
                    </div>
                    <div className={selected=='Donate'?'transition-all duration-300 ease-in-out bg-green-400 text-white shadow-md scale-105 rounded-md flex items-center gap-2':'flex items-center gap-2'} onClick={()=>{setselected('Donate')}}>
                        <BiSolidDonateHeart />
                        <button>Donate</button>
                    </div>
                    <div className={selected=='Chat'?'transition-all duration-300 ease-in-out bg-green-400 text-white shadow-md scale-105 rounded-md flex items-center gap-2':'flex items-center gap-2'} onClick={()=>{setselected('Chat')}}>
                        <MdChat />
                        <button>Chat</button>
                    </div>
                </div >
                <div className='lower'>
                    <div className={selected=='Settings'?'transition-all duration-300 ease-in-out bg-green-400 text-white shadow-md scale-105 flex items-center gap-2':'flex items-center gap-2'} onClick={()=>{setselected('Settings')}}>
                        <IoSettingsSharp />
                        <button>Settings</button>
                    </div>
                    <div className='flex items-center gap-2'>
                        <MdHelpCenter />
                        <h2>Help center</h2>
                    </div>
                </div>
                <div className='profile border rounded-md'>
                    <div className='upProfile flex gap-2 items-center border-b-2'>
                        <div className='h-10 w-10 rounded-full bg-green-300 '></div>
                        <h3>mukesh kumar</h3>
                    </div>
                    <div className='logout flex items-center gap-2'>
                        <IoIosLogOut className='text-red-700 h-10 w-8' />
                        <h2>Sign out</h2>
                    </div>
                </div>

            </div>
            
        
    )
}

export default Sidebar