import React from "react";
import EventCard from "./EventCard";
import { events } from "../utils/events";
import { Link } from "react-router-dom";
const EventContainer = () => {
  console.log(events);
  const { name, image } = events[0];
  return (
    <div>
      <div className="event-header bg-slate-600 ">
        <h3>Events</h3>
        {events.map((eventData) => (
          <Link to={eventData.name=="Technical"?"/events/tech":"/events/non-tech"}>
            <div
              key={eventData.id}
              className=" event-container border-4 m-3 border-red-600 "
            >
              <h3 className="text-center">{eventData.name}</h3>
              <hr />
              <div className="p-3 flex justify-center items-center">
                <img src={eventData.image} alt="" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EventContainer;
