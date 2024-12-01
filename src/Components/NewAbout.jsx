import React from "react";
import "./animation.css"; // Import the CSS for the cubes animation

const NewAbout = () => {
  return (
    <div className="bg-dark-grey text-white-grey flex flex-col items-center">
      {/* Glassmorphic Container */}
      <div className="glassmorphic-container">
        {/* Heading Section */}
        <h1 className="text-5xl md:text-5xl text-lg mb-5 leading-relaxed text-left">
          About
        </h1>

        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-aboutfont text-green-blue tracking-widest mb-8 text-left">
          TECHNOVENZA '24
        </h2>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center w-full">
          {/* Text Section */}
          <div className="md:w-[80%] w-full text-lg leading-relaxed text-justify px-4">
            <p>
              Technovenza is the epitome of innovation and collaboration,
              designed to foster creativity, ignite ideas, and push the
              boundaries of technology. With a focus on modern advancements, it
              stands as a beacon for tech enthusiasts, paving the way for a
              future driven by knowledge and passion.
            </p>
            <p className="mt-4">
              Join us in this journey where vision meets reality, and together,
              we shape the technology of tomorrow. Technovenza is not just an
              event; it's an experience that leaves a lasting impression.
            </p>
          </div>

          {/* Animation Section */}
          <div className="md:w-1/2 w-full flex justify-center mt-8 md:mt-0">
            <div className="relative loop cubes">
              <div className="item cubes"></div>
              <div className="item cubes"></div>
              <div className="item cubes"></div>
              <div className="item cubes"></div>
              <div className="item cubes"></div>
              <div className="item cubes"></div>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-t-2 border-gray-400 w-3/4 mx-auto my-10" />
    </div>
  );
};

export default NewAbout;
