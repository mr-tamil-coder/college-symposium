import React from "react";
import { Link } from "react-router-dom";
import Lottie from "react-lottie-player";
import animationData from "../assets/Price/award.json"; 

const HomeEventDetails = () => {
  return (
    <div className="flex flex-col items-center bg-gray-400 py-10 px-4">
      <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center">
        Learn more about the event and win exciting prizes!
      </h2>

      <div className="flex flex-wrap justify-center gap-10 mt-6 mb-6">
        {/* Event Cash Prize */}
        <div className="flex flex-col items-center bg-gray-800 rounded-lg shadow-md p-6 hover:scale-105 transform transition-all duration-300">
          <Lottie
            loop
            animationData={animationData} // Use the local JSON file
            play
            style={{ width: 300, height: 300 }}
          />
          <p className="text-xl font-semibold text-white mt-4">Cash Prize</p>
          <p className="text-md text-gray-200 text-center mt-2">
            Exciting cash prizes worth $1000 for the winners!
          </p>
        </div>
      </div>

      <button className="bg-blue-500 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition-all">
        <Link to="/events">Explore Events</Link>
      </button>
    </div>
  );
};

export default HomeEventDetails;
