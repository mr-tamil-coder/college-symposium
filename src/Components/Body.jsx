import React from "react";
import Faq from "./Faq";
import About from "./About";
import CountdownTimer from "./CountDown";
import Footer from "./Footer";
import Highlight from "./Highlight";
import TeamCarousel from "./TeamCarousel";
import InfoSections from "./InfoSections";
import HomeEventDetails from "./HomeEventDetails";
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

      {/*  Event Details to redirect event page */}
      <HomeEventDetails />

      {/* Event Details */}
      <InfoSections />
      <TeamCarousel />
      <Faq />
      <Footer />
    </div>
  );
};

export default Body;
