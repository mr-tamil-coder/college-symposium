import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCalendarDays,
  faPhone,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="bg-black md:flex md:justify-between md:items-center fixed inset-x-0 bottom-0 md:top-0 md:bottom-auto z-10 w-full h-20 bg-gradient-to-r  via-gray-800 to-gray-900 text-white border-t md:border-b border-gray-600 shadow-lg">
        <div className="logo hidden md:block ml-4">
          <h2 className="text-2xl font-bold tracking-wide text-black">
            MyLogo
          </h2>
        </div>
        <div className="grid h-full max-w-lg grid-cols-4 mx-auto md:mx-0 md:justify-end font-semibold bg-white text-black shadow-lg">
         <button
              type="button"
              className=""
            >
              <Link to="/" className="inline-flex flex-col items-center justify-center px-5 transition duration-300 hover:bg-gray-600 rounded-md ">
              <FontAwesomeIcon className="text-xl my-1 md:hidden" icon={faHouse} />
              <span className="text-sm ">Home</span>
              </Link>
            </button>
          <button
            type="button"
            
          >
           <Link to={"/about"} className="inline-flex flex-col items-center justify-center px-5 transition duration-300 hover:bg-gray-600 rounded-md ">
           <FontAwesomeIcon className="text-xl my-1 md:hidden" icon={faUser} />
           <span className="text-sm">About</span>
           </Link>
          </button>
          <button
            type="button"
            
          >
           <Link to={"/events"} className="inline-flex flex-col items-center justify-center px-5 transition duration-300 hover:bg-gray-600 rounded-md">
           <FontAwesomeIcon className="text-xl my-1 md:hidden" icon={faCalendarDays} />
           <span className="text-sm">Events</span>
           </Link>
          </button>

          <button
            type="button"
           
          >
            <Link to={"/contact"}  className="inline-flex flex-col items-center justify-center px-5 transition duration-300 hover:bg-gray-600 rounded-md">
            <FontAwesomeIcon className="text-xl my-1 md:hidden" icon={faPhone} />
            <span className="text-sm">Contact</span>
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
