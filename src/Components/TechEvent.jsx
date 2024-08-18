import React from "react";
import { techEventsData } from "../utils/techEvents";
import { Link } from "react-router-dom";

const TechEvent = () => {
  console.log(techEventsData);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {techEventsData.map((techEvent) => (
          <Link to={`/events/tech/${techEvent.id}`} key={techEvent.id} className="group">
            <div className="flex flex-col justify-between border border-gray-200 rounded-lg shadow-md overflow-hidden bg-white transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
              <div className="p-5 flex justify-center items-center">
                <img src={techEvent.image} alt={techEvent.name} className="w-full h-48 object-cover rounded-md" />
              </div>
              <hr className="border-gray-200" />
              <div className="p-5 text-center">
                <h1 className="text-2xl font-semibold text-gray-800 group-hover:text-blue-500">{techEvent.name}</h1>
                <p className="text-gray-600 mt-2">{techEvent.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TechEvent;
