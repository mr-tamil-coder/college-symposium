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
    <div>
      <div className="flex justify-center mt-11 mb-20 ">
        <img
          src={eventPoster}
          className="lg:h-[460px] sm:m-3"
          alt="Event Poster"
        />
      </div>
      <div className="lg:gap-10 gap-5  flex flex-col  lg:pb-20 sm:flex-row justify-center items-center animate__animated animate__fadeInUp">
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
