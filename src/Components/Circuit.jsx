import React from "react";
import { events } from "../utils/events";
import { Link } from "react-router-dom";
import RandomEvents from "./RandomEvents";
import randomColor from "randomcolor";
import "../text.css";
import CircuitnTech from "./CircuitnTech";
import CircuitTec from "./CircuitTec";

const Circuit = () => {
  var color = randomColor();

  const randomEventName = RandomEvents("EVENTS");
  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* <h3
        className="text-3xl md:text-4xl font-bold text-center mb-8 text-white uppercase event-text tracking-widest "
        style={{
          textShadow: `2px 2px 15px ${color}`,
        }}
      >
        {randomEventName}
      </h3> */}
      <CircuitTec/>
      <CircuitnTech />
      {/* <div className="event-header grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((eventData) => (
          <Link
            to={
              eventData.name === "Technical"
                ? "/events/circuit-tech"
                : "/events/circuit-non-tech"
            }
            key={eventData.id}
            className="group"
          >
            <div className="event-container  border border-gray-200 rounded-lg shadow-md overflow-hidden transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
              <div className="p-5">
                <h3 className="text-2xl font-semibold text-white text-center  group-hover:text-blue-500">
                  {eventData.name}
                </h3>
                <hr className="my-4" />
                <div className="flex justify-center items-center">
                  <img
                    src={eventData.image}
                    alt={eventData.name}
                    className="w-full h-64 object-cover rounded-md"
                  />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div> */}
    </div>
  );
};

export default Circuit;
