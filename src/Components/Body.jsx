import React, { useState, useEffect } from "react";
import CollegeName from "./CollegeName"
import Loading from "./Loading"; // Import the loader
import Faq from "./Faq";
import NewAbout from "./NewAbout";
import CountdownTimer from "./CountDown";
import Footer from "./Footer";
import Highlight from "./Highlight";
import TeamCarousel from "./TeamCarousel";
import InfoSections from "./InfoSections";
import HomeEventDetails from "./HomeEventDetails";
import NeonButton from "./NeonButton";
import EventCardDesign from "./EventCardDesign";

const Body = () => {
  const [loading, setLoading] = useState(true);  // State to control loader visibility

  useEffect(() => {
    // Set loader timeout to 2 seconds
    const timer = setTimeout(() => {
      setLoading(false);  // Hide loader after 2 seconds
    }, 2500);
    
    // Cleanup timeout if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />; // Display loader while loading is true
  }

  return (
    <div>
      <CollegeName/>
      <div className="flex flex-wrap justify-center gap-5 my-5">
        <NeonButton label="CIRCUIT" onClick={() => alert("Circuit clicked")} />
        <NeonButton label="CSE/IT" onClick={() => alert("Non Circuit clicked")} />
      </div>
      <CountdownTimer />
      <NewAbout />
      <HomeEventDetails />
      <InfoSections />
      <TeamCarousel />
      <Faq />
      <Footer />
    </div>
  );
};

export default Body;
