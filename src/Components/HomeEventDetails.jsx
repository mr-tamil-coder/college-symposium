import React from "react";
import { Link } from "react-router-dom";
import Lottie from "react-lottie-player";
import animationData from "../assets/Price/award.json"; 

const HomeEventDetails = () => {
  return (
    <div className="flex flex-col items-center bg-gray-900 py-10 px-4 min-h-screen">
      <h2 className="text-4xl font-bold text-gray-100 mb-4 text-center">
        Learn more about the event and win exciting prizes!
      </h2>

      <div className="flex flex-wrap justify-center gap-10 mt-6 mb-10">
        {/* Event Cash Prize */}
        <div className="flex flex-col items-center bg-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
          <Lottie
            loop
            animationData={animationData}
            play
            style={{ width: 250, height: 250 }}
          />
          <p className="text-xl font-semibold text-white mt-4">Cash Prize</p>
          <p className="text-md text-gray-300 text-center mt-2">
            Exciting cash prizes and certificates for the winners!
          </p>
        </div>
      </div>

      <button className="bg-blue-600 text-white text-lg font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300">
        <Link to="/events">Explore Events</Link>
      </button>
    </div>
  );
};

export default HomeEventDetails;
