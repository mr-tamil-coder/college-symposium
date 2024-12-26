import React from "react";

const Teams = () => {
  return (
    <footer className="bg-custom-gradient text-white px-36 py-4">
      <div className="container mx-auto flex justify-between items-center space-x-4">
        {/* Left Section */}
        <div className="text-sm">
          &copy; {new Date().getFullYear()} Technovanza<sup>TM</sup> All rights reserved.
        </div>

        {/* Center Section */}
        <div className="text-sm">
          Powered by <span className="font-bold">React JS</span>
        </div>

        {/* Right Section */}
        <div className="text-sm">
          Developed by <span className="font-bold">Technovanza Team</span>
        </div>
      </div>
    </footer>
  );
};  

export default Teams;
