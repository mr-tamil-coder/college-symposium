import React from "react";
import Faq from "./Faq";
import CountdownTimer from "./CountDown";
import Footer from "./Footer"
const Body = () => {
  return (
    <div>
      {/* Symbosium name  */}
      <div className="symbo-name">
        <h2>Symbosium</h2>
      </div>
      {/* symbosium will start */}
      
      <CountdownTimer />

      {/* About cse dept */}
      <div>
        <img src="" alt="about cse image" />
        <h2>About CSE</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          alias totam fugiat reprehenderit nam. Rerum quod numquam ex earum
          itaque maiores a nobis vel? Modi veritatis harum ducimus aliquid?
          Modi.
        </p>
      </div>

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
      {/* Team Members */}
      <div>
        <div className="card1">
          <h3>name</h3>
          <p>position</p>
          <div className="linkedin"></div>
        </div>
        <div className="card2">
          <h3>name</h3>
          <p>position</p>
          <div className="linkedin"></div>
        </div>
        <div className="card3">
          <h3>name</h3>
          <p>position</p>
          <div className="linkedin"></div>
        </div>
      </div>
      <div className="">
        <Faq />
      </div>
      <Footer />
    </div>
  );
};

export default Body;
