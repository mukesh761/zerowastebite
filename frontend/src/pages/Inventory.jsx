import React from 'react'
import Sidebar from '../Components/Sidebar.jsx'
import { CiSearch } from "react-icons/ci";
import { MdInventory } from "react-icons/md";
import { RiPassExpiredFill } from "react-icons/ri";
import { AiOutlineStock } from "react-icons/ai";
import { IoFilterOutline } from "react-icons/io5";
import FoodPost from '../Components/FoodPost.jsx';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

const Inventory = () => {
    const [items, setitems] = useState([])

    const fetchItems = async () => {
        try {
            const response = await axios.get('http://localhost:3000/post/getfood', { withCredentials: true })
            console.log(response.data)
            setitems(response.data)

        } catch (error) {
            console.log('error in backend', error)
        }
    }

    useEffect(() => {
        fetchItems()
    }, [setitems])


    return (
        <div className='flex w-screen'>
            <div className='left '>
                <Sidebar />
            </div>
            <div className='Inventory w-full'>
                <div className='top flex items-center justify-between w-full shadow-md rounded-md p-2 '>
                    <div>
                        <h1 className='text-xl font-semibold'>Inventory management</h1>
                        <h3 className='font-light text-neutral-500'>Today, April 10th 2026</h3>
                    </div>
                    <div className='search h-8 w-60 rounded-full border flex items-center justify-center'>
                        <CiSearch className='h-6 w-6' />
                        <input type="text" className='h-full w-full border-none rounded-full p-2 focus:outline-none' placeholder='search for food' />

                    </div>
                </div>
                <div className='mid flex items-center justify-between p-4'>
                    <div className='p-2 h-30 w-40 rounded-md shadow-md bg-neutral-100 hover:scale-105 transition-all delay-150'>
                        <div className='flex items-center gap-2'>
                            <MdInventory className='text-green-600' />
                            <h1 className='font-semibold'>Total Items</h1>
                        </div>
                        <h3>Total items left in stock</h3>
                        <h1 className='text-2xl font-bold'>112</h1>
                    </div>
                    <div className='p-2 h-30 w-40 rounded-md shadow-md bg-neutral-100 hover:scale-105 transition-all delay-150'>
                        <div className='flex items-center gap-2'>
                            <RiPassExpiredFill className='text-red-600' />
                            <h1 className='font-semibold'>Expired Items</h1>
                        </div>
                        <h3>Total items that has expired</h3>
                        <h1 className='text-2xl font-bold'>112</h1>
                    </div>
                    <div className='p-2 h-30 w-40 rounded-md shadow-md bg-neutral-100 hover:scale-105 transition-all delay-150'>
                        <div className='flex items-center gap-2'>
                            <AiOutlineStock className='text-yellow-600' />
                            <h1 className='font-semibold'>Low stock</h1>
                        </div>
                        <h3>Items that are left less</h3>
                        <h1 className='text-2xl font-bold'>112</h1>
                    </div>
                </div>
                <div className='InventorOverview w-full'>
                    <div className='w-full flex items-center justify-between p-4 shadow-lg rounded-md'>
                        <h1>Inventory Overview</h1>
                        <div className='flex items-center gap-2 rounded-full shadow-md w-20 bg-neutral-100 shadow-green-200'>
                            <IoFilterOutline />
                            <h1>filter</h1>
                        </div>
                    </div>
                    <div className='w-full'>
                        {items.map((item, index) => (
                            <FoodPost key={index} item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Inventory