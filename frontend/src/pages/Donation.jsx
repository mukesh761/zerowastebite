import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import axios from 'axios'
const backend = import.meta.env.VITE_BACKEND

const Donation = () => {
  const [foodType, setFoodType] = useState("veg");
  const [food, setfood] = useState("")
  const [quantity, setquantity] = useState(null)
  const [expireIn, setexpireIn] = useState(null)
  const [location, setlocation] = useState('')
  const [image, setImage] = useState(null);
  const [status, setstatus] = useState(' 🚀 Post Donation')

  

  const handleSubmit=async (e)=>{
    e.preventDefault();
    try {
      setstatus('Posting...')
      console.log('post donation is clicked')
         const formData = new FormData();
         formData.append('food',food);
         formData.append('foodType',foodType);
         formData.append('image',image);
         formData.append('quantity',quantity);
         formData.append('expireIn',expireIn);
         formData.append('location',location);
         const response = await axios.post(`${backend}/post/upload`, formData, {
  withCredentials: true,
});
         console.log(response.data)
         setstatus('🚀 Post Donation')
    } catch (error) {
      
    }
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      {/* RIGHT CONTENT */}
      <div className="flex-1 p-6 overflow-y-auto">

        {/* HEADER */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-green-600">
            Donate Food 🍱
          </h1>
          <p className="text-gray-500">
            Share your extra food and help someone in need
          </p>
        </div>

        {/* FORM CARD */}
        <div className="bg-white rounded-2xl shadow-md p-6">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* FOOD NAME */}
            <div>
              <label className="text-sm font-semibold">Food Name</label>
              <input
                type="text"
                value={food}
                onChange={(e) => { setfood(e.target.value) }}
                placeholder="e.g. Rice & Curry"
                className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-green-200 focus:border-green-500 outline-none"
              />
            </div>

            {/* QUANTITY */}
            <div>
              <label className="text-sm font-semibold">Quantity</label>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setquantity(e.target.value)}
                placeholder="enter quantity in kg."
                className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-green-200 focus:border-green-500 outline-none"
              />
            </div>

            {/* EXPIRY TIME */}
            <div>
              <label className="text-sm font-semibold">Expiry Time</label>
              <input

                type='number'
                value={expireIn}
                onChange={(e) => { setexpireIn(e.target.value) }}
                placeholder="enter time in hours."
                className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-green-200 focus:border-green-500 outline-none"
              />
            </div>

            {/* FOOD TYPE */}
            <div>
              <label className="text-sm font-semibold">Food Type</label>
              <div className="flex gap-3 mt-2">

                <button
                  onClick={() => setFoodType("veg")}
                  className={`px-4 py-2 rounded-full border transition 
                    ${foodType === "veg" ? "bg-green-500 text-white" : ""}
                  `}
                >
                  Veg
                </button>

                <button
                  onClick={() => setFoodType("nonveg")}
                  className={`px-4 py-2 rounded-full border transition 
                    ${foodType === "nonveg" ? "bg-red-500 text-white" : ""}
                  `}
                >
                  Non-Veg
                </button>

              </div>
            </div>

          </div>

          {/* LOCATION */}
          <div className="mt-6">
            <label className="text-sm font-semibold"
           
            >Pickup Location</label>

            <div className="h-64 mt-2 rounded-xl bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500">📍 Map will be here</p>
            </div>
          </div>

          {/* ADDRESS TEXT */}
          <div className="mt-4">
            <input
             value={location}
            onChange={(e)=>setlocation(e.target.value)}
              type="text"
              placeholder="Enter address manually"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-200 focus:border-green-500 outline-none"
            />
          </div>
          <div className="mt-4 flex flex-col">
            <label className="font-semibold">upload photos</label>
            <input type="file"
              placeholder="enter photos"
              className="border h-30"
              onChange={(e)=>{setImage(e.target.files[0])}}
            />
          </div>
         

          {/* SUBMIT */}
          <div className="mt-6 flex justify-end">
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition shadow-md" onClick={handleSubmit}>
              {status}
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Donation;