import React from "react";
import { techEventsData } from "../utils/techEvents";
import { Link } from "react-router-dom";

const TechEvent = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {techEventsData.map((techEvent) => (
          <Link to={`/events/tech/${techEvent.id}`} key={techEvent.id} className="group">
            {/* Animated Border Card */}
            <div className="relative p-1">
              {/* Moving border animation */}
              <div className="absolute inset-0 border-2 border-transparent rounded-lg animate-border bg-gradient-to-r from-blue-500 to-teal-500 via-purple-500 bg-[length:200%_200%] group-hover:animate-spin-slow"></div>

              {/* Card Content */}
              <div className="relative flex flex-col justify-between border border-gray-200 rounded-lg shadow-md overflow-hidden bg-white p-5 transition-transform duration-300 ease-in-out hover:scale-105">
                <div className="flex justify-center items-center">
                  <img src={techEvent.image} alt={techEvent.name} className="w-full h-48 object-cover rounded-md" />
                </div>
                <hr className="border-gray-200" />
                <div className="text-center">
                  <h1 className="text-2xl font-semibold text-gray-800 group-hover:text-blue-500">{techEvent.name}</h1>
                  {/* <p className="text-gray-600 mt-2 text-left">{techEvent.description}</p> */}
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mt-4">Register</button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TechEvent;
