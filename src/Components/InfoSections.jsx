import React from "react";

const InfoSections = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 bg-gray-600">
      {/* College Section */}
      <div className="college  bg-gray-800   shadow-lg rounded-lg p-6  transition-all">
        <div className="flex flex-col items-center">
          <div className="text-4xl mb-4 text-blue-600">
            🏫 {/* Replace with an actual icon */}
          </div>
          <h2 className="text-xl font-semibold mb-2">Jerusalem College</h2>
          <p className="text-gray-600">Pallikarnai, Chennai 600028</p>
        </div>
      </div>

      {/* Timing Section */}
      <div className="timing bg-gray-800 shadow-lg rounded-lg p-6  transition-all">
        <div className="flex flex-col items-center">
          <div className="text-4xl mb-4 text-green-600">
            ⏰ {/* Replace with an actual icon */}
          </div>
          <h2 className="text-xl font-semibold mb-2">Timings</h2>
          <p className="text-gray-600">Mon-Fri: 9:00 AM - 5:00 PM</p>
        </div>
      </div>

      {/* Food Section */}
      <div className="food bg-gray-800    shadow-lg rounded-lg p-6 transition-all">
        <div className="flex flex-col items-center">
          <div className="text-4xl mb-4 text-red-600">
            🍽️ {/* Replace with an actual icon */}
          </div>
          <h2 className="text-xl font-semibold mb-2">Food</h2>
          <p className="text-gray-600">Cafeteria available with vegetarian options</p>
        </div>
      </div>
    </div>
  );
};

export default InfoSections;
