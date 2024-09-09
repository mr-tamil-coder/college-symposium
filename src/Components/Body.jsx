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
   

      {/* symbosium will start */}

      <CountdownTimer />
      {/* <Highlight /> */}
      <About />
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
