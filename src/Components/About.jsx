import React from "react";
import ncse from "../utils/Img/ncse.jpeg";

const About = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center p-4">
      {/* About NCSE Symposium */}
      <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-500 max-w-2xl">
        <h2 className="text-3xl text-center text-white font-semibold p-4 border-b border-gray-700">
          About Our NCSE Symposium
        </h2>
        <img
          src={ncse}
          alt="About NCSE"
          className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="p-6 text-gray-300">
          <p className="text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            voluptatem asperiores modi nulla labore possimus corrupti provident
            beatae molestiae dolorum accusantium quaerat nostrum repellat eum
            laboriosam veniam porro impedit iste deserunt pariatur voluptatibus
            reiciendis, consequatur laborum. Corrupti rem unde placeat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
