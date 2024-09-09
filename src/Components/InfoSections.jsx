import React from "react";

const InfoSections = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 m-3 bg-gray-900">
      <h2 className="text-3xl font-bold text-center text-white mb-6">
        Event Details
      </h2>

      {/* College Section */}
      <div className="college bg-gray-800 shadow-lg rounded-lg p-6 transform hover:scale-105 transition-all duration-300">
        <div className="flex flex-col items-center">
          <div className="text-4xl mb-4 text-blue-500">
            🏫 {/* Replace with an actual icon */}
          </div>
          <h2 className="text-xl font-semibold text-white mb-2">
            Jerusalem College of Engineering
          </h2>
          <p className="text-gray-400 text-lg">Pallikarnai, Chennai 600028</p>
        </div>
      </div>

      {/* Timing Section */}
      <div className="timing bg-gray-800 shadow-lg rounded-lg p-6 transform hover:scale-105 transition-all duration-300">
        <div className="flex flex-col items-center">
          <div className="text-4xl mb-4 text-green-500">
            ⏰ {/* Replace with an actual icon */}
          </div>
          <h2 className="text-xl font-semibold text-white mb-2">Timings</h2>
          <p className="text-gray-400">Mon-Fri: 9:00 AM - 5:00 PM</p>
        </div>
      </div>

      {/* Food Section */}
      <div className="food bg-gray-800 shadow-lg rounded-lg p-6 transform hover:scale-105 transition-all duration-300">
        <div className="flex flex-col items-center">
          <div className="text-4xl mb-4 text-red-500">
            🍽️ {/* Replace with an actual icon */}
          </div>
          <h2 className="text-xl font-semibold text-white mb-2">Food</h2>
          <p className="text-gray-400">
            Cafeteria available with vegetarian options
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoSections;
