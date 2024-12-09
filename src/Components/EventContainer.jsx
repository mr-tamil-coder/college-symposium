import React from "react";
import Circuit from "./Circuit";
import NonCircuit from "./NonCircuit";
import NeonButton from "./NeonButton";
import { Link } from "react-router-dom";
import eventPoster from "../assets/symposium/eventPoster.jpg"
const EventContainer = () => {
  return (
    <div>
      <div className="flex justify-center mt-11 mb-20">
          <img src={eventPoster} alt="Event Poster" />
      </div>
      <div className="lg:gap-10 gap-5 flex flex-col sm:flex-row justify-center items-center animate__animated animate__fadeInUp">
        <Link to="/events/non-circuit">
          <NeonButton label="Track I" tooltip={"AIDS/AIML/CS/CSE/CSBS/IT"} className="bg-red-500" />
        </Link>
        <Link to="/events/circuit">
          <NeonButton label="Track II" tooltip={"BME/CE/ECE/EEE/MBA"} />
        </Link>
      </div>
    </div>
  );
};

export default EventContainer;
