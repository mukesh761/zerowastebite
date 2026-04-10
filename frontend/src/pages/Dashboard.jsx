import React from 'react'
import Sidebar from '../Components/Sidebar'
import hunger from '../assets/hunger.png'
import Info from '../Components/Info'
import { MdInventory} from "react-icons/md";
import FoodPost from '../Components/FoodPost';

const Dashboard = () => {
  return (
    <div className='flex'>
        <div className='left'>
            <Sidebar/>
        </div>
        <div className='right relative '>
            <div className='banner rounded flex items-center justify-between w-full shadow-green-200 shadow '>
               <div className='text'>
                 <h1 className='text-4xl font-semibold text-green-400'>Share Your Extra. Ease Their Hunger . </h1>
                 <p>“Every day, tons of perfectly good food are thrown away while millions of people go to bed hungry. What we often consider ‘extra’ could be someone else’s only meal of the day. By choosing to share instead of waste, you’re not just saving food—you’re saving dignity, hope, and lives. A small act of donating your surplus can create a big impact, turning waste into nourishment and compassion into action.”</p>
               </div>
               <div className='image bg-yellow-200'>
                <img src={hunger} alt="" className='' />
               </div>
            </div>
            <div className='flex items-center justify-evenly'>
                <Info color='green' name='Waste Reduced' insite='+12' amount={'40 kg'} />
                <Info color={'yellow'} name='Cost Saving ' insite='+12' amount={'rs 12300'} />
                <Info color={'red'} name='People Feed' insite='+12' amount={409} />
                <Info color={'cyan'} name={`NGO's Added`} insite='+12' amount={40} />
                <Info color={'blue'} name={'Carbon Footprints '} insite='-20' amount={4089} />
            </div>
        <div className='foodInventory rounded-md border mt-2'>
          <div className='shadow-md shadow-green-200'>
          <div className='surplusFoodInventory flex gap-2 items-center '>
            <MdInventory className='text-green-600' />
            <h1 className='font-bold text-lg'>Surplus Food Inventory </h1>
            </div>
            <div>
              <p>Current surplus items ready for redistribution</p>
            </div>
          </div>
          <FoodPost/>
        </div>
        </div>
    </div>
  )
}

export default Dashboard