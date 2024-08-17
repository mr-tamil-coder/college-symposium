import React from "react";
import { techEventsData } from "../utils/techEvents";

const TechEvent = () => {
  console.log(techEventsData);

  return (
    <div>
      {techEventsData.map((techEvent) => (
        <div key={techEvent.id} className="mx-5 my-7">
          <div className="flex justify-center items-center flex-col border-4 border-red-700">
            <div className="p-5">
              <img src={techEvent.image} alt={techEvent.name} />
            </div>
            <hr />
            <div className="">
              <h1 className="text-3xl border-4 px-3">{techEvent.name}</h1>
              <p>{techEvent.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechEvent;
