import React from "react";
import NeonButton from "./NeonButton";
import { Link } from "react-router-dom";

const EventContainer = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center px-4">
      {/* Buttons Container */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-5 w-full max-w-xl">
        {/* Track I Button */}
        <Link to="/events/non-circuit">
          <NeonButton label="Track I" tooltip={"AIDS/AIML/CS/CSE/CSBS/IT"} />
        </Link>
        {/* Track II Button */}
        <Link to="/events/circuit">
          <NeonButton label="Track II" tooltip={"BME/CE/ECE/EEE/MBA"} />
        </Link>
      </div>
    </div>
  );
};

export default EventContainer;
