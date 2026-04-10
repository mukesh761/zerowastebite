import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";

const Donation = () => {
  const [foodType, setFoodType] = useState("veg");

  return (
    <div className="flex h-screen bg-gray-50">
        <Sidebar/>
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
                placeholder="e.g. Rice & Curry"
                className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-green-200 focus:border-green-500 outline-none"
              />
            </div>

            {/* QUANTITY */}
            <div>
              <label className="text-sm font-semibold">Quantity</label>
              <input
                type="text"
                placeholder="e.g. Serves 10 people"
                className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-green-200 focus:border-green-500 outline-none"
              />
            </div>

            {/* EXPIRY TIME */}
            <div>
              <label className="text-sm font-semibold">Expiry Time</label>
              <input
                type="datetime-local"
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
            <label className="text-sm font-semibold">Pickup Location</label>

            <div className="h-64 mt-2 rounded-xl bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500">📍 Map will be here</p>
            </div>
          </div>

          {/* ADDRESS TEXT */}
          <div className="mt-4">
            <input
              type="text"
              placeholder="Enter address manually"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-200 focus:border-green-500 outline-none"
            />
          </div>

          {/* SUBMIT */}
          <div className="mt-6 flex justify-end">
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition shadow-md">
              🚀 Post Donation
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Donation;