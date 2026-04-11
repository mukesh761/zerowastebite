import React from 'react'
import Sidebar from '../Components/Sidebar'
import { CiSearch } from 'react-icons/ci'

const Chat = () => {
    return (
        <div className='w-screen flex'>
            <div className='left'>
                <Sidebar />
            </div>
            <div className='right p-2 flex w-full'>
                <div className='h-screen border-r rounded '>
                    <div className='search h-8 w-60 rounded-full border flex items-center justify-center shadow-lg shadow-green-200 mb-8'>
                        <CiSearch className='h-6 w-6 ' />
                        <input type="text" className='h-full w-full border-none rounded-full p-2 focus:outline-none' placeholder='search here...' />

                    </div>
                    <div>
                        <div className='mt-2 w-full h-8 rounded-md text-center shadow bg-neutral-200 shadow-green-200 hover:bg-neutral-400'>user1</div>
                    </div>
                </div>
                <div className='w-full relative'>
                    <div className='shadow-lg w-full shadow-neutral-500   p-3 rounded-md'>
                        <h1 className='text-xl font-semibold'>mukesh maurya</h1>
                    </div>
                    <div className='flex flex-col'>

                        <div className='receiverchat justify-start flex mt-2 '><h1 className='border-2 p-2 rounded-md bg-neutral-300 w-96'>is food still available?</h1></div>
                        <div className='sender justify-end flex mt-2'><h1 className='border-2 p-2 rounded-md bg-green-300 w-96'>is food still available?</h1></div>
                    </div>
                    <div className=' absolute bottom-8 rounded-md w-full '>
                        <input type="text" className='border-2 w-[90%] h-10 rounded-md p-4' placeholder='send message... '/>
                        <button className='h-10 w-15 rounded-full bg-green-400 ml-5'>send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat