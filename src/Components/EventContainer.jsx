import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import VanillaTilt from "vanilla-tilt";
import eventPoster from "../assets/symposium/NewEventPoster.jpg";
import EventButton from "./EventButton";

const EventContainer = () => {
  const imgRef = useRef(null);

  useEffect(() => {
    if (imgRef.current) {
      VanillaTilt.init(imgRef.current, {
        max: 3, // Maximum tilt rotation (degrees)
        speed: 10, // Speed of the enter/exit transition
        glare: false, // Disable glare effect
      });
    }
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      {/* Event Poster */}
      <div className="flex justify-center mt-11 mb-20 w-full px-5 sm:px-10">
        <img
          ref={imgRef}
          src={eventPoster}
          alt="Event Poster"
          className="max-w-full h-auto sm:max-w-[80%] md:max-w-[60%] lg:max-w-[50%] rounded-lg shadow-lg"
        />
      </div>

      {/* Buttons Section */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-5 sm:gap-10 px-5 pb-10 animate__animated animate__fadeInUp">
        <Link to="/events/non-circuit">
          <EventButton label="Track I" />
        </Link>
        <Link to="/events/circuit">
          <EventButton label="Track II" />
        </Link>
      </div>
    </div>
  );
};

export default EventContainer;
