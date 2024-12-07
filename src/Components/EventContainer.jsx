import React from "react";
import Circuit from "./Circuit";
import NonCircuit from "./NonCircuit";
import NeonButton from "./NeonButton";
import { Link } from "react-router-dom";

const EventContainer = () => {
  return (
    <div>
      <div className="h-screen  flex flex-wrap justify-center  gap-5 my-5 animate__animated animate__fadeInUp">
        <Link to="/events/non-circuit">
          <NeonButton label="Track I" tooltip={"AIDS/AIML/CS/CSE/CSBS/IT"} />
        </Link>
        <Link to="/events/circuit">
          <NeonButton label="Track II" tooltip={"BME/CE/ECE/EEE/MBA"} />
        </Link>
      </div>
    </div>
  );
};

export default EventContainer;
