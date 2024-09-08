import React from "react";
import Faq from "./Faq";
import About from "./About";
import CountdownTimer from "./CountDown";
import Footer from "./Footer";
import Highlight from "./Highlight";
import TeamCarousel from "./TeamCarousel";
const Body = () => {
  return (
    <div>
      {/* Symbosium name  */}
      <div className="symbo-name mb-4">
        <h1 className="text-3xl">Welcome to NCSE symbosium 2024</h1>
      </div>
      {/* symbosium will start */}

      <CountdownTimer />
      {/* <Highlight /> */}

      {/* Click Event */}
      <div>
        <button>Click Here</button>
      </div>

      {/* Event Details */}
      <div>
        <div className="college">
          <p>Jerusalem College</p>
          <p>Address</p>
        </div>
        <div className="timing">
          <p>Timing</p>
          <p>Time</p>
        </div>
        <div className="food">
          <p>Food</p>
        </div>
      </div>
      <TeamCarousel />
      <Faq />
      <Footer />
    </div>
  );
};

export default Body;
